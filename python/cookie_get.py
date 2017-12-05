#!C:\Users\binyingming_EC\AppData\Local\Programs\Python\Python36-32\python.exe

#
import codecs, sys
sys.stdout = codecs.getwriter('utf8')(sys.stdout.buffer)

# 导入模块
import os
import http.cookies as Cookie

print ("Content-type: text/html")
print ()

print ("""
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>
<h1>读取cookie信息</h1>
""")
print(os.environ.get('HTTP_COOKIE'))
if 'HTTP_COOKIE' in os.environ:
    cookie_string=os.environ.get('HTTP_COOKIE')
    c=Cookie.SimpleCookie()
    c.load(cookie_string)

    try:
        data=c['name'].value
        print ("cookie data: "+data+"<br>")
    except KeyError:
        print ("cookie 没有设置或者已过去<br>"+cookie_string)
print ("""
</body>
</html>
""")