import * as I from './InsertPost'
import * as G from'../../../../AppStyledGlobal'

export const InsertPost = ({Modal, Image, Name, Surname}) => {
  const serverURL = 'https://api-sopost.onrender.com'
  return (
    <I.container>
      <I.insert>
        <G.photoUserMini>
        <img src={`${serverURL}/uploads/${Image}`} alt="" />
        </G.photoUserMini>
      <I.buttonInsert onClick={Modal}>
        <p>O que estas a pensar, <span> {Name} {Surname}</span> ?</p>
      </I.buttonInsert>
      </I.insert>
    </I.container>
  )
}