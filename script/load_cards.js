document.addEventListener('DOMContentLoaded', () => {
    loadCards();
});

function loadCards() {
    fetch('json/cards.json')
        .then(response => response.json())
        .then(data => {
            const cardsContainer = document.getElementById('cards');
            data.forEach(card => {
                const cardElement = document.createElement('div');
                cardElement.className = 'card';
                cardElement.setAttribute('data-tags', card.tags);
                cardElement.innerHTML = `
                    <a href='${card.pageUrl}' target='_blank'>
                        <img class="icon" src="${card.iconUrl}" alt="Icon not available">
                    </a> 
                    <p class="card_text">${card.name}</p>
                `;
                cardsContainer.appendChild(cardElement);
            });
        })
        .catch(error => console.error('Error loading cards:', error));
}
