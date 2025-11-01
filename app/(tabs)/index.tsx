import { DropdownOption, SearchableDropdown } from "@/components/SearchableDropdown/SearchableDropdown";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { TreeVisualization } from "@/components/TreeVisualization/TreeVisualization";
import { treeData } from "@/data/treeData";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

// Tree options similar to the image style
const treeOptions: DropdownOption[] = [
  {
    id: '1',
    label: 'Argemone Mexicana',
    value: 'argemone_mexicana',
    // emoji: '🍎',
    iconPosition: 'after'
  },
  {
    id: '2',
    label: 'Apple Tree',
    value: 'apple',
    // emoji: '🍎',
    iconPosition: 'after'
  },
  {
    id: '3',
    label: 'Oak Tree',
    value: 'oak',
    // emoji: '🌳',
    iconPosition: 'after'
  },
  {
    id: '4',
    label: 'Pine Tree',
    value: 'pine',
    // emoji: '🌲',
    iconPosition: 'after'
  },
  {
    id: '5',
    label: 'Maple Tree',
    value: 'maple',
    // emoji: '🍁',
    iconPosition: 'after'
  },
  {
    id: '6',
    label: 'Cherry Tree',
    value: 'cherry',
    // emoji: '🌸',
    iconPosition: 'after'
  },
  {
    id: '7',
    label: 'Palm Tree',
    value: 'palm',
    // emoji: '🌴',
    iconPosition: 'after'
  }
];

export default function HomeScreen() {
  const [selectedTree, setSelectedTree] = useState('argemone_mexicana');
  
  // Get the selected tree data
  const currentTreeData = treeData.find(tree => tree.value === selectedTree) || treeData[0];

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.sectionContainer}>
        <ThemedText style={styles.title}>
          Select the tree you want to visualize
        </ThemedText>
      </ThemedView>
      
      <SearchableDropdown
        options={treeOptions}
        selectedValues={selectedTree}
        onSelectionChange={setSelectedTree}
        placeholder="Select a tree"
        searchPlaceholder="Search for a tree..."
        multiSelect={false}
        showSearch={true}
        style={styles.dropdown}
      />

      <View style={styles.treeContainer}>
        <TreeVisualization 
          treeData={currentTreeData}
          use3D={true}
        />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dropdown: {
    marginBottom: 20,
  },
  treeContainer: {
    flex: 1,
    marginTop: 25,
  },
  buttonSection: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    gap: 8,
  },
  button: {
    flex: 1,
    marginHorizontal: 2,
  },
  infoContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  infoText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    marginBottom: 4,
    marginLeft: 10,
  },
});