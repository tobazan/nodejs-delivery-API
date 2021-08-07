module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Products', 
      [
        {
            name: "Wine - Penfolds Koonuga Hill",
            price: 879.7,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Food Colouring - Orange",
            price: 865.33,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "V8 - Vegetable Cocktail",
            price: 362.36,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Cake - Mini Potato Pancake",
            price: 359.23,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Pasta - Lasagna Noodle, Frozen",
            price: 689.56,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Garlic",
            price: 83.62,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Pasta - Bauletti, Chicken White",
            price: 727.27,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Kale - Red",
            price: 132.29,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Cucumber - English",
            price: 292.5,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Apple - Delicious, Golden",
            price: 712.75,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "White Fish - Filets",
            price: 197.19,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Creamers - 10%",
            price: 656.09,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Wine - Maipo Valle Cabernet",
            price: 951.93,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Cod - Salted, Boneless",
            price: 882.62,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Cheese Cloth No 60",
            price: 684.71,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Wine - Toasted Head",
            price: 993.07,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Plate Foam Laminated 9in Blk",
            price: 256.46,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Salt - Table",
            price: 848.56,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Frangelico",
            price: 309.23,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Dried Peach",
            price: 571.47,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Vinegar - Balsamic",
            price: 787.39,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tamarillo",
            price: 224.06,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Chicken - Ground",
            price: 323.72,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Cafe Royale",
            price: 794.18,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "The Pop Shoppe - Black Cherry",
            price: 925.28,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Salmon Steak - Cohoe 8 Oz",
            price: 465.72,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Orange Roughy 4/6 Oz",
            price: 207.27,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Flour - Teff",
            price: 314.86,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Sugar Thermometer",
            price: 110.33,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Chicken - Wieners",
            price: 622.92,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Jicama",
            price: 774.6,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Chinese Foods - Thick Noodles",
            price: 395.87,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Lettuce - Iceberg",
            price: 551.82,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Bread - Pain Au Liat X12",
            price: 470.88,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Pork - Smoked Kassler",
            price: 632.93,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Pickerel - Fillets",
            price: 816.59,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Marjoram - Fresh",
            price: 763.26,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tuna - Fresh",
            price: 263.66,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Wine - Red Oakridge Merlot",
            price: 193.98,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tea - Vanilla Chai",
            price: 469.88,
            createdAt: new Date(),
            updatedAt: new Date()
        }
      ])
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Products', null, {});
    }
};