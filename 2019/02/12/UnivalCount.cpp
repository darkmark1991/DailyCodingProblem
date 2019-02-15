#include <iostream>

using namespace std;


class Node {
    private:
        int val;
        Node* left = nullptr;
        Node* right = nullptr;

    public:
        // constructor:
        Node(int v, Node* l = nullptr, Node* r = nullptr) {
            val = v;
            left = l;
            right = r;
        }
        // setters:
        void setValue(int v) { val = v; }
        void setLeft(Node* x) { left = x; }
        void setRight(Node* x) { right = x; }
        // getters:
        int getValue() { return val; }
        Node* getLeft() { return left; }
        Node* getRight() { return right; }
};

int* UnivalCount(Node* root) {
    if (root->getLeft() == nullptr && root->getRight() == nullptr) {
        static int arr[] = {root->getValue(), 1};
        return arr;
    }
    if (root->getLeft() != nullptr && root->getRight() != nullptr) {
        int left[] = UnivalCount(root->getLeft());
        int right[] = UnivalCount(root->getRight());]

        if (left[0] != NULL && right[0] != NULL && left[0] == right[0] == root->getValue()) {
            static int arr[] = {left[0], left[1] + right[1] + 1};
            return arr;
        } else {
            static int arr[] = {NULL, left[1] + right[1]};
            return arr;
        }
    }
    Node* live;
    if (root->getLeft() != nullptr) live = root->getLeft();
    else live = root->getRight();

    int res[] = UnivalCount(live);

    if (res[0] != NULL && res[0] == root->getValue()) {
        return ;
        static int arr[] = {left[0], left[1] + right[1] + 1};
        return arr;
    } else {
        static int arr[] = {NULL, res[1]};
        return arr;
    }
}

int main() {
    Node* root = new Node(1, new Node(2, new Node(1)), new Node(1));
    cout << UnivalCount(root)[1];

    return 0;
}
