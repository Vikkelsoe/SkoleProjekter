using System;
using System.Collections.Generic;
using System.Text;

namespace LectioApp
{
    public class Lærer : Person
    {        
        public Lærer(string cpr, string fornavn, string efternavn) : base(cpr, fornavn, efternavn)
        {

        }

        public Lærer(string cpr, int fødselsår, int fødselsmåned, int fødselsdag, string fornavn, string efternavn) : base(cpr, fødselsår, fødselsmåned, fødselsdag, fornavn, efternavn)
        {
        }

        public override string ToString()
        {
            return "Lærer (" + CPR + "): " + Fornavn + " " + Efternavn;
        }




    }
}