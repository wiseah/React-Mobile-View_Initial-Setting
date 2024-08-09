import styled from 'styled-components';

import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import classNames from 'classnames'; 

const Button = styled.button`
    display: flex;
    width: 100%;
    height: 50px;
    padding: 0 15px;
    border: none;
    border-radius: 8px;
    background-color: #E6E6FA; //버튼 배경색
    color: #000000; //글자색
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 500;

    transition: background-color 0.1s;

    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
`;

const Icon = styled.p`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;

    &.visible {
        visibility: visible;
    }

    & > svg {
        width: 24px;
        height: 24px;
    }
`;

const BlockButton = ({ text, leftArrow, rightArrow, onClick, ...props }) => {
    return (
        <Button onClick={onClick} {...props}>
            <Icon className={classNames({ visible: leftArrow })}>
                <IoIosArrowBack />
            </Icon>
            {text}
            <Icon className={classNames({ visible: rightArrow })}>
                <IoIosArrowForward />
            </Icon>
        </Button>
    );
};

export default BlockButton;
