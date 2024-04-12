// src/Components/ShareFolder/LogoMid.jsx
import logo from '../../Asset/Logo.png';

function LogoMid(props){
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

export default LogoMid;
