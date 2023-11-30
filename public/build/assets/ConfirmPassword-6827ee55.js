import{W as d,r as c,j as e,F as p,a as s,b as f}from"./app-50127253.js";import{I as u}from"./InputError-2b9a135c.js";import{I as h}from"./InputLabel-cc2f457d.js";import{P as w}from"./PrimaryButton-56a0c82f.js";import{T as x}from"./TextInput-01542f12.js";function g(){const{data:r,setData:t,post:l,processing:i,errors:o,reset:m}=d({password:""});c.useEffect(()=>()=>{m("password")},[]);const n=a=>{t(a.target.name,a.target.value)};return e(p,{children:[s(f,{title:"Confirm Password"}),e("div",{className:"flex",children:[e("div",{className:"w-full sm:w-1/2 md:w-1/4 hidden sm:flex border-r border-gray-300 p-8 py-16  sm:flex-col sm:justify-between",children:[s("div",{children:s("img",{src:"/app/Logo Title X.png",alt:"",width:"180px"})}),s("div",{children:s("img",{src:"/app/login.svg",alt:"",width:"120%",className:"mx-auto"})}),e("div",{children:[s("h6",{className:"text-xl font-semibold text-slate-700",children:"RANDA"}),s("p",{className:"text-slate-500",children:"Optimizing Business Processes with Point of Sales (POS) Application"})]})]}),s("div",{className:"w-full sm:w-3/4",children:e("form",{onSubmit:a=>{a.preventDefault(),l(route("password.confirm"))},className:"w-full px-4 sm:w-1/3 mx-auto h-screen flex flex-col justify-center",children:[e("div",{className:"mb-8",children:[s("h6",{className:"text-3xl text-slate-700",children:"Confirm Password"}),s("p",{className:"text-slate-500",children:"This is a secure area of the application. Please confirm your password before continuing."})]}),e("div",{className:"mt-4",children:[s(h,{htmlFor:"password",value:"Password"}),s(x,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",isFocused:!0,onChange:n}),s(u,{message:o.password,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(w,{className:"ml-4",disabled:i,children:"Confirm"})})]})})]})]})}g.layout=r=>s(Guest,{children:r});export{g as default};
