import React, { Fragment } from "react";
import * as S from './styles'

export default function Modal({ isOpen, setIsOpen, closeButton = true, character }: any) {

    if (!isOpen) return null;

    console.log(character, 'testando requisição');

    
    const teste = () => {
        document.getElementById("z-index")
    }


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
                    <S.Teste>
                        <S.Dropdown scroll={character?.comics?.items?.length > 4}>
                            <ul>
                                <li className="dropItem" onClick={() => {teste}} ><p>comics <br />+</p>
                                    <ul>
                                        {
                                            character?.comics?.items?.map((item: any) => {
                                                return (
                                                    <li key={item}>
                                                        <p className="itemMap">{item?.name}</p>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                            </ul>
                        </S.Dropdown>
                        <S.Dropdown scroll={character?.events?.items?.length > 4}>
                            <ul>
                                <li className="dropItem"><p>events <br />+</p>
                                    <ul>
                                        {
                                            character?.events?.items?.map((item: any) => {
                                                return (
                                                    <li key={item}>
                                                        <p className="itemMap">{item?.name}</p>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                            </ul>
                        </S.Dropdown>
                        <S.Dropdown scroll={character?.series?.items?.length > 4}>
                            <ul>
                                <li className="dropItem"><p>series <br />+</p>
                                    <ul>
                                        {
                                            character?.series?.items?.map((item: any) => {
                                                return (
                                                    <li key={item}>
                                                        <p className="itemMap">{item?.name}</p>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                            </ul>
                        </S.Dropdown>
                        <S.Dropdown scroll={character?.stories?.items?.length > 4}>
                            <ul>
                                <li className="dropItem" ><p>stories <br />+</p>
                                    <ul>
                                        {
                                            character?.stories?.items?.map((item: any) => {
                                                return (
                                                    <li key={item}>
                                                        <p className="itemMap">{item?.name}</p>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                            </ul>
                        </S.Dropdown>
                    </S.Teste>
                </div>
            </S.Modal>
        </Fragment>
    );
}
