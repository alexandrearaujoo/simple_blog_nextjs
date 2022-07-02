import { useUser } from '../../contexts/User'
import { FaTrash, FaEdit } from 'react-icons/fa'
import {
    Container,
    PostUser,
    NameUser,
    ImgUser,
    DivUser,
    DivButtons,
    DivImg,
    InputContainer,
    ButtonDelete,
    ButtonUpdate
} from './style'
import { useState } from 'react'
import { usePost } from '../../contexts/Post'

const CardPost = ({ post }) => {
    const { userData } = useUser()
    const { updatePost, deletePost } = usePost()
    const [newContent, setNewContent] = useState<string>('')
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
                    {showModalUpdate ? (
                        <InputContainer>
                            <textarea
                                defaultValue={post.post}
                                onChange={e => setNewContent(e.target.value)}
                                onKeyPress={e => {
                                    if (e.key === 'Enter') {
                                        updatePost(userData.token, post.id, {
                                            newContent
                                        })
                                        openModalUpdate()
                                    }
                                }}
                            />
                            <button
                                onClick={() =>
                                    updatePost(userData.token, post.id, {
                                        newContent
                                    }) && openModalUpdate()
                                }
                            >
                                Editar
                            </button>
                        </InputContainer>
                    ) : (
                        <PostUser>{post.post}</PostUser>
                    )}
                </DivUser>
                {userData.userId === post.owner.id ? (
                    <DivButtons>
                        <ButtonDelete onClick={() => deletePost(userData.token, post.id)}>
                            <FaTrash />
                        </ButtonDelete>
                        <ButtonUpdate onClick={openModalUpdate}>
                            <FaEdit />
                        </ButtonUpdate>
                    </DivButtons>
                ) : (
                    <DivButtons />
                )}
            </Container>
        </>
    )
}
export default CardPost
