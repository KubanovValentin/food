
"use strict";

window.addEventListener('DOMContentLoaded', () => {


    // табы
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

    //-------------------------------------------------------
    //таймер обратного отсчета

    const deadline = '2021-11-9';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor((t / (1000 * 60 * 60 * 24))),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);


            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

    }

    setClock('.timer', deadline);
    //модальное окно 
    //modal
    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

        modalTrigger.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.classList.add('show');
                modal.classList.remove('hide');
                // modal.classList.toggle('show');
                // modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });
    function closeModal( ){
        modal.classList.add('hide');
        modal.classList.remove('show');
        // modal.style.display = 'none';
        // modal.classList.toggle('show');
        document.body.style.overflow = '';
    }


    modalCloseBtn.addEventListener('click', closeModal );


    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) { 
            closeModal();
        }
    });

});
