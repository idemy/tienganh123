var functionURL = chrome.extension.getURL("sources/function.js"),
    function_finalURL = chrome.extension.getURL("sources/function_final.js"),
    libs_asyncURL = chrome.extension.getURL("sources/libs_async.js");
    
chrome.webRequest.onBeforeRequest.addListener(function (n) {
    return "https://www.tienganh123.com/static/js/function_final.js" == n.url ? {
        redirectUrl: function_finalURL
    } : "https://www.tienganh123.com/file/dungchung/function.js" == n.url ? {
        redirectUrl: functionURL
    } : "https://www.tienganh123.com/static/js/libs_async.js?v=9" == n.url ? {
        redirectUrl: libs_asyncURL
    } : void 0
}, {
    urls: ["http://*/*", "https://*/*"]
}, ["blocking"]);