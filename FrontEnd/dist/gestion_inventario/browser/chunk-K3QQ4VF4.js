import{a as ge,b as ye}from"./chunk-2DAWELSL.js";import"./chunk-O7HXUX3S.js";import{a as ue}from"./chunk-DK2NHJD3.js";import{g as B}from"./chunk-7AUJDYC3.js";import{a as de}from"./chunk-MHTYV42J.js";import"./chunk-NKQOLO4R.js";import{b as ce}from"./chunk-OLCSHRYT.js";import"./chunk-OMJYBY2Z.js";import{T as Q,X as S}from"./chunk-NVUV4KG5.js";import"./chunk-4YRY4IP2.js";import{a as pe}from"./chunk-X5OPW46L.js";import{b as W,c as v,e as $,f as J,h as K,i as X,j as Y,k as Z,l as ee,m as te,n as re,o as ie,p as oe,q as ne,s as ae,t as le,u as se,v as me}from"./chunk-SGIGSFT7.js";import{d as H}from"./chunk-LQDACG22.js";import{i as A,j as z,r as U}from"./chunk-GMFH3NDN.js";import{$b as O,Fb as D,Gb as n,Hb as V,Ka as T,Kb as M,Lb as N,Mb as R,Nb as j,Ob as P,Pa as s,Pb as C,Qa as b,_ as F,a as q,b as G,bb as u,db as m,ha as y,ia as f,ja as _,mb as r,nb as t,ob as c,sb as w,vb as x,wb as g,zb as L}from"./chunk-ETUY2JGY.js";var fe=()=>({standalone:!0}),be=()=>["Trabajo UIC","Proyectos de vinculacion","Proyectos de investigacion"];function xe(o,i){if(o&1){let e=w();r(0,"tr")(1,"td",21)(2,"div",22),c(3,"img",23),r(4,"a",24),n(5),t()()(),r(6,"td",25)(7,"input",26),R("ngModelChange",function(l){let p=y(e).$implicit;return N(p.quantity,l)||(p.quantity=l),f(l)}),x("change",function(){let l=y(e).$implicit,p=g(2);return f(p.updateQuantity(l.id,l.quantity))}),t()(),r(8,"td",27)(9,"button",28),x("click",function(){let l=y(e).$implicit,p=g(2);return f(p.removeComponent(l.id))}),_(),r(10,"svg",29),c(11,"path",30),t(),n(12," Eliminar "),t()()()}if(o&2){let e=i.$implicit,a=g(2);s(3),L("alt",e.name),m("src",a.apiUrl+e.imageUrl,T),s(2),V(e.name),s(2),M("ngModel",e.quantity),m("ngModelOptions",C(6,fe))("max",e.availableQuantity)}}function ve(o,i){if(o&1&&(r(0,"tbody",19),u(1,xe,13,7,"tr",20),t()),o&2){let e=g();s(),m("ngForOf",e.selectedComponents)}}function he(o,i){o&1&&(r(0,"tr")(1,"td",31),n(2," No hay componentes seleccionados "),t()())}function Se(o,i){o&1&&(r(0,"p",55),n(1," El tipo de pr\xE9stamo es obligatorio. "),t())}function _e(o,i){o&1&&(r(0,"p",55),n(1," El corresponsal es obligatorio. "),t())}function we(o,i){o&1&&(r(0,"p",55),n(1," La fecha de retorno es obligatoria. "),t())}function Ce(o,i){o&1&&(r(0,"p",55),n(1," La fecha de retorno debe ser igual o posterior a la actual. "),t())}function ke(o,i){o&1&&(r(0,"span"),n(1,"Gu\xEDa de laboratorio"),t())}function Ee(o,i){o&1&&(r(0,"span"),n(1,"Nota conceptual"),t())}function Ie(o,i){o&1&&(r(0,"p",55),n(1," El comprobante es obligatorio. "),t())}function qe(o,i){o&1&&(r(0,"span"),n(1,"Solicitar Prestamo"),t())}function Ge(o,i){o&1&&(r(0,"span",56),_(),r(1,"svg",57),c(2,"circle",58)(3,"path",59),t(),n(4," Enviando... "),t())}function Fe(o,i){if(o&1){let e=w();r(0,"div",32)(1,"div")(2,"label",33),n(3," Tipo de pr\xE9stamo: "),t(),r(4,"select",34)(5,"option",35),n(6,"Selecciona el tipo de pr\xE9stamo"),t(),r(7,"option",36),n(8,"Trabajo UIC"),t(),r(9,"option",37),n(10,"Gu\xEDa de laboratorio"),t(),r(11,"option",38),n(12,"Proyecto de vinculaci\xF3n"),t(),r(13,"option",39),n(14,"Proyectos de investigaci\xF3n"),t()(),u(15,Se,2,0,"p",40),t(),r(16,"div")(17,"label",41),n(18," Corresponsal: "),t(),c(19,"input",42),u(20,_e,2,0,"p",40),t(),r(21,"div")(22,"label",43),n(23," Fecha de retorno: "),t(),c(24,"input",44),u(25,we,2,0,"p",40)(26,Ce,2,0,"p",40),t(),r(27,"div")(28,"label",45),n(29," Comprobante: "),u(30,ke,2,0,"span",46)(31,Ee,2,0,"span",46),t(),r(32,"input",47),x("change",function(l){y(e);let p=g();return f(p.onFileChange(l))}),t(),u(33,Ie,2,0,"p",40),t(),r(34,"div")(35,"label",48),n(36," Descripci\xF3n (Opcional): "),t(),c(37,"textarea",49),t(),r(38,"div",50)(39,"div",51)(40,"button",52),n(41," Regresar "),t(),r(42,"button",53),x("click",function(){y(e);let l=g();return f(l.submitRequest())}),u(43,qe,2,0,"span",46)(44,Ge,5,0,"span",54),t()()()()}if(o&2){let e,a,l,p,E,I,h,d=g();s(15),m("ngIf",((e=d.formGroup.get("typeRequest"))==null?null:e.hasError("required"))&&((e=d.formGroup.get("typeRequest"))==null?null:e.touched)),s(5),m("ngIf",((a=d.formGroup.get("responsible"))==null?null:a.hasError("required"))&&((a=d.formGroup.get("responsible"))==null?null:a.touched)),s(5),m("ngIf",((l=d.formGroup.get("returnDate"))==null?null:l.hasError("required"))&&((l=d.formGroup.get("returnDate"))==null?null:l.touched)),s(),m("ngIf",((p=d.formGroup.get("returnDate"))==null?null:p.hasError("invalidDate"))&&((p=d.formGroup.get("returnDate"))==null?null:p.touched)),s(4),m("ngIf",((E=d.formGroup.get("typeRequest"))==null?null:E.value)==="Guias de laboratorio"),s(),m("ngIf",C(10,be).includes((I=d.formGroup.get("typeRequest"))==null?null:I.value)),s(2),m("ngIf",((h=d.formGroup.get("comprobante"))==null?null:h.hasError("required"))&&((h=d.formGroup.get("comprobante"))==null?null:h.touched)),s(9),m("disabled",d.isSubmitting),s(),m("ngIf",!d.isSubmitting),s(),m("ngIf",d.isSubmitting)}}var k=class o{constructor(i,e,a,l){this.requestService=i;this.messageService=e;this.fb=a;this.sweetalertService=l;this.formGroup=this.fb.group({typeRequest:["",v.required],responsible:["",v.required],returnDate:["",[v.required,this.dateValidator]],comprobante:["",v.required],description:[""]})}apiUrl=H.apiUrl;formGroup;selectedComponents=[];totalAmount=0;selectedFile=void 0;isSubmitting=!1;ngOnInit(){pe(),this.loadSelectedComponents()}loadSelectedComponents(){this.selectedComponents=this.requestService.getSelectedComponents(),this.calculateTotal()}hasSelectedComponents(){return this.selectedComponents.length>0}dateValidator(i){if(!i.value)return null;let e=new Date().toISOString().split("T")[0];return i.value>=e?null:{invalidDate:!0}}updateQuantity(i,e){let a=this.selectedComponents.find(l=>l.id===i);if(a){if(!Number.isInteger(e)){this.sweetalertService.error("Solo se permiten n\xFAmeros enteros."),this.loadSelectedComponents();return}if(e<=0){this.sweetalertService.error("La cantidad no puede ser menor o igual a 0."),this.loadSelectedComponents();return}if(e>a.availableQuantity){this.sweetalertService.error(`La cantidad no puede exceder el m\xE1ximo disponible (${a.availableQuantity}).`),this.loadSelectedComponents();return}this.requestService.setSelectedComponents(this.selectedComponents),this.calculateTotal()}}removeComponent(i){this.sweetalertService.confirm("\xBFEst\xE1s seguro de que deseas eliminar este componente?").then(e=>{if(e.isConfirmed){this.selectedComponents=this.selectedComponents.filter(a=>a.id!==i),this.requestService.setSelectedComponents(this.selectedComponents),this.calculateTotal(),this.messageService.add({severity:"info",summary:"Componente eliminado",detail:"Se ha eliminado el componente de la solicitud",life:2e3});return}})}calculateTotal(){this.totalAmount=this.selectedComponents.reduce((i,e)=>i+(e.quantity||0),0)}submitRequest(){if(this.formGroup.invalid){this.formGroup.markAllAsTouched(),this.sweetalertService.error("Debe completar todos los campos requeridos.");return}if(!this.hasSelectedComponents()){this.sweetalertService.error("Debe seleccionar al menos un componente.");return}let i=G(q({},this.formGroup.value),{selectedComponents:this.selectedComponents.filter(e=>e.quantity>0).map(e=>({componentId:e.id,quantity:e.quantity}))});if(i.selectedComponents.length===0){this.sweetalertService.error("Debe seleccionar al menos un componente v\xE1lido.");return}this.sweetalertService.loading("Enviando solicitud..."),this.isSubmitting=!0,this.requestService.createRequest(i,i.selectedComponents,this.selectedFile).subscribe({next:e=>{this.sweetalertService.close(),this.sweetalertService.success("Solicitud enviada correctamente."),this.selectedComponents=[],this.totalAmount=0,this.formGroup.reset(),this.requestService.setSelectedComponents([])},error:e=>{this.sweetalertService.close(),console.error("Error detallado al enviar la solicitud:",{error:e,status:e.status,message:e.message,formData:i}),this.sweetalertService.error("Error al enviar la solicitud.")},complete:()=>{this.isSubmitting=!1}})}onFileChange(i){let e=i.target.files[0];e&&(["image/png","image/jpeg","image/jpg","application/pdf"].includes(e.type)?(this.selectedFile=e,this.formGroup.patchValue({comprobante:e})):(this.sweetalertService.error("Solo se permiten archivos PNG, JPG, JPEG y PDF."),i.target.value=""))}static \u0275fac=function(e){return new(e||o)(b(ue),b(S),b(le),b(de))};static \u0275cmp=F({type:o,selectors:[["app-loans-summary"]],standalone:!0,features:[j([S,Q]),P],decls:33,vars:4,consts:[["noComponentsMessage",""],[1,"bg-white","py-5","antialiased","dark:bg-gray-900","rounded-lg"],["action","#",1,"mx-auto","max-w-screen-2xl","px-4","2xl:px-0",3,"formGroup"],[1,"mx-auto","max-w-4xl"],[1,"text-xl","font-semibold","text-gray-900","dark:text-white","sm:text-2xl"],[1,"border-t","border-gray-200","dark:border-gray-700","sm:mt-8"],[1,"relative","overflow-x-auto","border-b","border-gray-200","dark:border-gray-800"],[1,"w-full","text-left","font-medium","text-gray-900","dark:text-white","md:table-fixed"],[1,"whitespace-nowrap","py-4"],[1,"whitespace-nowrap","py-4","text-center"],["colspan","3",1,"border-t","border-gray-200","dark:border-gray-800"],["class","divide-y divide-gray-200 dark:divide-gray-800",4,"ngIf","ngIfElse"],[1,"mt-2","border-gray-200","dark:border-gray-800"],["class","mt-6 space-y-4",4,"ngIf"],["data-popover","","id","popover-right","role","tooltip",1,"absolute","z-10","invisible","inline-block","w-64","text-sm","text-gray-500","transition-opacity","duration-300","bg-white","border","border-gray-200","rounded-lg","shadow-sm","opacity-0","dark:text-gray-400","dark:border-gray-600","dark:bg-gray-800"],[1,"px-3","py-2","bg-gray-100","border-b","border-gray-200","rounded-t-lg","dark:border-gray-600","dark:bg-gray-700"],[1,"font-semibold","text-gray-900","dark:text-white"],[1,"px-3","py-2"],["data-popper-arrow",""],[1,"divide-y","divide-gray-200","dark:divide-gray-800"],[4,"ngFor","ngForOf"],[1,"whitespace-nowrap","py-4","md:w-[384px]"],[1,"flex","items-center","gap-4"],[1,"h-8","w-auto","mr-3",3,"src","alt"],[1,"hover:underline"],[1,"p-4","text-center","text-base","font-normal","text-gray-900","dark:text-white"],["type","number","name","cantidad","step","1","min","1",1,"mt-1","w-24","p-2","border","border-gray-300","rounded-md","dark:bg-gray-800","dark:text-white","dark:border-gray-700","text-center",3,"ngModelChange","change","ngModel","ngModelOptions","max"],[1,"p-4","text-base","font-bold","text-gray-900","dark:text-white","flex","justify-center","items-center"],["type","button",1,"flex","items-center","text-red-700","hover:text-white","border","border-red-700","hover:bg-red-800","focus:ring-4","focus:outline-none","focus:ring-red-300","font-medium","rounded-lg","text-sm","px-7","py-2","text-center","dark:border-red-500","dark:text-red-500","dark:hover:text-white","dark:hover:bg-red-600","dark:focus:ring-red-900",3,"click"],["xmlns","http://www.w3.org/2000/svg","viewbox","0 0 20 20","fill","currentColor","aria-hidden","true",1,"h-5","w-5","mr-2","-ml-0.5"],["fill-rule","evenodd","d","M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule","evenodd"],["colspan","3",1,"py-4","text-center","text-gray-500","dark:text-gray-400"],[1,"mt-6","space-y-4"],["for","typeRequest",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["id","typeRequest","formControlName","typeRequest","name","typeRequest",1,"block","w-full","rounded-lg","border","border-gray-300","bg-gray-50","p-2.5","text-sm","text-gray-900","focus:ring-primary-500","focus:border-primary-500","dark:border-gray-600","dark:bg-gray-700","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],["value","","disabled","","selected",""],["value","Trabajo UIC"],["value","Guias de laboratorio"],["value","Proyectos de vinculacion"],["value","Proyectos de investigacion"],["class","text-red-500 text-sm",4,"ngIf"],["for","responsible",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["type","text","id","responsible","formControlName","responsible","name","responsible","maxlength","191","placeholder","Ingrese el nombre de la o las personas bajo el prestamo. Ejem: Estudiantes de 4to nivel Itin, Ingeniero o estudiante asignado.",1,"block","w-full","rounded-lg","border","border-gray-300","bg-gray-50","p-2.5","text-sm","text-gray-900","focus:ring-primary-500","focus:border-primary-500","dark:border-gray-600","dark:bg-gray-700","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],["for","returnDate",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["type","date","id","returnDate","formControlName","returnDate","name","returnDate",1,"w-full","p-2","text-sm","border","border-gray-300","rounded-lg","bg-white","text-gray-900","placeholder-gray-400","focus:ring-primary-300","focus:border-primary-300","[color-scheme:light]","dark:[color-scheme:dark]","dark:bg-gray-700","dark:border-gray-600","dark:text-white","dark:placeholder-gray-400","dark:focus:ring-primary-500","dark:focus:border-primary-500"],["for","comprobante",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],[4,"ngIf"],["id","comprobante","type","file","accept",".png, .jpg, .jpeg, .pdf","name","comprobante",1,"block","w-full","text-sm","text-gray-900","border","border-gray-300","rounded-lg","cursor-pointer","bg-gray-50","dark:text-gray-400","focus:outline-none","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400",3,"change"],["for","description",1,"mt-4","block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["id","description","rows","4","formControlName","description","maxlength","5000","placeholder","Descripci\xF3n m\xE1s detallada de la actividad o proyecto.",1,"block","p-2.5","w-full","text-sm","text-gray-900","bg-gray-50","rounded-lg","border","border-gray-300","focus:ring-primary-500","focus:border-primary-500","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],[1,"mt-4","space-y-6"],[1,"gap-4","sm:flex","sm:items-center"],["type","button","routerLink","/home/viewComponents",1,"w-full","rounded-lg","border","border-gray-200","bg-white","px-5","py-2.5","text-sm","font-medium","text-gray-900","hover:bg-gray-100","hover:text-primary-700","focus:z-10","focus:outline-none","focus:ring-4","focus:ring-gray-100","dark:border-gray-600","dark:bg-gray-800","dark:text-gray-400","dark:hover:bg-gray-700","dark:hover:text-white","dark:focus:ring-gray-700"],["type","submit",1,"mt-4","flex","w-full","items-center","justify-center","rounded-lg","bg-primary-700","px-5","py-2.5","text-sm","font-medium","text-white","hover:bg-primary-800","focus:outline-none","focus:ring-4","focus:ring-primary-300","dark:bg-primary-600","dark:hover:bg-primary-700","dark:focus:ring-primary-800","sm:mt-0","disabled:opacity-50","disabled:cursor-not-allowed",3,"click","disabled"],["class","flex items-center",4,"ngIf"],[1,"text-red-500","text-sm"],[1,"flex","items-center"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24",1,"animate-spin","-ml-1","mr-3","h-5","w-5","text-white"],["cx","12","cy","12","r","10","stroke","currentColor","stroke-width","4",1,"opacity-25"],["fill","currentColor","d","M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",1,"opacity-75"]],template:function(e,a){if(e&1&&(r(0,"section",1),c(1,"p-toast"),r(2,"form",2)(3,"div",3)(4,"h2",4),n(5,"Solicitud"),t(),c(6,"div",5),r(7,"div")(8,"div",6)(9,"table",7)(10,"thead")(11,"tr")(12,"th",8),n(13,"Componente"),t(),r(14,"th",9),n(15,"Cantidad"),t(),r(16,"th",9),n(17,"Acci\xF3n"),t()(),r(18,"tr"),c(19,"td",10),t()(),u(20,ve,2,1,"tbody",11),t(),c(21,"hr",12),u(22,he,3,0,"ng-template",null,0,O),t(),u(24,Fe,45,11,"div",13),t()()()(),r(25,"div",14)(26,"div",15)(27,"h3",16),n(28,"Informaci\xF3n"),t()(),r(29,"div",17)(30,"p"),n(31,"Subir un comprobante que verifique la validez del prestamo."),t()(),c(32,"div",18),t()),e&2){let l=D(23);s(2),m("formGroup",a.formGroup),s(18),m("ngIf",a.selectedComponents.length>0)("ngIfElse",l),s(4),m("ngIf",a.hasSelectedComponents())}},dependencies:[U,A,z,se,X,re,ie,W,Y,te,$,J,ae,ne,oe,K,me,Z,ee,ce,B,ye,ge],encapsulation:2})};export{k as default};
