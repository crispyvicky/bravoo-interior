/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // Crucial for using existing <img> tags without errors
    },
};

module.exports = nextConfig;
