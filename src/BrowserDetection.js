// export const isOpera =
//   (!!window.opr && !!opr.addons) ||
//   !!window.opera ||
//   navigator.userAgent.indexOf(' OPR/') >= 0;

// export const isFirefox = typeof InstallTrigger !== 'undefined';

// export const isSafari =
//   /constructor/i.test(window.HTMLElement) ||
//   (function(p) {
//     return p.toString() === '[object SafariRemoteNotification]';
//   })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// export const isIE = /*@cc_on!@*/ false || !!document.documentMode;

// export const isEdge = !isIE && !!window.StyleMedia;

// export const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// export const isEdgeChromium = isChrome && navigator.userAgent.indexOf('Edg') != -1;

// export const isBlink = (isChrome || isOpera) && !!window.CSS;

// Breakpoints
export const mobileBreakpoint = 576;
export const tabletBreakpoint = 768;
export const desktopBreakpoint = 992;

export function isMobile() { return window.innerWidth <= mobileBreakpoint }
export function isTablet() { return (window.innderWidth >= mobileBreakpoint && window.innerWidth <= tabletBreakpoint) }
export function isDesktop() { return window.innerWidth >= desktopBreakpoint }

// export function isTablet = () => (window.innderWidth >= mobileBreakpoint && window.innerWidth <= tabletBreakpoint);
// export function isDesktop = () => window.innerWidth >= desktopBreakpoint;