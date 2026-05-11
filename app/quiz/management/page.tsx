import Navbar from "@/app/components/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />

      <main style={{ padding: "40px" }}>
        <h1>Management Quiz</h1>

        <div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>Question 1</h2>

          <p>Who proposed the 14 principles of management?</p>

          <ul>
            <li>A. Taylor</li>
            <li>B. Fayol</li>
            <li>C. Mayo</li>
            <li>D. Drucker</li>
          </ul>

          <p>
            <strong>Answer:</strong> Fayol
          </p>
        </div>
      </main>
    </>
  );
}
