/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fakestoreapi.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'fakestoreapi.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'fakestoreapi.com',
                port: '',
            },
        ],
    },
};

export default nextConfig;
