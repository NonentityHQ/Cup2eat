'use client';
import Link from 'next/link';import {Heart,Star} from 'lucide-react';import {useCart} from '@/lib/cart';import {base,inr} from '@/lib/data';
export default function Card({p,i}){const {add}=useCart();const b=base(p);
return <div className="pc" style={{animationDelay:i*.07+'s'}}><Link href={`/cups/${p.slug}`}><div className="im" style={{background:p.bg}}><span className="hrt"><Heart className="ic"/></span><img src={p.img} alt={p.name}/></div></Link>
<div className="bd"><h3>{p.name}</h3><small>{b.n} Cups{p.fixed?'':' (Wholesale)'}</small><div className="pr"><b>{inr(b.price)}</b><button className="btn sm" onClick={()=>add({id:p.slug+b.n,slug:p.slug,name:p.name,pack:b.n,price:b.price,img:p.img})}>Add to Cart</button></div><small style={{color:'#f0a91c',display:'flex',alignItems:'center',gap:4}}><Star className="ic" fill="currentColor"/> {p.rating} ({p.rev})</small></div></div>}
