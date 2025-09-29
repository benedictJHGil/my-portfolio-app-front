import type { NextConfig } from "next";

const nextConfig: NextConfig = {

    async redirects() {
        return [
            {
                source: "/", // 리다이렉션을 시작할 경로
                destination: "/portfolio/home", // 리다이렉션될 경로
                permanent: true,
            }
        ]
    }
};

export default nextConfig;
