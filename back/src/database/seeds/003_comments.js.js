
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {
          id: 12,
          content: "Que legal :v",
          created_at: "1602086765940",
          user_id: 2,
          post_id: 5
        },
        {
          id: 13,
          content: "Velho dogao amarelo da massa",
          created_at: "1602086827453",
          user_id: 2,
          post_id: 2
        },
        {
          id: 14,
          content: "Esse tem bagagem",
          created_at: "1602086848069",
          user_id: 2,
          post_id: 2
        },
        {
          id: 15,
          content: "Que lindinho *-*",
          created_at: "1602086882909",
          user_id: 2,
          post_id: 6
        },
        {
          id: 17,
          content: "Woooooooooow",
          created_at: "1602086765940",
          user_id: 2,
          post_id: 4
        },
        {
          id: 19,
          content: "Que legal :v",
          created_at: "1602819137599",
          user_id: 2,
          post_id: 3
        },
        {
          id: 27,
          content: "Brabo, brabissimo",
          created_at: "1603739362866",
          user_id: 2,
          post_id: 5
        },
      ]);
    });
};
