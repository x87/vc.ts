// Generated from main/ovalring.sc

import { $ } from "../vars.mts";

// *****************************************************************************************
// *****************************************************************************************
// *****************************************************************************************

async function body() {


  ONMISSION = 1;


  // SCRIPT_NAME OVALRNG


  await asyncWait(0);


  if ($.done_ovalring_progress == 0) {
    Stat.RegisterMissionGiven();
  }


  Text.LoadMissionText("OVALRIG");




  // LVAR_FLOAT car4_cp_x car4_cp_y car4_cp_z
  // LVAR_FLOAT car5_cp_x car5_cp_y car5_cp_z
  // LVAR_FLOAT car6_cp_x car6_cp_y car6_cp_z
  // LVAR_FLOAT car7_cp_x car7_cp_y car7_cp_z
  // LVAR_FLOAT car8_cp_x car8_cp_y car8_cp_z


  $.gosub_cpcounter = 0;
  $.player_cpcounter = 0;
  $.car1_cpcounter = 0;
  $.car2_cpcounter = 0;
  $.car3_cpcounter = 0;
  $.car4_cpcounter = 0;
  $.car5_cpcounter = 0;
  $.car6_cpcounter = 0;
  $.car7_cpcounter = 0;
  $.car8_cpcounter = 0;
  $.car9_cpcounter = 0;
  $.car10_cpcounter = 0;
  $.car11_cpcounter = 0;
  $.car12_cpcounter = 0;
  $.car10_cpcounter = 0;
  $.car14_cpcounter = 0;
  $.car15_cpcounter = 0;


  $.car1_laps = 0;
  $.car2_laps = 0;
  $.car3_laps = 0;
  $.car4_laps = 0;
  $.car5_laps = 0;
  $.car6_laps = 0;
  $.car7_laps = 0;
  $.car8_laps = 0;
  $.car9_laps = 0;
  $.car10_laps = 0;
  $.car11_laps = 0;
  $.car12_laps = 0;
  $.car13_laps = 0;
  $.car14_laps = 0;
  $.car15_laps = 0;


  $.car1_stuck_timer = 0;
  $.car2_stuck_timer = 0;
  $.car3_stuck_timer = 0;
  $.car4_stuck_timer = 0;
  $.car5_stuck_timer = 0;
  $.car6_stuck_timer = 0;
  $.car7_stuck_timer = 0;
  $.car8_stuck_timer = 0;
  $.car9_stuck_timer = 0;
  $.car10_stuck_timer = 0;
  $.car11_stuck_timer = 0;
  $.car12_stuck_timer = 0;
  $.car13_stuck_timer = 0;
  $.car14_stuck_timer = 0;
  $.car15_stuck_timer = 0;


  $.nascar1_timer = 0;
  $.nascar2_timer = 0;
  $.nascar3_timer = 0;
  $.nascar4_timer = 0;
  $.nascar5_timer = 0;
  $.nascar6_timer = 0;
  $.nascar7_timer = 0;
  $.nascar8_timer = 0;
  $.nascar9_timer = 0;
  $.nascar10_timer = 0;
  $.nascar11_timer = 0;
  $.nascar12_timer = 0;
  $.nascar13_timer = 0;
  $.nascar14_timer = 0;
  $.nascar15_timer = 0;


  $.do_winning_text_shite = 0;
  $.showcase = -1;
  $.showcase_timer = 0;
  $.nascar_laps = 0;
  $.player_result = 0;
  $.gosub_result = 0;
  $.heading_done_flag = 0;
  $.gosub_nascar = -1;
  $.gosub_driver = -1;
  $.nascar_best_time_last = 0;
  $.nascar_time = 0;
  $.hot_audio_flag = 0;
  $.position = 0;
  $.skip_scut_button = 0;
  $.last_audio_played = 0;
  $.nascar_lap_timer_start = 0;
  $.players_nascar_health = 100;


  $.gosub_cp_x = 0.0;
  $.gosub_cp_y = 0.0;
  $.gosub_cp_z = 0.0;


  $.cp1_x = -1288.976;
  $.cp1_y = 1190.669;
  $.cp1_z = 264.291;


  $.cp2_x = -1257.085;
  $.cp2_y = 1245.841;
  $.cp2_z = 264.296;


  $.cp3_x = -1296.749;
  $.cp3_y = 1306.123;
  $.cp3_z = 264.296;


  $.cp4_x = -1366.372;
  $.cp4_y = 1326.72;
  $.cp4_z = 264.296;


  $.cp5_x = -1419.235;
  $.cp5_y = 1327.06;
  $.cp5_z = 264.296;


  $.cp6_x = -1500.381;
  $.cp6_y = 1306.066;
  $.cp6_z = 264.296;


  $.cp7_x = -1540.008;
  $.cp7_y = 1245.841;
  $.cp7_z = 264.296;


  $.cp8_x = -1500.446;
  $.cp8_y = 1185.51;
  $.cp8_z = 264.296;


  $.cp9_x = -1419.234;
  $.cp9_y = 1164.33;
  $.cp9_z = 264.296;


  $.cp10_x = -1355.087;
  $.cp10_y = 1165.782;
  $.cp10_z = 264.296;


  Streaming.SetAreaVisible(VIS_OVALRING);
  Game.SetIsInStadium(true /* TRUE */);
  Hud.DisplayRadar(false /* FALSE */);
  World.SetExtraColors(11, false /* FALSE */);


  $.player1.setCoordinates(-1420.856, 1245.843, 251.379);


  Streaming.RequestModel(WMYCR);
  Streaming.RequestModel(HOTRINA);
  Streaming.RequestModel(HOTRINB);
  Streaming.RequestModel(HOTRING);


  Streaming.LoadScene(-1343.7432, 1151.8137, 275.7988);
  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasModelLoaded(WMYCR)) || !(Streaming.HasModelLoaded(HOTRINA)) || !(Streaming.HasModelLoaded(HOTRINB)) || !(Streaming.HasModelLoaded(HOTRING))) {
    await asyncWait(0);
  }


  Camera.SetFixedPosition(-1318.2053, 1163.3895, 273.7596, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-1319.1184, 1163.7313, 273.5374, 2 /* JUMP_CUT */);
  Hud.SwitchWidescreen(true /* ON */);
  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
  Game.SetAllCarsCanBeDamaged(false /* FALSE */);


  if (ONMISSION == 0) {
    $.gosub_driver = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, 0.0, 0.0, 0.0);
    $.driver_car1 = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, 0.0, 0.0, 0.0);
    $.driver_car2 = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, 0.0, 0.0, 0.0);
    $.driver_car3 = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, 0.0, 0.0, 0.0);
    $.driver_car4 = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, 0.0, 0.0, 0.0);
    $.driver_car5 = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, 0.0, 0.0, 0.0);
    $.driver_car6 = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, 0.0, 0.0, 0.0);
    $.driver_car7 = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, 0.0, 0.0, 0.0);
    $.driver_car8 = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, 0.0, 0.0, 0.0);
    $.driver_car9 = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, 0.0, 0.0, 0.0);
    $.driver_car10 = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, 0.0, 0.0, 0.0);
    $.driver_car11 = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, 0.0, 0.0, 0.0);
    $.driver_car12 = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, 0.0, 0.0, 0.0);
    $.driver_car13 = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, 0.0, 0.0, 0.0);
    $.driver_car14 = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, 0.0, 0.0, 0.0);
    $.driver_car15 = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, 0.0, 0.0, 0.0);
  }


  $.nascar1 = Car.Create(HOTRINA, -1344.4868, 1172.7334, 263.8694);
  $.nascar1.setHeading(284.8876);
  const _res348 = $.nascar1.getCoordinates();
$.car1_cp_x = _res348.x;
$.car1_cp_y = _res348.y;
$.car1_cp_z = _res348.z;
  $.gosub_nascar = $.nascar1;
  await setup_nascar_stuff();  // SCM GOSUB setup_nascar_stuff
  $.driver_car1 = $.gosub_driver;


  Car.SetModelComponents(HOTRINA, 0, -1);
  $.nascar2 = Car.Create(HOTRINA, -1343.4382, 1167.8365, 264.6195);
  $.nascar2.setHeading(281.5068);
  const _res349 = $.nascar2.getCoordinates();
$.car2_cp_x = _res349.x;
$.car2_cp_y = _res349.y;
$.car2_cp_z = _res349.z;
  $.gosub_nascar = $.nascar2;
  await setup_nascar_stuff();  // SCM GOSUB setup_nascar_stuff
  $.driver_car2 = $.gosub_driver;


  Car.SetModelComponents(HOTRINA, 1, -1);
  $.nascar3 = Car.Create(HOTRINA, -1354.2965, 1170.2894, 263.9862);
  $.nascar3.setHeading(282.7367);
  const _res350 = $.nascar3.getCoordinates();
$.car3_cp_x = _res350.x;
$.car3_cp_y = _res350.y;
$.car3_cp_z = _res350.z;
  $.gosub_nascar = $.nascar3;
  await setup_nascar_stuff();  // SCM GOSUB setup_nascar_stuff
  $.driver_car3 = $.gosub_driver;


  Car.SetModelComponents(HOTRINA, 2, -1);
  $.nascar4 = Car.Create(HOTRINA, -1352.8469, 1165.5270, 264.7497);
  $.nascar4.setHeading(284.2442);
  [car4_cp_x, car4_cp_y, car4_cp_z] = $.nascar4.getCoordinates();
  $.gosub_nascar = $.nascar4;
  await setup_nascar_stuff();  // SCM GOSUB setup_nascar_stuff
  $.driver_car4 = $.gosub_driver;


  Car.SetModelComponents(HOTRINA, 3, -1);
  $.nascar5 = Car.Create(HOTRINA, -1363.7577, 1169.0784, 264.0151);
  $.nascar5.setHeading(276.4275);
  [car5_cp_x, car5_cp_y, car5_cp_z] = $.nascar5.getCoordinates();
  $.gosub_nascar = $.nascar5;
  await setup_nascar_stuff();  // SCM GOSUB setup_nascar_stuff
  $.driver_car5 = $.gosub_driver;


  Car.SetModelComponents(HOTRINA, 4, -1);
  $.nascar6 = Car.Create(HOTRINA, -1363.6703, 1164.1503, 264.7848);
  $.nascar6.setHeading(277.8466);
  [car6_cp_x, car6_cp_y, car6_cp_z] = $.nascar6.getCoordinates();
  $.gosub_nascar = $.nascar6;
  await setup_nascar_stuff();  // SCM GOSUB setup_nascar_stuff
  $.driver_car6 = $.gosub_driver;


  Car.SetModelComponents(HOTRINA, 5, -1);
  $.nascar7 = Car.Create(HOTRINA, -1373.8792, 1168.6543, 264.0179);
  $.nascar7.setHeading(273.3020);
  [car7_cp_x, car7_cp_y, car7_cp_z] = $.nascar7.getCoordinates();
  $.gosub_nascar = $.nascar7;
  await setup_nascar_stuff();  // SCM GOSUB setup_nascar_stuff
  $.driver_car7 = $.gosub_driver;


  Car.SetModelComponents(HOTRINB, 0, -1);
  $.nascar8 = Car.Create(HOTRINB, -1374.5608, 1163.0554, 264.9375);
  $.nascar8.setHeading(272.9799);
  [car8_cp_x, car8_cp_y, car8_cp_z] = $.nascar8.getCoordinates();
  $.gosub_nascar = $.nascar8;
  await setup_nascar_stuff();  // SCM GOSUB setup_nascar_stuff
  $.driver_car8 = $.gosub_driver;


  Car.SetModelComponents(HOTRINB, 1, -1);
  $.nascar9 = Car.Create(HOTRINB, -1383.6681, 1167.9469, 264.1144);
  $.nascar9.setHeading(273.0015);
  const _res351 = $.nascar9.getCoordinates();
$.car9_cp_x = _res351.x;
$.car9_cp_y = _res351.y;
$.car9_cp_z = _res351.z;
  $.gosub_nascar = $.nascar9;
  await setup_nascar_stuff();  // SCM GOSUB setup_nascar_stuff
  $.driver_car9 = $.gosub_driver;


  Car.SetModelComponents(HOTRINB, 2, -1);
  $.nascar10 = Car.Create(HOTRINB, -1383.5819, 1162.9030, 264.9546);
  $.nascar10.setHeading(269.9305);
  const _res352 = $.nascar10.getCoordinates();
$.car10_cp_x = _res352.x;
$.car10_cp_y = _res352.y;
$.car10_cp_z = _res352.z;
  $.gosub_nascar = $.nascar10;
  await setup_nascar_stuff();  // SCM GOSUB setup_nascar_stuff
  $.driver_car10 = $.gosub_driver;


  Car.SetModelComponents(HOTRINB, 3, -1);
  $.nascar11 = Car.Create(HOTRINB, -1393.2231, 1167.7117, 264.1403);
  $.nascar11.setHeading(270.1651);
  const _res353 = $.nascar11.getCoordinates();
$.car11_cp_x = _res353.x;
$.car11_cp_y = _res353.y;
$.car11_cp_z = _res353.z;
  $.gosub_nascar = $.nascar11;
  await setup_nascar_stuff();  // SCM GOSUB setup_nascar_stuff
  $.driver_car11 = $.gosub_driver;


  Car.SetModelComponents(HOTRINB, 4, -1);
  $.nascar12 = Car.Create(HOTRINB, -1393.1036, 1163.0526, 264.9140);
  $.nascar12.setHeading(270.3340);
  const _res354 = $.nascar12.getCoordinates();
$.car12_cp_x = _res354.x;
$.car12_cp_y = _res354.y;
$.car12_cp_z = _res354.z;
  $.gosub_nascar = $.nascar12;
  await setup_nascar_stuff();  // SCM GOSUB setup_nascar_stuff
  $.driver_car12 = $.gosub_driver;


  Car.SetModelComponents(HOTRINB, 5, -1);
  $.nascar13 = Car.Create(HOTRINB, -1402.1838, 1167.1935, 264.2093);
  $.nascar13.setHeading(271.0722);
  const _res355 = $.nascar13.getCoordinates();
