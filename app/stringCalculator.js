function add(numbers)
{
    if(numbers === "")
        return 0;

    let parts = numbers.split(',').map(Number);
    return parts.reduce((acc, num) => acc + num, 0);
}

module.exports = { add }