

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');
    const navbar = document.getElementById('navbar');
    const serviceItem = document.getElementById('nav-item-service');
    const serviceLink = serviceItem.querySelector('a');
    
    // Mobile Menu Toggle
    mobileMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
        navList.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Service Menu Toggle
    serviceLink.addEventListener('click', function(e) {
        if (window.innerWidth <= 1024) {
            e.preventDefault();
            const dropdown = serviceItem.querySelector('.dropdown');
            const isOpen = dropdown.classList.contains('active');
            
            // Close all other dropdowns first
            document.querySelectorAll('.dropdown.active').forEach(d => {
                if (d !== dropdown) d.classList.remove('active');
            });
            
            // Toggle current dropdown
            dropdown.classList.toggle('active', !isOpen);
        }
    });

    // Submenu Toggle
    document.querySelectorAll('.dropdown li').forEach(item => {
        const link = item.querySelector('a');
        const submenu = item.querySelector('.submenu');
        
        if (submenu) {
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 1024) {
                    e.preventDefault();
                    const isSubOpen = submenu.classList.contains('active');
                    
                    // Close all other submenus
                    document.querySelectorAll('.submenu.active').forEach(sm => {
                        if (sm !== submenu) sm.classList.remove('active');
                    });
                    
                    // Toggle current submenu
                    submenu.classList.toggle('active', !isSubOpen);
                }
            });
        }
    });

    // Close All Menus
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar-content')) {
            mobileMenu.classList.remove('active');
            navList.classList.remove('active');
            document.querySelectorAll('.dropdown, .submenu').forEach(menu => {
                menu.classList.remove('active');
            });
            document.body.classList.remove('menu-open');
        }
    });

    // Scroll Handler
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // // Language Selector
    // document.querySelectorAll('.language-dropdown button').forEach(button => {
    //     button.addEventListener('click', () => {
    //         document.getElementById('selected-lang').textContent = button.textContent;
    //     });
    // });
});



  document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});





    // Function for onSchedule
    function onSchedule() {
        const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');
        console.log("Before removing 'menu-open':", document.body.classList);
        mobileMenu.classList.remove('active');
        navList.classList.remove('active');
        console.log("After removing 'menu-open':", document.body.classList);
    }

    // Trigger the function manually to test




// google translations 

function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
  });
  
  function translateLanguage(lang, langName) {
    document.getElementById("selected-lang").textContent = langName;
      var selectField = document.querySelector(".goog-te-combo");
      if (selectField) {
          selectField.value = lang;
          selectField.dispatchEvent(new Event('change'));
      }
  }
  
  function toggleDropdown() {
    var dropdown = document.getElementById("languageDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }
  
  // Close dropdown when clicking outside
  document.addEventListener("click", function (event) {
    var dropdown = document.getElementById("languageDropdown");
    var button = document.querySelector(".translate-btn");
    if (!dropdown.contains(event.target) && !button.contains(event.target)) {
        dropdown.style.display = "none";
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    var originalTitle = document.title; // Store the original title
  
    setInterval(function () {
        if (document.title !== originalTitle) {
            document.title = originalTitle; // Restore the title if it changes
        }
    }, 500);
  });
