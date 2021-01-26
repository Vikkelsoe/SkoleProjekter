using System;
using System.Collections.Generic;
using System.Text;

namespace LectioApp
{

    public class Karakter
    {

        public Elev Elev { get; private set; }

        private int elevKarakter;

        public int ElevKarakter
        {
            get { return elevKarakter; }
            set
            {
                if (value != -3 && value != 0 && value != 2 && value != 4 && value != 7 && value != 10 && value != 12)
                {
                    throw new Exception("Noget gik galt");
                }
                elevKarakter = value;
            }
        }

        public string Kommentar { get; set; }

        public Hold ElevHold { get; set; }

        public Karakter(Elev elev, int elevKarakter, string kommentar, Hold elevHold)
        {
            Elev = elev;
            ElevKarakter = elevKarakter;
            Kommentar = kommentar;
            ElevHold = elevHold;
        }
    }
}