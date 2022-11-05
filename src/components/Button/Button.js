import React, { useEffect, useRef } from 'react';
import './Button.css';

const Button = (type, id, className, ripple, onClick, style, children) => {

    const btnRef = useRef();

    useEffect(() => {

        // const btnRipple = document.querySelectorAll('.btn-ripple');

        // console.log(btnRef.current)

        // btnRef.forEach((btn) => {

        const btn = btnRef.current;
        btn.onclick = ({ pageX, pageY, currentTarget }) => {

            let x =
                ((pageX - currentTarget.offsetLeft) * 100) / currentTarget.offsetWidth;

            let y =
                ((pageY - currentTarget.offsetTop) * 100) / currentTarget.offsetHeight;

            const ripple = document.createElement('span');

            const rippleColor = btn.dataset.ripple || "#fff";
            ripple.classList.add("ripple-effect");
            // something is wrong
            ripple.style.background = rippleColor;

            btn.appendChild(ripple);

            ripple.style.left = x + "%";
            ripple.style.top = y + "%";

            setTimeout(() => {
                ripple.remove();
            }, 600)
        };
        // });

    }, [])

    return (
        <div className='container'>
            <button ref={btnRef} className={`btn btn-ripple ${className} ? className : ""`}>Button</button>
        </div>
    );
};

export default Button;