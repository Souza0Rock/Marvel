import React, { useEffect } from 'react';
import Api from '../../src/services/api';
import * as S from './styles'


const SectionCharacters: React.FC = () => {
    
    useEffect(() => {
        Api.get('/Characters')
        .then(response => console.log(response.data.data))
        .catch(err => console.log(err, "deu errado"));
    }, [])
    
    return (
        <S.Hello>hello</S.Hello>
    )
}

export default SectionCharacters
