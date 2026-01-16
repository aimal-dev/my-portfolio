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
"[project]/src/lib/data:f55c8e [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IHN1cGFiYXNlQWRtaW4gfSBmcm9tICcuL3N1cGFiYXNlJztcclxuXHJcbi8vIFN0b3JhZ2UgQnVja2V0IE5hbWUgaW4gU3VwYWJhc2VcclxuY29uc3QgQlVDS0VUX05BTUUgPSAncG9ydGZvbGlvLWFzc2V0cyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb2plY3Qge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIHRlY2g6IHN0cmluZ1tdO1xyXG4gIGltYWdlOiBzdHJpbmc7XHJcbiAgbGluazogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2Uge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIGRhdGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIZXJvRGF0YSB7XHJcbiAgICBncmVldGluZzogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgcm9sZTogc3RyaW5nO1xyXG4gICAgZ2l0aHViTGluazogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbnRhY3REYXRhIHtcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBwaG9uZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV4cGVyaWVuY2Uge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgY29tcGFueTogc3RyaW5nO1xyXG4gIHBvc2l0aW9uOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBza2lsbHM6IHN0cmluZ1tdO1xyXG4gIGljb246IHN0cmluZztcclxuICBzdGFydERhdGU6IHN0cmluZztcclxuICBlbmREYXRlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRWR1Y2F0aW9uIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIHNjaG9vbDogc3RyaW5nO1xyXG4gIGRlZ3JlZTogc3RyaW5nO1xyXG4gIHN0YXJ0RGF0ZTogc3RyaW5nO1xyXG4gIGVuZERhdGU6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENlcnRpZmljYXRlIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBpc3N1ZXI6IHN0cmluZztcclxuICAgIGRhdGU6IHN0cmluZztcclxuICAgIGxpbms6IHN0cmluZztcclxuICAgIGltYWdlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWJvdXREYXRhIHtcclxuICAgIGJpbzogc3RyaW5nO1xyXG4gICAgaW1hZ2U6IHN0cmluZztcclxuICAgIHNraWxsczogc3RyaW5nW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRm9vdGVyRGF0YSB7XHJcbiAgICBnaXRodWI6IHN0cmluZztcclxuICAgIGxpbmtlZGluOiBzdHJpbmc7XHJcbiAgICB0d2l0dGVyOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgREIge1xyXG4gIHByb2plY3RzOiBQcm9qZWN0W107XHJcbiAgbWVzc2FnZXM6IE1lc3NhZ2VbXTtcclxuICBwcm9maWxlPzogdW5rbm93bjtcclxuICBoZXJvPzogSGVyb0RhdGE7XHJcbiAgY29udGFjdD86IENvbnRhY3REYXRhO1xyXG4gIGFib3V0PzogQWJvdXREYXRhO1xyXG4gIGV4cGVyaWVuY2U/OiBFeHBlcmllbmNlW107XHJcbiAgZWR1Y2F0aW9uPzogRWR1Y2F0aW9uW107XHJcbiAgY2VydGlmaWNhdGVzPzogQ2VydGlmaWNhdGVbXTtcclxuICBmb290ZXI/OiBGb290ZXJEYXRhO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXREQigpOiBQcm9taXNlPERCPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlQWRtaW5cclxuICAgICAgLmZyb20oJ3NldHRpbmdzJylcclxuICAgICAgLnNlbGVjdCgnY29udGVudCcpXHJcbiAgICAgIC5lcSgnaWQnLCAnbWFpbl9jb25maWcnKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKGVycm9yIHx8ICFkYXRhKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIkZhbGxpbmcgYmFjayB0byBlbXB0eSBEQiBzdHJ1Y3R1cmU6XCIsIGVycm9yPy5tZXNzYWdlKTtcclxuICAgICAgcmV0dXJuIHsgcHJvamVjdHM6IFtdLCBtZXNzYWdlczogW10sIHByb2ZpbGU6IHt9IH07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBkYXRhLmNvbnRlbnQgYXMgREI7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJEYXRhYmFzZSBmZXRjaCBlcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgcHJvamVjdHM6IFtdLCBtZXNzYWdlczogW10sIHByb2ZpbGU6IHt9IH07XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzYXZlREIoZGF0YTogREIpIHtcclxuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUFkbWluXHJcbiAgICAuZnJvbSgnc2V0dGluZ3MnKVxyXG4gICAgLnVwc2VydCh7IGlkOiAnbWFpbl9jb25maWcnLCBjb250ZW50OiBkYXRhIH0sIHsgb25Db25mbGljdDogJ2lkJyB9KTtcclxuICBcclxuICBpZiAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJEYXRhYmFzZSBzYXZlIGVycm9yOlwiLCBlcnJvcik7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiB1cGxvYWRGaWxlKGZpbGU6IEZpbGUsIGZvbGRlcjogc3RyaW5nKSB7XHJcbiAgICBpZiAoIWZpbGUgfHwgZmlsZS5zaXplID09PSAwKSByZXR1cm4gbnVsbDtcclxuICAgIFxyXG4gICAgY29uc3QgZmlsZUV4dCA9IGZpbGUubmFtZS5zcGxpdCgnLicpLnBvcCgpO1xyXG4gICAgY29uc3QgZmlsZU5hbWUgPSBgJHtmb2xkZXJ9LyR7RGF0ZS5ub3coKX0uJHtmaWxlRXh0fWA7XHJcbiAgICBjb25zdCBidWZmZXIgPSBhd2FpdCBmaWxlLmFycmF5QnVmZmVyKCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VBZG1pblxyXG4gICAgICAgIC5zdG9yYWdlXHJcbiAgICAgICAgLmZyb20oQlVDS0VUX05BTUUpXHJcbiAgICAgICAgLnVwbG9hZChmaWxlTmFtZSwgYnVmZmVyLCB7XHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmaWxlLnR5cGUsXHJcbiAgICAgICAgICAgIHVwc2VydDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGaWxlIHVwbG9hZCBlcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogeyBwdWJsaWNVcmwgfSB9ID0gc3VwYWJhc2VBZG1pblxyXG4gICAgICAgIC5zdG9yYWdlXHJcbiAgICAgICAgLmZyb20oQlVDS0VUX05BTUUpXHJcbiAgICAgICAgLmdldFB1YmxpY1VybChmaWxlTmFtZSk7XHJcblxyXG4gICAgcmV0dXJuIHB1YmxpY1VybDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xyXG4gIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICByZXR1cm4gZGIucHJvamVjdHMgfHwgW107XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9maWxlKCkge1xyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBnZXREQigpO1xyXG4gICAgcmV0dXJuIGRiLnByb2ZpbGUgfHwge307XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIZXJvKCkge1xyXG4gIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICByZXR1cm4gZGIuaGVybyB8fCB7IGdyZWV0aW5nOiBcIkhpIGFsbC4gSSBhbVwiLCBuYW1lOiBcIkFpbWFsIERldlwiLCByb2xlOiBcIj4gRnJvbnRlbmQgRW5naW5lZXJcIiwgZ2l0aHViTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vZXhhbXBsZVwiIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVIZXJvKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICBkYi5oZXJvID0ge1xyXG4gICAgZ3JlZXRpbmc6IGZvcm1EYXRhLmdldCgnZ3JlZXRpbmcnKSBhcyBzdHJpbmcsXHJcbiAgICBuYW1lOiBmb3JtRGF0YS5nZXQoJ25hbWUnKSBhcyBzdHJpbmcsXHJcbiAgICByb2xlOiBmb3JtRGF0YS5nZXQoJ3JvbGUnKSBhcyBzdHJpbmcsXHJcbiAgICBnaXRodWJMaW5rOiBmb3JtRGF0YS5nZXQoJ2dpdGh1YkxpbmsnKSBhcyBzdHJpbmdcclxuICB9O1xyXG4gIGF3YWl0IHNhdmVEQihkYik7XHJcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udGFjdCgpIHtcclxuICBjb25zdCBkYiA9IGF3YWl0IGdldERCKCk7XHJcbiAgcmV0dXJuIGRiLmNvbnRhY3QgfHwgeyBlbWFpbDogXCJ1c2VyQGdtYWlsLmNvbVwiLCBwaG9uZTogXCIrMzU5ODI0NjM1OVwiIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDb250YWN0KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICBkYi5jb250YWN0ID0ge1xyXG4gICAgZW1haWw6IGZvcm1EYXRhLmdldCgnZW1haWwnKSBhcyBzdHJpbmcsXHJcbiAgICBwaG9uZTogZm9ybURhdGEuZ2V0KCdwaG9uZScpIGFzIHN0cmluZ1xyXG4gIH07XHJcbiAgYXdhaXQgc2F2ZURCKGRiKTtcclxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRQcm9qZWN0KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICBcclxuICBsZXQgaW1hZ2VQYXRoID0gXCIvaW1hZ2VzL3Byb2plY3QxLmpwZ1wiOyAvLyBEZWZhdWx0XHJcbiAgY29uc3QgaW1hZ2VGaWxlID0gZm9ybURhdGEuZ2V0KCdpbWFnZScpIGFzIEZpbGU7XHJcbiAgY29uc3QgdXBsb2FkZWRVcmwgPSBhd2FpdCB1cGxvYWRGaWxlKGltYWdlRmlsZSwgJ3Byb2plY3RzJyk7XHJcbiAgaWYgKHVwbG9hZGVkVXJsKSBpbWFnZVBhdGggPSB1cGxvYWRlZFVybDtcclxuXHJcbiAgY29uc3QgbmV3UHJvamVjdDogUHJvamVjdCA9IHtcclxuICAgIGlkOiBEYXRlLm5vdygpLFxyXG4gICAgdGl0bGU6IGZvcm1EYXRhLmdldCgndGl0bGUnKSBhcyBzdHJpbmcsXHJcbiAgICBkZXNjcmlwdGlvbjogZm9ybURhdGEuZ2V0KCdkZXNjcmlwdGlvbicpIGFzIHN0cmluZyxcclxuICAgIHRlY2g6IChmb3JtRGF0YS5nZXQoJ3RlY2gnKSBhcyBzdHJpbmcpLnNwbGl0KCcsJykubWFwKHQgPT4gdC50cmltKCkpLFxyXG4gICAgaW1hZ2U6IGltYWdlUGF0aCwgXHJcbiAgICBsaW5rOiBmb3JtRGF0YS5nZXQoJ2xpbmsnKSBhcyBzdHJpbmdcclxuICB9O1xyXG4gIFxyXG4gIGlmICghZGIucHJvamVjdHMpIGRiLnByb2plY3RzID0gW107XHJcbiAgZGIucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcclxuICBhd2FpdCBzYXZlREIoZGIpO1xyXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZE1lc3NhZ2UoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IGdldERCKCk7XHJcbiAgICBcclxuICAgIGNvbnN0IG5ld01lc3NhZ2U6IE1lc3NhZ2UgPSB7XHJcbiAgICAgIGlkOiBEYXRlLm5vdygpLFxyXG4gICAgICBuYW1lOiBmb3JtRGF0YS5nZXQoJ25hbWUnKSBhcyBzdHJpbmcsXHJcbiAgICAgIGVtYWlsOiBmb3JtRGF0YS5nZXQoJ2VtYWlsJykgYXMgc3RyaW5nLFxyXG4gICAgICBtZXNzYWdlOiBmb3JtRGF0YS5nZXQoJ21lc3NhZ2UnKSBhcyBzdHJpbmcsXHJcbiAgICAgIGRhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgaWYgKCFkYi5tZXNzYWdlcykgZGIubWVzc2FnZXMgPSBbXTtcclxuICAgIGRiLm1lc3NhZ2VzLnB1c2gobmV3TWVzc2FnZSk7XHJcbiAgICBhd2FpdCBzYXZlREIoZGIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChpZDogbnVtYmVyKSB7XHJcbiAgY29uc3QgZGIgPSBhd2FpdCBnZXREQigpO1xyXG4gIGRiLnByb2plY3RzID0gZGIucHJvamVjdHMuZmlsdGVyKHAgPT4gcC5pZCAhPT0gaWQpO1xyXG4gIGF3YWl0IHNhdmVEQihkYik7XHJcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUHJvamVjdChmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBkYiA9IGF3YWl0IGdldERCKCk7XHJcbiAgY29uc3QgaWQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KCdpZCcpKTtcclxuICBjb25zdCBwcm9qZWN0SW5kZXggPSBkYi5wcm9qZWN0cy5maW5kSW5kZXgocCA9PiBwLmlkID09PSBpZCk7XHJcbiAgXHJcbiAgaWYgKHByb2plY3RJbmRleCA+IC0xKSB7XHJcbiAgICAgIGxldCBpbWFnZVBhdGggPSBkYi5wcm9qZWN0c1twcm9qZWN0SW5kZXhdLmltYWdlO1xyXG4gICAgICBjb25zdCBpbWFnZUZpbGUgPSBmb3JtRGF0YS5nZXQoJ2ltYWdlJykgYXMgRmlsZTtcclxuICAgICAgY29uc3QgdXBsb2FkZWRVcmwgPSBhd2FpdCB1cGxvYWRGaWxlKGltYWdlRmlsZSwgJ3Byb2plY3RzJyk7XHJcbiAgICAgIGlmICh1cGxvYWRlZFVybCkgaW1hZ2VQYXRoID0gdXBsb2FkZWRVcmw7XHJcblxyXG4gICAgICBkYi5wcm9qZWN0c1twcm9qZWN0SW5kZXhdID0ge1xyXG4gICAgICAgIC4uLmRiLnByb2plY3RzW3Byb2plY3RJbmRleF0sXHJcbiAgICAgICAgdGl0bGU6IGZvcm1EYXRhLmdldCgndGl0bGUnKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGZvcm1EYXRhLmdldCgnZGVzY3JpcHRpb24nKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgdGVjaDogKGZvcm1EYXRhLmdldCgndGVjaCcpIGFzIHN0cmluZykuc3BsaXQoJywnKS5tYXAodCA9PiB0LnRyaW0oKSksXHJcbiAgICAgICAgbGluazogZm9ybURhdGEuZ2V0KCdsaW5rJykgYXMgc3RyaW5nLFxyXG4gICAgICAgIGltYWdlOiBpbWFnZVBhdGhcclxuICAgICAgfTtcclxuICAgICAgYXdhaXQgc2F2ZURCKGRiKTtcclxuICB9XHJcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2VydGlmaWNhdGVzKCkge1xyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBnZXREQigpO1xyXG4gICAgcmV0dXJuIGRiLmNlcnRpZmljYXRlcyB8fCBbXTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZENlcnRpZmljYXRlKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBnZXREQigpO1xyXG4gICAgXHJcbiAgICBsZXQgaW1hZ2VQYXRoID0gXCJcIjtcclxuICAgIGNvbnN0IGltYWdlRmlsZSA9IGZvcm1EYXRhLmdldCgnaW1hZ2UnKSBhcyBGaWxlO1xyXG4gICAgY29uc3QgdXBsb2FkZWRVcmwgPSBhd2FpdCB1cGxvYWRGaWxlKGltYWdlRmlsZSwgJ2NlcnRpZmljYXRlcycpO1xyXG4gICAgaWYgKHVwbG9hZGVkVXJsKSBpbWFnZVBhdGggPSB1cGxvYWRlZFVybDtcclxuXHJcbiAgICBjb25zdCBuZXdDZXJ0OiBDZXJ0aWZpY2F0ZSA9IHtcclxuICAgICAgICBpZDogRGF0ZS5ub3coKSxcclxuICAgICAgICBuYW1lOiBmb3JtRGF0YS5nZXQoJ25hbWUnKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgaXNzdWVyOiBmb3JtRGF0YS5nZXQoJ2lzc3VlcicpIGFzIHN0cmluZyxcclxuICAgICAgICBkYXRlOiBmb3JtRGF0YS5nZXQoJ2RhdGUnKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgbGluazogZm9ybURhdGEuZ2V0KCdsaW5rJykgYXMgc3RyaW5nLFxyXG4gICAgICAgIGltYWdlOiBpbWFnZVBhdGhcclxuICAgIH07XHJcbiAgICBcclxuICAgIGlmICghZGIuY2VydGlmaWNhdGVzKSBkYi5jZXJ0aWZpY2F0ZXMgPSBbXTtcclxuICAgIGRiLmNlcnRpZmljYXRlcy5wdXNoKG5ld0NlcnQpO1xyXG4gICAgYXdhaXQgc2F2ZURCKGRiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNlcnRpZmljYXRlKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBnZXREQigpO1xyXG4gICAgY29uc3QgaWQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KCdpZCcpKTtcclxuICAgIFxyXG4gICAgaWYgKCFkYi5jZXJ0aWZpY2F0ZXMpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBkYi5jZXJ0aWZpY2F0ZXMuZmluZEluZGV4KGMgPT4gYy5pZCA9PT0gaWQpO1xyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICBsZXQgaW1hZ2VQYXRoID0gZGIuY2VydGlmaWNhdGVzW2luZGV4XS5pbWFnZSB8fCBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGltYWdlRmlsZSA9IGZvcm1EYXRhLmdldCgnaW1hZ2UnKSBhcyBGaWxlO1xyXG4gICAgICAgIGNvbnN0IHVwbG9hZGVkVXJsID0gYXdhaXQgdXBsb2FkRmlsZShpbWFnZUZpbGUsICdjZXJ0aWZpY2F0ZXMnKTtcclxuICAgICAgICBpZiAodXBsb2FkZWRVcmwpIGltYWdlUGF0aCA9IHVwbG9hZGVkVXJsO1xyXG5cclxuICAgICAgICBkYi5jZXJ0aWZpY2F0ZXNbaW5kZXhdID0ge1xyXG4gICAgICAgICAgICAuLi5kYi5jZXJ0aWZpY2F0ZXNbaW5kZXhdLFxyXG4gICAgICAgICAgICBuYW1lOiBmb3JtRGF0YS5nZXQoJ25hbWUnKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgICAgIGlzc3VlcjogZm9ybURhdGEuZ2V0KCdpc3N1ZXInKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgICAgIGRhdGU6IGZvcm1EYXRhLmdldCgnZGF0ZScpIGFzIHN0cmluZyxcclxuICAgICAgICAgICAgbGluazogZm9ybURhdGEuZ2V0KCdsaW5rJykgYXMgc3RyaW5nLFxyXG4gICAgICAgICAgICBpbWFnZTogaW1hZ2VQYXRoXHJcbiAgICAgICAgfTtcclxuICAgICAgICBhd2FpdCBzYXZlREIoZGIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2VydGlmaWNhdGUoaWQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBnZXREQigpO1xyXG4gICAgaWYgKGRiLmNlcnRpZmljYXRlcykge1xyXG4gICAgICAgIGRiLmNlcnRpZmljYXRlcyA9IGRiLmNlcnRpZmljYXRlcy5maWx0ZXIoYyA9PiBjLmlkICE9PSBpZCk7XHJcbiAgICAgICAgYXdhaXQgc2F2ZURCKGRiKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZvb3RlcigpIHtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICAgIHJldHVybiBkYi5mb290ZXIgfHwge1xyXG4gICAgICAgIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb21cIixcclxuICAgICAgICBsaW5rZWRpbjogXCJodHRwczovL2xpbmtlZGluLmNvbVwiLFxyXG4gICAgICAgIHR3aXR0ZXI6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbVwiLFxyXG4gICAgICAgIGVtYWlsOiBcImNvbnRhY3RAZXhhbXBsZS5jb21cIlxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUZvb3Rlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICAgIGRiLmZvb3RlciA9IHtcclxuICAgICAgICBnaXRodWI6IGZvcm1EYXRhLmdldCgnZ2l0aHViJykgYXMgc3RyaW5nLFxyXG4gICAgICAgIGxpbmtlZGluOiBmb3JtRGF0YS5nZXQoJ2xpbmtlZGluJykgYXMgc3RyaW5nLFxyXG4gICAgICAgIHR3aXR0ZXI6IGZvcm1EYXRhLmdldCgndHdpdHRlcicpIGFzIHN0cmluZyxcclxuICAgICAgICBlbWFpbDogZm9ybURhdGEuZ2V0KCdlbWFpbCcpIGFzIHN0cmluZ1xyXG4gICAgfTtcclxuICAgIGF3YWl0IHNhdmVEQihkYik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBYm91dCgpIHtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICAgIHJldHVybiBkYi5hYm91dCB8fCB7IFxyXG4gICAgICAgIGJpbzogXCIvKipcXG4gKiBBYm91dCBtZVxcbiAqIEkgaGF2ZSA1IHllYXJzIG9mIGV4cGVyaWVuY2UgaW4gd2ViXFxuICogZGV2ZWxvcG1lbnQgc3BlY2lhbGl6aW5nIGluIE5leHQuanMsXFxuICogUmVhY3QsIGFuZCBtb2Rlcm4gVUkgbGlicmFyaWVzIGxpa2VcXG4gKiBHU0FQIGFuZCBGcmFtZXIgTW90aW9uLlxcbiAqXFxuICogSSBsb3ZlIHNvbHZpbmcgY29tcGxleCBwcm9ibGVtcyBhbmRcXG4gKiBjcmVhdGluZyBpbW1lcnNpdmUgd2ViIGV4cGVyaWVuY2VzLlxcbiAqL1wiLCBcclxuICAgICAgICBpbWFnZTogXCJcIixcclxuICAgICAgICBza2lsbHM6IFtdXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQWJvdXQoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IGdldERCKCk7XHJcbiAgICBcclxuICAgIGxldCBpbWFnZVBhdGggPSBkYi5hYm91dD8uaW1hZ2UgfHwgXCJcIjtcclxuICAgIGNvbnN0IGltYWdlRmlsZSA9IGZvcm1EYXRhLmdldCgnaW1hZ2UnKSBhcyBGaWxlO1xyXG4gICAgY29uc3QgdXBsb2FkZWRVcmwgPSBhd2FpdCB1cGxvYWRGaWxlKGltYWdlRmlsZSwgJ2Fib3V0Jyk7XHJcbiAgICBpZiAodXBsb2FkZWRVcmwpIGltYWdlUGF0aCA9IHVwbG9hZGVkVXJsO1xyXG5cclxuICAgIGRiLmFib3V0ID0ge1xyXG4gICAgICAgIGJpbzogZm9ybURhdGEuZ2V0KCdiaW8nKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgaW1hZ2U6IGltYWdlUGF0aCxcclxuICAgICAgICBza2lsbHM6IChmb3JtRGF0YS5nZXQoJ3NraWxscycpIGFzIHN0cmluZyB8fCBcIlwiKS5zcGxpdCgnLCcpLm1hcChzID0+IHMudHJpbSgpKS5maWx0ZXIocyA9PiBzKVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgYXdhaXQgc2F2ZURCKGRiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV4cGVyaWVuY2UoKSB7XHJcbiAgY29uc3QgZGIgPSBhd2FpdCBnZXREQigpO1xyXG4gIHJldHVybiBkYi5leHBlcmllbmNlIHx8IFtdO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkRXhwZXJpZW5jZShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBkYiA9IGF3YWl0IGdldERCKCk7XHJcbiAgXHJcbiAgbGV0IGljb25QYXRoID0gXCJcIjsgXHJcbiAgY29uc3QgaWNvbkZpbGUgPSBmb3JtRGF0YS5nZXQoJ2ljb24nKSBhcyBGaWxlO1xyXG4gIGNvbnN0IHVwbG9hZGVkVXJsID0gYXdhaXQgdXBsb2FkRmlsZShpY29uRmlsZSwgJ2V4cGVyaWVuY2UnKTtcclxuICBpZiAodXBsb2FkZWRVcmwpIGljb25QYXRoID0gdXBsb2FkZWRVcmw7XHJcblxyXG4gIGNvbnN0IG5ld0V4cDogRXhwZXJpZW5jZSA9IHtcclxuICAgIGlkOiBEYXRlLm5vdygpLFxyXG4gICAgY29tcGFueTogZm9ybURhdGEuZ2V0KCdjb21wYW55JykgYXMgc3RyaW5nLFxyXG4gICAgcG9zaXRpb246IGZvcm1EYXRhLmdldCgncG9zaXRpb24nKSBhcyBzdHJpbmcsXHJcbiAgICBkZXNjcmlwdGlvbjogZm9ybURhdGEuZ2V0KCdkZXNjcmlwdGlvbicpIGFzIHN0cmluZyxcclxuICAgIHNraWxsczogKGZvcm1EYXRhLmdldCgnc2tpbGxzJykgYXMgc3RyaW5nKS5zcGxpdCgnLCcpLm1hcCh0ID0+IHQudHJpbSgpKSxcclxuICAgIGljb246IGljb25QYXRoLFxyXG4gICAgc3RhcnREYXRlOiBmb3JtRGF0YS5nZXQoJ3N0YXJ0RGF0ZScpIGFzIHN0cmluZyxcclxuICAgIGVuZERhdGU6IGZvcm1EYXRhLmdldCgnZW5kRGF0ZScpIGFzIHN0cmluZ1xyXG4gIH07XHJcbiAgXHJcbiAgaWYgKCFkYi5leHBlcmllbmNlKSBkYi5leHBlcmllbmNlID0gW107XHJcbiAgZGIuZXhwZXJpZW5jZS5wdXNoKG5ld0V4cCk7XHJcbiAgYXdhaXQgc2F2ZURCKGRiKTtcclxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFeHBlcmllbmNlKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoJ2lkJykpO1xyXG4gIFxyXG4gIGlmICghZGIuZXhwZXJpZW5jZSkgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuXHJcbiAgY29uc3QgaW5kZXggPSBkYi5leHBlcmllbmNlLmZpbmRJbmRleChlID0+IGUuaWQgPT09IGlkKTtcclxuICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgIGxldCBpY29uUGF0aCA9IGRiLmV4cGVyaWVuY2VbaW5kZXhdLmljb247XHJcbiAgICAgICAgY29uc3QgaWNvbkZpbGUgPSBmb3JtRGF0YS5nZXQoJ2ljb24nKSBhcyBGaWxlO1xyXG4gICAgICAgIGNvbnN0IHVwbG9hZGVkVXJsID0gYXdhaXQgdXBsb2FkRmlsZShpY29uRmlsZSwgJ2V4cGVyaWVuY2UnKTtcclxuICAgICAgICBpZiAodXBsb2FkZWRVcmwpIGljb25QYXRoID0gdXBsb2FkZWRVcmw7XHJcblxyXG4gICAgICBkYi5leHBlcmllbmNlW2luZGV4XSA9IHtcclxuICAgICAgICAuLi5kYi5leHBlcmllbmNlW2luZGV4XSxcclxuICAgICAgICBjb21wYW55OiBmb3JtRGF0YS5nZXQoJ2NvbXBhbnknKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgcG9zaXRpb246IGZvcm1EYXRhLmdldCgncG9zaXRpb24nKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGZvcm1EYXRhLmdldCgnZGVzY3JpcHRpb24nKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgc2tpbGxzOiAoZm9ybURhdGEuZ2V0KCdza2lsbHMnKSBhcyBzdHJpbmcpLnNwbGl0KCcsJykubWFwKHQgPT4gdC50cmltKCkpLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogZm9ybURhdGEuZ2V0KCdzdGFydERhdGUnKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgZW5kRGF0ZTogZm9ybURhdGEuZ2V0KCdlbmREYXRlJykgYXMgc3RyaW5nLFxyXG4gICAgICAgIGljb246IGljb25QYXRoXHJcbiAgICAgIH07XHJcbiAgICAgIGF3YWl0IHNhdmVEQihkYik7XHJcbiAgfVxyXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUV4cGVyaWVuY2UoaWQ6IG51bWJlcikge1xyXG4gIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICBpZiAoZGIuZXhwZXJpZW5jZSkge1xyXG4gICAgZGIuZXhwZXJpZW5jZSA9IGRiLmV4cGVyaWVuY2UuZmlsdGVyKGUgPT4gZS5pZCAhPT0gaWQpO1xyXG4gICAgYXdhaXQgc2F2ZURCKGRiKTtcclxuICB9XHJcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RWR1Y2F0aW9uKCkge1xyXG4gIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICByZXR1cm4gZGIuZWR1Y2F0aW9uIHx8IFtdO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkRWR1Y2F0aW9uKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICBcclxuICBjb25zdCBuZXdFZHU6IEVkdWNhdGlvbiA9IHtcclxuICAgIGlkOiBEYXRlLm5vdygpLFxyXG4gICAgc2Nob29sOiBmb3JtRGF0YS5nZXQoJ3NjaG9vbCcpIGFzIHN0cmluZyxcclxuICAgIGRlZ3JlZTogZm9ybURhdGEuZ2V0KCdkZWdyZWUnKSBhcyBzdHJpbmcsXHJcbiAgICBzdGFydERhdGU6IGZvcm1EYXRhLmdldCgnc3RhcnREYXRlJykgYXMgc3RyaW5nLFxyXG4gICAgZW5kRGF0ZTogZm9ybURhdGEuZ2V0KCdlbmREYXRlJykgYXMgc3RyaW5nLFxyXG4gICAgZGVzY3JpcHRpb246IGZvcm1EYXRhLmdldCgnZGVzY3JpcHRpb24nKSBhcyBzdHJpbmdcclxuICB9O1xyXG4gIFxyXG4gIGlmICghZGIuZWR1Y2F0aW9uKSBkYi5lZHVjYXRpb24gPSBbXTtcclxuICBkYi5lZHVjYXRpb24ucHVzaChuZXdFZHUpO1xyXG4gIGF3YWl0IHNhdmVEQihkYik7XHJcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRWR1Y2F0aW9uKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoJ2lkJykpO1xyXG5cclxuICBpZiAoIWRiLmVkdWNhdGlvbikgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuXHJcbiAgY29uc3QgaW5kZXggPSBkYi5lZHVjYXRpb24uZmluZEluZGV4KGUgPT4gZS5pZCA9PT0gaWQpO1xyXG4gIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICBkYi5lZHVjYXRpb25baW5kZXhdID0ge1xyXG4gICAgICAuLi5kYi5lZHVjYXRpb25baW5kZXhdLFxyXG4gICAgICBzY2hvb2w6IGZvcm1EYXRhLmdldCgnc2Nob29sJykgYXMgc3RyaW5nLFxyXG4gICAgICBkZWdyZWU6IGZvcm1EYXRhLmdldCgnZGVncmVlJykgYXMgc3RyaW5nLFxyXG4gICAgICBzdGFydERhdGU6IGZvcm1EYXRhLmdldCgnc3RhcnREYXRlJykgYXMgc3RyaW5nLFxyXG4gICAgICBlbmREYXRlOiBmb3JtRGF0YS5nZXQoJ2VuZERhdGUnKSBhcyBzdHJpbmcsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBmb3JtRGF0YS5nZXQoJ2Rlc2NyaXB0aW9uJykgYXMgc3RyaW5nXHJcbiAgICB9O1xyXG4gICAgYXdhaXQgc2F2ZURCKGRiKTtcclxuICB9XHJcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRWR1Y2F0aW9uKGlkOiBudW1iZXIpIHtcclxuICBjb25zdCBkYiA9IGF3YWl0IGdldERCKCk7XHJcbiAgaWYgKGRiLmVkdWNhdGlvbikge1xyXG4gICAgZGIuZWR1Y2F0aW9uID0gZGIuZWR1Y2F0aW9uLmZpbHRlcihlID0+IGUuaWQgIT09IGlkKTtcclxuICAgIGF3YWl0IHNhdmVEQihkYik7XHJcbiAgfVxyXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImdSQXNVc0Isd0xBQUEifQ==
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$f55c8e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:f55c8e [app-client] (ecmascript) <text/javascript>");
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
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$f55c8e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getFooter"])().then(setData);
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

//# sourceMappingURL=src_bdb266b3._.js.map