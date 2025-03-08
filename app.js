let innerCursor = document.querySelector('.inner-cursor')
let outerCursor = document.querySelector('.outer-cursor')
document.addEventListener('mousemove', moveCursor)

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;

    innerCursor.computedStyleMap.left = `${x}px`
    innerCursor.computedStyleMap.top = `${y}px`
    outerCursor.computedStyleMap.left = `${x}px`
    outerCursor.computedStyleMap.top = `${y}px`
}