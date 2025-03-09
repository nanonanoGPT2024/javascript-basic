import { useState } from "react"

function StateManagement() {
    const [nama, setNama] = useState("default");

    return (
        <div>
            <h2>Beljar State basic</h2>
            <h5>Hallo, {nama}</h5>
            <button onClick={() => setNama("Nanonano")}>Ubah Nama</button>
        </div>
    )
}

export default StateManagement