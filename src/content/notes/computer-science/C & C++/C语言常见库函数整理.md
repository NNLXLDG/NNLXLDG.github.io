# C语言常见库函数整理

为了支持可移植性和提高程序的效率，所以C语言的基础库中提供了一系列类似的**库函数**,方便程序员开发软件。  

简单的总结，C语言常用的库函数都有:  
+ IO函数  <stdio.h>
+ 字符串操作函数
+ 字符操作函数
+ 内存操作函数
+ 时间/日期函数
+ 数学函数
+ 其他库函数

## 一、IO函数

目录：
1. printf()
2. scanf()
3. getchar()和putchar()


### (1)printf()的使用方法
注意：
1. 它名字里面的f代表format（格式化），表示可以定制输出文本的格式。
2. printf()不会在行尾自动添加换行符，运行结束后，光标就停留在输出结束的地方，不会自动换行。
3. printf()可以在输出文本中指定占位符,“占位符”，就是这个位置可以用其他值代入。


#### *\n换行符

为了让光标移到下⼀⾏的开头，可以在输出⽂本的结尾，添加⼀个换⾏符 \n 。
```c
#include <stdio.h>
int main(void) 
{
   printf("Hello World\n");
   return 0;
}
```
如果⽂本内部有换⾏，也是通过插⼊换⾏符来实现，如下⽅代码：
```c
#include <stdio.h>
int main(void) 
{
   printf("Hello\nWorld\n");
 
   printf("Hello\n");
   printf("World\n");
   return 0;
}
```

#### 1.printf()的占位符
printf() 的占位符有许多种类，与 C 语⾔的数据类型相对应。下⾯按照字⺟顺序，列出常⽤的占位符，⽅便查找，具体含义在后⾯章节介绍。
+ %a ：⼗六进制浮点数，字⺟输出为⼩写。  
+ %A ：⼗六进制浮点数，字⺟输出为⼤写。
+ %c ：字符。
+ %d ：⼗进制整数。
+ %e ：使⽤科学计数法的浮点数，指数部分的 e 为⼩写。
+ %E ：使⽤科学计数法的浮点数，指数部分的 E 为⼤写。
+ %i ：整数，基本等同于 %d 。
+ %f ：⼩数（包含 float 类型和 double 类型）。
+ %g ：6个有效数字的浮点数。整数部分⼀旦超过6位，就会⾃动转为科学计数法，指数部分的 e
为⼩写。
+ %G ：等同于 %g ，唯⼀的区别是指数部分的 E 为⼤写。
+ %hd ：⼗进制 short int 类型。
+ %ho ：⼋进制 short int 类型。
+ %hx ：⼗六进制 short int 类型。
+ %hu ：unsigned short int 类型。
+ %ld ：⼗进制 long int 类型。
+ %lo ：⼋进制 long int 类型。
+ %lx ：⼗六进制 long int 类型。
+ %lu ：unsigned long int 类型。
+ %lld ：⼗进制 long long int 类型。
+ %llo ：⼋进制 long long int 类型。
+ %llx ：⼗六进制 long long int 类型。
+ %llu ：unsigned long long int 类型。
+ %Le ：科学计数法表⽰的 long double 类型浮点数。
+ %Lf ：long double 类型浮点数。
+ %n ：已输出的字符串数量。该占位符本⾝不输出，只将值存储在指定变量之中。
+ %o ：⼋进制整数。
+ %p ：指针。
+ %s ：字符串。
+ %u ：⽆符号整数（unsigned int）。
+ %x ：⼗六进制整数。
+ %zd ： size_t 类型。
+ %% ：输出⼀个百分号。

这⾥的 %d , %c 等是占位符，会被后边的值替换。

+ **%d--打印整型**  
可以在""内添加注释,  
%02d表示补齐到两位,"0"表示补齐的内容,但是只能是"0".
如果超过2位，那么就会正常输出。
```c
printf("year=%d\n",year);
printf("year=%02d\n",year);
```

+ **%c--打印字符**  
'w' (单个字符采用c,多个字符就是字符串了) ;如果后面跟的是ascll码值，那么会直接打印ascll对应字符。
```c
printf("%c\n",'w');
printf("%c\n",97);
```

+ **%s--打印字符串**
两种方法  
```c
printf("abcdef\n");//只有字符串可以这样
printf("%s\n","abcdef");  
printf("%s will come tonight\n", "zhangsan");
```
一个引号引起来的是字符，两个引号引起来的是字符串。

+ **%f--打印浮点数float**
    + 如果f前面啥也不加,那么默认6位小数,大于等于6位的部分会被舍掉,最后一位会根据第六位四舍五入的结果显示,但无论如何影响不了倒数第二位;  
    + 小于6位的会在后面用0去补全.
    + 在f的前面添加`.2`表示保留两位小数,同样最后一位会根据它后面的那一位四舍五入;如果本来给的浮点数没有达到要保留的位数,则会在后面添0.
```c
printf("%f\n",58.8888888);
printf("%.2f",58.88888);
```
结果：  
58.888889  
58.89
+ **%lf--打印double**类型的数据  
+ **%zu--打印sizeof**的返回值  
+ **%p**--打印地址
```c
printf("%p\n",&a);
```
直接转义某个字符


printf() 参数与占位符是⼀⼀对应关系，如果有 n 个占位符,printf() 的参数就应该有 n + 1 个。如果参数个数少于对应的占位符， printf() 可能会输出内存中的任意值。


