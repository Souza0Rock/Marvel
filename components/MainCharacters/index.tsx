import React, { useCallback, useEffect, useState } from 'react';
import Api from '../../src/services/api';
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

interface ThumbnailData {
    thumbnail: {
        path: string;
        extension: string;
    };
};

export default function MainCharacters ({propFilter}: any) {

    const [character, setCharacter] = useState<ResponseData[]>([]);

    useEffect(() => {
        Api.get('/characters')
        .then(response =>{
            setCharacter(response?.data?.data?.results);
        })
        .catch(err => alert('Sorry, something went wrong.'));
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
            console.log(err);           
        }
    }, [character])

    const teste = character?.filter((item) =>
    item?.name?.toLowerCase()?.includes(propFilter?.toLowerCase())
    );

    return (
        <S.Container>
            <S.UlCard>
                {teste.map(character => {
                    return (
                        <S.Card key={character?.id}>
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
