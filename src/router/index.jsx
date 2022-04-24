import App from '../App';
import Listlist from '../pages/Listlist';
import Login from '../pages/Login';
import Edit from '../pages/Edit';
import Register from '../pages/Register';
import Means from '../pages/Means';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
const BaseRouter = ()=>(
    <Router>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='/list' element={<Listlist />}></Route>
                <Route path='/edit' element={<Edit />}></Route>
                <Route path='/means' element={<Means />}></Route>
            </Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
        </Routes>
    </Router>
)
export default BaseRouter;