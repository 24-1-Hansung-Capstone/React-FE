// src/Components/LogoMid/LogoMid.jsx
import logo from '../../Asset/Logo.png';

function Logo(props){
    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            margin: '250px 0'
        }}>
            <img src={logo} width='530px' height='260px' alt="Logo"></img>
        </div>
    );
}

export default Logo;
