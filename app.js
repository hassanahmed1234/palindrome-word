

function check(){
    var input = document.getElementById('input')
    var result = document.getElementById('result')

    var inputval = input.value
    var final = "";


    for (let index = inputval.length - 1; index >= 0; index--) {
        final += inputval[index]
        
    }
        if (final === inputval) {
            result.innerText += `Yes,${inputval} is palindrome`
                     
        }else{
            result.innerText += `No,${inputval} is not palindrome`                        

        }
        
        input.value = ""

}

function reset(params) {
    result.innerText = "Result:"   
}

var input = document.getElementById('input')
input.addEventListener('keydown',()=>{
    if(event.key === 'Enter'){
        check()
    }
})
