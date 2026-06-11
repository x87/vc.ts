// Generated from main/rcrace1.sc

import { $ } from "../utils/vars.mts";

async function mission_rc_races_start() {


  ONMISSION = 1;
  $.flag_player_on_rc_mission = 1;



  if ($.playerpassedrcrace == 0) {
    Stat.RegisterMissionGiven();
  }



  await asyncWait(0);


  Text.LoadMissionText("RCRACE1");




  $.rc_total_checkpoints = 50;


  $.rc_cp0_x = 720.21;
  $.rc_cp0_y = 723.979;
  $.rc_cp0_z = 11.095;


  $.rc_cp1_x = 772.386;
  $.rc_cp1_y = 737.37;
  $.rc_cp1_z = 15.651;


  $.rc_cp2_x = 801.8997;
  $.rc_cp2_y = 755.155;
  $.rc_cp2_z = 14.029;


  $.rc_cp3_x = 818.443;
  $.rc_cp3_y = 723.44672;
  $.rc_cp3_z = 13.891738;


  $.rc_cp4_x = 789.737366;
  $.rc_cp4_y = 689.696533;
  $.rc_cp4_z = 13.684759;


  $.rc_cp5_x = 840.728577;
  $.rc_cp5_y = 673.793274;
  $.rc_cp5_z = 12.007194;


  $.rc_cp6_x = 881.608952;
  $.rc_cp6_y = 694.430481;
  $.rc_cp6_z = 11.477220;


  $.rc_cp7_x = 869.666931;
  $.rc_cp7_y = 734.155029;
  $.rc_cp7_z = 18.036583;


  $.rc_cp8_x = 857.413269;
  $.rc_cp8_y = 775.233521;
  $.rc_cp8_z = 11.757508;


  $.rc_cp9_x = 879.892883;
  $.rc_cp9_y = 804.468506;
  $.rc_cp9_z = 12.733551;


  $.rc_cp10_x = 888.080078;
  $.rc_cp10_y = 838.525696;
  $.rc_cp10_z = 13.69488;


  $.rc_cp11_x = 874.349976;
  $.rc_cp11_y = 866.943298;
  $.rc_cp11_z = 13.128591;


  $.rc_cp12_x = 815.803162;
  $.rc_cp12_y = 881.502014;
  $.rc_cp12_z = 11.895948;


  $.rc_cp13_x = 808.499695;
  $.rc_cp13_y = 851.382385;
  $.rc_cp13_z = 9.721323;


  $.rc_cp14_x = 824.736877;
  $.rc_cp14_y = 827.109314;
  $.rc_cp14_z = 8.638121;


  $.rc_cp15_x = 795.352356;
  $.rc_cp15_y = 821.603394;
  $.rc_cp15_z = 10.476272;


  $.rc_cp16_x = 766.222908;
  $.rc_cp16_y = 835.067078;
  $.rc_cp16_z = 12.008146;


  $.rc_cp17_x = 750.055298;
  $.rc_cp17_y = 882.093689;
  $.rc_cp17_z = 13.639874;


  $.rc_cp18_x = 726.083496;
  $.rc_cp18_y = 840.016296;
  $.rc_cp18_z = 14.142872;


  $.rc_cp19_x = 756.243835;
  $.rc_cp19_y = 792.235535;
  $.rc_cp19_z = 17.651541;


  $.rc_cp20_x = 727.599548;
  $.rc_cp20_y = 775.997925;
  $.rc_cp20_z = 11.351994;


  $.rc_cp21_x = 700.173645;
  $.rc_cp21_y = 800.755737;
  $.rc_cp21_z = 12.544271;


  $.rc_cp22_x = 673.115417;
  $.rc_cp22_y = 831.915222;
  $.rc_cp22_z = 14.805586;


  $.rc_cp23_x = 672.152771;
  $.rc_cp23_y = 798.628239;
  $.rc_cp23_z = 12.678308;


  $.rc_cp24_x = 692.794983;
  $.rc_cp24_y = 761.659912;
  $.rc_cp24_z = 10.672594;


  $.rc_cp25_x = 741.042297;
  $.rc_cp25_y = 716.250732;
  $.rc_cp25_z = 11.225778;

  ///


  $.rc_cp26_x = 772.386;
  $.rc_cp26_y = 737.37;
  $.rc_cp26_z = 15.651;


  $.rc_cp27_x = 801.8997;
  $.rc_cp27_y = 755.155;
  $.rc_cp27_z = 14.029;


  $.rc_cp28_x = 818.443;
  $.rc_cp28_y = 723.44672;
  $.rc_cp28_z = 13.891738;


  $.rc_cp29_x = 789.737366;
  $.rc_cp29_y = 689.696533;
  $.rc_cp29_z = 13.684759;


  $.rc_cp30_x = 840.728577;
  $.rc_cp30_y = 673.793274;
  $.rc_cp30_z = 12.007194;


  $.rc_cp31_x = 881.608952;
  $.rc_cp31_y = 694.430481;
  $.rc_cp31_z = 11.477220;


  $.rc_cp32_x = 869.666931;
  $.rc_cp32_y = 734.155029;
  $.rc_cp32_z = 18.036583;


  $.rc_cp33_x = 857.413269;
  $.rc_cp33_y = 775.233521;
  $.rc_cp33_z = 11.757508;


  $.rc_cp34_x = 879.892883;
  $.rc_cp34_y = 804.468506;
  $.rc_cp34_z = 12.733551;


  $.rc_cp35_x = 888.080078;
  $.rc_cp35_y = 838.525696;
  $.rc_cp35_z = 13.69488;


  $.rc_cp36_x = 874.349976;
  $.rc_cp36_y = 866.943298;
  $.rc_cp36_z = 13.128591;


  $.rc_cp37_x = 815.803162;
  $.rc_cp37_y = 881.502014;
  $.rc_cp37_z = 11.895948;


  $.rc_cp38_x = 808.499695;
  $.rc_cp38_y = 851.382385;
  $.rc_cp38_z = 9.721323;


  $.rc_cp39_x = 824.736877;
  $.rc_cp39_y = 827.109314;
  $.rc_cp39_z = 8.638121;


  $.rc_cp40_x = 795.352356;
  $.rc_cp40_y = 821.603394;
  $.rc_cp40_z = 10.476272;


  $.rc_cp41_x = 766.222908;
  $.rc_cp41_y = 835.067078;
  $.rc_cp41_z = 12.008146;


  $.rc_cp42_x = 750.055298;
  $.rc_cp42_y = 882.093689;
  $.rc_cp42_z = 13.639874;


  $.rc_cp43_x = 726.083496;
  $.rc_cp43_y = 840.016296;
  $.rc_cp43_z = 14.142872;


  $.rc_cp44_x = 756.243835;
  $.rc_cp44_y = 792.235535;
  $.rc_cp44_z = 17.651541;


  $.rc_cp45_x = 727.599548;
  $.rc_cp45_y = 775.997925;
  $.rc_cp45_z = 11.351994;


  $.rc_cp46_x = 700.173645;
  $.rc_cp46_y = 800.755737;
  $.rc_cp46_z = 12.544271;


  $.rc_cp47_x = 673.115417;
  $.rc_cp47_y = 831.915222;
  $.rc_cp47_z = 14.805586;


  $.rc_cp48_x = 672.152771;
  $.rc_cp48_y = 798.628239;
  $.rc_cp48_z = 12.678308;


  $.rc_cp49_x = 692.794983;
  $.rc_cp49_y = 761.659912;
  $.rc_cp49_z = 10.672594;


  $.rc_cp50_x = 741.042297;
  $.rc_cp50_y = 716.250732;
  $.rc_cp50_z = 11.225778;





  $.rc_car1_stuck_x = 740.8333;
  $.rc_car1_stuck_y = 721.5853;
  $.rc_car1_stuck_z = 11.0126;


  $.rc_car2_stuck_x = 740.5471;
  $.rc_car2_stuck_y = 718.5853;
  $.rc_car2_stuck_z = 11.0884;


  $.rc_car3_stuck_x = 740.2183;
  $.rc_car3_stuck_y = 715.5853;
  $.rc_car3_stuck_z = 11.1233;


  $.rc_car_headings = 262.9725;


  $.rc_gosub_cpcounter = 0;
  $.rc_player_cpcounter = 0;
  $.rc_car1_cpcounter = 0;
  $.rc_car2_cpcounter = 0;
  $.rc_car3_cpcounter = 0;
  $.rc_car1_locate_size = 3.5;
  $.rc_car2_locate_size = 3.5;
  $.rc_car3_locate_size = 3.5;


  $.race_timer_seconds_rccar1 = 0;
  $.race_timer_seconds2_rccar1 = 0;
  $.race_timer_mins_rccar1 = 0;


  $.laps1 = 2;
  $.laps2 = 1;
  $.lapstodisplay_rc1 = 0;



  Streaming.RequestModel(rcbandit);


  while (!(Streaming.HasModelLoaded(rcbandit))) {
    await asyncWait(0);
  }


  $.previous_wanted_levelrcrace = $.player1.storeWantedLevel();
  Game.SetPoliceIgnorePlayer($.player1, true /* ON */);
  $.player1.clearWantedLevel();
  $.vanforrcrace = $.player1.storeCarIsIn();
  $.previous_wanted_levelrcrace = $.player1.storeWantedLevel();



  World.ClearArea(757.152, 811.371, 500.0, 500.0, true /* TRUE */);


  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);
  Rc.GiveCarToPlayer($.player1, 739.9240, 712.5853, 11.1484, 262.9725);
  $.rc_playercar = Rc.GetCar($.player1);
  Rc.SetEnableDetonateOnContact(false /* FALSE */);
  $.rc_playercar.changeColor(4 /* CARCOLOUR_MIDNIGHTBLUE */, 1 /* CARCOLOUR_WHITE */);


  $.rc_race_car1 = Car.Create(rcbandit, $.rc_car1_stuck_x, $.rc_car1_stuck_y, $.rc_car1_stuck_z);
  $.rc_race_car1.changeColor(3 /* CARCOLOUR_CHERRYRED */, 1 /* CARCOLOUR_WHITE */);
  $.rc_race_car1.setStrong(true /* TRUE */);
  $.rc_race_car1.setUpsidedownNotDamaged(true /* TRUE */);
  $.rc_race_car1.setHeading($.rc_car_headings);
  $.rc_race_car1.setIdle();
  $.rc_race_car1.setDrivingStyle(2);
  $.rc_race_car1.setCruiseSpeed(26.0);
  $.rc_race_car1.setOnlyDamagedByPlayer(true /* TRUE */);
  $.rc_race_car1.setStraightLineDistance(1);


  $.rc_race_car2 = Car.Create(rcbandit, $.rc_car2_stuck_x, $.rc_car2_stuck_y, $.rc_car2_stuck_z);
  $.rc_race_car2.changeColor(2 /* CARCOLOUR_POLICECARBLUE */, 1 /* CARCOLOUR_WHITE */);
  $.rc_race_car2.setStrong(true /* TRUE */);
  $.rc_race_car2.setUpsidedownNotDamaged(true /* TRUE */);
  $.rc_race_car2.setHeading($.rc_car_headings);
  $.rc_race_car2.setIdle();
  $.rc_race_car2.setDrivingStyle(2);
  $.rc_race_car2.setCruiseSpeed(20.0);
  $.rc_race_car2.setOnlyDamagedByPlayer(true /* TRUE */);
  $.rc_race_car2.setStraightLineDistance(1);


  $.rc_race_car3 = Car.Create(rcbandit, $.rc_car3_stuck_x, $.rc_car3_stuck_y, $.rc_car3_stuck_z);
  $.rc_race_car3.changeColor(6 /* CARCOLOUR_TAXIYELLOW */, 1 /* CARCOLOUR_WHITE */);
  $.rc_race_car3.setStrong(true /* TRUE */);
  $.rc_race_car3.setUpsidedownNotDamaged(true /* TRUE */);
  $.rc_race_car3.setHeading($.rc_car_headings);
  $.rc_race_car3.setIdle();
  $.rc_race_car3.setDrivingStyle(2);
  $.rc_race_car3.setCruiseSpeed(23.0);
  $.rc_race_car3.setOnlyDamagedByPlayer(true /* TRUE */);
  $.rc_race_car3.setStraightLineDistance(1);


  Camera.SetFixedPosition(742.290527, 724.444946, 12.351935, 0.0, 0.0, 0.0); //starting line
  Camera.PointAtPoint(742.166504, 723.502808, 12.040593, 2 /* JUMP_CUT */);


  Clock.SetTimeOfDay(10, 0);
  Weather.ForceNow(4 /* WEATHER_EXTRA_SUNNY */);


  Camera.DoFade(2000, 1 /* FADE_IN */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }



  TIMERA = 0;


  while (TIMERA < 5000) {
    await asyncWait(0);
    Text.PrintNow("RCR1_1", 5000, 2);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → endrcracecut (not lowered; manual jump required)
      throw new Error("unresolved GOTO endrcracecut"); // fallback: would break linear control flow
    }


  }


  Camera.SetFixedPosition(893.181517, 624.383301, 41.499504, 0.0, 0.0, 0.0); //track
  Camera.PointAtPoint(892.674194, 625.208435, 41.251152, 2 /* JUMP_CUT */);


  TIMERA = 0;


  while (TIMERA < 5000) {
    await asyncWait(0);
    Text.PrintNow("RCR1_2", 5000, 2);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → endrcracecut (not lowered; manual jump required)
      throw new Error("unresolved GOTO endrcracecut"); // fallback: would break linear control flow
    }


  }


  Camera.SetFixedPosition(743.534424, 710.374146, 12.714686, 0.0, 0.0, 0.0); //final starting line
  Camera.PointAtPoint(743.002930, 711.205878, 12.550325, 2 /* JUMP_CUT */);


  TIMERA = 0;


  while (TIMERA < 5000) {
    await asyncWait(0);
    Text.PrintNow("RCR1_3", 5000, 2);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → endrcracecut (not lowered; manual jump required)
      throw new Error("unresolved GOTO endrcracecut"); // fallback: would break linear control flow
    }


  }
}




