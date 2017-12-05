#!C:\Users\binyingming_EC\AppData\Local\Programs\Python\Python36-32\python.exe

# HTTP 头部
print ("Content-Disposition: attachment; filename=\"foo.txt\"")
print ()
# 打开文件
fo = open("foo.txt", "rb")

str = fo.read();
print (str)

# 关闭文件
fo.close()