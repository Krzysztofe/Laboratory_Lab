"use strict";(self.webpackChunklaboratory_lab=self.webpackChunklaboratory_lab||[]).push([[482],{4482:function(n,t,e){e.r(t),e.d(t,{default:function(){return S}});var r=e(5048),i=e(184),a=function(n){var t=n.children;return(0,i.jsx)("table",{style:{fontSize:10},children:t})},c=e(2791),s=e(485),o=e(8546),u=e(8816),l=e(1936),d=[{name:"name",type:"text"},{name:"technics",type:"text"},{name:"alcaloids",type:"text"},{name:"selectMilimolles",type:"text"},{name:"substract",type:"text"},{name:"selectReactionCondition",type:"text"},{name:"solvents",type:"text"}],f=[{name:"startDate",type:"date"},{name:"finishDate",type:"date"},{name:"startTime",type:"time"},{name:"finishTime",type:"time"}],x=function(){var n=(0,r.I0)(),t=(0,r.v9)((function(n){return n.tableReactions})).editedReaction,e=(0,r.v9)((function(n){return n.tableReactions.toggleTable})).isOpen,a=function(t){var e=t.target,r=e.name,i=e.value;n((0,l.Cp)([r,i]))},c=e?d:f;return(0,i.jsx)(i.Fragment,{children:c.map((function(n){return(0,i.jsx)("td",{children:(0,i.jsx)(u.Z,{text:"",type:n.type,name:n.name,value:t[n.name],onChange:a})},n.name)}))})},h=e(3433),j=function(n){var t=Object.values(n).slice(0,8);return t.shift(),t},m=function(n){var t=Object.values(n),e=[t[0]].concat((0,h.Z)(t.slice(8,13)));return e.shift(),e},p=function(n){var t=n.message;return(0,i.jsx)("tbody",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("td",{children:t})})})},v=function(n){var t=n.reaction,e=(0,s.bY)(void 0),a=e.error,c=(e.isLoading,(0,r.v9)((function(n){return n.tableReactions.toggleTable})).isOpen?j:m);return a&&"error"in a?(0,i.jsx)(p,{message:a.error}):(0,i.jsx)(i.Fragment,{children:c(t).map((function(n){return(0,i.jsx)("td",{children:Array.isArray(n)?n.flat().join(", "):n},crypto.randomUUID())}))})},y=e(4165),b=e(1413),k=e(5861),g=e(9439),z=e(6355),R=e(8820),Z=e(6856),C=function(n){var t=n.reaction,e=(0,r.I0)(),a=(0,r.v9)((function(n){return n.tableReactions})).editedReaction,c=(0,r.v9)((function(n){return n.tableReactions})).printReactions,o=(0,s.gD)(),u=(0,g.Z)(o,1)[0],d=(0,s.wF)(),f=(0,g.Z)(d,1)[0],x=function(){var n=(0,k.Z)((0,y.Z)().mark((function n(t,r){var i;return(0,y.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=(0,b.Z)((0,b.Z)({},a),{},{isEdit:!0}),e((0,l.He)([t,r])),n.next=4,u(i);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),h=function(){var n=(0,k.Z)((0,y.Z)().mark((function n(t){return(0,y.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f(t);case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("td",{children:t.isEdit?(0,i.jsx)("button",{onClick:function(){return function(n,t){e((0,l.fy)([n,t]))}(c,t.id)},children:(0,i.jsx)(R.QML,{style:{fontSize:25}})}):(0,i.jsx)("button",{onClick:function(){return x(c,t.id)},children:(0,i.jsx)(Z.FTL,{style:{fontSize:25}})})}),(0,i.jsx)("td",{children:(0,i.jsx)("button",{onClick:function(){return h(t.id)},children:(0,i.jsx)(z.AMf,{style:{fontSize:25}})})})]})},w=function(){var n=(0,r.I0)(),t=(0,o.z)().reactions,e=(0,r.v9)((function(n){return n.tableReactions})).printReactions,a=(0,s.bY)(void 0),u=a.error;a.isLoading;return(0,c.useEffect)((function(){t&&n((0,l.Ym)(t))}),[t,n]),u&&"error"in u?(0,i.jsx)(p,{message:u.error}):0===e.length?(0,i.jsx)(p,{message:"Brak zapisanych reakcji"}):(0,i.jsx)("tbody",{children:null===e||void 0===e?void 0:e.map((function(n){return(0,i.jsxs)("tr",{children:[n.isEdit?(0,i.jsx)(v,{reaction:n}):(0,i.jsx)(x,{}),(0,i.jsx)(C,{reaction:n})]},n.id)}))})},T=["Nazwa","Technika","Alkaloidy","Milimole","Substrakt","Warunki","Rozpuszczalniki"],D=["Data start","Data koniec","Gdzina start","Godzina koniec"],F=function(){var n=(0,r.v9)((function(n){return n.tableReactions.toggleTable})).isOpen;return(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:n?T.map((function(n){return(0,i.jsx)("td",{style:{fontWeight:900},children:n},n)})):D.map((function(n){return(0,i.jsx)("td",{style:{fontWeight:900},children:n},n)}))})})},S=function(){var n=(0,r.I0)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{style:{fontSize:10,marginTop:200},children:[(0,i.jsx)("div",{onClick:function(){return n((0,l.bk)(!0))},children:"Warunki reakcji"}),(0,i.jsx)("div",{onClick:function(){return n((0,l.bk)(!1))},children:"Czasy reakcji"})]}),(0,i.jsxs)(a,{children:[(0,i.jsx)(F,{}),(0,i.jsx)(w,{})]})]})}}}]);
//# sourceMappingURL=482.66e0f0ce.chunk.js.map