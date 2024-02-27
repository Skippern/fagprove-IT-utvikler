interface Props {
    startDate: number;
    setStartDate: React.Dispatch<React.SetStateAction<number>>;
    endDate: number;
    setEndDate: React.Dispatch<React.SetStateAction<number>>;
}

export default function DashTop({startDate,endDate,setStartDate,setEndDate}: Props) {
    function dateToUnixTime(dateString: string): number | null {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            return null;
        }
        return Math.floor(date.getTime() / 1000)
    }
    function unixTimeToDate(unixTime: number): string {
        const date = new Date(unixTime * 1000);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2,'0');
        return `${year}-${month}-${day}`
    }
    const handleInputStartChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        // const value = parseInt(event.target.value);
        const value = dateToUnixTime(event.target.value)
        console.log(value)
        if (value !== null) {
            setStartDate(value)
        } else {
            setStartDate(0)
        }
    }
    const handleInputEndChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        // const value = parseInt(event.target.value);
        const value = dateToUnixTime(event.target.value)
        console.log(value)
        if (value !== null) {
            setEndDate(value)
        } else {
            setEndDate(0)
        }
    }

    return (
        <div className="dashboard-top">
            <div>
                <label title="Dato Start">Start Dato <input name="startDate"  value={startDate === 0 ? '' : unixTimeToDate(startDate)} type="date" placeholder="Dato start" onChange={handleInputStartChange}/></label>
                <label title="Dato Slutt">Slutt Dato <input name="endDate"  value={endDate === 0 ? '' : unixTimeToDate(endDate)} type="date" placeholder="Dato slutt" onChange={handleInputEndChange}/></label>
                <button>S&Oslash;K</button>
            </div>
            <div>
                <button>Logg Ut</button>
            </div>
        </div>
    )
}