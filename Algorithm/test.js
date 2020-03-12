/** JS如何判断一组数字是否连续  */
var arr = [3, 4, 13, 14, 15, 17, 20, 22]

function test(arr) {
	if (arr.length < 2) {
		return arr
	}

	const retArr = []
	let tempArr = [arr[0]]

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] === arr[i - 1] + 1) {
			tempArr.push
		}
	}

	return retArr
}

/** 九宫格输入法 */
var enter = '22 5555 22 666 00 88 888 7777 4444 666 44'

function jiugongge(enter) {
	const key = ['0 ', '1,.?!', '2ABC', '3DEF', '4GHI', '5JKL', '6MNO', '7PQRS', '8TUV', '9WXYZ']

	let rst = ''
	let begin = 0
	let end = 0
	for (let i = 0; i < enter.length; i++) {
		if (enter[i] === ' ' || i === enter.length - 1) {
			let count = end - begin

			if (i === enter.length - 1) {
				count++
			}

			let index = (count - 1) % key[enter[begin] - '0'].length

			rst += key[enter[begin] - '0'][index]
			begin = i + 1
		}
		end++
	}
	console.log(rst)
	console.log('\n')
}

/** 航班预定座位数 */

var bookings = [
	[1, 2, 10],
	[2, 3, 20],
	[2, 5, 25]
]
var n = 5

function flightBookings(bookings, n) {
	// let range = (start, end) => new Array(end - start).fill(start).map((el, i) => start + i);
	let rst = new Array(n).fill(0)

	for (let [i, j, num] of bookings) {
		rst[i - 1] += num

		if (j < n) {
			rst[j] -= num
		}
	}

	for (let k = 1; k < n; k++) {
		rst[k] += rst[k - 1]
	}

	console.log(rst)
	return rst
}

/** 报数游戏 */

function baoshu(n, m, k) {
	let numberOfPersons = 0 // 当前报数人的编号
	let currentNumber = 0 // 当前的报数

	let currentTimes = 0 // 第m个人已经拍手的次数

	// 初始时向右报数
	let flag = 1

	// 已经拍手的次数小于要求拍手的次数
	while (currentTimes < k) {
		// 报数报到了最右边
		if (numberOfPersons >= n) {
			flag = -1
		}

		// 报数报到了最左边
		if (numberOfPersons <= 1) {
			flag = 1
		}
		// 报数人编号加1或减1
		numberOfPersons += flag
		// 报的数加1
		currentNumber++

		// 轮到第m个人报数了
		if (numberOfPersons === m) {
			// 第m个人报的数是7的倍数，或者包含数字7
			if (currentNumber % 7 === 0
				|| String(currentNumber).includes("7")) {
				currentTimes++
			}

		}
	}

	console.log(currentNumber)

	return currentNumber
}

/** 字符串分割 */

substring(start, end)

/** 单词压缩编码 */
function yasuo(words) {
	let rst = 0
	const tempArr = words.map(
		item => item.split('').reverse().join('')
	).sort()

	for (let i=0; i<tempArr.length; i++) {
		if (i+1 < tempArr.length && tempArr[i+1].includes(tempArr[i])) {
			continue
		}
		rst += tempArr[i].length + 1
	}

	return rst
}

/** 盛最多水的容器 */

function maxArea(height) {
	let left = 0
	let right = height.length - 1
	let area = 0

	while (left < right) {
		area = Math.max(
			area, 
			Math.min(height[left], height[right]) * (right -left)
		)

		if (height[left] < height[right]) {
			left++
		} else {
			right--
		}
	}

	return area
}

/** 判断有效字符串 */

public boolean isValid(String s) {
	Stack<Character> ns=new Stack<Character>();
	Map<Character,Character> m=new HashMap<Character,Character>();
	m.put(')','(');
	m.put('}','{');
	m.put(']','[');
	for(int i=0;i<s.length();i++){
			char tmp=s.charAt(i);
			if(tmp=='(' || tmp=='{' || tmp=='[') {
					ns.push(s.charAt(i));
			}else{
					char temp=m.get(tmp);
					if(ns.isEmpty()){
						 return false; 
					}
					if(temp!=ns.pop()){
							return false;
					}
					
			}
	} 
	return ns.isEmpty();
}

