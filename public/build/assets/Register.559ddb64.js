import{B as _,a as B}from"./Guest.ca0b6472.js";import{B as b,a as V,b as v}from"./ValidationErrors.a58c223a.js";import{H as x,L as y,r as a,o as z,c as g,a as e,b as t,w as i,n as h,d as k,F as L,e as d}from"./app.655e6c94.js";import{_ as N}from"./_plugin-vue_export-helper.cdc0426e.js";import"./ApplicationLogo.39f0f35d.js";/* empty css            */const q={layout:_,components:{BreezeButton:B,BreezeInput:b,BreezeLabel:V,BreezeValidationErrors:v,Head:x,Link:y},data(){return{form:this.$inertia.form({name:"",email:"",password:"",password_confirmation:"",terms:!1})}},methods:{submit(){this.form.post(this.route("register"),{onFinish:()=>this.form.reset("password","password_confirmation")})}}},E=t("div",{class:"font-serif text-center text-2xl text-gray-100 pb-2"}," Become a Nolander ",-1),C=t("p",{class:"text-white pb-2"}," You will require manual approval before you can truly become a Nolander ",-1),H={class:"mt-4"},U={class:"mt-4"},F={class:"mt-4"},I={class:"flex items-center justify-between mt-4"};function P(u,o,R,j,s,m){const p=a("Head"),c=a("BreezeValidationErrors"),l=a("BreezeLabel"),n=a("BreezeInput"),f=a("Link"),w=a("BreezeButton");return z(),g(L,null,[e(p,{title:"Register"}),e(c,{class:"mb-4"}),E,C,t("form",{onSubmit:o[4]||(o[4]=k((...r)=>m.submit&&m.submit(...r),["prevent"]))},[t("div",null,[e(l,{for:"name",value:"Name"}),e(n,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:s.form.name,"onUpdate:modelValue":o[0]||(o[0]=r=>s.form.name=r),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"])]),t("div",H,[e(l,{for:"email",value:"Email"}),e(n,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s.form.email,"onUpdate:modelValue":o[1]||(o[1]=r=>s.form.email=r),required:"",autocomplete:"username"},null,8,["modelValue"])]),t("div",U,[e(l,{for:"password",value:"Password"}),e(n,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s.form.password,"onUpdate:modelValue":o[2]||(o[2]=r=>s.form.password=r),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),t("div",F,[e(l,{for:"password_confirmation",value:"Confirm Password"}),e(n,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:s.form.password_confirmation,"onUpdate:modelValue":o[3]||(o[3]=r=>s.form.password_confirmation=r),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),t("div",I,[e(f,{href:u.route("login"),class:"underline text-sm text-gray-100 hover:text-gray-500"},{default:i(()=>[d(" Already registered? ")]),_:1},8,["href"]),e(w,{class:h(["ml-4",{"opacity-25":s.form.processing}]),disabled:s.form.processing},{default:i(()=>[d(" Join Nolands 2022 ")]),_:1},8,["class","disabled"])])],32)],64)}const Y=N(q,[["render",P]]);export{Y as default};
