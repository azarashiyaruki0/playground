console.log('hello world')

'use strict';

document.addEventListener('keydown', (event) => {
    
    const keyName = event.key;
    const keyCode = event.code;
    var el = document.getElementById('voice');

    if (keyName === 'Control') {
        // do not alert when only Control key is pressed.
        return;
    }

    if (event.ctrlKey) {
        // Even though event.key is not 'Control' (e.g., 'a' is pressed),
        // event.ctrlKey may be true if Ctrl key is pressed at the same time.
        el.innerText = `Combination of ctrlKey + ${keyName}`;
    } else {
        el.innerText = `Key pressed ${keyName}`;
    }

    console.log(`keydown ${keyName} ${keyCode}`)

}, false);

document.addEventListener('keyup', (event) => {

    const keyName = event.key;
    const keyCode = event.code;
    var time = new date().getTime();
    var el = document.getElementById('voice');
  
    // As the user releases the Ctrl key, the key is no longer active,
    // so event.ctrlKey is false.
    if (keyName === 'Control') {
        el.innerText = 'Control key was released';
    }

    console.log(`keyup ${keyName} ${keyCode}`)

  }, false);