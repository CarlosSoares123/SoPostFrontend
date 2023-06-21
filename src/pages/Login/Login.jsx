import axios  from 'axios'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

import * as L from './Login'
import Avatar from '/avatarUser.svg'

export const Login = () => {
  const serverUrl = 'https://api-sopost.onrender.com'
  const navigate = useNavigate('/')
  
  const [formEmail, setFormEmail] = useState(true)
  const [formPassword, setFormPassword] = useState(false)


  const [email, setEmail] = useState('')
  const [user, setUser] = useState(Avatar)

  const handleSubmitEmail = (e) => {
    e.preventDefault()
    axios.post(`${serverUrl}/login`, {email})
    .then((res) => {
        setUser(res.data)
        setFormEmail(false)
        setFormPassword(true)
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message)
      });
  }

  const [password, setPassword] = useState('')

  axios.defaults.withCredentials = true
  const handleSubmitLogin = (e) => {
    e.preventDefault()
    axios.post(`${serverUrl}/login`,{password, email})
    .then( () => {
      navigate('/home')
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <L.mainScreen>
    <L.Container>
      <L.login isVisible={formEmail}>
      <h1>Longin SoPost</h1>
      <L.Form onSubmit={handleSubmitEmail}>
        
        <L.photoContainer>
          <img src={user} alt="#" />
        </L.photoContainer>
        <L.input 
        type='email'
        value={email}
        placeholder='Digite o seu Email'
        onChange={e => setEmail(e.target.value)}
        />
        <button type='submit' className='buttonLink'>Proximo</button>
      </L.Form>
      <L.link>Não és um membro? <Link to='/register'>Registrar</Link></L.link>
      </L.login>
      <L.register isVisible={formPassword}>
        <h1>Bem vindo  <span>{user.name}</span> </h1>
      <L.Form onSubmit={handleSubmitLogin}>
        <L.photoContainer>
              <img src={`${serverUrl}/uploads/${user.image}`} alt="#" />
        </L.photoContainer>
        <L.input 
        type='password'
        placeholder='Digite a sua senha'
        required
        onChange={e => setPassword(e.target.value)}
        />
        <button type='submit' className='buttonLink'>Login</button>
      </L.Form>
      <L.link>Não és um membro? <Link to='/register'>Registrar</Link></L.link>
      </L.register>
    </L.Container>
    </L.mainScreen>
  )}