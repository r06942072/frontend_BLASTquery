(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(7),c=n.n(r),i=n(1),u=n(2),o=n(4),m=n(3),d=n(5);var h=function(e){return l.a.createElement("div",null,l.a.createElement("p",null,"windowWidth = ",e.data.windowWidth,", windowHeight = ",e.data.windowHeight),l.a.createElement("textarea",{cols:e.data.fastaWidth,rows:e.data.fastaHeight}))};var s=function(e){return l.a.createElement("div",null,l.a.createElement("input",{type:"submit",value:"Choose File"}))},E=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={windowWidth:0,windowHeight:0,fastaWidth:0,fastaHeight:0},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({windowWidth:window.innerWidth,windowHeight:window.innerHeight,fastaWidth:window.innerWidth/20,fastaHeight:window.innerHeight/50})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"YourQuery"),l.a.createElement("p",null,"Enter sequence below in FASTA format:"),l.a.createElement(h,{data:this.state}),l.a.createElement("p",null,"Or load it from disk:"),l.a.createElement(s,null))}}]),t}(a.Component);var b=function(e){return l.a.createElement("div",null,l.a.createElement("p",null,"Search in ",e.data.count," organisms"),l.a.createElement("form",null,l.a.createElement("input",{type:"text",placeholder:"Search..."})))},w=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={count:60},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"OurDb"),l.a.createElement("h2",null,"BLAST Databases"),l.a.createElement(b,{data:this.state}))}}]),t}(a.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Program"))}}]),t}(a.Component),p=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"ResetSubmit"))}}]),t}(a.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement("br",null),l.a.createElement("p",null,"----------------------------------------"),l.a.createElement(w,null),l.a.createElement("br",null),l.a.createElement("p",null,"----------------------------------------"),l.a.createElement(f,null),l.a.createElement("br",null),l.a.createElement("p",null,"----------------------------------------"),l.a.createElement(p,null),l.a.createElement("br",null),l.a.createElement("p",null,"----------------------------------------"))}}]),t}(a.Component);c.a.render(l.a.createElement(O,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.40d0402a.chunk.js.map