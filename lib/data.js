export const PACKS=[{n:100,price:1149},{n:200,price:2249},{n:396,price:3999}];
const d='Delicious edible cup, perfect for tea, coffee, cold drinks, ice cream and desserts.';
export const P=[
{slug:'chocolate-edible-cup',img:'/images/chocolate.jpg',big:'/images/big-chocolate.jpg',name:'Chocolate Edible Cup',cat:'Chocolate',rating:4.8,rev:128,rim:'#3a2113',drink:'#2a170c',bg:'#f1ddc4',desc:'Delicious chocolate-flavoured edible cups perfect for tea, coffee, cold drinks, ice cream and desserts.'},
{slug:'vanilla-edible-cup',img:'/images/vanilla.jpg',name:'Vanilla Edible Cup',cat:'Vanilla',rating:4.7,rev:96,rim:'#e8b45c',drink:'#f4e2b8',bg:'#f5e6c9',desc:d},
{slug:'elaichi-edible-cup',img:'/images/elaichi.jpg',name:'Elaichi Edible Cup',cat:'Elaichi',rating:4.8,rev:110,rim:'#c9a93a',drink:'#e8d98a',bg:'#d9dfb6',desc:d},
{slug:'mixed-flavour-pack',img:'/images/p-mixed.jpg',name:'Mixed Flavour Pack',cat:'Mixed',rating:4.8,rev:75,rim:'#8b5a33',drink:'#5a3418',bg:'#ead2b2',desc:d,fixed:{n:396,price:4199}},
{slug:'small-pack',img:'/images/p-small.jpg',name:'Small Pack',cat:'Vanilla',rating:4.6,rev:52,rim:'#e8b45c',drink:'#f4e2b8',bg:'#f2e4cc',desc:d,fixed:{n:100,price:1149}},
{slug:'value-pack',img:'/images/p-value.jpg',name:'Value Pack',cat:'Chocolate',rating:4.7,rev:61,rim:'#3a2113',drink:'#2a170c',bg:'#ecd5bb',desc:d,fixed:{n:200,price:2249}}];
export const base=p=>p.fixed||PACKS[2];
export const inr=n=>'₹'+n.toLocaleString('en-IN');
