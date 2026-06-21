import { useLocation, useNavigate } from "react-router-dom";

function ServiceOptions() {
  const location = useLocation();
  const navigate = useNavigate();

  const category = location.state?.service || "Service";
  console.log("Category:", category);

  const services = {
    Doctor: [
      "General Physician",
      "Dentist",
      "Cardiologist",
      "Dermatologist",
    ],

    "Doctor Consultation": [
      "General Physician",
      "Dentist",
      "Cardiologist",
      "Dermatologist",
    ],

    "Salon Services": [
      "Hair Cut",
      "Hair Styling",
      "Facial",
      "Makeup",
    ],

    Salon: [
      "Hair Cut",
      "Hair Styling",
      "Facial",
      "Makeup",
    ],

    "Fitness Training": [
      "Personal Training",
      "Yoga",
      "Zumba",
      "Weight Training",
    ],

    Fitness: [
      "Personal Training",
      "Yoga",
      "Zumba",
      "Weight Training",
    ],

    Tutoring: [
      "Mathematics",
      "Science",
      "English",
      "Coding",
    ],
  };

  const serviceList = services[category] || [];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "40px",
      }}
    >
      <h1
        style={{
        color: "#534AB7",
        textAlign: "center",
       }}
    >
       {category}
     </h1>

      <h2
        style={{
          textAlign: "center",
          marginTop: "20px",
          color: "#555",
        }}
      >
        Available Services
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          maxWidth: "800px",
          margin: "30px auto",
        }}
      >
        {serviceList.length > 0 ? (
          serviceList.map((item) => (
            <div
              key={item}
              onClick={() =>
                navigate("/book", {
                  state: {
                    service: category,
                    subService: item,
                  },
                })
              }
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "12px",
                cursor: "pointer",
                textAlign: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                transition: "0.3s",
              }}
            >
              <h3>{item}</h3>
            </div>
          ))
        ) : (
          <p
            style={{
              textAlign: "center",
              gridColumn: "1 / -1",
              color: "red",
            }}
          >
            No services found for "{category}"
          </p>
        )}
      </div>
    </div>
  );
}

export default ServiceOptions;