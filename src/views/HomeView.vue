<template>
  <v-container>
    <v-card class="mx-auto" elevation="4" max-width="500">
      <v-list-item>
        <v-list-item-content>
          <h2>pppig236</h2>
          <p>
            <v-icon>mdi mdi-cake-variant</v-icon> Jan. 2004
          </p>
          <p>
            <v-icon>mdi mdi-city</v-icon> Detroit
          </p>
          <p>
            <v-icon>mdi mdi-heart</v-icon> Linux/Android/Ubuntu/LineageOS/Windows
          </p>
          <p>
            <v-icon>mdi mdi-code-braces</v-icon> C++/Java/Python/ASM/HTML
          </p>
        </v-list-item-content>

        <v-spacer />

        <v-avatar class="profile" color="pink" size="20%">
          <v-img src="https://avatars.githubusercontent.com/u/43439674" max-width="200px"></v-img>
        </v-avatar>
      </v-list-item>

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
        <v-list-item prependIcon="mdi mdi-linux" title="Linux" subtitle="kernel build" />
        <v-list-item prependIcon="mdi mdi-android" title="Android OS Development" subtitle="Java, C++" />
        <v-list-item prependIcon="mdi mdi-web" title="Webpage Development"  subtitle="HTML, CSS, SQLite"/>
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
            year: 'Nov, 2021',
            title: '2021 Oakland County Competitive Robotics Association Team 573',
            content: 'Semi finalist',
            env: 'C++ codes programming using VEX'
          },
          {
            year: 'Jan-Apr, 2022',
            title: 'FRC Team 573',
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
            year: 'Apr 25, 2022',
            title: 'Certificate of Achievement in recognition of outstanding achievement',
            content: 'AP Calculus (BC), and AP Computer Science Principles',
            env: ''
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
