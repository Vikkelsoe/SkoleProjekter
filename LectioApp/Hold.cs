using System;
using System.Collections.Generic;
using System.Text;

namespace LectioApp
{
    public enum FagNiveau { A, B, C }
    public enum FagNavn { Programmering, Matematik }


    public class Hold
    {
        public FagNavn Navn { get; private set; }
        public FagNiveau Niveau { get; private set; }
        public Lærer Lærer { get; private set; }
        public List<Elev> Elever { get; set; } = new List<Elev>();


        public Hold(FagNavn fag, FagNiveau niveau, Lærer lærer)
        {
            Navn = fag;
            Niveau = niveau;
            Lærer = lærer;
        }

        public void UdskrivElever()
        {
            foreach(var elev in Elever)
            {
                Console.WriteLine("{0} {1}", elev.Fornavn, elev.Efternavn);
            }
        }
        
    }
}