/** 两个大数相加 */
function dashu(str1, str2) {
	if (str1 == null || str1.length === 0) return str2
	if (str2 == null || str2.length === 0) return str1

	let maxLength = Math.max(str1.length, str2.length)

	let rst = ''

	str1 = str1.split('').reverse().join('')
	str2 = str2.split('').reverse().join('')

	let minLength = Math.min(str1.length, str2.length)
	let carry = 0
	let currentNum = 0
	for (let i = 0; i < minLength; i++) {
		currentNum = str1.charAt(i) + str2.charAt(i) - 2 * '0' + carry
		carry = currentNum / 10 | 0
		currentNum %=10
		rst += currentNum

	}

	if (str1.length < str2.length) {
		str1 = str2
	}

}


/** 候选人算法 */
let a = [1,2,3,1,2,1,1,6,1,1]

function houxuan(a) {
	let candidate = a[0]
	let vote = 0

	for (let i = 0; i < a.length; i++) {
		if (a[i] !== candidate) {
			if (vote === 0) {
				candidate = a[i]
				vote = 1
			} else {
				vote--
			}
		} else {
			vote++
		}
	}

	return [candidate, vote]

}

/** 字符串压缩 */

function compressString(S) {
	if(!S) return ''

	let res = S[0]
	let temp = S[0]
	let count = 1
	for (let i = 1; i<S.length; i++) {
		if(S[i] === temp) {
			count++
		} else {
			res += count
			count = 1
			temp = S[i]
			res += temp
		}
	}

	res += count 

	return res.length < S.length ? res : S
}
/** 集五福 */

function getWFCount() {
	
}

/** 分子弹 */
public static void fenZiDan(int[]shibing){
	int total = 0;//子弹总数
	int times = 0;//次数
	int[] temp = new int[shibing.length];//临时记录士兵第一次交出子弹后的数量
	for(int i=0;i<shibing.length;i++){
			total+=shibing[i];
	}
	while(true){//循环执行任务
			times++;
			for(int i=0;i<shibing.length;i++){
					if(shibing[i]%2!=0){
							total++;//向班长要一颗子弹
							temp[i] = (shibing[i]+1)/2;
					}else {
							temp[i] =shibing[i]/2;
					}
			}
			for(int i=0;i<shibing.length;i++){
					if(i>0) {
							shibing[i] = temp[i - 1] + temp[i];
					}else {
							shibing[i] = temp[i]+temp[temp.length-1];
					}
					if(i!=shibing.length-1){
							System.out.print(shibing[i]+" ");
					}else {
							System.out.println(shibing[i]+" ");
					}
			}

			if(total%shibing.length==0){//表示可以平均分,是子弹都相等的必要不充分条件,只有此时才会进行检查
					boolean isEnd = true;
					for(int i=1;i<shibing.length;i++){
							if(shibing[0]!=shibing[i]){
									isEnd = false;
									break;
							}
					}
					if(isEnd){
							break;
					}
			}
	}
	System.out.println("总共进行了"+times+"次");
}


/** 打印顺序 */
#include "stdafx.h"
#include <list>
 
void printOrder(const int input[], int len, int output[])
{
	if(len <= 0)
	{
		printf("Input Error!\n");
		return;
	}
 
	//打印顺序标识
	int iPrintFlag = 0;
	//用list缓存数组
	std::list<int> TempList;
	for(int i = 0; i < len; ++i)
	{
		TempList.push_back(input[i]);
	}
 
	do
	{
		bool bFlag = false;
		int iHead = TempList.front();
		std::list<int>::iterator it;
		for(it = TempList.begin(); it != TempList.end(); ++it)
		{
			if(iHead < *it)
			{
				bFlag = true;
				break;
			}
		}
 
		if(bFlag) //存在比头结点大的值
		{
			//将头元素放到末尾
			TempList.pop_front();
			TempList.push_back(iHead);
		}
		else
		{
			//直接打印，删除头元素
			TempList.pop_front();
			for(int i = 0; i < len; ++i)
			{
				if(input[i] == iHead)
				{
					output[i] = iPrintFlag;
					iPrintFlag++;
				}
			}
		}
	}while(TempList.size() > 0);
 
}
 
int _tmain(int argc, _TCHAR* argv[])
{
	int input[3] = {9,3,5};
	int output[3] = {0};
	printOrder(input, 3, output);
	for(int i = 0; i < 3; ++i)
	{
		printf("%d,", output[i]);
	}
	system("pause");
	return 0;
}
/** 打印顺序js版本 */
function printOrder(input) {
	if(input.length <= 0) {
		return
	}

	let printFlag = 0

	let tempList = [...input]

	// for (let i = 0; i<input.length; i++) {
	// 	tempList.push(input[i])
	// }

	do{
		let boolFlag = false
		let head = tempList[0]

	}while(tempList.length > 0)

}

/** 集五福 */

import java.util.Scanner;

