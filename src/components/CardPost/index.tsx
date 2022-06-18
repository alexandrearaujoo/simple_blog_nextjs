import { useUser } from '../../contexts/User'
import { FaTrash, FaEdit } from 'react-icons/fa'
import {
    Container,
    PostUser,
    NameUser,
    ImgUser,
    DivUser,
    DivButtons,
    DivImg
} from './style'
import { useState } from 'react'
import ModalUpdate from '../ModalUpdate'

const CardPost = ({ post }) => {
    const { userData } = useUser()
    const [showModalUpdate, setShowModalUpdate] = useState(false)
    const [showModalDelete, setShowModalDelete] = useState(false)

    const openModalUpdate = () => {
        setShowModalUpdate(!showModalUpdate)
    }
    const openModalDelete = () => {
        setShowModalDelete(!showModalDelete)
    }

    return (
        <>
            <Container>
                <DivImg>
                    <ImgUser src={post.owner.avatarUrl} />
                </DivImg>
                <DivUser>
                    <NameUser>{post.owner.username}</NameUser>
                    <PostUser>{post.post}</PostUser>
                </DivUser>
                {userData.userId === post.owner.id && (
                    <DivButtons>
                        <button>
                            <FaTrash />
                        </button>
                        <button onClick={openModalUpdate}>
                            <FaEdit />
                        </button>
                    </DivButtons>
                )}
            </Container>
            {showModalUpdate && <ModalUpdate />}
        </>
    )
}
export default CardPost
