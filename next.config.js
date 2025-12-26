/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

const isProd = process.env.NODE_ENV === "production";
const assetHost = process.env.ASSET_HOST;

/** @type {import("next").NextConfig} */
const config = {
  // productionBrowserSourceMaps: true,
  // assetPrefix: "",
  assetPrefix: isProd ? "https://topview-tools.vercel.app/" : "",
  output: "standalone",
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Cache-Control", value: "max-age=1" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Cross-Origin-Resource-Policy", value: "*" },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "unsafe-none",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self' * blob: data: http: https:; style-src 'unsafe-inline' * blob: data: http: https:; script-src-elem 'unsafe-inline' * blob: data: http: https:; script-src 'unsafe-inline' 'unsafe-eval' * blob: data: http: https:; worker-src * blob: data: http: https:; font-src 'self' * blob: data: http: https:; img-src 'self' * blob: data: http: https:",
          },
        ],
      },
    ];
  },
  rewrites: async () => {
    return [
      {
        source: "/amp/:path*",
        destination: "http://localhost:3001/amp/:path*",
      },
      {
        source: "/privacy-policy",
        destination: "https://www.topview.ai/privacy-policy",
      },
      {
        source: "/cookie-policy",
        destination: "https://www.topview.ai/cookie-policy",
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default config;
