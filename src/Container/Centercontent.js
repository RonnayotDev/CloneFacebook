import React from 'react'
import './Centercontent.css';
function Centercontent() {
    return (
        <div class="center-container">
            <div className="center-createpost">

                <div className="center-createpost1">
                    <p class="font3">สร้างโพสต์</p>
                </div>

                <div className="center-createpost2">

                <i class="far fa-user-circle"></i>
                <p class="font4">คุณกำลังคิดอะไรอยู่ Ronnayot</p>

                </div>

                <div className="center-createpost3">
                    <ul> 
                    <i class="fas fa-video"> สร้างห้อง</i> 
                    </ul>
                    <ul> 
                    <i class="fas fa-image"> รูปภาพ/วิดีโอ</i>
                    </ul>
                    <ul> 
                    <i class="fas fa-user-tag"> แท็กเพื่อน</i>
                    </ul>
                
                </div>

            </div>
            <br></br>
            <div className="center-createstory">
                
                <p className="fontStory"> สตอรี่</p>
                    
                    <div className="center-createstoryCard">
                        
                    <img src="/images/img-1.jpg" alt="card1" className="card-createstory"/>
                    <img src="/images/img-2.jpg" alt="card2" className="card-createstory"/>
                    <img src="/images/img-3.jpg" alt="card3" className="card-createstory"/>
                    <img src="/images/img-4.jpg" alt="card4" className="card-createstory"/>

                         
                </div>
            </div>
            <br></br>
        <div className="center-post">
            <div className="center-post-profile">
            <i class="far fa-user-circle"></i>
            <p class="font-post-profile"> Ronnayot Jaisai</p>
           
            </div>
            
            <div className="center-post-postt">
            <p class="font-post"> I LOVE MAGIC BOX</p>
            </div>

            <div className="center-post-function">
            <ul>
            <i class="far fa-thumbs-up"> ถูกใจ</i>
            </ul>
            <ul>
            <i class="far fa-comment"> แสดงความคิดเห็น</i>
            </ul>
            <ul>
            <i class="far fa-share-square"> แชร์</i>
            </ul>
            </div>

            <div className="center-post-comment">
            <i class="far fa-user-circle"></i>

            <input id="commentInput"placeholder="เขียนความคิดเห็น"/>
            </div>

        </div>
        </div>
    )
}

export default Centercontent
