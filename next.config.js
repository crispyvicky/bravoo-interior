/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true, // Crucial for using existing <img> tags without errors
    },
};

module.exports = nextConfig;
