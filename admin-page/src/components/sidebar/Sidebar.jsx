import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
const Sidebar = ()=>
{

    return(
        <div className="sidebar">
        <div className="top">
            <span className="logo">lamadmin</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LIST</p>

                <li>

                    <PersonIcon className="icon"/>
                    <span>Users</span>
                </li>
                <li>
                    <CategoryIcon className="icon"/>
                    <span>Products</span>
                </li>
                <li>
                    <CreditCardIcon className="icon"/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className="icon"/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>

                <li>
                    <QueryStatsIcon className="icon"/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsIcon className="icon"/>
                    <span>Notification</span>
                </li>
                <p className="title">SERVICE</p>

                <li>
                <MonitorHeartIcon className="icon"/>
                    <span>System Health</span>
                </li>
                <li>
                <SettingsIcon className="icon"/>
                    <span>Logs</span>
                </li>
                <p className="title">USER</p>
                <li>
                <PsychologyIcon className="icon"/>
                    <span>Settings</span>
                </li>
                <li>
                <AccountCircleIcon className="icon"/>
                    <span>Profile</span>
                </li>
                <li>
                <LogoutIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
        </div>
    )
}

export default Sidebar