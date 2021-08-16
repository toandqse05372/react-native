import moment from 'moment';
import 'moment/locale/vi';

export function convertDate(string) {
    return moment(string * 1000).format('L');
}
export function convertTemp(string){
    let doC= Math.ceil(string - 273.15)
    let doF= Math.ceil(doC*1.8+32)

    return {
        doC
        ,doF
    }
}