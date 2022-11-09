// console.log(module)

// You can have local variables refferanced by exports and they will still show in the export. However, they are local to their documents and will not be accessed by external documents even if they request an export holding said variable.

module.exports.weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

module.exports.getWeekday = function(dayNo) {
    if (dayNo < 0 || dayNo > 6) dayNo = 0;
    return this.weekdays[dayNo]
};