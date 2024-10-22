(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{11256:function(e,i,t){Promise.resolve().then(t.bind(t,86853)),Promise.resolve().then(t.t.bind(t,47960,23)),Promise.resolve().then(t.bind(t,3058))},86853:function(e,i,t){"use strict";t.d(i,{default:function(){return Q}});var o=t(57437),n=t(13817),l=t(94484),s=t(23706),r=t(60985),c=t(74918),d=t(27648),a=t(96036),h=t(59710),k=t(80583),u=t(77306),g=t(82619),y=t(41132),p=t(40981),m=t(47469),x=t(18540),f=t(32814),j=t(6264),z=t(71163),S=t(43564),v=t(27775),C=t(91487),F=t(75951),B=t(50760),Z=t(36916),b=t(13256),H=t(78859),I=t(54853),R=t(47857),L=t(62804),M=t(14399),D=t(2024),T=t(43489),P=t(6665),E=t(99376);let{Sider:w}=n.default,{Text:A}=s.default,N=[{key:"1",icon:(0,o.jsx)(a.Z,{size:20}),title:"Dashboard",link:"/dashboard"},{key:"2",icon:(0,o.jsx)(h.Z,{size:20}),title:"Calendar",link:"/calendar"},{key:"companies",icon:(0,o.jsx)(k.Z,{size:20}),title:"Companies",children:[{key:"3",icon:(0,o.jsx)(u.Z,{size:20}),title:"Company List",link:"/companies/lists"},{key:"4",icon:(0,o.jsx)(g.Z,{size:20}),title:"Contacts",link:"/companies/contacts"}]},{key:"projects",icon:(0,o.jsx)(y.Z,{size:20}),title:"Projects",children:[{key:"5-leads",icon:(0,o.jsx)(p.Z,{size:20}),title:"Leads",link:"/projects/leads"},{key:"6-deals",icon:(0,o.jsx)(m.Z,{size:20}),title:"Deals",link:"/projects/deals"},{key:"7-pipeline",icon:(0,o.jsx)(x.Z,{size:20}),title:"Pipeline",link:"/projects/pipeline"}]},{key:"teams",icon:(0,o.jsx)(f.Z,{size:20}),title:"Teams",children:[{key:"8-task",icon:(0,o.jsx)(j.Z,{size:20}),title:"Tasks",link:"/teams/tasks"},{key:"9-timeline",icon:(0,o.jsx)(z.Z,{size:20}),title:"Timeline",link:"/teams/timeline"}]},{key:"documents",icon:(0,o.jsx)(S.Z,{size:20}),title:"Documents",children:[{key:"10-invoice",icon:(0,o.jsx)(v.Z,{size:20}),title:"Invoices",link:"/documents/invoices"},{key:"11-receipt",icon:(0,o.jsx)(C.Z,{size:20}),title:"Receipts",link:"/documents/receipts"}]},{key:"analytics-reports",icon:(0,o.jsx)(F.Z,{size:20}),title:"Analytics & Reports",children:[{key:"12-lead",icon:(0,o.jsx)(B.Z,{size:20}),title:"Leads",link:"/analytics-reports/leads"},{key:"13-deal",icon:(0,o.jsx)(Z.Z,{size:20}),title:"Deals",link:"/analytics-reports/deals"},{key:"14-customer",icon:(0,o.jsx)(b.Z,{size:20}),title:"Customers",link:"/analytics-reports/customers"}]},{key:"settings",icon:(0,o.jsx)(H.Z,{size:20}),title:"Settings",children:[{key:"15-user",icon:(0,o.jsx)(I.Z,{size:20}),title:"Users",link:"/settings/users"},{key:"16-role",icon:(0,o.jsx)(R.Z,{size:20}),title:"Roles",link:"/settings/roles"}]},{key:"helpdesk",icon:(0,o.jsx)(L.Z,{size:20}),title:"Helpdesk",children:[{key:"17-issue",icon:(0,o.jsx)(M.Z,{size:20}),title:"Issues",link:"/helpdesk/issues"},{key:"18-knowledge",icon:(0,o.jsx)(D.Z,{size:20}),title:"Knowledge",link:"/helpdesk/knowledges"}]}];var G=e=>{var i,t,n,l;let{collapsed:s,onCollapse:a}=e,h=(0,E.usePathname)(),k=(null===(i=N.find(e=>e.link===h))||void 0===i?void 0:i.key)||(null===(l=N.find(e=>{var i;return null===(i=e.children)||void 0===i?void 0:i.some(e=>e.link===h)}))||void 0===l?void 0:null===(n=l.children)||void 0===n?void 0:null===(t=n.find(e=>e.link===h))||void 0===t?void 0:t.key)||"1";return(0,o.jsxs)(w,{collapsed:s,onCollapse:a,width:240,style:{height:"100vh",position:"fixed",left:0,overflow:"auto",scrollbarWidth:"thin"},children:[(0,o.jsx)("div",{className:"logo",style:{padding:"16px",fontSize:"24px",textAlign:"center"},children:"CRM"}),(0,o.jsx)(r.Z,{mode:"inline",defaultSelectedKeys:[k],items:N.map(e=>{let i=h.includes(e.link||e.key);return e.children?{key:e.key,icon:(0,o.jsx)("span",{style:{color:i?"#699735":void 0},children:e.icon}),label:(0,o.jsx)("span",{style:{color:i?"#699735":void 0},children:e.title}),children:e.children.map((i,t)=>({key:"".concat(e.key,"-").concat(i.key,"-").concat(t),icon:i.icon,label:(0,o.jsx)(d.default,{href:i.link,children:i.title})}))}:{key:e.key,icon:e.icon,label:(0,o.jsx)(d.default,{href:e.link,children:e.title})}}),style:{fontWeight:600}}),(0,o.jsx)("div",{style:{textAlign:"center"},children:(0,o.jsx)(c.ZP,{type:"primary",onClick:a,style:{marginBottom:6,fontSize:"12px",width:24,height:24,lineHeight:"24px",borderRadius:"50%",padding:0},children:s?(0,o.jsx)(T.Z,{size:18}):(0,o.jsx)(P.Z,{size:18})})}),(0,o.jsx)("div",{style:{textAlign:"center"},children:(0,o.jsx)(A,{type:"secondary",style:{fontSize:"13px"},children:s?"v.1.0.0":"version 1.0.0"})})]})},_=t(63709),W=t(2265);let{Header:O}=n.default;var K=e=>{let{onThemeToggle:i,isDark:t}=e;return(0,o.jsxs)(O,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,o.jsx)("div",{className:"logo",style:{fontSize:"24px"},children:"MARMO"}),(0,o.jsx)(_.Z,{checked:t,onChange:i,checkedChildren:"Dark",unCheckedChildren:"Light"})]})},U={token:{colorPrimary:"#96C65E",colorInfo:"#1e4c92",colorLink:"#00bfff",fontSize:16,colorSuccess:"#95D5B2",colorWarning:"#F2CC8F",colorError:"#F28482",colorTextBase:"#ffffff",colorBgBase:"#33363D",sizeStep:4,borderRadius:12},components:{Button:{contentFontSize:16,onlyIconSize:16,controlHeight:40,controlHeightLG:48,controlHeightSM:32,borderRadius:16,borderRadiusLG:18,borderRadiusSM:10},Layout:{headerBg:"#000000",siderBg:"#000000",bodyBg:"#000000"},Menu:{fontSize:15,itemHeight:40,subMenuItemBg:"transparent",colorSplit:"transparent",colorItemBg:"#000000",colorItemText:"#ffffff",colorItemBgHover:"#33363D",colorItemBgSelected:"#96C65E",colorItemTextSelected:"#000000"},Input:{controlHeight:40},InputNumber:{controlHeight:40},Mentions:{controlHeight:40},Radio:{controlHeight:40},Select:{controlHeight:40},Slider:{controlHeight:36},TreeSelect:{controlInteractiveSize:20},Calendar:{fullBg:"#33363D",controlItemBgActive:"#96C65E",colorPrimary:"#000000"},Segmented:{controlHeight:36},Table:{headerBg:"#CCCAB0",headerColor:"#33363D",lineHeight:2},Spin:{dotSize:24,dotSizeLG:36,dotSizeSM:18}}},q={token:{colorPrimary:"#33363D",colorInfo:"#96C65E",colorLink:"#CCCAB0",fontSize:16,colorSuccess:"#95D5B2",colorWarning:"#F2CC8F",colorError:"#F28482",colorTextBase:"#000000",colorBgBase:"#FFFFFF",sizeStep:4,borderRadius:12},components:{Button:{contentFontSize:16,onlyIconSize:16,controlHeight:40,controlHeightLG:48,controlHeightSM:32,borderRadius:16,borderRadiusLG:18,borderRadiusSM:10},Layout:{headerBg:"#F4F4F4",siderBg:"#F4F4F4",bodyBg:"#F4F4F4"},Menu:{fontSize:15,itemHeight:40,subMenuItemBg:"transparent",colorSplit:"transparent",colorItemBg:"#F4F4F4",colorItemText:"#000000",colorItemBgHover:"#CCCAB0",colorItemBgSelected:"#96C65E"},Input:{controlHeight:40},InputNumber:{controlHeight:40},Mentions:{controlHeight:40},Radio:{controlHeight:40},Select:{controlHeight:40},Slider:{controlHeight:36},TreeSelect:{controlInteractiveSize:20},Calendar:{fullBg:"#F4F4F4",controlItemBgActive:"#96C65E",colorPrimary:"#FFFFFF"},Segmented:{controlHeight:36},Table:{headerBg:"#33363D",headerColor:"#F4F4F4",lineHeight:2,fontSize:14},Spin:{dotSize:24,dotSizeLG:36,dotSizeSM:18}}};let{Content:J}=n.default;var Q=e=>{let{children:i}=e,[t,s]=(0,W.useState)(!1),[r,c]=(0,W.useState)(!1);return(0,o.jsx)(l.ZP,{theme:t?U:q,children:(0,o.jsxs)(n.default,{style:{minHeight:"100vh"},children:[(0,o.jsx)(G,{collapsed:r,onCollapse:()=>{c(!r)}}),(0,o.jsxs)(n.default,{style:{marginLeft:r?80:240},children:[(0,o.jsx)(K,{onThemeToggle:()=>{s(e=>!e)},isDark:t}),(0,o.jsx)(J,{style:{overflow:"initial",padding:16,minHeight:"calc(100vh - 64vh)"},children:i})]})]})})}},47960:function(){}},function(e){e.O(0,[587,412,927,756,971,117,744],function(){return e(e.s=11256)}),_N_E=e.O()}]);