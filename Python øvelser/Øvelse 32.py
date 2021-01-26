filmDatabase = {"Film A": [2018, "Instruktør A", "Drama"],
                "Film B": [2017, "Instruktør B", "Komedie"],
                "Film C": [2016, "Instruktør C", "Action"]}


def findFilm(film):
    if film in filmDatabase:
        print(film+" findes i databasen.")
    else:
        print(film+" findes ikke i databasen.")

def sletFilm(film):
    filmDatabase.pop(film)
    print(film + " blev slettet fra databasen.")

def tilføjFilm(titel, år, instruktør, genre):
    filmDatabase[titel] = [år, instruktør, genre]
    print(titel + " blev tilføjet til databasen.")

def skiftGenre(titel, genre):
    filmDatabase[titel][2] = genre
    print(titel + " fik ændret sin genre til " + genre + ".")

findFilm("Film B")
sletFilm("Film B")
findFilm("Film B")
tilføjFilm("Film B", 2017, "Instruktør B", "Gyser")
skiftGenre("Film B", "Komedie")

print(filmDatabase)