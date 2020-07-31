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

// function randomDelay() {
// 	return Math.floor(Math.random() * 2000);
// }

// let alarmClock = true;


// function doWakeUp(alarmClock, cb) {
//   let delay = randomDelay();
//   setTimeout(() => {
//     if (alarmClock) {
//       wakeUp = true;
//       cb(null, wakeUp);
//       console.log('wake up', delay);
//     } else {
//       cb('you are late', null)
//     }
//   }, delay);
// }


// function doTeethClean(wakeUp, cb) {
//   let delay = randomDelay();
//   setTimeout(() => {
//     if (wakeUp) {
//       teethClean = true;
//       cb(null, teethClean);
//       console.log('clean your teeth', delay);
//     } else {
//       cb('your tooth are not clean', null)
//     }
//   }, delay);
// }

// function doDressUp(teethClean, cb) {
//   let delay = randomDelay();
//   setTimeout(() => {
//     if (teethClean) {
//       dressUp = true;
//       cb(null, dressUp);
//       console.log('dress up!', delay);
//     } else {
//       cb('you cant dress', null)
//     }
//   }, delay);
// }

// function doBreakfast(dressUp, cb) {
//   let delay = randomDelay();
//   setTimeout(() => {
//     if (dressUp) {
//       haveBreakfast = true;
//       cb(null, haveBreakfast);
//       console.log('here is your breakfast', delay);
//     } else {
//       cb('you have nothing to eat', null)
//     }
//   }, delay);
// }

// function doFuelCar(haveBreakfast, cb) {
//   let delay = randomDelay();
//   setTimeout(() => {
//     if (haveBreakfast) {
//       fuelCar = true;
//       cb(null, fuelCar);
//       console.log('fuel your car', delay);
//     } else {
//       cb('you can not fuel your car', null)
//     }
//   }, delay);
// }

// function doDriveOffice(fuelCar, cb) {
//   let delay = randomDelay();
//   setTimeout(() => {
//     if (fuelCar) {
//       driveOffice = true;
//       cb(null, driveOffice);
//       console.log('go to office', delay);
//     } else {
//       cb('you cant drive without fuel', null)
//     }
//   }, delay);
// }

// function finishWork(driveOffice, cb) {
//   let delay = randomDelay();
//   setTimeout(() => {
//     if (driveOffice) {
//       workDone = true;
//       cb(null, workDone);
//       console.log('you have finished your work', delay);
//     } else {
//       cb('you didnt finish your work', null)
//     }
//   }, delay);
// }

// function doDriveHome(workDone, cb) {
//   let delay = randomDelay();
//   setTimeout(() => {

//     if (workDone) {
//       driveHome = true;
//       cb(null, driveHome);
//       console.log('you can drive home now', delay);
//     } else {
//       cb('you cant drive home', null)
//     }
//   }, delay);
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


// function randomDelay() {
// 	return Math.floor(Math.random() * 2000);
// }


// function doWakeUp(alarmClock) {
//   return new Promise((resolve, reject) => {
//     let delay = randomDelay();
//     setTimeout(() => {
//       if (alarmClock) {
//         wakeUp = true;
//         resolve(wakeUp);
//         console.log('wake up', delay);
//       } else {
//         reject('you are late')
//       }
//     }, delay);
//   })
// }


// function doTeethClean(wakeUp) {
//   return new Promise((resolve, reject) => {
//     let delay = randomDelay();
//     setTimeout(() => {
//       if (wakeUp) {
//         teethClean = true;
//         resolve(teethClean);
//         console.log('clean your teeth', delay);
//       } else {
//         reject('your tooth are not clean')
//       }
//     }, delay);
//   })
// }

// function doDressUp(teethClean) {
//   return new Promise((resolve, reject) => {
//     let delay = randomDelay();
//     setTimeout(() => {
//       if (teethClean) {
//         dressUp = true;
//         resolve(dressUp);
//         console.log('dress up!', delay);
//       } else {
//         reject('you cant dress')
//       }
//     }, delay);
//   })
// }

// function doBreakfast(dressUp) {
//   return new Promise((resolve, reject) => {
//     let delay = randomDelay();
//     setTimeout(() => {
//       if (dressUp) {
//         haveBreakfast = true;
//         resolve(haveBreakfast);
//         console.log('here is your breakfast', delay);
//       } else {
//         reject('you have nothing to eat')
//       }
//     }, delay);
//   })
// }

// function doFuelCar(haveBreakfast) {
//   return new Promise((resolve, reject) => {
//     let delay = randomDelay();
//     setTimeout(() => {
//       if (haveBreakfast) {
//         fuelCar = true;
//         resolve(fuelCar);
//         console.log('fuel your car', delay);
//       } else {
//         reject('you can not fuel your car')
//       }
//     }, delay);
//   })
// }

