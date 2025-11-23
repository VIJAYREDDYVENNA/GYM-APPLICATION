import React from "react";
import { useNavigate,useLocation } from "react-router-dom";


export default function NotFound() {
  const navigate = useNavigate();

  return (
    <><style>{`
        .notfound-container {
  width: 100%;
  height: 100vh;
  background: #f2f4f7;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.notfound-content {
  max-width: 500px;
}

.notfound-title {
  font-size: 100px;
  font-weight: 800;
  color: #ff8c42;
  margin: 0;
}

.notfound-subtitle {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 10px;
}

.notfound-text {
  font-size: 16px;
  color: #555;
  margin-bottom: 25px;
}

.notfound-btn {
  padding: 12px 28px;
  background: #ff8c42;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}

.notfound-btn:hover {
  background: #ff7a20;
}
`}</style>
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-subtitle">Page Not Found</h2>
        <p className="notfound-text">
          The page you are looking for doesn’t exist or was moved.
        </p>

        <button className="notfound-btn" onClick={() => navigate("/")}>
          Go to Dashboard
        </button>
      </div>
    </div></>
  );
}
