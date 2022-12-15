import React from "react";
import * as S from './styles'

export default function Modal ({ isOpen, setIsOpen, closeButton = true, overlayClose = false, id = 'modal' }: any) {
    
    if (!isOpen) return null;

    // const handleOverlayClick = ({e}: any) => {
    //     if(e) e.preventDefault();
    //     if(e?.target.id !== id) return;
    //     setIsOpen(false);
    // }

    return (
        <>
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
                <h1>hello</h1>
            </S.Modal>
        </>
    );
}
