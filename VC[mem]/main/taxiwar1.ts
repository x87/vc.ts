// Generated from main/taxiwar1.sc

import { $ } from "../vars.mts";

// *******************************************************************************************
// *******************************************************************************************
// *************************************Taxi mission 1****************************************
// ***************************************Taxi war1*****************************************
// *******************************************************************************************
// *******************************************************************************************

async function body() {


  Stat.RegisterMissionGiven();
  ONMISSION = 1;
  // SCRIPT_NAME taxwar1
  await asyncWait(0);


  Text.LoadMissionText("TAXIWA1");
  Shortcut.SetDropoffPointForMission(-1020.8, 191.1, 10.5, 350.0);


  $.counter_taxiwar = 0;
  dead_eviltaxi = 0;
  got_into_players_taxi = 0;
  played_taxiwar1_samp = 0;

  //SET_PLAYER_CONTROL player1 OFF


  Audio.LoadMissionAudio(1, "TAX1_1" as any);
  Audio.LoadMissionAudio(2, "TAX1_2" as any);


  while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
  }


  Audio.PlayMissionAudio(1);
  Text.PrintNow("TAX1_1", 4500, 1);


  await asyncWait(500);


  TIMERA = 0;


  while (!(TIMERA > 4000)) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → skip_passed_taxi1_cut (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_passed_taxi1_cut"); // fallback: would break linear control flow
    }


  }


  Audio.PlayMissionAudio(2);
  Text.PrintNow("TAX1_2", 3000, 1);


  TIMERA = 0;


  while (!(TIMERA > 3000)) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → skip_passed_taxi1_cut (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_passed_taxi1_cut"); // fallback: would break linear control flow
    }


  }
}




async function skip_passed_taxi1_cut() {



  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  Camera.RestoreJumpcut();
  Audio.ClearMissionAudio(1);
  Audio.ClearMissionAudio(2);


  Streaming.RequestModel(taxi);
  Streaming.RequestModel(WMOCA);
  Streaming.RequestModel(WMOBU);
  Streaming.RequestModel(kaufman);


  while (!(Streaming.HasModelLoaded(taxi)) || !(Streaming.HasModelLoaded(WMOCA)) || !(Streaming.HasModelLoaded(WMOBU)) || !(Streaming.HasModelLoaded(kaufman))) {
    await asyncWait(0);


  }

  // START OF MISSION



  $.blip1_taxicab1 = Blip.AddForCoord(-576.7, -480.1, 10.8);


  Text.PrintNow("TAXW1_1", 10000, 1); //Pick up the VIP


  $.countdown_taxiwar = 61000;
  Hud.DisplayTimer($.$id.countdown_taxiwar, TIMER_DOWN);


  if ($.player1.isInAnyCar()) {
    $.players_cab = $.player1.storeCarIsIn();
  }


  if (Car.IsDead($.players_cab)) {
  }


  while (!($.player1.locateStoppedAnyMeans3D(-576.7, -480.1, 10.5, 2.5, 2.5, 3.0, true /* TRUE */)) || !($.player1.isInModel(kaufman)) || !($.player1.isPressingHorn())) {
    await asyncWait(0);
    if (Car.IsDead($.players_cab)) {
    }
    if ($.player1.isInModel(kaufman)) {
      $.players_cab = $.player1.storeCarIsIn();
    }
    else {
      Text.PrintNow("TAXW1_5", 1000, 1); //You need to be in a Kaufman cab!
    }
    if ($.countdown_taxiwar == 0) {
      Text.PrintNow("OUTTIME", 5000, 1);
      // SCM GOTO → mission_taxiwar1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxiwar1_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateStoppedAnyMeans3D(-576.7, -480.1, 11.0, 2.5, 2.5, 3.0, true /* TRUE */) && $.player1.isInModel(kaufman)) {
      Text.PrintNow("HORN", 1000, 1);
    }


  }


  if (!(Car.IsDead($.players_cab))) {
    $.players_cab.lockDoors(4 /* CARLOCK_LOCKED_PLAYER_INSIDE */);
  }


  await asyncWait(500);


  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);
  Hud.ClearTimer($.$id.countdown_taxiwar);


  theVIP = Char.Create(4 /* PEDTYPE_CIVMALE */, WMOBU, -573.9, -448.1, 14.1);
  theVIP.setHeading(270.0);
  theVIP.clearThreatSearch();
  theVIP.setObjGotoCoordOnFoot(-564.3, -447.9);


  Camera.SetFixedPosition(-576.171, -461.122, 11.516, 0.0, 0.0, 0.0); //Watching VIP walk from mansion
  Camera.PointAtPoint(-575.533, -460.370, 11.682, 2 /* JUMP_CUT */);


  Audio.LoadMissionAudio(1, "TAX1_3" as any);


  await asyncWait(3000);


  Camera.SetFixedPosition(-584.096, -471.163, 12.693, 0.0, 0.0, 0.0); //View of players car
  Camera.PointAtPoint(-583.402, -471.861, 12.514, 2 /* JUMP_CUT */);



  $.eviltaxi = Car.Create(taxi, -546.0, -474.3, 10.0);
  World.ClearAreaOfCars(-600.8, -487.6, 0.0, -463.6, -433.6, 20.0);
  //CLEAR_AREA -546.0 -473.6 10.0 25.0 TRUE
  //CHANGE_CAR_COLOUR eviltaxi CARCOLOUR_RED1 CARCOLOUR_ORANGE4

  $.taximan1 = Char.CreateInsideCar($.eviltaxi, 4 /* PEDTYPE_CIVMALE */, WMOCA);



  $.eviltaxi.setHeading(90.0);
  $.eviltaxi.setCruiseSpeed(30.0);
  $.eviltaxi.setForwardSpeed(10.0);
  $.eviltaxi.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
  $.eviltaxi.setOnlyDamagedByPlayer(true /* TRUE */);
  $.taximan1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);

  //POINT_CAMERA_AT_CAR eviltaxi WHEELCAM JUMP_CUT



  $.blip1_taxicab1.remove();

  //CLEAR_AREA -583.3 -479.0 10.8 25.0 TRUE

  $.eviltaxi.setStraightLineDistance(100);
  $.eviltaxi.gotoCoordinates(-578.0, -474.3, 10.8);


  TIMERB = 0;



  while (!($.eviltaxi.locate2D(-578.0, -474.3, 6.0, 4.0, false /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.eviltaxi)) {
      // SCM GOTO → mission_taxiwar1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxiwar1_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.taximan1)) {
      Text.PrintNow("TAXW1_3", 5000, 1); //The V.I.P. is dead!
      // SCM GOTO → mission_taxiwar1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxiwar1_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.taximan1)) {
      // SCM GOTO → mission_taxiwar1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxiwar1_failed"); // fallback: would break linear control flow
    }
    if (TIMERB > 10000) {
      // SCM GOTO → VIP_get_in_taxi (not lowered; manual jump required)
      throw new Error("unresolved GOTO VIP_get_in_taxi"); // fallback: would break linear control flow
    }


  }
}



