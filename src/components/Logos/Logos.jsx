import React from 'react'
import Logo1 from '../Assets/partner-1.png'
import Logo2 from '../Assets/partner-2.png'
import Logo3 from '../Assets/partner-3.png'
import Logo4 from '../Assets/partner-4.png'
import Logo5 from '../Assets/partner-5.png'
export default function Logos() {
return (
    <>
        <div style={{marginTop:'80px'}}><hr/></div>
        <div className='container d-flex  justify-content-around' style={{width:'100px' , height:'70px' , marginTop:'100px'}}>
            <img src={Logo1} alt='partner1'/>
            <img src={Logo2} alt='partner2' style={{marginLeft:'50px'}}/>
            <img src={Logo3} alt='partner3' style={{marginLeft:'40px'}}/>
            <img src={Logo4} alt='partner4'style={{marginLeft:'40px'}}/>
            <img src={Logo5} alt='partner5'style={{marginLeft:'40px'}}/>
        </div>
    </>
)
}
