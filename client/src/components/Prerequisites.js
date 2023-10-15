import { SelectObject } from "./FormFillable"
import { prerequisiteOptions } from "../schemas/prerequisites"

const Prerequisites = ({ onChange, form, setForm }) => {

    const addToForm = () => {
        setForm((prevForm) => ({
            ...prevForm, prerequisites: [
                ...prevForm?.prerequisites,
                { type: prerequisiteOptions[0] }
            ]
        }))
    }

    const removeFromForm = (i) => {
        let newArray = form?.prerequisites?.filter((_, item_i) => item_i !== i)
        setForm({ ...form, prerequisites: newArray })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <label><b>Prerequisites</b></label>
                </div>

                <div className="col">
                    <input type="button" value="+" onClick={addToForm} />
                </div>
            </div>

            {form?.prerequisites?.map((pr, i) => {
                return (
                    <div key={`${i}${pr}`}>
                        <SelectObject
                            label=""
                            options={prerequisiteOptions}
                            onChange={(e) => {
                                let newPrereqs = form?.prerequisites
                                newPrereqs[i] = { ...newPrereqs[i], type: e.target.value }
                                console.log(newPrereqs)
                                onChange({ ...form, prerequisites: newPrereqs })
                            }}
                            selected={pr.type}
                            removable={true}
                            removeItem={() => removeFromForm(i)}
                        />

                    </div>
                )
            })}
        </div>
    )
}

export default Prerequisites