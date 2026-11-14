import {notFound} from 'next/navigation';import ProductView from '@/components/ProductView';import {P} from '@/lib/data';
export const generateStaticParams=()=>P.map(p=>({slug:p.slug}));
export default function Page({params}){const p=P.find(x=>x.slug===params.slug);if(!p)notFound();return <ProductView p={p}/>}
