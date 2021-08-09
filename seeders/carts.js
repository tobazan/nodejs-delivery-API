module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Carts', 
      [
        {
          user_id: 3,
          address_id: 6,
          payMethod_id: 3,
          total_price:  3570.54,
          status:  "ENVIADO",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 5,
          address_id: 11,
          payMethod_id: 9,
          total_price:  1815.07,
          status:  "CONFIRMADO",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ])
},
down: async (queryInterface, Sequelize) => {
  await queryInterface.bulkDelete('Carts', null, {});
}
};