// ==UserScript==
// @name         DOMContentLoader Bootstrap
// @version      1.0
// @description  Wraps main script in a DOMContentLoader
// @author       Jaxx
// @updateURL    https://raw.githubusercontent.com/its-Jaxx/DOMContentLoaderBootstrap/refs/heads/main/DOMContentLoader-Bootstrap.js
// @grant        GM_info
// ==/UserScript==

(function () {
    'use strict';

    try {
        // GM_info support, fallback if none available.
        const version = typeof GM_info !== 'undefined' && GM_info?.script?.version || "Unknown version"; 
        console.log(`DOMContentLoader Bootstrap - Version: ${version}`);

        // Locating and running the main code
        const runMainScript = () => {
            try {
                const scriptTag = Array.from(document.querySelectorAll('script'))
                    .find(script => script.textContent.includes('(function () {'));

                if (!scriptTag) throw new Error("Main Script not found on the page.");

                eval(scriptTag.textContent);
            } catch (err) {
                console.error("Error executing main script:", err);
            }
        };

        // Fallback in case DOMContentLoaded fails
        const safeRun = () => {
            try {
                runMainScript();
            } catch (err) {
                console.error("Critical error: main script failed to run", err);
            }
        };

        // Run on DOMContentLoaded or when ready
        if (document.readyState === "complete" || document.readyState === "interactive") {
            safeRun();
        } else {
            window.addEventListener('DOMContentLoaded', safeRun);
        }

        // MutationObserver for modified content
        try {
            const observer = new MutationObserver(() => {
                try {
                    runMainScript();
                } catch (err) {
                    console.error("Error during MutationObserver execution", err);
                }
            });
            observer.observe(document.body, { childList: true, subtree: true });
        } catch (observerErr) {
            console.error("Failed to initialize MutationObserver:", observerErr);
        }

    } catch (criticalErr) {
        console.error("Critical error: Bootstrap failed to start", criticalErr);
    }
})();
