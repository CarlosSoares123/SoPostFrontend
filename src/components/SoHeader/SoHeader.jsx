import * as H from './SoHeader'
import {Link} from 'react-router-dom'
import { Logo } from '../../AppStyledGlobal'

export const SoHeader = ({logout}) => {

  return (
    <H.Header>
      <Logo>
        <Link to='/home'>SoPost</Link>
      </Logo>

      <H.Links>
        <Link to='/home/profile'>Perfil</Link>
        <H.buttonLogout onClick={logout}>Logout</H.buttonLogout>
      </H.Links>
    </H.Header>
  )
}
