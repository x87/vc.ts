// Generated from main/rcplne1.sc

import { $ } from "../vars.mts";

async function mission_start_rcplane() {


  ONMISSION = 1;
  $.flag_player_on_rc_mission = 1;



  if ($.playerpassedrcplane1 == 0) {
    Stat.RegisterMissionGiven();
  }


  await asyncWait(0);


  Text.LoadMissionText("RCPLNE1");



  Streaming.RequestModel(rcbaron);
  while (!(Streaming.HasModelLoaded(rcbaron))) {
    await asyncWait(0);
  }



  $.rcp_total_checkpoints = 28;


  $.rcp_cp0_x = 313.0;
  $.rcp_cp0_y = 1238.332;
  $.rcp_cp0_z = 27.546;


  $.rcp_cp1_x = 317.926;
  $.rcp_cp1_y = 1219.877;
  $.rcp_cp1_z = 26.554;


  $.rcp_cp2_x = 321.350;
  $.rcp_cp2_y = 1102.111;
  $.rcp_cp2_z = 31.448;


  $.rcp_cp3_x = 317.778;
  $.rcp_cp3_y = 949.340;
  $.rcp_cp3_z = 29.25;


  $.rcp_cp4_x = 289.354;
  $.rcp_cp4_y = 789.471;
  $.rcp_cp4_z = 27.426;


  $.rcp_cp5_x = 201.599;
  $.rcp_cp5_y = 689.725;
  $.rcp_cp5_z = 27.896;


  $.rcp_cp6_x = 378.602;
  $.rcp_cp6_y = 564.227;
  $.rcp_cp6_z = 20.846;


  $.rcp_cp7_x = 346.553;
  $.rcp_cp7_y = 445.865;
  $.rcp_cp7_z = 19.168;


  $.rcp_cp8_x = 331.891;
  $.rcp_cp8_y = 344.459;
  $.rcp_cp8_z = 18.385;


  $.rcp_cp9_x = 337.064;
  $.rcp_cp9_y = 243.410;
  $.rcp_cp9_z = 24.428;


  $.rcp_cp10_x = 407.542;
  $.rcp_cp10_y = 102.447;
  $.rcp_cp10_z = 24.134;


  $.rcp_cp11_x = 332.597;
  $.rcp_cp11_y = -12.219;
  $.rcp_cp11_z = 25.134;


  $.rcp_cp12_x = 284.866;
  $.rcp_cp12_y = -144.529;
  $.rcp_cp12_z = 22.046;


  $.rcp_cp13_x = 225.013;
  $.rcp_cp13_y = -271.518;
  $.rcp_cp13_z = 19.929;


  $.rcp_cp14_x = 194.309;
  $.rcp_cp14_y = -365.009;
  $.rcp_cp14_z = 19.146;
  /////////////////////////

  $.rcp_cp15_x = 179.89;
  $.rcp_cp15_y = -500.032;
  $.rcp_cp15_z = 17.304;


  $.rcp_cp16_x = 171.669;
  $.rcp_cp16_y = -638.857;
  $.rcp_cp16_z = 17.328;


  $.rcp_cp17_x = 149.798;
  $.rcp_cp17_y = -738.283;
  $.rcp_cp17_z = 16.001;


  $.rcp_cp18_x = 95.276;
  $.rcp_cp18_y = -838.345;
  $.rcp_cp18_z = 15.527;


  $.rcp_cp19_x = -22.699;
  $.rcp_cp19_y = -869.548;
  $.rcp_cp19_z = 16.142;


  $.rcp_cp20_x = -107.153;
  $.rcp_cp20_y = -895.34;
  $.rcp_cp20_z = 18.43;


  $.rcp_cp21_x = -190.477;
  $.rcp_cp21_y = -944.935;
  $.rcp_cp21_z = 20.094;


  $.rcp_cp22_x = -186.305;
  $.rcp_cp22_y = -1075.039;
  $.rcp_cp22_z = 32.099;


  $.rcp_cp23_x = -193.016;
  $.rcp_cp23_y = -1232.925;
  $.rcp_cp23_z = 16.655;


  $.rcp_cp24_x = -164.456;
  $.rcp_cp24_y = -1402.917;
  $.rcp_cp24_z = 16.294;


  $.rcp_cp25_x = -115.326;
  $.rcp_cp25_y = -1512.663;
  $.rcp_cp25_z = 15.455;


  $.rcp_cp26_x = -11.818;
  $.rcp_cp26_y = -1576.647;
  $.rcp_cp26_z = 15.960;


  $.rcp_cp27_x = 110.560;
  $.rcp_cp27_y = -1588.121;
  $.rcp_cp27_z = 16.516;


  $.rcp_cp28_x = 174.464;
  $.rcp_cp28_y = -1527.732;
  $.rcp_cp28_z = 20.699;


  $.rcp_cp29_x = 259.539;
  $.rcp_cp29_y = -1234.819;
  $.rcp_cp29_z = 32.351;





  $.rcp_plane1_stuck_x = 316.0;
  $.rcp_plane1_stuck_y = 1238.332;
  $.rcp_plane1_stuck_z = 26.554;


  $.rcp_plane2_stuck_x = 319.0;
  $.rcp_plane2_stuck_y = 1238.332;
  $.rcp_plane2_stuck_z = 26.554;


  $.rcp_plane3_stuck_x = 322.0;
  $.rcp_plane3_stuck_y = 1238.332;
  $.rcp_plane3_stuck_z = 26.554;


  $.rcp_plane_headings = 182.290;



  $.rcp_gosub_cpcounter = 0;
  $.rcp_player_cpcounter = 0;
  $.rcp_plane1_cpcounter = 0;
  $.rcp_plane2_cpcounter = 0;
  $.rcp_plane3_cpcounter = 0;
  $.rcp_plane1_locate_size = 4.0;
  $.rcp_plane2_locate_size = 4.0;
  $.rcp_plane3_locate_size = 4.0;




  //initial cutscene

  Game.SetPoliceIgnorePlayer($.player1, true /* ON */);


  $.vanfor_rcplane_race = $.player1.storeCarIsIn();


  if (!(Car.IsDead($.vanfor_rcplane_race))) {
    $.vanfor_rcplane_race.lockDoors(2 /* CARLOCK_LOCKED */);
  }


  $.rcplane_wanted_level = $.player1.storeWantedLevel();
  $.player1.clearWantedLevel();


  World.ClearArea($.rcp_cp0_x, $.rcp_cp0_y, $.rcp_cp0_z, 80.0, true /* TRUE */);


  Hud.SwitchWidescreen(true /* ON */);

  //create opponents

  $.rcp_race_plane1 = Car.Create(rcbaron, $.rcp_plane1_stuck_x, $.rcp_plane1_stuck_y, $.rcp_plane1_stuck_z);
  $.rcp_race_plane1.setStrong(true /* TRUE */);
  $.rcp_race_plane1.setUpsidedownNotDamaged(true /* TRUE */);
  $.rcp_race_plane1.setHeading($.rcp_plane_headings);
  $.rcp_race_plane1.setOnlyDamagedByPlayer(true /* TRUE */);


  $.rcp_race_plane2 = Car.Create(rcbaron, $.rcp_plane2_stuck_x, $.rcp_plane2_stuck_y, $.rcp_plane2_stuck_z);
  $.rcp_race_plane2.setStrong(true /* TRUE */);
  $.rcp_race_plane2.setUpsidedownNotDamaged(true /* TRUE */);
  $.rcp_race_plane2.setHeading($.rcp_plane_headings);
  $.rcp_race_plane2.setOnlyDamagedByPlayer(true /* TRUE */);


  $.rcp_race_plane3 = Car.Create(rcbaron, $.rcp_plane3_stuck_x, $.rcp_plane3_stuck_y, $.rcp_plane3_stuck_z);
  $.rcp_race_plane3.setStrong(true /* TRUE */);
  $.rcp_race_plane3.setUpsidedownNotDamaged(true /* TRUE */);
  $.rcp_race_plane3.setHeading($.rcp_plane_headings);
  $.rcp_race_plane3.setOnlyDamagedByPlayer(true /* TRUE */);


  Rc.GiveModelToPlayer($.player1, $.rcp_cp0_x, $.rcp_cp0_y, $.rcp_cp0_z, 182.290, rcbaron);
  $.rcp_playerplane = Rc.GetCar($.player1);
  Rc.SetEnableDetonateOnContact(false /* FALSE */);



  Camera.SetFixedPosition(323.617279, 1239.220337, 26.800529, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(322.70871, 1238.806763, 26.85948, 2 /* JUMP_CUT */);



  Camera.DoFade(3000, 1 /* FADE_IN */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }



  TIMERA = 0;


  while (TIMERA < 5000) {
    await asyncWait(0);
    Text.PrintNow("RCPL1_4", 5000, 2); //compete in race
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → endrcplanelable (not lowered; manual jump required)
      throw new Error("unresolved GOTO endrcplanelable"); // fallback: would break linear control flow
    }


  }



  TIMERA = 0;


  Streaming.LoadScene(289.354, 789.471, 27.426);
  Camera.SetFixedPosition(307.078, 842.687, 33.651, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(289.354, 789.471, 27.426, 2 /* JUMP_CUT */);


  while (TIMERA < 5000) {
    await asyncWait(0);
    Text.PrintNow("RCPL1_5", 5000, 2); //go through the centre checkpoint
    Fx.DrawWeaponshopCorona(289.354, 789.471, 27.426, 7.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → endrcplanelable (not lowered; manual jump required)
      throw new Error("unresolved GOTO endrcplanelable"); // fallback: would break linear control flow
    }


  }



  TIMERA = 0;


  while (TIMERA < 5000) {
    await asyncWait(0);
    Camera.SetFixedPosition(311.378937, 1236.671997, 26.99365, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(312.231079, 1237.192505, 26.939667, 2 /* JUMP_CUT */);
    Text.PrintNow("RCPL1_6", 5000, 2); // ~g~If you wish to quit this mission press the ~o~| ~g~button to detonate your RC Plane.
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → endrcplanelable (not lowered; manual jump required)
      throw new Error("unresolved GOTO endrcplanelable"); // fallback: would break linear control flow
    }


  }
}




async function endrcplanelable() {


  if (!(Car.IsDead($.rcp_playerplane))) {
    Text.ClearSmallPrints();
    Camera.PointAtCar($.rcp_playerplane, 18 /* CAM_ON_A_STRING */, 2 /* JUMP_CUT */);
    await asyncWait(0);
    Camera.SetZoom(0);
    await asyncWait(300);
    Hud.SwitchWidescreen(false /* OFF */);
  }
}





async function rcp_race_start() {


  $.rcp_total_checkpoints_minus1 = $.rcp_total_checkpoints - 1;


  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
  Game.SetAllCarsCanBeDamaged(false /* FALSE */);
  Text.PrintBig("RACE2", 1100, 4);
  Sound.AddOneOffSound(0.0, 0.0, 0.0, 97 /* SOUND_RACE_START_3 */);
  await asyncWait(1000);
  Text.PrintBig("RACE3", 1100, 4);
  Sound.AddOneOffSound(0.0, 0.0, 0.0, 98 /* SOUND_RACE_START_2 */);
  await asyncWait(1000);
  Text.PrintBig("RACE4", 1100, 4);
  Sound.AddOneOffSound(0.0, 0.0, 0.0, 99 /* SOUND_RACE_START_1 */);
  await asyncWait(1000);
  Text.PrintBig("RACE5", 800, 4); //"GO!"
  Sound.AddOneOffSound(0.0, 0.0, 0.0, 100 /* SOUND_RACE_START_GO */);
  $.player1.setControl(true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* FALSE */);
  Game.SetAllCarsCanBeDamaged(true /* TRUE */);


  $.controlmode = Pad.GetControllerMode();
  if ($.controlmode == 3) {
    Text.PrintHelp("PLANE_4");
  }
  else {
    Text.PrintHelp("PLANE_H");
  }


  if (Car.IsDead($.rcp_race_plane1)) {
    // SCM GOTO → mission_rcplane_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_rcplane_failed"); // fallback: would break linear control flow
  }


  if (Car.IsDead($.rcp_race_plane2)) {
    // SCM GOTO → mission_rcplane_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_rcplane_failed"); // fallback: would break linear control flow
  }


  if (Car.IsDead($.rcp_race_plane3)) {
    // SCM GOTO → mission_rcplane_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_rcplane_failed"); // fallback: would break linear control flow
  }


  if (!(Car.IsDead($.rcp_race_plane1))) {
    $.rcp_blip_plane1 = Blip.AddForCarOld($.rcp_race_plane1, 0 /* RED */, 1 /* MARKER_ONLY */);
  }


  if (!(Car.IsDead($.rcp_race_plane2))) {
    $.rcp_blip_plane2 = Blip.AddForCarOld($.rcp_race_plane2, 0 /* RED */, 1 /* MARKER_ONLY */);
  }


  if (!(Car.IsDead($.rcp_race_plane3))) {
    $.rcp_blip_plane3 = Blip.AddForCarOld($.rcp_race_plane3, 0 /* RED */, 1 /* MARKER_ONLY */);
  }


  await rcp_get_next_checkpoint();  // SCM GOSUB rcp_get_next_checkpoint
  $.rcp_player1_cp_x = $.rcp_gosub_cp_x;
  $.rcp_player1_cp_y = $.rcp_gosub_cp_y;
  $.rcp_player1_cp_z = $.rcp_gosub_cp_z;
  $.rcp_blip_2nd_x = $.rcp_gosub_cp_2nd_x;
  $.rcp_blip_2nd_y = $.rcp_gosub_cp_2nd_y;
  $.rcp_blip_2nd_z = $.rcp_gosub_cp_2nd_z;


  $.rcp_plane1_cp_x = $.rcp_gosub_cp_x;
  $.rcp_plane1_cp_y = $.rcp_gosub_cp_y;
  $.rcp_plane1_cp_z = $.rcp_gosub_cp_z;


  $.rcp_plane2_cp_x = $.rcp_gosub_cp_x;
  $.rcp_plane2_cp_y = $.rcp_gosub_cp_y;
  $.rcp_plane2_cp_z = $.rcp_gosub_cp_z;


  $.rcp_plane3_cp_x = $.rcp_gosub_cp_x;
  $.rcp_plane3_cp_y = $.rcp_gosub_cp_y;
  $.rcp_plane3_cp_z = $.rcp_gosub_cp_z;


  $.rcp_blip_chase = Blip.AddForCoord($.rcp_player1_cp_x, $.rcp_player1_cp_y, $.rcp_player1_cp_z);
  $.rcp_second_blip = Blip.AddForCoordOld($.rcp_blip_2nd_x, $.rcp_blip_2nd_y, $.rcp_blip_2nd_z, 5 /* PURPLE */, 2 /* BLIP_ONLY */);
  $.rcp_second_blip.changeScale(2);
  $.rcp_second_blip.dim(true /* TRUE */);



  $.rcp_race_plane1.gotoCoords($.rcp_plane1_cp_x, $.rcp_plane1_cp_y, $.rcp_plane1_cp_z, 30);


  $.rcp_race_plane2.gotoCoords($.rcp_plane2_cp_x, $.rcp_plane2_cp_y, $.rcp_plane2_cp_z, 25);


  $.rcp_race_plane3.gotoCoords($.rcp_plane3_cp_x, $.rcp_plane3_cp_y, $.rcp_plane3_cp_z, 35);


  //GET_GAME_TIMER rcp_race_timer_start

  $.rcp_race_timer = 0;
  Hud.DisplayTimerWithString($.$id.rcp_race_timer, TIMER_UP, "RCH1_5");


  if (Car.IsDead($.rcp_playerplane)) {
    // SCM GOTO → mission_rcplane_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_rcplane_failed"); // fallback: would break linear control flow
  }



  while ($.rcp_player_cpcounter < $.rcp_total_checkpoints) {
    await asyncWait(0);
    World.ClearArea(-447.80, 1442.95, 10.0, 120.0, false /* FALSE */);

    //	GET_GAME_TIMER rcp_game_time
    //	rcp_race_timer = rcp_game_time - rcp_race_timer_start
    //	rcp_race_timer = rcp_race_timer / 1000

    $.rcp_position = 0;


    if (!(Car.IsDead($.rcp_playerplane))) {
      if ($.rcp_playerplane.locate3D($.rcp_player1_cp_x, $.rcp_player1_cp_y, $.rcp_player1_cp_z, 7.5, 7.5, 7.5, false)) {
        ++$.rcp_player_cpcounter;
        $.rcp_blip_chase.remove();
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        $.rcp_second_blip.remove();
        $.rcp_gosub_cpcounter = $.rcp_player_cpcounter;
        await rcp_get_next_checkpoint();  // SCM GOSUB rcp_get_next_checkpoint
        $.rcp_player1_cp_x = $.rcp_gosub_cp_x;
        $.rcp_player1_cp_y = $.rcp_gosub_cp_y;
        $.rcp_player1_cp_z = $.rcp_gosub_cp_z;
        $.rcp_blip_2nd_x = $.rcp_gosub_cp_2nd_x;
        $.rcp_blip_2nd_y = $.rcp_gosub_cp_2nd_y;
        $.rcp_blip_2nd_z = $.rcp_gosub_cp_2nd_z;
        if ($.rcp_player_cpcounter == $.rcp_total_checkpoints) {
          // SCM GOTO → mission_rcplane_passed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_rcplane_passed"); // fallback: would break linear control flow
        }
        $.rcp_blip_chase = Blip.AddForCoord($.rcp_player1_cp_x, $.rcp_player1_cp_y, $.rcp_player1_cp_z);
        if (!($.rcp_player_cpcounter == $.rcp_total_checkpoints_minus1)) {
          $.rcp_second_blip = Blip.AddForCoordOld($.rcp_blip_2nd_x, $.rcp_blip_2nd_y, $.rcp_blip_2nd_z, 5 /* PURPLE */, 2 /* BLIP_ONLY */);
          $.rcp_second_blip.dim(true /* ON */);
          $.rcp_second_blip.changeScale(2);
        }
      }
    }
    if (!(Car.IsDead($.rcp_race_plane1))) {
      $.rcp_gosub_race_plane = $.rcp_race_plane1;
      $.rcp_gosub_cpcounter = $.rcp_plane1_cpcounter;
      $.rcp_plane_stuck_x = $.rcp_plane1_stuck_x;
      $.rcp_plane_stuck_y = $.rcp_plane1_stuck_y;
      $.rcp_plane_stuck_z = $.rcp_plane1_stuck_z;
      $.rcp_timer_started = $.rcp_plane1_stuck_timer;
      await rcp_race_plane_stuck_checks();  // SCM GOSUB rcp_race_plane_stuck_checks
      $.rcp_plane1_stuck_x = $.rcp_plane_stuck_x;
      $.rcp_plane1_stuck_y = $.rcp_plane_stuck_y;
      $.rcp_plane1_stuck_z = $.rcp_plane_stuck_z;
      $.rcp_plane1_stuck_timer = $.rcp_timer_started;
      if (!(Car.IsDead($.rcp_race_plane1))) {
        if ($.rcp_race_plane1.locate3D($.rcp_plane1_cp_x, $.rcp_plane1_cp_y, $.rcp_plane1_cp_z, $.rcp_plane1_locate_size, $.rcp_plane1_locate_size, $.rcp_plane1_locate_size, false)) {
          ++$.rcp_plane1_cpcounter;
          $.rcp_gosub_cpcounter = $.rcp_plane1_cpcounter;
          await rcp_get_next_checkpoint();  // SCM GOSUB rcp_get_next_checkpoint
          $.rcp_plane1_cp_x = $.rcp_gosub_cp_x;
          $.rcp_plane1_cp_y = $.rcp_gosub_cp_y;
          $.rcp_plane1_cp_z = $.rcp_gosub_cp_z;

          //				IF rcp_plane1_cpcounter = 17
          //					rcp_plane1_locate_size = 6.0
          //				ENDIF

          if ($.rcp_plane1_cpcounter == $.rcp_total_checkpoints) {
            Text.PrintNow("RACEFA", 5000, 1); //"~r~You failed to win the race!"
            // SCM GOTO → mission_rcplane_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_rcplane_failed"); // fallback: would break linear control flow
          }
          $.rcp_race_plane1.gotoCoords($.rcp_plane1_cp_x, $.rcp_plane1_cp_y, $.rcp_plane1_cp_z, 36);


        }
      }
    }


    if (!(Car.IsDead($.rcp_race_plane2))) {
      $.rcp_gosub_race_plane = $.rcp_race_plane2;
      $.rcp_gosub_cpcounter = $.rcp_plane2_cpcounter;
      $.rcp_plane_stuck_x = $.rcp_plane2_stuck_x;
      $.rcp_plane_stuck_y = $.rcp_plane2_stuck_y;
      $.rcp_plane_stuck_z = $.rcp_plane2_stuck_z;
      $.rcp_timer_started = $.rcp_plane2_stuck_timer;
      await rcp_race_plane_stuck_checks();  // SCM GOSUB rcp_race_plane_stuck_checks
      $.rcp_plane2_stuck_x = $.rcp_plane_stuck_x;
      $.rcp_plane2_stuck_y = $.rcp_plane_stuck_y;
      $.rcp_plane2_stuck_z = $.rcp_plane_stuck_z;
      $.rcp_plane2_stuck_timer = $.rcp_timer_started;
      if (!(Car.IsDead($.rcp_race_plane2))) {
        if ($.rcp_race_plane2.locate3D($.rcp_plane2_cp_x, $.rcp_plane2_cp_y, $.rcp_plane2_cp_z, $.rcp_plane2_locate_size, $.rcp_plane2_locate_size, $.rcp_plane2_locate_size, false)) {
          ++$.rcp_plane2_cpcounter;
          $.rcp_gosub_cpcounter = $.rcp_plane2_cpcounter;
          await rcp_get_next_checkpoint();  // SCM GOSUB rcp_get_next_checkpoint
          $.rcp_plane2_cp_x = $.rcp_gosub_cp_x;
          $.rcp_plane2_cp_y = $.rcp_gosub_cp_y;
          $.rcp_plane2_cp_z = $.rcp_gosub_cp_z;

          //				IF rcp_plane2_cpcounter = 17
          //					rcp_plane2_locate_size = 6.0
          //				ENDIF

          if ($.rcp_plane2_cpcounter == $.rcp_total_checkpoints) {
            Text.PrintNow("RACEFA", 5000, 1); //"~r~You failed to win the race!"
            // SCM GOTO → mission_rcplane_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_rcplane_failed"); // fallback: would break linear control flow
          }
          $.rcp_race_plane2.gotoCoords($.rcp_plane2_cp_x, $.rcp_plane2_cp_y, $.rcp_plane2_cp_z, 27);


        }
      }
    }


    if (!(Car.IsDead($.rcp_race_plane3))) {
      $.rcp_gosub_race_plane = $.rcp_race_plane3;
      $.rcp_gosub_cpcounter = $.rcp_plane3_cpcounter;
      $.rcp_plane_stuck_x = $.rcp_plane3_stuck_x;
      $.rcp_plane_stuck_y = $.rcp_plane3_stuck_y;
      $.rcp_plane_stuck_z = $.rcp_plane3_stuck_z;
      $.rcp_timer_started = $.rcp_plane3_stuck_timer;
      await rcp_race_plane_stuck_checks();  // SCM GOSUB rcp_race_plane_stuck_checks
      $.rcp_plane3_stuck_x = $.rcp_plane_stuck_x;
      $.rcp_plane3_stuck_y = $.rcp_plane_stuck_y;
      $.rcp_plane3_stuck_z = $.rcp_plane_stuck_z;
      $.rcp_plane3_stuck_timer = $.rcp_timer_started;
      if (!(Car.IsDead($.rcp_race_plane3))) {
        if ($.rcp_race_plane3.locate3D($.rcp_plane3_cp_x, $.rcp_plane3_cp_y, $.rcp_plane3_cp_z, $.rcp_plane3_locate_size, $.rcp_plane3_locate_size, $.rcp_plane3_locate_size, false)) {


          ++$.rcp_plane3_cpcounter;
          $.rcp_gosub_cpcounter = $.rcp_plane3_cpcounter;
          await rcp_get_next_checkpoint();  // SCM GOSUB rcp_get_next_checkpoint
          $.rcp_plane3_cp_x = $.rcp_gosub_cp_x;
          $.rcp_plane3_cp_y = $.rcp_gosub_cp_y;
          $.rcp_plane3_cp_z = $.rcp_gosub_cp_z;

          //				IF rcp_plane3_cpcounter = 17
          //					rcp_plane3_locate_size = 6.0
          //				ENDIF

          if ($.rcp_plane3_cpcounter == $.rcp_total_checkpoints) {
            Text.PrintNow("RACEFA", 5000, 1); //"~r~You failed to win the race!"
            // SCM GOTO → mission_rcplane_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_rcplane_failed"); // fallback: would break linear control flow
          }
          $.rcp_race_plane3.gotoCoords($.rcp_plane3_cp_x, $.rcp_plane3_cp_y, $.rcp_plane3_cp_z, 42);


        }
      }
    }
    if ($.rcp_position == 0) {
      Text.PrintNow("FIRST", 100, 1); //"1st"
    }
    if ($.rcp_position == 1) {
      Text.PrintNow("SECOND", 100, 1); //"2nd"
    }
    if ($.rcp_position == 2) {
      Text.PrintNow("THIRD", 100, 1); //"3rd"
    }
    if ($.rcp_position == 3) {
      Text.PrintNow("FOURTH", 100, 1); //"4th"
    }
    if ($.rcp_player_cpcounter == $.rcp_total_checkpoints_minus1) {
      Fx.DrawWeaponshopCorona($.rcp_player1_cp_x, $.rcp_player1_cp_y, $.rcp_player1_cp_z, 7.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 100, 0, 100);
    }
    else {
      Fx.DrawWeaponshopCorona($.rcp_player1_cp_x, $.rcp_player1_cp_y, $.rcp_player1_cp_z, 7.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205); //0 0 100
    }
    if (Car.IsDead($.rcp_playerplane)) {
      // SCM GOTO → mission_rcplane_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rcplane_failed"); // fallback: would break linear control flow
    }

    //warning out of range
    if (!(Car.IsDead($.rcp_playerplane))) {
      if (!($.rcp_playerplane.isInArea2D(833.0, 1340.0, -225.0, -1666.0, false /* FALSE */))) {
        if ($.rcp_playerplane.isInArea2D(940.212, 1340.225, -253.15, -1700.0, false /* FALSE */)) {
          Text.PrintNow("RCPL1_8", 3000, 1);
        }
      }
    }

    //out of range
    if (!(Car.IsDead($.rcp_playerplane))) {
      if (!($.rcp_playerplane.isInArea2D(940.212, 1340.225, -253.15, -1700.0, false /* FALSE */))) {
        Rc.BlowUpBuggy();
        Text.PrintNow("RCPL1_9", 5000, 1);
        // SCM GOTO → mission_rcplane_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rcplane_failed"); // fallback: would break linear control flow
      }
    }




  }


  // SCM GOTO → mission_rcplane_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_rcplane_passed"); // fallback: would break linear control flow
}



///////////////////////////////////////////////

async function rcp_get_next_checkpoint() {
  ///////////////////////////////////////////////


  if ($.rcp_gosub_cpcounter == 0) {
    $.rcp_gosub_cp_x = $.rcp_cp1_x;
    $.rcp_gosub_cp_y = $.rcp_cp1_y;
    $.rcp_gosub_cp_z = $.rcp_cp1_z;
    $.rcp_gosub_cp_2nd_x = $.rcp_cp2_x;
    $.rcp_gosub_cp_2nd_y = $.rcp_cp2_y;
    $.rcp_gosub_cp_2nd_z = $.rcp_cp2_z;
  }


  if ($.rcp_gosub_cpcounter == 1) {
    $.rcp_gosub_cp_x = $.rcp_cp2_x;
    $.rcp_gosub_cp_y = $.rcp_cp2_y;
    $.rcp_gosub_cp_z = $.rcp_cp2_z;
    $.rcp_gosub_cp_2nd_x = $.rcp_cp3_x;
    $.rcp_gosub_cp_2nd_y = $.rcp_cp3_y;
    $.rcp_gosub_cp_2nd_z = $.rcp_cp3_z;
  }


  if ($.rcp_gosub_cpcounter == 2) {
    $.rcp_gosub_cp_x = $.rcp_cp3_x;
    $.rcp_gosub_cp_y = $.rcp_cp3_y;
    $.rcp_gosub_cp_z = $.rcp_cp3_z;
    $.rcp_gosub_cp_2nd_x = $.rcp_cp4_x;
    $.rcp_gosub_cp_2nd_y = $.rcp_cp4_y;
    $.rcp_gosub_cp_2nd_z = $.rcp_cp4_z;
  }


  if ($.rcp_gosub_cpcounter == 3) {
    $.rcp_gosub_cp_x = $.rcp_cp4_x;
    $.rcp_gosub_cp_y = $.rcp_cp4_y;
    $.rcp_gosub_cp_z = $.rcp_cp4_z;
    $.rcp_gosub_cp_2nd_x = $.rcp_cp5_x;
    $.rcp_gosub_cp_2nd_y = $.rcp_cp5_y;
    $.rcp_gosub_cp_2nd_z = $.rcp_cp5_z;
  }


  if ($.rcp_gosub_cpcounter == 4) {
    $.rcp_gosub_cp_x = $.rcp_cp5_x;
    $.rcp_gosub_cp_y = $.rcp_cp5_y;
    $.rcp_gosub_cp_z = $.rcp_cp5_z;
    $.rcp_gosub_cp_2nd_x = $.rcp_cp6_x;
    $.rcp_gosub_cp_2nd_y = $.rcp_cp6_y;
    $.rcp_gosub_cp_2nd_z = $.rcp_cp6_z;
  }


  if ($.rcp_gosub_cpcounter == 5) {
    $.rcp_gosub_cp_x = $.rcp_cp6_x;
    $.rcp_gosub_cp_y = $.rcp_cp6_y;
    $.rcp_gosub_cp_z = $.rcp_cp6_z;
    $.rcp_gosub_cp_2nd_x = $.rcp_cp7_x;
    $.rcp_gosub_cp_2nd_y = $.rcp_cp7_y;
    $.rcp_gosub_cp_2nd_z = $.rcp_cp7_z;
  }


  if ($.rcp_gosub_cpcounter == 6) {
    $.rcp_gosub_cp_x = $.rcp_cp7_x;
    $.rcp_gosub_cp_y = $.rcp_cp7_y;
    $.rcp_gosub_cp_z = $.rcp_cp7_z;
    $.rcp_gosub_cp_2nd_x = $.rcp_cp8_x;
    $.rcp_gosub_cp_2nd_y = $.rcp_cp8_y;
    $.rcp_gosub_cp_2nd_z = $.rcp_cp8_z;
  }


  if ($.rcp_gosub_cpcounter == 7) {
    $.rcp_gosub_cp_x = $.rcp_cp8_x;
    $.rcp_gosub_cp_y = $.rcp_cp8_y;
    $.rcp_gosub_cp_z = $.rcp_cp8_z;
    $.rcp_gosub_cp_2nd_x = $.rcp_cp9_x;
    $.rcp_gosub_cp_2nd_y = $.rcp_cp9_y;
    $.rcp_gosub_cp_2nd_z = $.rcp_cp9_z;
  }


  if ($.rcp_gosub_cpcounter == 8) {
    $.rcp_gosub_cp_x = $.rcp_cp9_x;
    $.rcp_gosub_cp_y = $.rcp_cp9_y;
    $.rcp_gosub_cp_z = $.rcp_cp9_z;
    $.rcp_gosub_cp_2nd_x = $.rcp_cp10_x;
    $.rcp_gosub_cp_2nd_y = $.rcp_cp10_y;
    $.rcp_gosub_cp_2nd_z = $.rcp_cp10_z;
  }


  if ($.rcp_gosub_cpcounter == 9) {
    $.rcp_gosub_cp_x = $.rcp_cp10_x;
    $.rcp_gosub_cp_y = $.rcp_cp10_y;
    $.rcp_gosub_cp_z = $.rcp_cp10_z;
    $.rcp_gosub_cp_2nd_x = $.rcp_cp11_x;
    $.rcp_gosub_cp_2nd_y = $.rcp_cp11_y;
    $.rcp_gosub_cp_2nd_z = $.rcp_cp11_z;
  }


  if ($.rcp_gosub_cpcounter == 10) {
    $.rcp_gosub_cp_x = $.rcp_cp11_x;
    $.rcp_gosub_cp_y = $.rcp_cp11_y;
    $.rcp_gosub_cp_z = $.rcp_cp11_z;
    $.rcp_gosub_cp_2nd_x = $.rcp_cp12_x;
    $.rcp_gosub_cp_2nd_y = $.rcp_cp12_y;
    $.rcp_gosub_cp_2nd_z = $.rcp_cp12_z;
  }


  if ($.rcp_gosub_cpcounter == 11) {
    $.rcp_gosub_cp_x = $.rcp_cp12_x;
    $.rcp_gosub_cp_y = $.rcp_cp12_y;
    $.rcp_gosub_cp_z = $.rcp_cp12_z;
    $.rcp_gosub_cp_2nd_x = $.rcp_cp13_x;
    $.rcp_gosub_cp_2nd_y = $.rcp_cp13_y;
    $.rcp_gosub_cp_2nd_z = $.rcp_cp13_z;
  }


  if ($.rcp_gosub_cpcounter == 12) {
    $.rcp_gosub_cp_x = $.rcp_cp13_x;
    $.rcp_gosub_cp_y = $.rcp_cp13_y;
    $.rcp_gosub_cp_z = $.rcp_cp13_z;
    $.rcp_gosub_cp_2nd_x = $.rcp_cp14_x;
    $.rcp_gosub_cp_2nd_y = $.rcp_cp14_y;
    $.rcp_gosub_cp_2nd_z = $.rcp_cp14_z;
  }


  if ($.rcp_gosub_cpcounter == 13) {
    $.rcp_gosub_cp_x = $.rcp_cp14_x;
    $.rcp_gosub_cp_y = $.rcp_cp14_y;
    $.rcp_gosub_cp_z = $.rcp_cp14_z;
    $.rcp_gosub_cp_2nd_x = $.rcp_cp15_x;
    $.rcp_gosub_cp_2nd_y = $.rcp_cp15_y;
    $.rcp_gosub_cp_2nd_z = $.rcp_cp15_z;
  }


  if ($.rcp_gosub_cpcounter == 14) {
    $.rcp_gosub_cp_x = $.rcp_cp15_x;
    $.rcp_gosub_cp_y = $.rcp_cp15_y;
    $.rcp_gosub_cp_z = $.rcp_cp15_z;
    $.rcp_gosub_cp_2nd_x = $.rcp_cp16_x;
    $.rcp_gosub_cp_2nd_y = $.rcp_cp16_y;
    $.rcp_gosub_cp_2nd_z = $.rcp_cp16_z;
  }


  if ($.rcp_gosub_cpcounter == 15) {
    $.rcp_gosub_cp_x = $.rcp_cp16_x;
    $.rcp_gosub_cp_y = $.rcp_cp16_y;
    $.rcp_gosub_cp_z = $.rcp_cp16_z;
    $.rcp_gosub_cp_2nd_x = $.rcp_cp17_x;
    $.rcp_gosub_cp_2nd_y = $.rcp_cp17_y;
    $.rcp_gosub_cp_2nd_z = $.rcp_cp17_z;
  }


  if ($.rcp_gosub_cpcounter == 16) {
    $.rcp_gosub_cp_x = $.rcp_cp17_x;
    $.rcp_gosub_cp_y = $.rcp_cp17_y;
    $.rcp_gosub_cp_z = $.rcp_cp17_z;
    $.rcp_gosub_cp_2nd_x = $.rcp_cp18_x;
    $.rcp_gosub_cp_2nd_y = $.rcp_cp18_y;
    $.rcp_gosub_cp_2nd_z = $.rcp_cp18_z;
  }


  if ($.rcp_gosub_cpcounter == 17) {
    $.rcp_gosub_cp_x = $.rcp_cp18_x;
    $.rcp_gosub_cp_y = $.rcp_cp18_y;
    $.rcp_gosub_cp_z = $.rcp_cp18_z;
    $.rcp_gosub_cp_2nd_x = $.rcp_cp19_x;
    $.rcp_gosub_cp_2nd_y = $.rcp_cp19_y;
    $.rcp_gosub_cp_2nd_z = $.rcp_cp19_z;
  }


  if ($.rcp_gosub_cpcounter == 18) {
    $.rcp_gosub_cp_x = $.rcp_cp19_x;
    $.rcp_gosub_cp_y = $.rcp_cp19_y;
    $.rcp_gosub_cp_z = $.rcp_cp19_z;
    $.rcp_gosub_cp_2nd_x = $.rcp_cp20_x;
    $.rcp_gosub_cp_2nd_y = $.rcp_cp20_y;
    $.rcp_gosub_cp_2nd_z = $.rcp_cp20_z;
  }


  if ($.rcp_gosub_cpcounter == 19) {
    $.rcp_gosub_cp_x = $.rcp_cp20_x;
    $.rcp_gosub_cp_y = $.rcp_cp20_y;
    $.rcp_gosub_cp_z = $.rcp_cp20_z;
    $.rcp_gosub_cp_2nd_x = $.rcp_cp21_x;
    $.rcp_gosub_cp_2nd_y = $.rcp_cp21_y;
    $.rcp_gosub_cp_2nd_z = $.rcp_cp21_z;
  }


  if ($.rcp_gosub_cpcounter == 20) {
    $.rcp_gosub_cp_x = $.rcp_cp21_x;
    $.rcp_gosub_cp_y = $.rcp_cp21_y;
    $.rcp_gosub_cp_z = $.rcp_cp21_z;
    $.rcp_gosub_cp_2nd_x = $.rcp_cp22_x;
    $.rcp_gosub_cp_2nd_y = $.rcp_cp22_y;
    $.rcp_gosub_cp_2nd_z = $.rcp_cp22_z;
  }


  if ($.rcp_gosub_cpcounter == 21) {
    $.rcp_gosub_cp_x = $.rcp_cp22_x;
    $.rcp_gosub_cp_y = $.rcp_cp22_y;
    $.rcp_gosub_cp_z = $.rcp_cp22_z;
    $.rcp_gosub_cp_2nd_x = $.rcp_cp23_x;
    $.rcp_gosub_cp_2nd_y = $.rcp_cp23_y;
    $.rcp_gosub_cp_2nd_z = $.rcp_cp23_z;
  }


  if ($.rcp_gosub_cpcounter == 22) {
    $.rcp_gosub_cp_x = $.rcp_cp23_x;
    $.rcp_gosub_cp_y = $.rcp_cp23_y;
    $.rcp_gosub_cp_z = $.rcp_cp23_z;
    $.rcp_gosub_cp_2nd_x = $.rcp_cp24_x;
    $.rcp_gosub_cp_2nd_y = $.rcp_cp24_y;
    $.rcp_gosub_cp_2nd_z = $.rcp_cp24_z;
  }


  if ($.rcp_gosub_cpcounter == 23) {
    $.rcp_gosub_cp_x = $.rcp_cp24_x;
    $.rcp_gosub_cp_y = $.rcp_cp24_y;
    $.rcp_gosub_cp_z = $.rcp_cp24_z;
    $.rcp_gosub_cp_2nd_x = $.rcp_cp25_x;
    $.rcp_gosub_cp_2nd_y = $.rcp_cp25_y;
    $.rcp_gosub_cp_2nd_z = $.rcp_cp25_z;
  }


  if ($.rcp_gosub_cpcounter == 24) {
    $.rcp_gosub_cp_x = $.rcp_cp25_x;
    $.rcp_gosub_cp_y = $.rcp_cp25_y;
    $.rcp_gosub_cp_z = $.rcp_cp25_z;
    $.rcp_gosub_cp_2nd_x = $.rcp_cp26_x;
    $.rcp_gosub_cp_2nd_y = $.rcp_cp26_y;
    $.rcp_gosub_cp_2nd_z = $.rcp_cp26_z;
  }


  if ($.rcp_gosub_cpcounter == 25) {
    $.rcp_gosub_cp_x = $.rcp_cp26_x;
    $.rcp_gosub_cp_y = $.rcp_cp26_y;
    $.rcp_gosub_cp_z = $.rcp_cp26_z;
    $.rcp_gosub_cp_2nd_x = $.rcp_cp27_x;
    $.rcp_gosub_cp_2nd_y = $.rcp_cp27_y;
    $.rcp_gosub_cp_2nd_z = $.rcp_cp27_z;
  }


  if ($.rcp_gosub_cpcounter == 26) {
    $.rcp_gosub_cp_x = $.rcp_cp27_x;
    $.rcp_gosub_cp_y = $.rcp_cp27_y;
    $.rcp_gosub_cp_z = $.rcp_cp27_z;
    $.rcp_gosub_cp_2nd_x = $.rcp_cp28_x;
    $.rcp_gosub_cp_2nd_y = $.rcp_cp28_y;
    $.rcp_gosub_cp_2nd_z = $.rcp_cp28_z;
  }


  if ($.rcp_gosub_cpcounter == 27) {
    $.rcp_gosub_cp_x = $.rcp_cp28_x;
    $.rcp_gosub_cp_y = $.rcp_cp28_y;
    $.rcp_gosub_cp_z = $.rcp_cp28_z;
    $.rcp_gosub_cp_2nd_x = $.rcp_cp29_x;
    $.rcp_gosub_cp_2nd_y = $.rcp_cp29_y;
    $.rcp_gosub_cp_2nd_z = $.rcp_cp29_z;
  }


  if ($.rcp_gosub_cpcounter == 28) {
    $.rcp_gosub_cp_x = $.rcp_cp29_x;
    $.rcp_gosub_cp_y = $.rcp_cp29_y;
    $.rcp_gosub_cp_z = $.rcp_cp29_z;
    $.rcp_gosub_cp_2nd_x = $.rcp_cp29_x;
    $.rcp_gosub_cp_2nd_y = $.rcp_cp29_y;
    $.rcp_gosub_cp_2nd_z = $.rcp_cp29_z;
  }

  ///////////////////////////////////////////////
}

///////////////////////////////////////////////


///////////////////////////////////////////////

async function rcp_race_plane_stuck_checks() {
  ///////////////////////////////////////////////


  $.rcp_plane_health = $.rcp_gosub_race_plane.getHealth();
  if ($.rcp_plane_health < 500) {
    $.rcp_gosub_race_plane.setHealth(1000);
  }


  if (!(Car.IsDead($.rcp_playerplane))) {
    if ($.rcp_player_cpcounter == $.rcp_gosub_cpcounter) {
      const _res454 = $.rcp_gosub_race_plane.getCoordinates();
$.rcp_plane_x = _res454.x;
$.rcp_plane_y = _res454.y;
$.rcp_plane_z = _res454.z;
      $.rcp_difference_x_float_d = $.rcp_plane_x - $.rcp_player1_cp_x;
      $.rcp_difference_y_float_d = $.rcp_plane_y - $.rcp_player1_cp_y;
      $.rcp_difference_x_float_d = $.rcp_difference_x_float_d * $.rcp_difference_x_float_d;
      $.rcp_difference_y_float_d = $.rcp_difference_y_float_d * $.rcp_difference_y_float_d;
      $.rcp_sum_difference_d_xy = $.rcp_difference_x_float_d + $.rcp_difference_y_float_d;
      $.rcp_plane_distance_from_cp = Math.Sqrt($.rcp_sum_difference_d_xy);
      const _res455 = $.rcp_playerplane.getCoordinates();
$.rcp_plane_x = _res455.x;
$.rcp_plane_y = _res455.y;
$.rcp_plane_z = _res455.z;
      $.rcp_difference_x_float_d = $.rcp_plane_x - $.rcp_player1_cp_x;
      $.rcp_difference_y_float_d = $.rcp_plane_y - $.rcp_player1_cp_y;
      $.rcp_difference_x_float_d = $.rcp_difference_x_float_d * $.rcp_difference_x_float_d;
      $.rcp_difference_y_float_d = $.rcp_difference_y_float_d * $.rcp_difference_y_float_d;
      $.rcp_sum_difference_d_xy = $.rcp_difference_x_float_d + $.rcp_difference_y_float_d;
      $.rcp_player1_distance_from_cp = Math.Sqrt($.rcp_sum_difference_d_xy);
      if ($.rcp_player1_distance_from_cp > $.rcp_plane_distance_from_cp) {
        ++$.rcp_position;
      }
    }
    else {
      if ($.rcp_player_cpcounter < $.rcp_gosub_cpcounter) {
        ++$.rcp_position;
      }
    }
  }


  //IF NOT IS_CAR_DEAD rcp_gosub_race_plane
  //	IF NOT LOCATE_CAR_3D rcp_gosub_race_plane rcp_plane_stuck_x rcp_plane_stuck_y rcp_plane_stuck_z 3.0 3.0 2.0 0
  //		GET_CAR_COORDINATES rcp_gosub_race_plane rcp_plane_stuck_x rcp_plane_stuck_y rcp_plane_stuck_z
  //		rcp_timer_started = rcp_game_time
  //	ENDIF
  //ENDIF
  //
  //IF NOT IS_CAR_DEAD rcp_gosub_race_plane
  //	IF LOCATE_CAR_3D rcp_gosub_race_plane rcp_plane_stuck_x rcp_plane_stuck_y rcp_plane_stuck_z 3.0 3.0 2.0 0
  //		rcp_stuck_timer = rcp_game_time - rcp_timer_started
  //		IF rcp_stuck_timer > 4000
  //			IF NOT IS_CAR_ON_SCREEN rcp_gosub_race_plane
  //				GET_CAR_COORDINATES rcp_gosub_race_plane rcp_plane_x rcp_plane_y rcp_plane_z
  //				GET_CLOSEST_CAR_NODE rcp_plane_x rcp_plane_y rcp_plane_z rcp_plane_x rcp_plane_y rcp_plane_z
  //				IF NOT IS_POINT_OBSCURED_BY_A_MISSION_ENTITY rcp_plane_x rcp_plane_y rcp_plane_z 4.0 4.0 3.0
  //					IF NOT IS_POINT_ON_SCREEN rcp_plane_x rcp_plane_y rcp_plane_z 4.0
  //						SET_CAR_COORDINATES rcp_gosub_race_plane rcp_plane_x rcp_plane_y rcp_plane_z
  //						TURN_CAR_TO_FACE_COORD rcp_gosub_race_plane rcp_plane3_cp_x rcp_plane3_cp_y
  //						rcp_timer_reset_flag = 0
  //					ENDIF
  //				ENDIF
  //			ENDIF
  //		ENDIF
  //	ENDIF
  //ENDIF

  ///////////////////////////////////////////////
}

///////////////////////////////////////////////


async function mission_rcplane_failed() {
  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed"
  $.player1.alterWantedLevel($.rcplane_wanted_level);
}




// **************************************** mission haitian3 passed ************************


async function mission_rcplane_passed() {
  //flag_rcplane_passed = 1
  //REGISTER_MISSION_PASSED ( )

  /// Works out time in mins and seconds

  $.race_timer_seconds_plane1 = $.rcp_race_timer / 1000;


  Stat.RegisterFastestTime(3, $.race_timer_seconds_plane1);


  $.race_timer_mins_plane1 = $.race_timer_seconds_plane1 / 60;
  $.race_timer_seconds2_plane1 = $.race_timer_mins_plane1 * 60;
  $.race_timer_seconds_plane1 = $.race_timer_seconds_plane1 - $.race_timer_seconds2_plane1;


  if ($.race_timer_seconds_plane1 >= 10) {
    Text.PrintWith2NumbersNow("RCH1_9", $.race_timer_mins_plane1, $.race_timer_seconds_plane1, 7000, 1);
  }
  else {
    Text.PrintWith2NumbersNow("RCH1_10", $.race_timer_mins_plane1, $.race_timer_seconds_plane1, 7000, 1);
  }



  Text.PrintWithNumberBig("M_PASS", 100, 5000, 1); //"Mission Passed!"
  $.player1.clearWantedLevel();
  $.player1.addScore(100);
  if ($.playerpassedrcplane1 == 0) {
    Stat.PlayerMadeProgress(1);
    Stat.RegisterOddjobMissionPassed();
    $.playerpassedrcplane1 = 1;
  }


  Audio.PlayMissionPassedTune(1);
}




// ********************************** mission cleanup **************************************


async function mission_cleanup_rcplane() {


  ONMISSION = 0;
  $.flag_player_on_rc_mission = 0;


  Hud.ClearTimer($.$id.rcp_race_timer);
  $.rcp_blip_chase.remove();
  $.rcp_second_blip.remove();
  $.rcp_blip_plane1.remove();
  $.rcp_blip_plane2.remove();
  $.rcp_blip_plane3.remove();
  Rc.RemoveBuggy();
  if (!(Car.IsDead($.vanfor_rcplane_race))) {
    $.vanfor_rcplane_race.lockDoors(1 /* CARLOCK_UNLOCKED */);
  }
  $.vanfor_rcplane_race.markAsNoLongerNeeded();
  Streaming.MarkModelAsNoLongerNeeded(rcbaron);
  $.rcp_race_plane1.markAsNoLongerNeeded();
  $.rcp_race_plane2.markAsNoLongerNeeded();
  $.rcp_race_plane3.markAsNoLongerNeeded();
  $.rcp_race_plane1.delete();
  $.rcp_race_plane2.delete();
  $.rcp_race_plane3.delete();
  Stat.RegisterFastestTime(3, $.rcp_race_timer);
  Game.SetPoliceIgnorePlayer($.player1, false /* OFF */);
  $.has_player_just_done_rcplane_mission = 1;
  $.timer_mobile_start = Clock.GetGameTimer();
  Mission.Finish();
}

export async function rcplne1() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // ****************************** RCPLNE1 - RC Plane Checkpoint Race ***********************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************



  // SCRIPT_NAME RCPLNE1

  // Mission start stuff

  await mission_start_rcplane();  // SCM GOSUB mission_start_rcplane


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_rcplane_failed();  // SCM GOSUB mission_rcplane_failed
  }


  await mission_cleanup_rcplane();  // SCM GOSUB mission_cleanup_rcplane


  // MissionBoundary


  // ******************************** Variables for mission **********************************


  // VAR_FLOAT rcp_plane_x rcp_plane_y rcp_plane_z rcp_plane_headings
  // VAR_FLOAT rcp_difference_x_float_d rcp_difference_y_float_d rcp_sum_difference_d_xy
  // VAR_FLOAT rcp_plane1_locate_size rcp_plane2_locate_size rcp_plane3_locate_size
  // VAR_FLOAT rcp_plane_distance_from_cp rcp_player1_distance_from_cp
  // VAR_FLOAT rcp_road1_x rcp_road1_y rcp_road1_z rcp_road2_x rcp_road2_y rcp_road2_z


  // VAR_FLOAT rcp_plane1_stuck_x rcp_plane1_stuck_y rcp_plane1_stuck_z
  // VAR_FLOAT rcp_plane2_stuck_x rcp_plane2_stuck_y rcp_plane2_stuck_z
  // VAR_FLOAT rcp_plane3_stuck_x rcp_plane3_stuck_y rcp_plane3_stuck_z
  // VAR_FLOAT rcp_plane_stuck_x rcp_plane_stuck_y rcp_plane_stuck_z


  // VAR_FLOAT rcp_player1_cp_x rcp_player1_cp_y rcp_player1_cp_z
  // VAR_FLOAT rcp_blip_2nd_x rcp_blip_2nd_y rcp_blip_2nd_z
  // VAR_FLOAT rcp_plane1_cp_x rcp_plane1_cp_y rcp_plane1_cp_z
  // VAR_FLOAT rcp_plane2_cp_x rcp_plane2_cp_y rcp_plane2_cp_z
  // VAR_FLOAT rcp_plane3_cp_x rcp_plane3_cp_y rcp_plane3_cp_z


  // VAR_FLOAT rcp_gosub_cp_x rcp_gosub_cp_y rcp_gosub_cp_z rcp_gosub_cp_2nd_x rcp_gosub_cp_2nd_y rcp_gosub_cp_2nd_z rcp_plane_speed


  // VAR_INT rcp_blip_chase rcp_second_blip rcp_blip_plane1 rcp_blip_plane2 rcp_blip_plane3 vanfor_rcplane_race
  // VAR_INT rcp_race_plane1 rcp_race_plane2 rcp_race_plane3 rcp_plane_health rcp_gosub_race_plane rcp_playerplane
  // VAR_INT rcp_driver_plane1 rcp_driver_plane2 rcp_driver_plane3
  // VAR_INT rcp_player_cpcounter rcp_plane1_cpcounter rcp_plane2_cpcounter rcp_plane3_cpcounter rcp_gosub_cpcounter
  // VAR_INT rcp_position rcp_race_timer rcp_plane1_stuck_timer rcp_plane2_stuck_timer rcp_plane3_stuck_timer
  // VAR_INT rcp_race_timer_start rcp_timer_started rcp_stuck_timer
  // VAR_INT rcp_total_checkpoints rcp_total_checkpoints_minus1
  // VAR_INT rcp_game_time
  // VAR_INT rcp_timer_reset_flag playerpassedrcplane1


  // VAR_FLOAT rcp_cp0_x rcp_cp0_y rcp_cp0_z rcp_cp1_x rcp_cp1_y rcp_cp1_z rcp_cp2_x rcp_cp2_y rcp_cp2_z rcp_cp3_x rcp_cp3_y rcp_cp3_z rcp_cp4_x rcp_cp4_y rcp_cp4_z
  // VAR_FLOAT rcp_cp5_x rcp_cp5_y rcp_cp5_z rcp_cp6_x rcp_cp6_y rcp_cp6_z rcp_cp7_x rcp_cp7_y rcp_cp7_z rcp_cp8_x rcp_cp8_y rcp_cp8_z rcp_cp9_x rcp_cp9_y rcp_cp9_z
  // VAR_FLOAT rcp_cp10_x rcp_cp10_y rcp_cp10_z rcp_cp11_x rcp_cp11_y rcp_cp11_z rcp_cp12_x rcp_cp12_y rcp_cp12_z rcp_cp13_x rcp_cp13_y rcp_cp13_z
  // VAR_FLOAT rcp_cp14_x rcp_cp14_y rcp_cp14_z rcp_cp15_x rcp_cp15_y rcp_cp15_z rcp_cp16_x rcp_cp16_y rcp_cp16_z rcp_cp17_x rcp_cp17_y rcp_cp17_z
  // VAR_FLOAT rcp_cp18_x rcp_cp18_y rcp_cp18_z rcp_cp19_x rcp_cp19_y rcp_cp19_z rcp_cp20_x rcp_cp20_y rcp_cp20_z rcp_cp21_x rcp_cp21_y rcp_cp21_z
  // VAR_FLOAT rcp_cp22_x rcp_cp22_y rcp_cp22_z rcp_cp23_x rcp_cp23_y rcp_cp23_z rcp_cp24_x rcp_cp24_y rcp_cp24_z rcp_cp25_x rcp_cp25_y rcp_cp25_z
  // VAR_FLOAT rcp_cp26_x rcp_cp26_y rcp_cp26_z rcp_cp27_x rcp_cp27_y rcp_cp27_z rcp_cp28_x rcp_cp28_y rcp_cp28_z rcp_cp29_x rcp_cp29_y rcp_cp29_z




  // VAR_INT rcplane_wanted_level


  // VAR_INT race_timer_seconds_plane1
  // VAR_INT race_timer_seconds2_plane1
  // VAR_INT race_timer_mins_plane1


  // ************************************ Mission Start **************************************


}
