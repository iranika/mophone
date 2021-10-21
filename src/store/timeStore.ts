import {reactive} from 'vue';

export interface TimeStoreInterface{
    time: Date,
}

export class TimeStore {
    private static instance: TimeStore;

    public state = reactive(<TimeStoreInterface>{
        time: new Date()
    })
    public static getInstance():TimeStore{
        if (!this.instance){
            // eslint-disable-next-line @typescript-eslint/unbound-method
            this.instance = new TimeStore(TimeStore.getInstance);
        }
        return this.instance;
    }
    constructor(caller: ()=>TimeStore){
        if (caller == TimeStore.getInstance){
            console.log('create instance of TimeStore');
            setInterval(()=>{
                this.state.time = new Date();
            },2000) //NOTE: 負荷軽減のために1秒毎ではなく2秒毎に設定
        }
        else if (TimeStore.instance){
            throw new Error('Already created instance of TimeStore. You should use TimeStore.getInstance().')
        }else{
            throw new Error('Constractor args valided illegal. You should use TimeStore.getInstance()')
        }
    }

}

export function useTimeStore(){
    return TimeStore.getInstance()
}