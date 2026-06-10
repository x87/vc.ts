// Generated from main/taxiwar3.sc

import { $ } from "../vars.mts";

// *******************************************************************************************
// *******************************************************************************************
// ****************************************Taxi WAR 3*****************************************
// *************************************Destruction Derby*************************************
// *******************************************************************************************
// *******************************************************************************************
// *******************************************************************************************

async function body() {



  Stat.RegisterMissionGiven();
  ONMISSION = 1;
  // SCRIPT_NAME taxwar3


  await asyncWait(0);


  Text.LoadMissionText("TAXIWA3");
  Shortcut.SetDropoffPointForMission(-1020.8, 191.1, 10.5, 350.0);


  $.counter_taxiwar = 0;
  $.dead_taxicab1 = 0;
  $.dead_taxicab2 = 0;
  $.dead_taxicab3 = 0;
  $.dead_taxicab4 = 0;
  $.dead_taxicab5 = 0;
  $.dead_taxicab6 = 0;


  $.cab1_obj_set = 0;
  $.cab2_obj_set = 0;
  $.cab3_obj_set = 0;
  $.cab4_obj_set = 0;
  $.cab5_obj_set = 0;
  $.cab6_obj_set = 0;
  king_cab_obj_set = 0;
  Close_cab_gate = 0;
  kingcab_man_goes_radge = 0;


  Audio.LoadMissionAudio(1, "TAX3_1" as any);
  Audio.LoadMissionAudio(2, "TAX3_2" as any);


  while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
  }


  Audio.PlayMissionAudio(1);
  Text.PrintNow("TAX3_1", 4500, 1);


  await asyncWait(500);


  TIMERA = 0;


  while (!(TIMERA > 4000)) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → skip_passed_taxi3_cut (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_passed_taxi3_cut"); // fallback: would break linear control flow
    }


  }


  Audio.PlayMissionAudio(2);
  Text.PrintNow("TAX3_2", 3000, 1);


  TIMERA = 0;


  while (!(TIMERA > 3000)) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → skip_passed_taxi3_cut (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_passed_taxi3_cut"); // fallback: would break linear control flow
    }


  }
}



