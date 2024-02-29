import React from 'react';

interface Props {
    neo: any;
}

const DashContentBars: React.FC<Props> = ({neo}) => {
    let tdElements: JSX.Element[] = [];
    for (let i = 0; i < 100; i++) {
        tdElements.push(<td key={i}>&nbsp;</td>)
    }
    return (
        <div className="dashboard-bars">
            <table>
                <thead>
                    <tr><td>St&oslash;rrelse</td>{tdElements}</tr>
                </thead>
                <tbody>
                    <tr><td>Store</td><td className='bar' colSpan={neo.values[3]}>&nbsp;</td><td colSpan={100-neo.values[3]}>{neo.values[3]}</td></tr>
                    <tr><td>Mellomstore</td><td className='bar' colSpan={neo.values[2]}>&nbsp;</td><td colSpan={100-neo.values[2]}>{neo.values[2]}</td></tr>
                    <tr><td>Sm&aring;</td><td className='bar' colSpan={neo.values[1]}>&nbsp;</td><td colSpan={100-neo.values[1]}>{neo.values[1]}</td></tr>
                    <tr><td>Veldig sm&aring;</td><td className='bar' colSpan={neo.values[0]}>&nbsp;</td><td colSpan={100-neo.values[0]}>{neo.values[0]}</td></tr>
                </tbody>
            </table>
        </div>
    )
}

export default DashContentBars;