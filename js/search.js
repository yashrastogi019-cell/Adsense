// ===== CLIENT-SIDE SEARCH — TechPulse Blog =====

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const cardsContainer = document.getElementById('articles-grid');
  if (!searchInput || !cardsContainer) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const cards = cardsContainer.querySelectorAll('.card');
    cards.forEach(card => {
      const title = (card.querySelector('.card-title')?.textContent || '').toLowerCase();
      const excerpt = (card.querySelector('.card-excerpt')?.textContent || '').toLowerCase();
      const category = (card.querySelector('.card-category')?.textContent || '').toLowerCase();
      const match = !query || title.includes(query) || excerpt.includes(query) || category.includes(query);
      card.style.display = match ? '' : 'none';
    });
  });
});
