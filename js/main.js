// Global variables
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Product data for different stores
window.products = {
    jewellery: [ // Janta Jewellery - 20 items
        {
            id: 1,
            name: "22K Gold Necklace Set",
            price: 45000,
            image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            category: "jewellery",
            rating: 4.8,
            description: "Traditional 22K gold necklace set with matching earrings"
        },
        {
            id: 2,
            name: "Diamond Ring",
            price: 25000,
            image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            category: "jewellery",
            rating: 4.9,
            description: "Beautiful diamond ring with 18K white gold setting"
        },
        {
            id: 3,
            name: "Pearl Necklace",
            price: 8000,
            image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "jewellery",
            rating: 4.6,
            description: "Elegant freshwater pearl necklace"
        },
        {
            id: 4,
            name: "Silver Anklet Set",
            price: 3500,
            image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "jewellery",
            rating: 4.5,
            description: "Traditional silver anklet with bells"
        },
        {
            id: 5,
            name: "Ruby Earrings",
            price: 12000,
            image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "jewellery",
            rating: 4.7,
            description: "Stunning ruby earrings with gold setting"
        },
        {
            id: 6,
            name: "Emerald Pendant",
            price: 18000,
            image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "jewellery",
            rating: 4.8,
            description: "Natural emerald pendant with diamond accents"
        },
        {
            id: 7,
            name: "Gold Bangle Set",
            price: 28000,
            image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "jewellery",
            rating: 4.6,
            description: "Set of 4 traditional gold bangles"
        },
        {
            id: 8,
            name: "Sapphire Ring",
            price: 15000,
            image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            category: "jewellery",
            rating: 4.7,
            description: "Blue sapphire ring with white gold band"
        },
        {
            id: 9,
            name: "Gold Chain",
            price: 22000,
            image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            category: "jewellery",
            rating: 4.5,
            description: "Classic gold chain for men"
        },
        {
            id: 10,
            name: "Silver Necklace",
            price: 5000,
            image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "jewellery",
            rating: 4.4,
            description: "Elegant silver necklace with pendant"
        },
        {
            id: 11,
            name: "Diamond Earrings",
            price: 32000,
            image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "jewellery",
            rating: 4.9,
            description: "Stunning diamond stud earrings"
        },
        {
            id: 12,
            name: "Gold Mangalsutra",
            price: 18000,
            image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            category: "jewellery",
            rating: 4.8,
            description: "Traditional gold mangalsutra for married women"
        },
        {
            id: 13,
            name: "Silver Ring",
            price: 2500,
            image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            category: "jewellery",
            rating: 4.3,
            description: "Beautiful silver ring with stone work"
        },
        {
            id: 14,
            name: "Gold Nose Ring",
            price: 8500,
            image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "jewellery",
            rating: 4.6,
            description: "Traditional gold nose ring with pearl"
        },
        {
            id: 15,
            name: "Pearl Earrings",
            price: 4500,
            image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "jewellery",
            rating: 4.5,
            description: "Elegant pearl drop earrings"
        },
        {
            id: 16,
            name: "Gold Toe Ring",
            price: 3000,
            image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "jewellery",
            rating: 4.4,
            description: "Traditional gold toe ring set"
        },
        {
            id: 17,
            name: "Ruby Necklace",
            price: 28000,
            image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            category: "jewellery",
            rating: 4.7,
            description: "Stunning ruby necklace with gold chain"
        },
        {
            id: 18,
            name: "Silver Bracelet",
            price: 1800,
            image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "jewellery",
            rating: 4.3,
            description: "Elegant silver bracelet for daily wear"
        },
        {
            id: 19,
            name: "Gold Pendant",
            price: 12000,
            image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "jewellery",
            rating: 4.6,
            description: "Beautiful gold pendant with stone work"
        },
        {
            id: 20,
            name: "Diamond Pendant",
            price: 35000,
            image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            category: "jewellery",
            rating: 4.9,
            description: "Exquisite diamond pendant with white gold chain"
        }
    ],
    vastralaya: [ // Janta Vastralaya - 20 items
        {
            id: 21,
            name: "Silk Saree Collection",
            price: 3500,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "vastralaya",
            rating: 4.7,
            description: "Traditional silk saree with zari work"
        },
        {
            id: 22,
            name: "Kurta Pajama Set",
            price: 1200,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "vastralaya",
            rating: 4.5,
            description: "Comfortable cotton kurta pajama set"
        },
        {
            id: 23,
            name: "Designer Lehenga",
            price: 8500,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "vastralaya",
            rating: 4.8,
            description: "Embroidered lehenga with matching blouse"
        },
        {
            id: 24,
            name: "Sherwani Set",
            price: 12000,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "vastralaya",
            rating: 4.9,
            description: "Elegant sherwani for special occasions"
        },
        {
            id: 25,
            name: "Salwar Kameez",
            price: 2200,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "vastralaya",
            rating: 4.6,
            description: "Stylish salwar kameez with dupatta"
        },
        {
            id: 26,
            name: "Dhoti Kurta",
            price: 1800,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "vastralaya",
            rating: 4.4,
            description: "Traditional dhoti kurta for ceremonies"
        },
        {
            id: 27,
            name: "Bridal Lehenga",
            price: 25000,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "vastralaya",
            rating: 4.9,
            description: "Heavy bridal lehenga with stone work"
        },
        {
            id: 28,
            name: "Casual Kurta",
            price: 800,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "vastralaya",
            rating: 4.3,
            description: "Comfortable casual kurta for daily wear"
        },
        {
            id: 29,
            name: "Anarkali Suit",
            price: 3800,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "vastralaya",
            rating: 4.7,
            description: "Elegant anarkali suit for parties"
        },
        {
            id: 30,
            name: "Pathani Suit",
            price: 2800,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "vastralaya",
            rating: 4.5,
            description: "Traditional pathani suit for men"
        },
        {
            id: 31,
            name: "Gown Collection",
            price: 6500,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "vastralaya",
            rating: 4.6,
            description: "Beautiful designer gowns"
        },
        {
            id: 32,
            name: "Jodhpuri Suit",
            price: 4500,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "vastralaya",
            rating: 4.8,
            description: "Classic jodhpuri suit for formal occasions"
        },
        {
            id: 33,
            name: "Palazzo Suit",
            price: 3200,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "vastralaya",
            rating: 4.4,
            description: "Comfortable palazzo suit for daily wear"
        },
        {
            id: 34,
            name: "Bandhgala Suit",
            price: 5500,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "vastralaya",
            rating: 4.7,
            description: "Elegant bandhgala suit for weddings"
        },
        {
            id: 35,
            name: "Sharara Suit",
            price: 4200,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "vastralaya",
            rating: 4.6,
            description: "Stylish sharara suit for parties"
        },
        {
            id: 36,
            name: "Achkan Suit",
            price: 7800,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "vastralaya",
            rating: 4.8,
            description: "Traditional achkan suit for ceremonies"
        },
        {
            id: 37,
            name: "Crop Top Lehenga",
            price: 6800,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "vastralaya",
            rating: 4.5,
            description: "Modern crop top lehenga for young women"
        },
        {
            id: 38,
            name: "Kurta with Waistcoat",
            price: 2200,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "vastralaya",
            rating: 4.4,
            description: "Stylish kurta with matching waistcoat"
        },
        {
            id: 39,
            name: "Saree Blouse",
            price: 1500,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "vastralaya",
            rating: 4.3,
            description: "Designer blouse for sarees"
        },
        {
            id: 40,
            name: "Dhoti Set",
            price: 1200,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "vastralaya",
            rating: 4.2,
            description: "Traditional dhoti set for religious ceremonies"
        }
    ],
    rediment: [ // Janta Rediment - 20 items
        {
            id: 41,
            name: "Traditional Bed Set",
            price: 4500,
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1016&q=80",
            category: "rediment",
            rating: 4.6,
            description: "Comfortable bed set with traditional design"
        },
        {
            id: 42,
            name: "Decorative Wall Art",
            price: 1200,
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            category: "rediment",
            rating: 4.4,
            description: "Beautiful wall art for home decoration"
        },
        {
            id: 43,
            name: "Table Lamp",
            price: 800,
            image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "rediment",
            rating: 4.5,
            description: "Elegant table lamp for study room"
        },
        {
            id: 44,
            name: "Cushion Covers",
            price: 400,
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1016&q=80",
            category: "rediment",
            rating: 4.3,
            description: "Colorful cushion covers for sofa"
        },
        {
            id: 45,
            name: "Floor Rug",
            price: 2500,
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            category: "rediment",
            rating: 4.7,
            description: "Traditional floor rug with geometric patterns"
        },
        {
            id: 46,
            name: "Curtain Set",
            price: 1800,
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1016&q=80",
            category: "rediment",
            rating: 4.5,
            description: "Elegant curtain set for living room"
        },
        {
            id: 47,
            name: "Vase Set",
            price: 600,
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            category: "rediment",
            rating: 4.4,
            description: "Decorative vase set for center table"
        },
        {
            id: 48,
            name: "Wall Clock",
            price: 1200,
            image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "rediment",
            rating: 4.6,
            description: "Traditional wall clock with wooden frame"
        },
        {
            id: 49,
            name: "Bedside Table",
            price: 3200,
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1016&q=80",
            category: "rediment",
            rating: 4.5,
            description: "Wooden bedside table with drawer"
        },
        {
            id: 50,
            name: "Mirror Frame",
            price: 1500,
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            category: "rediment",
            rating: 4.4,
            description: "Decorative mirror with carved frame"
        },
        {
            id: 51,
            name: "Throw Pillows",
            price: 300,
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1016&q=80",
            category: "rediment",
            rating: 4.3,
            description: "Soft throw pillows for sofa"
        },
        {
            id: 52,
            name: "Photo Frames",
            price: 250,
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            category: "rediment",
            rating: 4.2,
            description: "Set of 6 photo frames for memories"
        },
        {
            id: 53,
            name: "Candle Holders",
            price: 450,
            image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "rediment",
            rating: 4.4,
            description: "Elegant candle holders for decoration"
        },
        {
            id: 54,
            name: "Plant Pots",
            price: 350,
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1016&q=80",
            category: "rediment",
            rating: 4.3,
            description: "Beautiful ceramic plant pots"
        },
        {
            id: 55,
            name: "Table Runner",
            price: 280,
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            category: "rediment",
            rating: 4.2,
            description: "Traditional table runner for dining"
        },
        {
            id: 56,
            name: "Wall Shelf",
            price: 1800,
            image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "rediment",
            rating: 4.5,
            description: "Wooden wall shelf for display"
        },
        {
            id: 57,
            name: "Doormat",
            price: 200,
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1016&q=80",
            category: "rediment",
            rating: 4.1,
            description: "Welcome doormat for entrance"
        },
        {
            id: 58,
            name: "Storage Box",
            price: 750,
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            category: "rediment",
            rating: 4.4,
            description: "Decorative storage box for organization"
        },
        {
            id: 59,
            name: "Ceiling Fan",
            price: 2800,
            image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "rediment",
            rating: 4.6,
            description: "Modern ceiling fan with light"
        },
        {
            id: 60,
            name: "Bedside Lamp",
            price: 650,
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1016&q=80",
            category: "rediment",
            rating: 4.3,
            description: "Touch bedside lamp for bedroom"
        }
    ],
    books: [ // Janta Books - 20 items
        {
            id: 61,
            name: "Bhagavad Gita",
            price: 150,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "books",
            rating: 4.9,
            description: "Sacred Hindu scripture with commentary"
        },
        {
            id: 62,
            name: "Ramayana",
            price: 200,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "books",
            rating: 4.8,
            description: "Epic tale of Lord Rama with illustrations"
        },
        {
            id: 63,
            name: "Mahabharata",
            price: 300,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "books",
            rating: 4.7,
            description: "Complete Mahabharata with detailed stories"
        },
        {
            id: 64,
            name: "Vedas Collection",
            price: 500,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "books",
            rating: 4.9,
            description: "Complete collection of four Vedas"
        },
        {
            id: 65,
            name: "Upanishads",
            price: 250,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "books",
            rating: 4.8,
            description: "Philosophical texts with translations"
        },
        {
            id: 66,
            name: "Puranas Set",
            price: 800,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "books",
            rating: 4.6,
            description: "Complete set of 18 Puranas"
        },
        {
            id: 67,
            name: "Ayurveda Guide",
            price: 180,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "books",
            rating: 4.5,
            description: "Complete guide to Ayurvedic medicine"
        },
        {
            id: 68,
            name: "Yoga Sutras",
            price: 120,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "books",
            rating: 4.7,
            description: "Patanjali's Yoga Sutras with commentary"
        },
        {
            id: 69,
            name: "Gita Press Books",
            price: 100,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "books",
            rating: 4.6,
            description: "Collection of spiritual books from Gita Press"
        },
        {
            id: 70,
            name: "Sanskrit Dictionary",
            price: 350,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "books",
            rating: 4.4,
            description: "Comprehensive Sanskrit to Hindi dictionary"
        },
        {
            id: 71,
            name: "Vedic Mathematics",
            price: 220,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "books",
            rating: 4.5,
            description: "Ancient Indian mathematical techniques"
        },
        {
            id: 72,
            name: "Astrology Guide",
            price: 280,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "books",
            rating: 4.3,
            description: "Complete guide to Vedic astrology"
        },
        {
            id: 73,
            name: "Palmistry Book",
            price: 150,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "books",
            rating: 4.2,
            description: "Learn palm reading and fortune telling"
        },
        {
            id: 74,
            name: "Mantra Collection",
            price: 180,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "books",
            rating: 4.6,
            description: "Sacred mantras with meanings and usage"
        },
        {
            id: 75,
            name: "Temple Architecture",
            price: 450,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "books",
            rating: 4.7,
            description: "Ancient Indian temple architecture guide"
        },
        {
            id: 76,
            name: "Classical Music",
            price: 320,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "books",
            rating: 4.5,
            description: "Guide to Indian classical music and ragas"
        },
        {
            id: 77,
            name: "Cooking Scriptures",
            price: 200,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "books",
            rating: 4.4,
            description: "Traditional Indian cooking methods and recipes"
        },
        {
            id: 78,
            name: "Meditation Guide",
            price: 160,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "books",
            rating: 4.6,
            description: "Complete meditation and mindfulness guide"
        },
        {
            id: 79,
            name: "Festival Calendar",
            price: 120,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "books",
            rating: 4.3,
            description: "Hindu festivals and their significance"
        },
        {
            id: 80,
            name: "Sacred Texts Set",
            price: 1200,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "books",
            rating: 4.9,
            description: "Complete set of all major Hindu scriptures"
        }
    ],
    sports: [ // Janta Sports - 20 items
        {
            id: 81,
            name: "Cricket Bat",
            price: 2500,
            image: "https://images.unsplash.com/photo-1571019613454-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            category: "sports",
            rating: 4.6,
            description: "Professional grade cricket bat"
        },
        {
            id: 82,
            name: "Football",
            price: 800,
            image: "https://images.unsplash.com/photo-1571019613454-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            category: "sports",
            rating: 4.5,
            description: "Size 5 professional football"
        },
        {
            id: 83,
            name: "Yoga Mat",
            price: 600,
            image: "https://images.unsplash.com/photo-1571019613454-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            category: "sports",
            rating: 4.7,
            description: "Non-slip yoga mat for practice"
        },
        {
            id: 84,
            name: "Dumbbells Set",
            price: 1500,
            image: "https://images.unsplash.com/photo-1571019613454-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            category: "sports",
            rating: 4.4,
            description: "Adjustable dumbbells set 5-25kg"
        },
        {
            id: 85,
            name: "Badminton Racket",
            price: 1200,
            image: "https://images.unsplash.com/photo-1571019613454-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            category: "sports",
            rating: 4.6,
            description: "Professional badminton racket"
        },
        {
            id: 86,
            name: "Table Tennis Set",
            price: 2000,
            image: "https://images.unsplash.com/photo-1571019613454-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            category: "sports",
            rating: 4.5,
            description: "Complete table tennis set with table"
        },
        {
            id: 87,
            name: "Kho Kho Kit",
            price: 800,
            image: "https://images.unsplash.com/photo-1571019613454-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            category: "sports",
            rating: 4.3,
            description: "Traditional Kho Kho game kit"
        },
        {
            id: 88,
            name: "Kabaddi Court",
            price: 5000,
            image: "https://images.unsplash.com/photo-1571019613454-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            category: "sports",
            rating: 4.7,
            description: "Professional Kabaddi court setup"
        },
        {
            id: 89,
            name: "Cricket Ball",
            price: 150,
            image: "https://images.unsplash.com/photo-1571019613454-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            category: "sports",
            rating: 4.4,
            description: "Professional cricket ball"
        },
        {
            id: 90,
            name: "Tennis Racket",
            price: 1800,
            image: "https://images.unsplash.com/photo-1571019613454-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            category: "sports",
            rating: 4.5,
            description: "Professional tennis racket"
        },
        {
            id: 91,
            name: "Basketball",
            price: 1200,
            image: "https://images.unsplash.com/photo-1571019613454-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            category: "sports",
            rating: 4.6,
            description: "Official size basketball"
        },
        {
            id: 92,
            name: "Volleyball",
            price: 900,
            image: "https://images.unsplash.com/photo-1571019613454-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            category: "sports",
            rating: 4.4,
            description: "Professional volleyball"
        },
        {
            id: 93,
            name: "Gilli Danda Set",
            price: 300,
            image: "https://images.unsplash.com/photo-1571019613454-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            category: "sports",
            rating: 4.2,
            description: "Traditional Gilli Danda game set"
        },
        {
            id: 94,
            name: "Carrom Board",
            price: 1500,
            image: "https://images.unsplash.com/photo-1571019613454-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            category: "sports",
            rating: 4.5,
            description: "Professional carrom board with pieces"
        },
        {
            id: 95,
            name: "Chess Set",
            price: 800,
            image: "https://images.unsplash.com/photo-1571019613454-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            category: "sports",
            rating: 4.6,
            description: "Wooden chess set with board"
        },
        {
            id: 96,
            name: "Ludo Game",
            price: 400,
            image: "https://images.unsplash.com/photo-1571019613454-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            category: "sports",
            rating: 4.3,
            description: "Traditional Ludo board game"
        },
        {
            id: 97,
            name: "Snake & Ladder",
            price: 350,
            image: "https://images.unsplash.com/photo-1571019613454-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            category: "sports",
            rating: 4.2,
            description: "Classic Snake & Ladder game"
        },
        {
            id: 98,
            name: "Tug of War Rope",
            price: 1200,
            image: "https://images.unsplash.com/photo-1571019613454-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            category: "sports",
            rating: 4.4,
            description: "Strong rope for tug of war"
        },
        {
            id: 99,
            name: "Marbles Set",
            price: 200,
            image: "https://images.unsplash.com/photo-1571019613454-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            category: "sports",
            rating: 4.1,
            description: "Colorful glass marbles set"
        },
        {
            id: 100,
            name: "Kite Flying Kit",
            price: 450,
            image: "https://images.unsplash.com/photo-1571019613454-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            category: "sports",
            rating: 4.3,
            description: "Traditional kite with thread"
        }
    ],
    beauty: [ // Janta Beauty - 20 items
        {
            id: 101,
            name: "Kumkum Powder",
            price: 50,
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "beauty",
            rating: 4.5,
            description: "Traditional kumkum for tilak"
        },
        {
            id: 102,
            name: "Chandan Paste",
            price: 80,
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "beauty",
            rating: 4.6,
            description: "Pure sandalwood paste for skin"
        },
        {
            id: 103,
            name: "Haldi Powder",
            price: 120,
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "beauty",
            rating: 4.4,
            description: "Organic turmeric powder for beauty"
        },
        {
            id: 104,
            name: "Mehendi Cone",
            price: 100,
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "beauty",
            rating: 4.7,
            description: "Natural henna cone for mehendi"
        },
        {
            id: 105,
            name: "Kajal Stick",
            price: 60,
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "beauty",
            rating: 4.5,
            description: "Traditional kajal for eyes"
        },
        {
            id: 106,
            name: "Bindi Set",
            price: 150,
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "beauty",
            rating: 4.6,
            description: "Decorative bindi collection"
        },
        {
            id: 107,
            name: "Sindoor",
            price: 70,
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "beauty",
            rating: 4.4,
            description: "Traditional sindoor for married women"
        },
        {
            id: 108,
            name: "Gulal Powder",
            price: 90,
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "beauty",
            rating: 4.3,
            description: "Colorful gulal for Holi festival"
        },
        {
            id: 109,
            name: "Agarwood Incense",
            price: 200,
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "beauty",
            rating: 4.6,
            description: "Natural agarwood incense sticks"
        },
        {
            id: 110,
            name: "Rose Water",
            price: 120,
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "beauty",
            rating: 4.5,
            description: "Pure rose water for skin care"
        },
        {
            id: 111,
            name: "Aloe Vera Gel",
            price: 180,
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "beauty",
            rating: 4.7,
            description: "Natural aloe vera gel for skin"
        },
        {
            id: 112,
            name: "Neem Soap",
            price: 80,
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "beauty",
            rating: 4.4,
            description: "Antibacterial neem soap"
        },
        {
            id: 113,
            name: "Coconut Oil",
            price: 150,
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "beauty",
            rating: 4.6,
            description: "Pure coconut oil for hair care"
        },
        {
            id: 114,
            name: "Sesame Oil",
            price: 200,
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "beauty",
            rating: 4.5,
            description: "Traditional sesame oil for massage"
        },
        {
            id: 115,
            name: "Amla Powder",
            price: 100,
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "beauty",
            rating: 4.4,
            description: "Amla powder for hair growth"
        },
        {
            id: 116,
            name: "Shikakai Powder",
            price: 90,
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "beauty",
            rating: 4.3,
            description: "Natural shikakai for hair wash"
        },
        {
            id: 117,
            name: "Reetha Soap",
            price: 70,
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "beauty",
            rating: 4.2,
            description: "Natural reetha soap nuts"
        },
        {
            id: 118,
            name: "Multani Mitti",
            price: 60,
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "beauty",
            rating: 4.5,
            description: "Fuller's earth for face pack"
        },
        {
            id: 119,
            name: "Besan Powder",
            price: 80,
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "beauty",
            rating: 4.4,
            description: "Gram flour for natural face pack"
        },
        {
            id: 120,
            name: "Natural Face Pack",
            price: 250,
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "beauty",
            rating: 4.6,
            description: "Complete natural face pack kit"
        }
    ]
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    setupEventListeners();
    checkUserStatus();
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    // Cart icon click
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', showCart);
    }

    // Contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Remove featured products loading
