/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'dist',
    images: {
        unoptimized: true, // Crucial for using existing <img> tags without errors
    },
};

module.exports = nextConfig;
