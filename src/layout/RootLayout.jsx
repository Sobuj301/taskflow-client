import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main className='min-h-screen'>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>

        </div>
    );
};

export default RootLayout;