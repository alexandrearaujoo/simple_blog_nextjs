import styled from 'styled-components'

export const Header = styled.header`
    width: 100vw;
    background-color: #19bdcf;
    padding: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    h2 {
        text-transform: uppercase;
        font-family: 'Roboto', sans-serif;
    }
`

export const AvatarUrl = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
`

export const ButtonLogout = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 1.5rem;
    width: 5rem;
    background-color: transparent;
    border: none;
    font-family: 'Roboto', sans-serif;
    transition: 0.5s;

    :hover {
        svg {
            transition: 0.5s;
            color: #f12f12;
        }
    }
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 10px;

    div {
        background-color: #fff;
        width: 95%;
        max-width: 500px;
        border-radius: 8px;
        border: 1px solid #19bdcf;
    }
`
export const Main = styled.main``

export const TextArea = styled.textarea`
    width: 95%;
    min-width: 304px;
    max-width: 500px;
    height: 100px;
    min-height: 100px;
    max-height: 100px;
    padding: 5px;
    resize: none;
    border: none;
    background-color: transparent;

    :focus {
        outline: none;
    }
`

export const Ul = styled.ul`
    li + li {
        margin-bottom: 10px;
    }
`

export const ButtonPost = styled.button`
    padding: 5px 10px;
    border-radius: 30px;
    border: 5px solid #fff;
    background-color: #19bdcf;
    font-size: 15px;
    color: #fff;
    letter-spacing: 5px;
    font-weight: bolder;
    animation: none;
    transition: all 0.5s ease-in-out;

    :hover {
        border-radius: 30px 30px 0px 30px;
        box-shadow: inset 0px 30px 10px -25px black;
        transition: all 0.5s ease-in-out;
        animation: bounce42 1.6s infinite;
    }

    @keyframes bounce42 {
        0%,
        20%,
        50%,
        80%,
        100% {
            transform: translateY(0);
        }

        40% {
            transform: translateY(-5px);
        }

        60% {
            transform: translateY(-5px);
        }
    }
`

export const ChangePageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    width: 230px;
    margin: 0 auto;
`

export const ButtonPrev = styled.button`
    display: flex;
    height: 3em;
    width: 100px;
    align-items: center;
    justify-content: center;
    background-color: #eeeeee4b;
    border-radius: 3px;
    letter-spacing: 1px;
    transition: all 0.2s linear;
    cursor: pointer;
    border: none;
    background: #fff;

    > svg {
        margin-right: 5px;
        margin-left: 5px;
        font-size: 20px;
        transition: all 0.4s ease-in;
    }

    :hover {
        box-shadow: 9px 9px 33px #d1d1d1, -9px -9px 33px #ffffff;
        transform: translateY(-2px);

        > svg {
            font-size: 1.2em;
            transform: translateX(-5px);
        }
    }
`
export const ButtonNext = styled.button`
    display: flex;
    height: 3em;
    width: 100px;
    align-items: center;
    justify-content: center;
    background-color: #eeeeee4b;
    border-radius: 3px;
    letter-spacing: 1px;
    transition: all 0.2s linear;
    cursor: pointer;
    border: none;
    background: #fff;

    > svg {
        margin-right: 5px;
        margin-left: 5px;
        font-size: 20px;
        transition: all 0.4s ease-in;
    }

    :hover {
        box-shadow: 9px 9px 33px #d1d1d1, -9px -9px 33px #ffffff;
        transform: translateY(2px);

        > svg {
            font-size: 1.2em;
            transform: translateX(5px);
        }
    }
`
