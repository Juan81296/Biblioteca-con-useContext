import {Link} from 'react-router-dom'

export default function Navbar(){
  const linkStyle = {
    padding:'15px',
    display:'block',
    fontSize:'22px',
    fontFamily:'sans-serif',
    textTransform:'uppercase',
    color:'white',
    textDecoration:'none',
  }
  const navContainerStyle = {
    backgroundColor:'#181d27',
    padding:'10px',
    display:'flex',
    gap:'5px',
    justifyContent:'center'
  }

    return(
      <div style={navContainerStyle}>
        <Link to='/' style={linkStyle}>My books</Link>
        <Link to='/create' style={linkStyle}>Add Book</Link>
      </div>
    )
}