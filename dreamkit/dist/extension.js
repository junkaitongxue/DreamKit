"use strict";var d=Object.create;var i=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var l=Object.getOwnPropertyNames;var m=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty;var p=(o,e)=>{for(var t in e)i(o,t,{get:e[t],enumerable:!0})},r=(o,e,t,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of l(e))!v.call(o,s)&&s!==t&&i(o,s,{get:()=>e[s],enumerable:!(a=c(e,s))||a.enumerable});return o};var u=(o,e,t)=>(t=o!=null?d(m(o)):{},r(e||!o||!o.__esModule?i(t,"default",{value:o,enumerable:!0}):t,o)),f=o=>r(i({},"__esModule",{value:!0}),o);var w={};p(w,{activate:()=>x,deactivate:()=>g});module.exports=f(w);var n=u(require("vscode"));function x(o){console.log('Congratulations, your extension "dreamkit" is now active!');let e=n.commands.registerCommand("dreamkit.helloWorld",()=>{n.window.showInformationMessage("Hello World from DreamKit!")});o.subscriptions.push(e)}function g(){}0&&(module.exports={activate,deactivate});
