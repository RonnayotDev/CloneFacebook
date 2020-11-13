import React from 'react'
import './CenterHalf.css';

function CenterHalf() {
    return (
        <div className="centerhalf-container">
            <div className="centerhalf-birthday">
            <i class="fas fa-gift"></i>
            <p class="font-birthday">
                Punch Kunwiroj
            </p>
            </div>
<           br></br>
            <div className="centerhalf-Gamecontent">
            <i class="fas fa-gamepad"> วิดีโอเกี่ยวกับเกม</i>
            
            <div className="centerhalf-videoGame">

            <img src="/images/img-5.jpg" alt="card5" className="card-videoGame"/>

            </div>
            </div>
            
        </div>
    )
}

export default CenterHalf
