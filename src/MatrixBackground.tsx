import "./MatrixBackground.css";

export default function MatrixBackground() {
  const columns = Array.from({ length: 80 });

  return (
    <div className="matrix-bg">
      {columns.map((_, index) => (
        <div
          key={index}
          className="matrix-column"
          style={{
            left: `${index * 24}px`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 8}s`,
          }}
        >
          {"010101001101011010010101011001010101001101".repeat(4)}
        </div>
      ))}
    </div>
  );
}