public class Test {
    public static void main(String[] args) {
        getWFCount();
    }
    //获取五福套数
    public static void getWFCount() {
        System.out.println("请输入一组由0和1组成的5位字符串，中间用,号分割：");
        System.out.println("如：10110,11001");
        System.out.println("请输入：");
        while(true){
            Scanner sc = new Scanner(System.in);
            String s = sc.next();
            if(null == s || "" == s ){
                System.out.println("输入有误，请重新输入：");
                continue;
            }else{
                String[] sq = s.split(",");
                int[] list = {0,0,0,0,0};
                for(String sPart:sq){
                    if(sPart.length() != 5){
                         System.out.println("输入有误，请重新输入：");
                         continue;
                    }
                    if(!sPart.matches("[01]{5}")){
                        System.out.println("输入有误，请重新输入：");
                         continue;
                    }
                    for(int i=0;i<sPart.length();i++){
                        if(sPart.charAt(i) == '1'){
                            int n= list[i];
                            n++;
                            list[i] = n;
                        }
                    }
                }
                for(int i =0;i < list.length - 1;i++)
                {
                    for(int j = 0;j <  list.length - 1-i;j++)// j开始等于0，
                    {
                        if(list[j] < list[j+1])
                        {
                            int temp = list[j];
                            list[j] = list[j+1];
                            list[j+1] = temp;
                        }
                    }
                }
//              System.out.println(Arrays.toString(list));
                System.out.println("该团队能凑齐"+list[4]+"套五福");
                sc.close();
                break;
            }
        }
    }
}

/** 两个列表差额最小 */

def eval_list(a:list,b:list):
    if len(a)!=len(b):
        print('长度不一致') #类型错误未检测。
        return 0
    x=sorted(a+b,reverse=True)
    c,d=[x[0]],[x[1]]
    for i in range(2,len(x)):
        print('-len-',len(x),'cs',sum(c),'ds',sum(d),'-c-',c,'-d-',d)
        if len(d)<len(a) and sum(c)>sum(d):
            d.append(x[i])
        elif len(c)<len(a) and sum(c)<=sum(d):
            c.append(x[i])
        elif len(d)==len(a):
            c+=x[i:]
            break
        elif len(c)==len(a):
            d+=x[i:]
            break
    x=[]
    print('sumc',sum(c),'c',c,'\n','sumd',sum(d),'d',d,'\n','最小差额',abs(sum(c)-sum(d)))
eval_list([11,2,55,100,700],[3,600,12,1275,1000])

/** 两个大数相加 */

public static void main(String[] args) { 	String str1 = "123459"; 	String str2 = "123"; 	System.out.println(add(str1, str2));//123582 }   private static String add(String str1, String str2) { 	//任何一个字符串为null或空字符串，都不需要相加了 	if (str1 == null || "".equals(str1)) { 		return str2; 	} 	if (str2 == null || "".equals(str2)) { 		return str1; 	} 	int maxLength = Math.max(str1.length(), str2.length()); 	//定义一个存贮结果的字符串，长度要比最大长度字符串还长一位，用于存储可能出现的进位 	StringBuffer result = new StringBuffer(maxLength + 1);   	//翻转两个字符串 	str1 = new StringBuffer(str1).reverse().toString(); 	str2 = new StringBuffer(str2).reverse().toString();   	//反转后的结果分别为： 	//954321 	//321 	int minLength = Math.min(str1.length(), str2.length()); 	//进位 	int carry = 0; 	//当前位上的数值 	int currentNum = 0; 	//循环变量 	int i = 0; 	for (; i < minLength; i++) { 		//分别获取两个字符对应的字面数值，然后相加，再加上进位 		currentNum = str1.charAt(i) + str2.charAt(i) - 2 * '0' + carry; 		//获取进位 		carry = currentNum / 10; 		//处理当前位的最终值 		currentNum %= 10; 		//保存当前位的值到最终的字符缓冲区中 		result.append(String.valueOf(currentNum)); 	} 	if (str1.length() < str2.length()) { 		//选择 		str1 = str2; 	} 	for (; i < str1.length(); i++) { 		//分别获取两个字符对应的字面数值，然后相加，再加上进位 		currentNum = str1.charAt(i) - '0' + carry; 		//获取进位 		carry = currentNum / 10; 		//处理当前位的最终值 		currentNum %= 10; 		//保存当前位的值到最终的字符缓冲区中 		result.append(String.valueOf(currentNum)); 	} 	//处理最后一个的进位(当循环结束后，是不是还可能会有一个进位) 	if (carry > 0) { 		result.append(String.valueOf(carry)); 	} 	//最后翻转恢复字符串，再返回 	return result.reverse().toString(); }