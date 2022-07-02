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
    text-transform: capitalize;
    font-size: 0.8rem;
    text-align: start;

    @media screen and (min-width: 1024px) {
        font-size: 0.9rem;
    }
`
export const PostUser = styled.p`
    font-size: 0.7rem;

    @media screen and (min-width: 1024px) {
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
export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    > textarea {
        resize: none;
        height: 50px;
        padding: 5px;
        width: 90%;
        border-radius: 8px;
        border: 1px solid #19bdcf;

        :focus {
            outline-color: #19bdcf;
        }
    }

    @media (max-width: 500px) {
        flex-direction: column;
    }
`
export const ButtonDelete = styled.button`
    background-color: transparent;
    border: none;
    color: #f12f12;
    transition: 0.5s;

    :hover {
        color: #760202;
    }
`
export const ButtonUpdate = styled.button`
    background-color: transparent;
    border: none;
    color: #19bdcf;
    transition: 0.5s;

    :hover {
        color: #148f9c;
    }
`
export const ButtonEdit = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to top, #30cfd0 0%, #148f9c 100%);
    border: solid 3px transparent;
    background-clip: padding-box;
    box-shadow: 0px 0px 0px 3px #ffffff00;
    color: #fff;
    width: 110px;
    min-height: 30px;
    margin-left: 5px;
    border-radius: 50px;
    text-transform: uppercase;
    transition: all 0.5s ease;

    :active {
        transform: scale(0.9);
        transition: all 100ms ease;
    }

    :hover {
        box-shadow: 0px 0px 0px 3px #30a1b8;
    }

    > svg {
        width: 16px;
    }
`
