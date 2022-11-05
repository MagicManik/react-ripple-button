import React, { useRef, useEffect } from 'react';
import './RippleButton.css';

const RippleButton = () => {

    const buttonRef = useRef();

    useEffect(() => {
        const applyContainerProperties = () => {
            buttonRef.current.classList.add("effect-container");
        }

        const applyStyle = (e) => {

            const { offsetX, offsetY } = e;
            const { style } = buttonRef.current;
            const sizeOffset = 50;

            style.setProperty("--effect-top", `${offsetY - sizeOffset}px`);
            style.setProperty("--effect-left", `${offsetX - sizeOffset}px`);
        }

        const onClick = (e) => {
            buttonRef.current.classList.remove("active");
            applyStyle(e);
            buttonRef.current.classList.add("active");
        }
        applyContainerProperties();

        // add the event listener on mount
        buttonRef.current.addEventListener("mouseup", onClick);

        // needed for referencing the ref in the return function
        const clearRef = buttonRef.current;

        return () => {
            clearRef.removeEventListener("mouseup", onClick)
        }
    }, [])

    return (
        <div className='wrapper'>
            <button ref={buttonRef}>Ripple Button</button>
        </div>
    );
};

export default RippleButton;