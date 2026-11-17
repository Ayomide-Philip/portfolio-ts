import fs from "fs";
import path from "path";

export const runtime = "nodejs";
export const alt = "Ayomide Philip | Fullstack & Systems Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/jpeg";

export default async function Image() {
  const imagePath = path.join(process.cwd(), "app", "opengraph.jpg");
  const publicPath = path.join(process.cwd(), "public", "opengraph.jpg");

  try {
    if (fs.existsSync(imagePath) && !fs.existsSync(publicPath)) {
      fs.copyFileSync(imagePath, publicPath);
    }
  } catch {
    // Non-blocking sync
  }

  const imageBuffer = fs.readFileSync(imagePath);

  return new Response(imageBuffer, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
