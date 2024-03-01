import React, { useEffect } from 'react'

interface Props {
    neo: any;
}

export default function DashControlScatter({neo}: Props) {

    return(
        <div className="dashboard-scatter">
            <div className='scatter-grid'>
            <div className='scatter-label-speed'>Hastighet</div>
            <div className='scatter-plot'>
                {Object.keys(neo).map((i,j)=>(
                    <span className='data-point' key={'scatter-no:'+i.toString()}
                        title={`Hastighet: ${Math.floor(neo[j]['y'])}km/s - Diameter: ${Math.floor(neo[j]['x'])}m`} 
                        style={{ left: Math.floor(neo[j]['x']/4).toString()+'px', bottom: Math.floor(neo[j]['y']*5).toString()+'px'}}></span>
                ))}
                
            </div></div>
            <div className='scatter-label-size'>St&oslash;rrelse</div>
        </div>
    )
}