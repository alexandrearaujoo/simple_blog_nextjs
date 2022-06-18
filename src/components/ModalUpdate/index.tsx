import { Section, Form } from './style'

const ModalUpdate = () => {
    return (
        <Section>
            <Form>
                <div>
                    <label>New post</label>
                    <textarea placeholder="Post your new message" />
                </div>
                <button type="submit">Updated</button>
            </Form>
        </Section>
    )
}

export default ModalUpdate
