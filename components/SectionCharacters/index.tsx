import React, { useEffect, useState } from 'react';
import Api from '../../src/services/api';
import * as S from './styles'

interface ResponseData {
    id: string;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    }
}

function SectionCharacters () {

    const [character, setCharacter] = useState<ResponseData[]>([]);

    useEffect(() => {
        Api.get('/characters')
        .then(response =>{
            setCharacter(response.data.data.results);
        })
        .catch(err => alert('Desculpe, algo deu errado'));
    }, [])
    
    return (
        <ul>
            {character.map(character => {
                return (
                    <S.Card key={character?.id}>
                        <h2>{character?.name}</h2>
                        <S.Thumbinail 
                            src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`} 
                            alt={character?.name} />
                        <p>{character?.description}</p>
                    </S.Card>
                )
            })}
        </ul>
    )
}

export default SectionCharacters
