module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Cart_Items', 
      [
        {
          cart_id: 1,
          product_id: 1,
          quantity: 3,
          unit_price: 879.7,
          total_price: 2639.1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cart_id: 1,
          product_id: 26,
          quantity: 2,
          unit_price: 465.72,
          total_price: 931.44,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cart_id: 2,
          product_id: 35,
          quantity: 1,
          unit_price: 632.93,
          total_price: 632.93,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cart_id: 2,
          product_id: 24,
          quantity: 1,
          unit_price: 794.18,
          total_price: 794.18,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cart_id: 2,
          product_id: 39,
          quantity: 2,
          unit_price: 193.98,
          total_price: 387.96,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ])
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Cart_Items', null, {});
    }
};