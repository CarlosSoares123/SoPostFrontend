import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`

export const postContent = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  

  @media (min-width: 768px) {
    border-radius: 10px;
  }
`

export const Post = styled.div`
  width: 100%;
`

export const infoUser = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-weight: 600;
  font-size: 20px;
  border-bottom: 2px solid var(--cor-button);

  span{
    text-transform: capitalize;
  }
`

export const postText = styled.p`
  font-size: 20px;
  color: black;
  padding-top: 10px;
  color: var(--cor-text);
`