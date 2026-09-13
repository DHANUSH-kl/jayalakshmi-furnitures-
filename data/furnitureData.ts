export interface Product {
  id: string;
  name: string;
  category: string;
  subCategory?: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  rating: number;
  reviewCount: number;
  image: string;
  material: string;
  finish: string;
  dimensions?: string;
  inStock: boolean;
  tag?: string;
  isBestSeller?: boolean;
}

export interface MegaMenuItem {
  title: string;
  links: string[];
}

export interface MegaMenuCategory {
  name: string;
  columns: {
    heading: string;
    items: string[];
  }[];
  promo: {
    title: string;
    subtitle: string;
    badge: string;
    image: string;
    cta: string;
  };
}

export const MEGA_MENUS: Record<string, MegaMenuCategory> = {
  "Sofas": {
    name: "Sofas",
    columns: [
      {
        heading: "Sofa",
        items: [
          "All Sofas",
          "Fabric Sofas",
          "Wooden Sofas",
          "3 Seater Sofas",
          "2 Seater Sofas",
          "1 Seater Sofas",
          "3+1+1 Sofa Sets",
          "Sofa Cum Beds",
          "L Shaped Sofas",
          "Leather Sofas",
          "Chaise Loungers",
          "Outdoor Sofas",
          "Divans"
        ]
      },
      {
        heading: "Sofa Cum Bed",
        items: [
          "All Sofa Cum Beds",
          "Wooden Sofa Cum Beds",
          "Fabric Sofa Cum Beds"
        ]
      },
      {
        heading: "Recliners",
        items: [
          "All Recliners",
          "1 Seater Recliners",
          "2 Seater Recliners",
          "3 Seater Recliners"
        ]
      },
      {
        heading: "Seating",
        items: [
          "Lounge Chairs",
          "Accent Chairs",
          "Arm Chair",
          "Wingback Chairs",
          "Loveseats",
          "Benches",
          "Ottomans",
          "Stools"
        ]
      }
    ],
    promo: {
      title: "Cherish Moments Create Memories",
      subtitle: "with Affordable Sofa Sets",
      badge: "UPTO 55% OFF",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop&q=80",
      cta: "Shop Sofas"
    }
  },
  "Living": {
    name: "Living",
    columns: [
      {
        heading: "All Sofas",
        items: [
          "Fabric Sofas",
          "Wooden Sofas",
          "3 Seater Sofas",
          "2 Seater Sofas",
          "1 Seater Sofas",
          "Sofa Sets",
          "L Shaped Sofas",
          "Chaise Loungers",
          "Divans",
          "Leather Sofas"
        ]
      },
      {
        heading: "Chairs & Seating",
        items: [
          "All Chairs",
          "Lounge Chairs",
          "Arm Chairs",
          "Wing Chairs",
          "Swing Chair",
          "Rocking Chairs",
          "Stools",
          "Benches",
          "Loveseats",
          "Ottomans & Pouffes",
          "Room Dividers"
        ]
      },
      {
        heading: "Tables & TV Units",
        items: [
          "All Tables",
          "Coffee Tables",
          "Coffee Table Sets",
          "Side Tables",
          "Nesting Tables",
          "Console Table",
          "Laptop Tables",
          "All TV Units",
          "Solid Wood TV Units",
          "Engineered Wood TV Units",
          "Home Temples"
        ]
      },
      {
        heading: "Living Storage & Furnishing",
        items: [
          "Bookshelves",
          "Chest of Drawers",
          "Cabinet & Sideboards",
          "Display Units",
          "Wall Shelves",
          "Shoe Racks",
          "Sofa Covers",
          "Cushion Covers",
          "Cushion Fillers",
          "Rugs And Carpets",
          "Table Runners",
          "Floor Runners"
        ]
      }
    ],
    promo: {
      title: "Crafting Your Cozy Corner",
      subtitle: "With Our Living Room Collection",
      badge: "UPTO 55% OFF",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop&q=80",
      cta: "Explore Living"
    }
  },
  "Bedroom": {
    name: "Bedroom",
    columns: [
      {
        heading: "Beds",
        items: [
          "All Beds",
          "King Size Beds",
          "Queen Size Beds",
          "Single Beds",
          "Hydraulic Storage Beds",
          "Drawer Storage Beds",
          "Upholstered Beds",
          "Solid Teak Beds",
          "Bunk Beds",
          "Poster Beds"
        ]
      },
      {
        heading: "Mattresses",
        items: [
          "King Size Mattresses",
          "Queen Size Mattresses",
          "Orthopedic Mattresses",
          "Memory Foam",
          "Pocket Spring",
          "Dual Comfort Mattresses"
        ]
      },
      {
        heading: "Storage & Dressing",
        items: [
          "Wardrobes (2 to 6 Door)",
          "Sliding Wardrobes",
          "Dressing Tables",
          "Bedside Tables",
          "Chest of Drawers",
          "Jewellery Units"
        ]
      }
    ],
    promo: {
      title: "Restful Nights, Royal Style",
      subtitle: "Engineered For Peak Comfort",
      badge: "FLAT 45% OFF",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&auto=format&fit=crop&q=80",
      cta: "Shop Bedroom"
    }
  },
  "Mattress": {
    name: "Mattress",
    columns: [
      {
        heading: "By Comfort",
        items: [
          "Orthopedic Support",
          "Ultra Plush Soft",
          "Medium Firm",
          "Dual Sided",
          "Natural Latex",
          "Cooling Gel Foam"
        ]
      },
      {
        heading: "By Size",
        items: [
          "King Size (78x72)",
          "Queen Size (78x60)",
          "Custom Coorg Spec Size",
          "Single Bed Size",
          "Kids Mattresses"
        ]
      },
      {
        heading: "Bedding & Accessories",
        items: [
          "Waterproof Mattress Protectors",
          "Memory Foam Pillows",
          "Microfiber Duvets",
          "Fitted Cotton Bed Sheets",
          "Mattress Toppers"
        ]
      }
    ],
    promo: {
      title: "100-Night Trial Guarantee",
      subtitle: "Doctor Recommended Spine Alignment",
      badge: "STARTING ₹6,999",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&auto=format&fit=crop&q=80",
      cta: "Find Your Mattress"
    }
  },
  "Dining": {
    name: "Dining",
    columns: [
      {
        heading: "Dining Sets",
        items: [
          "All Dining Table Sets",
          "6 Seater Dining Sets",
          "4 Seater Dining Sets",
          "8 Seater Dining Sets",
          "Dining Sets with Benches",
          "Solid Teak Dining Sets",
          "Marble Top Dining Sets"
        ]
      },
      {
        heading: "Dining Chairs & Storage",
        items: [
          "Dining Chairs",
          "Dining Benches",
          "Bar Stools",
          "Crockery Units",
          "Kitchen Cabinets",
          "Bar Cabinets & Trolleys"
        ]
      }
    ],
    promo: {
      title: "Grand Gatherings in Coorg",
      subtitle: "100% Solid Sheesham & Teak Wood",
      badge: "UPTO 50% OFF",
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&auto=format&fit=crop&q=80",
      cta: "Explore Dining"
    }
  },
  "Storage": {
    name: "Storage",
    columns: [
      {
        heading: "Living & Bedroom Storage",
        items: [
          "Wardrobes",
          "Bookshelves",
          "Chest of Drawers",
          "Display Units",
          "Trunks & Storage Boxes"
        ]
      },
      {
        heading: "Entryway & Dining Storage",
        items: [
          "Shoe Racks",
          "Console Tables",
          "Crockery Units",
          "Sideboards & Cabinets",
          "Wall Mounted Storage"
        ]
      }
    ],
    promo: {
      title: "Clutter-Free Beautiful Homes",
      subtitle: "Smart Storage Solutions",
      badge: "UPTO 40% OFF",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&auto=format&fit=crop&q=80",
      cta: "Shop Storage"
    }
  }
};

