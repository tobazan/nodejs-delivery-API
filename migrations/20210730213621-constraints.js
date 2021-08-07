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
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Addresses', 'user_id')
  }
};
