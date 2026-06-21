import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Doctor Consultation",
      desc: "Book appointments with experienced doctors",
      icon: "🩺",
    },
    {
      title: "Salon Services",
      desc: "Book your favorite salon services easily",
      icon: "✂️",
    },
    {
      title: "Fitness Training",
      desc: "Book personal training sessions with experts",
      icon: "🏋️",
    },
    {
      title: "Tutoring",
      desc: "Book tutoring sessions with qualified tutors",
      icon: "📖",
    },
  ];

  const handleSelect = (service) => {
    navigate("/role", { state: { service } });
  };

  return (
    <div style={styles.page}>
      
      {/* HERO */}
      <div style={styles.hero}>
        <h1 style={styles.title}>SmartSlot</h1>
        <p style={styles.subtitle}>Appointment Booking System</p>
      </div>

      {/* SERVICES GRID */}
      <div style={styles.grid}>
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => handleSelect(service.title)}
            style={styles.card}
          >
            <div style={styles.icon}>{service.icon}</div>
            <h2 style={styles.cardTitle}>{service.title}</h2>
            <p style={styles.cardDesc}>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f5f5f5",
    padding: "40px",
  },

  hero: {
    textAlign: "center",
    marginBottom: "40px",
  },

  title: {
    color: "#534AB7",
    fontSize: "48px",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "18px",
    color: "#555",
    marginTop: "0",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "25px",
    maxWidth: "800px",
    margin: "0 auto",
  },

  card: {
    background: "white",
    padding: "30px",
    borderRadius: "15px",
    textAlign: "center",
    cursor: "pointer",
    boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
    transition: "0.3s",
  },

  icon: {
    fontSize: "40px",
    marginBottom: "15px",
  },

  cardTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#534AB7",
    marginBottom: "10px",
  },

  cardDesc: {
    fontSize: "14px",
    color: "#666",
  },
};

export default Landing;