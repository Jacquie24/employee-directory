(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{42:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){"use strict";s.r(t);var c=s(2),n=s.n(c),a=s(12),r=s.n(a),l=s(13),o=s(14),i=s(15),j=s(18),h=s(17),d=s(16),m=s.n(d),u=s(0),b=function(e){var t=e.employees;return Object(u.jsx)("tbody",{children:t.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("img",{src:e.picture.thumbnail,alt:e.name.first})}),Object(u.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(u.jsx)("td",{children:e.phone}),Object(u.jsx)("td",{children:e.email}),Object(u.jsx)("td",{children:e.dob.date.substring(0,10)})]},e.id.value)}))})},p=(s(42),function(e){return Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-sm-4"}),Object(u.jsx)("div",{className:"col-sm-4",children:Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Name",onChange:e.handleChange,"aria-label":"Search"}),Object(u.jsx)("button",{className:"btn my-2 my-sm-2 mb-2",type:"submit",children:"Search"})]})})]})}),O=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={employees:[],filterEmployees:[]},e.handleInputChange=function(t){var s=t.target,c=s.name,n=s.value;e.setState(Object(l.a)({},c,n))},e.nameSort=function(){var t=e.state.employees.sort((function(e,t){var s=e.name.last.toUpperCase(),c=t.name.last.toUpperCase();return s<c?-1:s>c?1:0}));e.setState({filterEmployees:t})},e.searchEmp=function(t){var s=t.target.value.toLowerCase(),c=e.state.employees.filter((function(e){return e.name.first.toLowerCase().includes(s)||e.name.last.toLowerCase().includes(s)}));console.log(s),console.log(c),e.setState({filterEmployees:c})},e}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var e=this;m.a.get("https://randomuser.me/api/?results=25&nat=us").then((function(t){console.log(t.data.results),e.setState({employees:t.data.results,filterEmployees:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(p,{handleChange:this.searchEmp}),Object(u.jsxs)("table",{className:"table mt-5",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"Image"}),Object(u.jsxs)("th",{scope:"col",children:["Name",Object(u.jsx)("i",{className:"fa fa-arrow-circle-down","aria-hidden":"true",onClick:this.nameSort})]}),Object(u.jsx)("th",{scope:"col",children:"Phone"}),Object(u.jsx)("th",{scope:"col",children:"Email"}),Object(u.jsx)("th",{scope:"col",children:"DOB"})]})}),Object(u.jsx)(b,{employees:this.state.filterEmployees})]})]})}}]),s}(c.Component),f=(s(43),function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{className:"display-4",children:"Employee Directory"}),Object(u.jsx)("p",{className:"lead",children:"Click on Name to filter alphabetically or use the search bar to narrow your results."})]})}),Object(u.jsx)("hr",{})]})});var x=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(f,{}),Object(u.jsx)(O,{})]})},y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,45)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),c(e),n(e),a(e),r(e)}))};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),y()}},[[44,1,2]]]);
//# sourceMappingURL=main.541fcd69.chunk.js.map