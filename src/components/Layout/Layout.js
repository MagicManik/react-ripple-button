import React from 'react';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <main className='main'>
            <section className='section'>
                {children}
            </section>
        </main>
    );
};

export default Layout;