"use strict";
/**
 * @package: openCSS - Simple responssive HTML, CSS, JS framework
 * @link   : https://github.com/bebagodfried/opencss.git
 * @version: 1.0.0
 * @license: CC BY 4.0, MIT
 **/
/**
 * AJAX
 * HttpRequest: Create XMLHttpRequest object
 */
let HttpRequest = () => {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest;
    }
    else {
        try {
            return new ActiveXObject('Microsoft.XMLHTTP');
        }
        catch (e) {
            try {
                return new ActiveXObject('Msxml2.XMLHTTP');
            }
            catch (XMLHttpRequest_ERR) {
                console.error(XMLHttpRequest_ERR);
                return;
            }
        }
    }
};
/**
 * Globals
 * $_: Get/set document vars
 */
let $_ = (get, set = '') => {
    switch (get) {
        // DOM Objects
        case 'title':
            if (set) {
                document.title = `${set}`;
                break;
            }
            else {
                return document.title;
            }
        case 'charset':
            return document.characterSet;
        case 'baseURI':
            return document.baseURI;
        case 'links':
            return document.links;
        case 'scripts':
            return document.scripts;
        case 'embeds':
            return document.embeds;
        case 'images':
            return document.images;
        case 'readyState':
            return document.readyState;
        // BOM Objects
        case 'cookies':
            return navigator.cookieEnabled;
        case 'language':
            return navigator.language;
        case 'online':
            return navigator.onLine;
        case 'userAgent':
            return navigator.userAgent;
        // Server & location
        case 'host':
            if (set) {
                location.host = `${set}`;
                break;
            }
            else {
                return location.host;
            }
        case 'hostname':
            if (set) {
                location.hostname = `${set}`;
                break;
            }
            else {
                return location.hostname;
            }
        case 'href':
            if (set) {
                location.href = `${set}`;
                break;
            }
            else {
                return location.href;
            }
        case 'url':
            if (set) {
                location.href = `${set}`;
                break;
            }
            else {
                return location.href;
            }
        case 'pathname':
            if (set) {
                location.pathname = `${set}`;
                break;
            }
            else {
                return location.pathname;
            }
        case 'port':
            if (set) {
                location.port = `${set}`;
                break;
            }
            else {
                return location.port;
            }
        case 'protocol':
            if (set) {
                location.protocol = `${set}`;
                break;
            }
            else {
                return location.protocol;
            }
        case 'search':
            if (set) {
                location.search = `${set}`;
                break;
            }
            else {
                return location.search;
            }
        case 'history':
            switch (set) {
                case -1: return history.back();
                case +1: return history.forward();
                case 0: return history.go();
                case 'back': return history.back();
                case 'forward': return history.forward();
                case 'reload': return history.go();
                default: return history.go();
            }
        case 'update':
            return document.lastModified;
        // Return https(SSl) state of current page
        case 'https':
            if (location.protocol = 'https') {
                return true;
            }
            else {
                return false;
            }
        default:
            console.error(`[404]: Reference '${get}' not found!`);
            return null;
    }
};
/**
 * Date
 * date: Return date
 */
