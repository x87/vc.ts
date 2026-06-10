// Generated from main/audio.sc

import { $ } from "../vars.mts";

async function mission_start_aud() {



  // SCRIPT_NAME audio1

  // variables for the audio

  // Biker bar


  // VAR_INT bike_bar_loop1 bike_bar_loop2 bike_bar_loop3


  // VAR_INT biker_bar_sound1_added biker_bar_sound2_added biker_bar_sound3_added

  // Malibu


  // VAR_INT malibu_loop1 malibu_loop2 malibu_loop3


  // VAR_INT malibu_sound1_playing


  // VAR_INT malibu_sound2_playing


  // VAR_INT malibu_sound3_playing

  // pole position


  // VAR_INT strip_loop1 strip_loop2 strip_loop3


  // VAR_INT strip_bar_sound1_playing strip_bar_sound2_playing strip_bar_sound3_playing

  // Fountains


  // VAR_INT fountain_loop1 fountain_loop2


  // VAR_INT fountain_sound1_added fountain_sound2_added

  // Church


  // VAR_INT church_loop1 church_sounds_added


  // Biker bar


  $.biker_bar_sound1_added = 0;


  $.biker_bar_sound2_added = 0;


  $.biker_bar_sound3_added = 0;

  // Malibu


  $.malibu_sound1_playing = 0;


  $.malibu_sound2_playing = 0;


  $.malibu_sound3_playing = 0;

  // Pole Position


  $.strip_bar_sound1_playing = 0;


  $.strip_bar_sound2_playing = 0;


  $.strip_bar_sound3_playing = 0;

  // Churches


  $.church_sounds_added = 0;

  // fountains


  $.fountain_sound1_added = 0;


  $.fountain_sound2_added = 0;
}


// ********************************************* START OF SCRIPT ***************************


