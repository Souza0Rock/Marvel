import React, { Fragment } from "react";
import * as S from './styles'

export default function Modal ({ isOpen, setIsOpen, closeButton = true, character }: any) {
    
    if (!isOpen) return null;

    console.log(character, 'testando requisição');
    
    
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
                    {character?.name}
                </h1>
                <div className="containerFlex">
                    <div className="divImg">
                        <img 
                            src={`${character?.thumbnail?.path}/standard_amazing.${character?.thumbnail?.extension}`} 
                            alt={character?.name} 
                            id="img" 
                        />
                        {character?.description ? 
                            <p>{character?.description}</p> :
                            <p>Description not provided.</p>
                        }
                    </div>
                    <S.Dropdown>
                        <ul>
                            <li><p>comics +</p>
                                <ul>
                                {
                                    character?.comics?.items?.map((item: any) =>{
                                        return (
                                            <li>
                                                <p>{item?.name}</p>
                                            </li>
                                        )
                                    })
                                }
                                </ul>
                            </li>
                            <li><p>series +</p>
                                <ul>
                                    <li>
                                        <p>deu certo</p>
                                    </li>
                                </ul>
                            </li>
                            <li><p>stories +</p>
                                <ul>
                                    <li>
                                        <p>deu certo</p>
                                    </li>
                                </ul>
                            </li>
                            <li><p>events +</p>
                                <ul>
                                    <li>
                                        <p>deu certo</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </S.Dropdown>
                </div>
            </S.Modal>
        </Fragment>
    );
}