async function skip_passed_taxi3_cut() {


  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  Camera.RestoreJumpcut();
  Audio.ClearMissionAudio(1);
  Audio.ClearMissionAudio(2);


  Streaming.RequestModel(taxi);
  Streaming.RequestModel(WMOCA);
  Streaming.RequestModel(zebra);
  Streaming.RequestModel(kaufman);
  Streaming.RequestModel(katana);


  while (!(Streaming.HasModelLoaded(taxi)) || !(Streaming.HasModelLoaded(WMOCA)) || !(Streaming.HasModelLoaded(zebra)) || !(Streaming.HasModelLoaded(kaufman)) || !(Streaming.HasModelLoaded(katana))) {
    await asyncWait(0);


  }

  // START OF MISSION


  Audio.LoadMissionAudio(1, "TAX3_3" as any);
  Audio.LoadMissionAudio(2, "TAX3_4" as any);


  Text.PrintNow("TAXW3_1", 10000, 1); //KILL THE CABS


  $.blip1_taxicab1 = Blip.AddForCoord(-1094.0, -1292.0, 10.5);


  while (!($.player1.locateStoppedAnyMeans3D(-1094.0, -1292.0, 10.5, 3.0, 4.0, 4.0, true /* TRUE */)) || !($.player1.isInModel(kaufman)) || !($.player1.isPressingHorn())) {
    await asyncWait(0);
    if ($.player1.isInModel(kaufman)) {
      $.players_cab = $.player1.storeCarIsIn();
    }
    else {
      Text.PrintNow("TAXW1_5", 1000, 1); //You need to be in a Kaufman cab!
    }
    if ($.player1.locateStoppedAnyMeans3D(-1094.0, -1292.0, 10.5, 3.0, 4.0, 4.0, true /* TRUE */) && $.player1.isInModel(kaufman)) {
      Text.PrintNow("HORN", 1000, 1);
    }


  }


  if (!(Car.IsDead($.players_cab))) {
    $.players_cab.lockDoors(4 /* CARLOCK_LOCKED_PLAYER_INSIDE */);
  }


  $.blip1_taxicab1.remove();


  World.ClearArea(-989.9, -1252.2, 10.4, 50.0, true /* TRUE */);


  $.taxicab1 = Car.Create(taxi, -983.5, -1248.9, 10.5);
  $.taximan1 = Char.CreateInsideCar($.taxicab1, 4 /* PEDTYPE_CIVMALE */, WMOCA);
  $.blip1_taxicab1 = Blip.AddForCar($.taxicab1);
  $.taxicab1.setHeading(70.0);
  $.taxicab1.setCruiseSpeed(0.0);
  $.taxicab1.setDrivingStyle(0);
  $.taximan1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.taxicab1.setStraightLineDistance(255);


  $.taxicab2 = Car.Create(taxi, -976.1, -1251.7, 10.5);
  $.taximan2 = Char.CreateInsideCar($.taxicab2, 4 /* PEDTYPE_CIVMALE */, WMOCA);
  $.blip2_taxicab2 = Blip.AddForCar($.taxicab2);
  $.taxicab2.setHeading(70.0);
  $.taxicab2.setCruiseSpeed(0.0);
  $.taxicab2.setDrivingStyle(0);
  $.taximan2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.taxicab2.setStraightLineDistance(255);


  $.taxicab3 = Car.Create(taxi, -970.5, -1253.6, 10.5);
  $.taximan3 = Char.CreateInsideCar($.taxicab3, 4 /* PEDTYPE_CIVMALE */, WMOCA);
  $.blip3_taxicab3 = Blip.AddForCar($.taxicab3);
  $.taxicab3.setHeading(70.0);
  $.taxicab3.setCruiseSpeed(0.0);
  $.taxicab3.setDrivingStyle(0);
  $.taximan3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.taxicab3.setStraightLineDistance(255);


  $.taxicab4 = Car.Create(taxi, -964.9, -1255.8, 10.5);
  $.taximan4 = Char.CreateInsideCar($.taxicab4, 4 /* PEDTYPE_CIVMALE */, WMOCA);
  $.blip4_taxicab4 = Blip.AddForCar($.taxicab4);
  $.taxicab4.setHeading(70.0);
  $.taxicab4.setCruiseSpeed(0.0);
  $.taxicab4.setDrivingStyle(0);
  $.taximan4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.taxicab4.setStraightLineDistance(255);


  $.taxicab5 = Car.Create(taxi, -959.0, -1257.9, 10.5);
  $.taximan5 = Char.CreateInsideCar($.taxicab5, 4 /* PEDTYPE_CIVMALE */, WMOCA);
  $.blip5_taxicab5 = Blip.AddForCar($.taxicab5);
  $.taxicab5.setHeading(70.0);
  $.taxicab5.setCruiseSpeed(0.0);
  $.taxicab5.setDrivingStyle(0);
  $.taximan5.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.taxicab5.setStraightLineDistance(255);


  $.taxicab6 = Car.Create(taxi, -951.6, -1261.1, 10.5);
  $.taximan6 = Char.CreateInsideCar($.taxicab6, 4 /* PEDTYPE_CIVMALE */, WMOCA);
  $.blip6_taxicab6 = Blip.AddForCar($.taxicab6);
  $.taxicab6.setHeading(70.0);
  $.taxicab6.setCruiseSpeed(0.0);
  $.taxicab6.setDrivingStyle(0);
  $.taximan6.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.taxicab6.setStraightLineDistance(255);


  await asyncWait(500);


  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);


  Camera.SetFixedPosition(-1089.808, -1286.083, 13.512, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-1090.248, -1286.970, 13.374, 2 /* JUMP_CUT */);


  await asyncWait(2000);


  Camera.SetFixedPosition(-1098.031, -1296.028, 14.583, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-1097.359, -1295.294, 14.484, 2 /* JUMP_CUT */);


  if (Audio.HasMissionAudioLoaded(1)) {
    Audio.PlayMissionAudio(1);
    Text.PrintNow("TAX3_3", 4000, 1);
  }


  await asyncWait(2000);


  Camera.SetFixedPosition(-989.263, -1239.276, 10.429, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-989.007, -1240.218, 10.646, 2 /* JUMP_CUT */);


  TIMERB = 0;


  if (!(Car.IsDead($.taxicab1))) {
    $.taxicab1.setCruiseSpeed(30.0);
    $.taxicab1.gotoCoordinates(-1065.6, -1224.2, 10.5);
  }


  if (!(Car.IsDead($.taxicab2))) {
    $.taxicab2.setCruiseSpeed(28.0);
    $.taxicab2.gotoCoordinates(-1065.6, -1224.2, 10.5);
  }


  if (!(Car.IsDead($.taxicab3))) {
    $.taxicab3.setCruiseSpeed(26.0);
    $.taxicab3.gotoCoordinates(-1065.6, -1224.2, 10.5);
  }


  if (!(Car.IsDead($.taxicab4))) {
    $.taxicab4.setCruiseSpeed(24.0);
    $.taxicab4.gotoCoordinates(-1065.6, -1224.2, 10.5);
  }


  if (!(Car.IsDead($.taxicab5))) {
    $.taxicab5.setCruiseSpeed(22.0);
    $.taxicab5.gotoCoordinates(-1065.6, -1224.2, 10.5);
  }


  if (!(Car.IsDead($.taxicab6))) {
    $.taxicab6.setCruiseSpeed(19.0);
    $.taxicab6.gotoCoordinates(-1065.6, -1224.2, 10.5);
  }


  while (!(TIMERB > 10000)) {
    await asyncWait(0);
    if (!(Car.IsDead($.taxicab1))) {
      if ($.taxicab1.locate3D(-1065.6, -1224.2, 10.5, 6.0, 6.0, 5.0, false /* FALSE */)) {
        $.taxicab1.gotoCoordinates(-1096.0, -1253.0, 10.5);
      }
    }
    if (!(Car.IsDead($.taxicab2))) {
      if ($.taxicab2.locate3D(-1065.6, -1224.2, 10.5, 6.0, 6.0, 5.0, false /* FALSE */)) {
        $.taxicab2.gotoCoordinates(-1090.1, -1257.2, 10.5);
      }
    }
    if (!(Car.IsDead($.taxicab3))) {
      if ($.taxicab3.locate3D(-1065.6, -1224.2, 10.5, 6.0, 6.0, 5.0, false /* FALSE */)) {
        $.taxicab3.gotoCoordinates(-1083.4, -1258.8, 10.5);
      }
    }
    if (!(Car.IsDead($.taxicab4))) {
      if ($.taxicab4.locate3D(-1065.6, -1224.2, 10.5, 6.0, 6.0, 5.0, false /* FALSE */)) {
        $.taxicab4.gotoCoordinates(-1075.7, -1261.5, 10.5);
      }
    }
    if (!(Car.IsDead($.taxicab5))) {
      if ($.taxicab5.locate3D(-1065.6, -1224.2, 10.5, 6.0, 6.0, 5.0, false /* FALSE */)) {
        $.taxicab5.gotoCoordinates(-1067.4, -1264.3, 10.5);
      }
    }
    if (!(Car.IsDead($.taxicab6))) {
      if ($.taxicab6.locate3D(-1065.6, -1224.2, 10.5, 6.0, 6.0, 5.0, false /* FALSE */)) {
        $.taxicab6.gotoCoordinates(-1060.7, -1266.1, 10.5);
      }
    }
    if (TIMERB > 2500) {
      Camera.SetFixedPosition(-1107.913, -1266.256, 12.023, 0.0, 0.0, 0.0);
      Camera.PointAtPoint(-1107.038, -1265.790, 11.892, 2 /* JUMP_CUT */);
    }


  }




  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  Camera.RestoreJumpcut();
  Camera.SetBehindPlayer();


  $.countdown_taxiwar = 61000;
  Hud.DisplayTimer($.$id.countdown_taxiwar, TIMER_DOWN);


  Text.PrintNow("TAXW3_2", 8000, 1); //KILL THE CABS


  if (!(Car.IsDead($.players_cab))) {
    $.players_cab.lockDoors(1 /* CARLOCK_UNLOCKED */);
  }


  await asyncWait(1000);


  while (!($.countdown_taxiwar < 1) && !($.counter_taxiwar == 6)) {
    await asyncWait(0);
    if (Car.IsDead($.taxicab1) && $.dead_taxicab1 == 0) {
      $.blip1_taxicab1.remove();
      $.dead_taxicab1 = 1;
      ++$.counter_taxiwar;
    }


    if (!(Car.IsDead($.taxicab1))) {
      //IF NOT IS_CAR_HEALTH_GREATER taxicab1 999
      if ($.cab1_obj_set == 0) {
        if (!(Char.IsDead($.taximan1))) {
          if ($.taximan1.isInCar($.taxicab1)) {
            $.taxicab1.setCruiseSpeed(40.0);
            $.taxicab1.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
            $.taxicab1.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
            $.cab1_obj_set = 1;
          }
        }
      }
      //ENDIF

    }
    else {
      $.blip1_taxicab1.remove();
    }


    if (Car.IsDead($.taxicab2) && $.dead_taxicab2 == 0) {
      $.blip2_taxicab2.remove();
      $.dead_taxicab2 = 1;
      ++$.counter_taxiwar;
    }


    if (!(Car.IsDead($.taxicab2))) {
      //IF NOT IS_CAR_HEALTH_GREATER taxicab2 999
      if ($.cab2_obj_set == 0) {
        if (!(Char.IsDead($.taximan2))) {
          if ($.taximan2.isInCar($.taxicab2)) {
            $.taxicab2.setCruiseSpeed(40.0);
            $.taxicab2.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
            $.taxicab2.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
            $.cab2_obj_set = 1;
          }
        }
      }
      //ENDIF

    }
    else {
      $.blip2_taxicab2.remove();
    }


    if (Car.IsDead($.taxicab3) && $.dead_taxicab3 == 0) {
      $.blip3_taxicab3.remove();
      $.dead_taxicab3 = 1;
      ++$.counter_taxiwar;
    }


    if (!(Car.IsDead($.taxicab3))) {
      //IF NOT IS_CAR_HEALTH_GREATER taxicab3 999
      if ($.cab3_obj_set == 0) {
        if (!(Char.IsDead($.taximan3))) {
          if ($.taximan3.isInCar($.taxicab3)) {
            $.taxicab3.setCruiseSpeed(40.0);
            $.taxicab3.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
            $.taxicab3.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
            $.cab3_obj_set = 1;
          }
        }
      }
      //ENDIF

    }
    else {
      $.blip3_taxicab3.remove();
    }


    if (Car.IsDead($.taxicab4) && $.dead_taxicab4 == 0) {
      $.blip4_taxicab4.remove();
      $.dead_taxicab4 = 1;
      ++$.counter_taxiwar;
    }


    if (!(Car.IsDead($.taxicab4))) {
      //IF NOT IS_CAR_HEALTH_GREATER taxicab4 999
      if ($.cab4_obj_set == 0) {
        if (!(Char.IsDead($.taximan4))) {
          if ($.taximan4.isInCar($.taxicab4)) {
            $.taxicab4.setCruiseSpeed(40.0);
            $.taxicab4.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
            $.taxicab4.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
            $.cab4_obj_set = 1;
          }
        }
      }
      //ENDIF

    }
    else {
      $.blip4_taxicab4.remove();
    }


    if (Car.IsDead($.taxicab5) && $.dead_taxicab5 == 0) {
      $.blip5_taxicab5.remove();
      $.dead_taxicab5 = 1;
      ++$.counter_taxiwar;
    }


    if (!(Car.IsDead($.taxicab5))) {
      //IF NOT IS_CAR_HEALTH_GREATER taxicab5 999
      if ($.cab5_obj_set == 0) {
        if (!(Char.IsDead($.taximan5))) {
          if ($.taximan5.isInCar($.taxicab5)) {
            $.taxicab5.setCruiseSpeed(40.0);
            $.taxicab5.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
            $.taxicab5.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
            $.cab5_obj_set = 1;
          }
        }
      }
      //ENDIF

    }
    else {
      $.blip5_taxicab5.remove();
    }


    if (Car.IsDead($.taxicab6) && $.dead_taxicab6 == 0) {
      $.blip6_taxicab6.remove();
      $.dead_taxicab6 = 1;
      ++$.counter_taxiwar;
    }
    if (!(Car.IsDead($.taxicab6))) {
      //IF NOT IS_CAR_HEALTH_GREATER taxicab5 999
      if ($.cab6_obj_set == 0) {
        if (!(Char.IsDead($.taximan6))) {
          if ($.taximan6.isInCar($.taxicab6)) {
            $.taxicab6.setCruiseSpeed(30.0);
            $.taxicab6.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
            $.taxicab6.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
            $.cab6_obj_set = 1;
          }
        }
      }
      //ENDIF

    }
    else {
      $.blip6_taxicab6.remove();
    }
    if (Close_cab_gate == 0) {
      Sound.AddOneOffSound(-989.9, -1252.2, 10.4, SOUND_POLICE_CELL_DOOR_CLUNK);
      $.gate_slide_loop = Sound.AddContinuous(-989.9, -1252.2, 10.4, SOUND_POLICE_CELL_DOOR_SLIDING_LOOP);
      while (!($.cabmagedon_gate.slide(-986.272, -1243.532, 10.4, 0.05, 0.12, 0.0, false /* FALSE */))) {
        await asyncWait(0);
      }
      $.gate_slide_loop.remove();
      Sound.AddOneOffSound(-986.272, -1243.532, 10.4, SOUND_POLICE_CELL_DOOR_CLUNK);
      Close_cab_gate = 1;


    }


  }


  if (!(Car.IsDead($.taxicab1))) {
    $.taxicab1.setCruiseSpeed(0.0);
  }


  if (!(Car.IsDead($.taxicab2))) {
    $.taxicab2.setCruiseSpeed(0.0);
  }


  if (!(Car.IsDead($.taxicab3))) {
    $.taxicab3.setCruiseSpeed(0.0);
  }


  if (!(Car.IsDead($.taxicab4))) {
    $.taxicab4.setCruiseSpeed(0.0);
  }


  if (!(Car.IsDead($.taxicab5))) {
    $.taxicab5.setCruiseSpeed(0.0);
  }


  if (!(Car.IsDead($.taxicab6))) {
    $.taxicab6.setCruiseSpeed(0.0);
  }


  $.blip1_taxicab1.remove();
  $.blip2_taxicab2.remove();
  $.blip3_taxicab3.remove();
  $.blip4_taxicab4.remove();
  $.blip5_taxicab5.remove();
  $.blip6_taxicab6.remove();


  $.taxicab1.markAsNoLongerNeeded();
  $.taxicab2.markAsNoLongerNeeded();
  $.taxicab3.markAsNoLongerNeeded();
  $.taxicab4.markAsNoLongerNeeded();
  $.taxicab5.markAsNoLongerNeeded();
  $.taxicab6.markAsNoLongerNeeded();
  $.taximan1.markAsNoLongerNeeded();
  $.taximan2.markAsNoLongerNeeded();
  $.taximan3.markAsNoLongerNeeded();
  $.taximan4.markAsNoLongerNeeded();
  $.taximan5.markAsNoLongerNeeded();
  $.taximan6.markAsNoLongerNeeded();
  Streaming.MarkModelAsNoLongerNeeded(taxi);


  Hud.ClearTimer($.$id.countdown_taxiwar);


  $.eviltaxi = Car.Create(zebra, -983.5, -1248.9, 10.4);
  kingcab_man = Char.CreateInsideCar($.eviltaxi, 4 /* PEDTYPE_CIVMALE */, WMOCA);


  $.eviltaxi.setHealth(2000);
  $.eviltaxi.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
  kingcab_man.setHealth(300);
  $.eviltaxi.setHeading(66.0);
  $.eviltaxi.setCruiseSpeed(0.0);
  $.eviltaxi.setDrivingStyle(0);
  kingcab_man.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //SET_CAR_HEALTH eviltaxi 600

  $.eviltaxi.setStraightLineDistance(255);


  await asyncWait(500);


  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);



  if ($.player1.locateAnyMeans3D(-998.5, -1243.2, 10.5, 10.0, 10.0, 4.0, false /* FALSE */)) {
    $.player1.setCoordinates(-1028.3, -1237.6, 10.5);
  }


  Camera.SetFixedPosition(-988.010, -1242.028, 10.362, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-987.595, -1242.919, 10.541, 2 /* JUMP_CUT */);


  World.ClearArea(-983.5, -1248.9, 10.4, 30.0, true /* TRUE */);


  await asyncWait(1000);


  Sound.AddOneOffSound(-986.272, -1243.532, 10.4, SOUND_POLICE_CELL_DOOR_CLUNK);
  $.gate_slide_loop = Sound.AddContinuous(-986.272, -1243.532, 10.4, SOUND_POLICE_CELL_DOOR_SLIDING_LOOP);


  while (!($.cabmagedon_gate.slide(-989.9, -1252.2, 10.4, 0.05, 0.12, 0.0, false /* FALSE */))) {
    await asyncWait(0);
  }


  $.gate_slide_loop.remove();
  Sound.AddOneOffSound(-989.9, -1252.2, 10.4, SOUND_POLICE_CELL_DOOR_CLUNK);



  if (Audio.HasMissionAudioLoaded(2)) {
    Audio.PlayMissionAudio(2);
    Text.PrintNow("TAX3_4", 4000, 1);
  }


  await asyncWait(3500);


  if (!(Car.IsDead($.eviltaxi))) {
    $.eviltaxi.setCruiseSpeed(30.0);
    $.eviltaxi.gotoCoordinates(-1017.4, -1235.7, 10.5);
  }


  await asyncWait(1000);


  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  Camera.RestoreJumpcut();
  Camera.SetBehindPlayer();


  Text.PrintNow("TAXW3_3", 8000, 1); //KILL THE CAB


  if (!(Char.IsDead(kingcab_man))) {
    $.blip_eviltaxi = Blip.AddForChar(kingcab_man);
  }


  Close_cab_gate = 0;


  while (!(Char.IsDead(kingcab_man))) {
    await asyncWait(0);
    if (!(Car.IsDead($.eviltaxi))) {
      if (!(Char.IsDead(kingcab_man))) {
        if (kingcab_man.isInCar($.eviltaxi)) {
          if (king_cab_obj_set == 0) {
            $.eviltaxi.setCruiseSpeed(40.0);
            $.eviltaxi.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
            $.eviltaxi.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
            king_cab_obj_set = 1;
          }
        }
      }
    }
    if (!($.player1.isInAnyCar())) {
      if (TIMERA > 6000) {
        if (!(Car.IsDead($.eviltaxi))) {
          $.eviltaxi.setTempAction(2 /* TEMPACT_REVERSE */, 2000);
          if (TIMERA > 8000) {
            TIMERA = 0;
          }
        }
      }
    }
    else {
      TIMERA = 0;
    }
    if (Close_cab_gate == 0) {
      Sound.AddOneOffSound(-989.9, -1252.2, 10.4, SOUND_POLICE_CELL_DOOR_CLUNK);
      $.gate_slide_loop = Sound.AddContinuous(-989.9, -1252.2, 10.4, SOUND_POLICE_CELL_DOOR_SLIDING_LOOP);
      while (!($.cabmagedon_gate.slide(-986.272, -1243.532, 10.4, 0.05, 0.12, 0.0, false /* FALSE */))) {
        await asyncWait(0);
      }
      $.gate_slide_loop.remove();
      Sound.AddOneOffSound(-986.272, -1243.532, 10.4, SOUND_POLICE_CELL_DOOR_CLUNK);
      Close_cab_gate = 1;


    }
    if (!(Car.IsDead($.eviltaxi))) {
      if (kingcab_man_goes_radge == 0) {
        if (!($.eviltaxi.isHealthGreater(250))) {
          if (!(Char.IsDead(kingcab_man))) {
            kingcab_man.setObjLeaveCar($.eviltaxi);
            kingcab_man.setPersonality(30 /* PEDSTAT_PSYCHO */);
            kingcab_man.giveWeapon(WEAPONTYPE_KATANA, 0);
            kingcab_man.setCurrentWeapon(WEAPONTYPE_KATANA);
            $.eviltaxi.lockDoors(1 /* CARLOCK_UNLOCKED */);
            while (kingcab_man.isInCar($.eviltaxi)) {
              await asyncWait(0);
              if (Char.IsDead(kingcab_man)) {
                // SCM GOTO → kingcab_man_dead (not lowered; manual jump required)
                throw new Error("unresolved GOTO kingcab_man_dead"); // fallback: would break linear control flow
              }
              if (Car.IsDead($.eviltaxi)) {
                // SCM GOTO → kingcab_man_dead (not lowered; manual jump required)
                throw new Error("unresolved GOTO kingcab_man_dead"); // fallback: would break linear control flow
              }


            }
            if (!(Char.IsDead(kingcab_man))) {
              kingcab_man.setObjKillCharOnFoot($.scplayer);
            }
          }
          kingcab_man_goes_radge = 1;
        }
      }
    }



  }
}



