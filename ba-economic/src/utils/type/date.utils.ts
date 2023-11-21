const formatDate = (date: string, sysbol: string = '_'): string => {
    let dateTransform: Date  = new Date(date),
        month = '' + (dateTransform.getMonth() + 1),
        day = '' + dateTransform.getDate(),
        year = dateTransform.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join(sysbol);
};

export {
    formatDate,
}
