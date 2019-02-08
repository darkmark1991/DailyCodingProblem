#include <iostream>

using namespace std;


class Node {
    private:
        string val;
        Node* left = nullptr;
        Node* right = nullptr;

    public:
        // constructor:
        Node(string v, Node* l = nullptr, Node* r = nullptr) {
            val = v;
            left = l;
            right = r;
        }
        // setters:
        void setValue(string v) { val = v; }
        void setLeft(Node* x) { left = x; }
        void setRight(Node* x) { right = x; }
        // getters:
        string getValue() { return val; }
        Node* getLeft() { return left; }
        Node* getRight() { return right; }
};

string serialize(Node* root) {
    string res;
    if (root == nullptr) return "NULL";
    else res = root->getValue();
    return root->getValue() + " " + serialize(root->getLeft()) + " " + serialize(root->getRight());
}

Node* deserialize(string str) {
    int index = str.find(' ');
    string value = str.substr(0, index);

    if (value == "NULL") return nullptr;

    string rest = str.substr(index + 1);
    index = rest.find(' ');
    string next = rest.substr(0, index);

    Node* res = new Node(value);

    if (next != "NULL") res->setLeft(deserialize(rest));
    else res->setRight(deserialize(rest));

    return res;
}

int main() {
    Node* root = new Node("root", new Node("left", new Node("left.left")), new Node("right"));
    cout << "We'll first serialize then deserialize a binary tree and access the left branch of the left branch\n";
    cout << "The result displayed after the colon should be 'left.left': ";
    cout << deserialize(serialize(root))->getLeft()->getLeft()->getValue();

    return 0;
}
