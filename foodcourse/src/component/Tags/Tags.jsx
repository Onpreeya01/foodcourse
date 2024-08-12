import { Link, useLocation } from 'react-router-dom';
import './TagsStyle.css'

function Tags(){
    const location = useLocation();

    return (
        <section id="tags">
            <Link to="/" className={`-item ${location.pathname === '/' ? '-active' : ''}`}>
                ทั้งหมด
            </Link>
            <Link to="/breakfast" className={`-item ${location.pathname === '/breakfast' ? '-active' : ''}`}>
                อาหารเช้า
            </Link>
            <Link to="/vegetable" className={`-item ${location.pathname === '/vegetable' ? '-active' : ''}`}>
                เมนูผัก
            </Link>
            <Link to="/dinner" className={`-item ${location.pathname === '/dinner' ? '-active' : ''}`}>
                อาหารเย็น
            </Link>
        </section>
    );
}

export default Tags;