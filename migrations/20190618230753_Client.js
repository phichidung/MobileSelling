
exports.up = function(knex, Promise) {
    return knex.schema.hasTable('Client').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('Client', function (table) {
                table.increments('id');
                table.string('name', 50).notNullable();
                table.string('username', 255).notNullable();
                table.string('password', 255).notNullable();
                table.string('phone', 255).notNullable();
                table.integer('gender', 11).notNullable();
                table.integer('age', 10).notNullable();
                table.text('address', 50).notNullable();
                table.string('email', 255).notNullable();
                table.string('secret', 255).notNullable();
            });
        }
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Client');
};
