import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Certificados } from '../pages/Certificados';
import { Dashboard } from '../pages/Dashboard';
import { Sobre } from '../pages/Sobre';
import { Softwares } from '../pages/Softwares';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/certificados" element={<Certificados />} />
            <Route path="/softwares" element={<Softwares />} />
            <Route path="/sobre" element={<Sobre />} />
        </Routes>
    )
}