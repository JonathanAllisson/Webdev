exports.up = (knex) => {
  return knex.schema.createTable('posts', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.boolean('vaccinated').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

exports.down = (knex) => knex.schema.dropTable('posts');