##### *辨析c语言中`%d`,`%%d`,`%%%d`和`\\%d`的区别

1. %d，表示按整型输出后面给出的变量的值。

2. %%d ，这就会被拆成两部分看待，一是“%%”在C语言中就是输出一个“%”，而是“d”就是一个普通字符，所以当“%%d”在一起时，其含义就是输出“%d”这两个字符。

3. %%%d ，3个%在一起，进行拆分的话，%%代表一个“%”字符，后面的%d又代表整型输出变量的值，所以当“%%%d”一起时，其最终含义就是输出一个字符%号再接着按整型输出变量的值。类似的\符号也是一样。


C语言中，%是转义符，也就是和%一起出现的后面的内容会转义后输出


#### 2.printf()输出格式
可以定制占位符的输出格式。

+ printf() 允许限定占位符的最小宽度。
```c
#include <stdio.h>
int main()
{
   printf("%5d\n", 123); // 输出为 " 123"
   return 0;
}
```
上⾯⽰例中， %5d 表⽰这个占位符的宽度⾄少为5位。如果不满5位，对应的值的前⾯会添加空格。输出的值默认是右对⻬，即输出内容前⾯会有空格；如果希望改成左对⻬，在输出内容后⾯添加空格，可以在占位符的 % 的后⾯插⼊⼀个`-`号。
```c
#include <stdio.h>
int main()
{
   printf("%-5d\n", 123); // 输出为 "123 "
   return 0;
}
```
对于⼩数，这个限定符会限制所有数字的最⼩显⽰宽度。
```c
// 输出 " 123.450000",前面有两个空格
#include <stdio.h>
int main()
{
   printf("%12f\n", 123.45);
   return 0;
}
```
上⾯⽰例中， %12f 表⽰输出的浮点数最少要占据12位。由于⼩数的默认显⽰精度是⼩数点后6位，所以 123.45 输出结果的头部会添加2个空格。

+ 总是显示`+-`号
默认情况下， printf() 不对正数显⽰ + 号，只对负数显⽰ - 号。如果想让正数也输出 + 号，可以在占位符的 % 后⾯加⼀个 + 。
```c
#include <stdio.h>
int main()
{
   printf("%+d\n", 12); // 输出 +12
   printf("%+d\n", -12); // 输出 -12
   return 0;
}
```

+ 限定⼩数位数
输出⼩数时，有时希望限定⼩数的位数。举例来说，希望⼩数点后⾯只保留两位，占位符可以写成 %.2f 。
```c
// 输出 Number is 0.50
#include <stdio.h>
int main()
{
   printf("Number is %.2f\n", 0.5);
   return 0;
}
```
上⾯⽰例中，如果希望⼩数点后⾯输出3位（ 0.500 ），占位符就要写成 %.3f 。

这种写法可以与限定宽度占位符，结合使⽤。
```c
// 输出为 " 0.50",前面有俩空格
#include <stdio.h>
int main()
{
   printf("%6.2f\n", 0.5);
   return 0;
}
```
上⾯⽰例中， %6.2f 表⽰输出字符串最⼩宽度为6，⼩数位数为2。所以，输出字符串的头部有两个空格。  

+ 用*代替传址
最⼩宽度和⼩数位数这两个限定值，都可以⽤ * 代替，通过 printf() 的参数传⼊。
```c
#include <stdio.h>
int main()
{
   printf("%*.*f\n", 6, 2, 0.5);
   return 0;
}
// 等同于printf("%6.2f\n", 0.5);
```
上⾯⽰例中， %*.*f 的两个星号通过 printf() 的两个参数 6 和 2 传⼊。

+ 输出部分字符串
%s 占位符⽤来输出字符串，默认是全部输出。如果只想输出开头的部分，可以⽤ %.[m]s 指定输出的⻓度，其中 [m] 代表⼀个数字，表⽰所要输出的⻓度。
```c
// 输出 hello
#include <stdio.h>
int main()
{
   printf("%.5s\n", "hello world");
   return 0;
}
```
上⾯⽰例中，占位符 %.5s 表⽰只输出字符串“hello world”的前5个字符，即“hello”。

#### 3.printf的返回值
printf函数是有返回值的,返回的是输出的字符串的长度
```c
int main()
{
    int a = printf("hehe");
    //不能在这个之后直接加上\n,原因是返回值会把\n也算进去,返回值就多了1
    printf("\n%d\n",a);//注意\n也可以写在前面
    return 0;
}
```

### (2)scanf()的使用方法

scanf的功能：用一句话来概括就是“**通过键盘给程序中的变量赋值**”。  程序运⾏到这个语句时，会停下来，等待⽤⼾从键盘输⼊。
⽤⼾输⼊数据、按下回⻋键后， scanf() 就会处理⽤⼾的输⼊，将其存⼊变量。它的原型定义在头⽂件`stdio.h`。

函数的原型
```c
int scanf(const char *format, ...);
```

#### 1.基本用法
作用：将从键盘输入的字符转化为输入控制符所规定格式的数据，然后存入已输入参数的值为地址的变量中。