let date = (format = '', type = '') => {
    // New date object
    var date = new Date();
    // return Alwayse two digits
    const digit = function (i) {
        if (i < 10)
            i = '0' + i;
        return i;
    };
    // H: Hours
    const H = date.getHours();
    // i: Minutes
    const i = digit(date.getMinutes());
    // s: Seconds
    const s = digit(date.getSeconds());
    // ms: Seconds
    const ms = date.getMilliseconds();
    // t: Timezone
    const t = date.getTimezoneOffset();
    // Y: Year
    const Y = date.getFullYear();
    // m: Month
    const m = date.getMonth();
    // d: Day
    const d = date.getDate();
    // f: Weekday
    const f = date.getDay();
    switch (format) {
        case 'H': //=> Hours
            if (isset(type)) {
                if (type == 'En') {
                    // return 12 hours format
                    if (H >> 12) {
                        return (H - 12);
                    }
                    else {
                        return H;
                    }
                }
                else if (type == 'Fr') {
                    // return 24 hours format
                    return H;
                }
            }
            else {
                return H;
            }
        case 'i': return i; //=> Minutes
        case 's': return s; //=> Seconds
        case 'ms': return s; //=> Seconds
        case 't': return t; //=> Timezone
        case 'Y': return Y; //=> Year
        case 'm': //=> Month
            if (isset(type)) {
                if (type == 'En') {
                    // return the month in english
                    return months_en[m];
                }
                else if (type == 'Fr') {
                    // return the month in french
                    return months_fr[m];
                }
            }
            else {
                // return the month as number
                return m;
            }
        case 'd': return (d); //=> Day
        case 'f': return f; //=> Weekday
        case 'En': return weekdays_en[f] + ', ' + months_en[m] + ' ' + digit(d) + ', ' + Y;
        case 'Fr': return weekdays_fr[f] + ' ' + digit(d) + ' ' + months_fr[m] + ' ' + Y;
        case 'DD/MM/YY': return digit(d) + '/' + digit(m) + '/' + Y;
        case 'MM/DD/YY': return digit(m) + '/' + digit(d) + '/' + Y;
        case 'DD-MM-YY': return digit(d) + '-' + digit(m) + '-' + Y;
        case 'MM-DD-YY': return digit(m) + '-' + digit(d) + '-' + Y;
        case 'DD/MM': return digit(d) + '/' + digit(m);
        case 'MM/DD': return digit(m) + '/' + digit(d);
        case 'DD-MM': return digit(d) + '-' + digit(m);
        case 'MM-DD': return digit(m) + '-' + digit(d);
        // hours:minutes
        case 'H:i':
            if (isset(type)) {
                if (type == 'En') {
                    // return time in 12 hours format
                    if (H >> 12) {
                        return (H - 12) + ':' + i;
                    }
                    else {
                        return H + ':' + i;
                    }
                }
                else if (type == 'Fr') {
                    // return time in 24 hours format
                    return H + ':' + i;
                }
            }
            else {
                // return time hours:minutes
                return H + ':' + i;
            }
        // hours:minutes:seconds
        case 'H:i:s':
            if (isset(type)) {
                if (type == 'En') {
                    // return time in 12 hours format with seconds
                    if (H >> 12) {
                        return (H - 12) + ':' + i + ':' + s;
                    }
                    else {
                        return H + ':' + i + ':' + s;
                    }
                }
                else if (type == 'Fr') {
                    // return time in 24 hours format with seconds
                    return H + ':' + i + ':' + s;
                }
            }
            else {
                // return time in hours:minutes:seconds
                return H + ':' + i + ':' + s;
            }
        default: return date.toLocaleString();
    }
};
// Days
let weekdays_en = ['Sunday', 'Monday', 'Thuesday', 'Wednesday', 'Tursday', 'Friday', 'Saturday'];
let weekdays_fr = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
// Months
let months_en = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let months_fr = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
/**
 * DOM
 * Document Objects Manipulation
 */
