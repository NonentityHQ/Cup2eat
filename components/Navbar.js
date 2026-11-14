'use client';
import Link from 'next/link';import {User,ShoppingCart,Menu,ArrowRight} from 'lucide-react';import {useState} from 'react';import {useCart} from '@/lib/cart';
export default function Navbar(){const [o,setO]=useState(false);const {count}=useCart();
return <nav id="nav"><div className="w nb">
<Link href="/" className="logo"><div className="lg">CUP<br/>2<br/>EAT</div><span className="sc" style={{fontSize:26,color:'var(--br)'}}>Eat Your Drink</span></Link>
<div className={'nl'+(o?' open':'')} onClick={()=>setO(false)}><Link href="/">Home</Link><Link href="/cups">Our Cups</Link><Link href="/#how">How It Works</Link><Link href="/#sus">Sustainability</Link><Link href="/#biz">For Business</Link><Link href="/#foot">Contact</Link></div>
<Link href="/login" className="cart" aria-label="Account"><User className="ic"/></Link>
<Link href="/cart" className="cart" aria-label="Cart"><ShoppingCart className="ic"/><b key={count} style={{animation:'bump .5s'}}>{count}</b></Link>
<Link className="btn" href="/cups">Order Now <ArrowRight className="ic"/></Link>
<button className="bg" onClick={()=>setO(!o)} aria-label="Menu"><Menu className="ic"/></button></div></nav>}
