


const buttons = document.querySelectorAll(".button");
        const body = document.body;

        // Функция для определения системной темы
        function getSystemTheme() {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            } else {
                return 'light';
                
            }       {
                return 'nikipatch';
            }
        }

        // Загружаем системную тему при загрузке страницы
        const systemTheme = getSystemTheme();
        body.classList.add(systemTheme);
        buttons.forEach(button => {
            if (button.dataset.theme === systemTheme) {
                button.classList.add("active");
            }
        });

        // Обработчик событий для кнопок
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                const theme = button.dataset.theme;
                body.classList.remove("system", "dark", "light", "nikipatch");
                body.classList.add(theme);

                buttons.forEach(b => b.classList.remove("active"));
                button.classList.add("active");
            });
        });


   window.addEventListener('load', () => {
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                card.classList.add('show');
            });

            const imageLinks = document.querySelectorAll('.image-link');
            const modal = document.querySelector('.modal');
            const closeModal = document.querySelector('.close-modal');
            const modalImage = document.getElementById('modal-image');

            imageLinks.forEach(link => {
                link.addEventListener('click', (event) => {
                    event.preventDefault(); // Предотвращаем переход по ссылке
                    const imageSrc = link.dataset.imageSrc; // Получаем источник изображения
                    modalImage.src = imageSrc;
                    modal.classList.add('show'); 
                });
            });

            closeModal.addEventListener('click', () => {
                modal.classList.remove('show');
            });

            // Закрытие модального окна по клику за пределами него
            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.classList.remove('show');
                }
            });
        });

  // Получаем заголовок
  const welcomeHeading = document.getElementById('welcome');

  // Запускаем анимацию после загрузки страницы
  window.onload = function() {
    welcomeHeading.style.opacity = 1;
    welcomeHeading.style.transform = "translateY(0)";
  }

  // Выпадающее меню
  const dropdownBtn = document.querySelector('.dropdown-btn');
  const dropdownContent = document.querySelector('.dropdown-content');
  let isDropdownOpen = false;

  dropdownBtn.addEventListener('click', function() {
    isDropdownOpen = !isDropdownOpen;
    if (isDropdownOpen) {
      dropdownContent.style.display = 'block';
      dropdownBtn.focus(); // Важно, чтобы фокус был на кнопке для повторного закрытия
    } else {
      dropdownContent.style.display = 'none';
    }
  });

  // Предотвращение закрытия выпадающего меню при клике на ссылки внутри
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown') && isDropdownOpen) {
      dropdownContent.style.display = 'none';
      isDropdownOpen = false;
    }
  });

   // Дождитесь загрузки страницы
   window.addEventListener('load', () => {
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                card.classList.add('show'); 
            });
        });



            const backToTopBtn = document.getElementById('backToTopBtn');
let isScrollingUp = false; // Flag to track scrolling direction

// Show/hide button based on scroll direction
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100 && !isScrollingUp) { // Show if scrolling down
        backToTopBtn.classList.add('show');
        isScrollingUp = false;
    } else if (currentScroll < 100) { // Hide if scrolling up
        backToTopBtn.classList.remove('show');
        isScrollingUp = true;
    }
});

    // Smooth scroll to top
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});
    
const firstPageCards = document.querySelectorAll('.first-page');

// Loop through each card that has the 'first-page' class
firstPageCards.forEach(card => {
  card.classList.add('hide-button');
});   

// Loop through each card that has the 'first-page' class
firstPageCards.forEach(card => {
    card.classList.add('hide-button');
  });   
  
    // Добавляем слушатель событий для кнопки открытия меню
    const menuBtn = document.querySelector('.menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
  
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('active');
    });
  
    // Добавляем слушатель событий для кнопки закрытия меню
    const closeBtn = document.querySelector('.close-btn');
  
    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  
    // Добавляем слушатель событий для закрытия меню за пределами
    document.addEventListener('click', (event) => {
      if (!mobileMenu.contains(event.target) && !menuBtn.contains(event.target)) {
        mobileMenu.classList.remove('active');
      }
    }); 
