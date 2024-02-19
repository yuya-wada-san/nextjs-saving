/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nextjs-saving.vercel.app",
      },{
        protocol: "https",
        hostname: "lh3.googleusercontent.com"
      }
    ],
  },
}

module.exports = nextConfig
