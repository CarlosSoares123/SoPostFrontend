import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin-top: 95px;
  padding: 15px;
  background-color: #fff;
  position: relative;

  button{
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 15px;
    margin-bottom: 15px;
    padding: 5px 35px;
    border-radius: 5px;
    color: #fff;
    font-weight: 600;
    background: var(--gradient-1);
  }

`
export const UserData = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
`

export const imageUser = styled.figure`
  width: 180px;
  height: 180px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    clip-path: circle();
  }
`
export const infoUser = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  
  .name {
    text-transform: capitalize;
    font-size: 25px;
    font-weight: 600;
  }
`


