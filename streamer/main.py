from os import environ
from json import loads
from pymongo import MongoClient
from tweepy.streaming import StreamListener
from tweepy import OAuthHandler
from tweepy import Stream
from pprint import pprint

client = MongoClient(environ.get('MONGO_URL'))
db = client.rawdb

access_token = environ.get('ACCESS_TOKEN')
access_token_secret = environ.get('ACCESS_TOKEN_SECRET')
consumer_key = environ.get('CONSUMER_KEY')
consumer_secret = environ.get('CONSUMER_SECRET')

class Listener(StreamListener):

    def on_data(self, data):
        pprint(data)
        db.tweets.insert(loads(data))
        return True

    def on_error(self, status):
        print(status)

if __name__ == '__main__':

    listener = Listener()
    auth = OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)
    stream = Stream(auth, listener)

    with open('filters.txt', 'r') as f:
        track = f.readlines()
        stream.filter(track=track)
