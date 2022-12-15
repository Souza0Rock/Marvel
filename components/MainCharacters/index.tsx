import React, { Fragment, useCallback, useEffect, useState } from 'react';
import Api from '../../src/services/api';
import Modal from '../Modal';
import { Error } from '../Error';
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

    const [error, setError] = useState(false)
    
    useEffect(() => {
        Api.get('/characters', {
            params: {
                limit: 20
            }
        })
        .then(response =>{
            setCharacter(response?.data?.data?.results);
            setTeste(response?.data?.data?.results)
            // console.log(response?.data, 'teste');
        })
        .catch(err => setError(true));
    }, [])

    const [teste, setTeste] = useState();
    
    const handleMore = useCallback(async () => {
        try {
            const offset = character?.length;
            const response = await Api.get('characters', {
                params: {
                    offset,
                    limit: 30,
                },
            });

            setCharacter([...character, ...response?.data?.data?.results])

        } catch (err) {
            setError(true);           
        }
    }, [character])

    const [search, setSearch] = useState("");

    const characterSearchFilter = character?.filter((item) =>
    item?.name?.toLowerCase()?.includes(search?.toLowerCase())
    );

    const [modalOpen, setModalOpen] = useState(false)

    return (
        <S.Container>
        {error ? 
            <Error /> :
            <Fragment>
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
                    {characterSearchFilter && characterSearchFilter.map(character => {
                        return (
                            <S.Card key={character?.id} 
                                onClick={() => {
                                    setModalOpen(true);
                                }}
                            >
                                <img src={`${character?.thumbnail?.path}/portrait_uncanny.${character?.thumbnail?.extension}`} 
                                    alt={character?.name} 
                                    id="img" />
                                <h2>{character?.name}</h2>
                                {character?.description ? 
                                    <p>{character?.description}</p> :
                                    <p>Description not provided.</p>
                                }
                            </S.Card>
                        )
                    })}
                </S.UlCard>
                <S.ButtonMore onClick={handleMore}>
                    <h1>more</h1>
                </S.ButtonMore>
                <Modal 
                    isOpen={modalOpen} 
                    setIsOpen={setModalOpen}
                    character={character}
                    teste={teste}
                />
            </Fragment>
        }
        </S.Container>
    )
}
