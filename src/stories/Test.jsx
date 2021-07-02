import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from './assets/default_img.jpg'
import './test.css';

export const Test = ({ active, size, contentImg, title, body, ...props }) => {
    const mode = active ? 'active' : null;

    return (
        <div className={`content ${size} ${mode}`}>
            <img src={`${contentImg}`} alt={title} />
            <div className="titleArea">
                <h2 className="title">{title}</h2>
                <p>{body}</p>
            </div>
        </div>
    )
}

Test.propTypes = {
    active: PropTypes.bool,
    contentImg: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    title: PropTypes.string,
    body: PropTypes.string,
};

Test.defaultProps = {
    active: false,
    size: 'medium',
    contentImg: defaultImg,
    title: '기본 게시글 컴포넌트',
    body: '기본 게시글 바디입니다.'
};