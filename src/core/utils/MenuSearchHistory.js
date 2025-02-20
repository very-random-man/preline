/*
* Util
* @version: 1.2.0
* @author: HtmlStream
* @license: Licensed under MIT (https://preline.co/docs/license.html)
* Copyright 2022 Htmlstream
*/

export default {
    historyIndex: -1,

    addHistory (index) {
        this.historyIndex = index
    },

    existsInHistory (index) {
        return index > this.historyIndex
    },

    clearHistory () {
        this.historyIndex = -1
    }
}