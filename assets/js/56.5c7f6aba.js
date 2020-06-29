(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{426:function(t,e,s){"use strict";s.r(e);var a=s(8),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"stop-words"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stop-words"}},[t._v("#")]),t._v(" Stop-words")]),t._v(" "),s("p",[s("em",[t._v("Child route of the "),s("RouterLink",{attrs:{to:"/references/settings.html"}},[t._v("settings route")]),t._v(".")],1)]),t._v(" "),s("p",[t._v("The stop-words route lets you add a list of words that will be ignored in search queries. So if you add "),s("code",[t._v("the")]),t._v(" as a stop word and you make a search on "),s("code",[t._v("the mask")]),t._v(" you will only have matching documents with "),s("code",[t._v("mask")]),t._v(".")]),t._v(" "),s("p",[t._v("Stop-words can also be updated directly through the "),s("RouterLink",{attrs:{to:"/references/settings.html#update-settings"}},[t._v("global settings route")]),t._v(" along with the other settings.")],1),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/guides/advanced_guides/stop_words.html"}},[t._v("Learn more about stop words")])],1),t._v(" "),s("p",[t._v("::: note"),s("br"),t._v("\nUpdating the settings means overwriting the default settings of MeiliSearch. You can reset to default values using the "),s("code",[t._v("DELETE")]),t._v(" routes."),s("br"),t._v("\n:::")]),t._v(" "),s("h2",{attrs:{id:"get-stop-words"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-stop-words"}},[t._v("#")]),t._v(" Get stop-words")]),t._v(" "),s("RouteHighlighter",{attrs:{method:"GET",route:"/indexes/:index_uid/settings/stop-words"}}),t._v(" "),s("p",[t._v("Get the "),s("RouterLink",{attrs:{to:"/guides/advanced_guides/stop_words.html"}},[t._v("stop-words")]),t._v(" list of an index.")],1),t._v(" "),s("h4",{attrs:{id:"path-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-variables"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Variable")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("index_uid")])]),t._v(" "),s("td",[t._v("The index UID")])])])]),t._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("code-samples",{attrs:{id:"get_stop_words_1"}}),t._v(" "),s("h4",{attrs:{id:"response-200-ok"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-200-ok"}},[t._v("#")]),t._v(" Response: "),s("code",[t._v("200 Ok")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"of"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"the"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"to"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"update-stop-words"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-stop-words"}},[t._v("#")]),t._v(" Update stop-words")]),t._v(" "),s("RouteHighlighter",{attrs:{method:"POST",route:"/indexes/:index_uid/settings/stop-words"}}),t._v(" "),s("p",[t._v("Update the list of "),s("RouterLink",{attrs:{to:"/guides/advanced_guides/stop_words.html"}},[t._v("stop-words")]),t._v(" of an index.")],1),t._v(" "),s("h4",{attrs:{id:"path-variables-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-2"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Variable")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("index_uid")])]),t._v(" "),s("td",[t._v("The index UID")])])])]),t._v(" "),s("h4",{attrs:{id:"body"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#body"}},[t._v("#")]),t._v(" Body")]),t._v(" "),s("p",[t._v("An array of strings that contains the "),s("RouterLink",{attrs:{to:"/guides/advanced_guides/stop_words.html"}},[t._v("stop-words")]),t._v(".")],1),t._v(" "),s("p",[t._v("If a list of stop-words already exists it will be overwritten ("),s("em",[t._v("replaced")]),t._v(").")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/guides/advanced_guides/settings.html#stop-words"}},[t._v("More information about the body")]),t._v(".")],1),t._v(" "),s("h3",{attrs:{id:"example-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("code-samples",{attrs:{id:"update_stop_words_1"}}),t._v(" "),s("h4",{attrs:{id:"response-202-accepted"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted"}},[t._v("#")]),t._v(" Response: "),s("code",[t._v("202 Accepted")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("This "),s("code",[t._v("updateId")]),t._v(" allows you to "),s("RouterLink",{attrs:{to:"/references/updates.html"}},[t._v("track the current update")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"reset-stop-words"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reset-stop-words"}},[t._v("#")]),t._v(" Reset stop-words")]),t._v(" "),s("RouteHighlighter",{attrs:{method:"DELETE",route:"/indexes/:index_uid/settings/stop-words"}}),t._v(" "),s("p",[t._v("Reset the list of "),s("RouterLink",{attrs:{to:"/guides/advanced_guides/stop_words.html"}},[t._v("stop-words")]),t._v(" of an index to its default value.")],1),t._v(" "),s("h4",{attrs:{id:"default-value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#default-value"}},[t._v("#")]),t._v(" Default value")]),t._v(" "),s("p",[t._v("Empty array: "),s("code",[t._v("[]")])]),t._v(" "),s("h4",{attrs:{id:"path-variables-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-3"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Variable")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("index_uid")])]),t._v(" "),s("td",[t._v("The index UID")])])])]),t._v(" "),s("h3",{attrs:{id:"example-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-3"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("code-samples",{attrs:{id:"reset_stop_words_1"}}),t._v(" "),s("h4",{attrs:{id:"response-202-accepted-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted-2"}},[t._v("#")]),t._v(" Response: "),s("code",[t._v("202 Accepted")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("This "),s("code",[t._v("updateId")]),t._v(" allows you to "),s("RouterLink",{attrs:{to:"/references/updates.html"}},[t._v("track the current update")]),t._v(".")],1)],1)}),[],!1,null,null,null);e.default=r.exports}}]);