import "./AllTasks.css";
import data from "../data";
import { useState } from "react";

const AllTasks = () => {
    const [myTasks, setMyTasks] = useState(data);

    const tasksHandler = (id) => {
        const filteredTasks = myTasks.filter((oneTask) => {
            return oneTask.id !== id;
        });

        setMyTasks(filteredTasks);
    }

    const allDeleteHandler = () => {
        setMyTasks([]);
    }

    return(
        <div>
            {
                myTasks.map((oneTask) => {
                    const {id, name} = oneTask;
                    return (
                        <div className="one-task" key={id}>
                            <h4>{name}</h4>
                            <button onClick={() => tasksHandler(id)}>Vymazat</button>
                        </div>
                    );
                })
            }
            <button className="main-button" onClick={allDeleteHandler}>Vše vymazat</button>
        </div>
    );
}

export default AllTasks;