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

const CardPost = ({ post }) => {
    const { userData } = useUser()

    return (
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
                    <button>
                        <FaEdit />
                    </button>
                </DivButtons>
            )}
        </Container>
    )
}
export default CardPost
