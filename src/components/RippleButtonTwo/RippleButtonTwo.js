// import React, { useEffect } from 'react';
// import './RippleButtonTwo.css';

// const RippleButtonTwo = (type, id, className, ripple, onClick, style, children) => {

//     useEffect(() => {

//         const btnRipple = document.querySelectorAll('.btn-ripple');

//         btnRipple.forEach((btn) => {
//             btn.onclick = ({ pageX, pageY, currentTarget }) => {

//                 let x =
//                     ((pageX - currentTarget.offsetLeft) * 100) / currentTarget.offsetWidth;

//                 let y =
//                     ((pageY - currentTarget.offsetTop) * 100) / currentTarget.offsetHeight;

//                 const ripple = document.createElement('span');

//                 const rippleColor = btn.dataset.ripple || "#fff";
//                 ripple.classList.add("ripple-effect");
//                 // something is wrong
//                 ripple.style.background = rippleColor;

//                 btn.appendChild(ripple);

//                 ripple.style.left = x + "%";
//                 ripple.style.top = y + "%";

//                 setTimeout(() => {
//                     ripple.remove();
//                 }, 600)
//             };
//         });

//     }, [])

//     return (
//         <div className='container'>
//             <button className={`btn btn-ripple ${className} ? className : ""`}>Button</button>
//         </div>
//     );
// };

// export default RippleButtonTwo;