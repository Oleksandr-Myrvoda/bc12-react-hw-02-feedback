(this["webpackJsonpbc12-react-hw-02-feedback"]=this["webpackJsonpbc12-react-hw-02-feedback"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={button:"FeedbackOptions_button__3YKFh"}},function(e,t,n){e.exports={title:"Section_title__2LY0y"}},function(e,t,n){e.exports={statisticsBox:"Statistics_statisticsBox__2pjvC"}},function(e,t,n){e.exports={message:"Notification_message__1-Gv-"}},function(e){e.exports=JSON.parse('[{"title":"Good","id":"good"},{"title":"Neutral","id":"neutral"},{"title":"Bad","id":"bad"}]')},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(3),o=n.n(i),s=(n(18),n(4)),r=n(5),d=n(6),l=n(13),u=n(12),b=(n(19),n(7)),j=n.n(b),h=n(0),f=function(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e){var t=e.id,a=e.title;return Object(h.jsx)("button",{className:j.a.button,type:"button",name:t,onClick:n,children:a},t)}))},x=n(8),O=n.n(x),v=function(e){var t=e.title,n=void 0===t?"":t,a=e.children;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{className:O.a.title,children:n}),a]})},p=n(9),g=n.n(p),k=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,i=e.positivePercentage;return Object(h.jsxs)("ul",{className:g.a.statisticsBox,children:[Object(h.jsxs)("li",{children:["Good: ",t]}),Object(h.jsxs)("li",{children:["Neutral: ",n]}),Object(h.jsxs)("li",{children:["Bad: ",a]}),Object(h.jsxs)("li",{children:["Total: ",c]}),Object(h.jsxs)("li",{children:["Positive feedback: ",i,"%"]})]})},m=n(10),F=n.n(m),_=function(e){var t=e.message;return Object(h.jsx)("p",{className:F.a.message,children:t})},N=n(11),P=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleFeedback=function(t){var n=t.currentTarget.name;e.setState((function(e){return Object(s.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){return e.state.good/e.countTotalFeedback()*100},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=this.countTotalFeedback(),i=Math.round(this.countPositiveFeedbackPercentage());return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(v,{title:"Please leave feedback",children:Object(h.jsx)(f,{options:N,onLeaveFeedback:this.handleFeedback})}),c<1?Object(h.jsx)(_,{message:"There is no feedback"}):Object(h.jsx)(v,{title:"Statistics",children:Object(h.jsx)(k,{good:t,neutral:n,bad:a,total:c,positivePercentage:i})})]})}}]),n}(c.a.Component),y=P;o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.6765452f.chunk.js.map