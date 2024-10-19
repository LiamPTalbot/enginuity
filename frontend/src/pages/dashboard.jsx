import { Wrapper } from '../components/wrapper/wrapper.jsx';
import { Nav } from '../components/wrapper/nav/nav.jsx';
import { Body } from '../components/wrapper/body/body.jsx';
import { Footer } from '../components/wrapper/footer/footer.jsx';

export function Dashboard() {
    return (
        <Wrapper>
            <Nav />
            <Body />
            <Footer />
        </Wrapper>
    );
}