import React, { useRef, useEffect } from 'react';
import './IconButtonTwo.css';

const IconButtonTwo = () => {

    const iconButtonRefTwo = useRef();

    useEffect(() => {
        const applyContainerProperties = () => {
            iconButtonRefTwo.current.classList.add("icon-effect-container");
        }

        const applyStyle = (e) => {

            const { offsetX, offsetY } = e;
            const { style } = iconButtonRefTwo.current;
            const sizeOffset = 50;

            style.setProperty("--effect-top", `${offsetY - sizeOffset}px`);
            style.setProperty("--effect-left", `${offsetX - sizeOffset}px`);
        }

        const onClick = (e) => {
            iconButtonRefTwo.current.classList.remove("active");
            applyStyle(e);
            iconButtonRefTwo.current.classList.add("active");
        }
        applyContainerProperties();

        // add the event listener on mount
        iconButtonRefTwo.current.addEventListener("mouseup", onClick);

        // needed for referencing the ref in the return function
        const clearRef = iconButtonRefTwo.current;

        return () => {
            clearRef.removeEventListener("mouseup", onClick)
        }
    }, [])

    return (
        <div>
            <button className='icon-btn' ref={iconButtonRefTwo}>+</button>
        </div>
    );
};

export default IconButtonTwo;