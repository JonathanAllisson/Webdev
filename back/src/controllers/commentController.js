const connection = require('../database/connection');

module.exports = {
  async index(req, res){
    const { post_id } = req.params;
    const comments = await connection
      .select('content', 'created_at', 'name', 'whatsapp')
      .from('comments')
      .innerJoin('users', {'users.id': 'comments.user_id'})
      .orderBy('created_at', 'desc');
    return res.status(200).json(comments);
  },

  async create(req, res){
    const { content, post_id } = req.body;
    const date = new Date();
    try{
      const comment = await connection('comments').insert({
        content,
        post_id,
        created_at: date,
        user_id: req.userId
      });
      return res.status(200).json(comment);
    }catch(err){
      return res.status(401).json({ message: err.message });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await connection('comments').where({ id }).delete();
      return res.status(200).json({ message: 'successfully deleted' });
    } catch (err) {
      return res.status(400).json({ err: err.message });
    }
  }
}
