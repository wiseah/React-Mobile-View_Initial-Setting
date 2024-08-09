import { Link, Outlet, matchRoutes, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import routes from '../routes.js';
import classNames from 'classnames'; //다양한 형태의 인수를 받아서 조건부로 클래스 이름을 설정할 수 있어요
import { BiChevronLeft } from "react-icons/bi";


const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    overflow: auto;
`;

const Content = styled.div`
    width:100%;
    max-width:390px;
    min-height:100vh;
    overflow:auto;
    box-shadow:0px 0px 32px #0000002f;
    background-color: #ffffff;
    //padding-bottom: 90px; //footer높이만큼 패딩 줘야함. 그래야 내용 다보임.
`;

const Header = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:40px;
    padding:16px 20px;
    margin-bottom: 20px;
    background-color: #FFF6F6;
    position: relative; /* 자식 요소들을 절대 위치로 설정할 수 있도록 상대 위치로 설정 */
`;

const BackButton = styled.button`
    width: 54px;
    height: 54px;
    border: none;
    color: #B8B6B4;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute; /* 절대 위치 설정 */
    left: 1px; /* 왼쪽에서 1px 떨어진 위치에 설정 */
    cursor: pointer;
    & > svg {
        width: 100%;
        height: 100%;
    }
    &.hidden {
        visibility: hidden; //hidden 클래스가 적용되면 visibility를 hidden(공간차지O)으로 설정
    }
`;

const Footer = styled.div`
    position: fixed;
    max-width: 390px;
    width: 100%;
    height: 90px;
    bottom: 0;
    border-radius: 10px 10px 0 0;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    z-index: 1;
    text-align: center;
    &.hidden {
        display: none;
    }
`;

const LOGO_DEFAULT = true;
const FOOTER_DEFAULT = true;
const BACKWARD_DEFAULT = '/';

const Mobile=()=>{
    const location = useLocation();
    const navigate = useNavigate();

    const [showLogo, setLogo] = useState(LOGO_DEFAULT); //useEffect에서 route.logo 값을 확인하여 showLogo 상태를 업데이트
    const [showFooter, setFooter] = useState(FOOTER_DEFAULT); //useEffect에서 route.footer 값을 확인하여 showFooter 상태를 업데이트
    const [backwardUrl, setBackwardUrl] = useState(BACKWARD_DEFAULT);
    useEffect(() => {
        const result = matchRoutes(routes, location.pathname);
        if (result.length < 1) {
            return;
        }
        const { route } = result[0];
        if (route) {
            setLogo(route.logo ?? LOGO_DEFAULT);
            setFooter(route.footer ?? FOOTER_DEFAULT);
            setBackwardUrl(route.previous ?? BACKWARD_DEFAULT);
        } else {
            setLogo(LOGO_DEFAULT);
            setFooter(FOOTER_DEFAULT);
            setBackwardUrl(BACKWARD_DEFAULT);
        }
    }, [location]);
    const onBackButtonClick = (event) => {
        navigate(backwardUrl);
    };
    return(
        <>
            <Container>
                <Content>
                    <Header>
                        <BackButton
                            onClick={onBackButtonClick}
                            className={classNames({
                                hidden: backwardUrl === false,
                            })}
                        >
                            <BiChevronLeft />
                        </BackButton>
                        헤더
                    </Header>
                    <Outlet /> 
                </Content>
                <Footer className={classNames({ hidden: !showFooter })}>
                    푸터 <br/>
                    Copyright © Hyunah. All rights reserved.
                </Footer>
            </Container>
        </>
    )
};

export default Mobile;