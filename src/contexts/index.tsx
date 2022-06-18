import { ReactNode } from 'react'
import { UserProvider } from './User/index'

interface ProviderProps {
    children: ReactNode
}

const Provider = ({ children }: ProviderProps) => {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    )
}

export default Provider
