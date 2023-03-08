let diff;

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function timezone() {
    let date = new Date();
    let currentDate = new Date(date.toLocaleString("en-US", {timeZone: "Europe/Kiev"}));

    diff = date.getTime() - currentDate.getTime();

    let newDate = new Date(date.getTime() - diff),
        day = newDate.getDate(),
        month = newDate.getMonth(),
        year = newDate.getFullYear();

    return `${day} ${months[month]} ${year}`
}

export { timezone };