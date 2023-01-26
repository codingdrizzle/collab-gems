import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes'
import 'antd/dist/reset.css';

function App() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}

export default App;
