import {IconButton, TextField} from "@material-ui/core";
import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {AddBox} from "@material-ui/icons";

export type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export const AddItemForm = React.memo((props: AddItemFormPropsType) => {
    console.log("AddItemForm is called")
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addItem = () => {
        if (title.trim() !== "") {
            props.addItem(title);
            setTitle("");
        } else {
            setError("Title is required!!!")
        }
    }

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) {
            setError(null)
        }
        if (e.key === "Enter") {
            addItem();
        }
    }

    return <div>
        <TextField
            variant={"outlined"}
            error={!!error}
            label={"Task"}
            value={title}
            onChange={onChangeValue}
            onKeyPress={onKeyPressHandler}
            helperText={error}
        />
        <IconButton
            style={{margin: "5px", opacity: "0.9"}}
            color={"primary"}
            onClick={addItem}><AddBox/></IconButton>
    </div>
})