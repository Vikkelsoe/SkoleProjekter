"""
linux:
    virtualenv env
    source env/bin/activate
    pip install urllib3
    pip install beautifulsoup4
windows:
    Download get-pip.py fra
        https://pip.readthedocs.io/en/stable/installing/#do-i-need-to-install-pip
    python get-pip.py
    pip install virtualenv
    virtualenv env
    \\path\\to\\env\\Scripts\activate
    pip install urllib3
    pip install beautifulsoup4
"""
from pprint import pprint
import re
from forbindelse import Forbindelse

f = Forbindelse()
suppe = f.forbind_og_oversæt('https://www.dmi.dk/')
# print(suppe)
# print(suppe.find_all(re.compile('^h[1-6]$')))
pprint(suppe.find_all(re.compile('^h[6]$')))

