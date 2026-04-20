/* ---------- SHUFFLE FUNCTION ---------- */

function shuffle(arr){
return arr.sort(()=>Math.random()-0.5);
}

/* ---------- QUESTION BANK ---------- */

const allQuestions={

/* ================= HTML ================= */

HTML:shuffle([

{question:"What does HTML stand for?",options:shuffle(["Hyper Text Markup Language","Home Tool Markup Language","Hyper Transfer Markup Language","High Text Machine Language"]),answer:"Hyper Text Markup Language"},
{question:"HTML file extension?",options:shuffle([".html",".ht",".web",".xml"]),answer:".html"},
{question:"Which tag creates hyperlink?",options:shuffle(["<a>","<link>","<href>","<url>"]),answer:"<a>"},
{question:"Which tag inserts image?",options:shuffle(["<img>","<picture>","<image>","<src>"]),answer:"<img>"},
{question:"Paragraph tag?",options:shuffle(["<p>","<para>","<text>","<pg>"]),answer:"<p>"},
{question:"HTML is?",options:shuffle(["Markup language","Programming language","Database","Operating system"]),answer:"Markup language"},
{question:"Largest heading tag?",options:shuffle(["<h1>","<h6>","<title>","<head>"]),answer:"<h1>"},
{question:"Line break tag?",options:shuffle(["<br>","<break>","<lb>","<newline>"]),answer:"<br>"},
{question:"Horizontal line tag?",options:shuffle(["<hr>","<line>","<hl>","<border>"]),answer:"<hr>"},
{question:"Table tag?",options:shuffle(["<table>","<tbl>","<grid>","<tab>"]),answer:"<table>"},
{question:"Table row tag?",options:shuffle(["<tr>","<td>","<row>","<th>"]),answer:"<tr>"},
{question:"Table data tag?",options:shuffle(["<td>","<tr>","<th>","<data>"]),answer:"<td>"},
{question:"Ordered list tag?",options:shuffle(["<ol>","<ul>","<list>","<li>"]),answer:"<ol>"},
{question:"Unordered list tag?",options:shuffle(["<ul>","<ol>","<list>","<li>"]),answer:"<ul>"},
{question:"Bold tag?",options:shuffle(["<b>","<bold>","<stronger>","<txt>"]),answer:"<b>"},
{question:"Form tag?",options:shuffle(["<form>","<input>","<submit>","<data>"]),answer:"<form>"},
{question:"Input field tag?",options:shuffle(["<input>","<field>","<textbox>","<type>"]),answer:"<input>"},
{question:"Title tag?",options:shuffle(["<title>","<head>","<meta>","<caption>"]),answer:"<title>"},
{question:"Metadata tag?",options:shuffle(["<meta>","<head>","<info>","<data>"]),answer:"<meta>"},
{question:"HTML page starts with?",options:shuffle(["<!DOCTYPE html>","<html>","<doc>","<start>"]),answer:"<!DOCTYPE html>"}

]),

/* ================= CSS ================= */

CSS:shuffle([

{question:"CSS stands for?",options:shuffle(["Cascading Style Sheets","Computer Style Sheets","Creative Style Sheets","Colorful Style Sheets"]),answer:"Cascading Style Sheets"},
{question:"CSS file extension?",options:shuffle([".css",".style",".design",".html"]),answer:".css"},
{question:"Change text color?",options:shuffle(["color","font-color","text-color","bgcolor"]),answer:"color"},
{question:"Background color property?",options:shuffle(["background-color","bgcolor","color","background"]),answer:"background-color"},
{question:"Center text property?",options:shuffle(["text-align","align","font-align","center"]),answer:"text-align"},
{question:"Font size property?",options:shuffle(["font-size","text-size","size","font"]),answer:"font-size"},
{question:"ID selector symbol?",options:shuffle(["#",".","$","@"]),answer:"#"},
{question:"Class selector symbol?",options:shuffle([".","#","$","@"]),answer:"."},
{question:"Margin property?",options:shuffle(["margin","padding","space","border"]),answer:"margin"},
{question:"Padding property?",options:shuffle(["padding","margin","space","border"]),answer:"padding"},
{question:"Border property?",options:shuffle(["border","outline","frame","edge"]),answer:"border"},
{question:"Flex layout?",options:shuffle(["flex","grid","block","inline"]),answer:"flex"},
{question:"Grid layout?",options:shuffle(["grid","flex","inline","block"]),answer:"grid"},
{question:"Hover selector?",options:shuffle([":hover",":focus",":active",":link"]),answer:":hover"},
{question:"Font weight property?",options:shuffle(["font-weight","font-style","font-size","text-style"]),answer:"font-weight"},
{question:"CSS comment?",options:shuffle(["/* comment */","//comment","<!-- -->","#comment"]),answer:"/* comment */"},
{question:"External CSS tag?",options:shuffle(["<link>","<style>","<css>","<script>"]),answer:"<link>"},
{question:"Inline CSS uses?",options:shuffle(["style attribute","class","id","tag"]),answer:"style attribute"},
{question:"Display property?",options:shuffle(["display","position","margin","padding"]),answer:"display"},
{question:"Position property?",options:shuffle(["position","display","margin","padding"]),answer:"position"}

]),

/* ================= JAVASCRIPT ================= */

JS:shuffle([

{question:"JavaScript is?",options:shuffle(["Scripting language","Database","Markup language","Operating system"]),answer:"Scripting language"},
{question:"JS file extension?",options:shuffle([".js",".javascript",".java",".json"]),answer:".js"},
{question:"Declare variable?",options:shuffle(["var","int","define","string"]),answer:"var"},
{question:"Modern variable keyword?",options:shuffle(["let","var","define","data"]),answer:"let"},
{question:"Constant variable keyword?",options:shuffle(["const","var","let","static"]),answer:"const"},
{question:"Console output?",options:shuffle(["console.log()","print()","echo()","display()"]),answer:"console.log()"},
{question:"Alert function?",options:shuffle(["alert()","msg()","popup()","print()"]),answer:"alert()"},
{question:"Confirm dialog?",options:shuffle(["confirm()","alert()","check()","verify()"]),answer:"confirm()"},
{question:"Prompt dialog?",options:shuffle(["prompt()","input()","ask()","dialog()"]),answer:"prompt()"},
{question:"Equality operator?",options:shuffle(["==","=","===","!="]),answer:"=="},
{question:"Strict equality?",options:shuffle(["===","==","!=","="]),answer:"==="},
{question:"JS comment?",options:shuffle(["//","/* */","<!-- -->","#"]),answer:"//"},
{question:"Function keyword?",options:shuffle(["function","func","method","define"]),answer:"function"},
{question:"Array symbol?",options:shuffle(["[]","{}","()","<>"]),answer:"[]"},
{question:"Object symbol?",options:shuffle(["{}","[]","()","<>"]),answer:"{}"},
{question:"DOM stands for?",options:shuffle(["Document Object Model","Data Object Model","Display Object Model","Document Order Model"]),answer:"Document Object Model"},
{question:"Event example?",options:shuffle(["click","run","compile","build"]),answer:"click"},
{question:"JS runs in?",options:shuffle(["Browser","Database","Compiler","Server"]),answer:"Browser"},
{question:"Framework example?",options:shuffle(["React","Laravel","Django","Spring"]),answer:"React"},
{question:"JS used for?",options:shuffle(["Web interactivity","Database","Design","Operating system"]),answer:"Web interactivity"}

]),

/* ================= PYTHON ================= */

PYTHON:shuffle([

{question:"Python is?",options:shuffle(["Programming language","Database","Browser","OS"]),answer:"Programming language"},
{question:"Python extension?",options:shuffle([".py",".python",".pt",".p"]),answer:".py"},
{question:"Print function?",options:shuffle(["print()","echo()","display()","write()"]),answer:"print()"},
{question:"Python created by?",options:shuffle(["Guido van Rossum","James Gosling","Dennis Ritchie","Bjarne"]),answer:"Guido van Rossum"},
{question:"Loop keyword?",options:shuffle(["for","repeat","loop","iterate"]),answer:"for"},
{question:"Conditional keyword?",options:shuffle(["if","check","when","test"]),answer:"if"},
{question:"List brackets?",options:shuffle(["[]","{}","()","<>"]),answer:"[]"},
{question:"Dictionary brackets?",options:shuffle(["{}","[]","()","<>"]),answer:"{}"},
{question:"Tuple brackets?",options:shuffle(["()","[]","{}","<>"]),answer:"()"},
{question:"Comment symbol?",options:shuffle(["#","//","/* */","<!-- -->"]),answer:"#"},
{question:"Install packages tool?",options:shuffle(["pip","npm","apt","yum"]),answer:"pip"},
{question:"Function keyword?",options:shuffle(["def","function","method","func"]),answer:"def"},
{question:"Exception handling?",options:shuffle(["try","catch","error","fix"]),answer:"try"},
{question:"Python indentation?",options:shuffle(["Required","Optional","Ignored","Disabled"]),answer:"Required"},
{question:"Python IDE?",options:shuffle(["PyCharm","VSCode","Eclipse","All"]),answer:"All"},
{question:"Python type?",options:shuffle(["Dynamic","Static","Compiled","Assembly"]),answer:"Dynamic"},
{question:"Library example?",options:shuffle(["NumPy","Spring","Laravel","Angular"]),answer:"NumPy"},
{question:"Web framework?",options:shuffle(["Django","React","Vue","Angular"]),answer:"Django"},
{question:"Python supports?",options:shuffle(["OOP","Functional","Procedural","All"]),answer:"All"},
{question:"Variable declaration?",options:shuffle(["No keyword","var","let","const"]),answer:"No keyword"}

]),

/* ================= DBMS ================= */

DBMS:shuffle([

{question:"DBMS stands for?",options:shuffle(["Database Management System","Data Backup System","Database Machine System","Data Basic Model"]),answer:"Database Management System"},
{question:"Primary key?",options:shuffle(["Unique identifier","Duplicate value","Foreign key","Null key"]),answer:"Unique identifier"},
{question:"SQL stands for?",options:shuffle(["Structured Query Language","Simple Query Language","System Query Language","Structured Question Language"]),answer:"Structured Query Language"},
{question:"Database example?",options:shuffle(["MySQL","Windows","Python","HTML"]),answer:"MySQL"},
{question:"Row called?",options:shuffle(["Tuple","Attribute","Table","Key"]),answer:"Tuple"},
{question:"Column called?",options:shuffle(["Attribute","Tuple","Row","Index"]),answer:"Attribute"},
{question:"SQL command?",options:shuffle(["SELECT","CHOOSE","GET","FETCH"]),answer:"SELECT"},
{question:"Insert command?",options:shuffle(["INSERT","ADD","PUT","SET"]),answer:"INSERT"},
{question:"Delete command?",options:shuffle(["DELETE","REMOVE","CLEAR","DROP"]),answer:"DELETE"},
{question:"Update command?",options:shuffle(["UPDATE","MODIFY","CHANGE","SET"]),answer:"UPDATE"},
{question:"SQL clause?",options:shuffle(["WHERE","WHEN","WHAT","WHO"]),answer:"WHERE"},
{question:"Join type?",options:shuffle(["INNER JOIN","CONNECT","LINK","MERGE"]),answer:"INNER JOIN"},
{question:"DBMS model?",options:shuffle(["Relational","Linear","Circular","Binary"]),answer:"Relational"},
{question:"Database table?",options:shuffle(["Rows and Columns","Files","Programs","Variables"]),answer:"Rows and Columns"},
{question:"SQL used for?",options:shuffle(["Managing database","Design UI","Coding","Networking"]),answer:"Managing database"},
{question:"Foreign key?",options:shuffle(["Reference key","Main key","Unique key","Table key"]),answer:"Reference key"},
{question:"SQL DB example?",options:shuffle(["Oracle","Linux","HTML","Python"]),answer:"Oracle"},
{question:"Constraint example?",options:shuffle(["NOT NULL","CHECKED","STATIC","LOCK"]),answer:"NOT NULL"},
{question:"Index used for?",options:shuffle(["Fast search","Delete","Insert","Update"]),answer:"Fast search"},
{question:"Normalization?",options:shuffle(["Reduce redundancy","Increase redundancy","Delete data","Backup"]),answer:"Reduce redundancy"}

]),

/* ================= OS ================= */

OS:shuffle([

{question:"OS stands for?",options:shuffle(["Operating System","Open System","Order System","Output System"]),answer:"Operating System"},
{question:"Example OS?",options:shuffle(["Windows","HTML","Python","MySQL"]),answer:"Windows"},
{question:"Linux is?",options:shuffle(["Operating System","Database","Language","Browser"]),answer:"Operating System"},
{question:"Process is?",options:shuffle(["Running program","Stored file","Memory","CPU"]),answer:"Running program"},
{question:"CPU scheduling?",options:shuffle(["Process management","Memory","File system","Input"]),answer:"Process management"},
{question:"Multitasking means?",options:shuffle(["Running multiple programs","Single program","No program","Idle"]),answer:"Running multiple programs"},
{question:"Memory management?",options:shuffle(["RAM control","Disk control","CPU control","Printer"]),answer:"RAM control"},
{question:"File system?",options:shuffle(["File organization","Program execution","Memory","Hardware"]),answer:"File organization"},
{question:"Kernel?",options:shuffle(["Core of OS","App","File","Driver"]),answer:"Core of OS"},
{question:"Deadlock?",options:shuffle(["Processes waiting forever","Crash","Shutdown","Restart"]),answer:"Processes waiting forever"},
{question:"Paging?",options:shuffle(["Memory technique","CPU","File","Network"]),answer:"Memory technique"},
{question:"Virtual memory?",options:shuffle(["Hard disk as RAM","RAM as disk","Cache","Register"]),answer:"Hard disk as RAM"},
{question:"Shell?",options:shuffle(["User interface","Memory","File","CPU"]),answer:"User interface"},
{question:"Interrupt?",options:shuffle(["Signal to CPU","Program","Memory","Disk"]),answer:"Signal to CPU"},
{question:"Booting?",options:shuffle(["Starting OS","Stopping OS","Updating OS","Deleting OS"]),answer:"Starting OS"},
{question:"Device driver?",options:shuffle(["Hardware communication","Program","File","Kernel"]),answer:"Hardware communication"},
{question:"GUI means?",options:shuffle(["Graphical User Interface","General UI","Game UI","Graphic Unit"]),answer:"Graphical User Interface"},
{question:"CLI means?",options:shuffle(["Command Line Interface","Computer Line Interface","Code Line","Control Line"]),answer:"Command Line Interface"},
{question:"Scheduling algorithm?",options:shuffle(["Round Robin","Binary","Merge","Linear"]),answer:"Round Robin"},
{question:"Thread?",options:shuffle(["Lightweight process","File","CPU","Disk"]),answer:"Lightweight process"}

])

};