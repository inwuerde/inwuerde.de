import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");
const templatePath = path.join(distDir, "index.html");
const serverEntryPath = path.join(
  distDir,
  "server",
  "entry-server.js"
);

async function prerender() {
  const template = await fs.readFile(templatePath, "utf8");

  const serverModule = await import(
    pathToFileURL(serverEntryPath).href
  );

  const appHtml = serverModule.render();

  const finalHtml = template.replace(
    "<!--app-html-->",
    appHtml
  );

  await fs.writeFile(templatePath, finalHtml, "utf8");

  console.log("✓ React-App wurde nach dist/index.html gerendert");
}

prerender().catch((error) => {
  console.error("Prerendering fehlgeschlagen:");
  console.error(error);
  process.exit(1);
});