scanf("%d", &i)
1. %d  键盘上输入的是字符，必须使用%d，把输入的字符转换为十进制整数。
2. &i  取地址运算符&，把输入的字符经转化为整数后存到&i这个地址对应的变量i中。(变量i需要提前创建)。 
3. 注意：变量前⾯必须加上 & 运算符（指针变量除外），因为 scanf() 传递的不是值，⽽是地址，即将变量 i 的地址指向⽤⼾输⼊的值。
如果这⾥的变量是指针变量（⽐如字符串变量），那就不⽤加 & 运算符。

> 注意：变量前⾯必须加上 & 运算符（指针变量除外），因为 scanf() 传递的不是值，⽽是地址，即将变量 i 的地址指向⽤⼾输⼊的值。
如果这⾥的变量是指针变量（⽐如字符串变量），那就不⽤加 & 运算符。

**scanf() 处理数值占位符时，会⾃动过滤空⽩字符，包括空格、制表符、换⾏符等。**

所以，⽤⼾输⼊的数据之间，有⼀个或多个空格不影响 scanf() 解读数据。另外，⽤⼾使⽤回⻋键，将输⼊分成⼏⾏，也不影响解读。
```c
1
-20
3.4
-4.0e3
```
上⾯⽰例中，⽤⼾分成四⾏输⼊，得到的结果与⼀⾏输⼊是完全⼀样的。每次按下回⻋键以后，scanf() 就会开始解读，如果第⼀⾏匹配第⼀个占位符，那么下次按下回⻋键时，就会从第⼆个占位符开始解读。


**scanf() 处理⽤⼾输⼊的原理是**，⽤⼾的输⼊先放⼊缓存，等到按下回⻋键后，按照占位符对缓存进⾏解读。解读⽤⼾输⼊时，会从上⼀次解读遗留的第⼀个字符开始，直到读完缓存，或者遇到第⼀个不符合条件的字符为⽌。
```c
#include <stdio.h>
int main()
{
   int x;
   float y;
 
   // ⽤⼾输⼊ " -13.45e12# 0"
   scanf("%d", &x);
   printf("%d\n", x);
   scanf("%f", &y);
   printf("%f\n", y);
   return 0;
}
```


上⾯⽰例中， scanf() 读取⽤⼾输⼊时， %d 占位符会忽略起⾸的空格，从 - 处开始获取数据，读取到 -13 停下来，因为后⾯的 . 不属于整数的有效字符。这就是说，占位符 %d 会读到 -13 。
第⼆次调⽤ scanf() 时，就会从上⼀次停⽌解读的地⽅，继续往下读取。这⼀次读取的⾸字符是`.`，由于对应的占位符是 %f ，会读取到 `.45e12` ，这是采⽤科学计数法的浮点数格式。后⾯的`#`不属于浮点数的有效字符，所以会停在这⾥。


由于 scanf() 可以连续处理多个占位符，所以上⾯的例⼦也可以写成下⾯这样。
```c
#include <stdio.h>
int main()
{
   int x;
   float y;
 
   // ⽤⼾输⼊ " -13.45e12# 0"
   scanf("%d%f", &x, &y);
   return 0;
}
```


#### 2.scanf的返回值
scanf() 的返回值是⼀个整数，表⽰成功读取的变量个数。  
如果没有读取任何项，或者匹配失败，则返回 0 。如果在成功读取任何数据之前，发⽣了读取错误或者遇到读取到⽂件结尾，则返回常量EOF。

```c
#include <stdio.h>
int main()
{
   int a = 0;
   int b = 0;
   float f = 0.0f;
   int r = scanf("%d %d %f", &a, &b, &f);
   printf("a=%d b=%d f=%f\n", a, b, f);
   printf("r = %d\n", r);
   return 0;
}
```
如果⼀个数字都不输⼊，直接按3次 ctrl+z退出 ,输出的r是-1，也就是EOF。

#### 3.占位符

scanf()常⽤的占位符如下,与 printf()的占位符基本⼀致。
+ `%c`:字符。
+ `%d`:整数。
+ `%f`:float类型浮点数。
+ `%lf`:double类型浮点数。
+ `%Lf`:long double类型浮点数。(大写L)
+ `%s`：字符串。
+ `%[]`：在⽅括号中指定⼀组匹配的字符（⽐如 %[0-9]），遇到不在集合之中的字符，匹配将会停⽌。


上⾯所有占位符之中，**除了`%c`以外，都会⾃动忽略起⾸的空⽩字符。**   

`%c `不忽略空⽩字符,总是返回当前第⼀个字符，⽆论该字符是否为空格。如果要强制跳过字符前的空⽩字符，可以写成 
`scanf(" %c", &ch)` ，即 %c 前加上⼀个空格，表⽰跳过零个或多个空⽩字符。


下⾯要特别说⼀下占位符%s，它其实不能简单地等同于字符串。它的规则是，从当前第⼀个⾮空⽩字符开始读起，直到遇到空⽩字符（即空格、换⾏符、制表符等）为⽌。


因为 %s 不会包含空⽩字符，所以⽆法⽤来读取多个单词，除⾮多个 %s ⼀起使⽤。这也意味着，**scanf() 不适合读取可能包含空格的字符串**，⽐如书名或歌曲名。另外， scanf() 遇到 %s 占位符，会在字符串变量末尾存储⼀个**空字符 \0**。


