// Треба реалізувати свій розпорядок дня.
// Колбеками, промісами та асинк авейт.

// В дні має бути від 7 до 10 подій.
// Всі події мають мати описані успішні та не успішні варіанти виконання.
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.

// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.

// Якщо ж все ок, то ви маєте прожити свій звичайний день.

// Кожна подія має бути з рандомною (не по зростанню) затримкою.

//________________________________________________________________________________________

// 1. Woke up (alarm clock)
// 2. teeth clean (Woke up)
// 3. dress up (teeth clean)
// 4. have breakfast (dress up)
// 5. fuel car (have breakfast)
// 6. drive office (fuel car)
// 7. work done (drive office)
// 8. drive home (work done)

//______________________________callback________________________________________________

// let alarmClock = true;


// function doWakeUp(alarmClock, cb) {
//   setTimeout(() => {
//     if (alarmClock) {
//       wakeUp = true;
//       cb(null, wakeUp);
//       console.log('wake up');
//     } else {
//       cb('you are late', null)
//     }
//   }, 900);
// }


// function doTeethClean(wakeUp, cb) {
//   setTimeout(() => {
//     if (wakeUp) {
//       teethClean = true;
//       cb(null, teethClean);
//       console.log('clean your teeth');
//     } else {
//       cb('your tooth are not clean', null)
//     }
//   }, 800);
// }

// function doDressUp(teethClean, cb) {
//   setTimeout(() => {
//     if (teethClean) {
//       dressUp = true;
//       cb(null, dressUp);
//       console.log('dress up!');
//     } else {
//       cb('you cant dress', null)
//     }
//   }, 700);
// }

// function doBreakfast(dressUp, cb) {
//   setTimeout(() => {
//     if (dressUp) {
//       haveBreakfast = true;
//       cb(null, haveBreakfast);
//       console.log('here is your breakfast');
//     } else {
//       cb('you have nothing to eat', null)
//     }
//   }, 600);
// }

// function doFuelCar(haveBreakfast, cb) {
//   setTimeout(() => {
//     if (haveBreakfast) {
//       fuelCar = true;
//       cb(null, fuelCar);
//       console.log('fuel your car');
//     } else {
//       cb('you can not fuel your car', null)
//     }
//   }, 500);
// }

// function doDriveOffice(fuelCar, cb) {
//   setTimeout(() => {
//     if (fuelCar) {
//       driveOffice = true;
//       cb(null, driveOffice);
//       console.log('go to office');
//     } else {
//       cb('you cant drive without fuel', null)
//     }
//   }, 600);
// }

// function finishWork(driveOffice, cb) {
//   setTimeout(() => {
//     if (driveOffice) {
//       workDone = true;
//       cb(null, workDone);
//       console.log('you have finished your work');
//     } else {
//       cb('you didnt finish your work', null)
//     }
//   }, 700);
// }

// function doDriveHome(workDone, cb) {
//   setTimeout(() => {
//     if (workDone) {
//       driveHome = true;
//       cb(null, driveHome);
//       console.log('you can drive home now');
//     } else {
//       cb('you cant drive home', null)
//     }
//   }, 800);
// }




// doWakeUp(alarmClock, (error, wakeUp) => {
//   if (error) {
//     console.log('error');
//   } else {
//     doTeethClean(wakeUp, (error, teeth) => {
//       if (error) {
//         console.log('error');
//       } else {
//         doDressUp(teeth, (error, dress) => {
//           if (error) {
//             console.log('error');
//           } else {
//             doBreakfast(dress, (error, breakfast) => {
//               if (error) {
//                 console.log('error');
//               } else {
//                 doFuelCar(breakfast, (error, fuel) => {
//                   if (error) {
//                     console.log('error');
//                   } else {
//                     doDriveOffice(fuel, (error, office) => {
//                       if (error) {
//                         console.log('error');
//                       } else {
//                         finishWork(office, (error, work) => {
//                           if (error) {
//                             console.log('error');
//                           } else {
//                             doDriveHome(work, (error, home) => {
//                               if (error) {
//                                 console.log('error');
//                               } else {
//                                 setTimeout(() => {
//                                   console.log('Greetings!');
//                                 }, 2000);
//                               }
//                             })
//                           }
//                         })
//                       }
//                     })
//                   }
//                 })
//               }
//             })
//           }
//         })
//       }
//     })
//   }
// });



//___________________________PROMISE___________________________






function doWakeUp(alarmClock) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (alarmClock) {
        wakeUp = true;
        resolve(wakeUp);
        console.log('wake up');
      } else {
        reject('you are late')
      }
    }, 100);
  })
}


function doTeethClean(wakeUp) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (wakeUp) {
        teethClean = true;
        resolve(teethClean);
        console.log('clean your teeth');
      } else {
        reject('your tooth are not clean')
      }
    }, 300);
  })
}

function doDressUp(teethClean) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (teethClean) {
        dressUp = true;
        resolve(dressUp);
        console.log('dress up!');
      } else {
        reject('you cant dress')
      }
    }, 700);
  })
}

function doBreakfast(dressUp) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (dressUp) {
        haveBreakfast = true;
        resolve(haveBreakfast);
        console.log('here is your breakfast');
      } else {
        reject('you have nothing to eat')
      }
    }, 1000);
  })
}

function doFuelCar(haveBreakfast) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (haveBreakfast) {
        fuelCar = true;
        resolve(fuelCar);
        console.log('fuel your car');
      } else {
        reject('you can not fuel your car')
      }
    }, 1500);
  })
}

function doDriveOffice(fuelCar) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fuelCar) {
        driveOffice = true;
        resolve(driveOffice);
        console.log('go to office');
      } else {
        reject('you cant drive without fuel')
      }
    }, 1800);
  })
}

function finishWork(driveOffice) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (driveOffice) {
        workDone = true;
        resolve(workDone);
        console.log('you have finished your work');
      } else {
        reject('you didnt finish your work')
      }
    }, 2300);
  })
}

function doDriveHome(workDone) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (workDone) {
        driveHome = true;
        resolve(driveHome);
        console.log('you can drive home now');
      } else {
        reject('you cant drive home')
      }
    }, 2800);
  })
}  


doWakeUp(true).then(wake => {
  return doTeethClean(wake);
})

.then(teeth => {
  return doDressUp(teeth);
})

.then(dress => {
  return doBreakfast(dress);
})

.then(breakfast => {
  return doFuelCar(breakfast);
})

.then(fuel => {
  return doDriveOffice(fuel);
})

.then(office => {
  return finishWork(office);
})

.then(work => {
  return doDriveHome(work);
})
