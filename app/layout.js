import './globals.css';import Navbar from '@/components/Navbar';import Footer from '@/components/Footer';import Fx from '@/components/Fx';import {CartProvider} from '@/lib/cart';
export const metadata={title:'CUP2EAT – Eat Your Drink!',description:'100% edible waffle cups. A delicious & sustainable innovation.'};
export default function Root({children}){return <html lang="en"><head>
<link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Poppins:wght@400;500;600&family=Dancing+Script:wght@700&display=swap" rel="stylesheet"/></head><body>
<svg width="0" height="0" style={{position:'absolute'}} aria-hidden="true"><defs>
<pattern id="wf" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="14" height="14" fill="#e3a65b"/><path d="M0 0H14M0 0V14" stroke="#b8742f" strokeWidth="2.2" opacity=".75"/></pattern>
<symbol id="cup" viewBox="0 0 120 160"><path d="M12 34 L108 34 L96 148 Q60 158 24 148Z" fill="url(#wf)"/><path d="M16 60 Q60 74 104 60 L100 110 Q60 124 20 110Z" fill="#fff" opacity=".07"/><ellipse cx="60" cy="33" rx="52" ry="9" fill="var(--drink,#5a3418)"/><path d="M6 30 Q60 46 114 30 L113 40 Q60 56 7 40Z" fill="var(--rim,#4a2c17)"/></symbol></defs></svg>
<CartProvider><Navbar/>{children}<Footer/><Fx/></CartProvider></body></html>}
