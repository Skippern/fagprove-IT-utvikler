interface Props {
    neo: any;
}

export default function DashContentTable({neo}: Props) {
    function translateBody(body: string): string {
        let r = body
        if (body === 'Earth') {
            r = 'Jorden'
        }
        return r
    }
    function unixTimeToLocalDate(unixTime: number): string {
        let r = new Date(unixTime)
        return r.toLocaleString()
    }
    function roundToDecimal(num: number, decPlaces: number): number {
        const multiplier = Math.pow(10, decPlaces);
        return Math.round(num * multiplier) / multiplier;
    }
    return(
        <div className="dashboard-table">
            <table className="astroide-tabell">
                <thead>
                    <tr>
                        <th>Navn</th>
                        <th>St&oslash;rrelse<br/>(Diameter)</th>
                        <th>Hastighet</th>
                        <th>G&aring;r i bane rundt</th>
                        <th>Tid/dato n&aelig;rmeste passering</th>
                        <th>Passerer med avstand</th>
                        <th>Potensielt farlig?</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(neo).map((i,j) => (
                        <tr>
                            <td>{neo[i]['name']}</td>
                            <td>{roundToDecimal(neo[i]['diameter'], 3)}m</td>
                            <td>{roundToDecimal(neo[i]['velocity'], 3)}km/s</td>
                            <td>{translateBody(neo[i]['orbiting'])}</td>
                            <td>{unixTimeToLocalDate(neo[i]['closeApproachTimestamp'])}</td>
                            <td>{neo[i]['closestDistance']}Mm</td>
                            <td>{neo[i]['potentiallyHazardous'] ? <span>Ja</span> : <span>Nei</span>}</td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
