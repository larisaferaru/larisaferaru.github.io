import requests
url = 'https://api.jsonbin.io/b/5fc8f68c045eb86f1f8a97b9/'
headers = {'Content-Type': 'application/json', 'secret-key': '$2b$10$XH5aZr/st0eDUBWdbtD0rewEVGIIOI209qH09icZj8GknAeHK90xC'}
data = {
    "len": 0,
    "docs": []
}

req = requests.put(url, json=data, headers=headers)
print(req.text)
input()
