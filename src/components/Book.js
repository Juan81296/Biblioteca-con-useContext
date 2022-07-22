import {Link} from 'react-router-dom'

export default function Book({item}){

    const bookContainerStyle = {
        display:'flex',
        flexDirection:'column',
        width:'300px',

    };
    const bookInfoStyle={
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        textAlign:'center',
        color:'white',
        textDecoration:'none',
        fontSize:'20px',
        
    }


    return(
        <div style={bookContainerStyle}>  
            <Link to={`/view/${item.id}`} style={bookInfoStyle} >
            <div> {item.title} </div>
            <img src={item.cover} widht='200' height='200' alt={item.title} />
            </Link>            
        </div>
    )
}
