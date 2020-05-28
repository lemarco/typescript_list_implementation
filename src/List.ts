import color from 'color';

interface Node<T> {
    next: Node<T> | null;
    prev: Node<T> | null;
    value: T | null;
}

export default class List<T> {
    private _length = 0;
    private head: Node<T> = {
        next: null,
        prev: null,
        value: null,
    };
    private tail: Node<T> = {
        next: null,
        prev: null,
        value: null,
    };
    private iterator: Node<T> = null;

    private createNode(value: T, next?: Node<T>, prev?: Node<T>): Node<T> {
        return {
            next,
            prev,
            value,
        };
    }
    public push(value: T) {
        if (!this._length) {
            this.head = this.createNode(value);
            this.tail = this.head;
            this._length++;
        }
        const node = this.createNode(value, null, this.tail);
        this.addNextNode(this.tail, node);
        this.tail = node;
        this._length++;
    }
    private addNextNode(current: Node<T>, next: Node<T>): void {
        if (!current.next) {
            current.next = next;
            next.prev = current;
        }
        const temp = current.next;
        current.next = next;
        next.prev = current;
        next.next = temp;
        temp.prev = next;
    }
    public pop(node: Node<T>): Node<T> {
        const newTail = this.tail.prev;
        const popNode = this.tail;
        newTail.next = null;
        this.tail = newTail;
        popNode.prev = null;
        return popNode;
    }
    public shift(node: Node<T>) {}
    public unShift(value: T) {
        if (!this._length) {
            this.head = this.createNode(value);
            this.tail = this.head;
            this._length++;
        }
        const node = this.createNode(value);
        this.addNextNode(node, this.head);
        this.head = node;
    }
    public sort(): void {}
    public reverse(): void {}
    // public toArray():[<T>]{}
    public forEach(): void {}
    get length(): number {
        return this._length;
    }
}
