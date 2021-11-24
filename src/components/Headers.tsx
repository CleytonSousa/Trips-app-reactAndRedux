import React from 'react'
import { Link } from 'react-router-dom'

//styles
import { Header } from './HeaderStye'

export const Headers = () => {
    return (
        <Header>
            <Link to="/">
                <img className="logo" src="https://uploads-ssl.webflow.com/5ac286bb60db4938a648e594/5acd1a998bad9920b5c7c738_Global%20Aviation%20Logo.png" alt="logo" />
            </Link>

            <Link className="reserva" to="reservas">
                <section>
                    <strong>MInhas reservas</strong>
                    <span>0 reservas</span>
                </section>
            </Link>
        </Header>
    )
}
