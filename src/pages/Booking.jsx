import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Booking() {
  const navigate = useNavigate();
  const location = useLocation();

  const service = location.state?.service || "";
  const subService = location.state?.subService || "";

  const [selectedSlot, setSelectedSlot] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const slots = [
    "09:00 AM",
    "10:00 AM",
    "11:30 AM",
    "01:00 PM",
    "03:00 PM",
    "05:00 PM",
  ];

  const handleBooking = () => {
    if (!name || !email || !phone || !selectedSlot) {
      alert("Please fill all details and select a slot");
      return;
    }

    const booking = {
      name,
      email,
      phone,
      service,
      subService,
      slot: selectedSlot,
      status: "Confirmed",
    };

    const existing =
      JSON.parse(localStorage.getItem("bookings")) || [];

    existing.push(booking);

    localStorage.setItem("bookings", JSON.stringify(existing));

    navigate("/confirmation");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "40px",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#534AB7" }}>
        Book an Appointment
      </h1>

      {/* LEFT + RIGHT LAYOUT */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          maxWidth: "1000px",
          margin: "40px auto",
        }}
      >
        {/* LEFT */}
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h3>Select Date</h3>

          <input type="date" style={{ width: "100%", padding: "10px" }} />

          <h3 style={{ marginTop: "20px" }}>Select Slot</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: "10px",
            }}
          >
            {slots.map((slot) => (
              <button
                key={slot}
                onClick={() => setSelectedSlot(slot)}
                style={{
                  padding: "10px",
                  background:
                    selectedSlot === slot ? "#534AB7" : "#ddd",
                  color:
                    selectedSlot === slot ? "white" : "black",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h3>Customer Details</h3>

          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />

          <input
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={inputStyle}
          />

          <button onClick={handleBooking} style={btnStyle}>
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
};

const btnStyle = {
  width: "100%",
  padding: "12px",
  background: "#534AB7",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

export default Booking;