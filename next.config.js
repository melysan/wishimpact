/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // compiler: {
  //   styledComponents: true
  // },
  images: {
    domains: ["static.wikia.nocookie.net"]
  }
}

module.exports = nextConfig
