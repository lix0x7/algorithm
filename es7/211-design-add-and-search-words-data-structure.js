/**
 * 211. Design Add and Search Words Data Structure
 * Design a data structure that supports adding new words and finding if a string matches any previously added string.
 *
 * Implement the WordDictionary class:
 *
 * WordDictionary() Initializes the object.
 * void addWord(word) Adds word to the data structure, it can be matched later.
 * bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
 *
 *
 * Example:
 *
 * Input
 * ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
 * [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
 * Output
 * [null,null,null,null,false,true,true,true]
 *
 * Explanation
 * WordDictionary wordDictionary = new WordDictionary();
 * wordDictionary.addWord("bad");
 * wordDictionary.addWord("dad");
 * wordDictionary.addWord("mad");
 * wordDictionary.search("pad"); // return False
 * wordDictionary.search("bad"); // return True
 * wordDictionary.search(".ad"); // return True
 * wordDictionary.search("b.."); // return True
 *
 *
 * Constraints:
 *
 * 1 <= word.length <= 25
 * word in addWord consists of lowercase English letters.
 * word in search consist of '.' or lowercase English letters.
 * There will be at most 3 dots in word for search queries.
 * At most 104 calls will be made to addWord and search.
 */

class WordDictionary{

  constructor() {
    this.m = {};
  }

  addWord(word){
    let curNode = this.m;
    for (const c of word){
      curNode[c] = curNode[c] || {[c]: {}};
      curNode = curNode[c];
    }
    curNode[''] = true;
  }

  _search(word, index, curNode){
    if (!curNode){
      return false;
    }
    if (index === word.length){
      return curNode[''] || false;
    }

    const curChar = word[index];
    let chars;
    if (curChar === '.'){
      chars = Object.keys(curNode);
    }else{
      chars = [word[index]];
    }

    for (let k of chars){
      if (this._search(word, index + 1, curNode[k])){
        return true;
      }
    }
    return false;
  }

  search(word){
    return this._search(word, 0, this.m);
  }
}

const d = new WordDictionary();
d.addWord("abc");
console.log(d.search("abc"));
console.log(d.search("ab"));
console.log(d.search("abcd"));
console.log(d.search("..cd"));
console.log(d.search("ab."));
console.log(d.search("ab.."));


/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

/**
 * tag 树 trie
 */