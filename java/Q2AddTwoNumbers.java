import datastructs.ListNode;

import java.util.List;

public class Q2AddTwoNumbers {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        var rl1 = reverse(l1);
        var rl2 = reverse(l2);
        System.out.println(rl1.printAsList());
        System.out.println(rl2.printAsList());
        var dummyHead = new ListNode(0);
        var cur = dummyHead;

        var incr = 0;
        while (rl1 != null || rl2 != null || incr != 0){
            if (rl1 == null){
                rl1 = new ListNode(0);
            }
            if (rl2 == null){
                rl2 = new ListNode(0);
            }
            cur.next = new ListNode((rl1.val + rl2.val + incr) % 10);
            incr = (rl1.val + rl2.val + incr) / 10;

            rl1 = rl1.next;
            rl2 = rl2.next;
            cur = cur.next;
        }

        return reverse(dummyHead.next);
    }

    private ListNode reverse(ListNode head){
        if (head == null || head.next == null){
            return head;
        }
        ListNode prev = null;
        ListNode cur = head;
        while (cur != null) {
            var next = cur.next;
            cur.next = prev;

            prev = cur;
            cur = next;
        }
        return prev;
    }

    public static void main(String[] args) {
        var l1 = new ListNode(List.of(2,4,3));
        var l2 = new ListNode(List.of(5,6,4));
        System.out.println(new Q2AddTwoNumbers().addTwoNumbers(l1, l2).printAsList());
    }
}
