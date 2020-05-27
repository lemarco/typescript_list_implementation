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
        value:null
      };
      private length : number = 0; 
      private head : Node<T> = null;
      private tail : Node<T> = null;

      

    }
}
