import { useState } from 'react';

import { Container, Row, Col, Navbar, Button } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Randomizer, Tools } from 'text-randomizer';

import { ResultArea } from 'components/ResultArea';
import { StyledTooltip } from 'components/StyledTooltip';
import { TextArea } from 'components/TextArea';

const textRandomizer = new Randomizer();

const templateRandom = `{random(['найти', 'выбрать','подобрать'])}`;
const templateShuffle = `{shuffle([" мастеров ногетового сервиса", " визажистов", " парикмахеров"])}`;
const description = `В Simpo есть все - {shuffle([' мастера маникюра и педикюра', ' парикмахеры и визажисты',' бровисты и лешмейкеры',' стилисты-имиджмейкеры',' косметологи',' массажисты',' тату-мастера'])}`;

const options = {
    // Можно переопределить открывающий и закрывающий тег
    tags: {
        open: '{',
        close: '}',
    },
    // По умолчанию доступны number, choice и random
    actions: {
        shuffle(array) {
            return Tools.Choice(array, array.length, true);
        },
    },
};

textRandomizer.setOptions(options);

const App = () => {
    const [text, setText] = useState(
        `{random(['здесь','тут'])} {random(['можно','возможно'])}`
    );
    const [generatedText, setGeneratedText] = useState();

    const addExampleHandler = (ex) => {
        setText(`${text || ''} ${ex}`);
    };

    return (
        <HelmetProvider>
            <Helmet>
                <title>
                    {textRandomizer.render(
                        `{random(['Встречайте - ', 'Добро пожаловать - '])} Приложение Simpo!`
                    )}
                </title>
                <meta
                    name="description"
                    content={textRandomizer.render(description)}
                />
            </Helmet>
            <div className="bg-light text-dark vh-100">
                <Navbar bg="white">
                    <Container className="p-0">
                        <Navbar.Brand>Рандомизатор текста</Navbar.Brand>
                    </Container>
                </Navbar>

                <Container className="mt-5">
                    <Row className="py-3">
                        <Col md={12} className="p-0">
                            <StyledTooltip
                                tip="Подставить одно из слов"
                                onExample={() =>
                                    addExampleHandler(templateRandom)
                                }
                            >
                                Random
                            </StyledTooltip>
                            <StyledTooltip
                                tip="Перемешать слова"
                                onExample={() =>
                                    addExampleHandler(templateShuffle)
                                }
                            >
                                Shuffle
                            </StyledTooltip>
                            <StyledTooltip
                                tip="Вставить пример"
                                onExample={() => addExampleHandler(description)}
                                variant="warning"
                            >
                                Пример
                            </StyledTooltip>
                        </Col>
                    </Row>
                    <Row className="border-top d-flex w-100 bg-white shadow mb-3 bg-body rounded">
                        <Col md={6} className="border-bottom border-end  p-3">
                            Исходный текст
                        </Col>
                        <Col md={6} className="border-bottom border-end p-3">
                            Сгенерированный текст
                        </Col>
                        <Col md={6} className="px-3 border-end">
                            <TextArea
                                text={text}
                                textRandomizer={textRandomizer}
                                setGeneratedText={setGeneratedText}
                                setText={setText}
                            />
                        </Col>

                        <Col md={6} className="px-3">
                            <ResultArea generatedText={generatedText} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className="p-0 text-center">
                            <Button
                                className="mt-3"
                                variant="primary"
                                size="lg"
                                type="submit"
                                form="main-form"
                                disabled={!text}
                            >
                                Сгенерировать текст
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </HelmetProvider>
    );
};

export default App;
