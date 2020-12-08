let docsReq = new XMLHttpRequest();
docsReq.open("GET", "https://api.jsonbin.io/b/5fc8f68c045eb86f1f8a97b9/latest", false);
docsReq.setRequestHeader("secret-key", "$2b$10$XH5aZr/st0eDUBWdbtD0rewEVGIIOI209qH09icZj8GknAeHK90xC");
docsReq.send();
log(docsReq.responseText)
let docsText = ""
let docsArray = JSON.parse(docsReq.responseText)  
for (let i = docsArray.docs.length - 1; i >= 0; i--) {
    if (docsArray.docs[i].type == "default")
    docsText += `
    <div class="document">
        <div class="uk-card uk-card-default uk-card-body" style="margin: 10px; width: 400px;">
            <h3 class="uk-card-title uk-text-truncate onclick="navigator.clipboard.writeText('${docsArray.docs[i].link}')" uk-tooltip="${docsArray.docs[i].header}">${docsArray.docs[i].header}<span uk-icon="icon: link"></span></h3>
            <a href="${docsArray.docs[i].link}" class="uk-button-default uk-button-text uk-text-truncate" style="text-decoration: none; padding: 5px; max-width: 350px; display: block;" download><span uk-icon="icon: cloud-download"></span>  Скачать:  ${getFilename(docsArray.docs[i].link)}  </a>
        </div>
    </div>
    `
}
vm.documentsHtml = docsText