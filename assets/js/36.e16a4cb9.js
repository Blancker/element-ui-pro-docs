(window.webpackJsonp=window.webpackJsonp||[]).push([[36,40],{440:function(e,t,r){"use strict";r.r(t);var o={name:"DemoApiTable",props:{columns:{type:Array,required:!0,description:"表格列的配置描述"},dataSource:{type:Array,required:!0,description:"表格数据"}},computed:{tableData(){const e=this.columns.filter(e=>!e.codeScript).map(e=>e.prop);return this.dataSource.map(t=>(e.forEach(e=>{t[e]=t[e].replace(/`\b/g,"<code>").replace(/\b`/g,"</code>")}),{...t}))}}},a=r(1),l=Object(a.a)(o,(function(){var e=this,t=e._self._c;return t("el-table",{attrs:{data:e.tableData,border:""}},e._l(e.columns,(function(r){return t("el-table-column",{key:r.prop,attrs:{prop:r.prop,label:r.label,width:r.width},scopedSlots:e._u([{key:"default",fn:function({row:o}){return[r.codeScript?t("code",[e._v(e._s(o[r.prop]))]):t("span",{domProps:{innerHTML:e._s(o[r.prop])}})]}}],null,!0)})})),1)}),[],!1,null,null,null);t.default=l.exports},606:function(e,t,r){"use strict";r.r(t);var o={name:"EmitsTable",components:{DemoApiTable:r(440).default},props:{list:{type:Array,required:!0,description:"组件事件列表"}},data:()=>({emitColumns:[{prop:"prop",label:"事件",width:"180",codeScript:!0},{prop:"desc",label:"描述"},{prop:"params",label:"回调参数",codeScript:!0}]})},a=r(1),l=Object(a.a)(o,(function(){return(0,this._self._c)("demo-api-table",{attrs:{columns:this.emitColumns,"data-source":this.list}})}),[],!1,null,null,null);t.default=l.exports}}]);