import{B as z}from"./Button.5c729cbc.js";import{B as x}from"./Checkbox.f53d2323.js";import{B as g}from"./Guest.a33a6b48.js";import{B as y,a as V}from"./Label.63a37add.js";import{B as v}from"./ValidationErrors.565b7ba4.js";import{H as L,L as C,r,o as n,c,a as s,t as E,h as u,b as a,i as N,w as p,n as F,d as H,F as q,e as f}from"./app.96589361.js";import{_ as I}from"./_plugin-vue_export-helper.cdc0426e.js";import"./ApplicationLogo.62972e36.js";/* empty css            */const P={layout:g,components:{BreezeButton:z,BreezeCheckbox:x,BreezeInput:y,BreezeLabel:V,BreezeValidationErrors:v,Head:L,Link:C},props:{canResetPassword:Boolean,status:String},data(){return{form:this.$inertia.form({email:"",password:"",remember:!1})}},methods:{submit(){this.form.post(this.route("login"),{onFinish:()=>this.form.reset("password")})}}},R={key:0,class:"mb-4 font-medium text-sm text-green-600"},S={class:"mt-4"},U={class:"block mt-4"},j={class:"flex items-center"},D=a("span",{class:"ml-2 text-sm text-gray-100"},"Remember me",-1),G={class:"flex items-center justify-between mt-4"};function M(B,e,m,T,o,l){const _=r("Head"),b=r("BreezeValidationErrors"),i=r("BreezeLabel"),d=r("BreezeInput"),w=r("BreezeCheckbox"),h=r("Link"),k=r("BreezeButton");return n(),c(q,null,[s(_,{title:"Log in"}),s(b,{class:"mb-4"}),m.status?(n(),c("div",R,E(m.status),1)):u("",!0),a("form",{onSubmit:e[3]||(e[3]=H((...t)=>l.submit&&l.submit(...t),["prevent"]))},[a("div",null,[s(i,{for:"email",value:"Email"}),s(d,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:o.form.email,"onUpdate:modelValue":e[0]||(e[0]=t=>o.form.email=t),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"])]),a("div",S,[s(i,{for:"password",value:"Password"}),s(d,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o.form.password,"onUpdate:modelValue":e[1]||(e[1]=t=>o.form.password=t),required:"",autocomplete:"current-password"},null,8,["modelValue"])]),a("div",U,[a("label",j,[s(w,{name:"remember",checked:o.form.remember,"onUpdate:checked":e[2]||(e[2]=t=>o.form.remember=t)},null,8,["checked"]),D])]),a("div",G,[m.canResetPassword?(n(),N(h,{key:0,href:B.route("password.request"),class:"underline text-sm text-gray-100 hover:text-gray-500"},{default:p(()=>[f(" Forgot your password? ")]),_:1},8,["href"])):u("",!0),s(k,{class:F(["ml-4",{"opacity-25":o.form.processing}]),disabled:o.form.processing},{default:p(()=>[f(" Enter Nolands ")]),_:1},8,["class","disabled"])])],32)],64)}const $=I(P,[["render",M]]);export{$ as default};
