import { FC } from 'react';


import { ActiveLink } from './ActiveLink';

// le aplico los estilos con este archivo
import styles from './Navbar.module.css';


const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];



export const Navbar: FC = () => {
    return (
        <nav className={styles['menu-container']}>
            {
                // hago un map
                // menuItems.map(item => (
                // podemos hacer desestructuracion de ese objeto
                menuItems.map(({ text, href }) => (
                    // regreso un objeto
                    // para que no brinque dando error le paso el key
                    // key={href}
                    <ActiveLink key={href} text={text} href={href} />
                ))
            }


            {/* 
                <ActiveLink text="Home" href="/" />
                <ActiveLink text="About" href="/about" />
                <ActiveLink text="Contact" href="/contact" />
                <ActiveLink text="Pricing" href="/pricing" /> 
            */}
        </nav>
    );
}
