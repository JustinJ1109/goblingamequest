import { useEffect, useState } from "react"
import { SelectObject, TextObject } from "./FormFillable"

const entityTypes = ["npc", "item"]

const QuestType = ({ type }) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        async function getItems() {
            const res = await fetch(`http://localhost:5000/item`)
            const items = await res.json()
            setItems(items)
        }
        getItems()
    }, [items.length])

    return (
        <div className="container">
            <SelectObject label="Item" onChange={(e) => console.log(e.target.value)} options={items.map((e) => e.name)} />

            <TextObject label="Quantity" />
            <hr />

        </div>
    )
}

export default QuestType