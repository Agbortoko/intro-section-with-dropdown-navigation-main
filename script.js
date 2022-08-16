window.onload = function(){

    // Mobile Menu

    let mobileMenu = document.querySelector("#mobileMenu");
    let menuButton = document.querySelector("#menuButton");
    let closeButton = document.querySelector("#closeButton");

    menuButton.addEventListener('click', function(event){
        mobileMenu.classList.toggle('d-block');
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    });

    closeButton.addEventListener('click', function(event){
        mobileMenu.classList.remove("d-block");
        document.body.style.backgroundColor = "white";
    }); 

    // Dropdown toggle for features section
    let featuresDropdownToggle = document.querySelector('.dropdown-toggle.features');
    let featuresdropdownContent = document.querySelector('.dropdown-content.features');
    let featuresdropdownToggleIcon = document.querySelector('.dropdown-toggle.features>.dropdown-toggle-icon>i');

    featuresDropdownToggle.addEventListener('click', function(event){
        featuresdropdownContent.classList.toggle('d-block');
        featuresdropdownToggleIcon.classList.toggle('bi-chevron-up');

    });

    // Dropdown toggle for company section

    let companyDropdownToggle = document.querySelector('.dropdown-toggle.company');
    let companydropdownContent = document.querySelector('.dropdown-content.company');
    let companyDropdownToggleIcon = document.querySelector('.dropdown-toggle.company>.dropdown-toggle-icon>i');
 
    companyDropdownToggle.addEventListener('click', function(event){
       companydropdownContent.classList.toggle('d-block');
       companyDropdownToggleIcon.classList.toggle('bi-chevron-up');

    });

    
}

