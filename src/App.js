import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    fetch("http://3.208.92.157:3001/api/hello")
      .then((res) => {
        if (!res.ok) {
          throw new Error("API response not OK");
        }
        return res.json();
      })
      .then((data) => {
        console.log("API DATA:", data);   // 👈 IMPORTANT
        setMsg(data.message);
      })
      .catch((err) => {
        console.error("FETCH ERROR:", err);
        setMsg("API connection failed");
      });
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>React + Express on AWS EC2</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;
