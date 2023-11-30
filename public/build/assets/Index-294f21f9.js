import{q as G,j as a,F as T,a as e,r as o,W as H,b as J,y as K}from"./app-50127253.js";import{A as y}from"./Actionbutton-61e1fa01.js";import{I as R}from"./InputLabel-cc2f457d.js";import{E as S,I as X,a as Z,M as ee}from"./Toast-5e3f78b2.js";import{T as p}from"./TextInput-01542f12.js";import{C as te}from"./Container-58708669.js";import{M as ae}from"./Modal-ca85eed3.js";import{P as se}from"./Pagination-a95b02de.js";import{P as C}from"./PrimaryButton-56a0c82f.js";import{S as A}from"./SecondaryButton-bc962aa5.js";import{T as s}from"./Table-e4273544.js";import{A as re}from"./App-f48d50a9.js";import{_ as N}from"./index-f4d5d2b2.js";import{A as le}from"./ActionLink-e34be557.js";import{I as ne}from"./IconEdit-fda570f0.js";import"./createReactComponent-f77338bd.js";import"./transition-42c9a528.js";import"./keyboard-038d4531.js";function oe({data:r,setData:f}){const{errors:l}=G().props,c=d=>{f(d.target.name,d.target.value)};return a(T,{children:[a("div",{className:"mb-4",children:[e(R,{htmlFor:"name",value:"Number"}),e(p,{name:"name",id:"name",className:"w-full",onChange:c,value:r.name}),l.name?e(S,{className:"",value:l.name}):null]}),e("div",{className:"mb-4",children:a("div",{className:"flex items-center gap-4",children:[a("div",{className:`w-1/2 flex items-center pl-4 border ${r.status==="1"?"border-orange-500":"border-gray-300"} rounded`,children:[e(p,{id:"bordered-radio-1",type:"radio",onChange:c,checked:r.status==="1",value:"1",name:"status",className:"w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500"}),e("label",{htmlFor:"bordered-radio-1",className:"w-full py-2 ml-2 font-medium text-slate-500",children:"Active"})]}),a("div",{className:`w-1/2 flex items-center pl-4 border ${r.status==="0"?"border-orange-500":"border-gray-300"} rounded`,children:[e(p,{id:"bordered-radio-2",type:"radio",onChange:c,checked:r.status==="0",value:"0",name:"status",className:"w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500"}),e("label",{htmlFor:"bordered-radio-2",className:"w-full py-2 ml-2 font-medium text-slate-500",children:"Non Active"})]}),l.name?e(S,{className:"",value:l.name}):null]})})]})}function ce({total_tables:r,...f}){const{data:l,meta:c,links:d}=f.tables,[I,k]=o.useState(""),{delete:M,post:j,put:F,data:b,setData:m}=H({name:""});let[D,i]=o.useState(!1),[P,u]=o.useState(!1);const[z,E]=o.useState(""),[$,B]=o.useState(""),[g,U]=o.useState(""),[x,h]=o.useState("");function v(t,n){if(i(!0),E("Table"),U(n),h(t),t){const w=l.find(Y=>Y.slug===t);h(t),m({name:w.name,status:w.status})}else h(""),m({name:"",status:""})}function L(t,n){u(!0),B(n),h(t)}function O(){i(!1)}function Q(){u(!1)}const _=t=>{t.preventDefault(),j(route("admin.table.index"),{data:b,onSuccess:()=>{N.success("Table has been created!"),i(!1),m({name:"",status:""})}})},q=t=>n=>{n.preventDefault(),F(route("admin.table.update",t),{...b,onSuccess:()=>{N.success("Table has been updated!"),i(!1)}})},V=t=>{M(route("admin.table.destroy",t),{onSuccess:()=>{N.success("Table has been deleted!"),u(!1)}})},W=t=>{t.preventDefault(),k(t.target.value),K.get("/admin/setting/table",{search:t.target.value},{preserveState:!0})};return a(T,{children:[e(J,{title:"Setting"}),a(te,{children:[e("h3",{className:"text-2xl mt-10 mb-4 font-semibold text-slate-700",children:"Tables"}),a("div",{className:"flex justify-between gap-2 w-full item-center my-2",children:[a("div",{className:"flex gap-2",children:[e(le,{href:route("admin.dashboard")}),e(y,{onClick:()=>v("","create"),type:"button",children:e(X,{size:18})})]}),e(p,{type:"search",className:"w-3/4 md:w-1/4",placeholder:"Search category..",defaultValue:I,onChange:W})]}),a(s,{children:[e(s.Thead,{children:a("tr",{children:[e(s.Th,{children:"#"}),e(s.Th,{children:"Number"}),e(s.Th,{children:"Status"}),e(s.Th,{children:"Action"})]})}),e(s.Tbody,{children:l.length>0?e(T,{children:l.map((t,n)=>a("tr",{className:"bg-white border-b text-gray-500",children:[e(s.Td,{className:"w-5",children:c.from+n}),e(s.Td,{children:t.name.toUpperCase()}),e(s.Td,{className:"text-left",children:e("span",{className:`text-xs p-2 ${t.status==1?"bg-emerald-500 text-white rounded":"bg-red-500 text-white rounded"}`,children:t.status==1?"Active":"Non Active"})}),e(s.Td,{className:"w-10",children:a("div",{className:"flex flex-nowrap gap-2",children:[e(y,{className:"w-8 h-8 bg-yellow-400",type:"button",onClick:()=>v(t.slug,"edit"),children:e(ne,{size:18})}),e(y,{className:"w-8 h-8 bg-red-500",type:"button",onClick:()=>L(t.slug,"Table "+t.name),children:e(Z,{size:18})})]})})]},n))}):e("tr",{className:"bg-white border-b text-gray-500 text-center",children:e(s.Td,{colSpan:"4",children:"No data"})})})]}),l.length>0&&a("div",{className:"flex w-full justify-between items-center",children:[e(se,{meta:c,links:d}),a("p",{className:"text-sm text-slate-500 mt-10",children:["Total Tables: ",e("span",{className:"font-bold",children:r})," "]})]}),e(ae,{isOpen:D,onClose:()=>i(!1),size:"1/3",type:g,title:z,children:a("form",{onSubmit:g=="create"?_:q(x),className:"mt-6",children:[e(oe,{data:b,setData:m}),a("div",{className:"flex justify-end gap-2",children:[e(A,{onClick:()=>O(),children:"Cancel"}),e(C,{type:"submit",children:g=="create"?"Create":"Update"})]})]})}),e(ee,{isToast:P,onClose:()=>u(!1),title:$,children:a("div",{className:"flex justify-end gap-2 justify-center",children:[e(A,{onClick:()=>Q(),children:"No"}),e(C,{onClick:()=>V(x),children:"Yes"})]})})]})]})}ce.layout=r=>e(re,{children:r});export{ce as default};
