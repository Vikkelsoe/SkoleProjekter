using System;

namespace BubbleSortApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Velkommen til sorterings app'en");
            NumberStore ns = new NumberStore();
            ns.TestAddNumbers();
            ns.TestPrintNumbers();
            ns.BubbleSort();
            Console.WriteLine("-----");
            ns.TestPrintNumbers();
        }
    }
}