#!C:\Users\binyingming_EC\AppData\Local\Programs\Python\Python36-32\python.exe

import os,codecs, sys
sys.stdout = codecs.getwriter('utf8')(sys.stdout.buffer)

print ("Content-type: text/html")
print ()
print ("<meta charset=\"utf-8\">")
print ("<b>环境变量</b><br>")
print ("<ul>")
for key in os.environ.keys():
    print ("<li><span style='color:green'>%30s </span> : %s </li>" % (key,os.environ[key]))
print ("</ul>")