/* The circular doubly linked list is implemented
 * to store the last N order IDs
 */

class Node {
    constructor(orderId) {
        this.orderId = orderId;
        this.next = this;
        this.prev = this;
    }
    print() {
        console.log(`Order ID = ${this.orderId}`);
    }
}

class Log {
    // constructor sets maxLength to N and head to null
    constructor(N) {
        this.head = null;
        this.length = 0;
        this.maxLength = N;
    }
    // record adds new orderId to the left of the list
    // and sets head to the new element.
    // if max length is exceeded the oldest element is replaced by new one.
    record(orderId) {
        if (this.length === 0) {
            this.head = new Node(orderId);
            this.length++;
        } else if (this.length + 1 <= this.maxLength) {
            const tmp = new Node(orderId);
            tmp.next = this.head;
            tmp.prev = this.head.prev;
            this.head.prev.next = tmp;
            this.head.prev = tmp;
            this.length++;
            this.head = this.head.prev;
        } else {
            this.head.prev.orderId = orderId;
            this.head = this.head.prev;
        }
    }
    // printLast prints last i order IDs
    // if i is not supplied it prints all IDs
    // if i is greater than current number of IDs
    // all IDs are printed as well
    printLast(i = this.length) {
        const cap = this.length < i ? this.length : i;
        let tmp = this.head;
        let str = "Log contains:";
        for (let j = 0; j < cap; j++, tmp = tmp.next)
            str = `${str} => ${tmp.orderId}`;
        console.log(str);
    }
    // getLast returns last ith element
    // if i is not supplied it returns the newest element
    // if i is greater than current number elements
    // the oldest entry is returned
    getLast(i = 1) {
        const cap = (this.length < i ? this.length : i) - 1;
        let tmp = this.head;
        for (let j = 0; j < cap; j++, tmp = tmp.next){}
        return tmp;
    }
    getLastId(i = 1) {
        return this.getLast(i).orderId;
    }
}


const N = 10;
const log = new Log(N);

log.record(1);
log.record(2);
log.record(3);
log.record(4);
log.record(5);
log.record(6);
log.record(7);

log.printLast();

log.getLast().print();		// expected: 7
log.getLast(2).print();	// expected: 6
log.getLast(10).print();	// expected: 1
log.getLast(130).print();	// expected: 1

for (let i = 7; i < 23; i++)
    log.record(i);

log.printLast();
log.getLast().print();		// expected: 22
log.getLast(2).print();	// expected: 21
log.getLast(10).print();	// expected: 13
log.getLast(130).print();	// expected: 13


