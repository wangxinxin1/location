webpackJsonp([6],{LwIM:function(t,a,e){"use strict";(function(t){var i=e("pFYg"),s=e.n(i),n=e("7+uW");n.default.component("dialog-tips",{template:'<div style="font-size:14px;color:#333;width:100%;height:195px;padding:10px;margin:auto;overflow: hidden"><p style="margin-bottom:10px;">确定要取消任务吗？</p><p>取消任务的原因:</p><textarea v-model="cancelResult" style="margin-top:8px;height:124px;width:100%;resize:none;border-radius:0;border:1px solid #bfcbe5;"></textarea></div>',data:function(){return{img:e("6vw/"),cancelResult:""}}}),a.a={name:"home",components:{},data:function(){return{currentStatus:"1,4",homeHeight:"",patients:[],addPatients:{name:"",gender:"",identifyid:"",birthday:"",contact_name:"",age_value:"",age_unit:"",contact_phone:"",attack_address:"",attack_time:"",action_in_chief:"",is_help:"1",help_date:"",is_persistent:0,is_intermittent:0,is_laxation:0,is_bellyache:0,is_dyspnea:0,is_shock:0,is_heart_attack:0,is_malignant_arrhythmia:0,is_cpr:0,is_hemorrhage:0,is_other:0,car_code:"",follow_car_doctor:"",follow_car_nurse:"",driver:"",hand_ring_code:"",box_code:""},modal:!1,modalCancel:!1,ageUnitArr:[],carArr:[],driverArr:[],doctorArr:[],nurseArr:[],numOfHandArr:[],deviceCodeArr:[],ruleValidate:{name:[{required:!0,message:"(必填)",trigger:"blur"},{required:!0,message:"(必填)",trigger:"submit"}],identifyid:[{required:!0,validator:this.validate.identifyidRule,trigger:"blur"},{required:!0,validator:this.validate.identifyidRule,trigger:"submit"}],contact_phone:[{required:!0,validator:this.validate.validatetel,trigger:"blur"},{required:!0,validator:this.validate.validatetel,trigger:"submit"}]},currentIndex:0,currentPatient:{},cancelWid:"530",cancelTaskTitle:"取消任务",locationCarId:""}},created:function(){this.homeHeight=t(window).height()-36-86+"px",t(window).resize(function(){this.homeHeight=t(window).height()-36-86+"px"}),this.initGlobalVary()},mounted:function(){this.dictionary(),this.init(this.currentStatus)},methods:{initGlobalVary:function(){var t={name:"",gender:"",identifyid:"",birthday:"",box_code:"",age_value:"",age_unit:"",contact_phone:"",attack_time:"",is_help:"",help_date:"",attack_address:"",is_persistent:"",is_intermittent:"",is_laxation:"",is_bellyache:"",is_dyspnea:"",is_shock:"",is_heart_attack:"",is_malignant_arrhythmia:"",is_cpr:"",is_hemorrhage:"",is_other:"",car_code:"",follow_car_doctor:"",follow_car_nurse:"",driver:"",hand_ring_code:"",cancel:"",canceltime:"",receive:"",receivetime:"",complete:"",completetime:"",pk_first_aid:"",pk_out_car:"",pk_pat:"",pk_pat_info:"",pk_task:"",pk_visit_result:"",task_state:0,ts_first_aid:"",ts_out_car:"",ts_pat:"",ts_pat_info:"",ts_task:"",ts_visit_result:""},a={phep_ecg_time:"",ecg_diagnose_time:"",tran_date:"",is_remote_ecgtran:"",ecg_conclusion:"",consciousness_type:"",respiration_rate:"",pulse_rate:"",heart_rate:"",blood_pressure_high:"",blood_pressure_low:"",killip_level:"",sampling_overtime_reason:"",ctni_value:"",ctni_unit:"",ctni_status:"",ctnt_value:"",ctnt_unit:"",ctnt_status:"",cr_value:"",cr_unit:""},e={cp_diagnosis_code:"",acs_delivery_time:"",aspirin_dose:"",acs_drug_type:"",acs_drug_dose:"",anticoagulation_date:"",anticoagulation_drug:"",is_anticoagulation:"1",anticoagulation_unit:"",jiliang:"",unit:"",thrombolysis_type:"",is_direct:"",throm_treatment_place:"",is_thrombolysis:"",start_agree_time:"",sign_agree_time:"",throm_start_time:"",throm_end_time:"",throm_drug_type:"",throm_drug_code:"",condition_desc:"",diagnosis_doctor_name:"",is_rise:"",grace_value:"",is_arrest:"",is_change:"",risk_lamination:""},i={follow_car_doctor:"",follow_car_nurse:"",driver:"",attack_time:"",help_date:"",start_car_time:"",first_mc_time:"",phep_ecg_time:"",tran_date:"",ecg_diagnose_time:"",sampling_time:"",report_time:"",diagnosis_time:"",acs_delivery_time:"",arrived_hospital_time:"",handover_time:"",visit_result:"",prognosis_disease:"",handover_nurse:"",handover_doctor:"",delivery_hospital:"",fieldTreatment:"0",toTheHospital:"0",eEnRouteTreatment:"0",denialOfTreatment:"0",refusingToSendHospital:"0"};n.default.set(this.patientinfo,"padPatInfoView",t),n.default.set(this.patientinfo,"padCheckInfoView",a),n.default.set(this.patientinfo,"padDiaInfoView",e),n.default.set(this.patientinfo,"padTimeView",i),n.default.set(this.util,"disabledFlag",!0)},Scan:function(){},patientListClick:function(t,a,e){1==a.padPatInfoView.task_state?(this.util.disabledFlag=!1,this.accessProject(a,e)):2==a.padPatInfoView.task_state||3==a.padPatInfoView.task_state?(this.util.disabledFlag=!0,n.default.set(this.patientinfo,"padPatInfoView",a.padPatInfoView),n.default.set(this.patientinfo,"padCheckInfoView",a.padCheckInfoView),n.default.set(this.patientinfo,"padDiaInfoView",a.padDiaInfoView),n.default.set(this.patientinfo,"padTimeView",a.padTimeView),n.default.set(this.patientinfo.padTimeView,"attack_time",a.padPatInfoView.attack_time),n.default.set(this.patientinfo.padTimeView,"help_date",a.padPatInfoView.help_date),this.nullChangeVoid("padPatInfoView"),this.nullChangeVoid("padCheckInfoView"),this.nullChangeVoid("padDiaInfoView"),this.nullChangeVoid("padTimeView"),n.default.set(this.util,"menuActiveName","1-2"),this.$forceUpdate(),this.$router.push({path:"baseInfo"})):4==a.padPatInfoView.task_state&&(this.util.disabledFlag=!1,n.default.set(this.patientinfo,"padPatInfoView",a.padPatInfoView),n.default.set(this.patientinfo,"padCheckInfoView",a.padCheckInfoView),n.default.set(this.patientinfo,"padDiaInfoView",a.padDiaInfoView),n.default.set(this.patientinfo,"padTimeView",a.padTimeView),n.default.set(this.patientinfo.padTimeView,"attack_time",a.padPatInfoView.attack_time),n.default.set(this.patientinfo.padTimeView,"help_date",a.padPatInfoView.help_date),this.nullChangeVoid("padPatInfoView"),this.nullChangeVoid("padCheckInfoView"),this.nullChangeVoid("padDiaInfoView"),this.nullChangeVoid("padTimeView"),n.default.set(this.util,"menuActiveName","1-2"),this.$forceUpdate(),this.$router.push({path:"baseInfo"}))},dictionary:function(){var t=this;t.$http.post(t.host("defdoc/getDefdocViewByCodes"),{code:["AGEUNITS","HAND_RING_CODE","BOX_CODE","CARFOLLOWING","AMBULANCE"]}).then(function(a){var e=a.data;if("1"==e.state){var i=e.results[0];for(var s in i)"AGEUNITS"==s&&(t.ageUnitArr=i[s]),"HAND_RING_CODE"==s&&(t.numOfHandArr=i[s]),"BOX_CODE"==s&&(t.deviceCodeArr=i[s]),"CARFOLLOWING"==s&&(t.doctorArr=i[s]),"AMBULANCE"==s&&(t.carArr=i[s])}}).catch(function(t){console.log(t)})},identifyDate:function(t){if(t.target.value&&18==t.target.value.length){var a=t.target.value.substr(6,8),e=a.substr(0,4)+"-"+a.substr(4,2)+"-"+a.substr(6,2);this.addPatients.birthday=e,this.getAge(this.addPatients.birthday)}},getAge:function(t){var a=this;""!=t&&a.$http.post(a.host("task/getage"),{birthday:t}).then(function(t){var e=t.data;if("1"==e.state)for(var i=parseInt(e.results[0].age),s=e.results[0].age.substr(e.results[0].age.length-1,1),n=0;n<a.ageUnitArr.length;n++)a.ageUnitArr[n].name==s&&(a.addPatients.age_value=i,a.addPatients.age_unit=a.ageUnitArr[n].code)}).catch(function(t){console.log(t)})},init:function(t){var a=this;a.$http.post(a.host("task/getTaskList"),{states:t}).then(function(e){var i=e.data;if("1"==i.state){a.patients=i.results;for(var s=0;s<a.patients.length;s++){var o="";"1"==a.patients[s].padPatInfoView.is_persistent&&(o+="持续性胸闷/胸痛;"),"1"==a.patients[s].padPatInfoView.is_intermittent&&(o+="间断性胸闷/胸痛;"),"1"==a.patients[s].padPatInfoView.is_laxation&&(o+="胸痛症状以缓解"),"1"==a.patients[s].padPatInfoView.is_bellyache&&(o+="腹痛;"),"1"==a.patients[s].padPatInfoView.is_dyspnea&&(o+="呼吸困难;"),"1"==a.patients[s].padPatInfoView.is_shock&&(o+="休克;"),"1"==a.patients[s].padPatInfoView.is_heart_attack&&(o+="心衰;"),"1"==a.patients[s].padPatInfoView.is_malignant_arrhythmia&&(o+="恶性心率失常;"),"1"==a.patients[s].padPatInfoView.is_cpr&&(o+="心肺复苏;"),"1"==a.patients[s].padPatInfoView.is_hemorrhage&&(o+="合并出血;"),"1"==a.patients[s].padPatInfoView.is_other&&(o+="其他;"),a.patients[s].padPatInfoView.assessment=o}a.util.disabledFlag=!1,n.default.set(a.util,"disabledFlag",!1),"1,4"==t&&4==a.patients[0].padPatInfoView.task_state&&(this.location.timer?(console.log(this.location.timer),this.location.thisLocation(a.patients[0].padPatInfoView.pk_out_car),clearInterval(this.location.timer),this.locationCarId=a.patients[0].padPatInfoView.pk_out_car,this.location.timer=setInterval(this.carLocation,8e3)):(this.location.thisLocation(a.patients[0].padPatInfoView.pk_out_car),this.locationCarId=a.patients[0].padPatInfoView.pk_out_car,this.location.timer=setInterval(this.carLocation,8e3)))}}).catch(function(t){console.log(t)})},statusClick:function(a,e){t(".taskStatusUl li").removeClass("active"),t(a.target).addClass("active"),this.currentStatus=1==e?e+",4":e,this.init(this.currentStatus)},newProject:function(){this.modal=!0,this.newTaskInit()},dateTime:function(t,a){if(10==a){if("object"==(void 0===t?"undefined":s()(t)))return t.getFullYear()+"-"+(t.getMonth()+1<=9?"0"+(t.getMonth()+1):t.getMonth()+1)+"-"+(t.getDate()<=9?"0"+t.getDate():t.getDate())}else if("object"==(void 0===t?"undefined":s()(t)))return t.getFullYear()+"-"+(t.getMonth()+1<=9?"0"+(t.getMonth()+1):t.getMonth()+1)+"-"+(t.getDate()<=9?"0"+t.getDate():t.getDate())+" "+(t.getHours()<=9?"0"+t.getHours():t.getHours())+":"+(t.getMinutes()<=9?"0"+t.getMinutes():t.getMinutes())+":"+(t.getSeconds()<=9?"0"+t.getSeconds():t.getSeconds());return t},save:function(t){var a=this;a.$refs[t].validate(function(t){t&&(a.addPatients.birthday&&(a.addPatients.birthday=a.dateTime(a.addPatients.birthday,10)),a.addPatients.attack_time&&(a.addPatients.attack_time=a.dateTime(a.addPatients.attack_time,19)),a.addPatients.help_date&&(a.addPatients.help_date=a.dateTime(a.addPatients.help_date,19)),a.$http.post(a.host("task/addPadPatInfo"),a.addPatients).then(function(t){var e=t.data;"1"==e.state&&(a.$toast.center("success.png","保存"+e.msg),a.init(a.currentStatus),a.modal=!1)}).catch(function(t){console.log(t)}))})},saveAndNext:function(t){var a=this;a.$refs[t].validate(function(t){t&&(a.addPatients.birthday&&(a.addPatients.birthday=a.dateTime(a.addPatients.birthday,10)),a.addPatients.attack_time&&(a.addPatients.attack_time=a.dateTime(a.addPatients.attack_time,19)),a.addPatients.help_date&&(a.addPatients.help_date=a.dateTime(a.addPatients.help_date,19)),a.$http.post(a.host("task/saveAndNextTaskList"),a.addPatients).then(function(t){var e=t.data;"1"==e.state&&(n.default.set(a.patientinfo,"padPatInfoView",e.results[0].padPatInfoView),n.default.set(a.patientinfo.padTimeView,"attack_time",e.results[0].padPatInfoView.attack_time),n.default.set(a.patientinfo.padTimeView,"help_date",e.results[0].padPatInfoView.help_date),a.$router.push({path:"baseInfo"}),a.util.menuActiveName="1-2",this.location.timer?(this.location.thisLocation(e.results[0].padPatInfoView.pk_out_car),clearInterval(this.location.timer),this.locationCarId=e.results[0].padPatInfoView.pk_out_car,this.location.timer=setInterval(this.carLocation,8e3)):(this.location.thisLocation(e.results[0].padPatInfoView.pk_out_car),this.locationCarId=e.results[0].padPatInfoView.pk_out_car,this.location.timer=setInterval(this.carLocation,8e3)))}).catch(function(t){console.log(t)}))})},cancel:function(){this.modal=!1,this.newTaskInit()},cancelProject:function(t,a){this.currentIndex=a,this.currentPatient=t,this.$refs.cancelConfirms.openmodal()},cancelConfirm:function(){var t=this,a={pk_task:t.currentPatient.padPatInfoView.pk_task,cancel_reason:t.$refs.cancelTask.cancelResult,ts:t.currentPatient.padPatInfoView.ts_task};t.$http.post(t.host("task/changTaskStateCannel"),a).then(function(a){var e=a.data;"1"==e.state&&(t.$toast.center("success.png","取消"+e.msg),t.init(t.currentStatus),t.cancel_reason="",t.modalCancel=!1)}).catch(function(t){console.log(t)})},cancelBtn:function(){this.modalCancel=!1},accessProject:function(t,a){1==t.padPatInfoView.task_state&&(this.location.timer?(this.location.thisLocation(t.padPatInfoView.pk_out_car),clearInterval(this.location.timer),this.locationCarId=t.padPatInfoView.pk_out_car,this.location.timer=setInterval(this.carLocation,8e3)):(this.location.thisLocation(t.padPatInfoView.pk_out_car),this.locationCarId=t.padPatInfoView.pk_out_car,this.location.timer=setInterval(this.carLocation,8e3)));var e=this,i={pk_task:t.padPatInfoView.pk_task,ts:t.padPatInfoView.ts_task};e.$http.post(e.host("task/changTaskStateAccept"),i).then(function(a){var i=a.data;"1"==i.state&&(e.$toast.center("success.png",i.msg),n.default.set(e.patientinfo,"padPatInfoView",t.padPatInfoView),n.default.set(e.patientinfo,"padCheckInfoView",t.padCheckInfoView),n.default.set(e.patientinfo,"padDiaInfoView",t.padDiaInfoView),n.default.set(e.patientinfo,"padTimeView",t.padTimeView),n.default.set(e.patientinfo.padTimeView,"attack_time",t.padPatInfoView.attack_time),n.default.set(e.patientinfo.padTimeView,"help_date",t.padPatInfoView.help_date),n.default.set(e.patientinfo.padPatInfoView,"task_state",i.results[0].task_state),n.default.set(e.patientinfo.padPatInfoView,"ts_task",i.results[0].ts),e.nullChangeVoid("padPatInfoView"),e.nullChangeVoid("padCheckInfoView"),e.nullChangeVoid("padDiaInfoView"),e.nullChangeVoid("padTimeView"),n.default.set(e.util,"menuActiveName","1-2"),e.$forceUpdate(),e.$router.push({path:"baseInfo"}))}).catch(function(t){console.log(t)})},nullChangeVoid:function(t){for(var a in this.patientinfo[t])null==this.patientinfo[t][a]&&(this.patientinfo[t][a]="")},identifyRule:function(t,a,e){if(t.target.value>0){if(!1===/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(t.target.value))return this.$toast.center("warn.png","身份证输入不合法"),!1}},numRule:function(t,a,e){37!=t.keyCode&&39!=t.keyCode&&(e||(e=3),t.target.value=this.validate.formatTwo(/[^\d]/g,t),"undefined"==t.target.value&&(t.target.value=""),this[a[0]][a[1]]=t.target.value)},newTaskInit:function(){this.addPatients={name:"",gender:"男",identifyid:"",birthday:"",contact_name:"",age_value:"",age_unit:"",contact_phone:"",attack_address:"",attack_time:"",action_in_chief:"",is_help:"1",help_date:"",is_persistent:0,is_intermittent:0,is_laxation:0,is_bellyache:0,is_dyspnea:0,is_shock:0,is_heart_attack:0,is_malignant_arrhythmia:0,is_cpr:0,is_hemorrhage:0,is_other:0,car_code:"",follow_car_doctor:"",follow_car_nurse:"",driver:"",hand_ring_code:"",box_code:""}},carLocation:function(){console.log(this.locationCarId),this.location.thisLocation(this.locationCarId)}}}}).call(a,e("7t+N"))},nU8l:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("LwIM"),s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("div",{staticClass:"mainContent"},[e("div",{staticClass:"taskStatus clearfix"},[e("span",{staticClass:"statusTitle"},[t._v("任务状态")]),t._v(" "),e("ul",{staticClass:"taskStatusUl clearfix"},[e("li",{on:{click:function(a){t.statusClick(a,0)}}},[t._v("全部")]),t._v(" "),e("li",{staticClass:"active",on:{click:function(a){t.statusClick(a,1)}}},[t._v("未完成")]),t._v(" "),e("li",{on:{click:function(a){t.statusClick(a,2)}}},[t._v("已完成")]),t._v(" "),e("li",{on:{click:function(a){t.statusClick(a,3)}}},[t._v("已取消")])]),t._v(" "),e("div",{staticClass:"addNewTask"},[e("Button",{staticClass:"button",attrs:{type:"primary",icon:"plus"},on:{click:t.newProject}},[t._v("新建任务")])],1)]),t._v(" "),e("ul",{staticClass:"patientInfo",staticStyle:{"overflow-y":"auto"},style:{height:t.homeHeight}},t._l(t.patients,function(a,i){return e("li",{staticClass:"patientItem",on:{click:function(e){t.patientListClick(e,a,i)}}},[e("h3",[e("span",{staticClass:"name"},[t._v(t._s(a.padPatInfoView.name))]),e("span",{staticClass:"sex"},[t._v("\n          "+t._s(a.padPatInfoView.gender))]),a.padPatInfoView.age_value?e("span",{staticClass:"age"},[t._v(t._s(a.padPatInfoView.age_value)+" 岁")]):t._e()]),t._v(" "),e("p",[t._v("发病地址: "),e("span",[t._v(t._s(a.padPatInfoView.attack_address))])]),t._v(" "),e("p",[t._v("联系电话: "),e("span",[t._v(t._s(a.padPatInfoView.contact_phone))])]),t._v(" "),e("p",[t._v("病情评估: "),e("span",[t._v(t._s(a.padPatInfoView.assessment))])]),t._v(" "),e("span",{staticClass:"newTaskTime"},[t._v("新建任务时间:"),e("time",[t._v(t._s(a.padPatInfoView.createtime))])]),t._v(" "),2==a.padPatInfoView.task_state?e("span",{staticClass:"newTaskTime"},[t._v("完成任务时间:"),e("time",[t._v(t._s(a.padPatInfoView.completetime))])]):t._e(),t._v(" "),3==a.padPatInfoView.task_state?e("span",{staticClass:"newTaskTime"},[t._v("取消任务时间:"),e("time",[t._v(t._s(a.padPatInfoView.canceltime))])]):t._e(),t._v(" "),e("ul",{staticClass:"btnGroup "},[1==a.padPatInfoView.task_state?e("li",[e("Button",{staticClass:"btn btnStyle",staticStyle:{background:"#3A5BA4",color:"#fff"},attrs:{size:"large"},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.accessProject(a,i)}}},[t._v("接受任务")])],1):t._e(),t._v(" "),4==a.padPatInfoView.task_state?e("li",[e("Button",{staticClass:"btn btnStyle",staticStyle:{padding:"6px 18px",background:"#3A5BA4",color:"#fff"},attrs:{size:"large"},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.accessProject(a,i)}}},[t._v("已接受任务")])],1):t._e(),t._v(" "),2!=a.padPatInfoView.task_state&&3!=a.padPatInfoView.task_state?e("li",{staticStyle:{"margin-top":"10px"}},[e("Button",{staticClass:"btn btnStyle",staticStyle:{border:"1px solid #4c77d4"},attrs:{size:"large"},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.cancelProject(a,i)}}},[t._v("取消任务")])],1):t._e(),t._v(" "),2==a.padPatInfoView.task_state?e("li",{staticStyle:{"margin-top":"10px"}},[e("Button",{staticClass:"disabledStyle",staticStyle:{border:"1px solid #4c77d4"},attrs:{disabled:"",size:"large"}},[t._v("已完成任务")])],1):t._e(),t._v(" "),3==a.padPatInfoView.task_state?e("li",{staticStyle:{"margin-top":"10px"}},[e("Button",{staticClass:"disabledStyle",staticStyle:{border:"1px solid #4c77d4"},attrs:{disabled:"",size:"large"}},[t._v("已取消任务")])],1):t._e()])])}))]),t._v(" "),e("Modal",{staticClass:"newModelStyle",attrs:{width:"860","mask-closable":!1},model:{value:t.modal,callback:function(a){t.modal=a},expression:"modal"}},[e("p",{staticStyle:{"text-align":"left",color:"#333","font-weight":"bold","margin-top":"8px"},attrs:{slot:"header"},slot:"header"},[e("span",[t._v("新建任务")])]),t._v(" "),e("div",{staticClass:"formStyle",staticStyle:{"text-align":"center"}},[e("Form",{ref:"formValidate",attrs:{model:t.addPatients,rules:t.ruleValidate,"label-width":80}},[e("ul",{staticClass:"ItemStyle clearfix"},[e("li",[e("FormItem",{staticClass:"formItem borderRadius0",attrs:{label:"姓名",prop:"name"}},[e("Input",{attrs:{maxlength:20},model:{value:t.addPatients.name,callback:function(a){t.$set(t.addPatients,"name",a)},expression:"addPatients.name"}})],1)],1),t._v(" "),e("li",[e("FormItem",{staticClass:"formItem",staticStyle:{height:"34px","text-align":"left"},attrs:{label:"性别"}},[e("RadioGroup",{staticStyle:{"margin-left":"6px"},model:{value:t.addPatients.gender,callback:function(a){t.$set(t.addPatients,"gender",a)},expression:"addPatients.gender"}},[e("Radio",{attrs:{label:"男"}},[t._v("男")]),t._v(" "),e("Radio",{attrs:{label:"女"}},[t._v("女")])],1)],1)],1),t._v(" "),e("li",[e("FormItem",{staticClass:"formItem borderRadius0",attrs:{label:"身份证号",prop:"identifyid"}},[e("Input",{attrs:{maxlength:18},on:{"on-blur":function(a){t.identifyDate(a)}},model:{value:t.addPatients.identifyid,callback:function(a){t.$set(t.addPatients,"identifyid",a)},expression:"addPatients.identifyid"}})],1)],1),t._v(" "),e("li",[e("FormItem",{staticClass:"formItem borderRadius0",attrs:{label:"出生日期"}},[e("DatePicker",{staticClass:"date-input",attrs:{type:"date",format:"yyyy-MM-dd"},on:{"on-change":function(a){t.getAge(a)}},model:{value:t.addPatients.birthday,callback:function(a){t.$set(t.addPatients,"birthday",a)},expression:"addPatients.birthday"}})],1)],1),t._v(" "),e("li",[e("FormItem",{staticClass:"formItem borderRadius0",attrs:{label:"年龄",prop:"age_value"}},[e("Input",{staticClass:"borderRightNone",staticStyle:{width:"108px",display:"inline-block"},attrs:{maxlength:3},on:{"on-keyup":function(a){t.numRule(a,["addPatients","age_value"])}},model:{value:t.addPatients.age_value,callback:function(a){t.$set(t.addPatients,"age_value",a)},expression:"addPatients.age_value"}}),e("Select",{staticStyle:{width:"74px",display:"inline-block"},attrs:{placeholder:""},model:{value:t.addPatients.age_unit,callback:function(a){t.$set(t.addPatients,"age_unit",a)},expression:"addPatients.age_unit"}},t._l(t.ageUnitArr,function(a){return e("Option",{key:a.pk_defdoc,attrs:{value:a.code}},[t._v(t._s(a.name))])}))],1)],1),t._v(" "),e("li",[e("FormItem",{staticClass:"formItem borderRadius0",attrs:{label:"联系人"}},[e("Input",{attrs:{maxlength:40},model:{value:t.addPatients.contact_name,callback:function(a){t.$set(t.addPatients,"contact_name",a)},expression:"addPatients.contact_name"}})],1)],1),t._v(" "),e("li",[e("FormItem",{staticClass:"formItem borderRadius0",attrs:{label:"联系电话",prop:"contact_phone"}},[e("Input",{attrs:{maxlength:11},model:{value:t.addPatients.contact_phone,callback:function(a){t.$set(t.addPatients,"contact_phone",a)},expression:"addPatients.contact_phone"}})],1)],1),t._v(" "),e("li",{staticStyle:{width:"534px"}},[e("FormItem",{staticClass:"formItem borderRadius0",attrs:{label:"发病地址"}},[e("Input",{staticStyle:{width:"450px"},model:{value:t.addPatients.attack_address,callback:function(a){t.$set(t.addPatients,"attack_address",a)},expression:"addPatients.attack_address"}})],1)],1),t._v(" "),e("li",[e("FormItem",{staticClass:"formItem borderRadius0",attrs:{label:"发病时间"}},[e("DatePicker",{staticClass:"date-input",attrs:{type:"datetime",format:"yyyy-MM-dd HH:mm"},model:{value:t.addPatients.attack_time,callback:function(a){t.$set(t.addPatients,"attack_time",a)},expression:"addPatients.attack_time"}})],1)],1),t._v(" "),e("li",[e("FormItem",{staticClass:"formItem checkboxGroupStyle",staticStyle:{width:"168px","text-align":"left"},attrs:{label:"呼救"}},[e("Checkbox",{staticStyle:{"margin-left":"6px"},attrs:{"true-value":"1","false-value":"0"},model:{value:t.addPatients.is_help,callback:function(a){t.$set(t.addPatients,"is_help",a)},expression:"addPatients.is_help"}},[t._v("有")])],1)],1),t._v(" "),e("li",[e("FormItem",{staticClass:"formItem borderRadius0",attrs:{label:"呼救时间"}},[e("DatePicker",{staticClass:"date-input",attrs:{type:"datetime",readonly:0==t.addPatients.is_help,format:"yyyy-MM-dd HH:mm"},model:{value:t.addPatients.help_date,callback:function(a){t.$set(t.addPatients,"help_date",a)},expression:"addPatients.help_date"}})],1)],1),t._v(" "),e("li",{staticStyle:{width:"694px","margin-bottom":"0"}},[e("FormItem",{staticClass:"formItem borderRadius0",attrs:{label:"主诉"}},[e("Input",{staticStyle:{width:"718px"},model:{value:t.addPatients.action_in_chief,callback:function(a){t.$set(t.addPatients,"action_in_chief",a)},expression:"addPatients.action_in_chief"}})],1)],1),t._v(" "),e("li",{staticClass:"borderRadius0",staticStyle:{width:"756px"}},[e("label",{staticStyle:{width:"68px","padding-left":"12px","font-size":"14px",display:"inline-block","vertical-align":"top"}},[t._v("病情评估")]),t._v(" "),e("div",{staticClass:"checkboxStyle"},[e("Checkbox",{attrs:{"true-value":"1","false-value":"0"},model:{value:t.addPatients.is_persistent,callback:function(a){t.$set(t.addPatients,"is_persistent",a)},expression:"addPatients.is_persistent"}},[t._v("持续性胸闷/胸痛")]),t._v(" "),e("Checkbox",{attrs:{"true-value":"1","false-value":"0"},model:{value:t.addPatients.is_intermittent,callback:function(a){t.$set(t.addPatients,"is_intermittent",a)},expression:"addPatients.is_intermittent"}},[t._v("间断性胸闷/胸痛")]),t._v(" "),e("Checkbox",{attrs:{"true-value":"1","false-value":"0"},model:{value:t.addPatients.is_laxation,callback:function(a){t.$set(t.addPatients,"is_laxation",a)},expression:"addPatients.is_laxation"}},[t._v("胸痛症状已缓解")]),t._v(" "),e("Checkbox",{attrs:{"true-value":"1","false-value":"0"},model:{value:t.addPatients.is_bellyache,callback:function(a){t.$set(t.addPatients,"is_bellyache",a)},expression:"addPatients.is_bellyache"}},[t._v("腹痛")]),t._v(" "),e("Checkbox",{attrs:{"true-value":"1","false-value":"0"},model:{value:t.addPatients.is_dyspnea,callback:function(a){t.$set(t.addPatients,"is_dyspnea",a)},expression:"addPatients.is_dyspnea"}},[t._v("呼吸困难")]),t._v(" "),e("Checkbox",{attrs:{"true-value":"1","false-value":"0"},model:{value:t.addPatients.is_heart_attack,callback:function(a){t.$set(t.addPatients,"is_heart_attack",a)},expression:"addPatients.is_heart_attack"}},[t._v("心衰")]),t._v(" "),e("Checkbox",{attrs:{"true-value":"1","false-value":"0"},model:{value:t.addPatients.is_malignant_arrhythmia,callback:function(a){t.$set(t.addPatients,"is_malignant_arrhythmia",a)},expression:"addPatients.is_malignant_arrhythmia"}},[t._v("恶性心率失常")]),t._v(" "),e("Checkbox",{attrs:{"true-value":"1","false-value":"0"},model:{value:t.addPatients.is_cpr,callback:function(a){t.$set(t.addPatients,"is_cpr",a)},expression:"addPatients.is_cpr"}},[t._v("心肺复苏")]),t._v(" "),e("Checkbox",{attrs:{"true-value":"1","false-value":"0"},model:{value:t.addPatients.is_hemorrhage,callback:function(a){t.$set(t.addPatients,"is_hemorrhage",a)},expression:"addPatients.is_hemorrhage"}},[t._v("合并出血")]),t._v(" "),e("Checkbox",{attrs:{"true-value":"1","false-value":"0"},model:{value:t.addPatients.is_shock,callback:function(a){t.$set(t.addPatients,"is_shock",a)},expression:"addPatients.is_shock"}},[t._v("休克")]),t._v(" "),e("Checkbox",{attrs:{"true-value":"1","false-value":"0"},model:{value:t.addPatients.is_other,callback:function(a){t.$set(t.addPatients,"is_other",a)},expression:"addPatients.is_other"}},[t._v("其他")])],1)]),t._v(" "),e("li",[e("FormItem",{staticClass:"formItem borderRadius0",attrs:{label:"车辆"}},[e("Select",{staticStyle:{width:"180px","text-align":"left"},attrs:{placement:"top"},model:{value:t.addPatients.car_code,callback:function(a){t.$set(t.addPatients,"car_code",a)},expression:"addPatients.car_code"}},t._l(t.carArr,function(a){return e("Option",{key:a.pk_defdoc,attrs:{value:a.code}},[t._v(t._s(a.name))])}))],1)],1),t._v(" "),e("li",[e("FormItem",{staticClass:"formItem borderRadius0",attrs:{label:"随车医生"}},[e("Select",{staticStyle:{width:"180px","text-align":"left"},attrs:{placement:"top"},model:{value:t.addPatients.follow_car_doctor,callback:function(a){t.$set(t.addPatients,"follow_car_doctor",a)},expression:"addPatients.follow_car_doctor"}},t._l(t.doctorArr,function(a){return e("Option",{key:a.pk_defdoc,attrs:{value:a.code}},[t._v(t._s(a.name))])}))],1)],1),t._v(" "),e("li",[e("FormItem",{staticClass:"formItem borderRadius0",attrs:{label:"随车护士"}},[e("Select",{staticStyle:{width:"180px","text-align":"left"},attrs:{placement:"top"},model:{value:t.addPatients.follow_car_nurse,callback:function(a){t.$set(t.addPatients,"follow_car_nurse",a)},expression:"addPatients.follow_car_nurse"}},t._l(t.doctorArr,function(a){return e("Option",{key:a.pk_defdoc,attrs:{value:a.code}},[t._v(t._s(a.name))])}))],1)],1),t._v(" "),e("li",[e("FormItem",{staticClass:"formItem borderRadius0",attrs:{label:"驾驶员"}},[e("Select",{staticStyle:{width:"180px","text-align":"left"},attrs:{placement:"top"},model:{value:t.addPatients.driver,callback:function(a){t.$set(t.addPatients,"driver",a)},expression:"addPatients.driver"}},t._l(t.doctorArr,function(a){return e("Option",{key:a.pk_defdoc,attrs:{value:a.code}},[t._v(t._s(a.name))])}))],1)],1),t._v(" "),e("li",[e("FormItem",{staticClass:"formItem borderRadius0",attrs:{label:"手环编号"}},[e("Input",{staticClass:"scan",staticStyle:{width:"180px","text-align":"left"},attrs:{maxlength:15,placeholder:"",icon:"qr-scanner"},on:{"on-click":t.Scan},model:{value:t.addPatients.hand_ring_code,callback:function(a){t.$set(t.addPatients,"hand_ring_code",a)},expression:"addPatients.hand_ring_code"}})],1)],1),t._v(" "),e("li",[e("FormItem",{staticClass:"formItem borderRadius0",attrs:{label:"记录器编号","label-width":84}},[e("Select",{staticStyle:{width:"180px","text-align":"left"},attrs:{placement:"top"},model:{value:t.addPatients.box_code,callback:function(a){t.$set(t.addPatients,"box_code",a)},expression:"addPatients.box_code"}},t._l(t.deviceCodeArr,function(a){return e("Option",{key:a.pk_defdoc,attrs:{value:a.code}},[t._v(t._s(a.name))])}))],1)],1)])])],1),t._v(" "),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("Button",{attrs:{type:"error",size:"large",long:""},on:{click:function(a){t.save("formValidate")}}},[t._v("保存")]),t._v(" "),e("Button",{attrs:{type:"error",size:"large",long:""},on:{click:function(a){t.saveAndNext("formValidate")}}},[t._v("保存并下一步")]),t._v(" "),e("Button",{attrs:{type:"error",size:"large",long:""},on:{click:t.cancel}},[t._v("取消")])],1)]),t._v(" "),e("modal-dalog",{ref:"cancelConfirms",attrs:{wid:t.cancelWid,dalogTitle:t.cancelTaskTitle},on:{"oktip-modal":t.cancelConfirm}},[e("dialog-tips",{ref:"cancelTask",attrs:{slot:"dalogslot"},slot:"dalogslot"})],1)],1)},staticRenderFns:[]};var n=function(t){e("spEK")},o=e("VU/8")(i.a,s,!1,n,"data-v-41cebb18",null);a.default=o.exports},spEK:function(t,a){}});
//# sourceMappingURL=6.376af70c6344d9987b63.js.map