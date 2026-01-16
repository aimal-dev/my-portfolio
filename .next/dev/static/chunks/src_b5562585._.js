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
"[project]/src/lib/data:db6298 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCBmcyBmcm9tICdmcy9wcm9taXNlcyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5cclxuY29uc3QgREJfUEFUSCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnc3JjJywgJ2RhdGEnLCAnZGIuanNvbicpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9qZWN0IHtcclxuICBpZDogbnVtYmVyO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICB0ZWNoOiBzdHJpbmdbXTtcclxuICBpbWFnZTogc3RyaW5nO1xyXG4gIGxpbms6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICBkYXRlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGVyb0RhdGEge1xyXG4gICAgZ3JlZXRpbmc6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHJvbGU6IHN0cmluZztcclxuICAgIGdpdGh1Ykxpbms6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb250YWN0RGF0YSB7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGhvbmU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFeHBlcmllbmNlIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIGNvbXBhbnk6IHN0cmluZztcclxuICBwb3NpdGlvbjogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgc2tpbGxzOiBzdHJpbmdbXTtcclxuICBpY29uOiBzdHJpbmc7XHJcbiAgc3RhcnREYXRlOiBzdHJpbmc7XHJcbiAgZW5kRGF0ZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVkdWNhdGlvbiB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBzY2hvb2w6IHN0cmluZztcclxuICBkZWdyZWU6IHN0cmluZztcclxuICBzdGFydERhdGU6IHN0cmluZztcclxuICBlbmREYXRlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDZXJ0aWZpY2F0ZSB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgaXNzdWVyOiBzdHJpbmc7XHJcbiAgICBkYXRlOiBzdHJpbmc7XHJcbiAgICBsaW5rOiBzdHJpbmc7XHJcbiAgICBpbWFnZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFib3V0RGF0YSB7XHJcbiAgICBiaW86IHN0cmluZztcclxuICAgIGltYWdlOiBzdHJpbmc7XHJcbiAgICBza2lsbHM6IHN0cmluZ1tdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZvb3RlckRhdGEge1xyXG4gICAgZ2l0aHViOiBzdHJpbmc7XHJcbiAgICBsaW5rZWRpbjogc3RyaW5nO1xyXG4gICAgdHdpdHRlcjogc3RyaW5nO1xyXG4gICAgZW1haWw6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIERCIHtcclxuICBwcm9qZWN0czogUHJvamVjdFtdO1xyXG4gIG1lc3NhZ2VzOiBNZXNzYWdlW107XHJcbiAgcHJvZmlsZT86IHVua25vd247XHJcbiAgaGVybz86IEhlcm9EYXRhO1xyXG4gIGNvbnRhY3Q/OiBDb250YWN0RGF0YTtcclxuICBhYm91dD86IEFib3V0RGF0YTtcclxuICBleHBlcmllbmNlPzogRXhwZXJpZW5jZVtdO1xyXG4gIGVkdWNhdGlvbj86IEVkdWNhdGlvbltdO1xyXG4gIGNlcnRpZmljYXRlcz86IENlcnRpZmljYXRlW107XHJcbiAgZm9vdGVyPzogRm9vdGVyRGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0REIoKTogUHJvbWlzZTxEQj4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZnMucmVhZEZpbGUoREJfUEFUSCwgJ3V0Zi04Jyk7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkRhdGFiYXNlIHJlYWQgZXJyb3I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHByb2plY3RzOiBbXSwgbWVzc2FnZXM6IFtdLCBwcm9maWxlOiB7fSB9O1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2F2ZURCKGRhdGE6IERCKSB7XHJcbiAgYXdhaXQgZnMud3JpdGVGaWxlKERCX1BBVEgsIEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xyXG4gIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICByZXR1cm4gZGIucHJvamVjdHMgfHwgW107XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9maWxlKCkge1xyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBnZXREQigpO1xyXG4gICAgcmV0dXJuIGRiLnByb2ZpbGUgfHwge307XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIZXJvKCkge1xyXG4gIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICByZXR1cm4gZGIuaGVybyB8fCB7IGdyZWV0aW5nOiBcIkhpIGFsbC4gSSBhbVwiLCBuYW1lOiBcIkFsZXggRGV2XCIsIHJvbGU6IFwiPiBGcm9udGVuZCBFbmdpbmVlclwiLCBnaXRodWJMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9leGFtcGxlXCIgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUhlcm8oZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgZGIgPSBhd2FpdCBnZXREQigpO1xyXG4gIGRiLmhlcm8gPSB7XHJcbiAgICBncmVldGluZzogZm9ybURhdGEuZ2V0KCdncmVldGluZycpIGFzIHN0cmluZyxcclxuICAgIG5hbWU6IGZvcm1EYXRhLmdldCgnbmFtZScpIGFzIHN0cmluZyxcclxuICAgIHJvbGU6IGZvcm1EYXRhLmdldCgncm9sZScpIGFzIHN0cmluZyxcclxuICAgIGdpdGh1Ykxpbms6IGZvcm1EYXRhLmdldCgnZ2l0aHViTGluaycpIGFzIHN0cmluZ1xyXG4gIH07XHJcbiAgYXdhaXQgc2F2ZURCKGRiKTtcclxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb250YWN0KCkge1xyXG4gIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICByZXR1cm4gZGIuY29udGFjdCB8fCB7IGVtYWlsOiBcInVzZXJAZ21haWwuY29tXCIsIHBob25lOiBcIiszNTk4MjQ2MzU5XCIgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNvbnRhY3QoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgZGIgPSBhd2FpdCBnZXREQigpO1xyXG4gIGRiLmNvbnRhY3QgPSB7XHJcbiAgICBlbWFpbDogZm9ybURhdGEuZ2V0KCdlbWFpbCcpIGFzIHN0cmluZyxcclxuICAgIHBob25lOiBmb3JtRGF0YS5nZXQoJ3Bob25lJykgYXMgc3RyaW5nXHJcbiAgfTtcclxuICBhd2FpdCBzYXZlREIoZGIpO1xyXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFByb2plY3QoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgZGIgPSBhd2FpdCBnZXREQigpO1xyXG4gIFxyXG4gIGxldCBpbWFnZVBhdGggPSBcIi9pbWFnZXMvcHJvamVjdDEuanBnXCI7IC8vIERlZmF1bHRcclxuICBjb25zdCBpbWFnZUZpbGUgPSBmb3JtRGF0YS5nZXQoJ2ltYWdlJykgYXMgRmlsZTtcclxuICBpZiAoaW1hZ2VGaWxlICYmIGltYWdlRmlsZS5zaXplID4gMCAmJiBpbWFnZUZpbGUubmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20oYXdhaXQgaW1hZ2VGaWxlLmFycmF5QnVmZmVyKCkpO1xyXG4gICAgICBjb25zdCBmaWxlTmFtZSA9IGAke0RhdGUubm93KCl9LSR7aW1hZ2VGaWxlLm5hbWUucmVwbGFjZSgvXFxzL2csICctJyl9YDtcclxuICAgICAgY29uc3QgdXBsb2FkRGlyID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdwdWJsaWMnLCAndXBsb2FkcycpO1xyXG4gICAgICAvLyBFbnN1cmUgZGlyIGV4aXN0c1xyXG4gICAgICB0cnkgeyBhd2FpdCBmcy5hY2Nlc3ModXBsb2FkRGlyKTsgfSBjYXRjaCB7IGF3YWl0IGZzLm1rZGlyKHVwbG9hZERpciwgeyByZWN1cnNpdmU6IHRydWUgfSk7IH1cclxuICAgICAgXHJcbiAgICAgIGF3YWl0IGZzLndyaXRlRmlsZShwYXRoLmpvaW4odXBsb2FkRGlyLCBmaWxlTmFtZSksIGJ1ZmZlcik7XHJcbiAgICAgIGltYWdlUGF0aCA9IGAvdXBsb2Fkcy8ke2ZpbGVOYW1lfWA7XHJcbiAgfVxyXG5cclxuICBjb25zdCBuZXdQcm9qZWN0OiBQcm9qZWN0ID0ge1xyXG4gICAgaWQ6IERhdGUubm93KCksXHJcbiAgICB0aXRsZTogZm9ybURhdGEuZ2V0KCd0aXRsZScpIGFzIHN0cmluZyxcclxuICAgIGRlc2NyaXB0aW9uOiBmb3JtRGF0YS5nZXQoJ2Rlc2NyaXB0aW9uJykgYXMgc3RyaW5nLFxyXG4gICAgdGVjaDogKGZvcm1EYXRhLmdldCgndGVjaCcpIGFzIHN0cmluZykuc3BsaXQoJywnKS5tYXAodCA9PiB0LnRyaW0oKSksXHJcbiAgICBpbWFnZTogaW1hZ2VQYXRoLCBcclxuICAgIGxpbms6IGZvcm1EYXRhLmdldCgnbGluaycpIGFzIHN0cmluZ1xyXG4gIH07XHJcbiAgXHJcbiAgaWYgKCFkYi5wcm9qZWN0cykgZGIucHJvamVjdHMgPSBbXTtcclxuICBkYi5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG4gIGF3YWl0IHNhdmVEQihkYik7XHJcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTWVzc2FnZShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICAgIFxyXG4gICAgY29uc3QgbmV3TWVzc2FnZTogTWVzc2FnZSA9IHtcclxuICAgICAgaWQ6IERhdGUubm93KCksXHJcbiAgICAgIG5hbWU6IGZvcm1EYXRhLmdldCgnbmFtZScpIGFzIHN0cmluZyxcclxuICAgICAgZW1haWw6IGZvcm1EYXRhLmdldCgnZW1haWwnKSBhcyBzdHJpbmcsXHJcbiAgICAgIG1lc3NhZ2U6IGZvcm1EYXRhLmdldCgnbWVzc2FnZScpIGFzIHN0cmluZyxcclxuICAgICAgZGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBpZiAoIWRiLm1lc3NhZ2VzKSBkYi5tZXNzYWdlcyA9IFtdO1xyXG4gICAgZGIubWVzc2FnZXMucHVzaChuZXdNZXNzYWdlKTtcclxuICAgIGF3YWl0IHNhdmVEQihkYik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGlkOiBudW1iZXIpIHtcclxuICBjb25zdCBkYiA9IGF3YWl0IGdldERCKCk7XHJcbiAgZGIucHJvamVjdHMgPSBkYi5wcm9qZWN0cy5maWx0ZXIocCA9PiBwLmlkICE9PSBpZCk7XHJcbiAgYXdhaXQgc2F2ZURCKGRiKTtcclxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoJ2lkJykpO1xyXG4gIGNvbnN0IHByb2plY3RJbmRleCA9IGRiLnByb2plY3RzLmZpbmRJbmRleChwID0+IHAuaWQgPT09IGlkKTtcclxuICBcclxuICBpZiAocHJvamVjdEluZGV4ID4gLTEpIHtcclxuICAgICAgbGV0IGltYWdlUGF0aCA9IGRiLnByb2plY3RzW3Byb2plY3RJbmRleF0uaW1hZ2U7XHJcbiAgICAgIGNvbnN0IGltYWdlRmlsZSA9IGZvcm1EYXRhLmdldCgnaW1hZ2UnKSBhcyBGaWxlO1xyXG4gICAgICBcclxuICAgICAgaWYgKGltYWdlRmlsZSAmJiBpbWFnZUZpbGUuc2l6ZSA+IDAgJiYgaW1hZ2VGaWxlLm5hbWUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICBjb25zdCBidWZmZXIgPSBCdWZmZXIuZnJvbShhd2FpdCBpbWFnZUZpbGUuYXJyYXlCdWZmZXIoKSk7XHJcbiAgICAgICAgICBjb25zdCBmaWxlTmFtZSA9IGAke0RhdGUubm93KCl9LSR7aW1hZ2VGaWxlLm5hbWUucmVwbGFjZSgvXFxzL2csICctJyl9YDtcclxuICAgICAgICAgIGNvbnN0IHVwbG9hZERpciA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncHVibGljJywgJ3VwbG9hZHMnKTtcclxuICAgICAgICAgIHRyeSB7IGF3YWl0IGZzLmFjY2Vzcyh1cGxvYWREaXIpOyB9IGNhdGNoIHsgYXdhaXQgZnMubWtkaXIodXBsb2FkRGlyLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTsgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBhd2FpdCBmcy53cml0ZUZpbGUocGF0aC5qb2luKHVwbG9hZERpciwgZmlsZU5hbWUpLCBidWZmZXIpO1xyXG4gICAgICAgICAgaW1hZ2VQYXRoID0gYC91cGxvYWRzLyR7ZmlsZU5hbWV9YDtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGIucHJvamVjdHNbcHJvamVjdEluZGV4XSA9IHtcclxuICAgICAgICAuLi5kYi5wcm9qZWN0c1twcm9qZWN0SW5kZXhdLFxyXG4gICAgICAgIHRpdGxlOiBmb3JtRGF0YS5nZXQoJ3RpdGxlJykgYXMgc3RyaW5nLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBmb3JtRGF0YS5nZXQoJ2Rlc2NyaXB0aW9uJykgYXMgc3RyaW5nLFxyXG4gICAgICAgIHRlY2g6IChmb3JtRGF0YS5nZXQoJ3RlY2gnKSBhcyBzdHJpbmcpLnNwbGl0KCcsJykubWFwKHQgPT4gdC50cmltKCkpLFxyXG4gICAgICAgIGxpbms6IGZvcm1EYXRhLmdldCgnbGluaycpIGFzIHN0cmluZyxcclxuICAgICAgICBpbWFnZTogaW1hZ2VQYXRoXHJcbiAgICAgIH07XHJcbiAgICAgIGF3YWl0IHNhdmVEQihkYik7XHJcbiAgfVxyXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENlcnRpZmljYXRlcygpIHtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICAgIHJldHVybiBkYi5jZXJ0aWZpY2F0ZXMgfHwgW107XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRDZXJ0aWZpY2F0ZShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICAgIFxyXG4gICAgbGV0IGltYWdlUGF0aCA9IFwiXCI7XHJcbiAgICBjb25zdCBpbWFnZUZpbGUgPSBmb3JtRGF0YS5nZXQoJ2ltYWdlJykgYXMgRmlsZTtcclxuICAgIFxyXG4gICAgaWYgKGltYWdlRmlsZSAmJiBpbWFnZUZpbGUuc2l6ZSA+IDAgJiYgaW1hZ2VGaWxlLm5hbWUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20oYXdhaXQgaW1hZ2VGaWxlLmFycmF5QnVmZmVyKCkpO1xyXG4gICAgICAgIGNvbnN0IGZpbGVOYW1lID0gYGNlcnQtJHtEYXRlLm5vdygpfS0ke2ltYWdlRmlsZS5uYW1lLnJlcGxhY2UoL1xccy9nLCAnLScpfWA7XHJcbiAgICAgICAgY29uc3QgdXBsb2FkRGlyID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdwdWJsaWMnLCAndXBsb2FkcycpO1xyXG4gICAgICAgIHRyeSB7IGF3YWl0IGZzLmFjY2Vzcyh1cGxvYWREaXIpOyB9IGNhdGNoIHsgYXdhaXQgZnMubWtkaXIodXBsb2FkRGlyLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTsgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGF3YWl0IGZzLndyaXRlRmlsZShwYXRoLmpvaW4odXBsb2FkRGlyLCBmaWxlTmFtZSksIGJ1ZmZlcik7XHJcbiAgICAgICAgaW1hZ2VQYXRoID0gYC91cGxvYWRzLyR7ZmlsZU5hbWV9YDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdDZXJ0OiBDZXJ0aWZpY2F0ZSA9IHtcclxuICAgICAgICBpZDogRGF0ZS5ub3coKSxcclxuICAgICAgICBuYW1lOiBmb3JtRGF0YS5nZXQoJ25hbWUnKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgaXNzdWVyOiBmb3JtRGF0YS5nZXQoJ2lzc3VlcicpIGFzIHN0cmluZyxcclxuICAgICAgICBkYXRlOiBmb3JtRGF0YS5nZXQoJ2RhdGUnKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgbGluazogZm9ybURhdGEuZ2V0KCdsaW5rJykgYXMgc3RyaW5nLFxyXG4gICAgICAgIGltYWdlOiBpbWFnZVBhdGhcclxuICAgIH07XHJcbiAgICBcclxuICAgIGlmICghZGIuY2VydGlmaWNhdGVzKSBkYi5jZXJ0aWZpY2F0ZXMgPSBbXTtcclxuICAgIGRiLmNlcnRpZmljYXRlcy5wdXNoKG5ld0NlcnQpO1xyXG4gICAgYXdhaXQgc2F2ZURCKGRiKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNlcnRpZmljYXRlKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBnZXREQigpO1xyXG4gICAgY29uc3QgaWQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KCdpZCcpKTtcclxuICAgIFxyXG4gICAgaWYgKCFkYi5jZXJ0aWZpY2F0ZXMpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBkYi5jZXJ0aWZpY2F0ZXMuZmluZEluZGV4KGMgPT4gYy5pZCA9PT0gaWQpO1xyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICBsZXQgaW1hZ2VQYXRoID0gZGIuY2VydGlmaWNhdGVzW2luZGV4XS5pbWFnZSB8fCBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGltYWdlRmlsZSA9IGZvcm1EYXRhLmdldCgnaW1hZ2UnKSBhcyBGaWxlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChpbWFnZUZpbGUgJiYgaW1hZ2VGaWxlLnNpemUgPiAwICYmIGltYWdlRmlsZS5uYW1lICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBjb25zdCBidWZmZXIgPSBCdWZmZXIuZnJvbShhd2FpdCBpbWFnZUZpbGUuYXJyYXlCdWZmZXIoKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGVOYW1lID0gYGNlcnQtJHtEYXRlLm5vdygpfS0ke2ltYWdlRmlsZS5uYW1lLnJlcGxhY2UoL1xccy9nLCAnLScpfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwbG9hZERpciA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncHVibGljJywgJ3VwbG9hZHMnKTtcclxuICAgICAgICAgICAgdHJ5IHsgYXdhaXQgZnMuYWNjZXNzKHVwbG9hZERpcik7IH0gY2F0Y2ggeyBhd2FpdCBmcy5ta2Rpcih1cGxvYWREaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pOyB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBhd2FpdCBmcy53cml0ZUZpbGUocGF0aC5qb2luKHVwbG9hZERpciwgZmlsZU5hbWUpLCBidWZmZXIpO1xyXG4gICAgICAgICAgICBpbWFnZVBhdGggPSBgL3VwbG9hZHMvJHtmaWxlTmFtZX1gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGIuY2VydGlmaWNhdGVzW2luZGV4XSA9IHtcclxuICAgICAgICAgICAgLi4uZGIuY2VydGlmaWNhdGVzW2luZGV4XSxcclxuICAgICAgICAgICAgbmFtZTogZm9ybURhdGEuZ2V0KCduYW1lJykgYXMgc3RyaW5nLFxyXG4gICAgICAgICAgICBpc3N1ZXI6IGZvcm1EYXRhLmdldCgnaXNzdWVyJykgYXMgc3RyaW5nLFxyXG4gICAgICAgICAgICBkYXRlOiBmb3JtRGF0YS5nZXQoJ2RhdGUnKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgICAgIGxpbms6IGZvcm1EYXRhLmdldCgnbGluaycpIGFzIHN0cmluZyxcclxuICAgICAgICAgICAgaW1hZ2U6IGltYWdlUGF0aFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgYXdhaXQgc2F2ZURCKGRiKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNlcnRpZmljYXRlKGlkOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICAgIGlmIChkYi5jZXJ0aWZpY2F0ZXMpIHtcclxuICAgICAgICBkYi5jZXJ0aWZpY2F0ZXMgPSBkYi5jZXJ0aWZpY2F0ZXMuZmlsdGVyKGMgPT4gYy5pZCAhPT0gaWQpO1xyXG4gICAgICAgIGF3YWl0IHNhdmVEQihkYik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGb290ZXIoKSB7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IGdldERCKCk7XHJcbiAgICByZXR1cm4gZGIuZm9vdGVyIHx8IHtcclxuICAgICAgICBnaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuY29tXCIsXHJcbiAgICAgICAgbGlua2VkaW46IFwiaHR0cHM6Ly9saW5rZWRpbi5jb21cIixcclxuICAgICAgICB0d2l0dGVyOiBcImh0dHBzOi8vdHdpdHRlci5jb21cIixcclxuICAgICAgICBlbWFpbDogXCJjb250YWN0QGV4YW1wbGUuY29tXCJcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVGb290ZXIoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IGdldERCKCk7XHJcbiAgICBkYi5mb290ZXIgPSB7XHJcbiAgICAgICAgZ2l0aHViOiBmb3JtRGF0YS5nZXQoJ2dpdGh1YicpIGFzIHN0cmluZyxcclxuICAgICAgICBsaW5rZWRpbjogZm9ybURhdGEuZ2V0KCdsaW5rZWRpbicpIGFzIHN0cmluZyxcclxuICAgICAgICB0d2l0dGVyOiBmb3JtRGF0YS5nZXQoJ3R3aXR0ZXInKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgZW1haWw6IGZvcm1EYXRhLmdldCgnZW1haWwnKSBhcyBzdHJpbmdcclxuICAgIH07XHJcbiAgICBhd2FpdCBzYXZlREIoZGIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWJvdXQoKSB7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IGdldERCKCk7XHJcbiAgICByZXR1cm4gZGIuYWJvdXQgfHwgeyBcclxuICAgICAgICBiaW86IFwiLyoqXFxuICogQWJvdXQgbWVcXG4gKiBJIGhhdmUgNSB5ZWFycyBvZiBleHBlcmllbmNlIGluIHdlYlxcbiAqIGRldmVsb3BtZW50IHNwZWNpYWxpemluZyBpbiBOZXh0LmpzLFxcbiAqIFJlYWN0LCBhbmQgbW9kZXJuIFVJIGxpYnJhcmllcyBsaWtlXFxuICogR1NBUCBhbmQgRnJhbWVyIE1vdGlvbi5cXG4gKlxcbiAqIEkgbG92ZSBzb2x2aW5nIGNvbXBsZXggcHJvYmxlbXMgYW5kXFxuICogY3JlYXRpbmcgaW1tZXJzaXZlIHdlYiBleHBlcmllbmNlcy5cXG4gKi9cIiwgXHJcbiAgICAgICAgaW1hZ2U6IFwiXCIsXHJcbiAgICAgICAgc2tpbGxzOiBbXVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUFib3V0KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBnZXREQigpO1xyXG4gICAgXHJcbiAgICBsZXQgaW1hZ2VQYXRoID0gZGIuYWJvdXQ/LmltYWdlIHx8IFwiXCI7XHJcbiAgICBjb25zdCBpbWFnZUZpbGUgPSBmb3JtRGF0YS5nZXQoJ2ltYWdlJykgYXMgRmlsZTtcclxuICAgIFxyXG4gICAgaWYgKGltYWdlRmlsZSAmJiBpbWFnZUZpbGUuc2l6ZSA+IDAgJiYgaW1hZ2VGaWxlLm5hbWUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20oYXdhaXQgaW1hZ2VGaWxlLmFycmF5QnVmZmVyKCkpO1xyXG4gICAgICAgIGNvbnN0IGZpbGVOYW1lID0gYGFib3V0LSR7RGF0ZS5ub3coKX0tJHtpbWFnZUZpbGUubmFtZS5yZXBsYWNlKC9cXHMvZywgJy0nKX1gO1xyXG4gICAgICAgIGNvbnN0IHVwbG9hZERpciA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncHVibGljJywgJ3VwbG9hZHMnKTtcclxuICAgICAgICB0cnkgeyBhd2FpdCBmcy5hY2Nlc3ModXBsb2FkRGlyKTsgfSBjYXRjaCB7IGF3YWl0IGZzLm1rZGlyKHVwbG9hZERpciwgeyByZWN1cnNpdmU6IHRydWUgfSk7IH1cclxuICAgICAgICBcclxuICAgICAgICBhd2FpdCBmcy53cml0ZUZpbGUocGF0aC5qb2luKHVwbG9hZERpciwgZmlsZU5hbWUpLCBidWZmZXIpO1xyXG4gICAgICAgIGltYWdlUGF0aCA9IGAvdXBsb2Fkcy8ke2ZpbGVOYW1lfWA7XHJcbiAgICB9XHJcblxyXG4gICAgZGIuYWJvdXQgPSB7XHJcbiAgICAgICAgYmlvOiBmb3JtRGF0YS5nZXQoJ2JpbycpIGFzIHN0cmluZyxcclxuICAgICAgICBpbWFnZTogaW1hZ2VQYXRoLFxyXG4gICAgICAgIHNraWxsczogKGZvcm1EYXRhLmdldCgnc2tpbGxzJykgYXMgc3RyaW5nIHx8IFwiXCIpLnNwbGl0KCcsJykubWFwKHMgPT4gcy50cmltKCkpLmZpbHRlcihzID0+IHMpXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBhd2FpdCBzYXZlREIoZGIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhwZXJpZW5jZSgpIHtcclxuICBjb25zdCBkYiA9IGF3YWl0IGdldERCKCk7XHJcbiAgcmV0dXJuIGRiLmV4cGVyaWVuY2UgfHwgW107XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRFeHBlcmllbmNlKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICBcclxuICBsZXQgaWNvblBhdGggPSBcIlwiOyBcclxuICBjb25zdCBpY29uRmlsZSA9IGZvcm1EYXRhLmdldCgnaWNvbicpIGFzIEZpbGU7XHJcbiAgaWYgKGljb25GaWxlICYmIGljb25GaWxlLnNpemUgPiAwICYmIGljb25GaWxlLm5hbWUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGF3YWl0IGljb25GaWxlLmFycmF5QnVmZmVyKCkpO1xyXG4gICAgICBjb25zdCBmaWxlTmFtZSA9IGBleHAtJHtEYXRlLm5vdygpfS0ke2ljb25GaWxlLm5hbWUucmVwbGFjZSgvXFxzL2csICctJyl9YDtcclxuICAgICAgY29uc3QgdXBsb2FkRGlyID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdwdWJsaWMnLCAndXBsb2FkcycpO1xyXG4gICAgICB0cnkgeyBhd2FpdCBmcy5hY2Nlc3ModXBsb2FkRGlyKTsgfSBjYXRjaCB7IGF3YWl0IGZzLm1rZGlyKHVwbG9hZERpciwgeyByZWN1cnNpdmU6IHRydWUgfSk7IH1cclxuICAgICAgYXdhaXQgZnMud3JpdGVGaWxlKHBhdGguam9pbih1cGxvYWREaXIsIGZpbGVOYW1lKSwgYnVmZmVyKTtcclxuICAgICAgaWNvblBhdGggPSBgL3VwbG9hZHMvJHtmaWxlTmFtZX1gO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbmV3RXhwOiBFeHBlcmllbmNlID0ge1xyXG4gICAgaWQ6IERhdGUubm93KCksXHJcbiAgICBjb21wYW55OiBmb3JtRGF0YS5nZXQoJ2NvbXBhbnknKSBhcyBzdHJpbmcsXHJcbiAgICBwb3NpdGlvbjogZm9ybURhdGEuZ2V0KCdwb3NpdGlvbicpIGFzIHN0cmluZyxcclxuICAgIGRlc2NyaXB0aW9uOiBmb3JtRGF0YS5nZXQoJ2Rlc2NyaXB0aW9uJykgYXMgc3RyaW5nLFxyXG4gICAgc2tpbGxzOiAoZm9ybURhdGEuZ2V0KCdza2lsbHMnKSBhcyBzdHJpbmcpLnNwbGl0KCcsJykubWFwKHQgPT4gdC50cmltKCkpLFxyXG4gICAgaWNvbjogaWNvblBhdGgsXHJcbiAgICBzdGFydERhdGU6IGZvcm1EYXRhLmdldCgnc3RhcnREYXRlJykgYXMgc3RyaW5nLFxyXG4gICAgZW5kRGF0ZTogZm9ybURhdGEuZ2V0KCdlbmREYXRlJykgYXMgc3RyaW5nXHJcbiAgfTtcclxuICBcclxuICBpZiAoIWRiLmV4cGVyaWVuY2UpIGRiLmV4cGVyaWVuY2UgPSBbXTtcclxuICBkYi5leHBlcmllbmNlLnB1c2gobmV3RXhwKTtcclxuICBhd2FpdCBzYXZlREIoZGIpO1xyXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV4cGVyaWVuY2UoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgZGIgPSBhd2FpdCBnZXREQigpO1xyXG4gIGNvbnN0IGlkID0gTnVtYmVyKGZvcm1EYXRhLmdldCgnaWQnKSk7XHJcbiAgXHJcbiAgaWYgKCFkYi5leHBlcmllbmNlKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG5cclxuICBjb25zdCBpbmRleCA9IGRiLmV4cGVyaWVuY2UuZmluZEluZGV4KGUgPT4gZS5pZCA9PT0gaWQpO1xyXG4gIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgIGxldCBpY29uUGF0aCA9IGRiLmV4cGVyaWVuY2VbaW5kZXhdLmljb247XHJcbiAgICAgIGNvbnN0IGljb25GaWxlID0gZm9ybURhdGEuZ2V0KCdpY29uJykgYXMgRmlsZTtcclxuICAgICAgaWYgKGljb25GaWxlICYmIGljb25GaWxlLnNpemUgPiAwICYmIGljb25GaWxlLm5hbWUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICBjb25zdCBidWZmZXIgPSBCdWZmZXIuZnJvbShhd2FpdCBpY29uRmlsZS5hcnJheUJ1ZmZlcigpKTtcclxuICAgICAgICAgIGNvbnN0IGZpbGVOYW1lID0gYGV4cC0ke0RhdGUubm93KCl9LSR7aWNvbkZpbGUubmFtZS5yZXBsYWNlKC9cXHMvZywgJy0nKX1gO1xyXG4gICAgICAgICAgY29uc3QgdXBsb2FkRGlyID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdwdWJsaWMnLCAndXBsb2FkcycpO1xyXG4gICAgICAgICAgdHJ5IHsgYXdhaXQgZnMuYWNjZXNzKHVwbG9hZERpcik7IH0gY2F0Y2ggeyBhd2FpdCBmcy5ta2Rpcih1cGxvYWREaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pOyB9XHJcbiAgICAgICAgICBhd2FpdCBmcy53cml0ZUZpbGUocGF0aC5qb2luKHVwbG9hZERpciwgZmlsZU5hbWUpLCBidWZmZXIpO1xyXG4gICAgICAgICAgaWNvblBhdGggPSBgL3VwbG9hZHMvJHtmaWxlTmFtZX1gO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkYi5leHBlcmllbmNlW2luZGV4XSA9IHtcclxuICAgICAgICAuLi5kYi5leHBlcmllbmNlW2luZGV4XSxcclxuICAgICAgICBjb21wYW55OiBmb3JtRGF0YS5nZXQoJ2NvbXBhbnknKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgcG9zaXRpb246IGZvcm1EYXRhLmdldCgncG9zaXRpb24nKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGZvcm1EYXRhLmdldCgnZGVzY3JpcHRpb24nKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgc2tpbGxzOiAoZm9ybURhdGEuZ2V0KCdza2lsbHMnKSBhcyBzdHJpbmcpLnNwbGl0KCcsJykubWFwKHQgPT4gdC50cmltKCkpLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogZm9ybURhdGEuZ2V0KCdzdGFydERhdGUnKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgZW5kRGF0ZTogZm9ybURhdGEuZ2V0KCdlbmREYXRlJykgYXMgc3RyaW5nLFxyXG4gICAgICAgIGljb246IGljb25QYXRoXHJcbiAgICAgIH07XHJcbiAgICAgIGF3YWl0IHNhdmVEQihkYik7XHJcbiAgfVxyXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUV4cGVyaWVuY2UoaWQ6IG51bWJlcikge1xyXG4gIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICBpZiAoZGIuZXhwZXJpZW5jZSkge1xyXG4gICAgZGIuZXhwZXJpZW5jZSA9IGRiLmV4cGVyaWVuY2UuZmlsdGVyKGUgPT4gZS5pZCAhPT0gaWQpO1xyXG4gICAgYXdhaXQgc2F2ZURCKGRiKTtcclxuICB9XHJcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RWR1Y2F0aW9uKCkge1xyXG4gIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICByZXR1cm4gZGIuZWR1Y2F0aW9uIHx8IFtdO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkRWR1Y2F0aW9uKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICBcclxuICBjb25zdCBuZXdFZHU6IEVkdWNhdGlvbiA9IHtcclxuICAgIGlkOiBEYXRlLm5vdygpLFxyXG4gICAgc2Nob29sOiBmb3JtRGF0YS5nZXQoJ3NjaG9vbCcpIGFzIHN0cmluZyxcclxuICAgIGRlZ3JlZTogZm9ybURhdGEuZ2V0KCdkZWdyZWUnKSBhcyBzdHJpbmcsXHJcbiAgICBzdGFydERhdGU6IGZvcm1EYXRhLmdldCgnc3RhcnREYXRlJykgYXMgc3RyaW5nLFxyXG4gICAgZW5kRGF0ZTogZm9ybURhdGEuZ2V0KCdlbmREYXRlJykgYXMgc3RyaW5nLFxyXG4gICAgZGVzY3JpcHRpb246IGZvcm1EYXRhLmdldCgnZGVzY3JpcHRpb24nKSBhcyBzdHJpbmdcclxuICB9O1xyXG4gIFxyXG4gIGlmICghZGIuZWR1Y2F0aW9uKSBkYi5lZHVjYXRpb24gPSBbXTtcclxuICBkYi5lZHVjYXRpb24ucHVzaChuZXdFZHUpO1xyXG4gIGF3YWl0IHNhdmVEQihkYik7XHJcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRWR1Y2F0aW9uKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIGNvbnN0IGRiID0gYXdhaXQgZ2V0REIoKTtcclxuICBjb25zdCBpZCA9IE51bWJlcihmb3JtRGF0YS5nZXQoJ2lkJykpO1xyXG5cclxuICBpZiAoIWRiLmVkdWNhdGlvbikgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcclxuXHJcbiAgY29uc3QgaW5kZXggPSBkYi5lZHVjYXRpb24uZmluZEluZGV4KGUgPT4gZS5pZCA9PT0gaWQpO1xyXG4gIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICBkYi5lZHVjYXRpb25baW5kZXhdID0ge1xyXG4gICAgICAuLi5kYi5lZHVjYXRpb25baW5kZXhdLFxyXG4gICAgICBzY2hvb2w6IGZvcm1EYXRhLmdldCgnc2Nob29sJykgYXMgc3RyaW5nLFxyXG4gICAgICBkZWdyZWU6IGZvcm1EYXRhLmdldCgnZGVncmVlJykgYXMgc3RyaW5nLFxyXG4gICAgICBzdGFydERhdGU6IGZvcm1EYXRhLmdldCgnc3RhcnREYXRlJykgYXMgc3RyaW5nLFxyXG4gICAgICBlbmREYXRlOiBmb3JtRGF0YS5nZXQoJ2VuZERhdGUnKSBhcyBzdHJpbmcsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBmb3JtRGF0YS5nZXQoJ2Rlc2NyaXB0aW9uJykgYXMgc3RyaW5nXHJcbiAgICB9O1xyXG4gICAgYXdhaXQgc2F2ZURCKGRiKTtcclxuICB9XHJcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRWR1Y2F0aW9uKGlkOiBudW1iZXIpIHtcclxuICBjb25zdCBkYiA9IGF3YWl0IGdldERCKCk7XHJcbiAgaWYgKGRiLmVkdWNhdGlvbikge1xyXG4gICAgZGIuZWR1Y2F0aW9uID0gZGIuZWR1Y2F0aW9uLmZpbHRlcihlID0+IGUuaWQgIT09IGlkKTtcclxuICAgIGF3YWl0IHNhdmVEQihkYik7XHJcbiAgfVxyXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImdSQXlUc0Isd0xBQUEifQ==
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$db6298__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:db6298 [app-client] (ecmascript) <text/javascript>");
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
    if ($[0] !== "44650529106514bb55ae64c0662e91a1434d13132605c97a56f106676767bf62") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "44650529106514bb55ae64c0662e91a1434d13132605c97a56f106676767bf62";
    }
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Footer[useEffect()]": ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$db6298__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getFooter"])().then(setData);
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
    const t11 = data?.github || "https://github.com";
    let t12;
    if ($[16] !== data) {
        t12 = data?.github ? "@" + data.github.split("/").pop() : "@username";
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

//# sourceMappingURL=src_b5562585._.js.map