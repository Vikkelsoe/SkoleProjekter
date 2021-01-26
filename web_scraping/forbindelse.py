import urllib3
from bs4 import BeautifulSoup


class Forbindelse(object):
    """Documentation for Forbindelse

    """
    def __init__(self, args=None):
        super(Forbindelse, self).__init__()
        self.args = args

    @classmethod
    def forbind(self, url):
        """ Hent url """
        try:
            http = urllib3.PoolManager()
            response = http.request("GET", url)
            return response.data
        except Exception:
            print("Tabt forbindelse")

    @classmethod
    def oversæt(self, data):
        """ Oversæt html data med BeautifulSoup """
        return BeautifulSoup(data, "html.parser")

    @classmethod
    def forbind_og_oversæt(self, url):
        data = self.forbind(url)
        suppe = self.oversæt(data)
        return suppe
