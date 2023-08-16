const blogs = [
    { title: 'Python Environment for Time Series Forecasting', content: 'This is the content for blog post 1.', description: 'Description for post 1', image: '../images/1time_series_img.png' },
    { title: 'Exploring Time Series Data with Pandas', content: 'This is the content for blog post 2.', description: 'Description for post 2', image: '../images/2data_prep.png' },
    { title: 'White Noise in Time Series Forecasting', content: 'This is the content for blog post 3.', description: 'Description for post 3', image: '../images/3temporal_str.png' },
];

const cardsContainer = document.getElementById('cards');

blogs.forEach((blog, index) => {
    let cardElement;
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${blog.image}" alt="${blog.title}">
        <h2>${blog.title}</h2>
        <p class="description">${blog.description}</p>
        <p>${blog.content}</p>`;

    if (index === 0) { // If it's the first card
        cardElement = document.createElement('a');
        cardElement.href = '/pages/blogs/fundamental.html'; // Link to the page
        cardElement.className = 'card-link'; // Optional class for styling
        cardElement.appendChild(card);
    } else if (index == 1){
        cardElement = document.createElement('a');
        cardElement.href = '/pages/blogs/data_prep.html'; // Link to the page
        cardElement.className = 'card-link'; // Optional class for styling
        cardElement.appendChild(card);
        
    }else if (index == 2){
        cardElement = document.createElement('a');
        cardElement.href = '/pages/blogs/Temporal_Structure.html'; // Link to the page
        cardElement.className = 'card-link'; // Optional class for styling
        cardElement.appendChild(card);
        
    }
    else{
        cardElement = card;
    }
    
    cardsContainer.appendChild(cardElement); // Append the card or link to the container
});
