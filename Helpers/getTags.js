fetch('cards.json')
    .then(response => response.json())
    .then(data => {
        const cardsContainer = document.getElementById('cards');
        data.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.setAttribute('data-tags', card.tags);
            cardElement.innerHTML = `
                <img class="icon" src="${iconPath}${card.name}${iconEnding}" alt="">
                <p>${card.name}</p>
            `;

            cardsContainer.appendChild(cardElement);
        });
    })
    .catch(error => console.error('Error loading cards:', error));
