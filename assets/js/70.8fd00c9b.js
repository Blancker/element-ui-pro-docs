(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{554:function(e,l,o){"use strict";o.r(l);var r={data:()=>({formModel:{name:void 0,sex:void 0},formRules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"blur"}]}}),methods:{handleOk(){this.$refs.formRef.validate((e,l)=>{e&&console.log(l)})},handleReset(){this.$refs.formRef.resetFields()}}},s=o(1),t=Object(s.a)(r,(function(){var e=this,l=e._self._c;return l("s-form",{ref:"formRef",attrs:{model:e.formModel,rules:e.formRules,inlineMessage:""}},[l("s-form-item",{attrs:{label:"姓名",prop:"name"}},[l("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.formModel.name,callback:function(l){e.$set(e.formModel,"name",l)},expression:"formModel.name"}})],1),e._v(" "),l("s-form-item",{attrs:{label:"性别",prop:"sex"}},[l("el-select",{attrs:{placeholder:"请选择性别"},model:{value:e.formModel.sex,callback:function(l){e.$set(e.formModel,"sex",l)},expression:"formModel.sex"}},[l("el-option",{attrs:{label:"男",value:"男"}}),e._v(" "),l("el-option",{attrs:{label:"女",value:"女"}})],1)],1),e._v(" "),l("s-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.handleOk}},[e._v("确 定")]),e._v(" "),l("el-button",{on:{click:e.handleReset}},[e._v("重 置")])],1)],1)}),[],!1,null,null,null);l.default=t.exports}}]);