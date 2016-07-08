<!DOCTYPE html>
<html>

<head>
  <title>Retalk</title>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <link href="//cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
  <link href="//cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" rel="stylesheet">
</head>

<body>
  <div id="app">

  </div>

  {!! Html::script('js/vendor.bundle.js') !!}

  <script>
    var basePath = '{!! $basepath !!}';
    var apiBase = '{!! $apibase !!}';
  </script>

  {!! Html::script('js/app.js') !!}


</body>

</html>
