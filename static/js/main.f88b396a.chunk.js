(this["webpackJsonptodolist-3-max"]=this["webpackJsonptodolist-3-max"]||[]).push([[0],{105:function(t,e,n){},134:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),c=n(10),o=n.n(c);n(105),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r,s,l=n(50),d=n.n(l),u=n(179),j=n(180),b=n(171),O=n(136),f=n(174),h=n(182),p=n(183),m=n(181),g=n(19),T=n(8),x=n(58),v=n(81),k=n.n(v).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"1f8bceb1-8e01-4532-aa69-076eda261e41"}});!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(r||(r={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(s||(s={}));var I=function(){return k.get("todo-lists")},S=function(t){return k.post("todo-lists",{title:t})},y=function(t){return k.delete("todo-lists/".concat(t))},E=function(t,e){return k.put("todo-lists/".concat(t),{title:e})},C=function(t){return k.get("todo-lists/".concat(t,"/tasks"))},A=function(t,e){return k.delete("todo-lists/".concat(t,"/tasks/").concat(e))},w=function(t,e){return k.post("todo-lists/".concat(t,"/tasks"),{title:e})},D=function(t,e,n){return k.put("todo-lists/".concat(t,"/tasks/").concat(e),n)},L=function(t){return k.post("auth/login",t)},P=function(){return k.get("auth/me")},N=function(){return k.delete("auth/login")},F=function(t,e){t.messages.length?e(H(t.messages[0])):e(H("Some error occurred")),e(K("failed"))},R=function(t,e){e(H(t.message?t.message:"Some error occurred")),e(K("failed"))},G={isLoggedIn:!1},M=function(t){return{type:"login/SET-IS-LOGGED-IN",value:t}},_={status:"loading",error:"ERROR",isInitialized:!1},H=function(t){return{type:"APP/SET-ERROR",error:t}},K=function(t){return{type:"APP/SET-STATUS",status:t}},U=function(t){return{type:"APP/SET-IS-INITIALIZED",isInitialized:t}},z=[],V=n(36),Z={},q=function(t,e,n){return function(a,i){var c=i().tasks[n].find((function(e){return e.id===t}));if(c){var o=Object(T.a)({deadline:c.deadline,description:c.description,priority:c.priority,startDate:c.startDate,title:c.title,status:c.status},e);D(n,t,o).then((function(i){if(0===i.data.resultCode){var c=function(t,e,n){return{type:"UPDATE-TASK",model:e,todolistId:n,taskId:t}}(t,e,n);a(c)}else F(i.data,a)})).catch((function(t){R(t,a)}))}else console.warn("task not found in the state")}},Y=n(175),B=n(135),J=n(43),W=n(184),$=n(172),Q=n(3),X=i.a.memo((function(t){console.log("AddItemForm called");var e=Object(a.useState)(""),n=Object(J.a)(e,2),i=n[0],c=n[1],o=Object(a.useState)(null),r=Object(J.a)(o,2),s=r[0],l=r[1],d=function(){""!==i.trim()?(t.addItem(i),c("")):l("Title is required")};return Object(Q.jsxs)("div",{style:{textAlign:"center"},children:[Object(Q.jsx)(W.a,{variant:"outlined",disabled:t.disabled,error:!!s,value:i,onChange:function(t){c(t.currentTarget.value)},onKeyPress:function(t){null!==s&&l(null),"Enter"===t.key&&d()},label:"Title",helperText:s}),Object(Q.jsx)(b.a,{color:"primary",onClick:d,disabled:t.disabled,children:Object(Q.jsx)($.a,{})})]})})),tt=i.a.memo((function(t){console.log("EditableSpan called");var e=Object(a.useState)(!1),n=Object(J.a)(e,2),i=n[0],c=n[1],o=Object(a.useState)(t.value),r=Object(J.a)(o,2),s=r[0],l=r[1];return i?Object(Q.jsx)(W.a,{value:s,onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),t.onChange(s)}}):Object(Q.jsx)("span",{onDoubleClick:function(){c(!0),l(t.value)},children:t.value})})),et=n(173),nt=n(186),at=i.a.memo((function(t){var e=Object(a.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),n=Object(a.useCallback)((function(e){var n=e.currentTarget.checked;t.changeTaskStatus(t.task.id,n?r.Completed:r.New,t.todolistId)}),[t.task.id,t.todolistId]),i=Object(a.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return Object(Q.jsxs)("div",{className:t.task.status===r.Completed?d.a.isDone:"",children:[Object(Q.jsx)(nt.a,{checked:t.task.status===r.Completed,color:"primary",onChange:n}),Object(Q.jsx)(tt,{value:t.task.title,onChange:i}),Object(Q.jsx)(b.a,{onClick:e,children:Object(Q.jsx)(et.a,{})})]},t.task.id)})),it=n(86),ct=n.n(it),ot=i.a.memo((function(t){console.log("Todolist called");var e=Object(g.b)();Object(a.useEffect)((function(){var n;e((n=t.todolist.id,function(t){t(K("loading")),C(n).then((function(e){var a=e.data.items;t(function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(a,n)),t(K("succeeded"))})).catch((function(e){R(e,t)}))}))}),[]);var n=Object(a.useCallback)((function(e){t.addTask(e,t.todolist.id)}),[t.addTask,t.todolist.id]),i=Object(a.useCallback)((function(e){t.changeTodolistTitle(t.todolist.id,e)}),[t.todolist.id,t.changeTodolistTitle]),c=Object(a.useCallback)((function(){return t.changeFilter("all",t.todolist.id)}),[t.todolist.id,t.changeFilter]),o=Object(a.useCallback)((function(){return t.changeFilter("active",t.todolist.id)}),[t.todolist.id,t.changeFilter]),s=Object(a.useCallback)((function(){return t.changeFilter("completed",t.todolist.id)}),[t.todolist.id,t.changeFilter]),l=t.tasks;return"active"===t.todolist.filter&&(l=t.tasks.filter((function(t){return t.status===r.New}))),"completed"===t.todolist.filter&&(l=t.tasks.filter((function(t){return t.status===r.Completed}))),Object(Q.jsxs)("div",{className:ct.a.todolist,children:[Object(Q.jsxs)("h3",{children:[Object(Q.jsx)(tt,{value:t.todolist.title,onChange:i}),Object(Q.jsx)(b.a,{onClick:function(){t.removeTodolist(t.todolist.id)},disabled:"loading"===t.todolist.entityStatus,children:Object(Q.jsx)(et.a,{})})]}),Object(Q.jsx)(X,{addItem:n,disabled:"loading"===t.todolist.entityStatus}),Object(Q.jsx)("div",{children:l.map((function(e){return Object(Q.jsx)(at,{task:e,todolistId:t.todolist.id,removeTask:t.removeTask,changeTaskTitle:t.changeTaskTitle,changeTaskStatus:t.changeTaskStatus},e.id)}))}),Object(Q.jsxs)("div",{style:{paddingTop:"10px",textAlign:"center"},children:[Object(Q.jsx)(f.a,{variant:"all"===t.todolist.filter?"outlined":"text",onClick:c,color:"default",children:"All"}),Object(Q.jsx)(f.a,{variant:"active"===t.todolist.filter?"outlined":"text",onClick:o,color:"primary",children:"Active"}),Object(Q.jsx)(f.a,{variant:"completed"===t.todolist.filter?"outlined":"text",onClick:s,color:"secondary",children:"Completed"})]})]})})),rt=n(15),st=function(){var t=Object(g.c)((function(t){return t.todolists})),e=Object(g.c)((function(t){return t.tasks})),n=Object(g.c)((function(t){return t.auth.isLoggedIn})),i=Object(g.b)();Object(a.useEffect)((function(){n&&i((function(t){t(K("loading")),I().then((function(e){t({type:"SET-TODOLIST",todolist:e.data}),t(K("succeeded"))})).catch((function(e){R(e,t)}))}))}),[]);var c=Object(a.useCallback)((function(t,e){var n=function(t,e){return function(n){n(K("loading")),A(e,t).then((function(a){var i=function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}}(t,e);n(i),n(K("succeeded"))})).catch((function(t){R(t,n)}))}}(t,e);i(n)}),[i]),o=Object(a.useCallback)((function(t,e){var n=function(t,e){return function(n){n(K("loading")),w(e,t).then((function(t){if(0===t.data.resultCode){var e={type:"ADD-TASK",task:t.data.data.item};n(e),n(K("succeeded"))}else F(t.data,n)})).catch((function(t){R(t,n)}))}}(t,e);i(n)}),[i]),r=Object(a.useCallback)((function(t,e,n){var a=q(t,{status:e},n);i(a)}),[i]),s=Object(a.useCallback)((function(t,e,n){var a=q(t,{title:e},n);i(a)}),[i]),l=Object(a.useCallback)((function(t,e){var n={type:"CHANGE-TODOLIST-FILTER",id:e,filter:t};i(n)}),[i]),d=Object(a.useCallback)((function(t){var e,n=(e=t,function(t){t(K("loading")),t({type:"CHANGE-TODOLIST-ENTITY-STATUS",id:e,status:"loading"}),y(e).then((function(n){t(function(t){return{type:"REMOVE-TODOLIST",id:t}}(e)),t(K("succeeded"))})).catch((function(e){R(e,t)}))});i(n)}),[i]),u=Object(a.useCallback)((function(t,e){var n=function(t,e){return function(n){n(K("loading")),E(t,e).then((function(a){n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e)),n(K("succeeded"))})).catch((function(t){R(t,n)}))}}(t,e);i(n)}),[i]),j=Object(a.useCallback)((function(t){var e=function(t){return function(e){e(K("loading")),S(t).then((function(t){0===t.data.resultCode?(e({type:"ADD-TODOLIST",todolist:t.data.data.item}),e(K("succeeded"))):F(t.data,e)})).catch((function(t){R(t,e)}))}}(t);i(e)}),[i]);return n?Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(Y.a,{container:!0,style:{padding:"20px"},children:Object(Q.jsx)(X,{addItem:j})}),Object(Q.jsx)(Y.a,{container:!0,spacing:5,children:t.map((function(t){var n=e[t.id];return Object(Q.jsx)(Y.a,{item:!0,children:Object(Q.jsx)(B.a,{style:{padding:"5px",opacity:"0.9"},children:Object(Q.jsx)(ot,{todolist:t,tasks:n,removeTask:c,changeFilter:l,addTask:o,changeTaskStatus:r,removeTodolist:d,changeTaskTitle:s,changeTodolistTitle:u})})},t.id)}))})]}):Object(Q.jsx)(rt.a,{to:"/login"})},lt=n(188),dt=n(185);function ut(t){return Object(Q.jsx)(dt.a,Object(T.a)({elevation:6,variant:"filled"},t))}var jt=function(){var t=Object(g.c)((function(t){return t.app.error})),e=Object(g.b)(),n=null!==t,a=function(t,n){"clickaway"!==n&&e(H(null))};return Object(Q.jsx)(lt.a,{open:n,autoHideDuration:6e3,onClose:a,children:Object(Q.jsx)(ut,{onClose:a,severity:"error",children:t})})},bt=n(189),Ot=n(170),ft=n(176),ht=n(177),pt=n(90),mt=function(){var t=Object(g.b)(),e=Object(g.c)((function(t){return t.auth.isLoggedIn})),n=Object(pt.a)({initialValues:{email:"max.migalin10@gmail.com",password:"raperu88",rememberMe:!0},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Email is required",t.password?t.password.length<8&&(e.password="Invalid password"):e.password="Password is required",e},onSubmit:function(e){var a;t((a=e,function(t){t(K("loading")),L(a).then((function(e){0===e.data.resultCode?(t(M(!0)),t(K("succeeded"))):F(e.data,t)})).catch((function(e){R(e,t)}))})),n.resetForm()}});return e?Object(Q.jsx)(rt.a,{to:"/"}):Object(Q.jsx)(Y.a,{container:!0,justify:"center",style:{textAlign:"center"},children:Object(Q.jsx)(Y.a,{item:!0,xs:4,children:Object(Q.jsx)("form",{onSubmit:n.handleSubmit,children:Object(Q.jsxs)(bt.a,{children:[Object(Q.jsxs)(Ot.a,{children:[Object(Q.jsxs)("p",{children:["To log in get registered",Object(Q.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",rel:"noreferrer",children:"here"})]}),Object(Q.jsx)("p",{children:"or use common test account credentials:"}),Object(Q.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(Q.jsx)("p",{children:"Password: free"})]}),Object(Q.jsxs)(ft.a,{children:[Object(Q.jsx)(W.a,Object(T.a)({label:"Email",margin:"normal"},n.getFieldProps("email"))),n.touched.email&&n.errors.email?Object(Q.jsx)("div",{style:{color:"red"},children:n.errors.email}):null,Object(Q.jsx)(W.a,Object(T.a)({type:"password",label:"Password",margin:"normal"},n.getFieldProps("password"))),n.touched.password&&n.errors.password?Object(Q.jsx)("div",{style:{color:"red"},children:n.errors.password}):null,Object(Q.jsx)(ht.a,{label:"Remember me",control:Object(Q.jsx)(nt.a,Object(T.a)({checked:n.values.rememberMe},n.getFieldProps("rememberMe")))}),Object(Q.jsx)(f.a,{type:"submit",variant:"contained",color:"primary",children:"Sign In"})]})]})})})})},gt=n(178);var Tt=function(){var t=Object(g.c)((function(t){return t.app.status})),e=Object(g.c)((function(t){return t.app.isInitialized})),n=Object(g.c)((function(t){return t.auth.isLoggedIn})),i=Object(g.b)();return Object(a.useEffect)((function(){i((function(t){t(K("loading")),P().then((function(e){0===e.data.resultCode?(t(M(!0)),t(U(!0)),t(K("succeeded"))):t(K("failed"))})).finally((function(){t(U(!0))}))}))}),[]),e?Object(Q.jsxs)("div",{className:d.a.app,children:[Object(Q.jsx)(u.a,{color:"secondary",position:"static",children:Object(Q.jsxs)(j.a,{style:{justifyContent:"space-between"},children:[Object(Q.jsx)(b.a,{edge:"start",color:"inherit","aria-label":"Menu",children:Object(Q.jsx)(m.a,{})}),Object(Q.jsx)(O.a,{variant:"h6",children:"TodoList"}),n&&Object(Q.jsx)(f.a,{variant:"contained",color:"primary",onClick:function(){i((function(t){t(K("loading")),N().then((function(e){0===e.data.resultCode?(t(M(!1)),t(K("succeeded"))):F(e.data,t)})).catch((function(e){R(e,t)}))}))},children:"Log Out"})]})}),"loading"===t&&Object(Q.jsx)(h.a,{color:"primary"}),Object(Q.jsx)(p.a,{fixed:!0,children:Object(Q.jsxs)(rt.d,{children:[Object(Q.jsx)(rt.b,{exact:!0,path:"/",render:function(){return Object(Q.jsx)(st,{})}}),Object(Q.jsx)(rt.b,{path:"/login",render:function(){return Object(Q.jsx)(mt,{})}}),Object(Q.jsx)(rt.b,{path:"/404",render:function(){return Object(Q.jsx)("h1",{style:{textAlign:"center",fontSize:"50px"},children:"404: PAGE NOT FOUND"})}}),Object(Q.jsx)(rt.a,{from:"*",to:"/404"})]})}),Object(Q.jsx)(jt,{})]}):Object(Q.jsxs)("div",{children:[Object(Q.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(Q.jsx)("h1",{style:{color:"blue"},children:"ToDo"})}),Object(Q.jsx)("div",{style:{position:"fixed",top:"40%",textAlign:"center",width:"100%"},children:Object(Q.jsx)(gt.a,{})})]})},xt=n(59),vt=n(89),kt=Object(xt.b)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":return Object(T.a)(Object(T.a)({},t),{},Object(V.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!==e.taskId}))));case"ADD-TASK":return Object(T.a)(Object(T.a)({},t),{},Object(V.a)({},e.task.todoListId,[e.task].concat(Object(x.a)(t[e.task.todoListId]))));case"UPDATE-TASK":return Object(T.a)(Object(T.a)({},t),{},Object(V.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(T.a)(Object(T.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(T.a)(Object(T.a)({},t),{},Object(V.a)({},e.todolist.id,[]));case"REMOVE-TODOLIST":var n=Object(T.a)({},t);return delete n[e.id],n;case"SET-TODOLIST":var a=Object(T.a)({},t);return e.todolist.forEach((function(t){a[t.id]=[]})),a;case"SET-TASKS":return Object(T.a)(Object(T.a)({},t),{},Object(V.a)({},e.todolistId,e.tasks));default:return t}},todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":return[Object(T.a)(Object(T.a)({},e.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(x.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(T.a)(Object(T.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(T.a)(Object(T.a)({},t),{},{filter:e.filter}):t}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.id?Object(T.a)(Object(T.a)({},t),{},{entityStatus:e.status}):t}));case"SET-TODOLIST":return e.todolist.map((function(t){return Object(T.a)(Object(T.a)({},t),{},{filter:"all",entityStatus:"idle"})}));default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-STATUS":return Object(T.a)(Object(T.a)({},t),{},{status:e.status});case"APP/SET-ERROR":return Object(T.a)(Object(T.a)({},t),{},{error:e.error});case"APP/SET-IS-INITIALIZED":return Object(T.a)(Object(T.a)({},t),{},{isInitialized:e.isInitialized});default:return Object(T.a)({},t)}},auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"login/SET-IS-LOGGED-IN":return Object(T.a)(Object(T.a)({},t),{},{isLoggedIn:e.value});default:return t}}}),It=Object(xt.c)(kt,Object(xt.a)(vt.a));window.store=It;var St=n(45);o.a.render(Object(Q.jsx)(St.a,{children:Object(Q.jsx)(g.a,{store:It,children:Object(Q.jsx)(Tt,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},50:function(t,e,n){t.exports={app:"App_app__fgxwH",isDone:"App_isDone__hs6Gq"}},86:function(t,e,n){t.exports={todolist:"Todolist_todolist__LYFMl"}}},[[134,1,2]]]);
//# sourceMappingURL=main.f88b396a.chunk.js.map