exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments().primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('whatsapp').notNullable();
  });
};

exports.down = (knex) => knex.schema.dropTable('users');
