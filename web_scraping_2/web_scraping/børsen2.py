from selenium import webdriver
from prettytable import PrettyTable

browser = webdriver.Chrome()
browser.implicitly_wait(50)
browser.get("https://borsen.dk/investor/kurser/danske-aktier/?filter=c25")

""" aktier = browser.find_elements_by_class_name("ncpulse-name") """
aktier = browser.find_elements_by_xpath("//*[@class='ncpulse-name']")
kurser = browser.find_elements_by_xpath("//*[@class='ncpulse-num last-column-mobile ng-binding']")


table = PrettyTable(['Aktie', 'Kurs'])
for i in range(len(aktier)):
    table.add_row([aktier[i].text, kurser[i].text])
    # print(aktier[i].text+"\t"+kurser[i].text)

print(table)

browser.close()
