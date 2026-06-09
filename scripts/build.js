import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import chalk from "chalk";
import { format } from "date-fns";

const POSTS_DIR = "./posts";
const DIST_DIR = "./dist";

/* clean up old distribution */
fs.rmSync(DIST_DIR, { recursive: true, force: true });
fs.mkdirSync(DIST_DIR, { recursive: true });

const REQUIRED_FIELDS = ["title", "date"];

function validateFrontMatter(file, data) {
  const missing = REQUIRED_FIELDS.filter((f) => !data[f]);

  if (missing.length > 0) {
    console.error(
      chalk.red(`❌ ${file} missing front matter fields:`),
      missing.join(", "),
    );
    process.exit(1);
  }
}

function applyTemplate(template, replacements) {
  let output = template;

  for (const key in replacements) {
    output = output.replaceAll(`{{${key}}}`, replacements[key]);
  }

  return output;
}

/* Create a page for each blog post */
const posts = [];

for (const file of fs.readdirSync(POSTS_DIR)) {
  if (!file.endsWith(".md") || file.startsWith("_")) continue;

  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data, content } = matter(raw);

  validateFrontMatter(file, data);

  const html = marked(content);
  const slug = file.replace(".md", "");

  const template = fs.readFileSync("templates/post.html", "utf8");

  const tagsHtml =
    data.tags?.map((tag) => `<span class="tag">${tag}</span>`).join("") ?? "";

  const page = applyTemplate(template, {
    title: data.title,
    date: format(new Date(data.date), "yyyy-MM-dd"),
    summary: typeof data.summary === "string" ? data.summary : "",
    author: data.author ?? "",
    content: html,
    tags: tagsHtml,
  });

  fs.writeFileSync(`${DIST_DIR}/${slug}.html`, page);

  posts.push({ ...data, slug });
}

/* Create Blog Index */
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

const template = fs.readFileSync("templates/index.html", "utf8");

const postListItemTemplate = fs.readFileSync(
  "templates/postListItems.html",
  "utf8",
);

const postsHtml = posts
  .map((p) => {
    const thumbImg =
      typeof p.image === "string" && p.image.length > 0
        ? `<img class="post-card-thumb-img" src="assets/${p.image}" alt="" loading="lazy" decoding="async">`
        : "";

    const thumbClass =
      p.imageThumb === "contain-bottom" ? " post-card-thumb--contain-bottom" : "";

    return applyTemplate(postListItemTemplate, {
      slug: p.slug,
      title: p.title,
      date: format(new Date(p.date), "yyyy-MM-dd"),
      thumbImg,
      thumbClass,
    });
  })
  .join("");

const index = applyTemplate(template, {
  postList: postsHtml,
});

fs.writeFileSync(`${DIST_DIR}/index.html`, index);

// Simple Node.js built-in method:
fs.cpSync("assets", `${DIST_DIR}/assets`, { recursive: true });
const photosDir = "templates/photos";
if (fs.existsSync(photosDir)) {
  fs.cpSync(photosDir, `${DIST_DIR}/photos`, { recursive: true });
}

console.log(chalk.green("✔ Build complete"));
