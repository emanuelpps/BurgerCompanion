import withSerwistInit from "@serwist/next";
import { execSync } from "child_process";

const revision = execSync("git rev-parse HEAD", { encoding: "utf8" })
  .trim()
  .slice(0, 7);

const withSerwist = withSerwistInit({
  cacheOnNavigation: true,
  reloadOnOnline: false,

  swSrc: "app/sw.ts",
  swDest: "public/sw.js",

  // ✅ correcto
  disable: process.env.NODE_ENV !== "production",

  additionalPrecacheEntries: [
    { url: "/", revision },
    { url: "/offline", revision },
  ],
});

export default withSerwist({
  async headers() {
    return [
      {
        source: "/sw.js",
        headers: [
          {
            key: "Content-Type",
            value: "application/javascript; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
        ],
      },
    ];
  },
});
