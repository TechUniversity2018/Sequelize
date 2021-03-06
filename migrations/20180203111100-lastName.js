

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn('users', 'lastName', { type: Sequelize.STRING }),

  /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */


  down: (queryInterface, Sequelize) =>
    queryInterface.removeColumn('users', 'lastName'),

  /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

};
