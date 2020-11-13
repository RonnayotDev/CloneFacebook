import React from 'react'
import './Leftcontent.css';
function Leftcontent() {
    return (
        <>
        <div className="left-container">
            <div className="left-profile">
             <i class="far fa-user-circle">
                 <p class="font3">Ronnayot Qew Jaisai</p>
                 </i>

            </div>
            <div class="left-icon-profile">
                <ul>
                <i class="fas fa-rss-square"> New Feeds</i> 
                </ul>
                <ul>
                <i class="fab fa-facebook-messenger"> Messenger</i>
                </ul>
                <ul>
                <i class="fas fa-archive"> Marketplace</i>
                </ul>
            </div>


            <div className="left-icon-group">
                <p class="font1">  ทางลัด</p>

                <ul>
                <i class="fas fa-users"> ชมรมคนชอบหี</i>
                </ul>
                <ul>
                <i class="fas fa-users"> ป้าๆราดหน้าจาน</i>
                </ul>
                <ul>
                <i class="fas fa-users"> จัดมาดิ้</i>
                </ul>
                <ul>
                <i class="fas fa-users"> คนนี้แหละ เค้าจำได้</i>
                </ul>
                <ul>
                <i class="fas fa-users"> เก่งมาก เป็นกำลังใจให้</i>
                </ul>
                
            </div>

            <div className="left-icon-tools">
                <p class="font1">สำรวจ</p>
                <ul>
                <i class="fas fa-heartbeat"> Covid-19</i>
                </ul>
                <ul>
                <i class="fas fa-flag"> เพจ</i>
                </ul>
                <ul>
                <i class="fas fa-history"> ความทรงจำ</i>
                </ul>
                <ul>
                <i class="fas fa-users"> กลุ่ม</i>
                </ul>
                <ul>
                <i class="fas fa-calendar-alt"> งานกิจกรรม</i>
                </ul>
            </div>

        </div>

        </>
    )
}

export default Leftcontent
