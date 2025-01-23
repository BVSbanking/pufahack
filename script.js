document.addEventListener('DOMContentLoaded', function() {
    const infoButton = document.getElementById('infoButton');
    const infoPopup = document.getElementById('infoPopup');
    const registerButton = document.getElementById('registerButton');
    const loginButton = document.getElementById('loginButton');
    const promoButton = document.getElementById('promoButton');
    const promoPopup = document.getElementById('promoPopup');
    const submitPromo = document.getElementById('submitPromo');
    const promoInput = document.getElementById('promoInput');
    const buyButton = document.getElementById('buyButton');
    const downloadButton = document.getElementById('downloadButton');
    const errorPopup = document.getElementById('errorPopup');
    const balanceElement = document.getElementById('balance');

    let balance = 0;
    let isLoggedIn = false;

    // Анимация появления сайта
    document.body.style.opacity = '1';

    // Инфо кнопка
    infoButton.addEventListener('click', function() {
        infoPopup.style.opacity = infoPopup.style.opacity === '1' ? '0' : '1';
    });

    // Регистрация и вход
    registerButton.addEventListener('click', function() {
        alert('ок');
        isLoggedIn = true;
        startBalanceIncrement();
    });

    loginButton.addEventListener('click', function() {
        alert('ок');
        isLoggedIn = true;
        startBalanceIncrement();
    });

    // Промокод
    promoButton.addEventListener('click', function() {
        promoPopup.style.opacity = '1';
    });

    submitPromo.addEventListener('click', function() {
        if (!isLoggedIn) {
            alert('нажмите получать баланс для доступа');
            return;
        }

        if (promoInput.value === 'bear33') {
            balance += 5000;
            balanceElement.textContent = balance;
            promoPopup.style.opacity = '0';
            alert('Промокод применен!');
        } else {
            alert('Неверный промокод');
        }
    });

    // Покупка игры
    buyButton.addEventListener('click', function() {
        if (balance >= 1000) {
            balance -= 1000;
            balanceElement.textContent = balance;
            buyButton.classList.add('hidden');
            downloadButton.classList.remove('hidden');
        } else {
            errorPopup.style.opacity = '1';
            setTimeout(() => {
                errorPopup.style.opacity = '0';
            }, 2000);
        }
    });

    // Загрузка файла
    downloadButton.addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = 'fortnite.rar'; // Убедитесь, что путь к файлу правильный
        link.download = 'fortnite.rar'; // Имя файла при скачивании
        document.body.appendChild(link); // Добавляем ссылку в DOM
        link.click(); // Имитируем клик по ссылке
        document.body.removeChild(link); // Удаляем ссылку из DOM после скачивания
    });

    // Увеличение баланса
    function startBalanceIncrement() {
        setInterval(() => {
            if (isLoggedIn) {
                balance += 2;
                balanceElement.textContent = balance;
            }
        }, 1000);
    }
});
