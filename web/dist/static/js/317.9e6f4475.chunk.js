/*! For license information please see 317.9e6f4475.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[317],{92317:function(e,t,r){r.r(t),r.d(t,{default:function(){return E}});var n,l,c,i=r(27378),a=r(31786),u=r(94621),d=r(98889),o=function(e){var t=e.article;return i.createElement("article",null,i.createElement("header",null,i.createElement("h2",null,i.createElement(d.Link,{to:d.routes.article({id:t.id})},t.title))),i.createElement("div",null,t.body),i.createElement("div",null,"Posted at: ",t.createdAt))},m=(0,u.ZP)(n||(l=["\n  query ArticleQuery($id: Int!) {\n    article: post(id: $id) {\n      id\n      title\n      body\n      createdAt\n    }\n  }\n"],c||(c=l.slice(0)),n=Object.freeze(Object.defineProperties(l,{raw:{value:Object.freeze(c)}})))),s=(0,a.createCell)({QUERY:m,Loading:function(){return i.createElement("div",null,"Loading...")},Empty:function(){return i.createElement("div",null,"Empty")},Failure:function(e){var t=e.error;return i.createElement("div",{style:{color:"red"}},"Error: ",t.message)},Success:function(e){var t=e.article;return i.createElement(o,{article:t})},displayName:"ArticleCell"}),E=function(e){var t=e.id;return i.createElement(i.Fragment,null,i.createElement(a.MetaTags,{title:"Article",description:"Article page"}),i.createElement(s,{id:t}))}}}]);