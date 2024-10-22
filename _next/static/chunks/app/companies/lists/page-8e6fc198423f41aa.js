(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[815],{46277:function(e,t,a){Promise.resolve().then(a.bind(a,63031))},63031:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return b}});var n=a(57437),o=a(2265),i=a(23706),s=a(16555),r=a(60985),d=a(31792),c=a(69625),l=a(93142),m=a(74918),u=a(10968),p=a(66734),h=a(7990),y=a(14038),g=a(80795),x=a(1915),w=a(88009),_=a(80146),k=a(17983),f=a(1718),v=a(29928),j=a(92470);let{Title:C}=i.default;function b(){let[e,t]=(0,o.useState)("table"),a=e=>{s.ZP.info("Editing company: ".concat(e.name))},i=e=>{s.ZP.info("Previewing company: ".concat(e.name))},b=e=>{s.ZP.success("Deleted company with key: ".concat(e))},P=e=>(0,n.jsxs)(r.Z,{children:[(0,n.jsxs)(r.Z.Item,{onClick:()=>i(e),children:[(0,n.jsx)(k.Z,{size:20}),"Preview"]},"1"),(0,n.jsxs)(r.Z.Item,{onClick:()=>a(e),children:[(0,n.jsx)(f.Z,{size:20}),"Edit"]},"2"),(0,n.jsx)(r.Z.Item,{children:(0,n.jsxs)(d.Z,{title:"Are you sure you want to delete this company?",onConfirm:()=>b(e.id),okText:"Yes",cancelText:"No",children:[(0,n.jsx)(v.Z,{size:20}),"Delete"]})},"3")]});return(0,n.jsxs)("div",{children:[(0,n.jsx)(C,{level:4,children:"Company List"}),(0,n.jsxs)(l.Z,{style:{marginBottom:16,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,n.jsx)(m.ZP,{type:"primary",onClick:()=>{s.ZP.info("Add Company clicked!")},children:"Add Company"}),(0,n.jsx)(u.Z,{options:[{label:(0,n.jsx)(x.Z,{}),value:"table",title:"Table View"},{label:(0,n.jsx)(w.Z,{}),value:"card",title:"Card View"}],value:e,onChange:e=>t(e)})]}),"table"===e?(0,n.jsx)(p.Z,{dataSource:j.KM,columns:[{title:"Logo",dataIndex:"logo",key:"logo",render:e=>(0,n.jsx)(c.Z,{src:e,width:50,alt:"logo"})},{title:"ID",dataIndex:"id",key:"id"},{title:"Name",dataIndex:"name",key:"name"},{title:"Phone",dataIndex:"phone",key:"phone"},{title:"Email",dataIndex:"email",key:"email"},{title:"Website",dataIndex:"website",key:"website"},{title:"Industry",dataIndex:"industry",key:"industry"},{title:"Size",dataIndex:"size",key:"size"},{title:"Location",dataIndex:"location",key:"location"},{title:"Address",dataIndex:"address",key:"address"},{title:"Tax ID",dataIndex:"tax_id",key:"tax_id"},{title:"Revenue",dataIndex:"revenue",key:"revenue"},{title:"Source",dataIndex:"source",key:"source"},{title:"Owner",dataIndex:"owner",key:"owner"},{title:"Relationship",dataIndex:"relationship",key:"relationship"},{title:"Action",key:"action",render:(e,t)=>(0,n.jsxs)(l.Z,{size:"small",children:[(0,n.jsx)(m.ZP,{icon:(0,n.jsx)(k.Z,{size:20}),onClick:()=>i(t),type:"link"}),(0,n.jsx)(m.ZP,{icon:(0,n.jsx)(f.Z,{size:20}),onClick:()=>a(t),type:"link"}),(0,n.jsx)(d.Z,{title:"Are you sure you want to delete this company?",onConfirm:()=>b(t.id),okText:"Yes",cancelText:"No",children:(0,n.jsx)(m.ZP,{icon:(0,n.jsx)(v.Z,{size:20}),type:"link",danger:!0})})]})}],size:"small",scroll:{x:"max-content"}}):(0,n.jsx)(h.Z,{grid:{gutter:16,column:2},dataSource:j.KM,renderItem:e=>(0,n.jsx)(h.Z.Item,{children:(0,n.jsxs)(y.Z,{style:{borderRadius:12},cover:(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"center",position:"relative",padding:"16px"},children:[(0,n.jsx)(c.Z,{src:e.logo,alt:"Company Logo",width:80,height:80,preview:!1,style:{borderRadius:"50%"}}),(0,n.jsx)("div",{style:{position:"absolute",top:0,right:0},children:(0,n.jsx)(g.Z,{overlay:P(e),trigger:["click"],children:(0,n.jsx)(m.ZP,{icon:(0,n.jsx)(_.Z,{}),type:"text"})})})]}),children:[(0,n.jsx)(C,{level:5,style:{textAlign:"center"},children:e.name}),(0,n.jsxs)("p",{style:{textAlign:"center"},children:["Email: ",e.email]}),(0,n.jsxs)("p",{style:{textAlign:"center"},children:["Phone: ",e.phone]})]})})})]})}},92470:function(e,t,a){"use strict";a.d(t,{KM:function(){return n},OX:function(){return r},Y3:function(){return o},jP:function(){return i},wP:function(){return s}});let n=[{id:"1",name:"บริษัท A",logo:"https://via.placeholder.com/50",phone:"012-345-6789",email:"contact@companya.com",website:"www.companya.com",industry:"Technology",size:"50-100",location:"Bangkok",address:"123 Sukhumvit Rd, Bangkok, Thailand",tax_id:"1234567890123",revenue:"$1,000,000",source:"Referral",owner:"John Doe",relationship:"Partner"},{id:"2",name:"บริษัท B",logo:"https://via.placeholder.com/50",phone:"987-654-3210",email:"info@companyb.com",website:"www.companyb.com",industry:"Finance",size:"200-500",location:"Chiang Mai",address:"456 Charoen Muang Rd, Chiang Mai, Thailand",tax_id:"9876543210123",revenue:"$5,000,000",source:"Website Inquiry",owner:"Jane Smith",relationship:"Customer"},{id:"3",name:"บริษัท C",logo:"https://via.placeholder.com/50",phone:"555-123-4567",email:"sales@companyc.com",website:"www.companyc.com",industry:"Retail",size:"10-50",location:"Phuket",address:"789 Patong Beach, Phuket, Thailand",tax_id:"5551234560123",revenue:"$750,000",source:"Trade Show",owner:"Alice Johnson",relationship:"Vendor"},{id:"4",name:"บริษัท D",logo:"https://via.placeholder.com/50",phone:"321-654-9870",email:"contact@companyd.com",website:"www.companyd.com",industry:"Education",size:"100-200",location:"Bangkok",address:"159 Rama IX Rd, Bangkok, Thailand",tax_id:"3216549870123",revenue:"$3,000,000",source:"Cold Call",owner:"Michael Brown",relationship:"Prospect"},{id:"5",name:"บริษัท E",logo:"https://via.placeholder.com/50",phone:"444-555-6666",email:"hello@companye.com",website:"www.companye.com",industry:"Healthcare",size:"500-1000",location:"Samut Prakan",address:"234 Srinakarin Rd, Samut Prakan, Thailand",tax_id:"4445556660123",revenue:"$10,000,000",source:"Social Media",owner:"Emily Davis",relationship:"Long-term Client"}],o=[{id:"1",name:"John Doe",phone:"012-345-6789",email:"john.doe@company.com",position:"Sales Manager",dept:"Sales",company:"บริษัท A",source:"Referral",last_contracted:"2024-05-01",notes:"Important client with potential for upselling."},{id:"2",name:"Jane Smith",phone:"987-654-3210",email:"jane.smith@company.com",position:"Marketing Director",dept:"Marketing",company:"บริษัท B",source:"Website Inquiry",last_contracted:"2024-06-15",notes:"Looking for collaboration on new projects."},{id:"3",name:"Alice Johnson",phone:"555-123-4567",email:"alice.j@company.com",position:"HR Executive",dept:"Human Resources",company:"บริษัท C",source:"Trade Show",last_contracted:"2024-04-20",notes:"Follow up on recruitment services."},{id:"4",name:"Michael Brown",phone:"321-654-9870",email:"mike.brown@company.com",position:"Finance Officer",dept:"Finance",company:"บริษัท D",source:"Cold Call",last_contracted:"2024-07-10",notes:"Needs more information on pricing."},{id:"5",name:"Emily Davis",phone:"444-555-6666",email:"emily.d@company.com",position:"Product Manager",dept:"Product Development",company:"บริษัท E",source:"Social Media",last_contracted:"2024-03-15",notes:"Discuss new product features."}],i=[{id:"1",name:"Deal A",stage:"Negotiation",start_date:"2024-01-15",expected_close_date:"2024-02-20",value:1e4,customer:"บริษัท A",owner:"John Doe",priority:"High",desc:"Negotiating contract terms with the client.",source:"Referral",status:"In Progress",notes:"Client is interested in additional services.",products_services:"Consulting, Support"},{id:"2",name:"Deal B",stage:"Proposal Sent",start_date:"2024-01-10",expected_close_date:"2024-03-01",value:2e4,customer:"บริษัท B",owner:"Jane Smith",priority:"Medium",desc:"Proposal has been sent, waiting for feedback.",source:"Website Inquiry",status:"Pending",notes:"Follow up next week.",products_services:"Development, Maintenance"},{id:"3",name:"Deal C",stage:"Closed Won",start_date:"2023-12-01",expected_close_date:"2024-01-05",value:15e3,customer:"บริษัท C",owner:"Alice Johnson",priority:"Low",desc:"Closed successfully and payment received.",source:"Trade Show",status:"Closed",notes:"Client is happy with the results.",products_services:"Training"},{id:"4",name:"Deal D",stage:"Closed Lost",start_date:"2023-11-01",expected_close_date:"2023-12-15",value:5e3,customer:"บริษัท D",owner:"Michael Brown",priority:"Medium",desc:"Lost the deal due to budget constraints.",source:"Email Campaign",status:"Lost",notes:"Consider reaching out again in six months.",products_services:"Marketing Consultation"},{id:"5",name:"Deal E",stage:"Qualification",start_date:"2024-01-25",expected_close_date:"2024-02-15",value:12500,customer:"บริษัท E",owner:"Emily Davis",priority:"High",desc:"Qualifying the lead for potential solutions.",source:"Social Media",status:"In Progress",notes:"Needs additional information about services.",products_services:"Analysis, Implementation"}],s=[{id:"1",name:"John Doe",contact:"john.doe@example.com",company:"บริษัท A",job_title:"Sales Executive",source:"Referral",status:"New",interest:"High",follow_up:"2024-10-30",scoring:85,created_date:"2024-10-01"},{id:"2",name:"Jane Smith",contact:"jane.smith@example.com",company:"บริษัท B",job_title:"Marketing Manager",source:"Website Inquiry",status:"Contacted",interest:"Medium",follow_up:"2024-11-05",scoring:70,created_date:"2024-10-02"},{id:"3",name:"Alice Johnson",contact:"alice.j@example.com",company:"บริษัท C",job_title:"Product Manager",source:"Trade Show",status:"Qualified",interest:"High",follow_up:"2024-10-25",scoring:90,created_date:"2024-10-05"},{id:"4",name:"Michael Brown",contact:"mike.brown@example.com",company:"บริษัท D",job_title:"HR Director",source:"Cold Call",status:"Lost",interest:"Low",follow_up:"N/A",scoring:45,created_date:"2024-10-10"},{id:"5",name:"Emily Davis",contact:"emily.d@example.com",company:"บริษัท E",job_title:"Finance Officer",source:"Social Media",status:"Converted",interest:"High",follow_up:"2024-10-20",scoring:75,created_date:"2024-10-15"}],r=[{id:"1",title:"Prepare Sales Report",desc:"Compile and analyze sales data for the last quarter.",assigned:"Alice Johnson",related:"Deal #1234",due_date:"2024-10-25",priority:"High",status:"In Progress",created_date:"2024-10-01",completed_date:"",owner:"Bob Smith",reminder:"2024-10-24",notes:"Check with the finance team for accurate data."},{id:"2",title:"Update Website Content",desc:"Revise the product descriptions and images on the website.",assigned:"John Doe",related:"Website Redesign",due_date:"2024-11-01",priority:"Medium",status:"Pending",created_date:"2024-10-05",completed_date:"",owner:"Sara White",reminder:"2024-10-30",notes:"Coordinate with the marketing team for new content."},{id:"3",title:"Conduct Team Meeting",desc:"Discuss project progress and next steps with the team.",assigned:"Michael Brown",related:"Project Alpha",due_date:"2024-10-22",priority:"Low",status:"Completed",created_date:"2024-10-10",completed_date:"2024-10-20",owner:"Emily Davis",reminder:"2024-10-21",notes:"Send out the agenda beforehand."},{id:"4",title:"Develop Marketing Strategy",desc:"Create a marketing strategy for the upcoming product launch.",assigned:"Jane Smith",related:"Product Launch Q4",due_date:"2024-11-15",priority:"High",status:"Not Started",created_date:"2024-10-12",completed_date:"",owner:"Mark Lee",reminder:"2024-11-10",notes:"Include digital and traditional marketing channels."},{id:"5",title:"Finalize Budget Proposal",desc:"Prepare and finalize the budget proposal for next year.",assigned:"Alice Johnson",related:"Annual Budget",due_date:"2024-10-30",priority:"Medium",status:"In Progress",created_date:"2024-10-15",completed_date:"",owner:"Bob Smith",reminder:"2024-10-29",notes:"Review past expenditures and adjust accordingly."}]}},function(e){e.O(0,[412,362,990,927,843,939,909,971,117,744],function(){return e(e.s=46277)}),_N_E=e.O()}]);