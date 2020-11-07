
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          id: 1,
          title: "Gato duas cores",
          description: "É um gato que visita minha casa todos os dias mas não tenho como cuidar dele",
          type: "cat",
          vaccinated: false,
          city: "Campina Grande",
          uf: "PB",
          created_at: "1601059052561",
          img: "3d42288c1d6c16b2b47865de81ddbcb7.jpg",
          user_id: 1
        },
        {
          id: 2,
          title: "cachorro amarelo de rua",
          description: "Um cachorro muito dócil e amigável que vive nos arredores onde moro, adora brincar e crianças",
          type: "dog",
          vaccinated: false,
          city: "Campina Grande",
          uf: "PB",
          created_at: "1601059124683",
          img: "b857a6c3a248902dc6069e74f273fbd8.jpg",
          user_id: 1
        },
        {
          id: 3,
          title: "cachorro preto",
          description: "é a cria do meu querido cachorrinho",
          type: "dog",
          vaccinated: true,
          city: "Patos",
          uf: "PB",
          created_at: "1601059173790",
          img: "9cdfaf1777575fcb1b724949e6edfeda.png",
          user_id: 1
        },
        {
          id: 4,
          title: "gato filhote",
          description: "Estou doando o filhote do meu gatinho",
          type: "cat",
          vaccinated: true,
          city: "Sousa",
          uf: "PB",
          created_at: "1601059233749",
          img: "4609370b48b36652773df6177f7cf8df.jpg",
          user_id: 1
        },
        {
          id: 5,
          title: "gato hunter",
          description: "gato caçador, comeu todos os ratos da casa agora to passando pra frente pra quem tiver interesse",
          type: "cat",
          vaccinated: true,
          city: "Patos",
          uf: "PB",
          created_at: "1601059397075",
          img: "b47d637e4c8058890955d7eaf3267cc9.jpg",
          user_id: 1
        },
        {
          id: 6,
          title: "cachorro orelhudo",
          description: "com essas orelhas deve ser bom pra vigiar a casa contra ladroes, ps: n me responsabilizo se ele não for",
          type: "dog",
          vaccinated: false,
          city: "Campina Grande",
          uf: "PB",
          created_at: "1601059558908",
          img: "007b8595a56c2dcb6501089762c5997f.png",
          user_id: 1
        },
      ]);
    });
};
