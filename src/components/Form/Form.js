import { useState } from "react"

const Forma = (props) => {
    const [value, setValue] = useState("")
    const [type, setType] = useState("default")
    const [date, setDate] = useState("2023-02-21")

    return(
    <form className="border border3" onSubmit={e=> {
            e.preventDefault();
            props.putTodo(value, type, date);
            setValue("");
        }}>
            <input
             type="text"
             placeholder="Введите задачу..."
             className="input"
             value={value}
             onChange={e => setValue(e.target.value)}
            />
            <div className="mb-0">
                <input
                type="radio" id="urgent"
                name="contact" value="urgent"
                onChange={e => setType(e.target.value)}
                 />
                 <label for="urgent">
                    Срочный
                 </label>
                 <input
                type="radio" id="default"
                name="contact" value="default"
                onChange={e => setType(e.target.value)}
                //checked
                 />
                 <label for="default">
                    Обычный
                 </label>
            </div>
            <div className="mb-0">
            <p className="m-0">Дата дедлайна:</p>
            <input
            id="deadline"
            name="deadline"
            type="date"
            defaultValue="2023-02-21"
            onChange={e => setDate(e.target.value)}
            />
            </div>
            <div className="mt-2">
                <button className="btn btn-primary">Создать задачу</button>
            </div>

        </form>


       
    )
}

export default Forma