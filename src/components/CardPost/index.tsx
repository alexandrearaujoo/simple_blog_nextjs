import {
    Container,
    PostUser,
    NameUser,
    ImgUser,
    DivUser,
    DivButtons,
    DivImg
} from './style'

const CardPost = () => {
    return (
        <Container>
            <DivImg>
                <ImgUser src="https://media.istockphoto.com/vectors/profile-placeholder-image-gray-silhouette-no-photo-vector-id1016744004" />
            </DivImg>
            <DivUser>
                <NameUser>Alexandre Araujo</NameUser>
                <PostUser>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti error modi nulla. Totam dicta quae fuga, optio
                    culpa, obcaecati autem deleniti ipsum commodi cum sit animi
                    impedit molestias nisi tenetur.
                </PostUser>
            </DivUser>
            <DivButtons>
                <button>Del</button>
                <button>Up</button>
            </DivButtons>
        </Container>
    )
}
export default CardPost
