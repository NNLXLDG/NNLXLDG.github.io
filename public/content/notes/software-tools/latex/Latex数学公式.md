# 使用latex输入数学公式

## 一.上下标的输入

### 1.基本用法
使用^和_即可  
```
$$
a^2+b^3=1
$$
```

$$
a^2+b^3=1
$$

**注意**:各种运算符和命令产生的格式效果都只对其后面大括号内的各字符有效
(若其中只有一个字符则可省略大括号)
```
$$
a^{x+y+z}+b_{ij}=c
$$
```

$$
a^{x+y+z}+b_{ij}=c
$$

### 2.斜体与直立体

**注意**:英文字母只有在表示变量时(或单一字符的函数名称,如F(x))时才可以使用斜体,其余情况都应使用罗马体(直立体).  

在大括号内最前方加上\rm+空格+要输入的字母  
**或者**,在大括号内最前方加上\text+空格+要输入的字母  

\rm(**r**o**m**an,罗马体)  
\text(文本)  

问两者有何不同?  
1. text可以显示空格,而rm不能显示空格
2. 如果用text,只会把它后面的第一个字母变成直立体,如果用rm,则会把它后面的全部变成直立体  

```
\text{A B},\rm{A B}
\text A B,\rm A B
```

如下所示
$$
\text{A B},\rm{A B}\\
$$

$$
\text A B,\rm A B\\
$$

例如:在表示不同元素时,$x_i,x_j$,其中的$i,j$表示1,2,3,...,n,为**变量**  
而当字母表示特殊含义时,如$x_{\rm i}$此时这个i表示input的含义,为**文本**  
直立体的例子还有
1. e:自然对数的底数,为**常量**  
2. i,j:虚数单位,为**常量**

```
\text{i},\text{j}
```

如下方所示:上面的是公式模式下,默认字母的输出,下面的是直立体输出
$$
i,j\\
\text{i},\text{j}
$$


## 二.分式与根式

### 1.分式的基本用法
使用\frac{}{},前一个大括号里面是分子,后一个大括号里面是分母  
如果是单个字符,可以直接用空格去替代,如\frac 1 2  
可以嵌套frac,如:\frac{\frac{1}{x+y}+1}{y+1}
```
\frac{}{}
\frac 1 2 
\frac{\frac{1}{x+y}+1}{y+1}
```
如下所示
$$
\frac{\frac{1}{x+y}+1}{y+1}
$$

### 2.加大显示
分子或者分母中的嵌套的分式显示较小,可以通过\dfrac(**d**ispaly-style)  
演示
$$
\frac{\frac{1}{x+y}+1}{y+1}\\
$$

$$
\frac{\dfrac{1}{x+y}+1}{y+1}\\
$$

### 3.根式的基本用法
使用\sqrt(square root,平方根)
```
平方根\sqrt 2,\sqrt{x+y}\\
n次方根\sqrt[n]{a+b}

```
如下所示
$$
\sqrt 2,\sqrt{x+y}\\
\sqrt[n]{a+b}
$$


## 三.*普通运算符

### 1.运算符号
```
+-><(常见)  
\times乘,\cdot点乘,  
\div(**div**ide)除  
\pm(plus-minus)正负号,\mp(minus-plus)负正号  
\ge(greater than or equal,大于等于)  
\le(less than or equal,小于等于)  
\gg远大于,\ll远小于  
\ne(not equal不等于)
\approx(**approx**iamte,约等于)  
\equiv(equivalent,恒等的)
\cap交集,\cup并集  
\in属于,\notin不属于  
\subseteq是...的子集,\subsetneqq是...的真子集  
\varnothing空集
\forall任意,\exists存在,\nexists不存在  
\because,\therefore\

```

演示:
$$
\times,\cdot\\
\div\\
\pm,\mp\\  
\ge,\le\\
\gg,\ll \\
\ne,\approx\\
\equiv\\
\cap,\cup\\  
\in,\notin\\ 
\subseteq,\subsetneqq,(\subsetneq)\\
\varnothing\\
\forall,\exists,\nexists\\
\because,\therefore\\
$$

### 2.数集符号
\mathbb(**b**lackboard **b**old)+空格+字母  
或者,直接\+字母

```
\mathbb R,\R,\Q,\N,\z_+
```
如下所示
$$
\mathbb R,\R\\
\N,\Z_+
$$

### 3.其他符号
点:
```
\cdots横向三个点  
\vdots竖向三个点  
\ddots斜线三个点(diagonal,对角的)
```
演示:
$$
\cdots\\
\vdots\\
\ddots\\
$$

