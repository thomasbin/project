n = 100

sum = 0
counter = 1
while counter <= n:
    sum = sum + counter
    counter += 1

print("1 到 %d 之和为: %d" % (n,sum))


sites = ["Baidu", "Google","Runoob","Taobao"]
for site in sites:
    if site == "Runoob":
        print("菜鸟教程!")
        break
    print("循环数据 " + site)
else:
    print("没有循环数据!")
print("完成循环!")


a = ['Google', 'Baidu', 'Runoob', 'Taobao', 'QQ']
for i in range(len(a)):
    print(i, a[i])


for letter in 'Runoob':     # 第一个实例
    if letter == 'b':
        break
    print ('当前字母为 :', letter)

var = 10                    # 第二个实例
while var > 0:
    print ('当期变量值为 :', var)
    var = var -1
    if var == 5:
        break

print ("Good bye!")


for n in range(2, 10):
    for x in range(2, n):
        if n % x == 0:
            print(n, '等于', x, '*', n//x)
            break
    else:
        # 循环中没有找到元素
        print(n, ' 是质数')


for letter in 'Runo0ob':
    if letter == 'o':
        pass
        print ('执行 pass 块')
    print ('当前字母 :', letter)

print ("Good bye!")


list=[1,2,3,4]
it = iter(list)    # 创建迭代器对象
for x in it:
    print (x, end=" ")


import sys         # 引入 sys 模块
#
# list=[1,2,3,4]
# it = iter(list)    # 创建迭代器对象
#
# while True:
#     try:
#         print (next(it))
#     except StopIteration:
#         sys.exit()

def fibonacci(n): # 生成器函数 - 斐波那契
    a, b, counter = 0, 1, 0
    while True:
        if (counter > n):
            return
        yield a
        a, b = b, a + b
        counter += 1
f = fibonacci(10) # f 是一个迭代器，由生成器返回生成
print(f)

while True:
    try:
        print (next(f), end=" ")
    except StopIteration:
        sys.exit()
# var = 1
# while var == 1 :  # 表达式永远为 true
#     num = int(input("输入一个数字  :"))
#     print ("你输入的数字是: ", num)
#
# print ("Good bye!")