async function VIP_get_in_taxi() {


  if (Audio.HasMissionAudioLoaded(1)) {
    Audio.PlayMissionAudio(1);
    Text.PrintNow("TAX1_3", 4000, 1);
  }


  if (!(Char.IsDead(theVIP))) {
    theVIP.setCoordinates(-576.2, -471.1, 10.4);
    theVIP.setObjEnterCarAsPassenger($.eviltaxi);
    $.blip_eviltaxi = Blip.AddForChar(theVIP);
  }


  if (!(Car.IsDead($.eviltaxi))) {
    $.eviltaxi.setCruiseSpeed(0.0);
  }



  while (!(theVIP.isInCar($.eviltaxi))) {
    await asyncWait(0);
    if (Car.IsDead($.eviltaxi)) {
      Text.PrintNow("TAXW1_3", 5000, 1); //The V.I.P. is dead!
      // SCM GOTO → mission_taxiwar1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxiwar1_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.taximan1)) {
      Text.PrintNow("TAXW1_3", 5000, 1); //The V.I.P. is dead!
      // SCM GOTO → mission_taxiwar1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxiwar1_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead(theVIP)) {
      // SCM GOTO → mission_taxiwar1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxiwar1_failed"); // fallback: would break linear control flow
    }


  }


  if (!(Car.IsDead($.eviltaxi))) {
    $.eviltaxi.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
  }


  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  Camera.Restore();


  if (!(Car.IsDead($.players_cab))) {
    $.players_cab.lockDoors(1 /* CARLOCK_UNLOCKED */);
  }


  Text.PrintNow("TAXW1_2", 5000, 1); //Get the VIP back


  $.eviltaxi.gotoCoordinates(-683.0, -488.6, 10.6);
  $.eviltaxi.setCruiseSpeed(30.0);
  $.eviltaxi.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
  $.eviltaxi.setOnlyDamagedByPlayer(false /* FALSE */);


  theVIP.setFrightenedInJackedCar(true /* TRUE */);


  $.blip1_taxicab1 = Blip.AddForCoord(-1438.1, -833.6, 11.3);



  Audio.LoadMissionAudio(1, "TAX1_4" as any);



  while (!(theVIP.locateStoppedAnyMeans3D(-1438.1, -833.6, 11.3, 5.0, 5.0, 5.0, true /* TRUE */))) {
    await asyncWait(0);
    if (Char.IsDead(theVIP)) {
      Text.PrintNow("TAXW1_3", 5000, 1); //The V.I.P. is dead!
      // SCM GOTO → mission_taxiwar1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxiwar1_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.players_cab)) {
    }
    if ($.player1.isInAnyCar()) {
      $.players_cab = $.player1.storeCarIsIn();
    }
    if (!(Car.IsDead($.eviltaxi))) {
      if (!($.player1.isInCar($.eviltaxi))) {
        if ($.eviltaxi.locate3D(-683.0, -488.6, 10.6, 5.0, 5.0, 5.0, false /* FALSE */)) {
          $.eviltaxi.gotoCoordinates(-847.1, -516.6, 10.6);
        }
        if ($.eviltaxi.locate3D(-847.1, -516.6, 10.6, 5.0, 5.0, 5.0, false /* FALSE */)) {
          $.eviltaxi.gotoCoordinates(-831.4, -639.5, 10.6);
        }
        if ($.eviltaxi.locate3D(-831.4, -639.5, 10.6, 5.0, 5.0, 5.0, false /* FALSE */)) {
          $.eviltaxi.gotoCoordinates(-1131.7, -687.8, 10.6);
        }
        if ($.eviltaxi.locate3D(-1131.7, -687.8, 10.6, 5.0, 5.0, 5.0, false /* FALSE */)) {
          $.eviltaxi.gotoCoordinates(-914.3, -1067.2, 10.6);
        }
        if ($.eviltaxi.locate3D(-914.3, -1067.2, 10.6, 5.0, 5.0, 5.0, false /* FALSE */)) {
          $.eviltaxi.gotoCoordinates(-1197.3, -1070.9, 11.3);
        }
        if ($.eviltaxi.locate3D(-1197.3, -1070.9, 11.3, 5.0, 5.0, 5.0, false /* FALSE */)) {
          $.eviltaxi.gotoCoordinates(-1407.5, -785.4, 11.3);
        }
        if ($.eviltaxi.locate3D(-1407.5, -785.4, 11.3, 5.0, 5.0, 5.0, false /* FALSE */)) {
          $.eviltaxi.gotoCoordinates(-1438.1, -833.6, 11.3);
        }
      }
    }
    if (!(Car.IsDead($.eviltaxi))) {
      if (!($.eviltaxi.isHealthGreater(500)) || Char.IsDead($.taximan1)) {
        if (got_into_players_taxi == 0) {
          if (!(Car.IsDead($.eviltaxi))) {
            $.eviltaxi.lockDoors(1 /* CARLOCK_UNLOCKED */);
          }
          theVIP.setObjLeaveCar($.eviltaxi);
          while (theVIP.isInCar($.eviltaxi)) {
            await asyncWait(0);
            if (Car.IsDead($.players_cab)) {
            }
            if ($.player1.isInAnyCar()) {
              $.players_cab = $.player1.storeCarIsIn();
            }
            if (Car.IsDead($.eviltaxi)) {
            }
            if (Char.IsDead(theVIP)) {
              Text.PrintNow("TAXW1_3", 5000, 1); //The V.I.P. is dead!
              // SCM GOTO → mission_taxiwar1_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_taxiwar1_failed"); // fallback: would break linear control flow
            }
            if (theVIP.locateStoppedAnyMeans3D(-1438.1, -833.6, 11.3, 4.0, 4.0, 5.0, true /* TRUE */)) {
              // SCM GOTO → the_end_of_taxiwar1 (not lowered; manual jump required)
              throw new Error("unresolved GOTO the_end_of_taxiwar1"); // fallback: would break linear control flow
            }


          }
          if (!(Char.IsDead(theVIP))) {
            theVIP.setFrightenedInJackedCar(false /* FALSE */);
          }
          if (Audio.HasMissionAudioLoaded(1)) {
            Audio.PlayMissionAudio(1);
            Text.PrintNow("TAX1_4", 4000, 1);
          }
          TIMERB = 0;
          if (!(Char.IsDead(theVIP))) {
            Audio.LoadMissionAudio(2, "TAX1_5" as any);
            theVIP.setObjNoObj();
            theVIP.setRunning(true /* TRUE */);
            theVIP.followChar($.scplayer);
          }
          got_into_players_taxi = 1;


        }
      }
    }
    if (got_into_players_taxi == 1) {
      if (TIMERA > 500) {
        if (!(Car.IsDead($.eviltaxi)) && !(Char.IsDead($.taximan1))) {
          $.eviltaxi.setCruiseSpeed(50.0);
          $.eviltaxi.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
          $.eviltaxi.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
          TIMERA = 0;
        }
      }
      if (!(Car.IsDead($.players_cab))) {
        if (theVIP.isInCar($.players_cab)) {
          $.blip_eviltaxi.remove();
        }
        else {
          $.blip_eviltaxi.remove();
          $.blip_eviltaxi = Blip.AddForChar(theVIP);
        }
      }
      if (played_taxiwar1_samp == 0) {
        if (!(Char.IsDead(theVIP))) {
          if ($.player1.locateAnyMeansChar3D(theVIP, 15.0, 15.0, 6.0, false /* FALSE */)) {
            if (TIMERB > 2000) {
              if (Audio.HasMissionAudioLoaded(2)) {
                Audio.PlayMissionAudio(2);
                Text.PrintNow("TAX1_5", 4000, 1);
                await asyncWait(4000);
                Text.PrintNow("TAXW1_6", 8000, 1); //Take to the airport.
                played_taxiwar1_samp = 1;
              }
            }
          }
        }
      }
      if (Char.IsDead(theVIP)) {
        Text.PrintNow("TAXW1_3", 5000, 1); //The V.I.P. is dead!
        // SCM GOTO → mission_taxiwar1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_taxiwar1_failed"); // fallback: would break linear control flow
      }


    }


  }
}



