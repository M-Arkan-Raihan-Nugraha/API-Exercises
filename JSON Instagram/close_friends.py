import json

# close_friends
f = open(r'D:\SMAKZIE\PRODUKTIF\Coding_Typing\API\API-Exercises\Following IG\followers_and_following\close_friends.json')

data = json.load(f)

close_friend = []

for i in data["relationships_close_friends"]:
  for j in i["string_list_data"]:
    close_friend.append(j["value"])

# main
print("Close Friends: ")

for i in close_friend:
  print("https://www.instagram.com/" + i)