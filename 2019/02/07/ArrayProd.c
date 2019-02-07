#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void ArrayProd (int* arr, int* buf, size_t len) { 
    int tmp;
    for (int i=0; i<len; i++){
	tmp = 1;
        for (int j=0; j<len; j++){
            tmp *= arr[j];
        }
	buf[i] = tmp / arr[i];
    }
}

void ArrayProdWoDiv (int* arr, int* buf, size_t len) {
    int tmp;
    for (int i=0; i<len; i++){
        tmp = 1;
        for (int j=0; j<len; j++){
            tmp *= (i != j ? arr[j] : 1);
        }
        buf[i] = tmp;
    }
}

void PrintArr (int* arr, size_t len) {
    printf("[ ");
    for (int i=0; i<len; i++){
    	printf("%d%s", arr[i], i != len-1 ? ", " : " ");
    }
    printf("]");
}

int main () {
    int arr[100], size, index = 0, tmp;
    char arrStr[100], *token, sep[] = ",";
    
    printf("This program takes in an array of integers and returns an array of the same size where an element at position i is the product of elements of the array except the one at i.\n");
    
    printf("Please enter array size (max. 100): ");
    scanf("%d", &size);

    printf("Please enter the array (comma separated): ");
    scanf("%s", arrStr);

    token = strtok(arrStr, sep);

    while (token != NULL && index < size) {
    	arr[index] = strtol(token, (char**) NULL, 10);
	token = strtok(NULL, sep);
	index++;
    }
    
    int buf[size], buf2[size];

    printf("\nFunction using division: \n");
    PrintArr(arr, size);
    printf(" => ");
    ArrayProd(arr, buf, size);
    PrintArr(buf, size);

    printf("\n\nFunction w/o division: \n");
    PrintArr(arr, size);
    printf(" => ");
    ArrayProdWoDiv(arr, buf2, size);
    PrintArr(buf2, size);
    printf("\n");

    return 0;
}
