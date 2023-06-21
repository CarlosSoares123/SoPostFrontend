import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--gradient-1);
  padding: 16px;
`

export const Links = styled.div`
  display: flex;
  gap: 15px;

  a{
    color: #fff;
    font-weight: 600;
  }
`
export const buttonLogout = styled.button`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
`