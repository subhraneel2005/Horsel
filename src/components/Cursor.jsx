import React, { useEffect } from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import { TweenMax } from 'gsap';

import horseImage from '../../public/horse1.jpg'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #161616;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Cursor = styled.div`
  position: absolute;
  background: white;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  z-index: 1;
  transition: 0.5s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform,
    0.2s cubic-bezier(0.75, -1.27, 0.3, 2.33) opacity;
  user-select: none;
  pointer-events: none;
  transform: scale(0.8);

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    background-image: url('http://mirkozeppieri.emanuelepapale.com/wp-content/uploads/2018/07/project-hover-cursor.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 100%;
    opacity: 0;
  }

  &.active {
    opacity: 1;
    transform: scale(12);

    &::before {
      opacity: 1;
    }
  }
`;

const CursorFollower = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  width: 40px;
  height: 40px;
  border-radius: 100%;
  z-index: 1;
  transition: 0.6s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform,
    0.4s cubic-bezier(0.75, -1.27, 0.3, 2.33) opacity;
  user-select: none;
  pointer-events: none;
  transform: translate(4px, 4px);

  &.active {
    opacity: 0.3;
    transform: scale(0);
  }
`;

const PortfolioThumb = styled.div`
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.25, 1, 0.3, 1);

  img {
    max-width: 360px;
    opacity: 0.4;
    transition: all 0.5s cubic-bezier(0.25, 1, 0.3, 1);
    transform-origin: 90% center;
  }
`;

const PortfolioItem = styled.div`
  &:hover ${PortfolioThumb} {
    transform: translateX(-1.75rem);
  }

  &:hover ${PortfolioThumb} img {
    opacity: 0.8;
    transform: scale(1.2);
  }
`;

const CustomCursor = () => {
    useEffect(() => {
        const cursor = $('.cursor');
        const follower = $('.cursor-follower');
        let posX = 0,
            posY = 0,
            mouseX = 0,
            mouseY = 0;

        TweenMax.to({}, 0.016, {
            repeat: -1,
            onRepeat: function () {
                posX += (mouseX - posX) / 9;
                posY += (mouseY - posY) / 9;
                TweenMax.set(follower, {
                    css: {
                        left: posX - 20,
                        top: posY - 20,
                    },
                });
                TweenMax.set(cursor, {
                    css: {
                        left: mouseX,
                        top: mouseY,
                    },
                });
            },
        });

        $(document).on('mousemove', function (e) {
            mouseX = e.pageX;
            mouseY = e.pageY;
        });

        $('.portfolio-item img').on('mouseenter', function () {
            cursor.addClass('active');
            follower.addClass('active');
        });

        $('.portfolio-item img').on('mouseleave', function () {
            cursor.removeClass('active');
            follower.removeClass('active');
        });
    }, []);

    return (
        <>
            <Cursor className="cursor" />
            <CursorFollower className="cursor-follower" />
            <Wrapper>
                <PortfolioItem className="portfolio-item">
                    <PortfolioThumb className="portfolio-thumb">
                        <img src={horseImage} alt="Portfolio" />
                    </PortfolioThumb>
                </PortfolioItem>
            </Wrapper>
        </>
    );
};

export default CustomCursor;
