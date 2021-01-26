using System;
using System.Collections.Generic;
using System.Text;

namespace BubbleSortApp
{
    class NumberStore
    {

        private List<int> numbers = new List<int>();

        public void TestAddNumbers()
        {
            numbers.Add(7);
            numbers.Add(1);
            numbers.Add(11);
            numbers.Add(5);
        }

        public void TestPrintNumbers()
        {
            for (int i = 0; i < numbers.Count; i++)
            {
                Console.WriteLine(numbers[i]);
            }

            /*
            foreach (var item in numbers)
            {
                Console.WriteLine(item);
            }
            */
        }

        public void BubbleSort()
        {

            int index = numbers.Count - 1;

            while (index > 0)
            {
                for (int i = 0; i < index; i++)
                {
                    int første = numbers[i];
                    int andet = numbers[i + 1];

                    if (første > andet)
                    {
                        numbers[i] = andet;
                        numbers[i + 1] = første;
                    }

                }
                index--;
            }

        }
    }
}
