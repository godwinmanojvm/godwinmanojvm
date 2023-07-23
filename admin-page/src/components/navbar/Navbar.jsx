import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
const Navbar = ()=>
{

    return(
        <nav>
        <div className="navbar">
            <div className="navbarWrapper">
               <input type="text"  placeholder="Search..."/>
               <SearchIcon/>
               </div>
            <div className="items">
                <div className="item">
                <LanguageOutlinedIcon/>
                English
                </div>
                <div className="item">
                <LanguageOutlinedIcon/>
                </div>
                <div className="item">
                <LanguageOutlinedIcon/>
                </div>
                <div className="item">
                <LanguageOutlinedIcon/>
                </div>
                <div className="item">
                <LanguageOutlinedIcon/>
                </div>
                <div className="item">
                <LanguageOutlinedIcon/>
                </div>

            
            </div>
        </div>
        </nav>
    )
}

export default Navbar