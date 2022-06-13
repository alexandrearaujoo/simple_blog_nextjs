import styled from 'styled-components'

export const Header = styled.header`
    width: 100vw;
    background-color: #19bdcf;
    padding: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const AvatarUrl = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
`

export const ButtonLogout = styled.button``

export const Section = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-top: 10px;
`
export const Main = styled.main``

export const TextArea = styled.textarea`
    width: 95%;
    max-width: 500px;
    height: 100px;
    padding: 5px;

    border-radius: 8px;
    border: 1px solid #19bdcf;

    :focus {
        outline-color: #19bdcf;
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
