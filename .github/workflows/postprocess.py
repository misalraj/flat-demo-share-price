import json

# reading share-price.json

with open("share-price.json") as f:
    file_data = f.read()

share_data = dict()
json_data = json.loads(file_data)

share_data["Meta Data"] = json_data["Meta Data"]
share_data["Daily_data"]= json_data["Time Series (Daily)"][json_data["Meta Data"]["3. Last Refreshed"]]

with open('postprocesss.json', 'w') as f:
    f.write(json.dumps(share_data))