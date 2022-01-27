import { ITask } from "../interfaces/interfaces";

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
};

export function TodoTask({ task, completeTask }: Props) {
    return (
        <div className="task">
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
                <button 
                    onClick={() => {
                        completeTask(task.taskName);
                    }}
                >
                    X
                </button>
            </div>
        </div>
    );
};