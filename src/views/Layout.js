import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
class Layout extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            links: this.props.links,
        }
    }

    componentDidMount(){

    }

    render(){
        let links = this.state.links.map((item, i) => 
        
            <li className="nav-item" key={item+i}>
            <Link className="nav-link" to={item.link}>{item.name}</Link>
            </li>
        
        )
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Marvel Studios</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {links}                
                </ul>
            </div>
            </nav>
        )
    }
}

export default Layout