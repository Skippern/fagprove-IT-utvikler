import { useNavigate } from 'react-router-dom';

interface Props {
    startDate: number;
    endDate: number;
    searchTrigger: boolean;
    setStartDate: React.Dispatch<React.SetStateAction<number>>;
    setEndDate: React.Dispatch<React.SetStateAction<number>>;
    setSearchTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DashTop({startDate,endDate,searchTrigger,setStartDate,setEndDate,setSearchTrigger}: Props) {
    const nav = useNavigate();

    function dateToUnixTime(dateString: string): number | null {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            return null;
        }
        return Math.floor(date.getTime())
    }
    function unixTimeToDate(unixTime: number): string {
        const date = new Date(unixTime);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2,'0');
        return `${year}-${month}-${day}`
    }
    const handleInputStartChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
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
        const value = dateToUnixTime(event.target.value)
        console.log(value)
        if (value !== null) {
            setEndDate(value)
        } else {
            setEndDate(0)
        }
    }
    const flipSearchTrigger = () => {
        console.log('button pushed')
        setSearchTrigger(!searchTrigger)
    }

    const handleLogOut = () => {
        document.cookie = 'NFRIusername=; max-age: 0';
        document.cookie = 'NFRIpass=; max-age: 0';
        console.log('Cookies deleted')
        alert('Du er nå logget ut.')
        nav('/login')
    }

    return (
        <div>
            <h2>NFRIs søkemotor for jordnære asteroider</h2>
            <div className="dashboard-top">
                <div>
                    <label title="Dato Start">Start Dato <input name="startDate"  value={startDate === 0 ? '' : unixTimeToDate(startDate)} type="date" placeholder="Dato start" onChange={handleInputStartChange}/></label>
                    <label title="Dato Slutt">Slutt Dato <input name="endDate"  value={endDate === 0 ? '' : unixTimeToDate(endDate)} type="date" placeholder="Dato slutt" onChange={handleInputEndChange}/></label>
                    <button onClick={flipSearchTrigger}>S&Oslash;K</button>
                </div>
                <div>
                    <button onClick={handleLogOut}>Logg Ut</button>
                </div>
            </div>
        </div>
    )
}