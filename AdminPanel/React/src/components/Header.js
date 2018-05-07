import React from 'react'
import {render} from 'react-dom'

class Header extends React.Component{
    render(){
        return(
            <nav className="row">
                <img className="col-1" src="img/noon white.png" alt="noon logo"/>
                    <label className="col-9 welcome">Welcome Noon admin panel</label>
                    <div className="col-2 side-nav-items">
                        <button>
                            <i className="fa fa-search"></i>
                        </button>
                        <a href="#">Logout</a>
                    </div>
            </nav>
        );
    }
}

export default Header;