import { Task } from "./Task.jsx";
import { useSelector } from "react-redux";
import { TaskListUl, TaskListParagraph } from "./TaskList.style.jsx";

export function TaskList() {
    const taskList = useSelector((state) => state.tasks);

    return (
        <TaskListUl>
            {taskList && taskList.length > 0 ?
                taskList.map((task) => <Task arrTask={taskList} task={task} textOfEl={task.text} id={task.id} key={task.id}/>)
                : <TaskListParagraph>У вас немає завдань</TaskListParagraph>}
        </TaskListUl>
    );
}