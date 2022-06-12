import GlobalStyled from '../styles/global'

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Component {...pageProps} />
            <GlobalStyled />
        </>
    )
}

export default MyApp
