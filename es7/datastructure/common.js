export class ListNode{
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

export class Heap {
  constructor(size) {
    // h[0] 占位不使用，实际堆顶为 h[1]
    // h[h.length-1] 为添加元素时的临时位置
    this.h = new Array(size + 2);
    // curIndex表示当前可插入数据的位置
    this.curIndex = 1;
  }

  add(n) {
    this.h[this.curIndex] = n;
    this._up(this.curIndex);
    this.curIndex++;
  }

  /**
   * 交换堆顶元素和堆尾元素，然后down新堆顶元素到合适的位置
   */
  pop() {
    this._swap(1, this.curIndex - 1);
    const rtn = this.h[this.curIndex - 1];
    this.curIndex--;
    this._down(1);
    return rtn;
  }

  _up(i) {
    const pIndex = Math.floor(i / 2);

    if (pIndex <= 0) {
      return;
    }

    if (this.h[pIndex] > this.h[i]) {
      this._swap(pIndex, i);
      this._up(pIndex);
    }
  }

  _down(i) {
    const l = i * 2, r = l + 1;
    if (l >= this.curIndex) {
      return;
    }

    let toIndex;

    if (r >= this.curIndex) {
      toIndex = l;
    } else if (this.h[l] > this.h[r]) {
      toIndex = r;
    } else {
      toIndex = l;
    }

    if (this.h[i] > this.h[toIndex]) {
      this._swap(i, toIndex);
      this._down(toIndex);
    }
  }

  isEmpty() {
    return this.curIndex === 1;
  }

  _swap(i, j) {
    const tmp = this.h[i];
    this.h[i] = this.h[j];
    this.h[j] = tmp;
  }
}
