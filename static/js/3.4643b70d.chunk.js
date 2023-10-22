"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[3],{6003:function(e,n,r){r.r(n),r.d(n,{default:function(){return J}});var s=r(3634),t=r(1614),c=r(4554),a=r(890),i=r(9281),o=r(5527),l=r(9836),u=r(6890),d=r(5855),m=r(3994),x=r(3382),h=r(7247),j=r(298),Z=r(9434),f=r(4808),b=r(2611),v=r(184),p=function(){var e=(0,Z.I0)();return(0,v.jsx)(c.Z,{component:"form",sx:b.nC.hX,noValidate:!0,children:(0,v.jsx)(j.Z,{id:"outlined-basic",label:"Find contacts",variant:"outlined",onChange:function(n){return e((0,f.T)(n.currentTarget.value))}})})},g=r(6916),C=function(e){return e.contacts.items},N=function(e){return e.contacts.isLoading},y=function(e){return e.contacts.error},k=(0,g.P1)([C,function(e){return e.filter}],(function(e,n){if(!n)return e;var r=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(r)}))})),K=r(9439),w=r(2791),q=r(7005),z=r(9875),_=r(7133),A=r(5729),F=r(5705),L=r(6727),P={checkName:/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,messageName:"Name may contain only letters"},S=P.checkName,I=P.messageName,T={checkNum:/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,messageNum:"Phone number must be digits"},V=T.checkNum,B=T.messageNum,G=L.Ry().shape({name:L.Z_().matches(S,I).required("Name is required"),number:L.Z_().matches(V,B).required("Number is required")}),H={name:"",number:""},R=function(e){var n=e.onClose,r=(0,Z.I0)(),t=(0,Z.v9)(C);return(0,v.jsx)(F.J9,{initialValues:H,validationSchema:G,onSubmit:function(e,c){var a=c.resetForm;t.some((function(n){var r=n.name,s=n.number;return r.toLowerCase()===e.name.toLowerCase()||s===e.number}))?alert("A contact with the same name or number is already in contacts"):(r((0,s.uK)(e)),a(),n())},children:(0,v.jsxs)(F.l0,{style:b.cr.cr,children:[(0,v.jsxs)(_.Z,{htmlFor:"name",sx:b.cr.PS,children:["Name",(0,v.jsx)(F.gN,{type:"text",name:"name",style:b.cr.qH}),(0,v.jsx)(F.Bc,{name:"name",component:"div",style:b.cr.N3})]}),(0,v.jsxs)(_.Z,{htmlFor:"number",sx:b.cr.PS,children:["Number",(0,v.jsx)(F.gN,{type:"tel",name:"number",style:b.cr.qH}),(0,v.jsx)(F.Bc,{name:"number",component:"div",style:b.cr.N3})]}),(0,v.jsx)(A.Z,{variant:"contained",type:"submit",children:"Add"})]})})},D=function(){var e=w.useState(!1),n=(0,K.Z)(e,2),r=n[0],s=n[1],t=function(){return s(!1)};return(0,v.jsxs)(c.Z,{sx:b.nC.uK,children:[(0,v.jsx)(z.Z,{sx:b.qv.uK,onClick:function(){return s(!0)},children:"add_circle"}),(0,v.jsx)(q.Z,{open:r,onClose:t,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,v.jsx)(c.Z,{sx:b.nC.N3,children:(0,v.jsx)(R,{onClose:t})})})]})},E=function(){var e=(0,Z.v9)(C),n=(0,Z.v9)(k),r=(0,Z.I0)();return(0,v.jsx)(t.Z,{sx:b.nC.Un,children:0===e.length?(0,v.jsxs)(c.Z,{sx:b.nC.ge,children:[(0,v.jsx)(a.Z,{variant:"h7",children:"There are no contacts in your phone book yet. Please add contacts."}),(0,v.jsx)(D,{})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(c.Z,{sx:b.nC.ge,children:[(0,v.jsx)(p,{}),(0,v.jsxs)(c.Z,{sx:b.nC.ge,children:[(0,v.jsx)(a.Z,{variant:"h7",mr:1,children:"Add contact"}),(0,v.jsx)(D,{})]})]}),0===n.length?(0,v.jsx)("p",{children:"Contacts not found"}):(0,v.jsx)(i.Z,{component:o.Z,children:(0,v.jsxs)(l.Z,{sx:b.Kz.Vs,"aria-label":"simple table",children:[(0,v.jsx)(u.Z,{children:(0,v.jsxs)(d.Z,{sx:b.Kz.bc,children:[(0,v.jsx)(m.Z,{sx:b.Kz.K5,children:"Name"}),(0,v.jsx)(m.Z,{align:"center",sx:b.Kz.K5,children:"Number"}),(0,v.jsx)(m.Z,{align:"right",sx:b.Kz.K5,children:"Delete"})]})}),(0,v.jsx)(x.Z,{children:n.map((function(e){var n=e.id,t=e.name,c=e.number;return(0,v.jsxs)(d.Z,{sx:b.Kz.Gb,children:[(0,v.jsx)(m.Z,{component:"th",scope:"row",children:t}),(0,v.jsx)(m.Z,{align:"center",children:c}),(0,v.jsx)(m.Z,{align:"right",children:(0,v.jsx)(h.Z,{sx:b.qv.ap,onClick:function(){return r((0,s.GK)(n))}})})]},n)}))})]})})]})})},J=function(){var e=(0,Z.I0)(),n=(0,Z.v9)(N),r=(0,Z.v9)(y);return(0,w.useEffect)((function(){e((0,s.yF)())}),[e]),(0,v.jsxs)(c.Z,{sx:{pt:2},children:[(0,v.jsx)("div",{children:n&&!r&&"Request in progress..."}),(0,v.jsx)(E,{})]})}}}]);
//# sourceMappingURL=3.4643b70d.chunk.js.map