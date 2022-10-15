/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Define in which directory of the project eslint runs
  // (eslint runs internally by next lint)
  eslint: {
    dirs: [
      "pages",
      "views",
      "uiLayer.chakra",
      "utils",
      "constants",
      "components",
    ]
  }
};

module.exports = nextConfig;
