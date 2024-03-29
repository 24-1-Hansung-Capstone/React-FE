import React, { useState, useEffect } from 'react';
import ScrollItem from '../ScrollItem/ScrollItem';

// Component0 정의
const Component0 = () => (
    <div style={{ height: '100px', backgroundColor: 'lightblue' }}>
        <h2>Component 0</h2>
    </div>
);

// Component1 정의
const Component1 = () => (
    <div style={{ height: '100px', backgroundColor: 'lightcoral' }}>
        <h2>Component 1</h2>
    </div>
);

// Component2 정의
const Component2 = () => (
    <div style={{ height: '100px', backgroundColor: 'lightgreen' }}>
        <h2>Component 2</h2>
    </div>
);

// 메인 컴포넌트
const ScrollComponent = () => {
    const [currentComponent, setCurrentComponent] = useState(0);

    const handleWheel = (e) => {
        // 휠 다운(아래로 스크롤)
        if (e.deltaY > 0) {
            setCurrentComponent(prevState => (prevState < 2 ? prevState + 1 : prevState));
        }
        // 휠 업(위로 스크롤)
        else if (e.deltaY < 0) {
            setCurrentComponent(prevState => (prevState > 0 ? prevState - 1 : prevState));
        }
    };

    useEffect(() => {
        window.addEventListener('wheel', handleWheel);

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    const renderComponent = () => {
        switch (currentComponent) {
            case 0:
                return <Component0 />;
            case 1:
                return <Component1 />;
            case 2:
                return <Component2 />;
            default:
                return <Component0 />;
        }
    };

    return (
        <div style={{width: "100%"}}>
            <ScrollItem></ScrollItem>
        </div>
    );
};

export default ScrollComponent;
