import { biomeOptions } from "../../schemas/biomes"
import { SelectObject } from "../FormFillable"

const BiomePrereq = ({ onChange }) => {
    return (
        <SelectObject label="Biome" options={biomeOptions} onChange={onChange} />
    )
}

export default BiomePrereq