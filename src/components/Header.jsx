import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';


function Header() {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='header'>
            <Link to="/">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" class="header__logo" />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className='header__searchIcon' />
            </div>
            <div className="header__nav">
                <Link to="/login">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Guest</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
            </div>

            <Link to="/checkout">
                <div className='header__optionBasket'>
                    <ShoppingBasket />
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
            </Link>

        </div >
    )
}

export default Header
