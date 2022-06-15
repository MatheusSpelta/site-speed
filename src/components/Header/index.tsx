import React, { useState } from 'react';
import logoImg from '../../assets/logo-speed.png';
import { Link } from 'react-router-dom';

import {
    Container,
    NavMenu,
    NavLink,
    ImgLink,
    Bars
} from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <Container className="Containerbar active">
                <ImgLink to="/">
                    <img src={logoImg} alt="logo-speed" />
                </ImgLink>
            <NavMenu>
                <Bars />
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/certificados">
                    Certificados
                </NavLink>
                <NavLink to="/softwares">
                    Softwares
                </NavLink>
                <NavLink to="/sobre">
                    Sobre
                </NavLink>
            </NavMenu>
        </Container>
    )
}