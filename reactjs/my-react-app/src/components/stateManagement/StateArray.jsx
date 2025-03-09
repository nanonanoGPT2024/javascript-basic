import { useState } from "react";

function StateArray() {
  const [buah, setBuah] = useState(["apel", "Mangga", "jeruk"]);

  return (
    <div>
      <h2>Belajar state Array</h2>
      <h4>Daftar Buah</h4>
      <ul>
        {buah.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button onClick={() => setBuah([...buah, "pisang"])}>
        Tambah Pisang
      </button>
    </div>
  );
}

export default StateArray;
