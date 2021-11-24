import { MdDelete } from 'react-icons/md'
import { Container } from './reservaStyle'

const Reservas = () => {
    return (
        <Container>
            <h1 id="title">Você solicitou 1 reserva</h1>

            <section>
                <img src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/caribe.jpg" alt="" />
                <strong>dfhagdjhfgasdhfjgasdjkfhgasdjhfg</strong>
                <span>Quantidade: 21</span>
                <button
                    type="button"
                    onClick={() => {}}
                >
                    <MdDelete size={20} color="#191919" />
                </button>
            </section>

            <footer>
                <button
                    type="button"
                >
                    Solicitar reserva
                </button>
            </footer>
        </Container>
    )
}

export default Reservas