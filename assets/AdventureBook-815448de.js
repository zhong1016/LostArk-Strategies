import{u,a as n,j as e,r as d}from"./index-ddaf491a.js";import{u as m,T as o}from"./query-8057e0d4.js";const x=()=>{const{api:r,get:s}=m();return{getAdventureBook:async()=>(await s(r.adventureBook)).map(l=>(l.key=window.crypto.randomUUID(),l))}},{Column:a}=o,f=({adventureBookData:r})=>{const{loading:s}=u(t=>t.loading);return n(o,{dataSource:r,pagination:!1,className:"hidden xl:block w-full",loading:s,children:[e(a,{title:"",dataIndex:"adventureBook",width:120},"adventureBook"),e(a,{title:"10%",dataIndex:"tenPercent",width:1},"tenPercent"),e(a,{title:"20%",dataIndex:"twentyPercent",width:1},"twentyPercent"),e(a,{title:"30%",dataIndex:"thirtyPercent"},"thirtyPercent"),e(a,{title:"40%",dataIndex:"fortyPercent"},"fortyPercent"),e(a,{title:"50%",dataIndex:"fiftyPercent"},"fiftyPercent"),e(a,{title:"60%",dataIndex:"sixtyPercent"},"sixtyPercent"),e(a,{title:"70%",dataIndex:"seventyPercent"},"seventyPercent"),e(a,{title:"80%",dataIndex:"eightyPercent"},"eightyPercent"),e(a,{title:"90%",dataIndex:"ninetyPercent"},"ninetyPercent")]})},{Column:c}=o,y=({adventureBookData:r})=>{const{loading:s}=u(t=>t.loading);return n(o,{dataSource:r,pagination:!1,className:"xl:hidden w-full",loading:s,children:[e(c,{title:"",dataIndex:"adventureBook"},"adventureBook"),e(c,{title:"百分比",render:t=>n("div",{children:[n("p",{className:"text-base font-semibold",children:["⬩ 10% : ",t.tenPercent]}),n("p",{className:"text-base font-semibold",children:["⬩ 20% : ",t.twentyPercent]}),n("p",{className:"text-base font-semibold",children:["⬩ 30% : ",t.thirtyPercent]}),n("p",{className:"text-base font-semibold",children:["⬩ 40% : ",t.fortyPercent]}),n("p",{className:"text-base font-semibold",children:["⬩ 50% : ",t.fiftyPercent]}),n("p",{className:"text-base font-semibold",children:["⬩ 60% : ",t.sixtyPercent]}),n("p",{className:"text-base font-semibold",children:["⬩ 70% : ",t.seventyPercent]}),n("p",{className:"text-base font-semibold",children:["⬩ 80% : ",t.eightyPercent]}),n("p",{className:"text-base font-semibold",children:["⬩ 90% : ",t.ninetyPercent]})]})})]})},h=()=>{const{getAdventureBook:r}=x(),[s,t]=d.useState([]);d.useEffect(()=>{i()},[]);const i=async()=>{let l=await r();t(l)};return n("div",{className:"w-full",children:[e("div",{className:" flex flex-wrap",children:e("div",{className:"flex-none w-1/2",children:e("div",{className:"font-bold m-4 text-xl border-l-4 border-red-500",children:e("span",{className:"px-2",children:"冒險之書"})})})}),e(f,{adventureBookData:s}),e(y,{adventureBookData:s})]})},v=h;export{v as default};
