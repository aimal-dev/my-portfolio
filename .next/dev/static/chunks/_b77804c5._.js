(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/sections/Projects.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bgImage": "Projects-module-scss-module__2Eie1W__bgImage",
  "button": "Projects-module-scss-module__2Eie1W__button",
  "card": "Projects-module-scss-module__2Eie1W__card",
  "cardContent": "Projects-module-scss-module__2Eie1W__cardContent",
  "cardInfo": "Projects-module-scss-module__2Eie1W__cardInfo",
  "cardTitle": "Projects-module-scss-module__2Eie1W__cardTitle",
  "cardWindow": "Projects-module-scss-module__2Eie1W__cardWindow",
  "container": "Projects-module-scss-module__2Eie1W__container",
  "description": "Projects-module-scss-module__2Eie1W__description",
  "empty": "Projects-module-scss-module__2Eie1W__empty",
  "grid": "Projects-module-scss-module__2Eie1W__grid",
  "header": "Projects-module-scss-module__2Eie1W__header",
  "iconOverlay": "Projects-module-scss-module__2Eie1W__iconOverlay",
  "loadMoreBtn": "Projects-module-scss-module__2Eie1W__loadMoreBtn",
  "loadMoreContainer": "Projects-module-scss-module__2Eie1W__loadMoreContainer",
  "overlay": "Projects-module-scss-module__2Eie1W__overlay",
  "projectIndex": "Projects-module-scss-module__2Eie1W__projectIndex",
  "shimmer": "Projects-module-scss-module__2Eie1W__shimmer",
  "skeletonCard": "Projects-module-scss-module__2Eie1W__skeletonCard",
  "skeletonHeader": "Projects-module-scss-module__2Eie1W__skeletonHeader",
  "skeletonWindow": "Projects-module-scss-module__2Eie1W__skeletonWindow",
  "subtitle": "Projects-module-scss-module__2Eie1W__subtitle",
  "tag": "Projects-module-scss-module__2Eie1W__tag",
  "tags": "Projects-module-scss-module__2Eie1W__tags",
  "title": "Projects-module-scss-module__2Eie1W__title",
});
}),
"[project]/src/components/sections/ProjectsList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Projects$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/sections/Projects.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ProjectsPage(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "6e8b7bb50989f52d882c428380fac72ca5bb742d632ab0faef9bf2685b3cb71a") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6e8b7bb50989f52d882c428380fac72ca5bb742d632ab0faef9bf2685b3cb71a";
    }
    const { projects } = t0;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [displayedProjects, setDisplayedProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(projects);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== projects) {
        t1 = ({
            "ProjectsPage[loadMore]": ()=>{
                setLoading(true);
                setTimeout({
                    "ProjectsPage[loadMore > setTimeout()]": ()=>{
                        const moreProjects = projects.map(_ProjectsPageLoadMoreSetTimeoutProjectsMap);
                        setDisplayedProjects({
                            "ProjectsPage[loadMore > setTimeout() > setDisplayedProjects()]": (prev)=>[
                                    ...prev,
                                    ...moreProjects
                                ]
                        }["ProjectsPage[loadMore > setTimeout() > setDisplayedProjects()]"]);
                        setLoading(false);
                    }
                }["ProjectsPage[loadMore > setTimeout()]"], 2000);
            }
        })["ProjectsPage[loadMore]"];
        $[1] = projects;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const loadMore = t1;
    let t2;
    if ($[3] !== displayedProjects) {
        t2 = {
            scope: containerRef,
            dependencies: [
                displayedProjects
            ]
        };
        $[3] = displayedProjects;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])(_ProjectsPageUseGSAP, t2);
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Projects$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Projects$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                    children: "_projects"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/ProjectsList.tsx",
                    lineNumber: 67,
                    columnNumber: 41
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Projects$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                    children: "// a collection of my work"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/ProjectsList.tsx",
                    lineNumber: 67,
                    columnNumber: 84
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/ProjectsList.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== displayedProjects) {
        t4 = displayedProjects.map(_ProjectsPageDisplayedProjectsMap);
        $[6] = displayedProjects;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== loading) {
        t5 = loading && Array.from({
            length: 4
        }).map(_ProjectsPageAnonymous);
        $[8] = loading;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== displayedProjects.length || $[11] !== loading) {
        t6 = displayedProjects.length === 0 && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Projects$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].empty,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "// No projects found. Add some in the dashboard!"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ProjectsList.tsx",
                lineNumber: 92,
                columnNumber: 86
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/ProjectsList.tsx",
            lineNumber: 92,
            columnNumber: 56
        }, this);
        $[10] = displayedProjects.length;
        $[11] = loading;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t4 || $[14] !== t5 || $[15] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Projects$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
            children: [
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/ProjectsList.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[13] = t4;
        $[14] = t5;
        $[15] = t6;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== loadMore || $[18] !== loading) {
        t8 = !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Projects$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadMoreContainer,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: loadMore,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Projects$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadMoreBtn,
                children: "load-more-content"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ProjectsList.tsx",
                lineNumber: 111,
                columnNumber: 64
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/ProjectsList.tsx",
            lineNumber: 111,
            columnNumber: 22
        }, this);
        $[17] = loadMore;
        $[18] = loading;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    let t9;
    if ($[20] !== t7 || $[21] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Projects$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            ref: containerRef,
            children: [
                t3,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/ProjectsList.tsx",
            lineNumber: 120,
            columnNumber: 10
        }, this);
        $[20] = t7;
        $[21] = t8;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    return t9;
}
_s(ProjectsPage, "Lp3pGuVnhpOgCby8Gc3yt3EcFp0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = ProjectsPage;
function _ProjectsPageAnonymous(_, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Projects$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skeletonCard,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Projects$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skeletonHeader
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ProjectsList.tsx",
                lineNumber: 130,
                columnNumber: 55
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Projects$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skeletonWindow,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Projects$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shimmer
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/ProjectsList.tsx",
                    lineNumber: 130,
                    columnNumber: 135
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ProjectsList.tsx",
                lineNumber: 130,
                columnNumber: 96
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/src/components/sections/ProjectsList.tsx",
        lineNumber: 130,
        columnNumber: 10
    }, this);
}
function _ProjectsPageDisplayedProjectsMap(project, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Projects$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card} project-card`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Projects$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardInfo,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Projects$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Projects$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectIndex,
                            children: [
                                "Project ",
                                index + 1
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/ProjectsList.tsx",
                            lineNumber: 133,
                            columnNumber: 140
                        }, this),
                        " ",
                        "//",
                        " _",
                        project.title.toLowerCase().replace(/\s/g, "-")
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/ProjectsList.tsx",
                    lineNumber: 133,
                    columnNumber: 107
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ProjectsList.tsx",
                lineNumber: 133,
                columnNumber: 74
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Projects$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardWindow,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Projects$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bgImage,
                        style: {
                            backgroundImage: `url(${project.image})`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Projects$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/ProjectsList.tsx",
                            lineNumber: 135,
                            columnNumber: 10
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/ProjectsList.tsx",
                        lineNumber: 133,
                        columnNumber: 308
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Projects$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Projects$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                                children: project.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/ProjectsList.tsx",
                                lineNumber: 135,
                                columnNumber: 86
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Projects$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tags,
                                children: project.tech.map(_ProjectsPageDisplayedProjectsMapProjectTechMap)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/ProjectsList.tsx",
                                lineNumber: 135,
                                columnNumber: 145
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: project.link,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Projects$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
                                children: "view-project"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/ProjectsList.tsx",
                                lineNumber: 135,
                                columnNumber: 247
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/ProjectsList.tsx",
                        lineNumber: 135,
                        columnNumber: 50
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Projects$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconOverlay,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                            size: 24,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Projects$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].techIcon
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/ProjectsList.tsx",
                            lineNumber: 135,
                            columnNumber: 354
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/ProjectsList.tsx",
                        lineNumber: 135,
                        columnNumber: 318
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/ProjectsList.tsx",
                lineNumber: 133,
                columnNumber: 273
            }, this)
        ]
    }, project.id, true, {
        fileName: "[project]/src/components/sections/ProjectsList.tsx",
        lineNumber: 133,
        columnNumber: 10
    }, this);
}
function _ProjectsPageDisplayedProjectsMapProjectTechMap(t) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Projects$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tag,
        children: t
    }, t, false, {
        fileName: "[project]/src/components/sections/ProjectsList.tsx",
        lineNumber: 138,
        columnNumber: 10
    }, this);
}
function _ProjectsPageUseGSAP() {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(".project-card", {
        y: 50,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out"
    });
}
function _ProjectsPageLoadMoreSetTimeoutProjectsMap(p) {
    return {
        ...p,
        id: Date.now() + Math.random()
    };
}
var _c;
__turbopack_context__.k.register(_c, "ProjectsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Cpu
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 20v2",
            key: "1lh1kg"
        }
    ],
    [
        "path",
        {
            d: "M12 2v2",
            key: "tus03m"
        }
    ],
    [
        "path",
        {
            d: "M17 20v2",
            key: "1rnc9c"
        }
    ],
    [
        "path",
        {
            d: "M17 2v2",
            key: "11trls"
        }
    ],
    [
        "path",
        {
            d: "M2 12h2",
            key: "1t8f8n"
        }
    ],
    [
        "path",
        {
            d: "M2 17h2",
            key: "7oei6x"
        }
    ],
    [
        "path",
        {
            d: "M2 7h2",
            key: "asdhe0"
        }
    ],
    [
        "path",
        {
            d: "M20 12h2",
            key: "1q8mjw"
        }
    ],
    [
        "path",
        {
            d: "M20 17h2",
            key: "1fpfkl"
        }
    ],
    [
        "path",
        {
            d: "M20 7h2",
            key: "1o8tra"
        }
    ],
    [
        "path",
        {
            d: "M7 20v2",
            key: "4gnj0m"
        }
    ],
    [
        "path",
        {
            d: "M7 2v2",
            key: "1i4yhu"
        }
    ],
    [
        "rect",
        {
            x: "4",
            y: "4",
            width: "16",
            height: "16",
            rx: "2",
            key: "1vbyd7"
        }
    ],
    [
        "rect",
        {
            x: "8",
            y: "8",
            width: "8",
            height: "8",
            rx: "1",
            key: "z9xiuo"
        }
    ]
];
const Cpu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("cpu", __iconNode);
;
 //# sourceMappingURL=cpu.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cpu",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_b77804c5._.js.map