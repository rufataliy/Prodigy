import React, { useContext, useEffect } from "react"
import { Collapse, Button, Icon, Tabs, Input } from "antd"
import { newClassForm } from "./_newClassTmp.jsx"
import Context from "../store/context"
import { MODAL, VOCAB, WORDS, TOPICS, FORM_CONFIG, INITIAL_VALUES, COMP_UPDATE } from "../store/useGlobalState"
import ModalComp from "./Modal.jsx"
import { FormikForm } from "./form.jsx"
import WordList from "./wordList.jsx"
import FormModal from "./formModal.jsx"

const { TabPane } = Tabs;
const { Panel } = Collapse


const Vocabulary = () => {
    const { modalState,
        initialValues,
        formConfig,
        vocabState,
        appState,
        compUpdate,
        actions } = useContext(Context)

    useEffect(() => {
        getVocabs()
    }, [compUpdate]
    )
    const getVocabs = async () => {
        const props = {
            collectionName: "vocabularies",
            method: "get",
            author: appState.uid
        }
        const vocabs = await newClassForm.dbPath(props)();
        actions({
            type: VOCAB,
            payload: { ...vocabState, vocabs: vocabs }
        })
    }
    const getAllWords = async () => {
        const props = {
            collectionName: "words",
            method: "get",
            author: appState.uid
        }
        const allWords = await newClassForm.dbPath(props)();
        actions({
            type: VOCAB,
            payload: { ...vocabState, allWords: allWords }
        })
    }
    const onSearch = (event) => {
        actions({
            type: VOCAB,
            payload: { ...vocabState, searchTerm: event.target.value }
        })
    }
    const getSearchedWords = () => {
        return vocabState.allWords.filter((word) => {
            return word.phrase.search(vocabState.searchTerm) != -1
        })
    }
    const getTopicWords = async (key, operator, searchedValue) => {
        const props = {
            collectionName: "words",
            method: "getWhere",
            author: appState.uid,
            key: key,
            operator: operator,
            searchedValue: searchedValue
        }
        const allWords = await newClassForm.dbPath(props)();
        actions({
            type: VOCAB,
            payload: { ...vocabState, allWords: allWords }
        })
    }
    const onChange = (id) => {
        const vocab = vocabState.vocabs.filter(vocab => {
            return vocab.id == id
        })
        console.log(vocab);
        if (vocab[0]) {
            getTopicWords("topic", "==", vocab[0].topic)
        } else {
            actions({
                type: VOCAB,
                payload: { ...vocabState, allWords: [] }
            })
        }
    }
    const handleNewVocabClick = () => {
        actions({
            type: FORM_CONFIG,
            payload: {
                ...formConfig,
                collectionName: "vocabularies",
                formType: "newVocabulary",
                method: "add"
            }
        })
        actions({
            type: INITIAL_VALUES,
            payload: {
                ...initialValues,
                newVocabulary: {
                    name: "",
                    topic: "",
                    level: ""
                }
            }
        })
        toggleModal()

    }
    const handleEditVocab = (vocab) => {
        console.log("edit");
        const { name, topic, level, id } = vocab
        actions({
            type: FORM_CONFIG,
            payload: {
                ...formConfig,
                collectionName: "vocabularies",
                formType: "newVocabulary",
                method: "update",
                docId: id
            }
        })
        actions({
            type: INITIAL_VALUES,
            payload: {
                ...initialValues,
                newVocabulary: {
                    name: name,
                    topic: topic,
                    level: level
                }
            }
        })
        toggleModal()
    }
    const handleDelete = (vocabId) => {
        const props = {
            collectionName: "vocabularies",
            method: "delete",
            docId: vocabId
        }
        newClassForm.dbPath(props)().then(() => {
            actions({
                type: COMP_UPDATE,
                payload: {
                    compUpdate: !compUpdate
                }
            })
        })
    }
    const toggleModal = () => {
        actions({
            type: MODAL,
            payload: { ...modalState, modalVisibility: !modalState.modalVisibility }
        })
    }
    const renderModal = () => {
        return (
            <ModalComp
                isVisible={modalState.modalVisibility}
                nonSubmit={toggleModal}
                onSubmit={toggleModal}
                title={formConfig.title}
            >
                <FormikForm
                    formType={formConfig.formType}
                    collectionName={formConfig.collectionName}
                    docId={formConfig.docId}
                    method={formConfig.method}
                    handleDelete={handleDelete}
                />
            </ModalComp>
        )
    }

    const editWord = (word) => {
        const { phrase, definition, example, topic, id } = word
        actions({
            type: FORM_CONFIG,
            payload: {
                ...formConfig,
                collectionName: "words",
                formType: "newWord",
                method: "update",
                docId: id
            }
        })
        actions({
            type: INITIAL_VALUES,
            payload: {
                ...initialValues,
                newWord: {
                    phrase: phrase,
                    topic: topic,
                    definition: definition,
                    example: example
                }
            }
        })
        toggleModal()

    }
    const deleteWord = (id) => {
        const props = {
            collectionName: "words",
            method: "delete",
            docId: id
        }
        newClassForm.dbPath(props)().then(() => {
            actions({
                type: COMP_UPDATE,
                payload: {
                    compUpdate: !compUpdate
                }
            })
        })
        // onChange()
    }
    const addWordBtn = (vocab) => (

        <div>
            <Icon style={{ fontSize: 1.5 + 'em' }} type="delete" onClick={(event) => {
                event.stopPropagation()
                handleDelete(vocab.id)
            }} />
            <Icon style={{ fontSize: 1.5 + 'em', margin: 5 + 'px' }} type="edit" onClick={(event) => {
                event.stopPropagation()
                handleEditVocab(vocab)
            }} />
            <Icon style={{ fontSize: 1.5 + 'em' }} type="plus-circle" onClick={(event) => {
                event.stopPropagation()
                actions({
                    type: FORM_CONFIG,
                    payload: {
                        ...formConfig,
                        collectionName: "words",
                        formType: "newWord",
                        method: "add"
                    }
                })
                actions({
                    type: INITIAL_VALUES,
                    payload: {
                        ...initialValues, newWord: {
                            ...initialValues.newWord,
                            topic: vocab.topic
                        }
                    }
                })
                toggleModal()
            }} />
        </div>
    )
    const handleTabChange = (activeKey) => {
        switch (activeKey) {
            case WORDS:
                getAllWords()
                break;
            case TOPICS:

                break;
        }
    }
    return (
        <div>
            {console.log("vocab rendered")}
            <Button onClick={handleNewVocabClick} >New</Button>
            {modalState.modalVisibility && <FormModal toggleModal={toggleModal} handleDelete={handleDelete} />}
            <Tabs onChange={handleTabChange} defaultActiveKey="1" tabPosition="left" style={{ height: 100 + "%" }}>
                <TabPane tab="Topics" key={TOPICS}>
                    <Collapse onChange={onChange} accordion>
                        {vocabState.vocabs.map(vocab => {
                            return (
                                <Panel header={vocab.name} key={vocab.id} extra={addWordBtn(vocab)}>
                                    <WordList data={vocabState.allWords}
                                        emptyText={{ emptyText: "words not found" }}
                                        edit={editWord}
                                        delete={deleteWord} />
                                </Panel>
                            )
                        })}
                    </Collapse>
                </TabPane>
                <TabPane tab="All words" key={WORDS}>
                    <Input placeholder="Search" onChange={onSearch} />
                    <WordList data={getSearchedWords()}
                        emptyText={{ emptyText: "words not found" }}
                        edit={editWord}
                        delete={deleteWord}
                    />
                </TabPane>
            </Tabs>

        </div>
    )
}

export default Vocabulary