import React, { useEffect } from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import { TweenMax } from 'gsap';

const Cursor = styled.div`
  position: absolute;
  background: #FFD299;
  border: 0.5px solid black;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  z-index: 1;
  transition: 0.5s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform,
    0.2s cubic-bezier(0.75, -1.27, 0.3, 2.33) opacity;
  user-select: none;
  pointer-events: none;
  transform: scale(1);
  }

  &.active {
    opacity: 1;
    transform: scale(8);
    background: #FFD299;
    border: none;

    &::before {
      opacity: 0.1;
    }
  }
`;


const CustomCursor = () => {
  useEffect(() => {
    const cursor = $('.cursor');
    let posX = 0,
      posY = 0,
      mouseX = 0,
      mouseY = 0;

    TweenMax.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;
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

    $('img').on('mouseenter', function () {
      cursor.addClass('active');
    });

    $('img').on('mouseleave', function () {
      cursor.removeClass('active');
    });
  }, []);

  return (
    <>
      <Cursor className="cursor">
        <p className=' hidden'>Book Now</p>
      </Cursor>
    </>
  );
};

export default CustomCursor;
