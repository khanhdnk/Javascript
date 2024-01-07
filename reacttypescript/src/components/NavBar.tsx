import { Link } from 'react-router-dom';
import downloadimg from './../image/downloading.png'
import './../App.css'
import apiIcon from './../image/api.png'
import LogoutFeature from '../APIs/LogoutFeature';
import {useNavigate} from 'react-router-dom';



export function Navbarhtml() {
  const navigation = useNavigate();

  async function Logout(){
    await LogoutFeature(); navigation('/login');  
  }

  return (
    <>
        <div className="container">
    <nav>
      <ul>
        <li><span className="logo">
          <img src={apiIcon} alt=""/>
          <span className="nav-item">DashBoard</span>
        </span></li>

        
        <Link to={'/'}>
        <li><span className='nav-section'>
          
          <span className="nav-item"><img className="" src={downloadimg} width="30" alt='img'></img>Get eployees</span>
        </span></li>
        </Link>
        <Link to={"/getAnEmployee"}>
          <li><span className='nav-section'>
            <i className="fas fa-user"></i>
            <span className="nav-item">Get an eployee</span>
          </span></li>

        </Link>

        <Link to={"/update"}>

          <li><span className='nav-section'>
            <i className="fas fa-wallet"></i>
            <span className="nav-item">Update an employee</span>
          </span></li>
        </Link>

        <Link to={"/post"}>
          <li><span className='nav-section'>
            <i className="fas fa-chart-bar"></i>
            <span className="nav-item">Add an employee</span>
          </span></li>
        </Link>

        <Link to={"/delete"}>

          <li><span className='nav-section'>
            <i className="fas fa-tasks"></i>
            <span className="nav-item">Delete an employee</span>
          </span></li>
        </Link>
        <Link to={"/login"}>

          <li><span className='nav-section'>
            <i className="fas fa-tasks"></i>
            <span className="nav-item">Login</span>
          </span></li>
        </Link>

        <li onClick={() => {Logout()}}><span className="logout nav-section" >
          <i className="fas fa-sign-out-alt"></i>
          <span className="nav-item">Log out</span>
        </span></li>


      </ul>
    </nav>

  </div>
    </>
  );
}

export default Navbarhtml;
