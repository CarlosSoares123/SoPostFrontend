import { useEffect} from 'react'

import * as P from './SoPost'
import * as Global from '../../AppStyledGlobal'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

export const SoPost = () => {
  const { getPost, post } = useContext(UserContext)
  const serverURL = 'https://sopost.onrender.com';

  useEffect(() => {
    getPost()
  }, [])
  

  return (
    <P.Container>
    {
      post.map((data) => (
      <P.postContent key={data.id}>
        <P.Post>
          <P.infoUser>
          <Global.photoUserPost>
            <img src={`${serverURL}/uploads/${data.image}`} alt="" />
          </Global.photoUserPost>
            <span>{data.name} {data.surname}</span>

          </P.infoUser>
          <P.postText>
            {data.text}
          </P.postText>
        </P.Post>
      </P.postContent> 
      ))
      }
    </P.Container>
  )
}



