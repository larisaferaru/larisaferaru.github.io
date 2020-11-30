let eventReq = new XMLHttpRequest();
eventReq.open("GET", "https://api.jsonbin.io/b/5fbe83c7177c556ef9b2c69c/latest", false);
eventReq.setRequestHeader("secret-key", "$2b$10$XH5aZr/st0eDUBWdbtD0rewEVGIIOI209qH09icZj8GknAeHK90xC");
eventReq.send();
log(eventReq.responseText)
let eventsText = ""
let eventArray = JSON.parse(eventReq.responseText)  
for (let i = eventArray.events.length - 1; i >= 0; i--) {
    eventsText += '<div class="event" style="justify-content: space-between;">'
    eventsText += '<div class="container"><h6>' + eventArray.events[i].date + '</h6><h3>' + eventArray.events[i].header + '</h3></div><p style="font-size: 18px;">' + eventArray.events[i].text + '</p>'
    if (eventArray.events[i].images.length != 0) {
        eventsText += '<div class="slider"><div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="center: true" style="height: 350px;"><ul class="uk-slider-items uk-grid uk-grid-match" uk-height-viewport="offset-top: true; offset-bottom: 30">'
        for (let j = 0; j < eventArray.events[i].images.length; j++) {
            eventsText += `<li class="uk-width-3-4" style="height: 300px;" onclick="window.location = '` + eventArray.events[i].images[j] + `'">`
            eventsText += '<div class="uk-cover-container"><img src="' + eventArray.events[i].images[j] + '" alt="" uk-cover></div></li>'
        }
        eventsText += '</ul>'
        eventsText += '<a class="uk-position-center-left uk-position-small uk-hidden-hover sliderArrow" href="#" uk-slidenav-previous uk-slider-item="previous"></a>'
        eventsText += '<a class="uk-position-center-right uk-position-small uk-hidden-hover sliderArrow" href="#" uk-slidenav-next uk-slider-item="next"></a>'
        eventsText += '</div></div>'
    }
    if (eventArray.events[i].documents.length != 0) {
        eventsText += '<div class="sliderFiles"><h4>Приложенные файлы:</h4>'
        for (let j = 0; j < eventArray.events[i].documents.length; j++) {
            eventsText += '<a href="' + eventArray.events[i].documents[j] + '" class="uk-button-default uk-button-text" style="text-decoration: none; padding: 5px;" download=""><span uk-icon="icon: file-text"></span>' + getFilename(eventArray.events[i].documents[j]) + '</a>'
        }
        eventsText += '</div>'
    }
    eventsText += '</div><hr>'
}
vm.recentEvents = eventsText