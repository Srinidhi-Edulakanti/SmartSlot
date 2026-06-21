import { useLocation, useNavigate } from "react-router-dom";

function Admin() {
  const location = useLocation();
  const navigate = useNavigate();

  const service = location.state?.service || "Service";

  const allBookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  const filteredBookings = allBookings.filter((b) =>
    b.service.toLowerCase().includes(service.toLowerCase())
  );

  const confirmed = filteredBookings.filter(
    (b) => b.status === "Confirmed"
  ).length;

  const pending = filteredBookings.filter(
    (b) => b.status === "Pending"
  ).length;

  // ✅ SIMPLE HEADINGS (YOUR REQUIREMENT)
  const getHeading = (service) => {
    const s = service.toLowerCase();

    if (s.includes("doctor")) return "Doctor Admin Panel";
    if (s.includes("salon")) return "Salon Admin Panel";
    if (s.includes("fitness")) return "Fitness Admin Panel";
    if (s.includes("tutor")) return "Tutoring Admin Panel";

    return "Admin Panel";
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f5f5f5",
      }}
    >
      {/* SIDEBAR */}
      <div
        style={{
          width: "250px",
          background: "#534AB7",
          color: "white",
          padding: "20px",
        }}
      >
        <h2>Admin Portal</h2>

        <hr style={{ border: "1px solid rgba(255,255,255,0.2)" }} />

        <p>Dashboard</p>
        <p>Bookings</p>
        <p>Analytics</p>

        <button
          onClick={() => navigate("/")}
          style={{
            marginTop: "30px",
            width: "100%",
            padding: "10px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Back Home
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, padding: "30px" }}>
        {/* HEADER */}
        <h1 style={{ color: "#534AB7", marginBottom: "15px" }}>
          {getHeading(service)}
        </h1>

        <p style={{ color: "#666" }}>
          Manage all {service} bookings and appointments
        </p>

        {/* STATS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <div style={cardStyle}>
            <h3>Total Bookings</h3>
            <h2>{filteredBookings.length}</h2>
          </div>

          <div style={cardStyle}>
            <h3>Confirmed</h3>
            <h2 style={{ color: "green" }}>{confirmed}</h2>
          </div>

          <div style={cardStyle}>
            <h3>Pending</h3>
            <h2 style={{ color: "orange" }}>{pending}</h2>
          </div>
        </div>

        {/* TABLE */}
        <div
          style={{
            background: "white",
            marginTop: "30px",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h2>{getHeading(service)}</h2>

          {filteredBookings.length === 0 ? (
            <p style={{ color: "red" }}>
              No bookings found
            </p>
          ) : (
            <table style={{ width: "100%", marginTop: "10px" }}>
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Service</th>
                  <th>Slot</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {filteredBookings.map((b, i) => (
                  <tr key={i}>
                    <td>{b.name}</td>
                    <td>{b.subService}</td>
                    <td>{b.slot}</td>
                    <td>{b.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};

export default Admin;