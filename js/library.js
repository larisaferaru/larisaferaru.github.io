function log(str) {
    if (mainJson.debug == "true") {
        console.log(str);
    }
}
function getFilename(url)
{
   return url.split('/').pop();
}