// loadFeaturedProducts();

// Add smooth scrolling for all internal links
document.addEventListener('DOMContentLoaded', function() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Add animation on scroll for services and reviews
    setupScrollAnimations();
});

function setupScrollAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .review-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Add hover effects for service cards
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add hover effects for review cards
document.addEventListener('DOMContentLoaded', function() {
    const reviewCards = document.querySelectorAll('.review-card');
    
    reviewCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.01)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes animateIn {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .animate-in {
        animation: animateIn 0.6s ease forwards;
    }
`;
document.head.appendChild(style);

// Create product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-rating">
                <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
                <span>(${product.rating})</span>
            </div>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <button class="add-to-cart" onclick="addToCart('${product.id}')">Add to Cart</button>
        </div>
    `;
    return card;
}

// Cart functions
function addToCart(productId) {
    // Find product
    let product = null;
    for (const category in products) {
        product = products[category].find(p => p.id === productId);
        if (product) break;
    }

    if (!product) return;

    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
    
    // Show notification
    showNotification('Product added to cart!');
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

function showCart() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    let cartContent = 'Your Cart:\n\n';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        cartContent += `${item.name} x${item.quantity} - $${itemTotal.toFixed(2)}\n`;
    });

    cartContent += `\nTotal: $${total.toFixed(2)}`;
    
    if (confirm(cartContent + '\n\nProceed to checkout?')) {
        window.location.href = 'checkout.html';
    }
}

