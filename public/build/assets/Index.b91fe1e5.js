import{B as b}from"./Authenticated.cfa40c51.js";import{_ as x}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as r,f as k,r as y,b as t,F as u,g as p,h as f,t as o,a as c,w as n,n as m,e as d,T as w,i as C}from"./app.f0495740.js";import{B}from"./Button.5c3895f6.js";import{C as j}from"./Container.7e9f8742.js";import"./ApplicationLogo.b05e11f4.js";/* empty css            */const S={},T={class:"flex rounded-full bg-gray-800 items-center px-3 py-1 text-sm"};function N(s,a){return i(),r("div",T,[k(s.$slots,"default")])}const z=x(S,[["render",N]]);const V={components:{Button:B,Chip:z},props:{teams:Object,user:Object,message:{type:String,default:null}},data(){return{form:this.$inertia.form({team_choice_first:this.user.team_choice_first,team_choice_second:this.user.team_choice_second,team_choice_third:this.user.team_choice_third})}},computed:{unselectedTeams(){let s=[];return this.form.team_choice_first||s.push(1),this.form.team_choice_second||s.push(2),this.form.team_choice_third||s.push(3),s}},methods:{select(s){if([this.user.team_choice_first,this.user.team_choice_second,this.user.team_choice_third].includes(s))return this.unselect(s);this.user.team_choice_first||(this.form.team_choice_first=s,this.submit()),this.user.team_choice_first&&!this.user.team_choice_second&&(this.form.team_choice_second=s,this.submit()),this.user.team_choice_second&&!this.user.team_choice_third&&(this.form.team_choice_third=s,this.submit())},submit(){this.form.patch(this.route("story.update",this.user),{preserveScroll:!0,onFinish:()=>{this.form.success=!0}})},unselect(s){this.form.team_choice_first===s&&(this.form.team_choice_first=null,this.user.team_choice_first=null),this.form.team_choice_second===s&&(this.form.team_choice_second=null,this.user.team_choice_second=null),this.form.team_choice_third===s&&(this.form.team_choice_third=null,this.user.team_choice_third=null),this.submit()},clear(){this.form.team_choice_first=null,this.form.team_choice_second=null,this.form.team_choice_third=null,this.submit()},isSelected(s){return[this.form.team_choice_first,this.form.team_choice_second,this.form.team_choice_third].includes(a=>s===a)}}},$={class:"selected my-6 rounded"},A=t("div",{class:"text-white font-bold mt-3 text-2xl uppercase py-6"},[d(" You may indicate three preferences for the team you will be joining. "),t("div",{class:"text-base"}," We will distribute the teams based on these preferences. If you do not provide a preference you will be put in the cleanup crew. ")],-1),F={name:"fade",tag:"div",class:"grid grid-cols-1 md:grid-cols-3 gap-4 text-sm justify-between rounded"},O=["onClick"],q=["title"],L={class:"flex justify-start items-center text-white text-8xl font-serif mt-2"},P={key:0},D={key:1},E={key:2},G={class:"flex text-4xl uppercase font-normal font-serif self-center ml-6 -mt-1"},R={class:"flex flex-wrap gap-1 text-sm justify-end items-center overflow-hidden"},W=t("i",{class:"fas fa-people mr-3"},null,-1),Y=t("i",{class:"fas fa-calendar mr-3"},null,-1),H={class:"bg-gray-900 rounded-xl h-36 flex justify-center items-center text-white text-3xl font-bold"},J={class:"actions flex gap-4 justify-between py-6"},K={key:0},M=t("i",{class:"fas fa-check ml-3"},null,-1),Q={key:1},U={key:2},X=t("i",{class:"fas fa-spinner-third animate-spin ml-3"},null,-1),Z=[X],I={class:"grid grid-cols-1 md:grid-cols-3 gap-4"},ee=["onClick"],te=["title"],se={class:"flex gap-1 flex-wrap"},ie={class:"flex text-xl uppercase font-bold"},re={class:"text-sm my-2"},oe={class:"flex flex-wrap gap-1 text-sm mt-1"},ce=t("i",{class:"fas fa-people mr-3"},null,-1),ne=t("i",{class:"fas fa-calendar mr-3"},null,-1);function ae(s,a,g,de,_e,l){const _=y("Chip"),v=y("Button");return i(),r(u,null,[t("div",$,[A,t("div",F,[(i(!0),r(u,null,p(this.teams.filter(e=>[this.form.team_choice_first,this.form.team_choice_second,this.form.team_choice_third].includes(e.id)),(e,h)=>(i(),r("div",{key:h,onClick:he=>l.unselect(e.id),class:"flex bg-gray-900/90 rounded-xl items-center justify-center p-4 cursor-pointer hover:bg-gray-800 text-white border-2 border-green-800"},[t("div",{class:"flex flex-wrap xl:flex-nowrap items-center gap-3",title:e.description},[t("div",L,[this.form.team_choice_first===e.id?(i(),r("div",P,"1")):f("",!0),this.form.team_choice_second===e.id?(i(),r("div",D,"2")):f("",!0),this.form.team_choice_third===e.id?(i(),r("div",E,"3")):f("",!0),t("div",G,o(e.name),1)]),t("div",R,[c(_,null,{default:n(()=>[t("i",{class:m([{"fa-burger-soda":e.category==="eets & drinks","fa-party-horn":e.category.includes("entertainment"),"fa-house":e.category.includes("locatie"),"fa-vacuum":e.category.includes("schoonmaak")},"fas mr-3"])},null,2),d(" "+o(e.category),1)]),_:2},1024),c(_,null,{default:n(()=>[W,d(" Group of "+o(e.required_people_amount)+" Nolanders ",1)]),_:2},1024),c(_,null,{default:n(()=>[Y,d(" Arrive by "+o(e.arrive_by||"zaterdag"),1)]),_:2},1024)])],8,q)],8,O))),128)),(i(!0),r(u,null,p(l.unselectedTeams,(e,h)=>(i(),r("div",{key:h},[t("div",H,o(e),1)]))),128))]),t("div",J,[c(w,{name:"fade"},{default:n(()=>[c(v,{class:"text-white cursor-pointer p-3 rounded bg-gray-800 hover:bg-gray-700",onClick:l.submit},{default:n(()=>[this.form.recentlySuccessful?(i(),r("span",K,[d(" Team preference updated "),M])):(i(),r("span",Q," Save preferences ")),this.form.processing?(i(),r("span",U,Z)):f("",!0)]),_:1},8,["onClick"])]),_:1}),t("div",{class:"text-white text-center cursor-pointer p-3 rounded bg-gray-600 hover:bg-red-500",onClick:a[0]||(a[0]=(...e)=>l.clear&&l.clear(...e))}," Reset preferences ")])]),t("div",I,[(i(!0),r(u,null,p(g.teams.filter(e=>![this.form.team_choice_first,this.form.team_choice_second,this.form.team_choice_third].includes(e.id)),e=>(i(),r("div",{class:m(["cursor-pointer bg-gray-900 rounded-xl p-4 hover:bg-gray-800 text-white",{"bg-green-200 border border-green-500":l.isSelected(e.id)}]),onClick:h=>l.select(e.id)},[t("div",{class:m([{"bg-green-200":l.isSelected(e.id)},"flex flex-col"]),title:e.description},[t("div",se,[t("div",ie,o(e.name),1)]),t("div",re,o(e.description),1),t("div",oe,[c(_,null,{default:n(()=>[t("i",{class:m([{"fa-burger-soda":e.category==="eets & drinks","fa-party-horn":e.category.includes("entertainment"),"fa-house":e.category.includes("locatie"),"fa-vacuum":e.category.includes("schoonmaak")},"fas mr-3"])},null,2),d(" "+o(e.category),1)]),_:2},1024),c(_,null,{default:n(()=>[ce,d(" Team of "+o(e.required_people_amount)+" Nolanders ",1)]),_:2},1024),c(_,null,{default:n(()=>[ne,d(" Arrive by "+o(e.arrive_by||"zaterdag"),1)]),_:2},1024)])],10,te)],10,ee))),256))])],64)}const le=x(V,[["render",ae]]),ve={__name:"Index",props:{teams:Object},setup(s){return(a,g)=>(i(),C(b,null,{default:n(()=>[c(j,null,{default:n(()=>[c(le,{teams:s.teams,user:a.$page.props.auth.user},null,8,["teams","user"])]),_:1})]),_:1}))}};export{ve as default};