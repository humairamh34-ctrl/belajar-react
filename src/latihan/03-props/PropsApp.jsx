import Kimia from "./Kimia";

function PropsApp() {
    return (
        <div className="periodic-section">
            <h1 className="section-title">
                Contoh unsur kimia dalam tabel Periodik
            </h1>

        <div className="element-grid">
            <Kimia
            unsur="Besi"
            simbol="Fe" 
            />

            <Kimia
            unsur="Seng"
            simbol="Zn"
            />

            <Kimia
            unsur="Berilium"
            simbol="Be"
            />

            <Kimia
            unsur="Prometium"
            simbol="Pm"
            />

            <Kimia
            unsur="Uranium"
            simbol="U"
            />
            
            <Kimia
            unsur="Iodin"
            simbol="I"
            />

            <Kimia
            unsur="Xenon"
            simbol="Xe"
            />

            <Kimia
            unsur="Natrium"
            simbol="Na"
            />
        </div>

        </div>
    );
}

export default PropsApp;