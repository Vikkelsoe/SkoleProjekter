using System;
using System.Collections.Generic;
using System.Text;

namespace LectioApp
{
    public class Administrator : Person
    {
        public Administrator(string cpr, string fornavn, string efternavn) : base(cpr, fornavn, efternavn)
        {
        }

        public Administrator(string cpr,
                             int fødselsår,
                             int fødselsmåned,
                             int fødselsdag,
                             string fornavn,
                             string efternavn): base(cpr, fødselsår, fødselsmåned, fødselsdag, fornavn, efternavn)
        {

        } 
    }
}