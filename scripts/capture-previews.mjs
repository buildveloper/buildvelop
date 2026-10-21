import { mkdir, rename, rm, stat } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const targets = [
  { slug: "lumenforge", name: "LumenForge", url: "https://lumenforge-six.vercel.app/" },
  { slug: "vibeops", name: "VibeOps", url: "https://vibeops-two.vercel.app/" },
  {
    slug: "vibe-content-studio",
    name: "Vibe Content Studio",
    url: "https://vibe-content-studio.vercel.app/",
  },
  { slug: "credmail", name: "CredMail", url: "https://credmail.com", settle: 4000 },
  { slug: "ashevillere", name: "AshevilleRE", url: "https://ashevillere.com" },
  {
    slug: "cole-family",
    name: "Cole Family's Junk Removal",
    url: "https://cole-family-junk-removal.vercel.app/",
  },
  { slug: "electricore", name: "ElectriCore", url: "https://electricore.vercel.app/" },
  { slug: "zp-outdoors", name: "ZP Outdoor Solutions", url: "https://zpoutdoors.vercel.app/" },
  {
    slug: "down-south-pw",
    name: "Down South Pressure Washing",
    url: "https://down-south-pw.vercel.app/",
  },
  { slug: "nt-junk-haulers", name: "N&T Junk Haulers", url: "https://ntjunkhaulers.vercel.app/" },
  { slug: "rjr-junk", name: "RJR Junk Solutions", url: "https://rjrjunk.vercel.app/" },
  {
    slug: "verilaunch",
    name: "VeriLaunch",
    url: "https://stealth-launch-phi.vercel.app/",
  },
  { slug: "luxastay", name: "The Luxastay Group", url: "https://luxastay-group.vercel.app/" },
];

function argument(name, fallback) {
  const prefix = `--${name}=`;
  const found = process.argv.slice(2).find((value) => value.startsWith(prefix));
  return found ? found.slice(prefix.length) : fallback;
}

const only = argument("only", "")
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean);
const timeout = Number(argument("timeout", "45000"));
const concurrency = Math.max(1, Number(argument("concurrency", "3")));
const settle = Number(argument("settle", "4000"));
const selected = only.length ? targets.filter((target) => only.includes(target.slug)) : targets;

const outputDir = path.join(process.cwd(), "public", "previews");
await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
  deviceScaleFactor: 1,
  reducedMotion: "reduce",
  colorScheme: "light",
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
});

let completed = 0;
let failed = 0;

async function capture(target) {
  const page = await context.newPage();
  const destination = path.join(outputDir, `${target.slug}.jpg`);
  const temporary = path.join(outputDir, `${target.slug}.tmp.jpg`);

  try {
    await page.goto(target.url, { waitUntil: "commit", timeout });
    await page.waitForTimeout(target.settle ?? settle);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(350);

    const height = await page.evaluate(() => {
      const body = document.body.scrollHeight;
      const root = document.documentElement.scrollHeight;
      return Math.max(body, root, 1000);
    });
    const clipHeight = Math.min(Math.max(height, 1000), 3200);

    await page.screenshot({
      path: temporary,
      type: "jpeg",
      quality: 72,
      clip: { x: 0, y: 0, width: 1440, height: clipHeight },
    });

    const file = await stat(temporary);
    if (file.size < 20000) throw new Error(`capture too small (${file.size} bytes)`);

    await rename(temporary, destination);
    completed += 1;
    console.log(`✓ ${target.name} (${Math.round(file.size / 1024)} KB, ${clipHeight}px tall)`);
  } catch (error) {
    failed += 1;
    await rm(temporary, { force: true });
    console.warn(`✗ ${target.name}: ${error.message}`);
  } finally {
    await page.close();
  }
}

async function run() {
  const queue = [...selected];
  const workers = Array.from({ length: concurrency }, async () => {
    while (queue.length) {
      const target = queue.shift();
      if (target) await capture(target);
    }
  });
  await Promise.all(workers);
}

try {
  await run();
} finally {
  await context.close();
  await browser.close();
}

console.log(`\n${completed} captured, ${failed} failed.`);
console.log(`Saved to ${outputDir}`);
if (failed > 0) {
  console.log("Missing captures will use the branded gradient fallback in the UI.");
}
