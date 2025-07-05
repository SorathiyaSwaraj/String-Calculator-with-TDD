function add(numbers)
{
    if(numbers === "")
        return 0;

    let parts = numbers.split(',').map(Number);
    if(parts.length == 1)
        return parts[0];
    else
        return parts[0] + parts[1];
}

module.exports = { add }