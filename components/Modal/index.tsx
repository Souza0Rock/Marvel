import React, { Fragment, useState } from "react";
import * as S from './styles'

export default function Modal({ isOpen, setIsOpen, closeButton = true, character }: any) {

  if (!isOpen) return null;
  const [showDropdown, setShowDropdown] = useState(true)

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
          <S.DivImg>
            <S.Img
              src={`${character?.thumbnail?.path}/standard_amazing.${character?.thumbnail?.extension}`}
              alt={character?.name}
              id="img"
            />
            {character?.description ?
              <p>{character?.description}</p> :
              <p>Description not provided.</p>
            }
          </S.DivImg>
          <S.Container>
            <S.Dropdown 
              scroll={character?.comics?.items?.length > 4}>
              <h2
                onMouseEnter={() => setShowDropdown(true)}
                // onMouseLeave={() => setShowDropdown(false)}
                >
                comics +
              </h2>
              {showDropdown &&
                <ul>
                  {character?.comics?.items.length === 0 ?
                    <li>Not found</li> :
                    character?.comics?.items?.map((item: any, index: number) => {
                      return (
                        <S.DropItem key={index}>
                          {item?.name}
                        </S.DropItem>
                      )
                    })
                  }
                </ul>
              }
            </S.Dropdown>
              {/* <S.Dropdown scroll={character?.events?.items?.length > 4}>
                <ul>
                  <li className="dropItem"><p>events +</p>
                      <ul>
                          {character?.events?.items.length === 0 ? 
                              (<li><p>Not found</p></li>) : 
                              character?.events?.items?.map((item: any, index : number) => {
                                  return (
                                      <li key={index}>
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
                    <li className="dropItem"><p>series +</p>
                        <ul>
                            {character?.series?.items.length === 0 ? 
                                (<li><p>Not found</p></li>) : 
                                character?.series?.items?.map((item: any, index : number) => {
                                    return (
                                        <li key={index}>
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
                    <li className="dropItem"><p>stories +</p>
                        <ul>
                            {character?.stories?.items.length === 0 ? 
                                (<li><p>Not found</p></li>) : 
                                character?.stories?.items?.map((item: any, index : number) => {
                                    return (
                                        <li key={index}>
                                            <p className="itemMap">{item?.name}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </li>
                </ul>
            </S.Dropdown> */}
          </S.Container>
        </div>
      </S.Modal>
    </Fragment>
  );
}
