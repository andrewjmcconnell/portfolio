import styled from "styled-components";

export const Swiper = styled.div`
  display: flex;
  min-width: 85vw;
  height: 100%;
  background: #fff;
  transform: translateX(5vw);
  margin-right: ${({ spacing }) => spacing};
  border-radius: 25px;

  ${({ theme }) =>
    theme.isMobile &&
    `
    height: auto;
    `}
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  ${({ theme }) =>
    theme.isMobile &&
    `
flex-direction: column;
`}
`;

export const Demo = styled.div`
  flex-shrink: 0;
  height: 300px;
  width: 300px;
  background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
  border-radius: 20px;
  transform: translateX(-5vw);

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
    border-radius: 20px;
    opacity: 0.8;
  }

  ${({ theme }) =>
    theme.isMobile &&
    `transform: translateY(-2vh);
  width: 50vw;
  height: 50vw;
  max-height: 200px;
  max-width: 200px;`}
`;

export const Content = styled.div`
  ${({ theme }) =>
    theme.isMobile &&
    `text-align: center;
    padding: 0 30px;`}
`;

export const Button = styled.button`
  display: inline-flex;
  background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
  padding: 15px 35px;
  border-radius: 50px;
  color: #fff;
  box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);
  text-decoration: none;
  font-weight: 500;
  justify-content: center;
  text-align: center;
  letter-spacing: 1px;

  ${({ theme }) => theme.isMobile && `width: 100%;`}
`;
