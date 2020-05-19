import { compile, TemplateDelegate } from 'handlebars'

const sourceTemp: string = `### 什么是数组？ => 数组应该如何被定义？

通俗的来讲：数组属于线性数据结构，它用一组连续的内存空间，来存储一组具有相同数据类型的数据。

在课本中的定义为：若集合 \`S\` 由 \`n\` 个元素组成，且各个元素之间具有一个线性次序，则可以将他们存放在起始于地址A且物理地址连续的一段存储空间，并统称作 \`Array\`, 通常以 \`A\` 作为该数组的标识。

其中有三组关键字：

1. 线性表 & 线性次序
2. 连续内存空间 & 物理地址连续
3. 相同数据类型

关键字1的「线性」，标志着整个数据结构就像是一条线，只会有前驱和后继两个方向的邻居，而不会出现 \`上下左右\` 甚至更多方向上的相邻元素。

关键字2的「连续」，意味着我们这个数组的引用如果为 \`A\`, 想访问的元素的下标为 \`i\` 则以通过 \`A + i * dataTypeSize\` 来直接获取到想访问的元素。
这种访问一般被叫做「随机访问」，复杂度为 \`O(1)\`

关键字3的「相同数据类型」，意味着数组这种数据结构，期望存的是相同类型的数据。ps: 各个语言的实现可能有所不同，这里只是单纯的在谈论数据结构里的数组。

{{ interface }}

{{ realize }}

{{ questionLists }}

{{ tests }}`

const template: TemplateDelegate = compile(sourceTemp)

const data: Object = {
    interface: 'anning',
    realize: 'i realized it',
    questionLists: '[1, 2, 3]',
    tests: '[4, 5, 6]'
}

const result: string = template(data)

console.log(result)
