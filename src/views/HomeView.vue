<template>
  <v-container>
    <v-card class="mx-auto" elevation="4" max-width="500">
      <v-card-title class="text-h5">pppig236</v-card-title>
      <v-card-text class="py-0">
        <v-row align="center" hide-gutters>
          <v-col cols="9">
            <p>
            <v-icon>mdi mdi-cake-variant</v-icon> Jan. 2004
          </p>
          <p>
            <v-icon>mdi mdi-city</v-icon> Shanghai -> Troy
          </p>
          <p>
            <v-icon>mdi mdi-heart</v-icon> Windows/Linux/Hackintosh/Android/ZFS
          </p>
          <p>
            <v-icon>mdi mdi-code-braces</v-icon> C++/Java/Kotlin/Python/ASM/HTML
          </p>
          </v-col>
        <v-col class="text-right">
          <v-avatar class="profile" color="grey" size="60%">
            <v-img src="https://avatars.githubusercontent.com/u/43439674" max-width="200px"></v-img>
          </v-avatar>
        </v-col>
        </v-row>
      </v-card-text>

      <v-spacer />

      <v-card-actions>
        <v-btn icon @click="dialog_email = true">
          <v-icon>fas fa-envelope</v-icon>
        </v-btn>
        <v-btn icon href="https://t.me/PIPIPIG233666">
          <v-icon>fab fa-telegram</v-icon>
        </v-btn>
        <v-btn icon href="https://github.com/PIPIPIG233666">
          <v-icon>fab fa-github</v-icon>
        </v-btn>
        <v-btn icon href="https://paypal.me/pig236">
          <v-icon>fab fa-paypal</v-icon>
        </v-btn>
        <!--v-btn icon @click="dialog_btc = true">
          <v-icon>fab fa-bitcoin</v-icon>
        </v-btn-->
      </v-card-actions>
    </v-card>

    <v-card class="mx-auto" elevation="4" max-width="500" title="Skills">
      <v-list lines="two">
        <v-list-item prependIcon="mdi mdi-linux" title="Linux" subtitle="Kernel build, Debug, System Optimization" />
        <v-list-item prependIcon="mdi mdi-android" title="Android OS Development" subtitle="Java, C++" />
        <v-list-item prependIcon="mdi mdi-web" title="Webpage Development" subtitle="HTML, CSS, SQLite"/>
      </v-list>
    </v-card>


    <v-card class="mx-auto" elevation="4" max-width="500" title="Extracurricular activities and Achievements">
      <HistoryTimeLine :items="history" />
    </v-card>

    <v-dialog v-model="dialog_email">
      <v-card title="Email">
        <v-card-text>
          pig.priv@gmail.com
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn href="mailto:pig.priv@gmail.com">
            Open in App
          </v-btn>
          <v-btn text @click="dialog_email = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import HistoryTimeLine from "@/components/HistoryTimeLine.vue";

  export default defineComponent({
    components: {
      HistoryTimeLine
    },
    data() {
      return {
        dialog_email: false,
        dialog_btc: false,
        history: [
          {
            header: "FRC Team 573",
            env: "2021-2023, Mech Warriors, Programming sub-team"
          },
          {
            year: 'Nov, 2021',
            title: '2021 Oakland County Competitive Robotics Association Team 573',
            content: 'Semi finalist',
            env: 'C++ codes programming using VEX'
          },
          {
            year: 'Jan-Apr, 2022',
            title: 'FIRST 2022 Season - Rapid React',
            content: 'Programming Sub-team, Scouting Co-lead, Pit-shift B',
            env: 'C++ codes for the RoboRio | Python, HTML, CSS for the Scouting APP'
          },
          {
            year: 'Mar 10-12, 2022',
            title: '2022 FIM District Milford Event presented by GM Proving Grounds FRC Team 573',
            content: 'The Seventh seed, the Sixth Alliance Captain, and Quarter finalist',
            env: ''
          },
          {
            year: 'Mar 31-Apr 2, 2022',
            title: '2022 FIM District Troy Event presented by Magna FRC Team 573',
            content: 'The Eighth Seed, the Fifth Alliance Captain, and Quarter finalist',
            env: ''
          },
          {
            year: 'Apr 13-16, 2022',
            title: '2022 FIRST in Michigan State Championship - APTIV Division FRC Team 573',
            content: 'The Sixth Seed, the Fifth Alliance Captain, and Semi finalist',
            env: ''
          },
          {
            year: 'Apr 20-23, 2022',
            title: '2022 FIRST Championship - FIRST Robotics Competition - Newton Division FRC Team 573',
            content:  'The 46th seed out of 76 teams',
            env: ''
          },
          {
            year: 'Nov, 2022',
            title: '2022 Oakland County Competitive Robotics Association Team 573',
            content: 'Semi finalist',
            env: 'Programming sub-team lead, C++ codes programming using VEX'
          },
          {
            year: 'Jan-Apr, 2023',
            title: 'FIRST 2023 Season - Charged Up',
            content: 'Programming Sub-team, Scouting Co-lead, Pit-shift',
            env: 'C++ codes for the RoboRio | Kotlin for the Android Scouting APP'
          },
          {
            year: 'Mar 2-4, 2022',
            title: '2023 FIM District Escanaba Event presented by Highline FRC Team 573',
            content: 'The Tenth seed, the Fourth Alliance First Pick, and Semi finalist',
            env: ''
          },
          {
            year: 'Mar 24-26, 2022',
            title: '2023 FIM District Troy Event presented by Aptiv FRC Team 573',
            content: 'The Sixth Seed, the Fifth Alliance Captain, and Quarter finalist',
            env: ''
          },
          {
            year: 'Apr 6-8, 2022',
            title: '2023 FIRST in Michigan State Championship - APTIV Division FRC Team 573',
            content: 'The Twenty-third Seed, the Eighth Alliance Second Pick, and Quarter finalist',
            env: ''
          },
          {
            year: 'Apr 19-22, 2022',
            title: '2023 FIRST Championship - FIRST Robotics Competition - Hopper Division FRC Team 573',
            content:  'The Sixth Seed out of 77 teams, the Sixth Alliance Captain, and Quarter finalist',
            env: 'Top-five seeded Michigan team in the World ^-^'
          },
          {
            header: "High School stuff",
            env: "Brother Rice High School - Bloomfield Hills"
          },
          {
            year: 'Apr 25, 2022',
            title: 'Certificate of Achievement in recognition of outstanding achievement',
            content: 'AP Calculus (BC), and AP Computer Science Principles',
            env: ''
          },
          {
            year: 'Apr 16, 2023',
            title: 'Certificate of Achievement in recognition of outstanding achievement',
            content: 'A bunch of APs, did not acknowledge because did not attend the ceremony',
            env: 'All straight As achieved in AP Physics 2, Statistics, Macro Econ/Govern Poli, Lang and Comp, Comp Sci A'
          },
          {
            header: "College stuff",
            title: "Computer Engineering",
            content: "University of Michigan - Ann Arbor",
            env: "College of Engineering '27"
          }
        ],
      }
    }
  });
</script>

<style>
  .mx-auto {
    margin: 10px auto;
  }
</style>
