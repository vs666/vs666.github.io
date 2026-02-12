// Load publications from JSON file
async function loadPublications() {
  try {
    const response = await fetch('data/publications.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const publications = await response.json();
    displayPublications(publications);
  } catch (error) {
    console.error('Error loading publications:', error);
    const container = document.getElementById('publications-container');
    if (container) {
      container.innerHTML = '<p>Unable to load publications.</p>';
    }
  }
}

// Display publications on the page
function displayPublications(publications) {
  const container = document.getElementById('publications-container');
  if (!container) return;

  // Sort publications by year (newest first)
  publications.sort((a, b) => b.year - a.year);

  let html = '';
  publications.forEach(pub => {
    html += `
      <div class="publication">
        <h3><a href="${pub.url}" target="_blank" rel="noopener noreferrer">${pub.title}</a></h3>
        <p class="publication-meta">
          <span class="authors">${pub.authors}</span>
          <br>
          <span class="venue">${pub.venue}</span>
          <span class="year">(${pub.year})</span>
        </p>
        ${pub.abstract ? `<p class="publication-abstract">${pub.abstract}</p>` : ''}
      </div>
    `;
  });

  container.innerHTML = html;
}

// Load publications when the DOM is ready
document.addEventListener('DOMContentLoaded', loadPublications);
