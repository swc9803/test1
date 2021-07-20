<template>
  <div class="center">
    <div id="clock">
      <v-icon small>mdi-calendar</v-icon> {{ date }}
      <br>
      <v-icon small>mdi-clock-outline</v-icon> {{ time }}
    </div>
    <div id="weather">
      <div>
        <div>
          <!-- Clear -->
          <v-icon v-if="code == 800">{{ icons[5] }}</v-icon>
          <!-- Thunderstorm -->
          <v-icon v-else-if="code.substr(0, 1) == 2">
            {{ icons[0] }}
          </v-icon>
          <!-- Drizzle -->
          <v-icon v-else-if="code.substr(0, 1) == 3">
            {{ icons[1] }}
          </v-icon>
          <!-- Rain -->
          <v-icon v-else-if="code.substr(0, 1) == 5">
            {{ icons[2] }}
          </v-icon>
          <!-- Snow -->
          <v-icon v-else-if="code.substr(0, 1) == 6">
            {{ icons[3] }}
          </v-icon>
          <!-- Atmosphere -->
          <v-icon v-else-if="code.substr(0, 1) == 7">
            {{ icons[4] }}
          </v-icon>
          <!-- Clouds -->
          <v-icon v-else>
            {{ icons[6] }}
          </v-icon>
        </div>
        <div>{{ Math.round(temp) }}℃</div>
      </div>
      <!-- 날씨 정보가 없을 경우 -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      week: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      time: '',
      date: '',
      api_key: 'd3cd7fd13873864c2c9fbacc4f1817ec',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      weather: {},
      code: '',
      temp: 0,
      // 날씨 표현 시 사용될 icon 배열
      icons: [
        'mdi-weather-lightning-rainy', // 2xx : Thunderstorm
        'mdi-weather-rainy', // 3xx : Drizzle
        'mdi-weather-pouring', // 5xx : Rain
        'mdi-weather-snowy', // 6xx : Snow
        'mdi-weather-fog', // 7xx : Atmosphere
        'mdi-weather-sunny', // 800 : Clear
        'mdi-weather-cloudy' // 8xx : Clouds
      ]
    }
  },
  mounted () {
    setInterval(this.updateTime, 1000) // 1초마다 시간 갱신
    // API 요청 URL (지역 Seoul 고정)
    const fetchUrl = `${this.url_base}weather?q=Seoul&units=metric&APPID=${this.api_key}`
    fetch(fetchUrl)
      .then(response => {
        return response.json()
      })
      .then(result => {
        this.weather = result // 날씨 정보
        this.temp = result.main.temp // 기온
        this.code = result.weather[0].id.toString() // 날씨 코드
      })
  },
  methods: {
    updateTime () {
      var cd = new Date()
      // 날짜 출력
      this.date =
        this.zeroPadding(cd.getFullYear(), 4) +
        '-' +
        this.zeroPadding(cd.getMonth() + 1, 2) +
        '-' +
        this.zeroPadding(cd.getDate(), 2) +
        ' ' +
        this.week[cd.getDay()]
      // 시간 출력
      this.time =
        this.zeroPadding(cd.getHours(), 2) +
        ':' +
        this.zeroPadding(cd.getMinutes(), 2) +
        ':' +
        this.zeroPadding(cd.getSeconds(), 2)
    },
    zeroPadding (num, digit) {
      var zero = ''
      for (var i = 0; i < digit; i++) {
        zero += '0'
      }
      return (zero + num).slice(-digit)
    }
  }
}
</script>

<style scoped>
.center {
  text-align: center;
}
</style>
