module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Addresses', 'user_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        field: 'id'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    }),
    await queryInterface.addColumn('Carts', 'user_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        field: 'id'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    }),
    await queryInterface.addColumn('Carts', 'address_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Addresses',
        field: 'id'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    }),
    await queryInterface.addColumn('Carts', 'payMethod_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'PayMethods',
        field: 'id'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    }),
    await queryInterface.addColumn('Cart_Items', 'cart_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Carts',
        field: 'id'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    }),
    await queryInterface.addColumn('Cart_Items', 'product_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Products',
        field: 'id'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Addresses', 'user_id')
    await queryInterface.removeColumn('Carts', 'user_id')
    await queryInterface.removeColumn('Carts', 'address_id')
    await queryInterface.removeColumn('Carts', 'payMethod_id')
    await queryInterface.removeColumn('Cart_Items', 'cart_id')
    await queryInterface.removeColumn('Cart_Items', 'product_id')
  }
};
