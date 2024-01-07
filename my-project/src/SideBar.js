import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs'
import { FaFire, FaPoo,FaBeer  } from 'react-icons/fa';
function SideBar (){
    return(
        <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-2xl">
            <SideBarIcon icon={<FaFire   size="28" />} />
            {/* <Divider /> */}
            <SideBarIcon icon={<BsPlus size="32" />} />
            <SideBarIcon icon={<BsFillLightningFill size="20" />} />
            <SideBarIcon icon={<FaPoo size="20" />} />
            {/* <Divider /> */}
            {/* <SideBarIcon icon={<BsGearFill size="22" />} /> */}
        </div>
    );
}

function SideBarIcon ({icon, text = 'tooltip 🐱'}){
    return(
    <div className='sidebar-icon group'>
        {icon}
        <span className='sidebar-tooltip group-hover:scale-100'>{text}</span>
    </div>
    
    );
}

const Divider = () => <hr className="sidebar-hr" />;
export default SideBar;