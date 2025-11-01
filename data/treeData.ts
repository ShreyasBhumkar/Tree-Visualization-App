import { TreeModel } from '../types/tree';

export const treeData: TreeModel[] = [
  {
    id: "1",
    name: "Argemone Mexicana",
    value: "argemone_mexicana",
    description: "Argemone mexicana, also known as the Mexican poppy or काटेरी धोतरा in Marathi, is a prickly wild herb that grows in dry and wasteland areas. It is known for its bright yellow flowers, spiny leaves, and toxic black seeds.",
    imagePath: require("../assets/images/trees/argemone-maxicana.png"),
    imageWidth: 400,
    imageHeight: 500,
    cameraPosition: [0, 2, 5],
    lighting: {
      ambient: 0.5,
      directional: 0.9
    },
    backgroundColor: "#f2d96b",
    parts: [
      {
        id: "flower",
        name: "Flower",
        highlightColor: "#f8e71c",
        description: "The Argemone mexicana flower is bright yellow with six delicate petals. It blooms at the tip of spiny stems and attracts pollinators like bees.",
        funFact: "The yellow sap (latex) found in the flower and stem is toxic but used in traditional medicine in controlled amounts.",
        uses: "Used in Ayurvedic medicine for skin disorders and jaundice (with great caution).",
        clickArea: {
          x: 125,
          y: 130,
          width: 70,
          height: 50
        },
        position: [0, 2.2, 0],
        scale: [0.25, 0.25, 0.25],
        rotation: [0, 0, 0],
        geometry: "sphere",
        size: [0.6, 0.6, 0.6]
      },
      {
        id: "leaf",
        name: "Leaf",
        highlightColor: "#6bbf59",
        description: "The leaves are bluish-green, lobed, and covered with sharp spines. They contain a white vein-like pattern throughout.",
        funFact: "The plant's thorny leaves help protect it from grazing animals.",
        uses: "Crushed leaves are sometimes used externally for treating skin infections in traditional medicine.",
        clickArea: {
          x: 120,
          y: 205,
          width: 200,
          height: 105
        },
        position: [0, 1.8, 0],
        scale: [0.5, 0.2, 0.1],
        rotation: [0, 0, 0],
        geometry: "box",
        size: [2, 1, 0.2]
      },
      {
        id: "stem",
        name: "Stem",
        highlightColor: "#a1c349",
        description: "The stem is upright, greenish-blue, and full of thorns. It contains a yellow latex that oozes when cut.",
        funFact: "The plant's yellow sap can stain hands and clothes permanently.",
        uses: "Used in small quantities in traditional remedies for warts and eczema.",
        clickArea: {
          x: 190,
          y: 270,
          width: 50,
          height: 40
        },
        position: [0, 1, 0],
        scale: [0.1, 1, 0.1],
        rotation: [0, 0, 0],
        geometry: "cylinder",
        size: [0.5, 2, 0.5]
      },
      {
        id: "fruit",
        name: "Fruit Pod",
        highlightColor: "#bfa76b",
        description: "The fruit of Argemone mexicana is a spiny, oval capsule that splits open when mature, revealing small black seeds inside.",
        funFact: "Each pod can contain dozens of tiny round seeds that look like mustard seeds.",
        uses: "The seeds are toxic and should never be consumed; they can cause epidemic dropsy.",
        clickArea: {
          x: 185,
          y: 155,
          width: 85,
          height: 50
        },
        position: [0, 2.4, 0],
        scale: [0.3, 0.3, 0.3],
        rotation: [0, 0, 0],
        geometry: "sphere",
        size: [0.7, 0.7, 0.7]
      },
      {
        id: "seed",
        name: "Seeds",
        highlightColor: "#4b3621",
        description: "The seeds are small, black, and round, resembling mustard seeds. They are extremely toxic due to the presence of sanguinarine and dihydrosanguinarine alkaloids.",
        funFact: "These seeds are often mistaken for mustard seeds and have caused accidental poisoning in humans.",
        uses: "Not used for consumption; handled with care in botanical and pharmacological studies.",
        clickArea: {
          x: 153,
          y: 150,
          width: 24,
          height: 30
        },
        position: [0, 2.5, 0],
        scale: [0.2, 0.2, 0.2],
        rotation: [0, 0, 0],
        geometry: "sphere",
        size: [0.3, 0.3, 0.3]
      },
      {
        id: "root",
        name: "Root",
        highlightColor: "#5b3a29",
        description: "The root system anchors the plant deeply into the dry soil, helping it survive in harsh, arid conditions.",
        funFact: "Even during drought, the plant stays alive due to its strong root system.",
        uses: "Roots are used in traditional healing for toothaches and respiratory problems (in controlled quantities).",
        clickArea: {
          x: 140,
          y: 310,
          width: 150,
          height: 85
        },
        position: [0, -0.5, 0],
        scale: [0.1, 0.5, 0.1],
        rotation: [0, 0, 0],
        geometry: "box",
        size: [1, 0.5, 1]
      }
    ]
  },  
  {
    id: "2",
    name: "Apple Tree",
    value: "apple",
    description: "Apple trees are deciduous trees known for their sweet and edible fruits. They belong to the Rosaceae family and are cultivated worldwide.",
    imagePath: require("../assets/images/trees/apple-tree.jpg"),
    imageWidth: 400,
    imageHeight: 500,
    cameraPosition: [0, 2, 5],
    lighting: {
      ambient: 0.4,
      directional: 0.8
    },
    backgroundColor: "#87CEEB",
    parts: [
      {
        id: "fruit",
        name: "Apple Fruit",
        highlightColor: "#ff4d4d",
        description: "The fruit of the apple tree is typically red, green, or yellow and is rich in fiber and vitamin C. Apples are consumed fresh, cooked, or juiced.",
        funFact: "There are over 7,500 varieties of apples grown around the world.",
        uses: "Used in desserts, juices, and as a healthy snack.",
        clickArea: {
          x: 50, // Top-left corner of apple area (scattered throughout canopy)
          y: 50, // Top-left corner of apple area
          width: 300, // Width of apple area (covers the entire canopy where apples are)
          height: 200  // Height of apple area
        },
        position: [0, 2.5, 0],
        scale: [0.3, 0.3, 0.3],
        rotation: [0, 0, 0],
        geometry: 'sphere',
        size: [1, 1, 1]
      },
      {
        id: "leaf",
        name: "Leaf",
        highlightColor: "#3fa34d",
        description: "Apple tree leaves are oval-shaped, serrated, and medium green in color. They play a vital role in photosynthesis.",
        funFact: "Apple leaves often curl slightly due to light exposure, optimizing sun absorption.",
        uses: "Used in herbal remedies and teas.",
        clickArea: {
          x: 50, // Top-left corner of leaf area (entire canopy)
          y: 50, // Top-left corner of leaf area
          width: 300, // Width of leaf area
          height: 200  // Height of leaf area
        },
        position: [0, 2, 0],
        scale: [0.5, 0.2, 0.1],
        rotation: [0, 0, 0],
        geometry: 'box',
        size: [2, 1, 0.2]
      },
      {
        id: "stem",
        name: "Trunk",
        highlightColor: "#8b5a2b",
        description: "The trunk of the apple tree provides structural support and transports nutrients and water throughout the tree.",
        funFact: "Apple tree trunks can live for over 100 years with proper care.",
        uses: "Used for furniture making and firewood.",
        clickArea: {
          x: 150, // Top-left corner of trunk area (center of image)
          y: 200, // Top-left corner of trunk area
          width: 100, // Width of trunk area
          height: 150  // Height of trunk area
        },
        position: [0, 1, 0],
        scale: [0.1, 1, 0.1],
        rotation: [0, 0, 0],
        geometry: 'cylinder',
        size: [0.5, 2, 0.5]
      },
      {
        id: "root",
        name: "Root",
        highlightColor: "#4b3621",
        description: "The root system anchors the apple tree and absorbs water and minerals from the soil.",
        funFact: "Apple trees can grow deep roots if the soil is well-drained.",
        uses: "Helps in soil stabilization and nutrient cycling.",
        clickArea: {
          x: 150, // Top-left corner of root area (base of trunk)
          y: 350, // Top-left corner of root area
          width: 100, // Width of root area
          height: 50  // Height of root area
        },
        position: [0, -0.5, 0],
        scale: [0.1, 0.5, 0.1],
        rotation: [0, 0, 0],
        geometry: 'cylinder',
        size: [0.3, 1, 0.3]
      },
      {
        id: "flower",
        name: "Flower",
        highlightColor: "#ffd6e0",
        description: "Apple blossoms are pink or white and have five petals. They attract pollinators like bees.",
        funFact: "Each apple blossom has the potential to become one apple fruit.",
        uses: "Used for perfumes and symbolic decorations.",
        clickArea: {
          x: 150, // Top-left corner of flower area
          y: 180, // Top-left corner of flower area
          width: 100, // Width of flower area
          height: 40  // Height of flower area
        },
        position: [0, 2.2, 0],
        scale: [0.2, 0.2, 0.2],
        rotation: [0, 0, 0],
        geometry: 'sphere',
        size: [0.5, 0.5, 0.5]
      }
    ]
  },
  {
    id: "3",
    name: "Oak Tree",
    value: "oak",
    description: "The oak tree is a symbol of strength and endurance. It produces acorns and has lobed leaves.",
    imagePath: require("../assets/images/trees/oak-tree.jpg"),
    imageWidth: 300,
    imageHeight: 400,
    cameraPosition: [0, 2, 5],
    lighting: {
      ambient: 0.4,
      directional: 0.8
    },
    backgroundColor: "#90EE90",
    parts: [
      {
        id: "leaf",
        name: "Leaf",
        highlightColor: "#3c8d0d",
        description: "Oak leaves are lobed and vary in size depending on the species.",
        funFact: "Oak trees can produce different leaf shapes on the same tree.",
        uses: "Provides shade and oxygen, supports wildlife.",
        clickArea: {
          x: 100, // Top-left corner of leaf area
          y: 120, // Top-left corner of leaf area
          width: 120, // Width of leaf area
          height: 80  // Height of leaf area
        },
        position: [0, 2, 0],
        scale: [0.4, 0.3, 0.1],
        rotation: [0, 0, 0],
        geometry: 'box',
        size: [2, 1.5, 0.2]
      },
      {
        id: "acorn",
        name: "Acorn (Fruit)",
        highlightColor: "#b08c3f",
        description: "The acorn is the nut of the oak tree, serving as a food source for birds and mammals.",
        funFact: "A single oak tree can produce thousands of acorns each year.",
        uses: "Used in traditional medicine and natural dyes.",
        clickArea: {
          x: 100, // Top-left corner of acorn area
          y: 140, // Top-left corner of acorn area
          width: 100, // Width of acorn area
          height: 40  // Height of acorn area
        },
        position: [0, 2.5, 0],
        scale: [0.2, 0.3, 0.2],
        rotation: [0, 0, 0],
        geometry: 'cone',
        size: [0.5, 0.8, 0.5]
      },
      {
        id: "trunk",
        name: "Trunk",
        highlightColor: "#5a3e1b",
        description: "The oak tree trunk is thick and sturdy, providing strong structural support for the heavy branches.",
        funFact: "Oak trunks can live for over 1000 years, making them some of the longest-living trees.",
        uses: "Used for construction lumber and furniture making.",
        clickArea: {
          x: 150, // Top-left corner of trunk area (center of image)
          y: 200, // Top-left corner of trunk area
          width: 100, // Width of trunk area
          height: 200  // Height of trunk area
        },
        position: [0, 1, 0],
        scale: [0.2, 1, 0.2],
        rotation: [0, 0, 0],
        geometry: 'cylinder',
        size: [0.8, 2, 0.8]
      },
      {
        id: "root",
        name: "Root",
        highlightColor: "#4b3621",
        description: "Deep roots provide strong anchorage and water absorption.",
        funFact: "Oak roots can spread as wide as the tree's canopy.",
        uses: "Improves soil health and prevents erosion.",
        clickArea: {
          x: 120, // Top-left corner of root area
          y: 350, // Top-left corner of root area
          width: 60, // Width of root area
          height: 50  // Height of root area
        },
        position: [0, -0.5, 0],
        scale: [0.2, 0.5, 0.2],
        rotation: [0, 0, 0],
        geometry: 'cylinder',
        size: [0.6, 1, 0.6]
      }
    ]
  },
  {
    id: "4",
    name: "Pine Tree",
    value: "pine",
    description: "Pine trees are evergreen conifers with needle-like leaves and woody cones.",
    imagePath: require("../assets/images/trees/pine-tree.jpg"),
    imageWidth: 300,
    imageHeight: 400,
    cameraPosition: [0, 2, 5],
    lighting: {
      ambient: 0.4,
      directional: 0.8
    },
    backgroundColor: "#98FB98",
    parts: [
      {
        id: "needle",
        name: "Needle (Leaf)",
        highlightColor: "#2f6c1a",
        description: "Pine needles are long, thin leaves that stay green all year.",
        funFact: "Pine needles can remain on the tree for up to 5 years.",
        uses: "Used in air fresheners and mulch.",
        clickArea: {
          x: 100, // Top-left corner of needle area
          y: 100, // Top-left corner of needle area
          width: 100, // Width of needle area
          height: 150  // Height of needle area
        },
        position: [0, 2, 0],
        scale: [0.1, 0.8, 0.1],
        rotation: [0, 0, 0],
        geometry: 'cylinder',
        size: [0.1, 1.5, 0.1]
      },
      {
        id: "cone",
        name: "Pine Cone",
        highlightColor: "#a56f35",
        description: "The pine cone protects seeds until conditions are right for release.",
        funFact: "Some cones only open after exposure to fire.",
        uses: "Used in crafts and natural decoration.",
        clickArea: {
          x: 110, // Top-left corner of cone area
          y: 160, // Top-left corner of cone area
          width: 80, // Width of cone area
          height: 50  // Height of cone area
        },
        position: [0, 2.5, 0],
        scale: [0.3, 0.4, 0.3],
        rotation: [0, 0, 0],
        geometry: 'cone',
        size: [0.6, 1, 0.6]
      },
      {
        id: "trunk",
        name: "Trunk",
        highlightColor: "#8b5a2b",
        description: "The pine tree trunk is tall and straight, providing strong structural support.",
        funFact: "Pine trunks can grow up to 200 feet tall.",
        uses: "Used for construction lumber and paper production.",
        clickArea: {
          x: 150, // Top-left corner of trunk area (center of image)
          y: 250, // Top-left corner of trunk area
          width: 100, // Width of trunk area
          height: 150  // Height of trunk area
        },
        position: [0, 1, 0],
        scale: [0.15, 1, 0.15],
        rotation: [0, 0, 0],
        geometry: 'cylinder',
        size: [0.6, 2, 0.6]
      }
    ]
  },
  {
    id: "5",
    name: "Maple Tree",
    value: "maple",
    description: "Maple trees are known for their distinctive leaves and the sweet sap used to make maple syrup.",
    imagePath: require("../assets/images/trees/mapple-tree.jpg"),
    imageWidth: 400,
    imageHeight: 500,
    cameraPosition: [0, 2, 5],
    lighting: {
      ambient: 0.4,
      directional: 0.8
    },
    backgroundColor: "#98FB98",
    parts: [
      {
        id: "leaf",
        name: "Leaf",
        highlightColor: "#d12f1b",
        description: "Maple leaves have a signature five-lobed shape and turn bright red or orange in fall.",
        funFact: "The Canadian flag features the maple leaf as its national symbol.",
        uses: "Used for decoration and identification of species.",
        clickArea: {
          x: 100,
          y: 80,
          width: 200,
          height: 120
        },
        position: [0, 2, 0],
        scale: [0.4, 0.3, 0.1],
        rotation: [0, 0, 0],
        geometry: 'box',
        size: [2, 1.5, 0.2]
      },
      {
        id: "sap",
        name: "Sap",
        highlightColor: "#f5c36b",
        description: "The sap from maple trees is collected and boiled to make maple syrup.",
        funFact: "It takes about 40 liters of sap to make 1 liter of syrup.",
        uses: "Used in food and natural sweeteners.",
        clickArea: {
          x: 180,
          y: 200,
          width: 40,
          height: 100
        },
        position: [0, 1, 0],
        scale: [0.1, 1, 0.1],
        rotation: [0, 0, 0],
        geometry: 'cylinder',
        size: [0.5, 2, 0.5]
      },
      {
        id: "bark",
        name: "Bark",
        highlightColor: "#704214",
        description: "Maple bark is smooth when young and becomes furrowed with age.",
        funFact: "The bark can protect against extreme cold temperatures.",
        uses: "Used in crafts and traditional medicine.",
        clickArea: {
          x: 180,
          y: 200,
          width: 40,
          height: 150
        },
        position: [0, 1, 0],
        scale: [0.2, 1, 0.2],
        rotation: [0, 0, 0],
        geometry: 'cylinder',
        size: [0.8, 2, 0.8]
      }
    ]
  },
  {
    id: "6",
    name: "Cherry Tree",
    value: "cherry",
    description: "Cherry trees are famous for their beautiful pink or white blossoms and delicious red fruits.",
    imagePath: require("../assets/images/trees/cherry-tree.jpg"),
    imageWidth: 400,
    imageHeight: 500,
    cameraPosition: [0, 2, 5],
    lighting: {
      ambient: 0.4,
      directional: 0.8
    },
    backgroundColor: "#FFB6C1",
    parts: [
      {
        id: "flower",
        name: "Cherry Blossom",
        highlightColor: "#ffc0cb",
        description: "Cherry blossoms symbolize renewal and beauty in Japanese culture.",
        funFact: "Cherry blossoms bloom for only about one week each year.",
        uses: "Used in festivals and perfumes.",
        clickArea: {
          x: 120,
          y: 80,
          width: 160,
          height: 100
        },
        position: [0, 2.2, 0],
        scale: [0.2, 0.2, 0.2],
        rotation: [0, 0, 0],
        geometry: 'sphere',
        size: [0.5, 0.5, 0.5]
      },
      {
        id: "fruit",
        name: "Cherry Fruit",
        highlightColor: "#b30000",
        description: "Cherries are small red fruits with a sweet or tart flavor.",
        funFact: "Cherries contain antioxidants that help reduce inflammation.",
        uses: "Used in desserts, juices, and preserves.",
        clickArea: {
          x: 50, // Top-left corner of cherry area (scattered throughout canopy)
          y: 50, // Top-left corner of cherry area
          width: 300, // Width of cherry area
          height: 200  // Height of cherry area
        },
        position: [0, 2.5, 0],
        scale: [0.3, 0.3, 0.3],
        rotation: [0, 0, 0],
        geometry: 'sphere',
        size: [1, 1, 1]
      },
      {
        id: "leaf",
        name: "Leaf",
        highlightColor: "#ff69b4",
        description: "Cherry leaves are simple and oval with serrated edges.",
        funFact: "Cherry leaves release a sweet scent when crushed.",
        uses: "Used in Japanese sweets called 'sakura mochi'.",
        clickArea: {
          x: 100,
          y: 80,
          width: 200,
          height: 120
        },
        position: [0, 2, 0],
        scale: [0.5, 0.2, 0.1],
        rotation: [0, 0, 0],
        geometry: 'box',
        size: [2, 1, 0.2]
      },
      {
        id: "trunk",
        name: "Trunk",
        highlightColor: "#8b5a2b",
        description: "The cherry tree trunk provides structural support and transports nutrients throughout the tree.",
        funFact: "Cherry tree trunks can live for over 100 years.",
        uses: "Used for furniture and decorative woodwork.",
        clickArea: {
          x: 150, // Top-left corner of trunk area (center of image)
          y: 200, // Top-left corner of trunk area
          width: 100, // Width of trunk area
          height: 200  // Height of trunk area
        },
        position: [0, 1, 0],
        scale: [0.15, 1, 0.15],
        rotation: [0, 0, 0],
        geometry: 'cylinder',
        size: [0.6, 2, 0.6]
      }
    ]
  },
  {
    id: "7",
    name: "Palm Tree",
    value: "palm",
    description: "Palm trees are tropical plants known for their tall trunks and fan-like or feather-like leaves.",
    imagePath: require("../assets/images/trees/palm-tree.jpg"),
    imageWidth: 400,
    imageHeight: 500,
    cameraPosition: [0, 2, 5],
    lighting: {
      ambient: 0.4,
      directional: 0.8
    },
    backgroundColor: "#87CEEB",
    parts: [
      {
        id: "leaf",
        name: "Frond (Leaf)",
        highlightColor: "#228b22",
        description: "Palm leaves are large and divided into segments that look like feathers or fans.",
        funFact: "Some palm leaves can grow up to 10 meters long!",
        uses: "Used for roofs, mats, and decoration.",
        clickArea: {
          x: 50,
          y: 50,
          width: 300,
          height: 150
        },
        position: [0, 2, 0],
        scale: [0.4, 0.3, 0.1],
        rotation: [0, 0, 0],
        geometry: 'box',
        size: [2, 1.5, 0.2]
      },
      {
        id: "coconut",
        name: "Coconut",
        highlightColor: "#c68642",
        description: "Coconuts are large, hard-shelled fruits that grow in clusters at the top of palm trees.",
        funFact: "A single coconut palm can produce up to 75 coconuts a year.",
        uses: "Used for food, oil, water, and natural fibers.",
        clickArea: {
          x: 50, // Top-left corner of coconut area (top of tree)
          y: 50, // Top-left corner of coconut area
          width: 300, // Width of coconut area
          height: 100  // Height of coconut area
        },
        position: [0, 2.5, 0],
        scale: [0.2, 0.3, 0.2],
        rotation: [0, 0, 0],
        geometry: 'cone',
        size: [0.5, 0.8, 0.5]
      },
      {
        id: "trunk",
        name: "Trunk",
        highlightColor: "#8b5a2b",
        description: "The trunk of a palm is strong yet flexible, made up of fibrous material.",
        funFact: "Palm trunks don't have bark — they grow from a single point at the top.",
        uses: "Used for building materials and decoration.",
        clickArea: {
          x: 150, // Top-left corner of trunk area (center of image)
          y: 200, // Top-left corner of trunk area
          width: 100, // Width of trunk area
          height: 200  // Height of trunk area
        },
        position: [0, 1, 0],
        scale: [0.15, 1, 0.15],
        rotation: [0, 0, 0],
        geometry: 'cylinder',
        size: [0.6, 2, 0.6]
      }
    ]
  }
];
