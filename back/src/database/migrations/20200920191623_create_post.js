exports.up = (knex) => {
  return knex.schema.createTable('posts', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.string('type').notNullable();
    table.boolean('vaccinated').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.string('img');

    table.integer('user_id').notNullable();

    table.foreign('user_id').references('id').inTable('users');
  });
};

exports.down = (knex) => knex.schema.dropTable('posts');
