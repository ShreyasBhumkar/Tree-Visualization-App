import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Fonts } from '../../constants/theme';
import { TreeModel, TreePart } from '../../types/tree';

interface ImageTreeViewerProps {
  treeData: TreeModel;
  onPartClick: (part: TreePart) => void;
  selectedPart?: TreePart | null;
}

const { width: screenWidth } = Dimensions.get('window');

export function ImageTreeViewer({ treeData, onPartClick, selectedPart }: ImageTreeViewerProps) {
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);

  // Calculate scale factors for responsive image with controlled dimensions
  const maxImageWidth = screenWidth - 30; // 15px margin on each side
  const maxImageHeight = 500; // Fixed maximum height
  const imageScale = Math.min(maxImageWidth / treeData.imageWidth, maxImageHeight / treeData.imageHeight, 1);
  const scaledImageWidth = treeData.imageWidth * imageScale;
  const scaledImageHeight = treeData.imageHeight * imageScale;

  const handleImageLoad = () => {
    // Image loaded successfully
  };

  const handleImageError = () => {
    console.warn('Failed to load tree image');
    setImageError(true);
  };

  const renderClickableOverlay = () => {
    return treeData.parts.map((part) => {
      const isSelected = selectedPart?.id === part.id;
      const isHovered = hoveredPart === part.id;
      
      // Scale the click areas to match the displayed image
      const scaleX = scaledImageWidth / treeData.imageWidth;
      const scaleY = scaledImageHeight / treeData.imageHeight;
      
      const scaledX = part.clickArea.x * scaleX;
      const scaledY = part.clickArea.y * scaleY;
      const scaledWidth = part.clickArea.width * scaleX;
      const scaledHeight = part.clickArea.height * scaleY;

      return (
        <TouchableOpacity
          key={part.id}
          style={[
            styles.clickableArea,
            {
              left: scaledX,
              top: scaledY,
              width: scaledWidth,
              height: scaledHeight,
              backgroundColor: 'transparent',
              borderColor: 'transparent',
              borderWidth: 0,
            }
          ]}
          onPress={() => onPartClick(part)}
          onPressIn={() => setHoveredPart(part.id)}
          onPressOut={() => setHoveredPart(null)}
          activeOpacity={0.8}
        >
          {(isSelected || isHovered) && (
            <View style={styles.partLabel}>
              <Text style={styles.partLabelText}>{part.name}</Text>
            </View>
          )}
        </TouchableOpacity>
      );
    });
  };

  // Fallback component when image fails to load
  const renderFallback = () => (
    <View style={styles.fallbackContainer}>
      <Text style={styles.fallbackText}>🌳</Text>
      <Text style={styles.fallbackTitle}>{treeData.name}</Text>
      <Text style={styles.fallbackSubtitle}>
        {treeData.parts.length} parts available
      </Text>
      <View style={styles.fallbackParts}>
        {treeData.parts.map((part) => (
          <TouchableOpacity
            key={part.id}
            style={[
              styles.fallbackPartButton,
              { backgroundColor: part.highlightColor },
              selectedPart?.id === part.id && styles.selectedFallbackPart
            ]}
            onPress={() => onPartClick(part)}
            activeOpacity={0.8}
          >
            <Text style={styles.fallbackPartText}>{part.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  if (imageError) {
    return (
      <View style={[styles.container, { backgroundColor: treeData.backgroundColor }]}>
        {renderFallback()}
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Tree Image Section */}
      <View style={styles.imageSection}>
        <View style={styles.imageContainer}>
          <Image
            source={treeData.imagePath as any}
            style={[
              styles.treeImage,
              {
                width: scaledImageWidth,
                height: scaledImageHeight,
              }
            ]}
            onLoad={handleImageLoad}
            onError={handleImageError}
            resizeMode="contain"
          />
          
          {/* Clickable overlay */}
          {renderClickableOverlay()}
        </View>
        {/* Instructions */}
        <View style={styles.instructions}>
          <Text style={styles.instructionsText}>
            Tap on any part of the tree to learn more!
          </Text>
        </View>
      </View>

      {/* Information Section - Full Page Scrollable */}
      {selectedPart && (
        <View style={styles.infoSection}>
          {/* Header */}
          <View style={styles.infoHeader}>
            <View style={[styles.colorIndicator, { backgroundColor: selectedPart.highlightColor }]} />
            <Text style={styles.infoTitle}>{selectedPart.name}</Text>
          </View>

          {/* Description */}
          <View style={styles.infoSectionContent}>
            <Text style={styles.infoSectionTitle}>Description</Text>
            <Text style={styles.infoDescription}>{selectedPart.description}</Text>
          </View>

          {/* Fun Fact */}
          <View style={styles.infoSectionContent}>
            <Text style={styles.infoSectionTitle}>Fun Fact</Text>
            <Text style={styles.infoFunFact}>{selectedPart.funFact}</Text>
          </View>

          {/* Uses */}
          <View style={styles.infoSectionContent}>
            <Text style={styles.infoSectionTitle}>Uses</Text>
            <Text style={styles.infoUses}>{selectedPart.uses}</Text>
          </View>

          {/* Scientific Info */}
          <View style={styles.infoSectionContent}>
            <Text style={styles.infoSectionTitle}>Scientific Information</Text>
            <View style={styles.infoGrid}>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Part ID</Text>
                <Text style={styles.infoValue}>{selectedPart.id}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Color Code</Text>
                <View style={styles.colorRow}>
                  <View style={[styles.colorBox, { backgroundColor: selectedPart.highlightColor }]} />
                  <Text style={styles.infoValue}>{selectedPart.highlightColor}</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Additional Information */}
          <View style={styles.infoSectionContent}>
            <Text style={styles.infoSectionTitle}>Tree Information</Text>
            <View style={styles.treeInfoCard}>
              <Text style={styles.treeInfoText}>
                <Text style={styles.treeInfoLabel}>Tree Name: </Text>
                {treeData.name}
              </Text>
              <Text style={styles.treeInfoText}>
                <Text style={styles.treeInfoLabel}>Total Parts: </Text>
                {treeData.parts.length} parts available
              </Text>
              <Text style={styles.treeInfoText}>
                <Text style={styles.treeInfoLabel}>Description: </Text>
                {treeData.description}
              </Text>
            </View>
          </View>

          {/* Spacer for better scrolling */}
          <View style={styles.bottomSpacer} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  imageSection: {
    minHeight: 350,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingVertical: 20,
  },
  imageContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    // borderRadius: 15,  
    padding: 15,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 3,
  },
  treeImage: {
    // Image styles are applied dynamically
  },
  clickableArea: {
    position: 'absolute',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  partLabel: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    position: 'absolute',
    top: -35,
    left: -30,
    right: -30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  partLabelText: {
    color: '#ffffff',
    fontSize: 10,
    fontFamily: Fonts.medium,
    textAlign: 'center',
  },
  instructions: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 8,
    padding: 12,
  },
  instructionsText: {
    fontSize: 14,
    fontFamily: Fonts.medium,
    color: '#333',
    textAlign: 'center',
  },
  // Information Section Styles
  infoSection: {
    backgroundColor: '#f8f9fa',
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: -2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 8,
    // elevation: 8,
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  colorIndicator: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 16,
  },
  infoTitle: {
    fontSize: 28,
    fontFamily: Fonts.bold,
    color: '#333',
    flex: 1,
  },
  infoSectionContent: {
    marginBottom: 24,
  },
  infoSectionTitle: {
    fontSize: 20,
    fontFamily: Fonts.semiBold,
    color: '#555',
    marginBottom: 12,
  },
  infoDescription: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: '#666',
    lineHeight: 24,
  },
  infoFunFact: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: '#666',
    lineHeight: 24,
    backgroundColor: '#fff3cd',
    padding: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#ffc107',
  },
  infoUses: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: '#666',
    lineHeight: 24,
    backgroundColor: '#d1ecf1',
    padding: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#17a2b8',
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  infoItem: {
    width: '48%',
    marginBottom: 16,
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  infoLabel: {
    fontSize: 14,
    fontFamily: Fonts.medium,
    color: '#888',
    marginBottom: 8,
  },
  infoValue: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: '#333',
  },
  colorRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorBox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 12,
  },
  // Additional Information Styles
  treeInfoCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  treeInfoText: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: '#333',
    lineHeight: 24,
    marginBottom: 8,
  },
  treeInfoLabel: {
    fontFamily: Fonts.semiBold,
    color: '#555',
  },
  bottomSpacer: {
    height: 50,
  },
  // Fallback styles
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  fallbackText: {
    fontSize: 80,
    marginBottom: 20,
  },
  fallbackTitle: {
    fontSize: 24,
    fontFamily: Fonts.bold,
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  fallbackSubtitle: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  fallbackParts: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  fallbackPartButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    margin: 4,
  },
  selectedFallbackPart: {
    borderWidth: 2,
    borderColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  fallbackPartText: {
    color: '#ffffff',
    fontSize: 12,
    fontFamily: Fonts.medium,
    textAlign: 'center',
  },
});
