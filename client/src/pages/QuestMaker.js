import Create from "../components/crud/create"
import QuestList from "../components/crud/questList"

const QuestMaker = () => {
    return (
        <div>
            <Create />
            <hr></hr>
            <QuestList />
        </div>
    )
}

export default QuestMaker