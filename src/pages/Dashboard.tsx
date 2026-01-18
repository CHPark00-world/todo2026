import "./Dashboard.css";
import { Link } from "react-router-dom";
import TaskRow from "./TaskRow";
import { useQuote } from "../hooks/useQuote";
import MockData from "../mockData";

const Dashboard = () => {
  const { quote, loading, refetch } = useQuote();

  const recentTasks = MockData.slice(0, 2);

  const totalTasks = MockData.length;
  const completedTasks = MockData.filter(
    (task) => task.status === "completed",
  ).length;
  const completionRate =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="Dashboard">
      <section className="today_focus">
        <div className="section_header">
          <h2>오늘 할 일</h2>
          <Link to="/inbox">
            <button className="view_more_btn"> + </button>
          </Link>
        </div>
        <div className="tasks_preview">
          {recentTasks.map((task) => (
            <TaskRow
              key={task.id}
              task={task}
              onDelete={() => {}}
              onToggleComplete={() => {}}
              onEdit={() => {}}
            />
          ))}
        </div>
      </section>
      <section className="motivation_section">
        <div className="card_header">
          <span>Dashboard</span>
          <button onClick={refetch} className="refresh_btn">
            🔄
          </button>
        </div>
        <h3>오늘의 명언: </h3>
        {loading ? (
          <p className="quote">로딩 중...</p>
        ) : (
          <>
            <p className="quote">{quote.message}</p>
            <p className="author">- {quote.author} -</p>
          </>
        )}
      </section>
      <section className="stats_section">
        <div className="section_header">
          <h2>통계 / 분석</h2>
          <Link to="/report">
            <button className="view_more_btn">→</button>
          </Link>
        </div>

        <div className="stats_summary_simple">
          <div className="stat_box">
            <span className="stat_number">{completionRate}%</span>
            <span className="stat_text">완료율</span>
          </div>
          <div className="stat_box">
            <span className="stat_number">{totalTasks}</span>
            <span className="stat_text">이번 달 출석</span>
          </div>
          <div className="stat_box">
            <span className="stat_number">🔥 {completedTasks}</span>
            <span className="stat_text">연속 달성</span>
          </div>
        </div>
      </section>
      <section className="account_section">
        <h2>ACCOUNT</h2>
      </section>
    </div>
  );
};

export default Dashboard;
