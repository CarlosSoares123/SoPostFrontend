import * as H from './Header'
import { Link } from 'react-router-dom'
import { Logo } from '../../../../AppStyledGlobal'


export const Header = () => {
  return (
    <H.HeaderContainer>
      <Logo>
        <Link to='/'>SoPost</Link>
      </Logo>
      <H.ButtonHeader>
        <Link to="/login">Login</Link>
      </H.ButtonHeader>
    </H.HeaderContainer>
  )
}
