
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: "user", email: "user@gmail.com", password: "$2a$10$a9uZfoNck1DnWlTR231c8.mcpHwycBJvKOGvw/OyHakq7I.F8M3VG", whatsapp: "808080809"},
        {id: 2, name: "Tester", email: "user2@gmail.com", password: "$2a$10$zTVsX.xVy0g9FXWRenl7NOWRjY70TGbX6IU4U9IPVUdrTkE9vxYEC", whatsapp: '808080809'}
      ]);
    });
};