let DOM = (el) => {
    if (isset(el)) {
        try {
            if (typeof (el) == 'string' && el != null)
                el = el.trim();
            return document.querySelector(el);
        }
        catch (DOM_ERR) {
            console.error(DOM_ERR);
            return null;
        }
    }
    else {
        console.error('DOM(elememt: object, all?: boolean)' + `:  => '${el}' is not a valid selector.`);
    }
};
// Attrib: Return element specific attribute
let attrib = (attrib, el, set) => {
    let x = select(el);
    if (set) {
        x.setAttribute(`${attrib}`, `${set}`);
    }
    else {
        return x.getAttribute(`${attrib}`);
    }
};
// classList: add/remove element classes
let classList = (el, toggles) => {
    let x = select(el);
    toggles.forEach(key => {
        x.classList.toggle(key);
    });
};
// Create: Create node elements
let create = (el) => {
    return document.createElement(el);
};
// Select: Node list selector
let select = (el, all = false) => {
    if (isset(el)) {
        try {
            if (typeof (el) == 'string' && el != null)
                el = el.trim();
            if (all) {
                return [...document.querySelectorAll(el)];
            }
            else {
                return document.querySelector(el);
            }
        }
        catch (select_ERR) {
            console.error(select_ERR);
            return null;
        }
    }
    else {
        console.error('select(elememt: object, all?: boolean)' + `:  => '${el}' is not a valid selector.`);
    }
};
// SelectTag: HTMLCollection selector
let selectTag = (el) => {
    try {
        if (typeof (el) == 'string' && el != null)
            el = el.trim();
        return document.getElementsByTagName(el);
    }
    catch (select_ERR) {
        console.error(`${select_ERR.name}: selectTag(tag: object) => '${el}' is not a valid selector.`);
        return null;
    }
};
// SelectId: Element `Id` selector
let selectId = (el) => {
    try {
        if (typeof (el) == 'string' && el != null)
            el = el.trim();
        return document.getElementById(el);
    }
    catch (selectId_ERR) {
        console.error(`${selectId_ERR.name}: selectId(id: object) => '${el}' is not a valid selector.`);
        return null;
    }
};
// Drop: Remove element(s) list from DOM
let drop = (list) => {
    list.forEach(el => {
        const x = select(el);
        try {
            x.remove();
        }
        catch (Drop_ERR) {
            return null;
        }
    });
};
// Echo: Replace the content of element(s)
let echo = (text, el, all = false) => {
    if (isset(el)) {
        if (all) {
            let selection = select(el, all);
            selection.forEach((el) => {
                el.innerHTML = `${text}`;
            });
        }
        else {
            try {
                return document.querySelector(el).innerHTML = `${text}`;
            }
            catch (e) {
                return el.innerHTML = `${text}`;
            }
        }
    }
    else {
        console.log(`${text}`);
    }
};
// TextContent: Get or replace element(s) text node
let getContent = (el) => {
    // Get text content of an element
    let text = DOM(el);
    return text.innerTEXT;
};
let textContent = (el, value) => {
    if (isset(value)) {
        document.querySelector(el).innerTEXT = `${value}`;
    }
    else {
        return document.querySelector(el).innerTEXT;
    }
};
// HtmlContent: Get or replace element(s) html content
let getHTML = (el) => {
    // Get text content of an element
    return document.querySelector(el).innerHTML;
};
let htmlContent = (el, value) => {
    if (isset(value)) {
        if (isset(el)) {
            el.innerHTML = `${value}`;
        }
        else {
            document.querySelector(el).innerHTML = `${value}`;
        }
    }
    else {
        if (isset(el)) {
            return el.innerHTML;
        }
        else {
            return document.querySelector(el).innerHTML;
        }
    }
};
// Display: Display/hide specific DOM element
let display = (el, displayValue = 'block') => {
    const d = select(el);
    if (d.style.display == 'none') {
        return d.style.display == `${displayValue}`;
    }
    else if (d.style.display == `${displayValue}`) {
        return d.style.display == 'none';
    }
    else {
        if (d.classList.contains('hidden')) {
            try {
                d.classList.remove('hidden');
                d.classList.add(`${displayValue}`);
            }
            catch (display_ERR) {
                console.error(display_ERR);
            }
        }
        else if (d.classList.contains(`${displayValue}`)) {
            try {
                d.classList.remove(`${displayValue}`);
                d.classList.add('hidden');
            }
            catch (display_ERR) {
                console.error(display_ERR);
            }
        }
        else {
            let hide = d.getAttribute('hidden');
            if (isset(hide)) {
                if (hide == true) {
                    return hide = false;
                }
                else {
                    return hide = true;
                }
            }
        }
    }
};
// Hide: Hide DOM element
let hide = (el) => {
    const x = ['block', 'inline-block', 'flex', 'inline-flex'];
    const d = select(el);
    d.classList.add('hidden');
    try {
        x.forEach(display => {
            if (d.classList.contains(`${display}`)) {
                d.classList.remove(`${display}`);
            }
        });
    }
    catch (hide_ERR) {
        let hide = d.getAttribute('hidden');
        if (!isset(hide)) {
            return hide = true;
        }
    }
};
/**
 * Events listners
 * ...
 */
