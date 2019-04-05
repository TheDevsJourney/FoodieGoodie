(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{230:function(e,t,n){},231:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(34),c=n.n(i),o=n(21),l=n(22),s=n(24),p=n(23),u=n(25),m=n(37),h=n(20),d=n(27),g=n(86),b=n.n(g),f=n(88),y=n.n(f),E=n(36),v=n.n(E),k=n(91),x=n.n(k),w=n(43),j=n(92),O=n(90),C=n.n(O),S=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={text:""},n.submitForm=function(e){e.preventDefault(),n.props.history.push("/recipes"),n.setState({text:""})},n.onChange=function(e){n.setState(Object(m.a)({},e.target.name,[e.target.value]))},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:this.props.classes.root},r.a.createElement(b.a,{position:"fixed",style:{backgroundColor:"white",color:"black"}},r.a.createElement(y.a,null,r.a.createElement("div",{style:{width:"70%",margin:"0 auto",display:"flex",alignItems:"center"}},r.a.createElement(v.a,{className:this.props.classes.title,variant:"h6",noWrap:!0,style:{color:"black"}},r.a.createElement(h.b,{to:"/",style:{textDecoration:"none",color:"black",fontSize:"24px"}},"Foodie",r.a.createElement("span",{style:{color:"#e16120",fontSize:"27px",fontWeight:"bold"}},"Goodie"))),r.a.createElement("div",{className:this.props.classes.grow}),r.a.createElement("div",{className:this.props.classes.search},r.a.createElement("form",{onSubmit:function(t){e.submitForm(t),e.props.onSubmit(e.state.text)},style:{backgroundColor:"rgba(215,215,215,0.4)",display:"flex",alignItems:"center"}},r.a.createElement("div",{className:this.props.classes.searchIcon},r.a.createElement(C.a,null)),r.a.createElement(x.a,{onChange:this.onChange,placeholder:"Search\u2026",name:"text",value:this.state.text,classes:{root:this.props.classes.inputRoot,input:this.props.classes.inputInput}})))))))}}]),t}(a.Component),_=Object(d.e)(Object(j.withStyles)(function(e){return{root:{width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(m.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(m.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(w.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(w.fade)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(m.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}})(S));var I=function(e){var t=e.onSubmit;return r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",height:"100vh",width:"100vw"}},r.a.createElement("div",{style:{height:"100%",width:"100%"},className:"bgImg"}),r.a.createElement("div",{style:{position:"absolute",textAlign:"center"}},r.a.createElement("h1",{style:{textAlign:"center"}},"Welcome!",r.a.createElement("br",null),"Search For All of Your Favorite Recipes."),r.a.createElement("br",null),r.a.createElement("div",{style:{backgroundColor:"#e16120",display:"inline-block",padding:"15px 25px",cursor:"pointer"}},r.a.createElement(h.b,{to:"/recipes",style:{textDecoration:"none",color:"white"},onClick:function(){t("")}},"Find Recipes"))))},M=n(44),D=n.n(M),N=n(26),A=n.n(N),R=n(46),B=n.n(R),W=n(47),F=n.n(W),J=n(93),L=n.n(J),z=n(48),G=n.n(z),T=n(45),U=n.n(T),P=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r))))._isMounted=!1,n.state={recipes:[]},n.onClick=function(){n.props.history.push("/recipe")},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0;var t=this.props.search;D.a.get("https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=".concat(V,"&q=").concat(t,"&count=12")).then(function(t){if(e._isMounted){var n=t.data.recipes;e.setState({recipes:n})}})}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this,t=this.state.recipes;return 0===t.length?r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"90vh"}},r.a.createElement(U.a,{style:{color:"#e16120"}})):r.a.createElement(A.a,{container:!0,spacing:24,style:{width:"70%",margin:"100px auto"}},t.map(function(t){return r.a.createElement(A.a,{item:!0,xs:12,md:6,lg:4,xl:3,key:t.recipe_id},r.a.createElement(B.a,null,r.a.createElement(F.a,null,r.a.createElement(G.a,{onClick:function(){e.props.handleClick(t),e.onClick()},className:"imgDiv",image:t.image_url,title:t.title})),r.a.createElement(L.a,null,r.a.createElement(v.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.title.length>18?"".concat(t.title.substring(0,18),"..."):t.title),r.a.createElement(v.a,{component:"p"},"Publisher: ",t.publisher),r.a.createElement("div",{style:{backgroundColor:"#e16120",display:"inline-block",padding:"10px 20px",cursor:"pointer",marginTop:"15px",color:"white",fontSize:"14px"},onClick:function(){e.props.handleClick(t),e.onClick()}},r.a.createElement("p",null,"View Recipe")))))}))}}]),t}(a.Component),V="84289bbc30a5727a88c6b319049a53b1",q=Object(d.e)(P),Y=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={recipe:[]},n._isMounted=!1,n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0;var t=this.props.recipe;D.a.get("https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/get?key=".concat(H,"&rId=").concat(t.recipe_id)).then(function(t){if(e._isMounted){var n=t.data.recipe;e.setState({recipe:n})}})}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this.state.recipe;return""===this.props.search?r.a.createElement("h1",{style:{marginTop:"80px"}},"Please Enter A New Search"):0===e.length?r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"90vh"}},r.a.createElement(U.a,{style:{color:"#e16120"}})):r.a.createElement("div",null,r.a.createElement(A.a,{container:!0,spacing:24,style:{width:"70%",margin:"100px auto"}},r.a.createElement(A.a,{item:!0,xs:12,lg:6},r.a.createElement(B.a,null,r.a.createElement(F.a,null,r.a.createElement("a",{href:e.source_url,target:"_blank"},r.a.createElement(G.a,{className:"recipeIMG",image:e.image_url,title:e.title}))))),r.a.createElement(A.a,{item:!0,xs:12,lg:6,style:{display:"flex",flexDirection:"column",justifyContent:"center"}},r.a.createElement("h1",null,e.title),r.a.createElement("p",{style:{margin:"10px 0"}},"Publisher:"," ",r.a.createElement("a",{href:e.publisher_url,target:"_blank",style:{textDecoration:"none"}},e.publisher)),r.a.createElement("div",{style:{backgroundColor:"#e16120",display:"inline-block",width:"100px",padding:"10px 20px",cursor:"pointer",marginTop:"5px",color:"white",fontSize:"14px"}},r.a.createElement(h.b,{style:{color:"white",textDecoration:"none"},to:"/recipes"},"Go Back"))),r.a.createElement(A.a,{item:!0,xs:12,sm:12,lg:12,xl:10},r.a.createElement("h4",{style:{marginBottom:"20px"}},"Ingredients:"),e.ingredients.map(function(e,t){return r.a.createElement("p",{style:{marginBottom:"20px",borderLeft:"solid 1px #e16120",paddingLeft:"10px"},key:t},e)}),r.a.createElement("p",{style:{wordBreak:"break-word"}},"Want Directions? Visit"," ",r.a.createElement("a",{href:e.source_url,target:"_blank",style:{textDecoration:"none",margin:"20px 0"}},e.source_url)))))}}]),t}(a.Component),H="84289bbc30a5727a88c6b319049a53b1",K=Y,Q=(n(230),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r))))._isMounted=!1,n.state={search:"",recipe:[]},n.onSubmit=function(e){n.setState({search:e})},n.handleClick=function(e){n.setState({recipe:e})},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=localStorage.getItem("recipe"),t=JSON.parse(e),n=localStorage.getItem("search"),a=JSON.parse(n);this._isMounted&&this.setState({recipe:t,search:a})}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"componentDidUpdate",value:function(){var e=JSON.stringify(this.state.recipe);localStorage.setItem("recipe",e);var t=JSON.stringify(this.state.search);localStorage.setItem("search",t)}},{key:"render",value:function(){var e=this;return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(_,{onSubmit:this.onSubmit}),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:function(){return r.a.createElement(I,{handleClick:e.handleClick,onSubmit:e.onSubmit})}}),r.a.createElement(d.a,{path:"/recipes",component:function(){return r.a.createElement(q,{search:e.state.search,handleClick:e.handleClick})}}),r.a.createElement(d.a,{path:"/recipe",component:function(){return r.a.createElement(K,{recipe:e.state.recipe})}}))))}}]),t}(a.Component));c.a.render(r.a.createElement(Q,null),document.getElementById("root"))},94:function(e,t,n){e.exports=n(231)}},[[94,1,2]]]);
//# sourceMappingURL=main.81f2724f.chunk.js.map