var $=Object.defineProperty;var c=(e,r)=>$(e,"name",{value:r,configurable:!0});import{r as o}from"./jsx-runtime.57db420a.js";function f(){return f=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},f.apply(this,arguments)}c(f,"_extends");function x(e,r){typeof e=="function"?e(r):e!=null&&(e.current=r)}c(x,"$6ed0406888f73fc4$var$setRef");function u(...e){return r=>e.forEach(n=>x(n,r))}c(u,"$6ed0406888f73fc4$export$43e446d32b3d21af");function v(...e){return o.exports.useCallback(u(...e),e)}c(v,"$6ed0406888f73fc4$export$c7b2cbe3552a0d05");const m=o.exports.forwardRef((e,r)=>{const{children:n,...t}=e,l=o.exports.Children.toArray(n),s=l.find(b);if(s){const i=s.props.children,a=l.map(d=>d===s?o.exports.Children.count(i)>1?o.exports.Children.only(null):o.exports.isValidElement(i)?i.props.children:null:d);return o.exports.createElement(p,f({},t,{ref:r}),o.exports.isValidElement(i)?o.exports.cloneElement(i,void 0,a):null)}return o.exports.createElement(p,f({},t,{ref:r}),n)});m.displayName="Slot";const p=o.exports.forwardRef((e,r)=>{const{children:n,...t}=e;return o.exports.isValidElement(n)?o.exports.cloneElement(n,{...E(t,n.props),ref:u(r,n.ref)}):o.exports.Children.count(n)>1?o.exports.Children.only(null):null});p.displayName="SlotClone";const h=c(({children:e})=>o.exports.createElement(o.exports.Fragment,null,e),"$5e63c961fc1ce211$export$d9f1ccf0bdb05d45");function b(e){return o.exports.isValidElement(e)&&e.type===h}c(b,"$5e63c961fc1ce211$var$isSlottable");function E(e,r){const n={...r};for(const t in r){const l=e[t],s=r[t];/^on[A-Z]/.test(t)?l&&s?n[t]=(...a)=>{s(...a),l(...a)}:l&&(n[t]=l):t==="style"?n[t]={...l,...s}:t==="className"&&(n[t]=[l,s].filter(Boolean).join(" "))}return{...e,...n}}c(E,"$5e63c961fc1ce211$var$mergeProps");export{m as $,v as a};
//# sourceMappingURL=index.module.df40e9e0.js.map
