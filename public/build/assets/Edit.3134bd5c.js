import{B as p}from"./Authenticated.349748d3.js";import{A as m,o as c,c as f,a as e,u as t,w as u,F as b,H as y,b as a,e as B}from"./app.96589361.js";import{a as d,B as w}from"./Label.63a37add.js";import{B as x}from"./Button.5c729cbc.js";import{E as V}from"./style.3c99034c.js";import"./ApplicationLogo.62972e36.js";import"./_plugin-vue_export-helper.cdc0426e.js";/* empty css            */const g={class:"flex justify-center py-6"},_={class:"flex flex-col max-w-prose w-full gap-4 bg-gray-900 opacity-90 p-4 rounded"},A={__name:"Edit",props:{post:Object,errors:Object},setup(i){const r=i,o=m({title:r.post.title,body:r.post.body});function n(){o.submit("patch",route("posts.update",r.post))}return(k,l)=>(c(),f(b,null,[e(t(y),{title:"Bericht aanpassen"}),e(p,null,{default:u(()=>[a("div",g,[a("div",_,[a("div",null,[e(d,{for:"title",value:"Title"}),e(w,{id:"title",type:"text",class:"mt-1 block w-full",modelValue:t(o).title,"onUpdate:modelValue":l[0]||(l[0]=s=>t(o).title=s),required:"",autofocus:"",autocomplete:"title"},null,8,["modelValue"])]),a("div",null,[e(d,{for:"body",value:"Body"}),e(t(V),{preview:!1,theme:"dark",language:"en-US",id:"body",class:"mt-1 block w-full h-64 rounded bg-gray-400 border border-white",modelValue:t(o).body,"onUpdate:modelValue":l[1]||(l[1]=s=>t(o).body=s)},null,8,["modelValue"])]),e(x,{onClick:n},{default:u(()=>[B(" Bewerken ")]),_:1})])])]),_:1})],64))}};export{A as default};
