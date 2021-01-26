from forbindelse import Forbindelse
from pprint import pprint

f = Forbindelse()
soup = f.forbind_og_oversæt('https://borsen.dk/investor/kurser/danske-aktier/')

pprint(soup.findAll("td"))  # tom pga. javascript dynamisk henter indhold