$.car13_cp_x = _res355.x;
$.car13_cp_y = _res355.y;
$.car13_cp_z = _res355.z;
  $.gosub_nascar = $.nascar13;
  await setup_nascar_stuff();  // SCM GOSUB setup_nascar_stuff
  $.driver_car13 = $.gosub_driver;


  $.nascar14 = Car.Create(HOTRINA, -1402.3752, 1163.0569, 264.9016);
  $.nascar14.setHeading(266.2549);
  const _res356 = $.nascar14.getCoordinates();
$.car14_cp_x = _res356.x;
$.car14_cp_y = _res356.y;
$.car14_cp_z = _res356.z;
  $.gosub_nascar = $.nascar14;
  await setup_nascar_stuff();  // SCM GOSUB setup_nascar_stuff
  $.driver_car14 = $.gosub_driver;


  $.nascar15 = Car.Create(HOTRINB, -1412.1112, 1167.2113, 264.2081);
  $.nascar15.setHeading(273.8779);
  const _res357 = $.nascar15.getCoordinates();
$.car15_cp_x = _res357.x;
$.car15_cp_y = _res357.y;
$.car15_cp_z = _res357.z;
  $.gosub_nascar = $.nascar15;
  await setup_nascar_stuff();  // SCM GOSUB setup_nascar_stuff
  $.driver_car15 = $.gosub_driver;


  $.players_nascar = Car.Create(HOTRING, -1411.9487, 1162.9200, 264.9160);
  $.players_nascar.setHeading(271.2772);
  $.players_nascar.setHealth(1250);
  $.players_nascar.setProofs(false /* FALSE */, true /* TRUE */, true /* TRUE */, false /* FALSE */, false /* FALSE */);
  const _res358 = $.players_nascar.getCoordinates();
$.player1_cp_x = _res358.x;
$.player1_cp_y = _res358.y;
$.player1_cp_z = _res358.z;


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  await asyncWait(250);


  $.true_false = 1;
  await freeze_all_cars();  // SCM GOSUB freeze_all_cars


  if (!($.player1.isInAnyCar())) {
    if (!(Car.IsDead($.players_nascar))) {
      $.player1.warpIntoCar($.players_nascar);
    }
  }
  else {
    $.player1.warpFromCarToCoord(-1504.1985, 1314.8457, 265.2744);
    await asyncWait(0);
    if (!(Car.IsDead($.players_nascar))) {
      $.player1.warpIntoCar($.players_nascar);
    }
  }


  Text.PrintNow("HOTR_01", 8000, 1); //~g~The Race lasts for 20 laps. Only 1st, 2nd and 3rd places qualify for winnings.
  $.game_timer = Clock.GetGameTimer();


  $.heading_done_flag = 1;
  Text.UseCommands(true /* TRUE */);


  TIMERA = 0;
}



