#!C:\Users\binyingming_EC\AppData\Local\Programs\Python\Python36-32\python.exe

# 引入 CGI 处理模块
import codecs, sys
sys.stdout = codecs.getwriter('utf8')(sys.stdout.buffer)

print ('Content-Type: text/html')
print ('Set-Cookie: name="菜鸟教程";expires=Wed, 28 Aug 2016 18:30:00 GMT')
print ()
print ("""
<html>
  <head>
    <meta charset="utf-8">
    <title>菜鸟教程(runoob.com)</title>
  </head>
    <body>
        <h1>Cookie set OK!</h1>
    </body>
</html>
""")