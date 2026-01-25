import fs from "fs";
import path from "path";
import matter from "gray-matter";

const meditationsDirectory = path.join(process.cwd(), "content/meditations");

export interface MeditationMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  type: "text" | "video";
}

export interface Meditation extends MeditationMeta {
  content: string;
}

export async function getAllMeditations(): Promise<MeditationMeta[]> {
  // Check if directory exists
  if (!fs.existsSync(meditationsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(meditationsDirectory);
  const mdxFiles = fileNames.filter(
    (fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md")
  );

  const meditations = mdxFiles.map((fileName) => {
    const slug = fileName.replace(/\.mdx?$/, "");
    const fullPath = path.join(meditationsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title || "Untitled",
      date: data.date || "",
      excerpt: data.excerpt || "",
      type: (data.type as "text" | "video") || "text",
    };
  });

  // Sort by date (newest first)
  return meditations.sort((a, b) => {
    if (a.date < b.date) return 1;
    if (a.date > b.date) return -1;
    return 0;
  });
}

export async function getMeditationBySlug(
  slug: string
): Promise<Meditation | null> {
  // Check if directory exists
  if (!fs.existsSync(meditationsDirectory)) {
    return null;
  }

  const mdxPath = path.join(meditationsDirectory, `${slug}.mdx`);
  const mdPath = path.join(meditationsDirectory, `${slug}.md`);

  let fullPath: string;
  if (fs.existsSync(mdxPath)) {
    fullPath = mdxPath;
  } else if (fs.existsSync(mdPath)) {
    fullPath = mdPath;
  } else {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || "Untitled",
    date: data.date || "",
    excerpt: data.excerpt || "",
    type: (data.type as "text" | "video") || "text",
    content,
  };
}

export async function getAllMeditationSlugs(): Promise<string[]> {
  // Check if directory exists
  if (!fs.existsSync(meditationsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(meditationsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.mdx?$/, ""));
}
