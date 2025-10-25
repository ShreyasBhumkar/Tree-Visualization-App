import { Asset } from 'expo-asset';

export const loadGLBModel = async (uri: string) => {
  try {
    // Load the asset
    const asset = Asset.fromURI(uri);
    await asset.downloadAsync();
    
    // Return the local URI
    return asset.localUri || asset.uri;
  } catch (error) {
    console.error('Error loading GLB model:', error);
    throw error;
  }
};

export const getGLBModelPath = (modelName: string) => {
  // For development, we'll use the bundled asset
  return `/assets/models/${modelName}`;
};
