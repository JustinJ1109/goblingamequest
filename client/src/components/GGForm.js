import { useState } from "react"
import AddableFormElement from "./AddableFormElement"
import { CheckObject, SelectObject, TextObject } from "./FormFillable"

const GGForm = () => {
    return (
        <form>
            <div className="container justify-content-md-center">
                <SelectObject label="Type" options={["kill", "fetch", "gather"]} onChange={() => console.log()} />
                <TextObject label="Summary" />
                <TextObject label="Description" />
                <div>
                    <label><b>Dialogue</b></label>
                    <TextObject label="On Receive" />
                    <TextObject label="On Complete" />
                </div>


                <CheckObject label="Biome" options={["plains", "forest"]} />
                <AddableFormElement label="Prerequisites" />
                <input type="submit" value="Submit" />
            </div>

        </form>
    )
}

export default GGForm