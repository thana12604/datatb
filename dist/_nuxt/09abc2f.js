(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{373:function(e,t,r){var content=r(419);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("1b7833da",content,!0,{sourceMap:!1})},418:function(e,t,r){"use strict";r(373)},419:function(e,t,r){(t=r(15)(!1)).push([e.i,".theme--dark.v-application{background-image:url(https://www.onlygfx.com/wp-content/uploads/2017/01/black-wallpaper-8-1024x768.jpg);background-attachment:fixed;background-position:100% 100%;background-repeat:no-repeat;background-size:cover}.v-card{flex:1 1 auto;padding:18px;background-color:beige}",""]),e.exports=t},449:function(e,t,r){"use strict";r.r(t);r(10),r(7),r(8),r(28),r(13),r(14),r(11),r(9);var l=r(2),n=r(102);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var c={data:function(){return{math:"2",firstname:"",lastname:"",id:"",gender:"",age:"",email:"",telephone:"",address:"",district:"",province:"",show1:!1,password:"",rules:[function(e){return!!e||"Required."}],min:function(e){return e.length>=8||"Min 8 characters"},birthday:(new Date).toISOString().substr(0,10),menu:!1,items:["Male","Female"],dialog:!1}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(n.b)(["data"])),methods:{validate:function(){var e=this.name,t=this.lastname,r=this.id,l=this.password,n=this.age,o=this.gender,c=this.email,d=this.birthday,v=this.telephone,address=this.address,f=this.district,m=this.province;this.$store.commit("input",{name:e,lastname:t,id:r,password:l,age:n,gender:o,email:c,birthday:d,telephone:v,address:address,district:f,province:m})}}},d=(r(418),r(81)),v=r(113),f=r.n(v),m=r(173),h=r(374),w=r(362),x=r(416),y=r(354),k=r(447),_=r(445),j=r(367),O=r(446),V=r(379),P=r(417),D=r(377),S=r(352),C=r(436),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-card",[r("v-container",[r("h1",{attrs:{align:"center"}},[e._v("Register")]),e._v(" "),r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{rules:e.rules,"hide-details":"auto",label:"Firstname",required:"",filled:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{rules:e.rules,"hide-details":"auto",label:"Lastname",required:"",filled:""},model:{value:e.lastname,callback:function(t){e.lastname=t},expression:"lastname"}})],1)],1),e._v(" "),r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{rules:e.rules,"hide-details":"auto",label:"ID",required:"",filled:""},model:{value:e.id,callback:function(t){e.id=t},expression:"id"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Password","append-icon":e.show1?"mdi-eye":"mdi-eye-off",rules:e.rules,type:e.show1?"text":"password","hide-details":"auto",required:"",filled:""},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),e._v(" "),r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-select",{attrs:{"hide-details":"auto",rules:[function(e){return!!e||"Item is required"}],label:"Gender",required:"",items:e.items,filled:""},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"5"}},[r("v-menu",{attrs:{"hide-details":"auto","close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var l=t.on,n=t.attrs;return[r("v-text-field",e._g(e._b({attrs:{"hide-details":"auto",label:"Birthday","prepend-icon":"mdi-calendar",readonly:"",required:"",filled:""},model:{value:e.birthday,callback:function(t){e.birthday=t},expression:"birthday"}},"v-text-field",n,!1),l))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),r("v-date-picker",{on:{input:function(t){e.menu=!1}},model:{value:e.birthday,callback:function(t){e.birthday=t},expression:"birthday"}})],1)],1)],1),e._v(" "),r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{rules:e.rules,"hide-details":"auto",label:"Age",filled:""},model:{value:e.age,callback:function(t){e.age=t},expression:"age"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"5"}},[r("v-text-field",{attrs:{rules:e.rules,"hide-details":"auto",label:"E-mail",filled:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1),e._v(" "),r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{rules:e.rules,"hide-details":"auto",label:"Tel.",filled:""},model:{value:e.telephone,callback:function(t){e.telephone=t},expression:"telephone"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{rules:e.rules,"hide-details":"auto",label:"Address",filled:""},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1)],1),e._v(" "),r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{rules:e.rules,"hide-details":"auto",label:"District",filled:""},model:{value:e.district,callback:function(t){e.district=t},expression:"district"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{rules:e.rules,"hide-details":"auto",label:"\nProvince",filled:""},model:{value:e.province,callback:function(t){e.province=t},expression:"province"}})],1)],1),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-dialog",{attrs:{width:"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var l=t.on,n=t.attrs;return[r("v-btn",e._g(e._b({attrs:{color:"success",dark:""},on:{click:e.validate}},"v-btn",n,!1),l),[e._v("\n                Commit\n              ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),r("v-card",[r("v-card-title",{staticClass:"headline"},[e._v(" Success! ")]),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.dialog=!1}}},[e._v("\n                  Success!\n                ")])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VBtn:m.a,VCard:h.a,VCardActions:w.a,VCardTitle:w.b,VCol:x.a,VContainer:y.a,VDatePicker:k.a,VDialog:_.a,VDivider:j.a,VForm:O.a,VMenu:V.a,VRow:P.a,VSelect:D.a,VSpacer:S.a,VTextField:C.a})}}]);