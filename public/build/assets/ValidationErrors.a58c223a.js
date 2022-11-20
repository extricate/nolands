import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,t as u,f as m,b as l,F as p,g as f,h}from"./app.655e6c94.js";const $={props:["modelValue"],emits:["update:modelValue"],methods:{focus(){this.$refs.input.focus()}}},g=["value"];function y(r,o,s,c,d,n){return e(),t("input",{class:"bg-gray-400 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:s.modelValue,onInput:o[0]||(o[0]=a=>r.$emit("update:modelValue",a.target.value)),ref:"input"},null,40,g)}const L=i($,[["render",y]]),b={props:["value"]},k={class:"block font-medium text-sm text-gray-100"},v={key:0},x={key:1};function B(r,o,s,c,d,n){return e(),t("label",k,[s.value?(e(),t("span",v,u(s.value),1)):(e(),t("span",x,[m(r.$slots,"default")]))])}const N=i(b,[["render",B]]),V={computed:{errors(){return this.$page.props.errors},hasErrors(){return Object.keys(this.errors).length>0}}},E={key:0},w=l("div",{class:"font-medium text-red-600"},"Whoops! Something went wrong.",-1),z={class:"mt-3 list-disc list-inside text-sm text-red-600"};function S(r,o,s,c,d,n){return n.hasErrors?(e(),t("div",E,[w,l("ul",z,[(e(!0),t(p,null,f(n.errors,(a,_)=>(e(),t("li",{key:_},u(a),1))),128))])])):h("",!0)}const j=i(V,[["render",S]]);export{L as B,N as a,j as b};