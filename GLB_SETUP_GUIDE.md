# 🌳 GLB 3D Model Setup Guide

## 📁 **Step 1: Add Your GLB File**

1. **Copy your GLB file** to the following location:
   ```
   assets/models/tree.glb
   ```

2. **File Requirements:**
   - Format: `.glb` (GLTF Binary)
   - Size: Keep under 50MB for mobile performance
   - Optimization: Use tools like Blender to optimize the model

## 🔧 **Step 2: Model Optimization Tips**

### **In Blender:**
1. **Reduce Polygons:**
   - Use Decimate modifier
   - Target: 10,000-50,000 triangles for mobile

2. **Optimize Textures:**
   - Use compressed textures (DXT, ETC2)
   - Resize to power-of-2 dimensions (512x512, 1024x1024)

3. **Export Settings:**
   - Format: GLTF 2.0
   - Include: Materials, Textures, Animations (if any)
   - Compression: Draco (optional, for smaller files)

## 🎯 **Step 3: Model Naming Convention**

For best results, name your 3D objects in the GLB file with these names:
- `trunk` or `stem` - for the main trunk
- `leaf` or `leaves` - for foliage
- `fruit` or `apple` - for fruits
- `branch` - for branches
- `root` - for roots

## 🚀 **Step 4: Test Your Model**

1. **Start the development server:**
   ```bash
   npx expo start
   ```

2. **Test on device:**
   - The 3D model will load automatically
   - Tap on different parts to see information
   - Use pinch/zoom and rotate gestures

## 🐛 **Troubleshooting**

### **Model Not Loading:**
- Check file path: `assets/models/tree.glb`
- Verify file size (should be < 50MB)
- Check console for error messages

### **Performance Issues:**
- Reduce polygon count
- Compress textures
- Remove unnecessary animations

### **Touch Detection Issues:**
- Ensure object names match tree part labels
- Check if objects have proper geometry

## 📱 **Platform Support**

- ✅ **iOS**: Full 3D support with WebGL
- ✅ **Android**: Full 3D support with WebGL
- ❌ **Web**: Falls back to 2D image viewer

## 🎨 **Customization**

You can modify the 3D viewer in:
- `components/TreeViewer3D/TreeViewer3D.tsx`
- Adjust lighting, camera position, animations
- Add custom materials and effects

## 📊 **Performance Tips**

1. **Model Size**: Keep under 50MB
2. **Polygon Count**: 10K-50K triangles
3. **Texture Resolution**: 512x512 or 1024x1024
4. **Animation**: Keep simple or disable for better performance

## 🔄 **Switching Between 2D and 3D**

The app automatically detects the platform:
- **Mobile**: Uses 3D GLB model
- **Web**: Uses 2D image viewer
- **Manual Toggle**: Available in the 3D viewer

## 📝 **Next Steps**

1. Add your GLB file to `assets/models/tree.glb`
2. Test the app with `npx expo start`
3. Build for production with `eas build`
4. Deploy to app stores

---

**Need Help?** Check the console logs for any error messages and ensure your GLB file is properly formatted and optimized for mobile devices.
