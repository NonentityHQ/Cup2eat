'use client';
import {useEffect} from 'react';import {usePathname} from 'next/navigation';
export default function Fx(){const p=usePathname();
useEffect(()=>{
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
 document.querySelectorAll('.rv').forEach(e=>io.observe(e));
 const sc=()=>{const y=scrollY;document.getElementById('nav')?.classList.toggle('s',y>10);document.querySelectorAll('[data-p]').forEach(e=>e.style.translate='0 '+y*parseFloat(e.dataset.p)+'px')};
 addEventListener('scroll',sc,{passive:true});sc();
 const mm=e=>{const c=e.target.closest?.('.tilt');if(!c)return;const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transition='box-shadow .3s';c.style.transform=`perspective(800px) rotateY(${x*10}deg) rotateX(${-y*10}deg) translateY(-6px)`};
 const ml=e=>{if(e.target.classList?.contains('tilt')){e.target.style.transition='transform .5s,box-shadow .3s';e.target.style.transform=''}};
 document.addEventListener('mousemove',mm);document.addEventListener('mouseout',ml);
 return()=>{io.disconnect();removeEventListener('scroll',sc);document.removeEventListener('mousemove',mm);document.removeEventListener('mouseout',ml)}
},[p]);return null}
