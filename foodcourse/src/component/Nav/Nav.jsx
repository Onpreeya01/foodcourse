import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './NavStyle.css'

function Nav(){
    return (
    <section id="nav">
        {/* <div className="-brand">
            <div className="-ham">
                <img src="https://via.placeholder.com/30x30" alt=""/>
            </div>
        </div> */}
        <div className="-center">
            <div className="-search">
                <div className="-search-box">
                    <input type="text" className="-search-input"/>
                </div>
                <div className="-button">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </div>
        </div>
        {/* <div className="-end">3</div> */}
    </section>
    );
}

export default Nav;
