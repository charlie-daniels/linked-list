const Node = (value = null) => ({
  value,
  nextNode: null,
});

const LinkedList = () => {
  let HEAD = null;
  let length = 0;

  const append = (value) => {
    length += 1;
    const newNode = Node(value);
    if (HEAD === null) HEAD = newNode;
    else {
      let pointer = HEAD;
      while (pointer.nextNode !== null) {
        pointer = pointer.nextNode;
      }
      pointer.nextNode = newNode;
    }
  };

  const prepend = (value) => {
    length += 1;
    const newNode = Node(value);
    if (HEAD === null) HEAD = newNode;
    else {
      newNode.nextNode = HEAD;
      HEAD = newNode;
    }
  };

  const size = () => length;

  const head = () => HEAD;

  const tail = () => {
    let pointer = HEAD;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    return pointer;
  };

  const at = (index) => {
    if (index >= length || index < 0) return null;
    if (index === 0) return HEAD;
    let pointer = HEAD;
    for (let i = 0; i < index; i += 1) {
      pointer = pointer.nextNode;
    }
    return pointer;
  };

  const pop = () => {
    let pointer = HEAD;
    let prevNode = null;
    length -= 1;
    while (pointer.nextNode !== null) {
      prevNode = pointer;
      pointer = pointer.nextNode;
    }
    prevNode.nextNode = null;
    return pointer;
  };

  const contains = (value) => {
    let pointer = HEAD;
    while (pointer.nextNode !== null) {
      if (pointer.value === value) return true;
      pointer = pointer.nextNode;
    }
    return false;
  };

  const find = (value) => {
    let pointer = HEAD;
    for (let i = 0; i < length - 1; i += 1) {
      if (pointer.value === value) return i;
      pointer = pointer.nextNode;
    }
    return null;
  };

  const toString = () => {
    const values = [];
    let pointer = HEAD;
    while (pointer !== null) {
      values.push(`( ${pointer.value} )`, ' -> ');
      pointer = pointer.nextNode;
    }
    values[values.length - 1] = ' -> null';
    return values.join('');
  };

  const insertAt = (value, index) => {
    if (index >= length || index <= 0) return;
    let pointer = HEAD;
    const newNode = Node(value);
    for (let i = 0; i < index - 1; i += 1) {
      pointer = pointer.nextNode;
    }
    newNode.nextNode = pointer.nextNode;
    pointer.nextNode = newNode;
  };

  const removeAt = (index) => {
    if (index >= length || index < 0) return;
    let pointer = HEAD;
    let prev = null;
    length -= 1;
    for (let i = 0; i < index; i += 1) {
      prev = pointer;
      pointer = pointer.nextNode;
    }
    prev.nextNode = pointer.nextNode;
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};
