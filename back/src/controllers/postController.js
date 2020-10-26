const { where } = require('../database/connection');
const connection = require('../database/connection');

module.exports = {
  async get(req, res) {
    const { id } = req.params;
    const post = await connection
      .select('posts.id', 'title', 'description', 'type', 'vaccinated', 'city', 'uf', 'created_at', 'img', 'user_id', 'name', 'email', 'whatsapp')
      .from('posts')
      .innerJoin('users', function() {
        this.on('users.id', '=', 'posts.user_id')
      })
      .where('posts.id', id)
    if (post.length > 0) {
      return res.status(200).json({ ...post[0] });
    }
    return res.status(404).json({ message: 'notfound' });
  },

  async index(req, res) {
    const { type, order, pattern } = req.query;
    let posts;
    posts = await connection('posts')
        .select('*')
        .orderBy('created_at', order);
    if (type) {
      posts = posts.filter(p => p['type'] === type)
    }
    if(pattern){
      posts = posts.filter(p => p['city'].toLowerCase().includes(pattern.toLowerCase()));
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
        user_id: req.userId,
        img: filename,
      });
      return res.status(200).json(post);
    } catch (err) {
      return res.status(401).json({ message: err.message });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await connection('posts').where({ id, user_id: req.userId }).delete();
      const c = await connection('posts').where({id});
      if(c.length > 0){
        return res.status(403).json({ message: 'You are not allowed to do this'});
      }
      return res.status(200).json({ message: 'successfully deleted' });
    } catch (err) {
      return res.status(400).json({ err: err.message });
    }
  }
};
