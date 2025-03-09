import { useState } from "react";

function EvenetHandling() {
  const [nama, setNama] = useState("");
  return (
    <div>
      <h2>Belajar Event Handling</h2>
      <input
        type="text"
        placeholder="Masukan Nama"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />

      <h2>Hallo, {nama}</h2>
    </div>
  );
}



export default EvenetHandling;