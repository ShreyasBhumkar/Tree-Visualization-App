export interface TreePart {
  id: string;
  name: string;
  description: string;
  funFact: string;
  uses: string;
  highlightColor: string;
  // 2D Image properties
  clickArea: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  // 3D properties (kept for compatibility)
  position: [number, number, number];
  scale: [number, number, number];
  rotation: [number, number, number];
  geometry: 'sphere' | 'box' | 'cylinder' | 'cone';
  size: [number, number, number];
}

export interface TreeModel {
  id: string;
  name: string;
  value: string;
  description: string;
  parts: TreePart[];
  // Image properties
  imagePath: string;
  imageWidth: number;
  imageHeight: number;
  // 3D scene properties (kept for compatibility)
  cameraPosition: [number, number, number];
  lighting: {
    ambient: number;
    directional: number;
  };
  backgroundColor: string;
}