scanf() 将字符串读⼊字符数组时，不会检测字符串是否超过了数组⻓度。所以，储存字符串时，很可能会超过数组的边界，导致预想不到的结果。为了防⽌这种情况，使⽤ %s 占位符时，应该指定
读⼊字符串的最⻓⻓度，即写成 %[m]s ，其中的 [m] 是⼀个整数，表⽰读取字符串的最⼤⻓度，后⾯的字符将被丢弃。
```c
#include <stdio.h>
int main()
{
   char name[11];
   scanf("%10s", name);
   return 0;
}
```
上⾯⽰例中， name 是⼀个⻓度为11的字符数组， scanf() 的占位符 %10s 表⽰最多读取⽤⼾输⼊的10个字符，后⾯的字符将被丢弃，这样就不会有数组溢出的⻛险了。





以下代码的目的是从一串包含生日信息的数字中输出,输出年,月,日的信息.
```c
#include <stdio.h>
int main()
{
    int year = 0;
    int month = 0;
    int day =0;
    scanf("%4d%2d%2d", &year, &month, &day);
    //这里的4d,2d,2d是指指定的扫描宽度,从前往后,超过的的部分将不会被扫描
    //这里的%4d%2d%2d与输入的与那一串数字格式是一样的
    printf("year=%d\n",year);
    printf("month=%02d\n",month);
    //02d的意思是,指定输出的宽度为2,宽度不足2的前面拿0来补足,d指的是整型,另外,如果只是2d,没有0,如果宽度不够,那么他会输出 空格＋数字
    printf("day=%02d\n",day);
}
```
以下代码的目的是指定格式的信息中提取再输出
其中学号和成绩用`;`隔开,成绩和成绩之间使用`,`隔开.
```c
int main()
{
    int id = 0;
    float c = 0.0f;//float类型创建的变量默认是double,在后面加上f则会强制锁定float类型
    float math = 0.0f;
    float english = 0.0f;
    scanf("%d;%f,%f,%f", &id, &c, &math, &english);
    //这里的%d;%f,%f,%f与输入的与那一串数字格式是一样的
    printf("The each subject score of NO. %d is %.2f, %.2f, %.2f", id, c, math, english);
}
```


例子:
```c
#include<stdio.h>
int main()
{
    int a,b;
    printf("请输入整数：");
    scanf("%d",&a);// %d,将输入的字符转化为十进制形式
    printf("a=%d\n",a);// %d,以十进制输出a的值，\n换行符
    b=a>0?1:-1;//三目运算符，当a>0,b=1;否则b=-1
    printf("b=%d\n",b);
    return 0;
}
```

#### 4.原样输入原则
作用：将从键盘输入的字符转化为输入控制符所规定格式的数据，然后存入已输入参数的值为地址的变量中（**非输入控制符必须原样输入**）。  

例子:
```c
#include<stdio.h>
int main()
{
    int a,b;
    printf("请输入整数：");
    scanf("a=%d",&a);//   %d,将输入的字符转化为十进制形式
    //这里不一样
    b=a>0?1:-1;//三目运算符，当a>0,b=1;否则b=-1
    printf("b=%d\n",b);
    return 0;
}
```
根据scanf("a=%d",&a)双引号里的内容”a=%d"，在终端输入必须输入“a=数字",然后回车，注意"a="不能少，否则程序不能向下执行。


极端一点的例子：

```c
scanf("%d, %daaa", &a, &b);
```
输入时必须输入"6,8aaa"格式才可以，空格倒无所谓

**总结**：推荐第一种用法，尽量不要用非输入控制符，可以结合printf使用来提示输入的东西，然后根据提示直接输入就好。

#### 5.赋值忽略符
有时，⽤⼾的输⼊可能不符
```c
#include <stdio.h>
int main()
{
   int year = 0;
   int month = 0;
   int day = 0;
   scanf("%d-%d-%d", &year, &month, &day);
   printf("%d %d %d\n", year, month, day);
   return 0;
}
```
上⾯⽰例中，如果⽤⼾输⼊ 2020-01-01 ，就会正确解读出年、⽉、⽇。问题是⽤⼾可能输⼊其他格式，⽐如 2020/01/01 ，这种情况下， scanf() 解析数据就会失败。为了避免这种情况， scanf() 提供了⼀个赋值忽略符（assignment suppression character） `*` 。
**只要把 * 加在任何占位符的百分号后⾯，该占位符就不会返回值，解析后将被丢弃。**

```c
#include <stdio.h>
int main()
{
   int year = 0;
   int month = 0;
   int day = 0;
   scanf("%d%*c%d%*c%d", &year, &month, &day);
   return 0;
}
```
上⾯⽰例中，%*c 就是在占位符的百分号后⾯，加⼊了赋值忽略符 * ，表⽰这个占位符没有对应的变量，解读后不必返回。



#### 6.高质量scanf
应该在输入前有提示.  
```c
printf(请输入……"");  
scanf("%d", &a);
```
如何用scanf编写高质量代码?

1. 使用scanf之前最好先使用printf提示用户以什么样的方式来输入。
2. scanf中尽量不要使用非输入控制符，尤其是不要用'\n'。、
   eg: scanf("%d\n", &a);
   必须输入"8\n"
3. 应编写代码对用户的非法输入做适当的处理。
处理方法:
```c
char ch;
while('\n' != (ch = getchar()))
{
    continue;
}
```
例子2:
```c
#include<stdio.h>

int main(void)
{
    int a, c;
    char ch;

    scanf("%d\n", &a);
    printf("%d\n", a);

    while('\n' != (ch = getchar()))
    {
        continue;
    }
        // 加上面代码可解决此问题，功能是把输入的字符全部接收，
        // 也即输入的字符应经被清空，可进行下次输入。
    scanf("%d", &c);
    printf("%d\n", c);
}
```
若直接输入99m,则a = 99,c = 垃圾值.这是因为a把99m中的99当做有效值接收,而c从m开始接收,出错.scanf中没有被接收的值不会自动清除,而是保留等下个变量再来接收.

