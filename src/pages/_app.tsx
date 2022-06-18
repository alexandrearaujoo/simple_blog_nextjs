import { Toaster } from '../../node_modules/react-hot-toast/dist/index'
import Provider from '../contexts/index'
import GlobalStyled from '../styles/global'

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Provider>
                <Component {...pageProps} />
            </Provider>
            <GlobalStyled />
            <Toaster />
        </>
    )
}

export default MyApp
