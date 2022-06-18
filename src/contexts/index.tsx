import { ReactNode } from 'react'
import { PostProvider } from './Post'
import { UserProvider } from './User/index'

interface ProviderProps {
    children: ReactNode
}

const Provider = ({ children }: ProviderProps) => {
    return (
        <UserProvider>
            <PostProvider>{children}</PostProvider>
        </UserProvider>
    )
}

export default Provider
