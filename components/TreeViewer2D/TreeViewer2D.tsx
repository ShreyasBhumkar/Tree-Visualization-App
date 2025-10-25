import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Fonts } from '../../constants/theme';
import { TreeModel, TreePart } from '../../types/tree';

interface TreeViewer2DProps {
  treeData: TreeModel;
  onPartClick: (part: TreePart) => void;
  selectedPart?: TreePart | null;
}

const { width } = Dimensions.get('window');

export function TreeViewer2D({ treeData, onPartClick, selectedPart }: TreeViewer2DProps) {
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);

  const renderTreePart = (part: TreePart) => {
    const isSelected = selectedPart?.id === part.id;
    const isHovered = hoveredPart === part.id;
    
    const partStyle = {
      position: 'absolute' as const,
      left: part.position[0] * 50 + width / 2 - 25,
      top: -part.position[1] * 50 + 200,
      width: part.size[0] * 50,
      height: part.size[1] * 50,
      backgroundColor: part.highlightColor,
      borderRadius: part.geometry === 'sphere' ? 25 : 8,
      opacity: isSelected ? 0.9 : isHovered ? 0.8 : 0.6,
      borderWidth: isSelected ? 3 : 1,
      borderColor: isSelected ? '#ffffff' : part.highlightColor,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 4,
    };

    return (
      <TouchableOpacity
        key={part.id}
        style={partStyle}
        onPress={() => onPartClick(part)}
        onPressIn={() => setHoveredPart(part.id)}
        onPressOut={() => setHoveredPart(null)}
        activeOpacity={0.8}
      >
        <View style={styles.partLabel}>
          <Text style={styles.partLabelText}>{part.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: treeData.backgroundColor }]}>
      {/* Tree trunk */}
      <View style={styles.trunk} />
      
      {/* Tree parts */}
      {treeData.parts.map(renderTreePart)}
      
      {/* Instructions */}
      <View style={styles.instructions}>
        <Text style={styles.instructionsText}>
          Tap on any part of the tree to learn more!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 400,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  trunk: {
    position: 'absolute',
    width: 20,
    height: 120,
    backgroundColor: '#8B4513',
    borderRadius: 10,
    bottom: 0,
    left: '50%',
    marginLeft: -10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  partLabel: {
    position: 'absolute',
    top: -25,
    left: -10,
    right: -10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
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
});
