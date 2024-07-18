import React, { useState } from 'react';
import Menu from './components/Menu';
import FormReserva from './components/FormReserva';
import FormContactanos from './components/FormContactanos';
import QuienesSomos from './components/QuienesSomos';
import Destinos from './components/Destinos';

const App: React.FC = () => {
    const [page, setPage] = useState('home');

    const renderPage = () => {
        switch (page) {
            case 'reserva':
                return <FormReserva />;
            case 'quienes-somos':
                return <QuienesSomos />;
            case 'contactanos':
                return <FormContactanos />;
            case 'destinos':
                return <Destinos/>
            default:
                return <h1>Bienvenido a Dreams Hotels</h1>;
        }
    };

    return (
        <div>
            <Menu setPage={setPage} />
            {renderPage()}
        </div>
    );
};

export default App;
