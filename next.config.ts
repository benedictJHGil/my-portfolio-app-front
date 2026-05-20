import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        unoptimized: true,
    },
    async redirects() {
        return [
            {
                source: '/portfolio/home',
                destination: '/',
                permanent: true,
            },
            {
                source: '/portfolio/main',
                destination: '/portfolio',
                permanent: true,
            },
            {
                source: '/portfolio/about',
                destination: '/about', 
                permanent: true,
            },
            {
                source: '/',
                destination: '/portfolio', 
                permanent: false,
            },
        ]
    }
};

export default nextConfig;
