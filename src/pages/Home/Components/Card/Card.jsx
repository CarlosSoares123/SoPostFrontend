import * as C from './Card'

export const Card = ({imgTec, nomeTec}) => {
  return (
    <C.CardContainer>
      <C.CardList>
        <img src={imgTec} alt="" />
        <p>{nomeTec}</p>
      </C.CardList>
    </C.CardContainer>
  )
}
