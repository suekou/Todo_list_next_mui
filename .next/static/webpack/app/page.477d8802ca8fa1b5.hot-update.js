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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var aws_amplify_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! aws-amplify/api */ \"(app-pages-browser)/./node_modules/@aws-amplify/api/dist/esm/API.mjs\");\n/* harmony import */ var _graphql_mutations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/graphql/mutations */ \"(app-pages-browser)/./src/graphql/mutations.js\");\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/graphql/queries */ \"(app-pages-browser)/./src/graphql/queries.js\");\n/* harmony import */ var _TodoValidationSchema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TodoValidationSchema */ \"(app-pages-browser)/./src/app/to_do/TodoValidationSchema.jsx\");\n/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hookform/resolvers/yup */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/yup/dist/yup.mjs\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/TextField */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Checkbox */ \"(app-pages-browser)/./node_modules/@mui/material/Checkbox/Checkbox.js\");\n/* harmony import */ var _app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/app/to_do/todo.module.css */ \"(app-pages-browser)/./src/app/to_do/todo.module.css\");\n/* harmony import */ var _app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aws-amplify */ \"(app-pages-browser)/./node_modules/aws-amplify/dist/esm/initSingleton.mjs\");\n/* harmony import */ var _aws_exports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/aws-exports */ \"(app-pages-browser)/./src/aws-exports.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\naws_amplify__WEBPACK_IMPORTED_MODULE_7__.DefaultAmplify.configure(_aws_exports__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\nconst client = (0,aws_amplify_api__WEBPACK_IMPORTED_MODULE_8__.generateClient)();\nconst TodoPage = (param)=>{\n    let { signOut } = param;\n    _s();\n    const { register, handleSubmit, reset, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)({\n        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5__.yupResolver)(_TodoValidationSchema__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\n    });\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchTodos();\n    }, []);\n    async function fetchTodos() {\n        try {\n            const todoData = await client.graphql({\n                query: _graphql_queries__WEBPACK_IMPORTED_MODULE_3__.listTodos\n            });\n            const todos = todoData.data.listTodos.items;\n            setTodos(todos);\n        } catch (err) {\n            console.log(\"error fetching todos\");\n        }\n    }\n    async function addTodo(data) {\n        try {\n            if (!data.name || !data.description) return;\n            const todo = {\n                ...data\n            };\n            const response = await client.graphql({\n                query: _graphql_mutations__WEBPACK_IMPORTED_MODULE_2__.createTodo,\n                variables: {\n                    input: todo\n                }\n            });\n            const newTodo = response.data.createTodo; //追加\n            setTodos([\n                ...todos,\n                newTodo\n            ]); //追加\n            reset();\n        } catch (err) {\n            console.log(\"error creating todo:\", err);\n        }\n    }\n    const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const handleCheck = (id)=>{\n        setChecked((prev)=>({\n                ...prev,\n                [id]: !prev[id]\n            }));\n    };\n    const completeTodo = ()=>{\n        setTodos(todos.map((todo)=>({\n                ...todo,\n                completed: checked[todo.id] ? true : todo.completed\n            })));\n        setChecked({});\n    };\n    const deleteTodo = async ()=>{\n        const idsToDelete = todos.filter((todo)=>checked[todo.id]).map((todo)=>todo.id);\n        await Promise.all(idsToDelete.map((id)=>client.graphql({\n                query: _graphql_mutations__WEBPACK_IMPORTED_MODULE_2__.deleteTodo,\n                variables: {\n                    input: {\n                        id\n                    }\n                }\n            })));\n        setTodos(todos.filter((todo)=>!checked[todo.id]));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Todo List\"\n            }, void 0, false, {\n                fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: signOut,\n                children: \"Sign out\"\n            }, void 0, false, {\n                fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(addTodo),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        ...register(\"name\"),\n                        error: !!errors.name,\n                        label: \"name\",\n                        variant: \"standard\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        ...register(\"description\"),\n                        error: !!errors.description,\n                        label: \"description\",\n                        variant: \"standard\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        variant: \"contained\",\n                        type: \"submit\",\n                        children: \"追加\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, undefined),\n            todos.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_12___default().todoItem),\n                    style: {\n                        textDecoration: todo.completed ? \"line-through\" : \"none\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                            checked: checked[todo.id] || false,\n                            onChange: ()=>handleCheck(todo.id),\n                            className: (_app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_12___default().checkbox)\n                        }, void 0, false, {\n                            fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                            lineNumber: 111,\n                            columnNumber: 5\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_12___default().name),\n                            children: todo.name\n                        }, void 0, false, {\n                            fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                            lineNumber: 116,\n                            columnNumber: 5\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_12___default().description),\n                            children: todo.description\n                        }, void 0, false, {\n                            fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                            lineNumber: 117,\n                            columnNumber: 5\n                        }, undefined)\n                    ]\n                }, todo.id ? todo.id : index, true, {\n                    fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                    lineNumber: 110,\n                    columnNumber: 3\n                }, undefined)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                variant: \"outlined\",\n                onClick: completeTodo,\n                children: \"完了\"\n            }, void 0, false, {\n                fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                className: (_app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_12___default().deleteButton),\n                variant: \"outlined\",\n                onClick: deleteTodo,\n                children: \"削除\"\n            }, void 0, false, {\n                fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TodoPage, \"bbwG1wRPSCcT+Cp6ipmhJOq7PxM=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm\n    ];\n});\n_c = TodoPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoPage);\nvar _c;\n$RefreshReg$(_c, \"TodoPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdG9fZG8vVG9kb1BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDRjtBQUNPO0FBQ0E7QUFDSDtBQUNZO0FBQ0o7QUFDTjtBQUNOO0FBQ0k7QUFDRztBQUNYO0FBQ0g7QUFDb0M7QUFFdkVZLHVEQUFPQSxDQUFDSSxTQUFTLENBQUNILG9EQUFNQTtBQUN4QixNQUFNSSxTQUFTZCwrREFBY0E7QUFFN0IsTUFBTWUsV0FBVztRQUFDLEVBQUNDLE9BQU8sRUFBQzs7SUFDekIsTUFBTSxFQUNKQyxRQUFRLEVBQ1JDLFlBQVksRUFDWkMsS0FBSyxFQUNMQyxXQUFXLEVBQUVDLE1BQU0sRUFBRSxFQUN0QixHQUFHdEIsd0RBQU9BLENBQUM7UUFDVnVCLFVBQVVsQixvRUFBV0EsQ0FBQ0QsNkRBQW9CQTtJQUM1QztJQUNBLE1BQU0sQ0FBQ29CLE9BQU9DLFNBQVMsR0FBRzFCLCtDQUFRQSxDQUFDLEVBQUU7SUFFckNELGdEQUFTQSxDQUFDO1FBQ1I0QjtJQUNGLEdBQUcsRUFBRTtJQUVMLGVBQWVBO1FBQ2IsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTVosT0FBT2EsT0FBTyxDQUFDO2dCQUFFQyxPQUFPMUIsdURBQVNBO1lBQUM7WUFDekQsTUFBTXFCLFFBQVFHLFNBQVNHLElBQUksQ0FBQzNCLFNBQVMsQ0FBQzRCLEtBQUs7WUFDM0NOLFNBQVNEO1FBQ1gsRUFBRSxPQUFPUSxLQUFLO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQztRQUNkO0lBQ0Y7SUFFQSxlQUFlQyxRQUFRTCxJQUFJO1FBQ3pCLElBQUk7WUFDRixJQUFJLENBQUNBLEtBQUtNLElBQUksSUFBSSxDQUFDTixLQUFLTyxXQUFXLEVBQUU7WUFDckMsTUFBTUMsT0FBTztnQkFBRSxHQUFHUixJQUFJO1lBQUM7WUFDMUIsTUFBTVMsV0FBVyxNQUFNeEIsT0FBT2EsT0FBTyxDQUFDO2dCQUN2Q0MsT0FBTzNCLDBEQUFVQTtn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Q2xELDhEQUFDekMsNkRBQU1BO2dCQUFDMkQsV0FBV3pELGlGQUFtQjtnQkFBRXNELFNBQVE7Z0JBQVdMLFNBQVM5QzswQkFBWTs7Ozs7Ozs7Ozs7O0FBR3RGO0dBekdNSTs7UUFNQWhCLG9EQUFPQTs7O0tBTlBnQjtBQTJHTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3RvX2RvL1RvZG9QYWdlLmpzeD8yZThjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZUNsaWVudCB9IGZyb20gXCJhd3MtYW1wbGlmeS9hcGlcIjtcbmltcG9ydCB7IGNyZWF0ZVRvZG8gfSBmcm9tIFwiQC9ncmFwaHFsL211dGF0aW9uc1wiO1xuaW1wb3J0IHsgbGlzdFRvZG9zIH0gZnJvbSBcIkAvZ3JhcGhxbC9xdWVyaWVzXCI7XG5pbXBvcnQgVG9kb1ZhbGlkYXRpb25TY2hlbWEgZnJvbSBcIi4vVG9kb1ZhbGlkYXRpb25TY2hlbWFcIjtcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSBcIkBob29rZm9ybS9yZXNvbHZlcnMveXVwXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9DaGVja2JveFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9hcHAvdG9fZG8vdG9kby5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBBbXBsaWZ5IH0gZnJvbSAnYXdzLWFtcGxpZnknO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdAL2F3cy1leHBvcnRzJztcbmltcG9ydCB7IGRlbGV0ZVRvZG8gYXMgZGVsZXRlVG9kb011dGF0aW9uIH0gZnJvbSBcIkAvZ3JhcGhxbC9tdXRhdGlvbnNcIjtcblxuQW1wbGlmeS5jb25maWd1cmUoY29uZmlnKTtcbmNvbnN0IGNsaWVudCA9IGdlbmVyYXRlQ2xpZW50KCk7XG5cbmNvbnN0IFRvZG9QYWdlID0gKHtzaWduT3V0fSkgPT4ge1xuICBjb25zdCB7XG4gICAgcmVnaXN0ZXIsXG4gICAgaGFuZGxlU3VibWl0LFxuICAgIHJlc2V0LFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgfSA9IHVzZUZvcm0oe1xuICAgIHJlc29sdmVyOiB5dXBSZXNvbHZlcihUb2RvVmFsaWRhdGlvblNjaGVtYSksXG4gIH0pO1xuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoVG9kb3MoKTtcbiAgfSwgW10pO1xuICBcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUb2RvcygpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9kb0RhdGEgPSBhd2FpdCBjbGllbnQuZ3JhcGhxbCh7IHF1ZXJ5OiBsaXN0VG9kb3MgfSk7XG4gICAgICBjb25zdCB0b2RvcyA9IHRvZG9EYXRhLmRhdGEubGlzdFRvZG9zLml0ZW1zO1xuICAgICAgc2V0VG9kb3ModG9kb3MpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coXCJlcnJvciBmZXRjaGluZyB0b2Rvc1wiKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBhZGRUb2RvKGRhdGEpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFkYXRhLm5hbWUgfHwgIWRhdGEuZGVzY3JpcHRpb24pIHJldHVybjtcbiAgICAgIGNvbnN0IHRvZG8gPSB7IC4uLmRhdGEgfTtcblx0ICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNsaWVudC5ncmFwaHFsKHtcblx0XHRxdWVyeTogY3JlYXRlVG9kbyxcblx0XHR2YXJpYWJsZXM6IHtcblx0XHQgIGlucHV0OiB0b2RvLFxuXHRcdH0sXG5cdCAgfSk7XG5cdCAgY29uc3QgbmV3VG9kbyA9IHJlc3BvbnNlLmRhdGEuY3JlYXRlVG9kbzsvL+i/veWKoFxuXHQgIHNldFRvZG9zKFsuLi50b2RvcywgbmV3VG9kb10pOy8v6L+95YqgXG5cdCAgcmVzZXQoKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgY3JlYXRpbmcgdG9kbzpcIiwgZXJyKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hlY2sgPSAoaWQpID0+IHtcbiAgICBzZXRDaGVja2VkKHByZXYgPT4gKHsgLi4ucHJldiwgW2lkXTogIXByZXZbaWRdIH0pKTtcbiAgfTtcblxuICBjb25zdCBjb21wbGV0ZVRvZG8gPSAoKSA9PiB7XG4gICAgc2V0VG9kb3ModG9kb3MubWFwKHRvZG8gPT4gKHtcbiAgICAgIC4uLnRvZG8sXG4gICAgICBjb21wbGV0ZWQ6IGNoZWNrZWRbdG9kby5pZF0gPyB0cnVlIDogdG9kby5jb21wbGV0ZWRcbiAgICB9KSkpO1xuXHRzZXRDaGVja2VkKHt9KTtcbiAgfTtcblxuY29uc3QgZGVsZXRlVG9kbyA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgaWRzVG9EZWxldGUgPSB0b2Rvcy5maWx0ZXIodG9kbyA9PiBjaGVja2VkW3RvZG8uaWRdKS5tYXAodG9kbyA9PiB0b2RvLmlkKTtcblx0YXdhaXQgUHJvbWlzZS5hbGwoaWRzVG9EZWxldGUubWFwKGlkID0+XG5cdCAgY2xpZW50LmdyYXBocWwoe1xuXHRcdHF1ZXJ5OiBkZWxldGVUb2RvTXV0YXRpb24sXG5cdFx0dmFyaWFibGVzOiB7IGlucHV0OiB7IGlkIH0gfSxcblx0ICB9KVxuXHQpKTtcblxuXHRzZXRUb2Rvcyh0b2Rvcy5maWx0ZXIodG9kbyA9PiAhY2hlY2tlZFt0b2RvLmlkXSkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMj5Ub2RvIExpc3Q8L2gyPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaWduT3V0fT5TaWduIG91dDwvYnV0dG9uPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChhZGRUb2RvKX0+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJuYW1lXCIpfVxuICAgICAgICAgIGVycm9yPXshIWVycm9ycy5uYW1lfVxuICAgICAgICAgIGxhYmVsPVwibmFtZVwiXG4gICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIHsuLi5yZWdpc3RlcihcImRlc2NyaXB0aW9uXCIpfVxuICAgICAgICAgIGVycm9yPXshIWVycm9ycy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICBsYWJlbD1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxuICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAg6L+95YqgXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9mb3JtPlxuXHR7dG9kb3MubWFwKCh0b2RvLCBpbmRleCkgPT4gKFxuXHRcdDxkaXYga2V5PXt0b2RvLmlkID8gdG9kby5pZCA6IGluZGV4fSBjbGFzc05hbWU9e3N0eWxlcy50b2RvSXRlbX0gc3R5bGU9e3sgdGV4dERlY29yYXRpb246IHRvZG8uY29tcGxldGVkID8gJ2xpbmUtdGhyb3VnaCcgOiAnbm9uZScgfX0+XG5cdFx0ICA8Q2hlY2tib3hcblx0XHRcdGNoZWNrZWQ9e2NoZWNrZWRbdG9kby5pZF0gfHwgZmFsc2V9XG5cdFx0XHRvbkNoYW5nZT17KCkgPT4gaGFuZGxlQ2hlY2sodG9kby5pZCl9XG5cdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5jaGVja2JveH1cblx0XHQgIC8+XG5cdFx0ICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9Pnt0b2RvLm5hbWV9PC9kaXY+XG5cdFx0ICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57dG9kby5kZXNjcmlwdGlvbn08L2Rpdj5cblx0XHQ8L2Rpdj5cblx0ICApKX1cbiAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgb25DbGljaz17Y29tcGxldGVUb2RvfT7lrozkuoY8L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlQnV0dG9ufSB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXtkZWxldGVUb2RvfT7liYrpmaQ8L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9QYWdlO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRm9ybSIsImdlbmVyYXRlQ2xpZW50IiwiY3JlYXRlVG9kbyIsImxpc3RUb2RvcyIsIlRvZG9WYWxpZGF0aW9uU2NoZW1hIiwieXVwUmVzb2x2ZXIiLCJUZXh0RmllbGQiLCJCdXR0b24iLCJDaGVja2JveCIsInN0eWxlcyIsIkFtcGxpZnkiLCJjb25maWciLCJkZWxldGVUb2RvIiwiZGVsZXRlVG9kb011dGF0aW9uIiwiY29uZmlndXJlIiwiY2xpZW50IiwiVG9kb1BhZ2UiLCJzaWduT3V0IiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJyZXNldCIsImZvcm1TdGF0ZSIsImVycm9ycyIsInJlc29sdmVyIiwidG9kb3MiLCJzZXRUb2RvcyIsImZldGNoVG9kb3MiLCJ0b2RvRGF0YSIsImdyYXBocWwiLCJxdWVyeSIsImRhdGEiLCJpdGVtcyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJhZGRUb2RvIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidG9kbyIsInJlc3BvbnNlIiwidmFyaWFibGVzIiwiaW5wdXQiLCJuZXdUb2RvIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJoYW5kbGVDaGVjayIsImlkIiwicHJldiIsImNvbXBsZXRlVG9kbyIsIm1hcCIsImNvbXBsZXRlZCIsImlkc1RvRGVsZXRlIiwiZmlsdGVyIiwiUHJvbWlzZSIsImFsbCIsImRpdiIsImgyIiwiYnV0dG9uIiwib25DbGljayIsImZvcm0iLCJvblN1Ym1pdCIsImVycm9yIiwibGFiZWwiLCJ2YXJpYW50IiwidHlwZSIsImluZGV4IiwiY2xhc3NOYW1lIiwidG9kb0l0ZW0iLCJzdHlsZSIsInRleHREZWNvcmF0aW9uIiwib25DaGFuZ2UiLCJjaGVja2JveCIsImRlbGV0ZUJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/to_do/TodoPage.jsx\n"));

/***/ })

});