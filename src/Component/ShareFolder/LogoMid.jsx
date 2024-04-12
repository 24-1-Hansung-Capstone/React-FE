// src/Components/LogoMid/LogoMid.jsx
import logo from '../../Asset/Logo.png';

function Logo(props){
    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            margin: '100px 0'
        }}>
            <img src={logo} width='350px' height='190px' alt="Logo"></img>
        </div>
    );
}

export default Logo;