**注意**:scanf函数在遇到空格或换行符时会停止读取.


#### 7.scanf()与数组
```c
int main()
{
    i = 0;
    arr[4] = {0};
    while(i<4)
    {
        scanf("%d",&arr[i]);
        i++;
    }
    return 0;
}
```

### (3)getchar()和putchar()

#### getchar()和putchar()函数的定义

`getchar()`和`putchar()`是一对字符输入/输出函数。`getchar()`不带任何参数，`getchar()`用于读取用户从键盘输入的单个字符。`putchar()`向终端输出一个字符，其格式为`putchar()`。`getchar()`和`putchar()`函数包含在头文件`stdio.h`中，使用时需包含此头文件。

举例:  
```c
#include<stdio.h>
int main()
{
	int ch = getchar();//实际变量ch中放的是读到的那个字符的ASCII码值,键盘输入
	putchar(ch);//putchar接收到一个参数（ASCII码值），输出相对应的字符
	return 0;
}
```
#### getchar（）函数为什么用int定义返回值类型
getchar()函数的返回值类型时整形，当发生读取错误时，返回整型值是-1，把一个负值赋给一个char型的变量是不正确的。当读取正确时，他会返回用户从键盘输的第一个字符的ASCII码值，ASCII码值是数字符号，通过这里也可以看出来getchar()返回值类型应用int定义.

#### 函数getchar()和函数scanf()的工作原理
它们的工作原理有相同也有不同  
**相同之处:**  
getchar()和scanf()不是直接从键盘上拿数据，他们是从键盘的缓冲区拿数据，键盘输入的字符会放入缓冲区，若用户不按回车键，所有放入缓冲区的字符都不会被读。  
**不同之处:**
在用户按下回车键后，缓冲区内会存在’\n’，scanf只会都'\n'之前的字符，不读' \n'和空格.   getchar会将缓冲区的所有字符全部读走，其中包括空格和'\n'。在windows下如果想结束，就输入Ctrl+Z,表示EOF.   

以下的代码适当的修改是可以用来清理缓冲区的.
```c
//代码1
#include <stdio.h>
int main()
{
    int ch = 0;
    while ((ch = getchar()) != EOF)//说明得到的是正常的字符
        putchar(ch);
    return 0;//ctrl+Z可以让代码停下来
}
```
以下的代码用来演示使用getchar()和putchar()实现更加复杂的功能  
```c
#include<stdio.h>
int main()
{
	char password[20] = { 0 };
	printf("请输入密码：>");
	scanf("%s", password);
    //注意这里没有取地址`&`,原因是数组的地址已经是在创建的过程中就已经建好了的


    //scanf不是直接从键盘拿数据，scanf的工作原理是：在scanf和键盘之间的输入缓冲区中拿数据，输入缓冲区有数据他就拿，没有他就等，当从键盘上输入字符abcdef为了让字符abcdef来到缓冲区
	//在键盘上输入\n（回车）字符连同\n一起来到缓冲区,scanf会拿走\n之前的字符abcdef缓冲区剩下\n
	//scanf不读空格和回车
	int tmp = 0;
	while ((tmp = getchar()) != '\n')//用来清理缓冲区//注意这种写法((tmp = getchar())
	{
		;//啥也没干,或着加上(continue)
	}
	printf("请确认密码(y/n):"); 
	int ch = getchar();  //getchar和scanf的工作原理一样，他会读走缓冲区里剩余的\n,ch里边是\n
	if (ch == 'y')       //getchar和putchar每次只会输入和输出一个字符
	{
		printf("确认成功\n");
	}
	else
	{
		printf("确认失败\n");
	}
	return 0;
}
```
以下代码的作用是：只打印数字字符，跳过其他字符的
```c
//代码2
#include <stdio.h>
int main()
{
    char ch = '\0';
    while ((ch = getchar()) != EOF)
    {
        if (ch < '0'|| ch > '9')
            continue;
        putchar(ch);
    }
    return 0;
}
```

#### putchar,getchar,scanf和printf区别
`putchar`和`getchar`是输入输出单字符的，`printf`和`scanf`可以输入多字符，并且`getchar`和`putchar`只可以用于字符型的输入输出，而`scanf`和`printf`可以用于**整型，浮点型和字符型等类型**的输入和输出。

注意：
putchar()输出指定的字符，不会在输出后自动换行，所以putchar(a)和putchar(b)之间要加putchar('\n')，用作换行.  






















## 二、字符串操作函数

### 1.strlen()的使用和模拟实现
```c
size_t strlen ( const char * str );
```

+ 字符串以 '\0' 作为结束标志，strlen函数返回的是在字符串中 '\0' 前⾯出现的字符个数（不包含 '\0' )。
+ 参数指向的字符串必须要以 '\0' 结束。
+ 注意函数的返回值为 size_t，是⽆符号的（ 易错 ）
+ strlen的使⽤需要包含头⽂件
+ 学会strlen函数的模拟实现

