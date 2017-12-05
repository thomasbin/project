print('Hello, Python!');


print('hello');print('runoob');


if True:
    print("True");
else:
    print("False");



if True:
    print("Answer");
    print("True");
else:
    print("Answer");
    # 没有严格缩进，在执行时会报错
    print("False");

# 第一个注释
print("Hello, Python!");  # 第二个注释

name = "Madisetti" # 这是一个注释
print(name);


'''
这是多行注释，使用单引号。
这是多行注释，使用单引号。
这是多行注释，使用单引号。
'''

"""
这是多行注释，使用双引号。
这是多行注释，使用双引号。
这是多行注释，使用双引号。
"""

#input("\n\nPress the enter key to exit.");


import sys; x = 'runoob'; sys.stdout.write(x + '\n');


x="a"
y="b"
# 换行输出
print(x)
print(y)

print('---------')
# 不换行输出
print(x),
print(y)

# 不换行输出
print(x,y)


counter = 100 # 赋值整型变量
miles = 1000.0 # 浮点型
name = "John" # 字符串

print(counter)
print(miles)
print(name)

a=b=c=1;
a, b, c = 1, 2, "john"
print(a,b,c)

var1 = 1
var2 = 10

# del var1

print(var1,var2)

a, b, c, d = 20, 5.5, True, 4+3j
print(type(a), type(b), type(c), type(d))


a = 111
print(isinstance(a, int))

class A:
    pass

class B(A):
    pass

print(isinstance(A(), A))  # returns True
print(type(A()) == A )     # returns True
print(isinstance(B(), A) )   # returns True
print(type(B()) == A  )      # returns False

str = 'Runoob'
print()
print (str)          # 输出字符串
print (str[0:-1])    # 输出第一个到倒数第二个的所有字符
print (str[0])       # 输出字符串第一个字符
print (str[2:5])     # 输出从第三个开始到第五个的字符
print (str[2:])      # 输出从第三个开始的后的所有字符
print (str * 2)      # 输出字符串两次
print (str + "TEST") # 连接字符串

#Python 使用反斜杠(\)转义特殊字符，如果你不想让反斜杠发生转义，可以在字符串前面添加一个 r，表示原始字符串
print('Ru\noob')
print(r'Ru\noob')

word = 'Python'
print(word[0], word[5])
print(word[-1], word[-6])


list = [ 'abcd', 786 , 2.23, 'runoob', 70.2 ]
tinylist = [123, 'runoob']

print (list)            # 输出完整列表
print (list[0])         # 输出列表第一个元素
print (list[1:3])       # 从第二个开始输出到第三个元素
print (list[2:])        # 输出从第三个元素开始的所有元素
print (tinylist * 2)    # 输出两次列表
print (list + tinylist) # 连接列表

list[1:5]=[]
print(list)

tuple = ( 'abcd', 786 , 2.23, 'runoob', 70.2  )
tinytuple = (123, 'runoob')

print (tuple)             # 输出完整元组
print (tuple[0])          # 输出元组的第一个元素
print (tuple[1:3])        # 输出从第二个元素开始到第三个元素
print (tuple[2:])         # 输出从第三个元素开始的所有元素
print (tinytuple * 2)     # 输出两次元组
print (tuple + tinytuple) # 连接元组

tup = (1, 2, 3, 4, 5, 6)
print(tup[0])

tup1 = ()    # 空元组
tup2 = (20,) # 一个元素，需要在元素后添加逗号
print(tup1,tup2)


student = {'Tom', 'Jim', 'Mary', 'Tom', 'Jack', 'Rose'}

print(student)   # 输出集合，重复的元素被自动去掉

# 成员测试
if('Rose' in student) :
    print('Rose 在集合中')
else :
    print('Rose 不在集合中')


# set可以进行集合运算
a = set('abracadabra')
b = set('alacazam')

print(a)

print(a - b)     # a和b的差集

print(a | b)     # a和b的并集

print(a & b)     # a和b的交集

print(a ^ b)     # a和b中不同时存在的元素


dict = {}
dict['one'] = "1 - 菜鸟教程"
dict[2]     = "2 - 菜鸟工具"

tinydict = {'name': 'runoob','code':1, 'site': 'www.runoob.com'}


print (dict['one'])       # 输出键为 'one' 的值
print (dict[2])           # 输出键为 2 的值
print (tinydict)          # 输出完整的字典
print (tinydict.keys())   # 输出所有键
print (tinydict.values()) # 输出所有值