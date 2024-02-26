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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hookform/resolvers/yup */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/yup/dist/yup.mjs\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/TextField */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Checkbox */ \"(app-pages-browser)/./node_modules/@mui/material/Checkbox/Checkbox.js\");\n/* harmony import */ var _app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/app/to_do/todo.module.css */ \"(app-pages-browser)/./src/app/to_do/todo.module.css\");\n/* harmony import */ var _app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aws-amplify */ \"(app-pages-browser)/./node_modules/aws-amplify/dist/esm/initSingleton.mjs\");\n/* harmony import */ var _aws_exports__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/aws-exports */ \"(app-pages-browser)/./src/aws-exports.js\");\n/* harmony import */ var aws_amplify_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! aws-amplify/api */ \"(app-pages-browser)/./node_modules/@aws-amplify/api/dist/esm/API.mjs\");\n/* harmony import */ var _graphql_mutations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/graphql/mutations */ \"(app-pages-browser)/./src/graphql/mutations.js\");\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/graphql/queries */ \"(app-pages-browser)/./src/graphql/queries.js\");\n/* harmony import */ var _TodoValidationSchema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TodoValidationSchema */ \"(app-pages-browser)/./src/app/to_do/TodoValidationSchema.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n// AWS Amplify 関連\n\n\n\n\n\n// バリデーションスキーマ\n\n// AWS Amplify の設定\naws_amplify__WEBPACK_IMPORTED_MODULE_7__.DefaultAmplify.configure(_aws_exports__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nconst client = (0,aws_amplify_api__WEBPACK_IMPORTED_MODULE_8__.generateClient)();\nconst TodoPage = (param)=>{\n    let { signOut } = param;\n    _s();\n    const { register, handleSubmit, reset, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)({\n        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__.yupResolver)(_TodoValidationSchema__WEBPACK_IMPORTED_MODULE_6__[\"default\"])\n    });\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchTodos();\n    }, []);\n    async function fetchTodos() {\n        try {\n            const todoData = await client.graphql({\n                query: _graphql_queries__WEBPACK_IMPORTED_MODULE_5__.listTodos\n            });\n            const todos = todoData.data.listTodos.items;\n            setTodos(todos);\n        } catch (err) {\n            console.log(\"error fetching todos\");\n        }\n    }\n    async function addTodo(data) {\n        try {\n            if (!data.name || !data.description) return;\n            const todo = {\n                ...data\n            };\n            const response = await client.graphql({\n                query: _graphql_mutations__WEBPACK_IMPORTED_MODULE_4__.createTodo,\n                variables: {\n                    input: todo\n                }\n            });\n            const newTodo = response.data.createTodo;\n            setTodos([\n                ...todos,\n                newTodo\n            ]);\n            reset();\n        } catch (err) {\n            console.log(\"error creating todo:\", err);\n        }\n    }\n    const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const handleCheck = (id)=>{\n        setChecked((prev)=>({\n                ...prev,\n                [id]: !prev[id]\n            }));\n    };\n    const completeTodo = ()=>{\n        setTodos(todos.map((todo)=>({\n                ...todo,\n                completed: checked[todo.id] ? true : todo.completed\n            })));\n        setChecked({});\n    };\n    const deleteTodo = async ()=>{\n        const idsToDelete = todos.filter((todo)=>checked[todo.id]).map((todo)=>todo.id);\n        await Promise.all(idsToDelete.map((id)=>client.graphql({\n                query: _graphql_mutations__WEBPACK_IMPORTED_MODULE_4__.deleteTodo,\n                variables: {\n                    input: {\n                        id\n                    }\n                }\n            })));\n        setTodos(todos.filter((todo)=>!checked[todo.id]));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Todo List\"\n            }, void 0, false, {\n                fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: signOut,\n                children: \"Sign out\"\n            }, void 0, false, {\n                fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(addTodo),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        ...register(\"name\"),\n                        error: !!errors.name,\n                        label: \"name\",\n                        variant: \"standard\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        ...register(\"description\"),\n                        error: !!errors.description,\n                        label: \"description\",\n                        variant: \"standard\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        variant: \"contained\",\n                        type: \"submit\",\n                        children: \"追加\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, undefined),\n            todos.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_12___default().todoItem),\n                    style: {\n                        textDecoration: todo.completed ? \"line-through\" : \"none\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                            checked: checked[todo.id] || false,\n                            onChange: ()=>handleCheck(todo.id),\n                            className: (_app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_12___default().checkbox)\n                        }, void 0, false, {\n                            fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                            lineNumber: 127,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_12___default().name),\n                            children: todo.name\n                        }, void 0, false, {\n                            fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                            lineNumber: 132,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_12___default().description),\n                            children: todo.description\n                        }, void 0, false, {\n                            fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                            lineNumber: 133,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, todo.id ? todo.id : index, true, {\n                    fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                    lineNumber: 122,\n                    columnNumber: 9\n                }, undefined)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                variant: \"outlined\",\n                onClick: completeTodo,\n                children: \"完了\"\n            }, void 0, false, {\n                fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                lineNumber: 136,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                className: (_app_to_do_todo_module_css__WEBPACK_IMPORTED_MODULE_12___default().deleteButton),\n                variant: \"outlined\",\n                onClick: deleteTodo,\n                children: \"削除\"\n            }, void 0, false, {\n                fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n                lineNumber: 139,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kosukesuenaga/Desktop/Todo_list_next_mui/src/app/to_do/TodoPage.jsx\",\n        lineNumber: 100,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TodoPage, \"bbwG1wRPSCcT+Cp6ipmhJOq7PxM=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm\n    ];\n});\n_c = TodoPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoPage);\nvar _c;\n$RefreshReg$(_c, \"TodoPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdG9fZG8vVG9kb1BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDRjtBQUNZO0FBQ047QUFDTjtBQUNJO0FBQ0c7QUFFakQsaUJBQWlCO0FBQ3FCO0FBQ0g7QUFDYztBQUNrQztBQUNyQztBQUU5QyxjQUFjO0FBQzRDO0FBRTFELGtCQUFrQjtBQUNsQlEsdURBQU9BLENBQUNRLFNBQVMsQ0FBQ1Asb0RBQU1BO0FBRXhCLE1BQU1RLFNBQVNQLCtEQUFjQTtBQUU3QixNQUFNUSxXQUFXO1FBQUMsRUFBRUMsT0FBTyxFQUFFOztJQUMzQixNQUFNLEVBQ0pDLFFBQVEsRUFDUkMsWUFBWSxFQUNaQyxLQUFLLEVBQ0xDLFdBQVcsRUFBRUMsTUFBTSxFQUFFLEVBQ3RCLEdBQUd0Qix3REFBT0EsQ0FBQztRQUNWdUIsVUFBVXRCLG9FQUFXQSxDQUFDWSw2REFBb0JBO0lBQzVDO0lBQ0EsTUFBTSxDQUFDVyxPQUFPQyxTQUFTLEdBQUcxQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXJDRCxnREFBU0EsQ0FBQztRQUNSNEI7SUFDRixHQUFHLEVBQUU7SUFFTCxlQUFlQTtRQUNiLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1aLE9BQU9hLE9BQU8sQ0FBQztnQkFBRUMsT0FBT2pCLHVEQUFTQTtZQUFDO1lBQ3pELE1BQU1ZLFFBQVFHLFNBQVNHLElBQUksQ0FBQ2xCLFNBQVMsQ0FBQ21CLEtBQUs7WUFDM0NOLFNBQVNEO1FBQ1gsRUFBRSxPQUFPUSxLQUFLO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQztRQUNkO0lBQ0Y7SUFFQSxlQUFlQyxRQUFRTCxJQUFJO1FBQ3pCLElBQUk7WUFDRixJQUFJLENBQUNBLEtBQUtNLElBQUksSUFBSSxDQUFDTixLQUFLTyxXQUFXLEVBQUU7WUFDckMsTUFBTUMsT0FBTztnQkFBRSxHQUFHUixJQUFJO1lBQUM7WUFDdkIsTUFBTVMsV0FBVyxNQUFNeEIsT0FBT2Es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Ozs7Ozs7MEJBR2xELDhEQUFDN0MsNkRBQU1BO2dCQUNMK0QsV0FBVzdELGlGQUFtQjtnQkFDOUIwRCxTQUFRO2dCQUNSTCxTQUFTaEQ7MEJBQ1Y7Ozs7Ozs7Ozs7OztBQUtQO0dBNUhNTTs7UUFNQWhCLG9EQUFPQTs7O0tBTlBnQjtBQThITiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3RvX2RvL1RvZG9QYWdlLmpzeD8yZThjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgeyB5dXBSZXNvbHZlciB9IGZyb20gXCJAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cFwiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9UZXh0RmllbGRcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2hlY2tib3hcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvYXBwL3RvX2RvL3RvZG8ubW9kdWxlLmNzc1wiO1xuXG4vLyBBV1MgQW1wbGlmeSDplqLpgKNcbmltcG9ydCB7IEFtcGxpZnkgfSBmcm9tIFwiYXdzLWFtcGxpZnlcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIkAvYXdzLWV4cG9ydHNcIjtcbmltcG9ydCB7IGdlbmVyYXRlQ2xpZW50IH0gZnJvbSBcImF3cy1hbXBsaWZ5L2FwaVwiO1xuaW1wb3J0IHsgY3JlYXRlVG9kbywgZGVsZXRlVG9kbyBhcyBkZWxldGVUb2RvTXV0YXRpb24gfSBmcm9tIFwiQC9ncmFwaHFsL211dGF0aW9uc1wiO1xuaW1wb3J0IHsgbGlzdFRvZG9zIH0gZnJvbSBcIkAvZ3JhcGhxbC9xdWVyaWVzXCI7XG5cbi8vIOODkOODquODh+ODvOOCt+ODp+ODs+OCueOCreODvOODnlxuaW1wb3J0IFRvZG9WYWxpZGF0aW9uU2NoZW1hIGZyb20gXCIuL1RvZG9WYWxpZGF0aW9uU2NoZW1hXCI7XG5cbi8vIEFXUyBBbXBsaWZ5IOOBruioreWumlxuQW1wbGlmeS5jb25maWd1cmUoY29uZmlnKTtcblxuY29uc3QgY2xpZW50ID0gZ2VuZXJhdGVDbGllbnQoKTtcblxuY29uc3QgVG9kb1BhZ2UgPSAoeyBzaWduT3V0IH0pID0+IHtcbiAgY29uc3Qge1xuICAgIHJlZ2lzdGVyLFxuICAgIGhhbmRsZVN1Ym1pdCxcbiAgICByZXNldCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gIH0gPSB1c2VGb3JtKHtcbiAgICByZXNvbHZlcjogeXVwUmVzb2x2ZXIoVG9kb1ZhbGlkYXRpb25TY2hlbWEpLFxuICB9KTtcbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFRvZG9zKCk7XG4gIH0sIFtdKTtcblxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFRvZG9zKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0b2RvRGF0YSA9IGF3YWl0IGNsaWVudC5ncmFwaHFsKHsgcXVlcnk6IGxpc3RUb2RvcyB9KTtcbiAgICAgIGNvbnN0IHRvZG9zID0gdG9kb0RhdGEuZGF0YS5saXN0VG9kb3MuaXRlbXM7XG4gICAgICBzZXRUb2Rvcyh0b2Rvcyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yIGZldGNoaW5nIHRvZG9zXCIpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGFkZFRvZG8oZGF0YSkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIWRhdGEubmFtZSB8fCAhZGF0YS5kZXNjcmlwdGlvbikgcmV0dXJuO1xuICAgICAgY29uc3QgdG9kbyA9IHsgLi4uZGF0YSB9O1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjbGllbnQuZ3JhcGhxbCh7XG4gICAgICAgIHF1ZXJ5OiBjcmVhdGVUb2RvLFxuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBpbnB1dDogdG9kbyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgbmV3VG9kbyA9IHJlc3BvbnNlLmRhdGEuY3JlYXRlVG9kbztcbiAgICAgIHNldFRvZG9zKFsuLi50b2RvcywgbmV3VG9kb10pO1xuICAgICAgcmVzZXQoKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgY3JlYXRpbmcgdG9kbzpcIiwgZXJyKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hlY2sgPSAoaWQpID0+IHtcbiAgICBzZXRDaGVja2VkKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbaWRdOiAhcHJldltpZF0gfSkpO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBsZXRlVG9kbyA9ICgpID0+IHtcbiAgICBzZXRUb2RvcyhcbiAgICAgIHRvZG9zLm1hcCgodG9kbykgPT4gKHtcbiAgICAgICAgLi4udG9kbyxcbiAgICAgICAgY29tcGxldGVkOiBjaGVja2VkW3RvZG8uaWRdID8gdHJ1ZSA6IHRvZG8uY29tcGxldGVkLFxuICAgICAgfSkpXG4gICAgKTtcbiAgICBzZXRDaGVja2VkKHt9KTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVUb2RvID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGlkc1RvRGVsZXRlID0gdG9kb3NcbiAgICAgIC5maWx0ZXIoKHRvZG8pID0+IGNoZWNrZWRbdG9kby5pZF0pXG4gICAgICAubWFwKCh0b2RvKSA9PiB0b2RvLmlkKTtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIGlkc1RvRGVsZXRlLm1hcCgoaWQpID0+XG4gICAgICAgIGNsaWVudC5ncmFwaHFsKHtcbiAgICAgICAgICBxdWVyeTogZGVsZXRlVG9kb011dGF0aW9uLFxuICAgICAgICAgIHZhcmlhYmxlczogeyBpbnB1dDogeyBpZCB9IH0sXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcblxuICAgIHNldFRvZG9zKHRvZG9zLmZpbHRlcigodG9kbykgPT4gIWNoZWNrZWRbdG9kby5pZF0pKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBcbiAgICAgIDxoMT5Ub2RvIExpc3Q8L2gxPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaWduT3V0fT5TaWduIG91dDwvYnV0dG9uPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChhZGRUb2RvKX0+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJuYW1lXCIpfVxuICAgICAgICAgIGVycm9yPXshIWVycm9ycy5uYW1lfVxuICAgICAgICAgIGxhYmVsPVwibmFtZVwiXG4gICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIHsuLi5yZWdpc3RlcihcImRlc2NyaXB0aW9uXCIpfVxuICAgICAgICAgIGVycm9yPXshIWVycm9ycy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICBsYWJlbD1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxuICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAg6L+95YqgXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAge3RvZG9zLm1hcCgodG9kbywgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17dG9kby5pZCA/IHRvZG8uaWQgOiBpbmRleH1cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50b2RvSXRlbX1cbiAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogdG9kby5jb21wbGV0ZWQgPyBcImxpbmUtdGhyb3VnaFwiIDogXCJub25lXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZFt0b2RvLmlkXSB8fCBmYWxzZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDaGVjayh0b2RvLmlkKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrYm94fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57dG9kby5uYW1lfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259Pnt0b2RvLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXtjb21wbGV0ZVRvZG99PlxuICAgICAgICDlrozkuoZcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGVCdXR0b259XG4gICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgIG9uQ2xpY2s9e2RlbGV0ZVRvZG99XG4gICAgICA+XG4gICAgICAgIOWJiumZpFxuICAgICAgPC9CdXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvUGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUZvcm0iLCJ5dXBSZXNvbHZlciIsIlRleHRGaWVsZCIsIkJ1dHRvbiIsIkNoZWNrYm94Iiwic3R5bGVzIiwiQW1wbGlmeSIsImNvbmZpZyIsImdlbmVyYXRlQ2xpZW50IiwiY3JlYXRlVG9kbyIsImRlbGV0ZVRvZG8iLCJkZWxldGVUb2RvTXV0YXRpb24iLCJsaXN0VG9kb3MiLCJUb2RvVmFsaWRhdGlvblNjaGVtYSIsImNvbmZpZ3VyZSIsImNsaWVudCIsIlRvZG9QYWdlIiwic2lnbk91dCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwicmVzZXQiLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJyZXNvbHZlciIsInRvZG9zIiwic2V0VG9kb3MiLCJmZXRjaFRvZG9zIiwidG9kb0RhdGEiLCJncmFwaHFsIiwicXVlcnkiLCJkYXRhIiwiaXRlbXMiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiYWRkVG9kbyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInRvZG8iLCJyZXNwb25zZSIsInZhcmlhYmxlcyIsImlucHV0IiwibmV3VG9kbyIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiaGFuZGxlQ2hlY2siLCJpZCIsInByZXYiLCJjb21wbGV0ZVRvZG8iLCJtYXAiLCJjb21wbGV0ZWQiLCJpZHNUb0RlbGV0ZSIsImZpbHRlciIsIlByb21pc2UiLCJhbGwiLCJkaXYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJmb3JtIiwib25TdWJtaXQiLCJlcnJvciIsImxhYmVsIiwidmFyaWFudCIsInR5cGUiLCJpbmRleCIsImNsYXNzTmFtZSIsInRvZG9JdGVtIiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsIm9uQ2hhbmdlIiwiY2hlY2tib3giLCJkZWxldGVCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/to_do/TodoPage.jsx\n"));

/***/ })

});