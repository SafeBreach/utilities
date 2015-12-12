'use strict';
// return the relevant call stack to allow for use while logging, for example
function stackFrames(depth) {
    depth = (typeof depth !== 'undefined') ? depth : 2;
    var err = new Error();
    var frame = err.stack.split('\n')[depth];
    var p = frame.match(/at\s*([A-Za-z0-9._-]*).*\/([A-Za-z0-9._-]+\.\w*:\d*:\d*)/);
    // let's be a little protective...
    if (p === null) {
        p = "";
    }
    return p;
}

module.exports.stackFrames = stackFrames;