async function kingcab_man_dead() {


  await asyncWait(2000);


  $.taxifirm_cash_pickup = Pickup.CreateProtection($.taxicashX, $.taxicashY, $.taxicashZ, $.taxifirm_revenue, $.taxifirm_revenue);


  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);


  Camera.DoFade(500, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Streaming.LoadScene(-1017.904, 207.165, 15.090);
  Camera.SetFixedPosition(-1018.540, 207.931, 15.185, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-1017.904, 207.165, 15.090, 2 /* JUMP_CUT */);
  Camera.DoFade(500, 1 /* FADE_IN */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Audio.PlayMissionPassedTune(1);
  Text.PrintBig("TAX_AS1", 5000, 6); //CAR ASSET ACQUIRED


  await asyncWait(5000);
  Streaming.LoadScene(-1002.412, 192.715, 13.452);
  Camera.SetFixedPosition(-1003.200, 193.281, 13.694, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-1002.412, 192.715, 13.452, 2 /* JUMP_CUT */);
  Text.PrintWithNumberNow("TAX_AS2", $.taxifirm_revenue, 6000, 1); //CAR will now generate revenue upto a maximum of $~1~. Make sure you collect it regulary.


  await asyncWait(6000);
  Camera.DoFade(500, 0 /* FADE_OUT */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Streaming.LoadScene(-1119.7, -1381.3, 11.5);


  Camera.DoFade(500, 1 /* FADE_IN */);



  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  Camera.RestoreJumpcut();




  // SCM GOTO → mission_taxiwar3_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_taxiwar3_passed"); // fallback: would break linear control flow
}


// Mission taxi3 failed


async function onFailed() {
  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed"
}




// mission taxi3 passed


async function mission_taxiwar3_passed() {


  $.flag_taxiwar_mission3_passed = 1;
  Text.PrintWithNumberBig("M_PASS", 5000, 5000, 1); //"Mission Passed!"
  $.player1.clearWantedLevel();
  $.player1.addScore(5000);
  $.taxiwar_contact_blip.remove();
  $.taxibuy_blip.remove();
  $.taxiwar_contact_blip = Blip.AddShortRangeSpriteForCoord($.taxiwarX, $.taxiwarY, $.taxiwarZ, $.the_taxiwar_blip);
  $.gen_car1.switch(0);
  $.gen_car110.switch(101);
  $.taxifirm_asset_acquired = 1;
  ++$.counter_60_percent;
  Stat.RegisterMissionPassed("TAXI_3");
  Player.SetHasMetDebbieHarry(true /* TRUE */);
  Stat.PlayerMadeProgress(1);
}




// mission cleanup


async function cleanup() {


  ONMISSION = 0;
  $.timer_mobile_start = Clock.GetGameTimer();
  $.blip1_taxicab1.remove();
  $.blip2_taxicab2.remove();
  $.blip3_taxicab3.remove();
  $.blip4_taxicab4.remove();
  $.blip5_taxicab5.remove();
  $.blip6_taxicab6.remove();
  $.blip_eviltaxi.remove();
  Streaming.MarkModelAsNoLongerNeeded(taxi);
  Streaming.MarkModelAsNoLongerNeeded(WMOCA);
  Streaming.MarkModelAsNoLongerNeeded(kaufman);
  Streaming.MarkModelAsNoLongerNeeded(zebra);
  Streaming.MarkModelAsNoLongerNeeded(katana);
  Hud.ClearTimer($.$id.countdown_taxiwar);
  $.flag_taxi1_mission_launched = 0;
  $.cabmagedon_gate.delete();
  if (!(Car.IsDead($.eviltaxi))) {
    $.eviltaxi.lockDoors(1 /* CARLOCK_UNLOCKED */);
  }
  $.cabmagedon_gate = ScriptObject.CreateNoOffset(1278 /* electricgate */, -989.9, -1252.2, 10.4);
  $.cabmagedon_gate.setHeading(249.0);
  $.cabmagedon_gate.dontRemove();
  Audio.ClearMissionAudio(1);
  Audio.ClearMissionAudio(2);
  Mission.Finish();
}

export async function taxiwar3() {
  // Mission start stuff


  await body();  // SCM GOSUB mission_start_taxiwar3


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await onFailed();  // SCM GOSUB mission_taxiwar3_failed
  }


  await cleanup();  // SCM GOSUB mission_cleanup_taxiwar3



  // Variables for mission



  // LVAR_INT kingcab_man king_cab_obj_set taxiwar_cash_pickup Close_cab_gate kingcab_man_goes_radge

  // ***************************************Mission Start*************************************


}
