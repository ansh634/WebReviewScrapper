(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_components_23452e2f._.js", {

"[project]/app/components/topReviews.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TopReviews)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function TopReviews({ reviews }) {
    _s();
    const [overview, setOverview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [speaking, setSpeaking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const speechSynthRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleGenerateSummary = async ()=>{
        if (!reviews || reviews.length === 0) {
            alert("No reviews available to summarize.");
            return;
        }
        // Take top 5 reviews
        const topReviews = reviews.slice(0, 5);
        setLoading(true);
        setOverview('');
        setError(null);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('http://127.0.0.1:5001/generate-gemini-overview', {
                reviews: topReviews
            });
            setOverview(res.data.overview || "No overview received.");
        } catch (error) {
            console.error("Error fetching overview:", error);
            setError("Error: Unable to fetch overview.");
        }
        setLoading(false);
    };
    const speakText = ()=>{
        if (!overview) {
            alert("No summary available to speak.");
            return;
        }
        // Stop any ongoing speech
        if (speaking) {
            window.speechSynthesis.cancel();
            setSpeaking(false);
            return;
        }
        // Create a new utterance
        const utterance = new SpeechSynthesisUtterance(overview);
        speechSynthRef.current = utterance;
        // Configure speech settings
        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.volume = 1;
        utterance.lang = "hi-GB";
        // Handle speech events
        utterance.onstart = ()=>setSpeaking(true);
        utterance.onend = ()=>setSpeaking(false);
        utterance.onerror = ()=>{
            setSpeaking(false);
        // setError("Error occurred while playing speech.");
        };
        // Start speaking
        window.speechSynthesis.speak(utterance);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition duration-200 w-full",
                onClick: handleGenerateSummary,
                disabled: loading || !reviews || reviews.length === 0,
                children: loading ? "Generating..." : "Summary of Top Reviews"
            }, void 0, false, {
                fileName: "[project]/app/components/topReviews.tsx",
                lineNumber: 87,
                columnNumber: 13
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 bg-red-100 border border-red-300 rounded text-red-700 mt-4",
                children: error
            }, void 0, false, {
                fileName: "[project]/app/components/topReviews.tsx",
                lineNumber: 96,
                columnNumber: 17
            }, this),
            overview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border rounded bg-gray-50 mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold",
                                children: "Summary:"
                            }, void 0, false, {
                                fileName: "[project]/app/components/topReviews.tsx",
                                lineNumber: 104,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: speakText,
                                className: "flex items-center space-x-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: speaking ? "Stop" : "Listen"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/topReviews.tsx",
                                        lineNumber: 109,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-4 w-4",
                                        viewBox: "0 0 20 20",
                                        fill: "currentColor",
                                        children: speaking ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z",
                                            clipRule: "evenodd"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/topReviews.tsx",
                                            lineNumber: 112,
                                            columnNumber: 37
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            d: "M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z",
                                            clipRule: "evenodd"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/topReviews.tsx",
                                            lineNumber: 114,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/topReviews.tsx",
                                        lineNumber: 110,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/topReviews.tsx",
                                lineNumber: 105,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/topReviews.tsx",
                        lineNumber: 103,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-800",
                        children: overview
                    }, void 0, false, {
                        fileName: "[project]/app/components/topReviews.tsx",
                        lineNumber: 119,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/topReviews.tsx",
                lineNumber: 102,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/topReviews.tsx",
        lineNumber: 86,
        columnNumber: 9
    }, this);
}
_s(TopReviews, "27hk8JHqCws45OhL8nbhfNHndRM=");
_c = TopReviews;
var _c;
__turbopack_context__.k.register(_c, "TopReviews");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/webscrapper.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AmazonReviewScraper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$topReviews$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/topReviews.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function AmazonReviewScraper() {
    _s();
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [reviews, setReviews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Date');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedReviews, setSelectedReviews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const isValidAmazonUrl = (url)=>{
        const amazonUrlPattern = /^(https?:\/\/)?(www\.)?amazon\.[a-z]{2,3}\/.*$/;
        return amazonUrlPattern.test(url);
    };
    const fetchReviews = async ()=>{
        if (!isValidAmazonUrl(url)) {
            alert('Invalid Amazon URL');
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('https://debuggingmortals-backend-1.onrender.com/scrape-amazon', {
                url
            });
            setReviews(response.data);
        } catch (error) {
            console.error("Error fetching reviews:", error);
            setError('Error fetching reviews');
        }
        setLoading(false);
    };
    const sortedReviews = ()=>{
        if (!reviews) return [];
        return [
            ...reviews.Reviews
        ].sort((a, b)=>{
            if (sortBy === 'Rating') return parseFloat(b.Rating) - parseFloat(a.Rating);
            if (sortBy === 'Date') return new Date(b.Date).getTime() - new Date(a.Date).getTime();
            return 0;
        });
    };
    const handleReviewClick = (review)=>{
        setSelectedReviews((prevReviews)=>{
            if (prevReviews.includes(review)) {
                return prevReviews.filter((r)=>r !== review);
            } else {
                return [
                    ...prevReviews,
                    review
                ].slice(0, 5);
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-2xl mx-auto p-4 flex gap-4 flex-col items-center mt-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-bold mb-4",
                children: "Amazon Product Review Scraper"
            }, void 0, false, {
                fileName: "[project]/app/components/webscrapper.tsx",
                lineNumber: 73,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Enter Amazon Product URL",
                className: "w-full p-2 border rounded-full mb-2",
                value: url,
                onChange: (e)=>setUrl(e.target.value)
            }, void 0, false, {
                fileName: "[project]/app/components/webscrapper.tsx",
                lineNumber: 74,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: fetchReviews,
                className: "text-white px-4 py-2 rounded-full mb-4 bg-black/10 border border-white-100 hover:bg-white/10 hover:bg-opacity-20 transition duration-200",
                disabled: loading,
                children: loading ? 'Fetching...' : 'Scrape Reviews'
            }, void 0, false, {
                fileName: "[project]/app/components/webscrapper.tsx",
                lineNumber: 81,
                columnNumber: 13
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-500",
                children: error
            }, void 0, false, {
                fileName: "[project]/app/components/webscrapper.tsx",
                lineNumber: 89,
                columnNumber: 23
            }, this),
            reviews && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold",
                        children: [
                            "Product: ",
                            reviews.Product
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/webscrapper.tsx",
                        lineNumber: 93,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2",
                        children: [
                            "Overall Rating: ",
                            reviews.Rating
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/webscrapper.tsx",
                        lineNumber: 94,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "Sort by: "
                    }, void 0, false, {
                        fileName: "[project]/app/components/webscrapper.tsx",
                        lineNumber: 96,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: sortBy,
                        onChange: (e)=>setSortBy(e.target.value),
                        className: "border p-1 mb-4 ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Date",
                                children: "Date"
                            }, void 0, false, {
                                fileName: "[project]/app/components/webscrapper.tsx",
                                lineNumber: 102,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Rating",
                                children: "Rating"
                            }, void 0, false, {
                                fileName: "[project]/app/components/webscrapper.tsx",
                                lineNumber: 103,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/webscrapper.tsx",
                        lineNumber: 97,
                        columnNumber: 21
                    }, this),
                    sortedReviews().map((review, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `border-none p-2 my-2 bg-white/10 rounded cursor-pointer ${selectedReviews.includes(review) ? 'bg-blue-100' : ''}`,
                            onClick: ()=>handleReviewClick(review),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold",
                                    children: [
                                        "⭐ ",
                                        review.Rating,
                                        " - ",
                                        review.Title
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/webscrapper.tsx",
                                    lineNumber: 112,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: [
                                        "By ",
                                        review.Author,
                                        " on ",
                                        review.Date
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/webscrapper.tsx",
                                    lineNumber: 113,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: review.Review
                                }, void 0, false, {
                                    fileName: "[project]/app/components/webscrapper.tsx",
                                    lineNumber: 114,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/app/components/webscrapper.tsx",
                            lineNumber: 107,
                            columnNumber: 25
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/webscrapper.tsx",
                lineNumber: 92,
                columnNumber: 17
            }, this),
            reviews && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$topReviews$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                reviews: sortedReviews()
            }, void 0, false, {
                fileName: "[project]/app/components/webscrapper.tsx",
                lineNumber: 119,
                columnNumber: 25
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-4"
            }, void 0, false, {
                fileName: "[project]/app/components/webscrapper.tsx",
                lineNumber: 120,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center"
            }, void 0, false, {
                fileName: "[project]/app/components/webscrapper.tsx",
                lineNumber: 121,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/webscrapper.tsx",
        lineNumber: 72,
        columnNumber: 9
    }, this);
}
_s(AmazonReviewScraper, "yKtKBF2Qu1wCNNQvcbiLSO+1oD4=");
_c = AmazonReviewScraper;
var _c;
__turbopack_context__.k.register(_c, "AmazonReviewScraper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_components_23452e2f._.js.map