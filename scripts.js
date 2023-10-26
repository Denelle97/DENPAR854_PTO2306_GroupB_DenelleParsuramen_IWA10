const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`), 
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6; //only added semicolon
const futureId = 9; // only added semicolon 

// Do not change code above this comment

/**
 * Used If to check if `holidays`specific ID (futureId) exists in the holidays object.
 * If it does, it logs the name of that holiday otherwise, it logs a message indicating that the 
 * holiday with the specified ID has not been created yet. . .
 */
if (holidays[futureId]) {
    console.log(holidays[futureId].name);
}   else {
    console.log(`ID ${futureId} not created yet`);
}

copied = holidays[6];              //changed holidays.christmas to holidays[6]

copied.name = 'X-mas Day';         //Checked for key and changed it 'x-mas day


copied.date.setHours(0);       //setting hours to 0
copied.date.setMinutes(0);     //setting mins to 0


isEarlier = copied.date < holidays[6].date;
console.log("New date is earlier:", isEarlier);


if (isEarlier) {
    copied.date = correctDate;
    //log false if nothing has been changed
  console.log("ID change:", holidays[6].id != copied.id ? copied.id : "false"); 
  // Log whether the name of the Christmas holiday has changed
  console.log("Name change:", holidays[6].name != copied.name ? "false" : copied.name); 
  // Log whether the date of the Christmas holiday has changed
  console.log("Date change:", holidays[6].date != copied.date ? "false" : copied.date.toLocaleDateString("en-GB")); 
}

/**  
 * used new date & used parentheses to getTime for both Math.min and Math.max
*/
const firstHolidayTimestamp = Math.min(
    new Date(holidays[0].date).getTime(),
    new Date(holidays[1].date).getTime(),
    new Date(holidays[2].date).getTime(),
    new Date(holidays[3].date).getTime(),
    new Date(holidays[4].date).getTime(),
    new Date(holidays[5].date).getTime(),
    new Date(holidays[6].date).getTime(),
    new Date(holidays[7].date).getTime(),
    new Date(holidays[8].date).getTime()
  ); 


const lastHolidayTimestamp = Math.max(
  new Date(holidays[0].date).getTime(),
  new Date(holidays[1].date).getTime(),
  new Date(holidays[2].date).getTime(),
  new Date(holidays[3].date).getTime(), 
  new Date(holidays[4].date).getTime(),
  new Date(holidays[5].date).getTime(),
  new Date(holidays[6].date).getTime(),
  new Date(holidays[7].date).getTime(),
  new Date(holidays[8].date).getTime()
); 

/**
 * Change timestamps into date objects using new date
 */
const firstHolidayDate = new Date(firstHolidayTimestamp);
const lastHolidayDate = new Date(lastHolidayTimestamp);


/**
 * Extracting the day and month 
 */
const firstDay = firstHolidayDate.getDate();
const firstMonth = firstHolidayDate.getMonth();
const lastDay = lastHolidayDate.getDate();
const lastMonth = lastHolidayDate.getMonth();

/**
 * fixed interpolation syntax
 */
console.log(`${firstDay}/${firstMonth}/${currentYear}`);
console.log(`${lastDay}/${lastMonth}/${currentYear}`);

/**
 * This is for me to remember !
 * 
 * Randomly Selecting a Holiday:
 * 
 * -Math.random() => generates a pseudo-random floating-point number in the range [0, 1). 
 * -Object.keys(holidays) => retrieves an array of the keys (IDs) of the holidays object.
 * -Math.floor(Math.random() * Object.keys(holidays).length) => generates a random index within the 
 * range of valid indices for the holidays object. which is achieved by multiplying the random number 
 * by the length of the keys array and rounding down to the nearest integer using Math.floor().
 * 
 */

const randomObjectIndex = Math.floor(Math.random() * Object.keys(holidays).length);

const randomHoliday = holidays[randomObjectIndex]; //retrieves a random holiday from the holidays object 
console.log(randomHoliday.date.toLocaleDateString("en-GB")); //logs the date of the randomly selected holiday
