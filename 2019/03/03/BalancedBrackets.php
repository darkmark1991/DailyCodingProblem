<?php
/* DailyCodingProblem #27 */

function BalancedBrackets ($str) {
    $count = 0;
    $last = '';
    $arr = str_split($str);
    foreach ($arr as $c) {
        switch ($c) {
            case '(': $count += 1;
                      $last = $c;
                      break;
            case ')': if (strpos("[{", $last) !== false)
                        return false;
                      $count -= 1;
                      $last = $c;
                      break;
            case '[': $count += 10;
                      $last = $c;
                      break;
            case ']': if (strpos("({", $last) !== false)
                        return false;
                      $count -= 10;
                      $last = $c;
                      break;
            case '{': $count += 100;
                      $last = $c;
                      break;
            case '}': if (strpos("[(", $last) !== false)
                        return false;
                      $count -= 100;
                      $last = $c;
                      break;
            default: break;
        }
    }
    return $count === 0;
}

$str1 = "([])[]({})";
$test1 = BalancedBrackets($str1) ? "True" : "False";
echo "${str1} has balanced brackets: ${test1}\n";
// expected output: True

$str2 = "([)]";
$test2 = BalancedBrackets($str2) ? "True" : "False";
echo "${str2} has balanced brackets: ${test2}\n";
// expected output: False

$str3 = "((()";
$test3 = BalancedBrackets($str3) ? "True" : "False";
echo "${str3} has balanced brackets: ${test3}\n";
// expected output: False
