import styled from 'styled-components'

export const Container = styled.main`
    width: 100vw;
    height: 100vh;
    background: #19bdcf;
    background: linear-gradient(to bottom, #19bdcf 66%, #f3f3f3 66%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
        display: none;
    }

    @media screen and (min-width: 1024px) {
        background: #19bdcf;
        background: linear-gradient(to right, #19bdcf 66%, #f3f3f3 66%);

        flex-direction: row;
        align-items: center;

        svg {
            display: block;
        }
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    height: 95%;
    justify-content: space-around;
`

export const Section = styled.section`
    background-color: #fff;
    width: 95%;
    max-width: 350px;
    height: 350px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0 0.4rem #dfd9d9;
`

export const Button = styled.button`
    position: relative;
    width: 100%;
    display: inline-block;
    margin: 15px;
    padding: 5px 10px;
    text-align: center;
    font-size: 18px;
    letter-spacing: 1px;
    text-decoration: none;
    color: #000;
    background: transparent;
    cursor: pointer;
    transition: ease-out 0.5s;
    border: 2px solid #dfd9d9;
    border-radius: 10px;
    box-shadow: inset 0 0 0 0 #dfd9d9;

    :hover {
        color: #000;
        box-shadow: inset 0 -100px 0 0 #dfd9d9  ;
    }

    :active {
        transform: scale(0.9);
    }
`
export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
        margin-bottom: 8px;
    }

    input {
        background-color: #eee;
        border: none;
        padding: 10px;
        font-size: 1rem;
        width: 100%;
        border-radius: 1rem;
        box-shadow: 0 0.4rem #dfd9d9;
        cursor: pointer;

        :focus {
            outline-color: #19bdcf;
        }
    }
`

export const ButtonSignUp = styled.button`
    border: none;
    margin-left: 5px;
    background-color: transparent;
    cursor: pointer;
    border-bottom: 1px solid #dfd9d9;
    font-size: 15px;
    color: #19bdcf;
`
