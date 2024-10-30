import { useState } from "react"
import { Sidebar } from "./sidebar/sidebar"
import { Table } from "./table/table"

export function Body() {
    const [sidebarTitle, setSidebarTitle] = useState("Dynamic Sidebar Title")

    return (
        <div className='body'>
            <Sidebar title = {sidebarTitle}/>
            <Table setSidebarTitle = {setSidebarTitle}/>
        </div>
    )
}