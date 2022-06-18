import { useEffect } from 'react'
import Head from '../../node_modules/next/head'
import CardPost from '../components/CardPost/index'
import Loading from '../components/Loading'
import { useUser } from '../contexts/User'
import {
    AvatarUrl,
    ButtonLogout,
    ButtonPost,
    Header,
    Main,
    Section,
    TextArea,
    Ul
} from '../styles/pages/dashboard'

const DashBoard = () => {
    const { getUser, user, logout } = useUser()

    useEffect(() => {
        const { userId, token } = JSON.parse(localStorage.getItem('@UserData'))
        getUser(userId, token)
    }, [])

    return (
        <>
            {user !== undefined ? (
                <>
                    <Head>
                        <title>DashBoard</title>
                        <link
                            rel="icon"
                            href="https://cdn-icons-png.flaticon.com/512/3959/3959542.png"
                        />
                    </Head>
                    <Header>
                        <AvatarUrl src={user.avatarUrl}/>
                        <h2>{user.username}</h2>
                        <ButtonLogout type="button" onClick={logout}>
                            Logout
                        </ButtonLogout>
                    </Header>
                    <Section>
                        <TextArea placeholder="Post your message..." />
                        <ButtonPost>Post</ButtonPost>
                    </Section>

                    <Main>
                        <Ul>
                            {[1, 2, 3, 4, 5].map(item => (
                                <CardPost />
                            ))}
                        </Ul>
                    </Main>
                </>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default DashBoard
