document.addEventListener('DOMContentLoaded', function () {
    // Initial load
    loadNews('home');

    // Navigation click events
    document.getElementById('home').addEventListener('click', function () {
        loadNews('home');
    });

    document.getElementById('politics').addEventListener('click', function () {
        loadNews('politics');
    });

    document.getElementById('technology').addEventListener('click', function () {
        loadNews('technology');
    });

    document.getElementById('sports').addEventListener('click', function () {
        loadNews('sports');
    });
});

function loadNews(category) {
    // For the sake of this example, let's create some demo news
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';

    const newsData = getDemoNewsData(category);
    newsData.forEach(news => {
        const article = document.createElement('article');
        const title = document.createElement('h2');
        const content = document.createElement('p');

        title.textContent = news.title;
        content.textContent = news.content;

        article.appendChild(title);
        article.appendChild(content);
        newsContainer.appendChild(article);
    });
}

function getDemoNewsData(category) {
    // In a real application, you would fetch data from an API
    // For now, let's create some demo data
    const categories = {
        home: [
            { title: 'Breaking News', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { title: 'Local News', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
        ],
        politics: [
            { title: 'Government Update', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
            { title: 'Election Coverage', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' }
        ],
        technology: [
            { title: 'New Tech Release', content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
            { title: 'Innovation in AI', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
        ],
        sports: [
            { title: 'Football Highlights', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { title: 'Basketball Tournament', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' }
        ]
    };

    return categories[category] || [];
}
