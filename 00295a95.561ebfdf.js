(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(9),i=(n(0),n(182)),o={id:"taro_002",title:"Taro\u9879\u76ee\u89c4\u8303"},l={id:"taro_002",isDocsHomePage:!1,title:"Taro\u9879\u76ee\u89c4\u8303",description:"\u524d\u8a00",source:"@site/docs/Taro_Taro\u9879\u76ee\u89c4\u8303.md",permalink:"/my-blog-docusaurus/docs/taro_002",editUrl:"https://github.com/cathe-zhang/my-blog-docusaurus/tree/dev/docs/Taro_Taro\u9879\u76ee\u89c4\u8303.md",sidebar:"someSidebar",previous:{title:"Taro\u8e29\u5751\u6307\u5357",permalink:"/my-blog-docusaurus/docs/taro_001"},next:{title:"H5\u5b9a\u4f4d\u7ec8\u6781\u89e3\u51b3\u65b9\u6848",permalink:"/my-blog-docusaurus/docs/h5_001"}},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"Prettier",id:"prettier",children:[]},{value:"ESLint",id:"eslint",children:[{value:"eslint\u89c4\u5219\u683c\u5f0f",id:"eslint\u89c4\u5219\u683c\u5f0f",children:[]},{value:"\u5177\u4f53\u7684\u89c4\u5219\u5217\u8868",id:"\u5177\u4f53\u7684\u89c4\u5219\u5217\u8868",children:[]}]},{value:"CommitLint",id:"commitlint",children:[{value:"commitlint\u7c7b\u578b\u5217\u8868",id:"commitlint\u7c7b\u578b\u5217\u8868",children:[]}]},{value:"stylelint",id:"stylelint",children:[]},{value:"\u9e23\u8c22",id:"\u9e23\u8c22",children:[]}],b={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),Object(i.b)("p",null,"\u6700\u8fd1\u7684\u9879\u76ee\u6280\u672f\u6808\u4ece UniApp \u91cd\u6784\u4e3a Taro \u6280\u672f\u6808\uff0c\u4e4b\u524d\u7684\u8001\u9879\u76ee\u56e0\u4e3a\u5927\u5bb6\u5df2\u7ecf\u4e60\u60ef\u4e86\u4e4b\u524d\u7684\u5f00\u53d1\u65b9\u5f0f\uff0c\u5f88\u591a\u4e1c\u897f\u7684\u6539\u52a8\u6210\u672c\u8f83\u9ad8\uff0c\u65e2\u7136\u662f\u91cd\u6784\uff0c\u4e5f\u5c31\u4e0b\u5b9a\u51b3\u5fc3\u5f7b\u5e95\u629b\u5f03\u4e86\u8001\u9879\u76ee\u4e2d\u7684\u4e1c\u897f\uff0c\u8df3\u51fa\u4e86\u4e4b\u524d\u7684\u601d\u7ef4\u5b9a\u52bf\uff0c\u53bb\u505a\u4e00\u4e9b\u65b0\u7684\u4e1c\u897f\u3002"),Object(i.b)("p",null,"\u8001\u9879\u76ee\u4e2d\uff0c\u5bf9\u4e8e lint \u8fd9\u4e00\u5757\u7684\u5185\u5bb9\u505a\u7684\u4e0d\u591f\u591a\uff0c\u56e0\u4e3a\u4e4b\u524d\u539f\u672c\u662f js \u7684\u9879\u76ee\uff0c\u7528\u7684 lint \u89c4\u5219\u57fa\u672c\u4e5f\u662f\u7ee7\u627f\u81ea\u7b2c\u4e09\u65b9\u5e93\uff0c\u6ca1\u6709\u5f88\u597d\u5730\u8003\u8651\u5230\u9879\u76ee\u4e2d\u7684\u5b9e\u9645\u9700\u6c42\u3002\u65e2\u7136\u662f\u5f00\u53d1\u89c4\u8303\uff0c\u90a3\u4e48\u65e2\u8981\u6709\u89c4\u8303\uff0c\u4e5f\u8981\u517c\u987e\u5f00\u53d1\u7684\u4f53\u9a8c\uff0c\u4e00\u5207\u5de5\u5177\u90fd\u662f\u4e3a\u4eba\u670d\u52a1\u7684\uff0c\u6700\u9002\u5408\u7684\u624d\u662f\u6700\u597d\u7684\u3002"),Object(i.b)("p",null,"\u5b58\u5728\u7684\u95ee\u9898\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u7f3a\u5c11 typescript \u89c4\u5219\u6821\u9a8c\uff0c\u8001\u9879\u76ee\u672c\u6765\u5c31\u662f\u57fa\u4e8e js \u9879\u76ee\uff0c\u6240\u4ee5\u8fd9\u4e2a\u4e0d\u80fd\u5f3a\u6c42"),Object(i.b)("li",{parentName:"ul"},"\u63d0\u4ea4\u4e4b\u524d\u6ca1\u6709\u683c\u5f0f\u5316\u4ee3\u7801\uff0c\u867d\u7136\u63d0\u4f9b\u4e86\u53e6\u5916\u7684\u811a\u672c\u7528\u4e8e\u683c\u5f0f\u5316\u6587\u4ef6\uff0c\u4f46\u662f\u4e00\u4e2a\u76f8\u540c\u7684\u6587\u4ef6\u6709\u591a\u4e2a\u5f00\u53d1\u4fee\u6539\uff0c\u5982\u679c\u5927\u5bb6\u90fd\u4e0d\u4e3b\u52a8\u6267\u884clint\u811a\u672c, \u5f00\u53d1A\u63d0\u4ea4\u5230\u4ee3\u7801\u5e93\u4e2d\uff0c\u5f00\u53d1B\u5728\u672c\u5730\u4f7f\u7528\u7f16\u8f91\u5668\u63d2\u4ef6\u683c\u5f0f\u5316\u4e4b\u540e\u518d\u63d0\u4ea4\uff0c\u5c31\u4f1a\u9020\u6210\u4e0d\u5fc5\u8981\u7684\u51b2\u7a81\uff0c\u751a\u81f3\u4f1a\u63a9\u76d6\u6389\u672c\u6765\u5f88\u5bb9\u6613\u53d1\u73b0\u7684\u95ee\u9898\u3002"),Object(i.b)("li",{parentName:"ul"},"scss \u68c0\u67e5\u53ca\u683c\u5f0f\u5316\uff0c\u540c\u6837\u662f\u683c\u5f0f\u5316\u4f1a\u9020\u6210\u51b2\u7a81\uff0c\u53e6\u5916\uff0c\u4e0d\u89c4\u8303\u7684\u4e66\u5199\u65b9\u5f0f\u4e5f\u589e\u52a0\u4e86\u6837\u5f0f\u6587\u4ef6\u7684\u7ef4\u62a4\u96be\u5ea6"),Object(i.b)("li",{parentName:"ul"},"commitlint\uff0c\u8001\u9879\u76ee\u4e2d\u6709\u8bb8\u591a\u7684 commit log \u60e8\u4e0d\u5fcd\u7779\uff0c\u6beb\u65e0\u53ef\u8bfb\u6027\u53ef\u8a00\u3002")),Object(i.b)("p",null,"\u7ed3\u5408\u5b9e\u9645\u9700\u6c42\u53ca\u901a\u7528\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u4ee3\u7801\u89c4\u8303\u6d89\u53ca\u5230\u7684\u5de5\u5177\u5982\u4e0b\uff1a"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u5de5\u5177"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u4f5c\u7528"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u5907\u6ce8"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"husky"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u6839\u636e\u914d\u7f6e\u751f\u6210\u5bf9\u5e94\u7684git\u94a9\u5b50\u5e76\u6267\u884c\u5bf9\u5e94\u7684\u903b\u8f91"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u65e0")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"lint-staged"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u53ea\u5bf9staged\u7684\u6587\u4ef6\u8fdb\u884c\u5904\u7406"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u80fd\u591f\u907f\u514d\u6bcf\u6b21\u63d0\u4ea4\u90fd\u5bf9\u6574\u4e2a\u9879\u76ee\u7684\u4ee3\u7801\u4ea7\u751f\u5f71\u54cd")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"https://prettier.io/"}),"prettier")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u4ee3\u7801\u68c0\u67e5\u4e4b\u524d\u7684\u4ee3\u7801\u683c\u5f0f\u5316\u5904\u7406"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u63d0\u524d\u89c4\u907feslint\u62a5\u51fa\u7684\u5927\u91cf\u683c\u5f0f\u5316\u95ee\u9898")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"https://eslint.bootcss.com/"}),"eslint")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ts/js\u4ee3\u7801\u68c0\u67e5"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u9519\u8bef\u5e76\u7edf\u4e00\u7f16\u7801\u98ce\u683c")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"https://stylelint.io/user-guide/usage/cli"}),"stylelint")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"scss\u683c\u5f0f\u5316"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u63d0\u9ad8\u6837\u5f0f\u4ee3\u7801\u53ef\u8bfb\u6027")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"commitlint"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"commit\u65e5\u5fd7\u89c4\u8303\u68c0\u67e5"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u89e3\u51b3commit log\u53ef\u8bfb\u6027\u5dee\u7684\u95ee\u9898")))),Object(i.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(i.b)("h2",{id:"prettier"},"Prettier"),Object(i.b)("p",null,"\u5728\u5f53\u524d\u9879\u76ee\u4e2d\u7528\u4e8e ",Object(i.b)("inlineCode",{parentName:"p"},"pre-commit")," \u94a9\u5b50\u7684\u4ee3\u7801\u683c\u5f0f\u5316\u64cd\u4f5c\uff0c\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"eslint")," \u6821\u9a8c\u4e4b\u524d\u3002"),Object(i.b)("p",null,"\u683c\u5f0f\u5316\u89c4\u5219\u914d\u7f6e\u5728\u6839\u76ee\u5f55\u4e0b\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},".prettierrc.js")," \u6587\u4ef6\u4e2d\uff0c\u4e3b\u8981\u662f\u4e3a\u4e86\u907f\u514d\u65e0\u7528\u7684\u683c\u5f0f\u5316\u63d0\u4ea4\u9020\u6210\u4e0d\u5fc5\u8981\u4e14\u96be\u4ee5\u5904\u7406\u7684\u51b2\u7a81\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// .prettierrc.js\nmodule.exports = {\n  semi: false,                 // \u4f7f\u7528\u5206\u53f7 \u9ed8\u8ba4true\n  singleQuote: true,           // \u4f7f\u7528\u5355\u5f15\u53f7 \u9ed8\u8ba4false jsx\u4e2d\u65e0\u6548\n  tabWidth: 2,                 // tab\u7f29\u8fdb\u5927\u5c0f,\u9ed8\u8ba4\u4e3a2\n  useTabs: true,               // \u4f7f\u7528tab\u7f29\u8fdb\uff0c\u9ed8\u8ba4false\n  jsxSingleQuote: true,        // jsx\u4e2d\u4f7f\u7528\u5355\u5f15\u53f7\n  bracketSpacing: true,        // \u5927\u62ec\u53f7\u662f\u5426\u5f3a\u5236\u7a7a\u683c\n  jsxBracketSameLine: false,   // \u591a\u884cjs\u7ed3\u675f\u6807\u7b7e\u662f\u5426\u4e0e\u5c5e\u6027\u540c\u884c\n  printWidth: 80,              // \u5355\u884c\u957f\u5ea6\n  arrowParens: 'avoid',        // \u5fc5\u8981\u7684\u65f6\u5019\u7701\u7565\u7bad\u5934\u51fd\u6570\u53c2\u6570\u7684\u62ec\u53f7\u5305\u88f9(\u5355\u4e2a\u53c2\u6570\u65f6\u7701\u7565)\n}\n")),Object(i.b)("h2",{id:"eslint"},"ESLint"),Object(i.b)("h3",{id:"eslint\u89c4\u5219\u683c\u5f0f"},"eslint\u89c4\u5219\u683c\u5f0f"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'"off" or 0 - \u5173\u95ed\u89c4\u5219'),Object(i.b)("li",{parentName:"ul"},'"warn" or 1 - \u5c06\u89c4\u5219\u89c6\u4e3a\u4e00\u4e2a\u8b66\u544a\uff08\u4e0d\u4f1a\u5f71\u54cd\u9000\u51fa\u7801\uff09'),Object(i.b)("li",{parentName:"ul"},'"error" or 2 - \u5c06\u89c4\u5219\u89c6\u4e3a\u4e00\u4e2a\u9519\u8bef (\u9000\u51fa\u7801\u4e3a1)')),Object(i.b)("p",null,"\u914d\u7f6e\u6587\u4ef6 ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://eslint.bootcss.com/docs/user-guide/configuring"}),"https://eslint.bootcss.com/docs/user-guide/configuring")),Object(i.b)("h3",{id:"\u5177\u4f53\u7684\u89c4\u5219\u5217\u8868"},"\u5177\u4f53\u7684\u89c4\u5219\u5217\u8868"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"rules: {\n        'arrow-parens': ['error', 'as-needed'], // \u7bad\u5934\u51fd\u6570\u5355\u53c2\u6570\u65f6\u4e0d\u4f7f\u7528\u62ec\u53f7 \u591a\u53c2\u6570\u65f6\u4f7f\u7528\u62ec\u53f7\n        'object-curly-newline': [ // \u5f3a\u5236\u5728\u82b1\u62ec\u53f7\u5185\u4f7f\u7528\u4e00\u81f4\u7684\u6362\u884c\u7b26\n            'off',\n            {\n                minProperties: 2, // \u5c5e\u6027\u6570\u91cf\u8d85\u8fc72\u65f6\u5f3a\u5236\u4f7f\u7528\u6362\u884c\u7b26\n            },\n        ],\n        'object-property-newline': [ // \u5f3a\u5236\u5c06\u5bf9\u8c61\u7684\u5c5e\u6027\u653e\u5728\u4e0d\u540c\u7684\u884c\u4e0a\n            'off',\n            {\n                allowAllPropertiesOnSameLine: true, // // \u7981\u6b62\u6240\u6709\u7684\u5c5e\u6027\u90fd\u653e\u5728\u540c\u4e00\u884c\n            },\n        ],\n\n        'object-curly-spacing': [ 'error', 'always' ], // \u8981\u6c42\u5927\u62ec\u53f7\u4e0e\u5185\u5bb9\u95f4\u603b\u662f\u6709\u7a7a\u683c\n        'dot-location': [ 'error', 'property' ], // \u5f3a\u5236\u5728\u70b9\u53f7\u4e4b\u540e\u6362\u884c object-\u8ddf\u968f\u5bf9\u8c61 property-\u8ddf\u968f\u5c5e\u6027\n        curly: 'error', // \u5f3a\u5236\u6240\u6709\u63a7\u5236\u8bed\u53e5\u4f7f\u7528\u4e00\u81f4\u7684\u62ec\u53f7\u98ce\u683c\n        complexity: [ 'off', 16 ], // \u9650\u5236\u5708\u590d\u6742\u5ea6 \u9608\u503c3 \u5982if else if else\u8bed\u53e5\u6700\u591a\u5d4c\u5957\u4e09\u5c42 TODO: \u9700\u8981\u653e\u5f00\n        'react/jsx-indent-props': ['off'], // \u4e0d\u9a8c\u8bc1jsx\u7f29\u8fdb\n        'no-unused-vars': [  // \u4e0d\u5141\u8bb8\u672a\u4f7f\u7528\u7684\u53d8\u91cf\n            'error',\n            {\n                varsIgnorePattern: 'Taro', // Taro\u6846\u67b6\u8981\u6c42\u5728\u4f7f\u7528class\u7ec4\u4ef6\u7684\u65f6\u5019\u5fc5\u987b\u5728\u6587\u4ef6\u4e2d\u58f0\u660eTaro \u4f46\u662f\u4e0d\u662f\u6240\u6709\u6587\u4ef6\u90fd\u4f1a\u663e\u5f0f\u4f7f\u7528\u5230 \u6240\u4ee5\u5ffd\u7565\n            },\n        ],\n        'arrow-spacing': [ // \u8981\u6c42\u7bad\u5934\u51fd\u6570\u7684\u7bad\u5934\u4e4b\u524d\u6216\u4e4b\u540e\u6709\u7a7a\u683c\n            'error',\n            {\n                before: true,\n                after: true,\n            },\n        ],\n        'prefer-arrow-callback': ['error'], // \u8981\u6c42\u4f7f\u7528\u7bad\u5934\u51fd\u6570\u4f5c\u4e3a\u56de\u8c03\n        'react/no-string-ref': ['off'], // \u4e0d\u5141\u8bb8\u5b57\u7b26\u4e32ref\n        'react/jsx-filename-extension': [ // \u8bc6\u522bjsx\u7684\u6587\u4ef6\u6269\u5c55\u540d\n            1,\n            {\n                extensions: ['.js', '.jsx', '.tsx'],\n            },\n        ],\n        '@typescript-eslint/member-delimiter-style': [\n            'error',\n            {\n                multiline: {\n                    delimiter: 'none',\n                    requireLast: false,\n                },\n                singleline: {\n                    delimiter: 'semi',\n                    requireLast: false,\n                },\n            },\n        ],\n        '@typescript-eslint/explicit-function-return-type': ['error'], // function\u548cclass\u7684\u65b9\u6cd5\u5fc5\u987b\u6709\u660e\u786e\u7684\u8fd4\u56de\u503c\n        '@typescript-eslint/no-empty-function': ['warn'], // \u7981\u6b62\u7a7a\u51fd\u6570\u4f53\n        '@typescript-eslint/no-var-requires': ['off'], // \u5728import\u5f15\u7528\u4e4b\u5916\u7981\u6b62require\u5f15\u7528\n        'import/first': ['off'], // import\u5fc5\u987b\u4f4d\u4e8e\u6587\u4ef6\u5934\u90e8\n        '@typescript-eslint/no-explicit-any': ['off'], // \u7981\u6b62any\u58f0\u660e\n        '@typescript-eslint/interface-name-prefix': ['off'], // interface\u540d\u5fc5\u987b\u4ee5\u5927\u5199\u5b57\u6bcdI\u5f00\u5934\n        'import/newline-after-import': ['off'], // import\u4e4b\u540e\u5fc5\u987b\u9694\u884c\n        '@typescript-eslint/camelcase': ['off'], // \u53d8\u91cf\u5fc5\u987b\u4f7f\u7528\u9a7c\u5cf0\u547d\u540d\n        '@typescript-eslint/no-this-alias': ['off'], // \u7981\u6b62\u5c06this\u8d4b\u503c\u7ed9\u5176\u4ed6\u53d8\u91cf\n    }\n")),Object(i.b)("h2",{id:"commitlint"},"CommitLint"),Object(i.b)("h3",{id:"commitlint\u7c7b\u578b\u5217\u8868"},"commitlint\u7c7b\u578b\u5217\u8868"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u610f\u4e49"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u66f4\u591a\u5907\u6ce8"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"test"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u6d4b\u8bd5\u4ee3\u7801"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u5982\u67e5\u627e\u95ee\u9898\u65f6\u5fc5\u987b\u63d0\u4ea4\u8c03\u8bd5\u4ee3\u7801\u5230\u4ee3\u7801\u5e93\u7684\u884c\u4e3a")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"feat"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u65b0\u589e\u5185\u5bb9"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u65b0\u529f\u80fd\u7684\u589e\u52a0")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"fix"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u95ee\u9898\u4fee\u590d"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u95ee\u9898\u4fee\u590d")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"refactor"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u4ee3\u7801\u91cd\u6784"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u4e0d\u6539\u53d8\u5916\u90e8\u884c\u4e3a\u7684\u4ee3\u7801\u91cd\u6784")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"style"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u4ee3\u7801\u6837\u5f0f"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u4e0d\u6539\u53d8\u5b9e\u9645\u4ee3\u7801\u7684\u6837\u5f0f\u884c\u4e3a\uff0c\u5982\u683c\u5f0f\u5316\u64cd\u4f5c")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"docs"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u6587\u6863"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u5982README\u6587\u6863\u7684\u66f4\u65b0")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"conf"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u9879\u76ee\u914d\u7f6e\u76f8\u5173"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u5982\u7f16\u8bd1\u914d\u7f6e\u63d2\u4ef6\u7684\u4fee\u6539")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"revert"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u56de\u9000"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u5982\u53d1\u73b0\u66f4\u65b0\u4ee3\u7801\u4e4b\u540e\u51fa\u73b0\u95ee\u9898\u8fdb\u884c\u7684\u4ee3\u7801\u56de\u9000\u64cd\u4f5c")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"perf"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u4f18\u5316"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u6027\u80fd/\u4f53\u9a8c\u4f18\u5316")))),Object(i.b)("p",null,"\u4f7f\u7528\u793a\u4f8b\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"test: \u8c03\u8bd5\u767e\u5ea6\u7edf\u8ba1\nfeat: \u65b0\u589e\u8425\u9500\u6d3b\u52a8\u9875\u9762\nfix: \u4fee\u590d\u5546\u54c1\u8be6\u60c5\u4e3b\u56fe\u5c55\u793a\u4e0d\u6b63\u786e\u7684\u95ee\u9898\nrefactor: \u4f18\u5316\u8d2d\u7269\u8f66\u904d\u5386\u5904\u7406\u903b\u8f91\nstyle: \u786e\u8ba4\u8ba2\u5355\u9875\u4ee3\u7801\u683c\u5f0f\u5316\ndocs: README\u66f4\u65b0\uff0c\u6dfb\u52a0\u9879\u76ee\u89c4\u8303\u76f8\u5173\u5185\u5bb9\nconf: \u65b0\u589epage\u6587\u4ef6\u5939\u7684\u626b\u63cf\uff0c\u81ea\u52a8\u751f\u6210route.js\nrevert: \u56de\u9000\u8c03\u8bd5\u4ee3\u7801\nperf: \u4f18\u5316\u652f\u4ed8\u6210\u529f\u8f6e\u8be2\u7684loading\u6548\u679c\n")),Object(i.b)("h2",{id:"stylelint"},"stylelint"),Object(i.b)("p",null,"\u8fd9\u91cc\u4e3b\u8981\u505a\u7684\u662f\u5c5e\u6027\u7684\u6392\u5e8f\u7edf\u4e00\u53ca\u683c\u5f0f\u5316\uff0c\u5728\u6267\u884c git commit \u4e4b\u540e\uff0cstylelint \u4f1a\u5bf9 staged\u72b6\u6001\u7684 scss \u6587\u4ef6\u505a\u683c\u5f0f\u5316\u64cd\u4f5c\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n    extends: 'stylelint-config-standard',\n    plugins: ['stylelint-order'],\n    rules: {\n        'order/order': [\n            'declarations',\n            'custom-properties',\n            'dollar-variables',\n            'rules',\n            'at-rules',\n        ],\n        'order/properties-order': [\n            'position',\n            'z-index',\n            'top',\n            'bottom',\n            'left',\n            'right',\n            'float',\n            'clear',\n            'columns',\n            'columns-width',\n            'columns-count',\n            'column-rule',\n            'column-rule-width',\n            'column-rule-style',\n            'column-rule-color',\n            'column-fill',\n            'column-span',\n            'column-gap',\n            'display',\n            'grid',\n            'grid-template-rows',\n            'grid-template-columns',\n            'grid-template-areas',\n            'grid-auto-rows',\n            'grid-auto-columns',\n            'grid-auto-flow',\n            'grid-column-gap',\n            'grid-row-gap',\n            'grid-template',\n            'grid-template-rows',\n            'grid-template-columns',\n            'grid-template-areas',\n            'grid-gap',\n            'grid-row-gap',\n            'grid-column-gap',\n            'grid-area',\n            'grid-row-start',\n            'grid-row-end',\n            'grid-column-start',\n            'grid-column-end',\n            'grid-column',\n            'grid-column-start',\n            'grid-column-end',\n            'grid-row',\n            'grid-row-start',\n            'grid-row-end',\n            'flex',\n            'flex-grow',\n            'flex-shrink',\n            'flex-basis',\n            'flex-flow',\n            'flex-direction',\n            'flex-wrap',\n            'justify-content',\n            'align-content',\n            'align-items',\n            'align-self',\n            'order',\n            'table-layout',\n            'empty-cells',\n            'caption-side',\n            'border-collapse',\n            'border-spacing',\n            'list-style',\n            'list-style-type',\n            'list-style-position',\n            'list-style-image',\n            'ruby-align',\n            'ruby-merge',\n            'ruby-position',\n            'box-sizing',\n            'width',\n            'min-width',\n            'max-width',\n            'height',\n            'min-height',\n            'max-height',\n            'padding',\n            'padding-top',\n            'padding-right',\n            'padding-bottom',\n            'padding-left',\n            'margin',\n            'margin-top',\n            'margin-right',\n            'margin-bottom',\n            'margin-left',\n            'border',\n            'border-width',\n            'border-top-width',\n            'border-right-width',\n            'border-bottom-width',\n            'border-left-width',\n            'border-style',\n            'border-top-style',\n            'border-right-style',\n            'border-bottom-style',\n            'border-left-style',\n            'border-color',\n            'border-top-color',\n            'border-right-color',\n            'border-bottom-color',\n            'border-left-color',\n            'border-image',\n            'border-image-source',\n            'border-image-slice',\n            'border-image-width',\n            'border-image-outset',\n            'border-image-repeat',\n            'border-top',\n            'border-top-width',\n            'border-top-style',\n            'border-top-color',\n            'border-top',\n            'border-right-width',\n            'border-right-style',\n            'border-right-color',\n            'border-bottom',\n            'border-bottom-width',\n            'border-bottom-style',\n            'border-bottom-color',\n            'border-left',\n            'border-left-width',\n            'border-left-style',\n            'border-left-color',\n            'border-radius',\n            'border-top-right-radius',\n            'border-bottom-right-radius',\n            'border-bottom-left-radius',\n            'border-top-left-radius',\n            'outline',\n            'outline-width',\n            'outline-color',\n            'outline-style',\n            'outline-offset',\n            'overflow',\n            'overflow-x',\n            'overflow-y',\n            'resize',\n            'visibility',\n            'font',\n            'font-style',\n            'font-variant',\n            'font-weight',\n            'font-stretch',\n            'font-size',\n            'font-family',\n            'font-synthesis',\n            'font-size-adjust',\n            'font-kerning',\n            'line-height',\n            'text-align',\n            'text-align-last',\n            'vertical-align',\n            'text-overflow',\n            'text-justify',\n            'text-transform',\n            'text-indent',\n            'text-emphasis',\n            'text-emphasis-style',\n            'text-emphasis-color',\n            'text-emphasis-position',\n            'text-decoration',\n            'text-decoration-color',\n            'text-decoration-style',\n            'text-decoration-line',\n            'text-underline-position',\n            'text-shadow',\n            'white-space',\n            'overflow-wrap',\n            'word-wrap',\n            'word-break',\n            'line-break',\n            'hyphens',\n            'letter-spacing',\n            'word-spacing',\n            'quotes',\n            'tab-size',\n            'orphans',\n            'writing-mode',\n            'text-combine-upright',\n            'unicode-bidi',\n            'text-orientation',\n            'direction',\n            'text-rendering',\n            'font-feature-settings',\n            'font-language-override',\n            'image-rendering',\n            'image-orientation',\n            'image-resolution',\n            'shape-image-threshold',\n            'shape-outside',\n            'shape-margin',\n            'color',\n            'background',\n            'background-image',\n            'background-position',\n            'background-size',\n            'background-repeat',\n            'background-origin',\n            'background-clip',\n            'background-attachment',\n            'background-color',\n            'background-blend-mode',\n            'isolation',\n            'clip-path',\n            'mask',\n            'mask-image',\n            'mask-mode',\n            'mask-position',\n            'mask-size',\n            'mask-repeat',\n            'mask-origin',\n            'mask-clip',\n            'mask-composite',\n            'mask-type',\n            'filter',\n            'box-shadow',\n            'opacity',\n            'transform-style',\n            'transform',\n            'transform-box',\n            'transform-origin',\n            'perspective',\n            'perspective-origin',\n            'backface-visibility',\n            'transition',\n            'transition-property',\n            'transition-duration',\n            'transition-timing-function',\n            'transition-delay',\n            'animation',\n            'animation-name',\n            'animation-duration',\n            'animation-timing-function',\n            'animation-delay',\n            'animation-iteration-count',\n            'animation-direction',\n            'animation-fill-mode',\n            'animation-play-state',\n            'scroll-behavior',\n            'scroll-snap-type',\n            'scroll-snap-destination',\n            'scroll-snap-coordinate',\n            'cursor',\n            'touch-action',\n            'caret-color',\n            'ime-mode',\n            'object-fit',\n            'object-position',\n            'content',\n            'counter-reset',\n            'counter-increment',\n            'will-change',\n            'pointer-events',\n            'all',\n            'page-break-before',\n            'page-break-after',\n            'page-break-inside',\n            'widows',\n        ],\n        'no-empty-source': null,\n        'property-no-vendor-prefix': [\n            true,\n            {ignoreProperties: ['background-clip']},\n        ],\n        'number-leading-zero': 'never',\n        'number-no-trailing-zeros': true,\n        'length-zero-no-unit': true,\n        'value-list-comma-space-after': 'always',\n        'declaration-colon-space-after': 'always',\n        'value-list-max-empty-lines': 0,\n        'shorthand-property-no-redundant-values': true,\n        'declaration-block-no-duplicate-properties': true,\n        'declaration-block-no-redundant-longhand-properties': true,\n        'declaration-block-semicolon-newline-after': 'always',\n        'block-closing-brace-newline-after': 'always',\n        'media-feature-colon-space-after': 'always',\n        'media-feature-range-operator-space-after': 'always',\n        'at-rule-name-space-after': 'always',\n        indentation: 2,\n        'no-eol-whitespace': true,\n        'string-no-newline': null,\n    },\n}\n\n")),Object(i.b)("h2",{id:"\u9e23\u8c22"},"\u9e23\u8c22"),Object(i.b)("p",null,"\u611f\u8c22\u65e2\u662f\u57fa\u53cb\u4e5f\u662f\u8001\u5927\u7684 ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://1415801689xing.github.io/starxingblog/"}),"starxing")," \u5c0f\u59d0\u59d0\uff0c\u8ba9\u6211\u7b2c\u4e00\u6b21\u6709\u673a\u4f1a\u6765\u6574\u4e00\u4e2a\u5927\u9879\u76ee\u7684\u6846\u67b6\uff0c\u54c8\u54c8\u54c8\u3002"))}s.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,u=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return n?a.a.createElement(u,l(l({ref:t},b),{},{components:n})):a.a.createElement(u,l({ref:t},b))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);