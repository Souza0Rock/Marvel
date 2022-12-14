import React, { useCallback, useEffect, useState } from 'react';
import Api from '../../src/services/api';
import Modal from '../Modal';
import * as S from './styles'

interface ResponseData {
    id: string;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
}

export default function MainCharacters () {
    
    const [character, setCharacter] = useState<ResponseData[]>([]);
    
    useEffect(() => {
        Api.get('/characters')
        .then(response =>{
            setCharacter(response?.data?.data?.results);
        })
        .catch(err => alert("Sorry, something went wrong."));
    }, [])    
    
    const handleMore = useCallback(async () => {
        try {
            const offset = character?.length;
            const response = await Api.get('characters', {
                params: {
                    offset,
                },
            });

            setCharacter([...character, ...response?.data?.data?.results])

        } catch (err) {
            alert("Sorry, something went wrong.");           
        }
    }, [character])

    const [search, setSearch] = useState("");

    const characterFilter = character?.filter((item) =>
    item?.name?.toLowerCase()?.includes(search?.toLowerCase())
    );

    const [modalOpen, setModalOpen] = useState(false)

    return (
        <S.Container>
            <Modal 
                isOpen={modalOpen} 
                setIsOpen={setModalOpen}
                closeButton={true}
                overlayClose={true}
            />
            <S.DivForm>
                <S.LabelSearch htmlFor={"search"}>
                    Search for your character here.
                </S.LabelSearch>
                <S.Input
                    type={"text"}
                    placeholder={"search"}
                    onChange={(ev) => {
                        setSearch(ev.target.value)
                    }}
                />
            </S.DivForm>
            <S.UlCard>
                {characterFilter.map(character => {
                    return (
                        <S.Card key={character?.id} 
                            onClick={() => {
                                setModalOpen(true);
                            }}
                        >
                            <img src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`} 
                                alt={character?.name} 
                                id="img" />
                            <h2>{character?.name}</h2>
                            <p>{character?.description}</p>
                        </S.Card>
                    )
                })}
            </S.UlCard>
            <S.ButtonMore onClick={handleMore}>
                <h1>more</h1>
            </S.ButtonMore>
        </S.Container>
    )
}
