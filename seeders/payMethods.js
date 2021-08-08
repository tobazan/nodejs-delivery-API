module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('PayMethods', 
      [
        {   name: "Nativa BNA",
            isValid: false,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {   name: "Master_macro",
            isValid: true,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {   name: "Mercadopago",
            isValid: true,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {   name: "Visa_hsbc",
            isValid: false,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {   name: "Crypto",
            isValid: false,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {   name: "Visa_BNA",
            isValid: false,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {   name: "Master_BBVA",
            isValid: false,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {   name: "Efectivo",
            isValid: true,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {   name: "Debito",
            isValid: true,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Uala",
            isValid: false,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Mastercard ICBC",
            isValid: true,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ])
},
down: async (queryInterface, Sequelize) => {
  await queryInterface.bulkDelete('PayMethods', null, {});
}
};