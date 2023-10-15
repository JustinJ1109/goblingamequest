import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { CheckObject, SelectObject, TextObject } from "../FormFillable"
import Prerequisites from "../Prerequisites"
import { quests } from "../../schemas/quests"

export default function Create() {
    const [questForm, setQuestForm] = useState({
        type: null,
        description: null,
        summary: null,
        dialogue: {
            onReceive: null,
            onComplete: null
        },
        prerequisites: [],
        source: { giver: null, giverId: null }
    })

    const navigate = useNavigate()
    // These methods will update the state properties.
    const updateQuestForm = value => {
        return setQuestForm((prev) => {
            return { ...prev, ...value }
        })
    }

    // This function will handle the submission.
    async function onSubmit(e) {
        e.preventDefault()
        // When a post request is sent to the create url, we'll add a new quest to the database.
        const newQuest = { ...questForm }
        console.log(questForm)
        return
        await fetch("http://localhost:5000/quest/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newQuest),
        })
            .catch(error => {
                window.alert(error)
                return
            })
        setQuestForm({
            type: null,
            description: null,
            summary: null,
            dialogue: {
                onReceive: null,
                onComplete: null
            },
            prerequisites: [],
            source: { giver: null, giverId: null }
        });
        navigate("/")
    }

    // This following section will display the form that takes the input from the user.
    return (
        <div className="container">
            <h3>Create New Quest</h3>
            <form onSubmit={onSubmit}>
                <TextObject label="Title" onChange={(e) => updateQuestForm({ title: e.target.value })} />
                <SelectObject label="Type" options={quests} onChange={(e) => updateQuestForm({ type: e.target.value })} />
                <TextObject label="Summary" onChange={(e) => updateQuestForm({ summary: e.target.value })} />
                <TextObject label="Description" onChange={(e) => updateQuestForm({ description: e.target.value })} />
                <div>
                    <label><b>Dialogue</b></label>
                    <TextObject label="On Receive" onChange={(e) => updateQuestForm({ dialogue: { ...questForm?.dialogue, onReceive: e.target.value } })} />
                    <TextObject label="On Complete" onChange={(e) => updateQuestForm({ dialogue: { ...questForm?.dialogue, onComplete: e.target.value } })} />
                </div>

                <Prerequisites
                    onChange={updateQuestForm}
                    form={questForm}
                    setForm={setQuestForm}
                />

                <div className="form-group">
                    <input
                        type="submit"
                        value="Create quest"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
}