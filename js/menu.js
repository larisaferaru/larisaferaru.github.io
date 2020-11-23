let menuReq = new XMLHttpRequest();
menuReq.onreadystatechange = () => {
if (menuReq.readyState == XMLHttpRequest.DONE) {
    let menuArray = JSON.parse(menuReq.responseText);
    log("menu:\n" + menuReq.responseText);
    let menuText = '<div class="uk-button-group">'
    for (let i = 0; i < menuArray.length; i++) {
        if (menuArray[i][2] == pageNumber) {menuText += '<a class="uk-button uk-button-primary" style="background-color: #0f7ae5;" href="' + menuArray[i][1] + '"><li> > ' + menuArray[i][0] + '</li></a>'}
        else {menuText += '<a class="uk-button uk-button-primary" href="' + menuArray[i][1] + '"><li>' + menuArray[i][0] + '</li></a>'}
    }
    menuText += '</div>'
    log(menuText);
    vm.menu = menuText;
}
};
menuReq.open("GET", "/data/json/menu.json", true);
menuReq.send();