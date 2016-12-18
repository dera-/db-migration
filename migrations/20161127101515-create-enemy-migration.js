'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable(
      'enemy',
      {
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: 'AIちゃん'
        },
        type: {
          type: Sequelize.STRING,
          allowNull: false
        },
        file_key: {
          type: Sequelize.STRING,
          allowNull: false
        },
        local_image_path: {
          type: Sequelize.STRING,
          allowNull: false
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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('enemy');
  }
};
