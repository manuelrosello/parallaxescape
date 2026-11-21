/** @type {import('next').NextConfig} */
const nextConfig = {
  // Import .svg files as React components
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  reactStrictMode: false,
};

export default nextConfig;
