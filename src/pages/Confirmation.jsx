import { useNavigate } from "react-router-dom";

function Confirmation() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          width: "500px",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            fontSize: "60px",
            marginBottom: "20px",
          }}
        >
          ✅
        </div>

        <h1
          style={{
            color: "#534AB7",
          }}
        >
          Booking Confirmed!
        </h1>

        <p>
          Your appointment has been successfully booked.
        </p>

        <div
          style={{
            background: "#f8f8f8",
            padding: "20px",
            borderRadius: "10px",
            marginTop: "20px",
            textAlign: "left",
          }}
        >
          <h3>Appointment Summary</h3>

          <p><b>Service:</b> Doctor Consultation</p>
          <p><b>Date:</b> 25 June 2026</p>
          <p><b>Time:</b> 11:30 AM</p>
          <p><b>Location:</b> SmartSlot Service Center</p>
        </div>

        <button
          onClick={() => navigate("/")}
          style={{
            marginTop: "25px",
            background: "#534AB7",
            color: "white",
            border: "none",
            padding: "12px 25px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default Confirmation;