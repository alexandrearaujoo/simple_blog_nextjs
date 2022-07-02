import { Toaster } from 'react-hot-toast'
import Provider from '../contexts/index'
import GlobalStyled from '../styles/global'

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Toaster />
            <Provider>
                <Component {...pageProps} />
            </Provider>
            <GlobalStyled />
        </>
    )
}

export default MyApp
