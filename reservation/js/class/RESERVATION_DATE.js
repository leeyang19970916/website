class RESERVATION_DATE{
    constructor(){
        this.activeDoctor=''
        this.activeDate=""
        this.activeTime=""

        this.initDate=new CALENDAR()
        this.doctorArr=[]
        this.date=[]
        this.time=[]
    }
    setDoctorArr(doctorArr){
        this.doctorArr=[]
        this.doctorArr=[...doctorArr]

        return this
    }
    onDocChange(name){
        this.activeDoctor=name
        this.apiDoctorSchedule()
    }
    apiDoctorSchedule(){

    }

}


