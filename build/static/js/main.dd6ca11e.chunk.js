(this.webpackJsonpwmdb=this.webpackJsonpwmdb||[]).push([[0],{35:function(e,t,a){e.exports=a.p+"static/media/marvel.e65ca722.gif"},37:function(e,t,a){e.exports=a(69)},42:function(e,t,a){},44:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(32),c=a.n(i),l=(a(42),a(14)),o=a.n(l),s=a(18),m=a(16),d=a(8),p=a(11),u=(a(44),a(6)),g=a(7),v=a(10),f=a(9),b=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{overflow:"hidden"},className:"home-overlay d-flex justify-content-center align-items-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement(d.b,{to:"./movies",className:"btn d-inline-block btn-danger",type:"submit"},"Discover")))}}]),a}(n.Component),h=a(21),E=a.n(h),y=a(35),N=a.n(y),O=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex",alignItems:"center",height:"100vh"}},r.a.createElement("img",{src:N.a,style:{display:"block",margin:"auto",width:"500px"},alt:"LOADINGGGG"}))}}]),a}(n.Component),x=a(15),j=function(e){var t;return void 0!==e.details.profile_path&&null!==e.details.profile_path?r.a.createElement("a",{href:"#",className:"card",style:(t={textDecoration:"none",color:"#000",border:"none",width:"9.5rem"},Object(x.a)(t,"border","1px solid #e3e3e3"),Object(x.a)(t,"padding","0.5rem"),Object(x.a)(t,"transition","transform 0.1s ease"),t)},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w185".concat(e.details.profile_path),className:"card-img-top",style:{boxShadow:"5px 5px 10px #bbb,-5px -5px 10px #bbb",display:"inline-block",height:"10.9rem"},alt:"..."}),r.a.createElement("p",{style:{marginBottom:"-0.55rem",paddingTop:"0.5rem",textAlign:"center"}},e.details.name),r.a.createElement("span",{style:{textAlign:"center",padding:"0.1rem"}},"as"),r.a.createElement("p",{className:"text-center"},e.details.character)):null},w=a(36),k=a.n(w),S=function(e){var t,a=e.movie,i=e.getMovieById,c=e.match,l=e.loading;return Object(n.useEffect)((function(){i(c.params.id)}),[]),t="https://image.tmdb.org/t/p/original".concat(a.backdrop_path),l?r.a.createElement(O,null):r.a.createElement("div",null,r.a.createElement("div",{className:"movie-overlay",style:{height:"100vh",width:"100vw",background:"url(".concat(t,") no-repeat center center/cover")}},r.a.createElement(d.b,{to:"/movies"},r.a.createElement("i",{className:"back fas fa-chevron-circle-left"})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"first-part"}," ",r.a.createElement("div",{className:"movie-title"},a.title),r.a.createElement("div",{className:"movie-overview"},a.overview)),r.a.createElement("div",{className:"genres",style:{fontWeight:"300",padding:"3.5rem",marginTop:"2.8rem",marginLeft:"1.7rem"}},r.a.createElement("p",{style:{fontStyle:"italic",fontSize:"1.4rem"}},"GENRES:"),r.a.createElement("ul",{style:{fontWeight:"600"}},a.genres.map((function(e){return r.a.createElement("li",{key:e.id},e.name)})))),r.a.createElement("div",{className:"run-time"},r.a.createElement("p",{style:{fontStyle:"italic",fontWeight:"300",padding:"3.5rem",paddingBottom:"0.2rem",fontSize:"1.4rem",marginTop:"2.8rem",marginLeft:"1.7rem"}},"RUNTIME:"),r.a.createElement("span",{style:{fontWeight:"600",marginTop:"-1.1rem",marginLeft:"5.9rem"}},function(e){var t,a;return e-=60*(t=parseInt(e/60)),a=parseInt(e),"".concat(t<10?"0":"").concat(t,"hrs ").concat(a,"min")}(a.runtime)),r.a.createElement("div",{className:"release"},r.a.createElement("p",{style:{fontStyle:"italic",fontWeight:"300",padding:"3.5rem",paddingTop:"2.5rem",paddingBottom:"0.2rem",fontSize:"1.4rem",marginLeft:"1.7rem"}},"RELEASED ON:"),r.a.createElement("span",{style:{fontWeight:"600",marginTop:"-1.1rem",marginLeft:"5.9rem"}},k()(a.release_date).format("DD MMMM YYYY"))))),r.a.createElement("div",{className:"rating-info",style:{background:"rgba(255,255,255,0.5)",height:"15vh"}},r.a.createElement("p",{style:{fontSize:"1.4rem",padding:"1.1rem",marginTop:"0.6rem",paddingTop:"1.9rem"}},r.a.createElement("span",null,"Rating: \xa0 "),a.vote_average),r.a.createElement("i",{className:"fas fa-star",style:{padding:"auto 1.2rem auto 1.2rem"}}))),r.a.createElement("div",{className:"cast container"},a.credits.cast.slice(0,19).map((function(e){return r.a.createElement(j,{key:a.credits.cast.indexOf(e),details:e})}))))},_=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return this.props.loading?r.a.createElement(O,null):r.a.createElement("a",{href:"/movie/".concat(this.props.details.id),style:{textDecoration:"none",color:"#000"}},r.a.createElement("div",{className:"card",style:{width:"19rem"}},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(this.props.details.poster_path),style:{height:"60%",opacity:"0.9",width:"100%"},alt:"card cap",className:"card-img-top"}),r.a.createElement("div",{className:"card-body",style:{width:"18rem",overflow:"hidden",height:"12rem"}},r.a.createElement("h5",{className:"card-title"},this.props.details.title),r.a.createElement("p",{className:"card-text",style:{lineHeight:"1.4",overflow:"none"}},void 0!==this.props.details.overview?this.props.details.overview.substring(0,181)+"....":"undef"))))}}]),a}(n.Component),D=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(d.b,{className:"navbar-brand px-4",to:"/"},"WMDB"),r.a.createElement("button",{className:"navbar-toggler ",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item active"}))))},M=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"componentDidMount",value:function(){this.props.getDefaultMovies()}},{key:"render",value:function(){var e=this;return this.props.loading?r.a.createElement(O,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null),r.a.createElement("div",{className:"container",key:0,style:{gridTemplateColumns:"repeat(3,1fr)",display:"grid",gridGap:"1.2rem"}},this.props.movieList.map((function(t){return r.a.createElement(_,{key:e.props.movieList.indexOf(t),details:t})}))))}}]),a}(n.Component),T=function(){var e=Object(n.useState)({}),t=Object(m.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(!0),l=Object(m.a)(c,2),u=l[0],g=l[1],v=Object(n.useState)([]),f=Object(m.a)(v,2),h=f[0],y=f[1],N=function(){var e=Object(s.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,E.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=0dd6d34d512de01c5ea0775487aae815&append_to_response=credits"));case 3:a=e.sent,i(a.data),console.log(a.data),g(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),console.log(u),e.next=4,E.a.get("https://api.themoviedb.org/3/discover/movie?api_key=0dd6d34d512de01c5ea0775487aae815&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&append_to_response=credits");case 4:t=e.sent,y(t.data.results),g(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:b}),r.a.createElement(p.a,{exact:!0,path:"/movies",render:function(e){return r.a.createElement(M,Object.assign({},e,{getDefaultMovies:O,loading:u,movieList:h}))}}),r.a.createElement(p.a,{exact:!0,path:"/movie/:id",render:function(e){return r.a.createElement(S,Object.assign({},e,{getMovieById:N,movie:a,loading:u}))}}))))};c.a.render(r.a.createElement(T,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.dd6ca11e.chunk.js.map