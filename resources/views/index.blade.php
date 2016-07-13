<!DOCTYPE html>
<html>

<head>
  <title>Retalk</title>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <link href="//cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
  <link href="//cdn.bootcss.com/bootstrap-material-design/0.5.10/css/bootstrap-material-design.min.css" rel="stylesheet">
  <link href="//cdn.bootcss.com/bootstrap-material-design/0.5.10/css/ripples.min.css" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    .container-fluid>.navbar-header { margin-right: 0; }
  </style>
</head>

<body>
  <div id="app">

  </div>

  <script src="//cdn.bootcss.com/jquery/2.2.4/jquery.min.js"></script>
  <script src="//cdn.bootcss.com/bootstrap-material-design/0.5.10/js/ripples.min.js"></script>
  <script src="//cdn.bootcss.com/bootstrap-material-design/0.5.10/js/material.min.js"></script>
  {!! Html::script('js/vendor.bundle.js?'.md5_file(public_path('js/vendor.bundle.js'))) !!}

  <script>
    var basePath = '{!! $basepath !!}';
    var apiBase = '{!! $apibase !!}';

    $.material.init()
  </script>

  {!! Html::script('js/app.js?'.md5_file(public_path('js/app.js'))) !!}


</body>

</html>
