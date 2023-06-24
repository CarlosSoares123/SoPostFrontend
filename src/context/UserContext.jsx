import { createContext, useState } from "react";
import axios from 'axios'

export const UserContext = createContext()

export const UserProvider = ({children}) => {
  const [user, setUser] = useState([])
  const [post, setPost] = useState([])
  
  const serverURL = 'https://sopost.onrender.com'
  axios.defaults.withCredentials = true

    const getData = () => {
    axios.get(`${serverURL}/home`)
      .then((res) => {
        const data = res.data
        setUser(data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
    const getPost  = () => {
    axios.get(`${serverURL}/posts`)
    .then(res => {
      const dataPost = res.data.data
      setPost(dataPost)
    })
    .catch(err => {
      console.log(err)
    })
  }
    



  return(
    <UserContext.Provider value={{user, post, getData, getPost}}>
      {children}
    </UserContext.Provider>
  )
}