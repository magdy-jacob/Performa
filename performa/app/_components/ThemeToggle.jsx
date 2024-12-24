"use client";
import "./ThemeToggle.css";

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <label id="theme-toggle-button" onClick={toggleTheme}>
      <input
        type="checkbox"
        id="toggle"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <svg viewBox="0 0 69.667 44" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(3.5 3.5)">
          <g transform="matrix(1, 0, 0, 1, -3.5, -3.5)">
            <rect
              fill="#83cbd8"
              transform="translate(3.5 3.5)"
              rx="17.5"
              height="35"
              width="60.667"
            ></rect>
          </g>
          <g transform="translate(2.333 2.333)">
            {/* Sun */}
            <g id="sun" style={{ opacity: theme === "dark" ? 0 : 1 }}>
              <circle fill="#f8e664" cx="15.167" cy="15.167" r="15.167"></circle>
              <circle
                fill="#fcf4b9"
                cx="7"
                cy="7"
                r="7"
                transform="translate(8.167 8.167)"
              ></circle>
            </g>
            {/* Moon */}
            <g id="moon" style={{ opacity: theme === "dark" ? 1 : 0 }}>
              <circle
                fill="#cce6ee"
                cx="9.167"
                cy="9.167"
                r="15.167"
                transform="translate(31.5 5.83)"
              ></circle>
              <g fill="#a6cad0">
                <circle
                  cx="2"
                  cy="2"
                  r="2"
                  transform="translate(43.009 4.496)"
                ></circle>
                <circle
                  cx="2"
                  cy="2"
                  r="2"
                  transform="translate(39.366 17.952)"
                ></circle>
                <circle
                  cx="1"
                  cy="1"
                  r="1"
                  transform="translate(33.016 8.044)"
                ></circle>
                <circle
                  cx="1.5"
                  cy="1.5"
                  r="1.5"
                  transform="translate(50.081 10.53)"
                ></circle>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </label>
  );
}
