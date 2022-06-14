import React, { useState } from 'react';
import logoImg from '../../assets/logo-speed.png';

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
    const [navbar, setNavbar] = useState(false)

    function changeBackground() {
        if (window.scrollY >= 120) {
            setNavbar(true)
        }
        setNavbar(false)
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <Container>
                <ImgLink to="/">
                    <img src={logoImg} alt="logo-speed" />
                </ImgLink>
            <NavMenu>
                <Bars />
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