async function endrcracecut() {


  if (!(Car.IsDead($.rc_playercar))) {
    Text.ClearSmallPrints();
    Camera.PointAtCar($.rc_playercar, 3 /* BEHINDCAR */, 2 /* JUMP_CUT */);
    Hud.SwitchWidescreen(false /* OFF */);
    await asyncWait(500);
  }
}





// ***************************************************************



async function rc_race_start() {


  $.rc_total_checkpoints_minus1 = $.rc_total_checkpoints - 1;


  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
  Game.SetAllCarsCanBeDamaged(false /* FALSE */);
  Text.PrintBig("RACE2", 1100, 4);
  Sound.AddOneOffSound(0.0, 0.0, 0.0, 7 /* SOUND_RACE_START_3 */);
  await asyncWait(1000);
  Text.PrintBig("RACE3", 1100, 4);
  Sound.AddOneOffSound(0.0, 0.0, 0.0, 8 /* SOUND_RACE_START_2 */);
  await asyncWait(1000);
  Text.PrintBig("RACE4", 1100, 4);
  Sound.AddOneOffSound(0.0, 0.0, 0.0, 9 /* SOUND_RACE_START_1 */);
  await asyncWait(1000);
  Text.PrintBig("RACE5", 800, 4); //"GO!"
  Sound.AddOneOffSound(0.0, 0.0, 0.0, 10 /* SOUND_RACE_START_GO */);
  $.player1.setControl(true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* FALSE */);


  Hud.DisplayCounterWithString($.$id.laps1, 0 /* COUNTER_DISPLAY_NUMBER */, "RCR1_4");


  if (Car.IsDead($.rc_race_car1)) {
    // SCM GOTO → mission_rc_races_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_rc_races_failed"); // fallback: would break linear control flow
  }


  if (Car.IsDead($.rc_race_car2)) {
    // SCM GOTO → mission_rc_races_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_rc_races_failed"); // fallback: would break linear control flow
  }


  if (Car.IsDead($.rc_race_car3)) {
    // SCM GOTO → mission_rc_races_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_rc_races_failed"); // fallback: would break linear control flow
  }

  //IF NOT IS_CAR_DEAD rc_race_car1
  //	ADD_BLIP_FOR_CAR_OLD rc_race_car1 RED MARKER_ONLY rc_blip_car1
  //ENDIF
  //
  //IF NOT IS_CAR_DEAD rc_race_car2
  //	ADD_BLIP_FOR_CAR_OLD rc_race_car2 RED MARKER_ONLY rc_blip_car2
  //ENDIF
  //
  //IF NOT IS_CAR_DEAD rc_race_car3
  //	ADD_BLIP_FOR_CAR_OLD rc_race_car3 RED MARKER_ONLY rc_blip_car3
  //ENDIF


  await rc_get_next_checkpoint();  // SCM GOSUB rc_get_next_checkpoint
  $.rc_player1_cp_x = $.rc_gosub_cp_x;
  $.rc_player1_cp_y = $.rc_gosub_cp_y;
  $.rc_player1_cp_z = $.rc_gosub_cp_z;
  $.rc_blip_2nd_x = $.rc_gosub_cp_2nd_x;
  $.rc_blip_2nd_y = $.rc_gosub_cp_2nd_y;
  $.rc_blip_2nd_z = $.rc_gosub_cp_2nd_z;


  $.rc_car1_cp_x = $.rc_gosub_cp_x;
  $.rc_car1_cp_y = $.rc_gosub_cp_y;
  $.rc_car1_cp_z = $.rc_gosub_cp_z;


  $.rc_car2_cp_x = $.rc_gosub_cp_x;
  $.rc_car2_cp_y = $.rc_gosub_cp_y;
  $.rc_car2_cp_z = $.rc_gosub_cp_z;


  $.rc_car3_cp_x = $.rc_gosub_cp_x;
  $.rc_car3_cp_y = $.rc_gosub_cp_y;
  $.rc_car3_cp_z = $.rc_gosub_cp_z;


  $.rc_blip_chase = Blip.AddForCoord($.rc_player1_cp_x, $.rc_player1_cp_y, $.rc_player1_cp_z);


  $.rc_second_blip = Blip.AddForCoordOld($.rc_blip_2nd_x, $.rc_blip_2nd_y, $.rc_blip_2nd_z, 5 /* PURPLE */, 2 /* BLIP_ONLY */);


  $.rc_second_blip.dim(true /* TRUE */);
  $.rc_race_car1.gotoCoordinates($.rc_car1_cp_x, $.rc_car1_cp_y, $.rc_car1_cp_z);
  $.rc_race_car2.gotoCoordinates($.rc_car2_cp_x, $.rc_car2_cp_y, $.rc_car2_cp_z);
  $.rc_race_car3.gotoCoordinates($.rc_car3_cp_x, $.rc_car3_cp_y, $.rc_car3_cp_z);


  $.rc_race_timer = 0;
  Hud.DisplayTimerWithString($.$id.rc_race_timer, 0 /* TIMER_UP */, "RCH1_5");


  if (Car.IsDead($.rc_playercar)) {
    // SCM GOTO → mission_rc_races_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_rc_races_failed"); // fallback: would break linear control flow
  }



  while ($.rc_player_cpcounter < $.rc_total_checkpoints) {
    await asyncWait(0);
    World.ClearArea(-447.80, 1442.95, 10.0, 120.0, true /* TRUE */);
    $.rc_position = 0;


    if (!(Car.IsDead($.rc_playercar))) {
      if ($.rc_playercar.locate2D($.rc_player1_cp_x, $.rc_player1_cp_y, 4.2, 4.2, false /* FALSE */)) {
        ++$.rc_player_cpcounter;
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.rc_blip_chase.remove();
        $.rc_second_blip.remove();
        $.rc_gosub_cpcounter = $.rc_player_cpcounter;
        await rc_get_next_checkpoint();  // SCM GOSUB rc_get_next_checkpoint
        $.rc_player1_cp_x = $.rc_gosub_cp_x;
        $.rc_player1_cp_y = $.rc_gosub_cp_y;
        $.rc_player1_cp_z = $.rc_gosub_cp_z;
        $.rc_blip_2nd_x = $.rc_gosub_cp_2nd_x;
        $.rc_blip_2nd_y = $.rc_gosub_cp_2nd_y;
        $.rc_blip_2nd_z = $.rc_gosub_cp_2nd_z;
        if ($.rc_player_cpcounter == $.rc_total_checkpoints) {
          // SCM GOTO → mission_rc_races_passed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_rc_races_passed"); // fallback: would break linear control flow
        }


        //			IF rc_player_cpcounter = 25
        //				PRINT_BIG ( RCRC1_3 ) 5000 2
        //			ENDIF

        $.rc_blip_chase = Blip.AddForCoord($.rc_player1_cp_x, $.rc_player1_cp_y, $.rc_player1_cp_z);
        if (!($.rc_player_cpcounter == $.rc_total_checkpoints_minus1)) {
          $.rc_second_blip = Blip.AddForCoordOld($.rc_blip_2nd_x, $.rc_blip_2nd_y, $.rc_blip_2nd_z, 5 /* PURPLE */, 2 /* BLIP_ONLY */);
          $.rc_second_blip.dim(true /* ON */);
          $.rc_second_blip.changeScale(2);
        }


      }
    }
    if (!(Car.IsDead($.rc_race_car1))) {
      $.rc_gosub_race_car = $.rc_race_car1;
      $.rc_gosub_cpcounter = $.rc_car1_cpcounter;
      $.rc_car_stuck_x = $.rc_car1_stuck_x;
      $.rc_car_stuck_y = $.rc_car1_stuck_y;
      $.rc_car_stuck_z = $.rc_car1_stuck_z;
      $.rc_timer_started = $.rc_car1_stuck_timer;
      await rc_race_car_stuck_checks();  // SCM GOSUB rc_race_car_stuck_checks
      $.rc_car1_stuck_x = $.rc_car_stuck_x;
      $.rc_car1_stuck_y = $.rc_car_stuck_y;
      $.rc_car1_stuck_z = $.rc_car_stuck_z;
      $.rc_car1_stuck_timer = $.rc_timer_started;
      if (!(Car.IsDead($.rc_race_car1))) {
        if ($.rc_race_car1.locate2D($.rc_car1_cp_x, $.rc_car1_cp_y, $.rc_car1_locate_size, $.rc_car1_locate_size, false)) {
          ++$.rc_car1_cpcounter;
          $.rc_gosub_cpcounter = $.rc_car1_cpcounter;
          await rc_get_next_checkpoint();  // SCM GOSUB rc_get_next_checkpoint
          $.rc_car1_cp_x = $.rc_gosub_cp_x;
          $.rc_car1_cp_y = $.rc_gosub_cp_y;
          $.rc_car1_cp_z = $.rc_gosub_cp_z;

          //				IF rc_car1_cpcounter = 17
          //					rc_car1_locate_size = 6.0
          //				ENDIF

          if ($.rc_car1_cpcounter == $.rc_total_checkpoints) {
            Text.PrintNow("RACEFA", 5000, 1); //"~r~You failed to win the race!"
            // SCM GOTO → mission_rc_races_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_rc_races_failed"); // fallback: would break linear control flow
          }
          if ($.rc_car1_locate_size == 7.0) {
            $.rc_race_car1.gotoCoordinates($.rc_car1_cp_x, $.rc_car1_cp_y, $.rc_car1_cp_z);
          }
          else {
            $.rc_race_car1.gotoCoordinatesAccurate($.rc_car1_cp_x, $.rc_car1_cp_y, $.rc_car1_cp_z);
          }
        }
      }
    }


    if (!(Car.IsDead($.rc_race_car2))) {
      $.rc_gosub_race_car = $.rc_race_car2;
      $.rc_gosub_cpcounter = $.rc_car2_cpcounter;
      $.rc_car_stuck_x = $.rc_car2_stuck_x;
      $.rc_car_stuck_y = $.rc_car2_stuck_y;
      $.rc_car_stuck_z = $.rc_car2_stuck_z;
      $.rc_timer_started = $.rc_car2_stuck_timer;
      await rc_race_car_stuck_checks();  // SCM GOSUB rc_race_car_stuck_checks
      $.rc_car2_stuck_x = $.rc_car_stuck_x;
      $.rc_car2_stuck_y = $.rc_car_stuck_y;
      $.rc_car2_stuck_z = $.rc_car_stuck_z;
      $.rc_car2_stuck_timer = $.rc_timer_started;
      if (!(Car.IsDead($.rc_race_car2))) {
        if ($.rc_race_car2.locate2D($.rc_car2_cp_x, $.rc_car2_cp_y, $.rc_car2_locate_size, $.rc_car2_locate_size, false)) {
          ++$.rc_car2_cpcounter;
          $.rc_gosub_cpcounter = $.rc_car2_cpcounter;
          await rc_get_next_checkpoint();  // SCM GOSUB rc_get_next_checkpoint
          $.rc_car2_cp_x = $.rc_gosub_cp_x;
          $.rc_car2_cp_y = $.rc_gosub_cp_y;
          $.rc_car2_cp_z = $.rc_gosub_cp_z;

          //				IF rc_car2_cpcounter = 17
          //					rc_car2_locate_size = 6.0
          //				ENDIF

          if ($.rc_car2_cpcounter == $.rc_total_checkpoints) {
            Text.PrintNow("RACEFA", 5000, 1); //"~r~You failed to win the race!"
            // SCM GOTO → mission_rc_races_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_rc_races_failed"); // fallback: would break linear control flow
          }
          if ($.rc_car2_locate_size == 7.0) {
            $.rc_race_car2.gotoCoordinates($.rc_car2_cp_x, $.rc_car2_cp_y, $.rc_car2_cp_z);
          }
          else {
            $.rc_race_car2.gotoCoordinatesAccurate($.rc_car2_cp_x, $.rc_car2_cp_y, $.rc_car2_cp_z);
          }
        }
      }
    }


    if (!(Car.IsDead($.rc_race_car3))) {
      $.rc_gosub_race_car = $.rc_race_car3;
      $.rc_gosub_cpcounter = $.rc_car3_cpcounter;
      $.rc_car_stuck_x = $.rc_car3_stuck_x;
      $.rc_car_stuck_y = $.rc_car3_stuck_y;
      $.rc_car_stuck_z = $.rc_car3_stuck_z;
      $.rc_timer_started = $.rc_car3_stuck_timer;
      await rc_race_car_stuck_checks();  // SCM GOSUB rc_race_car_stuck_checks
      $.rc_car3_stuck_x = $.rc_car_stuck_x;
      $.rc_car3_stuck_y = $.rc_car_stuck_y;
      $.rc_car3_stuck_z = $.rc_car_stuck_z;
      $.rc_car3_stuck_timer = $.rc_timer_started;
      if (!(Car.IsDead($.rc_race_car3))) {
        if ($.rc_race_car3.locate2D($.rc_car3_cp_x, $.rc_car3_cp_y, $.rc_car3_locate_size, $.rc_car3_locate_size, false)) {


          ++$.rc_car3_cpcounter;
          $.rc_gosub_cpcounter = $.rc_car3_cpcounter;
          await rc_get_next_checkpoint();  // SCM GOSUB rc_get_next_checkpoint
          $.rc_car3_cp_x = $.rc_gosub_cp_x;
          $.rc_car3_cp_y = $.rc_gosub_cp_y;
          $.rc_car3_cp_z = $.rc_gosub_cp_z;

          //				IF rc_car3_cpcounter = 17
          //					rc_car3_locate_size = 6.0
          //				ENDIF

          if ($.rc_car3_cpcounter == $.rc_total_checkpoints) {
            Text.PrintNow("RACEFA", 5000, 1); //"~r~You failed to win the race!"
            // SCM GOTO → mission_rc_races_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_rc_races_failed"); // fallback: would break linear control flow
          }
          if ($.rc_car3_locate_size == 7.0) {
            $.rc_race_car3.gotoCoordinates($.rc_car3_cp_x, $.rc_car3_cp_y, $.rc_car3_cp_z);
          }
          else {
            $.rc_race_car3.gotoCoordinatesAccurate($.rc_car3_cp_x, $.rc_car3_cp_y, $.rc_car3_cp_z);
          }
        }
      }
    }
    if ($.rc_position == 0) {
      Text.PrintNow("FIRST", 100, 1); //"1st"
    }
    if ($.rc_position == 1) {
      Text.PrintNow("SECOND", 100, 1); //"2nd"
    }
    if ($.rc_position == 2) {
      Text.PrintNow("THIRD", 100, 1); //"3rd"
    }
    if ($.rc_position == 3) {
      Text.PrintNow("FOURTH", 100, 1); //"4th"
    }
    if ($.rc_player_cpcounter == $.rc_total_checkpoints_minus1) {
      Fx.DrawWeaponshopCorona($.rc_player1_cp_x, $.rc_player1_cp_y, $.rc_player1_cp_z, 3.8, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 100, 5, 5);
    }
    else {
      Fx.DrawWeaponshopCorona($.rc_player1_cp_x, $.rc_player1_cp_y, $.rc_player1_cp_z, 3.8, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    if (Car.IsDead($.rc_playercar)) {
      // SCM GOTO → mission_rc_races_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rc_races_failed"); // fallback: would break linear control flow
    }

    //display number of laps
    if ($.rc_player_cpcounter > 24) {
      if ($.lapstodisplay_rc1 == 0) {
        Hud.ClearCounter($.$id.laps1);
        Hud.DisplayCounterWithString($.$id.laps2, 0 /* COUNTER_DISPLAY_NUMBER */, "RCR1_4");
        $.lapstodisplay_rc1 = 1;
      }
    }

    /////////////////////////////////////////////////////////RANGE

    if (!(Car.IsDead($.rc_playercar))) {
      if (!($.rc_playercar.isInArea2D(595.94, 930.07, 950.085, 606.168, false /* FALSE */))) {
        if ($.rc_playercar.isInArea2D(473.016, 1102.161, 939.0, 217.567, false /* FALSE */)) {
          Text.PrintNow("RCR1_6", 3000, 1);
        }
      }
    }

    //out of range
    if (!(Car.IsDead($.rc_playercar))) {
      if (!($.rc_playercar.isInArea2D(473.016, 1102.161, 939.0, 217.567, false /* FALSE */))) {
        Rc.BlowUpBuggy();
        Text.PrintNow("RCR1_7", 5000, 1);
        // SCM GOTO → mission_rc_races_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rc_races_failed"); // fallback: would break linear control flow
      }
    }



  }





  // SCM GOTO → mission_rc_races_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_rc_races_passed"); // fallback: would break linear control flow
}



// Mission races failed


async function mission_rc_races_failed() {
  Text.PrintBig("M_FAIL", 2000, 1);
}




// mission races passed


async function mission_rc_races_passed() {

  //flag_rcplane_passed = 1
  //REGISTER_MISSION_PASSED ( )

  /// Works out time in mins and seconds

  $.race_timer_seconds_rccar1 = $.rc_race_timer / 1000;


  Stat.RegisterFastestTime(4, $.race_timer_seconds_rccar1);


  $.race_timer_mins_rccar1 = $.race_timer_seconds_rccar1 / 60;
  $.race_timer_seconds2_rccar1 = $.race_timer_mins_rccar1 * 60;
  $.race_timer_seconds_rccar1 = $.race_timer_seconds_rccar1 - $.race_timer_seconds2_rccar1;


  if ($.race_timer_seconds_rccar1 >= 10) {
    Text.PrintWith2NumbersNow("RCH1_9", $.race_timer_mins_rccar1, $.race_timer_seconds_rccar1, 7000, 1);
  }
  else {
    Text.PrintWith2NumbersNow("RCH1_10", $.race_timer_mins_rccar1, $.race_timer_seconds_rccar1, 7000, 1);
  }


  if ($.playerpassedrcrace == 0) {
    Stat.PlayerMadeProgress(1);
    Stat.RegisterOddjobMissionPassed();
    $.playerpassedrcrace = 1;
  }


  $.player1.addScore(100);
  Text.PrintWithNumberBig("M_PASS", 100, 5000, 1);
  $.player1.clearWantedLevel();
  Audio.PlayMissionPassedTune(1);
}



// mission cleanup


async function mission_rc_races_cleanup() {
  Rc.RemoveBuggy();
  //REMOVE_BLIP rc_blip_car1
  //REMOVE_BLIP rc_blip_car2
  //REMOVE_BLIP rc_blip_car3

  $.rc_blip_chase.remove();
  $.rc_second_blip.remove();
  Streaming.MarkModelAsNoLongerNeeded(rcbandit);
  $.rc_race_car1.delete();
  $.rc_race_car2.delete();
  $.rc_race_car3.delete();
  Hud.ClearTimer($.$id.rc_race_timer);
  ONMISSION = 0;
  $.flag_player_on_rc_mission = 0;
  $.has_player_just_done_rcrace_mission = 1;
  Rc.SetEnableDetonateOnContact(true /* TRUE */);
  Game.SetPoliceIgnorePlayer($.player1, false /* OFF */);
  Hud.ClearCounter($.$id.laps1);
  Hud.ClearCounter($.$id.laps2);
  Weather.Release();
  Mission.Finish();
}



///////////////////////////////////////////////

async function rc_get_next_checkpoint() {
  ///////////////////////////////////////////////


  if ($.rc_gosub_cpcounter == 0) {
    $.rc_gosub_cp_x = $.rc_cp1_x;
    $.rc_gosub_cp_y = $.rc_cp1_y;
    $.rc_gosub_cp_z = $.rc_cp1_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp2_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp2_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp2_z;
  }


  if ($.rc_gosub_cpcounter == 1) {
    $.rc_gosub_cp_x = $.rc_cp2_x;
    $.rc_gosub_cp_y = $.rc_cp2_y;
    $.rc_gosub_cp_z = $.rc_cp2_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp3_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp3_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp3_z;
  }


  if ($.rc_gosub_cpcounter == 2) {
    $.rc_gosub_cp_x = $.rc_cp3_x;
    $.rc_gosub_cp_y = $.rc_cp3_y;
    $.rc_gosub_cp_z = $.rc_cp3_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp4_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp4_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp4_z;
  }


  if ($.rc_gosub_cpcounter == 3) {
    $.rc_gosub_cp_x = $.rc_cp4_x;
    $.rc_gosub_cp_y = $.rc_cp4_y;
    $.rc_gosub_cp_z = $.rc_cp4_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp5_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp5_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp5_z;
  }


  if ($.rc_gosub_cpcounter == 4) {
    $.rc_gosub_cp_x = $.rc_cp5_x;
    $.rc_gosub_cp_y = $.rc_cp5_y;
    $.rc_gosub_cp_z = $.rc_cp5_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp6_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp6_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp6_z;
  }


  if ($.rc_gosub_cpcounter == 5) {
    $.rc_gosub_cp_x = $.rc_cp6_x;
    $.rc_gosub_cp_y = $.rc_cp6_y;
    $.rc_gosub_cp_z = $.rc_cp6_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp7_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp7_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp7_z;
  }


  if ($.rc_gosub_cpcounter == 6) {
    $.rc_gosub_cp_x = $.rc_cp7_x;
    $.rc_gosub_cp_y = $.rc_cp7_y;
    $.rc_gosub_cp_z = $.rc_cp7_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp8_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp8_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp8_z;
  }


  if ($.rc_gosub_cpcounter == 7) {
    $.rc_gosub_cp_x = $.rc_cp8_x;
    $.rc_gosub_cp_y = $.rc_cp8_y;
    $.rc_gosub_cp_z = $.rc_cp8_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp9_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp9_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp9_z;
  }


  if ($.rc_gosub_cpcounter == 8) {
    $.rc_gosub_cp_x = $.rc_cp9_x;
    $.rc_gosub_cp_y = $.rc_cp9_y;
    $.rc_gosub_cp_z = $.rc_cp9_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp10_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp10_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp10_z;
  }


  if ($.rc_gosub_cpcounter == 9) {
    $.rc_gosub_cp_x = $.rc_cp10_x;
    $.rc_gosub_cp_y = $.rc_cp10_y;
    $.rc_gosub_cp_z = $.rc_cp10_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp11_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp11_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp11_z;
  }


  if ($.rc_gosub_cpcounter == 10) {
    $.rc_gosub_cp_x = $.rc_cp11_x;
    $.rc_gosub_cp_y = $.rc_cp11_y;
    $.rc_gosub_cp_z = $.rc_cp11_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp12_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp12_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp12_z;
  }


  if ($.rc_gosub_cpcounter == 11) {
    $.rc_gosub_cp_x = $.rc_cp12_x;
    $.rc_gosub_cp_y = $.rc_cp12_y;
    $.rc_gosub_cp_z = $.rc_cp12_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp13_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp13_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp13_z;
  }


  if ($.rc_gosub_cpcounter == 12) {
    $.rc_gosub_cp_x = $.rc_cp13_x;
    $.rc_gosub_cp_y = $.rc_cp13_y;
    $.rc_gosub_cp_z = $.rc_cp13_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp14_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp14_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp14_z;
  }


  if ($.rc_gosub_cpcounter == 13) {
    $.rc_gosub_cp_x = $.rc_cp14_x;
    $.rc_gosub_cp_y = $.rc_cp14_y;
    $.rc_gosub_cp_z = $.rc_cp14_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp15_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp15_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp15_z;
  }


  if ($.rc_gosub_cpcounter == 14) {
    $.rc_gosub_cp_x = $.rc_cp15_x;
    $.rc_gosub_cp_y = $.rc_cp15_y;
    $.rc_gosub_cp_z = $.rc_cp15_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp16_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp16_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp16_z;
  }


  if ($.rc_gosub_cpcounter == 15) {
    $.rc_gosub_cp_x = $.rc_cp16_x;
    $.rc_gosub_cp_y = $.rc_cp16_y;
    $.rc_gosub_cp_z = $.rc_cp16_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp17_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp17_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp17_z;
  }


  if ($.rc_gosub_cpcounter == 16) {
    $.rc_gosub_cp_x = $.rc_cp17_x;
    $.rc_gosub_cp_y = $.rc_cp17_y;
    $.rc_gosub_cp_z = $.rc_cp17_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp18_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp18_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp18_z;
  }


  if ($.rc_gosub_cpcounter == 17) {
    $.rc_gosub_cp_x = $.rc_cp18_x;
    $.rc_gosub_cp_y = $.rc_cp18_y;
    $.rc_gosub_cp_z = $.rc_cp18_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp19_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp19_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp19_z;
  }


  if ($.rc_gosub_cpcounter == 18) {
    $.rc_gosub_cp_x = $.rc_cp19_x;
    $.rc_gosub_cp_y = $.rc_cp19_y;
    $.rc_gosub_cp_z = $.rc_cp19_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp20_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp20_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp20_z;
  }


  if ($.rc_gosub_cpcounter == 19) {
    $.rc_gosub_cp_x = $.rc_cp20_x;
    $.rc_gosub_cp_y = $.rc_cp20_y;
    $.rc_gosub_cp_z = $.rc_cp20_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp21_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp21_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp21_z;
  }


  if ($.rc_gosub_cpcounter == 20) {
    $.rc_gosub_cp_x = $.rc_cp21_x;
    $.rc_gosub_cp_y = $.rc_cp21_y;
    $.rc_gosub_cp_z = $.rc_cp21_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp22_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp22_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp22_z;
  }


  if ($.rc_gosub_cpcounter == 21) {
    $.rc_gosub_cp_x = $.rc_cp22_x;
    $.rc_gosub_cp_y = $.rc_cp22_y;
    $.rc_gosub_cp_z = $.rc_cp22_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp23_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp23_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp23_z;
  }


  if ($.rc_gosub_cpcounter == 22) {
    $.rc_gosub_cp_x = $.rc_cp23_x;
    $.rc_gosub_cp_y = $.rc_cp23_y;
    $.rc_gosub_cp_z = $.rc_cp23_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp24_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp24_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp24_z;
  }


  if ($.rc_gosub_cpcounter == 23) {
    $.rc_gosub_cp_x = $.rc_cp24_x;
    $.rc_gosub_cp_y = $.rc_cp24_y;
    $.rc_gosub_cp_z = $.rc_cp24_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp25_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp25_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp25_z;
  }


  if ($.rc_gosub_cpcounter == 24) {
    $.rc_gosub_cp_x = $.rc_cp25_x;
    $.rc_gosub_cp_y = $.rc_cp25_y;
    $.rc_gosub_cp_z = $.rc_cp25_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp26_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp26_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp26_z;
  }


  if ($.rc_gosub_cpcounter == 25) {
    $.rc_gosub_cp_x = $.rc_cp26_x;
    $.rc_gosub_cp_y = $.rc_cp26_y;
    $.rc_gosub_cp_z = $.rc_cp26_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp27_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp27_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp27_z;
  }


  if ($.rc_gosub_cpcounter == 26) {
    $.rc_gosub_cp_x = $.rc_cp27_x;
    $.rc_gosub_cp_y = $.rc_cp27_y;
    $.rc_gosub_cp_z = $.rc_cp27_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp28_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp28_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp28_z;
  }


  if ($.rc_gosub_cpcounter == 27) {
    $.rc_gosub_cp_x = $.rc_cp28_x;
    $.rc_gosub_cp_y = $.rc_cp28_y;
    $.rc_gosub_cp_z = $.rc_cp28_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp29_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp29_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp29_z;
  }


  if ($.rc_gosub_cpcounter == 28) {
    $.rc_gosub_cp_x = $.rc_cp29_x;
    $.rc_gosub_cp_y = $.rc_cp29_y;
    $.rc_gosub_cp_z = $.rc_cp29_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp30_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp30_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp30_z;
  }


  if ($.rc_gosub_cpcounter == 29) {
    $.rc_gosub_cp_x = $.rc_cp30_x;
    $.rc_gosub_cp_y = $.rc_cp30_y;
    $.rc_gosub_cp_z = $.rc_cp30_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp31_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp31_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp31_z;
  }


  if ($.rc_gosub_cpcounter == 30) {
    $.rc_gosub_cp_x = $.rc_cp31_x;
    $.rc_gosub_cp_y = $.rc_cp31_y;
    $.rc_gosub_cp_z = $.rc_cp31_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp32_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp32_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp32_z;
  }


  if ($.rc_gosub_cpcounter == 31) {
    $.rc_gosub_cp_x = $.rc_cp32_x;
    $.rc_gosub_cp_y = $.rc_cp32_y;
    $.rc_gosub_cp_z = $.rc_cp32_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp33_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp33_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp33_z;
  }


  if ($.rc_gosub_cpcounter == 32) {
    $.rc_gosub_cp_x = $.rc_cp33_x;
    $.rc_gosub_cp_y = $.rc_cp33_y;
    $.rc_gosub_cp_z = $.rc_cp33_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp34_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp34_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp34_z;
  }


  if ($.rc_gosub_cpcounter == 33) {
    $.rc_gosub_cp_x = $.rc_cp34_x;
    $.rc_gosub_cp_y = $.rc_cp34_y;
    $.rc_gosub_cp_z = $.rc_cp34_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp35_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp35_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp35_z;
  }


  if ($.rc_gosub_cpcounter == 34) {
    $.rc_gosub_cp_x = $.rc_cp35_x;
    $.rc_gosub_cp_y = $.rc_cp35_y;
    $.rc_gosub_cp_z = $.rc_cp35_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp36_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp36_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp36_z;
  }


  if ($.rc_gosub_cpcounter == 35) {
    $.rc_gosub_cp_x = $.rc_cp36_x;
    $.rc_gosub_cp_y = $.rc_cp36_y;
    $.rc_gosub_cp_z = $.rc_cp36_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp37_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp37_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp37_z;
  }


  if ($.rc_gosub_cpcounter == 36) {
    $.rc_gosub_cp_x = $.rc_cp37_x;
    $.rc_gosub_cp_y = $.rc_cp37_y;
    $.rc_gosub_cp_z = $.rc_cp37_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp38_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp38_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp38_z;
  }


  if ($.rc_gosub_cpcounter == 37) {
    $.rc_gosub_cp_x = $.rc_cp38_x;
    $.rc_gosub_cp_y = $.rc_cp38_y;
    $.rc_gosub_cp_z = $.rc_cp38_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp39_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp39_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp39_z;
  }


  if ($.rc_gosub_cpcounter == 38) {
    $.rc_gosub_cp_x = $.rc_cp39_x;
    $.rc_gosub_cp_y = $.rc_cp39_y;
    $.rc_gosub_cp_z = $.rc_cp39_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp40_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp40_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp40_z;
  }


  if ($.rc_gosub_cpcounter == 39) {
    $.rc_gosub_cp_x = $.rc_cp40_x;
    $.rc_gosub_cp_y = $.rc_cp40_y;
    $.rc_gosub_cp_z = $.rc_cp40_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp41_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp41_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp41_z;
  }


  if ($.rc_gosub_cpcounter == 40) {
    $.rc_gosub_cp_x = $.rc_cp41_x;
    $.rc_gosub_cp_y = $.rc_cp41_y;
    $.rc_gosub_cp_z = $.rc_cp41_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp42_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp42_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp42_z;
  }


  if ($.rc_gosub_cpcounter == 41) {
    $.rc_gosub_cp_x = $.rc_cp42_x;
    $.rc_gosub_cp_y = $.rc_cp42_y;
    $.rc_gosub_cp_z = $.rc_cp42_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp43_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp43_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp43_z;
  }


  if ($.rc_gosub_cpcounter == 42) {
    $.rc_gosub_cp_x = $.rc_cp43_x;
    $.rc_gosub_cp_y = $.rc_cp43_y;
    $.rc_gosub_cp_z = $.rc_cp43_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp44_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp44_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp44_z;
  }


  if ($.rc_gosub_cpcounter == 43) {
    $.rc_gosub_cp_x = $.rc_cp44_x;
    $.rc_gosub_cp_y = $.rc_cp44_y;
    $.rc_gosub_cp_z = $.rc_cp44_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp45_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp45_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp45_z;
  }


  if ($.rc_gosub_cpcounter == 44) {
    $.rc_gosub_cp_x = $.rc_cp45_x;
    $.rc_gosub_cp_y = $.rc_cp45_y;
    $.rc_gosub_cp_z = $.rc_cp45_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp46_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp46_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp46_z;
  }


  if ($.rc_gosub_cpcounter == 45) {
    $.rc_gosub_cp_x = $.rc_cp46_x;
    $.rc_gosub_cp_y = $.rc_cp46_y;
    $.rc_gosub_cp_z = $.rc_cp46_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp47_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp47_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp47_z;
  }


  if ($.rc_gosub_cpcounter == 46) {
    $.rc_gosub_cp_x = $.rc_cp47_x;
    $.rc_gosub_cp_y = $.rc_cp47_y;
    $.rc_gosub_cp_z = $.rc_cp47_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp48_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp48_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp48_z;
  }


  if ($.rc_gosub_cpcounter == 47) {
    $.rc_gosub_cp_x = $.rc_cp48_x;
    $.rc_gosub_cp_y = $.rc_cp48_y;
    $.rc_gosub_cp_z = $.rc_cp48_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp49_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp49_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp49_z;
  }


  if ($.rc_gosub_cpcounter == 48) {
    $.rc_gosub_cp_x = $.rc_cp49_x;
    $.rc_gosub_cp_y = $.rc_cp49_y;
    $.rc_gosub_cp_z = $.rc_cp49_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp50_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp50_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp50_z;
  }


  if ($.rc_gosub_cpcounter == 49) {
    $.rc_gosub_cp_x = $.rc_cp50_x;
    $.rc_gosub_cp_y = $.rc_cp50_y;
    $.rc_gosub_cp_z = $.rc_cp50_z;
    $.rc_gosub_cp_2nd_x = $.rc_cp50_x;
    $.rc_gosub_cp_2nd_y = $.rc_cp50_y;
    $.rc_gosub_cp_2nd_z = $.rc_cp50_z;
  }

  //	IF rc_gosub_cpcounter = 49
  //		rc_gosub_cp_x = rc_cp50_x
  //		rc_gosub_cp_y = rc_cp50_y
  //		rc_gosub_cp_z = rc_cp50_z
  //		rc_gosub_cp_2nd_x = rc_cp50_x
  //		rc_gosub_cp_2nd_y = rc_cp50_y
  //		rc_gosub_cp_2nd_z = rc_cp50_z
  //	ENDIF


  ///////////////////////////////////////////////
}

///////////////////////////////////////////////


///////////////////////////////////////////////

async function rc_race_car_stuck_checks() {
  ///////////////////////////////////////////////


  $.rc_car_health = $.rc_gosub_race_car.getHealth();
  if ($.rc_car_health < 500) {
    $.rc_gosub_race_car.setHealth(1000);
  }


  if (!(Car.IsDead($.rc_playercar))) {
    if ($.rc_player_cpcounter == $.rc_gosub_cpcounter) {
      const _res456 = $.rc_gosub_race_car.getCoordinates();
$.rc_car_x = _res456.x;
$.rc_car_y = _res456.y;
$.rc_car_z = _res456.z;
      $.rc_difference_x_float_d = $.rc_car_x - $.rc_player1_cp_x;
      $.rc_difference_y_float_d = $.rc_car_y - $.rc_player1_cp_y;
      $.rc_difference_x_float_d = $.rc_difference_x_float_d * $.rc_difference_x_float_d;
      $.rc_difference_y_float_d = $.rc_difference_y_float_d * $.rc_difference_y_float_d;
      $.rc_sum_difference_d_xy = $.rc_difference_x_float_d + $.rc_difference_y_float_d;
      $.rc_car_distance_from_cp = Math.Sqrt($.rc_sum_difference_d_xy);
      const _res457 = $.rc_playercar.getCoordinates();
$.rc_car_x = _res457.x;
$.rc_car_y = _res457.y;
$.rc_car_z = _res457.z;
      $.rc_difference_x_float_d = $.rc_car_x - $.rc_player1_cp_x;
      $.rc_difference_y_float_d = $.rc_car_y - $.rc_player1_cp_y;
      $.rc_difference_x_float_d = $.rc_difference_x_float_d * $.rc_difference_x_float_d;
      $.rc_difference_y_float_d = $.rc_difference_y_float_d * $.rc_difference_y_float_d;
      $.rc_sum_difference_d_xy = $.rc_difference_x_float_d + $.rc_difference_y_float_d;
      $.rc_player1_distance_from_cp = Math.Sqrt($.rc_sum_difference_d_xy);
      if ($.rc_player1_distance_from_cp > $.rc_car_distance_from_cp) {
        ++$.rc_position;
      }
    }
    else {
      if ($.rc_player_cpcounter < $.rc_gosub_cpcounter) {
        ++$.rc_position;
      }
    }
  }


  //IF NOT IS_CAR_DEAD rc_gosub_race_car
  //	IF NOT LOCATE_CAR_3D rc_gosub_race_car rc_car_stuck_x rc_car_stuck_y rc_car_stuck_z 3.0 3.0 2.0 0
  //		GET_CAR_COORDINATES rc_gosub_race_car rc_car_stuck_x rc_car_stuck_y rc_car_stuck_z
  //		rc_timer_started = rc_game_time
  //	ENDIF
  //ENDIF
  //
  //IF NOT IS_CAR_DEAD rc_gosub_race_car
  //	IF LOCATE_CAR_3D rc_gosub_race_car rc_car_stuck_x rc_car_stuck_y rc_car_stuck_z 3.0 3.0 2.0 0
  //		rc_stuck_timer = rc_game_time - rc_timer_started
  //		IF rc_stuck_timer > 4000
  //			IF NOT IS_CAR_ON_SCREEN rc_gosub_race_car
  //				GET_CAR_COORDINATES rc_gosub_race_car rc_car_x rc_car_y rc_car_z
  //				GET_CLOSEST_CAR_NODE rc_car_x rc_car_y rc_car_z rc_car_x rc_car_y rc_car_z
  //				IF NOT IS_POINT_OBSCURED_BY_A_MISSION_ENTITY rc_car_x rc_car_y rc_car_z 4.0 4.0 3.0
  //					IF NOT IS_POINT_ON_SCREEN rc_car_x rc_car_y rc_car_z 4.0
  //						SET_CAR_COORDINATES rc_gosub_race_car rc_car_x rc_car_y rc_car_z
  //						TURN_CAR_TO_FACE_COORD rc_gosub_race_car rc_car3_cp_x rc_car3_cp_y
  //						rc_timer_reset_flag = 0
  //					ENDIF
  //				ENDIF
  //			ENDIF
  //		ENDIF
  //	ENDIF
  //ENDIF

  ///////////////////////////////////////////////

  return;
  ///////////////////////////////////////////////




}

export async function rcrace1() {
  // MissionBoundary
  // *****************************************************************************************
  // *********************************** Road Races ******************************************
  // *****************************************************************************************
  // *** 														 ***
  // *****************************************************************************************

  // Mission start stuff






  // SCRIPT_NAME RCRACE1


  await mission_rc_races_start();  // SCM GOSUB mission_rc_races_start


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_rc_races_failed();  // SCM GOSUB mission_rc_races_failed
  }


  await mission_rc_races_cleanup();  // SCM GOSUB mission_rc_races_cleanup


  // MissionBoundary

  // ******************************** Variables for mission **********************************


  // VAR_FLOAT rc_car_x rc_car_y rc_car_z rc_car_headings
  // VAR_FLOAT rc_difference_x_float_d rc_difference_y_float_d rc_sum_difference_d_xy
  // VAR_FLOAT rc_car1_locate_size rc_car2_locate_size rc_car3_locate_size
  // VAR_FLOAT rc_car_distance_from_cp rc_player1_distance_from_cp
  // VAR_FLOAT rc_road1_x rc_road1_y rc_road1_z rc_road2_x rc_road2_y rc_road2_z


  // VAR_FLOAT rc_car1_stuck_x rc_car1_stuck_y rc_car1_stuck_z
  // VAR_FLOAT rc_car2_stuck_x rc_car2_stuck_y rc_car2_stuck_z
  // VAR_FLOAT rc_car3_stuck_x rc_car3_stuck_y rc_car3_stuck_z
  // VAR_FLOAT rc_car_stuck_x rc_car_stuck_y rc_car_stuck_z


  // VAR_FLOAT rc_player1_cp_x rc_player1_cp_y rc_player1_cp_z
  // VAR_FLOAT rc_blip_2nd_x rc_blip_2nd_y rc_blip_2nd_z
  // VAR_FLOAT rc_car1_cp_x rc_car1_cp_y rc_car1_cp_z
  // VAR_FLOAT rc_car2_cp_x rc_car2_cp_y rc_car2_cp_z
  // VAR_FLOAT rc_car3_cp_x rc_car3_cp_y rc_car3_cp_z


  // VAR_FLOAT rc_gosub_cp_x rc_gosub_cp_y rc_gosub_cp_z rc_gosub_cp_2nd_x rc_gosub_cp_2nd_y rc_gosub_cp_2nd_z


  // VAR_INT rc_blip_chase rc_second_blip rc_blip_car1 rc_blip_car2 rc_blip_car3 vanforrcrace
  // VAR_INT rc_race_car1 rc_race_car2 rc_race_car3 rc_car_health rc_gosub_race_car rc_playercar
  // VAR_INT rc_driver_car1 rc_driver_car2 rc_driver_car3
  // VAR_INT rc_player_cpcounter rc_car1_cpcounter rc_car2_cpcounter rc_car3_cpcounter rc_gosub_cpcounter
  // VAR_INT rc_position rc_race_timer rc_car1_stuck_timer rc_car2_stuck_timer rc_car3_stuck_timer
  // VAR_INT rc_race_timer_start rc_timer_started rc_stuck_timer
  // VAR_INT rc_total_checkpoints rc_total_checkpoints_minus1
  // VAR_INT rc_game_time
  // VAR_INT rc_timer_reset_flag previous_wanted_levelrcrace playerpassedrcrace



  // VAR_FLOAT rc_cp0_x rc_cp0_y rc_cp0_z rc_cp1_x rc_cp1_y rc_cp1_z rc_cp2_x rc_cp2_y rc_cp2_z rc_cp3_x rc_cp3_y rc_cp3_z rc_cp4_x rc_cp4_y rc_cp4_z
  // VAR_FLOAT rc_cp5_x rc_cp5_y rc_cp5_z rc_cp6_x rc_cp6_y rc_cp6_z rc_cp7_x rc_cp7_y rc_cp7_z rc_cp8_x rc_cp8_y rc_cp8_z rc_cp9_x rc_cp9_y rc_cp9_z
  // VAR_FLOAT rc_cp10_x rc_cp10_y rc_cp10_z rc_cp11_x rc_cp11_y rc_cp11_z rc_cp12_x rc_cp12_y rc_cp12_z rc_cp13_x rc_cp13_y rc_cp13_z
  // VAR_FLOAT rc_cp14_x rc_cp14_y rc_cp14_z rc_cp15_x rc_cp15_y rc_cp15_z rc_cp16_x rc_cp16_y rc_cp16_z rc_cp17_x rc_cp17_y rc_cp17_z
  // VAR_FLOAT rc_cp18_x rc_cp18_y rc_cp18_z rc_cp19_x rc_cp19_y rc_cp19_z rc_cp20_x rc_cp20_y rc_cp20_z rc_cp21_x rc_cp21_y rc_cp21_z
  // VAR_FLOAT rc_cp22_x rc_cp22_y rc_cp22_z rc_cp23_x rc_cp23_y rc_cp23_z rc_cp24_x rc_cp24_y rc_cp24_z rc_cp25_x rc_cp25_y rc_cp25_z
  // VAR_FLOAT rc_cp26_x rc_cp26_y rc_cp26_z rc_cp27_x rc_cp27_y rc_cp27_z rc_cp28_x rc_cp28_y rc_cp28_z rc_cp29_x rc_cp29_y rc_cp29_z
  // VAR_FLOAT rc_cp30_x rc_cp30_y rc_cp30_z rc_cp31_x rc_cp31_y rc_cp31_z rc_cp32_x rc_cp32_y rc_cp32_z rc_cp33_x rc_cp33_y rc_cp33_z
  // VAR_FLOAT rc_cp34_x rc_cp34_y rc_cp34_z rc_cp35_x rc_cp35_y rc_cp35_z rc_cp36_x rc_cp36_y rc_cp36_z rc_cp37_x rc_cp37_y rc_cp37_z
  // VAR_FLOAT rc_cp38_x rc_cp38_y rc_cp38_z rc_cp39_x rc_cp39_y rc_cp39_z rc_cp40_x rc_cp40_y rc_cp40_z rc_cp41_x rc_cp41_y rc_cp41_z
  // VAR_FLOAT rc_cp42_x rc_cp42_y rc_cp42_z rc_cp43_x rc_cp43_y rc_cp43_z rc_cp44_x rc_cp44_y rc_cp44_z rc_cp45_x rc_cp45_y rc_cp45_z
  // VAR_FLOAT rc_cp46_x rc_cp46_y rc_cp46_z rc_cp47_x rc_cp47_y rc_cp47_z rc_cp48_x rc_cp48_y rc_cp48_z rc_cp49_x rc_cp49_y rc_cp49_z
  // VAR_FLOAT rc_cp50_x rc_cp50_y rc_cp50_z



  // VAR_INT race_timer_seconds_rccar1
  // VAR_INT race_timer_seconds2_rccar1
  // VAR_INT race_timer_mins_rccar1


  // VAR_INT laps1 laps2 lapstodisplay_rc1


  // ************************************ Mission Start **************************************


}
