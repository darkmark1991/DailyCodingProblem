#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int DoTheyAddUp (int* arr, size_t len, int k) {
    for (int i=0; i<len; i++){
        if (arr[i] > k) continue;
        for (int j=i; j<len; j++){
            if (arr[i] > k) continue;
            else if (arr[i] + arr[j] == k) return 1;
        }
    }
    return 0;
}

void PrintArr (int* arr, size_t len) {
    for (int i=0; i<len; i++){
    	printf("%d%s", arr[i], i != len-1 ? ", " : " ");
    }
}

int main () {
    int k, arr[100], size, index = 0, tmp;
    char arrStr[100], *token, sep[] = ",";
    
    printf("This program takes in an array of integers and tests if two of its elements can be added to a given number K.\n");
    
    printf("Please enter array size (max. 100): ");
    scanf("%d", &size);

    printf("Please enter the array (comma separated): ");
    scanf("%s", arrStr);
   
    printf("Please enter K: ");
    scanf("%d", &k);

    token = strtok(arrStr, sep);

    while (token != NULL && index < size) {
    	arr[index] = strtol(token, (char**) NULL, 10);
	token = strtok(NULL, sep);
	index++;
    }

    if (DoTheyAddUp(arr, size, k)) {
        printf("Two numbers in the given array [");
        PrintArr(arr, size);
	printf("] add up to %d! :)\n", k);
    } else {
        printf("No two numbers in the given array add up to %d. :(\n", k);
    }
    return 0;
}
