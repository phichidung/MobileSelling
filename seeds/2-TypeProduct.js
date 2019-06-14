exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('Type_product').del()
        .then(function () {
            // Inserts seed entries
            return knex('Type_product').insert([
                {
                    id: 1,
                    name: 'Iphone',
                    description: 'Iphone Category',
                    status: '1'
                },
                {
                    id: 2,
                    name: 'Samsung',
                    description: 'Samsung Category',
                    status: '1'
                },
                {
                    id: 3,
                    name: 'Oppo',
                    description: 'Oppo Category',
                    status: '1'
                },
                {
                    id: 4,
                    name: 'Nokia',
                    description: 'Nokia Category',
                    status: '1'
                },
                {
                    id: 5,
                    name: 'BlackBerry',
                    description: 'BlackBerry Category',
                    status: '1'
                },
            ]);
        });
};
