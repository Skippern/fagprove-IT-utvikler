interface Props {
    size: string;
    setSize: React.Dispatch<React.SetStateAction<string>>;
}

export default function DashContentFilter({size, setSize}: Props) {
    return (
        <div className="dashboard-filter">
            <label >St&oslash;relse
                <select>
                    <option>Alle</option>
                    <option>Veldig sm&aring;</option>
                    <option>Sm&aring;</option>
                    <option>Mellomstore</option>
                    <option>Store</option>
                </select>
            </label>
            <label>Hastighet minimum
                <input type="range" min='0' max='100' step='0.000'/>
            </label>
            <label>Hastighet maksimum
                <input type="range" min='0' max='100' step='0.000'/>
            </label>
            <label>
                <select>
                    <option>Alle</option>
                    <option>Ja</option>
                    <option>Nei</option>
                </select>
            </label>
            <label>
                <input type="range" min='1000' max='100000' step='1'/>
            </label>
        </div>
    )
}
