(this["webpackJsonpbigbluebutton-analytics"]=this["webpackJsonpbigbluebutton-analytics"]||[]).push([[0],{231:function(e,t,n){},249:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(41),s=n.n(c),i=n(87),o=n(146),l=n(70),d=n.n(l),u=n(114),h=n(137),j=n(138),b=n(150),O=n(147),x=n(254),m=n(145),f=n(255),p=n(52),g=n(253),y=n(111),S=n.n(y),v=n(68),C=n(16),k=x.a.Text,w=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchText:"",searchedColumn:""},e.getColumnSearchProps=function(t){return{filterDropdown:function(n){var a=n.setSelectedKeys,r=n.selectedKeys,c=n.confirm,s=n.clearFilters;return Object(C.jsxs)("div",{style:{padding:8},children:[Object(C.jsx)(m.a,{ref:function(t){e.searchInput=t},placeholder:"Search ".concat(t),value:r[0],onChange:function(e){return a(e.target.value?[e.target.value]:[])},onPressEnter:function(){return e.handleSearch(r,c,t)},style:{marginBottom:8,display:"block"}}),Object(C.jsxs)(f.b,{children:[Object(C.jsx)(p.a,{type:"primary",onClick:function(){return e.handleSearch(r,c,t)},icon:Object(C.jsx)(v.a,{}),size:"small",style:{width:90},children:"Search"}),Object(C.jsx)(p.a,{onClick:function(){return e.handleReset(s)},size:"small",style:{width:90},children:"Reset"}),Object(C.jsx)(p.a,{type:"link",size:"small",onClick:function(){c({closeDropdown:!1}),e.setState({searchText:r[0],searchedColumn:t})},children:"Filter"})]})]})},filterIcon:function(e){return Object(C.jsx)(v.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(e,n){return n[t]?n[t].toString().toLowerCase().includes(e.toLowerCase()):""},onFilterDropdownVisibleChange:function(t){t&&setTimeout((function(){return e.searchInput.select()}),100)},render:function(n){e.state.searchedColumn===t&&(S.a,e.state.searchText,n&&n.toString())}}},e.handleSearch=function(t,n,a){console.log(a),n(),e.setState({searchText:t[0],searchedColumn:a}),console.log(t[0])},e.handleReset=function(t){t(),e.setState({searchText:null})},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=[Object(u.a)(Object(u.a)({title:"نام کلاس",dataIndex:"name",key:"name",width:"35%",fixed:"left"},this.getColumnSearchProps("name")),{},{render:function(t,n,a){return Object(C.jsxs)("span",{children:[e.state.searchedColumn===a?Object(C.jsx)(S.a,{highlightStyle:{backgroundColor:"blue",padding:0},searchWords:[e.state.searchText],autoEscape:!0,textToHighlight:t?t.toString():""}):t,Object(C.jsx)("br",{}),Object(C.jsx)(k,{className:"d-sm-none d-md-block d-none p-0 m-0 text-muted",children:n.meetingId})]},n.token.toString())}}),{title:"زمان شروع",dataIndex:"createdOn",key:"createdOn",sorter:function(e,t){return new Date(t.createdOn)-new Date(e.createdOn)},sortDirections:["descend"],render:function(e){return Object(C.jsx)(f.b,{size:"middle",children:new Date(e).toLocaleString()},e.toString())}},{title:"زمان پایان",dataIndex:"endedOn",key:"endedOn",render:function(e){return Object(C.jsx)(f.b,{size:"middle",children:new Date(e).toLocaleString()},e.toString())}},{title:"گزینه ها",key:"action",render:function(e,t){return Object(C.jsxs)(f.b,{size:"middle",children:[Object(C.jsx)("a",{href:"/learning-analytics-dashboard/?meeting=".concat(t.meetingId,"&report=").concat(t.token).concat("&lang=fa-IR"),children:"حضور و غیاب"}),Object(C.jsx)("a",{href:"/playback/presentation/2.3/".concat(t.meetingId),children:"پخش آنلاین"})]},t.token.toString())}}];return Object(C.jsx)(g.a,{rowKey:"token",columns:t,dataSource:this.props.data,scroll:{y:500}})}}]),n}(r.a.Component),T=w,D=n(252),E=n(143),N=(n(231),n(144)),I=n.n(N);Object({NODE_ENV:"production",PUBLIC_URL:"/analytics",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).analytics_path;function _(){return A.apply(this,arguments)}function A(){return(A=Object(i.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("/analytics/data.json");case 2:return t=e.sent,n=t.data,e.abrupt("return",n.analytics);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=D.a.Content,z=D.a.Footer,R=x.a.Title,F=x.a.Text;function L(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)(Object(i.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:t=e.sent,n=t.sort((function(e,t){return t.createdOn-e.createdOn})),r(n);case 5:case"end":return e.stop()}}),e)}))),[]),Object(C.jsx)(D.a,{className:"layout",children:Object(C.jsxs)("div",{className:"container-fluid px-5 ",children:[Object(C.jsxs)(B,{children:[Object(C.jsxs)("div",{className:"mt-4 mb-4",children:[Object(C.jsx)(R,{className:"mb-1 pb-0 ",level:3,children: "پنل آمار و اطلاعات بیگ بلو باتن"}),Object(C.jsx)(F,{className:" mt-0 pt-0 ",children:"در این پنل میتوانید وضعیت حضور و غیاب کاربران و همچنین وضعیت برگذاری کلاس ها را مشاهده نمایید."})]}),Object(C.jsx)("div",{className:"App",children:n&&n.length?Object(C.jsx)("div",{className:"rounded ",children:Object(C.jsx)(T,{data:n})}):Object(C.jsx)(f.b,{size:"middle",children:Object(C.jsx)(E.a,{size:"large"})})})]}),Object(C.jsxs)(z,{className:"pt-3",style:{textAlign:"center"},children:[Object(C.jsx)("a",{href:"https://higheredlab.com",children:"HigherEdLab.com \xa92022"})," "]})]})})}var K=document.getElementById("root");s.a.render(Object(C.jsx)(a.StrictMode,{children:Object(C.jsx)(L,{})}),K)}},[[249,1,2]]]);
//# sourceMappingURL=main.571a82db.chunk.js.map
