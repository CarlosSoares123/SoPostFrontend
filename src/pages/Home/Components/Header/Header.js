import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ButtonHeader = styled.button`
  padding: 8px 25px;
  background: var(--gradient-1);
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: 500;
  transition: all.4s;
  
  a {
    color: #fff;
  }

  :hover {
    box-shadow: 0px 0px 30px  #0bd1d1;
  }
`