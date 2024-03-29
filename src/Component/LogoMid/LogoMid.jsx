import logo from '../../Asset/Logo.png';

function Logo(props){
    return(
        <div style={{
            display: 'flex', // Flexbox 모델을 사용합니다.
            justifyContent: 'center', // 주 축(여기서는 수평 축)을 기준으로 중앙 정렬합니다.
            width: '100%', // 부모 컨테이너의 폭을 최대로 설정합니다.
            margin: '20px 0' // 상하 20px, 좌우 0px 마진을 설정합니다.
        }}>
            <img src={logo} width='350px' height='180px' alt="Logo"></img>
        </div>
    );
}

export default Logo;
