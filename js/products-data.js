/**
 * Shree Umiya Sweets and Snacks - Master Product Catalog
 * Categories: sweets, hampers, namkeens, live-snacks, dairy, bakery, chocolates, dry-fruits
 */

const PRODUCTS_DATA = [
  // ==================== 1. SWEETS (MITHAI) ====================

  // Luxury Sweets 
  {
    id: "Baklava",
    name: "Baklava",
    gujaratiName: "બકલાવા",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "CRISPY & LUXURIOUS",
    badgeType: "gold",
    image: "Sweets_images/Baklava.jpg",
    rating: 4.9,
    reviewsCount: 384,
    description: "A delicious Turkish sweet made with delicate layers of flaky pastry, rich nuts, and sweet syrup—crispy, indulgent, and full of authentic flavor",
    ingredients: "Premium Cashews (72%), Fine Sugar, Cardamom, Pistachios",
    shelfLife: "20 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250gm", price: 340 },
      { label: "500gm", price: 680 },
      { label: "1 kg", price: 1360 }
    ]
  },
  {
    id: "Biscoff-Laddu",
    name: "Biscoff Laddu",
    gujaratiName: "બિસ્કોફ લાડુ ",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "New Launch",
    badgeType: "red",
    image: "Sweets_images/biscof-laddu.jpg",
    rating: 4.9,
    reviewsCount: 290,
    description: "A delicious fusion of traditional laddu and rich Biscoff flavor, with a soft, creamy texture and irresistible caramelized sweetness..",
    ingredients: "Fresh,Biscoff Cookies,Sugar, Cardamom,, Cashew Nuts",
    shelfLife: "15 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250g", price: 300 },
      { label: "500g", price: 600 },
      { label: "1 kg", price: 1200 }
    ]
  },
  {
    id: "Kunafa-Balls",
    name: "Kunafa Balls",
    gujaratiName: "કૂનાફા બોલ્સ · Royal Cashew Pistachio Roll",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "Must Try",
    badgeType: "gold",
    image: "Sweets_images/kunafa-balls.jpg",
    rating: 4.9,
    reviewsCount: 178,
    description: "A decadent Middle Eastern dessert made with shredded filo pastry, roasted pistachios, and a sweet, rose-infused syrup. Crispy, nutty, and irresistibly aromatic.",
    ingredients: "Shredded Filo Pastry, Roasted Pistachios, Sugar Syrup, Rose Essence, Ghee",
    shelfLife: "20 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250g", price: 290 },
      { label: "500g", price: 580 },
      { label: "1 kg", price: 1160 }
    ]
  },

  {
    id: "Rose-Balls",
    name: "Rose Balls",
    gujaratiName: "રોઝ બોલ્સ · Royal Cashew Pistachio Roll",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "Must Try",
    badgeType: "gold",
    image: "Sweets_images/rose-balls.jpg",
    rating: 4.9,
    reviewsCount: 178,
    description: "A decadent Middle Eastern dessert made with shredded filo pastry, roasted pistachios, and a sweet, rose-infused syrup. Crispy, nutty, and irresistibly aromatic.",
    ingredients: "Shredded Filo Pastry, Roasted Pistachios, Sugar Syrup, Rose Essence, Ghee",
    shelfLife: "20 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250g", price: 320 },
      { label: "500g", price: 640 },
      { label: "1 kg", price: 1280 }
    ]
  },
  //Dry Fruit Sweets
  {
    id: "Kaju-katli",
    name: "Kaju katli",
    gujaratiName: "કાજુ કતરી",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "Bestseller",
    badgeType: "red",
    image: "Sweets_images/Kaju_katli.jpg",
    rating: 4.9,
    reviewsCount: 420,
    description: "Premium cashew fudge made from the finest grade-A cashews, hand-kneaded with pure desi ghee and cardamom, adorned with edible silver leaf.",
    ingredients: "Premium Cashews (100%), Fine Sugar, Cardamom , Silver Vark",
    shelfLife: "20 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250gm", price: 260 },
      { label: "500gm", price: 520 },
      { label: "1kg", price: 1040 }
    ]
  },

  {
    id: "Pista-Roll",
    name: "Pista Roll",
    gujaratiName: "પિસ્તા રોલ",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "Bestseller",
    badgeType: "red",
    image: "Sweets_images/pista_roll.jpg",
    rating: 4.9,
    reviewsCount: 420,
    description: "Premium Pista roll made from the finest grade-A Pista, hand-kneaded with pure desi ghee and cardamom, adorned with edible silver leaf.",
    ingredients: "Premium Pista (100%), Fine Sugar, Cardamom , Silver Vark, roasted cashew nuts",
    shelfLife: "20 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250gm", price: 300 },
      { label: "500gm", price: 600 },
      { label: "1kg", price: 1200 }
    ]
  },

  {
    id: "Dry-Fruit pan",
    name: "Dry Fruit pan",
    gujaratiName: "ડ્રાય ફ્રુટ પાન",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "Bestseller",
    badgeType: "red",
    image: "Sweets_images/Dry-f-pan.jpg",
    rating: 4.9,
    reviewsCount: 420,
    description: "Premium Dry Fruit pan made from the finest grade-A Dry Fruit, hand-kneaded with pure desi ghee and cardamom, adorned with edible silver leaf.",
    ingredients: "Premium Dry Fruit (100%), Fine Sugar, Cardamom , Silver Vark, roasted cashew nuts",
    shelfLife: "20 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250gm", price: 320 },
      { label: "500gm", price: 640 },
      { label: "1kg", price: 1280 }
    ]
  },
  {
    id: "Anjeer-Diamond-Patra",
    name: "Anjeer Diamond Patra",
    gujaratiName: "અંજીર ડાયમંડ પાતરા",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "Dry fruit Sweet",
    badgeType: "red",
    image: "Sweets_images/anjeer Patra.jpg",
    rating: 5.0,
    reviewsCount: 260,
    description: "",
    ingredients: "Urad Dal Flour, Pure Cow Ghee, Gond (Edible Gum), Pipramul, Almonds, Pistachios, Cardamom, Nutmeg",
    shelfLife: "45 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250g", price: 320 },
      { label: "500g", price: 640 },
      { label: "1 kg", price: 1280 }
    ]
  },

  // GHEE SWEETS

  {
    id: "motichur-laddu",
    name: "Motichur Laddu",
    gujaratiName: "મોતીચૂર લાડુ · Ghee Pearl Delights",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "Festive Favorite",
    badgeType: "gold",
    image: "Sweets_images/motichur_laddu.jpg",
    rating: 4.8,
    reviewsCount: 310,
    description: "Tiny gram flour pearls fried in 100% pure desi ghee, soaked in saffron syrup and garnished with melon seeds and slivered pistachios.",
    ingredients: "Gram Flour (Besan), Pure Cow Ghee, Saffron, Cardamom, Magajtari Seeds",
    shelfLife: "10 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250g", price: 135 },
      { label: "500g", price: 270 },
      { label: "1 kg", price: 540 }
    ]
  },
  {
    id: "besan-laddu",
    name: "Besan Laddu Gift Box",
    gujaratiName: "બેસન લાડુ બોક્સ · Roasted Gram Flour Balls",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "Pure Ghee",
    badgeType: "gold",
    image: "Sweets_images/Besan_laddu_box.jpg",
    rating: 4.8,
    reviewsCount: 220,
    description: "Coarsely ground gram flour slow roasted in rich desi ghee until nutty and aromatic, rolled into sweet spherical bliss.",
    ingredients: "Roasted Besan, Pure Desi Ghee, Boora Sugar, Cardamom, Almonds",
    shelfLife: "30 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250g", price: 125 },
      { label: "500g", price: 250 },
      { label: "1 kg", price: 500 }
    ]
  },
  {
    id: "Ghee Boondi",
    name: "Ghee Boondi",
    gujaratiName: "ઘી બુંદી",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "Pure Ghee",
    badgeType: "gold",
    image: "Sweets_images/sweet_boondi.jpg",
    rating: 4.8,
    reviewsCount: 220,
    description: "Delicate, melt-in-your-mouth pearls made from gram flour and pure ghee, soaked in fragrant sugar syrup. A classic festive delicacy perfect for celebrations or as a delightful everyday treat.",
    ingredients: "Gram Flour, Pure Desi Ghee, Sugar Syrup, Cardamom, Melon Seeds",
    shelfLife: "4 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250g", price: 130 },
      { label: "500g", price: 260 },
      { label: "1 kg", price: 520 }
    ]
  },

  {
    id: "Surati Pista Ghari",
    name: "Surati Pista Ghari",
    gujaratiName: "સુરતી પિસ્તા ઘારી",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "Surat's Special",
    badgeType: "gold",
    image: "Sweets_images/ghari.jpg",
    rating: 4.8,
    reviewsCount: 220,
    description: "Surat’s iconic winter delight: a rich pastry made from pure ghee, enriched with nutty pista filling, and baked until golden. Traditionally relished during the winter months for its warming properties and authentic taste.",
    ingredients: "Koya, Dry-fruits , Desi Ghee , refined flour,sugar , Nutmeg, Cardamom",
    shelfLife: "5 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250g", price: 220 },
      { label: "500g", price: 440 },
      { label: "1 kg", price: 880 }
    ]
  },

  // BENGALI SWEETS


  {
    id: "rasgulla",
    name: "Rasgulla",
    gujaratiName: "રસગુલ્લા · Spongy Chenna Dumplings",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "Light & Soft",
    badgeType: "gold",
    image: "Sweets_images/Rasgulla.jpg",
    rating: 4.8,
    reviewsCount: 195,
    description: "Delicate spongy orbs prepared from fresh cow milk chenna simmered in clarifying light cardamom sugar syrup.",
    ingredients: "Fresh Cow Milk Chenna, Purified Cane Sugar Syrup, Rose Essence",
    shelfLife: "6 Days (Keep Refrigerated)",
    pureVeg: true,
    weightOptions: [
      { label: "1-piece", price: 20 },
    ]
  },

  {
    id: "malai-sandwich",
    name: "Malai Sandwich",
    gujaratiName: "મલાઈ સેન્ડવીચ · Bengali Saffron Delight",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "Fresh Daily",
    badgeType: "red",
    image: "Sweets_images/malai-Sandwich.jpg",
    rating: 4.9,
    reviewsCount: 145,
    description: "Delicate chenna pockets filled with thick clotted saffron malai cream, garnished with silver leaf and sliced almonds.",
    ingredients: "Fresh Chenna, Clotted Milk Cream (Malai), Saffron, Sugar, Dry Fruits",
    shelfLife: "3 Days (Refrigerated)",
    pureVeg: true,
    weightOptions: [
      { label: "1-piece", price: 35 },
    ]
  },
  {
    id: "Rajbhog",
    name: "Rajbhog",
    gujaratiName: "રાજભોગ ·Royal Saffron & Nut Delight",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "Royal Collection",
    badgeType: "gold",
    image: "Sweets_images/rajbhog.jpg",
    rating: 4.8,
    reviewsCount: 220,
    description: "A royal Bengali delicacy made with chenna, saffron, dry fruits, and aromatic spices — a true taste of celebration.",
    ingredients: "Chenna, Saffron, Dry Fruits (Almonds, Pistachios), Cardamom, Sugar",
    shelfLife: " 24 Hrs (Keep Refrigerated)",
    pureVeg: true,
    weightOptions: [
      { label: "1-piece", price: 25 },
    ]
  },

  //                        KHOYA SWEETS                //
  {
    id: "kesar-penda",
    name: "Kesar Penda",
    gujaratiName: "કેસર પેંડા · Royal Saffron Peda",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "Pure Ghee",
    badgeType: "red",
    image: "Sweets_images/Kesar_penda.jpg",
    rating: 4.9,
    reviewsCount: 290,
    description: "Traditional Gujarati soft mawa peda infused with pure Kashmiri saffron threads and green cardamom, topped with sliced pistachios.",
    ingredients: "Fresh Full Cream Milk Mawa, Kashmiri Kesar, Sugar, Cardamom, Iranian Pistachio",
    shelfLife: "12 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250g", price: 140 },
      { label: "500g", price: 280 },
      { label: "1 kg", price: 560 }
    ]
  },
  {
    id: "thabdi-penda",
    name: "Thabdi Penda",
    gujaratiName: "થાબડી પેંડા · Saurashtra Caramelized Peda",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "Heritage Recipe",
    badgeType: "gold",
    image: "Sweets_images/Thabdi-Penda.jpg",
    rating: 5.0,
    reviewsCount: 215,
    description: "Authentic Kathiyawadi dark caramelized milk sweet slow-roasted to rich grainy perfection with golden desi cow ghee.",
    ingredients: "Caramelized Full Cream Milk Solids, Cow Ghee, Unrefined Cane Sugar, Nutmeg",
    shelfLife: "15 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250g", price: 150 },
      { label: "500g", price: 300 },
      { label: "1 kg", price: 600 }
    ]
  },

  {
    id: "Pista-Penda",
    name: "Pista-Penda",
    gujaratiName: "ગુલાબ જાંબુ · Rose Milk Dumplings",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "Bestseller",
    badgeType: "red",
    image: "Sweets_images/Pista_penda.jpg",
    rating: 4.9,
    reviewsCount: 200,
    description: "Soft and aromatic pedas made with pure mawa, infused with real pistachios and slow-cooked in desi cow ghee.",
    ingredients: "Pure Mawa, Pistachios, Desi Ghee , Sugar, Cardamom",
    shelfLife: "2 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250g", price: 125 },
      { label: "500g", price: 250 },
      { label: "1 kg", price: 500 }
    ]
  },

  {
    id: "Milk Cake",
    name: "Milk Cake",
    gujaratiName: "મિલ્ક કેક · Milk Cake",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "Our Special",
    badgeType: "red",
    image: "Sweets_images/MilkCakeSweet.jpg",
    rating: 4.9,
    reviewsCount: 420,
    description: "Golden fried khoya dumplings simmered gently in rose-cardamom perfumed sugar syrup. Soft, succulent, and comforting.",
    ingredients: "Fresh Hariyali Khoya, Desi Ghee , Sugar, Cardamom",
    shelfLife: "3 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250gm -", price: 145 },
      { label: "500gm -", price: 290 },
      { label: "1kg -", price: 580 }
    ]
  },

  {
    id: "gulab-jamun",
    name: "Gulab Jamun",
    gujaratiName: "ગુલાબ જાંબુ · Rose Milk Dumplings",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "Bestseller",
    badgeType: "red",
    image: "Sweets_images/gulab_jambu.jpg",
    rating: 4.9,
    reviewsCount: 420,
    description: "Golden fried khoya dumplings simmered gently in rose-cardamom perfumed sugar syrup. Soft, succulent, and comforting.",
    ingredients: "Fresh Hariyali Khoya, Desi Ghee , Sugar, Cardamom",
    shelfLife: "8 Days",
    pureVeg: true,
    weightOptions: [
      { label: "1-piece", price: 15 }
    ]
  },

  //   // DAIRY SWEETS      //  //

  {
    id: "Shrikhand",
    name: "Shrikhand",
    gujaratiName: "શ્રીખંડ",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "Best-Seller",
    badgeType: "red",
    image: "Sweets_images/shrikhand1.jpg",
    rating: 5.0,
    reviewsCount: 260,
    description: "",
    ingredients: "",
    shelfLife: "",
    pureVeg: true,
    weightOptions: [
      { label: "250g", price: 100 },
      { label: "500g", price: 200 },
      { label: "1 kg", price: 400 }
    ]
  },
  {
    id: "Angoor Rabdi",
    name: "Angoor Rabdi",
    gujaratiName: "અંગૂર રબડી",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "",
    badgeType: "red",
    image: "Sweets_images/angoor rabdi.jpg",
    rating: 5.0,
    reviewsCount: 260,
    description: "",
    ingredients: "",
    shelfLife: "",
    pureVeg: true,
    weightOptions: [
      { label: "250g", price: 120 },
      { label: "500g", price: 240 },
      { label: "1 kg", price: 480 }
    ]
  },
  {
    id: "Ras Malai",
    name: "Ras Malai",
    gujaratiName: "રસ મલાઈ",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "",
    badgeType: "red",
    image: "Sweets_images/rasmalai.jpg",
    rating: 5.0,
    reviewsCount: 260,
    description: "",
    ingredients: "",
    shelfLife: "",
    pureVeg: true,
    weightOptions: [
      { label: "250g", price: 120 },
      { label: "500g", price: 240 },
      { label: "1 kg", price: 480 }
    ]
  },
  {
    id: "Mango Matho",
    name: "Mango Matho",
    gujaratiName: "મેંગો મઠો",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "",
    badgeType: "red",
    image: "Sweets_images/mango_matho.jpg",
    rating: 5.0,
    reviewsCount: 260,
    description: "",
    ingredients: "",
    shelfLife: "",
    pureVeg: true,
    weightOptions: [
      { label: "250g", price: 90 },
      { label: "500g", price: 180 },
      { label: "1 kg", price: 360 }
    ]
  },
  //      GUJARATI SWEETS

  {
    id: "Mohanthal",
    name: "Mohanthal",
    gujaratiName: "મોહનથાળ",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "",
    badgeType: "red",
    image: "Sweets_images/Mohanthal.jpg",
    rating: 5.0,
    reviewsCount: 260,
    description: "A rich and traditional Gujarati sweet made with roasted gram flour, ghee, and sugar, topped with nuts—deliciously creamy, nutty, and aromatic.",
    ingredients: "",
    shelfLife: "3 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250g", price: 130 },
      { label: "500g", price: 260 },
      { label: "1 kg", price: 520 }
    ]
  },
  {
    id: "adadiya-pak",
    name: "Adadiya Pak",
    gujaratiName: "અડદિયા પાક · Winter Herbal Mithai",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "Winter Special",
    badgeType: "red",
    image: "Sweets_images/Adadiya_pak.jpg",
    rating: 5.0,
    reviewsCount: 260,
    description: "Surat's traditional winter energy mithai made with roasted urad dal flour, pure desi ghee, 32 secret Ayurvedic herbs and nuts.",
    ingredients: "Urad Dal Flour, Pure Cow Ghee, Gond (Edible Gum), Pipramul, Almonds, Pistachios, Cardamom, Nutmeg",
    shelfLife: "45 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250g", price: 230 },
      { label: "500g", price: 440 },
      { label: "1 kg", price: 860 }
    ]
  },
  {
    id: "Magaj",
    name: "Magaj",
    gujaratiName: "મગજ · Magaj",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "",
    badgeType: "red",
    image: "Sweets_images/MAGAJ.jpg",
    rating: 5.0,
    reviewsCount: 260,
    description: "A festive delicacy made from gram flour, sugar, and ghee, with a rich nutty flavor and crumbly texture, perfect for celebrations.",
    ingredients: "",
    shelfLife: "6 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250g", price: 130 },
      { label: "500g", price: 260 },
      { label: "1 kg", price: 520 }
    ]
  },

  // MARWADI SWEETS     //
  {
    id: "Malai Ghevar",
    name: "Malai Ghevar",
    gujaratiName: "",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "",
    badgeType: "red",
    image: "Sweets_images/Malai-ghevar.jpg",
    rating: 5.0,
    reviewsCount: 260,
    description: "A festive delicacy made from gram flour, sugar, and ghee, with a rich nutty flavor and crumbly texture, perfect for celebrations.",
    ingredients: "",
    shelfLife: "6 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250g", price: 130 },
      { label: "500g", price: 260 },
      { label: "1 kg", price: 520 }
    ]
  } ,
  {
    id: "Gujiya",
    name: "Gujiya",
    gujaratiName: "",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "",
    badgeType: "red",
    image: "Sweets_images/gujiya.jpg",
    rating: 5.0,
    reviewsCount: 260,
    description: "A festive delicacy made from gram flour, sugar, and ghee, with a rich nutty flavor and crumbly texture, perfect for celebrations.",
    ingredients: "",
    shelfLife: "4 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250g", price: 130 },
      { label: "500g", price: 260 },
      { label: "1 kg", price: 520 }
    ]
  } ,
    {
    id: "Balushai",
    name: "Balushai",
    gujaratiName: "",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "",
    badgeType: "red",
    image: "Sweets_images/balushai.jpg",
    rating: 5.0,
    reviewsCount: 260,
    description: "A festive delicacy made from gram flour, sugar, and ghee, with a rich nutty flavor and crumbly texture, perfect for celebrations.",
    ingredients: "",
    shelfLife: "4 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250g", price: 130 },
      { label: "500g", price: 260 },
      { label: "1 kg", price: 520 }
    ]
  } ,

