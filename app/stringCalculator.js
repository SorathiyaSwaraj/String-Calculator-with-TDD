function add(numbers)
{
    if(numbers === "")
        return 0;

    let delimiter = /,|\n/;
    if(numbers.startsWith("//"))
    {
        delimiter = numbers[2];
        numbers = numbers.slice(4);
    }

    let parts = numbers.split(delimiter).map(Number);
    let negatives = parts.filter(num => num < 0);

    if(negatives.length > 0)
        throw new Error("negative numbers not allowed <" + negatives.join(',') + ">");

    return parts.reduce((acc, num) => acc + num, 0);
}

function GetCalledCount()
{
    
}

module.exports = { add , GetCalledCount}