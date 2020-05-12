
function liveprop(svar, shorthand, unit) {

    let input = document.getElementById(`${svar}`);
    let label = document.getElementById(`${svar}-label`);
    let sampleText = document.querySelector('.demo');

    input.addEventListener('input', ({ target }) => {
        let propValue = target.value + unit;
        label.textContent = shorthand + ':' + propValue + ';';
        sampleText.style.setProperty(shorthand, propValue);
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
        liveprop('padding', '--p', 'px');
        liveprop('maxw', '--maxw', 'px');
        liveprop('br', '--br', 'px');
        liveprop('levitate', '--levitate', '');
    });
})();