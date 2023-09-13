import moment from './moment.js'

export function whatsDayToday() {
    return moment().format('[Today is] dddd')
}
export function addTimeToDate(number, string) {
    return moment().add(number, string).format('LL')
}
export function whatsTime() {
    return moment().format('LTS')
}

console.log(whatsDayToday())
console.log(whatsTime())
console.log(addTimeToDate(20, 'Y'))