export function getIdNameForNav(name: string) {
    return {
        name: name,
        id: name
    }
}

export var youtubeResolve: () => void;
export var youtubePromise = new Promise<void>(resolve => {
    youtubeResolve = resolve;
})

var scriptsLoaded: { [src: string]: Promise<void> } = {};

export function loadScript(src: string): Promise<void> {
    if (!scriptsLoaded[src]) {
        let promise = new Promise<void>((resolve) => {
            let elm = document.createElement('script');
            elm.type = "text/javascript";
            elm.onload = function() {
                resolve();
            }
            elm.src = src;
            document.head.appendChild(elm);
        });
        scriptsLoaded[src] = promise;
    }
    return scriptsLoaded[src];
}