import random
import json
import os
fayl='lugat.json'
uchlar_royhati=[]

def XotiradanOqi(jsonFayl):
	with open(jsonFayl,'r') as fayl:
		lugat=json.load(fayl)
	return lugat

def Sozlar():
	lugat={}
	while True:
		inglizcha=input('\033[1;32;40meng: \033[0m')
		if inglizcha=='.':
			break
		ozbekcha=input('\033[1;36;40muzb: \033[0m')
		if inglizcha!='' and ozbekcha!='':
			lugat[inglizcha.lower()]=ozbekcha.lower()
	return lugat

def Sinov(lugat,son,type):
	from random import choice,randint
	sc=0
	while son:
		uchlar_sanogi=0
		a=choice(list(lugat.items()))
		tanlov=randint(0,1)
		if a[tanlov] in uchlar_royhati:
			for i in uchlar_royhati:
				if a[tanlov]==i:
					uchlar_sanogi+=1
		if uchlar_sanogi==3 and 	len(list(lugat.items()))!=1 and type==2:
			Sinov(lugat,son,2)
		else:
			javob=input(f"\033[1;32;1m \n\t{a[tanlov]}:\033[0m ")
			uchlar_royhati.append(a[tanlov])
			if javob=='.':
				print(f"\n\t\033[0;30;42m {sc} \033[0m marta takrorlandi.")
				break
			if tanlov==0:
				index=1
			else:
				index=0
			if javob.lower() in a and a.index(javob.lower())==index:                  
				os.system('cls' if os.name=='nt' else 'clear')
			else:
				print(f'\t\033[1;37;41m {a[tanlov]} - {a[index]} \033[0m')
			sc+=1
			son-=1
def XotiragaYoz(lugat,jsonFayl):
	with open(jsonFayl,'w') as fayl:
		json.dump(lugat,fayl)

def Qoshuv(lugat,lugat2):
	for i,n in lugat2.items():
		lugat[i]=n
	return lugat

sorov=input("Yangi so'z bormi? ")
if sorov==':':
	os.system('cls' if os.name=='nt' else 'clear')
	lugat=XotiradanOqi(fayl)
	sanoq=0
	print("\nSiz yod olgan so'zlar :)\n")
	for i,n in lugat.items():
		print(f"\033[1;{random.choice([31,32,33,34,35,36,37])};40m\t{i} - {n}\033[0m")
		sanoq+=1
	print(f"\n\tJami: {sanoq}ta so'z.")
son=int(input("\nNecha marta takrorlay: "))
if sorov:
	lugat=Sozlar()
	XotiragaYoz(Qoshuv(XotiradanOqi(fayl),lugat),fayl)
	Sinov(lugat,son,1)
else:
	Sinov(XotiradanOqi(fayl),son,2)


print("Good bye")
