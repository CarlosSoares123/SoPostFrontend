import { useEffect, useState } from 'react';
import { BsXLg } from "react-icons/bs";
import axios from 'axios';

import * as Global from '../../../../AppStyledGlobal';
import * as UP from './UserPosts';
import * as SH from './../../../SoHome/SoHome';
import * as Insert from './../../../SoHome/components/InsertPost/InsertPost';
import { useContext } from 'react';
import { UserContext } from '../../../../context/UserContext';

export const UserPosts = () => {
  const { user } = useContext(UserContext);
  const serverURL = 'https://sopost.onrender.com'

  const [posts, setPosts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPost, setSelectedPost] = useState('');
  const [postId, setPostId] = useState('');

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  axios.defaults.withCredentials = true;

  const getPostId = () => {
    axios.get(`${serverURL}/posts_user`)
      .then(res => {
        console.log(res.data.data);
        const postData = res.data.data;
        setPosts(postData);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const deletePost = (postId) => {
    axios.delete(`${serverURL}/posts/${postId}`)
      .then(res => {
        alert(res.data.message);
        getPostId();
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleTextEdit = (postText, postId) => {
    setSelectedPost(postText);
    setPostId(postId);
    setModalVisible(true);
  };


  const handleEdit = () => {
    // Enviar os dados atualizados para o backend
    axios.put(`${serverURL}/posts/${postId}`, { text: selectedPost })
      .then(res => {
        console.log(res.data);
        getPostId(); // Atualizar os posts após o envio dos dados atualizados
        handleCloseModal(); // Fechar o modal de edição
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPostId();
  }, []);

  return (
    <UP.UserPost>
      {posts.map(post => (
        <UP.contentPost key={post.id}>
          <UP.infoUser>
            <Global.photoUserPost>
              <img src={`${serverURL}/uploads/${post.image}`} alt="" />
            </Global.photoUserPost>
            <span className="name">{post.name} {post.surname}</span>
          </UP.infoUser>

          <UP.textContainer>{post.text}</UP.textContainer>

          <UP.groupButton>
            <button onClick={() => handleTextEdit(post.text, post.id)}>Editar</button>
            <button onClick={() => deletePost(post.id)}>Eliminar</button>
          </UP.groupButton>
        </UP.contentPost>
      ))}

      <SH.modalContainer isVisible={modalVisible}>
        <SH.modal>
          <header>
            <h1>Editar Post</h1>
            <i onClick={handleCloseModal}><BsXLg/></i>
          </header>

          <SH.modalContent>
            <SH.groupUser>
              <Insert.photoUser>
                <img src={`${serverURL}/uploads/${user.image}`} alt="#" />
              </Insert.photoUser>
              <div className="userInfo">
                <span className="fullName">{user.name} {user.surname}</span>
                <span className="email">{user.email}</span>
              </div>
            </SH.groupUser>

            <SH.textarea
              id="textLong"
              value={selectedPost}
              onChange={(e) => setSelectedPost(e.target.value)}
            />
          </SH.modalContent>

          <SH.button onClick={handleEdit}>Enviar</SH.button>
        </SH.modal>
      </SH.modalContainer>
    </UP.UserPost>
  );
};
