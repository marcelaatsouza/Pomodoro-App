import { useContext } from "react";
import { TaskContext } from "./TasksProvider";

export default function useTaskContext () {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('Você está tentando acessar o contexto fora do TaskProvider');
    };

    return context;
};