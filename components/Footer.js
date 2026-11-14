import Link from 'next/link';import {MessageCircle} from 'lucide-react';
const cols=[['Quick Links',['Home','Our Cups','How It Works','Sustainability']],['Company',['About Us','For Business','Contact']],['Customer Support',['FAQs','Track Order','Returns & Refunds','Invoice Download']],['Business Enquiries',['Bulk Orders','Café & Restaurant','Corporate & Events','Partner With Us']]];
export default function Footer(){return <><footer id="foot"><div className="w"><div className="fg">
<div><div className="logo"><div className="lg">CUP<br/>2<br/>EAT</div></div><p className="sc" style={{fontSize:24,marginTop:8}}>Eat Your Drink</p></div>
{cols.map(([h,l])=><div key={h}><h4>{h}</h4><ul>{l.map(x=><li key={x}>{x}</li>)}</ul></div>)}
<div><h4>Stay Updated</h4><p>Get updates on new flavours, offers and more.</p><input placeholder="Enter your email" aria-label="Email"/><button className="btn y" style={{padding:'8px 18px'}}>Subscribe</button></div></div>
<div className="cp"><span>© 2026 CUP2EAT. All rights reserved.</span><span className="by">Built with Nonentity</span><span>Privacy Policy | Terms & Conditions</span></div></div></footer>
<Link className="wa" href="#" aria-label="WhatsApp"><MessageCircle className="ic"/></Link></>}
