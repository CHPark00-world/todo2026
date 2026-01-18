import { useState } from "react";
import "./TaskRow.css";

interface Task {
  id: number;
  title: string;
  priority: string;
  category: string;
  dueDate: string;
  status: string;
}

interface TaskRowProps {
  task: Task;
  onToggleComplete?: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit?: (task: Task) => void;
}

const TaskRow = ({
  task,
  onToggleComplete,
  onDelete,
  onEdit,
}: TaskRowProps) => {
  const [isChecked, setisChecked] = useState(false);

  const getPriorityIcon = () => {
    if (task.priority === "HIGH") return "🔴";
    if (task.priority === "MEDIUM") return "🟡";
    if (task.priority === "LOW") return "🟢";
  };

  const isCompleted = task.status === "completed";

  return (
    <div className="task_row">
      <input
        type="checkbox"
        onClick={() => setisChecked(!isChecked)}
        checked={isCompleted}
        onChange={() => onToggleComplete?.(task.id)}
        className="task_checkbox"
      />
      <div className="task_info">
        <span
          className={`task_title ${isCompleted ? "completed" : ""}`}
          onClick={() => onEdit?.(task)}
          style={{ cursor: "pointer" }}
        >
          {task.title}
        </span>
      </div>
      <span className="task_date">[{task.dueDate}]</span>
      <span className="task_priority">
        {getPriorityIcon()}
        {task.priority}
      </span>
      <span className="task_category">{task.category}</span>
      <button onClick={() => onDelete(task.id)} className="task_delete">
        삭제
      </button>
    </div>
  );
};

export default TaskRow;
