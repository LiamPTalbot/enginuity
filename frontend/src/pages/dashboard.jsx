import { Nav } from '../components/nav/nav.jsx';
import { Body } from '../components/body/body.jsx';
import { Footer } from '../components/footer/footer.jsx';
import '../pages/dashboard.css';

export function Dashboard() {
    return (
        <div className='wrapper'>
            <Nav />
            <Body />
            <Footer />
        </div>
    );
}