export const NAV_CATEGORIES = [
  "Sofas",
  "Living",
  "Bedroom",
  "Mattress",
  "Dining",
  "Storage",
  "Study & Office",
  "Outdoor",
  "Decor & Furnishing",
  "Interiors",
  "New Arrivals"
];

export const CATEGORY_GRID_ITEMS = [
  {
    id: "sofas",
    name: "SOFAS",
    category: "Living",
    count: "340+ Designs",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&auto=format&fit=crop&q=80",
    badge: "Bestseller"
  },
  {
    id: "beds",
    name: "BEDS",
    category: "Bedroom",
    count: "210+ Designs",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&auto=format&fit=crop&q=80",
    badge: "Solid Teak"
  },
  {
    id: "mattresses",
    name: "MATTRESSES",
    category: "Mattress",
    count: "85+ Models",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&auto=format&fit=crop&q=80",
    badge: "Orthopedic"
  },
  {
    id: "dining",
    name: "DINING",
    category: "Dining",
    count: "130+ Sets",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=700&auto=format&fit=crop&q=80",
    badge: "Sheesham"
  },
  {
    id: "tv-units",
    name: "TV UNITS",
    category: "Living",
    count: "115+ Designs",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&auto=format&fit=crop&q=80",
    badge: "Popular"
  },
  {
    id: "coffee-tables",
    name: "COFFEE TABLES",
    category: "Living",
    count: "160+ Designs",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=700&auto=format&fit=crop&q=80",
    badge: "From ₹2,299"
  },
  {
    id: "cabinets",
    name: "CABINETS",
    category: "Living",
    count: "95+ Designs",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=700&auto=format&fit=crop&q=80",
    badge: "Handcrafted"
  },
  {
    id: "wardrobes",
    name: "WARDROBES",
    category: "Bedroom",
    count: "140+ Designs",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=700&auto=format&fit=crop&q=80",
    badge: "Custom Fit"
  },
  {
    id: "sofa-cum-bed",
    name: "SOFA CUM BED",
    category: "Living",
    count: "70+ Designs",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=700&auto=format&fit=crop&q=80",
    badge: "Space Saver"
  },
  {
    id: "bookshelves",
    name: "BOOKSHELVES",
    category: "Living",
    count: "90+ Designs",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=700&auto=format&fit=crop&q=80",
    badge: "Solid Wood"
  },
  {
    id: "study-tables",
    name: "ALL STUDY TABLES",
    category: "Living",
    count: "80+ Designs",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=700&auto=format&fit=crop&q=80",
    badge: "Ergonomic"
  },
  {
    id: "kitchen-cabinets",
    name: "KITCHEN CABINETS",
    category: "Dining",
    count: "65+ Designs",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=700&auto=format&fit=crop&q=80",
    badge: "Modular"
  }
];

