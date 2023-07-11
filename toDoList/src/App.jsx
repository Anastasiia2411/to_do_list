import { useState, useMemo, useCallback, useEffect } from "react";
import { ADD_NEW_TASK } from "./store/taskReducer.jsx";
import { useDispatch } from "react-redux";
import { TaskList } from "./components/TaskList.jsx";
import GlobalStyles, { Input, InputWrapper, Button, Wrapper } from "./App.style.jsx";

function App() {
    const dispatch = useDispatch();
    const [inputText, setInputText] = useState("");

    const handleAddTaskToList = useMemo(() => {
        if (inputText.length === 0) {
            return;
        }
        return () => {
            dispatch({ type: ADD_NEW_TASK, payload: { text: inputText, id: Date.now() } });
            setInputText("");
        };
    }, [dispatch, inputText]);

    const handleInputChange = useCallback((e) => {
        setInputText(e.target.value);
    }, []);

    useEffect(() => {

    }, [dispatch]);

    return (
        <>
            <GlobalStyles/>
            <Wrapper>
                <InputWrapper>
                    <Input value={inputText} onChange={handleInputChange} type="text"/>
                    <Button onClick={handleAddTaskToList}>create task</Button>
                </InputWrapper>
                <TaskList/>
            </ Wrapper>

        </>
    );
}

export default App;
