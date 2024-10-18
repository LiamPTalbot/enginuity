import { Wrapper } from '../components/wrapper/wrapper.jsx'
import { Nav } from '../components/wrapper/nav/nav.jsx'
import { Body } from '../components/wrapper/body/body.jsx'
import { Sidebar } from '../components/wrapper/body/sidebar/sidebar.jsx'
import { Table } from '../components/wrapper/body/table/table.jsx'
import { Footer } from '../components/wrapper/footer/footer.jsx'

export function Dashboard() {
    return (
        <Wrapper>
            <Nav />
            <Body>
                <Sidebar />
                <Table />
            </Body>
            <Footer />
        </Wrapper>
    )
}