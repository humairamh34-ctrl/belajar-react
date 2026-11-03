import { useState } from 'react';
function Event() {
    const [unsur, setUnsur] = useState("");
    const [hasil, setHasil] = useState("");
    const [peringatan, setPeringatan] = useState("");
    const tanganiPerubahan = (event) => {
        setUnsur(event.target.value);
    }
    const tanganiSubmit = (event) => {
        event.preventDefault();

        if (unsur.trim() === "") {
            setPeringatan("Nama unsur belum diisi");
            setHasil("");
        } else {
            setPeringatan("");
            setHasil(unsur);
        }
        
    }

    function tampilkanPesan() {
        alert("Straykids everywhere all around the world");
    }

    return (
        <div>
            <h2 className="section-title">Event Handling</h2>
            <button onClick={tampilkanPesan}>
                Tick Tack
            </button>

            <p>Unsur: {unsur}</p>

            <form onSubmit={tanganiSubmit}>
                <input 
                type="text"
                value={unsur}
                onChange={tanganiPerubahan}
                placeholder="Masukkan Teks" 
                />
                <button type="submit">Submit</button>
            </form>

            {peringatan && <p>{peringatan}</p>}
            <p>Hasil: {hasil}</p>
        </div>
        
    );
}

export default Event;