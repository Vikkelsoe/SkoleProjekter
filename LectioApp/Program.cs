using System;
using System.Collections.Generic;

namespace LectioApp
{
    class Program
    {

        public static void TilføjData(Skole skole)
        {            
            Administrator tln = new Administrator("111111-1111", 1970, 7, 1, "Trine Ladekarl", "Nellemann");

            skole.Administratorer.Add(tln);

            Lærer pets = new Lærer("121212-1212", 1981, 2, 22, "Peter", "Sterner");
            Lærer hhk = new Lærer("131313-1313", 1972, 4, 10, "Hans Henrik", "Knudsen");
            Lærer lho = new Lærer("161616-1616", "Lise", "Hobbs");
            skole.Lærere.AddRange(new List<Lærer>() { pets, hhk, lho });

            Elev brian = new Elev("141414-1414", 2000, 1, 1, "Brian", "Jensen");
            Elev signe = new Elev("151515-1515", 2001, 5, 7, "Signe", "Nielsen");
            Elev niels = new Elev("171717-1717", 2000, 2, 10, "Niels", "Jensen");
            Elev carsten = new Elev("343434-3434", 2002, 4, 4, "Carsten", "Madsen");
            skole.Elever.AddRange(new List<Elev>(){ brian, signe, niels, carsten });
 
            Hold hold1 = new Hold(FagNavn.Programmering, FagNiveau.B, pets);
            skole.Holdene.Add(hold1);
            hold1.Elever.AddRange(new List<Elev>() { brian, carsten });
            hold1.UdskrivElever();
        }

        static void Main(string[] args)
        {
            Console.WriteLine("Velkommen til Lectio!");
            Skole skole = new Skole("Albertslund Gymnasium", "Løvens kvartér 17", "Albertslund", 2605);
            TilføjData(skole);
            //skole.UdskrivLærereMedEfternavn("Sterner");
            //skole.UdskrivAlleElever();
            //skole.UdskrivAlleElever();
            //skole.UdskrivEleverMedEfternavn("Jensen");
            //skole.UdskrivEleverFørEtGiventÅrstal(2000);
            //skole.UdskrivEleverFødtMellemToÅrstal(2000, 2001);

            
            
            Console.ReadLine();

        }
    }
}
