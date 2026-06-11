// Generated from main/bmx_1.sc

import { $ } from "../utils/vars.mts";

// *****************************************************************************************
// *****************************************************************************************
// *****************************************************************************************
// ***************************************GRIPPED, SORTED***********************************
// *****************************************************************************************
// *****************************************************************************************
// *****************************************************************************************

async function body() {


  if ($.flag_bmx_1_passed == 0) {
    Stat.RegisterMissionGiven();
  }
  // SCRIPT_NAME bmx_1
  ONMISSION = 1;
  Text.LoadMissionText("bmx_1");

  //flag_player_on_4x4_mission = 1

  //PRINT_BIG (BMX_1) 5000 2


  await asyncWait(0);

  //Set Variables


  $.counter_laps = 0;
  $.counter_gates = 1;


  $.timer_4x4 = 0;
  $.time_lapsed = 0;


  $.record_temp = 0;
  $.flag_new_bmx_record_set = 0;
  $.flag_timer = 0;
  $.flag_bmx1_print = 0;


  $.flag_kwayzee1 = 0;
  $.flag_kwayzee2 = 0;
  $.flag_kwayzee3 = 0;

  //counter_bmx_1_reward = 3  // TEST !!!!!

  //Set Coords


  $.x_1 = -456.0;
  $.y_1 = 1417.9;
  $.z_1 = 14.24;


  $.x_2 = -467.8;
  $.y_2 = 1398.7;
  $.z_2 = 8.15;


  $.x_3 = -488.4;
  $.y_3 = 1425.9;
  $.z_3 = 14.5;


  $.x_4 = -516.8;
  $.y_4 = 1409.1;
  $.z_4 = 12.6;


  $.x_5 = -529.6;
  $.y_5 = 1430.0;
  $.z_5 = 9.6;


  $.x_6 = -556.4;
  $.y_6 = 1422.7;
  $.z_6 = 10.0;


  $.x_7 = -533.55;
  $.y_7 = 1455.6;
  $.z_7 = 10.3;


  $.x_8 = -560.0;
  $.y_8 = 1460.0;
  $.z_8 = 10.3;


  $.x_9 = -528.5;
  $.y_9 = 1476.9;
  $.z_9 = 10.5;


  $.x_10 = -535.0;
  $.y_10 = 1500.0;
  $.z_10 = 9.8;


  $.x_11 = -502.4;
  $.y_11 = 1474.6;
  $.z_11 = 11.3;


  $.x_12 = -500.6;
  $.y_12 = 1507.1;
  $.z_12 = 9.8;


  $.x_13 = -472.2;
  $.y_13 = 1490.5;
  $.z_13 = 11.0;


  $.x_14 = -499.3;
  $.y_14 = 1447.5;
  $.z_14 = 15.5;


  $.x_15 = -450.2;
  $.y_15 = 1481.4;
  $.z_15 = 9.8;



  $.x_16 = -440.6;
  $.y_16 = 1455.42;
  $.z_16 = 9.8;



  $.x_17 = -429.0;
  $.y_17 = 1491.8;
  $.z_17 = 10.1;


  $.x_18 = -418.0;
  $.y_18 = 1432.1;
  $.z_18 = 10.0;


  $.x_19 = -445.0;
  $.y_19 = 1439.5;
  $.z_19 = 10.4;


  $.x_20 = -453.5;
  $.y_20 = 1434.6;
  $.z_20 = 10.0;

  //Mission Script


  $.time_start = Clock.GetGameTimer();
  //STORE_CAR_PLAYER_IS_IN player1 bmx_car

  $.blip_1 = Blip.AddForCoord($.x_1, $.y_1, $.z_1);


  if ($.counter_bmx_1_reward > 0) {
    Streaming.RequestModel(barrel4);
    while (!(Streaming.HasModelLoaded(barrel4))) {
      await asyncWait(0);
    }

    //GET_GROUND_Z_FOR_3D_COORD -413.0 1434.4 50.0 ground_z
    $.barrel_1 = ScriptObject.Create(barrel4, -413.0, 1434.4, -100.0);
    $.barrel_1.setCollision(true /* TRUE */);
    //SET_OBJECT_DYNAMIC barrel_1 TRUE

    $.barrel_2 = ScriptObject.Create(barrel4, -405.36, 1447.12, -100.0);
    $.barrel_2.setCollision(true /* TRUE */);
    //SET_OBJECT_DYNAMIC barrel_2 TRUE

    $.barrel_3 = ScriptObject.Create(barrel4, -400.0, 1455.5, -100.0);
    $.barrel_3.setCollision(true /* TRUE */);
    //SET_OBJECT_DYNAMIC barrel_3 TRUE

    $.barrel_4 = ScriptObject.Create(barrel4, -402.73, 1465.0, -100.0);
    $.barrel_4.setCollision(true /* TRUE */);
    //SET_OBJECT_DYNAMIC barrel_4 TRUE

  }


  if ($.counter_bmx_1_reward > 2) {
    Streaming.RequestModel(HNa);
    Streaming.RequestModel(HNb);
    Streaming.RequestModel(machete);
    while (!(Streaming.HasModelLoaded(HNa)) || !(Streaming.HasModelLoaded(HNb)) || !(Streaming.HasModelLoaded(machete))) {
      await asyncWait(0);
    }
    $.kwayzee_moto1 = Car.Create(sanchez, -478.7, 1524.0, 10.4);
    $.kwayzee_moto1.changeColor(0, 0);
    $.kwayzee_moto1.setHeading(190.0);
    $.kwayzee_biker1 = Char.CreateInsideCar($.kwayzee_moto1, 4 /* PEDTYPE_CIVMALE */, HNa);
    $.kwayzee_biker1.giveWeapon(9 /* WEAPONTYPE_MACHETE */, 0);
    //SET_CHAR_OBJ_KILL_PLAYER_ANY_MEANS kwayzee_biker1 player1
    $.kwayzee_moto1.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
    $.kwayzee_moto1.setStraightLineDistance(255);
    $.kwayzee_moto2 = Car.Create(sanchez, -476.7, 1522.0, 10.4);
    $.kwayzee_moto2.changeColor(0, 0);
    $.kwayzee_moto2.setHeading(190.0);
    $.kwayzee_biker2 = Char.CreateInsideCar($.kwayzee_moto2, 4 /* PEDTYPE_CIVMALE */, HNa);
    $.kwayzee_biker2.giveWeapon(9 /* WEAPONTYPE_MACHETE */, 0);
    //SET_CHAR_OBJ_KILL_PLAYER_ANY_MEANS kwayzee_biker2 player1
    $.kwayzee_moto2.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
    $.kwayzee_moto2.setStraightLineDistance(255);
    $.kwayzee_moto3 = Car.Create(sanchez, -480.7, 1525.0, 10.4);
    $.kwayzee_moto3.changeColor(0, 0);
    $.kwayzee_moto3.setHeading(190.0);
    $.kwayzee_biker3 = Char.CreateInsideCar($.kwayzee_moto3, 4 /* PEDTYPE_CIVMALE */, HNa);
    $.kwayzee_biker3.giveWeapon(9 /* WEAPONTYPE_MACHETE */, 0);
    //SET_CHAR_OBJ_KILL_PLAYER_ANY_MEANS kwayzee_biker3 player1
    $.kwayzee_moto3.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
    $.kwayzee_moto3.setStraightLineDistance(255);


  }




  while ($.counter_laps < 2) {
    await asyncWait(0);
    $.time_now = Clock.GetGameTimer();
    $.time_lapsed = $.time_now - $.time_start;
    //time_lapsed = time_lapsed / 1000

    if ($.flag_timer == 0) {
      Hud.DisplayTimerWithString($.$id.time_lapsed, 0 /* TIMER_UP */, "R_TIME");
      $.flag_timer = 1;
    }
    if ($.flag_bmx1_print == 0) {
      Text.PrintNow("BMX_HOW", 5000, 1);
      $.flag_bmx1_print = 1;
    }
    if ($.flag_bmx1_print == 1 && $.time_lapsed > 5000) {
      Text.PrintNow("BMXREW1", 5000, 1);
      $.flag_bmx1_print = 2;
    }
    if ($.flag_bmx1_print == 2 && $.time_lapsed > 10000) {
      Text.PrintNow("BMXREW2", 5000, 1);
      $.flag_bmx1_print = 3;
    }


    if ($.counter_gates == 1) {
      Fx.DrawCorona($.x_1, $.y_1, $.z_1, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player1.locateInCar3D($.x_1, $.y_1, $.z_1, 3.0, 3.0, 3.0, false /* false */)) {
        $.blip_1.remove();
        Sound.AddOneOffSound($.x_1, $.y_1, $.z_1, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.blip_2 = Blip.AddForCoord($.x_2, $.y_2, $.z_2);
        ++$.counter_gates;
      }
    }
    if ($.counter_gates == 2) {
      Fx.DrawCorona($.x_2, $.y_2, $.z_2, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player1.locateInCar3D($.x_2, $.y_2, $.z_2, 3.0, 3.0, 3.0, false /* false */)) {
        $.blip_2.remove();
        Sound.AddOneOffSound($.x_2, $.y_2, $.z_2, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.blip_3 = Blip.AddForCoord($.x_3, $.y_3, $.z_3);
        ++$.counter_gates;
      }
    }
    if ($.counter_gates == 3) {
      Fx.DrawCorona($.x_3, $.y_3, $.z_3, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player1.locateInCar3D($.x_3, $.y_3, $.z_3, 3.0, 3.0, 3.0, false /* false */)) {
        $.blip_3.remove();
        Sound.AddOneOffSound($.x_3, $.y_3, $.z_3, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.blip_4 = Blip.AddForCoord($.x_4, $.y_4, $.z_4);
        ++$.counter_gates;
      }
    }
    if ($.counter_gates == 4) {
      Fx.DrawCorona($.x_4, $.y_4, $.z_4, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player1.locateInCar3D($.x_4, $.y_4, $.z_4, 3.0, 3.0, 3.0, false /* false */)) {
        $.blip_4.remove();
        Sound.AddOneOffSound($.x_4, $.y_4, $.z_4, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.blip_5 = Blip.AddForCoord($.x_5, $.y_5, $.z_5);
        ++$.counter_gates;
      }
    }
    if ($.counter_gates == 5) {
      Fx.DrawCorona($.x_5, $.y_5, $.z_5, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player1.locateInCar3D($.x_5, $.y_5, $.z_5, 3.0, 3.0, 3.0, false /* false */)) {
        $.blip_5.remove();
        Sound.AddOneOffSound($.x_12, $.y_12, $.z_12, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.blip_6 = Blip.AddForCoord($.x_6, $.y_6, $.z_6);
        ++$.counter_gates;
      }
    }
    if ($.counter_gates == 6) {
      Fx.DrawCorona($.x_6, $.y_6, $.z_6, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player1.locateInCar3D($.x_6, $.y_6, $.z_6, 3.0, 3.0, 3.0, false /* false */)) {
        $.blip_6.remove();
        Sound.AddOneOffSound($.x_6, $.y_6, $.z_6, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.blip_7 = Blip.AddForCoord($.x_7, $.y_7, $.z_7);
        ++$.counter_gates;
      }
    }
    if ($.counter_gates == 7) {
      Fx.DrawCorona($.x_7, $.y_7, $.z_7, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player1.locateInCar3D($.x_7, $.y_7, $.z_7, 3.0, 3.0, 3.0, false /* false */)) {
        $.blip_7.remove();
        Sound.AddOneOffSound($.x_7, $.y_7, $.z_7, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.blip_8 = Blip.AddForCoord($.x_8, $.y_8, $.z_8);
        ++$.counter_gates;
      }
    }
    if ($.counter_gates == 8) {
      Fx.DrawCorona($.x_8, $.y_8, $.z_8, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player1.locateInCar3D($.x_8, $.y_8, $.z_8, 3.0, 3.0, 3.0, false /* false */)) {
        $.blip_8.remove();
        Sound.AddOneOffSound($.x_8, $.y_8, $.z_8, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.blip_9 = Blip.AddForCoord($.x_9, $.y_9, $.z_9);
        ++$.counter_gates;
      }
    }
    if ($.counter_gates == 9) {
      Fx.DrawCorona($.x_9, $.y_9, $.z_9, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player1.locateInCar3D($.x_9, $.y_9, $.z_9, 3.0, 3.0, 3.0, false /* false */)) {
        $.blip_9.remove();
        Sound.AddOneOffSound($.x_9, $.y_9, $.z_9, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.blip_10 = Blip.AddForCoord($.x_10, $.y_10, $.z_10);
        ++$.counter_gates;
        if ($.flag_bmx1_print == 3 && $.time_lapsed > 12000 && $.counter_bmx_1_reward > 1) {
          Weather.Force(2 /* WEATHER_RAINY */);
          Text.PrintNow("BMXRAIN", 4000, 1);
          $.flag_bmx1_print = 4;
        }
      }
    }
    if ($.counter_gates == 10) {
      Fx.DrawCorona($.x_10, $.y_10, $.z_10, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player1.locateInCar3D($.x_10, $.y_10, $.z_10, 3.0, 3.0, 3.0, false /* false */)) {
        $.blip_10.remove();
        Sound.AddOneOffSound($.x_10, $.y_10, $.z_10, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.blip_11 = Blip.AddForCoord($.x_11, $.y_11, $.z_11);
        ++$.counter_gates;
      }
    }
    if ($.counter_gates == 11) {
      Fx.DrawCorona($.x_11, $.y_11, $.z_11, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player1.locateInCar3D($.x_11, $.y_11, $.z_11, 3.0, 3.0, 3.0, false /* false */)) {
        $.blip_11.remove();
        Sound.AddOneOffSound($.x_11, $.y_11, $.z_11, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.blip_12 = Blip.AddForCoord($.x_12, $.y_12, $.z_12);
        ++$.counter_gates;
      }
    }
    if ($.counter_gates == 12) {
      Fx.DrawCorona($.x_12, $.y_12, $.z_12, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player1.locateInCar3D($.x_12, $.y_12, $.z_12, 3.0, 3.0, 3.0, false /* false */)) {
        $.blip_12.remove();
        Sound.AddOneOffSound($.x_12, $.y_12, $.z_12, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.blip_13 = Blip.AddForCoord($.x_13, $.y_13, $.z_13);
        ++$.counter_gates;
      }
    }
    if ($.counter_gates == 13) {
      Fx.DrawCorona($.x_13, $.y_13, $.z_13, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player1.locateInCar3D($.x_13, $.y_13, $.z_13, 3.0, 3.0, 3.0, false /* false */)) {
        $.blip_13.remove();
        Sound.AddOneOffSound($.x_13, $.y_13, $.z_13, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.blip_14 = Blip.AddForCoord($.x_14, $.y_14, $.z_14);
        ++$.counter_gates;
      }
    }
    if ($.counter_gates == 14) {
      Fx.DrawCorona($.x_14, $.y_14, $.z_14, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player1.locateInCar3D($.x_14, $.y_14, $.z_14, 3.0, 3.0, 3.0, false /* false */)) {
        $.blip_14.remove();
        Sound.AddOneOffSound($.x_14, $.y_14, $.z_14, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.blip_15 = Blip.AddForCoord($.x_15, $.y_15, $.z_15);
        ++$.counter_gates;
      }
    }
    if ($.counter_gates == 15) {
      Fx.DrawCorona($.x_15, $.y_15, $.z_15, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player1.locateInCar3D($.x_15, $.y_15, $.z_15, 3.0, 3.0, 3.0, false /* false */)) {
        $.blip_15.remove();
        Sound.AddOneOffSound($.x_15, $.y_15, $.z_15, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.blip_16 = Blip.AddForCoord($.x_16, $.y_16, $.z_16);
        ++$.counter_gates;
      }
    }
    if ($.counter_gates == 16) {
      Fx.DrawCorona($.x_16, $.y_16, $.z_16, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player1.locateInCar3D($.x_16, $.y_16, $.z_16, 3.0, 3.0, 3.0, false /* false */)) {
        $.blip_16.remove();
        Sound.AddOneOffSound($.x_16, $.y_16, $.z_16, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.blip_17 = Blip.AddForCoord($.x_17, $.y_17, $.z_17);
        ++$.counter_gates;
      }
    }
    if ($.counter_gates == 17) {
      Fx.DrawCorona($.x_17, $.y_17, $.z_17, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player1.locateInCar3D($.x_17, $.y_17, $.z_17, 3.0, 3.0, 3.0, false /* false */)) {
        $.blip_17.remove();
        Sound.AddOneOffSound($.x_17, $.y_17, $.z_17, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.blip_18 = Blip.AddForCoord($.x_18, $.y_18, $.z_18);
        ++$.counter_gates;
      }
    }
    if ($.counter_gates == 18) {
      Fx.DrawCorona($.x_18, $.y_18, $.z_18, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player1.locateInCar3D($.x_18, $.y_18, $.z_18, 3.0, 3.0, 3.0, false /* false */)) {
        $.blip_18.remove();
        Sound.AddOneOffSound($.x_18, $.y_18, $.z_18, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.blip_19 = Blip.AddForCoord($.x_19, $.y_19, $.z_19);
        ++$.counter_gates;
      }
    }
    if ($.counter_gates == 19) {
      Fx.DrawCorona($.x_19, $.y_19, $.z_19, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player1.locateInCar3D($.x_19, $.y_19, $.z_19, 3.0, 3.0, 3.0, false /* false */)) {
        $.blip_19.remove();
        Sound.AddOneOffSound($.x_19, $.y_19, $.z_19, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.counter_gates = 1;
        ++$.counter_laps;
        if ($.counter_laps < 3) {
          $.blip_1 = Blip.AddForCoord($.x_1, $.y_1, $.z_1);
        }
      }
    }
    /*
    IF counter_gates = 20
    DRAW_CORONA x_20 y_20 z_20 1.0 CORONATYPE_HEX FLARETYPE_NONE 0 200 200
    IF LOCATE_PLAYER_IN_CAR_3D player1 x_20 y_20 z_20 3.0 3.0 3.0 false
    REMOVE_BLIP blip_20
    ADD_ONE_OFF_SOUND x_20 y_20 z_20 SOUND_PART_MISSION_COMPLETE
    counter_gates = 1
    ++ counter_laps
    IF counter_laps < 3
    ADD_BLIP_FOR_COORD x_1 y_1 z_1 blip_1
    ENDIF
    ENDIF
    ENDIF
    */
    $.var_kwayzee = $.kwayzee_biker1;
    $.var_moto = $.kwayzee_moto1;
    $.var_flag = $.flag_kwayzee1;
    await kwayzee_stuff();  // SCM GOSUB kwayzee_stuff
    if ($.var_flag == 1) {
      $.flag_kwayzee1 = 1;
    }
    $.var_kwayzee = $.kwayzee_biker2;
    $.var_moto = $.kwayzee_moto2;
    $.var_flag = $.flag_kwayzee2;
    await kwayzee_stuff();  // SCM GOSUB kwayzee_stuff
    if ($.var_flag == 1) {
      $.flag_kwayzee2 = 1;
    }
    $.var_kwayzee = $.kwayzee_biker3;
    $.var_moto = $.kwayzee_moto3;
    $.var_flag = $.flag_kwayzee3;
    await kwayzee_stuff();  // SCM GOSUB kwayzee_stuff
    if ($.var_flag == 1) {
      $.flag_kwayzee3 = 1;
    }


    if (!($.player1.isInModel(sanchez))) {
      $.time_bailed = Clock.GetGameTimer();
      while (!($.time_left_to_find_bike < 0)) {
        await asyncWait(0);
        $.time_now = Clock.GetGameTimer();
        $.time_off_bike = $.time_now - $.time_bailed;
        $.time_left_to_find_bike = 15000 - $.time_off_bike;
        $.time_left_to_find_bike_secs = $.time_left_to_find_bike / 1000;
        Text.PrintWithNumberNow("GETBIK2", $.time_left_to_find_bike_secs, 2000, 1);
        if ($.player1.isInModel(sanchez)) {
          $.time_left_to_find_bike = 1;
          // SCM GOTO → bmx_boogie (not lowered; manual jump required)
          throw new Error("unresolved GOTO bmx_boogie"); // fallback: would break linear control flow
        }
      }
      // SCM GOTO → mission_bmx_1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bmx_1_failed"); // fallback: would break linear control flow
    }
    // SCM label bmx_boogie


  }


  if ($.counter_laps == 2) {
    $.time_lapsed = $.time_lapsed / 1000;
    if ($.flag_bmx_1_passed == 0) {
      $.record_bmx_1 = $.time_lapsed;
      $.flag_new_bmx_record_set = 1;
      $.counter_bmx_1_reward = 1;
      await timing_malarkey();  // SCM GOSUB timing_malarkey
    }
    else {
      if ($.time_lapsed < $.record_bmx_1) {
        $.record_bmx_1 = $.time_lapsed;
        $.flag_new_bmx_record_set = 1;
        ++$.counter_bmx_1_reward;
        await timing_malarkey();  // SCM GOSUB timing_malarkey
      }
    }
    if ($.flag_new_bmx_record_set == 1) {
      //set_record_bmx_1 = record_bmx_1 * 1000
      Stat.RegisterFastestTime(17, $.record_bmx_2);
      // SCM GOTO → mission_bmx_1_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bmx_1_passed"); // fallback: would break linear control flow
    }
  }
}


// --------------------------Mission failed-----------------------------------------------


async function onFailed() {



  Text.PrintBig("M_FAIL", 5000, 1);
  Text.PrintNow("BMXFAIL", 5000, 1);
}






// -------------------------Mission passed-------------------------------------------------


async function mission_bmx_1_passed() {


  $.bmx_1_reward = $.counter_bmx_1_reward * 100;
  //PRINT_WITH_NUMBER_NOW (BMX_REC) record_bmx_1 5000 1

  Text.PrintWithNumberBig("M_PASS", $.bmx_1_reward, 5000, 1); //"Mission Passed!"
  $.player1.clearWantedLevel();
  $.player1.addScore($.bmx_1_reward);
  //REGISTER_BMX_1_TIME record_bmx_1


  if ($.flag_bmx_1_passed == 0) {
    //REGISTER_MISSION_PASSED bmx_1
    $.flag_bmx_1_passed = 1;
    Stat.PlayerMadeProgress(1);
    Stat.RegisterOddjobMissionPassed();
  }

  //START_NEW_SCRIPT t4x4_mission2_loop
  //START_NEW_SCRIPT multistorey_mission_loop
}




// mission cleanup


async function cleanup() {


  $.time_left_to_find_bike = 1;


  Camera.RestoreJumpcut();
  Hud.SwitchWidescreen(false /* off */);
  $.player1.setControl(true /* on */);


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
  //REMOVE_BLIP blip_20

  Streaming.MarkModelAsNoLongerNeeded(barrel4);
  Streaming.MarkModelAsNoLongerNeeded(machete);
  Streaming.MarkModelAsNoLongerNeeded(HNa);
  Streaming.MarkModelAsNoLongerNeeded(HNb);


  $.kwayzee_biker1.markAsNoLongerNeeded();
  $.kwayzee_moto1.markAsNoLongerNeeded();
  $.kwayzee_biker2.markAsNoLongerNeeded();
  $.kwayzee_moto2.markAsNoLongerNeeded();
  $.kwayzee_biker3.markAsNoLongerNeeded();
  $.kwayzee_moto3.markAsNoLongerNeeded();



  $.barrel_1.delete();
  $.barrel_2.delete();
  $.barrel_3.delete();
  $.barrel_4.delete();


  Weather.Release();



  Hud.ClearTimer($.$id.time_lapsed);
  ONMISSION = 0;
  //flag_player_on_4x4_mission = 0


  Mission.Finish();
}






async function timing_malarkey() {
  $.bmx1_minutes = 0;
}

async function time_coctos() {
  if ($.time_lapsed > 59) {
    $.time_lapsed = $.time_lapsed - 60;
    ++$.bmx1_minutes;
    // SCM GOTO → time_coctos (not lowered; manual jump required)
    throw new Error("unresolved GOTO time_coctos"); // fallback: would break linear control flow
  }
  Text.PrintWith2NumbersNow("NEW_REC", $.bmx1_minutes, $.time_lapsed, 5000, 1);
}



async function kwayzee_stuff() {
  if (!(Char.IsDead($.var_kwayzee)) && $.var_flag == 0) {
    if (!(Car.IsDead($.var_moto))) {
      if (!($.var_kwayzee.isInCar($.var_moto)) || !($.player1.isInAnyCar())) {
        $.var_kwayzee.setObjKillPlayerAnyMeans($.player1);
        $.var_flag = 1;
      }
    }
    else {
      $.var_kwayzee.setObjKillPlayerAnyMeans($.player1);
      $.var_flag = 1;
    }
  }
}

export async function bmx_1() {
  // Mission start stuff


  await body();  // SCM GOSUB mission_start_bmx_1


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await onFailed();  // SCM GOSUB mission_bmx_1_failed
  }


  await cleanup();  // SCM GOSUB mission_cleanup_bmx_1

  // Variables for mission
  /*
  //VAR_INT player_4x4 wanted_4x4
  VAR_INT counter_laps counter_gates
  //VAR_INT flag_timer timer_4x4 timer_bonus
  VAR_INT time_lapsed time_now time_start
  VAR_INT time_off_bike time_bailed time_left_to_find_bike time_left_to_find_bike_secs
  //VAR_INT flag_new_bmx_record_set
  VAR_INT record_bmx_1
  VAR_INT counter_bmx_1_reward bmx_1_reward
  VAR_INT flag_bmx1_print	bmx1_minutes
  VAR_INT kwayzee_biker1 kwayzee_biker2 kwayzee_biker3
  VAR_INT kwayzee_moto1 kwayzee_moto2 kwayzee_moto3
  VAR_INT flag_kwayzee1 flag_kwayzee2 flag_kwayzee3
  VAR_INT var_kwayzee var_moto var_flag

  //VAR_INT set_record_bmx_2
  //VAR_INT bmx_car

  VAR_INT blip_1 blip_2 blip_3
  VAR_INT blip_4 blip_5 blip_6
  VAR_INT blip_7 blip_8 blip_9
  VAR_INT blip_10 blip_11 blip_12
  VAR_INT blip_13 blip_14 blip_15
  VAR_INT blip_16 blip_17 blip_18
  VAR_INT blip_19 blip_20 blip_21 blip_22 blip_23

  VAR_FLOAT x_1 y_1 z_1
  VAR_FLOAT x_2 y_2 z_2
  VAR_FLOAT x_3 y_3 z_3
  VAR_FLOAT x_4 y_4 z_4
  VAR_FLOAT x_5 y_5 z_5
  VAR_FLOAT x_6 y_6 z_6
  VAR_FLOAT x_7 y_7 z_7
  VAR_FLOAT x_8 y_8 z_8
  VAR_FLOAT x_9 y_9 z_9
  VAR_FLOAT x_10 y_10 z_10
  VAR_FLOAT x_11 y_11 z_11
  VAR_FLOAT x_12 y_12 z_12
  VAR_FLOAT x_13 y_13 z_13
  VAR_FLOAT x_14 y_14 z_14
  VAR_FLOAT x_15 y_15 z_15
  VAR_FLOAT x_16 y_16 z_16
  VAR_FLOAT x_17 y_17 z_17
  VAR_FLOAT x_18 y_18 z_18
  VAR_FLOAT x_19 y_19 z_19
  VAR_FLOAT x_20 y_20 z_20
  VAR_FLOAT x_21 y_21 z_21
  VAR_FLOAT x_22 y_22 z_22
  VAR_FLOAT x_23 y_23 z_23
  */
  // ************** EXCLUSIVE -to be taken out!!! ***********************

  //VAR_INT flag_timer timer_4x4 timer_bonus

  // VAR_INT flag_new_bmx_record_set


  // VAR_INT barrel_1 barrel_2 barrel_3 barrel_4
  /*
  VAR_FLOAT x_1 y_1 z_1
  VAR_FLOAT x_2 y_2 z_2
  VAR_FLOAT x_3 y_3 z_3
  VAR_FLOAT x_4 y_4 z_4
  VAR_FLOAT x_5 y_5 z_5
  VAR_FLOAT x_6 y_6 z_6
  VAR_FLOAT x_7 y_7 z_7
  VAR_FLOAT x_8 y_8 z_8
  VAR_FLOAT x_9 y_9 z_9
  VAR_FLOAT x_10 y_10 z_10
  VAR_FLOAT x_11 y_11 z_11
  VAR_FLOAT x_12 y_12 z_12
  VAR_FLOAT x_13 y_13 z_13
  VAR_FLOAT x_14 y_14 z_14
  VAR_FLOAT x_15 y_15 z_15
  VAR_FLOAT x_16 y_16 z_16
  VAR_FLOAT x_17 y_17 z_17
  VAR_FLOAT x_18 y_18 z_18
  VAR_FLOAT x_19 y_19 z_19
  VAR_FLOAT x_20 y_20 z_20

  VAR_INT blip_1 blip_2 blip_3
  VAR_INT blip_4 blip_5 blip_6
  VAR_INT blip_7 blip_8 blip_9
  VAR_INT blip_10 blip_11 blip_12
  VAR_INT blip_13 blip_14 blip_15
  VAR_INT blip_16 blip_17 blip_18	blip_19 blip_20
  */
  // ****************************************Mission Start************************************



}
