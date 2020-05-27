import color from 'color';

interface Node<T> {
    next: Node<T> | null;
    prev: Node<T> | null;
    value: T | null;
}

export default class List<T> {
    private node: Node<T> = {
        next: null,
        prev: null,
        value: null,
    };
    private _length = 0;
    private head: Node<T> = null;
    private tail: Node<T> = null;

    private createNode<T>({ value, next = null, prev = null }: { value: T; next?: Node<T>; prev?: Node<T> }): Node<T> {
        return {
            next,
            prev,
            value,
        };
    }
    public push(node: Node<T>) {}
    public pop(node: Node<T>) {}
    public shift(node: Node<T>) {}
    public unShift(node: Node<T>) {}
    public sort(): void {}
    public reverse(): void {}
    // public toArray():[<T>]{}
    public forEach(): void {}
    get length(): number {
        return this._length;
    }
}
