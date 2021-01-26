using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace LectioApp
{
    public class Skole : ISkole
    {

        public string Navn { get; set; }
        public string Adresse { get; set; }
        public string By { get; set; }
        public int Postnummer { get; set; }
        public List<Lærer> Lærere { get; set; } = new List<Lærer>();
        public List<Administrator> Administratorer { get; set; } = new List<Administrator>();
        public List<Elev> Elever { get; set; } = new List<Elev>();
        public List<Hold> Holdene { get; set; } = new List<Hold>();

        public Skole(string navn)
        {
            Navn = navn;
        }

        public Skole(string navn, string adresse, string by, int postnummer) : this(navn)
        {
            Adresse = adresse;
            By = by;
            Postnummer = postnummer;
        }

        public void UdskrivLærereMedEfternavn(string efternavn)
        {
            var Query = from lærer in Lærere
                        where lærer.Efternavn == efternavn
                        select lærer;
        
            foreach(var person in Query)
            {
                Console.WriteLine(person.ToString());
            }        
        }

        public void UdskrivEleverMedEfternavn(string efternavn)
        {
            var Query = from elever in Elever
                        where elever.Efternavn == efternavn
                        select elever;

            foreach (var person in Query)
            {
                Console.WriteLine(person.ToString());
            }
        }

        public void UdskrivAlleLærere()
        {
            Lærere.ForEach(Console.WriteLine);
        }

        public void UdskrivAlleElever()
        {
            Elever.ForEach(Console.WriteLine);
        }

        public override string ToString()
        {
            return Navn + " " + Adresse + " " + Postnummer + " " + By;
        }

        public void UdskrivAlleAdministratorer()
        {
            Administratorer.ForEach(Console.WriteLine);
        }

        public void UdskrivAlleHold()
        {
            Holdene.ForEach(Console.WriteLine);
        }

        public void UdskrivEleverFørEtGiventÅrstal(int årstal)
        {
            var Query = from elever in Elever
                        where elever.Fødselsår <= årstal
                        select elever;

            foreach (var person in Query)
            {
                Console.WriteLine(person.ToString());
            }
        }

        public void UdskrivEleverFødtMellemToÅrstal(int start, int slut)
        {
            var Query = from elever in Elever
                        where elever.Fødselsår >= start && elever.Fødselsår <= slut
                        select elever;

            foreach (var person in Query)
            {
                Console.WriteLine(person.ToString());
            }
        }
    }
}