// On: Events listner
let on = (event, listener) => {
    event = event.trim();
    document.addEventListener(event, listener);
};
// Onclick: Click listner
let onClick = (el, listener) => {
    const d = selectId(el);
    return d.onclick = listener;
};
// Ondlclick: Double click listner
let onDblClick = (el, listener) => {
    const d = selectId(el);
    return d.ondblclick = listener;
};
/**
 * Validation
 * Check for exist listner
 */
// Isset: Return true for no-empty Object/var
let isset = (key) => {
    if (key != null && key != false && key != undefined) {
        return true;
    }
    else if (key != '' && key != ' ') {
        return true;
    }
    else {
        return false;
    }
};
/**
 * Mixed
 * Modalbox: create pup-up box
 * @param pop_up
 */
let pop_up = function (modal = { title: ``, icon: ``, text: ``, html: ``, href: ``, header: true, classList: [], style: ``, border: true, overlay: false, height: ``, width: ``, top: ``, right: ``, bottom: ``, left: ``, level: 8 }) {
    const WINDOW = create('div');
    WINDOW.id = modal.title;
    WINDOW.classList.add('rounded', 'flex', 'flex-column');
    if (selectId(`${modal.title}`)) {
        let el = selectId(modal.title);
        el?.classList.add('animate-pulse');
        setTimeout(() => {
            el?.classList.remove('animate-pulse');
        }, 1000);
        return null;
    }
    if (modal.classList) {
        modal.classList.forEach(classItem => {
            WINDOW.classList.add(classItem);
        });
    }
    if (modal.level) {
        WINDOW.classList.add(`${'z-' + modal.level}`);
    }
    else {
        WINDOW.classList.add('z-8');
    }
    if (`${modal.style}` == 'dark') {
        WINDOW.classList.add('bg-dark-900', 'fg-light');
    }
    else if (`${modal.style}` == 'light') {
        WINDOW.classList.add('bg-light', 'fg-dark-900');
    }
    else if (`${modal.style}` == 'none') {
        WINDOW.style.color = 'inherit';
    }
    else {
        WINDOW.classList.add('bg-light', 'fg-dark-900');
    }
    if (modal.border == true) {
        WINDOW.classList.add('border');
    }
    else if (modal.border == false) {
        WINDOW.classList.add('no-border');
    }
    else {
        WINDOW.classList.add('border');
    }
    WINDOW.style.position = 'fixed';
    WINDOW.style.height = modal.height;
    WINDOW.style.width = modal.width;
    if (modal.top || modal.right || modal.bottom || modal.left) {
        WINDOW.style.top = modal.top;
        WINDOW.style.right = modal.right;
        WINDOW.style.bottom = modal.bottom;
        WINDOW.style.left = modal.left;
    }
    else {
        WINDOW.style.top = '50%';
        WINDOW.style.left = '50%';
        WINDOW.classList.add('translate--50');
    }
    // ========================
    const HEADER = create('div');
    HEADER.classList.add('flex', 'items-center', 'justify-between', 'full-width');
    HEADER.style.padding = '.2rem';
    const FAVICON = create('img');
    if (modal.icon) {
        FAVICON.src = modal.icon;
        FAVICON.classList.add('size-32');
    }
    const TITLE = create('span');
    TITLE.classList.add('pl-1', 'line-clamp-1', 'line-clamp-sm-1');
    TITLE.innerHTML = modal.title;
    const WIN_Move = create('button');
    WIN_Move.classList.add('bg-none', 'cursor-default', 'fa-solid', 'fa-up-down-left-right', 'p-0', 'rounded-full', 'size-32', 'muted');
    const WIN_Close = create('button');
    WIN_Close.classList.add('bg-none', 'fa-solid', 'fa-times', 'hover:bg-danger', 'p-0', 'rounded-full', 'size-32');
    if (modal.text) {
        var CONTENT = create('p');
        CONTENT.classList.add('border', 'border-t', 'm-0', 'px-2', 'py-1', 'w-full');
        CONTENT.innerHTML = modal.text;
    }
    else if (modal.html) {
        var CONTENT = create('div');
        CONTENT.classList.add('max-height', 'px-2', 'py-1', 'w-full');
        CONTENT.innerHTML = modal.html;
    }
    else if (modal.href) {
        var CONTENT = create('iframe');
        CONTENT.classList.add('no-border');
        CONTENT.height = '100%';
        CONTENT.width = '100%';
        CONTENT.src = modal.href;
        if (modal.header == true) {
            CONTENT.classList.add('border', 'border-t');
        }
    }
    // ======================
    HEADER.ondblclick = () => {
        let move = select('.js_focus');
        let modalGrab = move.getAttribute('aria-grabbed');
        HEADER.classList.toggle('cursor-grabbing');
        if (modalGrab == 'true') {
            WINDOW.setAttribute('aria-grabbed', 'false');
            WIN_Move.classList.add('muted');
        }
        else {
            WINDOW.setAttribute('aria-grabbed', 'true');
            WIN_Move.classList.remove('muted');
        }
    };
    WIN_Close.onclick = () => {
        drop(['.js_focus']);
        try {
            drop(['#modal_overlay']);
        }
        catch (error) {
            return null;
        }
    };
    // ======================
    WINDOW.addEventListener('mouseover', () => {
        WINDOW.classList.add('js_focus');
        if (!modal.level) {
            WINDOW.onclick = () => {
                let lostFocus = select('.z-8');
                if (lostFocus) {
                    lostFocus.classList.add('z-7');
                    lostFocus.classList.remove('z-8');
                }
                WINDOW.classList.add('z-8');
            };
        }
    });
    WINDOW.addEventListener('mouseleave', () => {
        WINDOW.classList.remove('js_focus');
    });
    // =====================
    let div_1 = create('div');
    div_1.classList.add('flex', 'items-center');
    if (modal.icon) {
        div_1.appendChild(FAVICON);
    }
    div_1.appendChild(TITLE);
    let div_2 = create('div');
    div_2.classList.add('flex', 'items-center', 'g-1');
    div_2.appendChild(WIN_Move);
    div_2.appendChild(WIN_Close);
    HEADER.appendChild(div_1);
    HEADER.appendChild(div_2);
    // ========================
    if (modal.header != false) {
        WINDOW.appendChild(HEADER);
    }
    // =========================
    WINDOW.appendChild(CONTENT);
    if (modal.overlay == true) {
        let overlay = create('div');
        overlay.id = 'modal_overlay';
        overlay.classList.add('absolute', 'fullscreen', 'top-0', 'left-0', 'backdrop-blur-10', 'ease-in', 'animate-fadeIn', 'animated-500');
        if (modal.level) {
            let i = modal.level;
            overlay.classList.add(`z-${i - 1}`);
        }
        else {
            overlay.classList.add('z-8');
        }
        document.body.appendChild(overlay);
        document.body.appendChild(WINDOW);
    }
    else {
        document.body.appendChild(WINDOW);
    }
};
/**
 * Cookies
 */
let setCookie = (cookieName, cookieValue, cookieExpiry) => {
    try {
        if (isset(cookieExpiry)) {
            document.cookie = `${cookieName = cookieValue}; expires=${cookieExpiry};`;
        }
        else {
            document.cookie = `${cookieName = cookieValue}`;
        }
    }
    catch (Cookie_ERR) {
        console.error(Cookie_ERR);
    }
};
let unsetCookie = (cookieName, cookieExpiry) => {
    try {
        if (isset(cookieExpiry)) {
            document.cookie = `username=${cookieName}; expires=${cookieExpiry};`;
        }
        else {
            document.cookie = `username=${cookieName}; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
        }
    }
    catch (Cookie_ERR) {
        console.error(Cookie_ERR);
    }
};
