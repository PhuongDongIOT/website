/** @type {import('next').NextConfig} */
const nextConfig = {
    runtime: 'experimental-edge',
    distDir: 'build',
    typescript: {
        ignoreBuildErrors: true,
    },
}

module.exports = nextConfig
