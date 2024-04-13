// src/Components/ShareFolder/SmallLogoMid.jsx
import logo from '../../Asset/Logo.png';

function SmallLogoMid(props){
    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            width: '50%',
            marginTop : '30px'
        }}>
            <img src={logo} width='150px' height='80px' alt="Logo"></img>
        </div>
    );
}

export default SmallLogoMid;
