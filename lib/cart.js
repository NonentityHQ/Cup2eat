'use client';
import {createContext,useContext,useEffect,useState} from 'react';
const C=createContext(null);
export const useCart=()=>useContext(C);
export function CartProvider({children}){
 const [items,set]=useState([]);
 useEffect(()=>{try{set(JSON.parse(localStorage.getItem('c2e')||'[]'))}catch(e){}},[]);
 useEffect(()=>{try{localStorage.setItem('c2e',JSON.stringify(items))}catch(e){}},[items]);
 const add=(it,q=1)=>set(a=>a.find(x=>x.id===it.id)?a.map(x=>x.id===it.id?{...x,qty:x.qty+q}:x):[...a,{...it,qty:q}]);
 const setQty=(id,q)=>set(a=>a.map(x=>x.id===id?{...x,qty:Math.max(1,q)}:x));
 const remove=id=>set(a=>a.filter(x=>x.id!==id));
 const clear=()=>set([]);
 const count=items.reduce((s,x)=>s+x.qty,0), total=items.reduce((s,x)=>s+x.qty*x.price,0);
 return <C.Provider value={{items,add,setQty,remove,clear,count,total}}>{children}</C.Provider>}
