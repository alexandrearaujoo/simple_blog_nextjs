import styled from 'styled-components'

export const Container = styled.li`
    width: 95%;
    max-width: 500px;
    height: 110px;
    margin: 0 auto;
    background: #ffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0 0.4rem #dfd9d9;
`

export const ImgUser = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`
export const NameUser = styled.h2`
    font-size: 0.8rem;
    text-align: start;

    @media screen and (min-width: 1024px){
        font-size: 0.9rem;
    }
`
export const PostUser = styled.p`
    font-size: 0.7rem;

    @media screen and (min-width: 1024px){
        font-size: 0.9rem;
    }
`
export const DivUser = styled.div`
    display: flex;
    width: 70%;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;

`
export const DivButtons = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
export const DivImg = styled.div`
    height: 100%;
    display: flex;
    align-items: flex-start;
`
