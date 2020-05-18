
function liveprop(svar, shorthand, unit, target) {

    let input = document.getElementById(`${svar}`);
    let label = document.getElementById(`${svar}-label`);
    let demotarget = document.getElementById(`${target}`);

    input.addEventListener('input', ({ target }) => {
        let propValue = target.value + unit;
        label.textContent = shorthand + ':' + propValue + ';';
        demotarget.style.setProperty(shorthand, propValue);
    });
    
    input.addEventListener('mousedown', () => {
        label.classList.add('changing');
    });
    
    input.addEventListener('mouseup', () => {
        label.classList.remove('changing');
    });
}

(function() {
    document.addEventListener("DOMContentLoaded", function() {
        liveprop('padding', '--p', 'px', 'demo');
        liveprop('maxw', '--maxw', 'px', 'demo');
        liveprop('br', '--br', 'px', 'demo');
        liveprop('levitate', '--levitate', '', 'demo');
    });
})();