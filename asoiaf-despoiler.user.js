// ==UserScript==
// @name			asoiaf despoiler
// @version			2.0
// @description		Makes spoiler-tagged content visible on /r/asoiaf. 
// @namespace      http://nowonmai666.github.io/asoiaf-extensions/
// @match        http://www.reddit.com/r/asoiaf/*
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle("");