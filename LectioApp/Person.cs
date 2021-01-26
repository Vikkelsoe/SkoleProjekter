using System;
using System.Collections.Generic;
using System.Text;

namespace LectioApp
{
    public class Person
    {
        public string CPR { get; private set; }
        public int Fødselsår { get; set; }
        public int Fødselsmåned { get; set; }
        public int Fødselsdag { get; set; }
        public string Fornavn { get; set; }
        public string Efternavn { get; set; }
        public string Brugernavn { get; set; }
        public string Adgangskode { get; set; }


        public Person(string cpr, string fornavn, string efternavn, string brugernavn, string adgangskode)
        {
            CPR = cpr;
            Fornavn = fornavn;
            Efternavn = efternavn;
            Brugernavn = brugernavn;
            Adgangskode = adgangskode;
        }

        public Person(string cpr, DateTime fødselsdato, string fornavn, string efternavn)
        {
            CPR = cpr;            
            Fornavn = fornavn;
            Efternavn = efternavn;
        }

        public Person(string cpr, string fornavn, string efternavn)
        {
            CPR = cpr;
            Fornavn = fornavn;
            Efternavn = efternavn;
        }

        public Person(string cpr, int fødselsår, int fødselsmåned, int fødselsdag, string fornavn, string efternavn)
        {
            CPR = cpr;
            Fødselsår = fødselsår;
            Fødselsmåned = fødselsmåned;
            Fødselsdag = fødselsdag;
            Fornavn = fornavn;
            Efternavn = efternavn;
        }

        public override string ToString()
        {
            return "Person (" + CPR +"): " + Fornavn + " " + Efternavn;
        }
    }
}