const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development'
})

/** @type {import('next').NextConfig} */
const { i18n } = require('./i18n.config')

const nextConfig = {
    webpack(config, { isServer, dev }) {
        // Use the client static directory in the server bundle and prod mode
        // Fixes `Error occurred prerendering page "/"`
        config.output.webassemblyModuleFilename =
          isServer && !dev
            ? '../static/wasm/[modulehash].wasm'
            : 'static/wasm/[modulehash].wasm'
    
        // Since Webpack 5 doesn't enable WebAssembly by default, we should do it manually
        config.experiments = { ...config.experiments, asyncWebAssembly: true }
    
        return config
    },
    runtime: 'experimental-edge',
    distDir: 'build',
    typescript: {
        ignoreBuildErrors: true,
    },
    removeConsole: false,
    swcMinify: true,
    transpilePackages: ['three'],
    i18n,
}


// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//     enabled: process.env.ANALYZE === "true",
// });

// module.exports = withBundleAnalyzer(withPWA(nextConfig));
module.exports = withPWA(nextConfig);
