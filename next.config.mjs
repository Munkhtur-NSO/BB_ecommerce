/** @type {import('next').NextConfig} */

const nextConfig = {
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    experimental: {
        optimizePackageImports: ["react-bootstrap"],
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
