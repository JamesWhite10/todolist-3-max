import React from 'react';
import {Story, Meta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Task, TaskPropsType} from "../Task";


export default {
    title: 'TodoList/Task',
    component: Task,
} as Meta;

const changeTaskStatus = action("Change status clicked")
const changeTaskTitle = action("Change title clicked")
const removeTask = action("Remove task clicked")

const baseArg = {
    changeTaskStatus: changeTaskStatus,
    changeTaskTitle: changeTaskTitle,
    removeTask: removeTask
}

const Template: Story<TaskPropsType> = (args) => <Task {...args} />;

export const TaskIsDoneExample = Template.bind({});
TaskIsDoneExample.args = {
    task: {id: "1", title: "JS", isDone: true},
    todolistId: "1",
    ...baseArg
};

export const TaskIsNotDoneExample = Template.bind({});
TaskIsNotDoneExample.args = {
    task: {id: "2", title: "HTML", isDone: false},
    todolistId: "2",
    ...baseArg
};
