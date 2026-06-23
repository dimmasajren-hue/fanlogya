// ===== ПЕРЕКЛЮЧЕНИЕ МЕЖДУ ГЛАВНОЙ И ХРОНОЛОГИЕЙ =====
function openLore(url) {
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('lorePage').classList.add('active');
    document.getElementById('loreFrame').src = url;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeLore() {
    document.getElementById('mainPage').style.display = 'block';
    document.getElementById('lorePage').classList.remove('active');
    document.getElementById('loreFrame').src = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== ПОКАЗЫВАТЬ ГЛАВНУЮ ПРИ ЗАГРУЗКЕ =====
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mainPage').style.display = 'block';
    document.getElementById('lorePage').classList.remove('active');
});

// ===== ПОИСК =====
function searchGames() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.game-card');
    cards.forEach(card => {
        const title = card.querySelector('.game-title')?.textContent?.toLowerCase() || '';
        const sub = card.querySelector('.game-sub')?.textContent?.toLowerCase() || '';
        card.style.display = (title.includes(query) || sub.includes(query)) ? 'block' : 'none';
    });
}

// ===== КНОПКИ КАТЕГОРИЙ =====
function showMain() {
    document.getElementById('mainPage').style.display = 'block';
    document.getElementById('lorePage').classList.remove('active');
    document.getElementById('loreFrame').src = '';
    document.querySelectorAll('.game-card').forEach(c => c.style.display = 'block');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('.nav-categories a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.nav-categories a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');
        showMain();
    });
});