async function the_end_of_taxiwar1() {



  if (!(Car.IsDead($.eviltaxi))) {
    if (!(Char.IsDead(theVIP))) {
      if (theVIP.isInCar($.eviltaxi) && $.eviltaxi.locate3D(-1438.1, -833.6, 11.3, 5.0, 5.0, 5.0, true /* TRUE */)) {
        Text.PrintNow("TAXW1_4", 5000, 1); //The V.I.P. has been dropped off!
        // SCM GOTO → mission_taxiwar1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_taxiwar1_failed"); // fallback: would break linear control flow
      }
    }
  }


  if (!(Car.IsDead($.players_cab))) {
    if (!(Char.IsDead(theVIP))) {
      if (theVIP.locateStoppedAnyMeans3D(-1438.1, -833.6, 11.3, 5.0, 5.0, 5.0, true /* TRUE */) && !($.player1.locateAnyMeans3D(-1438.1, -833.6, 11.3, 5.0, 5.0, 5.0, true /* TRUE */))) {
        Text.PrintNow("TAXW1_4", 5000, 1); //The V.I.P. has been dropped off!
        // SCM GOTO → mission_taxiwar1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_taxiwar1_failed"); // fallback: would break linear control flow
      }
    }
  }


  if (!(Car.IsDead($.players_cab))) {
    if (!(Char.IsDead(theVIP))) {
      if (theVIP.isInCar($.players_cab) && $.players_cab.locateStopped3D(-1438.1, -833.6, 11.3, 5.0, 5.0, 5.0, true /* TRUE */)) {
        $.player1.setControl(false /* OFF */);
        Hud.SwitchWidescreen(true /* ON */);
        Camera.SetFixedPosition(-1462.635, -791.768, 15.662, 0.0, 0.0, 0.0); //Look at airport
        Camera.PointAtPoint(-1462.162, -792.641, 15.783, 2 /* JUMP_CUT */);
        await asyncWait(2000);
        Camera.SetFixedPosition(-1468.559, -834.603, 16.360, 0.0, 0.0, 0.0); //Watching VIP walk
        Camera.PointAtPoint(-1467.827, -833.977, 16.091, 2 /* JUMP_CUT */);
        if (!(Char.IsDead(theVIP))) {
          theVIP.leaveGroup();
          theVIP.setRunning(false /* FALSE */);
          theVIP.warpFromCarToCoord(-1459.6, -825.3, 13.9);
          theVIP.setHeading(146.0);
          theVIP.setObjGotoCoordOnFoot(-1465.7, -832.2);
        }
        await asyncWait(3500);
        Camera.RestoreJumpcut();
        // SCM GOTO → mission_taxiwar1_passed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_taxiwar1_passed"); // fallback: would break linear control flow
      }
    }
  }


  if (!(Char.IsDead(theVIP))) {
    if (theVIP.locateOnFoot3D(-1438.1, -833.6, 11.3, 5.0, 5.0, 5.0, true /* TRUE */) && $.player1.locateOnFoot3D(-1438.1, -833.6, 11.3, 5.0, 5.0, 5.0, true /* TRUE */)) {
      $.player1.setControl(false /* OFF */);
      Hud.SwitchWidescreen(true /* ON */);
      Camera.SetFixedPosition(-1462.635, -791.768, 15.662, 0.0, 0.0, 0.0); //Look at airport
      Camera.PointAtPoint(-1462.162, -792.641, 15.783, 2 /* JUMP_CUT */);
      await asyncWait(2000);
      Camera.SetFixedPosition(-1468.559, -834.603, 16.360, 0.0, 0.0, 0.0); //Watching VIP walk
      Camera.PointAtPoint(-1467.827, -833.977, 16.091, 2 /* JUMP_CUT */);
      if (!(Char.IsDead(theVIP))) {
        theVIP.leaveGroup();
        theVIP.setRunning(false /* FALSE */);
        theVIP.setCoordinates(-1459.6, -825.3, 13.9);
        theVIP.setHeading(146.0);
        theVIP.setObjGotoCoordOnFoot(-1465.7, -832.2);
      }
      await asyncWait(3500);
      Camera.RestoreJumpcut();
      // SCM GOTO → mission_taxiwar1_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxiwar1_passed"); // fallback: would break linear control flow
    }
  }
}



