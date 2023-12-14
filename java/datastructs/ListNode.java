package datastructs;

import java.util.ArrayList;
import java.util.List;

public class ListNode {
    public int val;
    public ListNode next;
    public ListNode() {}
    public ListNode(int val) { this.val = val; }
    public ListNode(int val, ListNode next) { this.val = val; this.next = next; }
    public ListNode(List<Integer> numbers) {
        var rst = new ListNode();
        var head = rst;

        for (Integer number : numbers) {
            rst.next = new ListNode(val);
            rst = rst.next;
            rst.val = number;
        }

        this.val = head.next.val;
        this.next = head.next.next;
    }


    public String printAsList(){
        var rst = new ArrayList<String>();
        var cur = this;
        while (cur != null){
            rst.add(String.valueOf(cur.val));
            cur = cur.next;
        }

        return String.join(", ", rst);
    }
}