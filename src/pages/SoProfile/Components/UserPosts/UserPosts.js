import styled from "styled-components";


export const UserPost = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`

export const contentPost = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;


  @media (min-width: 768px) {
    border-radius: 10px;
  }
`

export const infoUser = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-weight: 600;
  font-size: 20px;

  span {
    text-transform: capitalize;
  }
`

export const textContainer = styled.p`
  font-size: 20px;
  color: black;
  padding-top: 10px;
`
export const groupButton = styled.div`
  width: 100%;
  display: grid;
  gap: 5px;
  
  
  margin-top: 5px;
  button{
    background: var(--gradient-1);
    padding: 8px 15px;
    border-radius: 3px;
    font-weight: 600;
    color: #fff;
  }
` 