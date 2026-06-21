import { useNavigate, useLocation } from "react-router-dom";

function RoleSelect() {
  const navigate = useNavigate();
  const location = useLocation();

  const service = location.state?.service || "Service";

  return (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f5f5f5",
    }}
  >
    <div
      style={{
        background: "white",
        padding: "40px",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        width: "500px",
        textAlign: "center",
      }}
    >
      <h1
  style={{
    color: "#534AB7",
    marginBottom: "15px",
    fontSize: "32px",
    fontWeight: "bold",
    textAlign: "center",
  }}
>
  {service}
</h1>

      <h2
  style={{
    color: "#555",
    marginBottom: "30px",
    marginTop: "10px",
  }}
>
  Select Role
</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() =>
            navigate("/services", {
              state: { service },
            })
          }
          style={{
            padding: "12px 25px",
            background: "#534AB7",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Customer
        </button>

        <button
          onClick={() =>
            navigate("/admin", {
              state: { service },
            })
          }
          style={{
            padding: "12px 25px",
            background: "#ffffff",
            color: "#534AB7",
            border: "2px solid #534AB7",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Admin
        </button>
      </div>
    </div>
  </div>
);
}

export default RoleSelect;