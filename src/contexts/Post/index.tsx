import { createContext, useContext, useState } from 'react'
import toast from 'react-hot-toast'
import api from '../../services/api'

interface CreatePost {
    content: string
}

interface UpdatePost {
    newContent: string
}

interface Owner {
    id: string
    username: string
    avatarUrl: string
}

interface Post {
    id: string
    post: string
    owner: Owner
}

interface Response {
    page: number
    privoulousPage:string
    nextPage: string
    lastPage: number
    data: Post[]
}

interface PostContextData {
    posts: Response
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
    const [posts, setPosts] = useState<Response>()

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
                toast.success('Post published')
                getAllPosts(token)
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
                    Authorization: `Bearer ${token}`
                }
            })
            .then(_ => {
                toast.success('Updated post')
                getAllPosts(token)
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
                toast.success('Deleted post')
                getAllPosts(token)
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
