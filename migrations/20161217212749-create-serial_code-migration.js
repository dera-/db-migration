'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'serial_code',
      {
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true
        },
        code: {
          type: Sequelize.UUID,
          allowNull: false,
          unique: true
        },
        user_id: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: true
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        }
      }
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('serial_code');
  }
};
