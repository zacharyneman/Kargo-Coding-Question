function numToPhonetic(){
    var a = process.argv.slice(2)
    var result = ''
    var numbers = {'0': 'Zero', '1':'One', '2':'Two', '3':'Three', '4':'Four', 
                '5':'Five','6':'Six', '7':'Seven', '8':'Eight', '9':'Nine'}
    a.forEach(num => {
        var temp = ''
        num.split('').forEach(x => {
            temp = temp + numbers[x]
        })
        result = result + temp + ','
    })
    result = result.slice(0,-1) + '\n'
    process.stdout.write(result)
}