async function ovalring_loop() {
  // SCM GOTO → ovalring_loop lowered to endless loop
  while (true) {


    await asyncWait(0);


    $.game_timer = Clock.GetGameTimer();

    //LOCATE FOR LEAVING RING

    if ($.player1.locateOnFoot3D(-1414.7529, 1155.4344, 266.3521, 1.5, 2.0, 1.5, true)) {
      Text.PrintNow("HOTR_14", 2500, 1); //~r~You have been disqualified!
      // SCM GOTO → mission_ovalring_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_ovalring_failed"); // fallback: would break linear control flow
    }

    //GARAGE FOR PITSTOP
    //(-1405.369 1350.573 264.936) (-1387.369 1350.573) (-1405.369 1358.573) (274.936)


    if ($.showcase < 5) {
      if ($.showcase > -1) {
        if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
          if ($.skip_scut_button == 1) {
            Text.ClearSmallPrints();
            $.showcase_timer = $.game_timer - 100;
            $.showcase = 5;
          }
        }
        else {
          if ($.skip_scut_button == 0) {
            $.skip_scut_button = 1;
          }
        }
      }
    }


    if ($.showcase == -1) {
      $.do_winning_text_shite = 2;
      if (!(Camera.GetFadingStatus())) {
        $.showcase_timer = $.game_timer + 3000;
        $.showcase = 0;
      }
    }


    if ($.showcase == 0) {
      if ($.game_timer > $.showcase_timer) {
        Camera.SetFixedPosition(-1334.6658, 1172.5107, 266.2422, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(-1335.6278, 1172.2643, 266.1259, 2 /* JUMP_CUT */);
        $.showcase_timer = $.game_timer + 3000;
        $.showcase = 1;
      }
    }


    if ($.showcase == 1) {
      if ($.game_timer > $.showcase_timer) {
        Camera.SetFixedPosition(-1323.0051, 1328.0702, 270.0141, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(-1323.9810, 1328.2347, 269.8705, 2 /* JUMP_CUT */);
        Text.PrintNow("HOTR_02", 3500, 1); //~g~If your car is destroyed you will be disqualified.
        $.showcase_timer = $.game_timer + 3500;
        $.showcase = 2;
      }
    }


    if ($.showcase == 2) {
      if ($.game_timer > $.showcase_timer) {
        Camera.SetFixedPosition(-1378.5305, 1355.8339, 271.5822, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(-1379.4496, 1355.7017, 271.2112, 2 /* JUMP_CUT */);
        Text.Print("HOTR_03", 4500, 1); //~g~When your car is damaged you can get it repaired at the pitstop.
        $.showcase_timer = $.game_timer + 4500;
        $.showcase = 3;
      }
    }


    if ($.showcase == 3) {
      if ($.game_timer > $.showcase_timer) {
        Camera.SetFixedPosition(-1394.7645, 1175.1836, 269.2010, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(-1395.4738, 1174.4955, 269.0483, 2 /* JUMP_CUT */);
        Text.PrintNow("HOTR_04", 4500, 1); //~g~This is the way to leave the stadium.
        $.showcase_timer = $.game_timer + 2500;
        $.showcase = 4;
      }
    }


    if ($.showcase == 4) {
      if ($.game_timer > $.showcase_timer) {
        Camera.SetFixedPosition(-1405.3292, 1161.4934, 270.4964, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(-1406.1345, 1160.9611, 270.2356, 1 /* INTERPOLATION */);
        $.showcase_timer = $.game_timer + 2000;
        $.showcase = 5;
      }
    }


    if ($.showcase == 5) {
      if ($.game_timer > $.showcase_timer) {
        Text.UseCommands(false /* FALSE */);
        $.do_winning_text_shite = 0;
        Camera.SetBehindPlayer();
        Camera.RestoreJumpcut();
        Hud.SwitchWidescreen(false /* OFF */);
        Text.PrintBig("races_4", 1100, 4);
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 97 /* SOUND_RACE_START_3 */);
        $.showcase_timer = $.game_timer + 1000;
        $.showcase = 6;
      }
    }


    if ($.showcase == 6) {
      if ($.game_timer > $.showcase_timer) {
        Text.PrintBig("races_5", 1100, 4);
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 98 /* SOUND_RACE_START_2 */);
        $.showcase_timer = $.game_timer + 1000;
        $.showcase = 7;
      }
    }
    if ($.showcase == 7) {
      if ($.game_timer > $.showcase_timer) {
        Text.PrintBig("races_6", 1100, 4);
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 99 /* SOUND_RACE_START_1 */);
        $.showcase_timer = $.game_timer + 1000;
        $.showcase = 8;
      }
    }
    if ($.showcase == 8) {
      if ($.game_timer > $.showcase_timer) {
        if (!(Car.IsDead($.players_nascar))) {
          $.true_false = 0;
          await freeze_all_cars();  // SCM GOSUB freeze_all_cars
          Text.PrintBig("races_7", 800, 4);
          Sound.AddOneOffSound(0.0, 0.0, 0.0, 100 /* SOUND_RACE_START_GO */);
          $.player1.setControl(true /* ON */);
          Game.SetEveryoneIgnorePlayer($.player1, false /* FALSE */);
          Game.SetAllCarsCanBeDamaged(true /* TRUE */);
          Hud.DisplayNthCounterWithString($.players_nascar_health, 1 /* COUNTER_DISPLAY_BAR */, 1, "HOTR_05");
          $.gosub_cpcounter = $.player_cpcounter;
          await get_next_ovalring_checkpoint();  // SCM GOSUB get_next_ovalring_checkpoint
          $.player1_cp_x = $.gosub_cp_x;
          $.player1_cp_y = $.gosub_cp_y;
          $.player1_cp_z = $.gosub_cp_z;
          $.player_cpcounter = $.gosub_cpcounter;
          Hud.DisplayNthCounterWithString($.nascar_laps, 0 /* COUNTER_DISPLAY_NUMBER */, 2, "HOTR_06");
          Hud.DisplayNthCounterWithString($.position, 0 /* COUNTER_DISPLAY_NUMBER */, 3, "HOTR_09");
          Hud.DisplayTimerWithString($.$id.nascar_time, TIMER_UP, "HOTR_10");
          $.nascar_lap_timer_start = $.game_timer;
          $.showcase = 9;
        }
      }
    }


    if ($.showcase == 9) {
      $.position = 1;
      if (Car.IsDead($.players_nascar)) {
        Text.PrintNow("HOTR_12", 2000, 1); //~r~Your car has been destroyed!
        // SCM GOTO → mission_ovalring_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_ovalring_failed"); // fallback: would break linear control flow
      }
      else {
        if ($.players_nascar.locateStopped3D(-1396.369, 1354.573, 265.0766, 9.0, 4.0, 5.0, true)) {
          if ($.player1.isSittingInCar($.players_nascar)) {
            $.players_nascar_health = $.players_nascar.getHealth();
            $.players_nascar_health += 5;
            if ($.players_nascar_health > 1250) {
              $.players_nascar_health = 1250;
            }
            $.players_nascar.setHealth($.players_nascar_health);
          }
        }
        $.players_nascar_health = $.players_nascar.getHealth();
        $.players_nascar_health -= 250;
        $.players_nascar_health /= 10;
        if ($.players_nascar_health < 0) {
          $.players_nascar_health = 0;
        }
      }
      if ($.player1.locateInCar3D($.player1_cp_x, $.player1_cp_y, $.player1_cp_z, 24.0, 24.0, 24.0, false)) {
        $.gosub_cpcounter = $.player_cpcounter;
        await get_next_ovalring_checkpoint();  // SCM GOSUB get_next_ovalring_checkpoint
        $.player1_cp_x = $.gosub_cp_x;
        $.player1_cp_y = $.gosub_cp_y;
        $.player1_cp_z = $.gosub_cp_z;
        $.player_cpcounter = $.gosub_cpcounter;
        if ($.player_cpcounter == 0) {
          ++$.nascar_laps;
          $.nascar_lap_timer = $.game_timer - $.nascar_lap_timer_start;
          $.seconds = $.nascar_lap_timer / 1000;
          $.miliseconds = $.seconds * 1000;
          $.temp_int = $.nascar_lap_timer - $.miliseconds;
          $.miliseconds = $.temp_int / 10;
          if ($.nascar_best_lap_time > $.nascar_lap_timer) {
            $.nascar_best_lap_time = $.nascar_lap_timer;
            Stat.RegisterFastestTime(21, $.nascar_best_lap_time); //Hot Ring Best Lap Time: xx.xx seconds
            if ($.miliseconds > 9) {
              Text.PrintWith2NumbersNow("HOTR_11", $.seconds, $.miliseconds, 5000, 1); //~g~New best lap time: ~1~.~1~ seconds
            }
            else {
              Text.PrintWith2NumbersNow("HOTR_34", $.seconds, $.miliseconds, 5000, 1); //~g~New best lap time: ~1~.0~1~ seconds
            }
          }
          $.nascar_lap_timer_start = $.game_timer;
          Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        }
      }
      $.player_result = $.nascar_laps * 100;
      $.player_result += $.player_cpcounter;
      if (Car.IsDead($.nascar1)) {
        $.nascar1.markAsNoLongerNeeded();
        $.driver_car1.markAsNoLongerNeeded();
        if (!(World.IsPointObscuredByAMissionEntity(-1409.7168, 1144.9703, 266.3857, 4.0, 4.0, 2.0))) {
          $.nascar1 = Car.Create(HOTRINA, -1409.7168, 1144.9703, 266.3857);
          $.gosub_nascar = $.nascar1;
          await setup_nascar_stuff();  // SCM GOSUB setup_nascar_stuff
          $.driver_car1 = $.gosub_driver;
          if ($.car1_laps < $.nascar_laps) {
            $.car1_laps = $.nascar_laps;
          }
          $.car1_cpcounter = 0;
          $.gosub_cpcounter = $.car1_cpcounter;
          await get_next_ovalring_checkpoint();  // SCM GOSUB get_next_ovalring_checkpoint
          $.car1_cp_x = $.gosub_cp_x;
          $.car1_cp_y = $.gosub_cp_y;
          $.car1_cp_z = $.gosub_cp_z;
          $.nascar1.gotoCoordinates($.car1_cp_x, $.car1_cp_y, $.car1_cp_z);
          $.nascar1.setForwardSpeed(30.0);


        }
      }
      else {
        if ($.nascar1.locate3D($.car1_cp_x, $.car1_cp_y, $.car1_cp_z, 24.0, 24.0, 24.0, false)) {
          $.gosub_cpcounter = $.car1_cpcounter;
          await get_next_ovalring_checkpoint();  // SCM GOSUB get_next_ovalring_checkpoint
          $.car1_cp_x = $.gosub_cp_x;
          $.car1_cp_y = $.gosub_cp_y;
          $.car1_cp_z = $.gosub_cp_z;
          $.car1_cpcounter = $.gosub_cpcounter;
          if ($.car1_cpcounter == 0) {
            ++$.car1_laps;
          }
          $.nascar1.gotoCoordinates($.car1_cp_x, $.car1_cp_y, $.car1_cp_z);
          $.car1_result = $.car1_laps * 100;
          $.car1_result += $.car1_cpcounter;
        }
        if ($.nascar1.locate3D($.car1_stuck_x, $.car1_stuck_y, $.car1_stuck_z, 3.0, 3.0, 3.0, false)) {
          if ($.car1_stuck_timer < $.game_timer) {
            $.nascar1.setHealth(230);
          }
        }
        else {
          const _res359 = $.nascar1.getCoordinates();
$.car1_stuck_x = _res359.x;
$.car1_stuck_y = _res359.y;
$.car1_stuck_z = _res359.z;
          $.car1_stuck_timer = $.game_timer + 5000;
        }
        if ($.nascar1.locate3D(-1409.7168, 1144.9703, 266.3857, 5.0, 5.0, 3.0, false)) {
          if ($.nascar1_timer < $.game_timer) {
            $.nascar1.setHealth(100);
            $.nascar1.markAsNoLongerNeeded();
            $.driver_car1.markAsNoLongerNeeded();
            $.nascar1 = -1;
          }
        }
        else {
          $.nascar1_timer = $.game_timer + 3000;
        }
      }
      $.gosub_result = $.car1_result;
      $.car = $.nascar1;
      await work_out_players_position();  // SCM GOSUB work_out_players_position
      if (Car.IsDead($.nascar2)) {
        $.nascar2.markAsNoLongerNeeded();
        $.driver_car2.markAsNoLongerNeeded();
        if (!(World.IsPointObscuredByAMissionEntity(-1409.7168, 1144.9703, 266.3857, 4.0, 4.0, 2.0))) {
          Car.SetModelComponents(HOTRINA, 0, -1);
          $.nascar2 = Car.Create(HOTRINA, -1409.7168, 1144.9703, 266.3857);
          $.gosub_nascar = $.nascar2;
          await setup_nascar_stuff();  // SCM GOSUB setup_nascar_stuff
          $.driver_car2 = $.gosub_driver;
          if ($.car2_laps < $.nascar_laps) {
            $.car2_laps = $.nascar_laps;
          }
          $.car2_cpcounter = 0;
          $.gosub_cpcounter = $.car2_cpcounter;
          await get_next_ovalring_checkpoint();  // SCM GOSUB get_next_ovalring_checkpoint
          $.car2_cp_x = $.gosub_cp_x;
          $.car2_cp_y = $.gosub_cp_y;
          $.car2_cp_z = $.gosub_cp_z;
          $.nascar2.gotoCoordinates($.car2_cp_x, $.car2_cp_y, $.car2_cp_z);
          $.nascar2.setForwardSpeed(30.0);


        }
      }
      else {
        if ($.nascar2.locate3D($.car2_cp_x, $.car2_cp_y, $.car2_cp_z, 24.0, 24.0, 24.0, false)) {
          $.gosub_cpcounter = $.car2_cpcounter;
          await get_next_ovalring_checkpoint();  // SCM GOSUB get_next_ovalring_checkpoint
          $.car2_cp_x = $.gosub_cp_x;
          $.car2_cp_y = $.gosub_cp_y;
          $.car2_cp_z = $.gosub_cp_z;
          $.car2_cpcounter = $.gosub_cpcounter;
          if ($.car2_cpcounter == 0) {
            ++$.car2_laps;
          }
          $.nascar2.gotoCoordinates($.car2_cp_x, $.car2_cp_y, $.car2_cp_z);
          $.car2_result = $.car2_laps * 100;
          $.car2_result += $.car2_cpcounter;
        }
        if ($.nascar2.locate3D($.car2_stuck_x, $.car2_stuck_y, $.car2_stuck_z, 3.0, 3.0, 3.0, false)) {
          if ($.car2_stuck_timer < $.game_timer) {
            $.nascar2.setHealth(230);
          }
        }
        else {
          const _res360 = $.nascar2.getCoordinates();
$.car2_stuck_x = _res360.x;
$.car2_stuck_y = _res360.y;
$.car2_stuck_z = _res360.z;
          $.car2_stuck_timer = $.game_timer + 5000;
        }
        if ($.nascar2.locate3D(-1409.7168, 1144.9703, 266.3857, 5.0, 5.0, 3.0, false)) {
          if ($.nascar2_timer < $.game_timer) {
            $.nascar2.setHealth(100);
            $.nascar2.markAsNoLongerNeeded();
            $.driver_car2.markAsNoLongerNeeded();
            $.nascar2 = -1;
          }
        }
        else {
          $.nascar2_timer = $.game_timer + 3000;
        }
      }
      $.gosub_result = $.car2_result;
      $.car = $.nascar2;
      await work_out_players_position();  // SCM GOSUB work_out_players_position
      if (Car.IsDead($.nascar3)) {
        $.nascar3.markAsNoLongerNeeded();
        $.driver_car3.markAsNoLongerNeeded();
        if (!(World.IsPointObscuredByAMissionEntity(-1409.7168, 1144.9703, 266.3857, 4.0, 4.0, 2.0))) {
          Car.SetModelComponents(HOTRINA, 1, -1);
          $.nascar3 = Car.Create(HOTRINA, -1409.7168, 1144.9703, 266.3857);
          $.gosub_nascar = $.nascar3;
          await setup_nascar_stuff();  // SCM GOSUB setup_nascar_stuff
          $.driver_car3 = $.gosub_driver;
          if ($.car3_laps < $.nascar_laps) {
            $.car3_laps = $.nascar_laps;
          }
          $.car3_cpcounter = 0;
          $.gosub_cpcounter = $.car3_cpcounter;
          await get_next_ovalring_checkpoint();  // SCM GOSUB get_next_ovalring_checkpoint
          $.car3_cp_x = $.gosub_cp_x;
          $.car3_cp_y = $.gosub_cp_y;
          $.car3_cp_z = $.gosub_cp_z;
          $.nascar3.gotoCoordinates($.car3_cp_x, $.car3_cp_y, $.car3_cp_z);
          $.nascar3.setForwardSpeed(30.0);


        }
      }
      else {
        if ($.nascar3.locate3D($.car3_cp_x, $.car3_cp_y, $.car3_cp_z, 24.0, 24.0, 24.0, false)) {
          $.gosub_cpcounter = $.car3_cpcounter;
          await get_next_ovalring_checkpoint();  // SCM GOSUB get_next_ovalring_checkpoint
          $.car3_cp_x = $.gosub_cp_x;
          $.car3_cp_y = $.gosub_cp_y;
          $.car3_cp_z = $.gosub_cp_z;
          $.car3_cpcounter = $.gosub_cpcounter;
          if ($.car3_cpcounter == 0) {
            ++$.car3_laps;
          }
          $.nascar3.gotoCoordinates($.car3_cp_x, $.car3_cp_y, $.car3_cp_z);
          $.car3_result = $.car3_laps * 100;
          $.car3_result += $.car3_cpcounter;
        }
        if ($.nascar3.locate3D($.car3_stuck_x, $.car3_stuck_y, $.car3_stuck_z, 3.0, 3.0, 3.0, false)) {
          if ($.car3_stuck_timer < $.game_timer) {
            $.nascar3.setHealth(230);
          }
        }
        else {
          const _res361 = $.nascar3.getCoordinates();
$.car3_stuck_x = _res361.x;
$.car3_stuck_y = _res361.y;
$.car3_stuck_z = _res361.z;
          $.car3_stuck_timer = $.game_timer + 5000;
        }
        if ($.nascar3.locate3D(-1409.7168, 1144.9703, 266.3857, 5.0, 5.0, 3.0, false)) {
          if ($.nascar3_timer < $.game_timer) {
            $.nascar3.setHealth(100);
            $.nascar3.markAsNoLongerNeeded();
            $.driver_car3.markAsNoLongerNeeded();
            $.nascar3 = -1;
          }
        }
        else {
          $.nascar3_timer = $.game_timer + 3000;
        }
      }
      $.gosub_result = $.car3_result;
      $.car = $.nascar3;
      await work_out_players_position();  // SCM GOSUB work_out_players_position
      if (Car.IsDead($.nascar4)) {
        $.nascar4.markAsNoLongerNeeded();
        $.driver_car4.markAsNoLongerNeeded();
        if (!(World.IsPointObscuredByAMissionEntity(-1409.7168, 1144.9703, 266.3857, 4.0, 4.0, 2.0))) {
          Car.SetModelComponents(HOTRINA, 2, -1);
          $.nascar4 = Car.Create(HOTRINA, -1409.7168, 1144.9703, 266.3857);
          $.gosub_nascar = $.nascar4;
          await setup_nascar_stuff();  // SCM GOSUB setup_nascar_stuff
          $.driver_car4 = $.gosub_driver;
          if ($.car4_laps < $.nascar_laps) {
            $.car4_laps = $.nascar_laps;
          }
          $.car4_cpcounter = 0;
          $.gosub_cpcounter = $.car4_cpcounter;
          await get_next_ovalring_checkpoint();  // SCM GOSUB get_next_ovalring_checkpoint
          car4_cp_x = $.gosub_cp_x;
          car4_cp_y = $.gosub_cp_y;
          car4_cp_z = $.gosub_cp_z;
          $.nascar4.gotoCoordinates(car4_cp_x, car4_cp_y, car4_cp_z);
          $.nascar4.setForwardSpeed(30.0);


        }
      }
      else {
        if ($.nascar4.locate3D(car4_cp_x, car4_cp_y, car4_cp_z, 24.0, 24.0, 24.0, false)) {
          $.gosub_cpcounter = $.car4_cpcounter;
          await get_next_ovalring_checkpoint();  // SCM GOSUB get_next_ovalring_checkpoint
          car4_cp_x = $.gosub_cp_x;
          car4_cp_y = $.gosub_cp_y;
          car4_cp_z = $.gosub_cp_z;
          $.car4_cpcounter = $.gosub_cpcounter;
          if ($.car4_cpcounter == 0) {
            ++$.car4_laps;
          }
          $.nascar4.gotoCoordinates(car4_cp_x, car4_cp_y, car4_cp_z);
          $.car4_result = $.car4_laps * 100;
          $.car4_result += $.car4_cpcounter;
        }
        if ($.nascar4.locate3D($.car4_stuck_x, $.car4_stuck_y, $.car4_stuck_z, 3.0, 3.0, 3.0, false)) {
          if ($.car4_stuck_timer < $.game_timer) {
            $.nascar4.setHealth(230);
          }
        }
        else {
          const _res362 = $.nascar4.getCoordinates();
$.car4_stuck_x = _res362.x;
$.car4_stuck_y = _res362.y;
$.car4_stuck_z = _res362.z;
          $.car4_stuck_timer = $.game_timer + 5000;
        }
        if ($.nascar4.locate3D(-1409.7168, 1144.9703, 266.3857, 5.0, 5.0, 3.0, false)) {
          if ($.nascar4_timer < $.game_timer) {
            $.nascar4.setHealth(100);
            $.nascar4.markAsNoLongerNeeded();
            $.driver_car4.markAsNoLongerNeeded();
            $.nascar4 = -1;
          }
        }
        else {
          $.nascar4_timer = $.game_timer + 3000;
        }
      }
      $.gosub_result = $.car4_result;
      $.car = $.nascar4;
      await work_out_players_position();  // SCM GOSUB work_out_players_position
      if (Car.IsDead($.nascar5)) {
        $.nascar5.markAsNoLongerNeeded();
        $.driver_car5.markAsNoLongerNeeded();
        if (!(World.IsPointObscuredByAMissionEntity(-1409.7168, 1144.9703, 266.3857, 4.0, 4.0, 2.0))) {
          Car.SetModelComponents(HOTRINA, 3, -1);
          $.nascar5 = Car.Create(HOTRINA, -1409.7168, 1144.9703, 266.3857);
          $.gosub_nascar = $.nascar5;
          await setup_nascar_stuff();  // SCM GOSUB setup_nascar_stuff
          $.driver_car5 = $.gosub_driver;
          if ($.car5_laps < $.nascar_laps) {
            $.car5_laps = $.nascar_laps;
          }
          $.car5_cpcounter = 0;
          $.gosub_cpcounter = $.car5_cpcounter;
          await get_next_ovalring_checkpoint();  // SCM GOSUB get_next_ovalring_checkpoint
          car5_cp_x = $.gosub_cp_x;
          car5_cp_y = $.gosub_cp_y;
          car5_cp_z = $.gosub_cp_z;
          $.nascar5.gotoCoordinates(car5_cp_x, car5_cp_y, car5_cp_z);
          $.nascar5.setForwardSpeed(30.0);


        }
      }
      else {
        if ($.nascar5.locate3D(car5_cp_x, car5_cp_y, car5_cp_z, 24.0, 24.0, 24.0, false)) {
          $.gosub_cpcounter = $.car5_cpcounter;
          await get_next_ovalring_checkpoint();  // SCM GOSUB get_next_ovalring_checkpoint
          car5_cp_x = $.gosub_cp_x;
          car5_cp_y = $.gosub_cp_y;
          car5_cp_z = $.gosub_cp_z;
          $.car5_cpcounter = $.gosub_cpcounter;
          if ($.car5_cpcounter == 0) {
            ++$.car5_laps;
          }
          $.nascar5.gotoCoordinates(car5_cp_x, car5_cp_y, car5_cp_z);
          $.car5_result = $.car5_laps * 100;
          $.car5_result += $.car5_cpcounter;
        }
        if ($.nascar5.locate3D($.car5_stuck_x, $.car5_stuck_y, $.car5_stuck_z, 3.0, 3.0, 3.0, false)) {
          if ($.car5_stuck_timer < $.game_timer) {
            $.nascar5.setHealth(230);
          }
        }
        else {
          const _res363 = $.nascar5.getCoordinates();
$.car5_stuck_x = _res363.x;
$.car5_stuck_y = _res363.y;
$.car5_stuck_z = _res363.z;
          $.car5_stuck_timer = $.game_timer + 5000;
        }
        if ($.nascar5.locate3D(-1409.7168, 1144.9703, 266.3857, 5.0, 5.0, 3.0, false)) {
          if ($.nascar5_timer < $.game_timer) {
            $.nascar5.setHealth(100);
            $.nascar5.markAsNoLongerNeeded();
            $.driver_car5.markAsNoLongerNeeded();
            $.nascar5 = -1;
          }
        }
        else {
          $.nascar5_timer = $.game_timer + 3000;
        }
      }
      $.gosub_result = $.car5_result;
      $.car = $.nascar5;
      await work_out_players_position();  // SCM GOSUB work_out_players_position
      if (Car.IsDead($.nascar6)) {
        $.nascar6.markAsNoLongerNeeded();
        $.driver_car6.markAsNoLongerNeeded();
        if (!(World.IsPointObscuredByAMissionEntity(-1409.7168, 1144.9703, 266.3857, 4.0, 4.0, 2.0))) {
          Car.SetModelComponents(HOTRINA, 4, -1);
          $.nascar6 = Car.Create(HOTRINA, -1409.7168, 1144.9703, 266.3857);
          $.gosub_nascar = $.nascar6;
          await setup_nascar_stuff();  // SCM GOSUB setup_nascar_stuff
          $.driver_car6 = $.gosub_driver;
          if ($.car6_laps < $.nascar_laps) {
            $.car6_laps = $.nascar_laps;
          }
          $.car6_cpcounter = 0;
          $.gosub_cpcounter = $.car6_cpcounter;
          await get_next_ovalring_checkpoint();  // SCM GOSUB get_next_ovalring_checkpoint
          car6_cp_x = $.gosub_cp_x;
          car6_cp_y = $.gosub_cp_y;
          car6_cp_z = $.gosub_cp_z;
          $.nascar6.gotoCoordinates(car6_cp_x, car6_cp_y, car6_cp_z);
          $.nascar6.setForwardSpeed(30.0);


        }
      }
      else {
        if ($.nascar6.locate3D(car6_cp_x, car6_cp_y, car6_cp_z, 24.0, 24.0, 24.0, false)) {
          $.gosub_cpcounter = $.car6_cpcounter;
          await get_next_ovalring_checkpoint();  // SCM GOSUB get_next_ovalring_checkpoint
          car6_cp_x = $.gosub_cp_x;
          car6_cp_y = $.gosub_cp_y;
          car6_cp_z = $.gosub_cp_z;
          $.car6_cpcounter = $.gosub_cpcounter;
          if ($.car6_cpcounter == 0) {
            ++$.car6_laps;
          }
          $.nascar6.gotoCoordinates(car6_cp_x, car6_cp_y, car6_cp_z);
          $.car6_result = $.car6_laps * 100;
          $.car6_result += $.car6_cpcounter;
        }
        if ($.nascar6.locate3D($.car6_stuck_x, $.car6_stuck_y, $.car6_stuck_z, 3.0, 3.0, 3.0, false)) {
          if ($.car6_stuck_timer < $.game_timer) {
            $.nascar6.setHealth(230);
          }
        }
        else {
          const _res364 = $.nascar6.getCoordinates();
$.car6_stuck_x = _res364.x;
$.car6_stuck_y = _res364.y;
$.car6_stuck_z = _res364.z;
          $.car6_stuck_timer = $.game_timer + 5000;
        }
        if ($.nascar6.locate3D(-1409.7168, 1144.9703, 266.3857, 5.0, 5.0, 3.0, false)) {
          if ($.nascar6_timer < $.game_timer) {
            $.nascar6.setHealth(100);
            $.nascar6.markAsNoLongerNeeded();
            $.driver_car6.markAsNoLongerNeeded();
            $.nascar6 = -1;
          }
        }
        else {
          $.nascar6_timer = $.game_timer + 3000;
        }
      }
      $.gosub_result = $.car6_result;
      $.car = $.nascar6;
      await work_out_players_position();  // SCM GOSUB work_out_players_position
      if (Car.IsDead($.nascar7)) {
        $.nascar7.markAsNoLongerNeeded();
        $.driver_car7.markAsNoLongerNeeded();
        if (!(World.IsPointObscuredByAMissionEntity(-1409.7168, 1144.9703, 266.3857, 4.0, 4.0, 2.0))) {
          $.nascar7 = Car.Create(HOTRINA, -1409.7168, 1144.9703, 266.3857);
          $.gosub_nascar = $.nascar7;
          await setup_nascar_stuff();  // SCM GOSUB setup_nascar_stuff
          $.driver_car7 = $.gosub_driver;
          if ($.car7_laps < $.nascar_laps) {
            $.car7_laps = $.nascar_laps;
          }
          $.car7_cpcounter = 0;
          $.gosub_cpcounter = $.car7_cpcounter;
          await get_next_ovalring_checkpoint();  // SCM GOSUB get_next_ovalring_checkpoint
          car7_cp_x = $.gosub_cp_x;
          car7_cp_y = $.gosub_cp_y;
          car7_cp_z = $.gosub_cp_z;
          $.nascar7.gotoCoordinates(car7_cp_x, car7_cp_y, car7_cp_z);
          $.nascar7.setForwardSpeed(30.0);


        }
      }
      else {
        if ($.nascar7.locate3D(car7_cp_x, car7_cp_y, car7_cp_z, 24.0, 24.0, 24.0, false)) {
          $.gosub_cpcounter = $.car7_cpcounter;
          await get_next_ovalring_checkpoint();  // SCM GOSUB get_next_ovalring_checkpoint
          car7_cp_x = $.gosub_cp_x;
          car7_cp_y = $.gosub_cp_y;
          car7_cp_z = $.gosub_cp_z;
          $.car7_cpcounter = $.gosub_cpcounter;
          if ($.car7_cpcounter == 0) {
            ++$.car7_laps;
          }
          $.nascar7.gotoCoordinates(car7_cp_x, car7_cp_y, car7_cp_z);
          $.car7_result = $.car7_laps * 100;
          $.car7_result += $.car7_cpcounter;
        }
        if ($.nascar7.locate3D($.car7_stuck_x, $.car7_stuck_y, $.car7_stuck_z, 3.0, 3.0, 3.0, false)) {
          if ($.car7_stuck_timer < $.game_timer) {
            $.nascar7.setHealth(230);
          }
        }
        else {
          const _res365 = $.nascar7.getCoordinates();
$.car7_stuck_x = _res365.x;
$.car7_stuck_y = _res365.y;
$.car7_stuck_z = _res365.z;
          $.car7_stuck_timer = $.game_timer + 5000;
        }
        if ($.nascar7.locate3D(-1409.7168, 1144.9703, 266.3857, 5.0, 5.0, 3.0, false)) {
          if ($.nascar7_timer < $.game_timer) {
            $.nascar7.setHealth(100);
            $.nascar7.markAsNoLongerNeeded();
            $.driver_car7.markAsNoLongerNeeded();
            $.nascar7 = -1;
          }
        }
        else {
          $.nascar7_timer = $.game_timer + 3000;
        }
      }
      $.gosub_result = $.car7_result;
      $.car = $.nascar7;
      await work_out_players_position();  // SCM GOSUB work_out_players_position
      if (Car.IsDead($.nascar8)) {
        $.nascar8.markAsNoLongerNeeded();
        $.driver_car8.markAsNoLongerNeeded();
        if (!(World.IsPointObscuredByAMissionEntity(-1409.7168, 1144.9703, 266.3857, 4.0, 4.0, 2.0))) {
          Car.SetModelComponents(HOTRINB, 0, -1);
          $.nascar8 = Car.Create(HOTRINB, -1409.7168, 1144.9703, 266.3857);
          $.gosub_nascar = $.nascar8;
          await setup_nascar_stuff();  // SCM GOSUB setup_nascar_stuff
          $.driver_car8 = $.gosub_driver;
          if ($.car8_laps < $.nascar_laps) {
            $.car8_laps = $.nascar_laps;
          }
          $.car8_cpcounter = 0;
          $.gosub_cpcounter = $.car8_cpcounter;
          await get_next_ovalring_checkpoint();  // SCM GOSUB get_next_ovalring_checkpoint
          car8_cp_x = $.gosub_cp_x;
          car8_cp_y = $.gosub_cp_y;
          car8_cp_z = $.gosub_cp_z;
          $.nascar8.gotoCoordinates(car8_cp_x, car8_cp_y, car8_cp_z);
          $.nascar8.setForwardSpeed(30.0);


        }
      }
      else {
        if ($.nascar8.locate3D(car8_cp_x, car8_cp_y, car8_cp_z, 24.0, 24.0, 24.0, false)) {
          $.gosub_cpcounter = $.car8_cpcounter;
          await get_next_ovalring_checkpoint();  // SCM GOSUB get_next_ovalring_checkpoint
          car8_cp_x = $.gosub_cp_x;
          car8_cp_y = $.gosub_cp_y;
          car8_cp_z = $.gosub_cp_z;
          $.car8_cpcounter = $.gosub_cpcounter;
          if ($.car8_cpcounter == 0) {
            ++$.car8_laps;
          }
          $.nascar8.gotoCoordinates(car8_cp_x, car8_cp_y, car8_cp_z);
          $.car8_result = $.car8_laps * 100;
          $.car8_result += $.car8_cpcounter;
        }
        if ($.nascar8.locate3D($.car8_stuck_x, $.car8_stuck_y, $.car8_stuck_z, 3.0, 3.0, 3.0, false)) {
          if ($.car8_stuck_timer < $.game_timer) {
            $.nascar8.setHealth(230);
          }
        }
        else {
          const _res366 = $.nascar8.getCoordinates();
$.car8_stuck_x = _res366.x;
$.car8_stuck_y = _res366.y;
$.car8_stuck_z = _res366.z;
          $.car8_stuck_timer = $.game_timer + 5000;
        }
        if ($.nascar8.locate3D(-1409.7168, 1144.9703, 266.3857, 5.0, 5.0, 3.0, false)) {
          if ($.nascar8_timer < $.game_timer) {
            $.nascar8.setHealth(100);
            $.nascar8.markAsNoLongerNeeded();
            $.driver_car8.markAsNoLongerNeeded();
            $.nascar8 = -1;
          }
        }
        else {
          $.nascar8_timer = $.game_timer + 3000;
        }
      }
      $.gosub_result = $.car8_result;
      $.car = $.nascar8;
      await work_out_players_position();  // SCM GOSUB work_out_players_position
      if (Car.IsDead($.nascar9)) {
        $.nascar9.markAsNoLongerNeeded();
        $.driver_car9.markAsNoLongerNeeded();
        if (!(World.IsPointObscuredByAMissionEntity(-1409.7168, 1144.9703, 266.3857, 4.0, 4.0, 2.0))) {
          Car.SetModelComponents(HOTRINB, 1, -1);
          $.nascar9 = Car.Create(HOTRINB, -1409.7168, 1144.9703, 266.3857);
          $.gosub_nascar = $.nascar9;
          await setup_nascar_stuff();  // SCM GOSUB setup_nascar_stuff
          $.driver_car9 = $.gosub_driver;
          if ($.car9_laps < $.nascar_laps) {
            $.car9_laps = $.nascar_laps;
          }
          $.car9_cpcounter = 0;
          $.gosub_cpcounter = $.car9_cpcounter;
          await get_next_ovalring_checkpoint();  // SCM GOSUB get_next_ovalring_checkpoint
          $.car9_cp_x = $.gosub_cp_x;
          $.car9_cp_y = $.gosub_cp_y;
          $.car9_cp_z = $.gosub_cp_z;
          $.nascar9.gotoCoordinates($.car9_cp_x, $.car9_cp_y, $.car9_cp_z);
          $.nascar9.setForwardSpeed(30.0);


        }
      }
      else {
        if ($.nascar9.locate3D($.car9_cp_x, $.car9_cp_y, $.car9_cp_z, 24.0, 24.0, 24.0, false)) {
          $.gosub_cpcounter = $.car9_cpcounter;
          await get_next_ovalring_checkpoint();  // SCM GOSUB get_next_ovalring_checkpoint
          $.car9_cp_x = $.gosub_cp_x;
          $.car9_cp_y = $.gosub_cp_y;
          $.car9_cp_z = $.gosub_cp_z;
          $.car9_cpcounter = $.gosub_cpcounter;
          if ($.car9_cpcounter == 0) {
            ++$.car9_laps;
          }
          $.nascar9.gotoCoordinates($.car9_cp_x, $.car9_cp_y, $.car9_cp_z);
          $.car9_result = $.car9_laps * 100;
          $.car9_result += $.car9_cpcounter;
        }
        if ($.nascar9.locate3D($.car9_stuck_x, $.car9_stuck_y, $.car9_stuck_z, 3.0, 3.0, 3.0, false)) {
          if ($.car9_stuck_timer < $.game_timer) {
            $.nascar9.setHealth(230);
          }
        }
        else {
          const _res367 = $.nascar9.getCoordinates();
$.car9_stuck_x = _res367.x;
$.car9_stuck_y = _res367.y;
$.car9_stuck_z = _res367.z;
          $.car9_stuck_timer = $.game_timer + 5000;
        }
        if ($.nascar9.locate3D(-1409.7168, 1144.9703, 266.3857, 5.0, 5.0, 3.0, false)) {
          if ($.nascar9_timer < $.game_timer) {
            $.nascar9.setHealth(100);
            $.nascar9.markAsNoLongerNeeded();
            $.driver_car9.markAsNoLongerNeeded();
            $.nascar9 = -1;
          }
        }
        else {
          $.nascar9_timer = $.game_timer + 3000;
        }
      }
      $.gosub_result = $.car9_result;
      $.car = $.nascar9;
      await work_out_players_position();  // SCM GOSUB work_out_players_position
      if (Car.IsDead($.nascar10)) {
        $.nascar10.markAsNoLongerNeeded();
        $.driver_car10.markAsNoLongerNeeded();
        if (!(World.IsPointObscuredByAMissionEntity(-1409.7168, 1144.9703, 266.3857, 4.0, 4.0, 2.0))) {
          Car.SetModelComponents(HOTRINB, 2, -1);
          $.nascar10 = Car.Create(HOTRINB, -1409.7168, 1144.9703, 266.3857);
          $.gosub_nascar = $.nascar10;
          await setup_nascar_stuff();  // SCM GOSUB setup_nascar_stuff
          $.driver_car10 = $.gosub_driver;
          if ($.car10_laps < $.nascar_laps) {
            $.car10_laps = $.nascar_laps;
          }
          $.car10_cpcounter = 0;
          $.gosub_cpcounter = $.car10_cpcounter;
          await get_next_ovalring_checkpoint();  // SCM GOSUB get_next_ovalring_checkpoint
          $.car10_cp_x = $.gosub_cp_x;
          $.car10_cp_y = $.gosub_cp_y;
          $.car10_cp_z = $.gosub_cp_z;
          $.nascar10.gotoCoordinates($.car10_cp_x, $.car10_cp_y, $.car10_cp_z);
          $.nascar10.setForwardSpeed(30.0);


        }
      }
      else {
        if ($.nascar10.locate3D($.car10_cp_x, $.car10_cp_y, $.car10_cp_z, 24.0, 24.0, 24.0, false)) {
          $.gosub_cpcounter = $.car10_cpcounter;
          await get_next_ovalring_checkpoint();  // SCM GOSUB get_next_ovalring_checkpoint
          $.car10_cp_x = $.gosub_cp_x;
          $.car10_cp_y = $.gosub_cp_y;
          $.car10_cp_z = $.gosub_cp_z;
          $.car10_cpcounter = $.gosub_cpcounter;
          if ($.car10_cpcounter == 0) {
            ++$.car10_laps;
          }
          $.nascar10.gotoCoordinates($.car10_cp_x, $.car10_cp_y, $.car10_cp_z);
          $.car10_result = $.car10_laps * 100;
          $.car10_result += $.car10_cpcounter;
        }
        if ($.nascar10.locate3D($.car10_stuck_x, $.car10_stuck_y, $.car10_stuck_z, 3.0, 3.0, 3.0, false)) {
          if ($.car10_stuck_timer < $.game_timer) {
            $.nascar10.setHealth(230);
          }
        }
        else {
          const _res368 = $.nascar10.getCoordinates();
$.car10_stuck_x = _res368.x;
$.car10_stuck_y = _res368.y;
$.car10_stuck_z = _res368.z;
          $.car10_stuck_timer = $.game_timer + 5000;
        }
        if ($.nascar10.locate3D(-1409.7168, 1144.9703, 266.3857, 5.0, 5.0, 3.0, false)) {
          if ($.nascar10_timer < $.game_timer) {
            $.nascar10.setHealth(100);
            $.nascar10.markAsNoLongerNeeded();
            $.driver_car10.markAsNoLongerNeeded();
            $.nascar10 = -1;
          }
        }
        else {
          $.nascar10_timer = $.game_timer + 3000;
        }
      }
      $.gosub_result = $.car10_result;
      $.car = $.nascar10;
      await work_out_players_position();  // SCM GOSUB work_out_players_position
      if (Car.IsDead($.nascar11)) {
        $.nascar11.markAsNoLongerNeeded();
        $.driver_car11.markAsNoLongerNeeded();
        if (!(World.IsPointObscuredByAMissionEntity(-1409.7168, 1144.9703, 266.3857, 4.0, 4.0, 2.0))) {
          Car.SetModelComponents(HOTRINB, 3, -1);
          $.nascar11 = Car.Create(HOTRINB, -1409.7168, 1144.9703, 266.3857);
          $.gosub_nascar = $.nascar11;
          await setup_nascar_stuff();  // SCM GOSUB setup_nascar_stuff
          $.driver_car11 = $.gosub_driver;
          if ($.car11_laps < $.nascar_laps) {
            $.car11_laps = $.nascar_laps;
          }
          $.car11_cpcounter = 0;
          $.gosub_cpcounter = $.car11_cpcounter;
          await get_next_ovalring_checkpoint();  // SCM GOSUB get_next_ovalring_checkpoint
          $.car11_cp_x = $.gosub_cp_x;
          $.car11_cp_y = $.gosub_cp_y;
          $.car11_cp_z = $.gosub_cp_z;
          $.nascar11.gotoCoordinates($.car11_cp_x, $.car11_cp_y, $.car11_cp_z);
          $.nascar11.setForwardSpeed(30.0);


        }
      }
      else {
        if ($.nascar11.locate3D($.car11_cp_x, $.car11_cp_y, $.car11_cp_z, 24.0, 24.0, 24.0, false)) {
          $.gosub_cpcounter = $.car11_cpcounter;
          await get_next_ovalring_checkpoint();  // SCM GOSUB get_next_ovalring_checkpoint
          $.car11_cp_x = $.gosub_cp_x;
          $.car11_cp_y = $.gosub_cp_y;
          $.car11_cp_z = $.gosub_cp_z;
          $.car11_cpcounter = $.gosub_cpcounter;
          if ($.car11_cpcounter == 0) {
            ++$.car11_laps;
          }
          $.nascar11.gotoCoordinates($.car11_cp_x, $.car11_cp_y, $.car11_cp_z);
          $.car11_result = $.car11_laps * 100;
          $.car11_result += $.car11_cpcounter;
        }
        if ($.nascar11.locate3D($.car11_stuck_x, $.car11_stuck_y, $.car11_stuck_z, 3.0, 3.0, 3.0, false)) {
          if ($.car11_stuck_timer < $.game_timer) {
            $.nascar11.setHealth(230);
          }
        }
        else {
          const _res369 = $.nascar11.getCoordinates();
$.car11_stuck_x = _res369.x;
$.car11_stuck_y = _res369.y;
$.car11_stuck_z = _res369.z;
          $.car11_stuck_timer = $.game_timer + 5000;
        }
        if ($.nascar11.locate3D(-1409.7168, 1144.9703, 266.3857, 5.0, 5.0, 3.0, false)) {
          if ($.nascar11_timer < $.game_timer) {
            $.nascar11.setHealth(100);
            $.nascar11.markAsNoLongerNeeded();
            $.driver_car11.markAsNoLongerNeeded();
            $.nascar11 = -1;
          }
        }
        else {
          $.nascar11_timer = $.game_timer + 3000;
        }
      }
      $.gosub_result = $.car11_result;
      $.car = $.nascar11;
      await work_out_players_position();  // SCM GOSUB work_out_players_position
      if (Car.IsDead($.nascar12)) {
        $.nascar12.markAsNoLongerNeeded();
        $.driver_car12.markAsNoLongerNeeded();
        if (!(World.IsPointObscuredByAMissionEntity(-1409.7168, 1144.9703, 266.3857, 4.0, 4.0, 2.0))) {
          Car.SetModelComponents(HOTRINB, 4, -1);
          $.nascar12 = Car.Create(HOTRINB, -1409.7168, 1144.9703, 266.3857);
          $.gosub_nascar = $.nascar12;
          await setup_nascar_stuff();  // SCM GOSUB setup_nascar_stuff
          $.driver_car12 = $.gosub_driver;
          if ($.car12_laps < $.nascar_laps) {
            $.car12_laps = $.nascar_laps;
          }
          $.car12_cpcounter = 0;
          $.gosub_cpcounter = $.car12_cpcounter;
          await get_next_ovalring_checkpoint();  // SCM GOSUB get_next_ovalring_checkpoint
          $.car12_cp_x = $.gosub_cp_x;
          $.car12_cp_y = $.gosub_cp_y;
          $.car12_cp_z = $.gosub_cp_z;
          $.nascar12.gotoCoordinates($.car12_cp_x, $.car12_cp_y, $.car12_cp_z);
          $.nascar12.setForwardSpeed(30.0);


        }
      }
      else {
        if ($.nascar12.locate3D($.car12_cp_x, $.car12_cp_y, $.car12_cp_z, 24.0, 24.0, 24.0, false)) {
          $.gosub_cpcounter = $.car12_cpcounter;
          await get_next_ovalring_checkpoint();  // SCM GOSUB get_next_ovalring_checkpoint
          $.car12_cp_x = $.gosub_cp_x;
          $.car12_cp_y = $.gosub_cp_y;
          $.car12_cp_z = $.gosub_cp_z;
          $.car12_cpcounter = $.gosub_cpcounter;
          if ($.car12_cpcounter == 0) {
            ++$.car12_laps;
          }
          $.nascar12.gotoCoordinates($.car12_cp_x, $.car12_cp_y, $.car12_cp_z);
          $.car12_result = $.car12_laps * 100;
          $.car12_result += $.car12_cpcounter;
        }
        if ($.nascar12.locate3D($.car12_stuck_x, $.car12_stuck_y, $.car12_stuck_z, 3.0, 3.0, 3.0, false)) {
          if ($.car12_stuck_timer < $.game_timer) {
            $.nascar12.setHealth(230);
          }
        }
        else {
          const _res370 = $.nascar12.getCoordinates();
$.car12_stuck_x = _res370.x;
$.car12_stuck_y = _res370.y;
$.car12_stuck_z = _res370.z;
          $.car12_stuck_timer = $.game_timer + 5000;
        }
        if ($.nascar12.locate3D(-1409.7168, 1144.9703, 266.3857, 5.0, 5.0, 3.0, false)) {
          if ($.nascar12_timer < $.game_timer) {
            $.nascar12.setHealth(100);
            $.nascar12.markAsNoLongerNeeded();
            $.driver_car12.markAsNoLongerNeeded();
            $.nascar12 = -1;
          }
        }
        else {
          $.nascar12_timer = $.game_timer + 3000;
        }
      }
      $.gosub_result = $.car12_result;
      $.car = $.nascar12;
      await work_out_players_position();  // SCM GOSUB work_out_players_position
      if (Car.IsDead($.nascar13)) {
        $.nascar13.markAsNoLongerNeeded();
        $.driver_car13.markAsNoLongerNeeded();
        if (!(World.IsPointObscuredByAMissionEntity(-1409.7168, 1144.9703, 266.3857, 4.0, 4.0, 2.0))) {
          $.nascar13 = Car.Create(HOTRINB, -1409.7168, 1144.9703, 266.3857);
          $.gosub_nascar = $.nascar13;
          await setup_nascar_stuff();  // SCM GOSUB setup_nascar_stuff
          $.driver_car13 = $.gosub_driver;
          if ($.car13_laps < $.nascar_laps) {
            $.car13_laps = $.nascar_laps;
          }
          $.car13_cpcounter = 0;
          $.gosub_cpcounter = $.car13_cpcounter;
          await get_next_ovalring_checkpoint();  // SCM GOSUB get_next_ovalring_checkpoint
          $.car13_cp_x = $.gosub_cp_x;
          $.car13_cp_y = $.gosub_cp_y;
          $.car13_cp_z = $.gosub_cp_z;
          $.nascar13.gotoCoordinates($.car13_cp_x, $.car13_cp_y, $.car13_cp_z);
          $.nascar13.setForwardSpeed(30.0);


        }
      }
      else {
        if ($.nascar13.locate3D($.car13_cp_x, $.car13_cp_y, $.car13_cp_z, 24.0, 24.0, 24.0, false)) {
          $.gosub_cpcounter = $.car13_cpcounter;
          await get_next_ovalring_checkpoint();  // SCM GOSUB get_next_ovalring_checkpoint
          $.car13_cp_x = $.gosub_cp_x;
          $.car13_cp_y = $.gosub_cp_y;
          $.car13_cp_z = $.gosub_cp_z;
          $.car13_cpcounter = $.gosub_cpcounter;
          if ($.car13_cpcounter == 0) {
            ++$.car13_laps;
          }
          $.nascar13.gotoCoordinates($.car13_cp_x, $.car13_cp_y, $.car13_cp_z);
          $.car13_result = $.car13_laps * 100;
          $.car13_result += $.car13_cpcounter;
        }
        if ($.nascar13.locate3D($.car13_stuck_x, $.car13_stuck_y, $.car13_stuck_z, 3.0, 3.0, 3.0, false)) {
          if ($.car13_stuck_timer < $.game_timer) {
            $.nascar13.setHealth(230);
          }
        }
        else {
          const _res371 = $.nascar13.getCoordinates();
$.car13_stuck_x = _res371.x;
$.car13_stuck_y = _res371.y;
$.car13_stuck_z = _res371.z;
          $.car13_stuck_timer = $.game_timer + 5000;
        }
        if ($.nascar13.locate3D(-1409.7168, 1144.9703, 266.3857, 5.0, 5.0, 3.0, false)) {
          if ($.nascar13_timer < $.game_timer) {
            $.nascar13.setHealth(100);
            $.nascar13.markAsNoLongerNeeded();
            $.driver_car13.markAsNoLongerNeeded();
            $.nascar13 = -1;
          }
        }
        else {
          $.nascar13_timer = $.game_timer + 3000;
        }
      }
      $.gosub_result = $.car13_result;
      $.car = $.nascar13;
      await work_out_players_position();  // SCM GOSUB work_out_players_position
      if (Car.IsDead($.nascar14)) {
        $.nascar14.markAsNoLongerNeeded();
        $.driver_car14.markAsNoLongerNeeded();
        if (!(World.IsPointObscuredByAMissionEntity(-1409.7168, 1144.9703, 266.3857, 4.0, 4.0, 2.0))) {
          Car.SetModelComponents(HOTRINA, 0, -1);
          $.nascar14 = Car.Create(HOTRINA, -1409.7168, 1144.9703, 266.3857);
          $.gosub_nascar = $.nascar14;
          await setup_nascar_stuff();  // SCM GOSUB setup_nascar_stuff
          $.driver_car14 = $.gosub_driver;
          if ($.car14_laps < $.nascar_laps) {
            $.car14_laps = $.nascar_laps;
          }
          $.car14_cpcounter = 0;
          $.gosub_cpcounter = $.car14_cpcounter;
          await get_next_ovalring_checkpoint();  // SCM GOSUB get_next_ovalring_checkpoint
          $.car14_cp_x = $.gosub_cp_x;
          $.car14_cp_y = $.gosub_cp_y;
          $.car14_cp_z = $.gosub_cp_z;
          $.nascar14.gotoCoordinates($.car14_cp_x, $.car14_cp_y, $.car14_cp_z);
          $.nascar14.setForwardSpeed(30.0);


        }
      }
      else {
        if ($.nascar14.locate3D($.car14_cp_x, $.car14_cp_y, $.car14_cp_z, 24.0, 24.0, 24.0, false)) {
          $.gosub_cpcounter = $.car14_cpcounter;
          await get_next_ovalring_checkpoint();  // SCM GOSUB get_next_ovalring_checkpoint
          $.car14_cp_x = $.gosub_cp_x;
          $.car14_cp_y = $.gosub_cp_y;
          $.car14_cp_z = $.gosub_cp_z;
          $.car14_cpcounter = $.gosub_cpcounter;
          if ($.car14_cpcounter == 0) {
            ++$.car14_laps;
          }
          $.nascar14.gotoCoordinates($.car14_cp_x, $.car14_cp_y, $.car14_cp_z);
          $.car14_result = $.car14_laps * 100;
          $.car14_result += $.car14_cpcounter;
        }
        if ($.nascar14.locate3D($.car14_stuck_x, $.car14_stuck_y, $.car14_stuck_z, 3.0, 3.0, 3.0, false)) {
          if ($.car14_stuck_timer < $.game_timer) {
            $.nascar14.setHealth(230);
          }
        }
        else {
          const _res372 = $.nascar14.getCoordinates();
$.car14_stuck_x = _res372.x;
$.car14_stuck_y = _res372.y;
$.car14_stuck_z = _res372.z;
          $.car14_stuck_timer = $.game_timer + 5000;
        }
        if ($.nascar14.locate3D(-1409.7168, 1144.9703, 266.3857, 5.0, 5.0, 3.0, false)) {
          if ($.nascar14_timer < $.game_timer) {
            $.nascar14.setHealth(100);
            $.nascar14.markAsNoLongerNeeded();
            $.driver_car14.markAsNoLongerNeeded();
            $.nascar14 = -1;
          }
        }
        else {
          $.nascar14_timer = $.game_timer + 3000;
        }
      }
      $.gosub_result = $.car14_result;
      $.car = $.nascar14;
      await work_out_players_position();  // SCM GOSUB work_out_players_position
      if (Car.IsDead($.nascar15)) {
        $.nascar15.markAsNoLongerNeeded();
        $.driver_car15.markAsNoLongerNeeded();
        if (!(World.IsPointObscuredByAMissionEntity(-1409.7168, 1144.9703, 266.3857, 4.0, 4.0, 2.0))) {
          Car.SetModelComponents(HOTRINB, 0, -1);
          $.nascar15 = Car.Create(HOTRINB, -1409.7168, 1144.9703, 266.3857);
          $.gosub_nascar = $.nascar15;
          await setup_nascar_stuff();  // SCM GOSUB setup_nascar_stuff
          $.driver_car15 = $.gosub_driver;
          if ($.car15_laps < $.nascar_laps) {
            $.car15_laps = $.nascar_laps;
          }
          $.car15_cpcounter = 0;
          $.gosub_cpcounter = $.car15_cpcounter;
          await get_next_ovalring_checkpoint();  // SCM GOSUB get_next_ovalring_checkpoint
          $.car15_cp_x = $.gosub_cp_x;
          $.car15_cp_y = $.gosub_cp_y;
          $.car15_cp_z = $.gosub_cp_z;
          $.nascar15.gotoCoordinates($.car15_cp_x, $.car15_cp_y, $.car15_cp_z);
          $.nascar15.setForwardSpeed(30.0);


        }
      }
      else {
        if ($.nascar15.locate3D($.car15_cp_x, $.car15_cp_y, $.car15_cp_z, 24.0, 24.0, 24.0, false)) {
          $.gosub_cpcounter = $.car15_cpcounter;
          await get_next_ovalring_checkpoint();  // SCM GOSUB get_next_ovalring_checkpoint
          $.car15_cp_x = $.gosub_cp_x;
          $.car15_cp_y = $.gosub_cp_y;
          $.car15_cp_z = $.gosub_cp_z;
          $.car15_cpcounter = $.gosub_cpcounter;
          if ($.car15_cpcounter == 0) {
            ++$.car15_laps;
          }
          $.nascar15.gotoCoordinates($.car15_cp_x, $.car15_cp_y, $.car15_cp_z);
          $.car15_result = $.car15_laps * 100;
          $.car15_result += $.car15_cpcounter;
        }
        if ($.nascar15.locate3D($.car15_stuck_x, $.car15_stuck_y, $.car15_stuck_z, 3.0, 3.0, 3.0, false)) {
          if ($.car15_stuck_timer < $.game_timer) {
            $.nascar15.setHealth(230);
          }
        }
        else {
          const _res373 = $.nascar15.getCoordinates();
$.car15_stuck_x = _res373.x;
$.car15_stuck_y = _res373.y;
$.car15_stuck_z = _res373.z;
          $.car15_stuck_timer = $.game_timer + 5000;
        }
        if ($.nascar15.locate3D(-1409.7168, 1144.9703, 266.3857, 5.0, 5.0, 3.0, false)) {
          if ($.nascar15_timer < $.game_timer) {
            $.nascar15.setHealth(100);
            $.nascar15.markAsNoLongerNeeded();
            $.driver_car15.markAsNoLongerNeeded();
            $.nascar15 = -1;
          }
        }
        else {
          $.nascar15_timer = $.game_timer + 3000;
        }
      }
      $.gosub_result = $.car15_result;
      $.car = $.nascar15;
      await work_out_players_position();  // SCM GOSUB work_out_players_position
    }
    else {
      if (!(Car.IsDead($.nascar1))) {
        $.nascar1.setTempAction(1 /* TEMPACT_WAIT */, 200);
      }
      if (!(Car.IsDead($.nascar2))) {
        $.nascar2.setTempAction(1 /* TEMPACT_WAIT */, 200);
      }
      if (!(Car.IsDead($.nascar3))) {
        $.nascar3.setTempAction(1 /* TEMPACT_WAIT */, 200);
      }
      if (!(Car.IsDead($.nascar4))) {
        $.nascar4.setTempAction(1 /* TEMPACT_WAIT */, 200);
      }
      if (!(Car.IsDead($.nascar5))) {
        $.nascar5.setTempAction(1 /* TEMPACT_WAIT */, 200);
      }
      if (!(Car.IsDead($.nascar6))) {
        $.nascar6.setTempAction(1 /* TEMPACT_WAIT */, 200);
      }
      if (!(Car.IsDead($.nascar7))) {
        $.nascar7.setTempAction(1 /* TEMPACT_WAIT */, 200);
      }
      if (!(Car.IsDead($.nascar8))) {
        $.nascar8.setTempAction(1 /* TEMPACT_WAIT */, 200);
      }
      if (!(Car.IsDead($.nascar9))) {
        $.nascar9.setTempAction(1 /* TEMPACT_WAIT */, 200);
      }
      if (!(Car.IsDead($.nascar10))) {
        $.nascar10.setTempAction(1 /* TEMPACT_WAIT */, 200);
      }
      if (!(Car.IsDead($.nascar11))) {
        $.nascar11.setTempAction(1 /* TEMPACT_WAIT */, 200);
      }
      if (!(Car.IsDead($.nascar12))) {
        $.nascar12.setTempAction(1 /* TEMPACT_WAIT */, 200);
      }
      if (!(Car.IsDead($.nascar13))) {
        $.nascar13.setTempAction(1 /* TEMPACT_WAIT */, 200);
      }
      if (!(Car.IsDead($.nascar14))) {
        $.nascar14.setTempAction(1 /* TEMPACT_WAIT */, 200);
      }
      if (!(Car.IsDead($.nascar15))) {
        $.nascar15.setTempAction(1 /* TEMPACT_WAIT */, 200);
      }
    }


    if ($.do_winning_text_shite == 1) {
      Text.UseCommands(true /* TRUE */);
      $.hotring_finished_timer = $.game_timer + 5000;
      $.do_winning_text_shite = 3;
    }


    if ($.do_winning_text_shite == 0) {
      if ($.nascar_laps == 12) {
        Hud.ClearCounter($.$id.players_nascar_health);
        Hud.ClearCounter($.$id.nascar_laps);
        Hud.ClearCounter($.$id.position);
        Hud.ClearTimer($.$id.nascar_time);
        if ($.best_nascar_result > $.position) {
          $.best_nascar_result = $.position;
        }
        $.nascar_time /= 1000;
        $.nascar_best_time_last = $.nascar_best_time;
        if ($.nascar_best_time > $.nascar_time) {
          $.nascar_best_time = $.nascar_time;
          Stat.RegisterFastestTime(20, $.nascar_best_time); //Hot Ring Best Time: xx:xx
        }
        $.do_winning_text_shite = 1;
        if ($.position == 1) {
          Text.PrintBig("HOTR_30", 6000, 5); //1ST PLACE
          Text.PrintWithNumberBig("HOTR_29", 5000, 6000, 6); //$~1~
          Stat.RegisterBestPosition(0, $.position);
          $.player1.addScore(5000);
          if ($.done_ovalring_progress == 0) {
            Stat.PlayerMadeProgress(1);
            Stat.RegisterOddjobMissionPassed();
            $.done_ovalring_progress = 1;
          }
        }
        if ($.position == 2) {
          Text.PrintBig("HOTR_31", 6000, 5); //2ND PLACE
          Text.PrintWithNumberBig("HOTR_29", 1500, 6000, 6); //$~1~
          Stat.RegisterBestPosition(0, $.position);
          $.player1.addScore(1500);
        }
        if ($.position == 3) {
          Text.PrintBig("HOTR_32", 6000, 5); //3RD PLACE
          Text.PrintWithNumberBig("HOTR_29", 500, 6000, 6); //$~1~
          Stat.RegisterBestPosition(0, $.position);
          $.player1.addScore(500);
        }
        if ($.position > 3) {
          Stat.RegisterBestPosition(0, $.position);
          $.do_winning_text_shite = 0;
          Text.PrintNow("HOTR_13", 2000, 1); //~r~You didn't win the race!
          Camera.SetFadingColor(0, 0, 1);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // SCM GOTO → mission_ovalring_passed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_ovalring_passed"); // fallback: would break linear control flow
        }
      }
    }



    //[HOTR_15:OVALRIG]
    //Time: ~1~:~1~
    //
    //[HOTR_16:OVALRIG]
    //Time: ~1~:0~1~
    //
    //[HOTR_17:OVALRIG]
    //Best Time: ~1~:~1~
    //
    //[HOTR_18:OVALRIG]
    //Best Time: ~1~:0~1~
    //
    //[HOTR_19:OVALRIG]
    //Best Time: NA
    //
    //[HOTR_20:OVALRIG]
    //New Best Time: ~1~:~1~
    //
    //[HOTR_21:OVALRIG]
    //New Best Time: ~1~:0~1~
    //
    //[HOTR_22:OVALRIG]
    //Best Result: NA
    //
    //[HOTR_23:OVALRIG]
    //Best Result: 1st
    //
    //[HOTR_24:OVALRIG]
    //Best Result: 2nd
    //
    //[HOTR_25:OVALRIG]
    //Best Result: 3rd
    //
    //[HOTR_26:OVALRIG]
    //Best Result: ~1~th
    //
    //[HOTR_27:OVALRIG]
    //Best Lap Time: ~1~:~1~
    //
    //[HOTR_28:OVALRIG]
    //Best Lap Time: ~1~:0~1~



    if ($.do_winning_text_shite > 1) {
      if ($.do_winning_text_shite == 4) {
        if (!(Camera.GetFadingStatus())) {
          // SCM GOTO → mission_ovalring_passed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_ovalring_passed"); // fallback: would break linear control flow
        }
      }
      if ($.do_winning_text_shite == 3) {
        if ($.hotring_finished_timer < $.game_timer) {
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          $.do_winning_text_shite = 4;
        }
      }
      if ($.player1.isInAnyCar()) {
        $.players_car = $.player1.storeCarIsInNoSave();
        $.players_nascar_health = $.players_car.getHealth();
        $.players_car.setHealth($.players_nascar_health);
      }
      if ($.do_winning_text_shite > 2) {
        await setup_text_shite_hot();  // SCM GOSUB setup_text_shite_hot
        Text.SetScale(0.8, 2.0);
        $.mins = $.nascar_time / 60;
        $.temp_int = $.mins * 60;
        $.seconds = $.nascar_time - $.temp_int;
        if ($.seconds > 9) {
          Text.SetColor(0, 0, 0, 255);
          Text.DisplayWith2Numbers(32.0, 232.0, "HOTR_15", $.mins, $.seconds); //Time: ~1~:~1~
          await setup_text_shite_hot();  // SCM GOSUB setup_text_shite_hot
          Text.SetScale(0.8, 2.0);
          Text.DisplayWith2Numbers(30.0, 230.0, "HOTR_15", $.mins, $.seconds); //Time: ~1~:~1~
        }
        else {
          Text.SetColor(0, 0, 0, 255);
          Text.DisplayWith2Numbers(32.0, 232.0, "HOTR_16", $.mins, $.seconds); //Time: ~1~:0~1~
          await setup_text_shite_hot();  // SCM GOSUB setup_text_shite_hot
          Text.SetScale(0.8, 2.0);
          Text.DisplayWith2Numbers(30.0, 230.0, "HOTR_16", $.mins, $.seconds); //Time: ~1~:0~1~
        }
      }
      await setup_text_shite_hot();  // SCM GOSUB setup_text_shite_hot
      Text.SetColor(0, 0, 0, 255);
      if ($.nascar_best_time == 999999) {
        Text.Display(32.0, 302.0, "HOTR_19"); //Best Time: N/A
        await setup_text_shite_hot();  // SCM GOSUB setup_text_shite_hot
        Text.Display(30.0, 300.0, "HOTR_19"); //Best Time: N/A
      }
      else {
        $.mins = $.nascar_best_time / 60;
        $.temp_int = $.mins * 60;
        $.seconds = $.nascar_best_time - $.temp_int;
        if ($.nascar_best_time > $.nascar_best_time_last) {
          if ($.seconds > 9) {
            Text.DisplayWith2Numbers(32.0, 302.0, "HOTR_17", $.mins, $.seconds); //Best Time: ~1~:~1~
            await setup_text_shite_hot();  // SCM GOSUB setup_text_shite_hot
            Text.DisplayWith2Numbers(30.0, 300.0, "HOTR_17", $.mins, $.seconds); //Best Time: ~1~:~1~
          }
          else {
            Text.DisplayWith2Numbers(32.0, 302.0, "HOTR_18", $.mins, $.seconds); //Best Time: ~1~:0~1~
            await setup_text_shite_hot();  // SCM GOSUB setup_text_shite_hot
            Text.DisplayWith2Numbers(30.0, 300.0, "HOTR_18", $.mins, $.seconds); //Best Time: ~1~:0~1~
          }
        }
        else {
          if ($.seconds > 9) {
            Text.DisplayWith2Numbers(32.0, 302.0, "HOTR_20", $.mins, $.seconds); //NEW Best Time: ~1~:~1~
            await setup_text_shite_hot();  // SCM GOSUB setup_text_shite_hot
            Text.SetColor(255, 128, 0, 255);
            Text.DisplayWith2Numbers(30.0, 300.0, "HOTR_20", $.mins, $.seconds); //NEW Best Time: ~1~:~1~
          }
          else {
            Text.DisplayWith2Numbers(32.0, 302.0, "HOTR_21", $.mins, $.seconds); //NEW Best Time: ~1~:0~1~
            await setup_text_shite_hot();  // SCM GOSUB setup_text_shite_hot
            Text.SetColor(255, 128, 0, 255);
            Text.DisplayWith2Numbers(30.0, 300.0, "HOTR_21", $.mins, $.seconds); //NEW Best Time: ~1~:0~1~
          }
        }
      }
      await setup_text_shite_hot();  // SCM GOSUB setup_text_shite_hot
      Text.SetColor(0, 0, 0, 255);
      if ($.best_nascar_result == 999999) {
        Text.Display(32.0, 317.0, "HOTR_22"); //Best Result: N/A
        await setup_text_shite_hot();  // SCM GOSUB setup_text_shite_hot
        Text.Display(30.0, 315.0, "HOTR_22"); //Best Result: N/A
      }
      if ($.best_nascar_result == 1) {
        Text.Display(32.0, 317.0, "HOTR_23"); //Best Result: 1ST
        await setup_text_shite_hot();  // SCM GOSUB setup_text_shite_hot
        Text.Display(30.0, 315.0, "HOTR_23"); //Best Result: 1ST
      }
      if ($.best_nascar_result == 2) {
        Text.Display(32.0, 317.0, "HOTR_24"); //Best Result: 2ND
        await setup_text_shite_hot();  // SCM GOSUB setup_text_shite_hot
        Text.Display(30.0, 315.0, "HOTR_24"); //Best Result: 2ND
      }
      if ($.best_nascar_result == 3) {
        Text.Display(32.0, 317.0, "HOTR_25"); //Best Result: 3RD
        await setup_text_shite_hot();  // SCM GOSUB setup_text_shite_hot
        Text.Display(30.0, 315.0, "HOTR_25"); //Best Result: 3RD
      }
      if ($.best_nascar_result > 3 && $.best_nascar_result < 17) {
        Text.DisplayWithNumber(32.0, 317.0, "HOTR_26", $.best_nascar_result); //Best Result: ~1~TH
        await setup_text_shite_hot();  // SCM GOSUB setup_text_shite_hot
        Text.DisplayWithNumber(30.0, 315.0, "HOTR_26", $.best_nascar_result); //Best Result: ~1~TH
      }
      await setup_text_shite_hot();  // SCM GOSUB setup_text_shite_hot
      Text.SetColor(0, 0, 0, 255);
      if ($.nascar_best_lap_time == 999999) {
        Text.Display(32.0, 332.0, "HOTR_33"); //Best LAP Time: N/A
        await setup_text_shite_hot();  // SCM GOSUB setup_text_shite_hot
        Text.Display(30.0, 330.0, "HOTR_33"); //Best LAP Time: N/A
      }
      else {
        $.seconds = $.nascar_best_lap_time / 1000;
        $.miliseconds = $.seconds * 1000;
        $.temp_int = $.nascar_best_lap_time - $.miliseconds;
        $.miliseconds = $.temp_int / 10;
        if ($.miliseconds > 9) {
          Text.DisplayWith2Numbers(32.0, 332.0, "HOTR_27", $.seconds, $.miliseconds); //Best LAP Time: ~1~:~1~
          await setup_text_shite_hot();  // SCM GOSUB setup_text_shite_hot
          Text.DisplayWith2Numbers(30.0, 330.0, "HOTR_27", $.seconds, $.miliseconds); //Best LAP Time: ~1~:~1~
        }
        else {
          Text.DisplayWith2Numbers(32.0, 332.0, "HOTR_28", $.seconds, $.miliseconds); //Best LAP Time: ~1~:0~1~
          await setup_text_shite_hot();  // SCM GOSUB setup_text_shite_hot
          Text.DisplayWith2Numbers(30.0, 330.0, "HOTR_28", $.seconds, $.miliseconds); //Best LAP Time: ~1~:0~1~
        }
      }
    }


    if (TIMERA > 2500) {
      TIMERA = 0;
      if ($.hot_audio_flag == 0) {
        $.hot_audio_flag = 1;
      }
    }


    if ($.hot_audio_flag == 3) {
      if (Audio.HasMissionAudioFinished(1)) {
        $.hot_audio_flag = 0;
      }
    }


    if ($.hot_audio_flag == 2) {
      if (Audio.HasMissionAudioLoaded(1)) {
        Audio.PlayMissionAudio(1);
        $.hot_audio_flag = 3;
      }
    }


    if ($.hot_audio_flag == 1) {
      $.temp_int = Math.RandomIntInRange(1, 23);
      if ($.last_audio_played == $.temp_int) {
        ++$.temp_int;
        if ($.temp_int > 22) {
          $.temp_int = 1;
        }
      }
      if ($.temp_int == 1) {
        Audio.LoadMissionAudio(1, "hot1" as any);
      }
      if ($.temp_int == 2) {
        Audio.LoadMissionAudio(1, "hot2" as any);
      }
      if ($.temp_int == 3) {
        Audio.LoadMissionAudio(1, "hot3" as any);
      }
      if ($.temp_int == 4) {
        Audio.LoadMissionAudio(1, "hot4" as any);
      }
      if ($.temp_int == 5) {
        Audio.LoadMissionAudio(1, "hot5" as any);
      }
      if ($.temp_int == 6) {
        Audio.LoadMissionAudio(1, "hot6" as any);
      }
      if ($.temp_int == 7) {
        Audio.LoadMissionAudio(1, "hot7" as any);
      }
      if ($.temp_int == 8) {
        Audio.LoadMissionAudio(1, "hot8" as any);
      }
      if ($.temp_int == 9) {
        Audio.LoadMissionAudio(1, "hot9" as any);
      }
      if ($.temp_int == 10) {
        Audio.LoadMissionAudio(1, "hot10" as any);
      }
      if ($.temp_int == 11) {
        Audio.LoadMissionAudio(1, "hot11" as any);
      }
      if ($.temp_int == 12) {
        Audio.LoadMissionAudio(1, "hot12" as any);
      }
      if ($.temp_int == 13) {
        Audio.LoadMissionAudio(1, "hot13" as any);
      }
      if ($.temp_int == 14) {
        Audio.LoadMissionAudio(1, "hot14" as any);
      }
      if ($.temp_int == 15) {
        Audio.LoadMissionAudio(1, "hot15" as any);
      }
      if ($.temp_int == 16 || $.temp_int == 22) {
        Audio.LoadMissionAudio(1, "cheer1" as any);
      }
      if ($.temp_int == 17) {
        Audio.LoadMissionAudio(1, "cheer2" as any);
      }
      if ($.temp_int == 18) {
        Audio.LoadMissionAudio(1, "cheer3" as any);
      }
      if ($.temp_int == 19) {
        Audio.LoadMissionAudio(1, "cheer4" as any);
      }
      if ($.temp_int == 20) {
        Audio.LoadMissionAudio(1, "ooh1" as any);
      }
      if ($.temp_int == 21) {
        Audio.LoadMissionAudio(1, "ooh2" as any);
      }
      $.last_audio_played = $.temp_int;
      $.hot_audio_flag = 2;
    }


  }
}



async function setup_text_shite_hot() {
  Text.SetColor(180, 180, 180, 255);
  Text.SetJustify(true /* ON */);
  Text.SetRightJustify(false /* OFF */);
  Text.SetWrapX(500.0);
  Text.SetProportional(true /* ON */);
  Text.SetCenter(false /* OFF */);
  Text.SetBackground(false /* OFF */);
  Text.SetScale(0.6, 1.6);
}





async function work_out_players_position() {


  if ($.player_result == $.gosub_result) {
    if (!(Car.IsDead($.car))) {
      const _res374 = $.car.getCoordinates();
$.car_x = _res374.x;
$.car_y = _res374.y;
$.z = _res374.z;
      $.car_distance_from_cp = Math.GetDistanceBetweenCoords2D($.car_x, $.car_y, $.player1_cp_x, $.player1_cp_y);
      const _res375 = $.player1.getCoordinates();
$.car_x = _res375.x;
$.car_y = _res375.y;
$.z = _res375.z;
      $.player1_distance_from_cp = Math.GetDistanceBetweenCoords2D($.car_x, $.car_y, $.player1_cp_x, $.player1_cp_y);
      if ($.player1_distance_from_cp > $.car_distance_from_cp) {
        ++$.position;
      }
    }
  }


  if ($.player_result < $.gosub_result) {
    ++$.position;
  }
}




async function onFailed() {
  if (!(HAS_DEATHARREST_BEEN_EXECUTED())) {
    Camera.SetFadingColor(0, 0, 1);
    Camera.DoFade(1000, 0 /* FADE_OUT */);
    while (Camera.GetFadingStatus()) {
      await asyncWait(0);
    }
    Streaming.SetAreaVisible(VIS_MAIN_MAP);
    World.ClearExtraColors(false /* FALSE */);
    Game.SetIsInStadium(false /* FALSE */);
    Hud.DisplayRadar(true /* TRUE */);
    while (!($.player1.isInAnyCar()) && !($.player1.isOnFoot())) {
      await asyncWait(0);
    }
    if ($.player1.isInAnyCar()) {
      $.player1.warpFromCarToCoord(-1102.7229, 1330.9585, 19.0290);
    }
    else {
      $.player1.setCoordinates(-1102.7229, 1330.9585, 19.0290);
    }
    $.player1.setHeading(274.1051);
    Streaming.LoadScene(-1102.7229, 1330.9585, 19.0290);
    Camera.SetBehindPlayer();
    Camera.RestoreJumpcut();
    Camera.SetFadingColor(0, 0, 1);
    Camera.DoFade(1000, 1 /* FADE_IN */);
  }
}




// mission ovalring passed


async function mission_ovalring_passed() {


  if (!(HAS_DEATHARREST_BEEN_EXECUTED())) {
    Streaming.SetAreaVisible(VIS_MAIN_MAP);
    World.ClearExtraColors(false /* FALSE */);
    Game.SetIsInStadium(false /* FALSE */);
    Hud.DisplayRadar(true /* TRUE */);
    while (!($.player1.isInAnyCar()) && !($.player1.isOnFoot())) {
      await asyncWait(0);
    }
    if ($.player1.isInAnyCar()) {
      $.player1.warpFromCarToCoord(-1102.7229, 1330.9585, 19.0290);
    }
    else {
      $.player1.setCoordinates(-1102.7229, 1330.9585, 19.0290);
    }
    $.player1.setHeading(274.1051);
    Streaming.LoadScene(-1102.7229, 1330.9585, 19.0290);
    Camera.SetBehindPlayer();
    Camera.RestoreJumpcut();
    Camera.SetFadingColor(0, 0, 1);
    Camera.DoFade(1500, 1 /* FADE_IN */);
  }
}



// mission cleanup


async function cleanup() {

  //REMOVE_BLIP blip_chase
  //REMOVE_BLIP second_blip


  Streaming.MarkModelAsNoLongerNeeded(WMYCR);
  Streaming.MarkModelAsNoLongerNeeded(HOTRINA);
  Streaming.MarkModelAsNoLongerNeeded(HOTRINB);
  Streaming.MarkModelAsNoLongerNeeded(HOTRING);


  Hud.ClearCounter($.$id.players_nascar_health);
  Hud.ClearCounter($.$id.nascar_laps);
  Hud.ClearCounter($.$id.position);
  Hud.ClearTimer($.$id.nascar_time);


  Text.UseCommands(false /* FALSE */);


  Game.SetIsInStadium(false /* FALSE */);
  Hud.DisplayRadar(true /* TRUE */);


  $.timer_mobile_start = Clock.GetGameTimer();


  Hud.DisplayRadar(true /* TRUE */);


  Text.ClearHelp();


  ONMISSION = 0;


  Mission.Finish();
}




///////////////////////////////////////////////

async function get_next_ovalring_checkpoint() {
  ///////////////////////////////////////////////


  if ($.gosub_cpcounter == 0) {
    $.gosub_cp_x = $.cp1_x;
    $.gosub_cp_y = $.cp1_y;
    $.gosub_cp_z = $.cp1_z;
  }


  if ($.gosub_cpcounter == 1) {
    $.gosub_cp_x = $.cp2_x;
    $.gosub_cp_y = $.cp2_y;
    $.gosub_cp_z = $.cp2_z;
  }


  if ($.gosub_cpcounter == 2) {
    $.gosub_cp_x = $.cp3_x;
    $.gosub_cp_y = $.cp3_y;
    $.gosub_cp_z = $.cp3_z;
  }


  if ($.gosub_cpcounter == 3) {
    $.gosub_cp_x = $.cp4_x;
    $.gosub_cp_y = $.cp4_y;
    $.gosub_cp_z = $.cp4_z;
  }


  if ($.gosub_cpcounter == 4) {
    $.gosub_cp_x = $.cp5_x;
    $.gosub_cp_y = $.cp5_y;
    $.gosub_cp_z = $.cp5_z;
  }


  if ($.gosub_cpcounter == 5) {
    $.gosub_cp_x = $.cp6_x;
    $.gosub_cp_y = $.cp6_y;
    $.gosub_cp_z = $.cp6_z;
  }


  if ($.gosub_cpcounter == 6) {
    $.gosub_cp_x = $.cp7_x;
    $.gosub_cp_y = $.cp7_y;
    $.gosub_cp_z = $.cp7_z;
  }


  if ($.gosub_cpcounter == 7) {
    $.gosub_cp_x = $.cp8_x;
    $.gosub_cp_y = $.cp8_y;
    $.gosub_cp_z = $.cp8_z;
  }


  if ($.gosub_cpcounter == 8) {
    $.gosub_cp_x = $.cp9_x;
    $.gosub_cp_y = $.cp9_y;
    $.gosub_cp_z = $.cp9_z;
  }


  if ($.gosub_cpcounter == 9) {
    $.gosub_cp_x = $.cp10_x;
    $.gosub_cp_y = $.cp10_y;
    $.gosub_cp_z = $.cp10_z;
    $.gosub_cpcounter = -1;
  }


  ++$.gosub_cpcounter;

  ///////////////////////////////////////////////
}

///////////////////////////////////////////////




async function setup_nascar_stuff() {
  if ($.heading_done_flag == 1) {
    $.gosub_nascar.setHeading(301.7480);
  }
  $.gosub_nascar.lockDoors(2 /* CARLOCK_LOCKED */);
  $.gosub_nascar.setProofs(false /* FALSE */, true /* TRUE */, true /* TRUE */, false /* FALSE */, false /* FALSE */);
  $.gosub_nascar.setStraightLineDistance(5);
  $.gosub_nascar.setIdle();
  $.gosub_nascar.setDrivingStyle(2);
  $.gosub_nascar.setCruiseSpeed(100.0);
  $.gosub_driver = $.gosub_nascar.getDriver();
  if ($.gosub_driver == -1) {
    $.gosub_driver = Char.CreateInsideCar($.gosub_nascar, 4 /* PEDTYPE_CIVMALE */, WMYCR);
    $.gosub_driver.setCantBeDraggedOut(true /* TRUE */);
  }
}





async function freeze_all_cars() {
  if (!(Car.IsDead($.nascar1))) {
    $.nascar1.freezePosition($.true_false);
  }
  if (!(Car.IsDead($.nascar2))) {
    $.nascar2.freezePosition($.true_false);
  }
  if (!(Car.IsDead($.nascar3))) {
    $.nascar3.freezePosition($.true_false);
  }
  if (!(Car.IsDead($.nascar4))) {
    $.nascar4.freezePosition($.true_false);
  }
  if (!(Car.IsDead($.nascar5))) {
    $.nascar5.freezePosition($.true_false);
  }
  if (!(Car.IsDead($.nascar6))) {
    $.nascar6.freezePosition($.true_false);
  }
  if (!(Car.IsDead($.nascar7))) {
    $.nascar7.freezePosition($.true_false);
  }
  if (!(Car.IsDead($.nascar8))) {
    $.nascar8.freezePosition($.true_false);
  }
  if (!(Car.IsDead($.nascar9))) {
    $.nascar9.freezePosition($.true_false);
  }
  if (!(Car.IsDead($.nascar10))) {
    $.nascar10.freezePosition($.true_false);
  }
  if (!(Car.IsDead($.nascar11))) {
    $.nascar11.freezePosition($.true_false);
  }
  if (!(Car.IsDead($.nascar12))) {
    $.nascar12.freezePosition($.true_false);
  }
  if (!(Car.IsDead($.nascar13))) {
    $.nascar13.freezePosition($.true_false);
  }
  if (!(Car.IsDead($.nascar14))) {
    $.nascar14.freezePosition($.true_false);
  }
  if (!(Car.IsDead($.nascar15))) {
    $.nascar15.freezePosition($.true_false);
  }
  if (!(Car.IsDead($.players_nascar))) {
    $.players_nascar.freezePosition($.true_false);
  }
  return;



  //LOCATE FOR LEAVING RING
  //IF LOCATE_PLAYER_ON_FOOT_3D player1 -1414.8 1152.985 267.889 1.5 2.0 1.5 0
  //-1453.7202 1177.7979 264.5390 -1452.8524 1177.3014 264.5613 //FARAWAY LOW
  //-1405.3292 1161.4934 270.4964 -1406.1345 1160.9611 270.2356 //CLOSE UP


  //LOCATE FOR PIT STOP
  //IF LOCATE_CAR_3D players_car -1396.369 1354.573 269.936 9.0 4.0 5.0 0
  //-1323.0051 1328.0702 270.0141 -1323.9810 1328.2347 269.8705 //FAR AWAY
  //-1378.5305 1355.8339 271.5822 -1379.4496 1355.7017 271.2112 //LOOKING STRAIGHT AT PITSTOP

  //GARAGE FOR PITSTOP
  //(-1405.369 1350.573 264.936) (-1387.369 1350.573) (-1405.369 1358.573) (274.936)

  //INITIAL CAR CREATION COORDS
  //-1344.17 1167.55 264.641 -85.0
  //-1333.67 1169.97 264.644 -84.0
  //-1323.62 1173.0 264.648  -83.0
  //-1314.07 1176.62 264.651 -82.0
  //-1305.08 1180.79 264.655 -81.0
  //-1296.7 1185.48 264.658  -79.0
  //-1288.97 1190.66 264.662 -74.0
  //-1281.96 1196.29 264.665 -69.0
  //-1275.69 1202.35 264.669 -64.0
  //-1270.24 1208.81 264.673 -59.0
  //-1265.66 1215.63 264.676 -46.0
  //-1261.99 1222.77 264.68  -35.0
  //-1259.3 1230.22 264.683  -25.0
  //-1257.65 1237.92 264.687 -12.0
  //-1257.09 1245.84 264.691 0.0
  //-1257.65 1253.76 264.694 12.0
  //-1259.3 1261.46 264.698  25.0


  //Race for 20 laps and try to beat every competetor.
  //If your car is destroyed you will be disqualified.
  //When your car is damaged you can get it repaired at the pitstop.
  //This is the way to leave the stadium.


  //-1344.4868 1172.7334 263.8694 284.8876
  //-1343.4382 1167.8365 264.6195 281.5068
  //-1354.2965 1170.2894 263.9862 282.7367
  //-1352.8469 1165.5270 264.7497 284.2442
  //-1363.7577 1169.0784 264.0151 276.4275
  //-1363.6703 1164.1503 264.7848 277.8466
  //-1373.8792 1168.6543 264.0179 273.3020
  //-1374.5608 1163.0554 264.9375 272.9799
  //-1383.6681 1167.9469 264.1144 273.0015
  //-1383.5819 1162.9030 264.9546 269.9305
  //-1393.2231 1167.7117 264.1403 270.1651
  //-1393.1036 1163.0526 264.9140 270.3340
  //-1402.1838 1167.1935 264.2093 271.0722
  //-1402.3752 1163.0569 264.9016 266.2549
  //-1412.1112 1167.2113 264.2081 273.8779
  //-1411.9487 1162.9200 264.9160 271.2772
  //-1334.6658 1172.5107 266.2422 -1335.6278 1172.2643 266.1259
  //-1318.2053 1163.3895 273.7596 -1319.1184 1163.7313 273.5374


}

export async function ovalring() {
  // Mission start stuff


  await body();  // SCM GOSUB mission_ovalring_start


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await onFailed();  // SCM GOSUB mission_ovalring_failed
  }


  await cleanup();  // SCM GOSUB mission_ovalring_cleanup



  // ******************************** Variables for mission **********************************


  // VAR_INT showcase showcase_timer nascar_laps player_result gosub_result
  // VAR_INT heading_done_flag gosub_nascar gosub_driver true_false nascar_best_time_last
  // VAR_INT nascar_lap_timer nascar_time nascar_lap_timer_start do_winning_text_shite
  // VAR_INT players_nascar players_nascar_health skip_scut_button miliseconds
  // VAR_INT hot_audio_flag last_audio_played hotring_finished_timer


  // VAR_INT nascar1 car1_laps car1_result nascar1_timer
  // VAR_INT nascar2 car2_laps car2_result nascar2_timer
  // VAR_INT nascar3 car3_laps car3_result nascar3_timer
  // VAR_INT nascar4 driver_car4 car4_cpcounter car4_laps car4_result nascar4_timer
  // VAR_INT nascar5 driver_car5 car5_cpcounter car5_laps car5_result nascar5_timer
  // VAR_INT nascar6 driver_car6 car6_cpcounter car6_laps car6_result nascar6_timer
  // VAR_INT nascar7 driver_car7 car7_cpcounter car7_laps car7_result nascar7_timer
  // VAR_INT nascar8 driver_car8 car8_cpcounter car8_laps car8_result nascar8_timer
  // VAR_INT nascar9 driver_car9 car9_cpcounter car9_laps car9_result nascar9_timer
  // VAR_INT nascar10 driver_car10 car10_cpcounter car10_laps car10_result nascar10_timer
  // VAR_INT nascar11 driver_car11 car11_cpcounter car11_laps car11_result nascar11_timer
  // VAR_INT nascar12 driver_car12 car12_cpcounter car12_laps car12_result nascar12_timer
  // VAR_INT nascar13 driver_car13 car13_cpcounter car13_laps car13_result nascar13_timer
  // VAR_INT nascar14 driver_car14 car14_cpcounter car14_laps car14_result nascar14_timer
  // VAR_INT nascar15 driver_car15 car15_cpcounter car15_laps car15_result nascar15_timer


  // VAR_INT car4_stuck_timer car5_stuck_timer
  // VAR_INT car6_stuck_timer car7_stuck_timer car8_stuck_timer car9_stuck_timer car10_stuck_timer
  // VAR_INT car11_stuck_timer car12_stuck_timer car13_stuck_timer car14_stuck_timer car15_stuck_timer


  // VAR_FLOAT car9_cp_x car9_cp_y car9_cp_z
  // VAR_FLOAT car10_cp_x car10_cp_y car10_cp_z
  // VAR_FLOAT car11_cp_x car11_cp_y car11_cp_z
  // VAR_FLOAT car12_cp_x car12_cp_y car12_cp_z
  // VAR_FLOAT car13_cp_x car13_cp_y car13_cp_z
  // VAR_FLOAT car14_cp_x car14_cp_y car14_cp_z
  // VAR_FLOAT car15_cp_x car15_cp_y car15_cp_z


  // VAR_FLOAT car4_stuck_x car4_stuck_y car4_stuck_z
  // VAR_FLOAT car5_stuck_x car5_stuck_y car5_stuck_z
  // VAR_FLOAT car6_stuck_x car6_stuck_y car6_stuck_z
  // VAR_FLOAT car7_stuck_x car7_stuck_y car7_stuck_z
  // VAR_FLOAT car8_stuck_x car8_stuck_y car8_stuck_z
  // VAR_FLOAT car9_stuck_x car9_stuck_y car9_stuck_z
  // VAR_FLOAT car10_stuck_x car10_stuck_y car10_stuck_z
  // VAR_FLOAT car11_stuck_x car11_stuck_y car11_stuck_z
  // VAR_FLOAT car12_stuck_x car12_stuck_y car12_stuck_z
  // VAR_FLOAT car13_stuck_x car13_stuck_y car13_stuck_z
  // VAR_FLOAT car14_stuck_x car14_stuck_y car14_stuck_z
  // VAR_FLOAT car15_stuck_x car15_stuck_y car15_stuck_z


  //LOAD_AND_LAUNCH_MISSION_EXCLUSIVE var_ints
  //VAR_INT driver_car1 driver_car2 driver_car3
  //VAR_INT player_cpcounter car1_cpcounter car2_cpcounter car3_cpcounter gosub_cpcounter
  //VAR_INT position mins seconds temp_int
  //VAR_INT players_car
  //VAR_INT car1_stuck_timer car2_stuck_timer car3_stuck_timer game_timer
  //VAR_FLOAT car_x car_y
  //VAR_FLOAT car_distance_from_cp player1_distance_from_cp
  //VAR_FLOAT player1_cp_x player1_cp_y player1_cp_z
  //VAR_FLOAT car1_cp_x car1_cp_y car1_cp_z
  //VAR_FLOAT car2_cp_x car2_cp_y car2_cp_z
  //VAR_FLOAT car3_cp_x car3_cp_y car3_cp_z
  //VAR_FLOAT car1_stuck_x car1_stuck_y car1_stuck_z
  //VAR_FLOAT car2_stuck_x car2_stuck_y car2_stuck_z
  //VAR_FLOAT car3_stuck_x car3_stuck_y car3_stuck_z
  //VAR_FLOAT gosub_cp_x gosub_cp_y	gosub_cp_z
  //VAR_FLOAT cp1_x cp1_y cp1_z
  //VAR_FLOAT cp2_x cp2_y cp2_z
  //VAR_FLOAT cp3_x cp3_y cp3_z
  //VAR_FLOAT cp4_x cp4_y cp4_z
  //VAR_FLOAT cp5_x cp5_y cp5_z
  //VAR_FLOAT cp6_x cp6_y cp6_z
  //VAR_FLOAT cp7_x cp7_y cp7_z
  //VAR_FLOAT cp8_x cp8_y cp8_z
  //VAR_FLOAT cp9_x cp9_y cp9_z
  //VAR_FLOAT cp10_x cp10_y cp10_z


  // ************************************ Mission Start **************************************



}
