// console.log(1);

// setTimeout(() => {
//     console.log(2);
// }, 2000)

// console.log(3);


//________________________________________________________



// let money = 0;

// function clearHouse(isJobDone, cb) {
//     setTimeout(()=> {
//         if (isJobDone) {
//             money = 500;
//             cb();
//         } else {
//             document.write('no money no honey')
//         }
//     }, 2000)
// }


// clearHouse(false, ()=> {
//     console.log(money);
// });
// console.log(money);



//__________________________________________________________




// let money = 0;

// function clearHouse(isJobDone, cb) {
//     setTimeout(()=> {
//         if (isJobDone) {
//             money = 500;
//             cb(null, money);
//         } else {
//             cb('oops', null)
//         }
//     }, 2000)
// }


// clearHouse(false, (err, reward)=> {
//     if (err) {
//         document.write('wrong')
//     } else {
//         document.write('hoooray ' + reward)
//     }
// });
// console.log(money);



//__________________________________________________________



// function goToTurkey(isCovidPresent, cb) {
//     setTimeout(() => {
//         if(isCovidPresent === true) {
//             cb('covid is there', null)
//         } else {
//             cb(null, "I'm flying to Marmaris")
//         }
//     }, 2000);
// }


// goToTurkey(false, (negative, positive)=> {
//     console.log(positive);
//     console.log(negative);


//     if (negative) {
//         console.log('Sorry youre staying home');
//     } else {
//         console.log('Hoooray');
//     }
// })



//__________________________________________________________



// let money = 0;

// function clearHouse(isJobDone, cb) {
//     setTimeout(()=> {
//         if (isJobDone) {
//             money = 500;
//             cb(null, money);
//         } else {
//             cb('oops', null)
//         }
//     }, 2000)
// }

// function buyJeans(money, cb) {
//     setTimeout(() => {
//         if(money > 200) {
//             console.log('Good jeans');
//             money = money - 200
//             cb(null, money)
//         } else {
//             console.log('no money');
//             cb('empty', null)
//         }
//     }, 1000);
// }




// clearHouse(true, (err, data)=> {
//     if (err) {
//         document.write('house is not clear')
//     } else {
//         document.write('Job done')
//         buyJeans(data, (e, rest) => {
//             if(e) {
//                 document.write('no money')
//             } else {
//                 document.write('hoooray')
//             }
//         })
//     }
// });



//______________________P__R__O__M__I__S__E________E_S__6____________________________

//______________________pending_______resolve_______reject________________________



// let money = 0;

// function clearHouse(isJobDone) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             if (isJobDone) {
//                 money = 500;
//                 resolve(money)
//             } else {
//                 reject('error')
//             }
//         }, 2000)
//     })
// }

// function buyJeans(money, cb) {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(money > 200) {
//                 console.log('Good jeans');
//                 money = money - 200
//                 resolve(money)
//             } else {
//                 console.log('no money');
//                 reject('no money')
//             }
//         }, 1000);
//     })
// }



// clearHouse(true)
//     .then(reward => {
//         console.log(reward);
//         // return 'test'

//         return buyJeans(100)
//     })
//     // .then(value => {
//     //     console.log(value);
//     //     return '22'
//     // })
//     // .then(value => {
//     //     console.log(value);
//     // })
//     .then(rest => {
//         console.log(rest);
//     })
//     .catch(reason => {
//         console.error(reason); //якщо негативний результат
//     })
//     .finally(() => {
//         console.log('Finally');
//     })


//     Promise.allSettled()


//_____________________Promise.race____.all____.allSettled____________________

// let uno = new Promise ((resolve) => {
//     setTimeout(() => {
//         resolve(1);
//     }, 3000);
// })


// let duo = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         reject(2);
//     }, 2000);
// })

// let tres = new Promise ((resolve) => {
//     setTimeout(() => {
//         resolve(3);
//     }, 1000);
// })


// // Promise.race([uno, duo, tres]).then(value => {
// //     console.log(value);
// // })

// // Promise.all([uno, duo.catch(reason => {}), tres]).then(value => {
// //     console.log(value);
// // })

// Promise.allSettled([uno, duo, tres]).then(value => {
//     console.log(value);
// })



//______________________A__S__Y__N__C_______A_W_A_I_T__________________________



let money = 0;

function clearHouse(isJobDone) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if (isJobDone) {
                money = 500;
                resolve(money)
            } else {
                reject('error')
            }
        }, 2000)
    })
}

function buyJeans(money, cb) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(money > 200) {
                console.log('Good jeans');
                money = money - 200
                resolve(money)
            } else {
                console.error('no money');
                reject('no money')
            }
        }, 1000);
    })
}



async function houseCleaner() {
    try {
        let reward = await clearHouse(true);
        console.log(reward);
    
        let rest = await buyJeans(100);
        console.log(rest);

    } catch (e) {
        console.log(e);
    }
}

houseCleaner();