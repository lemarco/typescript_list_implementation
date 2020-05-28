interface Node<T> {
    next: Node<T> | null;
    prev: Node<T> | null;
    value: T | null;
}

export default class List<T> {
    
    public push(value: T) {
        if (!this._length) {
            const newNode = this.createNode(value);
            this.head = newNode;
            this.tail = newNode;
            this._length++;
            return;
        }
        const node = this.createNode(value, null, this.tail);
        this.addNextNode(this.tail, node);
        this.tail = node;
        this._length++;
    }
    public pop(): Node<T> | null {
        if (!this._length) return null;
        const newTail = this.tail.prev;
        const pop = this.tail;
        newTail.next = null;
        this.tail = newTail;
        pop.prev = null;
        //this.showNode(pop)
        this._length--;
        return pop;
    }
    public shift(): Node<T> | null {
        if (!this._length) return null;
        const node = this.head 
        this.head = this.head.next
        this.head.prev = null
        this._length--;
        node.next = null
        return node
    }
    public unShift(value: T) {
        if (!this._length) {
            this.head = this.createNode(value);
            this.tail = this.head;
            this._length++;
            return;
        }
        const node = this.createNode(value);
        this.addNextNode(node, this.head);
        this.head = node;
    }
    public sort(): void {}

    public reverse(): void {
      let leftIterator: Node<T> = this.head 
      let rightIterator : Node<T> = this.tail

      for (let i = 0 ; i < this._length / 2; i++) {
      }
    }
    public toArray(): T[] {
        const array: T[] = [];
        this.forEach((node: Node<T>) => {
            array.push(node.value);
        });
        return array;
    }
    public forEach(f: (node: Node<T>) => void): void {
        this.iterator = this.head;
        while (this.iterator.next) {
            f(this.iterator);
            this.iterator = this.iterator.next;
        }
    }
    get length(): number {
        return this._length;
    }
    public showNode(node: Node<T>) {
        process.stdout.write('{ ');
        process.stdout.write('node.value = ' + `${node.value} `);
        process.stdout.write(' *** ');
        if (node.next) {
            if (node.next.value) {
                process.stdout.write('node.next.value = ' + `${node.next.value} `);
            }
        } else {
            process.stdout.write('node.next.value : ' + 'null ');
        }
        process.stdout.write(' *** ');

        if (node.prev) {
            if (node.prev.value) process.stdout.write('node.prev.value = ' + `${node.prev.value} `);
        } else {
            process.stdout.write('node.prev.value : ' + 'null ');
        }
        process.stdout.write('  } ---> \n');
    }
    public showList() {
        let iterator = this.head;
        this.showNode(iterator);
        while (iterator.next) {
            this.showNode(iterator.next);
            iterator = iterator.next;
        }
        console.log('NULL');
    }
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
    private addNextNode(current: Node<T>, next: Node<T>): void {
      if (!current.next) {
          current.next = next;
          next.prev = current;
          return;
      }
      const temp = current.next;
      current.next = next;
      next.prev = current;
      next.next = temp;
      temp.prev = next;
  }
}
