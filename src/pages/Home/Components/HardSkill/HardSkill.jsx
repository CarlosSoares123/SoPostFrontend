import { Title, Paragrafo } from '../../../../AppStyledGlobal'
import * as H from './HardSkill'


export const HardSkill = ({children}) => {
  return (
    <H.HardSkillContainer>
      <Title>Tecnologias Utilizadas</Title>
      <Paragrafo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, nobis!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, nobis!</Paragrafo>
        <H.ContainerCard>
        {children}
        </H.ContainerCard>
    </H.HardSkillContainer>
  )
}
