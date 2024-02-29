import React from 'react'

interface Props {
    neo: any;
}

export default function DashControlScatter({neo}: Props) {

    return(
        <div className="dashboard-scatter">
            <div className='scatter-plot'>
                <span className='data-point' style={{left: '5px', top: '4px'}}></span>
                {Object.keys(neo).map((i,j)=>(
                    <span className='data-point' style={{}}>{neo[i]['x']}</span>
                ))}
            </div>
        </div>
    )
}