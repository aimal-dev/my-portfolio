(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/layout/Navbar.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "Navbar-module-scss-module__3AB87a__active",
  "extra": "Navbar-module-scss-module__3AB87a__extra",
  "icon": "Navbar-module-scss-module__3AB87a__icon",
  "label": "Navbar-module-scss-module__3AB87a__label",
  "link": "Navbar-module-scss-module__3AB87a__link",
  "links": "Navbar-module-scss-module__3AB87a__links",
  "logo": "Navbar-module-scss-module__3AB87a__logo",
  "mobileOpen": "Navbar-module-scss-module__3AB87a__mobileOpen",
  "mobileToggle": "Navbar-module-scss-module__3AB87a__mobileToggle",
  "name": "Navbar-module-scss-module__3AB87a__name",
  "navbar": "Navbar-module-scss-module__3AB87a__navbar",
});
}),
"[project]/src/components/layout/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/layout/Navbar.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Navbar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "11a5c6cbb07455f81f0bd494dbc0cdc70c077f1882a831eb5e05173b14ed8479") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "11a5c6cbb07455f81f0bd494dbc0cdc70c077f1882a831eb5e05173b14ed8479";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                name: "_hello",
                path: "/",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"]
            },
            {
                name: "_about-me",
                path: "/about",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
            },
            {
                name: "_projects",
                path: "/projects",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"]
            },
            {
                name: "_contact-me",
                path: "/contact",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"]
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const navItems = t0;
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].name,
                children: "aimal-dev"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Navbar.tsx",
                lineNumber: 46,
                columnNumber: 39
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== isOpen) {
        t2 = ({
            "Navbar[<button>.onClick]": ()=>setIsOpen(!isOpen)
        })["Navbar[<button>.onClick]"];
        $[3] = isOpen;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== isOpen) {
        t3 = isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            size: 24
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 63,
            columnNumber: 19
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
            size: 24
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 63,
            columnNumber: 37
        }, this);
        $[5] = isOpen;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t2 || $[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileToggle,
            onClick: t2,
            "aria-label": "Toggle menu",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const t5 = isOpen && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileOpen;
    let t6;
    if ($[10] !== t5) {
        t6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].links, t5);
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== pathname) {
        t7 = navItems.map({
            "Navbar[navItems.map()]": (item)=>{
                const isActive = pathname === item.path;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: item.path,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link, isActive && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active),
                    onClick: {
                        "Navbar[navItems.map() > <Link>.onClick]": ()=>setIsOpen(false)
                    }["Navbar[navItems.map() > <Link>.onClick]"],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                        children: item.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 94,
                        columnNumber: 55
                    }, this)
                }, item.path, false, {
                    fileName: "[project]/src/components/layout/Navbar.tsx",
                    lineNumber: 92,
                    columnNumber: 16
                }, this);
            }
        }["Navbar[navItems.map()]"]);
        $[12] = pathname;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== t6 || $[15] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 104,
            columnNumber: 10
        }, this);
        $[14] = t6;
        $[15] = t7;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].extra
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== t4 || $[19] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navbar,
            children: [
                t1,
                t4,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, this);
        $[18] = t4;
        $[19] = t8;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    return t10;
}
_s(Navbar, "HTtb8vrhys85v/FDU2414Ck6KSQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Footer.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "footer": "Footer-module-scss-module__JLT4gq__footer",
  "githubLink": "Footer-module-scss-module__JLT4gq__githubLink",
  "label": "Footer-module-scss-module__JLT4gq__label",
  "left": "Footer-module-scss-module__JLT4gq__left",
  "right": "Footer-module-scss-module__JLT4gq__right",
  "socialLink": "Footer-module-scss-module__JLT4gq__socialLink",
});
}),
"[project]/src/lib/data:3a3294 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFooter",
    ()=>$$RSC_SERVER_ACTION_14
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"008935267bb0ce3d62b9cf56b6e21f1a84073760d6":"getFooter"},"src/lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("008935267bb0ce3d62b9cf56b6e21f1a84073760d6", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getFooter");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IHN1cGFiYXNlQWRtaW4gfSBmcm9tICcuL3N1cGFiYXNlJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG4vLyBTdG9yYWdlIEJ1Y2tldCBOYW1lIGluIFN1cGFiYXNlXHJcbmNvbnN0IEJVQ0tFVF9OQU1FID0gJ3BvcnRmb2xpby1hc3NldHMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9qZWN0IHtcclxuICBpZDogbnVtYmVyO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICB0ZWNoOiBzdHJpbmdbXTtcclxuICBpbWFnZTogc3RyaW5nO1xyXG4gIGxpbms6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICBkYXRlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGVyb0RhdGEge1xyXG4gICAgZ3JlZXRpbmc6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHJvbGU6IHN0cmluZztcclxuICAgIGdpdGh1Ykxpbms6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb250YWN0RGF0YSB7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGhvbmU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFeHBlcmllbmNlIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIGNvbXBhbnk6IHN0cmluZztcclxuICBwb3NpdGlvbjogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgc2tpbGxzOiBzdHJpbmdbXTtcclxuICBpY29uOiBzdHJpbmc7XHJcbiAgc3RhcnREYXRlOiBzdHJpbmc7XHJcbiAgZW5kRGF0ZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVkdWNhdGlvbiB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBzY2hvb2w6IHN0cmluZztcclxuICBkZWdyZWU6IHN0cmluZztcclxuICBzdGFydERhdGU6IHN0cmluZztcclxuICBlbmREYXRlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDZXJ0aWZpY2F0ZSB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgaXNzdWVyOiBzdHJpbmc7XHJcbiAgICBkYXRlOiBzdHJpbmc7XHJcbiAgICBsaW5rOiBzdHJpbmc7XHJcbiAgICBpbWFnZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFib3V0RGF0YSB7XHJcbiAgICBiaW86IHN0cmluZztcclxuICAgIGltYWdlOiBzdHJpbmc7XHJcbiAgICBza2lsbHM6IHN0cmluZ1tdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZvb3RlckRhdGEge1xyXG4gICAgZ2l0aHViOiBzdHJpbmc7XHJcbiAgICBsaW5rZWRpbjogc3RyaW5nO1xyXG4gICAgdHdpdHRlcjogc3RyaW5nO1xyXG4gICAgZW1haWw6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIERCIHtcclxuICBwcm9qZWN0czogUHJvamVjdFtdO1xyXG4gIG1lc3NhZ2VzOiBNZXNzYWdlW107XHJcbiAgcHJvZmlsZT86IHVua25vd247XHJcbiAgaGVybz86IEhlcm9EYXRhO1xyXG4gIGNvbnRhY3Q/OiBDb250YWN0RGF0YTtcclxuICBhYm91dD86IEFib3V0RGF0YTtcclxuICBleHBlcmllbmNlPzogRXhwZXJpZW5jZVtdO1xyXG4gIGVkdWNhdGlvbj86IEVkdWNhdGlvbltdO1xyXG4gIGNlcnRpZmljYXRlcz86IENlcnRpZmljYXRlW107XHJcbiAgZm9vdGVyPzogRm9vdGVyRGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0REIoKTogUHJvbWlzZTxEQj4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUFkbWluXHJcbiAgICAgIC5mcm9tKCdzZXR0aW5ncycpXHJcbiAgICAgIC5zZWxlY3QoJ2NvbnRlbnQnKVxyXG4gICAgICAuZXEoJ2lkJywgJ21haW5fY29uZmlnJylcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChlcnJvciB8fCAhZGF0YSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXCJGYWxsaW5nIGJhY2sgdG8gZW1wdHkgREIgc3RydWN0dXJlOlwiLCBlcnJvcj8ubWVzc2FnZSk7XHJcbiAgICAgIHJldHVybiB7IHByb2plY3RzOiBbXSwgbWVzc2FnZXM6IFtdLCBwcm9maWxlOiB7fSB9O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gZGF0YS5jb250ZW50IGFzIERCO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRGF0YWJhc2UgZmV0Y2ggZXJyb3I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHByb2plY3RzOiBbXSwgbWVzc2FnZXM6IFtdLCBwcm9maWxlOiB7fSB9O1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2F2ZURCKGRhdGE6IERCKSB7XHJcbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VBZG1pblxyXG4gICAgLmZyb20oJ3NldHRpbmdzJylcclxuICAgIC51cHNlcnQoeyBpZDogJ21haW5fY29uZmlnJywgY29udGVudDogZGF0YSB9LCB7IG9uQ29uZmxpY3Q6ICdpZCcgfSk7XHJcbiAgXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRGF0YWJhc2Ugc2F2ZSBlcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gdXBsb2FkRmlsZShmaWxlOiBGaWxlLCBmb2xkZXI6IHN0cmluZykge1xyXG4gICAgaWYgKCFmaWxlIHx8IGZpbGUuc2l6ZSA9PT0gMCkgcmV0dXJuIG51bGw7XHJcbiAgICBcclxuICAgIGNvbnN0IGZpbGVFeHQgPSBmaWxlLm5hbWUuc3BsaXQoJy4nKS5wb3AoKTtcclxuICAgIGNvbnN0IGZpbGVOYW1lID0gYCR7Zm9sZGVyfS8ke0RhdGUubm93KCl9LiR7ZmlsZUV4dH1gO1xyXG4gICAgY29uc3QgYnVmZmVyID0gYXdhaXQgZmlsZS5hcnJheUJ1ZmZlcigpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlQWRtaW5cclxuICAgICAgICAuc3RvcmFnZVxyXG4gICAgICAgIC5mcm9tKEJVQ0tFVF9OQU1FKVxyXG4gICAgICAgIC51cGxvYWQoZmlsZU5hbWUsIGJ1ZmZlciwge1xyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmlsZS50eXBlLFxyXG4gICAgICAgICAgICB1cHNlcnQ6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmlsZSB1cGxvYWQgZXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IHsgcHVibGljVXJsIH0gfSA9IHN1cGFiYXNlQWRtaW5cclxuICAgICAgICAuc3RvcmFnZVxyXG4gICAgICAgIC5mcm9tKEJVQ0tFVF9OQU1FKVxyXG4gICAgICAgIC5nZXRQdWJsaWNVcmwoZmlsZU5hbWUpO1xyXG5cclxuICAgIHJldHVybiBwdWJsaWNVcmw7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcclxuICBjb25zdCBkYiA9IGF3YWl0IGdldERCKCk7XHJcbiAgcmV0dXJuIGRiLnByb2plY3RzIHx8IFtdO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZmlsZSgpIHtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICAgIHJldHVybiBkYi5wcm9maWxlIHx8IHt9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SGVybygpIHtcclxuICBjb25zdCBkYiA9IGF3YWl0IGdldERCKCk7XHJcbiAgcmV0dXJuIGRiLmhlcm8gfHwgeyBncmVldGluZzogXCJIaSBhbGwuIEkgYW1cIiwgbmFtZTogXCJBaW1hbCBEZXZcIiwgcm9sZTogXCI+IEZyb250ZW5kIEVuZ2luZWVyXCIsIGdpdGh1Ykxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2V4YW1wbGVcIiB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSGVybyhmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBkYiA9IGF3YWl0IGdldERCKCk7XHJcbiAgZGIuaGVybyA9IHtcclxuICAgIGdyZWV0aW5nOiBmb3JtRGF0YS5nZXQoJ2dyZWV0aW5nJykgYXMgc3RyaW5nLFxyXG4gICAgbmFtZTogZm9ybURhdGEuZ2V0KCduYW1lJykgYXMgc3RyaW5nLFxyXG4gICAgcm9sZTogZm9ybURhdGEuZ2V0KCdyb2xlJykgYXMgc3RyaW5nLFxyXG4gICAgZ2l0aHViTGluazogZm9ybURhdGEuZ2V0KCdnaXRodWJMaW5rJykgYXMgc3RyaW5nXHJcbiAgfTtcclxuICBhd2FpdCBzYXZlREIoZGIpO1xyXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbnRhY3QoKSB7XHJcbiAgY29uc3QgZGIgPSBhd2FpdCBnZXREQigpO1xyXG4gIHJldHVybiBkYi5jb250YWN0IHx8IHsgZW1haWw6IFwidXNlckBnbWFpbC5jb21cIiwgcGhvbmU6IFwiKzM1OTgyNDYzNTlcIiB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ29udGFjdChmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBkYiA9IGF3YWl0IGdldERCKCk7XHJcbiAgZGIuY29udGFjdCA9IHtcclxuICAgIGVtYWlsOiBmb3JtRGF0YS5nZXQoJ2VtYWlsJykgYXMgc3RyaW5nLFxyXG4gICAgcGhvbmU6IGZvcm1EYXRhLmdldCgncGhvbmUnKSBhcyBzdHJpbmdcclxuICB9O1xyXG4gIGF3YWl0IHNhdmVEQihkYik7XHJcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkUHJvamVjdChmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBkYiA9IGF3YWl0IGdldERCKCk7XHJcbiAgXHJcbiAgbGV0IGltYWdlUGF0aCA9IFwiL2ltYWdlcy9wcm9qZWN0MS5qcGdcIjsgLy8gRGVmYXVsdFxyXG4gIGNvbnN0IGltYWdlRmlsZSA9IGZvcm1EYXRhLmdldCgnaW1hZ2UnKSBhcyBGaWxlO1xyXG4gIGNvbnN0IHVwbG9hZGVkVXJsID0gYXdhaXQgdXBsb2FkRmlsZShpbWFnZUZpbGUsICdwcm9qZWN0cycpO1xyXG4gIGlmICh1cGxvYWRlZFVybCkgaW1hZ2VQYXRoID0gdXBsb2FkZWRVcmw7XHJcblxyXG4gIGNvbnN0IG5ld1Byb2plY3Q6IFByb2plY3QgPSB7XHJcbiAgICBpZDogRGF0ZS5ub3coKSxcclxuICAgIHRpdGxlOiBmb3JtRGF0YS5nZXQoJ3RpdGxlJykgYXMgc3RyaW5nLFxyXG4gICAgZGVzY3JpcHRpb246IGZvcm1EYXRhLmdldCgnZGVzY3JpcHRpb24nKSBhcyBzdHJpbmcsXHJcbiAgICB0ZWNoOiAoZm9ybURhdGEuZ2V0KCd0ZWNoJykgYXMgc3RyaW5nKS5zcGxpdCgnLCcpLm1hcCh0ID0+IHQudHJpbSgpKSxcclxuICAgIGltYWdlOiBpbWFnZVBhdGgsIFxyXG4gICAgbGluazogZm9ybURhdGEuZ2V0KCdsaW5rJykgYXMgc3RyaW5nXHJcbiAgfTtcclxuICBcclxuICBpZiAoIWRiLnByb2plY3RzKSBkYi5wcm9qZWN0cyA9IFtdO1xyXG4gIGRiLnByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XHJcbiAgYXdhaXQgc2F2ZURCKGRiKTtcclxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRNZXNzYWdlKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBnZXREQigpO1xyXG4gICAgXHJcbiAgICBjb25zdCBuZXdNZXNzYWdlOiBNZXNzYWdlID0ge1xyXG4gICAgICBpZDogRGF0ZS5ub3coKSxcclxuICAgICAgbmFtZTogZm9ybURhdGEuZ2V0KCduYW1lJykgYXMgc3RyaW5nLFxyXG4gICAgICBlbWFpbDogZm9ybURhdGEuZ2V0KCdlbWFpbCcpIGFzIHN0cmluZyxcclxuICAgICAgbWVzc2FnZTogZm9ybURhdGEuZ2V0KCdtZXNzYWdlJykgYXMgc3RyaW5nLFxyXG4gICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcclxuICAgIH07XHJcbiAgICBcclxuICAgIGlmICghZGIubWVzc2FnZXMpIGRiLm1lc3NhZ2VzID0gW107XHJcbiAgICBkYi5tZXNzYWdlcy5wdXNoKG5ld01lc3NhZ2UpO1xyXG4gICAgYXdhaXQgc2F2ZURCKGRiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoaWQ6IG51bWJlcikge1xyXG4gIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICBkYi5wcm9qZWN0cyA9IGRiLnByb2plY3RzLmZpbHRlcihwID0+IHAuaWQgIT09IGlkKTtcclxuICBhd2FpdCBzYXZlREIoZGIpO1xyXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2plY3QoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgZGIgPSBhd2FpdCBnZXREQigpO1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGZvcm1EYXRhLmdldCgnaWQnKSk7XHJcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gZGIucHJvamVjdHMuZmluZEluZGV4KHAgPT4gcC5pZCA9PT0gaWQpO1xyXG4gIFxyXG4gIGlmIChwcm9qZWN0SW5kZXggPiAtMSkge1xyXG4gICAgICBsZXQgaW1hZ2VQYXRoID0gZGIucHJvamVjdHNbcHJvamVjdEluZGV4XS5pbWFnZTtcclxuICAgICAgY29uc3QgaW1hZ2VGaWxlID0gZm9ybURhdGEuZ2V0KCdpbWFnZScpIGFzIEZpbGU7XHJcbiAgICAgIGNvbnN0IHVwbG9hZGVkVXJsID0gYXdhaXQgdXBsb2FkRmlsZShpbWFnZUZpbGUsICdwcm9qZWN0cycpO1xyXG4gICAgICBpZiAodXBsb2FkZWRVcmwpIGltYWdlUGF0aCA9IHVwbG9hZGVkVXJsO1xyXG5cclxuICAgICAgZGIucHJvamVjdHNbcHJvamVjdEluZGV4XSA9IHtcclxuICAgICAgICAuLi5kYi5wcm9qZWN0c1twcm9qZWN0SW5kZXhdLFxyXG4gICAgICAgIHRpdGxlOiBmb3JtRGF0YS5nZXQoJ3RpdGxlJykgYXMgc3RyaW5nLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBmb3JtRGF0YS5nZXQoJ2Rlc2NyaXB0aW9uJykgYXMgc3RyaW5nLFxyXG4gICAgICAgIHRlY2g6IChmb3JtRGF0YS5nZXQoJ3RlY2gnKSBhcyBzdHJpbmcpLnNwbGl0KCcsJykubWFwKHQgPT4gdC50cmltKCkpLFxyXG4gICAgICAgIGxpbms6IGZvcm1EYXRhLmdldCgnbGluaycpIGFzIHN0cmluZyxcclxuICAgICAgICBpbWFnZTogaW1hZ2VQYXRoXHJcbiAgICAgIH07XHJcbiAgICAgIGF3YWl0IHNhdmVEQihkYik7XHJcbiAgfVxyXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENlcnRpZmljYXRlcygpIHtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICAgIHJldHVybiBkYi5jZXJ0aWZpY2F0ZXMgfHwgW107XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRDZXJ0aWZpY2F0ZShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICAgIFxyXG4gICAgbGV0IGltYWdlUGF0aCA9IFwiXCI7XHJcbiAgICBjb25zdCBpbWFnZUZpbGUgPSBmb3JtRGF0YS5nZXQoJ2ltYWdlJykgYXMgRmlsZTtcclxuICAgIGNvbnN0IHVwbG9hZGVkVXJsID0gYXdhaXQgdXBsb2FkRmlsZShpbWFnZUZpbGUsICdjZXJ0aWZpY2F0ZXMnKTtcclxuICAgIGlmICh1cGxvYWRlZFVybCkgaW1hZ2VQYXRoID0gdXBsb2FkZWRVcmw7XHJcblxyXG4gICAgY29uc3QgbmV3Q2VydDogQ2VydGlmaWNhdGUgPSB7XHJcbiAgICAgICAgaWQ6IERhdGUubm93KCksXHJcbiAgICAgICAgbmFtZTogZm9ybURhdGEuZ2V0KCduYW1lJykgYXMgc3RyaW5nLFxyXG4gICAgICAgIGlzc3VlcjogZm9ybURhdGEuZ2V0KCdpc3N1ZXInKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgZGF0ZTogZm9ybURhdGEuZ2V0KCdkYXRlJykgYXMgc3RyaW5nLFxyXG4gICAgICAgIGxpbms6IGZvcm1EYXRhLmdldCgnbGluaycpIGFzIHN0cmluZyxcclxuICAgICAgICBpbWFnZTogaW1hZ2VQYXRoXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBpZiAoIWRiLmNlcnRpZmljYXRlcykgZGIuY2VydGlmaWNhdGVzID0gW107XHJcbiAgICBkYi5jZXJ0aWZpY2F0ZXMucHVzaChuZXdDZXJ0KTtcclxuICAgIGF3YWl0IHNhdmVEQihkYik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDZXJ0aWZpY2F0ZShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICAgIGNvbnN0IGlkID0gTnVtYmVyKGZvcm1EYXRhLmdldCgnaWQnKSk7XHJcbiAgICBcclxuICAgIGlmICghZGIuY2VydGlmaWNhdGVzKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG5cclxuICAgIGNvbnN0IGluZGV4ID0gZGIuY2VydGlmaWNhdGVzLmZpbmRJbmRleChjID0+IGMuaWQgPT09IGlkKTtcclxuICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgbGV0IGltYWdlUGF0aCA9IGRiLmNlcnRpZmljYXRlc1tpbmRleF0uaW1hZ2UgfHwgXCJcIjtcclxuICAgICAgICBjb25zdCBpbWFnZUZpbGUgPSBmb3JtRGF0YS5nZXQoJ2ltYWdlJykgYXMgRmlsZTtcclxuICAgICAgICBjb25zdCB1cGxvYWRlZFVybCA9IGF3YWl0IHVwbG9hZEZpbGUoaW1hZ2VGaWxlLCAnY2VydGlmaWNhdGVzJyk7XHJcbiAgICAgICAgaWYgKHVwbG9hZGVkVXJsKSBpbWFnZVBhdGggPSB1cGxvYWRlZFVybDtcclxuXHJcbiAgICAgICAgZGIuY2VydGlmaWNhdGVzW2luZGV4XSA9IHtcclxuICAgICAgICAgICAgLi4uZGIuY2VydGlmaWNhdGVzW2luZGV4XSxcclxuICAgICAgICAgICAgbmFtZTogZm9ybURhdGEuZ2V0KCduYW1lJykgYXMgc3RyaW5nLFxyXG4gICAgICAgICAgICBpc3N1ZXI6IGZvcm1EYXRhLmdldCgnaXNzdWVyJykgYXMgc3RyaW5nLFxyXG4gICAgICAgICAgICBkYXRlOiBmb3JtRGF0YS5nZXQoJ2RhdGUnKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgICAgIGxpbms6IGZvcm1EYXRhLmdldCgnbGluaycpIGFzIHN0cmluZyxcclxuICAgICAgICAgICAgaW1hZ2U6IGltYWdlUGF0aFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgYXdhaXQgc2F2ZURCKGRiKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNlcnRpZmljYXRlKGlkOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICAgIGlmIChkYi5jZXJ0aWZpY2F0ZXMpIHtcclxuICAgICAgICBkYi5jZXJ0aWZpY2F0ZXMgPSBkYi5jZXJ0aWZpY2F0ZXMuZmlsdGVyKGMgPT4gYy5pZCAhPT0gaWQpO1xyXG4gICAgICAgIGF3YWl0IHNhdmVEQihkYik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGb290ZXIoKSB7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IGdldERCKCk7XHJcbiAgICByZXR1cm4gZGIuZm9vdGVyIHx8IHtcclxuICAgICAgICBnaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuY29tXCIsXHJcbiAgICAgICAgbGlua2VkaW46IFwiaHR0cHM6Ly9saW5rZWRpbi5jb21cIixcclxuICAgICAgICB0d2l0dGVyOiBcImh0dHBzOi8vdHdpdHRlci5jb21cIixcclxuICAgICAgICBlbWFpbDogXCJjb250YWN0QGV4YW1wbGUuY29tXCJcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVGb290ZXIoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IGdldERCKCk7XHJcbiAgICBkYi5mb290ZXIgPSB7XHJcbiAgICAgICAgZ2l0aHViOiBmb3JtRGF0YS5nZXQoJ2dpdGh1YicpIGFzIHN0cmluZyxcclxuICAgICAgICBsaW5rZWRpbjogZm9ybURhdGEuZ2V0KCdsaW5rZWRpbicpIGFzIHN0cmluZyxcclxuICAgICAgICB0d2l0dGVyOiBmb3JtRGF0YS5nZXQoJ3R3aXR0ZXInKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgZW1haWw6IGZvcm1EYXRhLmdldCgnZW1haWwnKSBhcyBzdHJpbmdcclxuICAgIH07XHJcbiAgICBhd2FpdCBzYXZlREIoZGIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWJvdXQoKSB7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IGdldERCKCk7XHJcbiAgICByZXR1cm4gZGIuYWJvdXQgfHwgeyBcclxuICAgICAgICBiaW86IFwiLyoqXFxuICogQWJvdXQgbWVcXG4gKiBJIGhhdmUgNSB5ZWFycyBvZiBleHBlcmllbmNlIGluIHdlYlxcbiAqIGRldmVsb3BtZW50IHNwZWNpYWxpemluZyBpbiBOZXh0LmpzLFxcbiAqIFJlYWN0LCBhbmQgbW9kZXJuIFVJIGxpYnJhcmllcyBsaWtlXFxuICogR1NBUCBhbmQgRnJhbWVyIE1vdGlvbi5cXG4gKlxcbiAqIEkgbG92ZSBzb2x2aW5nIGNvbXBsZXggcHJvYmxlbXMgYW5kXFxuICogY3JlYXRpbmcgaW1tZXJzaXZlIHdlYiBleHBlcmllbmNlcy5cXG4gKi9cIiwgXHJcbiAgICAgICAgaW1hZ2U6IFwiXCIsXHJcbiAgICAgICAgc2tpbGxzOiBbXVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUFib3V0KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBnZXREQigpO1xyXG4gICAgXHJcbiAgICBsZXQgaW1hZ2VQYXRoID0gZGIuYWJvdXQ/LmltYWdlIHx8IFwiXCI7XHJcbiAgICBjb25zdCBpbWFnZUZpbGUgPSBmb3JtRGF0YS5nZXQoJ2ltYWdlJykgYXMgRmlsZTtcclxuICAgIGNvbnN0IHVwbG9hZGVkVXJsID0gYXdhaXQgdXBsb2FkRmlsZShpbWFnZUZpbGUsICdhYm91dCcpO1xyXG4gICAgaWYgKHVwbG9hZGVkVXJsKSBpbWFnZVBhdGggPSB1cGxvYWRlZFVybDtcclxuXHJcbiAgICBkYi5hYm91dCA9IHtcclxuICAgICAgICBiaW86IGZvcm1EYXRhLmdldCgnYmlvJykgYXMgc3RyaW5nLFxyXG4gICAgICAgIGltYWdlOiBpbWFnZVBhdGgsXHJcbiAgICAgICAgc2tpbGxzOiAoZm9ybURhdGEuZ2V0KCdza2lsbHMnKSBhcyBzdHJpbmcgfHwgXCJcIikuc3BsaXQoJywnKS5tYXAocyA9PiBzLnRyaW0oKSkuZmlsdGVyKHMgPT4gcylcclxuICAgIH07XHJcbiAgICBcclxuICAgIGF3YWl0IHNhdmVEQihkYik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeHBlcmllbmNlKCkge1xyXG4gIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICByZXR1cm4gZGIuZXhwZXJpZW5jZSB8fCBbXTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEV4cGVyaWVuY2UoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgZGIgPSBhd2FpdCBnZXREQigpO1xyXG4gIFxyXG4gIGxldCBpY29uUGF0aCA9IFwiXCI7IFxyXG4gIGNvbnN0IGljb25GaWxlID0gZm9ybURhdGEuZ2V0KCdpY29uJykgYXMgRmlsZTtcclxuICBjb25zdCB1cGxvYWRlZFVybCA9IGF3YWl0IHVwbG9hZEZpbGUoaWNvbkZpbGUsICdleHBlcmllbmNlJyk7XHJcbiAgaWYgKHVwbG9hZGVkVXJsKSBpY29uUGF0aCA9IHVwbG9hZGVkVXJsO1xyXG5cclxuICBjb25zdCBuZXdFeHA6IEV4cGVyaWVuY2UgPSB7XHJcbiAgICBpZDogRGF0ZS5ub3coKSxcclxuICAgIGNvbXBhbnk6IGZvcm1EYXRhLmdldCgnY29tcGFueScpIGFzIHN0cmluZyxcclxuICAgIHBvc2l0aW9uOiBmb3JtRGF0YS5nZXQoJ3Bvc2l0aW9uJykgYXMgc3RyaW5nLFxyXG4gICAgZGVzY3JpcHRpb246IGZvcm1EYXRhLmdldCgnZGVzY3JpcHRpb24nKSBhcyBzdHJpbmcsXHJcbiAgICBza2lsbHM6IChmb3JtRGF0YS5nZXQoJ3NraWxscycpIGFzIHN0cmluZykuc3BsaXQoJywnKS5tYXAodCA9PiB0LnRyaW0oKSksXHJcbiAgICBpY29uOiBpY29uUGF0aCxcclxuICAgIHN0YXJ0RGF0ZTogZm9ybURhdGEuZ2V0KCdzdGFydERhdGUnKSBhcyBzdHJpbmcsXHJcbiAgICBlbmREYXRlOiBmb3JtRGF0YS5nZXQoJ2VuZERhdGUnKSBhcyBzdHJpbmdcclxuICB9O1xyXG4gIFxyXG4gIGlmICghZGIuZXhwZXJpZW5jZSkgZGIuZXhwZXJpZW5jZSA9IFtdO1xyXG4gIGRiLmV4cGVyaWVuY2UucHVzaChuZXdFeHApO1xyXG4gIGF3YWl0IHNhdmVEQihkYik7XHJcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRXhwZXJpZW5jZShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBkYiA9IGF3YWl0IGdldERCKCk7XHJcbiAgY29uc3QgaWQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KCdpZCcpKTtcclxuICBcclxuICBpZiAoIWRiLmV4cGVyaWVuY2UpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcblxyXG4gIGNvbnN0IGluZGV4ID0gZGIuZXhwZXJpZW5jZS5maW5kSW5kZXgoZSA9PiBlLmlkID09PSBpZCk7XHJcbiAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICBsZXQgaWNvblBhdGggPSBkYi5leHBlcmllbmNlW2luZGV4XS5pY29uO1xyXG4gICAgICAgIGNvbnN0IGljb25GaWxlID0gZm9ybURhdGEuZ2V0KCdpY29uJykgYXMgRmlsZTtcclxuICAgICAgICBjb25zdCB1cGxvYWRlZFVybCA9IGF3YWl0IHVwbG9hZEZpbGUoaWNvbkZpbGUsICdleHBlcmllbmNlJyk7XHJcbiAgICAgICAgaWYgKHVwbG9hZGVkVXJsKSBpY29uUGF0aCA9IHVwbG9hZGVkVXJsO1xyXG5cclxuICAgICAgZGIuZXhwZXJpZW5jZVtpbmRleF0gPSB7XHJcbiAgICAgICAgLi4uZGIuZXhwZXJpZW5jZVtpbmRleF0sXHJcbiAgICAgICAgY29tcGFueTogZm9ybURhdGEuZ2V0KCdjb21wYW55JykgYXMgc3RyaW5nLFxyXG4gICAgICAgIHBvc2l0aW9uOiBmb3JtRGF0YS5nZXQoJ3Bvc2l0aW9uJykgYXMgc3RyaW5nLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBmb3JtRGF0YS5nZXQoJ2Rlc2NyaXB0aW9uJykgYXMgc3RyaW5nLFxyXG4gICAgICAgIHNraWxsczogKGZvcm1EYXRhLmdldCgnc2tpbGxzJykgYXMgc3RyaW5nKS5zcGxpdCgnLCcpLm1hcCh0ID0+IHQudHJpbSgpKSxcclxuICAgICAgICBzdGFydERhdGU6IGZvcm1EYXRhLmdldCgnc3RhcnREYXRlJykgYXMgc3RyaW5nLFxyXG4gICAgICAgIGVuZERhdGU6IGZvcm1EYXRhLmdldCgnZW5kRGF0ZScpIGFzIHN0cmluZyxcclxuICAgICAgICBpY29uOiBpY29uUGF0aFxyXG4gICAgICB9O1xyXG4gICAgICBhd2FpdCBzYXZlREIoZGIpO1xyXG4gIH1cclxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFeHBlcmllbmNlKGlkOiBudW1iZXIpIHtcclxuICBjb25zdCBkYiA9IGF3YWl0IGdldERCKCk7XHJcbiAgaWYgKGRiLmV4cGVyaWVuY2UpIHtcclxuICAgIGRiLmV4cGVyaWVuY2UgPSBkYi5leHBlcmllbmNlLmZpbHRlcihlID0+IGUuaWQgIT09IGlkKTtcclxuICAgIGF3YWl0IHNhdmVEQihkYik7XHJcbiAgfVxyXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEVkdWNhdGlvbigpIHtcclxuICBjb25zdCBkYiA9IGF3YWl0IGdldERCKCk7XHJcbiAgcmV0dXJuIGRiLmVkdWNhdGlvbiB8fCBbXTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEVkdWNhdGlvbihmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBkYiA9IGF3YWl0IGdldERCKCk7XHJcbiAgXHJcbiAgY29uc3QgbmV3RWR1OiBFZHVjYXRpb24gPSB7XHJcbiAgICBpZDogRGF0ZS5ub3coKSxcclxuICAgIHNjaG9vbDogZm9ybURhdGEuZ2V0KCdzY2hvb2wnKSBhcyBzdHJpbmcsXHJcbiAgICBkZWdyZWU6IGZvcm1EYXRhLmdldCgnZGVncmVlJykgYXMgc3RyaW5nLFxyXG4gICAgc3RhcnREYXRlOiBmb3JtRGF0YS5nZXQoJ3N0YXJ0RGF0ZScpIGFzIHN0cmluZyxcclxuICAgIGVuZERhdGU6IGZvcm1EYXRhLmdldCgnZW5kRGF0ZScpIGFzIHN0cmluZyxcclxuICAgIGRlc2NyaXB0aW9uOiBmb3JtRGF0YS5nZXQoJ2Rlc2NyaXB0aW9uJykgYXMgc3RyaW5nXHJcbiAgfTtcclxuICBcclxuICBpZiAoIWRiLmVkdWNhdGlvbikgZGIuZWR1Y2F0aW9uID0gW107XHJcbiAgZGIuZWR1Y2F0aW9uLnB1c2gobmV3RWR1KTtcclxuICBhd2FpdCBzYXZlREIoZGIpO1xyXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUVkdWNhdGlvbihmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBkYiA9IGF3YWl0IGdldERCKCk7XHJcbiAgY29uc3QgaWQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KCdpZCcpKTtcclxuXHJcbiAgaWYgKCFkYi5lZHVjYXRpb24pIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcblxyXG4gIGNvbnN0IGluZGV4ID0gZGIuZWR1Y2F0aW9uLmZpbmRJbmRleChlID0+IGUuaWQgPT09IGlkKTtcclxuICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgZGIuZWR1Y2F0aW9uW2luZGV4XSA9IHtcclxuICAgICAgLi4uZGIuZWR1Y2F0aW9uW2luZGV4XSxcclxuICAgICAgc2Nob29sOiBmb3JtRGF0YS5nZXQoJ3NjaG9vbCcpIGFzIHN0cmluZyxcclxuICAgICAgZGVncmVlOiBmb3JtRGF0YS5nZXQoJ2RlZ3JlZScpIGFzIHN0cmluZyxcclxuICAgICAgc3RhcnREYXRlOiBmb3JtRGF0YS5nZXQoJ3N0YXJ0RGF0ZScpIGFzIHN0cmluZyxcclxuICAgICAgZW5kRGF0ZTogZm9ybURhdGEuZ2V0KCdlbmREYXRlJykgYXMgc3RyaW5nLFxyXG4gICAgICBkZXNjcmlwdGlvbjogZm9ybURhdGEuZ2V0KCdkZXNjcmlwdGlvbicpIGFzIHN0cmluZ1xyXG4gICAgfTtcclxuICAgIGF3YWl0IHNhdmVEQihkYik7XHJcbiAgfVxyXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUVkdWNhdGlvbihpZDogbnVtYmVyKSB7XHJcbiAgY29uc3QgZGIgPSBhd2FpdCBnZXREQigpO1xyXG4gIGlmIChkYi5lZHVjYXRpb24pIHtcclxuICAgIGRiLmVkdWNhdGlvbiA9IGRiLmVkdWNhdGlvbi5maWx0ZXIoZSA9PiBlLmlkICE9PSBpZCk7XHJcbiAgICBhd2FpdCBzYXZlREIoZGIpO1xyXG4gIH1cclxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJnUkF1VXNCLHdMQUFBIn0=
}),
"[project]/src/components/layout/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/layout/Footer.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$3a3294__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:3a3294 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Footer() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "d53d0e3200870e6cbf75f2e6d92278ea59997951e7446447529b8b9201c36100") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d53d0e3200870e6cbf75f2e6d92278ea59997951e7446447529b8b9201c36100";
    }
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Footer[useEffect()]": ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$3a3294__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getFooter"])().then(setData);
            }
        })["Footer[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
            children: "find me in:"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 35,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const t3 = data?.twitter || "https://twitter.com";
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== t3) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: t3,
            target: "_blank",
            rel: "noopener noreferrer",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialLink,
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[5] = t3;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const t6 = data?.linkedin || "https://linkedin.com";
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    let t8;
    if ($[8] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: t6,
            target: "_blank",
            rel: "noopener noreferrer",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialLink,
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[8] = t6;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] !== data) {
        t9 = data?.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: `mailto:${data.email}`,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialLink,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                size: 18
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Footer.tsx",
                lineNumber: 74,
                columnNumber: 88
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 74,
            columnNumber: 25
        }, this);
        $[10] = data;
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] !== t5 || $[13] !== t8 || $[14] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].left,
            children: [
                t2,
                t5,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 82,
            columnNumber: 11
        }, this);
        $[12] = t5;
        $[13] = t8;
        $[14] = t9;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    const t11 = data?.github || "https://github.com/aimal-dev";
    let t12;
    if ($[16] !== data) {
        t12 = data?.github ? "@" + data.github.split("/").pop() : "@aimal-dev";
        $[16] = data;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 101,
            columnNumber: 11
        }, this);
        $[18] = t12;
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 109,
            columnNumber: 11
        }, this);
        $[20] = t14;
    } else {
        t14 = $[20];
    }
    let t15;
    if ($[21] !== t11 || $[22] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].right,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: t11,
                target: "_blank",
                rel: "noopener noreferrer",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].githubLink,
                children: [
                    t13,
                    t14
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Footer.tsx",
                lineNumber: 116,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 116,
            columnNumber: 11
        }, this);
        $[21] = t11;
        $[22] = t13;
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    let t16;
    if ($[24] !== t10 || $[25] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
            children: [
                t10,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 125,
            columnNumber: 11
        }, this);
        $[24] = t10;
        $[25] = t15;
        $[26] = t16;
    } else {
        t16 = $[26];
    }
    return t16;
}
_s(Footer, "fQZRxy/+nAZ7NLS1X4dVhrlp8Go=");
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/ChatBot.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bot": "ChatBot-module-scss-module__jJM7bW__bot",
  "chatWindow": "ChatBot-module-scss-module__jJM7bW__chatWindow",
  "closeBtn": "ChatBot-module-scss-module__jJM7bW__closeBtn",
  "container": "ChatBot-module-scss-module__jJM7bW__container",
  "fab": "ChatBot-module-scss-module__jJM7bW__fab",
  "header": "ChatBot-module-scss-module__jJM7bW__header",
  "hidden": "ChatBot-module-scss-module__jJM7bW__hidden",
  "input": "ChatBot-module-scss-module__jJM7bW__input",
  "inputArea": "ChatBot-module-scss-module__jJM7bW__inputArea",
  "message": "ChatBot-module-scss-module__jJM7bW__message",
  "messages": "ChatBot-module-scss-module__jJM7bW__messages",
  "sendBtn": "ChatBot-module-scss-module__jJM7bW__sendBtn",
  "title": "ChatBot-module-scss-module__jJM7bW__title",
  "user": "ChatBot-module-scss-module__jJM7bW__user",
});
}),
"[project]/src/components/ui/ChatBot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatBot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ChatBot$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ui/ChatBot.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ChatBot() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "2ccdf5f34b0f37dc76c4f48dc205209ff48b57c5110d7c22f78a2ee3b8cfe72e") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2ccdf5f34b0f37dc76c4f48dc205209ff48b57c5110d7c22f78a2ee3b8cfe72e";
    }
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                role: "bot",
                text: "Hi! I am Alex's AI Assistant. How can I help you today?"
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chatWindowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[2] !== isOpen) {
        t1 = ({
            "ChatBot[toggleChat]": ()=>{
                setIsOpen(!isOpen);
            }
        })["ChatBot[toggleChat]"];
        $[2] = isOpen;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const toggleChat = t1;
    let t2;
    let t3;
    if ($[4] !== isOpen) {
        t2 = ({
            "ChatBot[useGSAP()]": ()=>{
                if (isOpen) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(chatWindowRef.current, {
                        opacity: 0,
                        y: 20,
                        scale: 0.95
                    }, {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.3,
                        ease: "back.out(1.7)"
                    });
                }
            }
        })["ChatBot[useGSAP()]"];
        t3 = [
            isOpen
        ];
        $[4] = isOpen;
        $[5] = t2;
        $[6] = t3;
    } else {
        t2 = $[5];
        t3 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])(t2, t3);
    let t4;
    if ($[7] !== inputValue) {
        t4 = ({
            "ChatBot[handleSend]": ()=>{
                if (!inputValue.trim()) {
                    return;
                }
                setMessages({
                    "ChatBot[handleSend > setMessages()]": (prev)=>[
                            ...prev,
                            {
                                role: "user",
                                text: inputValue
                            }
                        ]
                }["ChatBot[handleSend > setMessages()]"]);
                const userText = inputValue.toLowerCase();
                setInputValue("");
                setTimeout({
                    "ChatBot[handleSend > setTimeout()]": ()=>{
                        let botResponse = "I'm not sure about that. Try asking about 'skills', 'projects', or 'contact'.";
                        if (userText.includes("hello") || userText.includes("hi")) {
                            botResponse = "Hello! \uD83D\uDC4B";
                        } else {
                            if (userText.includes("skill") || userText.includes("stack")) {
                                botResponse = "I work with React, Next.js, GSAP, TypeScript, and Node.js. \uD83D\uDE80";
                            } else {
                                if (userText.includes("project") || userText.includes("work")) {
                                    botResponse = "You can check out my projects in the _projects tab! I have built dashboards, e-commerce sites, and more.";
                                } else {
                                    if (userText.includes("contact") || userText.includes("email")) {
                                        botResponse = "You can reach me at user@gmail.com or use the contact form.";
                                    } else {
                                        if (userText.includes("experience")) {
                                            botResponse = "I have 5 years of experience in frontend development.";
                                        }
                                    }
                                }
                            }
                        }
                        setMessages({
                            "ChatBot[handleSend > setTimeout() > setMessages()]": (prev_0)=>[
                                    ...prev_0,
                                    {
                                        role: "bot",
                                        text: botResponse
                                    }
                                ]
                        }["ChatBot[handleSend > setTimeout() > setMessages()]"]);
                    }
                }["ChatBot[handleSend > setTimeout()]"], 600);
            }
        })["ChatBot[handleSend]"];
        $[7] = inputValue;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const handleSend = t4;
    let t5;
    if ($[9] !== handleSend || $[10] !== inputValue || $[11] !== isOpen || $[12] !== messages || $[13] !== toggleChat) {
        t5 = isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ChatBot$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chatWindow,
            ref: chatWindowRef,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ChatBot$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ChatBot$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/ChatBot.tsx",
                                    lineNumber: 129,
                                    columnNumber: 136
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "AI Assistant"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/ChatBot.tsx",
                                    lineNumber: 129,
                                    columnNumber: 153
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/ChatBot.tsx",
                            lineNumber: 129,
                            columnNumber: 106
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: toggleChat,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ChatBot$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeBtn,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/ChatBot.tsx",
                                lineNumber: 129,
                                columnNumber: 241
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/ChatBot.tsx",
                            lineNumber: 129,
                            columnNumber: 184
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/ChatBot.tsx",
                    lineNumber: 129,
                    columnNumber: 75
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ChatBot$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messages,
                    children: messages.map(_ChatBotMessagesMap)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/ChatBot.tsx",
                    lineNumber: 129,
                    columnNumber: 271
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ChatBot$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputArea,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: inputValue,
                            onChange: {
                                "ChatBot[<input>.onChange]": (e)=>setInputValue(e.target.value)
                            }["ChatBot[<input>.onChange]"],
                            onKeyDown: {
                                "ChatBot[<input>.onKeyDown]": (e_0)=>e_0.key === "Enter" && handleSend()
                            }["ChatBot[<input>.onKeyDown]"],
                            placeholder: "Ask me anything...",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ChatBot$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/ChatBot.tsx",
                            lineNumber: 129,
                            columnNumber: 379
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSend,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ChatBot$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sendBtn,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/ChatBot.tsx",
                                lineNumber: 133,
                                columnNumber: 158
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/ChatBot.tsx",
                            lineNumber: 133,
                            columnNumber: 102
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/ChatBot.tsx",
                    lineNumber: 129,
                    columnNumber: 345
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/ChatBot.tsx",
            lineNumber: 129,
            columnNumber: 20
        }, this);
        $[9] = handleSend;
        $[10] = inputValue;
        $[11] = isOpen;
        $[12] = messages;
        $[13] = toggleChat;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    const t6 = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ChatBot$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fab} ${isOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ChatBot$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hidden : ""}`;
    let t7;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
            size: 24
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ChatBot.tsx",
            lineNumber: 146,
            columnNumber: 10
        }, this);
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== t6 || $[17] !== toggleChat) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t6,
            onClick: toggleChat,
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ChatBot.tsx",
            lineNumber: 153,
            columnNumber: 10
        }, this);
        $[16] = t6;
        $[17] = toggleChat;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== t5 || $[20] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ChatBot$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            ref: containerRef,
            children: [
                t5,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/ChatBot.tsx",
            lineNumber: 162,
            columnNumber: 10
        }, this);
        $[19] = t5;
        $[20] = t8;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    return t9;
}
_s(ChatBot, "n+tdT3Hovhc5D/C0vH1qxhPRedk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = ChatBot;
function _ChatBotMessagesMap(m, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ChatBot$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].message} ${m.role === "user" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ChatBot$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].user : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ChatBot$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bot}`,
        children: m.text
    }, i, false, {
        fileName: "[project]/src/components/ui/ChatBot.tsx",
        lineNumber: 172,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ChatBot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_a4e67f48._.js.map