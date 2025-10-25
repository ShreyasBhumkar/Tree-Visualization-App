# Tree Images Setup Guide

## 📁 Image Requirements

To use your own JPG/PNG tree images, please follow these guidelines:

### **Image Specifications**
- **Format**: JPG or PNG
- **Recommended Size**: 300x400 pixels (or similar aspect ratio)
- **Quality**: High resolution for clear detail
- **File Names**: Must match exactly as shown below

### **Required Images**
Place your images in the `assets/images/trees/` folder with these exact names:

1. **`apple-tree.jpg`** - Apple tree image
2. **`oak-tree.jpg`** - Oak tree image  
3. **`pine-tree.jpg`** - Pine tree image

### **Image Content Guidelines**

#### **Apple Tree Image**
- Should show: apples (fruits), leaves, trunk, branches, flowers
- Clickable areas will be mapped to:
  - **Fruits**: Top area of the tree (apples)
  - **Leaves**: Green canopy area
  - **Trunk**: Central brown trunk
  - **Roots**: Bottom area (ground level)
  - **Flowers**: Small pink/white flowers

#### **Oak Tree Image**
- Should show: lobed leaves, acorns, thick trunk, bark texture
- Clickable areas will be mapped to:
  - **Leaves**: Lobed green leaves
  - **Acorns**: Small brown nuts
  - **Bark**: Trunk with textured bark
  - **Roots**: Bottom area

#### **Pine Tree Image**
- Should show: needle-like leaves, pine cones, triangular shape
- Clickable areas will be mapped to:
  - **Needles**: Green needle areas
  - **Cones**: Brown pine cones
  - **Bark**: Trunk area
  - **Roots**: Bottom area

## 🔧 How to Add Your Images

1. **Replace Placeholder Files**:
   - Delete the current placeholder files in `assets/images/trees/`
   - Add your JPG/PNG images with the exact names listed above

2. **Test the App**:
   - Run `npx expo start` to test your images
   - The app will automatically detect and use your images
   - If images fail to load, a fallback interface will appear

3. **Adjust Click Areas** (if needed):
   - If your images have different layouts, you may need to adjust the `clickArea` coordinates in `data/treeData.ts`
   - Each part has coordinates: `{ x, y, width, height }`

## 🎯 Click Area Mapping

The current click areas are optimized for 300x400 pixel images:

```typescript
// Example for Apple Tree
clickArea: {
  x: 110,    // Left position
  y: 150,    // Top position  
  width: 80, // Width of clickable area
  height: 50 // Height of clickable area
}
```

## 🚀 Features

- **Automatic Scaling**: Images scale to fit different screen sizes
- **Error Handling**: Fallback interface if images fail to load
- **Touch Detection**: Precise click detection on tree parts
- **Visual Feedback**: Hover and selection effects
- **Responsive Design**: Works on all device sizes

## 📱 Testing

1. **Image Loading**: Check that all tree images load correctly
2. **Click Detection**: Tap on different parts of each tree
3. **Information Display**: Verify that part information appears
4. **Responsive Design**: Test on different screen sizes

Your tree images will make the app much more engaging and educational!
