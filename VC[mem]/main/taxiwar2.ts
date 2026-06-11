// Generated from main/taxiwar2.sc

import { $ } from "../utils/vars.mts";

// *******************************************************************************************
// *******************************************************************************************
// ***************************************Taxi WAR 3******************************************
// ****************************************Pay back*******************************************
// *******************************************************************************************
// *******************************************************************************************
// *******************************************************************************************

async function body() {


  Stat.RegisterMissionGiven();
  ONMISSION = 1;
  // SCRIPT_NAME taxwar2
  await asyncWait(0);


  Text.LoadMissionText("TAXIWA2");
  Shortcut.SetDropoffPointForMission(-1020.8, 191.1, 10.5, 350.0);


  $.counter_taxiwar = 0;
  $.dead_taxicab1 = 0;
  $.dead_taxicab2 = 0;
  $.dead_taxicab3 = 0;
  $.cab1_obj_set = 0;
  $.cab2_obj_set = 0;
  $.cab3_obj_set = 0;
  $.in_taxi1 = 0;
  $.in_taxi2 = 0;
  $.in_taxi3 = 0;




  //SET_PLAYER_CONTROL player1 OFF


  Audio.LoadMissionAudio(1, "TAX2_1" as any);
  Audio.LoadMissionAudio(2, "TAX2_2" as any);


  while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
  }


  Audio.PlayMissionAudio(1);
  Text.PrintNow("TAX2_1", 4000, 1);


  await asyncWait(500);


  TIMERA = 0;


  while (!(TIMERA > 4000)) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → skip_passed_taxi2_cut (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_passed_taxi2_cut"); // fallback: would break linear control flow
    }


  }


  Audio.PlayMissionAudio(2);
  Text.PrintNow("TAX2_2", 4000, 1);


  TIMERA = 0;


  while (!(TIMERA > 4000)) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → skip_passed_taxi2_cut (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_passed_taxi2_cut"); // fallback: would break linear control flow
    }


  }


  Audio.LoadMissionAudio(1, "TAX2_3" as any);


  while (!(Audio.HasMissionAudioLoaded(1))) {
    await asyncWait(0);
  }


  Audio.PlayMissionAudio(1);
  Text.PrintNow("TAX2_3", 6000, 1);


  TIMERA = 0;


  while (!(TIMERA > 6000)) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → skip_passed_taxi2_cut (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_passed_taxi2_cut"); // fallback: would break linear control flow
    }


  }
}



