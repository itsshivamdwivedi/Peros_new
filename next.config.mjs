// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ['@svgr/webpack'],
  //   });
  //   return config;
  // },
  images: {
    domains: ['pintola.in'], // Add the domain here
  },
};




// next.config.js

export default nextConfig;
