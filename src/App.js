import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import {DefaultLayout} from '~/components/Layout'
//<Route path='/' element ={<Home/>} />
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout = route.layout || DefaultLayout; // de chon mac dinh neu khong co layout dac biet
                        const Page = route.component;
                    return <Route key={index} path={route.path} element={<Layout><Page/></Layout>}/>
                })}</Routes>
            </div>
        </Router>
    );
}

export default App;
