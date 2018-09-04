FROM python:3.6-alpine3.8
COPY streamer .
RUN pip3 install tweepy pymongo
CMD ["python3", "main.py"]
