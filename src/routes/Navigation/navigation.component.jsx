import {Outlet, Link} from 'react-router-dom';

import { Fragment } from 'react';

import './navigation.styles.scss'

import {ReactComponent as CrwnLogo} from '../../Assets/007 crown.svg'


const Navigation=()=>{
    return(
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                <CrwnLogo className='logo'/>
                </Link>
                <div className='nav-link-container'>
                    <Link className='nav-link' to='/shop'>
                    Shop
                    </Link>
                    <Link className='nav-link' to='/sign-in'>
                        Sign In 
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};
export default Navigation;