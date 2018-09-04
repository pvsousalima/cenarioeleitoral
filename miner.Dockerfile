FROM python:3.6-alpine3.8
COPY miner .
RUN pip3 install pymongo nltk
CMD ["python3", "main.py"]
