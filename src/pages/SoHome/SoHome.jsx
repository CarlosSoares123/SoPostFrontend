import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import * as SH from './SoHome'
import * as Insert from '../SoHome/components/InsertPost/InsertPost'
import { BsXLg } from "react-icons/bs";

import { Footer } from '../../components/Footer/Footer.jsx';
import { SoHeader } from '../../components/SoHeader/SoHeader.jsx';
import { SoPost } from '../../components/SoPost/SoPost.jsx';
import { InsertPost } from './components/InsertPost/InsertPost.jsx';
import { UserContext } from './../../context/UserContext.jsx';

export const SoHome = () => {
  
  const navigate = useNavigate('/')
  const { user, getData, getPost } = useContext(UserContext)
  const [modalVisible, setModalVisible] = useState(false);
  const [auth, setAuth] = useState(false);
  const [text, setText] = useState('');

  const serverURL = 'https://pear-different-beaver.cyclic.app'

  axios.defaults.withCredentials = true
  useEffect(() => {
    axios.get(`${serverURL}/`)
      .then((res) => {
        if (res.data.Status === 'Success') {
          setAuth(true);
          getData()
        }
      })
      .catch(() => {
        setAuth(false);
        navigate('/login')
      });
  }, []);

  const handleModal = () => {
    setModalVisible(true);
  };
  const handleCloseModal = () => {
    setModalVisible(false)
  }
  
  const handleLogout = () => {
    axios.get(`${serverURL}/logout`)
      .then((res) => {
        console.log(res.Status);
        getData()
        getPost()
        navigate('/login')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInsertText = (e) => {
    e.preventDefault();

    axios.post(`${serverURL}/posts`, { text })
      .then(() => {
        setModalVisible(false);
        setText('');
        getPost()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <SH.mainscreen>
        
        <SoHeader logout={handleLogout} />

        {auth ? (
          <main>
            <InsertPost Modal={handleModal} Image={user.image} Name={user.name} Surname={user.surname}/>

            <SH.modalContainer isVisible={modalVisible}>

              <SH.modal>
                
                <header>
                  <h1>Criar Post</h1>
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
                    placeholder="Digite aqui o que estás a pensar ?"
                    id="textLong"
                    onChange={(e) => setText(e.target.value)}
                  />
                </SH.modalContent>

                <SH.button onClick={handleInsertText}>Enviar</SH.button>

              </SH.modal>

            </SH.modalContainer>

            <SoPost/>
          </main>
        ) : ''}

        <Footer />
      </SH.mainscreen>
    </div>
  );
};

