import styled from "styled-components";

export const container = styled.section`
  width: 100%;
  margin-top: 95px;
  background-color: #fff;

  @media (min-width: 768px) {
    border-radius: 10px;
  }
`
export const insert = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-block: 10px;
`

export const photoUser = styled.figure`
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

export const buttonInsert = styled.button`
  width: 100%;
  height: 80px;
  padding: 0px 10px;
  border-radius: 20px;
  position: relative;
  text-align: left;
  background-color: #f2f0f5;

  p {
    position: absolute;
    top: 0;
    left: 0;
    color: #65676b;
    font-size: 20px;
    padding: 10px;

    span{
      text-transform: capitalize;
    }
  }

  @media (min-width: 768) {
    border-radius: 50px;
  }
`