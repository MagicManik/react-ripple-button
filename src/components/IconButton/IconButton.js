import React, { useEffect, useRef } from 'react';
import './IconButton.css';

const IconButton = (type, id, className, ripple, onClick, style, children) => {

    const iconBtnRef = useRef();

    useEffect(() => {

        // const btnRipple = document.querySelectorAll('.icon-btn-ripple');

        // console.log(iconBtnRef.current)

        // iconBtnRef.forEach((btn) => {

        const iconBtn = iconBtnRef.current;
        iconBtn.onclick = ({ pageX, pageY, currentTarget }) => {

            let x =
                ((pageX - currentTarget.offsetLeft) * 100) / currentTarget.offsetWidth;

            let y =
                ((pageY - currentTarget.offsetTop) * 100) / currentTarget.offsetHeight;

            const iconRipple = document.createElement('span');

            const rippleColor = iconBtn.dataset.ripple || "#fff";
            iconRipple.classList.add("icon-ripple-effect");
            // something is wrong
            iconRipple.style.background = rippleColor;

            iconBtn.appendChild(iconRipple);

            iconRipple.style.left = x + "%";
            iconRipple.style.top = y + "%";

            setTimeout(() => {
                iconRipple.remove();
            }, 600)
        };
        // });

    }, [])

    return (
        <div className='container'>
            <button ref={iconBtnRef} className={`icon-btn icon-btn-ripple ${className} ? className : ""`}>+</button>
        </div>
    );
};

export default IconButton;