import React, { useEffect } from 'react'

interface Props {
    neo: any;
}

export default function DashControlScatter({neo}: Props) {
    // let x: string[] = [];
    // let y: string[] = [];
    // function makeScatter() {
    //     x = []
    //     y = []
    //     Object.keys(neo).forEach((key) => {
    //         x = [
    //             ...x,
    //             Math.floor(neo[key]['x']).toString()+'px'
    //         ]
    //         y = [
    //             ...y,
    //             Math.floor(neo[key]['y']).toString()+'px'
    //         ]
    //     })        
    // }
    // useEffect(() => {
    //     makeScatter()
    // }, [neo])

    return(
        <div className="dashboard-scatter">
            <div className='scatter-plot'>
                {/* <span className='data-point' style={{left: '5px', top: '4px'}}></span>
                <span className='data-point' style={{left: '50px', top: '45px'}}></span>
                <span className='data-point' style={{left: '35px', top: '84px'}}></span> */}
                {/* <span className='data-point' style={{left: '5px', top: '4px'}}></span> */}
                {Object.keys(neo).map((i,j)=>(
                    <span className='data-point' style={{ left: Math.floor(neo[j]['x']/5).toString()+'px', top: Math.floor(neo[j]['x']/10).toString()+'px'}}></span>
                    // <span>{neo[j]['x']}/{neo[j]['y']} - x{x[j]} - y{y[j]} </span>
                ))}
            </div>
        </div>
    )
}