```c
#include <stdio.h>
#include <string.h>
int main()
{
    const char* str1 = "abcdef";
    const char* str2 = "bbb";
    if(strlen(str2)-strlen(str1)>0)
    {
        printf("str2>str1\n");
    } 
    else
    {
        printf("srt1>str2\n");
    }
    return 0;
}
```
strlen的模拟实现：  
方式1：  
```c
//计数器⽅式
int my_strlen(const char * str)
{
    int count = 0;
    assert(str);
    while(*str)
    {
        count++;
        str++;
    }
    return count;
}
```
⽅式2：
```c
//不能创建临时变量计数器
int my_strlen(const char * str)
{
    assert(str);
    if(*str == '\0')
        return 0;
    else
        return 1+my_strlen(str+1);
}
```
方式3：
```c
//指针-指针的⽅式
int my_strlen(char *s)
{
    assert(str);
    char *p = s;
    while(*p != ‘\0’ )
        p++;
    return p-s;
}
```

### 2.strcpy()的使用和模拟实现

**使用**
```c
char* strcpy(char * destination, const char * source );
```
Copies the C string pointed by source into the array pointed by destination, including theterminating null character (and stopping at that point).

注意：
+ 源字符串必须以 '\0' 结束。
+ 会将源字符串中的 '\0' 拷⻉到⽬标空间。
+ ⽬标空间必须⾜够⼤，以确保能存放源字符串。
+ ⽬标空间必须可修改。
+ 学会模拟实现。

**模拟实现**

1. 参数顺序  
2. 函数的功能，停止条件  
3. assert()  
4. const修饰指针   
5. 函数返回值  
6. 题目出自《高质量C/C++编程》书籍最后的试题部分

```c
char* my_strcpy(char *dest,const char*src)
//这里返回类型是char*，目的是为了实现链式访问
//返回值应该是目标位置的起始地址
{
    char *ret = dest;
    assert(dest != NULL);
    assert(src != NULL);
    while((*dest++ = *src++))
    {
        ;
    }
    return ret;
}
```
### 3.strcat()的使用和模拟实现

**使用**
```c
char *strcat( char *strDestination, const char *strSource );
```

Appends a copy of the source string to the destination string. The terminating null character in destination is overwritten by the first character of source, and a null-character is included at the end of the new string formed by the concatenation of both in destination.


+ 源字符串必须以'\0' 结束。
+ 目标字符串中也得有\0 ，否则没办法知道追加从哪里开始。
+ 目标空间必须有足够的大，能容纳下源字符串的内容。
+ 目标空间必须可修改。
+ 字符串自己给自己追加，如何？


**模拟实现**
```c
#include <stdio.h>
#include <assert.h>

char* my_strcat(char* dest, const char* src)
{
    char* ret = dest;
    assert(dest && src);
    while (*dest )
    {
        dest++;
    }
    while ((*dest++ = *src++))
    {
        ;
    }
    return ret;
}

int main()
{
    char str1[10] = "abc";
    char str2[] = "def";
    my_strcat(str1,str2);
    printf("%s\n",str1);
    return 0;
}
```

### 4.strcmp()的使⽤和模拟实现
```c
int strcmp( const char *string1, const char *string2 );
```

**使用**
This function starts comparing the first character of each string. If they are equal to each other, it continues with the following pairs until the characters differ or until a terminating null-character is reached.

标准规定：  
+ 第一个字符串大于第二个字符串，则返回大于0的数字
+ 第一个字符串等于第二个字符串，则返回0
+ 第一个字符串小于第二个字符串，则返回小于0的数字
+ 那么如何判断两个字符串？ 比较两个字符串中对应位置上字符ASCII码值的大小。

**模拟实现**
```c
int my_strcmp (const char * str1, const char * str2)
{
    int ret = 0 ;
    assert(str1 != NULL);
    assert(str2 != NULL);
    while(*str1 == *str2)
    {
        if(*str1 == '\0')
            return 0;
        str1++;
        str2++;
    }
    return *str1-*str2;
}
```

### 5.strncpy()函数的使⽤
```c
char *strncpy( char *strDest, const char *strSource, size_t count );
```

Copies the first num characters of source to destination. If the end of the source C string (which is signaled by a null-character) is found before num characters have been copied, destination is padded with zeros until a total of num characters have been written to it.

+ 拷贝num个字符从源字符串到目标空间。
+ 如果源字符串的长度小于num，则拷贝完源字符串之后，在目标的后边追加0，直到num个。





### 6.strncat()函数的使⽤
```c
char *strncat( char *strDest, const char *strSource, size_t count );
```

+ Appends the first num characters of source to destination, plus a terminating null-character.
（将source指向字符串的前num个字符追加到destination指向的字符串末尾，再追加一个\0 字符）。

+ If the length of the C string in source is less than num, only the content up to the terminating
null-character is copied.（如果source 指向的字符串的长度小于num的时候，只会将字符串中到\0 的内容追加到destination指向的字符串末尾）。

```c
/* strncat example */

#include <stdio.h>
#include <string.h>
int main ()
{
    char str1[20];
    char str2[20];
    strcpy (str1,"To be ");
    strcpy (str2,"or not to be");
    strncat (str1, str2, 6);
    printf("%s\n", str1);
    return 0;
}
```

### 7.strncmp()函数的使⽤
```c
int strncmp ( const char * str1, const char * 1 str2, size_t num );
```