async function skip_passed_taxi2_cut() {


  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  Camera.RestoreJumpcut();
  Audio.ClearMissionAudio(1);
  Audio.ClearMissionAudio(2);


  Streaming.RequestModel(taxi);
  Streaming.RequestModel(WMOCA);
  Streaming.RequestModel(uzi);
  Streaming.RequestModel(kaufman);


  while (!(Streaming.HasModelLoaded(taxi)) || !(Streaming.HasModelLoaded(WMOCA)) || !(Streaming.HasModelLoaded(uzi)) || !(Streaming.HasModelLoaded(kaufman))) {
    await asyncWait(0);


  }

  // START OF MISSION

  //GIVE_WEAPON_TO_PLAYER Player1 WEAPONTYPE_SILENCED_INGRAM 300
  //SET_CURRENT_PLAYER_WEAPON Player1 WEAPONTYPE_SILENCED_INGRAM

  $.player1.ensureHasDriveByWeapon(300);
  $.player1.setCanDoDriveBy(true /* TRUE */);


  $.taxicab1 = Car.Create(taxi, -893.3, -653.1, -100.0);
  $.taximan1 = Char.CreateInsideCar($.taxicab1, 4 /* PEDTYPE_CIVMALE */, WMOCA);
  //CHANGE_CAR_COLOUR taxicab1 CARCOLOUR_RED1 CARCOLOUR_ORANGE4

  $.blip1_taxicab1 = Blip.AddForCar($.taxicab1);
  $.taxicab1.setCruiseSpeed(17.0);
  $.taxicab1.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
  $.taxicab1.setOnlyDamagedByPlayer(true /* TRUE */);
  $.taximan1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //SET_CAR_HEALTH taxicab1 600


  $.taxicab2 = Car.Create(taxi, -978.7, -606.3, -100.0);
  $.taximan2 = Char.CreateInsideCar($.taxicab2, 4 /* PEDTYPE_CIVMALE */, WMOCA);
  //CHANGE_CAR_COLOUR taxicab2 CARCOLOUR_RED1 CARCOLOUR_ORANGE4

  $.blip2_taxicab2 = Blip.AddForCar($.taxicab2);
  $.taxicab2.setCruiseSpeed(17.0);
  $.taxicab2.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
  $.taxicab2.setOnlyDamagedByPlayer(true /* TRUE */);
  $.taximan2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //SET_CAR_HEALTH taxicab2 600


  $.taxicab3 = Car.Create(taxi, -1059.0, -334.8, -100.0);
  $.taximan3 = Char.CreateInsideCar($.taxicab3, 4 /* PEDTYPE_CIVMALE */, WMOCA);
  //CHANGE_CAR_COLOUR taxicab3 CARCOLOUR_RED1 CARCOLOUR_ORANGE4

  $.blip3_taxicab3 = Blip.AddForCar($.taxicab3);
  $.taxicab3.setCruiseSpeed(17.0);
  $.taxicab3.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
  $.taxicab3.setOnlyDamagedByPlayer(true /* TRUE */);
  $.taximan3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //SET_CAR_HEALTH taxicab3 600




  Text.PrintNow("TAXW2_1", 10000, 1); //KILL THE CABS


  while (!($.counter_taxiwar == 3)) {
    await asyncWait(0);
    if (Car.IsDead($.taxicab1) && $.dead_taxicab1 == 0) {
      $.blip1_taxicab1.remove();
      $.dead_taxicab1 = 1;
      ++$.counter_taxiwar;
      Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
    }
    if (!(Car.IsDead($.taxicab1))) {
      if (!($.taxicab1.isHealthGreater(999))) {
        if (!(Char.IsDead($.taximan1))) {
          if ($.taximan1.isInCar($.taxicab1)) {
            if ($.cab1_obj_set == 0) {
              $.taxicab1.setCruiseSpeed(35.0);
              $.taxicab1.setDrivingStyle(2);
              $.taxicab1.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
              $.taxicab1.setOnlyDamagedByPlayer(false /* FALSE */);
              $.cab1_obj_set = 1;
            }
          }
        }
      }
    }
    if (!(Car.IsDead($.taxicab1))) {
      if ($.player1.isInCar($.taxicab1) && $.in_taxi1 == 0) {
        $.taxicab1.setOnlyDamagedByPlayer(false /* FALSE */);
        $.in_taxi1 = 1;
      }
    }
    if (Car.IsDead($.taxicab2) && $.dead_taxicab2 == 0) {
      $.blip2_taxicab2.remove();
      $.dead_taxicab2 = 1;
      ++$.counter_taxiwar;
      Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
    }
    if (!(Car.IsDead($.taxicab2))) {
      if (!($.taxicab2.isHealthGreater(999))) {
        if (!(Char.IsDead($.taximan2))) {
          if ($.taximan2.isInCar($.taxicab2)) {
            if ($.cab2_obj_set == 0) {
              $.taxicab2.setCruiseSpeed(35.0);
              $.taxicab2.setDrivingStyle(2);
              $.taxicab2.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
              $.taxicab2.setOnlyDamagedByPlayer(false /* FALSE */);
              $.cab2_obj_set = 1;
            }
          }
        }
      }
    }
    if (!(Car.IsDead($.taxicab2))) {
      if ($.player1.isInCar($.taxicab2) && $.in_taxi2 == 0) {
        $.taxicab2.setOnlyDamagedByPlayer(false /* FALSE */);
        $.in_taxi2 = 1;
      }
    }
    if (Car.IsDead($.taxicab3) && $.dead_taxicab3 == 0) {
      $.blip3_taxicab3.remove();
      $.dead_taxicab3 = 1;
      ++$.counter_taxiwar;
      Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
    }
    if (!(Car.IsDead($.taxicab3))) {
      if (!($.taxicab3.isHealthGreater(999))) {
        if (!(Char.IsDead($.taximan3))) {
          if ($.taximan3.isInCar($.taxicab3)) {
            if ($.cab3_obj_set == 0) {
              $.taxicab3.setCruiseSpeed(35.0);
              $.taxicab3.setDrivingStyle(2);
              $.taxicab3.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
              $.taxicab3.setOnlyDamagedByPlayer(false /* FALSE */);
              $.cab3_obj_set = 1;
            }
          }
        }
      }
    }
    if (!(Car.IsDead($.taxicab3))) {
      if ($.player1.isInCar($.taxicab3) && $.in_taxi3 == 0) {
        $.taxicab3.setOnlyDamagedByPlayer(false /* FALSE */);
        $.in_taxi3 = 1;
      }
    }



  }





  // SCM GOTO → mission_taxiwar2_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_taxiwar2_passed"); // fallback: would break linear control flow
}


// Mission taxi2 failed


async function onFailed() {
  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed"
}




// mission taxi2 passed


async function mission_taxiwar2_passed() {


  $.flag_taxiwar_mission2_passed = 1;
  Audio.PlayMissionPassedTune(1);
  Text.PrintWithNumberBig("M_PASS", 2000, 5000, 1); //"Mission Passed!"
  $.player1.clearWantedLevel();
  $.player1.addScore(2000);
  Stat.RegisterMissionPassed("TAXI_2");
  Stat.PlayerMadeProgress(1);
  // START_NEW_SCRIPT taxiwar_mission3_loop 
}




// mission cleanup


async function cleanup() {
  ONMISSION = 0;
  $.timer_mobile_start = Clock.GetGameTimer();
  $.blip1_taxicab1.remove();
  $.blip2_taxicab2.remove();
  $.blip3_taxicab3.remove();
  Streaming.MarkModelAsNoLongerNeeded(taxi);
  Streaming.MarkModelAsNoLongerNeeded(WMOCA);
  Streaming.MarkModelAsNoLongerNeeded(uzi);
  Streaming.MarkModelAsNoLongerNeeded(kaufman);
  $.flag_taxi1_mission_launched = 0;
  Audio.ClearMissionAudio(1);
  Audio.ClearMissionAudio(2);
  Mission.Finish();
}

export async function taxiwar2() {
  // Mission start stuff


  await body();  // SCM GOSUB mission_start_taxiwar2


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await onFailed();  // SCM GOSUB mission_taxiwar2_failed
  }


  await cleanup();  // SCM GOSUB mission_cleanup_taxiwar2



  // Variables for mission

  // ***************************************Mission Start*************************************


}
