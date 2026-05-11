import Navbar from "@/app/components/Navbar";
import Adsense from "@/app/components/Adsense";

export default function Page() {
  return (
    <>
      <Navbar />

      <main style={{ padding: "40px" }}>
        <h1>UGC NET Quiz</h1>

        <Adsense />

        <div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "10px",
            marginTop: "20px",
          }}
        >
          <h2>Question 1</h2>

          <p>Who is father of Scientific Management?</p>

          <ul>
            <li>A. Fayol</li>
            <li>B. Taylor</li>
            <li>C. Mayo</li>
            <li>D. Drucker</li>
          </ul>

          <p>
            <strong>Answer:</strong> Taylor
          </p>
        </div>
      </main>
    </>
  );
}
