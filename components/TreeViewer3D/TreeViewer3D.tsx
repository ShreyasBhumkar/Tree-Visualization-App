import { OrbitControls } from '@react-three/drei/native';
import { Canvas } from '@react-three/fiber/native';
import React, { Suspense, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TreeModel, TreePart } from '../../types/tree';
import { TreeModel3D } from '../TreeModel3D/TreeModel3D';

// Type assertion for React Three Fiber JSX elements
const AmbientLight = 'ambientLight' as any;
const DirectionalLight = 'directionalLight' as any;
const PointLight = 'pointLight' as any;

interface TreeViewer3DProps {
  treeData: TreeModel;
  onPartClick: (part: TreePart) => void;
  selectedPart: TreePart | null;
}

// Loading component for 3D model
function LoadingFallback() {
  return (
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingText}>Loading 3D Tree Model...</Text>
    </View>
  );
}

export function TreeViewer3D({ treeData, onPartClick, selectedPart }: TreeViewer3DProps) {
  const [show3D, setShow3D] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setShow3D(!show3D)}
        >
          <Text style={styles.toggleButtonText}>
            {show3D ? 'Switch to 2D' : 'Switch to 3D'}
          </Text>
        </TouchableOpacity>
      </View>

      {show3D ? (
        <View style={styles.canvasContainer}>
          <Canvas
            camera={{ position: [0, 2, 5], fov: 50 }}
            style={styles.canvas}
          >
            <AmbientLight intensity={0.5} />
            <DirectionalLight position={[10, 10, 5]} intensity={1} />
            <PointLight position={[-10, -10, -10]} intensity={0.5} />
            
            <Suspense fallback={<LoadingFallback />}>
              <TreeModel3D
                treeData={treeData}
                onPartClick={onPartClick}
                selectedPart={selectedPart}
              />
            </Suspense>
            
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              minDistance={3}
              maxDistance={10}
            />
          </Canvas>
        </View>
      ) : (
        <View style={styles.fallbackContainer}>
          <Text style={styles.fallbackText}>
            Switch to 2D Image Viewer
          </Text>
          <Text>
            Use the toggle button above to switch between 3D and 2D views
          </Text>
        </View>
      )}

      {selectedPart && (
        <ScrollView style={styles.infoContainer}>
          <Text style={styles.infoTitle}>{selectedPart.name}</Text>
          <Text style={styles.infoDescription}>{selectedPart.description}</Text>
          <View style={styles.factsContainer}>
            <Text style={styles.factsTitle}>Fun Fact:</Text>
            <Text style={styles.factText}>• {selectedPart.funFact}</Text>
            <Text style={styles.factsTitle}>Uses:</Text>
            <Text style={styles.factText}>• {selectedPart.uses}</Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  toggleButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  toggleButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  canvasContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  canvas: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  loadingText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  fallbackText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    maxHeight: 200,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  infoDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  factsContainer: {
    marginTop: 10,
  },
  factsTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  factText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
});
