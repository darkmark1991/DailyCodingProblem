/* DailyCodingProblem #26 */
#include <iostream>

using namespace std;

struct Node {
    int data;
    struct Node *next;
};

void insertAtHead(Node** head, int new_data) {
    struct Node* new_node = (struct Node*) malloc(sizeof(struct Node));
    new_node->data = new_data;
    new_node->next = *head;
    *head = new_node;
}

void insertAtEnd(Node** head, int new_data) {
    struct Node* ptr;
    ptr = *head;
    while (ptr->next != NULL) {
        ptr = ptr->next;
    }
    struct Node* new_node = (struct Node*) malloc(sizeof(struct Node));
    new_node->data = new_data;
    ptr->next = new_node;
}

void print(Node* head) {
    struct Node* ptr;
    ptr = head;
    while (ptr != NULL) {
        cout << ptr->data << " -> ";
        ptr = ptr->next;
    }
    cout << "NULL\n";
}

void deleteNode(Node** head, int k) {
    struct Node* ptr;
    struct Node* del;
    ptr = *head;
    if(k == 0) {
        del = ptr;
        *head = ptr->next;
    } else {
        for(int i = 0; i < k-1; i++, ptr = ptr->next){};
        del = ptr->next;
        ptr->next = del->next;
    }
    free(del);
}


int main() {
    struct Node* head = NULL;

    for(int i = 100; i >= 0; i--) {
        insertAtHead(&head, i);
    }
    insertAtEnd(&head, 101);
    cout<<"The original linked list is:\n";
    print(head);
    cout<<"The linked list after deleting 10th, 4th and #0 elements:\n";
    deleteNode(&head, 10);
    deleteNode(&head, 3);
    deleteNode(&head, 0);
    print(head);
    return 0;
}

/* expected output:
 * original: 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 11 -> 12 -> 13 -> 14 -> 15 -> 16 -> 17 -> ...
 * modified: 1 -> 2 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 11 -> 12 -> 13 -> 14 -> 15 -> 16 -> 17 -> ...
 * /