// Mission taxi1 failed


async function onFailed() {
  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed"
}




// mission taxi1 passed


async function mission_taxiwar1_passed() {
  $.flag_taxiwar_mission1_passed = 1;
  Audio.PlayMissionPassedTune(1);
  Text.PrintWithNumberBig("M_PASS", 1000, 5000, 1); //"Mission Passed!"
  $.player1.clearWantedLevel();
  $.player1.addScore(1000);
  Stat.RegisterMissionPassed("TAXI_1");
  Stat.PlayerMadeProgress(1);
  // START_NEW_SCRIPT taxiwar_mission2_loop
}




// mission cleanup


async function cleanup() {
  ONMISSION = 0;
  $.timer_mobile_start = Clock.GetGameTimer();
  $.blip_eviltaxi.remove();
  $.blip1_taxicab1.remove();
  //REMOVE_BLIP blip3_taxicab3

  Streaming.MarkModelAsNoLongerNeeded(taxi);
  Streaming.MarkModelAsNoLongerNeeded(WMOCA);
  Streaming.MarkModelAsNoLongerNeeded(WMOBU);
  Streaming.MarkModelAsNoLongerNeeded(kaufman);
  Hud.ClearTimer($.$id.countdown_taxiwar);
  $.flag_taxi1_mission_launched = 0;
  Audio.ClearMissionAudio(1);
  Audio.ClearMissionAudio(2);
  Mission.Finish();
}

