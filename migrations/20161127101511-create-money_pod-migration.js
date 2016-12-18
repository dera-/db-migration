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
      'money_pod',
      {
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true
        },
        player_id: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          references: {
            model: 'player',
            key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        },
        money: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          defaultValue: 0
        },
        game_id: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          references: {
            model: 'game',
            key: 'id'
          }
        },
        is_player: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        bet_target: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          references: {
            model: 'player_ai',
            key: 'id'
          }
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
    return queryInterface.dropTable('money_pod');
  }
};
