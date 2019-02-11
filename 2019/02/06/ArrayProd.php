<?php

function ArrayProd($arr) {
    $resArr = [];
    foreach ($arr as $value_1) {
        $tmp = 1;
        foreach ($arr as $value_2) {
            $tmp *= $value_2;
        }
        $tmp /= $value_1;
        array_push($resArr, $tmp);
    }
    return $resArr;
}

function ArrayProdWoDiv($arr) {
    $resArr = [];
    foreach ($arr as $key_1 => $value_1) {
        $tmp = 1;
        foreach ($arr as $key_2 => $value_2) {
            if ($key_1 !== $key_2)
                $tmp *= $value_2;
        }
        array_push($resArr, $tmp);
    }
    return $resArr;
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

$array = [1, 2, 3, 4, 5];

echo "Original array:\t";
PrintArray($array);

echo "Using division:\t";
PrintArray(ArrayProd($array));

echo "W/o division:\t";
PrintArray(ArrayProdWoDiv($array));

?>