export async function taxiwar1() {
  // Mission start stuff


  await body();  // SCM GOSUB mission_start_taxiwar1


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await onFailed();  // SCM GOSUB mission_taxiwar1_failed
  }


  await cleanup();  // SCM GOSUB mission_cleanup_taxiwar1



  // Variables for mission



  // VAR_INT taxicab1 taxicab2 taxicab3 taxicab4 taxicab5 taxicab6
  // VAR_INT blip1_taxicab1 blip2_taxicab2 blip3_taxicab3 blip4_taxicab4 blip5_taxicab5 blip6_taxicab6
  // VAR_INT counter_taxiwar
  // VAR_INT taximan1 taximan2 taximan3 taximan4 taximan5 taximan6 countdown_taxiwar
  // VAR_INT in_taxi1 in_taxi2 in_taxi3 in_taxi4 in_taxi5 in_taxi6
  // VAR_INT dead_taxicab1 dead_taxicab2 dead_taxicab3 dead_taxicab4 dead_taxicab5 dead_taxicab6
  // VAR_INT eviltaxi blip_eviltaxi
  // VAR_INT cab1_obj_set cab2_obj_set cab3_obj_set cab4_obj_set cab5_obj_set cab6_obj_set


  // LVAR_INT theVIP got_into_players_taxi dead_eviltaxi played_taxiwar1_samp

  // ***************************************Mission Start*************************************


}
