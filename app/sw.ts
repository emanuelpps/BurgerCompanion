import {
  Serwist,
  StaleWhileRevalidate,
  ExpirationPlugin,
  type RuntimeCaching,
  type PrecacheEntry,
  type SerwistGlobalConfig,
} from "serwist";
import { defaultCache } from "@serwist/next/worker";

type MatcherOptions = {
  request: Request;
  url: URL;
  sameOrigin: boolean;
};

declare global {
  interface ServiceWorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

const runtimeCaching: RuntimeCaching[] = [
  // RSC prefetch
  {
    matcher: (options: MatcherOptions) => {
      const { request, url, sameOrigin } = options;

      return (
        sameOrigin &&
        !url.pathname.startsWith("/api/") &&
        request.headers.get("RSC") === "1" &&
        request.headers.get("Next-Router-Prefetch") === "1"
      );
    },
    handler: new StaleWhileRevalidate({
      cacheName: "rsc-prefetch",
      plugins: [
        new ExpirationPlugin({
          maxEntries: 200,
          maxAgeSeconds: 24 * 60 * 60,
        }),
      ],
    }),
  },

  // RSC data
  {
    matcher: (options: MatcherOptions) => {
      const { request, url, sameOrigin } = options;

      return (
        sameOrigin &&
        !url.pathname.startsWith("/api/") &&
        request.headers.get("RSC") === "1"
      );
    },
    handler: new StaleWhileRevalidate({
      cacheName: "rsc-data",
      plugins: [
        new ExpirationPlugin({
          maxEntries: 200,
          maxAgeSeconds: 24 * 60 * 60,
        }),
      ],
    }),
  },

  // HTML pages
  {
    matcher: (options: MatcherOptions) => {
      const { request, url, sameOrigin } = options;

      return (
        sameOrigin &&
        !url.pathname.startsWith("/api/") &&
        request.destination === "document"
      );
    },
    handler: new StaleWhileRevalidate({
      cacheName: "pages",
      plugins: [
        new ExpirationPlugin({
          maxEntries: 100,
          maxAgeSeconds: 24 * 60 * 60,
        }),
      ],
    }),
  },
];

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: [...runtimeCaching, ...defaultCache],
  fallbacks: {
    entries: [
      {
        url: "/offline",
        matcher(param) {
          return param.request.destination === "document";
        },
      },
    ],
  },
});

serwist.addEventListeners();
