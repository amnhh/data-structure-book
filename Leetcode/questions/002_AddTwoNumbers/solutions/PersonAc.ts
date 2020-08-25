/**
 * @title 个人解法
 *
 * @index 次序
 *
 * @trainOfThought 思路
 *
 * @complexAnalysis 复杂度分析
 *
 * @type 解法类型
 *
 * @note 笔记
 *
 * @remark 备注
 *
 * @category 想要分配到哪个大类下
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor (val?: number, next?: ListNode | null) {
        this.val = val || 0
        this.next = next || null
    }
}

export default function AddTwoNumbers (l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let ret: ListNode | null = new ListNode(0)
    const head: ListNode | null = ret

    let overflow: number = 0

    while(l1 !== null || l2 !== null) {
        ret.next = resolveOverflow(l1, l2)
        nextLoop()
    }

    if (overflow) {
        ret.next = resolveOverflow()
    }

    return head.next


    function resolveOverflow(l1?: ListNode | null, l2?: ListNode | null): ListNode {
        l1 = l1 || { val: 0, next: null }
        l2 = l2 || { val: 0, next: null }

        let retOverflow = l1.val + l2.val + overflow

        if (retOverflow >= 10) {
            overflow = 1
            retOverflow -= 10
        } else {
            overflow = 0
        }

        return new ListNode(retOverflow)
    }

    function nextLoop(): void {
        l1 = l1 && l1.next
        l2 = l2 && l2.next
        ret = (ret as ListNode).next
    }
}