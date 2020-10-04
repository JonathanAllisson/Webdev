const { table } = require("../connection");

exports.up = (knex) => {
  return knex.schema.createTable('comments', (table) => {
    table.increments();
    table.string('content').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.integer('user_id').notNullable();
    table.integer('post_id').notNullable();

    table.foreign('user_id').references('id').inTable('users');
    table.foreign('post_id').references('id').inTable('posts');
  })
};

exports.down = (knex) => knex.schema.dropTable('comments');
