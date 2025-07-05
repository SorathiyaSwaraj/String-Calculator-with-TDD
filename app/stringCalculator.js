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

    let parts = numbers.split(delimiter).map(num => {
        num = Number(num);
        if(num < 0)
            throw new Error("“negative numbers not allowed");

        return num;
    });
    return parts.reduce((acc, num) => acc + num, 0);
}

module.exports = { add }