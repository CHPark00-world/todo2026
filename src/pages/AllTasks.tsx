import { useEffect, useState } from "react";
import "./AllTasks.css";
import TaskRow from "./TaskRow";
import AddTaskModal from "./AddTaskModal";
import MockData from "../mockData";

interface Task {
  id: number;
  title: string;
  priority: string;
  category: string;
  dueDate: string;
  status: string;
}

const AllTasks = () => {
  const [searchText, setsearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("높음");
  const [sortBy, setSortBy] = useState("dueDate");
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("proTasks");
    return saved ? JSON.parse(saved) : MockData;
  });

  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  useEffect(() => {
    localStorage.setItem("proTasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTask: Task) => {
    if (editingTask) {
      setTasks(
        tasks.map((task) => (task.id === editingTask.id ? newTask : task)),
      );
    } else {
      setTasks([...tasks, newTask]);
    }
    setEditingTask(null);
    setShowModal(false);
  };

  const handleToggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "completed" ? "active" : "completed",
            }
          : task,
      ),
    );
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortBy === "dueDate") {
      return a.dueDate.localeCompare(b.dueDate);
    }
    if (sortBy === "priority") {
      const priorityOrder: Record<string, number> = {
        HIGH: 1,
        MEDIUM: 2,
        LOW: 3,
      };

      if (sortOrder === "높음") {
        return (
          (priorityOrder[a.priority] || 0) - (priorityOrder[b.priority] || 0)
        );
      } else {
        return (
          (priorityOrder[b.priority] || 0) - (priorityOrder[a.priority] || 0)
        );
      }
    }

    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    }

    return 0;
  });

  const onDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setShowModal(true);
  };

  return (
    <div className="AllTasks">
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setsearchText(e.target.value)}
        />
        <button className="add_button" onClick={() => setShowModal(true)}>
          + 추가
        </button>
      </div>

      {/* 필터 */}
      <div className="filter_selects">
        <select
          className="filter_select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="duedate">정렬: 마감일</option>
          <option value="priority">정렬: 우선순위</option>
          <option value="title">정렬: 제목순</option>
        </select>
        <select
          className="filter_select"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="높음">우선순위: 높음</option>
          <option value="낮음">우선순위: 낮음</option>
        </select>
        <select className="filter_select">
          <option>필터: 활성</option>
        </select>
      </div>

      {/* 테이블 */}
      <div className="tasks_table">
        <div className="table_header">
          <span>상태</span>
          <span>프로젝트</span>
          <span>날짜</span>
          <span>우선순위</span>
          <span>카테고리</span>
        </div>
        {sortedTasks.map((task) => (
          <TaskRow
            key={task.id}
            task={task}
            onToggleComplete={handleToggleComplete}
            onDelete={onDelete}
            onEdit={handleEditTask}
          />
        ))}
      </div>

      <AddTaskModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setEditingTask(null);
        }}
        onSave={handleAddTask}
        editingTask={editingTask}
      />
    </div>
  );
};

export default AllTasks;
