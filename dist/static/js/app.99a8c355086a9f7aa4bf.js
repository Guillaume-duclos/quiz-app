webpackJsonp([1],{"73pO":function(t,e){},"8YJZ":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},o,!1,function(t){n("8YJZ")},null,null).exports,i=n("/ocq"),a=n("mtWM"),u=n.n(a),c={data:function(){return{categoryList:null,chosenCategory:0,nbQuestion:1,isLoading:!0,noError:!0,errorMessage:null}},mounted:function(){var t=this;u.a.get("https://opentdb.com/api_category.php").then(function(e){return t.categoryList=e.data.trivia_categories}).catch(function(e){t.noError=!1,t.errorMessage=e}).finally(function(){t.isLoading=!1})}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fragment",[!t.isLoading&&t.noError?n("div",{attrs:{id:"home"}},[n("h1",[t._v("Quiz")]),t._v(" "),n("h2",[t._v("Choisissez une témathique et un niveau de difficulté avant de commencer.")]),t._v(" "),n("div",{staticClass:"setup"},[n("div",[n("label",[t._v("Choisissez la catégorie :")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.chosenCategory,expression:"chosenCategory"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.chosenCategory=e.target.multiple?n:n[0]}}},[n("option",{key:"Any category",attrs:{value:"0"}},[t._v("ANY CATEGORY")]),t._v(" "),t._l(t.categoryList,function(e){return n("option",{key:e.name,domProps:{value:e.id}},[t._v("\n            "+t._s(e.name)+"\n          ")])})],2)]),t._v(" "),n("div",[n("label",[t._v("Choisissez le nombre de question :")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.nbQuestion,expression:"nbQuestion"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.nbQuestion=e.target.multiple?n:n[0]}}},t._l(50,function(e){return n("option",{key:e,domProps:{value:e}},[t._v("\n            "+t._s(e)+"\n          ")])}),0)])]),t._v(" "),n("router-link",{staticClass:"button",attrs:{to:{name:"Quiz",params:{category:t.chosenCategory,nbQuestion:t.nbQuestion}}}},[t._v("Valider")])],1):t._e(),t._v(" "),t.noError?t._e():n("p",[t._v(t._s(t.errorMessage))])])},staticRenderFns:[]};var d=n("VU/8")(c,l,!1,function(t){n("XxKd")},"data-v-59ab925b",null).exports,p={props:{text:String},methods:{handleClick:function(){this.$emit("click")}}},v={render:function(){var t=this.$createElement;return(this._self._c||t)("button",{on:{click:this.handleClick}},[this._v(this._s(this.text))])},staticRenderFns:[]},h={data:function(){return{questions:null,questionIndex:0,isLoading:!0,noError:!0,errorMessage:null,result:!1,score:0,showNextButton:!1}},mounted:function(){var t=this;u.a.get("https://opentdb.com/api.php?amount="+this.$route.params.nbQuestion+"&category="+this.$route.params.category).then(function(e){t.questions=e.data.results}).catch(function(e){t.noError=!1,t.errorMessage=e}).finally(function(){t.isLoading=!1})},updated:function(){if(!this.showNextButton)for(var t=this.$refs.responseContainer.children.length;t>=0;t--)this.$refs.responseContainer.appendChild(this.$refs.responseContainer.children[Math.random()*t|0])},methods:{invalidResult:function(){this.result=!1},validResult:function(){this.result=!0},submitResponse:function(){this.result&&this.score++,this.showNextButton=!0},nextQuestion:function(){this.result=!1,this.questionIndex++,this.showNextButton=!1}},components:{Button:n("VU/8")(p,v,!1,null,null,null).exports}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fragment",[!t.isLoading&&t.noError?n("div",[n("h1",{staticClass:"title"},[t._v("Question "+t._s(t.questionIndex+1)+"/"+t._s(t.$route.params.nbQuestion))]),t._v(" "),n("h2",[t._v(t._s(t.questions[t.questionIndex].question))]),t._v(" "),t.showNextButton?t._e():n("div",{ref:"responseContainer",staticClass:"response-container"},[t._l(t.questions[t.questionIndex].incorrect_answers,function(e){return n("div",{key:e,staticClass:"response"},[n("input",{attrs:{type:"radio",id:e,name:"response"},domProps:{value:e}}),t._v(" "),n("label",{attrs:{for:e},on:{click:t.invalidResult}},[t._v(t._s(e))])])}),t._v(" "),n("div",{staticClass:"response"},[n("input",{attrs:{type:"radio",id:this.questions[t.questionIndex].correct_answer,name:"response"},domProps:{value:this.questions[t.questionIndex].correct_answer}}),t._v(" "),n("label",{attrs:{for:this.questions[t.questionIndex].correct_answer},on:{click:t.validResult}},[t._v(t._s(this.questions[t.questionIndex].correct_answer))])])],2),t._v(" "),t.result&&t.showNextButton?n("p",{staticClass:"feedback good-answer"},[t._v("Bonne réponse !")]):t._e(),t._v(" "),!t.result&&t.showNextButton?n("p",{staticClass:"feedback bad-answer"},[t._v("Mauvaise réponse")]):t._e(),t._v(" "),t.questionIndex+1<=t.$route.params.nbQuestion&&!t.showNextButton?n("Button",{staticClass:"button",attrs:{text:"Valider"},on:{click:t.submitResponse}}):t._e(),t._v(" "),t.questionIndex+1!=t.$route.params.nbQuestion&&t.showNextButton?n("Button",{staticClass:"button",attrs:{text:"Suivant"},on:{click:t.nextQuestion}}):t._e(),t._v(" "),t.questionIndex+1==t.$route.params.nbQuestion&&t.showNextButton?n("router-link",{staticClass:"button",attrs:{to:{name:"Results",params:{score:t.score,nbQuestion:t.$route.params.nbQuestion}}}},[t._v("Voir le score")]):t._e()],1):t._e(),t._v(" "),t.noError?t._e():n("p",[t._v(t._s(t.errorMessage))])])},staticRenderFns:[]};var m=n("VU/8")(h,_,!1,function(t){n("73pO")},"data-v-5ad8259b",null).exports,f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("Votre score est de "+this._s(this.$route.params.score)+"/"+this._s(this.$route.params.nbQuestion))]),this._v(" "),e("router-link",{staticClass:"link",attrs:{to:{name:"Home"}}},[this._v("Rejouer")])],1)},staticRenderFns:[]};var g=n("VU/8")(null,f,!1,function(t){n("NzFg")},"data-v-12bfc0f8",null).exports;s.a.use(i.a);var b=new i.a({mode:"history",routes:[{path:"/",name:"Home",component:d},{path:"/quiz/:category(\\d+)/:nbQuestion(\\d+)",name:"Quiz",component:m},{path:"/results/:score(\\d+)/:nbQuestion(\\d+)",name:"Results",component:g},{path:"*",redirect:"/"}]}),x=n("Z9LF");s.a.config.productionTip=!1,s.a.use(x.a.Plugin),new s.a({el:"#app",router:b,components:{App:r},template:"<App/>"})},NzFg:function(t,e){},XxKd:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.99a8c355086a9f7aa4bf.js.map