function move(event) {
    const block = document.getElementById("block");
    if (event.key === 'ArrowRight') {
        const leftPosition = +block.style.left.slice(0, block.style.left.length - 2);
        if (leftPosition < 1100) {
            block.style.left = leftPosition + 10 + "px";
        }
    }
    else if (event.key === 'ArrowLeft') {
        const rightPosition = +block.style.left.slice(0, block.style.left.length - 2);
        if (rightPosition > 0) {
            block.style.left = rightPosition - 10 + "px";
        }
    }

    else if (event.key === 'ArrowUp') {
        const topPosition = +block.style.top.slice(0, block.style.top.length - 2);
        if (topPosition > 0) {
            block.style.top = topPosition - 10 + "px";
        }
    }

    else if (event.key === 'ArrowDown') {
        const bottomPosition = +block.style.top.slice(0, block.style.top.length - 2);
        if (bottomPosition < 700) {
            block.style.top = bottomPosition + 10 + "px";
        }
    }
}