// function doDriveOffice(fuelCar) {
//   return new Promise((resolve, reject) => {
//     let delay = randomDelay();
//     setTimeout(() => {
//       if (fuelCar) {
//         driveOffice = true;
//         resolve(driveOffice);
//         console.log('go to office', delay);
//       } else {
//         reject('you cant drive without fuel')
//       }
//     }, delay);
//   })
// }

// function finishWork(driveOffice) {
//   return new Promise((resolve, reject) => {
//     let delay = randomDelay();
//     setTimeout(() => {
//       if (driveOffice) {
//         workDone = true;
//         resolve(workDone);
//         console.log('you have finished your work', delay);
//       } else {
//         reject('you didnt finish your work')
//       }
//     }, delay);
//   })
// }

// function doDriveHome(workDone) {
//   return new Promise((resolve, reject) => {
//     let delay = randomDelay();
//     setTimeout(() => {
//       if (workDone) {
//         driveHome = true;
//         resolve(driveHome);
//         console.log('you can drive home now', delay);
//       } else {
//         reject('you cant drive home')
//       }
//     }, delay);
//   })
// }  


// doWakeUp(true).then(wake => {
//   return doTeethClean(wake);
// })

// .then(teeth => {
//   return doDressUp(teeth);
// })

// .then(dress => {
//   return doBreakfast(dress);
// })

// .then(breakfast => {
//   return doFuelCar(breakfast);
// })

// .then(fuel => {
//   return doDriveOffice(fuel);
// })

// .then(office => {
//   return finishWork(office);
// })

// .then(work => {
//   return doDriveHome(work);
// })




//_______ASYNC____await___________________________

function randomDelay() {
	return Math.floor(Math.random() * 2000);
}


function doWakeUp(alarmClock) {
  return new Promise((resolve, reject) => {
    let delay = randomDelay();
    setTimeout(() => {
      if (alarmClock) {
        wakeUp = true;
        resolve(wakeUp);
        console.log('wake up', delay);
      } else {
        reject('you are late')
      }
    }, delay);
  })
}


function doTeethClean(wakeUp) {
  return new Promise((resolve, reject) => {
    let delay = randomDelay();
    setTimeout(() => {
      if (wakeUp) {
        teethClean = true;
        resolve(teethClean);
        console.log('clean your teeth', delay);
      } else {
        reject('your tooth are not clean')
      }
    }, delay);
  })
}

function doDressUp(teethClean) {
  return new Promise((resolve, reject) => {
    let delay = randomDelay();
    setTimeout(() => {
      if (teethClean) {
        dressUp = true;
        resolve(dressUp);
        console.log('dress up!', delay);
      } else {
        reject('you cant dress')
      }
    }, delay);
  })
}

function doBreakfast(dressUp) {
  return new Promise((resolve, reject) => {
    let delay = randomDelay();
    setTimeout(() => {
      if (dressUp) {
        haveBreakfast = true;
        resolve(haveBreakfast);
        console.log('here is your breakfast', delay);
      } else {
        reject('you have nothing to eat')
      }
    }, delay);
  })
}

function doFuelCar(haveBreakfast) {
  return new Promise((resolve, reject) => {
    let delay = randomDelay();
    setTimeout(() => {
      if (haveBreakfast) {
        fuelCar = true;
        resolve(fuelCar);
        console.log('fuel your car', delay);
      } else {
        reject('you can not fuel your car')
      }
    }, delay);
  })
}

function doDriveOffice(fuelCar) {
  return new Promise((resolve, reject) => {
    let delay = randomDelay();
    setTimeout(() => {
      if (fuelCar) {
        driveOffice = true;
        resolve(driveOffice);
        console.log('go to office', delay);
      } else {
        reject('you cant drive without fuel')
      }
    }, delay);
  })
}

function finishWork(driveOffice) {
  return new Promise((resolve, reject) => {
    let delay = randomDelay();
    setTimeout(() => {
      if (driveOffice) {
        workDone = true;
        resolve(workDone);
        console.log('you have finished your work', delay);
      } else {
        reject('you didnt finish your work')
      }
    }, delay);
  })
}

function doDriveHome(workDone) {
  return new Promise((resolve, reject) => {
    let delay = randomDelay();
    setTimeout(() => {
      if (workDone) {
        driveHome = true;
        resolve(driveHome);
        console.log('you can drive home now', delay);
      } else {
        reject('you cant drive home')
      }
    }, delay);
  })
}  


async function daySchedule() {
  try {

    let wake = await doWakeUp(true);

    let teeth = await doTeethClean(wake);

    let dress = await doDressUp(teeth);

    let breakfast = await doBreakfast(dress);

    let fuel = await doFuelCar(breakfast);

    let office = await doDriveOffice(fuel);

    let work = await finishWork(office);

    let home = await doDriveHome(work);

  } catch (error) {
    console.error('error');
  }
}

daySchedule();
