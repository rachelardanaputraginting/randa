import{W as f,r as h,j as e,F as x,a as s,b as N}from"./app-50127253.js";import{I as m}from"./InputError-2b9a135c.js";import{I as i}from"./InputLabel-cc2f457d.js";import{P as v}from"./PrimaryButton-56a0c82f.js";import{T as n}from"./TextInput-01542f12.js";import{G as g}from"./Guest-6478bd00.js";import"./index-f4d5d2b2.js";function b({token:t,email:d}){const{data:r,setData:c,post:p,processing:w,errors:l,reset:u}=f({token:t,email:d,password:"",password_confirmation:""});h.useEffect(()=>()=>{u("password","password_confirmation")},[]);const o=a=>{c(a.target.name,a.target.value)};return e(x,{children:[s(N,{title:"Reset Password"}),e("div",{className:"flex",children:[e("div",{className:"w-full sm:w-1/2 md:w-1/4 hidden sm:flex border-r border-gray-300 p-8 py-16  sm:flex-col sm:justify-between",children:[s("div",{children:s("img",{src:"/app/Logo Title X.png",alt:"",width:"180px"})}),s("div",{children:s("img",{src:"/app/reset.svg",alt:"",width:"120%",className:"mx-auto"})}),e("div",{children:[s("h6",{className:"text-xl font-semibold text-slate-700",children:"RANDA"}),s("p",{className:"text-slate-500",children:"Optimizing Business Processes with Point of Sales (POS) Application"})]})]}),s("div",{className:"w-full sm:w-3/4",children:e("form",{onSubmit:a=>{a.preventDefault(),p(route("password.store"))},className:"w-full px-4 sm:w-3/4 md:w-1/3 mx-auto h-screen flex flex-col justify-center",children:[e("div",{className:"mb-8",children:[s("h6",{className:"text-3xl text-slate-700",children:"Reset Password "}),s("p",{className:"text-slate-500",children:"Please enter your new password"})]}),e("div",{children:[s(i,{htmlFor:"email",value:"Email"}),s(n,{id:"email",type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",onChange:o}),s(m,{message:l.email,className:"mt-2"})]}),e("div",{className:"mt-4",children:[s(i,{htmlFor:"password",value:"Password"}),s(n,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,onChange:o}),s(m,{message:l.password,className:"mt-2"})]}),e("div",{className:"mt-4",children:[s(i,{htmlFor:"password_confirmation",value:"Confirm Password"}),s(n,{type:"password",name:"password_confirmation",value:r.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:o}),s(m,{message:l.password_confirmation,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(v,{className:"ml-4",disabled:w,children:"Reset Password"})})]})})]})]})}b.layout=t=>s(g,{children:t});export{b as default};