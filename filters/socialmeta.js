const SITE_ORIGIN = "https://inwuerde.de";
const DEFAULT_OG_IMAGE = "/assets/images/logo-iws.png";
const DESCRIPTION_MAX = 160;
const DESCRIPTION_MIN_BOUNDARY = 155;

function decodeEntities(text) {
  return String(text)
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) =>
      String.fromCodePoint(parseInt(hex, 16))
    )
    .replace(/&#(\d+);/g, (_, dec) =>
      String.fromCodePoint(parseInt(dec, 10))
    );
}

function escapeAttr(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function absoluteUrl(path, pageUrl = "/", origin = SITE_ORIGIN) {
  if (!path) return "";
  const value = decodeEntities(String(path).trim());
  if (/^https?:\/\//i.test(value)) return value;
  if (value.startsWith("//")) return `https:${value}`;
  const base = String(origin || SITE_ORIGIN).replace(/\/$/, "");
  if (value.startsWith("/")) return `${base}${value}`;
  try {
    return new URL(value, `${base}${pageUrl || "/"}`).href;
  } catch {
    return `${base}/${value.replace(/^\.\//, "")}`;
  }
}

function postBody(content) {
  const html = String(content || "");
  const article = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/i);
  if (article) return article[1];
  return html
    .replace(/<nav\b[^>]*>[\s\S]*?<\/nav>/gi, " ")
    .replace(/<header\b[^>]*>[\s\S]*?<\/header>/gi, " ")
    .replace(/<footer\b[^>]*>[\s\S]*?<\/footer>/gi, " ");
}

function extractHtmlImage(html) {
  const match = String(html || "").match(
    /<img\b[^>]*?\bsrc\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s>]+))/i
  );
  return match ? match[1] || match[2] || match[3] : null;
}

function extractMarkdownImage(markdown) {
  const match = String(markdown || "").match(
    /!\[[^\]]*]\(\s*<?([^)\s>]+)>?(?:\s+["'][^"']*["'])?\s*\)/
  );
  return match ? match[1] : null;
}

function firstPostImage(content, frontmatterImage, pageUrl) {
  const fromContent =
    extractHtmlImage(postBody(content)) || extractMarkdownImage(postBody(content));
  const fromFrontmatter =
    frontmatterImage && String(frontmatterImage).trim()
      ? String(frontmatterImage).trim()
      : null;
  return absoluteUrl(
    fromContent || fromFrontmatter || DEFAULT_OG_IMAGE,
    pageUrl
  );
}

function stripToPlainText(content) {
  let text = postBody(content);
  text = text.replace(/^#{1,6}[ \t]+.*$/gm, " ");
  text = text.replace(/<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/gi, " ");
  text = text.replace(/<img\b[^>]*>/gi, " ");
  text = text.replace(/!\[[^\]]*]\([^)]*\)/g, " ");
  text = text.replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, " ");
  text = text.replace(/<[^>]+>/g, " ");
  text = text.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1");
  text = text.replace(/[*_~`]+/g, "");
  text = decodeEntities(text);
  return text.replace(/\s+/g, " ").trim();
}

function truncateAtWord(
  text,
  max = DESCRIPTION_MAX,
  minBoundary = DESCRIPTION_MIN_BOUNDARY
) {
  if (!text) return "";
  if (text.length <= max) return text;
  const window = text.slice(0, max);
  const next = text[max] || "";
  const last = window[window.length - 1] || "";
  if (/\s/.test(next) || /[.,;:!?…]/.test(last)) {
    return `${window.trim()}…`;
  }
  let cut = -1;
  for (let i = window.length - 1; i >= minBoundary - 1; i -= 1) {
    if (/\s/.test(window[i]) || /[.,;:!?…]/.test(window[i])) {
      cut = /\s/.test(window[i]) ? i : i + 1;
      break;
    }
  }
  if (cut === -1) {
    cut = window.lastIndexOf(" ");
  }
  if (cut < 40) {
    return `${window.trim()}…`;
  }
  return `${window.slice(0, cut).trim()}…`;
}

function ogDescription(content, frontmatterDescription) {
  const provided =
    frontmatterDescription && String(frontmatterDescription).trim();
  const text = provided || stripToPlainText(content);
  return truncateAtWord(text);
}

module.exports = {
  SITE_ORIGIN,
  DEFAULT_OG_IMAGE,
  absoluteUrl,
  firstPostImage,
  ogDescription,
  escapeAttr,
  postBody,
  stripToPlainText,
  truncateAtWord,
};
