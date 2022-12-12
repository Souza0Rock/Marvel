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
            console.log(response.data.data.results);
            setCharacter(response.data.data.results);
            console.log('segundo log', character);
        })
        .catch(err => console.log(err));
    }, [])
    
    return (
        <ul>
            {character.map(character => {
                return (
                    <li key={character?.id}>
                        <S.Name>{character?.name}</S.Name>
                        <S.Thumbinail 
                        src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`} 
                        alt={character?.name} />
                    </li>
                )
            })}
        </ul>
    )
}

export default SectionCharacters
