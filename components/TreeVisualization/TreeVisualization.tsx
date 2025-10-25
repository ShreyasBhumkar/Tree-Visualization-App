import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TreeModel, TreePart } from '../../types/tree';
import { ImageTreeViewer } from '../ImageTreeViewer/ImageTreeViewer';

interface TreeVisualizationProps {
  treeData: TreeModel;
  use3D?: boolean;
}

export function TreeVisualization({ treeData, use3D = false }: TreeVisualizationProps) {
  const [selectedPart, setSelectedPart] = useState<TreePart | null>(null);

  const handlePartClick = (part: TreePart) => {
    setSelectedPart(part);
  };

  return (
    <View style={styles.container}>
      <ImageTreeViewer
        treeData={treeData}
        onPartClick={handlePartClick}
        selectedPart={selectedPart}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
