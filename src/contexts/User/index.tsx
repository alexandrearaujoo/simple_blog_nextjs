import { useEffect } from 'react'
import { createContext, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import api from '../../services/api'

interface CreateUserProps {
    username: string
    email: string
    avatarUrl: string
    password: string
}

interface User {
    id: string
    username: string
    avatarUrl: string
    email: string
}

interface UserData {
    token: string
    userId: string
}

interface LoginUserProps {
    email: string
    password: string
}

interface UserContextData {
    userData: UserData
    user: User
    createUser: (data: CreateUserProps) => Promise<void>
    loginUser: (data: LoginUserProps) => Promise<void>
    getUser: (id: string, token: string) => Promise<void>
    logout: () => void
}

const UserContext = createContext<UserContextData>({} as UserContextData)


export const UserProvider = ({children}) => {
    const [userData, setUserData] = useState<UserData>()
    const [user, setUser] = useState<User>()

    useEffect(() => {
        const data = localStorage.getItem("@UserData")

        if (data) {
            setUserData(JSON.parse(data))
        }
    },[])

    const route = useRouter()

    const createUser = async (data: CreateUserProps) => {
        await api.post('/user/register', data)
        .then((_) => {
            toast.success('Registered user')
            route.push('/')
        })
        .catch(err => toast.error(err.response.data.message))
    }

    const loginUser = async (data: LoginUserProps) => {
        await api.post('/user/login', data)
        .then(res => {
            localStorage.setItem('@UserData', JSON.stringify(res.data))
            setUserData(res.data)
            toast.success('Successfully logged in')
            route.push('/dashboard')
        })
        .catch(err => toast.error(err.response.data.message))
    }

    const logout = () => {
        localStorage.clear()
        route.push('/')
    }

    const getUser = async (id: string, token: string) => {
         await api.get(`/user/${id}`, { headers: {
            'Authorization': `Bearer ${token}`
        }})
        .then(res => setUser(res.data))
        .catch(err => console.log(err))

    }

    return (
        <UserContext.Provider value={{createUser, loginUser,getUser,logout, userData, user}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)
