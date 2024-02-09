function changeBackground() {
    const colors = ['#9a5252', '#3a7e3a', '#4b4b9d', '#969626'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
