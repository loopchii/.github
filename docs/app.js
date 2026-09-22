// Progressive enhancement for a static public introduction. No telemetry or account state.
const motion = document.querySelector('.motion');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
let paused = reduced.matches;
function setMotion(value) { paused = value; document.body.classList.toggle('paused', paused); motion.setAttribute('aria-pressed', String(paused)); motion.disabled = reduced.matches; motion.textContent = reduced.matches ? 'Reduced motion' : paused ? 'Resume motion' : 'Pause motion'; }
motion.hidden = false;
setMotion(paused);
motion.addEventListener('click', () => setMotion(!paused));
reduced.addEventListener('change', e => setMotion(e.matches));
const groups = { all: [], research: ['space', 'live', 'cloud'], design: ['online'], play: ['games'] };
const notes = { all: 'Choose a destination below. Each has its own purpose; all belong to the same company.', research: 'Follow a question into Space, look more closely at evaluation in Live, or see what is taking shape in Cloud.', design: 'Online is a first glimpse of new web experiences. For selected work and project inquiries, explore Design.', play: 'A tiny world with big feelings. Meet Ouchii Mori on Games; the preview is open while the game takes shape.' };
const controls = document.querySelector('.thread-controls'); controls.hidden = false;
controls.addEventListener('click', e => { const button = e.target.closest('[data-thread]'); if (!button) return; const key = button.dataset.thread; controls.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === button))); document.querySelectorAll('[data-destination]').forEach(card => card.classList.toggle('highlight', groups[key].includes(card.dataset.destination))); document.querySelector('.thread-note').textContent = notes[key]; });
