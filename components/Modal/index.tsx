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
                            <li className="dropItem"><p>comics +</p>
                                <ul>
                                {
                                    character?.comics?.items?.map((item: any) =>{
                                        return (
                                            <li>
                                                <p className="itemMap">{item?.name}</p>
                                            </li>
                                        )
                                    })
                                }
                                </ul>
                            </li>
                            <li className="dropItem"><p>events +</p>
                                <ul>
                                {
                                    character?.events?.items?.map((item: any) =>{
                                        return (
                                            <li>
                                                <p className="itemMap">{item?.name}</p>
                                            </li>
                                        )
                                    })
                                }
                                </ul>
                            </li>
                            <li className="dropItem"><p>series +</p>
                                <ul>
                                {
                                    character?.series?.items?.map((item: any) =>{
                                        return (
                                            <li>
                                                <p className="itemMap">{item?.name}</p>
                                            </li>
                                        )
                                    })
                                }
                                </ul>
                            </li>
                            <li className="dropItem"><p>stories +</p>
                                <ul>
                                {
                                    character?.stories?.items?.map((item: any) =>{
                                        return (
                                            <li>
                                                <p className="itemMap">{item?.name}</p>
                                            </li>
                                        )
                                    })
                                }
                                </ul>
                            </li>
                        </ul>
                    </S.Dropdown>
                </div>
            </S.Modal>
        </Fragment>
    );
}
