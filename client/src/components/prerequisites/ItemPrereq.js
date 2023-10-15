import { useEffect, useState } from "react"
import { SelectObject, TextObject } from "../FormFillable"

const ItemPrereq = ({ onChange }) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        async function getItems() {
            const res = await fetch(`http://localhost:5000/item`)
            if (!res.ok) {
                window.alert(`An error occured: ${res.statusText}`)
                return
            }
            const items = await res.json()
            setItems(items)
        }
        getItems()
    }, [])

    return (
        <div>
            <SelectObject label="Item" options={[]} />
            <SelectObject label="State" options={["consumed", "owned"]} onChange={onChange} />
            <TextObject label="Quantity" />
        </div>
    )
}

export default ItemPrereq