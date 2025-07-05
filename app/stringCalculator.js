function add(numbers)
{
    if(numbers === "")
        return 0;

    let parts = numbers.split(',');
    if(parts.length == 1)
        return Number(parts[0]);
    else
        return Number(parts[0]) + Number(parts[1]);
}

module.exports = { add }