import { useState } from "react";

function Kimia() {
    const [simbol, setSimbol] = useState("Fe");

    return (
        <div>
            <h2>Unsur Kimia</h2>

            <h1>{simbol}</h1>

            <button onClick ={() => setSimbol("Fe")} className="button">
                Ubah ke Besi
            </button>
            <button onClick={() => setSimbol("Zn")} className="button">
                Ubah ke Seng
            </button>
        </div>
    );
}

export default Kimia;