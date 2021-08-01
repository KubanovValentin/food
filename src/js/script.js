window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');
    //1 задача 
    function hideTabContent() {
        tabsContent.forEach(item => {
            // item.style.display = 'none';
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }  
//эта функция спрятать табы 
// -----------------------
// 2 задача 
    function showTabContent(i = 0) { // (i = 0) - это стандарт по умолчанию 
        // tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('show', 'fade');
        //добавление классов со свойсвами
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
//эта функция добавления 1 таба

// -------------------------
// запускаем задачи
hideTabContent();
showTabContent();

// ----------------------------------------
// 3 задачача
// это дилигирование событий и назначить обработчик события клика

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
});