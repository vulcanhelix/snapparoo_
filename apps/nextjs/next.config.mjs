// @ts-check
import "./src/env.mjs";
import "@snapparoo/auth/env.mjs";

import withMDX from "@next/mdx";

!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    "@snapparoo/api",
    "@snapparoo/auth",
    "@snapparoo/db",
    "@snapparoo/common",
    "@snapparoo/ui",
    "@snapparoo/stripe",
  ],
  pageExtensions: ["ts", "tsx", "mdx"],
  experimental: {
    mdxRs: true,
  },
  images: {
    domains: ["images.unsplash.com", "avatars.githubusercontent.com", "canva.com"],
  },
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  output: "standalone",
  // Disable all development features
  devIndicators: {
    buildActivity: false,
  },
  // Disable WebSocket connection attempts
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        'react-dom/client$': 'react-dom/profiling',
      });
    }
    return config;
  },
};

export default withMDX()(config);
