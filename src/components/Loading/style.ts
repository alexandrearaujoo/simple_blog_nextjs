import styled, { keyframes } from 'styled-components'

const jump = keyframes`
    0%, 80%, 100% {
  -webkit-transform: scale(0);
  transform: scale(0);
 }

 40% {
  -webkit-transform: scale(2.0);
  transform: scale(2.0);
 }

`

export const Spinner = styled.div`
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`

export const Dot1 = styled.div`
    width: 15px;
    height: 15px;
    border: double;
    border-color: white;
    border-radius: 50%;
    margin: 10px;

    animation: ${jump} 1.6s -0.32s linear infinite;
    background: #2495ff;
`

export const Dot2 = styled.div`
    width: 15px;
    height: 15px;
    border: double;
    border-color: white;
    border-radius: 50%;
    margin: 10px;

    animation: ${jump} 1.6s -0.16s linear infinite;
    background: #2495ff;
`
export const Dot3 = styled.div`
    width: 15px;
    height: 15px;
    border: double;
    border-color: white;
    border-radius: 50%;
    margin: 10px;

    animation: ${jump} 1.6s linear infinite;
    background: #2495ff;
`
