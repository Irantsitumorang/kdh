// Buatlah 2 program bebas dengan menggunakan promise seperti soal nomor 1

const checkBrand = (brand) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const brandMobil = ['toyota','daihatsu','honda','mitsubishi','wulling','datsun']
            let cek = brandMobil.find((item)=>{
                return item === brand
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('bukan brand '))
            }
        }, 3000);
    })
}
// promise brand
const brandOne = 'mitsubishi'
const brandTwo = 'honda'
//then catch
checkBrand(brandOne).then((item)=>{
    console.log(item,'ada brand tersebut')
}).catch((err)=>{
    console.log(err)
})
//try catch
const checkBrandId = async(param)=>{
    try {
        const mobil = await checkBrand(param)
        console.log(mobil, 'ada brand tersebut')
    } catch (err){
        console.log(err)
    } finally {
        console.log('done')
    }
}
checkBrandId(brandTwo)

const checkName = (nameID) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const name = ['andri','budi','rian','tiara','lola','risca']
            let cek = name.find((item)=>{
                return item === nameID
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('bukan name '))
            }
        }, 3000);
    })
}
//promise nama
const nameOne = 'andri'
const nameTwo = 'tiara'
checkName(nameOne).then((item)=>{
    console.log(item,'ada nama tersebut')
}).catch((err)=>{
    console.log(err)
})

const checkNameId = async(param)=>{
    try {
        const cari = await checkName(param)
        console.log(cari, 'ada nama tersebut')
    } catch (err){
        console.log(err)
    } finally {
        console.log('selesai')
    }
}
checkNameId(nameTwo)