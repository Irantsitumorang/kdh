// cek hari kerja 
// try catch and then cacth

const cekHariKerja = (day) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000);
    })
}

// const day1 =  'rabu'
// const day2 =  'jumat'

// then catch
cekHariKerja('selasa').then((item)=> {
    console.log(item, 'masuk kerja')
}).catch((err)=> {
    console.log(err)
})

//try catch
async function pro(param){
    try {
         const day = await cekHariKerja(param)
         console.log(day, 'masuk kerja')
    } catch (err) {
        console.log(err)
    } finally {
        console.log('proses berakhir')
    }
}
 pro('kamis')