比较str1和str2的前num个字符，如果相等就继续往后比较，最多比较num个字母，如果提前发现不一样，就提前结束，大的字符所在的字符串大于另外一个。如果num个字符都相等，就是相等返回0.




### 8.strstr()的使⽤和模拟实现
```c
char *strstr( const char *string, const char *strCharSet );
```
+ Returns a pointer to the first occurrence of str2 in str1, or a null pointer if str2 is not part of str1.
（函数返回字符串str2在字符串str1中第一次出现的位置）。
+ The matching process does not include the terminating null-characters, but it stops there.（字符
串的比较匹配不包含\0 字符，以\0 作为结束标志）。

```c
/* strstr example */
#include <stdio.h>
#include <string.h>
int main ()
{
    char str[] ="This is a simple string";
    char * pch;
    pch = strstr (str,"simple");
    strncpy (pch,"sample",6);
    printf("%s\n", str);
    return 0;
}
```

strstr的模拟实现：  
```c
char * strstr (const char * str1, const char * str2)
{
    char *cp = (char *) str1;
    char *s1, *s2;
    if ( !*str2 )
        return((char *)str1);
    while (*cp)
    {
        s1 = cp;
        s2 = (char *) str2;
        while ( *s1 && *s2 && !(*s1-*s2) )
            s1++, s2++;
        if (!*s2)
            return(cp);
        cp++;
    }
    return(NULL);
}
```

### 9.strtok()函数的使用
用于切割字符串
```c
char *strtok( char *strToken, const char *strDelimit );
```

+ sep参数指向一个字符串，定义了用作分隔符的字符集合
+ 第一个参数指定一个字符串，它包含了0个或者多个由sep字符串中一个或者多个分隔符分割的标记。
+ strtok函数找到str中的下一个标记，并将其用 \0 结尾，返回一个指向这个标记的指针。（注：strtok函数会改变被操作的字符串，所以在使用strtok函数切分的字符串一般都是临时拷贝的内容并且可修改。）
+ strtok函数的第一个参数不为NULL ，函数将找到str中第一个标记，strtok函数将保存它在字符串中的位置。
+ strtok函数的第一个参数为NULL ，函数将在同一个字符串中被保存的位置开始，查找下一个标记。
+ 如果字符串中不存在更多的标记，则返回NULL 指针。

```c
#include <stdio.h>
#include <string.h>
int main()
{
    char arr[] = "192.168.6.111";
    char* sep = ".";
    char* str = NULL;
    for (str = strtok(arr, sep); str != NULL; str = strtok(NULL, sep))
    {
        printf("%s\n", str);
    }    
    return 0;
}
```


### 10. strerror()函数的使用
Get a system error message (strerror) or prints a user-supplied error message (_strerror).

```c
char *strerror( int errnum );
```

strerror 函数可以把参数部分错误码对应的错误信息的字符串地址返回来。在不同的系统和C语言标准库的实现中都规定了一些错误码，一般是放在errno.h 这个头文件中说明的，C语言程序启动的时候就会使用一个全局的变量errno来记录程序的当前错误码，只不过程序启动
的时候errno是0，表示没有错误，当我们在使用标准库中的函数的时候发生了某种错误，就会将对应的错误码，存放在errno中，而一个错误码的数字是整数很难理解是什么意思，所以每一个错误码都是有对应的错误信息的。strerror函数就可以将错误对应的错误信息**字符串的地址返回。**

```c
#include <errno.h>
#include <string.h>
#include <stdio.h>
//我们打印一下0~10这些错误码对应的信息
int main()
{
    int i = 0;
    for (i = 0; i <= 10; i++) 
    {
        printf("%s\n", strerror(i));
    }
    return 0;
}
```
结果如下：
```
No error
Operation not permitted
No such file or directory
No such process
Interrupted function call
Input/output error
No such device or address
Arg list too long
Exec format error
Bad file descriptor
No child processes
```

举例：
```c
#include <stdio.h>
#include <string.h>
#include <errno.h>
int main ()
{
    FILE * pFile;
    pFile = fopen ("unexist.ent","r");
    if (pFile == NULL)
    printf ("Error opening file unexist.ent: %s\n", strerror(errno));
    return 0;
}
```

输出：
```c
Error opening file unexist.ent: No such 1 file or directory
```

也可以了解一下 perror 函数，perror函数相当于一次将上述代码中的第9行完成了，直接将错误信息打印出来。perror函数打印完参数部分的字符串后，再打印一个冒号和一个空格，再打印错误信息。

```c
#include <stdio.h>
#include <string.h>
#include <errno.h>
int main ()
{
    FILE * pFile;
    pFile = fopen ("unexist.ent","r");
    if (pFile == NULL)
        perror("Error opening file unexist.ent");
    return 0;
}
```
输出：
```
Error opening file unexist.ent: No such 1 file or directory
```

## 三、字符操作函数

### 1.字符分类函数
C语⾔中有⼀系列的函数是专⻔做字符分类的，也就是⼀个字符是属于什么类型的字符的。

这些函数的使⽤都需要包含⼀个头⽂件是`ctype.h`

![alt text](字符分类函数.png)

这些函数的使⽤⽅法⾮常类似，我们就讲解⼀个函数的事情，其他的⾮常类似：
```c
int islower ( int c );
```
islower 是能够判断参数部分的 c 是否是⼩写字⺟的。   

