import { useState } from "react";
import "./Settings.css";

const Settings = () => {
  const [isDark, setIsDark] = useState(false);

  const onChangeTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className="Settings">
      <h1>Settings</h1>

      <div className="settings_grid">
        {/* 왼쪽 열 */}
        <div className="left_column">
          {/* Account 섹션 */}
          <section className="settings_card">
            <h2>Account</h2>
            <p className="label">Name: John Doe</p>
            <div className="profile_section">
              <div className="profile_info">
                <p className="email">Email: john.doe@email.com</p>
              </div>
            </div>
            <button className="change_password_btn">Change Password</button>
          </section>

          {/* Notifications 섹션 */}
          <section className="settings_card">
            <h2>Notifications</h2>
            <div className="toggle_item">
              <label className="toggle_label">
                <input type="checkbox" defaultChecked />
                <span className="toggle_slider"></span>
              </label>
              <div className="toggle_text">
                <p>Reminders (Before due date)</p>
                <p className="sub_text">Daily Summary</p>
              </div>
            </div>
          </section>

          {/* Data Management 섹션 */}
          <section className="settings_card">
            <h2>Data Management</h2>
            <button className="export_btn">Export Data (JSON, CSV)</button>
            <button className="reset_btn">Reset All Data</button>
          </section>
        </div>

        {/* 오른쪽 열 */}
        <div className="right_column">
          {/* Appearance 섹션 */}
          <section className="settings_card">
            <h2>Appearance</h2>
            <p className="sub_label">Join Mode:</p>

            <div className="theme_section">
              <h3>Theme</h3>
              <div className="theme_toggle">
                <span>☐ Dark Mode</span>
                <label className="switch">
                  <input
                    onChange={onChangeTheme}
                    checked={isDark}
                    type="checkbox"
                  />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="color_options">
                <div className="color_dot blue active"></div>
              </div>
            </div>
          </section>

          {/* Primary Color 섹션 */}
          <section className="settings_card">
            <h2>Primary Color</h2>
            <div className="color_selector">
              <label className="color_option">
                <input type="radio" name="color" />
                <span>Daily Summary</span>
              </label>
            </div>
          </section>

          {/* About & Support 섹션 */}
          <section className="settings_card">
            <h2>About & Support</h2>
            <p className="version">Version: 1.0.0</p>
            <a href="#" className="link">
              Privacy Policy
            </a>
            <a href="#" className="link">
              Send Feedback
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Settings;
