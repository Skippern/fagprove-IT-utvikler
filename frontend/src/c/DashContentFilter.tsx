interface Props {
    size: string;
    minSpeed: number;
    maxSpeed: number;
    dangerous: string;
    range: number;
    setSize: React.Dispatch<React.SetStateAction<string>>;
    setMinSpeed: React.Dispatch<React.SetStateAction<number>>;
    setMaxSpeed: React.Dispatch<React.SetStateAction<number>>;
    setDangerous: React.Dispatch<React.SetStateAction<string>>;
    setRange: React.Dispatch<React.SetStateAction<number>>;
}

export default function DashContentFilter({size, minSpeed, maxSpeed, dangerous, range, 
                                        setSize, setMinSpeed, setMaxSpeed, setDangerous, setRange}: Props) {
    const handleSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSize(event.target.value)
    };
    const handleDanger = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setDangerous(event.target.value)
    }
    const handleMinSpeed = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinSpeed(parseFloat(event.target.value))
    }
    const handleMaxSpeed = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxSpeed(parseFloat(event.target.value))
    }
    const handleRange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRange(parseFloat(event.target.value))
    }
    return (
        <div className="dashboard-filter">
            <div><label >St&oslash;relse
                <select value={size} onChange={handleSize}>
                    <option value='alle'>Alle</option>
                    <option value='vs'>Veldig sm&aring;</option>
                    <option value='s'>Sm&aring;</option>
                    <option value='m'>Mellomstore</option>
                    <option value='L'>Store</option>
                </select>
            </label></div>
            <div><label>Hastighet minimum
                <input type="range" value={minSpeed} min='0' max='100' step='0.001' onChange={handleMinSpeed}/>
                <p>{minSpeed} km/s</p>
            </label></div>
            <div><label>Hastighet maksimum
                <input type="range" value={maxSpeed} min='0' max='100' step='0.001' onChange={handleMaxSpeed}/>
                <p>{maxSpeed} km/s</p>
            </label></div>
            <div><label>Farlig?
                <select value={dangerous} onChange={handleDanger}>
                    <option value='alle'>Alle</option>
                    <option value='ja'>Ja</option>
                    <option value='nei'>Nei</option>
                </select>
            </label></div>
            <div><label>
                <input type="range" value={range} min='1000' max='100000' step='1' onChange={handleRange}/>
                <p>&lt; {range}Mm</p>
            </label></div>
        </div>
    )
}
