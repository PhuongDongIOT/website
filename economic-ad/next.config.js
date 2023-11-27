const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development'
})

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


// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//     enabled: process.env.ANALYZE === "true",
// });

// module.exports = withBundleAnalyzer(withPWA(nextConfig));
module.exports = withPWA(nextConfig);
