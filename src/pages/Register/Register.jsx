import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


import * as L from '../Login/Login'
import Avatar from '/avatarUser.svg'

export const Register = () => {
  const serverUrl = 'https://api-sopost.onrender.com'
  const navigate = useNavigate('/')

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [image, setImage] = useState(null)
  const [password, setPassword] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('name', name)
    formData.append('surname', surname)
    formData.append('email', email)
    formData.append('image', image)
    formData.append('password', password)

    axios.post(`${serverUrl}/register`, formData)
    .then((res) => {
        console.log(res.data);
        navigate('/login')
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <L.mainScreen>
      <L.Container>
      
        <L.Form onSubmit={handleSubmit} >

          <L.photoContainer>
            <img src={Avatar} alt="#"/> 
          </L.photoContainer>

            <input 
            className='input' 
            type="file" 
            id="image"
            name="image"
            accept="image/*" 
            onChange={e => setImage(e.target.files[0])}
            />

          <L.input 
          type='text'
          placeholder='Digite o seu Nome'
          value={name}
          onChange={e => setName(e.target.value)}
          required
          />
          <L.input 
          type='text'
          placeholder='Digite o seu UltimoNome'
          value={surname}
          onChange={e => setSurname(e.target.value)}
          required
          /><L.input 
          type='email'
          placeholder='Digite o seu Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          />
          <L.input 
          type='password'
          placeholder='Digite a sua Senha'
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          />
            <button type='submit' className='buttonLink'>Register</button>
        <L.link>Tens uma conta? <Link to='/login'>Login</Link></L.link>
        </L.Form>
      </L.Container>
    </L.mainScreen>
  )
}
