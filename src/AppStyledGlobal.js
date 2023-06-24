import styled, { createGlobalStyle } from 'styled-components'


export const GlobalApp = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
body{
  background: var(--cor-bg);
}
:root{
  --cor-base: #fff;
  --cor-title: hsla(0,0%,100%,1);
  --cor-text: hsla(240,10%,90%,1);
  --cor-white: #fff;
  --cor-button: hsla(216,10%,80%,1);
  --cor-bg: hsla(222,47%,11%,1);
  --gradient-1: linear-gradient(90deg, #0ea5ea, #0bd1d1);

  //font-size
  
  --fs-text: 1.1rem ;
  --fs-title: 2rem ;
  
}
a{
  text-decoration: none;
}
li{
  list-style: none;
}
a,p{
  color: var(--cor-text);
}
button{
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
}
section{
  padding-inline: 15px;
  margin-block-end: 50px;
}

@media (min-width: 575px) {
  body{
    max-width: 540px;
    width: 100%;
    margin: 0 auto;
  }
}

@media (min-width: 768px) {
  body{
    max-width: 700px;
    width: 100%;
    margin: 0 auto;
  }
}

@media (min-width: 992px) {
  body{
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  body{
    max-width: 1140px;
  }
}
`
export const Logo = styled.div`
  a {
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--cor-title);
  }

  @media (min-width: 992px) {
    a {
      font-size: 2.25rem;
    }
  }
`
export const Title = styled.h2`
  font-weight: 700;
  font-size: var(--fs-title);
  color: var(--cor-white);
  margin-bottom: 15px;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 992px){
    font-size: 3rem;
  }
`
export const Paragrafo = styled.p`
  font-size: var(--fs-text);

  @media (min-width: 992px) {
    font-size: 1.3rem;
  }
`
export const Button = styled.button`
  width: fit-content;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all.4s ease;
  background: var(--gradient-1);
  color: #fff;

  &:hover {
    color: var(--cor-title);
    box-shadow: 0px 0px 30px #0bd1d1;
  }

  @media (min-width: 992px) {
    font-size: 1.3rem;
  }
`
export const photoUserMini = styled.figure`
  width: 80px;
  height: fit-content;
  background: var(--gradient-1) ;
  clip-path: circle();

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const photoUserPost = styled.figure`
  width: 50px;
  height: fit-content;
  background: var(--gradient-1);
  clip-path: circle();
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`