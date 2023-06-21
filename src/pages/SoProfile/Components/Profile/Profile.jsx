import { useContext, useEffect } from 'react'
import { UserContext } from './../../../../context/UserContext';
import * as P from './Profile'

export const Profile = ({modalUser}) => {
  const { user, getData } = useContext(UserContext)
  useEffect(() => {
    getData()
  }, [])

  const serverURL = 'https://pear-different-beaver.cyclic.app'

  return (
    <P.Container>
      <P.UserData>
      <P.imageUser>
          <img src={`${serverURL}/uploads/${user ? user.image : ''}`} alt="#" />
      </P.imageUser>
      <P.infoUser>
        <span className='name'>{user.name} {user.surname}</span>
        <span className='email'>{user.email}</span>
      </P.infoUser>
      </P.UserData>
      <button onClick={modalUser}>Editar</button>
    </P.Container>
  )
}
