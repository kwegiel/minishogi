(this.webpackJsonpminishogi=this.webpackJsonpminishogi||[]).push([[0],{58:function(e,t,n){e.exports=n(99)},63:function(e,t,n){},95:function(e,t){},99:function(e,t,n){"use strict";n.r(t);var r=n(7),a=n(8),l=n(14),c=n(13),i=n(1),o=n.n(i),u=n(54),s=n(56),p=n(25);var v={name:"tic-tac-toe",setup:function(){return{cells:Array(9).fill(null)}},moves:{clickCell:function(e,t,n){null===e.cells[n]&&(e.cells[n]=t.currentPlayer)}},turn:{moveLimit:1},endIf:function(e,t){return n=e.cells,[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].map((function(e){var t=e.map((function(e){return n[e]}));return t.every((function(e){return null!==e&&e===t[0]}))})).some((function(e){return!0===e}))?{winner:t.currentPlayer}:0===e.cells.filter((function(e){return null===e})).length?{draw:!0}:void 0;var n}},m=(n(63),function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).onClick=function(t){e.isActive(t)&&e.props.moves.clickCell(t)},e}return Object(a.a)(n,[{key:"isActive",value:function(e){return!!this.props.isActive&&null===this.props.G.cells[e]}},{key:"render",value:function(){for(var e=this,t=[],n=0;n<3;n++){for(var r=[],a=function(t){var a=3*n+t;r.push(o.a.createElement("td",{key:a,className:e.isActive(a)?"active":"",onClick:function(){return e.onClick(a)}},e.props.G.cells[a]))},l=0;l<3;l++)a(l);t.push(o.a.createElement("tr",{key:n},r))}var c=null;return this.props.ctx.gameover&&(c=void 0!==this.props.ctx.gameover.winner?o.a.createElement("div",{id:"winner"},"Winner: ",this.props.ctx.gameover.winner):o.a.createElement("div",{id:"winner"},"Draw!")),o.a.createElement("div",null,o.a.createElement("table",{id:"board"},o.a.createElement("tbody",null,t)),c)}}]),n}(o.a.Component)),f=Object(s.a)({game:v,board:m,debug:!1,multiplayer:Object(p.b)({server:"localhost:8000"})}),y=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={playerID:null},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this;return null===this.state.playerID?o.a.createElement("div",null,o.a.createElement("p",null,"Play as"),o.a.createElement("button",{onClick:function(){return e.setState({playerID:"0"})}},"Player 0"),o.a.createElement("button",{onClick:function(){return e.setState({playerID:"1"})}},"Player 1")):o.a.createElement("div",null,o.a.createElement(f,{playerID:this.state.playerID}))}}]),n}(o.a.Component);Object(u.render)(o.a.createElement(y,null),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.3bd40d4d.chunk.js.map