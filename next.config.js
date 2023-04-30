/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'image.tmdb.org','raw.githubusercontent.com']
  }
}

module.exports = nextConfig
