import styled from "styled-components";

export const WavesWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 15%;
    top: ${({ top }) => top}%;
    bottom: ${({ bottom }) => bottom}%;
`;

export const Wave = styled.div`
    position: absolute;
    width: 100%;
    height: 85%;
    background-color: #84CFC4;
`;

export const Foam = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
`;