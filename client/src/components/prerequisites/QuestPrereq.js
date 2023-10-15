import { useEffect, useState } from "react"
import { SelectObject } from "../FormFillable"

const QuestPrereq = ({ onChange }) => {

    const [questOptions, setQuestOptions] = useState([])

    useEffect(() => {
        async function getQuests() {
            const res = await fetch(`http://localhost:5000/quest/`)
            if (!res.ok) {
                const msg = `An error occured: ${res.statusText}`
                window.alert(msg)
                return
            }
            const quests = await res.json()
            setQuestOptions(quests)
        }
        getQuests()
    }, [])

    return (
        <SelectObject
            label="Quest"
            selected={questOptions[0]?.title}
            options={questOptions.map((e) => e.title)}
            onChange={onChange}
        />
    )
}

export default QuestPrereq