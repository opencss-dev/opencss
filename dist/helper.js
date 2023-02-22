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
        console.error('DOM(el: string)' + `:  => '${el}' is not a valid selector.`);
    }
};
// copie a text to clipboard
let strcopy = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
    }
    catch (err) {
        console.error('Failed to copy text: ', err);
    }
};
// Attrib: Return element specific attribute
let attrib = (el, attrib, set) => {
    let x = select(el);
    if (set) {
        x.setAttribute(`${attrib}`, `${set}`);
    }
    else {
        return x.getAttribute(`${attrib}`);
    }
};
let set_attrib = (el, attrib, set) => {
    let x = select(el);
    if (set) {
        x.setAttribute(`${attrib}`, `${set}`);
    }
    else {
        console.warn('set_attrib(el: string, attrib: any, set?: any)' + `:  => '${el}.atribute(${attrib}) will be empty.`);
        x.setAttribute(`${attrib}`, '');
    }
};
let get_attrib = (el, attrib) => {
    let x = select(el);
    try {
        return x.getAttribute(`${attrib}`);
    }
    catch (ATTR_ERR) {
        console.error(`${ATTR_ERR.name}: get_attrib(el: string, attrib: any) => '${el}' has no a ${attrib} attribute.`);
        return null;
    }
};
// classlist: add/remove element classes
let classlist = (el, toggles) => {
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
        console.error('select(elememt: string, all?: boolean)' + `:  => '${el}' is not a valid selector.`);
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
        console.error(`${select_ERR.name}: selectTag(tag: string) => '${el}' is not a valid selector.`);
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
        console.error(`${selectId_ERR.name}: selectId(id: srting) => '${el}' is not a valid selector.`);
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
 * pop_up: create pup-up box style
 * @param pop_up
 */
let pop_up = function (modal = { title: ``, favicon: ``, content: ``, html: ``, href: ``, titlebar: true, rounded: true, shadow: true, classlist: [], style: ``, border: true, overlay: false, height: ``, width: ``, top: ``, right: ``, bottom: ``, left: ``, index: 8, timeout: 0 }) {
    // Pop_up 
    // #1. Create a new window with basic set
    const WINDOW = create('div');
    // setup
    WINDOW.id = modal.title;
    WINDOW.classList.add('rounded', 'flex', 'flex-column', 'select-none');
    WINDOW.style.position = 'fixed';
    // size
    WINDOW.style.height = modal.height;
    WINDOW.style.width = modal.width;
    // #2. Check window's already exist
    if (selectId(`${WINDOW.id}`)) {
        let el = selectId(WINDOW.id);
        el?.classList.add('animate-pulse');
        setTimeout(() => {
            el?.classList.remove('animate-pulse');
        }, 1000);
        return null;
    }
    // #3. classlist: Add more features/tweaks
    if (modal.classlist) {
        modal.classlist.forEach(classItem => {
            WINDOW.classList.add(classItem);
        });
    }
    // #4. index/z-index: add a window priority (default: 8)
    if (modal.index) {
        WINDOW.classList.add(`${'z-' + modal.index}`);
    }
    else {
        WINDOW.classList.add('z-8');
    }
    // #5. style: choose apearence between dark/light (default: light)
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
    // #6. border: enable window border (default: true)
    if (modal.border == true) {
        WINDOW.classList.add('border');
    }
    else if (modal.border == false) {
        // do nothing ...
    }
    else {
        WINDOW.classList.add('border');
    }
    // #7. rounded: enable window rounded border (default: true)
    if (modal.rounded == true) {
        WINDOW.classList.add('rounded');
    }
    else if (modal.rounded == false) {
        // do nothing ...
    }
    else {
        WINDOW.classList.add('rounded');
    }
    // #8. shadow: enable window shadow (default: true)
    if (modal.shadow == true) {
        WINDOW.classList.add('shadow-sm');
    }
    else if (modal.shadow == false) {
        // do nothing ...
    }
    else {
        WINDOW.classList.add('shadow-sm');
    }
    // #9. [top, right, bottom, left]: set window position
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
    // #10. header/title bar
    // #10.1 Create a title bar 
    const HEADER = create('div');
    HEADER.classList.add('flex', 'items-center', 'justify-between', 'full-width');
    HEADER.style.padding = '.2rem';
    // #10.2 favicon: add an icon as window illustrator
    const FAVICON = create('img');
    if (modal.favicon) {
        FAVICON.src = modal.favicon;
        FAVICON.classList.add('size-32');
    }
    // #10.3 Window action bar
    // * title: set the window title/id
    const TITLE = create('span');
    TITLE.classList.add('pl-1', 'line-clamp-1', 'sm:line-clamp-1');
    TITLE.innerHTML = modal.title;
    // * add moving icon
    const WIN_Move = create('button');
    WIN_Move.classList.add('bg-none', 'cursor-default', 'fa-solid', 'fa-up-down-left-right', 'p-0', 'rounded-full', 'size-32', 'muted');
    // * add closing button
    const WIN_Close = create('button');
    WIN_Close.classList.add('bg-none', 'fa-solid', 'fa-times', 'hover:bg-danger', 'p-0', 'rounded-full', 'size-32');
    // #11. views: create adaptable content
    var view = null;
    if (modal.content) {
        view = 'p';
    }
    else if (modal.html) {
        view = 'div';
    }
    else if (modal.href) {
        view = 'iframe';
    }
    // - create main window view
    const CONTENT = create(view);
    if (modal.content) {
        CONTENT.classList.add('m-0', 'px-2', 'py-1', 'w-full');
        CONTENT.innerHTML = modal.content;
        if (modal.titlebar == true) {
            CONTENT.classList.add('border', 'border-0', 'border-t-1');
        }
    }
    else if (modal.html) {
        CONTENT.classList.add('max-height', 'border-0', 'border-t-1', 'border-white', 'px-2', 'py-1', 'w-full');
        CONTENT.innerHTML = modal.html;
    }
    else if (modal.href) {
        CONTENT.classList.add('no-border');
        CONTENT.height = '100%';
        CONTENT.width = '100%';
        CONTENT.src = modal.href;
        if (modal.titlebar == true) {
            CONTENT.classList.add('border-0', 'border-t-1', 'border-white');
        }
    }
    // #12. Actions
    // #12.1 draging action (double-click)
    WINDOW.ondblclick = () => {
        let move = get_attrib('.js_focus', 'aria-grabbed');
        WINDOW.classList.toggle('cursor-grabbing');
        if (move == 'true') {
            WINDOW.setAttribute('aria-grabbed', 'false');
            WIN_Move.classList.add('muted');
        }
        else {
            WINDOW.setAttribute('aria-grabbed', 'true');
            WIN_Move.classList.remove('muted');
        }
    };
    WINDOW.addEventListener('mousemove', (e) => {
        let focus = select('.js_focus');
        let drag = get_attrib(`#${focus.id}`, 'aria-grabbed');
        // ajust window option according to cursor position
        if (focus && drag == 'true') {
            let x = e.clientX;
            let y = e.clientY;
            WINDOW.style.left = `${x}px`;
            WINDOW.style.top = `${y}px`;
        }
    });
    // #12.1 closing action (cross button click)
    WIN_Close.onclick = () => {
        drop(['.js_focus']);
        try {
            // remove window overlay if enabled
            drop(['#modal_overlay']);
        }
        catch (error) {
            return null;
        }
    };
    // #12.2 focus/`switch focus` action priority(hover/click on window)
    WINDOW.addEventListener('mouseover', () => {
        WINDOW.classList.add('js_focus');
        if (!modal.index) {
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
    // #12.3 lost focus priority
    WINDOW.addEventListener('mouseleave', () => {
        WINDOW.classList.remove('js_focus');
    });
    // #12.4 timeout
    if (modal.timeout != 0 && modal.timeout != null) {
        let timeout = modal.timeout;
        setTimeout(() => {
            WINDOW.classList.add('animate-fadeOut');
        }, timeout);
        WINDOW.remove();
    }
    // #13. final views
    // # header sections
    //   - favicon & title block
    let div_1 = create('div');
    div_1.classList.add('flex', 'items-center');
    if (modal.favicon) {
        div_1.appendChild(FAVICON);
    }
    div_1.appendChild(TITLE);
    //   - window actions block
    let div_2 = create('div');
    div_2.classList.add('flex', 'items-center', 'g-1');
    div_2.appendChild(WIN_Move);
    div_2.appendChild(WIN_Close);
    HEADER.appendChild(div_1);
    HEADER.appendChild(div_2);
    // #14. Ready header view's
    if (modal.titlebar != false) {
        WINDOW.appendChild(HEADER);
    }
    // #15. Ready content view's
    WINDOW.appendChild(CONTENT);
    // *** overlay options view ***
    if (modal.overlay == true) {
        let overlay = create('div');
        overlay.id = 'modal_overlay';
        overlay.classList.add('absolute', 'fullscreen', 'top-0', 'left-0', 'backdrop-blur-10', 'ease-in', 'animate-fadeIn', 'animated-500');
        if (modal.index) {
            let i = modal.index;
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
 * Cookies manage
 */
let set_cookie = (cookieName, cookieValue, cookieExpiry) => {
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
let unset_cookie = (cookieName, cookieExpiry) => {
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
