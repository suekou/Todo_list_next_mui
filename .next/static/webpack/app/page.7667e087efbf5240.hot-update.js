"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/to_do/TodoPage.jsx":
/*!************************************!*\
  !*** ./src/app/to_do/TodoPage.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var aws_amplify_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! aws-amplify/api */ \"(app-pages-browser)/./node_modules/@aws-amplify/api/dist/esm/API.mjs\");\n/* harmony import */ var _graphql_mutations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/graphql/mutations */ \"(app-pages-browser)/./src/graphql/mutations.js\");\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/graphql/queries */ \"(app-pages-browser)/./src/graphql/queries.js\");\n/* harmony import */ var _TodoValidationSchema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TodoValidationSchema */ \"(app-pages-browser)/./src/app/to_do/TodoValidationSchema.jsx\");\n/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hookform/resolvers/yup */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/yup/dist/yup.mjs\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/TextField */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Checkbox */ \"(app-pages-browser)/./node_modules/@mui/material/Checkbox/Checkbox.js\");\n/* harmony import */ var _app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/app/to_do/todo.module.css */ \"(app-pages-browser)/./src/app/to_do/todo.module.css\");\n/* harmony import */ var _app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aws-amplify */ \"(app-pages-browser)/./node_modules/aws-amplify/dist/esm/initSingleton.mjs\");\n/* harmony import */ var _aws_exports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/aws-exports */ \"(app-pages-browser)/./src/aws-exports.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\naws_amplify__WEBPACK_IMPORTED_MODULE_7__.DefaultAmplify.configure(_aws_exports__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\nconst client = (0,aws_amplify_api__WEBPACK_IMPORTED_MODULE_8__.generateClient)();\nconst TodoPage = (param)=>{\n    let { signOut } = param;\n    _s();\n    const { register, handleSubmit, reset, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)({\n        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5__.yupResolver)(_TodoValidationSchema__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\n    });\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchTodos();\n    }, []);\n    async function fetchTodos() {\n        try {\n            const todoData = await client.graphql({\n                query: _graphql_queries__WEBPACK_IMPORTED_MODULE_3__.listTodos\n            });\n            const todos = todoData.data.listTodos.items;\n            setTodos(todos);\n        } catch (err) {\n            console.log(\"error fetching todos\");\n        }\n    }\n    async function addTodo(data) {\n        try {\n            if (!data.name || !data.description) return;\n            const todo = {\n                ...data\n            };\n            const response = await client.graphql({\n                query: _graphql_mutations__WEBPACK_IMPORTED_MODULE_2__.createTodo,\n                variables: {\n                    input: todo\n                }\n            });\n            const newTodo = response.data.createTodo; //追加\n            setTodos([\n                ...todos,\n                newTodo\n            ]); //追加\n            reset();\n        } catch (err) {\n            console.log(\"error creating todo:\", err);\n        }\n    }\n    const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const handleCheck = (id)=>{\n        setChecked((prev)=>({\n                ...prev,\n                [id]: !prev[id]\n            }));\n    };\n    const completeTodo = ()=>{\n        setTodos(todos.map((todo)=>({\n                ...todo,\n                completed: checked[todo.id] ? true : todo.completed\n            })));\n        setChecked({});\n    };\n    const deleteTodo = async ()=>{\n        const idsToDelete = todos.filter((todo)=>checked[todo.id]).map((todo)=>todo.id);\n        await Promise.all(idsToDelete.map((id)=>client.graphql({\n                query: _graphql_mutations__WEBPACK_IMPORTED_MODULE_2__.deleteTodo,\n                variables: {\n                    input: {\n                        id\n                    }\n                }\n            })));\n        setTodos(todos.filter((todo)=>!checked[todo.id]));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Todo List\"\n            }, void 0, false, {\n                fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: signOut,\n                children: \"Sign out\"\n            }, void 0, false, {\n                fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(addTodo),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        ...register(\"name\"),\n                        error: !!errors.name,\n                        label: \"name\",\n                        variant: \"standard\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        ...register(\"description\"),\n                        error: !!errors.description,\n                        label: \"description\",\n                        variant: \"standard\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        variant: \"contained\",\n                        type: \"submit\",\n                        children: \"追加\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, undefined),\n            todos.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_12___default().todoItem),\n                    style: {\n                        textDecoration: todo.completed ? \"line-through\" : \"none\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                            checked: checked[todo.id] || false,\n                            onChange: ()=>handleCheck(todo.id),\n                            className: (_app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_12___default().checkbox)\n                        }, void 0, false, {\n                            fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                            lineNumber: 121,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_12___default().name),\n                            children: todo.name\n                        }, void 0, false, {\n                            fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                            lineNumber: 126,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_12___default().description),\n                            children: todo.description\n                        }, void 0, false, {\n                            fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                            lineNumber: 127,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, todo.id ? todo.id : index, true, {\n                    fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, undefined)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                variant: \"outlined\",\n                onClick: completeTodo,\n                children: \"完了\"\n            }, void 0, false, {\n                fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                className: (_app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_12___default().deleteButton),\n                variant: \"outlined\",\n                onClick: deleteTodo,\n                children: \"削除\"\n            }, void 0, false, {\n                fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                lineNumber: 133,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TodoPage, \"bbwG1wRPSCcT+Cp6ipmhJOq7PxM=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm\n    ];\n});\n_c = TodoPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoPage);\nvar _c;\n$RefreshReg$(_c, \"TodoPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdG9fZG8vVG9kb1BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDRjtBQUNPO0FBQ0E7QUFDSDtBQUNZO0FBQ0o7QUFDTjtBQUNOO0FBQ0k7QUFDRztBQUNYO0FBQ0g7QUFDb0M7QUFFdkVZLHVEQUFPQSxDQUFDSSxTQUFTLENBQUNILG9EQUFNQTtBQUN4QixNQUFNSSxTQUFTZCwrREFBY0E7QUFFN0IsTUFBTWUsV0FBVztRQUFDLEVBQUVDLE9BQU8sRUFBRTs7SUFDM0IsTUFBTSxFQUNKQyxRQUFRLEVBQ1JDLFlBQVksRUFDWkMsS0FBSyxFQUNMQyxXQUFXLEVBQUVDLE1BQU0sRUFBRSxFQUN0QixHQUFHdEIsd0RBQU9BLENBQUM7UUFDVnVCLFVBQVVsQixvRUFBV0EsQ0FBQ0QsNkRBQW9CQTtJQUM1QztJQUNBLE1BQU0sQ0FBQ29CLE9BQU9DLFNBQVMsR0FBRzFCLCtDQUFRQSxDQUFDLEVBQUU7SUFFckNELGdEQUFTQSxDQUFDO1FBQ1I0QjtJQUNGLEdBQUcsRUFBRTtJQUVMLGVBQWVBO1FBQ2IsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTVosT0FBT2EsT0FBTyxDQUFDO2dCQUFFQyxPQUFPMUIsdURBQVNBO1lBQUM7WUFDekQsTUFBTXFCLFFBQVFHLFNBQVNHLElBQUksQ0FBQzNCLFNBQVMsQ0FBQzRCLEtBQUs7WUFDM0NOLFNBQVNEO1FBQ1gsRUFBRSxPQUFPUSxLQUFLO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQztRQUNkO0lBQ0Y7SUFFQSxlQUFlQyxRQUFRTCxJQUFJO1FBQ3pCLElBQUk7WUFDRixJQUFJLENBQUNBLEtBQUtNLElBQUksSUFBSSxDQUFDTixLQUFLTyxXQUFXLEVBQUU7WUFDckMsTUFBTUMsT0FBTztnQkFBRSxHQUFHUixJQUFJO1lBQUM7WUFDdkIsTUFBTVMsV0FBVyxNQUFNeEIsT0FBT2EsT0FBTyxDQUFDO2dCQUNwQ0MsT0FBTzNCLDBEQUFVQTtnQkFDakJzQyxXQUFXO29CQUNUQyxPQUFPSDtnQkFDVDtZQUNGO1lBQ0EsTUFBTUksVUFBVUgsU0FBU1QsSUFBSSxDQUFDNUIsVUFBVSxFQUFFLElBQUk7WUFDOUN1QixTQUFTO21CQUFJRDtnQkFBT2tCO2FBQVEsR0FBRyxJQUFJO1lBQ25DdEI7UUFDRixFQUFFLE9BQU9ZLEtBQUs7WUFDWkMsUUFBUUMsR0FBRyxDQUFDLHdCQUF3QkY7UUFDdEM7SUFDRjtJQUVBLE1BQU0sQ0FBQ1csU0FBU0MsV0FBVyxHQUFHN0MsK0NBQVFBLENBQUMsQ0FBQztJQUV4QyxNQUFNOEMsY0FBYyxDQUFDQztRQUNuQkYsV0FBVyxDQUFDRyxPQUFVO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUUsQ0FBQ0QsR0FBRyxFQUFFLENBQUNDLElBQUksQ0FBQ0QsR0FBRztZQUFDO0lBQ25EO0lBRUEsTUFBTUUsZUFBZTtRQUNuQnZCLFNBQ0VELE1BQU15QixHQUFHLENBQUMsQ0FBQ1gsT0FBVTtnQkFDbkIsR0FBR0EsSUFBSTtnQkFDUFksV0FBV1AsT0FBTyxDQUFDTCxLQUFLUSxFQUFFLENBQUMsR0FBRyxPQUFPUixLQUFLWSxTQUFTO1lBQ3JEO1FBRUZOLFdBQVcsQ0FBQztJQUNkO0lBRUEsTUFBTWhDLGFBQWE7UUFDakIsTUFBTXVDLGNBQWMzQixNQUNqQjRCLE1BQU0sQ0FBQyxDQUFDZCxPQUFTSyxPQUFPLENBQUNMLEtBQUtRLEVBQUUsQ0FBQyxFQUNqQ0csR0FBRyxDQUFDLENBQUNYLE9BQVNBLEtBQUtRLEVBQUU7UUFDeEIsTUFBTU8sUUFBUUMsR0FBRyxDQUNmSCxZQUFZRixHQUFHLENBQUMsQ0FBQ0gsS0FDZi9CLE9BQU9hLE9BQU8sQ0FBQztnQkFDYkMsT0FBT2hCLDBEQUFrQkE7Z0JBQ3pCMkIsV0FBVztvQkFBRUMsT0FBTzt3QkFBRUs7b0JBQUc7Z0JBQUU7WUFDN0I7UUFJSnJCLFNBQVNELE1BQU00QixNQUFNLENBQUMsQ0FBQ2QsT0FBUyxDQUFDSyxPQUFPLENBQUNMLEtBQUtRLEVBQUUsQ0FBQztJQUNuRDtJQUVBLHFCQUNFLDhEQUFDUzs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFPQyxTQUFTekM7MEJBQVM7Ozs7OzswQkFDMUIsOERBQUMwQztnQkFBS0MsVUFBVXpDLGFBQWFnQjs7a0NBQzNCLDhEQUFDN0IsZ0VBQVNBO3dCQUNQLEdBQUdZLFNBQVMsT0FBTzt3QkFDcEIyQyxPQUFPLENBQUMsQ0FBQ3ZDLE9BQU9jLElBQUk7d0JBQ3BCMEIsT0FBTTt3QkFDTkMsU0FBUTs7Ozs7O2tDQUVWLDhEQUFDekQsZ0VBQVNBO3dCQUNQLEdBQUdZLFNBQVMsY0FBYzt3QkFDM0IyQyxPQUFPLENBQUMsQ0FBQ3ZDLE9BQU9lLFdBQVc7d0JBQzNCeUIsT0FBTTt3QkFDTkMsU0FBUTs7Ozs7O2tDQUVWLDhEQUFDeEQsNkRBQU1BO3dCQUFDd0QsU0FBUTt3QkFBWUMsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7O1lBSTNDeEMsTUFBTXlCLEdBQUcsQ0FBQyxDQUFDWCxNQUFNMkIsc0JBQ2hCLDhEQUFDVjtvQkFFQ1csV0FBV3pELDZFQUFlO29CQUMxQjJELE9BQU87d0JBQUVDLGdCQUFnQi9CLEtBQUtZLFNBQVMsR0FBRyxpQkFBaUI7b0JBQU87O3NDQUVsRSw4REFBQzFDLCtEQUFRQTs0QkFDUG1DLFNBQVNBLE9BQU8sQ0FBQ0wsS0FBS1EsRUFBRSxDQUFDLElBQUk7NEJBQzdCd0IsVUFBVSxJQUFNekIsWUFBWVAsS0FBS1EsRUFBRTs0QkFDbkNvQixXQUFXekQsNkVBQWU7Ozs7OztzQ0FFNUIsOERBQUM4Qzs0QkFBSVcsV0FBV3pELHlFQUFXO3NDQUFHNkIsS0FBS0YsSUFBSTs7Ozs7O3NDQUN2Qyw4REFBQ21COzRCQUFJVyxXQUFXekQsZ0ZBQWtCO3NDQUFHNkIsS0FBS0QsV0FBVzs7Ozs7OzttQkFWaERDLEtBQUtRLEVBQUUsR0FBR1IsS0FBS1EsRUFBRSxHQUFHbUI7Ozs7OzBCQWE3Qiw4REFBQzFELDZEQUFNQTtnQkFBQ3dELFNBQVE7Z0JBQVdMLFNBQVNWOzBCQUFjOzs7Ozs7MEJBR2xELDhEQUFDekMsNkRBQU1BO2dCQUNMMkQsV0FBV3pELGlGQUFtQjtnQkFDOUJzRCxTQUFRO2dCQUNSTCxTQUFTOUM7MEJBQ1Y7Ozs7Ozs7Ozs7OztBQUtQO0dBM0hNSTs7UUFNQWhCLG9EQUFPQTs7O0tBTlBnQjtBQTZITiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3RvX2RvL1RvZG9QYWdlLmpzeD8yZThjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZUNsaWVudCB9IGZyb20gXCJhd3MtYW1wbGlmeS9hcGlcIjtcbmltcG9ydCB7IGNyZWF0ZVRvZG8gfSBmcm9tIFwiQC9ncmFwaHFsL211dGF0aW9uc1wiO1xuaW1wb3J0IHsgbGlzdFRvZG9zIH0gZnJvbSBcIkAvZ3JhcGhxbC9xdWVyaWVzXCI7XG5pbXBvcnQgVG9kb1ZhbGlkYXRpb25TY2hlbWEgZnJvbSBcIi4vVG9kb1ZhbGlkYXRpb25TY2hlbWFcIjtcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSBcIkBob29rZm9ybS9yZXNvbHZlcnMveXVwXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9DaGVja2JveFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9hcHAvdG9fZG8vdG9kby5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBBbXBsaWZ5IH0gZnJvbSBcImF3cy1hbXBsaWZ5XCI7XG5pbXBvcnQgY29uZmlnIGZyb20gXCJAL2F3cy1leHBvcnRzXCI7XG5pbXBvcnQgeyBkZWxldGVUb2RvIGFzIGRlbGV0ZVRvZG9NdXRhdGlvbiB9IGZyb20gXCJAL2dyYXBocWwvbXV0YXRpb25zXCI7XG5cbkFtcGxpZnkuY29uZmlndXJlKGNvbmZpZyk7XG5jb25zdCBjbGllbnQgPSBnZW5lcmF0ZUNsaWVudCgpO1xuXG5jb25zdCBUb2RvUGFnZSA9ICh7IHNpZ25PdXQgfSkgPT4ge1xuICBjb25zdCB7XG4gICAgcmVnaXN0ZXIsXG4gICAgaGFuZGxlU3VibWl0LFxuICAgIHJlc2V0LFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgfSA9IHVzZUZvcm0oe1xuICAgIHJlc29sdmVyOiB5dXBSZXNvbHZlcihUb2RvVmFsaWRhdGlvblNjaGVtYSksXG4gIH0pO1xuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoVG9kb3MoKTtcbiAgfSwgW10pO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoVG9kb3MoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRvZG9EYXRhID0gYXdhaXQgY2xpZW50LmdyYXBocWwoeyBxdWVyeTogbGlzdFRvZG9zIH0pO1xuICAgICAgY29uc3QgdG9kb3MgPSB0b2RvRGF0YS5kYXRhLmxpc3RUb2Rvcy5pdGVtcztcbiAgICAgIHNldFRvZG9zKHRvZG9zKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgZmV0Y2hpbmcgdG9kb3NcIik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gYWRkVG9kbyhkYXRhKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghZGF0YS5uYW1lIHx8ICFkYXRhLmRlc2NyaXB0aW9uKSByZXR1cm47XG4gICAgICBjb25zdCB0b2RvID0geyAuLi5kYXRhIH07XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNsaWVudC5ncmFwaHFsKHtcbiAgICAgICAgcXVlcnk6IGNyZWF0ZVRvZG8sXG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIGlucHV0OiB0b2RvLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBjb25zdCBuZXdUb2RvID0gcmVzcG9uc2UuZGF0YS5jcmVhdGVUb2RvOyAvL+i/veWKoFxuICAgICAgc2V0VG9kb3MoWy4uLnRvZG9zLCBuZXdUb2RvXSk7IC8v6L+95YqgXG4gICAgICByZXNldCgpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coXCJlcnJvciBjcmVhdGluZyB0b2RvOlwiLCBlcnIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKHt9KTtcblxuICBjb25zdCBoYW5kbGVDaGVjayA9IChpZCkgPT4ge1xuICAgIHNldENoZWNrZWQoKHByZXYpID0+ICh7IC4uLnByZXYsIFtpZF06ICFwcmV2W2lkXSB9KSk7XG4gIH07XG5cbiAgY29uc3QgY29tcGxldGVUb2RvID0gKCkgPT4ge1xuICAgIHNldFRvZG9zKFxuICAgICAgdG9kb3MubWFwKCh0b2RvKSA9PiAoe1xuICAgICAgICAuLi50b2RvLFxuICAgICAgICBjb21wbGV0ZWQ6IGNoZWNrZWRbdG9kby5pZF0gPyB0cnVlIDogdG9kby5jb21wbGV0ZWQsXG4gICAgICB9KSlcbiAgICApO1xuICAgIHNldENoZWNrZWQoe30pO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgaWRzVG9EZWxldGUgPSB0b2Rvc1xuICAgICAgLmZpbHRlcigodG9kbykgPT4gY2hlY2tlZFt0b2RvLmlkXSlcbiAgICAgIC5tYXAoKHRvZG8pID0+IHRvZG8uaWQpO1xuICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgaWRzVG9EZWxldGUubWFwKChpZCkgPT5cbiAgICAgICAgY2xpZW50LmdyYXBocWwoe1xuICAgICAgICAgIHF1ZXJ5OiBkZWxldGVUb2RvTXV0YXRpb24sXG4gICAgICAgICAgdmFyaWFibGVzOiB7IGlucHV0OiB7IGlkIH0gfSxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuXG4gICAgc2V0VG9kb3ModG9kb3MuZmlsdGVyKCh0b2RvKSA9PiAhY2hlY2tlZFt0b2RvLmlkXSkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMj5Ub2RvIExpc3Q8L2gyPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaWduT3V0fT5TaWduIG91dDwvYnV0dG9uPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChhZGRUb2RvKX0+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJuYW1lXCIpfVxuICAgICAgICAgIGVycm9yPXshIWVycm9ycy5uYW1lfVxuICAgICAgICAgIGxhYmVsPVwibmFtZVwiXG4gICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIHsuLi5yZWdpc3RlcihcImRlc2NyaXB0aW9uXCIpfVxuICAgICAgICAgIGVycm9yPXshIWVycm9ycy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICBsYWJlbD1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxuICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAg6L+95YqgXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAge3RvZG9zLm1hcCgodG9kbywgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17dG9kby5pZCA/IHRvZG8uaWQgOiBpbmRleH1cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50b2RvSXRlbX1cbiAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogdG9kby5jb21wbGV0ZWQgPyBcImxpbmUtdGhyb3VnaFwiIDogXCJub25lXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZFt0b2RvLmlkXSB8fCBmYWxzZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDaGVjayh0b2RvLmlkKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrYm94fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57dG9kby5uYW1lfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259Pnt0b2RvLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXtjb21wbGV0ZVRvZG99PlxuICAgICAgICDlrozkuoZcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGVCdXR0b259XG4gICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgIG9uQ2xpY2s9e2RlbGV0ZVRvZG99XG4gICAgICA+XG4gICAgICAgIOWJiumZpFxuICAgICAgPC9CdXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvUGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUZvcm0iLCJnZW5lcmF0ZUNsaWVudCIsImNyZWF0ZVRvZG8iLCJsaXN0VG9kb3MiLCJUb2RvVmFsaWRhdGlvblNjaGVtYSIsInl1cFJlc29sdmVyIiwiVGV4dEZpZWxkIiwiQnV0dG9uIiwiQ2hlY2tib3giLCJzdHlsZXMiLCJBbXBsaWZ5IiwiY29uZmlnIiwiZGVsZXRlVG9kbyIsImRlbGV0ZVRvZG9NdXRhdGlvbiIsImNvbmZpZ3VyZSIsImNsaWVudCIsIlRvZG9QYWdlIiwic2lnbk91dCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwicmVzZXQiLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJyZXNvbHZlciIsInRvZG9zIiwic2V0VG9kb3MiLCJmZXRjaFRvZG9zIiwidG9kb0RhdGEiLCJncmFwaHFsIiwicXVlcnkiLCJkYXRhIiwiaXRlbXMiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiYWRkVG9kbyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInRvZG8iLCJyZXNwb25zZSIsInZhcmlhYmxlcyIsImlucHV0IiwibmV3VG9kbyIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiaGFuZGxlQ2hlY2siLCJpZCIsInByZXYiLCJjb21wbGV0ZVRvZG8iLCJtYXAiLCJjb21wbGV0ZWQiLCJpZHNUb0RlbGV0ZSIsImZpbHRlciIsIlByb21pc2UiLCJhbGwiLCJkaXYiLCJoMiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJmb3JtIiwib25TdWJtaXQiLCJlcnJvciIsImxhYmVsIiwidmFyaWFudCIsInR5cGUiLCJpbmRleCIsImNsYXNzTmFtZSIsInRvZG9JdGVtIiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsIm9uQ2hhbmdlIiwiY2hlY2tib3giLCJkZWxldGVCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/to_do/TodoPage.jsx\n"));

/***/ })

});