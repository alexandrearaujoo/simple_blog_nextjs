import { useEffect } from 'react'
import { BiLogOut } from 'react-icons/bi'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Head from 'next/head'
import CardPost from '../components/CardPost/index'
import Loading from '../components/Loading'
import { usePost } from '../contexts/Post'
import { useUser } from '../contexts/User'
import {
    AvatarUrl,
    ButtonLogout,
    ButtonPost,
    Header,
    Main,
    Form,
    TextArea,
    Ul,
    ChangePageContainer,
    ButtonPrev,
    ButtonNext
} from '../styles/pages/dashboard'
import { useState } from 'react'

interface PostProps {
    content: string
}

const DashBoard = () => {
    const { getUser, user, userData, logout } = useUser()
    const { getAllPosts, posts, createPost } = usePost()
    const [page, setPage] = useState(1)

    const postSchema = yup.object().shape({
        content: yup
            .string()
            .max(100, 'Maximum of 100 characters')
            .required('Invalid publication')
    })

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(postSchema)
    })

    const onSubmit = async (content: PostProps) => {
        await createPost(userData.token, content)
        reset()
    }

    const nextPage = () => {
        setPage(page + 1)
    }
    const previousPage = () => {
        if (page - 1) {
            setPage(page - 1)
        }
    }

    useEffect(() => {
        const { userId, token } = JSON.parse(localStorage.getItem('@UserData'))
        getUser(userId, token)
        getAllPosts(token, page.toString())
    }, [page])

    if (!user) {
        return <Loading />
    }

    if (!posts) {
        return <Loading />
    }

    return (
        <>
            <Head>
                <title>DashBoard</title>
                <link
                    rel="icon"
                    href="https://cdn-icons-png.flaticon.com/512/3959/3959542.png"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Header>
                <AvatarUrl src={user.avatarUrl} />
                <h2>{user.username}</h2>
                <ButtonLogout type="button" onClick={logout}>
                    <BiLogOut /> Logout
                </ButtonLogout>
            </Header>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <TextArea
                        placeholder="Post your message..."
                        {...register('content')}
                    />
                    <ButtonPost type="submit">Post</ButtonPost>
                </div>
            </Form>
            <Main>
                <Ul>
                    {posts.data.map(post => (
                        <CardPost key={post.id} post={post} />
                    ))}
                </Ul>
            </Main>
            <ChangePageContainer>
                <ButtonPrev onClick={previousPage}>
                    {' '}
                    <FaLongArrowAltLeft /> Prev
                </ButtonPrev>
                <ButtonNext onClick={nextPage}>
                    Next <FaLongArrowAltRight />
                </ButtonNext>
            </ChangePageContainer>
        </>
    )
}

export default DashBoard
