from forbindelse import Forbindelse

f = Forbindelse()
soup = f.forbind_og_oversæt('https://politiken.dk/')

for link in soup.findAll("a", {"class": "faux-block-link__promote"}):
    print(link.text)

'''
Nu mangler vi bare:
1) Gør det samme for b.dk, jp.dk, bt.dk, eb.dk, information.dk m.fl.
2) Kør vores script f.eks. hvert 30 sek fra en server og gem data i database
3) Konstruér et website eller en app, der viser data i et overskueligt format.
4) Tilføj diverse reklamer og vi har en pengemaskine :-).
'''