import styled from "styled-components";

export const CardContainer = styled.ul`
  display: grid;
  gap: 20px;
`

export const CardList = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 1.3rem;
  cursor: pointer;
  transition: all.4s ease;

  p {
    font-size: var(--fs-text);
    @media (min-width: 992px) {
      font-size: 1.3rem;
    }

  }

  &:hover,
  &:focus {
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);

    p{
      color: var(--cor-base);
    }
  }

  img {
    width: 45px;
    clip-path: circle();
    padding: 8px;
  }

  &:hover,
  :focus {
    img {
      background-color: rgba(0, 0, 0, 0.3);
    }
    filter: brightness(1.1);
    background: var(--gradient-1);
  }
`

