<?php
$arUrlRewrite=array (
  11 => 
  array (
    'CONDITION' => '#^/information/links/([a-zA-Z0-9_]+)/\\?{0,1}(.*)$#',
    'RULE' => '/information/links/index.php?SECTION_CODE=\\1&\\2',
    'ID' => '',
    'PATH' => '',
    'SORT' => 100,
  ),
  10 => 
  array (
    'CONDITION' => '#^/board/([a-zA-Z0-9_]+)/\\?{0,1}(.*)$#',
    'RULE' => '/board/index.php?SECTION_CODE=\\1&\\2',
    'ID' => '',
    'PATH' => '',
    'SORT' => 100,
  ),
  0 => 
  array (
    'CONDITION' => '#^\\/?\\/mobileapp/jn\\/(.*)\\/.*#',
    'RULE' => 'componentName=$1',
    'ID' => NULL,
    'PATH' => '/bitrix/services/mobileapp/jn.php',
    'SORT' => 100,
  ),
  4 => 
  array (
    'CONDITION' => '#^/nationalnews/#',
    'RULE' => '',
    'ID' => 'bitrix:news',
    'PATH' => '/nationalnews/index.php',
    'SORT' => 100,
  ),
  7 => 
  array (
    'CONDITION' => '#^/job/vacancy/#',
    'RULE' => '',
    'ID' => 'bitrix:catalog',
    'PATH' => '/job/vacancy/index.php',
    'SORT' => 100,
  ),
  6 => 
  array (
    'CONDITION' => '#^/job/resume/#',
    'RULE' => '',
    'ID' => 'bitrix:catalog',
    'PATH' => '/job/resume/index.php',
    'SORT' => 100,
  ),
  3 => 
  array (
    'CONDITION' => '#^/themes/#',
    'RULE' => '',
    'ID' => 'bitrix:news',
    'PATH' => '/themes/index.php',
    'SORT' => 100,
  ),
  5 => 
  array (
    'CONDITION' => '#^/forum/#',
    'RULE' => '',
    'ID' => 'bitrix:forum',
    'PATH' => '/forum/index.php',
    'SORT' => 100,
  ),
  8 => 
  array (
    'CONDITION' => '#^/photo/#',
    'RULE' => '',
    'ID' => 'bitrix:photogallery_user',
    'PATH' => '/photo/index.php',
    'SORT' => 100,
  ),
  9 => 
  array (
    'CONDITION' => '#^/blogs/#',
    'RULE' => '',
    'ID' => 'bitrix:blog',
    'PATH' => '/blogs/index.php',
    'SORT' => 100,
  ),
  1 => 
  array (
    'CONDITION' => '#^/rest/#',
    'RULE' => '',
    'ID' => NULL,
    'PATH' => '/bitrix/services/rest/index.php',
    'SORT' => 100,
  ),
  2 => 
  array (
    'CONDITION' => '#^/news/#',
    'RULE' => '',
    'ID' => 'bitrix:news',
    'PATH' => '/news/index.php',
    'SORT' => 100,
  ),
);
