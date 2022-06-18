import { createContext, useContext, useState } from 'react'
import toast from 'react-hot-toast'
import api from '../../services/api'

interface CreatePost {
    content: string
}

interface UpdatePost {
    newContent: string
}

interface PostContextData {
    posts: string[]
    getAllPosts: (token: string, page: string) => Promise<void>
    createPost: (token: string, content: CreatePost) => Promise<void>
    updatePost: (
        token: string,
        postId: string,
        newContent: UpdatePost
    ) => Promise<void>
    deletePost: (token: string, postId: string) => Promise<void>
}

const PostContext = createContext<PostContextData>({} as PostContextData)

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([])

    const getAllPosts = async (token: string, page = '1') => {
        const { data } = await api.get(`/post?page=${page}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setPosts(data)
    }

    const createPost = async (token: string, content: CreatePost) => {
        await api
            .post('/post', content, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(_ => {
                getAllPosts(token)
                toast.success('Post published')
            })
            .catch(err => toast.error(err.response.data.message))
    }

    const updatePost = async (
        token: string,
        postId: string,
        newContent: UpdatePost
    ) => {
        await api
            .patch(`post/${postId}`, newContent, {
                headers: {
                    Authotization: `Bearer ${token}`
                }
            })
            .then(_ => {
                getAllPosts(token)
                toast.success('Updated post')
            })
            .catch(err => toast.error(err.response.data.message))
    }

    const deletePost = async (token: string, postId: string) => {
        await api
            .delete(`post/${postId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(_ => {
                getAllPosts(token)
                toast.success('Deleted post')
            })
            .catch(err => toast.error(err.response.data.message))
    }

    return (
        <PostContext.Provider
            value={{ posts, getAllPosts, createPost, updatePost, deletePost }}
        >
            {children}
        </PostContext.Provider>
    )
}
export const usePost = () => useContext(PostContext)
