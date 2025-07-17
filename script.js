const grid = document.getElementById('grid');

for(let i = 1; i <= 30; i++){
    const link = document.createElement('a');
    link.href = `Day ${i}/index.html`;
    link.setAttribute('target', '_blank');
    link.textContent = 'Day ' + i;
    link.classList.add('day-link');
    grid.appendChild(link);
}