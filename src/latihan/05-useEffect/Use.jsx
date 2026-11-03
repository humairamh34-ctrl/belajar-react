import { useEffect, useState } from "react";

function Use() {
    const [jumlah, setJumlah] = useState(0);
    const [detik, setDetik] = useState(0);

    useEffect(() => {
        console.log("Jumlah klik: ", jumlah);
    }, [jumlah]);

    useEffect(() => {
        const timer = setInterval(() => {
            setDetik((nilaiSebelumnya) => nilaiSebelumnya + 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <h1>Tabel Periodik</h1>
            <p>Jumlah: {jumlah}</p>
            <button onClick={() => setJumlah(jumlah + 1)}>
                Tambah
            </button>
            <button onClick={() => setJumlah(0)}>
                Reset
            </button>

            <hr />

            <h2 className="section-title">Timer</h2>
            <p>Detik: {detik}</p>
        </div>
    );
}
    
export default Use;