// SUGAR FREE SWEETS
  
    {
    id: "Dry-Fruit Khajur chikki (Sugar Free)",
    name: "Dry-Fruit Khajur chikki (Sugar Free)",
    gujaratiName: "",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "",
    badgeType: "red",
    image: "Sweets_images/sugar-free.jpg",
    rating: 5.0,
    reviewsCount: 260,
    description: "",
    ingredients: "",
    shelfLife: "15 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250g", price: 350 },
      { label: "500g", price: 700 },
      { label: "1 kg", price: 1400 }
    ]
  } ,
  
    {
    id: "Dry-Fruit anjeer chikki (Sugar Free)",
    name: "Dry-Fruit anjeer chikki (Sugar Free)",
    gujaratiName: "",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "",
    badgeType: "red",
    image: "Sweets_images/anjeer-sugar_free.jpg",
    rating: 5.0,
    reviewsCount: 260,
    description: "",
    ingredients: "",
    shelfLife: "12 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250g", price: 350 },
      { label: "500g", price: 700 },
      { label: "1 kg", price: 1400 }
    ]
  } ,

    // Winter special //

    
    {
    id: "Salam Pax",
    name: "Salam Pax",
    gujaratiName: "",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "",
    badgeType: "red",
    image: "Sweets_images/Salam-Pak.jpg",
    rating: 5.0,
    reviewsCount: 260,
    description: "",
    ingredients: "",
    shelfLife: "12 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250g", price: 240 },
      { label: "500g", price: 480 },
      { label: "1 kg", price: 960 }
    ]
  } ,

  {
    id: "Gajar halwa",
    name: "Gajar halwa",
    gujaratiName: "",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "",
    badgeType: "red",
    image: "Sweets_images/gajar_halwa.jpg",
    rating: 5.0,
    reviewsCount: 260,
    description: "",
    ingredients: "",
    shelfLife: "4 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250g", price: 150 },
      { label: "500g", price: 300 },
      { label: "1 kg", price: 600 }
    ]
  } ,

  // Festival favorites //

  
  {
    id: "Modak",
    name: "Modak",
    gujaratiName: "",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "",
    badgeType: "red",
    image: "Sweets_images/modak.jpg",
    rating: 5.0,
    reviewsCount: 260,
    description: "",
    ingredients: "",
    shelfLife: "2 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250g", price: 130 },
      { label: "500g", price: 260 },
      { label: "1 kg", price: 520 }
    ]
  } ,
   {
    id: "Gujiya_fest",
    name: "Gujiya",
    gujaratiName: "",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "",
    badgeType: "red",
    image: "Sweets_images/gujiya.jpg",
    rating: 5.0,
    reviewsCount: 260,
    description: "A festive delicacy made from gram flour, sugar, and ghee, with a rich nutty flavor and crumbly texture, perfect for celebrations.",
    ingredients: "",
    shelfLife: "4 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250g", price: 130 },
      { label: "500g", price: 260 },
      { label: "1 kg", price: 520 }
    ]
  } ,

   {
    id: "Surati Pista Ghari_fest",
    name: "Surati Pista Ghari",
    gujaratiName: "સુરતી પિસ્તા ઘારી",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "Surat's Special",
    badgeType: "gold",
    image: "Sweets_images/ghari.jpg",
    rating: 4.8,
    reviewsCount: 220,
    description: "Surat’s iconic winter delight: a rich pastry made from pure ghee, enriched with nutty pista filling, and baked until golden. Traditionally relished during the winter months for its warming properties and authentic taste.",
    ingredients: "Koya, Dry-fruits , Desi Ghee , refined flour,sugar , Nutmeg, Cardamom",
    shelfLife: "5 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250g", price: 220 },
      { label: "500g", price: 440 },
      { label: "1 kg", price: 880 }
    ]
  },
  {
    id: "Kaju-katli_fest",
    name: "Kaju katli",
    gujaratiName: "કાજુ કતરી",
    category: "sweets",
    categoryLabel: "Sweets",
    badge: "Bestseller",
    badgeType: "red",
    image: "Sweets_images/Kaju_katli.jpg",
    rating: 4.9,
    reviewsCount: 420,
    description: "Premium cashew fudge made from the finest grade-A cashews, hand-kneaded with pure desi ghee and cardamom, adorned with edible silver leaf.",
    ingredients: "Premium Cashews (100%), Fine Sugar, Cardamom , Silver Vark",
    shelfLife: "20 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250gm", price: 260 },
      { label: "500gm", price: 520 },
      { label: "1kg", price: 1040 }
    ]
  },

 
  // ==================== 2. HAMPERS ====================
  {
    id: "hamper-royal",
    name: "Royal Hamper",
    gujaratiName: "રોયલ ઉમિયા હેરિટેજ હેમ્પર · 4-in-1 Gift Box",
    category: "hampers",
    categoryLabel: "Hampers",
    badge: "Signature Gift",
    badgeType: "gold",
    image: "Sweets_images/Dry-f-hamper1.jpg",
    rating: 5.0,
    reviewsCount: 189,
    description: "Our crowning celebration box containing a luxurious collection of premium sweets and savory delights, beautifully packed to make every celebration extra special and memorable.",
    ingredients: "Assorted Kaju (250g), Almonds (250g), Pistachios (250g), Raisin (250g)",
    shelfLife: "45 Days",
    pureVeg: true,
    weightOptions: [
      // { label: "1 kg Luxury Box", price: 1250 },
      { label: "1.0 kg Royal Box", price: 1299 }
    ]
  },
  {
    id: "hamper-diwali-delight",
    name: "Shubh Utsav Mithai & Namkeen Hamper",
    gujaratiName: "શુભ ઉત્સવ મિઠાઈ અને નમકીન ગિફ્ટ બોક્સ",
    category: "hampers",
    categoryLabel: "Hampers",
    badge: "Festive Best Seller",
    badgeType: "gold",
    image: "Sweets_images/Dry-f-hamper1.jpg",
    rating: 4.9,
    reviewsCount: 142,
    description: "The ideal gift pairing Surat's finest sweets with savory crunch: Motichur Laddu, Kaju Katli, Surti Gathiya, and Spicy Mixture.",
    ingredients: "Motichur Laddu (250g), Kaju Katli (250g), Nylon Sev (200g), Bhavnagari Gathiya (200g)",
    shelfLife: "20 Days",
    pureVeg: true,
    weightOptions: [
      { label: "900g Festive Box", price: 950 },
      { label: "1.8 kg Grand Box", price: 1699 }
    ]
  },
  {
    id: "hamper-wedding-special",
    name: "Rajwadi Shahi Vivah Hamper",
    gujaratiName: "રાજવાડી શાહી વિવાહ હેમ્પર",
    category: "hampers",
    categoryLabel: "Hampers",
    badge: "Custom Gifting",
    badgeType: "red",
    image: "Sweets_images/hamper.jpg",
    rating: 5.0,
    reviewsCount: 96,
    description: "Exquisite wedding and corporate gift basket with customized ribbons, assorted dry fruit mithai, and brass diya.",
    ingredients: "Assorted Cashew & Almond Sweets, Roasted Nuts, Greeting Card",
    shelfLife: "25 Days",
    pureVeg: true,
    weightOptions: [
      { label: "1 kg Box", price: 1350 },
      { label: "2 kg Grand Basket", price: 2499 }
    ]
  },
  {
    id: "dryfruits-royal-box",
    name: "Imperial 7-in-1 Dry Fruit Celebration Hamper",
    gujaratiName: "ઇમ્પિરિયલ રોયલ ડ્રાયફ્રૂટ્સ હેમ્પર (૪-ઇન-૧)",
    category: "hampers",
    categoryLabel: "Dryfruit Hampers",
    subcategory: "Dryfruit Hampers",
    badge: "Royal Special",
    badgeType: "gold",
    image: "Sweets_images/Dry-f-hamper1.jpg",
    rating: 5.0,
    reviewsCount: 230,
    description: "Handcrafted wooden celebration box containing premium California almonds, jumbo cashews, Afghan green raisins, and Iranian roasted salted pistachios.",
    ingredients: "Jumbo Cashews (250g), California Almonds (250g), Iranian Pistachios (250g), Afghan Green Raisins (250g)",
    shelfLife: "180 Days",
    pureVeg: true,
    weightOptions: [
      { label: "1 kg Gift Box", price: 1450 },
      { label: "2 kg Royal Box", price: 2800 }
    ]
  },
  {
    id: "hamper-shahi-dryfruits",
    name: "Shahi Rajwadi Dry Fruit & Mithai Hamper",
    gujaratiName: "શાહી રાજવાડી ડ્રાયફ્રૂટ્સ અને મિઠાઈ બોક્સ",
    category: "hampers",
    categoryLabel: "Dryfruit Hampers",
    subcategory: "Dryfruit Hampers",
    badge: "Bestseller",
    badgeType: "gold",
    image: "Sweets_images/gift-hamper.jpg",
    rating: 4.9,
    reviewsCount: 175,
    description: "A majestic curation of silver-embossed Kaju Katli, roasted salted dry fruits, and rich Anjeer Patra in an exquisite royal red velvet box.",
    ingredients: "Kaju Katli (250g), Anjeer Patra (250g), Roasted Cashews (250g), Roasted Almonds (250g)",
    shelfLife: "30 Days",
    pureVeg: true,
    weightOptions: [
      { label: "1 kg Royal Box", price: 1399 },
      { label: "1.5 kg Grand Box", price: 1999 }
    ]
  },

  // ==================== 3. NAMKEENS ====================
  {
    id: "Bhavnagari-Gathiya",
    name: "Bhavnagari Gathiya",
    gujaratiName: "ભાવનગરી ગાંઠિયા · Surat Special Soft Gathiya",
    category: "namkeens",
    categoryLabel: "Namkeens",
    badge: "",
    badgeType: "red",
    image: "Sweets_images/bhavnagari-gathiya.jpg",
    rating: 4.9,
    reviewsCount: 430,
    description: "Extra soft, melt-in-the-mouth gram flour sticks seasoned with whole black pepper, carom seeds (ajwain), and pure groundnut oil.",
    ingredients: "Premium Besan, Groundnut Oil, Ajwain, Black Pepper, Hing, Rock Salt",
    shelfLife: "45 Days",
    pureVeg: true,
    weightOptions: [
      { label: "200g", price: 60 },
      { label: "400g", price: 120 },
      { label: "1 kg", price: 300 }
    ]
  },
  {
    id: "Fersi-Puri",
    name: "Fersi Puri",
    gujaratiName: "ફરસી પુરી · Farsi Puri",
    category: "namkeens",
    categoryLabel: "Namkeens",
    badge: "Crispy Delight",
    badgeType: "gold",
    image: "sweets_images/Fersi_Puri_2.jpg",
    rating: 4.8,
    reviewsCount: 280,
    description: "Crispy, flaky shortcrust puris made with wheat flour, refined flour, and ghee. Perfect for tea-time snacking or with pickles and chutneys.",
    ingredients: "Wheat Flour, Refined Flour (Maida), Ghee, Salt, Sugar, Ajwain (Carom Seeds)",
    shelfLife: "45 Days",
    pureVeg: true,
    weightOptions: [
      { label: "200g", price: 60 },
      { label: "400g", price: 120 },
      { label: "1 kg", price: 300 }
    ]
  },
  {
    id: "namkeen-tikha-mixture",
    name: "Special Tikha Mixture",
    gujaratiName: "સ્પેશિયલ તીખું મિક્સ ચવાણું",
    category: "namkeens",
    categoryLabel: "Namkeens",
    badge: "Spicy & Crunchy",
    badgeType: "red",
    image: "sweets_images/Thika_mix.jpg",
    rating: 4.8,
    reviewsCount: 310,
    description: "Crunchy medley of spicy sev, roasted peanuts, puffed rice, curry leaves, and secret aromatic spice blend.",
    ingredients: "Sev, Roasted Peanuts, Pressed Rice, Spices, Clove, Asafoetida",
    shelfLife: "30 Days",
    pureVeg: true,
    weightOptions: [
      { label: "200g", price: 60 },
      { label: "400g", price: 120 },
      { label: "1 kg", price: 300 }
    ]
  },

  ,
  {
    id: "Khatta-Meetha-Mixture",
    name: "Khatta-Meetha Mixture",
    gujaratiName: "ખટા-મીઠા મિક્સ ચવાણું",
    category: "namkeens",
    categoryLabel: "Namkeens",
    badge: "Yummy & Crunchy",
    badgeType: "red",
    image: "sweets_images/Khataa-meetha.jpg",
    rating: 4.8,
    reviewsCount: 310,
    description: "Crunchy medley of sev, roasted peanuts, puffed rice, curry leaves, and secret aromatic spice blend.",
    ingredients: "Sev, Roasted Peanuts, Pressed Rice, Spices, Clove, Asafoetida",
    shelfLife: "60 Days",
    pureVeg: true,
    weightOptions: [
      { label: "200g", price: 60 },
      { label: "400g", price: 120 },
      { label: "1 kg", price: 300 }
    ]
  }

  // ==================== 4. LIVE SNACKS ====================
  , {
    id: "live-desi-ghee-jalebi",
    name: "Pure Desi Ghee Jalebi",
    gujaratiName: "શુદ્ધ દેશી ઘી જલેબી · Piping Hot Spirals",
    category: "live-snacks",
    categoryLabel: "Live Snacks",
    badge: "Live Counter",
    badgeType: "red",
    image: "Sweets_images/Jalebi.jpg",
    rating: 5.0,
    reviewsCount: 650,
    description: "Fried crisp on order in 100% Pure Amul Cow Desi Ghee, dipped in aromatic saffron-cardamom sugar syrup. Pair with fresh Papdi Gathiya!",
    ingredients: "Fermented Fine Flour, Pure Cow Desi Ghee, Kesar Syrup, Cardamom",
    shelfLife: "Consume within 24 Hours",
    pureVeg: true,
    weightOptions: [
      { label: "250g (Hot)", price: 130 },
      { label: "500g (Hot)", price: 260 },
      { label: "1 kg (Hot)", price: 520 }
    ]
  },
  {
    id: "live-khaman",
    name: "Surati Khaman ",
    gujaratiName: "સુરતી ખમણ · Spongy Steamed",
    category: "live-snacks",
    categoryLabel: "Live Snacks",
    badge: "Made Fresh Daily",
    badgeType: "gold",
    image: "sweets_images/Khaman.jpg",
    rating: 4.9,
    reviewsCount: 490,
    description: "Soft, steamed gram flour cubes tempered with mustard seeds, green chillies, sesame seeds, fresh coriander.",
    ingredients: "Gram Flour, Lemon Juice, Mustard Seeds, Green Chillies, Fresh Coriander",
    shelfLife: "Consume Same Day",
    pureVeg: true,
    weightOptions: [
      { label: "250g (With Chutney)", price: 60 },
      { label: "500g (With Chutney)", price: 120 },
      { label: "1 kg (Family Pack)", price: 240 }
    ]
  },
  {
    id: "Punjabi Samosa",
    name: "Punjabi Samosa (4 Pcs)",
    gujaratiName: "પંજાબી સમોસા",
    category: "live-snacks",
    categoryLabel: "Live Snacks",
    badge: "Our's Special",
    badgeType: "gold",
    image: "Sweets_images/samosa.jpg",
    rating: 5.0,
    reviewsCount: 380,
    description: "Flaky golden triangular pastry stuffed with cumin spiced potatoes, green peas, cashews, raisins, and mint-tamarind dip.",
    ingredients: "Refined Flour, Potatoes, Green Peas, Cashews, Raisins, Garam Masala",
    shelfLife: "Consume Hot / Within 5 Hours",
    pureVeg: true,
    weightOptions: [
      { label: "Plate (2 Pcs)", price: 40 }
    ]
  },
  {
    id: "Pyajj Kachori",
    name: "Pyajj Kachori",
    gujaratiName: "પ્યાજ કચોરી",
    category: "live-snacks",
    categoryLabel: "Live Snacks",
    badge: "Must Try",
    badgeType: "gold",
    image: "Sweets_images/Pyajj_kachori.jpg",
    rating: 4.8,
    reviewsCount: 390,
    description: "Crispy, golden kachori filled with a flavorful spiced onion mixture—crunchy outside, deliciously savory inside and mint-tamarind dip.",
    ingredients: "Refined Flour, Potatoes, Onions, Garam Masala",
    shelfLife: "Consume Hot / Within 4 Hours",
    pureVeg: true,
    weightOptions: [
      { label: "Plate (2 Pcs)", price: 50 }
    ]
  }

  // ==================== 5. DAIRY PRODUCTS ====================
  , {
    id: "Punjabi Dahi",
    name: "Punjabi Dahi",
    gujaratiName: "પંજાબી દહીં",
    category: "dairy",
    categoryLabel: "Dairy Products",
    badge: "Creamy & Fresh",
    badgeType: "green",
    image: "Sweets_images/homemade-yogurt-indian-dahi-curd.jpg",
    rating: 5.0,
    reviewsCount: 220,
    description: "Creamy, thick, and refreshingly smooth dahi with a rich, traditional taste—perfectly chilled and delicious with every bite.",
    ingredients: "Milk , starter cultures",
    shelfLife: "3 Days (Refrigerate at 4°C)",
    pureVeg: true,
    weightOptions: [
      { label: "250 gm", price: 35 },
      { label: "500 gm", price: 70 },
      { label: "1 kg", price: 140 }
    ]
  },
  {
    id: "Malai Paneer",
    name: "Malai Paneer",
    gujaratiName: "મલાઈ પનીર",
    category: "dairy",
    categoryLabel: "Dairy Products",
    badge: "Fresh & Soft",
    badgeType: "red",
    image: "Sweets_images/fresh-malai-paneer.jpg",
    rating: 4.9,
    reviewsCount: 310,
    description: "Soft, creamy, and fresh paneer with a rich milky taste and smooth texture—perfect for delicious curries and special meals..",
    ingredients: "Milk , coagulant",
    shelfLife: "2 Days (Keep Chilled)",
    pureVeg: true,
    weightOptions: [
      { label: "250 gm", price: 125 },
      { label: "500 gm", price: 250 },
      { label: "1 kg", price: 500 }
    ]
  },
  {
    id: "dairy-sweet-lassi",
    name: "Special Malai Lassi",
    gujaratiName: "સ્પેશિયલ મલાઈદાર લસ્સી · Creamy Yogurt Drink",
    category: "dairy",
    categoryLabel: "Dairy Products",
    badge: "Thick & Delicious",
    badgeType: "gold",
    image: "Sweets_images/Lassi.jpg",
    rating: 4.8,
    reviewsCount: 290,
    description: "Traditional hand-churned thick sweet curd drink topped with a generous dollop of fresh yellow malai cream and rose water.",
    ingredients: "Fresh Curd, Sweet Cream Malai, Cardamom, Pure Rose Water",
    shelfLife: "2 Days (Keep Chilled)",
    pureVeg: true,
    weightOptions: [
      { label: "300ml glass", price: 40 },
    ]
  },
  {
    id: "dairy-cold-cocoa",
    name: "Cold Cocoa",
    gujaratiName: "સ્પેશિયલ કોલ્ડ કોકો · Cold Cocoa",
    category: "dairy",
    categoryLabel: "Dairy Products",
    badge: "Surat's Famous",
    badgeType: "gold",
    image: "Sweets_images/Cold_cocoa.jpg",
    rating: 5.0,
    reviewsCount: 250,
    description: "Surat's legendary velvety, chilled thick cocoa blend slow-simmered with Belgian cocoa and pure full-cream dairy milk. Chilled fresh daily.",
    shelfLife: "2 Days (Keep Chilled)",
    pureVeg: true,
    weightOptions: [
      { label: "300ml glass", price: 40 },
    ]
  }

  // ==================== 6. BAKERY PRODUCTS ====================
  , {
    id: "bakery-surti-nankhatai",
    name: "Surati Butter Nankhatai",
    gujaratiName: "સુરતી બટર નાનખટાઈ · Cardamom Shortbread",
    category: "bakery",
    categoryLabel: "Bakery Products",
    badge: "Buttery & Crispy",
    badgeType: "gold",
    image: "Sweets_images/Nankhati.jpg",
    rating: 4.9,
    reviewsCount: 340,
    description: "Surat's historical baked shortbread cookie made with pure butter, fine flour, semolina, and freshly crushed green cardamom. Crumbles gently.",
    ingredients: "Pure Butter, Wheat Flour, Semolina, Sugar, Cardamom Powder",
    shelfLife: "45 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250g Box", price: 120 },
      { label: "500g Box", price: 240 },
      { label: "1 kg Box", price: 480 }
    ]
  },
  {
    id: "bakery-maska-khari",
    name: "Crispy Maska Khari (Puff)",
    gujaratiName: "મસ્કા ખારી · Golden Flaky Tea Puff",
    category: "bakery",
    categoryLabel: "Bakery Products",
    badge: "Tea-Time Favorite",
    badgeType: "gold",
    image: "Sweets_images/Khari.jpg",
    rating: 4.8,
    reviewsCount: 260,
    description: "Ultra-crisp multi-layered golden puff biscuit baked to airy tenderness. The quintessential accompaniment to Gujarati masala chai.",
    ingredients: "Refined Flour, Pure Butter & Shortening, Rock Salt",
    shelfLife: "30 Days",
    pureVeg: true,
    weightOptions: [
      { label: "200g Pack", price: 60 },
      { label: "400g Pack", price: 120 }
    ]
  },
  {
    id: "bakery-makhaniya",
    name: "Makhaniya",
    gujaratiName: "મખનીયા · Makhaniya ",
    category: "bakery",
    categoryLabel: "Bakery Products",
    badge: "Buttery Crunch",
    badgeType: "gold",
    image: "Sweets_images/makhniya.webp",
    rating: 4.7,
    reviewsCount: 210,
    description: "Crispy, buttery, and perfectly baked bakery bites with a rich, savory flavor—light, flaky, and deliciously satisfying with every crunch",
    shelfLife: "90 Days",
    pureVeg: true,
    weightOptions: [
      { label: "200g Pack", price: 80 },
      { label: "400g Pack", price: 160 },
      { label: "1 kg Pack", price: 400 }
    ]
  },

  // ==================== 7. CHOCOLATES HAMPERS ====================

  {
    id: "chocolates-artisan-hamper",
    name: "Luxury Handcrafted Truffle Hamper",
    gujaratiName: "લક્ઝરી હેન્ડક્રાફ્ટેડ ચોકલેટ બોક્સ (૧૬ નંગ)",
    category: "chocolates",
    categoryLabel: "Chocolates Hampers",
    badge: "Artisanal",
    badgeType: "gold",
    image: "Sweets_images/Imported Chocolate Hamper.jpg",
    rating: 4.9,
    reviewsCount: 165,
    description: "Assortment of 16 handcrafted Belgian chocolate pralines infused with Indian notes: Kesar Almond, Roasted Pistachio Praline, and Dark Mocha.",
    ingredients: "Belgian Couverture Chocolate, Roasted Almonds, Pistachios, Cardamom Ganache",
    shelfLife: "60 Days",
    pureVeg: true,
    weightOptions: [
      { label: "16 Pcs Gift Box", price: 650 },
      { label: "24 Pcs Grand Box", price: 1150 }
    ]
  },
  {
    id: "hamper-royal-chocolate",
    name: "Royal Belgian Chocolate & Truffle Gift Hamper",
    gujaratiName: "રોયલ બેલ્જિયન ચોકલેટ અને ટ્રફલ્સ ગિફ્ટ હેમ્પર",
    category: "chocolates",
    categoryLabel: "Chocolate Hampers",
    subcategory: "Chocolate Hampers",
    badge: "Exclusive",
    badgeType: "gold",
    image: "Sweets_images/chocolate-hamper.jpg",
    rating: 5.0,
    reviewsCount: 198,
    description: "Premium handcrafted gift box with assorted dark chocolate truffles, roasted almond clusters, hazelnut pralines, and signature cold cocoa mix.",
    ingredients: "Belgian Dark Chocolate, Milk Truffles, Roasted California Almonds, Roasted Hazelnuts, Cocoa Powder",
    shelfLife: "90 Days",
    pureVeg: true,
    weightOptions: [
      { label: "Luxury Box", price: 799 },
      { label: "Grand Box", price: 1499 }
    ]
  },

  // ==================== 8. DRY FRUITS ====================
  {
    id: "dryfruits-roasted-cashews",
    name: "Slow Roasted Salted Cashews",
    gujaratiName: "રોસ્ટેડ કાજુ · Hand Roasted with Himalayan Salt",
    category: "dry-fruits",
    categoryLabel: "Dry Fruits",
    badge: "Healthy Crunch",
    badgeType: "gold",
    image: "Sweets_images/Buy-Roasted-Cashew.jpg",
    rating: 4.9,
    reviewsCount: 180,
    description: "Crunchy jumbo cashew kernels gently roasted in desi cow ghee and dusted with pure pink Himalayan rock salt.",
    ingredients: "Jumbo Cashews, Desi Ghee, Himalayan Pink Salt",
    shelfLife: "90 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250g Jar", price: 340 },
      { label: "500g Jar", price: 650 }
    ]
  }
  ,
  {
    id: "Premium pistachios",
    name: "Premium Pistachios",
    gujaratiName: "પ્રીમિયમ પિસ્તા · Premium Pistachios",
    category: "dry-fruits",
    categoryLabel: "Dry Fruits",
    badge: "Healthy munch",
    badgeType: "gold",
    image: "sweets_images/Pista.jpg",
    rating: 4.9,
    reviewsCount: 180,
    description: "Crunchy, premium-quality pistachios with a rich, naturally sweet flavor—perfectly roasted for a delicious and satisfying healthy snack.",
    ingredients: "Premium Pistachios",
    shelfLife: "120 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250g Jar", price: 450 },
      { label: "500g Jar", price: 900 }
    ]
  }
  ,
  {
    id: "Asoorteed Almonds",
    name: "Assorted Almonds",
    gujaratiName: "પ્રીમિયમ પિસ્તા · Assorted Almonds",
    category: "dry-fruits",
    categoryLabel: "Dry Fruits",
    badge: "Premimum Quality",
    badgeType: "gold",
    image: "sweets_images/roastedbadam.jpg",
    rating: 4.9,
    reviewsCount: 180,
    description: "Crunchy, premium-quality pistachios with a rich, naturally sweet flavor—perfectly roasted for a delicious and satisfying healthy snack.",
    ingredients: "Premium Pistachios",
    shelfLife: "120 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250g Jar", price: 450 },
      { label: "500g Jar", price: 900 }
    ]
  }

  ,
  {
    id: "Shahi Anjeer",
    name: "Shahi Anjeer",
    gujaratiName: "શાહી અંજીર · Shahi Anjeer",
    category: "dry-fruits",
    categoryLabel: "Dry Fruits",
    badge: "Premimum Quality",
    badgeType: "gold",
    image: "sweets_images/anjeer.jpg",
    rating: 4.7,
    reviewsCount: 180,
    description: "Naturally sweet, premium-quality dried figs with a soft, chewy texture and rich flavor—perfect for a wholesome, nutritious, and delicious snack.",
    ingredients: "Premium Pistachios",
    shelfLife: "600 Days",
    pureVeg: true,
    weightOptions: [
      { label: "250g Jar", price: 360 },
      { label: "500g Jar", price: 720 }
    ]
  }
];

