const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add support for 3D model files
config.resolver.assetExts.push('glb', 'gltf');

module.exports = config;
