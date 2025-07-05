function add(numbers)
{
    if(numbers === "")
        return 0;

    let parts = numbers.split(',').map(Number);
    let sum = parts.reduce((acc, num) => {return acc + num}, 0);

    return sum;
}

module.exports = { add }