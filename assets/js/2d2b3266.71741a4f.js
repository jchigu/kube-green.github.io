"use strict";(self.webpackChunkkube_green_github_io=self.webpackChunkkube_green_github_io||[]).push([[680],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1801:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return p},default:function(){return m}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),o=["components"],u={sidebar_position:1},s="Small cluster",i={unversionedId:"real-usecase/first-usage",id:"real-usecase/first-usage",title:"Small cluster",description:"Below the result obtained using kube-green in a small development cluster of 15 namespaces (only enabled in the 3 bigger namespaces).",source:"@site/docs/real-usecase/first-usage.md",sourceDirName:"real-usecase",slug:"/real-usecase/first-usage",permalink:"/docs/real-usecase/first-usage",editUrl:"https://github.com/kube-green/kube-green.github.io/edit/main/docs/real-usecase/first-usage.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/usage/configuration"},next:{title:"Cluster downscale",permalink:"/docs/real-usecase/node-downscale"}},p=[{value:"Memory usage",id:"memory-usage",children:[],level:3},{value:"CPU usage",id:"cpu-usage",children:[],level:3},{value:"Numeric summary",id:"numeric-summary",children:[],level:3},{value:"Conclusion",id:"conclusion",children:[],level:3}],c={toc:p};function m(e){var t=e.components,u=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,u,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"small-cluster"},"Small cluster"),(0,l.kt)("p",null,"Below the result obtained using ",(0,l.kt)("em",{parentName:"p"},"kube-green")," in a small development cluster of 15 namespaces (only enabled in the 3 bigger namespaces)."),(0,l.kt)("p",null,"The configuration used is to wake up in working hours:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: kube-green.com/v1alpha1\nkind: SleepInfo\nmetadata:\n  name: working-hours\nspec:\n  weekdays: "1-5"\n  sleepAt: "20:00"\n  wakeUpAt: "08:00"\n  timeZone: "Europe/Rome"\n  excludeRef:\n    - apiVersion: "apps/v1"\n      kind:       Deployment\n      name:       api-gateway\n')),(0,l.kt)("p",null,"Below, the results with ",(0,l.kt)("em",{parentName:"p"},"kube-green")," running for two weeks."),(0,l.kt)("p",null,"In the images, are showed 3 lines, representing request, limit and usage for memory and CPU."),(0,l.kt)("p",null,"Request is the amount of resource allocated (reserved by pod) in the cluster.\nLimit is the amount of resource allowed to be used by pod in the cluster.\nUsage is the amount of resource actually used by pod in the cluster. This is the real consumption of the pod."),(0,l.kt)("h3",{id:"memory-usage"},"Memory usage"),(0,l.kt)("p",null,"In this image it is possible to see the memory usage of the cluster.",(0,l.kt)("br",{parentName:"p"}),"\n","Before ",(0,l.kt)("em",{parentName:"p"},"kube-green"),", the memory usage, request and limit is linear."),(0,l.kt)("p",null,"After ",(0,l.kt)("em",{parentName:"p"},"kube-green"),", it is possible to see the memory lines with 5 peak in the working day, and a low usage and allocation of memories during the nights and the weekends."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Memory usage",src:n(3581).Z})),(0,l.kt)("h3",{id:"cpu-usage"},"CPU usage"),(0,l.kt)("p",null,"It is possible to see the same as for memory also for the CPU in the following image.  "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Memory usage",src:n(3581).Z})),(0,l.kt)("h3",{id:"numeric-summary"},"Numeric summary"),(0,l.kt)("p",null,"In this table, a comparison between before and after the use of ",(0,l.kt)("em",{parentName:"p"},"kube-green"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Total"),(0,l.kt)("th",{parentName:"tr",align:null},"With kube-green"),(0,l.kt)("th",{parentName:"tr",align:null},"Difference"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Number of pods"),(0,l.kt)("td",{parentName:"tr",align:null},"446"),(0,l.kt)("td",{parentName:"tr",align:null},"205"),(0,l.kt)("td",{parentName:"tr",align:null},"-241")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Memory consumed ","[Gb]"),(0,l.kt)("td",{parentName:"tr",align:null},"28"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"-12")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU consumed    ","[cpu]"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"1.3"),(0,l.kt)("td",{parentName:"tr",align:null},"-0.7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Memory allocated ","[Gb]"),(0,l.kt)("td",{parentName:"tr",align:null},"34"),(0,l.kt)("td",{parentName:"tr",align:null},"22"),(0,l.kt)("td",{parentName:"tr",align:null},"-12")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU allocated ","[cpu]"),(0,l.kt)("td",{parentName:"tr",align:null},"14"),(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},"-2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CO2eq/week ","[kg]"),(0,l.kt)("td",{parentName:"tr",align:null},"94"),(0,l.kt)("td",{parentName:"tr",align:null},"66"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"-28"))))),(0,l.kt)("p",null,"As show in the table, are saved 28 Kg of CO2eq per week for this cluster. So in a year (52 weeks), the CO2eq saved is ",(0,l.kt)("strong",{parentName:"p"},"-1456")," Kg CO2eq."),(0,l.kt)("h3",{id:"conclusion"},"Conclusion"),(0,l.kt)("p",null,"It is possible to see how much ",(0,l.kt)("em",{parentName:"p"},"kube-green")," affects the use of resources in a small cluster."),(0,l.kt)("p",null,"In this use case, the cluster nodes do not downscale, because the unused resources are not enough."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/real-usecase/node-downscale"},"Click here")," to see it in a wider use case, to see how much it can reduce the use of resources and lead to the downscale of the nodes of a cluster."))}m.isMDXComponent=!0},3581:function(e,t,n){t.Z=n.p+"assets/images/23.7-23-8-memory-9d7b5b5f825d8b30904895f017087b39.png"}}]);