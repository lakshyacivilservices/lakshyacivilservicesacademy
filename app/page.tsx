export default function Home() {
  const categories = [
    {
      title: "SSC",
      link: "/quiz/ssc"
    },
    {
      title: "UPSC",
      link: "/quiz/upsc"
    },
    {
      title: "UGC NET",
      link: "/quiz/ugc-net"
    },
    {
      title: "Constitution",
      link: "/quiz/constitution"
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="mb-10 text-6xl font-black">
        Lakshya Quiz Academy
      </h1>

      <div className="grid gap-6 md:grid-cols-2">

        {categories.map((item) => (
          <a
            key={item.title}
            href={item.link}
            className="rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-10 text-3xl font-bold shadow-2xl"
          >
            {item.title}
          </a>
        ))}

      </div>
    </main>
  )
}