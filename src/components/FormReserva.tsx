import React, { useState, useEffect } from 'react';

interface Usuario {
    nombre: string;
    apellido: string;
    rut: number;
    correo: string;
}

const FormReserva: React.FC = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>(() => {
        const savedUsuarios = localStorage.getItem('usuarios');
        return savedUsuarios ? JSON.parse(savedUsuarios) : [];
    });

    const [formValues, setFormValues] = useState({ nombre: '', apellido: '', rut: '', correo: '' });
    const [editIndex, setEditIndex] = useState<number | null>(null);

    useEffect(() => {
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }, [usuarios]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const rutNumber = Number(formValues.rut);
        if (isNaN(rutNumber)) {
            alert('Ingrese el RUT sin guion y con digito verificador');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formValues.correo)) {
            alert('Ingrese un correo electrónico válido');
            return;
        }

        const usuario: Usuario = {
            nombre: formValues.nombre,
            apellido: formValues.apellido,
            rut: rutNumber,
            correo: formValues.correo
        };

        if (editIndex !== null) {
            const updatedUsuarios = [...usuarios];
            updatedUsuarios[editIndex] = usuario;
            setUsuarios(updatedUsuarios);
            setEditIndex(null);
        } else {
            setUsuarios([...usuarios, usuario]);
        }
        setFormValues({ nombre: '', apellido: '', rut: '', correo: '' });
    };

    const handleEdit = (index: number) => {
        const usuario = usuarios[index];
        setFormValues({ 
            nombre: usuario.nombre, 
            apellido: usuario.apellido, 
            rut: usuario.rut.toString(), 
            correo: usuario.correo 
        });
        setEditIndex(index);
    };

    const handleDelete = (index: number) => {
        const updatedUsuarios = usuarios.filter((_, i) => i !== index);
        setUsuarios(updatedUsuarios);
    };

    return (
        <div className="contenedorform">
            <h2>Registra a los pasajeros</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nombre"
                    value={formValues.nombre}
                    placeholder="Nombre"
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="apellido"
                    value={formValues.apellido}
                    placeholder="Apellido"
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="rut"
                    value={formValues.rut}
                    placeholder="RUT"
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="correo"
                    value={formValues.correo}
                    placeholder="Correo"
                    onChange={handleChange}
                    required
                />
                <button type="submit">{editIndex !== null ? 'Guardar Cambios' : 'Crear'}</button>
            </form>

            <div className="listaqueestalista">
                <h2>Lista de pasajeros</h2>
                <ul>
                    {usuarios.map((usuario, index) => (
                        <li key={index}>
                            <strong>Nombre:</strong> {usuario.nombre} | <strong>Apellido:</strong> {usuario.apellido} | <strong>RUT:</strong> {usuario.rut} | <strong>Correo:</strong> {usuario.correo}
                            <button onClick={() => handleEdit(index)}>Editar</button>
                            <button onClick={() => handleDelete(index)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FormReserva;
