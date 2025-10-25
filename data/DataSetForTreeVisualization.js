export const treeData = [
  {
    id: "1",
    name: "Apple Tree",
    value: "apple",
    // modelPath: require("./assets/models/apple_tree.glb"),
    description:
      "Apple trees are deciduous trees known for their sweet and edible fruits. They belong to the Rosaceae family and are cultivated worldwide.",
    parts: [
      {
        id: "fruit",
        name: "Apple Fruit",
        highlightColor: "#ff4d4d",
        description:
          "The fruit of the apple tree is typically red, green, or yellow and is rich in fiber and vitamin C. Apples are consumed fresh, cooked, or juiced.",
        funFact:
          "There are over 7,500 varieties of apples grown around the world.",
        uses: "Used in desserts, juices, and as a healthy snack.",
      },
      {
        id: "leaf",
        name: "Leaf",
        highlightColor: "#3fa34d",
        description:
          "Apple tree leaves are oval-shaped, serrated, and medium green in color. They play a vital role in photosynthesis.",
        funFact:
          "Apple leaves often curl slightly due to light exposure, optimizing sun absorption.",
        uses: "Used in herbal remedies and teas.",
      },
      {
        id: "stem",
        name: "Stem / Branch",
        highlightColor: "#8b5a2b",
        description:
          "The branches of the apple tree support the leaves and fruits, transporting nutrients and water.",
        funFact:
          "An apple branch can bear fruit for many years with proper pruning.",
        uses: "Used for small woodworking and fuel.",
      },
      {
        id: "root",
        name: "Root",
        highlightColor: "#4b3621",
        description:
          "The root system anchors the apple tree and absorbs water and minerals from the soil.",
        funFact: "Apple trees can grow deep roots if the soil is well-drained.",
        uses: "Helps in soil stabilization and nutrient cycling.",
      },
      {
        id: "flower",
        name: "Flower",
        highlightColor: "#ffd6e0",
        description:
          "Apple blossoms are pink or white and have five petals. They attract pollinators like bees.",
        funFact:
          "Each apple blossom has the potential to become one apple fruit.",
        uses: "Used for perfumes and symbolic decorations.",
      },
    ],
  },
  {
    id: "2",
    name: "Oak Tree",
    value: "oak",
    // modelPath: require("./assets/models/oak_tree.glb"),
    description:
      "The oak tree is a symbol of strength and endurance. It produces acorns and has lobed leaves.",
    parts: [
      {
        id: "leaf",
        name: "Leaf",
        highlightColor: "#3c8d0d",
        description:
          "Oak leaves are lobed and vary in size depending on the species.",
        funFact:
          "Oak trees can produce different leaf shapes on the same tree.",
        uses: "Provides shade and oxygen, supports wildlife.",
      },
      {
        id: "acorn",
        name: "Acorn (Fruit)",
        highlightColor: "#b08c3f",
        description:
          "The acorn is the nut of the oak tree, serving as a food source for birds and mammals.",
        funFact: "A single oak tree can produce thousands of acorns each year.",
        uses: "Used in traditional medicine and natural dyes.",
      },
      {
        id: "bark",
        name: "Bark",
        highlightColor: "#5a3e1b",
        description:
          "Oak bark is thick and rugged, protecting the tree from fire and pests.",
        funFact:
          "Cork used in wine bottles comes from the bark of cork oak trees.",
        uses: "Used in tanning leather and producing cork.",
      },
      {
        id: "root",
        name: "Root",
        highlightColor: "#4b3621",
        description:
          "Deep roots provide strong anchorage and water absorption.",
        funFact: "Oak roots can spread as wide as the tree’s canopy.",
        uses: "Improves soil health and prevents erosion.",
      },
    ],
  },
  {
    id: "3",
    name: "Pine Tree",
    value: "pine",
    // modelPath: require("./assets/models/pine_tree.glb"),
    description:
      "Pine trees are evergreen conifers with needle-like leaves and woody cones.",
    parts: [
      {
        id: "needle",
        name: "Needle (Leaf)",
        highlightColor: "#2f6c1a",
        description:
          "Pine needles are long, thin leaves that stay green all year.",
        funFact: "Pine needles can remain on the tree for up to 5 years.",
        uses: "Used in air fresheners and mulch.",
      },
      {
        id: "cone",
        name: "Pine Cone",
        highlightColor: "#a56f35",
        description:
          "The pine cone protects seeds until conditions are right for release.",
        funFact: "Some cones only open after exposure to fire.",
        uses: "Used in crafts and natural decoration.",
      },
      {
        id: "bark",
        name: "Bark",
        highlightColor: "#604030",
        description:
          "Pine bark is rough and scaly, protecting from insects and weather.",
        funFact:
          "Pine resin has been used for centuries to make turpentine and pitch.",
        uses: "Source of resin and natural adhesives.",
      },
    ],
  },
  {
    id: "4",
    name: "Maple Tree",
    value: "maple",
    // modelPath: require("./assets/models/maple_tree.glb"),
    description:
      "Maple trees are known for their distinctive leaves and the sweet sap used to make maple syrup.",
    parts: [
      {
        id: "leaf",
        name: "Leaf",
        highlightColor: "#d12f1b",
        description:
          "Maple leaves have a signature five-lobed shape and turn bright red or orange in fall.",
        funFact:
          "The Canadian flag features the maple leaf as its national symbol.",
        uses: "Used for decoration and identification of species.",
      },
      {
        id: "sap",
        name: "Sap",
        highlightColor: "#f5c36b",
        description:
          "The sap from maple trees is collected and boiled to make maple syrup.",
        funFact: "It takes about 40 liters of sap to make 1 liter of syrup.",
        uses: "Used in food and natural sweeteners.",
      },
      {
        id: "bark",
        name: "Bark",
        highlightColor: "#704214",
        description:
          "Maple bark is smooth when young and becomes furrowed with age.",
        funFact: "The bark can protect against extreme cold temperatures.",
        uses: "Used in crafts and traditional medicine.",
      },
    ],
  },
  {
    id: "5",
    name: "Cherry Tree",
    value: "cherry",
    // modelPath: require("./assets/models/cherry_tree.glb"),
    description:
      "Cherry trees are famous for their beautiful pink or white blossoms and delicious red fruits.",
    parts: [
      {
        id: "flower",
        name: "Cherry Blossom",
        highlightColor: "#ffc0cb",
        description:
          "Cherry blossoms symbolize renewal and beauty in Japanese culture.",
        funFact: "Cherry blossoms bloom for only about one week each year.",
        uses: "Used in festivals and perfumes.",
      },
      {
        id: "fruit",
        name: "Cherry Fruit",
        highlightColor: "#b30000",
        description:
          "Cherries are small red fruits with a sweet or tart flavor.",
        funFact: "Cherries contain antioxidants that help reduce inflammation.",
        uses: "Used in desserts, juices, and preserves.",
      },
      {
        id: "leaf",
        name: "Leaf",
        highlightColor: "#3fa34d",
        description: "Cherry leaves are simple and oval with serrated edges.",
        funFact: "Cherry leaves release a sweet scent when crushed.",
        uses: "Used in Japanese sweets called 'sakura mochi'.",
      },
    ],
  },
  {
    id: "6",
    name: "Palm Tree",
    value: "palm",
    // modelPath: require("./assets/models/palm_tree.glb"),
    description:
      "Palm trees are tropical plants known for their tall trunks and fan-like or feather-like leaves.",
    parts: [
      {
        id: "leaf",
        name: "Frond (Leaf)",
        highlightColor: "#228b22",
        description:
          "Palm leaves are large and divided into segments that look like feathers or fans.",
        funFact: "Some palm leaves can grow up to 10 meters long!",
        uses: "Used for roofs, mats, and decoration.",
      },
      {
        id: "fruit",
        name: "Coconut / Date Fruit",
        highlightColor: "#c68642",
        description:
          "Depending on the species, palms produce coconuts or dates as fruits.",
        funFact: "A single coconut palm can produce up to 75 fruits a year.",
        uses: "Used for food, oil, and natural fibers.",
      },
      {
        id: "trunk",
        name: "Trunk",
        highlightColor: "#8b5a2b",
        description:
          "The trunk of a palm is strong yet flexible, made up of fibrous material.",
        funFact:
          "Palm trunks don’t have bark — they grow from a single point at the top.",
        uses: "Used for building materials and decoration.",
      },
    ],
  },
];
