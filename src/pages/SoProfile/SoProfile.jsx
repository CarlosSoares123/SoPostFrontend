import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import { SoHeader } from "../../components/SoHeader/SoHeader.jsx"
import { Profile } from "./Components/Profile/Profile.jsx"
import { UserPosts } from "./Components/UserPosts/UserPosts.jsx"
import { UserContext } from "../../context/UserContext.jsx"



export const SoProfile = () => {
  
  const navigate = useNavigate('')
  const { getData } = useContext(UserContext)
  const [auth, setAuth] = useState(false)

  const serverURL = 'https://pear-different-beaver.cyclic.app'
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
  }, [])

  const handleLogout = () => {
    axios.get(`${serverURL}/logout`)
      .then((res) => {
        console.log(res.Status);
        getData()

      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
    <SoHeader logout={handleLogout}/>
    {
      auth ? (
        <main>
          <Profile/>
          <UserPosts/>
        </main>
      ) : ''
    }
    </>
  )
}
