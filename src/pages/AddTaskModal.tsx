import { useState } from "react";
import "./AddTaskModal.css";

interface Task {
  id: number;
  title: string;
  priority: string;
  category: string;
  dueDate: string;
  status: string;
}

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: Task) => void;
  editingTask?: Task | null;
}

const AddTaskModal = ({
  isOpen,
  onClose,
  onSave,
  editingTask,
}: AddTaskModalProps) => {
  const [title, setTitle] = useState(editingTask?.title || "");
  const [priority, setPriority] = useState(editingTask?.priority || "MEDIUM");
  const [category, setCategory] = useState(editingTask?.category || "WORK");

  if (!isOpen) return null;

  const handleSave = () => {
    if (title.trim() === "") {
      alert("제목을 입력하세요!");
      return;
    }

    const newTask = {
      id: editingTask?.id || Date.now(),
      title,
      priority,
      category,
      dueDate: editingTask?.dueDate || "Today",
      status: editingTask?.status || "Active",
    };

    onSave(newTask);

    setTitle("");
    setPriority("MEDIUM");
    setCategory("WORK");
  };

  return (
    <div className="modal_overlay" onClick={onClose}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <h2>{editingTask ? "할 일 수정" : "새 할 일 추가"}</h2>

        <div className="form_group">
          <label>제목</label>
          <input
            type="text"
            placeholder="할 일을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form_group">
          <label>우선순위</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="HIGH">높음</option>
            <option value="MEDIUM">중간</option>
            <option value="LOW">낮음</option>
          </select>
        </div>

        <div className="form_group">
          <label>카테고리</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="WORK">업무</option>
            <option value="PERSONAL">개인</option>
            <option value="STUDY">공부</option>
            <option value="WORKOUT">운동</option>
          </select>
        </div>

        <div className="modal_buttons">
          <button className="cancel_btn" onClick={onClose}>
            취소
          </button>
          <button className="save_btn" onClick={handleSave}>
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
