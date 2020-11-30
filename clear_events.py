import requests
url = 'https://api.jsonbin.io/b/5fbe83c7177c556ef9b2c69c'
headers = {'Content-Type': 'application/json', 'secret-key': '$2b$10$XH5aZr/st0eDUBWdbtD0rewEVGIIOI209qH09icZj8GknAeHK90xC'}
data = {
    "len": 0,
    "events": []
}

req = requests.put(url, json=data, headers=headers)
print(req.text)
input()
