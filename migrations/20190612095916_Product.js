exports.up = function(knex, Promise) {
  return   knex.schema.hasTable('Product').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('Product', function(table) {
                table.increments('id');
                table.integer('id_type').unsigned();
                table.foreign('id_type').references('id').inTable('Type_product');
                table.integer('id_promotion').unsigned();
                table.foreign('id_promotion').references('id').inTable('Promotion');
                table.string('name', 50).notNullable();
                table.integer('price', 50).notNullable();
                table.integer('warranty').notNullable();
                table.string('image', 50).notNullable();
                table.text('description', 200).notNullable();
            });
        }
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Product');
};
