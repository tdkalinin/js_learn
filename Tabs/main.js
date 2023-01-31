const tabsBtn = document.querySelectorAll('.tabs__nav-btn');

for(let currentBtn of tabsBtn){
    currentBtn.addEventListener("click", function(){
        const tabId = currentBtn.getAttribute("data-tab");

        for(let btn of tabsBtn){
            btn.classList.remove("active");
        }
        currentBtn.classList.add("active");
        
        const tabs = document.querySelectorAll(".tabs__item");
        for(let tab of tabs){
            tab.classList.remove("active");
        }

        document.querySelector(tabId).classList.add("active");
    });
}
