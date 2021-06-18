import React from "react";
import {EditableSpan} from "../EditableSpan";
import {action} from "@storybook/addon-actions";

export default {
    title: "TodoList/EditableSpan",
    component: EditableSpan,
}

const changeCallback = action("Title changed")

export const EditableSpanExample = () => {
    return <EditableSpan title={"Start title"} onChange={changeCallback}/>
};