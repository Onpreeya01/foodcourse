import Nav from "../component/Nav/Nav";
import Tags from "../component/Tags/Tags";
import './PageStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';

function Page() {
    return (
        <section id="kha-moo-page">
            <Nav />
            <Tags />
            <div className="card">
                <div className="-thumb">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLF14wfYejK3g96LLf73ZVrY9_D3DjpMAEqg&s" alt="ขาหมู" />
                    <h1>ขาหมู</h1>
                    
                </div>
                
            </div>
            <div className="detail">
                <div className="info-item">
                    <FontAwesomeIcon icon={faClock} />
                        เวลาที่ใช้
                </div>
                <div className="info-item">
                    {/* <FontAwesomeIcon icon={faUtensils} /> */}
                    <FontAwesomeIcon icon={faBowlFood} />
                        เหมาะสำหรับ 2 ท่าน
                </div>
            </div>
            
            <div className="calorie-circles">
                <div className="circle" style={{ backgroundColor: '#FF6F61' }}>
                    Calorie ทั้งหมด 1200 Cal
                </div>
                <div className="circle" style={{ backgroundColor: '#FFB300' }}>
                    โปรตีน 400 Cal
                </div>
                <div className="circle" style={{ backgroundColor: '#4CAF50' }}>
                    คาร์โบไฮเดรต 400 Cal
                </div>
                <div className="circle" style={{ backgroundColor: '#1E90FF' }}>
                    ไขมัน 400 Cal
                </div>
            </div>



            <div className="ingredients">
                <h4>วัตถุดิบ</h4>
                <p>1.</p>
                <p>2.</p>
                <p>3.</p>
                <p>4.</p>
            </div>

            <div className="cooking">
                <h4>ขั้นตอนการทำ</h4>
                <p>1.</p>
                <p>2.</p>
                <p>3.</p>
            </div>
                
            
        </section>
    );
}

export default Page;