// Helper to look up product by ID
function getProductById(id) {
  return PRODUCTS_DATA.find(p => p.id === id);
}

// Category metadata
const CATEGORIES_DATA = [
  { id: "all", name: "All Delights", count: PRODUCTS_DATA.length, icon: "" },
  { id: "sweets", name: "Sweets", count: PRODUCTS_DATA.filter(p => p.category === "sweets").length, icon: "", desc: "Pure Desi Ghee Mithai & Bengali Specialties" },
  { id: "hampers", name: "Hampers", count: PRODUCTS_DATA.filter(p => p.category === "hampers").length, icon: "", desc: "Festive & Wedding Royal Gift Boxes" },
  { id: "namkeens", name: "Namkeens", count: PRODUCTS_DATA.filter(p => p.category === "namkeens").length, icon: "", desc: "Surati Gathiya, Sev & Crispy Farsan" },
  { id: "live-snacks", name: "Live Snacks", count: PRODUCTS_DATA.filter(p => p.category === "live-snacks").length, icon: "", desc: "Hot Desi Ghee Jalebi, Khaman & Samosa" },
  { id: "dairy", name: "Dairy Products", count: PRODUCTS_DATA.filter(p => p.category === "dairy").length, icon: "", desc: "Kesar Shrikhand, Basundi & Fresh Lassi" },
  { id: "bakery", name: "Bakery Products", count: PRODUCTS_DATA.filter(p => p.category === "bakery").length, icon: "", desc: "Surti Nankhatai & Crispy Butter Khari" },
  { id: "chocolates", name: "Chocolates Hampers", count: PRODUCTS_DATA.filter(p => p.category === "chocolates").length, icon: "", desc: "Surat Famous Cold Cocoa & Truffles" },
  { id: "dry-fruits", name: "Dry Fruits", count: PRODUCTS_DATA.filter(p => p.category === "dry-fruits").length, icon: "", desc: "Hand-Picked Royal Almonds, Cashews & Pista" }
];
