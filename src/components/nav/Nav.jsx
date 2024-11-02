
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from './Auth';

const Nav = () => {
    const auth = useAuth()
  return (
    <div style={{height:"50px",width:"100%",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
      
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/about'>About</Link>
        </li>
        <li>
            <Link to='/products'>Products</Link>
        </li>
        <li>
            <Link to='/profile'>profile</Link>
        </li>
        <li>
            {
                !auth.user && <NavLink   to='/login'>Login</NavLink>
            }
        </li>
      
    </div>
  )
}

export default Nav
