#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int DoTheyAddUp (int* arr, int k) {
    size_t len = sizeof(arr);
    for (int i=0; i<len; i++){
        if (arr[i] > k) continue;
        for (int j=i; j<len; j++){
            if (arr[i] > k) continue;
            else if (arr[i] + arr[j] == k) return 1;
        }
    }
    return 0;
}

void PrintArr (int* arr) {
    size_t len = sizeof(arr);
    for (int i=0; i<len; i++){
    	printf("%d", arr[i]);
    }
}

int main () {
    int k, arr[100], index = 0;
    char arrStr[100], *token, sep[1] = ",";
    
    printf("This program takes in an array of integers and tests if two of its elements can be added to a given number K.\n");
    
    printf("Please enter the array (comma separated): ");
    scanf("%[^\n]s", arrStr);
    
    printf("Please enter K: ");
    scanf("%d", &k);

    token = strtok(arrStr, sep);
    while (token != NULL) {
    	arr[index] = strtol(token, (char**) NULL, 10);
	printf("%s, %d\n", token, arr[index]);
	token = strtok(NULL, sep);
	index++;
    }
    PrintArr(arr);

/*
    if (DoTheyAddUp(arr, 17)) {
        printf("Two numbers in the given array add up to %d! :)\n", k);
    } else {
        printf("No two numbers in the given array add up to %d. :(\n", k);
    }
    return 0;
*/
}
