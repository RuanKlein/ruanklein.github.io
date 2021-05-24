export const calcAge = (bYear : number, bMonth: number, bDay: number) : number => {
    const todayDate = new Date;
    
    const year     = todayDate.getFullYear();
    const month    = todayDate.getMonth() + 1;
    const day      = todayDate.getDate();

    let age = year - bYear;

    if(month < bMonth || month === bMonth && day < bDay) {
        age--;
    }

    return age < 0 ? 0 : age;
};