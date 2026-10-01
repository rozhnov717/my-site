document.querySelectorAll('.burger').forEach(btn => {
  btn.addEventListener('click', () => {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    const isOpen = nav.style.display === 'flex';
    nav.style.display = isOpen ? '' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '100%';
    nav.style.right = '1rem';
    nav.style.background = '#fff';
    nav.style.padding = '1rem';
    nav.style.borderRadius = '0.75rem';
    nav.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
  });
});