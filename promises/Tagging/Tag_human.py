import csv
import json
import sys
import numpy as np
import re
from pprint import pprint

congfile=open('congSeoul_short.json','r',encoding='utf-8')
congs=json.load(congfile)
categories=['행정', '공공질서/안전','교육','문화/관광','환경','복지','보건','농축수산','산업/중소기업','교통/건설','과학기술','인권','경제','기타']
targets=['유아','어린이/청소년','청년','중장년','노인','저소득','여성','장애인','다문화','근로자','소상공인','기업인','기타','전체']
#        cats=[‘(0) 행정’,’(1) 공공질서/안전’,’(2) 교육’,’(3) 문화/관광’,’(4) 환경’,’(5) 복지’,’(6) 보건’,’(7) 농축수산’,’(8)산업/중소기업’,’(9)교통/건설’,’(10)과학기술’,’(11)인권’,’(12)경제’,'(13)'기타']
#        targets=[(0)'유아',(1)'어린이/청소년',(2)'청년',(3)'중장년',(4)'노인',(5)'저소득',(6)'여성',(7) '장애인',(8) '다문화',(9)'근로자'(10),'소상공인','(11)기업인',(12)'기타',(13) '전체']
def inputcat():
    while True:
        try:
            catno=[int(x) for x in input("Please enter category number:").split()]
        except ValueError:
            print("Inappropriate cat! Try again.")
            continue
        else:
            return catno
            break
def inputtarget():
    while True:
        try:
            targetno=[int(x) for x in input("Please enter target number:").split()]
        except ValueError:
            print("Inappropriate target! Try again.")
            continue
        else:
            return targetno
            break        
for acong in congs:
    promises=acong["promises"]
    for apromise in promises:
        title=apromise["title"]
        print("Title: ",title)
        catnolist=inputcat()
        catlist=[]
        for n in catnolist:
            catlist.append(categories[n])
        apromise["category"]=catlist
        targetnolist=inputtarget()
        targetlist=[]
        for n in targetnolist:
            targetlist.append(targets[n])
        apromise["target"]=targetlist
    with open('new_congSeoul_short.json','w',encoding='utf-8') as wf:
        newdata=json.dumps(congs,ensure_ascii=False,indent=2)
        wf.write(newdata)
