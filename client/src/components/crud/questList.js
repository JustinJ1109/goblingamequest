import React, { useEffect, useMemo, useRef, useState } from "react"
import { AgGridReact } from 'ag-grid-react'
import { Link } from "react-router-dom"
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

const Quest = (props) => (
    <tr>

        <td>{props.quest.title}</td>
        <td>{props.quest.type}</td>
        <td>{props.quest.summary}</td>
        <td>{props.quest.description}</td>
        <td>
            <Link className="btn btn-link" to={`/edit/${props.quest._id}`}>Edit</Link> |
            <button className="btn btn-link"
                onClick={() => {
                    props.deleteQuest(props.quest._id);
                }}
            >
                Delete
            </button>
        </td>
    </tr>
)

export default function QuestList() {
    const [quests, setQuests] = useState([]);
    // This method fetches the quests from the database.
    useEffect(() => {
        async function getQuests() {
            const response = await fetch(`http://localhost:5000/quest/`);
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
            const quests = await response.json();
            setQuests(quests);
        }
        getQuests();
        return;
    }, [quests.length]);
    // This method will delete a quest
    async function deleteQuest(id) {
        await fetch(`http://localhost:5000/${id}`, {
            method: "DELETE"
        });
        const newQuests = quests.filter((el) => el._id !== id);
        setQuests(newQuests);
    }

    const gridRef = useRef()
    const [columnDefs, setColumnDefs] = useState([
        { headerName: 'Index', valueGetter: "node.rowIndex + 1" },
        { field: 'title' },
        { field: 'type' },
        { field: 'summary' },
        { field: 'description' },
        {}
    ])

    const cellClickedListener = () => {

    }
    const defaultColDef = useMemo(() => ({
        sortable: true
    }));
    // This following section will display the table with the quests of individuals.
    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
            <h3>Quest List</h3>

            < AgGridReact
                gridRef={gridRef}
                rowData={quests}
                columnDefs={columnDefs}
                onCellClicked={cellClickedListener}
                defaultColDef={defaultColDef}
            />
        </div >
    );
}