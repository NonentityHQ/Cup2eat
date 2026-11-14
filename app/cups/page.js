'use client';
import {useState} from 'react';import Link from 'next/link';import Card from '@/components/Card';import {P,base,inr} from '@/lib/data';
export default function Cups(){const [cat,setCat]=useState('All');const [max,setMax]=useState(5000);
const list=P.filter(p=>(cat==='All'||p.cat===cat)&&base(p).price<=max);
return <main className="pg"><div className="w"><h1 style={{fontSize:34}}>Our Cups</h1><p className="crumb">Explore our range of edible cups in delicious flavours</p>
<div className="shop"><aside className="side"><h4 style={{marginTop:0}}>Categories</h4>
{['All','Chocolate','Vanilla','Elaichi'].map(c=><label key={c}><input type="radio" name="c" checked={cat===c} onChange={()=>setCat(c)}/>{c==='All'?`All Cups (${P.length})`:c}</label>)}
<h4>Price Range</h4><input type="range" min="1000" max="5000" step="100" value={max} onChange={e=>setMax(+e.target.value)} style={{width:'100%',accentColor:'var(--g)'}}/><div className="row"><span>₹1,000</span><span>{inr(max)}</span></div>
<button className="btn o sm" onClick={()=>{setCat('All');setMax(5000)}}>Clear Filters</button></aside>
<div className="pg3" key={cat+max}>{list.map((p,i)=><Card key={p.slug} p={p} i={i}/>)}{!list.length&&<p>No cups match these filters.</p>}</div></div></div></main>}
