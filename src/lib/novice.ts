import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const noviceDirectory = path.join(process.cwd(), "content/novice");

export interface NovicaData {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  contentHtml?: string;
}

export function getAllNovice(): NovicaData[] {
  if (!fs.existsSync(noviceDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(noviceDirectory);
  const allNovice = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(noviceDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || "",
        date: data.date || "",
        excerpt: data.excerpt || "",
        image: data.image || undefined,
      };
    });

  return allNovice.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getNovicaBySlug(
  slug: string
): Promise<NovicaData | null> {
  try {
    const fullPath = path.join(noviceDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(html, { allowDangerousHtml: true }).process(content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: data.title || "",
      date: data.date || "",
      excerpt: data.excerpt || "",
      image: data.image || undefined,
      contentHtml,
    };
  } catch {
    return null;
  }
}

export function getAllNoviceSlugs(): string[] {
  if (!fs.existsSync(noviceDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(noviceDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""));
}
