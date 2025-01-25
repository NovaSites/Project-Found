document.addEventListener('DOMContentLoaded', () => {
    if (isUserLoggedIn()) {
        loadCards();
    } else {
        alert("You must be logged in to view cards.");
    }
});

function isUserLoggedIn() {
    // Implement your logic to check if the user is logged in
    // This could be a check for a token in localStorage or a session variable
    return localStorage.getItem('userLoggedIn') === 'true'; // Example check
}

function loadCards() {
    fetch('../json/cards.json')
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
