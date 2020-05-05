import styled from "styled-components";

export const Swiper = styled.div`
  display: flex;
  min-width: 85vw;
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
  margin-right: ${({ spacing }) => spacing};
  border-radius: 25px;
  transform: translateX(5vw);
  ${({ theme }) =>
    theme.isMobile
      && `
    min-width: 90vw;
    height: auto;
    transform: translateX(0);
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

  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ theme }) =>
    theme.isMobile &&
    `transform: translateY(1vh);
  width: 50vw;
  height: 50vw;
  max-height: 200px;
  max-width: 200px;`}
`;

export const Content = styled.div`
  padding-right: 5vw;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ theme }) =>
    theme.isMobile &&
    `text-align: center;
    padding: 0 30px;`}
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.a`
  display: inline-flex;
  background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
  padding: 15px 35px;
  border-radius: 50px;
  color: #fff;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  margin-bottom: 5vmin;
  width: 30%;
`;

export const Title = styled.div`
  font-style: italic;
  padding-top: 5vmin;
  font-size: 2.5vmax;
  color: ${({ theme }) => theme.colors.onBackground};
`;

export const Description = styled.div`
  font-size: 2vmax;
  color: ${({ theme }) => theme.colors.onBackground};
`;
