import styled from "styled-components";

export const ApresentacionContainer = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;

  @media (min-width: 992px) {
    height: 100vh;
    grid-template-columns: 1fr 1fr;
  }
`
export const ContentText = styled.div`
  width: 100%;
  display: grid;
  gap: 15px;
  padding-block: 30px;

  @media (min-width: 992px){
    padding-block: 0;
  }
`
export const Welcome = styled.h2`
  width: fit-content;
  font-size: .85rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 50px;
  color: var(--cor-text);

  @media(min-width: 992px){
    font-size: 1.2rem;
  }
`
export const AdminName = styled.p`
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--cor-title);
  span {
    background: var(--gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media (min-width: 768px){
    font-size: 4rem;
  }
`

export const ContentImg = styled.figure`
  width: 100%;
  height: 100%;
  padding-block: 30px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    height: 500px;
  }
  @media (min-width: 992px) {
    height: 380px;
    padding-block: 0;
  }
`