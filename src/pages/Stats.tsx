import "./Stats.css";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const Stats = () => {
  // 주간 바 차트 데이터
  const weeklyData = [
    { day: "Mon", completed: 85 },
    { day: "Tue", completed: 95 },
    { day: "Wed", completed: 75 },
    { day: "Thu", completed: 90 },
    { day: "Fri", completed: 72 },
    { day: "Sat", completed: 15 },
    { day: "Sun", completed: 10 },
  ];

  // 완료율 데이터
  const completionData = [
    { name: "Completed", value: 88 },
    { name: "Remaining", value: 12 },
  ];

  // 카테고리 데이터
  const workCategory = [
    { name: "Work", value: 60 },
    { name: "Other", value: 40 },
  ];

  const personalCategory = [
    { name: "Personal", value: 30 },
    { name: "Other", value: 70 },
  ];

  const COLORS = {
    completed: "#3b82f6",
    remaining: "#f97316",
    work1: "#3b82f6",
    work2: "#22c55e",
    personal1: "#f97316",
    personal2: "#ef4444",
  };

  return (
    <div className="Stats">
      {/* 페이지 제목 */}
      <div className="stats_header">
        <h1>Statistics & Report</h1>
        <p className="subtitle">Tasks Completed</p>
      </div>

      <div className="stats_grid">
        {/* 왼쪽 영역 */}
        <div className="left_section">
          {/* 주간 완료 바 차트 */}
          <section className="chart_card">
            <h2>Week Completed</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={weeklyData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="lightgray"
                />
                <YAxis
                  tick={{ fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 100]}
                />
                <XAxis dataKey="day" tick={{ fontSize: 12 }} axisLine={false} />
                <Bar dataKey="completed" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </section>

          {/* 카테고리 분포 */}
          <section className="chart_card">
            <h2>Category Distribution</h2>
            <div className="category_charts">
              {/* Work 차트 */}
              <div className="donut_wrapper">
                <PieChart width={150} height={150}>
                  <Pie
                    data={workCategory}
                    cx={75}
                    cy={75}
                    innerRadius={50}
                    outerRadius={70}
                    dataKey="value"
                  >
                    <Cell fill={COLORS.work1} />
                    <Cell fill={COLORS.work2} />
                  </Pie>
                </PieChart>
                <div className="chart_label">
                  <span className="percentage">60%</span>
                </div>
              </div>

              {/* Personal 차트 */}
              <div className="donut_wrapper">
                <PieChart width={150} height={150}>
                  <Pie
                    data={personalCategory}
                    cx={75}
                    cy={75}
                    innerRadius={50}
                    outerRadius={70}
                    dataKey="value"
                  >
                    <Cell fill={COLORS.personal1} />
                    <Cell fill={COLORS.personal2} />
                  </Pie>
                </PieChart>
                <div className="chart_label">
                  <span className="percentage">30%</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* 오른쪽 영역 */}
        <div className="right_section">
          {/* 이번 달 통계 */}
          <section className="summary_card">
            <h2>TOTAL THIS MONTH</h2>
            <div className="summary_grid">
              <div className="summary_item">
                <p className="summary_label">MONTHLY</p>
                <p className="summary_value">65</p>
                <p className="summary_unit">Days</p>
              </div>
              <div className="summary_item">
                <p className="summary_label">FIRESTAZ 🔥 D12D01EH</p>
                <p className="summary_value">12</p>
                <p className="summary_unit">🔥 Streak</p>
              </div>
            </div>
          </section>

          {/* 완료율 도넛 차트 */}
          <section className="completion_card">
            <h2>Completion Rate</h2>
            <div className="completion_wrapper">
              <PieChart width={220} height={220}>
                <Pie
                  data={completionData}
                  cx={110}
                  cy={110}
                  innerRadius={70}
                  outerRadius={100}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                >
                  <Cell fill={COLORS.completed} />
                  <Cell fill={COLORS.remaining} />
                </Pie>
              </PieChart>
              <div className="completion_label">
                <span className="percentage">88%</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Stats;
