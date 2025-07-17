const grid = document.getElementById('grid');

for(let i = 1; i <= 30; i++){
    const link = document.createElement('a');
    link.textContent = 'Day ' + i;
    link.href = `Day ${i}/index.html`
    link.classList.add('day-link');
    grid.appendChild(link);
}