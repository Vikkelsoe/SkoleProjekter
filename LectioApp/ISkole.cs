using System;
using System.Collections.Generic;
using System.Text;

namespace LectioApp
{
    interface ISkole
    {

        string Navn { get; set; }
        string Adresse { get; set; }
        string By { get; set; }
        int Postnummer { get; set; }
        List<Lærer> Lærere { get; set; }
        List<Administrator> Administratorer { get; set; }
        List<Elev> Elever { get; set; }
        List<Hold> Holdene { get; set; }


        public void UdskrivAlleLærere();
        public void UdskrivAlleElever();
        public void UdskrivAlleAdministratorer();
        public void UdskrivAlleHold();
        public void UdskrivLærereMedEfternavn(string efternavn);
        public void UdskrivEleverMedEfternavn(string efternavn);



    }
}
