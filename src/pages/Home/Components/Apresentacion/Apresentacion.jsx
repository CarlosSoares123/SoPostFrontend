import * as A from './Apresentacion.js'
import BlogImg from '/public/blog_post.svg'

import { Paragrafo, Button } from '../../../../AppStyledGlobal.js'



export const Apresentacion = () => {
  return (
    <A.ApresentacionContainer>
      <A.ContentText>
      <A.Welcome>Hello Everyone</A.Welcome>
      <A.AdminName>Im <span>Carlos Soares</span></A.AdminName>
      <Paragrafo>
        Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Cupiditate necessitatibus 
        aperiam explicabo quae amet sunt similique, 
        nisi eaque obcaecati iure.
      </Paragrafo>
      <Button>Entrar Agora</Button>
      </A.ContentText>

      <A.ContentImg>
      <img src={BlogImg} alt="" />
      </A.ContentImg>
    </A.ApresentacionContainer>
  )
}
