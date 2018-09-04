FROM python:3.6-alpine3.8
COPY miner .
COPY streamer/candidatos.txt candidatos.txt
RUN pip3 install pymongo
CMD ["python3", "main.py"]
