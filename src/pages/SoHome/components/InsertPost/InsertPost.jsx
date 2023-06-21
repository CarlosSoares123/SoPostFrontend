import * as I from './InsertPost'
import * as G from'../../../../AppStyledGlobal'

export const InsertPost = ({Modal, Image, Name, Surname}) => {
  const serverUrl = 'https://pear-different-beaver.cyclic.app'
  return (
    <I.container>
      <I.insert>
        <G.photoUserMini>
        <img src={`${serverUrl}/uploads/${Image}`} alt="" />
        </G.photoUserMini>
      <I.buttonInsert onClick={Modal}>
        <p>O que estas a pensar, <span> {Name} {Surname}</span> ?</p>
      </I.buttonInsert>
      </I.insert>
    </I.container>
  )
}