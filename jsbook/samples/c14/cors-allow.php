<?php
$referer = parse_url($_SERVER[HTTP_REFERER]);
$allow = $referer['scheme'] . '://' . $referer['host'];
if($referer['port'] != '') {
  $allow .= ':' . $referer['port'];
}
header('Access-Control-Allow-Origin: ' . $allow);
echo json_encode(['book' => 'サイバーセキュリティ徹底解説', 'price' => 3680]);
