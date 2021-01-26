using System;
using System.Collections.Generic;
using System.Text;

namespace LectioApp
{
    public class Elev : Person
    {
        public Elev(string cpr, string fornavn, string efternavn) : base(cpr, fornavn, efternavn)
        {
        }

        public Elev(string cpr, int fødselsår, int fødselsmåned, int fødselsdag, string fornavn, string efternavn) : base(cpr, fødselsår, fødselsmåned, fødselsdag, fornavn, efternavn)
        {
        }
    }
}