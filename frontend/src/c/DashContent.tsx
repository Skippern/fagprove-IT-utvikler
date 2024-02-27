interface Props {
    neo: any;
}
export default function DashContent({neo}: Props) {
    return (
        <div className="dashboard-content">
            Content Result
            <ul>
                {
                    Object.keys(neo).map((i,j) => (
                        <li>{i}</li>
                    ))
                }
            </ul>
        </div>
    )
}