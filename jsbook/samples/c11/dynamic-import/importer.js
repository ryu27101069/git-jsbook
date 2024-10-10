document.querySelector('#btn').addEventListener('click', async (e) => {
  const module = await import('./exporter.js');
  const [r, g, b] = module.makeColor();
  e.target.style['border-color'] = `rgba(${r}, ${g}, ${b}, 0.1)`;
  e.target.style['background-color'] = `rgba(${r}, ${g}, ${b}, 0.4)`;
  e.target.style['color'] = `rgb(${r}, ${g}, ${b})`;
});
