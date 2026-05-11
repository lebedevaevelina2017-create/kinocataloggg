 const moviesData = [
        { id: 1, title: "Джон Уик 4", year: 2023, rating: 8.2, genre: "боевик", description: "Легендарный киллер Джон Уик продолжает сражаться против Теневой организации. Невероятная хореография боев и стиль.", poster: "https://ir.ozone.ru/s3/multimedia-0/6881606496.jpg" },
        { id: 2, title: "Интерстеллар", year: 2014, rating: 8.6, genre: "фантастика", description: "Группа исследователей использует недавно обнаруженный червоточину, чтобы преодолеть ограничения космических путешествий.", poster: "https://upload.wikimedia.org/wikipedia/ru/c/c3/Interstellar_2014.jpg" },
        { id: 3, title: "Зеленая книга", year: 2018, rating: 8.2, genre: "драма", description: "Итальяно-американский вышибала нанимается водителем к афроамериканскому пианисту во время турне по югу США.", poster: "https://upload.wikimedia.org/wikipedia/ru/f/f0/Green_Book.jpg" },
        { id: 4, title: "Дюна", year: 2021, rating: 8.5, genre: "фантастика", description: "Пол Атрейдес объединяется с фременами, чтобы отомстить заговорщикам, уничтожившим его семью.", poster: "https://upload.wikimedia.org/wikipedia/ru/6/61/%D0%94%D1%8E%D0%BD%D0%B0_%E2%80%94_%D0%A7%D0%B0%D1%81%D1%82%D1%8C_%D0%B2%D1%82%D0%BE%D1%80%D0%B0%D1%8F_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.jpg" },
        { id: 5, title: "Оппенгеймер", year: 2023, rating: 8.4, genre: "драма", description: "История американского физика Роберта Оппенгеймера, сыгравшего ключевую роль в создании атомной бомбы.", poster: "https://upload.wikimedia.org/wikipedia/ru/b/bf/%D0%9E%D0%BF%D0%BF%D0%B5%D0%BD%D0%B3%D0%B5%D0%B9%D0%BC%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg" },
        { id: 6, title: "Ford против Ferrari", year: 2019, rating: 8.1, genre: "драма", description: "Американские инженеры и гонщики создают гоночный автомобиль для победы над Ferrari.", poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/4483402c-c1bb-4768-8b67-aa2b25355b7b/180" },
        { id: 7, title: "Безумный Макс", year: 2015, rating: 7.9, genre: "боевик", description: "В мире постапокалипсиса Макс присоединяется к бунтарке Фуриосе.", poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/bb4af960-9287-40e5-879e-fa80a20d82d9/orig" },
        { id: 8, title: "Начало", year: 2010, rating: 8.8, genre: "фантастика", description: "Вор, способный проникать в чужие сны, получает задание внедрить идею.", poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/57165332-a703-410d-b3d8-5ab28ce34caa/180" },
        { id: 9, title: "Джокер", year: 2019, rating: 8.4, genre: "триллер", description: "История происхождения Артура Флека, неудачливого комика.", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNekebY60AxgQLPImoBjaWtS5EiA6-qSV20g&s" },
        { id: 10, title: "Малыш на драйве", year: 2017, rating: 7.6, genre: "боевик", description: "Молодой водитель работает на криминального босса.", poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/7feaec2e-e185-41eb-8ffb-0bf808d7a8aa/220x330" },
        { id: 11, title: "Один дома", year: 1990, rating: 7.6, genre: "комедия", description: "Мальчик остается один дома на Рождество.", poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/c7195513-24f6-4e80-8f8a-d6777577abb9/180" },
        { id: 12, title: "Волк с Уолл-стрит", year: 2013, rating: 8.2, genre: "криминал", description: "Взлёт и падение брокера.", poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/c5876e81-9dec-43e2-923f-fee2fca85e21/180" },
        { id: 13, title: "Паразиты", year: 2019, rating: 8.5, genre: "триллер", description: "Семья проникает в жизнь богатого дома.", poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/7201902d-1e34-4545-90f1-b0405b529915/180" },
        { id: 14, title: "Криминальное чтиво", year: 1994, rating: 8.9, genre: "криминал", description: "Переплетающиеся истории гангстеров.", poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/d9fffd95-f9cf-42bc-bf81-b0c9c59ee507/180" },
        { id: 15, title: "Треугольник печали", year: 2022, rating: 7.5, genre: "комедия", description: "Круиз для богатых оборачивается катастрофой.", poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/55bcf4fe-967b-4665-a1ab-4ef6a66adad5/180" },
        { id: 16, title: "Бойцовский клуб", year: 1999, rating: 8.8, genre: "триллер", description: "Офисный работник и мыловар организуют подпольный клуб.", poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/6c5cdb4c-5e28-4552-aac4-beb4efaf718d/180" },
        { id: 17, title: "Мир Юрского периода", year: 2015, rating: 7.0, genre: "фантастика", description: "Парк развлечений с динозаврами выходит из-под контроля.", poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/b36c8f31-8e2a-4c99-bf27-82892be41927/orig" }
    ];

    // --- Состояние ---
    let currentGenre = "all";
    let searchQuery = "";

    // --- DOM элементы ---
    const moviesGrid = document.getElementById("moviesGrid");
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const filterBtns = document.querySelectorAll(".filter-btn");
    const modal = document.getElementById("movieModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalPoster = document.getElementById("modalPoster");
    const modalDetails = document.getElementById("modalDetails");
    const closeModalBtn = document.getElementById("closeModalBtn");

    // --- Функция отрисовки карточек ---
    function renderMovies() {
        // Фильтрация
        let filtered = moviesData.filter(movie => {
            const matchGenre = currentGenre === "all" || movie.genre === currentGenre;
            const matchSearch = searchQuery === "" || movie.title.toLowerCase().includes(searchQuery.toLowerCase());
            return matchGenre && matchSearch;
        });

        if (filtered.length === 0) {
            moviesGrid.innerHTML = '<div class="no-results">Фильмов не найдено... Попробуйте другие фильтры</div>';
            return;
        }

        // Создаём HTML карточек
        let cardsHtml = "";
        for (let movie of filtered) {
            cardsHtml += `
                <div class="movie-card" data-id="${movie.id}">
                    <img class="movie-img" src="${movie.poster}" alt="${movie.title}" loading="lazy" onerror="this.src='https://placehold.co/300x450?text=Нет+картинки'">
                    <div class="movie-info">
                        <div class="movie-title">${movie.title}</div>
                        <div class="movie-meta">
                            <span class="year"> ${movie.year}</span>
                            <span class="rating"> ${movie.rating}</span>
                        </div>
                        <div class="genre">🎭 ${movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1)}</div>
                    </div>
                </div>
            `;
        }
        moviesGrid.innerHTML = cardsHtml;

        // Навешиваем обработчики на карточки
        document.querySelectorAll(".movie-card").forEach(card => {
            card.addEventListener("click", () => {
                const id = parseInt(card.getAttribute("data-id"));
                const movie = moviesData.find(m => m.id === id);
                if (movie) openModal(movie);
            });
        });
    }

    // --- Модальное окно ---
    function openModal(movie) {
    modalTitle.textContent = movie.title;
    modalPoster.src = movie.poster;
    modalPoster.alt = movie.title;
    modalPoster.onerror = function() { this.src = 'https://placehold.co/500x750?text=Нет+постера'; };
    
    // Стиль как на первой картинке — с разделителем и аккуратным форматированием
    modalDetails.innerHTML = `
        <p><strong>Год:</strong> ${movie.year}</p>
        <p><strong>Рейтинг:</strong> ${movie.rating}/10</p>
        <p><strong>Жанр:</strong> ${movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1)}</p>
        <hr>
        <p><strong>Описание:</strong><br>${movie.description}</p>
    `;
    
    modal.classList.add("active");
    document.body.style.overflow = "hidden";

    }

    function closeModal() {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    }

    // --- Обработчики ---
    function initFilters() {
        filterBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                filterBtns.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                currentGenre = btn.getAttribute("data-genre");
                renderMovies();
            });
        });
    }

    function initSearch() {
        const performSearch = () => {
            searchQuery = searchInput.value;
            renderMovies();
        };
        searchBtn.addEventListener("click", performSearch);
        searchInput.addEventListener("keyup", (e) => {
            if (e.key === "Enter") performSearch();
        });
    }

    function initModal() {
        closeModalBtn.addEventListener("click", closeModal);
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeModal();
        });
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && modal.classList.contains("active")) closeModal();
        });
    }
    // --- Статистика для футера ---
function updateFooterStats() {
    const total = moviesData.length;
    document.getElementById('totalCount').textContent = total;
    
    // Подсчёт жанров
    const genreCount = {};
    moviesData.forEach(movie => {
        genreCount[movie.genre] = (genreCount[movie.genre] || 0) + 1;
    });
    
    let topGenre = '';
    let maxCount = 0;
    for (const [genre, count] of Object.entries(genreCount)) {
        if (count > maxCount) {
            maxCount = count;
            topGenre = genre.charAt(0).toUpperCase() + genre.slice(1);
        }
    }
    document.getElementById('topGenre').textContent = topGenre || '—';
    
    // Самый старый и новый фильм
    let oldest = moviesData[0];
    let newest = moviesData[0];
    let topRatedMovie = moviesData[0];
    
    moviesData.forEach(movie => {
        if (movie.year < oldest.year) oldest = movie;
        if (movie.year > newest.year) newest = movie;
        if (movie.rating > topRatedMovie.rating) topRatedMovie = movie;
    });
    
    document.getElementById('oldestMovie').textContent = `${oldest.title} (${oldest.year})`;
    document.getElementById('newestMovie').textContent = `${newest.title} (${newest.year})`;
    document.getElementById('topRated').textContent = `${topRatedMovie.title} — ${topRatedMovie.rating}⭐`;
}

// Вызываем при загрузке
updateFooterStats();

    // --- Запуск ---
    initFilters();
    initSearch();
    initModal();
    renderMovies();
