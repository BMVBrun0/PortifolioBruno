(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9017],{17268:function(e,t,i){Promise.resolve().then(i.t.bind(i,90413,23)),Promise.resolve().then(i.t.bind(i,68326,23)),Promise.resolve().then(i.bind(i,77954)),Promise.resolve().then(i.bind(i,58503))},80679:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{unstable_getImgProps:function(){return unstable_getImgProps},default:function(){return o}});let s=i(21024),n=i(7929),r=i(92637),a=i(90413),l=s._(i(69950)),unstable_getImgProps=e=>{(0,r.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,n.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}},o=a.Image},6216:function(e,t,i){"use strict";var s=i(57437),n=i(16691),r=i.n(n);t.Z=e=>{let{subTitle:t,title:i,paragraph:n,icon:a="/images/hero/icon-title.svg"}=e;return(0,s.jsxs)("div",{className:"wow fadeInUp relative z-10 mb-16 text-center",children:[(0,s.jsxs)("span",{className:"hero-subtitle-gradient relative mb-4 inline-flex items-center gap-2 rounded-full px-4.5 py-2 text-sm font-medium",children:[(0,s.jsx)(r(),{src:a,alt:"icon",width:16,height:16}),(0,s.jsxs)("span",{className:"hero-subtitle-text",children:[" ",t," "]})]}),(0,s.jsx)("h2",{className:"mb-4.5 text-2xl font-extrabold text-white sm:text-4xl xl:text-heading-2",children:i}),(0,s.jsx)("p",{className:"mx-auto max-w-[714px] font-medium",children:n})]})}},77954:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return components_Faq}});var s=i(57437),n=i(2265),r=i(6216),Faq_SingleFaq=e=>{let{faqData:t}=e,{activeFaq:i,id:n,handleFaqToggle:r,question:a,answer:l}=t;return(0,s.jsxs)("div",{className:"flex flex-col border-b border-white/[0.15]",children:[(0,s.jsxs)("h3",{onClick:()=>{r(n)},className:"flex cursor-pointer items-center justify-between py-5 text-[22px] font-semibold leading-[28px] lg:py-7 ".concat(i===n?"text-white":""),children:[a,(0,s.jsx)("span",{children:i===n?(0,s.jsx)("svg",{width:"22",height:"2",viewBox:"0 0 22 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M21.125 1.86263H0.875012C0.425012 1.86263 0.0125122 1.48763 0.0125122 1.00013C0.0125122 0.550134 0.387512 0.137634 0.875012 0.137634H21.125C21.575 0.137634 21.9875 0.512634 21.9875 1.00013C21.9875 1.45013 21.575 1.86263 21.125 1.86263Z",fill:"white"})}):(0,s.jsx)("svg",{className:"fill-current",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M22.5 11.1752H12.8625V1.5002C12.8625 1.0502 12.4875 0.637695 12 0.637695C11.55 0.637695 11.1375 1.0127 11.1375 1.5002V11.1752H1.50001C1.05001 11.1752 0.637512 11.5502 0.637512 12.0377C0.637512 12.4877 1.01251 12.9002 1.50001 12.9002H11.175V22.5002C11.175 22.9502 11.55 23.3627 12.0375 23.3627C12.4875 23.3627 12.9 22.9877 12.9 22.5002V12.8627H22.5C22.95 12.8627 23.3625 12.4877 23.3625 12.0002C23.3625 11.5502 22.95 11.1752 22.5 11.1752Z",fill:""})})})]}),(0,s.jsx)("div",{className:"text-body-color dark:text-body-color-dark grid text-base",style:{gridTemplateRows:"".concat(i===n?"1fr":"0fr"),transition:"grid-template-rows 300ms"},children:(0,s.jsx)("div",{className:"overflow-hidden transition-all duration-300",children:(0,s.jsx)("div",{className:"pb-6 pt-1 font-medium",children:l})})})]})},a=[{id:74,question:"What Is AI Tool Content Writing Tool?",answer:"Build SaaS AI applications using OpenAI and Next.js, this kit comes with pre-configured and pre-built examples, making it easier to quickly kickstart your AI startup."},{id:100,question:"Is there a limit on how much content I can generate?",answer:"Build SaaS AI applications using OpenAI and Next.js, this kit comes with pre-configured and pre-built examples, making it easier to quickly kickstart your AI startup."},{id:7,question:"Is it helpful for Digital Marketer or Content Writer?",answer:"Build SaaS AI applications using OpenAI and Next.js, this kit comes with pre-configured and pre-built examples, making it easier to quickly kickstart your AI startup."},{id:67,question:"What Languages does it supports?",answer:"Build SaaS AI applications using OpenAI and Next.js, this kit comes with pre-configured and pre-built examples, making it easier to quickly kickstart your AI startup."},{id:9,question:"What is SEO Writing AI and how do I use it?",answer:"Build SaaS AI applications using OpenAI and Next.js, this kit comes with pre-configured and pre-built examples, making it easier to quickly kickstart your AI startup."}],components_Faq=()=>{let[e,t]=(0,n.useState)(1),handleFaqToggle=i=>{e===i?t(0):t(i)};return(0,s.jsxs)("section",{className:"relative overflow-hidden pb-17.5 pt-20 lg:pb-22.5 lg:pt-25 xl:pb-27.5",children:[(0,s.jsx)("div",{className:"about-divider-gradient absolute left-1/2 top-0 h-[1px] w-full max-w-[1170px] -translate-x-1/2"}),(0,s.jsxs)("div",{className:"mx-auto max-w-[770px] px-4 sm:px-8 xl:px-0",children:[(0,s.jsx)(r.Z,{subTitle:"Questions About our AI Tool?",title:"Frequently Asked Questions",paragraph:"Build SaaS AI applications using OpenAI and Next.js, this kit comes with pre-configured and pre-built examples, making it easier to quickly kickstart your AI startup."}),(0,s.jsx)("div",{className:"wow fadeInUp",children:a.map((t,i)=>(0,s.jsx)(Faq_SingleFaq,{faqData:{...t,activeFaq:e,handleFaqToggle}},i))})]})]})}},58503:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return SInglePricing}});var s=i(57437),n=i(29222),r=i(16691),a=i.n(r);let l=(0,s.jsxs)("svg",{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsxs)("g",{clipPath:"url(#clip0_67_11301)",children:[(0,s.jsx)("path",{d:"M24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24C19.1274 24 24.5 18.6274 24.5 12Z",fill:"url(#paint0_linear_67_11301)",fillOpacity:"0.08"}),(0,s.jsx)("g",{filter:"url(#filter0_d_67_11301)",children:(0,s.jsx)("path",{d:"M12.5 9L15.5 12L12.5 15L9.5 12L12.5 9Z",fill:"#F3EEFF"})}),(0,s.jsx)("path",{d:"M24 12C24 5.64873 18.8513 0.5 12.5 0.5C6.14873 0.5 1 5.64873 1 12C1 18.3513 6.14873 23.5 12.5 23.5C18.8513 23.5 24 18.3513 24 12Z",stroke:"#F3EEFF",strokeOpacity:"0.06"})]}),(0,s.jsxs)("defs",{children:[(0,s.jsxs)("filter",{id:"filter0_d_67_11301",x:"3.5",y:"3",width:"18",height:"18",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,s.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,s.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,s.jsx)("feOffset",{}),(0,s.jsx)("feGaussianBlur",{stdDeviation:"3"}),(0,s.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),(0,s.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0"}),(0,s.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_67_11301"}),(0,s.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_67_11301",result:"shape"})]}),(0,s.jsxs)("linearGradient",{id:"paint0_linear_67_11301",x1:"12.5",y1:"0",x2:"12.5",y2:"24",gradientUnits:"userSpaceOnUse",children:[(0,s.jsx)("stop",{stopColor:"#F3EEFF",stopOpacity:"0"}),(0,s.jsx)("stop",{offset:"1",stopColor:"#F3EEFF"})]}),(0,s.jsx)("clipPath",{id:"clip0_67_11301",children:(0,s.jsx)("rect",{width:"25",height:"24",fill:"white"})})]})]});var Pricing_OfferItem=e=>{let{text:t}=e;return(0,s.jsxs)("li",{className:"flex items-center gap-5",children:[l,(0,s.jsx)("span",{className:"font-medium",children:t})]})},SInglePricing=e=>{let{price:t}=e,handleSubscription=async e=>{e.preventDefault();let{data:i}=await n.Z.post("/api/payment",{priceId:t.id},{headers:{"Content-Type":"application/json"}});window.location.assign(i)};return(0,s.jsxs)("div",{className:"wow fadeInUp pricing-item-border relative z-20 overflow-hidden rounded-3xl bg-dark px-8 pb-10 pt-12.5 xl:px-10",children:[(0,s.jsx)("span",{className:"absolute right-9 top-9",children:(0,s.jsx)(a(),{src:"Small"===t.nickname?"./images/pricing/pricing-icon-01.svg":"Medium"===t.nickname?"./images/pricing/pricing-icon-02.svg":"./images/pricing/pricing-icon-03.svg",alt:"icon",width:44,height:44})}),(0,s.jsxs)("h3",{className:"mb-5.5 text-heading-6 font-semibold text-white",children:["Small"===t.nickname&&"Starter","Medium"===t.nickname&&"Medium","Large"===t.nickname&&"Business"]}),(0,s.jsxs)("div",{className:"flex items-center gap-3.5",children:[(0,s.jsxs)("h2",{className:"pricing-gradient-text text-custom-1 font-bold",children:["$"," ",(t.unit_amount/100).toLocaleString("en-US",{currency:"USD"})]}),(0,s.jsxs)("p",{className:"font-medium",children:["/month ",(0,s.jsx)("br",{}),"(billed annually)"]})]}),(0,s.jsx)("div",{className:"pricing-gradient-divider my-10 h-[1px] w-full"}),"Small"===t.nickname&&(0,s.jsxs)("ul",{className:"flex flex-col gap-4",children:[(0,s.jsx)(Pricing_OfferItem,{text:"Subscription with levels"}),(0,s.jsx)(Pricing_OfferItem,{text:"Advanced features included"}),(0,s.jsx)(Pricing_OfferItem,{text:"Shared workspaces & tools"}),(0,s.jsx)(Pricing_OfferItem,{text:"Premium versions functionality"}),(0,s.jsx)(Pricing_OfferItem,{text:"Customizing the outputs"}),(0,s.jsx)(Pricing_OfferItem,{text:"Priority customer support"})]}),"Medium"===t.nickname&&(0,s.jsxs)("ul",{className:"flex flex-col gap-4",children:[(0,s.jsx)(Pricing_OfferItem,{text:"Subscription with levels"}),(0,s.jsx)(Pricing_OfferItem,{text:"Advanced features included"}),(0,s.jsx)(Pricing_OfferItem,{text:"Shared workspaces & tools"}),(0,s.jsx)(Pricing_OfferItem,{text:"Premium versions functionality"}),(0,s.jsx)(Pricing_OfferItem,{text:"Customizing the outputs"}),(0,s.jsx)(Pricing_OfferItem,{text:"Priority customer support"})]}),"Large"===t.nickname&&(0,s.jsxs)("ul",{className:"flex flex-col gap-4",children:[(0,s.jsx)(Pricing_OfferItem,{text:"Subscription with levels"}),(0,s.jsx)(Pricing_OfferItem,{text:"Advanced features included"}),(0,s.jsx)(Pricing_OfferItem,{text:"Shared workspaces & tools"}),(0,s.jsx)(Pricing_OfferItem,{text:"Premium versions functionality"}),(0,s.jsx)(Pricing_OfferItem,{text:"Customizing the outputs"}),(0,s.jsx)(Pricing_OfferItem,{text:"Priority customer support"})]}),(0,s.jsxs)("button",{"aria-label":"Get the plan button",onClick:handleSubscription,className:"pricing-button-gradient relative mt-11 flex w-full items-center justify-center gap-1.5 rounded-lg p-3 font-medium text-white transition-all duration-300 ease-in-out hover:shadow-button",children:["Get the plan",(0,s.jsx)("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M14.8992 7.5999L9.72422 2.3499C9.49922 2.1249 9.14922 2.1249 8.92422 2.3499C8.69922 2.5749 8.69922 2.9249 8.92422 3.1499L13.1242 7.4249H2.49922C2.19922 7.4249 1.94922 7.6749 1.94922 7.9749C1.94922 8.2749 2.19922 8.5499 2.49922 8.5499H13.1742L8.92422 12.8749C8.69922 13.0999 8.69922 13.4499 8.92422 13.6749C9.02422 13.7749 9.17422 13.8249 9.32422 13.8249C9.47422 13.8249 9.62422 13.7749 9.72422 13.6499L14.8992 8.3999C15.1242 8.1749 15.1242 7.8249 14.8992 7.5999Z",fill:"white"})})]}),(0,s.jsx)("p",{className:"mt-4 text-center text-sm",children:"No extra hidden charge"}),(0,s.jsxs)("div",{className:"pointer-events-none absolute inset-0 -z-10 overflow-hidden",children:[(0,s.jsx)("span",{className:"absolute bottom-0 left-0 -z-1 aspect-[370/553] w-full",children:(0,s.jsx)(a(),{src:"/images/blur/blur-16.svg",alt:"blur",fill:!0,className:"max-w-none"})}),(0,s.jsx)("span",{className:"absolute left-0 top-0 -z-1 aspect-[370/350] w-full",children:(0,s.jsx)(a(),{src:"/images/blur/blur-17.svg",alt:"blur",fill:!0,className:"max-w-none"})})]})]})}},16691:function(e,t,i){e.exports=i(80679)}},function(e){e.O(0,[8326,4908,413,9222,2971,2472,1744],function(){return e(e.s=17268)}),_N_E=e.O()}]);