## timejs

它是js的时间戳格式化库。


## timejs 用法

	<!DOCTYPE html>
	<html lang="zh">
	  <head>
	    <meta charset="UTF-8">
	    <title>time.js用法</title>
	  </head>
	  <body>
	
	    <script src="time.js"></script>
	    <script type="text/javascript">
	        var time = 1422875526971;
	        document.write("Time.fromNow(time) <br/>")
	        document.write("参数 time: 必须是毫秒.<br/>")
	        document.write("1422875526971 => " + Time.fromNow(time) );
	    </script>
	  </body>
	</html>   
 
 输出

	Time.fromNow(time) 
	参数 time: 必须是毫秒.
	1422875526971 => 1天前   
