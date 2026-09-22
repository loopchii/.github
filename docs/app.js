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
const lenses = {
  people: { kicker: 'A decision is not the end of the story.', question: 'Can someone question a decision that changes their life?', explanation: 'Accuracy matters. So does what happens when a system is wrong—and whether the person affected has a way to be heard.', label: 'Follow our research ↗', href: 'https://www.loopchii.com/research/' },
  places: { kicker: 'The world rarely reads the specification.', question: 'What changes when a model meets a street, a sensor, a storm?', explanation: 'Context can change the meaning of a result. We explore how data, physical environments and human choices meet, especially where getting it wrong has real consequences.', label: 'Explore Space ↗', href: 'https://www.loopchii.space/' },
  play: { kicker: 'Small steps. Suspiciously interesting creatures.', question: 'Could a difficult beginning feel like a small discovery?', explanation: 'Play lets us try, notice and begin again. Ouchii Mori brings that spirit to a little world with room for your own pace—and absolutely no obligation to be normal.', label: 'Meet Ouchii Mori ↗', href: 'https://www.loopchii.games/' }
};
const stage = document.querySelector('.lens-stage');
const lensControls = stage.querySelector('.lens-controls');
lensControls.hidden = false;
lensControls.addEventListener('click', e => {
  const button = e.target.closest('button[data-lens]');
  if (!button || button.getAttribute('aria-pressed') === 'true') return;
  const key = button.dataset.lens, lens = lenses[key];
  stage.dataset.lens = key;
  lensControls.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  stage.querySelector('.lens-kicker').textContent = lens.kicker;
  stage.querySelector('.lens-question').textContent = lens.question;
  stage.querySelector('.lens-explanation').textContent = lens.explanation;
  const link = stage.querySelector('.lens-link'); link.textContent = lens.label; link.href = lens.href;
  const answer = stage.querySelector('.lens-answer');
  answer.classList.remove('arriving');
  requestAnimationFrame(() => requestAnimationFrame(() => answer.classList.add('arriving')));
});
