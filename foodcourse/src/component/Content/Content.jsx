import Tags from "../Tags/Tags";
import "./ContentStyle.css"

function Content(){
    return (
        <section id="content">
            <Tags></Tags>
            <section id="the-cards">
                <div className="card">
                    <div className="-thumb">
                        <img src="https://via.placeholder.com/320x200"/>
                    </div>
                    <div className="-name">
                        ขาหมู
                    </div>
                </div>

                <div className="card">
                    <div className="-thumb">
                        <img src="https://via.placeholder.com/320x200"/>
                    </div>
                    <div className="-name">
                        ข้าวมันไก่
                    </div>
                </div>

                <div className="card">
                    <div className="-thumb">
                        <img src="https://via.placeholder.com/320x200"/>
                    </div>
                    <div className="-name">
                        ข้าวต้ม
                    </div>
                </div>

                <div className="card">
                    <div className="-thumb">
                        <img src="https://via.placeholder.com/320x200"/>
                    </div>
                    <div className="-name">
                        ไข่เจียวหมูสับ
                    </div>
                </div>

                <div className="card">
                    <div className="-thumb">
                        <img src="https://via.placeholder.com/320x200"/>
                    </div>
                    <div className="-name">
                        แกงส้มปลากระป๋อง
                    </div>
                </div>

                <div className="card">
                    <div className="-thumb">
                        <img src="https://via.placeholder.com/320x200"/>
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