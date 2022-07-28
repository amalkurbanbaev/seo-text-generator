import { Form } from 'react-bootstrap';

export const TextArea = ({
    text,
    setGeneratedText,
    textRandomizer,
    setText,
}) => {
    const submitHandler = (e) => {
        e.preventDefault();

        setGeneratedText(textRandomizer.render(text));
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <Form onSubmit={(e) => submitHandler(e)} id="main-form">
            <Form.Control
                style={{
                    height: 300,
                    width: '100%',
                }}
                as="textarea"
                placeholder="Введите текст"
                value={text}
                onChange={(e) => handleChange(e)}
                className="mt-3"
            />
        </Form>
    );
};
