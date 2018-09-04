from pymongo import MongoClient
from os import environ
from collections import defaultdict

client = MongoClient(environ.get('MONGO_URL'))
db = client.rawdb

tweets = list(db.tweets.find({}, {'text': 1}))

def mentions_counter(tweets, r=defaultdict(int)):

    with open('candidatos.txt', 'r') as f:
        filters = f.read().splitlines()

        for tweet in tweets:
            s = tweet['text'].lower()
            words = s.split(' ')
            for filter in filters:
                for word in words:
                    if filter in word:
                        r[filter] += 1

    return dict(r)

print(mentions_counter(tweets))
