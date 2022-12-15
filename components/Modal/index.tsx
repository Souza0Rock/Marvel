import React, { Fragment } from "react";
import * as S from './styles'

export default function Modal ({ isOpen, setIsOpen, closeButton = true, teste }: any) {
    
    if (!isOpen) return null;
    console.log(teste, 'resposta');
    
    return (
        <Fragment>
            <S.Overlay
                onClick={() => {
                    setIsOpen(false)
                }} 
            />
            <S.Modal>
                {closeButton ? <S.CloseButton type="button" 
                    onClick={() => {
                        setIsOpen(false)
                    }}
                /> : null}
                <h1>
                    {teste[1]?.name}
                </h1>
            </S.Modal>
        </Fragment>
    );
}
