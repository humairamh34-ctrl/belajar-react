function Conditional() {
    const tersedia = false;
    return (
        <div>
            {tersedia && (
            <h2>Informasi Unsur Kimia</h2>
            )}

            {tersedia ? (
                <ul>
                    <li>Nama: Oksigen</li>
                    <li>Simbol: O</li>
                </ul>
            ) : (
                <p>Maaf, informasi unsur belum tersedia</p>
            )}
        </div>
    )
}

export default Conditional;