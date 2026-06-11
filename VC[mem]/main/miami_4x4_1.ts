// Generated from main/miami_4x4_1.sc

import { $ } from "../utils/vars.mts";

// *****************************************************************************************
// *****************************************************************************************
// *****************************************************************************************
// ***************************************GRIPPED, SORTED***********************************
// *****************************************************************************************
// *****************************************************************************************
// *****************************************************************************************

async function body() {


  if ($.flag_4x4_mission1_passed == 0) {
    Stat.RegisterMissionGiven();
  }


  // SCRIPT_NAME t4x4_1
  ONMISSION = 1;
  $.flag_usj_off = 1;
  Text.LoadMissionText("MIAMI_1");


  Text.PrintBig("T4X4_1", 5000, 2);


  await asyncWait(0);

  //Set Variables


  $.counter_4x4_pickups = 0;
  $.timer_4x4 = 120000;
  $.flag_intro = 0;
  $.flag_timer = 0;
  $.flag_4x4one_trigger = 1;
  $.flag_intro_jump = 0;
  $.intro_time_lapsed = 0;


  //timer_bonus = 5000 //ammount added to timer for each pickup

  $.checkpoint_time_limit = 120;
  $.pcj_reward = 100;
  $.pcj_minutes = 0;


  $.flag_truck_1 = 0;
  $.flag_truck_2 = 0;


  $.flag_blip_1 = 0;
  $.flag_blip_2 = 0;
  $.flag_blip_3 = 0;
  $.flag_blip_4 = 0;
  $.flag_blip_5 = 0;
  $.flag_blip_6 = 0;
  $.flag_blip_7 = 0;
  $.flag_blip_8 = 0;
  $.flag_blip_9 = 0;
  $.flag_blip_10 = 0;
  $.flag_blip_11 = 0;
  $.flag_blip_12 = 0;
  $.flag_blip_13 = 0;
  $.flag_blip_14 = 0;
  $.flag_blip_15 = 0;
  $.flag_blip_16 = 0;
  $.flag_blip_17 = 0;
  $.flag_blip_18 = 0;
  $.flag_blip_19 = 0;
  $.flag_blip_20 = 0;
  $.flag_blip_21 = 0;
  $.flag_blip_22 = 0;
  $.flag_blip_23 = 0;
  $.flag_blip_24 = 0;

  //record_temp = 0
  //Set Coords


  $.cam_4x4_x = 450.0;
  $.cam_4x4_y = -389.0;
  $.cam_4x4_z = 26.5;


  $.x_1 = 460.0;
  $.y_1 = -400.4;
  $.z_1 = 18.0;


  $.x_2 = 460.0;
  $.y_2 = -441.5;
  $.z_2 = 17.5;


  $.x_3 = 453.0;
  $.y_3 = -517.83;
  $.z_3 = 21.0;


  $.x_4 = 429.5;
  $.y_4 = -580.6;
  $.z_4 = 11.0;


  $.x_5 = 392.0;
  $.y_5 = -661.3;
  $.z_5 = 11.5;


  $.x_6 = 366.5;
  $.y_6 = -719.2;
  $.z_6 = 23.3;


  $.x_7 = 349.5;
  $.y_7 = -762.2;
  $.z_7 = 24.0;


  $.x_8 = 342.26;
  $.y_8 = -802.3;
  $.z_8 = 11.5;


  $.x_9 = 316.0;
  $.y_9 = -858.0;
  $.z_9 = 11.5;


  $.x_10 = 285.0;
  $.y_10 = -890.0;
  $.z_10 = 11.5;


  $.x_11 = 256.7;
  $.y_11 = -955.0;
  $.z_11 = 17.0;


  $.x_12 = 242.5;
  $.y_12 = -1111.8;
  $.z_12 = 11.5;


  $.x_13 = 228.6;
  $.y_13 = -1147.9;
  $.z_13 = 11.5;


  $.x_14 = 193.5;
  $.y_14 = -1303.3;
  $.z_14 = 11.2;


  $.x_15 = 201.44;
  $.y_15 = -1318.7;
  $.z_15 = 11.2;


  $.x_16 = 188.6;
  $.y_16 = -1357.5;
  $.z_16 = 11.2;


  $.x_17 = 167.2;
  $.y_17 = -1369.2;
  $.z_17 = 11.2;


  $.x_18 = 129.6;
  $.y_18 = -1337.8;
  $.z_18 = 9.5;


  $.x_19 = 104.45;
  $.y_19 = -1319.7;
  $.z_19 = 5.5;


  $.x_20 = 78.7;
  $.y_20 = -1300.0;
  $.z_20 = 13.5;


  $.x_21 = 70.1;
  $.y_21 = -1220.4;
  $.z_21 = 11.0;


  $.x_22 = 12.5;
  $.y_22 = -1192.0;
  $.z_22 = 11.4;


  $.x_23 = 4.96;
  $.y_23 = -1253.5;
  $.z_23 = 21.6;


  $.x_24 = 19.8;
  $.y_24 = -1308.9;
  $.z_24 = 17.3;

  //Mission Script


  $.wanted_4x4 = $.player1.storeWantedLevel();
  $.player1.clearWantedLevel();
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
  $.player_4x4 = $.player1.storeCarIsIn();
  if (!(Car.IsDead($.player_4x4))) {
    $.player_4x4.lockDoors(1 /* CARLOCK_UNLOCKED */);
  }


  $.player1.setControl(false /* off */);
  Hud.SwitchWidescreen(true /* on */);



  $.blip_1 = Blip.AddForCoord($.x_1, $.y_1, $.z_1);
  $.blip_2 = Blip.AddForCoord($.x_2, $.y_2, $.z_2);
  $.blip_3 = Blip.AddForCoord($.x_3, $.y_3, $.z_3);
  $.blip_4 = Blip.AddForCoord($.x_4, $.y_4, $.z_4);
  $.blip_5 = Blip.AddForCoord($.x_5, $.y_5, $.z_5);
  $.blip_6 = Blip.AddForCoord($.x_6, $.y_6, $.z_6);
  $.blip_7 = Blip.AddForCoord($.x_7, $.y_7, $.z_7);
  $.blip_8 = Blip.AddForCoord($.x_8, $.y_8, $.z_8);
  $.blip_9 = Blip.AddForCoord($.x_9, $.y_9, $.z_9);
  $.blip_10 = Blip.AddForCoord($.x_10, $.y_10, $.z_10);
  $.blip_11 = Blip.AddForCoord($.x_11, $.y_11, $.z_11);
  $.blip_12 = Blip.AddForCoord($.x_12, $.y_12, $.z_12);
  $.blip_13 = Blip.AddForCoord($.x_13, $.y_13, $.z_13);
  $.blip_14 = Blip.AddForCoord($.x_14, $.y_14, $.z_14);
  $.blip_15 = Blip.AddForCoord($.x_15, $.y_15, $.z_15);
  $.blip_16 = Blip.AddForCoord($.x_16, $.y_16, $.z_16);
  $.blip_17 = Blip.AddForCoord($.x_17, $.y_17, $.z_17);
  $.blip_18 = Blip.AddForCoord($.x_18, $.y_18, $.z_18);
  $.blip_19 = Blip.AddForCoord($.x_19, $.y_19, $.z_19);
  $.blip_20 = Blip.AddForCoord($.x_20, $.y_20, $.z_20);
  $.blip_21 = Blip.AddForCoord($.x_21, $.y_21, $.z_21);
  $.blip_22 = Blip.AddForCoord($.x_22, $.y_22, $.z_22);
  $.blip_23 = Blip.AddForCoord($.x_23, $.y_23, $.z_23);
  $.blip_24 = Blip.AddForCoord($.x_24, $.y_24, $.z_24);



  Streaming.RequestModel(YANKEE);
  while (!(Streaming.HasModelLoaded(YANKEE))) {
    await asyncWait(0);
  }


  while ($.counter_4x4_pickups < 24) {
    await asyncWait(0);
    if ($.flag_timer == 1) {
      if ($.timer_4x4 < 1) {
        Text.PrintNow("taxi2", 3000, 1);
        // SCM GOTO → mission_4x4one_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_4x4one_failed"); // fallback: would break linear control flow
      }
    }
    if ($.counter_4x4_pickups == 1 && $.flag_timer == 0) {
      Hud.DisplayTimer($.$id.timer_4x4, 1 /* TIMER_DOWN */);
      $.flag_timer = 1;
    }
    if ($.player1.isInModel(PCJ600) || $.flag_intro < 4) {
      if ($.flag_blip_1 == 0) {
        Fx.DrawCorona($.x_1, $.y_1, $.z_1, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
        if ($.player1.locateInCar3D($.x_1, $.y_1, $.z_1, 2.5, 2.5, 3.5, false /* false */)) {
          $.blip_1.remove();
          ++$.counter_4x4_pickups;
          Sound.AddOneOffSound($.x_1, $.y_1, $.z_1, 1 /* SOUND_PART_MISSION_COMPLETE */);
          //timer_4x4 = timer_4x4 + timer_bonus
          $.flag_blip_1 = 1;
          Text.PrintWithNumberNow("T4X4_1C", $.counter_4x4_pickups, 3000, 1);
        }
      }
      if ($.flag_blip_2 == 0) {
        Fx.DrawCorona($.x_2, $.y_2, $.z_2, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
        if ($.player1.locateInCar3D($.x_2, $.y_2, $.z_2, 2.5, 2.5, 3.5, false /* false */)) {
          $.blip_2.remove();
          ++$.counter_4x4_pickups;
          Sound.AddOneOffSound($.x_2, $.y_2, $.z_2, 1 /* SOUND_PART_MISSION_COMPLETE */);
          //timer_4x4 = timer_4x4 + timer_bonus
          $.flag_blip_2 = 1;
          Text.PrintWithNumberNow("T4X4_1C", $.counter_4x4_pickups, 3000, 1);
        }
      }
      if ($.flag_blip_3 == 0) {
        Fx.DrawCorona($.x_3, $.y_3, $.z_3, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
        if ($.player1.locateInCar3D($.x_3, $.y_3, $.z_3, 2.5, 2.5, 3.5, false /* false */)) {
          $.blip_3.remove();
          ++$.counter_4x4_pickups;
          Sound.AddOneOffSound($.x_3, $.y_3, $.z_3, 1 /* SOUND_PART_MISSION_COMPLETE */);
          //timer_4x4 = timer_4x4 + timer_bonus
          $.flag_blip_3 = 1;
          Text.PrintWithNumberNow("T4X4_1C", $.counter_4x4_pickups, 3000, 1);
        }
      }
      if ($.flag_blip_4 == 0) {
        Fx.DrawCorona($.x_4, $.y_4, $.z_4, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
        if ($.player1.locateInCar3D($.x_4, $.y_4, $.z_4, 2.5, 2.5, 3.5, false /* false */)) {
          $.blip_4.remove();
          ++$.counter_4x4_pickups;
          Sound.AddOneOffSound($.x_4, $.y_4, $.z_4, 1 /* SOUND_PART_MISSION_COMPLETE */);
          //timer_4x4 = timer_4x4 + timer_bonus
          $.flag_blip_4 = 1;
          Text.PrintWithNumberNow("T4X4_1C", $.counter_4x4_pickups, 3000, 1);
        }
      }
      if ($.flag_blip_5 == 0) {
        Fx.DrawCorona($.x_5, $.y_5, $.z_5, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
        if ($.player1.locateInCar3D($.x_5, $.y_5, $.z_5, 2.5, 2.5, 3.5, false /* false */)) {
          $.blip_5.remove();
          ++$.counter_4x4_pickups;
          Sound.AddOneOffSound($.x_5, $.y_5, $.z_5, 1 /* SOUND_PART_MISSION_COMPLETE */);
          //timer_4x4 = timer_4x4 + timer_bonus
          $.flag_blip_5 = 1;
          Text.PrintWithNumberNow("T4X4_1C", $.counter_4x4_pickups, 3000, 1);
        }
      }
      if ($.flag_blip_6 == 0) {
        Fx.DrawCorona($.x_6, $.y_6, $.z_6, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
        if ($.player1.locateInCar3D($.x_6, $.y_6, $.z_6, 2.5, 2.5, 3.5, false /* false */)) {
          $.blip_6.remove();
          ++$.counter_4x4_pickups;
          Sound.AddOneOffSound($.x_6, $.y_6, $.z_6, 1 /* SOUND_PART_MISSION_COMPLETE */);
          //timer_4x4 = timer_4x4 + timer_bonus
          $.flag_blip_6 = 1;
          Text.PrintWithNumberNow("T4X4_1C", $.counter_4x4_pickups, 3000, 1);
        }
      }
      if ($.flag_blip_7 == 0) {
        Fx.DrawCorona($.x_7, $.y_7, $.z_7, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
        if ($.player1.locateInCar3D($.x_7, $.y_7, $.z_7, 2.5, 2.5, 3.5, false /* false */)) {
          $.blip_7.remove();
          ++$.counter_4x4_pickups;
          Sound.AddOneOffSound($.x_7, $.y_7, $.z_7, 1 /* SOUND_PART_MISSION_COMPLETE */);
          //timer_4x4 = timer_4x4 + timer_bonus
          $.flag_blip_7 = 1;
          Text.PrintWithNumberNow("T4X4_1C", $.counter_4x4_pickups, 3000, 1);
        }
      }
      if ($.flag_blip_8 == 0) {
        Fx.DrawCorona($.x_8, $.y_8, $.z_8, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
        if ($.player1.locateInCar3D($.x_8, $.y_8, $.z_8, 2.5, 2.5, 3.5, false /* false */)) {
          $.blip_8.remove();
          ++$.counter_4x4_pickups;
          Sound.AddOneOffSound($.x_8, $.y_8, $.z_8, 1 /* SOUND_PART_MISSION_COMPLETE */);
          //timer_4x4 = timer_4x4 + timer_bonus
          $.flag_blip_8 = 1;
          Text.PrintWithNumberNow("T4X4_1C", $.counter_4x4_pickups, 3000, 1);
        }
      }
      if ($.flag_blip_9 == 0) {
        Fx.DrawCorona($.x_9, $.y_9, $.z_9, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
        if ($.player1.locateInCar3D($.x_9, $.y_9, $.z_9, 2.5, 2.5, 3.5, false /* false */)) {
          $.blip_9.remove();
          ++$.counter_4x4_pickups;
          Sound.AddOneOffSound($.x_9, $.y_9, $.z_9, 1 /* SOUND_PART_MISSION_COMPLETE */);
          //timer_4x4 = timer_4x4 + timer_bonus
          $.flag_blip_9 = 1;
          Text.PrintWithNumberNow("T4X4_1C", $.counter_4x4_pickups, 3000, 1);
        }
      }
      if ($.flag_blip_10 == 0) {
        Fx.DrawCorona($.x_10, $.y_10, $.z_10, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
        if ($.player1.locateInCar3D($.x_10, $.y_10, $.z_10, 2.5, 2.5, 3.5, false /* false */)) {
          $.blip_10.remove();
          ++$.counter_4x4_pickups;
          Sound.AddOneOffSound($.x_10, $.y_10, $.z_10, 1 /* SOUND_PART_MISSION_COMPLETE */);
          //timer_4x4 = timer_4x4 + timer_bonus
          $.flag_blip_10 = 1;
          Text.PrintWithNumberNow("T4X4_1C", $.counter_4x4_pickups, 3000, 1);
        }
      }
      if ($.flag_blip_11 == 0) {
        Fx.DrawCorona($.x_11, $.y_11, $.z_11, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
        if ($.player1.locateInCar3D($.x_11, $.y_11, $.z_11, 2.5, 2.5, 3.5, false /* false */)) {
          $.blip_11.remove();
          ++$.counter_4x4_pickups;
          Sound.AddOneOffSound($.x_11, $.y_11, $.z_11, 1 /* SOUND_PART_MISSION_COMPLETE */);
          //timer_4x4 = timer_4x4 + timer_bonus
          $.flag_blip_11 = 1;
          Text.PrintWithNumberNow("T4X4_1C", $.counter_4x4_pickups, 3000, 1);
        }
      }
      if ($.flag_blip_12 == 0) {
        Fx.DrawCorona($.x_12, $.y_12, $.z_12, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
        if ($.player1.locateInCar3D($.x_12, $.y_12, $.z_12, 2.5, 2.5, 3.5, false /* false */)) {
          $.blip_12.remove();
          ++$.counter_4x4_pickups;
          Sound.AddOneOffSound($.x_12, $.y_12, $.z_12, 1 /* SOUND_PART_MISSION_COMPLETE */);
          //timer_4x4 = timer_4x4 + timer_bonus
          $.flag_blip_12 = 1;
          Text.PrintWithNumberNow("T4X4_1C", $.counter_4x4_pickups, 3000, 1);
        }
      }
      if ($.flag_blip_13 == 0) {
        Fx.DrawCorona($.x_13, $.y_13, $.z_13, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
        if ($.player1.locateInCar3D($.x_13, $.y_13, $.z_13, 2.5, 2.5, 3.5, false /* false */)) {
          $.blip_13.remove();
          ++$.counter_4x4_pickups;
          Sound.AddOneOffSound($.x_13, $.y_13, $.z_13, 1 /* SOUND_PART_MISSION_COMPLETE */);
          //timer_4x4 = timer_4x4 + timer_bonus
          $.flag_blip_13 = 1;
          Text.PrintWithNumberNow("T4X4_1C", $.counter_4x4_pickups, 3000, 1);
        }
      }
      if ($.flag_blip_14 == 0) {
        Fx.DrawCorona($.x_14, $.y_14, $.z_14, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
        if ($.player1.locateInCar3D($.x_14, $.y_14, $.z_14, 2.5, 2.5, 3.5, false /* false */)) {
          $.blip_14.remove();
          ++$.counter_4x4_pickups;
          Sound.AddOneOffSound($.x_14, $.y_14, $.z_14, 1 /* SOUND_PART_MISSION_COMPLETE */);
          //timer_4x4 = timer_4x4 + timer_bonus
          $.flag_blip_14 = 1;
          Text.PrintWithNumberNow("T4X4_1C", $.counter_4x4_pickups, 3000, 1);
        }
      }
      if ($.flag_blip_15 == 0) {
        Fx.DrawCorona($.x_15, $.y_15, $.z_15, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
        if ($.player1.locateInCar3D($.x_15, $.y_15, $.z_15, 2.5, 2.5, 3.5, false /* false */)) {
          $.blip_15.remove();
          ++$.counter_4x4_pickups;
          Sound.AddOneOffSound($.x_15, $.y_15, $.z_15, 1 /* SOUND_PART_MISSION_COMPLETE */);
          //timer_4x4 = timer_4x4 + timer_bonus
          $.flag_blip_15 = 1;
          Text.PrintWithNumberNow("T4X4_1C", $.counter_4x4_pickups, 3000, 1);
        }
      }
      if ($.flag_blip_16 == 0) {
        Fx.DrawCorona($.x_16, $.y_16, $.z_16, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
        if ($.player1.locateInCar3D($.x_16, $.y_16, $.z_16, 2.5, 2.5, 3.5, false /* false */)) {
          $.blip_16.remove();
          ++$.counter_4x4_pickups;
          Sound.AddOneOffSound($.x_16, $.y_16, $.z_16, 1 /* SOUND_PART_MISSION_COMPLETE */);
          //timer_4x4 = timer_4x4 + timer_bonus
          $.flag_blip_16 = 1;
          Text.PrintWithNumberNow("T4X4_1C", $.counter_4x4_pickups, 3000, 1);
        }
      }
      if ($.flag_blip_17 == 0) {
        Fx.DrawCorona($.x_17, $.y_17, $.z_17, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
        if ($.player1.locateInCar3D($.x_17, $.y_17, $.z_17, 2.5, 2.5, 3.5, false /* false */)) {
          $.blip_17.remove();
          ++$.counter_4x4_pickups;
          Sound.AddOneOffSound($.x_17, $.y_17, $.z_17, 1 /* SOUND_PART_MISSION_COMPLETE */);
          //timer_4x4 = timer_4x4 + timer_bonus
          $.flag_blip_17 = 1;
          Text.PrintWithNumberNow("T4X4_1C", $.counter_4x4_pickups, 3000, 1);
        }
      }
      if ($.flag_blip_18 == 0) {
        Fx.DrawCorona($.x_18, $.y_18, $.z_18, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
        if ($.player1.locateInCar3D($.x_18, $.y_18, $.z_18, 2.5, 2.5, 3.5, false /* false */)) {
          $.blip_18.remove();
          ++$.counter_4x4_pickups;
          Sound.AddOneOffSound($.x_18, $.y_18, $.z_18, 1 /* SOUND_PART_MISSION_COMPLETE */);
          //timer_4x4 = timer_4x4 + timer_bonus
          $.flag_blip_18 = 1;
          Text.PrintWithNumberNow("T4X4_1C", $.counter_4x4_pickups, 3000, 1);
        }
      }
      if ($.flag_blip_19 == 0) {
        Fx.DrawCorona($.x_19, $.y_19, $.z_19, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
        if ($.player1.locateInCar3D($.x_19, $.y_19, $.z_19, 2.5, 2.5, 3.5, false /* false */)) {
          $.blip_19.remove();
          ++$.counter_4x4_pickups;
          Sound.AddOneOffSound($.x_19, $.y_19, $.z_19, 1 /* SOUND_PART_MISSION_COMPLETE */);
          //timer_4x4 = timer_4x4 + timer_bonus
          $.flag_blip_19 = 1;
          Text.PrintWithNumberNow("T4X4_1C", $.counter_4x4_pickups, 3000, 1);
        }
      }
      if ($.flag_blip_20 == 0) {
        Fx.DrawCorona($.x_20, $.y_20, $.z_20, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
        if ($.player1.locateInCar3D($.x_20, $.y_20, $.z_20, 2.5, 2.5, 3.5, false /* false */)) {
          $.blip_20.remove();
          ++$.counter_4x4_pickups;
          Sound.AddOneOffSound($.x_20, $.y_20, $.z_20, 1 /* SOUND_PART_MISSION_COMPLETE */);
          //timer_4x4 = timer_4x4 + timer_bonus
          $.flag_blip_20 = 1;
          Text.PrintWithNumberNow("T4X4_1C", $.counter_4x4_pickups, 3000, 1);
        }
      }
      if ($.flag_blip_21 == 0) {
        Fx.DrawCorona($.x_21, $.y_21, $.z_21, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
        if ($.player1.locateInCar3D($.x_21, $.y_21, $.z_21, 2.5, 2.5, 3.5, false /* false */)) {
          $.blip_21.remove();
          ++$.counter_4x4_pickups;
          Sound.AddOneOffSound($.x_21, $.y_21, $.z_21, 1 /* SOUND_PART_MISSION_COMPLETE */);
          //timer_4x4 = timer_4x4 + timer_bonus
          $.flag_blip_21 = 1;
          Text.PrintWithNumberNow("T4X4_1C", $.counter_4x4_pickups, 3000, 1);
        }
      }
      if ($.flag_blip_22 == 0) {
        Fx.DrawCorona($.x_22, $.y_22, $.z_22, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
        if ($.player1.locateInCar3D($.x_22, $.y_22, $.z_22, 2.5, 2.5, 3.5, false /* false */)) {
          $.blip_22.remove();
          ++$.counter_4x4_pickups;
          Sound.AddOneOffSound($.x_22, $.y_22, $.z_22, 1 /* SOUND_PART_MISSION_COMPLETE */);
          //timer_4x4 = timer_4x4 + timer_bonus
          $.flag_blip_22 = 1;
          Text.PrintWithNumberNow("T4X4_1C", $.counter_4x4_pickups, 3000, 1);
        }
      }
      if ($.flag_blip_23 == 0) {
        Fx.DrawCorona($.x_23, $.y_23, $.z_23, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
        if ($.player1.locateInCar3D($.x_23, $.y_23, $.z_23, 2.5, 2.5, 3.5, false /* false */)) {
          $.blip_23.remove();
          ++$.counter_4x4_pickups;
          Sound.AddOneOffSound($.x_23, $.y_23, $.z_23, 1 /* SOUND_PART_MISSION_COMPLETE */);
          //timer_4x4 = timer_4x4 + timer_bonus
          $.flag_blip_23 = 1;
          Text.PrintWithNumberNow("T4X4_1C", $.counter_4x4_pickups, 3000, 1);
        }
      }
      if ($.flag_blip_24 == 0) {
        Fx.DrawCorona($.x_24, $.y_24, $.z_24, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
        if ($.player1.locateInCar3D($.x_24, $.y_24, $.z_24, 2.5, 2.5, 3.5, false /* false */)) {
          $.blip_24.remove();
          ++$.counter_4x4_pickups;
          Sound.AddOneOffSound($.x_24, $.y_24, $.z_24, 1 /* SOUND_PART_MISSION_COMPLETE */);
          //timer_4x4 = timer_4x4 + timer_bonus
          $.flag_blip_24 = 1;
          Text.PrintWithNumberNow("T4X4_1C", $.counter_4x4_pickups, 3000, 1);
        }
      }
    }
    if ($.flag_intro1_before == 1) {
      if ($.flag_intro_jump == 0 && $.flag_intro < 4) {
        if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
          $.intro_time_lapsed = 9501;
          $.flag_intro = 3;
          $.flag_intro_jump = 1;
        }
      }
    }
    if ($.flag_intro == 0) {
      $.timer_intro_start = Clock.GetGameTimer();
      Camera.SetFixedPosition($.cam_4x4_x, $.cam_4x4_y, $.cam_4x4_z, 0.0, 0.0, 0.0);
      Audio.SetMusicDoesFade(false /* FALSE */);
      Camera.SetFadingColor(0, 0, 0);
      Camera.DoFade(1000, 0 /* FADE_OUT */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      //WARP_PLAYER_FROM_CAR_TO_COORD player1 cam_4x4_X cam_4x4_y -100.0
      Streaming.LoadScene($.cam_4x4_x, $.cam_4x4_y, $.cam_4x4_z);
      Camera.PointAtPoint(459.5, -382.2, 14.0, 2 /* JUMP_CUT */);
      Camera.DoFade(1000, 1 /* FADE_IN */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      Text.PrintWithNumberNow("T4X4_1A", $.checkpoint_time_limit, 5000, 1);
      $.flag_intro = 1;
    }
    if ($.flag_intro_jump == 0) {
      $.timer_intro_now = Clock.GetGameTimer();
      $.intro_time_lapsed = $.timer_intro_now - $.timer_intro_start;
    }
    if ($.intro_time_lapsed > 4000 && $.flag_intro == 1) {
      Camera.PointAtPoint($.x_1, $.y_1, $.z_1, 1 /* INTERPOLATION */);
      $.flag_intro = 2;
    }
    if ($.intro_time_lapsed > 7000 && $.flag_intro == 2) {
      Camera.PointAtPoint($.x_3, $.y_3, $.z_3, 1 /* INTERPOLATION */);
      Text.PrintNow("T4X4_1B", 5000, 1);
      $.flag_intro = 3;
    }


    if ($.intro_time_lapsed > 9500 && $.flag_intro == 3) {
      Camera.DoFade(1000, 0 /* FADE_OUT */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      Text.ClearPrints();
      //WARP_PLAYER_INTO_CAR player1 player_4x4
      const _res330 = $.player1.getCoordinates();
$.player_x = _res330.x;
$.player_y = _res330.y;
$.player_z = _res330.z;
      Streaming.LoadScene($.player_x, $.player_y, $.player_z);
      Camera.RestoreJumpcut();
      Hud.SwitchWidescreen(false /* OFF */);
      $.player1.setControl(true /* ON */);
      if (!(Car.IsDead($.player_4x4))) {
        $.player_4x4.lockDoors(1 /* CARLOCK_UNLOCKED */);
      }
      $.player1.alterWantedLevel($.wanted_4x4);
      Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
      Camera.SetFadingColor(0, 0, 0);
      Camera.DoFade(1000, 1 /* FADE_IN */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      Audio.SetMusicDoesFade(true /* TRUE */);
      $.flag_intro = 4;
      $.flag_intro1_before = 1;
    }
    if ($.flag_truck_1 == 0) {
      if ($.player1.locateAnyMeans2D(274.0, -905.0, 10.0, 10.0, false /* FALSE */)) {
        //IF NOT IS_POINT_ON_SCREEN 266.0 -961.0 10.0	3.0
        World.ClearArea(278.0, -961.0, 10.0, 3.0, true /* TRUE */);
        $.truck_1 = Car.Create(YANKEE, 278.0, -961.0, 10.0);
        $.truck_driver1 = Char.CreateInsideCar($.truck_1, 4 /* PEDTYPE_CIVMALE */, MALE01);
        //SET_CAR_CRUISE_SPEED truck_1 0.0
        //CAR_SET_IDLE truck_1
        $.truck_1.setHeading(70.0);
        $.truck_1.setForwardSpeed(15.0);
        $.truck_1.gotoCoordinates(121.5, -912.88, 10.0);
        //SET_CAR_TEMP_ACTION truck_1 TEMPACT_GOFORWARD 10000
        //SET_CAR_DRIVE_STRAIGHT_AHEAD truck_1 true
        $.flag_truck_1 = 1;
      }
    }
    if ($.flag_truck_1 == 1) {
      if (!(Car.IsDead($.truck_1))) {
        if ($.truck_1.locate2D(121.5, -912.88, 4.0, 4.0, false /* FALSE */)) {
          $.truck_1.wanderRandomly();
          $.flag_truck_1 = 2;
        }
      }
    }
    if ($.flag_truck_2 == 0) {
      if ($.player1.locateAnyMeans2D(239.0, -1081.0, 10.0, 10.0, false /* FALSE */)) {
        //IF NOT IS_POINT_ON_SCREEN 210.1 -1136.5 10.3 3.0
        $.truck_2 = Car.Create(YANKEE, 210.1, -1136.5, 10.3);
        $.truck_driver2 = Char.CreateInsideCar($.truck_2, 4 /* PEDTYPE_CIVMALE */, MALE01);
        //SET_CAR_CRUISE_SPEED truck_2 0.0
        $.truck_2.setHeading(260.0);
        $.truck_2.setForwardSpeed(10.0);
        $.truck_2.setTempAction(8 /* TEMPACT_GOFORWARD */, 20000);
        //ADD_BLIP_FOR_CAR truck_2 blip_truck_2
        $.flag_truck_2 = 1;
      }
    }
    if ($.flag_truck_2 == 1) {
      if (!(Car.IsDead($.truck_2))) {
        if ($.truck_2.locate2D(252.4, -1142.4, 4.0, 4.0, false /* FALSE */)) {
          $.truck_2.wanderRandomly();
          $.flag_truck_2 = 2;
        }
      }
    }
    if ($.flag_intro > 3) {
      if (!($.player1.isInModel(PCJ600))) {
        while (!($.player1.isInModel(PCJ600))) {
          await asyncWait(0);
          if ($.flag_timer == 1) {
            $.timer_4x4_secs = $.timer_4x4 / 1000;
            if ($.timer_4x4_secs > 0) {
              Text.PrintWithNumberNow("GETBIK1", $.timer_4x4_secs, 2000, 1);
            }
            else {
              Text.PrintNow("T4x4_F", 3000, 1);
              // SCM GOTO → mission_4x4one_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_4x4one_failed"); // fallback: would break linear control flow
            }
          }
          else {
            Text.PrintNow("GETBIK3", 1000, 1);
          }
          if ($.player1.isInAnyCar() && !($.player1.isInModel(PCJ600))) {
            Text.PrintNow("T4x4_F", 3000, 1);
            // SCM GOTO → mission_4x4one_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_4x4one_failed"); // fallback: would break linear control flow
          }


        }
      }
    }



  }


  if ($.counter_4x4_pickups == 24) {
    // SCM GOTO → mission_4x4one_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_4x4one_passed"); // fallback: would break linear control flow
  }
}


// --------------------------Mission failed-----------------------------------------------


async function onFailed() {



  Text.PrintBig("M_FAIL", 2000, 1);
}






// -------------------------Mission passed-------------------------------------------------


async function mission_4x4one_passed() {


  $.timer_4x4 = $.timer_4x4 * -1;
  $.timer_4x4 = $.timer_4x4 + 120000;
  $.timer_4x4 = $.timer_4x4 / 1000;



  if ($.flag_4x4_mission1_passed == 0) {
    $.record_4x4_one = $.timer_4x4;
    await time_calc();  // SCM GOSUB time_calc
  }


  if ($.flag_4x4_mission1_passed == 1) {
    if ($.timer_4x4 < $.record_4x4_one) {
      $.record_4x4_one = $.timer_4x4;
      await time_calc();  // SCM GOSUB time_calc
    }
    else {
      $.pcj_reward = 100;
    }
  }


  Text.PrintWithNumberBig("M_PASS", $.pcj_reward, 5000, 1); //"Mission Passed!"
  $.player1.clearWantedLevel();
  $.player1.addScore($.pcj_reward);
  //REGISTER_4X4_THREE_TIME record_4x4_one


  if ($.flag_4x4_mission1_passed == 0) {
    Stat.RegisterOddjobMissionPassed();
    $.flag_4x4_mission1_passed = 1;
    Stat.PlayerMadeProgress(1);
  }

  //START_NEW_SCRIPT t4x4_mission2_loop
  //START_NEW_SCRIPT multistorey_mission_loop
}




// mission cleanup


async function cleanup() {


  Camera.RestoreJumpcut();
  Hud.SwitchWidescreen(false /* off */);
  $.player1.setControl(true /* on */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);


  $.blip_1.remove();
  $.blip_2.remove();
  $.blip_3.remove();
  $.blip_4.remove();
  $.blip_5.remove();
  $.blip_6.remove();
  $.blip_7.remove();
  $.blip_8.remove();
  $.blip_9.remove();
  $.blip_10.remove();
  $.blip_11.remove();
  $.blip_12.remove();
  $.blip_13.remove();
  $.blip_14.remove();
  $.blip_15.remove();
  $.blip_16.remove();
  $.blip_17.remove();
  $.blip_18.remove();
  $.blip_19.remove();
  $.blip_20.remove();
  $.blip_21.remove();
  $.blip_22.remove();
  $.blip_23.remove();
  $.blip_24.remove();


  $.truck_driver1.markAsNoLongerNeeded();
  $.truck_driver2.markAsNoLongerNeeded();
  Streaming.MarkModelAsNoLongerNeeded(YANKEE);


  Hud.ClearTimer($.$id.timer_4x4);
  ONMISSION = 0;
  $.flag_launch_4x4_1_ok = 0;
  $.flag_usj_off = 0;
  //flag_player_on_4x4_mission = 0


  Mission.Finish();
}






async function time_calc() {
  //set_record_4x4 = record_4x4_one * 1000

  Stat.RegisterFastestTime(16, $.record_4x4_one);
  $.pcj_seconds = $.record_4x4_one;
  $.pcj_minutes = 0;
}

async function time_cactus() {
  if ($.pcj_seconds > 59) {
    $.pcj_seconds = $.pcj_seconds - 60;
    ++$.pcj_minutes;
    // SCM GOTO → time_cactus (not lowered; manual jump required)
    throw new Error("unresolved GOTO time_cactus"); // fallback: would break linear control flow
  }
  Text.PrintWith2NumbersNow("NEW_REC", $.pcj_minutes, $.pcj_seconds, 5000, 1);
  $.pcj_reward = 1000;
}

export async function miami_4x4_1() {
  // Mission start stuff


  await body();  // SCM GOSUB mission_start_4x4one
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await onFailed();  // SCM GOSUB mission_4x4one_failed
  }
  await cleanup();  // SCM GOSUB mission_cleanup_4x4one

  // Variables for mission


  // ********************************* EXCLUSIVE ********************************************
  //VAR_INT set_record_4x4
  //VAR_INT blip_truck_1 blip_truck_2

  // VAR_INT pcj_seconds
  // ****************************************Mission Start************************************


}
