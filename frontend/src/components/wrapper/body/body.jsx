import { Sidebar } from "./sidebar/sidebar"
import { Table } from "./table/table"

export function Body() {
    return (
        <div className='body'>
            <Sidebar/>
            <Table/>
        </div>
    )
}