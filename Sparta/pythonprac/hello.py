import requests
from bs4 import BeautifulSoup

from pymongo import MongoClient
import certifi

ca = certifi.where()
client = MongoClient('mongoDB_URL', tlsCAFile=ca)
db = client.movieDB

headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://movie.naver.com/movie/sdb/rank/rmovie.naver?sel=pnt&date=20210829',headers=headers)

soup = BeautifulSoup(data.text, 'html.parser')

# 코딩 시작

trs = soup.select('#old_content > table > tbody > tr')
for tr in trs:
    
  a = tr.select_one('td.title > div > a')
  if a is not None:
    rank = tr.select_one('td > img')['alt']
    point = tr.select_one('td.point').text
    title = a.text
    doc = {
      "rank": rank,
      "title": title,
      "point": point
    }

    db.movies.insert_one(doc)

  

  #old_content > table > tbody > tr:nth-child(2) > td.point