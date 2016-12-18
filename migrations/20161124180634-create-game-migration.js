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
      'game',
      {
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true
        },
        ai_id_1: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          references: {
            model: 'player_ai',
            key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        },
        ai_id_2: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          references: {
            model: 'player_ai',
            key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        },
        odds: {
          type: Sequelize.FLOAT.UNSIGNED,
          allowNull: false,
          defaultValue: 1.0
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
    return queryInterface.dropTable('game');
  }
};
