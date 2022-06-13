import Head from '../../node_modules/next/head'
import CardPost from '../components/CardPost/index'
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
    return (
        <>
            <Head>
                <title>DashBoard</title>
                <link
                    rel="icon"
                    href="https://cdn-icons-png.flaticon.com/512/3959/3959542.png"
                />
            </Head>
            <Header>
                <AvatarUrl src="https://media.istockphoto.com/vectors/profile-placeholder-image-gray-silhouette-no-photo-vector-id1016744004" />
                <h2>Alexandre Araujo</h2>
                <ButtonLogout type="button"> Logout </ButtonLogout>
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
    )
}

export default DashBoard
