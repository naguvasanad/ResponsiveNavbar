import { Link } from "react-router-dom";
const Menus=(props)=>{
    return(
    
        <div className= {props.setClasName}>
        <ul>
                    <li className="active"><Link to="/" style={{textDecoration: 'none',color: 'white'}}>Home</Link></li>
                    <li><Link to="/Service" style={{textDecoration: 'none', color: 'white'}}>Service</Link></li>
                    <li ><Link to="/Contact" style={{textDecoration: 'none',color: 'white'}}>Contact</Link></li>
                    <li><Link to="/Blogs" style={{textDecoration: 'none',color: 'white'}}> Blogs</Link></li>
                </ul>
        </div>
    );
}
export default Menus;