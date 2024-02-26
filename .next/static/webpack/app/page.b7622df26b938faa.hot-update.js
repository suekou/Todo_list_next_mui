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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var aws_amplify_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! aws-amplify/api */ \"(app-pages-browser)/./node_modules/@aws-amplify/api/dist/esm/API.mjs\");\n/* harmony import */ var _graphql_mutations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/graphql/mutations */ \"(app-pages-browser)/./src/graphql/mutations.js\");\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/graphql/queries */ \"(app-pages-browser)/./src/graphql/queries.js\");\n/* harmony import */ var _TodoValidationSchema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TodoValidationSchema */ \"(app-pages-browser)/./src/app/to_do/TodoValidationSchema.jsx\");\n/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hookform/resolvers/yup */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/yup/dist/yup.mjs\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/TextField */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Checkbox */ \"(app-pages-browser)/./node_modules/@mui/material/Checkbox/Checkbox.js\");\n/* harmony import */ var _app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/app/to_do/todo.module.css */ \"(app-pages-browser)/./src/app/to_do/todo.module.css\");\n/* harmony import */ var _app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aws-amplify */ \"(app-pages-browser)/./node_modules/aws-amplify/dist/esm/initSingleton.mjs\");\n/* harmony import */ var _aws_exports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/aws-exports */ \"(app-pages-browser)/./src/aws-exports.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\naws_amplify__WEBPACK_IMPORTED_MODULE_7__.DefaultAmplify.configure(_aws_exports__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\nconst client = (0,aws_amplify_api__WEBPACK_IMPORTED_MODULE_8__.generateClient)();\nconst TodoPage = (param)=>{\n    let { si } = param;\n    _s();\n    const { register, handleSubmit, reset, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)({\n        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5__.yupResolver)(_TodoValidationSchema__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\n    });\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchTodos();\n    }, []);\n    async function fetchTodos() {\n        try {\n            const todoData = await client.graphql({\n                query: _graphql_queries__WEBPACK_IMPORTED_MODULE_3__.listTodos\n            });\n            const todos = todoData.data.listTodos.items;\n            setTodos(todos);\n        } catch (err) {\n            console.log(\"error fetching todos\");\n        }\n    }\n    async function addTodo(data) {\n        try {\n            if (!data.name || !data.description) return;\n            const todo = {\n                ...data\n            };\n            const response = await client.graphql({\n                query: _graphql_mutations__WEBPACK_IMPORTED_MODULE_2__.createTodo,\n                variables: {\n                    input: todo\n                }\n            });\n            const newTodo = response.data.createTodo; //追加\n            setTodos([\n                ...todos,\n                newTodo\n            ]); //追加\n            reset();\n        } catch (err) {\n            console.log(\"error creating todo:\", err);\n        }\n    }\n    const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const handleCheck = (id)=>{\n        setChecked((prev)=>({\n                ...prev,\n                [id]: !prev[id]\n            }));\n    };\n    const completeTodo = ()=>{\n        setTodos(todos.map((todo)=>({\n                ...todo,\n                completed: checked[todo.id] ? true : todo.completed\n            })));\n        setChecked({});\n    };\n    const deleteTodo = async ()=>{\n        const idsToDelete = todos.filter((todo)=>checked[todo.id]).map((todo)=>todo.id);\n        await Promise.all(idsToDelete.map((id)=>client.graphql({\n                query: _graphql_mutations__WEBPACK_IMPORTED_MODULE_2__.deleteTodo,\n                variables: {\n                    input: {\n                        id\n                    }\n                }\n            })));\n        setTodos(todos.filter((todo)=>!checked[todo.id]));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Todo List\"\n            }, void 0, false, {\n                fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: signOut,\n                children: \"Sign out\"\n            }, void 0, false, {\n                fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(addTodo),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        ...register(\"name\"),\n                        error: !!errors.name,\n                        label: \"name\",\n                        variant: \"standard\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        ...register(\"description\"),\n                        error: !!errors.description,\n                        label: \"description\",\n                        variant: \"standard\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        variant: \"contained\",\n                        type: \"submit\",\n                        children: \"追加\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, undefined),\n            todos.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_12___default().todoItem),\n                    style: {\n                        textDecoration: todo.completed ? \"line-through\" : \"none\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                            checked: checked[todo.id] || false,\n                            onChange: ()=>handleCheck(todo.id),\n                            className: (_app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_12___default().checkbox)\n                        }, void 0, false, {\n                            fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                            lineNumber: 111,\n                            columnNumber: 5\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_12___default().name),\n                            children: todo.name\n                        }, void 0, false, {\n                            fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                            lineNumber: 116,\n                            columnNumber: 5\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_12___default().description),\n                            children: todo.description\n                        }, void 0, false, {\n                            fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                            lineNumber: 117,\n                            columnNumber: 5\n                        }, undefined)\n                    ]\n                }, todo.id ? todo.id : index, true, {\n                    fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                    lineNumber: 110,\n                    columnNumber: 3\n                }, undefined)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                variant: \"outlined\",\n                onClick: completeTodo,\n                children: \"完了\"\n            }, void 0, false, {\n                fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                className: (_app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_12___default().deleteButton),\n                variant: \"outlined\",\n                onClick: deleteTodo,\n                children: \"削除\"\n            }, void 0, false, {\n                fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TodoPage, \"bbwG1wRPSCcT+Cp6ipmhJOq7PxM=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm\n    ];\n});\n_c = TodoPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoPage);\nvar _c;\n$RefreshReg$(_c, \"TodoPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdG9fZG8vVG9kb1BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDRjtBQUNPO0FBQ0E7QUFDSDtBQUNZO0FBQ0o7QUFDTjtBQUNOO0FBQ0k7QUFDRztBQUNYO0FBQ0g7QUFDb0M7QUFFdkVZLHVEQUFPQSxDQUFDSSxTQUFTLENBQUNILG9EQUFNQTtBQUN4QixNQUFNSSxTQUFTZCwrREFBY0E7QUFFN0IsTUFBTWUsV0FBVztRQUFDLEVBQUNDLEVBQUUsRUFBQzs7SUFDcEIsTUFBTSxFQUNKQyxRQUFRLEVBQ1JDLFlBQVksRUFDWkMsS0FBSyxFQUNMQyxXQUFXLEVBQUVDLE1BQU0sRUFBRSxFQUN0QixHQUFHdEIsd0RBQU9BLENBQUM7UUFDVnVCLFVBQVVsQixvRUFBV0EsQ0FBQ0QsNkRBQW9CQTtJQUM1QztJQUNBLE1BQU0sQ0FBQ29CLE9BQU9DLFNBQVMsR0FBRzFCLCtDQUFRQSxDQUFDLEVBQUU7SUFFckNELGdEQUFTQSxDQUFDO1FBQ1I0QjtJQUNGLEdBQUcsRUFBRTtJQUVMLGVBQWVBO1FBQ2IsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTVosT0FBT2EsT0FBTyxDQUFDO2dCQUFFQyxPQUFPMUIsdURBQVNBO1lBQUM7WUFDekQsTUFBTXFCLFFBQVFHLFNBQVNHLElBQUksQ0FBQzNCLFNBQVMsQ0FBQzRCLEtBQUs7WUFDM0NOLFNBQVNEO1FBQ1gsRUFBRSxPQUFPUSxLQUFLO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQztRQUNkO0lBQ0Y7SUFFQSxlQUFlQyxRQUFRTCxJQUFJO1FBQ3pCLElBQUk7WUFDRixJQUFJLENBQUNBLEtBQUtNLElBQUksSUFBSSxDQUFDTixLQUFLTyxXQUFXLEVBQUU7WUFDckMsTUFBTUMsT0FBTztnQkFBRSxHQUFHUixJQUFJO1lBQUM7WUFDMUIsTUFBTVMsV0FBVyxNQUFNeEIsT0FBT2EsT0FBTyxDQUFDO2dCQUN2Q0MsT0FBTzNCLDBEQUFVQTtn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RCw4REFBQ3pDLDZEQUFNQTtnQkFBQzRELFdBQVcxRCxpRkFBbUI7Z0JBQUV1RCxTQUFRO2dCQUFXTixTQUFTOUM7MEJBQVk7Ozs7Ozs7Ozs7OztBQUd0RjtHQXpHTUk7O1FBTUFoQixvREFBT0E7OztLQU5QZ0I7QUEyR04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC90b19kby9Ub2RvUGFnZS5qc3g/MmU4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVDbGllbnQgfSBmcm9tIFwiYXdzLWFtcGxpZnkvYXBpXCI7XG5pbXBvcnQgeyBjcmVhdGVUb2RvIH0gZnJvbSBcIkAvZ3JhcGhxbC9tdXRhdGlvbnNcIjtcbmltcG9ydCB7IGxpc3RUb2RvcyB9IGZyb20gXCJAL2dyYXBocWwvcXVlcmllc1wiO1xuaW1wb3J0IFRvZG9WYWxpZGF0aW9uU2NoZW1hIGZyb20gXCIuL1RvZG9WYWxpZGF0aW9uU2NoZW1hXCI7XG5pbXBvcnQgeyB5dXBSZXNvbHZlciB9IGZyb20gXCJAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cFwiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9UZXh0RmllbGRcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2hlY2tib3hcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvYXBwL3RvX2RvL3RvZG8ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgQW1wbGlmeSB9IGZyb20gJ2F3cy1hbXBsaWZ5JztcbmltcG9ydCBjb25maWcgZnJvbSAnQC9hd3MtZXhwb3J0cyc7XG5pbXBvcnQgeyBkZWxldGVUb2RvIGFzIGRlbGV0ZVRvZG9NdXRhdGlvbiB9IGZyb20gXCJAL2dyYXBocWwvbXV0YXRpb25zXCI7XG5cbkFtcGxpZnkuY29uZmlndXJlKGNvbmZpZyk7XG5jb25zdCBjbGllbnQgPSBnZW5lcmF0ZUNsaWVudCgpO1xuXG5jb25zdCBUb2RvUGFnZSA9ICh7c2l9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICByZWdpc3RlcixcbiAgICBoYW5kbGVTdWJtaXQsXG4gICAgcmVzZXQsXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuICB9ID0gdXNlRm9ybSh7XG4gICAgcmVzb2x2ZXI6IHl1cFJlc29sdmVyKFRvZG9WYWxpZGF0aW9uU2NoZW1hKSxcbiAgfSk7XG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hUb2RvcygpO1xuICB9LCBbXSk7XG4gIFxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFRvZG9zKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0b2RvRGF0YSA9IGF3YWl0IGNsaWVudC5ncmFwaHFsKHsgcXVlcnk6IGxpc3RUb2RvcyB9KTtcbiAgICAgIGNvbnN0IHRvZG9zID0gdG9kb0RhdGEuZGF0YS5saXN0VG9kb3MuaXRlbXM7XG4gICAgICBzZXRUb2Rvcyh0b2Rvcyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yIGZldGNoaW5nIHRvZG9zXCIpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGFkZFRvZG8oZGF0YSkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIWRhdGEubmFtZSB8fCAhZGF0YS5kZXNjcmlwdGlvbikgcmV0dXJuO1xuICAgICAgY29uc3QgdG9kbyA9IHsgLi4uZGF0YSB9O1xuXHQgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2xpZW50LmdyYXBocWwoe1xuXHRcdHF1ZXJ5OiBjcmVhdGVUb2RvLFxuXHRcdHZhcmlhYmxlczoge1xuXHRcdCAgaW5wdXQ6IHRvZG8sXG5cdFx0fSxcblx0ICB9KTtcblx0ICBjb25zdCBuZXdUb2RvID0gcmVzcG9uc2UuZGF0YS5jcmVhdGVUb2RvOy8v6L+95YqgXG5cdCAgc2V0VG9kb3MoWy4uLnRvZG9zLCBuZXdUb2RvXSk7Ly/ov73liqBcblx0ICByZXNldCgpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coXCJlcnJvciBjcmVhdGluZyB0b2RvOlwiLCBlcnIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKHt9KTtcblxuICBjb25zdCBoYW5kbGVDaGVjayA9IChpZCkgPT4ge1xuICAgIHNldENoZWNrZWQocHJldiA9PiAoeyAuLi5wcmV2LCBbaWRdOiAhcHJldltpZF0gfSkpO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBsZXRlVG9kbyA9ICgpID0+IHtcbiAgICBzZXRUb2Rvcyh0b2Rvcy5tYXAodG9kbyA9PiAoe1xuICAgICAgLi4udG9kbyxcbiAgICAgIGNvbXBsZXRlZDogY2hlY2tlZFt0b2RvLmlkXSA/IHRydWUgOiB0b2RvLmNvbXBsZXRlZFxuICAgIH0pKSk7XG5cdHNldENoZWNrZWQoe30pO1xuICB9O1xuXG5jb25zdCBkZWxldGVUb2RvID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBpZHNUb0RlbGV0ZSA9IHRvZG9zLmZpbHRlcih0b2RvID0+IGNoZWNrZWRbdG9kby5pZF0pLm1hcCh0b2RvID0+IHRvZG8uaWQpO1xuXHRhd2FpdCBQcm9taXNlLmFsbChpZHNUb0RlbGV0ZS5tYXAoaWQgPT5cblx0ICBjbGllbnQuZ3JhcGhxbCh7XG5cdFx0cXVlcnk6IGRlbGV0ZVRvZG9NdXRhdGlvbixcblx0XHR2YXJpYWJsZXM6IHsgaW5wdXQ6IHsgaWQgfSB9LFxuXHQgIH0pXG5cdCkpO1xuXG5cdHNldFRvZG9zKHRvZG9zLmZpbHRlcih0b2RvID0+ICFjaGVja2VkW3RvZG8uaWRdKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgyPlRvZG8gTGlzdDwvaDI+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NpZ25PdXR9PlNpZ24gb3V0PC9idXR0b24+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KGFkZFRvZG8pfT5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIHsuLi5yZWdpc3RlcihcIm5hbWVcIil9XG4gICAgICAgICAgZXJyb3I9eyEhZXJyb3JzLm5hbWV9XG4gICAgICAgICAgbGFiZWw9XCJuYW1lXCJcbiAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxuICAgICAgICAvPlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgey4uLnJlZ2lzdGVyKFwiZGVzY3JpcHRpb25cIil9XG4gICAgICAgICAgZXJyb3I9eyEhZXJyb3JzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIGxhYmVsPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICDov73liqBcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Zvcm0+XG5cdHt0b2Rvcy5tYXAoKHRvZG8sIGluZGV4KSA9PiAoXG5cdFx0PGRpdiBrZXk9e3RvZG8uaWQgPyB0b2RvLmlkIDogaW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLnRvZG9JdGVtfSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogdG9kby5jb21wbGV0ZWQgPyAnbGluZS10aHJvdWdoJyA6ICdub25lJyB9fT5cblx0XHQgIDxDaGVja2JveFxuXHRcdFx0Y2hlY2tlZD17Y2hlY2tlZFt0b2RvLmlkXSB8fCBmYWxzZX1cblx0XHRcdG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDaGVjayh0b2RvLmlkKX1cblx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrYm94fVxuXHRcdCAgLz5cblx0XHQgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+e3RvZG8ubmFtZX08L2Rpdj5cblx0XHQgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259Pnt0b2RvLmRlc2NyaXB0aW9ufTwvZGl2PlxuXHRcdDwvZGl2PlxuXHQgICkpfVxuICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXtjb21wbGV0ZVRvZG99PuWujOS6hjwvQnV0dG9uPlxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGVCdXR0b259IHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9e2RlbGV0ZVRvZG99PuWJiumZpDwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kb1BhZ2U7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VGb3JtIiwiZ2VuZXJhdGVDbGllbnQiLCJjcmVhdGVUb2RvIiwibGlzdFRvZG9zIiwiVG9kb1ZhbGlkYXRpb25TY2hlbWEiLCJ5dXBSZXNvbHZlciIsIlRleHRGaWVsZCIsIkJ1dHRvbiIsIkNoZWNrYm94Iiwic3R5bGVzIiwiQW1wbGlmeSIsImNvbmZpZyIsImRlbGV0ZVRvZG8iLCJkZWxldGVUb2RvTXV0YXRpb24iLCJjb25maWd1cmUiLCJjbGllbnQiLCJUb2RvUGFnZSIsInNpIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJyZXNldCIsImZvcm1TdGF0ZSIsImVycm9ycyIsInJlc29sdmVyIiwidG9kb3MiLCJzZXRUb2RvcyIsImZldGNoVG9kb3MiLCJ0b2RvRGF0YSIsImdyYXBocWwiLCJxdWVyeSIsImRhdGEiLCJpdGVtcyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJhZGRUb2RvIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidG9kbyIsInJlc3BvbnNlIiwidmFyaWFibGVzIiwiaW5wdXQiLCJuZXdUb2RvIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJoYW5kbGVDaGVjayIsImlkIiwicHJldiIsImNvbXBsZXRlVG9kbyIsIm1hcCIsImNvbXBsZXRlZCIsImlkc1RvRGVsZXRlIiwiZmlsdGVyIiwiUHJvbWlzZSIsImFsbCIsImRpdiIsImgyIiwiYnV0dG9uIiwib25DbGljayIsInNpZ25PdXQiLCJmb3JtIiwib25TdWJtaXQiLCJlcnJvciIsImxhYmVsIiwidmFyaWFudCIsInR5cGUiLCJpbmRleCIsImNsYXNzTmFtZSIsInRvZG9JdGVtIiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsIm9uQ2hhbmdlIiwiY2hlY2tib3giLCJkZWxldGVCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/to_do/TodoPage.jsx\n"));

/***/ })

});