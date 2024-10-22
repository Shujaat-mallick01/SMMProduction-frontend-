import { Outlet } from 'react-router-dom'
import Header from '../Header/Header';

const Layout = () => {
    return (
        <div className='container'>
            <Header />
            <main>
                <Outlet />
            </main>
            {/* <footer>
                <p>Footer content here</p>
            </footer> */}
        </div>
    );
};

export default Layout
