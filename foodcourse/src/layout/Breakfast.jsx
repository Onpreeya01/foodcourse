import Nav from "../component/Nav/Nav";
import Tags from "../component/Tags/Tags";
import './Breakfast.css';

function Breakfast() {
    return (
        <section id="break-fast">
            <Nav/>
            <Tags/>
            <section id="the-cards">
                <div className="card">
                    <div className="-thumb">
                        <img src="https://www.bloggang.com/data/b/benyarat088/picture/1674731717.jpg"/>
                    </div>
                    <div className="-name">
                        ข้าวต้ม
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Breakfast;