通过返回值来说明是否是⼩写字⺟，如果是⼩写字⺟就返回⾮0的整数，如果不是⼩写字⺟，则返回0。

写⼀个代码，将字符串中的⼩写字⺟转⼤写，其他字符不变。

```c
#include <stdio.h>
#include <ctype.h>
int main ()
{
    int i = 0;
    char str[] = "Test String.\n";
    char c;
    while (str[i])
    {
        c = str[i];
        if (islower(c)) 
            c -= 32;
        putchar(c);
        i++;
    }
    return 0;
}
```

### 2.字符转换函数
C语⾔提供了2个字符转换函数：   
```c
int tolower ( int c ); //将参数传进去的⼤写字⺟转⼩写 
int toupper ( int c ); //将参数传进去的⼩写字⺟转⼤写
```

上⾯的代码，我们将⼩写转⼤写，是-32完成的效果，有了转换函数，就可以直接使⽤ tolower 函数。
```c
#include <stdio.h>
#include <ctype.h>
int main ()
{
    int i = 0;
    char str[] = "Test String.\n";
    char c;
    while (str[i])
    {
        c = str[i];
        if (islower(c)) 
            c = toupper(c);
        putchar(c);
        i++;
    }
    return 0;
}
```


## 四、内存操作函数

### 1.memcpy使用和模拟实现
```c
void * memcpy ( void * destination, const void * source, 1 size_t num );
```
+ 函数memcpy从source的位置开始向后复制num个字节的数据到destination指向的内存位置。
+ 这个函数在遇到'\0' 的时候并不会停下来。
+ 如果source和destination有任何的重叠，复制的结果都是未定义的。

```c
#include <stdio.h>
#include <string.h>
int main()
{
    int arr1[] = { 1,2,3,4,5,6,7,8,9,10 };
    int arr2[10] = { 0 };
    memcpy(arr2, arr1, 20);
    int i = 0;
    for (i = 0; i < 10; i++)
    {
        printf("%d ", arr2[i]);
    }
    return 0;
}
```
对于重叠的内存，交给memmove来处理。  

memcpy函数的模拟实现:
```c
void * memcpy ( void * dst, const void * src, size_t count)
{
    void * ret = dst;
    assert(dst);
    assert(src);
    /*
    * copy from lower addresses to higher addresses
    */
    while (count--) 
    {
        *(char *)dst = *(char *)src;
        dst = (char *)dst + 1;
        src = (char *)src + 1;
    }
    return(ret);
}
```

### 2.memmove使用和模拟实现
```c
void * memmove ( void * destination, const void * source, size_t num );
```
+ 和memcpy的差别就是memmove函数处理的源内存块和目标内存块是可以重叠的。
+ 如果源空间和目标空间出现重叠，就得使用memmove函数处理。

```c
#include <stdio.h>
#include <string.h>
int main()
{
    int arr1[] = { 1,2,3,4,5,6,7,8,9,10 };
    memmove(arr1+2, arr1, 20);
    int i = 0;
    for (i = 0; i < 10; i++)
    {
        printf("%d ", arr1[i]);
    }
    return 0;
}
```
输出结果：
```
1 2 1 2 3 4 5 8 9 10
```
memmove的模拟实现:
```c
void * memmove ( void * dst, const void * src, size_t count)
{
    void * ret = dst;
    if (dst <= src || (char *)dst >= ((char *)src + count)) {
    /*
     * Non-Overlapping Buffers
     * copy from lower addresses to higher addresses
     */
        while (count--) 
        {
            *(char *)dst = *(char *)src;
            dst = (char *)dst + 1;
            src = (char *)src + 1;
        }
    }
    else {
        /*
         * Overlapping Buffers
         * copy from higher addresses to lower addresses
         */
        dst = (char *)dst + count - 1;
        src = (char *)src + count - 1;
        while (count--) {
            *(char *)dst = *(char *)src;
            dst = (char *)dst - 1;
            src = (char *)src - 1;
        //上面这段代码可以简化为以下代码：
        //while(count--){
        //    *((char*)dst+count)=*((char*)src+count);
        //}
        }
    }
    return(ret);
}
```

### 3.memset函数的使用
```c
void * memset ( void * ptr, int value,size_t num );
```
memset是用来设置内存的，将内存中的值**以字节为单位**设置成想要的内容。
```c
#include <stdio.h>
#include <string.h>
int main ()
{
    char str[] = "hello world";
    memset (str,'x',6);
    printf(str);
    return 0;
}
```
输出的结果：
```c
xxxxxxworld
```

### 4.memcmp函数的使用
```c
int memcmp ( const void * ptr1, const void * ptr2, size_t num );
```
+ 比较从ptr1和ptr2指针指向的位置开始，向后的num个字节er
+ 返回值如下：
![alt text](memcmp函数返回值.png)


```c
#include <stdio.h>
#include <string.h>
int main()
{
    char buffer1[] = "DWgaOtP12df0";
    char buffer2[] = "DWGAOTP12DF0";
    int n;
    n = memcmp(buffer1, buffer2, sizeof(buffer1));
    if (n > 0)
        printf("'%s' is greater than '%s'.\n", buffer1, buffer2);    
    else if (n < 0)
        printf("'%s' is less than '%s'.\n", buffer1, buffer2);
    else
        printf("'%s' is the same as '%s'.\n", buffer1, buffer2);
    return 0;
}
```

## 时间/日期函数
## 数学函数
## 其他库函数