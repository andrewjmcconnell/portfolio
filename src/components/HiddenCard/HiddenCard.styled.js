import styled from "styled-components";

export const Container = styled.div`
  width: 220px;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  position: absolute;
  justify-content: center;
  width: 220px;
  height: 220px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 3px;
  overflow: hidden;
  transition: box-shadow ease 1s;

  &:after {
    content: "${({ description }) => description}";
    position: absolute;
    width: 170px;
    top: 111px;
    opacity: 0;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.onBackground};
    line-height: 20px;
    transition: all 0.3s ease;
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  transition: all 0.6s ease;
  will-change: transform;
`;

export const Helper = styled.span`
  display: inline-block;
  height: 80px;
  vertical-align: middle;
`;

export const Icon = styled.img`
  display: inline-block;
  vertical-align: middle;
  max-height: 60px;
  max-width: 60px;
`;

export const IconBackground = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  border: 1px solid rgba(225, 227, 232, 0.18);
  box-shadow: 0 3px 4px 0 rgba(44, 71, 146, 0.25);
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.6s ease;
  will-change: transform;
`;

export const Title = styled.h2`
  position: relative;
`;

export const Text = styled.div`
  position: relative;
  top: -32px;
  width: 200px;
  text-align: center;
  transition: all 0.4s ease;
`;

export const SuperBox = styled.div`
  width: 220px;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:hover {
    ${Box} {
      box-shadow: 0 3px 4px 0 rgba(44, 71, 146, 0.25);
      transition-delay: 0.32s;

      &:after {
        opacity: 1;
      }
    }

    ${IconBackground} {
      transform: translateY(-32px) scale(6);
    }

    ${IconWrapper} {
      transform: translateY(-48px) scale(1.4);
    }

    ${Text} {
      opacity: 0;
      transform: translateY(-4px) scale(0.8);
    }
  }
`;
