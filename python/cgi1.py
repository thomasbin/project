#!C:\Users\binyingming_EC\AppData\Local\Programs\Python\Python36-32\python.exe
#-*- coding: UTF-8 -*-

import codecs, sys
sys.stdout = codecs.getwriter('utf8')(sys.stdout.buffer)

print ("Content-type:text/html")
print ()                             # 空行，告诉服务器结束头部
print ('<html>')
print ('<head>')
print ('<meta charset="utf-8">')
print ('<title>Hello Word - 我的第一个 CGI 程序！</title>')
print ('</head>')
print ('<body>')
print ('<h2>Hello Word! 我是来自菜鸟教程的第一CGI程序</h2>')
print ('</body>')
print ('</html>')