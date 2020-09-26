const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const { type, order } = req.query;
    let posts;
    if (type) {
      posts = await connection('posts')
        .select('*')
        .where('type', type)
        .orderBy('created_at', order);
    } else {
      posts = await connection('posts')
        .select('*')
        .orderBy('created_at', order);
    }
    return res.status(200).json(posts);
  },

  async create(req, res) {
    try {
      const { title, description, type, vaccinated, city, uf } = req.body;
      const date = new Date();
      const { filename } = req.file;
      const post = await connection('posts').insert({
        title,
        description,
        type,
        vaccinated,
        city,
        uf,
        created_at: date,
        user_id: 1, // req.userId,
        img: filename,
      });
      return res.status(200).json(post);
    } catch (err) {
      return res.status(401).json({ message: err.message });
    }
  },
};
