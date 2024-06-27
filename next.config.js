/**
 * @type {import('next').NextConfig}
 */
const prefix =
  process.env.NODE_ENV === "production" ? "https://kimdust.me/next-blog/" : "";

const nextConfig = {
  output: "export",
  assetPrefix: prefix,
};

module.exports = nextConfig;
