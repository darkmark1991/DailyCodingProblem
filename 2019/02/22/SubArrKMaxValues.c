/* DailyCodingProblem #18 */

#include <stdio.h>
#include <limits.h>

void SubArrKMaxValues (int* arr, int k) {
    int len = sizeof(arr);
    if (len < k) {
        printf ("ERROR: K can't be greater than the length of the array.\n");
    }
    int subArr[k] = 0;
    int max = INT_MIN;

    for (int i = 0; i < k; i++) {
        sum += arr[i];
        max = arr[i] > max ? arr[i] : max;
        arr[0] = max;
    }

    /*
    for (int i = 0; i < len; i++) {
    }
    */


}


int main()
{
    int arr[] = {10, 5, 2, 7, 8, 7};
    int k = 3;

    SubArrKMaxValues(arr, k);

    return 0;
}