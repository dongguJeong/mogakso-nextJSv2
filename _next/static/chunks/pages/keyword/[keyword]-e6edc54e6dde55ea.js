(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[812],{5605:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/keyword/[keyword]",function(){return t(6740)}])},6740:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return c}});var r=t(5893),l=t(7294),i=t(1163),n=e=>{let[s,t]=(0,l.useState)(!1),[n,d]=(0,l.useState)(),o=(0,i.useRouter)();console.log("쿼리는 ",o.query),void 0===o.query.mode?String(101):o.query.mode;let c=s=>{t(e=>!0);let r=e.data.find(e=>e.title===s);d(r)},a=e=>{let s=e.replace(/<\/?b>/g,""),t=s.replace(/&apos;/g,"'"),r=t.replace(/&quot;/g,"'");return r};return(0,r.jsxs)("div",{className:"w-[1000px] min-h-screen",children:[(0,r.jsx)("div",{className:"w-[650px] mx-auto h-48 bg-white rounded-lg font-extrabold text-5xl flex justify-center  items-center border-2 border-solid border-[#394867] underline underline-offset-8 cursor-pointer",children:(0,r.jsx)("span",{children:e.word})}),(0,r.jsx)("div",{className:"flex flex-col items-center text-3xl  mt-16 space-y-5  ",children:e.data.map((e,s)=>(0,r.jsxs)("div",{className:"flex bg-white w-[650px] h-[280px] rounded-lg py-2 px-4 border-2 border-solid border-[#394867]  items-center ",onClick:()=>c(e.title),children:[(0,r.jsx)("img",{className:"w-50 h-32 mr-10 rounded-md ",src:e.imgUrl}),(0,r.jsxs)("div",{className:"pt-8 hover:underline underline-offset-4 cursor-pointer",children:[(0,r.jsx)("div",{className:"mb-8 text-lg",children:a(e.title)}),(0,r.jsx)("div",{className:"mb-8 text-sm",children:e.desc}),(0,r.jsx)("div",{className:"text-sm mt-8",children:e.press})]})]},s))}),s&&(0,r.jsxs)("div",{className:"w-[48rem] h-96 bg-white fixed top-40 left-[22rem] rounded-lg overflow-scroll py-2 px-2 border border-solid",children:[(0,r.jsx)("div",{className:"w-full flex flex-row-reverse ",children:(0,r.jsx)("div",{className:"bg-slate-200 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer ",onClick:()=>t(e=>!1),children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1rem",viewBox:"0 0 384 512",children:(0,r.jsx)("path",{d:"M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"})})})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"text-center border-b-2 border-slate-300 border-solid pb-5 font-bold text-lg",children:(0,r.jsx)("span",{children:null==n?void 0:n.title})}),(0,r.jsxs)("div",{className:"px-10 py-5",children:[(0,r.jsx)("div",{className:"mb-8",children:(0,r.jsx)("span",{className:"text-lg ",children:null==n?void 0:n.summary})}),(0,r.jsx)("br",{}),(0,r.jsx)("div",{className:"flex w-full justify-center",children:(0,r.jsx)("a",{href:null==n?void 0:n.originUrl,className:"cursor-pointe w-48 h-14 bg-blue-400 px-4 py-4 rounded-md text-white shadow-md text-center",children:"원본 기사 보러가기"})})]})]})]})]})},d=t(8767);async function o(e){try{let s=await (await fetch("http://songssam.site:8080/api/search?keyword=".concat(e),{method:"GET"})).json();return s.response}catch(e){console.log(e)}}var c=function(){var e;let[s,t]=(0,l.useState)([]),[c,a]=(0,l.useState)(!1),u=(0,i.useRouter)(),x=null==u?void 0:null===(e=u.query)||void 0===e?void 0:e.keyword,h=void 0===u.query.mode?String(101):u.query.mode;(0,d.useQueryClient)();let m=(0,d.useQuery)({queryKey:["keywords"],queryFn:()=>o(x)});(0,l.useEffect)(()=>{t([]),m.refetch()},[u.query.keyword]),(0,l.useEffect)(()=>{if(m.data)t(m.data),console.log(s),a(e=>!1);else{let e=setTimeout(()=>{a(!0)},5e3);return console.log("새로운 키워드 요약 중"),()=>{clearTimeout(e),m.refetch()}}},[m.data]);let[f,w]=(0,l.useState)([]);return(0,l.useEffect)(()=>{let e=async()=>{try{let e=await (await fetch("http://songssam.site:8080/api/keyword?mode=0&sid1=".concat(h),{method:"GET"})).json(),s=Object.values(e.response);w(s)}catch(e){console.error("API 요청 실패:",e)}};e()},[h]),(0,r.jsx)("div",{children:m.isLoading?(0,r.jsx)("div",{className:"w-full h-full flex justify-center items-center text-lg font-bold",children:"isLoading"}):c?(0,r.jsx)("div",{className:"w-full h-full flex justify-center items-center text-lg font-bold",children:"기사를 요약하는 중입니다. (예상 소요시간 2분 30초)"}):(0,r.jsx)("div",{className:"w-full min-h-screen flex",children:(0,r.jsx)(n,{word:x,data:s})})})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5605)}),_N_E=e.O()}]);