/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        CLOUDINARY_URL: process.env.CLOUDINARY_URL,
        NEXT_CLOUDINARY_URL: process.env.NEXT_CLOUDINARY_URL,
        NEXT_PUBLIC_CLOUDINARY_URL: process.env.NEXT_PUBLIC_CLOUDINARY_URL,

        CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
        NEXT_CLOUDINARY_CLOUD_NAME: process.env.NEXT_CLOUDINARY_CLOUD_NAME,
        NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,

        CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
        NEXT_CLOUDINARY_API_KEY: process.env.NEXT_CLOUDINARY_API_KEY,
        NEXT_PUBLIC_CLOUDINARY_API_KEY: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,

        CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
        NEXT_CLOUDINARY_API_SECRET: process.env.NEXT_CLOUDINARY_API_SECRET,
        NEXT_PUBLIC_CLOUDINARY_API_SECRET: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,

        APIPATH: process.env.APIPATH,
        NEXT_APIPATH: process.env.NEXT_APIPATH,
        NEXT_PUBLIC_APIPATH: process.env.NEXT_APIPATH,
    },
}

module.exports = nextConfig
