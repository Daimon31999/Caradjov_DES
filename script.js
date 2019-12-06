"use strinct"
var bin_K_arr = []
var PC_1 = [
    57, 49, 41, 33, 25, 17, 9,
    1, 58, 50, 42, 34, 26, 18,
    10, 2, 59, 51, 43, 35, 27,
    19, 11, 3, 60, 52, 44, 36,
    63, 55, 47, 39, 31, 23, 15,
    7, 62, 54, 46, 38, 30, 22,
    14, 6, 61, 53, 45, 37, 29,
    21, 13, 5, 28, 20, 12, 4
]
function make_binary(K) {
    var K10 = []
    // hex --> decimal
    for (let i = 0; i < K.length; i++) {
        K10.push(K.charCodeAt(i))
    }
    var K2 = []
    // decimal --> binary
    K10.forEach((element, index) => {
        element = Number(element).toString(2)
        while (element.length % 8 != 0) {
            element = '0' + element
        }
        K2.push(element)
    })
    return K2.join('')
}

function make_Kplus(K) {
    K2 = make_binary(K)
    var Kplus = []
    for (let j = 0; j < PC_1.length; j++) {
        Kplus.push(K2[PC_1[j] - 1])
    }
    return Kplus.join('')
}

function print(K) {
    var count = 0, K_tmp = '', name = 'unknown'
    if (K.length == 64) {
        var block_num = 8
        name = 'K[2]'
    }
    if (K.length == 56) {
        var block_num = 7
        name = 'K[+]'
    }
    K_tmp = ''
    count = 0
    for (let index = 0; index < K.length; index++) {
        if (count % block_num == 0)
            K_tmp += ' '
        count++
        K_tmp += K[index]
    }
    // console.log(`${name} =${K_tmp}`)
    return K_tmp
}

function ui() {
    document.getElementById('content').innerHTML = 
        `<tr><th>K</th> <td id="K"> <input type="text" name="name" placeholder="Введите ключ(8 символов)"> </td></tr>`+
        `<tr><th>K[2]</th> <td id="K2"></td></tr>`+
        `<tr><th >K[+]</th> <td id="Kplus"></td></tr>`
        const K = document.querySelector('input')
        K.addEventListener("change", e => {
        var value = e.target.value
        var Kplus = print(make_Kplus(value))
        var K2 = print(make_binary(value))
        document.getElementById('K2').innerHTML = K2
        document.getElementById('Kplus').innerHTML = Kplus
    });

}

// //  Test
// var K = 'abcder11'
// print(make_Kplus(K))
// print(make_binary(K))

ui()