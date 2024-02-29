/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src']
  },
  images: {
    domains: ["avatars.githubusercontent.com"]
  }
};

export default nextConfig;