// Search functionality
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const productName = card.querySelector('.product-title').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Form handlers
function handleContactSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name') || e.target.querySelector('input[type="text"]').value;
    const email = formData.get('email') || e.target.querySelector('input[type="email"]').value;
    const message = formData.get('message') || e.target.querySelector('textarea').value;
    
    // Simulate form submission
    showNotification('Thank you for your message! We\'ll get back to you soon.');
    e.target.reset();
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Simulate newsletter subscription
    showNotification('Thank you for subscribing to our newsletter!');
    e.target.reset();
}

// User status check
function checkUserStatus() {
    const loginBtn = document.querySelector('.btn-login');
    const dashboardBtn = document.querySelector('.btn-dashboard');
    
    if (currentUser) {
        if (loginBtn) loginBtn.textContent = `Welcome, ${currentUser.name}`;
        if (dashboardBtn) dashboardBtn.style.display = 'inline-block';
    } else {
        if (loginBtn) loginBtn.textContent = 'Login';
        if (dashboardBtn) dashboardBtn.style.display = 'none';
    }
}

// Utility functions
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #667eea;
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Export functions for use in other pages
window.addToCart = addToCart;
window.showCart = showCart;
window.products = products;
window.cart = cart;
window.currentUser = currentUser; 

// Responsive Navbar Hamburger Toggle
window.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger-menu');
  const navMenu = document.querySelector('.nav-menu');
  const navActions = document.querySelector('.nav-actions');
  if (hamburger && navMenu && navActions) {
    hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      navActions.classList.toggle('active');
    });
    // Optional: Close menu when clicking a nav link (on mobile)
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navActions.classList.remove('active');
      });
    });
  }
});