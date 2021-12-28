(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{387:function(t,s,a){t.exports=a.p+"assets/img/sample-prototype-further.fa69ff5e.png"},388:function(t,s,a){t.exports=a.p+"assets/img/sample-prototype-chaining.9e360987.png"},389:function(t,s,a){t.exports=a.p+"assets/img/sample-prototype-chaining-full.0fa37bae.png"},390:function(t,s,a){t.exports=a.p+"assets/img/prototype-chaining.58f61431.png"},399:function(t,s,a){"use strict";a.r(s);var n=a(54),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"javascript-原型及原型链"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#javascript-原型及原型链"}},[t._v("#")]),t._v(" "),n("code",[t._v("Javascript 原型及原型链")])]),t._v(" "),n("blockquote",[n("h2",{attrs:{id:"原型-原型对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原型-原型对象"}},[t._v("#")]),t._v(" 原型(原型对象)")])]),t._v(" "),n("p",[n("code",[t._v("无论什么时候，只要创建了一个新函数，JS 就会根据一组特定的规则为该函数创建一个 prototype 属性，这个属性指向该函数的原型对象。在默认情况下，所有原型对象都会自动获得一个constructor(构造函数)属性，这个属性包含一个指向 prototype 属性所在函数的指针，当构造函数创建一个新实例后，该实例的内部包含一个指针[[Prototype]](内部属性)指向构造函数的原型对象。摘自 - 《JavaScript高级程序设计》(第3版) - 面向对象的程序设计")])]),t._v(" "),n("hr"),t._v(" "),n("blockquote",[n("blockquote",[n("p",[n("strong",[t._v("例子")])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n创建一个函数 A：function A(){}\nfunction A(){} 会有一个属性： prototype 属性\nfunction A(){} 的原型对象为： A.prototype\nfunction A(){} 的原型对象会自动获得一个 constructor 属性： A.prototype.constructor\n那么：\nfunction A(){} 中的 prototype 属性 --\x3e A.prototype (function A(){} 的原型对象)\nA.prototype.constructor (constructor属性) --\x3e function A(){} (函数 A)\n*/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//[output] true // 可见原型对象中的constructor 指向函数A")]),t._v("\n")])])])])]),t._v(" "),n("hr"),t._v(" "),n("blockquote",[n("blockquote",[n("p",[n("strong",[t._v("更进一步")])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n使用 new 关键字结合 A() 函数来创建实例 obj\n则 obj 这个实例会有一个 [[Prototype]] 内部属性指向 A 的原型对象 A.prototype\nFirefox、Safari 和 Chrome 在每个对象上都支持一个属性 __proto__ ，它就相当于 [[Prototype]]\n*/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//[output] true // 可见实例中的 [[Prototype]] 指向函数原型 A.prototype")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"guang"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 给A的原型对象增加一个name:"guang"属性')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("sayName")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 给A的原型对象增加一个sayName方法")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// guang")]),t._v("\n")])])]),n("p",[t._v("示例对应结构图\n"),n("img",{attrs:{src:a(387),alt:"sample mprototype",title:"右键新标签打开"}})]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n上图展示了A 构造函数、A 的原型属性以及A 现有的实例 obj之间的关系。\n在此，A.prototype 指向了原型对象，而A.prototype.constructor 又指回了A。\n原型对象中除了包含constructor 属性之外，还包括后来添加的其他属性。A 的每个实例—\n都包含一个内部属性，该属性仅仅指向了 A.prototype原型对象,而构造函数没有直接的关系。\n虽然这 obj实例不包含属性和方法，但却可调用 A.sayName(),这是通过查找对象属性的过程来实现的。\n\n每当代码读取某个对象的某个属性时，都会执行一次搜索，目标是具有给定名字的属性。搜索首先\n从对象实例本身开始。如果在实例中找到了具有给定名字的属性，则返回该属性的值；如果没有找到，\n则继续搜索指针指向的原型对象，在原型对象中查找具有给定名字的属性。如果在原型对象中找到了这\n个属性，则返回该属性的值。\n\n对于上面的例子而言，在调用A.sayName()的时候，会先后执行两次搜索\n首先，解析器会问：“实例A 有sayName 属性吗？”答：“没有。”然后，它继续搜索，再\n问：“A 的原型有sayName 属性吗？”答：“有。”于是，它就读取那个保存在原型对象中的函数。\n而这正是多个对象实例共享原型所保存的属性和方法的基本原理。\n*/")]),t._v("\n")])])])])]),t._v(" "),n("hr"),t._v(" "),n("blockquote",[n("h2",{attrs:{id:"原型链"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原型链"}},[t._v("#")]),t._v(" 原型链")])]),t._v(" "),n("p",[n("code",[t._v("每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针。当一个原型对象是另一个原型对象的实例时，该原型对象将包含一个指向另一个原型的指针。相应地，另一个原型中也包含着一个指向另一个构造函数的指针.假如另一个原型又是另一个类型的实例，那么上述关系依然成立，如此层层递进，就构成了实例与原型的链条。摘自 - 《JavaScript高级程序设计》(第3版) - 面向对象的程序设计")])]),t._v(" "),n("hr"),t._v(" "),n("blockquote",[n("blockquote",[n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 以下代码定义两个类型：SuperType、SubType。通过创建并指向 SuperType的实例，\n原型对象 SubType.prototype 继承了SuperType的属性。本质上是通过重写原型对象实现继承。*/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SuperType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("property "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SuperType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getSuperValue")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("property"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SubType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subproperty "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//继承了SuperType")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SubType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SuperType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SubType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getSubValue")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subproperty"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" instance "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SubType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSuperValue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//[output] true")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" SubType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("instance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" SuperType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//[output] false true")]),t._v("\n")])])]),n("p",[t._v("示例对应结构图\n"),n("img",{attrs:{src:a(388),alt:"sample prototype chaining",title:"右键新标签打开"}})]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n在上面的代码中，并没有使用SubType 默认提供的原型，而是给它换了一个新原型；这个新原型\n就是SuperType 的实例。于是，新原型不仅具有作为一个SuperType 的实例所拥有的全部属性和方法，\n而且其内部还有一个指针，指向了SuperType 的原型。\n最终结果就是这样的：instance 指向SubType的原型， SubType 的原型又指向SuperType 的原型。\ngetSuperValue() 方法仍然还在 SuperType.prototype 中，但property 则位于SubType.prototype 中。\n这是因为property 是一个实例属性，而getSuperValue()则是一个原型方法。既然SubType.prototype 现在是SuperType\n的实例，那么property 当然就位于该实例中了。此外，要注意instance.constructor 现在指向的\n是SuperType，这是因为SubType 的原型指向了另一个对象——>SuperType 的原型，而这个原型对象的constructor 属性指向的是SuperType。\n在通过原型链实现继承的情况下，搜索过程就得以沿着原型链继续向上。就拿上面的例子来说，调用\ninstance.getSuperValue()会经历三个搜索步骤：\n1 -> 搜索实例；\n2 -> 搜索SubType.prototype；\n3 -> 搜索SuperType.prototype；\n4 -> 最后一步才会找到该方法。在找不到属性或方法的情况下，搜索过程总是要一环一环地前行到原型链末端才会停下来。\n--- --- --- \n事实上，因为所有引用类型默认都继承了Object，而这个继承也是通过原型链实现的。\n因此默认原型都会包含一个内部指针，指向Object.prototype。这也正是所有自定义类型都会\n继承toString()、valueOf()等方法的根本原因。对该例子来说完整的原型链应该如下：\n*/")]),t._v("\n")])])]),n("p",[t._v("示例完整结构图\n"),n("img",{attrs:{src:a(389),alt:"sample prototype chaining full",title:"右键新标签打开"}})])])]),t._v(" "),n("hr"),t._v(" "),n("blockquote",[n("blockquote",[n("p",[t._v("由此，对于 javascript 来说，一个更完善的结构图 "),n("s",[t._v("只需要结合《JavaScript高级程序设计》和《JavaScript权威指南》对以上原型和原型链的理解，对对象及其创建的理解，对函数的理解")]),t._v(" 就很容易得到并且画出来了 ⛺️😃🤣\n"),n("img",{attrs:{src:a(390),alt:"prototype chaining",title:"右键新标签打开"}})])])]),t._v(" "),n("hr")])}),[],!1,null,null,null);s.default=p.exports}}]);