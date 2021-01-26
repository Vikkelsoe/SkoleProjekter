from bs4 import BeautifulSoup
from pprint import pprint

html_doc = """
<html><head><title>The Dormouse's story</title></head>
<body>
<p class="title"><b>The Dormouse's story</b></p>

<p class="story">Once upon a time there were three little sisters;
and their names were
<a href="http://example.com/elsie" class="sister" id="link1">Elsie</a>,
<a href="http://example.com/lacie" class="sister" id="link2">Lacie</a> and
<a href="http://example.com/tillie" class="sister" id="link3">Tillie</a>;
and they lived at the bottom of a well.</p>

<p class="story">...</p>
n"""

soup = BeautifulSoup(html_doc, 'html.parser')
# pprint(soup.prettify())
# pprint(soup.title)
# pprint(soup.title.name)
# pprint(soup.title.string)
# pprint(soup.title.parent.name)
# pprint(soup.p)
# pprint(soup.p['class'])
# pprint(soup.a)
# pprint(soup.find_all('a'))
# for link in soup.find_all('a'):
#    print(link.get('href'))
# pprint(soup.find(id="link3"))
# print(soup.get_text())
# pprint(soup.findAll("a", {"class": "sister"}))
for link in soup.findAll("a", {"class": "sister"}):
    print(link.text)
