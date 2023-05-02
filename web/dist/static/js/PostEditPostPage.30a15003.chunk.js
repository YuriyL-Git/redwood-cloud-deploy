/*! For license information please see PostEditPostPage.30a15003.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[134],{90896:function(e,r,t){var n=t(27378),a=t(74857);r.Z=function(e){var r,t;return n.createElement("div",{className:"rw-form-wrapper"},n.createElement(a.Form,{onSubmit:function(r){var t;e.onSave(r,null==e||null===(t=e.post)||void 0===t?void 0:t.id)},error:e.error},n.createElement(a.FormError,{error:e.error,wrapperClassName:"rw-form-error-wrapper",titleClassName:"rw-form-error-title",listClassName:"rw-form-error-list"}),n.createElement(a.Label,{name:"title",className:"rw-label",errorClassName:"rw-label rw-label-error"},"Title"),n.createElement(a.TextField,{name:"title",defaultValue:null===(r=e.post)||void 0===r?void 0:r.title,className:"rw-input",errorClassName:"rw-input rw-input-error",validation:{required:!0}}),n.createElement(a.FieldError,{name:"title",className:"rw-field-error"}),n.createElement(a.Label,{name:"body",className:"rw-label",errorClassName:"rw-label rw-label-error"},"Body"),n.createElement(a.TextField,{name:"body",defaultValue:null===(t=e.post)||void 0===t?void 0:t.body,className:"rw-input",errorClassName:"rw-input rw-input-error",validation:{required:!0}}),n.createElement(a.FieldError,{name:"body",className:"rw-field-error"}),n.createElement("div",{className:"rw-button-group"},n.createElement(a.Submit,{disabled:e.loading,className:"rw-button rw-button-blue"},"Save"))))}},57622:function(e,r,t){t.r(r),t.d(r,{default:function(){return w}});var n,a,l=t(27378),o=(t(95988),t(31786)),i=t(94621),s=t(98889),u=t(81006),c=t(90896);function d(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function m(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}var f=(0,i.ZP)(n||(n=m(["\n  query EditPostById($id: Int!) {\n    post: post(id: $id) {\n      id\n      title\n      body\n      createdAt\n    }\n  }\n"]))),p=(0,i.ZP)(a||(a=m(["\n  mutation UpdatePostMutation($id: Int!, $input: UpdatePostInput!) {\n    updatePost(id: $id, input: $input) {\n      id\n      title\n      body\n      createdAt\n    }\n  }\n"]))),b=(0,o.createCell)({QUERY:f,Loading:function(){return l.createElement("div",null,"Loading...")},Failure:function(e){var r=e.error;return l.createElement("div",{className:"rw-cell-error"},null==r?void 0:r.message)},Success:function(e){var r,t,n=e.post,a=(0,o.useMutation)(p,{onCompleted:function(){u.toast.success("Post updated"),(0,s.navigate)(s.routes.posts())},onError:function(e){u.toast.error(e.message)}}),i=(t=2,function(e){if(Array.isArray(e))return e}(r=a)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,l,o,i=[],s=!0,u=!1;try{if(l=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;s=!1}else for(;!(s=(n=l.call(t)).done)&&(i.push(n.value),i.length!==r);s=!0);}catch(e){u=!0,a=e}finally{try{if(!s&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(u)throw a}}return i}}(r,t)||function(e,r){if(e){if("string"==typeof e)return d(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?d(e,r):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),m=i[0],f=i[1],b=f.loading,w=f.error;return l.createElement("div",{className:"rw-segment"},l.createElement("header",{className:"rw-segment-header"},l.createElement("h2",{className:"rw-heading rw-heading-secondary"},"Edit Post ",null==n?void 0:n.id)),l.createElement("div",{className:"rw-segment-main"},l.createElement(c.Z,{post:n,onSave:function(e,r){m({variables:{id:r,input:e}})},error:w,loading:b})))},displayName:"EditPostCell"}),w=function(e){var r=e.id;return l.createElement(b,{id:r})}}}]);