from pymongo import MongoClient
from os import environ

client = MongoClient(environ.get('MONGO_URL'))
db = client.rawdb

tweets = list(db.tweets.find({}, {'text': 1}))

print(tweets)
# print(len(tweets))
