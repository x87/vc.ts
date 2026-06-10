// Generated from main/carpark_1.sc

import { $ } from "../vars.mts";

// *****************************************************************************************
// *****************************************************************************************
// *****************************************************************************************
// ***************************************GRIPPED, SORTED***********************************
// *****************************************************************************************
// *****************************************************************************************
// *****************************************************************************************

async function body() {


  if ($.flag_carpark1_passed == 0) {
    Stat.RegisterMissionGiven();
  }
  // SCRIPT_NAME CARPRK1
  ONMISSION = 1;
  Text.LoadMissionText("CARPAR1");

  //flag_player_on_4x4_mission = 1


  Text.PrintBig("MM_1", 5000, 2);


  await asyncWait(0);

  // ****************SET INT VARIABLES AND FLAGS*********************************************


  $.counter_4x4_pickups = 0;
  $.timer_4x4 = 0;
  $.flag_intro = 0;
  $.flag_timer = 0;
  $.flag_intro_jump = 0;
  $.intro_time_lapsed = 0;


  $.flag_cone_smashed = 0;


  if ($.flag_carpark1_passed == 0) {
    $.timer_bonus = 12000;
    $.print_bonus = 12;
    $.car_park_reward = 200;
  }


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


  $.record_temp = 0;
  // ******************* SET FLOAT VARIABLES +++++++++++++++++++++++++++++++++++++++++++++++++++++


  $.cam_4x4_x = 106.0;
  $.cam_4x4_y = -1242.0;
  $.cam_4x4_z = 35.5;


  $.theta = 0.0;
  $.circle_x = 128.0;
  $.circle_y = -1180.75;


  $.circle_radius = 8.0;


  $.z_cone = -100.0;


  $.x_cone_1 = 108.8;
  $.y_cone_1 = -1232.9;


  $.x_cone_2 = 120.25;
  $.y_cone_2 = -1230.6;


  $.x_cone_3 = 111.2;
  $.y_cone_3 = -1219.7;


  $.x_cone_4 = 138.6;
  $.y_cone_4 = -1211.8;


  $.x_cone_5 = 138.6;
  $.y_cone_5 = -1207.2;


  $.x_cone_6 = 141.6;
  $.y_cone_6 = -1207.2;


  $.x_cone_7 = 141.6;
  $.y_cone_7 = -1211.8;


  $.x_cone_8 = 144.6;
  $.y_cone_8 = -1207.2;


  $.x_cone_9 = 147.6;
  $.y_cone_9 = -1207.2;


  $.x_cone_10 = 113.25;
  $.y_cone_10 = -1146.5;


  $.x_cone_11 = 113.25;
  $.y_cone_11 = -1149.5;


  $.x_cone_12 = 113.25;
  $.y_cone_12 = -1155.5;


  $.x_cone_13 = 109.25;
  $.y_cone_13 = -1155.5;


  $.x_cone_14 = 121.25;
  $.y_cone_14 = -1155.5;


  $.x_cone_15 = 117.25;
  $.y_cone_15 = -1155.5;
  /*
  x_cone_16
  y_cone_16

  x_cone_17
  y_cone_17

  x_cone_18
  y_cone_18

  x_cone_19
  y_cone_19

  x_cone_20
  y_cone_20

  x_cone_21
  y_cone_21

  x_cone_22
  y_cone_22

  x_cone_23
  y_cone_23

  x_cone_24
  y_cone_24
  */

  $.x_1 = 108.8;
  $.y_1 = -1228.8;
  $.z_1 = 33.7;


  $.x_2 = 112.6;
  $.y_2 = -1232.9;
  $.z_2 = 33.7;


  $.x_3 = 140.3;
  $.y_3 = -1209.5;
  $.z_3 = 31.5;


  $.x_4 = 108.8;
  $.y_4 = -1147.5;
  $.z_4 = 31.5;


  $.x_5 = 131.5;
  $.y_5 = -1182.9;
  $.z_5 = 31.5;

  /*
  x_6 = 192.2
  y_6 = -1301.0
  z_6 = 10.6

  x_7 = 246.0
  y_7 = -1428.6
  z_7 = 11.0

  x_8 = 211.8
  y_8 = -1492.8
  z_8 = 11.5

  x_9 = -210.0
  y_9 = -1280.5
  z_9 = 11.0

  x_10 = 119.3
  y_10 = -1617.2
  z_10 = 10.5

  x_11 = 45.0
  y_11 = -1623.2
  z_11 = 7.4

  x_12 = -90.4
  y_12 = -1594.9
  z_12 = 11.3

  x_13 = -159.3
  y_13 = -1499.3
  z_13 = 10.7

  x_14 = -181.7
  y_14 = -1217.4
  z_14 = 10.4

  x_15 = -59.8
  y_15 = -1164.8
  z_15 = 10.4


  x_16 = -49.1
  y_16 = -1084.3
  z_16 = 10.4


  x_17 = 4.7
  y_17 = -1086.4
  z_17 = 10.6


  x_19 = -161.2
  y_19 = -1389.3
  z_19 = 10.4

  x_20 = 6.8
  y_20 = -1162.0
  z_20 = 10.6

  x_21 = 206.0
  y_21 = -1210.4
  z_21 = 11.3

  x_22 = 227.7
  y_22 = -1320.0
  z_22 = 10.7

  IF flag_launch_4x4_1_ok = 2
  x_18 = 7.5
  y_18 = -1244.8
  z_18 = 17.0

  x_23 = 255.75
  y_23 = -957.0
  z_23 = 17.0

  x_24 = 228.5
  y_24 = -1148.8
  z_24 = 11.0
  ELSE
  x_18 = 16.6
  y_18 = -1204.2
  z_18 = 10.4

  x_23 = 262.3
  y_23 = -945.2
  z_23 = 10.8

  x_24 = 220.8
  y_24 = -1144.3
  z_24 = 16.0
  ENDIF
  */
  //Mission Script



  $.player1.setControl(false /* off */);
  Hud.SwitchWidescreen(true /* on */);


  $.wanted_4x4 = $.player1.storeWantedLevel();
  $.player1.clearWantedLevel();
  $.player_4x4 = $.player1.storeCarIsIn();
  if (!(Car.IsDead($.player_4x4))) {
    $.player_4x4.lockDoors(1 /* CARLOCK_UNLOCKED */);
  }


  Text.ClearThisPrint("M_PASS");
  Text.ClearThisPrint("M_FAIL");


  Streaming.RequestModel(1360 /* trafficcone */);
  while (!(Streaming.HasModelLoaded(1360 /* trafficcone */))) {
    await asyncWait(0);
  }


  $.blip_1 = Blip.AddForCoord($.x_1, $.y_1, $.z_1);
  $.blip_2 = Blip.AddForCoord($.x_2, $.y_2, $.z_2);
  $.blip_3 = Blip.AddForCoord($.x_3, $.y_3, $.z_3);
  $.blip_4 = Blip.AddForCoord($.x_4, $.y_4, $.z_4);
  $.blip_5 = Blip.AddForCoord($.x_5, $.y_5, $.z_5);


  while ($.counter_4x4_pickups < 5) {
    await asyncWait(0);
    if ($.flag_timer == 1) {
      if ($.timer_4x4 < 1) {
        Text.PrintNow("taxi2", 3000, 1);
        // SCM GOTO → mission_carpark1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_carpark1_failed"); // fallback: would break linear control flow
      }
    }
    if ($.counter_4x4_pickups == 1 && $.flag_timer == 0) {
      Hud.DisplayTimer($.$id.timer_4x4, TIMER_DOWN);
      TIMERA = 0;
      $.flag_timer = 1;
    }


    if ($.flag_blip_1 == 0) {
      Fx.DrawCorona($.x_1, $.y_1, $.z_1, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player1.locateInCar3D($.x_1, $.y_1, $.z_1, 2.5, 2.5, 3.5, false /* false */)) {
        $.blip_1.remove();
        ++$.counter_4x4_pickups;
        Sound.AddOneOffSound($.x_1, $.y_1, $.z_1, 94 /* SOUND_PART_MISSION_COMPLETE */);
        $.timer_4x4 = $.timer_4x4 + $.timer_bonus;
        $.flag_blip_1 = 1;
        //PRINT_WITH_NUMBER_NOW (T4X4_3C) counter_4x4_pickups 3000 1

      }
    }
    if ($.flag_blip_2 == 0) {
      Fx.DrawCorona($.x_2, $.y_2, $.z_2, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player1.locateInCar3D($.x_2, $.y_2, $.z_2, 2.5, 2.5, 3.5, false /* false */)) {
        $.blip_2.remove();
        ++$.counter_4x4_pickups;
        Sound.AddOneOffSound($.x_2, $.y_2, $.z_2, 94 /* SOUND_PART_MISSION_COMPLETE */);
        $.timer_4x4 = $.timer_4x4 + $.timer_bonus;
        $.flag_blip_2 = 1;
        //PRINT_WITH_NUMBER_NOW (T4X4_3C) counter_4x4_pickups 3000 1

      }
    }
    if ($.flag_blip_3 == 0) {
      Fx.DrawCorona($.x_3, $.y_3, $.z_3, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player1.locateInCar3D($.x_3, $.y_3, $.z_3, 2.5, 2.5, 3.5, false /* false */)) {
        $.blip_3.remove();
        ++$.counter_4x4_pickups;
        Sound.AddOneOffSound($.x_3, $.y_3, $.z_3, 94 /* SOUND_PART_MISSION_COMPLETE */);
        $.timer_4x4 = $.timer_4x4 + $.timer_bonus;
        $.flag_blip_3 = 1;
        //PRINT_WITH_NUMBER_NOW (T4X4_3C) counter_4x4_pickups 3000 1

      }
    }
    if ($.flag_blip_4 == 0) {
      Fx.DrawCorona($.x_4, $.y_4, $.z_4, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player1.locateInCar3D($.x_4, $.y_4, $.z_4, 2.5, 2.5, 3.5, false /* false */)) {
        $.blip_4.remove();
        ++$.counter_4x4_pickups;
        Sound.AddOneOffSound($.x_4, $.y_4, $.z_4, 94 /* SOUND_PART_MISSION_COMPLETE */);
        $.timer_4x4 = $.timer_4x4 + $.timer_bonus;
        $.flag_blip_4 = 1;
        //PRINT_WITH_NUMBER_NOW (T4X4_3C) counter_4x4_pickups 3000 1

      }
    }
    if ($.flag_blip_5 == 0) {
      Fx.DrawCorona($.x_5, $.y_5, $.z_5, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player1.locateInCar3D($.x_5, $.y_5, $.z_5, 2.5, 2.5, 3.5, false /* false */)) {
        $.blip_5.remove();
        ++$.counter_4x4_pickups;
        Sound.AddOneOffSound($.x_5, $.y_5, $.z_5, 94 /* SOUND_PART_MISSION_COMPLETE */);
        $.timer_4x4 = $.timer_4x4 + $.timer_bonus;
        $.flag_blip_5 = 1;
        //PRINT_WITH_NUMBER_NOW (T4X4_3C) counter_4x4_pickups 3000 1

      }
    }
    /*

    IF flag_blip_6 = 0
    DRAW_CORONA x_6 y_6 z_6 1.0 CORONATYPE_HEX FLARETYPE_NONE 0 200 200
    IF LOCATE_PLAYER_IN_CAR_3D player1 x_6 y_6 z_6 2.5 2.5 3.5 false
    REMOVE_BLIP blip_6
    ++ counter_4x4_pickups
    ADD_ONE_OFF_SOUND x_6 y_6 z_6 SOUND_PART_MISSION_COMPLETE
    timer_4x4 = timer_4x4 + timer_bonus
    flag_blip_6 = 1
    PRINT_WITH_NUMBER_NOW (T4X4_3C) counter_4x4_pickups 3000 1
    ENDIF
    ENDIF

    IF flag_blip_7 = 0
    DRAW_CORONA x_7 y_7 z_7 1.0 CORONATYPE_HEX FLARETYPE_NONE 0 200 200
    IF LOCATE_PLAYER_IN_CAR_3D player1 x_7 y_7 z_7 2.5 2.5 3.5 false
    REMOVE_BLIP blip_7
    ++ counter_4x4_pickups
    ADD_ONE_OFF_SOUND x_7 y_7 z_7 SOUND_PART_MISSION_COMPLETE
    timer_4x4 = timer_4x4 + timer_bonus
    flag_blip_7 = 1
    PRINT_WITH_NUMBER_NOW (T4X4_3C) counter_4x4_pickups 3000 1
    ENDIF
    ENDIF

    IF flag_blip_8 = 0
    DRAW_CORONA x_8 y_8 z_8 1.0 CORONATYPE_HEX FLARETYPE_NONE 0 200 200
    IF LOCATE_PLAYER_IN_CAR_3D player1 x_8 y_8 z_8 2.5 2.5 3.5 false
    REMOVE_BLIP blip_8
    ++ counter_4x4_pickups
    ADD_ONE_OFF_SOUND x_8 y_8 z_8 SOUND_PART_MISSION_COMPLETE
    timer_4x4 = timer_4x4 + timer_bonus
    flag_blip_8 = 1
    PRINT_WITH_NUMBER_NOW (T4X4_3C) counter_4x4_pickups 3000 1
    ENDIF
    ENDIF

    IF flag_blip_9 = 0
    DRAW_CORONA x_9 y_9 z_9 1.0 CORONATYPE_HEX FLARETYPE_NONE 0 200 200
    IF LOCATE_PLAYER_IN_CAR_3D player1 x_9 y_9 z_9 2.5 2.5 3.5 false
    REMOVE_BLIP blip_9
    ++ counter_4x4_pickups
    ADD_ONE_OFF_SOUND x_9 y_9 z_9 SOUND_PART_MISSION_COMPLETE
    timer_4x4 = timer_4x4 + timer_bonus
    flag_blip_9 = 1
    PRINT_WITH_NUMBER_NOW (T4X4_3C) counter_4x4_pickups 3000 1
    ENDIF
    ENDIF

    IF flag_blip_10 = 0
    DRAW_CORONA x_10 y_10 z_10 1.0 CORONATYPE_HEX FLARETYPE_NONE 0 200 200
    IF LOCATE_PLAYER_IN_CAR_3D player1 x_10 y_10 z_10 2.5 2.5 3.5 false
    REMOVE_BLIP blip_10
    ++ counter_4x4_pickups
    ADD_ONE_OFF_SOUND x_10 y_10 z_10 SOUND_PART_MISSION_COMPLETE
    timer_4x4 = timer_4x4 + timer_bonus
    flag_blip_10 = 1
    PRINT_WITH_NUMBER_NOW (T4X4_3C) counter_4x4_pickups 3000 1
    ENDIF
    ENDIF

    IF flag_blip_11 = 0
    DRAW_CORONA x_11 y_11 z_11 1.0 CORONATYPE_HEX FLARETYPE_NONE 0 200 200
    IF LOCATE_PLAYER_IN_CAR_3D player1 x_11 y_11 z_11 2.5 2.5 3.5 false
    REMOVE_BLIP blip_11
    ++ counter_4x4_pickups
    ADD_ONE_OFF_SOUND x_11 y_11 z_11 SOUND_PART_MISSION_COMPLETE
    timer_4x4 = timer_4x4 + timer_bonus
    flag_blip_11 = 1
    PRINT_WITH_NUMBER_NOW (T4X4_3C) counter_4x4_pickups 3000 1
    ENDIF
    ENDIF

    IF flag_blip_12 = 0
    DRAW_CORONA x_12 y_12 z_12 1.0 CORONATYPE_HEX FLARETYPE_NONE 0 200 200
    IF LOCATE_PLAYER_IN_CAR_3D player1 x_12 y_12 z_12 2.5 2.5 3.5 false
    REMOVE_BLIP blip_12
    ++ counter_4x4_pickups
    ADD_ONE_OFF_SOUND x_12 y_12 z_12 SOUND_PART_MISSION_COMPLETE
    timer_4x4 = timer_4x4 + timer_bonus
    flag_blip_12 = 1
    PRINT_WITH_NUMBER_NOW (T4X4_3C) counter_4x4_pickups 3000 1
    ENDIF
    ENDIF

    IF flag_blip_13 = 0
    DRAW_CORONA x_13 y_13 z_13 1.0 CORONATYPE_HEX FLARETYPE_NONE 0 200 200
    IF LOCATE_PLAYER_IN_CAR_3D player1 x_13 y_13 z_13 2.5 2.5 3.5 false
    REMOVE_BLIP blip_13
    ++ counter_4x4_pickups
    ADD_ONE_OFF_SOUND x_13 y_13 z_13 SOUND_PART_MISSION_COMPLETE
    timer_4x4 = timer_4x4 + timer_bonus
    flag_blip_13 = 1
    PRINT_WITH_NUMBER_NOW (T4X4_3C) counter_4x4_pickups 3000 1
    ENDIF
    ENDIF

    IF flag_blip_14 = 0
    DRAW_CORONA x_14 y_14 z_14 1.0 CORONATYPE_HEX FLARETYPE_NONE 0 200 200
    IF LOCATE_PLAYER_IN_CAR_3D player1 x_14 y_14 z_14 2.5 2.5 3.5 false
    REMOVE_BLIP blip_14
    ++ counter_4x4_pickups
    ADD_ONE_OFF_SOUND x_14 y_14 z_14 SOUND_PART_MISSION_COMPLETE
    timer_4x4 = timer_4x4 + timer_bonus
    flag_blip_14 = 1
    PRINT_WITH_NUMBER_NOW (T4X4_3C) counter_4x4_pickups 3000 1
    ENDIF
    ENDIF

    IF flag_blip_15 = 0
    DRAW_CORONA x_15 y_15 z_15 1.0 CORONATYPE_HEX FLARETYPE_NONE 0 200 200
    IF LOCATE_PLAYER_IN_CAR_3D player1 x_15 y_15 z_15 2.5 2.5 3.5 false
    REMOVE_BLIP blip_15
    ++ counter_4x4_pickups
    ADD_ONE_OFF_SOUND x_15 y_15 z_15 SOUND_PART_MISSION_COMPLETE
    timer_4x4 = timer_4x4 + timer_bonus
    flag_blip_15 = 1
    PRINT_WITH_NUMBER_NOW (T4X4_3C) counter_4x4_pickups 3000 1
    ENDIF
    ENDIF

    IF flag_blip_16 = 0
    DRAW_CORONA x_16 y_16 z_16 1.0 CORONATYPE_HEX FLARETYPE_NONE 0 200 200
    IF LOCATE_PLAYER_IN_CAR_3D player1 x_16 y_16 z_16 2.5 2.5 3.5 false
    REMOVE_BLIP blip_16
    ++ counter_4x4_pickups
    ADD_ONE_OFF_SOUND x_16 y_16 z_16 SOUND_PART_MISSION_COMPLETE
    timer_4x4 = timer_4x4 + timer_bonus
    flag_blip_16 = 1
    PRINT_WITH_NUMBER_NOW (T4X4_3C) counter_4x4_pickups 3000 1
    ENDIF
    ENDIF

    IF flag_blip_17 = 0
    DRAW_CORONA x_17 y_17 z_17 1.0 CORONATYPE_HEX FLARETYPE_NONE 0 200 200
    IF LOCATE_PLAYER_IN_CAR_3D player1 x_17 y_17 z_17 2.5 2.5 3.5 false
    REMOVE_BLIP blip_17
    ++ counter_4x4_pickups
    ADD_ONE_OFF_SOUND x_17 y_17 z_17 SOUND_PART_MISSION_COMPLETE
    timer_4x4 = timer_4x4 + timer_bonus
    flag_blip_17 = 1
    PRINT_WITH_NUMBER_NOW (T4X4_3C) counter_4x4_pickups 3000 1
    ENDIF
    ENDIF
    */
    /*
    IF flag_blip_18 = 0
    DRAW_CORONA x_18 y_18 z_18 1.0 CORONATYPE_HEX FLARETYPE_NONE 0 200 200
    IF LOCATE_PLAYER_IN_CAR_3D player1 x_18 y_18 z_18 2.5 2.5 3.5 false
    REMOVE_BLIP blip_18
    ++ counter_4x4_pickups
    ADD_ONE_OFF_SOUND x_18 y_18 z_18 SOUND_PART_MISSION_COMPLETE
    timer_4x4 = timer_4x4 + timer_bonus
    flag_blip_18 = 1
    PRINT_WITH_NUMBER_NOW (T4X4_3C) counter_4x4_pickups 3000 1
    ENDIF
    ENDIF

    IF flag_blip_19 = 0
    DRAW_CORONA x_19 y_19 z_19 1.0 CORONATYPE_HEX FLARETYPE_NONE 0 200 200
    IF LOCATE_PLAYER_IN_CAR_3D player1 x_19 y_19 z_19 2.5 2.5 3.5 false
    REMOVE_BLIP blip_19
    ++ counter_4x4_pickups
    ADD_ONE_OFF_SOUND x_19 y_19 z_19 SOUND_PART_MISSION_COMPLETE
    timer_4x4 = timer_4x4 + timer_bonus
    flag_blip_19 = 1
    PRINT_WITH_NUMBER_NOW (T4X4_3C) counter_4x4_pickups 3000 1
    ENDIF
    ENDIF

    IF flag_blip_20 = 0
    DRAW_CORONA x_20 y_20 z_20 1.0 CORONATYPE_HEX FLARETYPE_NONE 0 200 200
    IF LOCATE_PLAYER_IN_CAR_3D player1 x_20 y_20 z_20 2.5 2.5 3.5 false
    REMOVE_BLIP blip_20
    ++ counter_4x4_pickups
    ADD_ONE_OFF_SOUND x_20 y_20 z_20 SOUND_PART_MISSION_COMPLETE
    timer_4x4 = timer_4x4 + timer_bonus
    flag_blip_20 = 1
    PRINT_WITH_NUMBER_NOW (T4X4_3C) counter_4x4_pickups 3000 1
    ENDIF
    ENDIF

    IF flag_blip_21 = 0
    DRAW_CORONA x_21 y_21 z_21 1.0 CORONATYPE_HEX FLARETYPE_NONE 0 200 200
    IF LOCATE_PLAYER_IN_CAR_3D player1 x_21 y_21 z_21 2.5 2.5 3.5 false
    REMOVE_BLIP blip_21
    ++ counter_4x4_pickups
    ADD_ONE_OFF_SOUND x_21 y_21 z_21 SOUND_PART_MISSION_COMPLETE
    timer_4x4 = timer_4x4 + timer_bonus
    flag_blip_21 = 1
    PRINT_WITH_NUMBER_NOW (T4X4_3C) counter_4x4_pickups 3000 1
    ENDIF
    ENDIF
    */
    /*
    IF flag_blip_22 = 0
    DRAW_CORONA x_22 y_22 z_22 1.0 CORONATYPE_HEX FLARETYPE_NONE 0 200 200
    IF LOCATE_PLAYER_IN_CAR_3D player1 x_22 y_22 z_22 2.5 2.5 3.5 false
    REMOVE_BLIP blip_22
    ++ counter_4x4_pickups
    ADD_ONE_OFF_SOUND x_22 y_22 z_22 SOUND_PART_MISSION_COMPLETE
    timer_4x4 = timer_4x4 + timer_bonus
    flag_blip_22 = 1
    PRINT_WITH_NUMBER_NOW (T4X4_3C) counter_4x4_pickups 3000 1
    ENDIF
    ENDIF

    IF flag_blip_23 = 0
    DRAW_CORONA x_23 y_23 z_23 1.0 CORONATYPE_HEX FLARETYPE_NONE 0 200 200
    IF LOCATE_PLAYER_IN_CAR_3D player1 x_23 y_23 z_23 2.5 2.5 3.5 false
    REMOVE_BLIP blip_23
    ++ counter_4x4_pickups
    ADD_ONE_OFF_SOUND x_23 y_23 z_23 SOUND_PART_MISSION_COMPLETE
    timer_4x4 = timer_4x4 + timer_bonus
    flag_blip_23 = 1
    PRINT_WITH_NUMBER_NOW (T4X4_3C) counter_4x4_pickups 3000 1
    ENDIF
    ENDIF

    IF flag_blip_24 = 0
    DRAW_CORONA x_24 y_24 z_24 1.0 CORONATYPE_HEX FLARETYPE_NONE 0 200 200
    IF LOCATE_PLAYER_IN_CAR_3D player1 x_24 y_24 z_24 2.5 2.5 3.5 false
    REMOVE_BLIP blip_24
    ++ counter_4x4_pickups
    ADD_ONE_OFF_SOUND x_24 y_24 z_24 SOUND_PART_MISSION_COMPLETE
    timer_4x4 = timer_4x4 + timer_bonus
    flag_blip_24 = 1
    PRINT_WITH_NUMBER_NOW (T4X4_3C) counter_4x4_pickups 3000 1
    ENDIF
    ENDIF
    */
    if ($.flag_intro_carpark1_before == 1) {
      if ($.flag_intro_jump == 0 && $.flag_intro > 0 && $.flag_intro < 4) {
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
      Camera.DoFade(1000, 0 /* FADE_OUT */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      $.cone_1 = ScriptObject.Create(1360 /* trafficcone */, $.x_cone_1, $.y_cone_1, $.z_cone);
      $.cone_1.setCollision(true /* true */);
      $.cone_1.setDynamic(true /* true */);
      $.cone_2 = ScriptObject.Create(1360 /* trafficcone */, $.x_cone_2, $.y_cone_2, $.z_cone);
      $.cone_2.setCollision(true /* true */);
      $.cone_2.setDynamic(true /* true */);
      $.cone_3 = ScriptObject.Create(1360 /* trafficcone */, $.x_cone_3, $.y_cone_3, $.z_cone);
      $.cone_3.setCollision(true /* true */);
      $.cone_3.setDynamic(true /* true */);
      $.cone_4 = ScriptObject.Create(1360 /* trafficcone */, $.x_cone_4, $.y_cone_4, $.z_cone);
      $.cone_4.setCollision(true /* true */);
      $.cone_4.setDynamic(true /* true */);
      $.cone_5 = ScriptObject.Create(1360 /* trafficcone */, $.x_cone_5, $.y_cone_5, $.z_cone);
      $.cone_5.setCollision(true /* true */);
      $.cone_5.setDynamic(true /* true */);
      $.cone_6 = ScriptObject.Create(1360 /* trafficcone */, $.x_cone_6, $.y_cone_6, $.z_cone);
      $.cone_6.setCollision(true /* true */);
      $.cone_6.setDynamic(true /* true */);
      $.cone_7 = ScriptObject.Create(1360 /* trafficcone */, $.x_cone_7, $.y_cone_7, $.z_cone);
      $.cone_7.setCollision(true /* true */);
      $.cone_7.setDynamic(true /* true */);
      $.cone_8 = ScriptObject.Create(1360 /* trafficcone */, $.x_cone_8, $.y_cone_8, $.z_cone);
      $.cone_8.setCollision(true /* true */);
      $.cone_8.setDynamic(true /* true */);
      $.cone_9 = ScriptObject.Create(1360 /* trafficcone */, $.x_cone_9, $.y_cone_9, $.z_cone);
      $.cone_9.setCollision(true /* true */);
      $.cone_9.setDynamic(true /* true */);
      $.cone_10 = ScriptObject.Create(1360 /* trafficcone */, $.x_cone_10, $.y_cone_10, $.z_cone);
      $.cone_10.setCollision(true /* true */);
      $.cone_10.setDynamic(true /* true */);
      $.cone_11 = ScriptObject.Create(1360 /* trafficcone */, $.x_cone_11, $.y_cone_11, $.z_cone);
      $.cone_11.setCollision(true /* true */);
      $.cone_11.setDynamic(true /* true */);
      $.cone_12 = ScriptObject.Create(1360 /* trafficcone */, $.x_cone_12, $.y_cone_12, $.z_cone);
      $.cone_12.setCollision(true /* true */);
      $.cone_12.setDynamic(true /* true */);
      $.cone_13 = ScriptObject.Create(1360 /* trafficcone */, $.x_cone_13, $.y_cone_13, $.z_cone);
      $.cone_13.setCollision(true /* true */);
      $.cone_13.setDynamic(true /* true */);
      $.cone_14 = ScriptObject.Create(1360 /* trafficcone */, $.x_cone_14, $.y_cone_14, $.z_cone);
      $.cone_14.setCollision(true /* true */);
      $.cone_14.setDynamic(true /* true */);
      $.cone_15 = ScriptObject.Create(1360 /* trafficcone */, $.x_cone_15, $.y_cone_15, $.z_cone);
      $.cone_15.setCollision(true /* true */);
      $.cone_15.setDynamic(true /* true */);
      await cone_circle();  // SCM GOSUB cone_circle
      $.cone_32 = ScriptObject.Create(1360 /* trafficcone */, $.circle_x, $.circle_y, $.z_cone);
      $.cone_32.setCollision(true /* true */);
      $.cone_32.setDynamic(true /* true */);

      /*
      ADD_BLIP_FOR_COORD x_6 y_6 z_6 blip_6
      ADD_BLIP_FOR_COORD x_7 y_7 z_7 blip_7
      ADD_BLIP_FOR_COORD x_8 y_8 z_8 blip_8
      ADD_BLIP_FOR_COORD x_9 y_9 z_9 blip_9
      ADD_BLIP_FOR_COORD x_10 y_10 z_10 blip_10
      ADD_BLIP_FOR_COORD x_11 y_11 z_11 blip_11
      ADD_BLIP_FOR_COORD x_12 y_12 z_12 blip_12
      ADD_BLIP_FOR_COORD x_13 y_13 z_13 blip_13
      ADD_BLIP_FOR_COORD x_14 y_14 z_14 blip_14
      ADD_BLIP_FOR_COORD x_15 y_15 z_15 blip_15
      ADD_BLIP_FOR_COORD x_16 y_16 z_16 blip_16
      ADD_BLIP_FOR_COORD x_17 y_17 z_17 blip_17
      ADD_BLIP_FOR_COORD x_18 y_18 z_18 blip_18
      ADD_BLIP_FOR_COORD x_19 y_19 z_19 blip_19
      ADD_BLIP_FOR_COORD x_20 y_20 z_20 blip_20
      ADD_BLIP_FOR_COORD x_21 y_21 z_21 blip_21
      ADD_BLIP_FOR_COORD x_22 y_22 z_22 blip_22
      ADD_BLIP_FOR_COORD x_23 y_23 z_23 blip_23
      ADD_BLIP_FOR_COORD x_24 y_24 z_24 blip_24
      */

      Streaming.LoadScene($.cam_4x4_x, $.cam_4x4_y, $.cam_4x4_z);
      Camera.PointAtPoint($.x_2, $.y_2, $.z_2, 2 /* JUMP_CUT */);
      Camera.DoFade(1000, 1 /* FADE_IN */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      Text.PrintNow("MM_1_A", 5000, 1);
      $.flag_intro = 1;
    }
    if ($.flag_intro_jump == 0) {
      $.timer_intro_now = Clock.GetGameTimer();
      $.intro_time_lapsed = $.timer_intro_now - $.timer_intro_start;
    }
    if ($.intro_time_lapsed > 4000 && $.flag_intro == 1) {
      Camera.SetFixedPosition(156.3, -1220.1, 34.0, 0.0, 0.0, 0.0);
      Camera.PointAtPoint($.x_3, $.y_3, $.z_3, 2 /* JUMP_CUT */);
      $.flag_intro = 2;
    }
    if ($.intro_time_lapsed > 7000 && $.flag_intro == 2) {
      Camera.SetFixedPosition(106.5, -1139.0, 38.13, 0.0, 0.0, 0.0);
      Camera.PointAtPoint($.x_4, $.y_4, $.z_4, 2 /* JUMP_CUT */);
      Text.PrintWithNumberNow("MM_1_C", $.print_bonus, 5000, 1);
      $.flag_intro = 3;
    }


    if ($.intro_time_lapsed > 9500 && $.flag_intro == 3) {
      Camera.DoFade(1000, 0 /* FADE_OUT */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      Text.ClearPrints();
      //GET_PLAYER_COORDINATES player1 player_x player_y player_z
      //LOAD_SCENE player_x player_y player_z
      Camera.RestoreJumpcut();
      Hud.SwitchWidescreen(false /* off */);
      $.player1.setControl(true /* on */);
      if (!(Car.IsDead($.player_4x4))) {
        $.player_4x4.lockDoors(1 /* CARLOCK_UNLOCKED */);
      }
      $.player1.alterWantedLevel($.wanted_4x4);
      Camera.DoFade(1000, 1 /* FADE_IN */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      Audio.SetMusicDoesFade(true /* TRUE */);
      $.flag_intro = 4;
      $.flag_intro_carpark1_before = 1;
    }


    if (!($.player1.isInModel(STALLION))) {
      Text.PrintNow("T4x4_F", 3000, 1);
      // SCM GOTO → mission_carpark1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_carpark1_failed"); // fallback: would break linear control flow
    }
    await cone_check();  // SCM GOSUB cone_check
    if ($.flag_cone_smashed == 1) {
      Text.PrintNow("CONE_1", 5000, 1);
      // SCM GOTO → mission_carpark1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_carpark1_failed"); // fallback: would break linear control flow
    }


  }


  if ($.counter_4x4_pickups == 5) {
    // SCM GOTO → mission_carpark1_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_carpark1_passed"); // fallback: would break linear control flow
  }
}


// --------------------------Mission failed-----------------------------------------------


async function mission_carpark1_failed() {



  Text.PrintBig("M_FAIL", 2000, 1);
}






// -------------------------Mission passed-------------------------------------------------


async function mission_carpark1_passed() {


  if ($.flag_carpark1_passed == 0) {
    $.record_carpark1 = TIMERA;
    $.record_carpark1 = $.record_carpark1 / 1000;
    Stat.RegisterFastestTime(19, $.record_carpark1);
    await car_park_record();  // SCM GOSUB car_park_record
  }


  if ($.flag_carpark1_passed == 1) {
    $.record_temp = TIMERA;
    $.record_temp = $.record_temp / 1000;
    if ($.record_temp < $.record_carpark1) {
      $.record_carpark1 = $.record_temp;
      Stat.RegisterFastestTime(19, $.record_carpark1);
      $.car_park_reward = $.car_park_reward * 2;
      await car_park_record();  // SCM GOSUB car_park_record
    }
    else {
      Text.PrintWithNumberBig("M_PASS", 200, 5000, 1); //"Mission Passed!"
      $.player1.addScore(200);
    }
  }



  $.player1.clearWantedLevel();
  //REGISTER_4X4_THREE_TIME record_4x4_three


  if ($.flag_carpark1_passed == 0) {
    Stat.RegisterOddjobMissionPassed();
    $.flag_carpark1_passed = 1;
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


  $.blip_1.remove();
  $.blip_2.remove();
  $.blip_3.remove();
  $.blip_4.remove();
  $.blip_5.remove();
  /*
  REMOVE_BLIP blip_6
  REMOVE_BLIP blip_7
  REMOVE_BLIP blip_8
  REMOVE_BLIP blip_9
  REMOVE_BLIP blip_10
  REMOVE_BLIP blip_11
  REMOVE_BLIP blip_12
  REMOVE_BLIP blip_13
  REMOVE_BLIP blip_14
  REMOVE_BLIP blip_15
  REMOVE_BLIP blip_16
  REMOVE_BLIP blip_17
  REMOVE_BLIP blip_18
  REMOVE_BLIP blip_19
  REMOVE_BLIP blip_20
  REMOVE_BLIP blip_21
  REMOVE_BLIP blip_22
  REMOVE_BLIP blip_23
  REMOVE_BLIP blip_24
  */

  await delete_cones();  // SCM GOSUB delete_cones


  Streaming.MarkModelAsNoLongerNeeded(1360 /* trafficcone */);


  Hud.ClearTimer($.$id.timer_4x4);
  ONMISSION = 0;

  //flag_player_on_4x4_mission = 0


  Mission.Finish();
}



async function cone_circle() {

}



async function inner_circle() {


  $.cone_x = Math.Sin($.theta);
  $.cone_x = $.cone_x * $.circle_radius;
  $.cone_x = $.cone_x + $.circle_x;
  $.cone_y = Math.Cos($.theta);
  $.cone_y = $.cone_y * $.circle_radius;
  $.cone_y = $.cone_y + $.circle_y;


  if ($.theta == 0.0) {
    $.cone_16 = ScriptObject.Create(1360 /* trafficcone */, $.cone_x, $.cone_y, $.z_cone);
    $.cone_16.setCollision(true /* true */);
    $.cone_16.setDynamic(true /* true */);
  }


  if ($.theta == 18.0) {
    $.cone_17 = ScriptObject.Create(1360 /* trafficcone */, $.cone_x, $.cone_y, $.z_cone);
    $.cone_17.setCollision(true /* true */);
    $.cone_17.setDynamic(true /* true */);
  }


  if ($.theta == 36.0) {
    $.cone_18 = ScriptObject.Create(1360 /* trafficcone */, $.cone_x, $.cone_y, $.z_cone);
    $.cone_18.setCollision(true /* true */);
    $.cone_18.setDynamic(true /* true */);
  }


  if ($.theta == 54.0) {
    $.cone_19 = ScriptObject.Create(1360 /* trafficcone */, $.cone_x, $.cone_y, $.z_cone);
    $.cone_19.setCollision(true /* true */);
    $.cone_19.setDynamic(true /* true */);
  }


  if ($.theta == 72.0) {
    $.cone_20 = ScriptObject.Create(1360 /* trafficcone */, $.cone_x, $.cone_y, $.z_cone);
    $.cone_20.setCollision(true /* true */);
    $.cone_20.setDynamic(true /* true */);
  }


  if ($.theta == 90.0) {
    $.cone_21 = ScriptObject.Create(1360 /* trafficcone */, $.cone_x, $.cone_y, $.z_cone);
    $.cone_21.setCollision(true /* true */);
    $.cone_21.setDynamic(true /* true */);
  }


  if ($.theta == 108.0) {
    $.cone_22 = ScriptObject.Create(1360 /* trafficcone */, $.cone_x, $.cone_y, $.z_cone);
    $.cone_22.setCollision(true /* true */);
    $.cone_22.setDynamic(true /* true */);
  }


  if ($.theta == 126.0) {
    $.cone_23 = ScriptObject.Create(1360 /* trafficcone */, $.cone_x, $.cone_y, $.z_cone);
    $.cone_23.setCollision(true /* true */);
    $.cone_23.setDynamic(true /* true */);
  }


  if ($.theta == 144.0) {
    $.cone_24 = ScriptObject.Create(1360 /* trafficcone */, $.cone_x, $.cone_y, $.z_cone);
    $.cone_24.setCollision(true /* true */);
    $.cone_24.setDynamic(true /* true */);
  }


  if ($.theta == 162.0) {
    $.cone_25 = ScriptObject.Create(1360 /* trafficcone */, $.cone_x, $.cone_y, $.z_cone);
    $.cone_25.setCollision(true /* true */);
    $.cone_25.setDynamic(true /* true */);
  }


  if ($.theta == 180.0) {
    $.cone_26 = ScriptObject.Create(1360 /* trafficcone */, $.cone_x, $.cone_y, $.z_cone);
    $.cone_26.setCollision(true /* true */);
    $.cone_26.setDynamic(true /* true */);
  }


  if ($.theta == 198.0) {
    $.cone_27 = ScriptObject.Create(1360 /* trafficcone */, $.cone_x, $.cone_y, $.z_cone);
    $.cone_27.setCollision(true /* true */);
    $.cone_27.setDynamic(true /* true */);
  }


  if ($.theta == 216.0) {
    $.cone_28 = ScriptObject.Create(1360 /* trafficcone */, $.cone_x, $.cone_y, $.z_cone);
    $.cone_28.setCollision(true /* true */);
    $.cone_28.setDynamic(true /* true */);
  }


  if ($.theta == 234.0) {
    $.cone_29 = ScriptObject.Create(1360 /* trafficcone */, $.cone_x, $.cone_y, $.z_cone);
    $.cone_29.setCollision(true /* true */);
    $.cone_29.setDynamic(true /* true */);
  }


  if ($.theta == 252.0) {
    $.cone_30 = ScriptObject.Create(1360 /* trafficcone */, $.cone_x, $.cone_y, $.z_cone);
    $.cone_30.setCollision(true /* true */);
    $.cone_30.setDynamic(true /* true */);
  }


  if ($.theta == 270.0) {
    $.cone_31 = ScriptObject.Create(1360 /* trafficcone */, $.cone_x, $.cone_y, $.z_cone);
    $.cone_31.setCollision(true /* true */);
    $.cone_31.setDynamic(true /* true */);
  }


  $.theta = $.theta + 18.0;
  if ($.theta < 288.0) {
    // SCM GOTO → inner_circle (not lowered; manual jump required)
    throw new Error("unresolved GOTO inner_circle"); // fallback: would break linear control flow
  }
}



async function cone_check() {


  if ($.cone_1.hasBeenDamaged() || $.cone_2.hasBeenDamaged() || $.cone_3.hasBeenDamaged()) {
    $.flag_cone_smashed = 1;
  }
  if ($.cone_4.hasBeenDamaged() || $.cone_5.hasBeenDamaged() || $.cone_6.hasBeenDamaged()) {
    $.flag_cone_smashed = 1;
  }
  if ($.cone_7.hasBeenDamaged() || $.cone_8.hasBeenDamaged() || $.cone_9.hasBeenDamaged()) {
    $.flag_cone_smashed = 1;
  }
  if ($.cone_10.hasBeenDamaged() || $.cone_11.hasBeenDamaged() || $.cone_12.hasBeenDamaged()) {
    $.flag_cone_smashed = 1;
  }
  if ($.cone_13.hasBeenDamaged() || $.cone_14.hasBeenDamaged() || $.cone_15.hasBeenDamaged()) {
    $.flag_cone_smashed = 1;
  }


  if ($.cone_16.hasBeenDamaged() || $.cone_17.hasBeenDamaged() || $.cone_18.hasBeenDamaged()) {
    $.flag_cone_smashed = 1;
  }
  if ($.cone_19.hasBeenDamaged() || $.cone_20.hasBeenDamaged() || $.cone_21.hasBeenDamaged()) {
    $.flag_cone_smashed = 1;
  }


  if ($.cone_22.hasBeenDamaged() || $.cone_23.hasBeenDamaged() || $.cone_24.hasBeenDamaged()) {
    $.flag_cone_smashed = 1;
  }
  if ($.cone_25.hasBeenDamaged() || $.cone_26.hasBeenDamaged() || $.cone_27.hasBeenDamaged()) {
    $.flag_cone_smashed = 1;
  }


  if ($.cone_28.hasBeenDamaged() || $.cone_29.hasBeenDamaged() || $.cone_30.hasBeenDamaged()) {
    $.flag_cone_smashed = 1;
  }
  if ($.cone_31.hasBeenDamaged() || $.cone_32.hasBeenDamaged()) {
    //OR HAS_OBJECT_BEEN_DAMAGED cone_27
    $.flag_cone_smashed = 1;
  }
}




async function delete_cones() {


  $.cone_1.delete();
  $.cone_2.delete();
  $.cone_3.delete();
  $.cone_4.delete();
  $.cone_5.delete();
  $.cone_6.delete();
  $.cone_7.delete();
  $.cone_8.delete();
  $.cone_9.delete();
  $.cone_10.delete();
  $.cone_11.delete();
  $.cone_12.delete();
  $.cone_13.delete();
  $.cone_14.delete();
  $.cone_15.delete();
  $.cone_16.delete();
  $.cone_17.delete();
  $.cone_18.delete();
  $.cone_19.delete();
  $.cone_20.delete();
  $.cone_21.delete();
  $.cone_22.delete();
  $.cone_23.delete();
  $.cone_24.delete();
  $.cone_25.delete();
  $.cone_26.delete();
  $.cone_27.delete();
  $.cone_28.delete();
  $.cone_29.delete();
  $.cone_30.delete();
  $.cone_31.delete();
  $.cone_32.delete();
}



async function car_park_record() {
  $.cp_minutes = 0;
  $.cp_seconds = $.record_carpark1;
}

async function womble() {
  if ($.cp_seconds > 59) {
    $.cp_seconds = $.cp_seconds - 60;
    ++$.cp_minutes;
    // SCM GOTO → womble (not lowered; manual jump required)
    throw new Error("unresolved GOTO womble"); // fallback: would break linear control flow
  }
  Text.PrintWith2NumbersNow("NEW_REC", $.cp_minutes, $.cp_seconds, 5000, 1);
  $.timer_bonus = $.timer_bonus - 1000;
  if ($.timer_bonus < 6000) {
    $.timer_bonus = 6000;
  }
  --$.print_bonus;
  if ($.print_bonus < 6) {
    $.print_bonus = 6;
  }
  Text.PrintWithNumberBig("M_PASS", $.car_park_reward, 5000, 1); //"Mission Passed!"
  $.player1.addScore($.car_park_reward);


  return;




  // ************************************* MAIN.SC STUFF ***************************************

}

export async function carpark_1() {
  // Mission start stuff


  await body();  // SCM GOSUB mission_start_carpark1
  await cleanup();  // SCM GOSUB mission_cleanup_carpark1

  // Variables for mission
  /*
  VAR_INT player_4x4 wanted_4x4
  VAR_INT counter_4x4_pickups
  VAR_INT flag_timer timer_4x4 timer_bonus timer_4x4_secs
  VAR_INT intro_time_lapsed timer_intro_now timer_intro_start flag_intro flag_intro_jump

  VAR_INT flag_truck_1 flag_truck_2 truck_1 truck_2 truck_driver1 truck_driver2
  VAR_INT flag_launch_4x4_1_ok
  VAR_INT blip_1 blip_2 blip_3
  VAR_INT blip_4 blip_5 blip_6
  VAR_INT blip_7 blip_8 blip_9
  VAR_INT blip_10 blip_11 blip_12
  VAR_INT blip_13 blip_14 blip_15
  VAR_INT blip_16 blip_17 blip_18
  VAR_INT blip_19 blip_20 blip_21
  VAR_INT blip_22 blip_23	blip_24

  VAR_INT flag_blip_1 flag_blip_2 flag_blip_3 flag_blip_4
  VAR_INT flag_blip_5 flag_blip_6 flag_blip_7 flag_blip_8
  VAR_INT flag_blip_9 flag_blip_10 flag_blip_11 flag_blip_12
  VAR_INT flag_blip_13 flag_blip_14 flag_blip_15 flag_blip_16
  VAR_INT flag_blip_17 flag_blip_18 flag_blip_19 flag_blip_20
  VAR_INT flag_blip_21 flag_blip_22 flag_blip_23 flag_blip_24

  VAR_FLOAT cam_4x4_X
  VAR_FLOAT cam_4x4_y
  VAR_FLOAT cam_4x4_z
  */


  // VAR_INT flag_cone_smashed
  // VAR_INT cp_seconds


  // VAR_INT cone_1 cone_2 cone_3 cone_4
  // VAR_INT cone_5 cone_6 cone_7 cone_8
  // VAR_INT cone_9 cone_10 cone_11 cone_12
  // VAR_INT cone_13 cone_14 cone_15 cone_16
  // VAR_INT cone_17 cone_18 cone_19 cone_20
  // VAR_INT cone_21 cone_22 cone_23 cone_24
  // VAR_INT cone_25 cone_26 cone_27 cone_28
  // VAR_INT cone_29 cone_30 cone_31 cone_32


  // VAR_INT print_bonus car_park_reward cp_minutes


  // VAR_FLOAT x_cone_1 y_cone_1 z_cone
  // VAR_FLOAT x_cone_2 y_cone_2
  // VAR_FLOAT x_cone_3 y_cone_3
  // VAR_FLOAT x_cone_4 y_cone_4
  // VAR_FLOAT x_cone_5 y_cone_5
  // VAR_FLOAT x_cone_6 y_cone_6
  // VAR_FLOAT x_cone_7 y_cone_7
  // VAR_FLOAT x_cone_8 y_cone_8
  // VAR_FLOAT x_cone_9 y_cone_9
  // VAR_FLOAT x_cone_10 y_cone_10
  // VAR_FLOAT x_cone_11 y_cone_11
  // VAR_FLOAT x_cone_12 y_cone_12
  // VAR_FLOAT x_cone_13 y_cone_13
  // VAR_FLOAT x_cone_14 y_cone_14
  // VAR_FLOAT x_cone_15 y_cone_15
  /*
  VAR_FLOAT x_cone_16 y_cone_16
  VAR_FLOAT x_cone_17 y_cone_17
  VAR_FLOAT x_cone_18 y_cone_18
  VAR_FLOAT x_cone_19 y_cone_19
  VAR_FLOAT x_cone_20 y_cone_20
  VAR_FLOAT x_cone_21 y_cone_21
  VAR_FLOAT x_cone_22 y_cone_22
  VAR_FLOAT x_cone_23 y_cone_23
  VAR_FLOAT x_cone_24 y_cone_24
  */

  // VAR_FLOAT circle_radius cone_x cone_y theta
  // VAR_FLOAT circle_x circle_y
  // ****************************************Mission Start************************************


}
