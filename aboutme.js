<html>
   <body>
      <h1>Hello World!!</h1>
      <button onclick="changeThisPageFunc();">Click Me!</button>
      <script type="text/javascript">
         changeThisPageFunc = function() {
            document.body.style.backgroundColor = "lightblue";
            document.body.innerHTML = "<h1>I am a little blue today</h1>";
         }
      </script>
   </body>
</html>