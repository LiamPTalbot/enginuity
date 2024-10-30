import { Sidebar } from "./sidebar/sidebar"
import { Table } from "./table/table"

export function Body() {
    // passing the sidebar Title as a prop from body (parent) to sidebar (child)
    const sidebarTitle = "Dynamic Sidebar Title"
    return (
        <div className='body'>
            <Sidebar title = {sidebarTitle}/>
            <Table/>
        </div>
    )
}