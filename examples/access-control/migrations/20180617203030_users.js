
exports.up = async (knex) => {
  await knex.schema.createTable('User', (table) => {
    table.increments('id').primary();
    table.string('username');
    table.string('password');
  });
  await knex.schema.createTable('Project', (table) => {
    table.increments('id').primary();
    table.string('title');
  });
  await knex.schema.createTable('User_Project', (table) => {
      table.integer('user_id');
      table.integer('project_id');
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('User');
    await knex.schema.dropTable('Project');
    await knex.schema.dropTable('User_Project');
};
