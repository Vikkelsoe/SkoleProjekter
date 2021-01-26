using System;
using System.Collections.Generic;

namespace CSharpOpgaver
{
    class Program
    {
        static void Main(string[] args)
        {
            /*https://www.w3resource.com/csharp-exercises/basic/index.php*/

            int opg;

            Console.Write("Vælg opgave: ");
            opg = Convert.ToInt32(Console.ReadLine());

            if (opg == 1)
            {
                string name;

                Console.Write("Indtast dit navn: ");
                name = Console.ReadLine();
                Console.WriteLine("Hello " + name);
            }

            else if (opg == 2)
            {
                int num1;
                int num2;


                Console.Write("Vælg et tal: ");
                num1 = Convert.ToInt32(Console.ReadLine());

                Console.Write("Og kom med et til: ");
                num2 = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine("Summen af de to tal er: {0}", num1 + num2);
            }

            else if (opg == 3)
            {
                double num1;
                double num2;


                Console.Write("Vælg et tal: ");
                num1 = Convert.ToDouble(Console.ReadLine());

                Console.Write("Og kom med et til: ");
                num2 = Convert.ToDouble(Console.ReadLine());

                Console.WriteLine("Det ene tal delt med det andet er: {0}", num1 / num2);
            }

            else if (opg == 4)
            {
                Console.WriteLine(-1 + 4 * 6);
                Console.WriteLine((35 + 5) % 7);
                Console.WriteLine(14 + (-4) * 6 / 11);
                Console.WriteLine(2 + 15 / 6 * 1 - 7 % 2);
            }

            else if (opg == 5)
            {
                int num1;
                int num2;

                Console.Write("Skriv et tal: ");
                num1 = Convert.ToInt32(Console.ReadLine());
                Console.Write("Skriv endnu et tal: ");
                num2 = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine(num2);
                Console.WriteLine(num1);
            }

            else if (opg == 6)
            {
                int num1;
                int num2;
                int num3;

                Console.Write("Vælg et tal: ");
                num1 = Convert.ToInt32(Console.ReadLine());

                Console.Write("Endnu et tal: ");
                num2 = Convert.ToInt32(Console.ReadLine());

                Console.Write("Og et sidste tal: ");
                num3 = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine("Produktet af disee tal er: {0}", num1 * num2 * num3);
            }

            else if (opg == 7)
            {
                double num1;
                double num2;

                Console.Write("Vælg et tal: ");
                num1 = Convert.ToDouble(Console.ReadLine());

                Console.Write("Og kom med et til: ");
                num2 = Convert.ToDouble(Console.ReadLine());

                Console.WriteLine("Summen af de to tal er: {0}", num1 + num2);
                Console.WriteLine("De to tal trukket fra hinanden er: {0}", num1 - num2);
                Console.WriteLine("Produktet af de to tal er: {0}", num1 * num2);
                Console.WriteLine("De to tal delt med hinanden er: {0}", num1 / num2);
            }

            else if (opg == 8)
            {
                int num;

                Console.Write("Vælg et tal: ");
                num = Convert.ToInt32(Console.ReadLine());

                List<int> Multiplikationstabel = new List<int>();

                for (int index = 1; index <= 10; index++)
                {
                    Multiplikationstabel.Add(num * index);
                }

                int n = 1;
                foreach (int item in Multiplikationstabel)
                {
                    Console.WriteLine(num + " * " + n + " = " + item);
                    n++;
                }


            }
        }
    }
}

