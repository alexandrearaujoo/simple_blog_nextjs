import { createContext, useState, useContext } from 'react'
import { useRouter } from '../../../node_modules/next/router'
import toast from '../../../node_modules/react-hot-toast/dist/index'
import api from '../../services/api'

interface CreateUserProps {
    username: string
    email: string
    avatarUrl: string
    password: string
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
    createUser: (data: CreateUserProps) => Promise<void>
    loginUser: (data: LoginUserProps) => Promise<void>
    logout: () => void
}

const UserContext = createContext<UserContextData>({} as UserContextData)


export const UserProvider = ({children}) => {
    const [userData, setUserData] = useState(() => {
        const data = localStorage.getItem('@UserAuth')

        if (data) {
            return JSON.parse(data)
        }

        return {}
    })

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
        setUserData({})
        route.push('/')
    }

    return (
        <UserContext.Provider value={{createUser, loginUser, logout, userData}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)
