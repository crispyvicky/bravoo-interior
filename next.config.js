/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Optional: for static export if needed, but standard is fine. Let's stick to standard first.
    // Actually, standard build is better unless they need static.
    // Converting 'output: export' might be safer for simple hosting if they used dist/ before.
    // But let's stick to standard 'next build' unless user specified static.
    // User didn't specify. I will use standard.
    images: {
        unoptimized: true, // Crucial for using existing <img> tags without errors
    },
};

module.exports = nextConfig;
