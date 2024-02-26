"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/to_do/page",{

/***/ "(app-pages-browser)/./src/app/to_do/page.jsx":
/*!********************************!*\
  !*** ./src/app/to_do/page.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var aws_amplify_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! aws-amplify/api */ \"(app-pages-browser)/./node_modules/@aws-amplify/api/dist/esm/API.mjs\");\n/* harmony import */ var _graphql_mutations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/graphql/mutations */ \"(app-pages-browser)/./src/graphql/mutations.js\");\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/graphql/queries */ \"(app-pages-browser)/./src/graphql/queries.js\");\n/* harmony import */ var _TodoValidationSchema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TodoValidationSchema */ \"(app-pages-browser)/./src/app/to_do/TodoValidationSchema.jsx\");\n/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hookform/resolvers/yup */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/yup/dist/yup.mjs\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/TextField */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/Checkbox */ \"(app-pages-browser)/./node_modules/@mui/material/Checkbox/Checkbox.js\");\n/* harmony import */ var _app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/app/to_do/todo.module.css */ \"(app-pages-browser)/./src/app/to_do/todo.module.css\");\n/* harmony import */ var _app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! aws-amplify */ \"(app-pages-browser)/./node_modules/aws-amplify/dist/esm/initSingleton.mjs\");\n/* harmony import */ var _aws_exports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/aws-exports */ \"(app-pages-browser)/./src/aws-exports.js\");\n/* harmony import */ var _aws_amplify_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @aws-amplify/ui-react */ \"(app-pages-browser)/./node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/Authenticator.mjs\");\n/* harmony import */ var _aws_amplify_ui_react_styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @aws-amplify/ui-react/styles.css */ \"(app-pages-browser)/./node_modules/@aws-amplify/ui-react/dist/styles.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\naws_amplify__WEBPACK_IMPORTED_MODULE_8__.DefaultAmplify.configure(_aws_exports__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\nconst client = (0,aws_amplify_api__WEBPACK_IMPORTED_MODULE_9__.generateClient)();\nconst App = ()=>{\n    _s();\n    const { register, handleSubmit, reset, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_10__.useForm)({\n        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5__.yupResolver)(_TodoValidationSchema__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\n    });\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchTodos();\n    }, []);\n    async function fetchTodos() {\n        try {\n            const todoData = await client.graphql({\n                query: _graphql_queries__WEBPACK_IMPORTED_MODULE_3__.listTodos\n            });\n            const todos = todoData.data.listTodos.items;\n            setTodos(todos);\n        } catch (err) {\n            console.log(\"error fetching todos\");\n        }\n    }\n    async function addTodo(data) {\n        try {\n            if (!data.name || !data.description) return;\n            const todo = {\n                ...data\n            };\n            const response = await client.graphql({\n                query: _graphql_mutations__WEBPACK_IMPORTED_MODULE_2__.createTodo,\n                variables: {\n                    input: todo\n                }\n            });\n            const newTodo = response.data.createTodo; //追加\n            setTodos([\n                ...todos,\n                newTodo\n            ]); //追加\n            reset();\n        } catch (err) {\n            console.log(\"error creating todo:\", err);\n        }\n    }\n    const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const handleCheck = (id)=>{\n        setChecked((prev)=>({\n                ...prev,\n                [id]: !prev[id]\n            }));\n    };\n    const completeTodo = ()=>{\n        setTodos(todos.map((todo)=>({\n                ...todo,\n                completed: checked[todo.id] ? true : todo.completed\n            })));\n        setChecked({});\n    };\n    const deleteTodo = async ()=>{\n        const idsToDelete = todos.filter((todo)=>checked[todo.id]).map((todo)=>todo.id);\n        await Promise.all(idsToDelete.map((id)=>client.graphql({\n                query: _graphql_mutations__WEBPACK_IMPORTED_MODULE_2__.deleteTodo,\n                variables: {\n                    input: {\n                        id\n                    }\n                }\n            })));\n        setTodos(todos.filter((todo)=>!checked[todo.id]));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_aws_amplify_ui_react__WEBPACK_IMPORTED_MODULE_11__.Authenticator, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Todo List\"\n                }, void 0, false, {\n                    fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/page.jsx\",\n                    lineNumber: 96,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit(addTodo),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            ...register(\"name\"),\n                            error: !!errors.name,\n                            label: \"name\",\n                            variant: \"standard\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/page.jsx\",\n                            lineNumber: 98,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            ...register(\"description\"),\n                            error: !!errors.description,\n                            label: \"description\",\n                            variant: \"standard\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/page.jsx\",\n                            lineNumber: 104,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                            variant: \"contained\",\n                            type: \"submit\",\n                            children: \"追加\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/page.jsx\",\n                            lineNumber: 110,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/page.jsx\",\n                    lineNumber: 97,\n                    columnNumber: 7\n                }, undefined),\n                todos.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_14___default().todoItem),\n                        style: {\n                            textDecoration: todo.completed ? \"line-through\" : \"none\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n                                checked: checked[todo.id] || false,\n                                onChange: ()=>handleCheck(todo.id),\n                                className: (_app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_14___default().checkbox)\n                            }, void 0, false, {\n                                fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/page.jsx\",\n                                lineNumber: 116,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_14___default().name),\n                                children: todo.name\n                            }, void 0, false, {\n                                fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/page.jsx\",\n                                lineNumber: 121,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_14___default().description),\n                                children: todo.description\n                            }, void 0, false, {\n                                fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/page.jsx\",\n                                lineNumber: 122,\n                                columnNumber: 5\n                            }, undefined)\n                        ]\n                    }, todo.id ? todo.id : index, true, {\n                        fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/page.jsx\",\n                        lineNumber: 115,\n                        columnNumber: 3\n                    }, undefined)),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                    variant: \"outlined\",\n                    onClick: completeTodo,\n                    children: \"完了\"\n                }, void 0, false, {\n                    fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/page.jsx\",\n                    lineNumber: 125,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                    className: (_app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_14___default().dele),\n                    variant: \"outlined\",\n                    onClick: deleteTodo,\n                    children: \"削除\"\n                }, void 0, false, {\n                    fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/page.jsx\",\n                    lineNumber: 126,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/page.jsx\",\n            lineNumber: 95,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/page.jsx\",\n        lineNumber: 94,\n        columnNumber: 2\n    }, undefined);\n};\n_s(App, \"bbwG1wRPSCcT+Cp6ipmhJOq7PxM=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_10__.useForm\n    ];\n});\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdG9fZG8vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTRDO0FBQ0Y7QUFDTztBQUNBO0FBQ0g7QUFDWTtBQUNKO0FBQ047QUFDTjtBQUNJO0FBQ0c7QUFDWDtBQUNIO0FBQ29DO0FBQzdDO0FBQzRCO0FBQ1o7QUFFMUNZLHVEQUFPQSxDQUFDTSxTQUFTLENBQUNMLG9EQUFNQTtBQUN4QixNQUFNTSxTQUFTaEIsK0RBQWNBO0FBRTdCLE1BQU1pQixNQUFNOztJQUNWLE1BQU0sRUFDSkMsUUFBUSxFQUNSQyxZQUFZLEVBQ1pDLEtBQUssRUFDTEMsV0FBVyxFQUFFQyxNQUFNLEVBQUUsRUFDdEIsR0FBR3ZCLHlEQUFPQSxDQUFDO1FBQ1Z3QixVQUFVbkIsb0VBQVdBLENBQUNELDZEQUFvQkE7SUFDNUM7SUFDQSxNQUFNLENBQUNxQixPQUFPQyxTQUFTLEdBQUczQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXJDRCxnREFBU0EsQ0FBQztRQUNSNkI7SUFDRixHQUFHLEVBQUU7SUFFTCxlQUFlQTtRQUNiLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1YLE9BQU9ZLE9BQU8sQ0FBQztnQkFBRUMsT0FBTzNCLHVEQUFTQTtZQUFDO1lBQ3pELE1BQU1zQixRQUFRRyxTQUFTRyxJQUFJLENBQUM1QixTQUFTLENBQUM2QixLQUFLO1lBQzNDTixTQUFTRDtRQUNYLEVBQUUsT0FBT1EsS0FBSztZQUNaQyxRQUFRQyxHQUFHLENBQUM7UUFDZDtJQUNGO0lBRUEsZUFBZUMsUUFBUUwsSUFBSTtRQUN6QixJQUFJO1lBQ0YsSUFBSSxDQUFDQSxLQUFLTSxJQUFJLElBQUksQ0FBQ04sS0FBS08sV0FBVyxFQUFFO1lBQ3JDLE1BQU1DLE9BQU87Z0JBQUUsR0FBR1IsSUFBSTtZQUFDO1lBQzFCLE1BQU1TLFdBQVcsTUFBTXZCLE9BQU9ZLE9BQU8sQ0FBQztnQkFDdkNDLE9BQU81QiwwREFBVUE7Z0JBQ2pC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QUFDMEQsV0FBV3hELHlFQUFXO29CQUFFcUQsU0FBUTtvQkFBV1MsU0FBUzNEOzhCQUFZOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk5RTtHQTFHTU07O1FBTUFsQixxREFBT0E7OztLQU5Qa0I7QUE0R04sK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC90b19kby9wYWdlLmpzeD9mOTY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVDbGllbnQgfSBmcm9tIFwiYXdzLWFtcGxpZnkvYXBpXCI7XG5pbXBvcnQgeyBjcmVhdGVUb2RvIH0gZnJvbSBcIkAvZ3JhcGhxbC9tdXRhdGlvbnNcIjtcbmltcG9ydCB7IGxpc3RUb2RvcyB9IGZyb20gXCJAL2dyYXBocWwvcXVlcmllc1wiO1xuaW1wb3J0IFRvZG9WYWxpZGF0aW9uU2NoZW1hIGZyb20gXCIuL1RvZG9WYWxpZGF0aW9uU2NoZW1hXCI7XG5pbXBvcnQgeyB5dXBSZXNvbHZlciB9IGZyb20gXCJAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cFwiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9UZXh0RmllbGRcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2hlY2tib3hcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvYXBwL3RvX2RvL3RvZG8ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgQW1wbGlmeSB9IGZyb20gJ2F3cy1hbXBsaWZ5JztcbmltcG9ydCBjb25maWcgZnJvbSAnQC9hd3MtZXhwb3J0cyc7XG5pbXBvcnQgeyBkZWxldGVUb2RvIGFzIGRlbGV0ZVRvZG9NdXRhdGlvbiB9IGZyb20gXCJAL2dyYXBocWwvbXV0YXRpb25zXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRvciB9IGZyb20gJ0Bhd3MtYW1wbGlmeS91aS1yZWFjdCc7XG5pbXBvcnQgJ0Bhd3MtYW1wbGlmeS91aS1yZWFjdC9zdHlsZXMuY3NzJztcblxuQW1wbGlmeS5jb25maWd1cmUoY29uZmlnKTtcbmNvbnN0IGNsaWVudCA9IGdlbmVyYXRlQ2xpZW50KCk7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIHJlZ2lzdGVyLFxuICAgIGhhbmRsZVN1Ym1pdCxcbiAgICByZXNldCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gIH0gPSB1c2VGb3JtKHtcbiAgICByZXNvbHZlcjogeXVwUmVzb2x2ZXIoVG9kb1ZhbGlkYXRpb25TY2hlbWEpLFxuICB9KTtcbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFRvZG9zKCk7XG4gIH0sIFtdKTtcbiAgXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoVG9kb3MoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRvZG9EYXRhID0gYXdhaXQgY2xpZW50LmdyYXBocWwoeyBxdWVyeTogbGlzdFRvZG9zIH0pO1xuICAgICAgY29uc3QgdG9kb3MgPSB0b2RvRGF0YS5kYXRhLmxpc3RUb2Rvcy5pdGVtcztcbiAgICAgIHNldFRvZG9zKHRvZG9zKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgZmV0Y2hpbmcgdG9kb3NcIik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gYWRkVG9kbyhkYXRhKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghZGF0YS5uYW1lIHx8ICFkYXRhLmRlc2NyaXB0aW9uKSByZXR1cm47XG4gICAgICBjb25zdCB0b2RvID0geyAuLi5kYXRhIH07XG5cdCAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjbGllbnQuZ3JhcGhxbCh7XG5cdFx0cXVlcnk6IGNyZWF0ZVRvZG8sXG5cdFx0dmFyaWFibGVzOiB7XG5cdFx0ICBpbnB1dDogdG9kbyxcblx0XHR9LFxuXHQgIH0pO1xuXHQgIGNvbnN0IG5ld1RvZG8gPSByZXNwb25zZS5kYXRhLmNyZWF0ZVRvZG87Ly/ov73liqBcblx0ICBzZXRUb2RvcyhbLi4udG9kb3MsIG5ld1RvZG9dKTsvL+i/veWKoFxuXHQgIHJlc2V0KCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yIGNyZWF0aW5nIHRvZG86XCIsIGVycik7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUoe30pO1xuXG4gIGNvbnN0IGhhbmRsZUNoZWNrID0gKGlkKSA9PiB7XG4gICAgc2V0Q2hlY2tlZChwcmV2ID0+ICh7IC4uLnByZXYsIFtpZF06ICFwcmV2W2lkXSB9KSk7XG4gIH07XG5cbiAgY29uc3QgY29tcGxldGVUb2RvID0gKCkgPT4ge1xuICAgIHNldFRvZG9zKHRvZG9zLm1hcCh0b2RvID0+ICh7XG4gICAgICAuLi50b2RvLFxuICAgICAgY29tcGxldGVkOiBjaGVja2VkW3RvZG8uaWRdID8gdHJ1ZSA6IHRvZG8uY29tcGxldGVkXG4gICAgfSkpKTtcblx0c2V0Q2hlY2tlZCh7fSk7XG4gIH07XG5cbmNvbnN0IGRlbGV0ZVRvZG8gPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IGlkc1RvRGVsZXRlID0gdG9kb3MuZmlsdGVyKHRvZG8gPT4gY2hlY2tlZFt0b2RvLmlkXSkubWFwKHRvZG8gPT4gdG9kby5pZCk7XG5cdGF3YWl0IFByb21pc2UuYWxsKGlkc1RvRGVsZXRlLm1hcChpZCA9PlxuXHQgIGNsaWVudC5ncmFwaHFsKHtcblx0XHRxdWVyeTogZGVsZXRlVG9kb011dGF0aW9uLFxuXHRcdHZhcmlhYmxlczogeyBpbnB1dDogeyBpZCB9IH0sXG5cdCAgfSlcblx0KSk7XG5cblx0c2V0VG9kb3ModG9kb3MuZmlsdGVyKHRvZG8gPT4gIWNoZWNrZWRbdG9kby5pZF0pKTtcbiAgfTtcblxuICByZXR1cm4gKFxuXHQ8QXV0aGVudGljYXRvcj5cbiAgICA8ZGl2PlxuICAgICAgPGgyPlRvZG8gTGlzdDwvaDI+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KGFkZFRvZG8pfT5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIHsuLi5yZWdpc3RlcihcIm5hbWVcIil9XG4gICAgICAgICAgZXJyb3I9eyEhZXJyb3JzLm5hbWV9XG4gICAgICAgICAgbGFiZWw9XCJuYW1lXCJcbiAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxuICAgICAgICAvPlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgey4uLnJlZ2lzdGVyKFwiZGVzY3JpcHRpb25cIil9XG4gICAgICAgICAgZXJyb3I9eyEhZXJyb3JzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIGxhYmVsPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICDov73liqBcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Zvcm0+XG5cdHt0b2Rvcy5tYXAoKHRvZG8sIGluZGV4KSA9PiAoXG5cdFx0PGRpdiBrZXk9e3RvZG8uaWQgPyB0b2RvLmlkIDogaW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLnRvZG9JdGVtfSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogdG9kby5jb21wbGV0ZWQgPyAnbGluZS10aHJvdWdoJyA6ICdub25lJyB9fT5cblx0XHQgIDxDaGVja2JveFxuXHRcdFx0Y2hlY2tlZD17Y2hlY2tlZFt0b2RvLmlkXSB8fCBmYWxzZX1cblx0XHRcdG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDaGVjayh0b2RvLmlkKX1cblx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrYm94fVxuXHRcdCAgLz5cblx0XHQgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+e3RvZG8ubmFtZX08L2Rpdj5cblx0XHQgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259Pnt0b2RvLmRlc2NyaXB0aW9ufTwvZGl2PlxuXHRcdDwvZGl2PlxuXHQgICkpfVxuICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXtjb21wbGV0ZVRvZG99PuWujOS6hjwvQnV0dG9uPlxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5kZWxlfSB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXtkZWxldGVUb2RvfT7liYrpmaQ8L0J1dHRvbj5cbiAgICA8L2Rpdj5cblx0PC9BdXRoZW50aWNhdG9yPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRm9ybSIsImdlbmVyYXRlQ2xpZW50IiwiY3JlYXRlVG9kbyIsImxpc3RUb2RvcyIsIlRvZG9WYWxpZGF0aW9uU2NoZW1hIiwieXVwUmVzb2x2ZXIiLCJUZXh0RmllbGQiLCJCdXR0b24iLCJDaGVja2JveCIsInN0eWxlcyIsIkFtcGxpZnkiLCJjb25maWciLCJkZWxldGVUb2RvIiwiZGVsZXRlVG9kb011dGF0aW9uIiwiUmVhY3QiLCJBdXRoZW50aWNhdG9yIiwiY29uZmlndXJlIiwiY2xpZW50IiwiQXBwIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJyZXNldCIsImZvcm1TdGF0ZSIsImVycm9ycyIsInJlc29sdmVyIiwidG9kb3MiLCJzZXRUb2RvcyIsImZldGNoVG9kb3MiLCJ0b2RvRGF0YSIsImdyYXBocWwiLCJxdWVyeSIsImRhdGEiLCJpdGVtcyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJhZGRUb2RvIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidG9kbyIsInJlc3BvbnNlIiwidmFyaWFibGVzIiwiaW5wdXQiLCJuZXdUb2RvIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJoYW5kbGVDaGVjayIsImlkIiwicHJldiIsImNvbXBsZXRlVG9kbyIsIm1hcCIsImNvbXBsZXRlZCIsImlkc1RvRGVsZXRlIiwiZmlsdGVyIiwiUHJvbWlzZSIsImFsbCIsImRpdiIsImgyIiwiZm9ybSIsIm9uU3VibWl0IiwiZXJyb3IiLCJsYWJlbCIsInZhcmlhbnQiLCJ0eXBlIiwiaW5kZXgiLCJjbGFzc05hbWUiLCJ0b2RvSXRlbSIsInN0eWxlIiwidGV4dERlY29yYXRpb24iLCJvbkNoYW5nZSIsImNoZWNrYm94Iiwib25DbGljayIsImRlbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/to_do/page.jsx\n"));

/***/ })

});