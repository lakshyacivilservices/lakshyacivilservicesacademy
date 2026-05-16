export default function Home() {
  return (
    <main style={{
      background: "black",
      minHeight: "100vh",
      padding: "40px",
      color: "white"
    }}>
      <h1 style={{ fontSize: "60px" }}>
        Lakshya Quiz Academy
      </h1>

      <div style={{
        display: "grid",
        gap: "20px",
        marginTop: "40px"
      }}>

        <a href="/quiz/ssc">SSC</a>

        <a href="/quiz/upsc">UPSC</a>

        <a href="/quiz/ugc-net">UGC NET</a>

        <a href="/quiz/constitution">Constitution</a>

      </div>
    </main>
  )
}