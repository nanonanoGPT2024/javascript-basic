import { useEffect, useState } from "react";

function UseEffectjs() {


    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Komponen dirender");
    });


    return (
        <div>
            <h2>Belajar UseEffect</h2>
            <button onClick={() => setCount(count + 1)}>Tambah</button>
        </div>
    )
} 


export default UseEffectjs;