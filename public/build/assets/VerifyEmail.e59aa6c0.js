import{B as h}from"./Button.5c729cbc.js";import{B as _}from"./Guest.a33a6b48.js";import{H as g,L as y,r as t,o as n,c as a,a as o,h as v,b as s,w as m,n as b,d as k,F as B,e as d}from"./app.96589361.js";import{_ as x}from"./_plugin-vue_export-helper.cdc0426e.js";import"./ApplicationLogo.62972e36.js";/* empty css            */const w={layout:_,components:{BreezeButton:h,Head:g,Link:y},props:{status:String},data(){return{form:this.$inertia.form()}},methods:{submit(){this.form.post(this.route("verification.send"))}},computed:{verificationLinkSent(){return this.status==="verification-link-sent"}}},L=s("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),V={key:0,class:"mb-4 font-medium text-sm text-green-600"},z={class:"mt-4 flex items-center justify-between"};function C(c,i,E,H,r,e){const u=t("Head"),l=t("BreezeButton"),f=t("Link");return n(),a(B,null,[o(u,{title:"Email Verification"}),L,e.verificationLinkSent?(n(),a("div",V," A new verification link has been sent to the email address you provided during registration. ")):v("",!0),s("form",{onSubmit:i[0]||(i[0]=k((...p)=>e.submit&&e.submit(...p),["prevent"]))},[s("div",z,[o(l,{class:b({"opacity-25":r.form.processing}),disabled:r.form.processing},{default:m(()=>[d(" Resend Verification Email ")]),_:1},8,["class","disabled"]),o(f,{href:c.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:m(()=>[d("Log Out")]),_:1},8,["href"])])],32)],64)}const G=x(w,[["render",C]]);export{G as default};
