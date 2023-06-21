import styled from "styled-components";

export const HardSkillContainer = styled.section`
  width: 100%;
  height: auto;
  display: grid;
  gap: 15px;
  
`
export const ContainerCard = styled.div`
  display: grid;
  gap: 10px;

  @media (min-width: 768px) {
  grid-template-columns: 1fr 1fr;
  }
`