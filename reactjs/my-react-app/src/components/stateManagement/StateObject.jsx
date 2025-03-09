import { useState } from "react";

function StateObject() {
    const [profile, setProfile]= useState({ nama:"keti", umur:25})
    return (
        <div>
            <h2>State Object</h2>
            <h5>Nama : {profile.nama}</h5>
            <h5>Umur : {profile.umur}</h5>
            <button onClick={() => setProfile({ ...profile, umur: profile.umur + 1})  }>Tambah Umur</button>
        </div>
    )
}

export default StateObject;