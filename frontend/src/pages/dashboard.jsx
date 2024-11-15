import { createContext, useState } from 'react';
import { Nav } from '../components/nav/nav.jsx';
import { Body } from '../components/body/body.jsx';
import { Footer } from '../components/footer/footer.jsx';
import '../pages/dashboard.css';

// create the UserContext and export it for other components to use
export const UserContext = createContext();

export function Dashboard() {
    
    const [user, setUser] = useState({
        name: "Liam Talbot",
        email: "liam.talbot@gmail.com",
    });

    return (
        <UserContext.Provider value={user}>
            <div className='wrapper'>
                <Nav />
                <Body />
                <Footer />
            </div>
        </UserContext.Provider>
    );
}
