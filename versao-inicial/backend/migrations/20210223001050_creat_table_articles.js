
exports.up = function(knex) {
  return knex.schema.createTable('articles', table => {
    table.increments('id').primary()
    table.string('name').notNull()
    table.string('description', 1000).notNull()
    table.string('imageUrl', 1000)
    table.binary('content').notNull()
    table.integer('usersId').references('id')
      .inTable('user').notNull()
    table.integer('categoriesId').references('id')
      .inTable('category').notNull()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('articles')
};
