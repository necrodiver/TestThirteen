# TestThirteen
> 用于练习和学习Node.js和Vue，这里是Demo和Test
##### 配置启动Html文件
> - 主要用于运行html文件，每次总是需要定位到html文件目录点开感觉太麻烦，用下列方法来调用  
> - Ctrl+Shift+P 输入CTR，选择任务：配置任务运行程序  
> - 然后在.vscode文件夹下会创建一个tasks.json，选择配置  
> - ``` "version": "0.1.0",
>    "command": "Chrome",
>    "windows": {
>       "command": "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe"
>   },
>    "isShellCommand": true,
>    "args": [
>       "${file}"
>   ],
>   "showOutput": "never"   
> - 保存后定位到当前需要运行的html页面，使用快捷键Ctrl+Shift+B使用Chrome浏览器浏览页面

##### 运行node.js代码
> 定位到当前需要调试的js代码目录，然后右键在命令提示符中打开  
> 然后在命令窗口中输入node 文件名称，如果文件名太复杂，可以输入文件名前几个字符，然后按Tab，如果定位的不是当前的文件，再次Tab,直到找到这个文件，Enter，搞定