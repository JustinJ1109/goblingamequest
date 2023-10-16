import { SelectObject } from "./FormFillable"
import { prerequisiteOptions } from "../schemas/prerequisites"
import QuestPrereq from "./prerequisites/QuestPrereq"
import ItemPrereq from "./prerequisites/ItemPrereq"
import BiomePrereq from "./prerequisites/BiomePrereq"

const Prerequisites = ({ onChange, form, setForm }) => {

    const addToForm = () => {
        setForm((prevForm) => ({
            ...prevForm, prerequisites: [
                ...prevForm?.prerequisites,
                {
                    type: prerequisiteOptions[0],
                    objectId: ""
                }
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
                    <input className="btn btn-success" type="button" value="+" onClick={addToForm} />
                </div>
            </div>

            {form?.prerequisites?.map((pr, i) => {
                return (
                    <div key={`${i}${pr}`}>
                        <hr />
                        <SelectObject
                            label=""
                            options={prerequisiteOptions}
                            onChange={(e) => {
                                let newPrereqs = form?.prerequisites
                                newPrereqs[i] = { ...newPrereqs[i], type: e.target.value }
                                onChange({ ...form, prerequisites: newPrereqs })
                            }}
                            selected={pr.type}
                            removable={true}
                            removeItem={() => removeFromForm(i)}
                        />
                        <div className="container">
                            {pr.type === "quest" && <QuestPrereq onChange={(e) => {
                                console.log(form)
                                let newQuestInfo = form.prerequisites[i]
                                // onChange({...form, prerequisites: [...form.prerequisites.slice(0, i), newQuestInfo, ...form.prerequisites.slice(i+1)]})
                            }}
                            />}
                            {pr.type === "item" && <ItemPrereq onChange={onChange} />}
                            {pr.type === "biome" && <BiomePrereq onChange={onChange} />}
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export default Prerequisites