import { useCallback } from "react";
import { DELETE_TASK } from "../store/taskReducer.jsx";
import { useDispatch } from "react-redux";
import { ListElement, ListElementButton } from "./Task.style.jsx";

export function Task(props) {
    const dispatch = useDispatch();

    const handleDeleteTaskFromList = useCallback(() => {
        dispatch({ type: DELETE_TASK, payload: { id: props.id } });
    }, [dispatch, props.id]);

    return (
        <ListElement>
            <div>
            <p>{props.textOfEl}</p>
            <ListElementButton onClick={handleDeleteTaskFromList}>delete from list</ListElementButton>
            </div>
        </ListElement>
    );
}