<template>
  <q-page class="q-page-style">
    <q-card class="q-card-clock">
      <q-card-section>
        <div>
          <div class="text-h5" style="font-family:'Italianno'; text-align:center;">{{ date.formatDate(timeStore.time, "hh:mm") }}<span style="font-size:10px;">{{ date.formatDate(timeStore.time, "UTCZZ").replace("00","") }}</span></div>
        </div>
        <div class="text-subtitle1" style="font-family:'Italianno';text-align:center;">{{ date.formatDate(timeStore.time, "MM/DD dddd") }}</div>
      </q-card-section>
    </q-card>
    <q-card class="q-card-wide">
      <q-card-section>
        <div class="text-subtitle1">メッセージ<span class="text-caption" style="margin-left:15px; opacity: 0.5">Message</span></div>
        <div style="background: rgba(100, 100, 100, 0.1); padding: 5px;" class="text-grey">未読のメッセージはありません</div>
      </q-card-section>
    </q-card>
    <div class="application-list row justify-between" style="position:relative">
      <q-card class="application" >
        <q-icon name="phone_in_talk" size="xl" style="margin: 20px;"></q-icon>
        <div class="absolute-bottom text-subtitle2 text-center" style="background: rgba(244,244,244,0.4)">
          でんわ
        </div>
      </q-card>
      <q-card class="application">
        <q-icon :name="matCalendarToday" size="xl" style="margin: 20px;"></q-icon>
        <div class="absolute-bottom text-subtitle2 text-center" style="background: rgba(244,244,244,0.4)">
          よてい
        </div>
      </q-card>
      <q-card class="application" @click="openURL('https://movue.iranika.info')">
        <q-img src="movue.png">
        </q-img>
        <div class="absolute-bottom text-subtitle2 text-center" style="background: rgba(244,244,244,0.4)">
          びゅあー
        </div>
      </q-card>
      <q-card class="application" @click="openURL('https://stamp.iranika.info')">
        <q-img src="stamp.png">
        </q-img>
        <div class="absolute-bottom text-subtitle2 text-center" style="background: rgba(244,244,244,0.4)">
          すたんぷ
        </div>
      </q-card>
      <q-card class="application">
        <q-icon name="phone_in_talk" size="xl" style="margin: 20px;"></q-icon>
        <div class="absolute-bottom text-subtitle2 text-center" style="background: rgba(244,244,244,0.4)">
          なんか
        </div>
      </q-card>
      <q-card class="application">
        <q-icon name="phone_in_talk" size="xl" style="margin: 20px;"></q-icon>
        <div class="absolute-bottom text-subtitle2 text-center" style="background: rgba(244,244,244,0.4)">
          なんか
        </div>
      </q-card>
    </div>
    <div class="absolute-bottom text-center" style="margin-bottom: 10px;">
      <q-icon :name="fasPowerOff" size="md" color="white"></q-icon>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, } from 'vue';
import { date } from 'quasar';
import { useTimeStore } from 'src/store/timeStore';
import { fasPhone, fasPowerOff } from '@quasar/extras/fontawesome-v5';
import { matCalendarToday, matCalendarViewMonth, matPowerInput } from '@quasar/extras/material-icons';
import { openURL } from 'quasar';

export default defineComponent({
  name: 'PageIndex',
  components: {  },
  setup() {
    const timeStore = useTimeStore().state
    return { 
      timeStore,
      fasPhone,
      matCalendarViewMonth,
      matCalendarToday,
      matPowerInput,
      fasPowerOff,
      openURL,
      date
    };
  }
});
</script>

<style scoped>
.application{
  width:30%;
  position:relative;
  margin-bottom: 10px;
  background: rgba(255, 255, 255, 0.85);
}

.application-list{
  width:80%;
  max-width: 300px;
  margin: 10px auto 0 auto;
}
.q-card-clock {
  margin: 0 auto 0 auto;
  width:50%;
  max-width: 300px;
  background: rgba(255, 255, 255, 0.7);
}
.q-card-wide {
  margin: 10px auto 0 auto;
  background: rgba(255, 255, 255, 0.8);
  width:80%;
  max-width: 300px;
}
.q-page-style{
  /*background-color: whitesmoke;*/
  padding-top: 25%;
  background:#666 url("/seri7.jpg") no-repeat;
  background-size: cover;
  position: relative;
}
.q-page-style::before{
  content: '';
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  position: absolute;
  background: inherit;
  filter: blur(2px);
}

</style>