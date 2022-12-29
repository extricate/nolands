import{B as $}from"./Authenticated.c774c412.js";import{o as r,c as o,b as e,e as s,t as n,F as l,p as k,q as E,a as i,u as p,w as u,H as j,n as h,h as d,L as v}from"./app.bd05daa9.js";import{_ as N}from"./_plugin-vue_export-helper.cdc0426e.js";import{H as c}from"./H2.561a1ec1.js";import"./ApplicationLogo.cacf9285.js";/* empty css            */const S=t=>(k("data-v-5ca55a75"),t=t(),E(),t),x=S(()=>e("p",null," This is where your Nolands 2023 journey starts. An epic adventure often resulting in the birth of new friendships, passionate romance waiting to happen, and new heights and new highs to be discovered. ",-1)),A={class:"font-serif"},Y={class:"font-serif"},T={class:"font-serif"},O={class:"font-serif"},D={class:"font-serif"},I={class:"font-serif"},P={class:"font-serif"},R={class:"font-serif"},C={class:"font-serif"},L={class:"font-serif"},U={class:"font-serif"},V={class:"font-serif"},F={class:"font-serif"},B={__name:"Story",props:{user:{type:Object,required:!0}},setup(t){return(a,w)=>{var f,y,g,_,m,b;return r(),o(l,null,[x,e("p",null,[s(" You are "),e("span",A,n(t.user.name),1),s(". You are a living legend. If we need to reach you, we will do so through "),e("span",Y,n(t.user.email),1),s(". To help us fund this journey, we require payment. You have "),e("span",T,n(t.user.payment_received?"fulfilled your financial obligations to us":"not yet fulfilled your financial obligations to us"),1),s(". ")]),e("p",null,[s(" You plan to start your journey by joining us at "),e("span",O,n((f=t.user.arrival_date)!=null?f:"a time which is to be determined later"),1),s(". "),t.user.arrival_date?(r(),o(l,{key:0},[s(" Specifically, you will be joining us at "),e("span",D,n(t.user.arrival_hour),1),s(". And we're absolutely delighted you are. ")],64)):(r(),o(l,{key:1},[s(" After all, you like to keep life exciting. Only boring people plan stories. However, even if that is the case, it would be great if you could specify that time as soon as you have decided. ")],64))]),e("p",null,[s(" You indicated that you "),e("span",I,n(t.user.has_arranged_transportation?"have arranged transportation":"do not have arranged transportation yet"),1),s(". "),t.user.has_arranged_transportation?(r(),o(l,{key:0},[s("And your designated driver is "),e("span",P,n((y=t.user.chauffeur_name)!=null?y:"still unknown"),1)],64)):(r(),o(l,{key:1},[s("Maybe you should start arranging some transportation? We're sure there's plenty people that want to help you get there. ")],64))]),e("p",null,[s(" Should there be some sort of medical issues during the journey, "),e("span",R,n(t.user.has_medical_training?"we should definitely ask you for help":"we would be better off asking somebody else for help")+". ",1)]),e("p",null,[s(" You plan to stay with us in your own canvas mansion. Your canvas mansion houses "),e("span",C,n((g=t.user.tent_size)!=null?g:0),1),s(" people. You are planning on sharing your canvas mansion with "),e("span",L,n((_=t.user.other_tent_occupants)!=null?_:"nobody else, for now"),1),s(". ")]),e("p",null,[s(" During this journey, you will be provided with sustenance of various shapes and sorts. You have indicated that you have the following dietary preferences: "),e("span",U,n((m=t.user.dietary_preferences)!=null?m:"no specific dietary preferences"),1),s(". ")]),e("p",null,[s(" Upon arrival you will be provided with three options of initial sustenance. You have "),e("span",V,n((b=t.user.initial_sustenance)!=null?b:"not yet decided on your choice of initial sustenance"),1),s(". ")]),e("p",null,[s(" Finally, after we've concluded our journey, we will part our ways. You are departing, "),e("span",F,n(t.user.departure_date?`specifically on ${t.user.departure_date}`:"but are yet to decide on a specific moment."),1),s(". ")])],64)}}},H=N(B,[["__scopeId","data-v-5ca55a75"]]),M={class:"py-12"},q={class:"text-x bg-gray-900 opacity-90 max-w-prose rounded text-xl max-w-7xl mx-auto sm:px-6 lg:px-8"},z={class:"overflow-hidden shadow-sm sm:rounded-lg"},G={class:"p-6 pt-12 text-white"},W={class:"flex flex-col items-center gap-4 justify-center mb-4"},J=["src"],K={key:0},Q={key:1},X={key:2},Z=e("i",{class:"fas fa-memo-circle-info ml-3"},null,-1),ee={key:0},se={key:0},te={key:1},ae=e("i",{class:"fas fa-memo-circle-info ml-3"},null,-1),re={key:0},oe={key:1},ne=["href"],ie=e("i",{class:"fas fa-sack-dollar ml-3"},null,-1),fe={__name:"Dashboard",setup(t){return(a,w)=>(r(),o(l,null,[i(p(j),{title:"Your journey"}),i($,null,{default:u(()=>[e("div",M,[e("div",q,[e("div",z,[e("div",G,[i(c,null,{default:u(()=>[s(" The Nolands journey of "+n(a.$page.props.auth.user.name),1)]),_:1}),e("div",W,[e("img",{alt:"avatar",class:"flex justify-center image avatar h-32 w-32 rounded-full overflow-hidden border border-gray-500",src:a.$page.props.auth.user.avatar},null,8,J)]),e("div",null,[i(c,null,{default:u(()=>[s("Step 1. RSVP & info.")]),_:1}),e("div",{class:h([{"border-green-900 bg-green-900/75":a.$page.props.auth.user.joins_in_2023,"border-red-900 bg-red-900/75":!a.$page.props.auth.user.joins_in_2023},"flex mb-8 items-center font-serif justify-between border-2 rounded-xl p-6 mb-4"])},[a.$page.props.auth.user.joins_in_2023===!0?(r(),o("div",K," YOU ARE ATTENDING NOLANDS 2023 ")):d("",!0),a.$page.props.auth.user.joins_in_2023===!1?(r(),o("div",Q," YOU ARE NOT ATTENDING NOLANDS 2023 ")):d("",!0),a.$page.props.auth.user.joins_in_2023===null?(r(),o("div",X," PLEASE CONFIRM YOUR ATTENDANCE IN 2023 ")):d("",!0),i(p(v),{class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150",href:a.route("story.edit")},{default:u(()=>[s(" Update my information "),Z]),_:1},8,["href"])],2),a.$page.props.auth.user.joins_in_2023?(r(),o("div",ee,[i(c,null,{default:u(()=>[s("Step 2. Team preferences.")]),_:1}),e("div",{class:h([{"border-green-900 bg-green-900/75":a.$page.props.auth.user.team_choice_first,"border-red-900 bg-red-900/75":!a.$page.props.auth.user.team_choice_first},"flex mb-8 items-center font-serif justify-between border-2 rounded-xl p-6 mb-4"])},[a.$page.props.auth.user.team_choice_first?(r(),o("div",se," YOU PROVIDED TEAM PREFERENCES ")):d("",!0),a.$page.props.auth.user.team_choice_first===null?(r(),o("div",te," PLEASE PROVIDE TEAM PREFERENCES ")):d("",!0),i(p(v),{class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150",href:a.route("teams.index")},{default:u(()=>[s(" Update team preferences "),ae]),_:1},8,["href"])],2),i(c,null,{default:u(()=>[s("Step 3. Pay.")]),_:1}),e("div",{class:h([{"border-green-900 bg-green-900/75":a.$page.props.auth.user.payment_received,"border-red-900 bg-red-900/75":!a.$page.props.auth.user.payment_received},"flex items-center font-serif justify-between border-2 rounded-xl p-6 mb-4"])},[a.$page.props.auth.user.payment_received?(r(),o("div",re," Payment received and processed ")):(r(),o("div",oe," Payment not yet received or processed ")),a.$page.props.auth.user.payment_received?d("",!0):(r(),o("a",{key:2,href:a.$page.props.services.payment_link,target:"_blank",class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"},[s(" Pay \u20AC130"),ie],8,ne))],2),i(H,{user:a.$page.props.auth.user},null,8,["user"])])):d("",!0)])])])])])]),_:1})],64))}};export{fe as default};
