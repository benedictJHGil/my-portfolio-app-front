import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        unoptimized: true,
    },
    async redirects() {
        return [
            {
                source: "/", // 리다이렉션을 시작할 경로
                destination: "/portfolio/main", // 리다이렉션될 경로
                permanent: true,
            }
        ]
    }
};

export default nextConfig;
