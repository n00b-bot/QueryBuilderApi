(window.test_bundle_jsonpfunction=window.test_bundle_jsonpfunction||[]).push([[1],{22:function(e,t,a){"use strict";a.r(t),a.d(t,"renderApp",(function(){return x}));var s=a(16),n=a.n(s),u=a(18),i=a.n(u),o=a(3),l=a(19),j=a(20),c=a(21),d=a(2),r=a(17);const b=({basename:e,notifications:t,http:a,navigation:u})=>{const[i,b]=Object(s.useState)();return Object(r.jsx)(j.BrowserRouter,{basename:e},Object(r.jsx)(l.I18nProvider,null,Object(r.jsx)(n.a.Fragment,null,Object(r.jsx)(u.ui.TopNavMenu,{appName:d.a,showSearchBar:!0,useDefaultBehaviors:!0}),Object(r.jsx)(c.EuiPage,{restrictWidth:"1000px"},Object(r.jsx)(c.EuiPageBody,null,Object(r.jsx)(c.EuiPageHeader,null,Object(r.jsx)(c.EuiTitle,{size:"l"},Object(r.jsx)("h1",null,Object(r.jsx)(l.FormattedMessage,{id:"test.helloWorldText",defaultMessage:"{name}",values:{name:d.b}})))),Object(r.jsx)(c.EuiPageContent,null,Object(r.jsx)(c.EuiPageContentHeader,null,Object(r.jsx)(c.EuiTitle,null,Object(r.jsx)("h2",null,Object(r.jsx)(l.FormattedMessage,{id:"test.congratulationsTitle",defaultMessage:"Congratulations, you have successfully created a new Kibana Plugin!"})))),Object(r.jsx)(c.EuiPageContentBody,null,Object(r.jsx)(c.EuiText,null,Object(r.jsx)("p",null,Object(r.jsx)(l.FormattedMessage,{id:"test.content",defaultMessage:"Look through the generated code and check out the plugin development documentation."})),Object(r.jsx)(c.EuiHorizontalRule,null),Object(r.jsx)("p",null,Object(r.jsx)(l.FormattedMessage,{id:"test.timestampText",defaultMessage:"Last timestamp: {time}",values:{time:i||"Unknown"}})),Object(r.jsx)(c.EuiButton,{type:"primary",size:"s",onClick:()=>{a.get("/api/test/example").then((e=>{b(e.time),t.toasts.addSuccess(o.i18n.translate("test.dataUpdated",{defaultMessage:"Data updated"}))}))}},Object(r.jsx)(l.FormattedMessage,{id:"test.buttonText",defaultMessage:"Get data"}))))))))))},x=({notifications:e,http:t},{navigation:a},{appBasePath:s,element:n})=>(i.a.render(Object(r.jsx)(b,{basename:s,notifications:e,http:t,navigation:a}),n),()=>i.a.unmountComponentAtNode(n))}}]);