export const HERO_SLIDES = [
  {
    id: 1,
    badge: "THE FESTIVE REFRESH",
    subtitle: "Handcrafted Sheesham & Teak Wood",
    title: "Coffee Tables",
    priceTag: "Starting From ₹2,299",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=1200&auto=format&fit=crop&q=80",
    cta: "Explore Festive Deals",
    terms: "*T&C Apply | Kushalnagar Store Exclusive"
  },
  {
    id: 2,
    badge: "ROYAL HERITAGE OF COORG",
    subtitle: "Premium Italian Fabric & Pure Wood Frame",
    title: "Luxury Sofa Sets",
    priceTag: "Starting From ₹19,499",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&auto=format&fit=crop&q=80",
    cta: "View Sofa Collection",
    terms: "*Free Delivery across Kodagu & Mysore"
  },
  {
    id: 3,
    badge: "EVERLASTING ELEGANCE",
    subtitle: "Solid Teak 6-Seater Family Dining",
    title: "Master Dining Suites",
    priceTag: "Starting From ₹24,999",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1200&auto=format&fit=crop&q=80",
    cta: "Shop Dining Sets",
    terms: "*10-Year Craftsmanship Guarantee"
  }
];

export const HERO_RIGHT_CARDS = {
  top: {
    brand: "Penguin SLEEP",
    title: "Sink Into Comfort",
    subtitle: "The support your body deserves.",
    category: "Mattresses",
    priceText: "Starting From",
    price: "₹14,999*",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&auto=format&fit=crop&q=80",
    terms: "*T&C Apply"
  },
  bottom: {
    tag: "MASSIVE PRICE DROP",
    subtag: "Limited Time Deal",
    productName: "Calmora Solid Bed",
    priceText: "NOW AT",
    price: "₹18,999",
    originalPrice: "₹34,999",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=80"
  }
};

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Calmora Solid Teak Wood King Bed With Hydraulic Storage",
    category: "Bedroom",
    subCategory: "Beds",
    price: 18999,
    originalPrice: 34999,
    discountPercentage: 45,
    rating: 4.8,
    reviewCount: 312,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&auto=format&fit=crop&q=80",
    material: "Grade-A Indian Teak",
    finish: "Warm Walnut Finish",
    dimensions: "78 L x 72 W x 36 H (Inches)",
    inStock: true,
    tag: "MASSIVE PRICE DROP",
    isBestSeller: true
  },
  {
    id: "p2",
    name: "Alpina Round Fluted Dual Nesting Coffee Table Set",
    category: "Living",
    subCategory: "Coffee Tables",
    price: 2299,
    originalPrice: 4999,
    discountPercentage: 54,
    rating: 4.9,
    reviewCount: 428,
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=700&auto=format&fit=crop&q=80",
    material: "Solid Mango Wood & Marble Inset",
    finish: "Honey Oak Finish",
    dimensions: "36 Dia x 18 H (Inches)",
    inStock: true,
    tag: "FESTIVE REFRESH",
    isBestSeller: true
  },
  {
    id: "p3",
    name: "Coorg Heritage 3+1+1 Handcrafted Teak Sofa Set",
    category: "Living",
    subCategory: "Sofas",
    price: 36499,
    originalPrice: 62999,
    discountPercentage: 42,
    rating: 4.9,
    reviewCount: 189,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&auto=format&fit=crop&q=80",
    material: "100% Solid Teak with High-Density Foam",
    finish: "Natural Teak & Sage Green Linen",
    dimensions: "74 L x 32 W x 34 H (Inches)",
    inStock: true,
    tag: "BESTSELLER",
    isBestSeller: true
  },
  {
    id: "p4",
    name: "Orthopedic 7-Zone Dual Comfort Spine-Support Mattress (King)",
    category: "Mattress",
    subCategory: "Mattresses",
    price: 14999,
    originalPrice: 28999,
    discountPercentage: 48,
    rating: 4.9,
    reviewCount: 540,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&auto=format&fit=crop&q=80",
    material: "Natural Latex & HR Foam",
    finish: "Breathable Organic Bamboo Quilt",
    dimensions: "78 L x 72 W x 8 H (Inches)",
    inStock: true,
    tag: "DOCTOR APPROVED",
    isBestSeller: true
  },
  {
    id: "p5",
    name: "Nisarga 6-Seater Solid Sheesham Wood Dining Set with Cushioned Chairs",
    category: "Dining",
    subCategory: "Dining Sets",
    price: 26999,
    originalPrice: 47999,
    discountPercentage: 43,
    rating: 4.7,
    reviewCount: 215,
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=700&auto=format&fit=crop&q=80",
    material: "Pure Seasoned Sheesham Wood",
    finish: "Provincial Teak Gloss",
    dimensions: "60 L x 36 W x 30 H (Inches)",
    inStock: true,
    tag: "COORG SPECIAL",
    isBestSeller: true
  },
  {
    id: "p6",
    name: "Valenza Fluted Glass Sideboard & Crockery Cabinet",
    category: "Living",
    subCategory: "Cabinets",
    price: 16499,
    originalPrice: 28999,
    discountPercentage: 43,
    rating: 4.8,
    reviewCount: 142,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=700&auto=format&fit=crop&q=80",
    material: "Solid Acacia & Reeded Toughened Glass",
    finish: "Deep Walnut & Brass Accents",
    dimensions: "52 L x 18 W x 32 H (Inches)",
    inStock: true,
    tag: "HOT SELLER",
    isBestSeller: true
  },
  {
    id: "p7",
    name: "Kaveri 3-Door Solid Wood Wardrobe with Full-Length Mirror",
    category: "Bedroom",
    subCategory: "Wardrobes",
    price: 28499,
    originalPrice: 48999,
    discountPercentage: 41,
    rating: 4.8,
    reviewCount: 97,
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=700&auto=format&fit=crop&q=80",
    material: "Treated Sheesham Wood & Cane Inlay",
    finish: "Warm Amber Lustre",
    dimensions: "58 L x 22 W x 76 H (Inches)",
    inStock: true,
    tag: "HANDCRAFTED",
    isBestSeller: false
  },
  {
    id: "p8",
    name: "Madrid Velvet Wingback Lounge Chair with Footrest",
    category: "Living",
    subCategory: "Chairs",
    price: 11999,
    originalPrice: 21999,
    discountPercentage: 45,
    rating: 4.9,
    reviewCount: 167,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&auto=format&fit=crop&q=80",
    material: "Kiln-dried Hardwood & Microfiber Velvet",
    finish: "Royal Emerald & Solid Brass Cap Legs",
    dimensions: "32 L x 30 W x 40 H (Inches)",
    inStock: true,
    tag: "LUXURY",
    isBestSeller: true
  }
];

export const STORE_INFO = {
  name: "Jayalakshmi Furniture Store",
  tagline: "Kushalnagar's Premier Destination for Pure Wood Living",
  address: "BM Road, Opposite APMC Yard, Kushalnagar, Kodagu (Coorg), Karnataka - 571234",
  landmark: "5 Mins from Cauvery Nisargadhama Gate",
  phone: "+91 81059 22089",
  alternatePhone: "+91 81059 22089",
  email: "care@jayalakshmifurniture.com",
  timing: "Open 7 Days a Week: 9:30 AM to 9:00 PM",
  whatsappNumber: "918105922089",
  mapCoordinates: "12.4552° N, 75.9583° E",
  deliveryAreas: [
    "Kushalnagar Town",
    "Madikeri",
    "Somwarpet",
    "Virajpet",
    "Gonikoppal",
    "Mysore",
    "Hunsur",
    "Periyapatna",
    "Hassan",
    "Sakleshpur"
  ]
};
