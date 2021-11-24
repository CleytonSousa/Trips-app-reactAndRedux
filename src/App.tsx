import { Headers } from "./components/Headers"
import MyRoutes from "./routes/Routes"
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux"
import { store } from "./store"

const App = () => {
    return (
        <Provider store={store} >
            <BrowserRouter>
                <Headers />
                <MyRoutes />
            </BrowserRouter>
        </Provider>
    )
}

export default App