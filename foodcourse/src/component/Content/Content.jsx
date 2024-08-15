import Tags from "../Tags/Tags";
import "./ContentStyle.css"
import { useNavigate } from 'react-router-dom';

function Content(){
    const navigate = useNavigate();

    const handleImageClick = (name) => {
        // เปลี่ยนเส้นทางไปยังเส้นทางที่สอดคล้องกับชื่อ
        navigate(`/${name}`);
    };

    return (
        <section id="content">
            <Tags></Tags>
            <section id="the-cards">
                <div className="card">
                    <div className="-thumb">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLF14wfYejK3g96LLf73ZVrY9_D3DjpMAEqg&s"
                        alt="ขาหมู"
                        onClick={() => handleImageClick('ขาหมู')}
                        />
                    </div>
                    <div className="-name">
                        ขาหมู
                    </div>
                </div>

                <div className="card">
                    <div className="-thumb">
                        <img src="https://image.bestreview.asia/wp-content/uploads/2022/09/Chicken-rice-1.jpg"/>
                    </div>
                    <div className="-name">
                        ข้าวมันไก่
                    </div>
                </div>

                <div className="card">
                    <div className="-thumb">
                        <img src="https://www.bloggang.com/data/b/benyarat088/picture/1674731717.jpg"/>
                    </div>
                    <div className="-name">
                        ข้าวต้ม
                    </div>
                </div>

                <div className="card">
                    <div className="-thumb">
                        <img src="https://s.isanook.com/wo/0/ud/47/239973/tnw8.jpg?ip/crop/w670h402/q80/jpg"/>
                    </div>
                    <div className="-name">
                        ไข่เจียวหมูสับ
                    </div>
                </div>

                <div className="card">
                    <div className="-thumb">
                        <img src="https://img-global.cpcdn.com/recipes/ae44ff9fad017bb4/680x482cq70/%E0%B8%A3%E0%B8%9B-%E0%B8%AB%E0%B8%A5%E0%B8%81-%E0%B8%82%E0%B8%AD%E0%B8%87-%E0%B8%AA%E0%B8%95%E0%B8%A3-%E0%B9%81%E0%B8%81%E0%B8%87%E0%B8%AA%E0%B8%A1%E0%B8%A1%E0%B8%B0%E0%B8%A5%E0%B8%B0%E0%B8%81%E0%B8%AD%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9B%E0%B8%AD%E0%B8%87-sour-curry-with-sardines.jpg"/>
                    </div>
                    <div className="-name">
                        แกงส้มปลากระป๋อง
                    </div>
                </div>

                <div className="card">
                    <div className="-thumb">
                        <img src="https://s359.kapook.com/pagebuilder/dd8fa42d-01a2-48c1-b146-a0770bf7d499.jpg"/>
                    </div>
                    <div className="-name">
                        ยำมาม่าทะเล
                    </div>
                </div>
            </section>
        </section>
    );
    
}

export default Content;