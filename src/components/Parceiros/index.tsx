import React from 'react';
import logoAmigao  from '../../assets/amigao.jpg'
import logoFaitanin  from '../../assets/faitanin.jpg'
import logoFace  from '../../assets/face-brasil.jpg'

import {
    Container,
    Content,
    ImgContent
} from './styles';

export function Parceiros() {
    return(
        <Container>
            <h1>Parceiros</h1>
               <Content>
                <ImgContent>
                    <img src={logoAmigao} alt="amigao"/>
                </ImgContent>
                <ImgContent>
                    <img src={logoFaitanin} alt="faitanin"/>
                </ImgContent>
                <ImgContent>
                    <img src={logoFace} alt="faitanin"/>
                </ImgContent>
               </Content>
        </Container>
    )
}