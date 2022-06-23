// callback

const getMonth = (callback) => {
    setTimeout(()=>{
        let error = true
        let month = ['January', 'Febuary', 'March', 'April', 'May', 'Juni', 'July', 
        'August', 'September', 'October', 'November', 'Desember'];
        if(!error){
            callback(null, month)
        }else{
            callback(new Error('Sorry Data Not Found'), [])
        }
    }, 4000)
}

// buat validasi untuk data array kosong
const showMonth = (error, month) => {

    if (error !== null) {
        console.log(error)
    } else {
        month.map((num) => {

            console.log(num)
        })
    }
}

getMonth(showMonth)