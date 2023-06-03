const subItems = document.querySelectorAll(`.menu_sub`);

(function() {
    subItems.forEach(section => {
        section.closest(`.menu__item`).querySelector(`.menu__link`).onclick = openMenu;
        console.log(section)
    })
    
}());

function openMenu() {
    // Если открыт - просто закрываем его
    if (this.closest(`.menu__item`).querySelector(`.menu_active`)) {
        this.closest(`.menu__item`).querySelector(`.menu_sub`).className = `menu menu_sub`;
    // Если закрыт - закрываем все в цикле и открываем его
    } else {
    // Цикл нужен чтоб перед открытием закрытого закрыть все открытые
        for (var i = 0; i < subItems.length; i++) {
            if (subItems[i].closest(`.menu__item`).querySelector(`.menu_active`)) {
                subItems[i].closest(`.menu__item`).querySelector(`.menu_sub`).className = `menu menu_sub`;
            }    
        }
            this.closest(`.menu__item`).querySelector(`.menu_sub`).className = `menu menu_sub menu_active`;
    } 
        return false;
}