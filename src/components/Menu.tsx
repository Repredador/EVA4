import React from 'react';

interface MenuProps {
    setPage: (page: string) => void;
}

const Menu: React.FC<MenuProps> = ({ setPage }) => {
    return (
        <div className="menu">
            <span onClick={() => setPage('destinos')}>Home</span>
            <span onClick={() => setPage('reserva')}>Reserva Aquí</span>
            <span onClick={() => setPage('quienes-somos')}>Quienes Somos</span>
            <span onClick={() => setPage('contactanos')}>Contáctanos</span>
        </div>
    );
};

export default Menu;

