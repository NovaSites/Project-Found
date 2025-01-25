function filterTags() {
    const searchInput = document.getElementById('searchInput');
    const filter = searchInput.value.toLowerCase();
    const tagsArray = filter.split(/\s+/).map(tag => tag.trim()); // Split the input into an array of tags

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const tags = card.getAttribute('data-tags').toLowerCase().split(',').map(tag => tag.trim());
        const cardName = card.querySelector('p').textContent.toLowerCase(); // Get the card name
        const allTagsMatch = tagsArray.every(tag => tags.includes(tag)); // Check if all tags match
        const nameMatches = tagsArray.some(tag => cardName.includes(tag)); // Check if any tag matches the card name


        if (allTagsMatch || nameMatches) {
            card.style.display = 'block'; // Show card
        } else {
            card.style.display = 'none'; // Hide card
        }
    });
}
