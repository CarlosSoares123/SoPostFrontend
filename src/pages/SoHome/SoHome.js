import styled from "styled-components";

export const mainscreen = styled.div`
  width: 100%;
`

export const modalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.85);
  

  display: ${({isVisible}) => (isVisible ? 'grid' : 'none')};
  place-content: center;  
`

export const modal = styled.div`
  width: 95vw;
  max-width: 600px;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;

  header {
    padding-inline: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid gray;
  }
`
export const modalContent = styled.form`
  display: grid;
  gap: 10px;
  margin-block: 10px;
  padding: 10px;
`
export const groupUser = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;

  .userInfo{
    width: 100%;
    display: grid;
    gap: 5px;
    font-weight: 600;
  }

  .fullName{
    text-transform: capitalize;
    font-size: 24px;
  }
  .email{
    width: 100%;
    font-size: 13px;
    color: var(--cor-text);
  }
`

export const textarea = styled.textarea`
  width: 100%;
  height: 120px;
  font-size: 20px;
  border-radius: 10px;
  position: relative;
  text-align: left;
  background-color: #f2f0f9;
  outline: none;
  border: none;
  padding: 10px;

  ::placeholder {
    font-size: 20px;
  }

`
export const button = styled.button`
  width: 100%;
  text-align: center;
  padding: 10px 15px;
  background: var(--gradient-1);
  font-size: 18px;
  border-radius: 5px;
  color: #fff;
  font-weight: 600;
  
`