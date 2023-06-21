import styled from "styled-components";

export const mainScreen = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  place-content: center;
  margin-bottom: 0;
`

export const Container = styled.div`
  width: 20rem;
  height: 33.11rem;
  padding: 20px;
  text-align: center;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid #fff;
  gap: 10px;
  background-color: rgb(255 253 253 / 89%);

  a {
    color: pink;
  }
  .buttonLink {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    color: white;
    background: var(--gradient-1);
    border-radius: 5px;
    border: none;
  }

  .input {
    cursor: pointer;
  }
`

export const login = styled.div`
  display: ${({ isVisible }) => (isVisible ? 'all' : 'none')};

  h1 {
    text-transform: uppercase;
    background: var(--gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 15px;

  }
`
export const register = styled.div`
  display: ${({ isVisible }) => (isVisible ? 'all' : 'none')};

  h1 {
    text-transform: uppercase;
    background: var(--gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 15px;

    span {
      color: #fff;
    }
  }
`

export const link = styled.p`
  margin-top: 15px;
  color: black;

  a{
    color: blueviolet;
    text-decoration: underline;
  }
`


export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  overflow: hidden;
`

export const photoContainer = styled.figure`
  width: 150px;
  height: 150px;
  display: grid;
  place-content: center;

  border-radius: 50%;
  
  background-color: white;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    clip-path: circle();
  }
`

export const input = styled.input`
  width: 100%;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.65);
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  box-shadow: 1px 0px 5px rgba(0, 0, 0, 0.25);
  
`