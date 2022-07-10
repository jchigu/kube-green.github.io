"use strict";(self.webpackChunkkube_green_github_io=self.webpackChunkkube_green_github_io||[]).push([[885],{1824:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7294),o=a(9887),l=a.n(o),r=a(6010);const i="inputCalc_Frxq",s="inputWrapper_O3Zi",u="card_c9eN",c="cardBody_FCxH",d="subTitle_Vwj9";function p(){const[e,t]=n.useState(new(l())(11)),[a,o]=n.useState(new(l())(100)),[i,s]=n.useState(new(l())(100)),[p,m]=n.useState(new(l())(128)),w=n.useMemo((()=>h(e,a,i,p)),[e,a,i,p]),v=n.useMemo((()=>h(e,a,i,new(l())(0))),[e,a,i]);return n.createElement("div",{className:(0,r.Z)(u,"card")},n.createElement("div",{className:"card__header"},n.createElement("h2",null,"CO2 Calculator")),n.createElement("div",{className:"card__body"},n.createElement("div",{className:c},n.createElement(b,{label:"CO2 per pods per year (kg CO2eq)",onInputChange:t,value:e}),n.createElement(b,{label:"Total number of pods",onInputChange:o,value:a}),n.createElement(b,{label:"Pods sleeped",onInputChange:s,value:i}),n.createElement(b,{label:"Hour of sleep per week",onInputChange:m,value:p})),n.createElement("h3",null,"Results",n.createElement("div",{className:d},"Total (Kg CO2eq/week)")),n.createElement("div",null,n.createElement("div",null,"without kube-green:"," ",v.toString()),n.createElement("div",null,n.createElement("b",null,"with kube-green:"," ",w.toString())),n.createElement("div",null,n.createElement("b",null,"Difference:"," ",w.minus(v).toString())))))}const m=new(l())(7).mul(new(l())(24));function h(e,t,a,n){const o=e.dividedBy(365).dividedBy(24),l=o.mul(t.minus(a)).mul(n),r=o.mul(t).mul(m.minus(n));return l.plus(r).toDecimalPlaces(0)}function b(e){let{label:t,value:a,onInputChange:o}=e;return n.createElement("div",{className:s},n.createElement("div",null,t),n.createElement("div",null,n.createElement("input",{className:i,onChange:e=>o(new(l())(e.target.value||0)),type:"number",value:a.toString()})))}},3577:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(7462),o=(a(7294),a(3905)),l=a(1824);const r={sidebar_position:11},i="FAQ",s={unversionedId:"FAQ",id:"FAQ",title:"FAQ",description:"I have a couple of nodes with low utilization, but they are not scaled down. Why?",source:"@site/docs/FAQ.mdx",sourceDirName:".",slug:"/FAQ",permalink:"/docs/FAQ",draft:!1,editUrl:"https://github.com/kube-green/kube-green.github.io/edit/main/docs/FAQ.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"API Reference",permalink:"/docs/apireference_v1alpha1"}},u={},c=[{value:"I have a couple of nodes with low utilization, but they are not scaled down. Why?",id:"i-have-a-couple-of-nodes-with-low-utilization-but-they-are-not-scaled-down-why",level:3},{value:"How many CO2 is produced by pod?",id:"how-many-co2-is-produced-by-pod",level:3}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"i-have-a-couple-of-nodes-with-low-utilization-but-they-are-not-scaled-down-why"},"I have a couple of nodes with low utilization, but they are not scaled down. Why?"),(0,o.kt)("p",null,"Have you set the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler"},"cluster autoscaler"),"?"),(0,o.kt)("p",null,"If cluster autoscaler is set up, it should be correctly configured to scale down the nodes.\nTo see the possible issues, check the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#i-have-a-couple-of-nodes-with-low-utilization-but-they-are-not-scaled-down-why"},"cluster autoscaler documentation"),"."),(0,o.kt)("h3",{id:"how-many-co2-is-produced-by-pod"},"How many CO2 is produced by pod?"),(0,o.kt)("p",null,"This calculations are based on the following assumptions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Emissions for cloud server using 100% green electricity: ",(0,o.kt)("strong",{parentName:"li"},"160 Kg CO2eq / year and server")," (from ",(0,o.kt)("a",{parentName:"li",href:"https://www.goclimate.com/blog/the-carbon-footprint-of-servers/#:~:text=Cloud%20server%20using%20100%25%20green%20electricity:%20160%20kg%20CO2e%20/%20year%20and%20server"},"goclimate.com"),"\n)"),(0,o.kt)("li",{parentName:"ul"},"Cluster node of 2 cpu. We approximate ",(0,o.kt)("strong",{parentName:"li"},"1 node is 1 server")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"15 pods per node"))),(0,o.kt)("p",null,"With this assumption, the mean consumption of CO2 per pod in a year is 160 / 15 = ",(0,o.kt)("strong",{parentName:"p"},"11 Kg CO2eq / year per pod"),"."),(0,o.kt)(l.Z,{mdxType:"ConsumptionCalculator"}))}p.isMDXComponent=!0}}]);