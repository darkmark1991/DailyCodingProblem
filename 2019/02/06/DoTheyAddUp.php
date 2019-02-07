<?php

function DoTheyAddUp($arr, $k) {
    foreach ($arr as $key_1 => $value_1) {
        if ($value_1 > $k) {
            unset($arr[$key_1]);
            continue;
        }
        foreach ($arr as $key_2 => $value_2) {
            if ($value_1 > $k) {
                unset($arr[$key_2]);
                continue;
            }
            echo $value_1 . " " . $value_2 . " " . $arr[$key_2] . "\n";
            if ($value_1 + $value_2 = $k)
                return true;
        }
    }
    return false;
}

function PrintArray($arr) {
    $last = sizeof($arr) -1;
    echo "[";
    foreach ($arr as $key => $value) {
        $del = $key === $last ? '' : ', ';
        echo "${value}${del}";
    }
    echo "]\n";
}

$k = 17;
$array = [1, 22, 3, 14, 5];

echo "Original array:\t";
PrintArray($array);

echo "Using division:\t";
echo DoTheyAddUp($array, $k);
