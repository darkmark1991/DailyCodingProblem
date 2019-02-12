#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>

typedef struct Node {
    int val;
    struct Node* both;
} Node;

void add(struct Node** head_ref, int new_data) {
    struct Node* new_node = (struct Node*)malloc(sizeof(struct Node));

    struct Node* last = *head_ref;

    Node* prev = NULL;

    new_node->val = new_data;
    printf((Node *)((uintptr_t)last->both ^ (uintptr_t)prev) != NULL ? "true" : "false");


    while ((Node *)((uintptr_t)last->both ^ (uintptr_t)prev) != NULL) {
        printf("awd");
        prev = last; // why the fuck does this throw segfault???
        last = (Node *)((uintptr_t)last->both ^ (uintptr_t)prev);
    }

    last->both = (Node *)((uintptr_t)new_node ^ (uintptr_t)prev);

    new_node->both = (Node *)((uintptr_t)last ^ (uintptr_t)NULL);

    return;
}

Node* get(Node **head_ref, int index) {
    struct Node* current = *head_ref;

    for (int i = 0; i < index; i++) {
        current = current->both;
        printf("%d\n", current->val);
    }
    return current;
}

int main() {
    Node * head = NULL;
    head = malloc(sizeof(Node));

    head->val = 1;
    head->both = (Node *)((uintptr_t)NULL ^ (uintptr_t)NULL);

    add(&head, 2);
    add(&head, 3);

    printf("%d\n", ((Node *)((uintptr_t)head->both ^ (uintptr_t)NULL))->val);
    return 0;
}