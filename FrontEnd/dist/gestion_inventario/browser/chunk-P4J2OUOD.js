import{a as le,b as de}from"./chunk-A5RISXGS.js";import{a as ne}from"./chunk-MHTYV42J.js";import"./chunk-NKQOLO4R.js";import{a as ae}from"./chunk-OLCSHRYT.js";import"./chunk-OMJYBY2Z.js";import"./chunk-NVUV4KG5.js";import"./chunk-4YRY4IP2.js";import{a as oe}from"./chunk-X5OPW46L.js";import{b as P,c as C,e as q,f as $,g as R,h as W,i as J,k as K,l as Q,m as X,n as Y,o as Z,r as ee,t as te,u as re,v as ie}from"./chunk-SGIGSFT7.js";import{d as O}from"./chunk-LQDACG22.js";import{h as U,i as j,j as N,p as G,r as H}from"./chunk-GMFH3NDN.js";import{Ab as E,Gb as o,Hb as L,Ib as b,Kb as S,Lb as F,Mb as I,Ob as A,Pa as d,Qa as w,Qb as z,Yb as T,_ as D,_b as M,a as B,bb as u,db as s,ha as y,ia as f,ja as h,ka as x,mb as i,nb as n,ob as m,sb as v,vb as g,wb as p}from"./chunk-ETUY2JGY.js";var se=a=>({hidden:a});function ce(a,r){if(a&1){let e=v();i(0,"button",95),g("click",function(){y(e);let l=p();return f(l.resetFilters())}),o(1," Limpiar filtros "),n()}}function me(a,r){if(a&1){let e=v();i(0,"li",4)(1,"input",96),g("change",function(l){y(e);let c=p();return f(c.onCategoryChange(l))}),n(),i(2,"label",97),o(3),n()()}if(a&2){let e=r.$implicit;d(),E("id","category-",e.id,""),s("value",e.id),d(),E("for","category-",e.id,""),d(),b(" ",e.name," ")}}function ge(a,r){if(a&1){let e=v();i(0,"tr",98)(1,"th",99)(2,"div",100)(3,"div",101),m(4,"p-image",102),n(),o(5),n()(),i(6,"td",103)(7,"span",104),o(8),n()(),i(9,"td",105)(10,"div",4),o(11),n()(),i(12,"td",105),m(13,"div",106),o(14),n(),i(15,"td",105),o(16),T(17,"date"),n(),i(18,"td",105),o(19),T(20,"date"),n(),i(21,"td",105)(22,"div",107)(23,"button",108),g("click",function(){let l=y(e).$implicit,c=p();return f(c.openModalForUpdate(l))}),h(),i(24,"svg",109),m(25,"path",110)(26,"path",111),n(),o(27," Editar "),n(),x(),i(28,"button",112),g("click",function(){let l=y(e).$implicit,c=p();return f(c.openDeleteModal(l.id,!1))}),h(),i(29,"svg",109),m(30,"path",113),n(),o(31," Eliminar "),n()()()()}if(a&2){let e=r.$implicit,t=p();d(4),s("src",t.apiUrl+e.imageUrl)("alt",e.name)("preview",!0),d(),b(" ",e.name," "),d(3),b(" ",e.category==null?null:e.category.name," "),d(3),b(" ",e.quantity," "),d(2),s("ngClass",e.isActive?"bg-green-700":"bg-red-700"),d(),b(" ",e.isActive?"Activo":"Inactivo"," "),d(2),b(" ",M(17,10,e.createdAt,"short")," "),d(3),b(" ",M(20,13,e.updatedAt,"short")," ")}}function pe(a,r){a&1&&(i(0,"p",114),o(1,"El nombre es obligatorio y debe tener al menos 3 caracteres."),n())}function ue(a,r){a&1&&(i(0,"p",114),o(1,"La descripci\xF3n es obligatoria y debe tener al menos 10 caracteres."),n())}function ye(a,r){if(a&1&&(i(0,"option",115),o(1),n()),a&2){let e=r.$implicit;s("value",e.id),d(),b(" ",e.name," ")}}function fe(a,r){a&1&&(i(0,"p",114),o(1,"Debe seleccionar una categor\xEDa."),n())}function be(a,r){if(a&1&&m(0,"p-image",116),a&2){let e,t=p();s("src",t.currentImageUrl)("alt",(e=t.updateForm.get("name"))==null?null:e.value)("preview",!0)}}function he(a,r){if(a&1&&m(0,"p-image",116),a&2){let e,t=p();s("src",t.imagePreviewUrl)("alt",(e=t.updateForm.get("name"))==null?null:e.value)("preview",!0)}}function xe(a,r){a&1&&(i(0,"p",114),o(1," El nombre es obligatorio y debe tener al menos 3 caracteres. "),n())}function ve(a,r){if(a&1){let e=v();i(0,"input",124),I("ngModelChange",function(l){y(e);let c=p(2);return F(c.selectedCategory.name,l)||(c.selectedCategory.name=l),f(l)}),n()}if(a&2){let e=p(2);S("ngModel",e.selectedCategory.name)}}function Ce(a,r){if(a&1&&(i(0,"span"),o(1),n()),a&2){let e=p().$implicit;d(),L(e.name)}}function we(a,r){if(a&1){let e=v();i(0,"button",125),g("click",function(){y(e);let l=p(2);return f(l.saveCategory())}),o(1," Guardar "),n()}}function ke(a,r){if(a&1){let e=v();i(0,"button",126),g("click",function(){y(e);let l=p(2);return f(l.isEditingCategory=!1)}),o(1," Cancelar "),n()}}function _e(a,r){if(a&1){let e=v();i(0,"tr",117)(1,"th",118),u(2,ve,1,1,"input",119)(3,Ce,2,1,"span",120),n(),i(4,"td",105)(5,"div",121),u(6,we,2,0,"button",122)(7,ke,2,0,"button",123),i(8,"button",108),g("click",function(){let l=y(e).$implicit,c=p();return f(c.enableEditCategory(l))}),o(9," Editar "),n(),i(10,"button",112),g("click",function(){let l=y(e).$implicit,c=p();return f(c.openDeleteModal(l.id,!0))}),o(11," Eliminar "),n()()()()}if(a&2){let e=r.$implicit,t=p();d(2),s("ngIf",t.isEditingCategory&&t.selectedCategory.id===e.id),d(),s("ngIf",!t.isEditingCategory||t.selectedCategory.id!==e.id),d(3),s("ngIf",t.isEditingCategory&&t.selectedCategory.id===e.id),d(),s("ngIf",t.isEditingCategory&&t.selectedCategory.id===e.id)}}var V=class a{constructor(r,e,t,l){this.componentService=r;this.categoryService=e;this.sweetalertService=t;this.formBuilder=l;this.updateForm=this.formBuilder.group({id:[null],name:["",[C.required,C.minLength(3)]],description:["",[C.required]],categoryId:["",[C.required]],isActive:[!0,[C.required]]}),this.categoryForm=this.formBuilder.group({name:["",[C.required,C.minLength(3)]]})}apiUrl=O.apiUrl;activeFilters={status:null,categories:[],searchTerm:""};components=[];selectedImage=void 0;imagePreviewUrl=void 0;searchTerm="";selectedCategories=[];categories=[];newCategory={name:""};selectedCategory={name:""};isModalOpen=!1;selectedStatus=null;deleteItemType="";isEditingCategory=!1;updateForm;categoryForm;currentImageUrl;ngOnInit(){oe(),this.getCategories(),this.getComponents()}getComponents(){this.componentService.getComponents().subscribe(r=>{this.components=r.components},r=>{console.error("Error al obtener los componentes:",r)})}getCategories(){this.categoryService.getCategories().subscribe(r=>{this.categories=r},r=>{console.error("Error al obtener las categor\xEDas:",r)})}searchComponents(){this.activeFilters.searchTerm=this.searchTerm.trim(),this.applyFilters()}onImageSelected(r){let e=r.target;if(e.files&&e.files.length>0){this.selectedImage=e.files[0];let t=new FileReader;t.onload=()=>{this.imagePreviewUrl=t.result},t.readAsDataURL(this.selectedImage)}else this.selectedImage=void 0,this.imagePreviewUrl=void 0}openModalForUpdate(r){this.updateForm.patchValue({id:r.id,name:r.name,description:r.description,categoryId:r.categoryId,isActive:r.isActive}),console.log(r.imageUrl),this.currentImageUrl=r.imageUrl?`${this.apiUrl}${r.imageUrl}`:`${this.apiUrl}/assets/default-component.png`,this.imagePreviewUrl=void 0,this.selectedImage=void 0,this.isModalOpen=!0}updateComponent(){if(this.updateForm.invalid){this.sweetalertService.error("Por favor, complete todos los campos correctamente.");return}let r=this.updateForm.value;if(!r.id){console.error("ID del componente no encontrado."),this.sweetalertService.error("Error al obtener el componente.");return}this.componentService.updateComponent(r.id,r,this.selectedImage).subscribe(()=>{this.getComponents(),this.closeModal(),this.sweetalertService.success("Componente actualizado satisfactoriamente.")},e=>{console.error("Error al actualizar el componente:",e),this.sweetalertService.error("Hubo un error al intentar actualizar el componente.")})}openDeleteModal(r,e){this.deleteItemType=e?"esta categor\xEDa":"este componente";let t=`\xBFEst\xE1s seguro de que deseas eliminar ${this.deleteItemType}?`;this.sweetalertService.confirm(t).then(l=>{l.isConfirmed&&(e?this.deleteCategory(r):this.deleteComponent(r))})}deleteComponent(r){this.componentService.deleteComponent(r).subscribe(()=>{this.components=this.components.filter(e=>e.id!==r),this.sweetalertService.success("Componente eliminado con \xE9xito.")},e=>{console.error("Error al eliminar el componente:",e),this.sweetalertService.error("Hubo un error al intentar eliminar el componente.")})}onCategoryChange(r){let e=parseInt(r.target.value);r.target.checked?this.activeFilters.categories.push(e):this.activeFilters.categories=this.activeFilters.categories.filter(t=>t!==e),this.applyFilters()}getFilteredComponents(){this.selectedCategories.length>0?this.componentService.filterComponentsByCategories(this.selectedCategories).subscribe(r=>{this.components=r.components},r=>{console.error("Error al obtener los componentes filtrados",r)}):this.getComponents()}closeModal(){this.isModalOpen=!1,this.updateForm.reset(),this.selectedImage=void 0,this.imagePreviewUrl=void 0}createCategory(){if(this.categoryForm.invalid){this.sweetalertService.error("El nombre de la categor\xEDa no puede estar vac\xEDo ni menor a 3 caracteres.");return}let r=this.categoryForm.value;this.categoryService.createCategory(r).subscribe(e=>{this.categories.push(e),this.sweetalertService.success("Categor\xEDa creada satisfactoriamente."),this.categoryForm.reset()},e=>{console.error("Error al crear la categor\xEDa:",e),this.sweetalertService.error("Hubo un error al intentar crear la categor\xEDa.")})}onStatusFilterChange(r){let t=r.target.value;this.activeFilters.status=t||null,this.applyFilters()}filterComponentsByStatus(r){r!==null?this.componentService.filterComponentsByStatus(r).subscribe(e=>{this.components=e.components},e=>{console.error("Error al filtrar componentes por estado:",e)}):this.getComponents()}deleteCategory(r){this.categoryService.deleteCategory(r).subscribe(()=>{this.categories=this.categories.filter(e=>e.id!==r),this.sweetalertService.success("Categor\xEDa eliminada con \xE9xito.")},e=>{console.error("Error al eliminar la categor\xEDa:",e),this.sweetalertService.error("Hubo un error al intentar eliminar la categor\xEDa.")})}enableEditCategory(r){this.selectedCategory=B({},r),this.isEditingCategory=!0}saveCategory(){this.categoryService.updateCategory(this.selectedCategory.id,this.selectedCategory).subscribe(r=>{let e=this.categories.findIndex(t=>t.id===r.id);e!==-1&&(this.categories[e]=r),this.isEditingCategory=!1},r=>{console.error("Error al actualizar la categor\xEDa:",r),alert("Hubo un error al intentar actualizar la categor\xEDa")})}trackByFn(r,e){return e.id}applyFilters(){if(!this.activeFilters.status&&this.activeFilters.categories.length===0&&!this.activeFilters.searchTerm){this.getComponents();return}this.componentService.getComponents().subscribe(r=>{let e=r.components;if(this.activeFilters.status){let t=this.activeFilters.status==="activo";e=e.filter(l=>l.isActive===t)}if(this.activeFilters.categories.length>0&&(e=e.filter(t=>this.activeFilters.categories.includes(t.categoryId))),this.activeFilters.searchTerm){let t=this.activeFilters.searchTerm.toLowerCase();e=e.filter(l=>l.name.toLowerCase().includes(t))}this.components=e},r=>{console.error("Error al aplicar filtros:",r)})}resetFilters(){this.activeFilters={status:null,categories:[],searchTerm:""},this.searchTerm="",this.selectedCategories=[];let r=document.getElementById("price-from");r&&(r.value=""),this.getComponents()}static \u0275fac=function(e){return new(e||a)(w(le),w(de),w(ne),w(te))};static \u0275cmp=D({type:a,selectors:[["app-electronic-component"]],standalone:!0,features:[A],decls:156,vars:24,consts:[[1,""],[1,"bg-white","dark:bg-gray-900","relative","shadow-md","sm:rounded-lg","overflow-hidden"],[1,"flex","flex-col","md:flex-row","items-stretch","md:items-center","md:space-x-3","space-y-3","md:space-y-0","justify-between","mx-4","py-4","border-t","dark:border-gray-700"],[1,"w-full","md:w-1/2"],[1,"flex","items-center"],["for","simple-search",1,"sr-only"],[1,"relative","w-full"],[1,"absolute","inset-y-0","left-0","flex","items-center","pl-3","pointer-events-none"],["aria-hidden","true","fill","currentColor","viewbox","0 0 20 20","xmlns","http://www.w3.org/2000/svg",1,"w-5","h-5","text-gray-500","dark:text-gray-400"],["fill-rule","evenodd","clip-rule","evenodd","d","M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"],["type","text","id","simple-search","name","simple-search","placeholder","Buscar componentes",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-500","focus:border-primary-500","block","w-full","pl-10","p-2","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500",3,"ngModelChange","input","ngModel"],[1,"w-full","md:w-auto","flex","flex-col","md:flex-row","space-y-2","md:space-y-0","items-stretch","md:items-center","justify-end","md:space-x-3","flex-shrink-0"],[1,"flex","justify-center","m-5"],["id","defaultModalButton","data-modal-target","categoryDefaultModal","data-modal-toggle","categoryDefaultModal","type","button",1,"block","text-white","bg-primary-700","hover:bg-primary-800","focus:ring-4","focus:outline-none","focus:ring-primary-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:bg-primary-600","dark:hover:bg-primary-700","dark:focus:ring-primary-800"],["class","text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300",3,"click",4,"ngIf"],["id","filterDropdownButton","data-dropdown-toggle","filterDropdown","type","button",1,"w-full","md:w-auto","flex","items-center","justify-center","py-2","px-4","text-sm","font-medium","text-gray-900","focus:outline-none","bg-white","rounded-lg","border","border-gray-200","hover:bg-gray-100","hover:text-primary-700","focus:z-10","focus:ring-4","focus:ring-gray-200","dark:focus:ring-gray-700","dark:bg-gray-800","dark:text-white","dark:border-gray-600","dark:hover:text-white","dark:hover:bg-gray-700"],["xmlns","http://www.w3.org/2000/svg","aria-hidden","true","viewbox","0 0 20 20","fill","currentColor",1,"h-4","w-4","mr-1.5","-ml-1","text-gray-400"],["fill-rule","evenodd","d","M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z","clip-rule","evenodd"],["fill","currentColor","viewbox","0 0 20 20","xmlns","http://www.w3.org/2000/svg","aria-hidden","true",1,"-mr-1","ml-1.5","w-5","h-5"],["clip-rule","evenodd","fill-rule","evenodd","d","M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"],["id","filterDropdown",1,"z-10","hidden","px-3","pt-1","bg-white","rounded-lg","shadow","w-80","dark:bg-gray-700","right-0"],["id","accordion-flush","data-accordion","collapse","data-active-classes","text-black dark:text-white","data-inactive-classes","text-gray-500 dark:text-gray-400"],["id","category-heading"],["type","button","data-accordion-target","#category-body","aria-expanded","true","aria-controls","category-body",1,"flex","items-center","justify-between","w-full","py-2","px-1.5","text-sm","font-medium","text-left","text-gray-500","border-b","border-gray-200","dark:border-gray-600","dark:text-gray-400","hover:bg-gray-50","dark:hover:bg-gray-700"],["aria-hidden","true","data-accordion-icon","","fill","currentColor","viewbox","0 0 20 20","xmlns","http://www.w3.org/2000/svg",1,"w-5","h-5","rotate-180","shrink-0"],["fill-rule","evenodd","clip-rule","evenodd","d","M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"],["id","category-body","aria-labelledby","category-heading",1,"hidden"],[1,"py-2","font-light","border-b","border-gray-200","dark:border-gray-600"],[1,"space-y-2"],["class","flex items-center",4,"ngFor","ngForOf","ngForTrackBy"],["id","price-heading"],["type","button","data-accordion-target","#price-body","aria-expanded","true","aria-controls","price-body",1,"flex","items-center","justify-between","w-full","py-2","px-1.5","text-sm","font-medium","text-left","text-gray-500","border-b","border-gray-200","dark:border-gray-600","dark:text-gray-400","hover:bg-gray-50","dark:hover:bg-gray-700"],["id","price-body","aria-labelledby","price-heading",1,"hidden"],[1,"flex","items-center","py-2","space-x-3","font-light","border-b","border-gray-200","dark:border-gray-600"],["id","price-from",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-500","focus:border-primary-500","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500",3,"change"],["selected","","value",""],["value","activo"],["value","inactivo"],[1,"overflow-x-auto"],[1,"w-full","text-sm","text-left","text-gray-500","dark:text-gray-400"],[1,"text-xs","text-gray-700","uppercase","bg-gray-50","dark:bg-gray-700","dark:text-gray-400"],["scope","col",1,"p-4"],["scope","col-3",1,"p-4","text-center"],["class","border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700",4,"ngFor","ngForOf","ngForTrackBy"],["id","updateProductModal","tabindex","-1","aria-hidden","true",1,"fixed","top-0","right-0","left-0","z-50","flex","justify-center","items-center","w-full","h-full","bg-black","bg-opacity-50",3,"ngClass"],[1,"relative","w-full","max-w-2xl","max-h-full","p-4"],[1,"relative","bg-white","rounded-lg","shadow","dark:bg-gray-800"],[1,"flex","items-start","justify-between","p-4","border-b","rounded-t","dark:border-gray-600"],[1,"text-xl","font-semibold","text-gray-900","dark:text-white"],["type","button",1,"text-gray-400","bg-transparent","hover:bg-gray-200","hover:text-gray-900","rounded-lg","text-sm","w-8","h-8","ml-auto","inline-flex","justify-center","items-center","dark:hover:bg-gray-600","dark:hover:text-white",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 14 14",1,"w-3","h-3"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"],[1,"sr-only"],[3,"ngSubmit","formGroup"],[1,"p-6","space-y-6"],[1,"grid","grid-cols-1","gap-4","sm:grid-cols-2"],[1,"space-y-4"],["for","name",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["type","text","name","name","id","name","formControlName","name","placeholder","Ingresa el nombre del componente","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],["class","text-red-500 text-sm",4,"ngIf"],["for","description",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["id","description","name","description","formControlName","description","rows","4","placeholder","Escribe la descripci\xF3n del componente",1,"block","w-full","p-2.5","text-sm","text-gray-900","bg-gray-50","rounded-lg","border","border-gray-300","focus:ring-primary-500","focus:border-primary-500","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],["for","category",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["formControlName","categoryId","name","category","id","category",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],[3,"value",4,"ngFor","ngForOf","ngForTrackBy"],["for","status",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["formControlName","isActive","name","status","id","status",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],[3,"ngValue"],["for","image",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],[1,"mb-4","flex","justify-center","items-center"],[1,"max-h-40","overflow-hidden"],["imageClass","w-40 h-40 object-contain",3,"src","alt","preview",4,"ngIf"],["id","dropzone-file","type","file","accept","image/*",1,"block","w-full","text-sm","text-gray-900","border","border-gray-300","rounded-lg","cursor-pointer","bg-gray-50","dark:text-gray-400","focus:outline-none","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400",3,"change"],[1,"flex","items-center","p-6","space-x-2","border-t","border-gray-200","rounded-b","dark:border-gray-600"],["type","submit",1,"text-white","bg-primary-700","hover:bg-primary-800","focus:ring-4","focus:outline-none","focus:ring-primary-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:bg-primary-600","dark:hover:bg-primary-700","dark:focus:ring-primary-800"],["type","button",1,"text-gray-500","bg-white","hover:bg-gray-100","focus:ring-4","focus:outline-none","focus:ring-primary-300","rounded-lg","border","border-gray-200","text-sm","font-medium","px-5","py-2.5","hover:text-gray-900","focus:z-10","dark:bg-gray-700","dark:text-gray-300","dark:border-gray-500","dark:hover:text-white","dark:hover:bg-gray-600","dark:focus:ring-gray-600",3,"click"],["id","categoryDefaultModal","tabindex","-1","aria-hidden","true",1,"hidden","overflow-y-auto","overflow-x-hidden","fixed","top-0","right-0","left-0","z-50","justify-center","items-center","w-full","md:inset-0","h-modal","md:h-full"],[1,"relative","p-4","w-full","max-w-2xl","h-full","md:h-auto"],[1,"relative","p-4","bg-white","rounded-lg","shadow","dark:bg-gray-800","sm:p-5"],[1,"flex","justify-between","items-center","pb-4","mb-4","rounded-t","border-b","sm:mb-5","dark:border-gray-600"],[1,"text-lg","font-semibold","text-gray-900","dark:text-white"],["type","button","data-modal-toggle","categoryDefaultModal",1,"text-gray-400","bg-transparent","hover:bg-gray-200","hover:text-gray-900","rounded-lg","text-sm","p-1.5","ml-auto","inline-flex","items-center","dark:hover:bg-gray-600","dark:hover:text-white"],["aria-hidden","true","fill","currentColor","viewBox","0 0 20 20","xmlns","http://www.w3.org/2000/svg",1,"w-5","h-5"],["fill-rule","evenodd","d","M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule","evenodd"],[1,"mx-auto","max-w-screen-xl"],[1,"flex","flex-col","md:flex-row","items-center","justify-between","space-y-3","md:space-y-0","md:space-x-4","p-4"],[1,"flex","items-center","w-full","space-x-4",3,"ngSubmit","formGroup"],[1,"flex-1"],["type","text","id","name","formControlName","name","placeholder","Nombre de la categor\xEDa",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],["type","submit",1,"text-white","inline-flex","mt-7","items-center","bg-primary-700","hover:bg-primary-800","focus:ring-4","focus:outline-none","focus:ring-primary-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:bg-primary-600","dark:hover:bg-primary-700","dark:focus:ring-primary-800"],[1,"overflow-x-auto","max-h-96","overflow-y-auto"],[1,"text-xs","text-gray-700","uppercase","bg-gray-50","dark:bg-gray-700","dark:text-white"],["scope","col",1,"px-4","py-4"],["scope","col","align","right",1,"px-4","py-3"],["class","border-b dark:border-gray-700",4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-sm","text-gray-500","hover:text-gray-700","dark:text-gray-400","dark:hover:text-gray-300",3,"click"],["type","checkbox",1,"w-4","h-4","bg-gray-100","border-gray-300","rounded","text-primary-600","focus:ring-primary-500","dark:focus:ring-primary-600","dark:ring-offset-gray-700","focus:ring-2","dark:bg-gray-600","dark:border-gray-500",3,"change","id","value"],[1,"ml-2","text-sm","font-medium","text-gray-900","dark:text-gray-100",3,"for"],[1,"border-b","dark:border-gray-600","hover:bg-gray-100","dark:hover:bg-gray-700"],["scope","row",1,"px-4","py-3","font-medium","text-gray-900","whitespace-nowrap","dark:text-white"],[1,"flex","items-center","mr-3"],[1,"mr-3","h-8","w-8","flex","items-center","justify-center"],["imageClass","max-h-8 max-w-8 w-auto h-auto object-contain",3,"src","alt","preview"],[1,"px-4","py-3"],[1,"bg-primary-100","text-primary-800","text-xs","font-medium","px-2","py-0.5","rounded","dark:bg-primary-900","dark:text-primary-300"],[1,"px-4","py-3","font-medium","text-gray-900","whitespace-nowrap","dark:text-white"],[1,"h-4","w-4","rounded-full","inline-block","mr-2",3,"ngClass"],[1,"flex","items-center","space-x-4"],[1,"py-2","px-3","flex","items-center","text-sm","font-medium","text-center","text-white","bg-primary-700","rounded-lg","hover:bg-primary-800","focus:ring-4","focus:outline-none","focus:ring-primary-300","dark:bg-primary-600","dark:hover:bg-primary-700","dark:focus:ring-primary-800",3,"click"],["xmlns","http://www.w3.org/2000/svg","viewbox","0 0 20 20","fill","currentColor","aria-hidden","true",1,"h-4","w-4","mr-2","-ml-0.5"],["d","M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"],["fill-rule","evenodd","d","M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z","clip-rule","evenodd"],["type","button",1,"flex","items-center","text-red-700","hover:text-white","border","border-red-700","hover:bg-red-800","focus:ring-4","focus:outline-none","focus:ring-red-300","font-medium","rounded-lg","text-sm","px-3","py-2","text-center","dark:border-red-500","dark:text-red-500","dark:hover:text-white","dark:hover:bg-red-600","dark:focus:ring-red-900",3,"click"],["fill-rule","evenodd","d","M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule","evenodd"],[1,"text-red-500","text-sm"],[3,"value"],["imageClass","w-40 h-40 object-contain",3,"src","alt","preview"],[1,"border-b","dark:border-gray-700"],["scope","row","name","nombreCategoria",1,"px-4","py-3","font-medium","text-gray-900","whitespace-nowrap","dark:text-white"],["type","text","class","text-gray-900 bg-transparent border-b-2 dark:text-white dark:bg-transparent dark:border-b-2",3,"ngModel","ngModelChange",4,"ngIf"],[4,"ngIf"],[1,"flex","justify-end","space-x-4"],["class","py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",3,"click",4,"ngIf"],["class","py-2 px-3 flex items-center text-sm font-medium text-center text-gray-700 bg-gray-300 rounded-lg hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800",3,"click",4,"ngIf"],["type","text",1,"text-gray-900","bg-transparent","border-b-2","dark:text-white","dark:bg-transparent","dark:border-b-2",3,"ngModelChange","ngModel"],[1,"py-2","px-3","flex","items-center","text-sm","font-medium","text-center","text-white","bg-green-700","rounded-lg","hover:bg-green-800","focus:ring-4","focus:outline-none","focus:ring-green-300","dark:bg-green-600","dark:hover:bg-green-700","dark:focus:ring-green-800",3,"click"],[1,"py-2","px-3","flex","items-center","text-sm","font-medium","text-center","text-gray-700","bg-gray-300","rounded-lg","hover:bg-gray-400","focus:ring-4","focus:outline-none","focus:ring-gray-300","dark:bg-gray-600","dark:hover:bg-gray-700","dark:focus:ring-gray-800",3,"click"]],template:function(e,t){if(e&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"form",4)(5,"label",5),o(6,"Buscar"),n(),i(7,"div",6)(8,"div",7),h(),i(9,"svg",8),m(10,"path",9),n()(),x(),i(11,"input",10),I("ngModelChange",function(c){return F(t.searchTerm,c)||(t.searchTerm=c),c}),g("input",function(){return t.searchComponents()}),n()()()(),i(12,"div",11)(13,"div",12)(14,"button",13),o(15," A\xF1adir Categor\xEDa "),n()(),u(16,ce,2,0,"button",14),i(17,"button",15),h(),i(18,"svg",16),m(19,"path",17),n(),o(20," Filtros "),i(21,"svg",18),m(22,"path",19),n()(),x(),i(23,"div",20)(24,"div",21)(25,"h2",22)(26,"button",23)(27,"span"),o(28,"Categor\xEDa"),n(),h(),i(29,"svg",24),m(30,"path",25),n()()(),x(),i(31,"div",26)(32,"div",27)(33,"ul",28),u(34,me,4,6,"li",29),n()()(),i(35,"h2",30)(36,"button",31)(37,"span"),o(38,"Estado"),n(),h(),i(39,"svg",24),m(40,"path",25),n()()(),x(),i(41,"div",32)(42,"div",33)(43,"select",34),g("change",function(c){return t.onStatusFilterChange(c)}),i(44,"option",35),o(45,"Todos"),n(),i(46,"option",36),o(47,"Activos"),n(),i(48,"option",37),o(49,"Inactivos"),n()()()()()()()(),i(50,"div",38)(51,"table",39)(52,"thead",40)(53,"tr")(54,"th",41),o(55,"Componente"),n(),i(56,"th",41),o(57,"Categor\xEDa"),n(),i(58,"th",41),o(59,"Cantidad"),n(),i(60,"th",41),o(61,"Estado"),n(),i(62,"th",41),o(63,"Fecha registro"),n(),i(64,"th",41),o(65,"\xDAltima modificaci\xF3n"),n(),i(66,"th",42),o(67,"Acciones"),n()()(),i(68,"tbody"),u(69,ge,32,16,"tr",43),n()()()()(),i(70,"div",44)(71,"div",45)(72,"div",46)(73,"div",47)(74,"h3",48),o(75," Actualizar Componente "),n(),i(76,"button",49),g("click",function(){return t.closeModal()}),h(),i(77,"svg",50),m(78,"path",51),n(),x(),i(79,"span",52),o(80,"Cerrar modal"),n()()(),i(81,"form",53),g("ngSubmit",function(){return t.updateComponent()}),i(82,"div",54)(83,"div",55)(84,"div",56)(85,"div")(86,"label",57),o(87,"Nombre Componente"),n(),m(88,"input",58),u(89,pe,2,0,"p",59),n(),i(90,"div")(91,"label",60),o(92,"Descripci\xF3n"),n(),m(93,"textarea",61),u(94,ue,2,0,"p",59),n(),i(95,"div")(96,"label",62),o(97,"Categor\xEDa"),n(),i(98,"select",63),u(99,ye,2,2,"option",64),n(),u(100,fe,2,0,"p",59),n()(),i(101,"div",56)(102,"div")(103,"label",65),o(104,"Estado"),n(),i(105,"select",66)(106,"option",67),o(107,"Activo"),n(),i(108,"option",67),o(109,"Inactivo"),n()()(),i(110,"div")(111,"label",68),o(112," Imagen Componente "),n(),i(113,"div",69)(114,"div",70),u(115,be,1,3,"p-image",71)(116,he,1,3,"p-image",71),n()(),i(117,"input",72),g("change",function(c){return t.onImageSelected(c)}),n()()()()(),i(118,"div",73)(119,"button",74),o(120," Actualizar componente "),n(),i(121,"button",75),g("click",function(){return t.closeModal()}),o(122," Cancelar "),n()()()()()(),i(123,"div",76)(124,"div",77)(125,"div",78)(126,"div",79)(127,"h3",80),o(128," Categor\xEDa "),n(),i(129,"button",81),h(),i(130,"svg",82),m(131,"path",83),n(),x(),i(132,"span",52),o(133,"Close modal"),n()()(),i(134,"div",84)(135,"div",1)(136,"div",85)(137,"form",86),g("ngSubmit",function(){return t.isEditingCategory?t.saveCategory():t.createCategory()}),i(138,"div",87)(139,"label",57),o(140,"Nombre"),n(),m(141,"input",88),u(142,xe,2,0,"p",59),n(),i(143,"button",89),o(144),n()()(),i(145,"div",90)(146,"table",39)(147,"thead",91)(148,"tr")(149,"th",92),o(150,"Nombre"),n(),i(151,"th",93)(152,"span"),o(153,"Acciones"),n()()()(),i(154,"tbody"),u(155,_e,12,4,"tr",94),n()()()()()()()()),e&2){let l,c,k,_;d(11),S("ngModel",t.searchTerm),d(5),s("ngIf",t.activeFilters.status||t.activeFilters.categories.length>0||t.activeFilters.searchTerm),d(18),s("ngForOf",t.categories)("ngForTrackBy",t.trackByFn),d(35),s("ngForOf",t.components)("ngForTrackBy",t.trackByFn),d(),s("ngClass",z(22,se,!t.isModalOpen)),d(11),s("formGroup",t.updateForm),d(8),s("ngIf",((l=t.updateForm.get("name"))==null?null:l.invalid)&&((l=t.updateForm.get("name"))==null?null:l.touched)),d(5),s("ngIf",((c=t.updateForm.get("description"))==null?null:c.invalid)&&((c=t.updateForm.get("description"))==null?null:c.touched)),d(5),s("ngForOf",t.categories)("ngForTrackBy",t.trackByFn),d(),s("ngIf",((k=t.updateForm.get("categoryId"))==null?null:k.invalid)&&((k=t.updateForm.get("categoryId"))==null?null:k.touched)),d(6),s("ngValue",!0),d(2),s("ngValue",!1),d(7),s("ngIf",!t.imagePreviewUrl&&t.currentImageUrl),d(),s("ngIf",t.imagePreviewUrl),d(21),s("formGroup",t.categoryForm),d(5),s("ngIf",((_=t.categoryForm.get("name"))==null?null:_.invalid)&&((_=t.categoryForm.get("name"))==null?null:_.touched)),d(2),b(" ",t.isEditingCategory?"Guardar Cambios":"Agregar Categor\xEDa"," "),d(11),s("ngForOf",t.categories)("ngForTrackBy",t.trackByFn)}},dependencies:[H,U,j,N,G,re,J,Y,Z,P,X,q,$,ee,W,R,ie,K,Q,ae],encapsulation:2})};export{V as default};
