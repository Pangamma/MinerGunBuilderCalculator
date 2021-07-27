export const ready = (callback: () => void) => {
    if (document.readyState !== 'loading') { callback(); }
    else {
        const readyFunc = () => {
            document.removeEventListener('DOMContentLoaded', readyFunc);
            callback();
        };

        document.addEventListener('DOMContentLoaded', readyFunc, false);
    }
}