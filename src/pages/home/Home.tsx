import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { MdFlightTakeoff } from 'react-icons/md'

//styles

import { Container } from "./homeStyle";

const Home = () => {
    const [trips, setTrips] = useState([])

    useEffect(() => {
        const LoadData = async () => {
            const response = await api.get('trips')
            setTrips(response.data);
        }

        LoadData()
    }, [])

    return (
        <Container>
            {trips?.map(({ id, title, status, image }: any) => (
                <li key={id}>
                    <img src={image} alt={title} />
                    <strong>{title}</strong>
                    <span>Status: {status ? 'Disponivel' : 'Indisponivel'}</span>

                    <button type="button"
                        onClick={() => { }}
                    >
                        <section>
                            <MdFlightTakeoff size={16} color="#FFF" />
                            <span>Solicitar reserva</span>
                        </section>
                    </button>
                </li>
            ))}
        </Container>
    )
}

export default Home