一些符号:
```
\infty(infinity,无穷)  
\partial(偏微分的微元符号)  
\nabla  
\propto(proportional to,正比于)  
\degree(度)
```
演示:
$$
\infty,
\partial,
\nabla,
\propto,
\degree
$$

三角函数:
```
\sin x,\sec x,\cosh x  
对数:  
\log_2 x,\ln x,\lg x  
极限:  
\lim_{x \to 0} \frac {x}{\sinx}  
注:这些符号都应该是直立体
```
演示
$$
\sin x,\sec x,\cosh x\\
\log_2 x,\ln x,\lg x \\ 
\lim_{x \to 0}\frac {x}{\sin x} 
 
$$

## 大型运算符
### 1.求和和连乘
```
\sum(求和),\prod(product,乘积)  
\sum_i,\sum_{i=0}^N
\frac{\sum_{i=1}^n x_i}{\prod_{i=1}^n x_i}
```
演示:
$$
\sum,\prod\\
\sum_i,\sum_{i=0}^N\\
\frac{\sum_{i=1}^n x_i}{\prod_{i=1}^n x_i}
$$

可通过在\sum和\prod后面加上\limits来强制n和i=0到求和符号上下
```
\frac{\sum_{i=1}^n x_i}{\prod_{i=1}^n x_i}
\frac{\sum\limits_{i=1}^n x_I}{\prod\limits_{i=1}^n x_i}
```
如下
$$
\frac{\sum_{i=1}^n x_i}{\prod_{i=1}^n x_i}\\
\frac{\sum\limits_{i=1}^n x_I}{\prod\limits_{i=1}^n x_i}
$$


### 2.积分的表示:
```
\int(integral积分)
\iint(双重积分)
\iiint(三重积分)
\oint(回路积分),\oiint(双重回路积分)
\int_{-\infty}^0 f(x)\,\text d x

```
演示:
$$
\int(integral积分)\\
\iint(双重积分)\\
\iiint(三重积分)\\
\oint(回路积分),\oiint(双重回路积分)\\
\int_{-\infty}^0 f(x)\,\text dx
$$

### 3.*插入空格的不同方法
```
a\,a
a\ a
a\quad a
a\qquad a

```

$$
a\,a\\
a\ a\\
a\quad a\\
a\qquad a\\
$$


## 标注符号
```
\vec x,\overrightarrow {AB}(向量)  
\bar x(平均值),\overline{AB}
```
演示:
$$
\vec x,\overrightarrow {AB}\\ 
\bar x,\overline{AB}
$$

<img src="__IMGPLACEHOLDER__标注符号表.jpg__IMGPLACEHOLDER__" alt="" />


## 箭头
```
\leftarrow(单箭头)
\rightarrow




```




































































## 希腊字母

### 重新认识希腊字母

<img src="__IMGPLACEHOLDER__希腊字母英文对照表.png__IMGPLACEHOLDER__" alt="" />
*希腊字母英文对照表*

### 如何用latex输入希腊字母

反斜杠加上标准的希腊字母英文拼写  
大写的希腊字母就**把开头第一个字母大写**
```
标准希腊字母英文对照
alpha,beta,gamma,delta,epsilon,zeta,eta,theta,iota,kappa,lambda,mu,nu,xi,omicron(o),pi,rho,sigma,tau,upsilon,phi,chi,psi,omega
其中的omicron可以简写成o,而且前面无需添加斜杠.
```
小写希腊字母
$$
\alpha,\beta,\gamma,\delta\\
\epsilon,\zeta,\eta,\theta\\
\iota,\kappa,\lambda,\mu\\
\nu,\xi,\omicron,\pi\\
\rho,\sigma,\tau,\upsilon\\
\phi,\chi,\psi,\omega\\
o
$$

大写希腊字母
$$
\Alpha,\Beta,\Gamma,\Delta,\Epsilon,\Zeta,\Eta,\Theta,\Iota,\Kappa,\Lambda,\Mu,\Nu,\Xi,\Omicron,\Pi,\Rho,\Sigma,\Tau,\Upsilon,\Phi,\Chi,\Psi,\Omega
$$

### 存在变体,如何输入?

\变体就是大写的基础上稍稍斜了点
\在希腊字母英文前面加上var,注意一定要让那个字母英文首字母大写,否则会失效.  
\vargamma无效  \varGamma有效

$$
\varGamma,\varLambda,\varSigma,\varPsi\\
\varDelta,\varXi,\varUpsilon,\varOmega\\
\varTheta,\varPi,\varPhi\\
$$
