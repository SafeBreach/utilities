/***
The MIT License (MIT)

Copyright (c) 2015 SafeBreach

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
***/ 

'use strict';
// return the relevant call stack to allow for use while logging
function stackFrames(depth) {
    // We're going back 2 frames by default
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
