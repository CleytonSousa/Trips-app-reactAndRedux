import {
    Routes,
    Route
} from 'react-router-dom'

import Home from '../pages/home/Home'
import Reservas from '../pages/reservas/Reservas'

export default function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reservas" element={<Reservas />} />
        </Routes>
    )
}