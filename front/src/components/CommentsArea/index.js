import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../context/AuthProvider';
import { toast } from 'react-toastify';
import api from '../../services/api';

import { Container, Comment } from './styles';

function CommentsArea({ id }) {

  const { authenticated } = useContext(Context);

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    async function loadComments(){
      const c = await api.get(`/comment/${id}`);
      setComments(c.data);
    }
    loadComments();
  }, []);

  async function handlesubmit(e){
    e.preventDefault();
    if(!authenticated){
      toast.error('É necessário estar logado para comentar');
    }
    else if(commentText !== ""){
      await api.post("comment", {
        content: commentText,
        post_id: id
      });
    }
  }

  return (
    <Container>
      <h1>Comentários:</h1>
      <textarea
        placeholder="Digite seu comentário"
        type="text"
        value={commentText}
        onChange={e => setCommentText(e.target.value)}
      />
      <button onClick={(e) => handlesubmit(e)}>Comentar</button>
      {comments.map((c) => (
        <Comment key={c.id}>
          <div className="icon"><span>{c.name[0]}</span></div>
          <div className="comment">
            <div className="actions">
              <h4>{c.name}</h4>
              <p>{c.content}</p>
            </div>
          </div>
        </Comment>
      ))}
  </Container>
  )
}

export default CommentsArea;
