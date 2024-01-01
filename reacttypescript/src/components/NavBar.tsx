// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
// import { TestHTML } from '../App';
// import { Button } from 'react-bootstrap';
import downloadimg from './../image/downloading.png'
import './../App.css'
import apiIcon from './../image/api.png'
import Cookies from "js-cookie";
import LogoutFeature from '../APIs/LogoutFeature';
import {useNavigate} from 'react-router-dom';
import checkRefreshToken from '../APIs/CheckRefreshToken';
import { useEffect, useState } from 'react';



export function Navbarhtml() {
  const [linkTo, setLinkTo] = useState<string>('/');
  const [isLogin, setIsLogin] = useState(1);
  function Logout(){
    Cookies.remove('token');
  }
  const navigation = useNavigate();
  async function checkAuthenAndAuthor(url: string){
    let isEligible = await checkRefreshToken();
    if (!isEligible){
      return '/login'
    }
    return url;
  }
  
  async function fetchLinkTo() {
    let isEligible = await checkRefreshToken();
    if (!isEligible) {
      setLinkTo('/login');
    } else {
      setLinkTo('/');
    }
  }
  useEffect(() => {

    fetchLinkTo();
  }, [isLogin]);

  return (
    <>
        <div className="container">
    <nav>
      <ul>
        <li><a className="logo">
          <img src={apiIcon} alt=""/>
          <span className="nav-item">DashBoard</span>
        </a></li>

        
        <Link to={'/'}>
        <li><a>
          
          <span className="nav-item"><img className="" src={downloadimg} width="30"></img>Get eployees</span>
        </a></li>
        </Link>
        <Link to={"/getAnEmployee"}>
          <li><a>
            <i className="fas fa-user"></i>
            <span className="nav-item">Get an eployee</span>
          </a></li>

        </Link>

        <Link to={"/update"}>

          <li><a>
            <i className="fas fa-wallet"></i>
            <span className="nav-item">Update an employee</span>
          </a></li>
        </Link>

        <Link to={"/post"}>
          <li><a>
            <i className="fas fa-chart-bar"></i>
            <span className="nav-item">Add an employee</span>
          </a></li>
        </Link>

        <Link to={"/delete"}>

          <li><a>
            <i className="fas fa-tasks"></i>
            <span className="nav-item">Delete an employee</span>
          </a></li>
        </Link>
        <Link to={"/login"}>

          <li><a>
            <i className="fas fa-tasks"></i>
            <span className="nav-item">Login</span>
          </a></li>
        </Link>

        {/* <li onClick={() => {setIsLogin(previous => previous + 1); console.log("hello")}}><a>
            <i className="fas fa-tasks"></i>
            <span className="nav-item">rerender</span>
          </a></li> */}

        <li><a className="logout" onClick={() => {LogoutFeature(); Logout(); navigation('/login')}}>
          <i className="fas fa-sign-out-alt"></i>
          <span className="nav-item">Log out</span>
        </a></li>


      </ul>
    </nav>

  </div>
    </>
  );
}

export default Navbarhtml;
