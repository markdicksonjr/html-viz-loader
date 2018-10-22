document.addEventListener('DOMContentLoaded', function() {
    const vizElements = document.querySelectorAll("[data-viz]");
    vizElements.forEach(function(vizElement) {
        vizElement.remove();
    });

    function onVizReady() {
        vizElements.forEach(function(vizElement) {
            const format = vizElement.dataset.format || "png-image-element";
            document.body.appendChild(Viz(vizElement.innerText, {
                format: format,
            }));
        });
    }

    // don't load viz.js if it's already loaded
    if(typeof(window.Viz) !== 'undefined') {
        onVizReady();
        return;
    }

    // load the default viz.js if we need to
    const vizScript = document.createElement('script');
    vizScript.type = 'text/javascript';
    vizScript.src = "https://github.com/mdaines/viz.js/releases/download/v1.8.0/viz.js";
    document.body.appendChild(vizScript);

    vizScript.onload = onVizReady;
});