async function mission_start_aud_inner() {
  // SCM GOTO → mission_start_aud_inner lowered to endless loop
  while (true) {


    await asyncWait(500);


    const _res38 = Clock.GetTimeOfDay();
$.hours_s = _res38.hours;
$.minutes_s = _res38.minutes;


    if ($.player1.isPlaying()) {

      // BIKER BAR SOUNDLOOP1

      if ($.player1.isInZone("DTOWN")) {
        if ($.flag_bikers_mission1_passed == 0) {
          if ($.biker_bar_sound1_added == 0) {
            $.bike_bar_loop1 = Sound.AddContinuous(-596.018, 640.916, 12.0, SOUND_NEW_BUILDING_BAR_1); //Biker bar
            $.biker_bar_sound1_added = 1;
          }


        }
        if ($.flag_bikers_mission1_passed == 1) {
          if ($.flag_bikers_mission2_passed == 0) {
            if ($.biker_bar_sound2_added == 0) {
              $.bike_bar_loop2 = Sound.AddContinuous(-596.018, 640.916, 12.0, SOUND_NEW_BUILDING_BAR_2); //Biker bar
              $.biker_bar_sound2_added = 1;
            }


          }


        }
        if ($.flag_bikers_mission1_passed == 1) {
          if ($.flag_bikers_mission2_passed == 1) {
            if ($.flag_bikers_mission3_passed == 0) {
              if ($.biker_bar_sound3_added == 0) {
                $.bike_bar_loop3 = Sound.AddContinuous(-596.018, 640.916, 12.0, SOUND_NEW_BUILDING_BAR_3); //Biker bar
                $.biker_bar_sound3_added = 1;
              }


            }


          }


        }


      }
      else {
        if ($.biker_bar_sound1_added == 1) {
          $.bike_bar_loop1.remove();
          $.biker_bar_sound1_added = 0;
        }
        if ($.biker_bar_sound2_added == 1) {
          $.bike_bar_loop2.remove();
          $.biker_bar_sound2_added = 0;
        }
        if ($.biker_bar_sound3_added == 1) {
          $.bike_bar_loop3.remove();
          $.biker_bar_sound3_added = 0;
        }


      }

      // MALIBU SOUNDLOOP2

      if ($.player1.isInZone("BEACH3")) {
        if ($.hours_s >= 23 || $.hours_s < 7) {
          if ($.malibu_sound1_playing == 0 && $.malibu_sound2_playing == 0 && $.malibu_sound3_playing == 0) {
            $.malibu_loop1 = Sound.AddContinuous(494.652, -83.347, 10.032, SOUND_NEW_BUILDING_MALIBU_1);
            $.malibu_sound1_playing = 1;
          }


        }
        else {
          if ($.malibu_sound1_playing == 1) {
            $.malibu_loop1.remove();
            $.malibu_sound1_playing = 0;
          }


        }
        if ($.hours_s >= 7 && $.hours_s < 15) {
          if ($.malibu_sound2_playing == 0 && $.malibu_sound1_playing == 0 && $.malibu_sound3_playing == 0) {
            $.malibu_loop2 = Sound.AddContinuous(494.652, -83.347, 10.032, SOUND_NEW_BUILDING_MALIBU_2);
            $.malibu_sound2_playing = 1;
          }


        }
        else {
          if ($.malibu_sound2_playing == 1) {
            $.malibu_loop2.remove();
            $.malibu_sound2_playing = 0;
          }


        }
        if ($.hours_s >= 15 && $.hours_s < 23) {
          if ($.malibu_sound3_playing == 0 && $.malibu_sound1_playing == 0 && $.malibu_sound2_playing == 0) {
            $.malibu_loop3 = Sound.AddContinuous(494.652, -83.347, 10.032, SOUND_NEW_BUILDING_MALIBU_3);
            $.malibu_sound3_playing = 1;
          }


        }
        else {
          if ($.malibu_sound3_playing == 1) {
            $.malibu_loop3.remove();
            $.malibu_sound3_playing = 0;
          }


        }


      }
      else {
        if ($.malibu_sound1_playing == 1) {
          $.malibu_loop1.remove();
          $.malibu_sound1_playing = 0;
        }
        if ($.malibu_sound2_playing == 1) {
          $.malibu_loop2.remove();
          $.malibu_sound2_playing = 0;
        }
        if ($.malibu_sound3_playing == 1) {
          $.malibu_loop3.remove();
          $.malibu_sound3_playing = 0;
        }


      }

      // POLE POSITION

      if ($.player1.isInZone("BEACH1")) {
        if ($.hours_s >= 23 || $.hours_s < 7) {
          if ($.strip_bar_sound1_playing == 0 && $.strip_bar_sound2_playing == 0 && $.strip_bar_sound3_playing == 0) {
            $.strip_loop1 = Sound.AddContinuous(87.738, -1456.117, 11.0, SOUND_NEW_BUILDING_STRIP_1); //Strip club
            $.strip_bar_sound1_playing = 1;
          }


        }
        else {
          if ($.strip_bar_sound1_playing == 1) {
            $.strip_loop1.remove();
            $.strip_bar_sound1_playing = 0;
          }


        }
        if ($.hours_s >= 7 && $.hours_s < 15) {
          if ($.strip_bar_sound2_playing == 0 && $.strip_bar_sound1_playing == 0 && $.strip_bar_sound3_playing == 0) {
            $.strip_loop2 = Sound.AddContinuous(87.738, -1456.117, 11.0, SOUND_NEW_BUILDING_STRIP_2); //Strip club
            $.strip_bar_sound2_playing = 1;
          }


        }
        else {
          if ($.strip_bar_sound2_playing == 1) {
            $.strip_loop2.remove();
            $.strip_bar_sound2_playing = 0;
          }


        }
        if ($.hours_s >= 15 && $.hours_s < 23) {
          if ($.strip_bar_sound3_playing == 0 && $.strip_bar_sound1_playing == 0 && $.strip_bar_sound2_playing == 0) {
            $.strip_loop3 = Sound.AddContinuous(87.738, -1456.117, 11.0, SOUND_NEW_BUILDING_STRIP_3); //Strip club
            $.strip_bar_sound3_playing = 1;
          }


        }
        else {
          if ($.strip_bar_sound3_playing == 1) {
            $.strip_loop3.remove();
            $.strip_bar_sound3_playing = 0;
          }


        }

        // Church

        if ($.hours_s == 10) {
          if ($.church_sounds_added == 0) {
            $.church_loop1 = Sound.AddContinuous(-76.074, -1528.485, 13.397, SOUND_NEW_BUILDING_CHURCH); // Church in Washington
            $.church_sounds_added = 1;
          }


        }
        else {
          if ($.church_sounds_added == 1) {
            $.church_loop1.remove(); // Church in Washington
            $.church_sounds_added = 0;
          }


        }

        // fountain

        if ($.fountain_sound1_added == 0) {
          $.fountain_loop1 = Sound.AddContinuous(-67.015, -1546.671, 11.485, SOUND_NEW_WATERFALL); // Fountain by church
          $.fountain_sound1_added = 1;
        }


      }
      else {
        if ($.strip_bar_sound1_playing == 1) {
          $.strip_loop1.remove();
          $.strip_bar_sound1_playing = 0;
        }
        if ($.strip_bar_sound2_playing == 1) {
          $.strip_loop2.remove();
          $.strip_bar_sound2_playing = 0;
        }
        if ($.strip_bar_sound3_playing == 1) {
          $.strip_loop3.remove();
          $.strip_bar_sound3_playing = 0;
        }
        if ($.church_sounds_added == 1) {
          $.church_loop1.remove(); // Church in Washington
          $.church_sounds_added = 0;
        }
        if ($.fountain_sound1_added == 1) {
          $.fountain_loop1.remove(); // Fountain by church
          $.fountain_sound1_added = 0;
        }


      }
      if ($.player1.isInZone("PORNI")) {
        if ($.fountain_sound2_added == 0) {
          $.fountain_loop2 = Sound.AddContinuous(9.637, 1092.344, 17.211, SOUND_NEW_WATERFALL); // Fountain in porn island
          $.fountain_sound2_added = 1;
        }


      }
      else {
        if ($.fountain_sound2_added == 1) {
          $.fountain_loop2.remove();
          $.fountain_sound2_added = 0;
        }


      }


    }




  }
}

export async function audio() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // ********************************** AUDIO SCRIPT *****************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************


  // SCRIPT_NAME audio


  // SET_DEATHARREST_STATE(false /* OFF */);





  // START_NEW_SCRIPT mission_start_aud


  // MissionBoundary





}
