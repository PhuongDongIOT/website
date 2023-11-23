/** @type {import('next').NextConfig} */
const { i18n } = require('./i18n.config')

const nextConfig = {
    runtime: 'experimental-edge',
    distDir: 'build',
    typescript: {
        ignoreBuildErrors: true,
    },
    i18n,
}

module.exports = nextConfig
