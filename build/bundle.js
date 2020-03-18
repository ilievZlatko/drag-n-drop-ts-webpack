!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r,o=function(){function t(t,e,n,r){this.templateElement=document.getElementById(t),this.hostElement=document.getElementById(e);var o=document.importNode(this.templateElement.content,!0);this.element=o.firstElementChild,r&&(this.element.id=r),this.attach(n)}return t.prototype.attach=function(t){this.hostElement.insertAdjacentElement(t?"afterbegin":"beforeend",this.element)},t}();function i(t){var e=!0;return t.required&&(e=e&&0!==t.value.toString().trim().length),null!=t.minLength&&"string"==typeof t.value&&(e=e&&t.value.length>=t.minLength),null!=t.maxLength&&"string"==typeof t.value&&(e=e&&t.value.length<=t.maxLength),null!=t.min&&"number"==typeof t.value&&(e=e&&t.value>=t.min),null!=t.max&&"number"==typeof t.value&&(e=e&&t.value<=t.max),e}function u(t,e,n){var r=n.value;return{configurable:!0,get:function(){return r.bind(this)}}}!function(t){t[t.Active=0]="Active",t[t.Finished=1]="Finished"}(r||(r={}));var a,c=function(t,e,n,r,o){this.id=t,this.title=e,this.description=n,this.people=r,this.status=o},l=(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(t){function e(){var e=t.call(this)||this;return e.projects=[],e}return l(e,t),e.getInstance=function(){return this.instance||(this.instance=new e),this.instance},e.prototype.addProject=function(t,e,n){var o=new c(Math.random().toString(),t,e,n,r.Active);this.projects.push(o),this.updateListeners()},e.prototype.moveProject=function(t,e){var n=this.projects.find((function(e){return e.id===t}));n&&n.status!==e&&(n.status=e,this.updateListeners())},e.prototype.updateListeners=function(){for(var t=0,e=this.listeners;t<e.length;t++){(0,e[t])(this.projects.slice())}},e}(function(){function t(){this.listeners=[]}return t.prototype.addListener=function(t){this.listeners.push(t)},t}()).getInstance(),p=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),f=function(t,e,n,r){var o,i=arguments.length,u=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(u=(i<3?o(u):i>3?o(e,n,u):o(e,n))||u);return i>3&&u&&Object.defineProperty(e,n,u),u},d=function(t){function e(){var e=t.call(this,"project-input","app",!0,"user-input")||this;return e.titleInputElement=e.element.querySelector("#title"),e.descriptionInputElement=e.element.querySelector("#description"),e.peopleInputElement=e.element.querySelector("#people"),e.configure(),e}return p(e,t),e.prototype.configure=function(){this.element.addEventListener("submit",this.submitHandler)},e.prototype.renderContent=function(){},e.prototype.gatherUserInput=function(){var t=this.titleInputElement.value,e=this.descriptionInputElement.value,n=this.peopleInputElement.value,r={value:e,required:!0,minLength:5},o={value:+n,required:!0,min:1,max:5};return i({value:t,required:!0})&&i(r)&&i(o)?[t,e,+n]:void alert("Invalid input, please try again!")},e.prototype.clearInputs=function(){this.titleInputElement.value="",this.descriptionInputElement.value="",this.peopleInputElement.value=""},e.prototype.submitHandler=function(t){t.preventDefault();var e=this.gatherUserInput();if(Array.isArray(e)){var n=e[0],r=e[1],o=e[2];s.addProject(n,r,o),this.clearInputs()}},f([u],e.prototype,"submitHandler",null),e}(o),h=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),y=function(t,e,n,r){var o,i=arguments.length,u=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(u=(i<3?o(u):i>3?o(e,n,u):o(e,n))||u);return i>3&&u&&Object.defineProperty(e,n,u),u},v=function(t){function e(e,n){var r=t.call(this,"single-project",e,!1,n.id)||this;return r.project=n,r.configure(),r.renderContent(),r}return h(e,t),Object.defineProperty(e.prototype,"persons",{get:function(){return 1===this.project.people?"1 person":this.project.people+" persons"},enumerable:!0,configurable:!0}),e.prototype.dragStartHandler=function(t){t.dataTransfer.setData("text/plain",this.project.id),t.dataTransfer.effectAllowed="move"},e.prototype.dragEndHandler=function(t){},e.prototype.configure=function(){this.element.addEventListener("dragstart",this.dragStartHandler),this.element.addEventListener("dragend",this.dragEndHandler)},e.prototype.renderContent=function(){this.element.querySelector("h2").textContent=this.project.title,this.element.querySelector("h3").textContent=this.persons+" assigned.",this.element.querySelector("p").textContent=this.project.description},y([u],e.prototype,"dragStartHandler",null),y([u],e.prototype,"dragEndHandler",null),e}(o),m=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),g=function(t,e,n,r){var o,i=arguments.length,u=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(u=(i<3?o(u):i>3?o(e,n,u):o(e,n))||u);return i>3&&u&&Object.defineProperty(e,n,u),u},j=function(t){function e(e){var n=t.call(this,"project-list","app",!1,e+"-projects")||this;return n.type=e,n.assignedProjects=[],n.configure(),n.renderContent(),n}return m(e,t),e.prototype.dragOverHandler=function(t){t.dataTransfer&&"text/plain"===t.dataTransfer.types[0]&&(t.preventDefault(),this.element.querySelector("ul").classList.add("droppable"))},e.prototype.dropHandler=function(t){var e=t.dataTransfer.getData("text/plain");s.moveProject(e,"active"===this.type?r.Active:r.Finished)},e.prototype.dragLeaveHandler=function(t){this.element.querySelector("ul").classList.remove("droppable")},e.prototype.configure=function(){var t=this;this.element.addEventListener("dragover",this.dragOverHandler),this.element.addEventListener("dragleave",this.dragLeaveHandler),this.element.addEventListener("drop",this.dropHandler),s.addListener((function(e){var n=e.filter((function(e){return"active"===t.type?e.status===r.Active:e.status===r.Finished}));t.assignedProjects=n,t.renderProjects()}))},e.prototype.renderContent=function(){var t=this.type+"-projects-list";this.element.querySelector("ul").id=t,this.element.querySelector("h2").textContent=this.type.toUpperCase()+" PROJECTS"},e.prototype.renderProjects=function(){document.getElementById(this.type+"-projects-list").innerHTML="";for(var t=0,e=this.assignedProjects;t<e.length;t++){var n=e[t];new v(this.element.querySelector("ul").id,n)}},g([u],e.prototype,"dragOverHandler",null),g([u],e.prototype,"dropHandler",null),g([u],e.prototype,"dragLeaveHandler",null),e}(o);new d,new j("active"),new j("finished")}]);