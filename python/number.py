#coding=utf-8
__author__ = 'Administrator'

#Python变量类型

#Python数字，python支持四种不同的数据类型 int整型 long长整型 float浮点型 complex复数
var1 = 10; #表示整型
#var2 = 678l #表示长整型
var3 = 12.34;#表示浮点型
var4 = 123j #复数
var5 = 123+45j #复数

print(var1)
#print(var2)
print(var3)
print(var4)
print(var5)
print(var4+var5)

#Python字符串
str1 = "I love Python"
"""
python的字串列表有2种取值顺序:
从左到右索引默认0开始的，最大范围是字符串长度少1
从右到左索引默认-1开始的，最大范围是字符串开头
"""
print(str1)
#输出字符串的第一个字符
print(str1[0])
#输出字符串2-5中间的字符，不包括5
print(str1[2:5])
#输出从第三个字符开始的所有字符串
print(str1[2:])
#输出字符串两次
print(str1*2)
#连接字符串
print(str1 +"sunpengwei")
str2 = "qwerty"
print(str2[-4:])#输出倒数第四个位置开始往后的所有字符
print(str2[-3:-1])#输出倒数倒数第三个之倒数第二个的所有字符

#Python列表，List是Python使用最频繁的数据类型之一
#列表可以完成大多数集合类的数据结构实现。它支持字符，数字，字符串甚至可以包含列表（所谓嵌套）。
l1 = [1,2,3,4,5,6]
l2 = [7,8,9,1,2,4]
print(l1)#输出完整列表
print(l1[1])#输出列表的第二个值
print(l1[2:3])#输出第三个之第四个元素
print(l1*2)#打印两个列表
print(l1+l2)#打印组合的列表

#Pythona元组，元组用"()"标识。内部元素用逗号隔开。但是元组不能二次赋值，相当于只读列表。
tuple1 = (1,2,3,4)
print(tuple1)#输出完整元组，其他的切片操作和列表一样
print(tuple1[1])
#tuple1[1] = 10这个写法是错误的，会报错，元组不允许二次赋值
print(tuple1)

#Python字典
"""
字典(dictionary)是除列表以外python之中最灵活的内置数据结构类型。列表是有序的对象结合，字典是无序的对象集合。
两者之间的区别在于：字典当中的元素是通过键来存取的，而不是通过偏移存取。
字典用"{ }"标识。字典由索引(key)和它对应的值value组成。

"""
dictionary1 = {"key1":"value1",12:34,'key2':'value2'}
print(dictionary1)#打印完整的字典
print(dictionary1["key1"])#根据key获取value
print(dictionary1.keys())#输出所有的key
print(dictionary1.values())#输出所有的value

#Python数据类型转换
"""有时候，我们需要对数据内置的类型进行转换，数据类型的转换，你只需要将数据类型作为函数名即可。
以下几个内置的函数可以执行数据类型之间的转换。这些函数返回一个新的对象，表示转换的值。"""
m = "12"
print(type(m))
#将m转换成int类型
m = int(m)
print(type(m))

s = "qweqwr"
print(tuple(s))#将序列s转换成一个元组
print(list(s))#将序列s转换成一个列表

"""

int(x [,base])

将x转换为一个整数


long(x [,base] )

将x转换为一个长整数


float(x)

将x转换到一个浮点数


complex(real [,imag])

创建一个复数


str(x)

将对象 x 转换为字符串


repr(x)

将对象 x 转换为表达式字符串


eval(str)

用来计算在字符串中的有效Python表达式,并返回一个对象


tuple(s)

将序列 s 转换为一个元组


list(s)

将序列 s 转换为一个列表


set(s)

转换为可变集合


dict(d)

创建一个字典。d 必须是一个序列 (key,value)元组。


frozenset(s)

转换为不可变集合


chr(x)

将一个整数转换为一个字符


unichr(x)

将一个整数转换为Unicode字符


ord(x)

将一个字符转换为它的整数值


hex(x)

将一个整数转换为一个十六进制字符串


oct(x)

将一个整数转换为一个八进制字符串


"""