function runCallbacks(callbacks) {
    callbacks.forEach(callback => callback ());
}

function firstCallback() {
    console.log(`This is first callback`);
}

function secondCallback() {
    console.log(`This is second callback`);
}

function thirdCallback() {
    console.log(`This is third callback`);
}

const callbackArray = [firstCallback, secondCallback, thirdCallback];
runCallbacks(callbackArray);
