import React from 'react';

const Destinos: React.FC = () => {
    return (
        <div>
            <div className="destinos">
                <div>
                    <div className="tituloimagenxd">Toronto</div>
                    <div><img src="imagenes/toronto.png" alt="imagentoronto" /></div>
                </div>
                <div>
                    <div className="tituloimagenxd">Edmonton</div>
                    <div><img src="imagenes/edmonton.png" alt="imagenedmonton" /></div>
                </div>
            </div>
            <div className="destinosdos">
                <div>
                    <div className="tituloimagenxd">Winnipeg</div>
                    <div><img src="imagenes/Winnipeg.jpg" alt="imagenwinnipeg" /></div>
                </div>
                <div>
                    <div className="tituloimagenxd">Vancouver</div>
                    <div><img src="imagenes/vancuver.png" alt="imagenvancouver" /></div>
                </div>
            </div>
            <div className="destinosdos">
                <div>
                    <div className="tituloimagenxd">Quebec</div>
                    <div><img src="imagenes/Quebec.jpg" alt="imagenwinnipeg" /></div>
                </div>
                <div>
                    <div className="tituloimagenxd">Ottawa</div>
                    <div><img src="imagenes/Ottawa.jpg" alt="imagenvancouver" /></div>
                </div>
            </div>
            <div className="destinosdos">
                <div>
                    <div className="tituloimagenxd">Montreal</div>
                    <div><img src="imagenes/Montreal.jpg" alt="imagenwinnipeg" /></div>
                </div>
                <div>
                    <div className="tituloimagenxd">Calgary</div>
                    <div><img src="imagenes/Calgary.png" alt="imagenvancouver" /></div>
                </div>
            </div>
        </div>
    );
};

export default Destinos;

