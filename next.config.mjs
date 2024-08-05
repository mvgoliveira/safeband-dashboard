/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: "avatars.githubusercontent.com" },
            { hostname: "i.ibb.co" },
            { hostname: "xsgames.co" },
        ],
    },
};

export default nextConfig;
