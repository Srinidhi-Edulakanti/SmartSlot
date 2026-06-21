function ServiceCard({ title, description }) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        cursor: "pointer",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;