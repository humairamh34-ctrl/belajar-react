function List () {
    const unsur = [
        "Hidrogen",
        "Helium",
        "Litium",
        "Berilium",
        "Boron"
    ];
    const unsur2 = [
        {id: 1, nama: "Hidrogen", simbol: "H"},
        {id: 2, nama: "Helium", simbol: "He"},
        {id: 3, nama: "Litium", simbol: "Li"}
    ];

    return (
        <div>
            <h2 className="section-title">Daftar Unsur Kimia</h2>

            {unsur.map((nama) => (
                <p key={nama}>{nama}</p>
            ))}
            <br />
            {unsur2.map((item) => (
                <p key={item.id}>
                    {item.nama} ({item.simbol})
                </p>
            ))}
        </div>
    );
}

export default List;