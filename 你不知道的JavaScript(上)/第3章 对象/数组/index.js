{
    // 数组也是对象，虽然下标是整数，但是仍然可以给其添加属性
    let myArray = ['foo', 42, 'bar']
    myArray.baz = 'baz'
    console.log(myArray.length);
    console.log(myArray.baz);

}

console.log('----------')

{
    // 如果向数组添加的一个看起来像数字的属性，那么就会将其变成数组下标，而不是添加一个属性
    let myArray = ['foo', 42, 'bar']
    myArray['3'] = 'baz'
    console.log(myArray.length);
    console.log(myArray[3]);
}

