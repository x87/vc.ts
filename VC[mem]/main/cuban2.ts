// Generated from main/cuban2.sc

import { $ } from "../utils/vars.mts";

async function mission_start_cuban2() {
  Text.ClearThisPrint("M_FAIL");
  ONMISSION = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  Text.LoadMissionText("CUBAN2");
  Shortcut.SetDropoffPointForMission(-1173.5, -599.6, 10.2, 277.1);
  // *****************************************Set Flags/variables************************************

  $.maxcubans_in_car = 0;
  $.cubans_in_cars = 0;
  $.car_emptied = 0;
  $.flag_player_not_in_cuban_carry_car = 0;
  $.flag_cuban_carry_car_upsidedown = 0;
  $.cuban1_in = 0;
  $.cuban2_in = 0;
  $.cuban3_in = 0;
  $.cuban4_in = 0;
  $.cuban5_in = 0;
  $.cuban6_in = 0;
  $.haitians_doubled_flag = 0;
  $.creating_flag = 0;
  $.number_of_haitians_dead = 0;
  $.completed_goal_flag = 0;
  $.cub2_waiving_flag = 0;
  $.cubans_out_of_car = 0;
  $.cuban_crouch1 = 0;
  $.cuban_crouch3 = 0;
  $.blob_flag = 0;
  $.ped_density_flag = 0;
  $.hait_heading1 = 0;
  $.hait_heading2 = 0;
  $.hait_heading3 = 0;
  $.hait_heading4 = 0;
  $.hait_heading5 = 0;
  $.fire_car_flag = 0;


  $.cuban_attacker_doingstuff1 = 0;
  $.cuban_attacker_doingstuff2 = 0;
  $.cuban_attacker_doingstuff3 = 0;


  $.cuban_flag1 = 1;


  $.haitian1x = -1115.8;
  $.haitian1y = 61.7;
  $.haitian2x = -1115.7;
  $.haitian2y = 61.7;
  $.haitian3x = -1115.8;
  $.haitian3y = 77.2;
  $.haitian4x = -1139.3;
  $.haitian4y = 74.6;
  $.haitian5x = -1139.3;
  $.haitian5y = 67.0;
  $.haitian_z = 10.1;
  $.hd1_heading = 270.0;
  $.hd2_heading = 272.0;
  $.hd3_heading = 272.2;
  $.hd4_heading = 298.0;
  $.hd5_heading = 263.6;


  $.cuban_carry_car_old = 0;
  $.play_cub2_mission_audio = 0;


  $.cub2_cubans_killed1 = 0;
  $.cub2_cubans_killed2 = 0;
  $.body_count_cub2 = 0;
  $.telling_guys_to_move = 0;
  $.sniper_shot = 0;


  // ****************************************START OF CUTSCENE********************************

  Streaming.SetAreaVisible(7 /* VIS_COFFEE_SHOP */);
  World.ClearAreaOfChars(-1174.8, -609.0, 10.4, -116.3, -632.5, 15.3);
  World.SetCarDensityMultiplier(0.0);
  World.SetPedDensityMultiplier(0.0);


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSpablo");
  Streaming.LoadSpecialCharacter(3, "CSpapa");
  Streaming.LoadSpecialCharacter(4, "CSpepe");
  Streaming.LoadSpecialCharacter(5, "CSumbto");


  Streaming.LoadSpecialModel(CUTOBJ01, "ccfan");


  Streaming.LoadScene(-1169.0, -620.0, 10.791);
  World.ClearArea(-1170.708, -608.327, 10.791, 5.0, true /* TRUE */);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasSpecialCharacterLoaded(4)) || !(Streaming.HasSpecialCharacterLoaded(5))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(CUTOBJ01))) {
    await asyncWait(0);
  }


  Cutscene.Load("cub_2");
  Cutscene.SetOffset(-1170.708, -608.327, 10.791);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_pablo = CutsceneObject.Create(SPECIAL02);
  $.cs_pablo.setAnim("CSpablo");


  $.cs_papa = CutsceneObject.Create(SPECIAL03);
  $.cs_papa.setAnim("CSpapa");


  $.cs_pepe = CutsceneObject.Create(SPECIAL04);
  $.cs_pepe.setAnim("CSpepe");


  $.cs_umbto = CutsceneObject.Create(SPECIAL05);
  $.cs_umbto.setAnim("CSumbto");


  $.cc_fan1 = CutsceneObject.Create(CUTOBJ01);
  Cutscene.SetAnimToLoop("ccfan");
  $.cc_fan1.setAnim("ccfan");


  World.ClearArea(-1170.9, -603.7, 10.6, 1.0, true /* TRUE */);
  $.player1.setCoordinates(-1170.9, -603.7, 10.6);
  $.player1.setHeading(15.3);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 33) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB2_A", 10000, 1); // Une cafecito, por favor, Alberto..


  while ($.cs_time < 1457) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB2_N", 10000, 1); // No problem Tommy


  while ($.cs_time < 2467) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB2_B", 10000, 1); // Poppa! Una grande problema!


  while ($.cs_time < 4466) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB2_O", 10000, 1); // Umberto my son, what happened?


  while ($.cs_time < 5642) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB2_C", 10000, 1); // The Haitians! I hate these Haitians!


  while ($.cs_time < 9437) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB2_D", 10000, 1); // They mess with me, they mess with me for the last time!


  while ($.cs_time < 11602) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB2_E", 10000, 1); // We take them out!


  while ($.cs_time < 13786) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB2_F", 10000, 1); // Only we need some backup.


  while ($.cs_time < 15750) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB2_G", 10000, 1); // I lost a few of ermanos already out there.


  while ($.cs_time < 18171) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB2_H", 10000, 1); // Amigo, you drive good!


  while ($.cs_time < 19840) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB2_I", 10000, 1); //For a woman.


  while ($.cs_time < 21118) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB2_J", 10000, 1); //This is no time for joking!


  while ($.cs_time < 22511) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB2_K", 10000, 1); //Come on, drive for me again!


  while ($.cs_time < 24770) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB2_L", 10000, 1); //Take my boys over there, and then we'll take those Haitians down!


  while ($.cs_time < 27856) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB2_M", 10000, 1); //They mess with me, and they mess with the biggest boy in town!
  /*
  WHILE cs_time < 29856
  WAIT 0
  GET_CUTSCENE_TIME cs_time
  ENDWHILE

  CLEAR_PRINTS
  */

  while ($.cs_time < 32000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Camera.DoFade(1500, 0 /* FADE_OUT */);


  Text.ClearPrints();


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);
  Streaming.UnloadSpecialCharacter(5);


  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);
  World.SetCarDensityMultiplier(1.0);
  World.SetPedDensityMultiplier(1.0);


  $.free_scope = Pickup.CreateWithAmmo(laser, 3 /* PICKUP_ONCE */, 6, -1129.9, 66.3, 11.0);
  Streaming.SetAreaVisible(0 /* VIS_MAIN_MAP */);
  $.flag_player_in_cafe = 0;
  // ******************************************END OF CUTSCENE********************************

  Camera.SetFadingColor(0, 0, 0);
  await asyncWait(500);
  Camera.SetBehindPlayer();
  //------------------REQUEST_MODELS ------------------------------

  $.player1.setMood(1 /* PLAYER_MOOD_PISSED_OFF */, 60000);
  Game.SetWantedMultiplier(0.2);


  Game.SetThreatForPedType(8 /* PEDTYPE_GANG_HAITIAN */, 1 /* THREAT_PLAYER1 */);


  Streaming.RequestModel(CBa);
  Streaming.RequestModel(HNa);
  Streaming.RequestModel(CBb);
  Streaming.RequestModel(HNb);
  Streaming.RequestModel(WMOCA);
  Streaming.RequestModel(cellphone);


  Streaming.RequestModel(stinger);
  Streaming.RequestModel(uzi);
  Streaming.RequestModel(pony);
  Streaming.RequestModel(7 /* sniper */);
  Streaming.RequestModel(m4);
  Streaming.RequestModel(taxi);


  while (!(Streaming.HasModelLoaded(CBa)) || !(Streaming.HasModelLoaded(HNa)) || !(Streaming.HasModelLoaded(CBb)) || !(Streaming.HasModelLoaded(HNb)) || !(Streaming.HasModelLoaded(WMOCA)) || !(Streaming.HasModelLoaded(cellphone))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(stinger)) || !(Streaming.HasModelLoaded(uzi)) || !(Streaming.HasModelLoaded(pony)) || !(Streaming.HasModelLoaded(7 /* sniper */)) || !(Streaming.HasModelLoaded(m4)) || !(Streaming.HasModelLoaded(taxi))) {
    await asyncWait(0);
  }


  Audio.LoadMissionAudio(1, "CUB2_1" as any);
  Audio.LoadMissionAudio(2, "CUB2_2" as any);


  while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
  }



  Camera.DoFade(1500, 1 /* FADE_IN */);
  //cheating the compilier into thinking i have created something which i havent (so it can be used later)

  if (ONMISSION == 0) {
    $.haitian_defender1 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, $.haitian1x, $.haitian1y, $.haitian_z);
    $.haitian_defender2 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, $.haitian2x, $.haitian2y, $.haitian_z);
    $.haitian_defender3 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, $.haitian3x, $.haitian3y, $.haitian_z);
    $.haitian_defender4 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, $.haitian4x, $.haitian4y, $.haitian_z);
    $.haitian_defender5 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, $.haitian5x, $.haitian5y, $.haitian_z);
    $.haitian_defender6 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, $.haitian5x, $.haitian5y, $.haitian_z);
    $.haitian_defender7 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, $.haitian5x, $.haitian5y, $.haitian_z);
    $.haitian_defender8 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, $.haitian5x, $.haitian5y, $.haitian_z);
    $.haitian_defender9 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, $.haitian5x, $.haitian5y, $.haitian_z);
    $.haitian_defender10 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, $.haitian5x, $.haitian5y, $.haitian_z);
    $.cuban_carry_car = $.player1.storeCarIsIn();
    $.radar_blip_cuban_carry_car = Blip.AddForCar($.cuban_carry_car);
  }

  //opening haitian gate
  //andy_has_control = 1

  while (!($.haitian_gate.slide(-1114.5, 73.0, 10.1, 10.0, 10.0, 0.0, false /* FALSE */))) {
    await asyncWait(0);
  }



  Text.PrintNow("CUB2_03", 5000, 1); //Get a car and pick up the cubans from outside Robina's Cafe.

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////picking up first set of cubans//////////////////////////////////////////////////////////////////

  //Collecting Cubans to drive to Haitian Base

  $.cuban_pickup1 = Char.Create(7 /* PEDTYPE_GANG_CUBAN */, CBa, -1171.2, -608.7, 10.8);
  $.cuban_pickup1.setHeading(181.1);
  $.cuban_pickup1.giveWeapon(23 /* WEAPONTYPE_uzi */, 30000);
  $.cuban_pickup1.addArmor(100);
  $.cuban_pickup1.clearThreatSearch();
  $.cuban_pickup1.setStopShootDontSeekEntity(true /* TRUE */);
  $.cuban_pickup1.setOnlyDamagedByPlayer(true /* TRUE */);
  $.cuban_pickup1.setCantBeDraggedOut(true /* TRUE */);
  $.cuban_pickup1.setAsPlayerFriend($.player1, true /* TRUE */);
  $.cuban_pickup1.setStayInCarWhenJacked(true /* TRUE */);
  $.cuban_pickup1.setHeedThreats(true /* TRUE */);
  $.cuban_pickup1.setNeverTargeted(true /* TRUE */);


  $.cuban_pickup2 = Char.Create(7 /* PEDTYPE_GANG_CUBAN */, CBa, -1169.9, -609.0, 10.8);
  $.cuban_pickup2.setHeading(181.1);
  $.cuban_pickup2.giveWeapon(23 /* WEAPONTYPE_uzi */, 30000);
  $.cuban_pickup2.addArmor(100);
  $.cuban_pickup2.clearThreatSearch();
  $.cuban_pickup2.setStopShootDontSeekEntity(true /* TRUE */);
  $.cuban_pickup2.setOnlyDamagedByPlayer(true /* TRUE */);
  $.cuban_pickup2.setCantBeDraggedOut(true /* TRUE */);
  $.cuban_pickup2.setAsPlayerFriend($.player1, true /* TRUE */);
  $.cuban_pickup2.setStayInCarWhenJacked(true /* TRUE */);
  $.cuban_pickup2.setHeedThreats(true /* TRUE */);
  $.cuban_pickup2.setNeverTargeted(true /* TRUE */);


  $.cuban_pickup3 = Char.Create(7 /* PEDTYPE_GANG_CUBAN */, CBa, -1169.9, -610.0, 10.8);
  $.cuban_pickup3.giveWeapon(23 /* WEAPONTYPE_uzi */, 30000);
  $.cuban_pickup3.addArmor(100);
  $.cuban_pickup3.clearThreatSearch();
  $.cuban_pickup3.setStopShootDontSeekEntity(true /* TRUE */);
  $.cuban_pickup3.setOnlyDamagedByPlayer(true /* TRUE */);
  $.cuban_pickup3.setCantBeDraggedOut(true /* TRUE */);
  $.cuban_pickup3.setAsPlayerFriend($.player1, true /* TRUE */);
  $.cuban_pickup3.setStayInCarWhenJacked(true /* TRUE */);
  $.cuban_pickup3.setHeedThreats(true /* TRUE */);
  $.cuban_pickup3.setNeverTargeted(true /* TRUE */);


  Game.SetCharsChatting($.cuban_pickup2, $.cuban_pickup3, 86400000);
  $.crappy_car = Car.Create(pony, -1071.3, -608.4, 9.7);

  //getting a car to pick up boxers


  $.cuban_pickup_blip = Blip.AddForCoord(-1168.5, -599.6, 10.6);


  TIMERA = 0;
}

async function first_cuban_pickup() {


  await asyncWait(0);


  while (!($.player1.locateStoppedInCar3D(-1168.5, -599.6, 10.6, 5.0, 5.0, 10.0, true /* TRUE */)) || !($.player1.isSittingInAnyCar())) {
    await asyncWait(0);
    if (Char.IsDead($.cuban_pickup1) || Char.IsDead($.cuban_pickup2) || Char.IsDead($.cuban_pickup3)) {
      await nutters();  // SCM GOSUB nutters
      Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
      // SCM GOTO → mission_failed_cuban2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_cuban2"); // fallback: would break linear control flow
    }
    if (TIMERA > 6000) {
      if ($.player1.locateOnFoot3D(-1168.5, -599.6, 10.6, 5.0, 5.0, 10.0, false /* FALSE */)) {
        Text.PrintNow("CUB2_18", 5000, 1); //Get a car and pick up the cubans.
      }
      else {
        Text.ClearThisPrint("CUB2_18");
      }
    }
  }


  $.crappy_car.markAsNoLongerNeeded();
  $.cuban_carry_car = $.player1.storeCarIsIn();


  if ($.cuban_carry_car == $.cuban_carry_car_old) {
    $.play_cub2_mission_audio = 0;
  }
  else {
    $.play_cub2_mission_audio = 1;
  }


  $.cuban_carry_car_old = $.cuban_carry_car;


  $.maxcubans_in_car = $.cuban_carry_car.getMaximumNumberOfPassengers();


  if (!($.maxcubans_in_car > 2)) {
    Text.PrintNow("CUB2_01", 5000, 1); //Not enough room man, need a bigger car.
    if (!(Char.IsDead($.cuban_pickup2))) {
      $.cuban_pickup2.setHeading(0.0);
    }
    if ($.play_cub2_mission_audio == 1) {
      Audio.LoadMissionAudio(1, "CUB2_1" as any);
      while (!(Audio.HasMissionAudioLoaded(1))) {
        await asyncWait(0);
      }
      Audio.PlayMissionAudio(1);
      while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.cuban_pickup2))) {
        await asyncWait(0);
      }
      Audio.ClearMissionAudio(1);
      Text.ClearThisPrint("CUB2_01");
    }
    if (!(Char.IsDead($.cuban_pickup2))) {
      $.cuban_pickup2.setHeading(181.0);
    }
    // SCM GOTO → first_cuban_pickup (not lowered; manual jump required)
    throw new Error("unresolved GOTO first_cuban_pickup"); // fallback: would break linear control flow
  }


  $.cuban_pickup_blip.remove();


  //getting cubans into car


  if (!(Car.IsDead($.cuban_carry_car))) {
    $.cuban_carry_car.lockDoors(4 /* CARLOCK_LOCKED_PLAYER_INSIDE */);
  }


  await asyncWait(500);

  // ****************************************START OF CUTSCENE -getting cubans into car********************************

  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);
  Game.SetPoliceIgnorePlayer($.player1, true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);


  Camera.SetFixedPosition(-1175.9, -608.1, 11.4, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-1147.9, -583.11, 16.1, 2 /* JUMP_CUT */);

  /*
  IF NOT IS_CHAR_DEAD cuban_pickup1
  IF NOT IS_CHAR_DEAD cuban_pickup2
  IF NOT IS_CHAR_DEAD cuban_pickup3
  SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY cuban_pickup1 FALSE
  SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY cuban_pickup2 FALSE
  SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY cuban_pickup3 FALSE
  ENDIF
  ENDIF
  ENDIF
  */


  TIMERB = 0;


  if (!(Car.IsDead($.cuban_carry_car))) {
    $.cuban_carry_car.lockDoors(1 /* CARLOCK_UNLOCKED */);
  }


  while (!($.cubans_in_cars == 3)) {
    await asyncWait(0);
    if (!(Car.IsDead($.cuban_carry_car))) {
      if (!(Char.IsDead($.cuban_pickup1))) {
        if ($.cuban1_in == 0) {
          $.cuban_pickup1.setCoordinates(-1169.9, -608.0, 10.8);
          $.cuban1_in = 1;
        }
        $.cuban_pickup1.setObjEnterCarAsPassenger($.cuban_carry_car);
        $.cuban_pickup1.setRunning(true /* TRUE */);
        if ($.cuban1_in == 1) {
          if ($.cuban_pickup1.isInCar($.cuban_carry_car)) {
            $.cubans_in_cars++;
            $.cuban1_in = 2;
          }
        }
      }
    }
    await asyncWait(800);
    if (!(Car.IsDead($.cuban_carry_car))) {
      if (!(Char.IsDead($.cuban_pickup2))) {
        if ($.cuban2_in == 0) {
          $.cuban_pickup2.setCoordinates(-1169.9, -608.0, 10.8);
          $.cuban2_in = 1;
        }
        $.cuban_pickup2.setObjEnterCarAsPassenger($.cuban_carry_car);
        $.cuban_pickup2.setRunning(true /* TRUE */);
        if ($.cuban2_in == 1) {
          if ($.cuban_pickup2.isInCar($.cuban_carry_car)) {
            $.cubans_in_cars++;
            $.cuban2_in = 2;
          }
        }
      }
    }
    await asyncWait(800);
    if (!(Car.IsDead($.cuban_carry_car))) {
      if (!(Char.IsDead($.cuban_pickup3))) {
        if ($.cuban3_in == 0) {
          $.cuban_pickup3.setCoordinates(-1169.9, -608.0, 10.8);
          $.cuban3_in = 1;
        }
        $.cuban_pickup3.setObjEnterCarAsPassenger($.cuban_carry_car);
        $.cuban_pickup3.setRunning(true /* TRUE */);
        if ($.cuban3_in == 1) {
          if ($.cuban_pickup3.isInCar($.cuban_carry_car)) {
            $.cubans_in_cars++;
            $.cuban3_in = 2;
          }
        }
      }
    }
    if (TIMERB > 2000) {
      if (!(Car.IsDead($.cuban_carry_car))) {
        if (!(Char.IsDead($.cuban_pickup1))) {
          if ($.cuban_pickup1.isInCar($.cuban_carry_car)) {
            $.cuban_pickup1.warpFromCarToCoord(-862.0, -607.4, 11.1);
            $.cuban_pickup1.markAsNoLongerNeeded();
          }
          else {
            $.cuban_pickup1.setCoordinates(-862.0, -607.7, 11.1);
            $.cuban_pickup1.markAsNoLongerNeeded();
          }
        }
        if (!(Char.IsDead($.cuban_pickup2))) {
          if ($.cuban_pickup2.isInCar($.cuban_carry_car)) {
            $.cuban_pickup2.warpFromCarToCoord(-862.0, -604.4, 11.1);
            $.cuban_pickup2.markAsNoLongerNeeded();
          }
          else {
            $.cuban_pickup2.setCoordinates(-862.0, -604.4, 11.1);
            $.cuban_pickup2.markAsNoLongerNeeded();
          }
        }
        if (!(Char.IsDead($.cuban_pickup3))) {
          if ($.cuban_pickup3.isInCar($.cuban_carry_car)) {
            $.cuban_pickup3.warpFromCarToCoord(-862.0, -601.4, 11.1);
            $.cuban_pickup3.markAsNoLongerNeeded();
          }
          else {
            $.cuban_pickup3.setCoordinates(-862.0, -601.4, 11.1);
            $.cuban_pickup3.markAsNoLongerNeeded();
          }
        }
        $.cuban_pickup1 = Char.CreateAsPassenger($.cuban_carry_car, 7 /* PEDTYPE_GANG_CUBAN */, CBa, 0);
        $.cuban_pickup1.setAsPlayerFriend($.player1, true /* TRUE */);
        $.cuban_pickup1.setStayInCarWhenJacked(true /* TRUE */);
        $.cuban_pickup1.giveWeapon(23 /* WEAPONTYPE_uzi */, 30000);
        $.cuban_pickup1.clearThreatSearch();
        $.cuban_pickup1.setOnlyDamagedByPlayer(true /* TRUE */);
        $.cuban_pickup1.setCantBeDraggedOut(true /* TRUE */);
        $.cuban_pickup1.setHeedThreats(true /* TRUE */);
        $.cuban_pickup1.setNeverTargeted(true /* TRUE */);
        $.cuban_pickup2 = Char.CreateAsPassenger($.cuban_carry_car, 7 /* PEDTYPE_GANG_CUBAN */, CBa, 1);
        $.cuban_pickup2.setAsPlayerFriend($.player1, true /* TRUE */);
        $.cuban_pickup2.setStayInCarWhenJacked(true /* TRUE */);
        $.cuban_pickup2.giveWeapon(23 /* WEAPONTYPE_uzi */, 30000);
        $.cuban_pickup2.clearThreatSearch();
        $.cuban_pickup2.setOnlyDamagedByPlayer(true /* TRUE */);
        $.cuban_pickup2.setCantBeDraggedOut(true /* TRUE */);
        $.cuban_pickup2.setHeedThreats(true /* TRUE */);
        $.cuban_pickup2.setNeverTargeted(true /* TRUE */);
        $.cuban_pickup3 = Char.CreateAsPassenger($.cuban_carry_car, 7 /* PEDTYPE_GANG_CUBAN */, CBa, 2);
        $.cuban_pickup3.setAsPlayerFriend($.player1, true /* TRUE */);
        $.cuban_pickup3.setStayInCarWhenJacked(true /* TRUE */);
        $.cuban_pickup3.giveWeapon(23 /* WEAPONTYPE_uzi */, 30000);
        $.cuban_pickup3.clearThreatSearch();
        $.cuban_pickup3.setOnlyDamagedByPlayer(true /* TRUE */);
        $.cuban_pickup3.setCantBeDraggedOut(true /* TRUE */);
        $.cuban_pickup3.setHeedThreats(true /* TRUE */);
        $.cuban_pickup3.setNeverTargeted(true /* TRUE */);
        $.cuban_carry_car.closeAllDoors();
      }
      $.cubans_in_cars = 3;
    }
  }


  Camera.RestoreJumpcut();
  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  Game.SetPoliceIgnorePlayer($.player1, false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
  // ****************************************END OF CUTSCENE - getting cubans into car********************************




  //Waiting for player1 to get back to battle


  $.drop_off_point1 = Blip.AddForCoord(-1072.6, 70.3, 11.2);
  Text.PrintNow("CUB2_19", 5000, 1); //We gonna fight like men!
  Audio.PlayMissionAudio(2);
  while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.cuban_pickup1))) {
    await asyncWait(0);
  }
  Audio.ClearMissionAudio(2);
  Text.ClearThisPrint("CUB2_19");
  Text.Print("CUB2_04", 5000, 1); //Go and drop the Cubans off at the fight.
  Text.Print("CUB2_23", 5000, 1); //Little Haiti will be swarming with Haitians trying to even the score with the Cubans.  Watch your back.


  Audio.LoadMissionAudio(1, "CUB2_3a" as any);
  Audio.LoadMissionAudio(2, "CUB2_3b" as any);


  while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
  }
}



async function waiting_for_player_2_get_close() {
  // SCM GOTO → waiting_for_player_2_get_close lowered to endless loop
  while (true) {


    await asyncWait(0);


    if ($.player1.locateInCar3D(-1072.6, 70.3, 11.2, 180.0, 180.0, 180.0, false /* FALSE */)) {
      if ($.creating_flag == 0) {
        //Creating Initial Haitians

        await creating_new_haitians();  // SCM GOSUB creating_new_haitians
        Char.SetThreatReactionRangeMultiplier(3.0);

        //Creating Initial Cubans

        //right of alleyway
        $.cuban_attacker1 = Char.Create(7 /* PEDTYPE_GANG_CUBAN */, CBa, -1079.5, 72.6, 10.2);
        $.cuban_attacker1.setAsPlayerFriend($.player1, true /* TRUE */);
        $.cuban_attacker1.setHeading(91.5);
        $.cuban_attacker1.giveWeapon(23 /* WEAPONTYPE_uzi */, 30000);
        $.cuban_attacker1.clearThreatSearch();
        $.cuban_attacker1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.cuban_attacker1.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
        $.cuban_attacker1.setThreatSearch(64 /* THREAT_COP */);
        $.cuban_attacker1.setThreatSearch(65536 /* THREAT_EMERGENCY */);
        $.cuban_attacker1.setOnlyDamagedByPlayer(true /* TRUE */);
        $.cuban_attacker1.setAsPlayerFriend($.player1, true /* TRUE */);
        $.cuban_attacker1.setHeedThreats(true /* TRUE */);
        $.cuban_attacker1.setStopShootDontSeekEntity(true /* TRUE */);
        $.cuban_attacker1.setNeverTargeted(true /* TRUE */);

        //leader bloke
        $.cuban_attacker2 = Char.Create(7 /* PEDTYPE_GANG_CUBAN */, CBb, -1079.6, 73.9, 10.2);
        $.cuban_attacker2.setAsPlayerFriend($.player1, true /* TRUE */);
        $.cuban_attacker2.setHeading(270.9);
        $.cuban_attacker2.clearThreatSearch();
        $.cuban_attacker2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.cuban_attacker2.setAccuracy(90);
        $.cuban_attacker2.setOnlyDamagedByPlayer(true /* TRUE */);
        $.cuban_attacker2.setStopShootDontSeekEntity(true /* TRUE */);
        $.cuban_attacker2.setAsPlayerFriend($.player1, true /* TRUE */);
        $.cuban_attacker2.setHeedThreats(true /* TRUE */);
        $.cuban_attacker2.setNeverTargeted(true /* TRUE */);
        $.cuban_attacker2.setStayInCarWhenJacked(true /* TRUE */);
        $.cuban_attacker2.setCantBeDraggedOut(true /* TRUE */);

        //left of alleyway
        $.cuban_attacker3 = Char.Create(7 /* PEDTYPE_GANG_CUBAN */, CBa, -1079.3, 68.6, 10.2);
        $.cuban_attacker3.setAsPlayerFriend($.player1, true /* TRUE */);
        $.cuban_attacker3.setHeading(82.1);
        $.cuban_attacker3.giveWeapon(23 /* WEAPONTYPE_uzi */, 30000);
        $.cuban_attacker3.clearThreatSearch();
        $.cuban_attacker3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.cuban_attacker3.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
        $.cuban_attacker3.setThreatSearch(64 /* THREAT_COP */);
        $.cuban_attacker3.setThreatSearch(65536 /* THREAT_EMERGENCY */);
        $.cuban_attacker3.setOnlyDamagedByPlayer(true /* TRUE */);
        $.cuban_attacker3.setAsPlayerFriend($.player1, true /* TRUE */);
        $.cuban_attacker3.setHeedThreats(true /* TRUE */);
        $.cuban_attacker3.setStopShootDontSeekEntity(true /* TRUE */);
        $.cuban_attacker3.setNeverTargeted(true /* TRUE */);
        // SCM GOTO → awaiting_player_arrival_loop1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO awaiting_player_arrival_loop1"); // fallback: would break linear control flow
      }
    }


    if (Char.IsDead($.cuban_pickup1) || Char.IsDead($.cuban_pickup2) || Char.IsDead($.cuban_pickup3)) {
      await nutters();  // SCM GOSUB nutters
      Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
      // SCM GOTO → mission_failed_cuban2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_cuban2"); // fallback: would break linear control flow
    }


    if (!(Car.IsDead($.cuban_carry_car))) {
      await checking_car_is_in_one_piece();  // SCM GOSUB checking_car_is_in_one_piece
    }
    else {
      await nutters();  // SCM GOSUB nutters
      Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
      // SCM GOTO → mission_failed_cuban2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_cuban2"); // fallback: would break linear control flow
    }


  }
}




async function awaiting_player_arrival_loop1() {
  // SCM GOTO → awaiting_player_arrival_loop1 lowered to endless loop
  while (true) {


    await asyncWait(0);


    if (!(Car.IsDead($.cuban_carry_car))) {
      if (!($.player1.locateInCar3D(-1072.6, 70.3, 10.2, 4.0, 4.0, 4.0, true /* TRUE */))) {
        await checking_car_is_in_one_piece();  // SCM GOSUB checking_car_is_in_one_piece
      }
      else {
        if (!(Car.IsDead($.cuban_carry_car))) {
          if ($.player1.isInCar($.cuban_carry_car)) {
            // SCM GOTO → player1_arrived1 (not lowered; manual jump required)
            throw new Error("unresolved GOTO player1_arrived1"); // fallback: would break linear control flow
          }
        }
      }
    }
    else {
      await nutters();  // SCM GOSUB nutters
      Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
      // SCM GOTO → mission_failed_cuban2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_cuban2"); // fallback: would break linear control flow
    }


    if (Char.IsDead($.cuban_attacker1) || Char.IsDead($.cuban_attacker2) || Char.IsDead($.cuban_attacker3)) {
      await nutters();  // SCM GOSUB nutters
      Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
      // SCM GOTO → mission_failed_cuban2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_cuban2"); // fallback: would break linear control flow
    }


    await leading_the_cubans_part1();  // SCM GOSUB leading_the_cubans_part1
    await creating_new_haitians();  // SCM GOSUB creating_new_haitians
    await first_wave_haitian_attacking_rules();  // SCM GOSUB first_wave_haitian_attacking_rules


  }
}



async function player1_arrived1() {
  $.drop_off_point1.remove();
  $.radar_blip_cuban_carry_car.remove();

  // ****************************************START OF CUTSCENE -telling player what to do********************************

  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);


  World.ClearArea(-1079.6, 73.9, 10.2, 50.0, true /* TRUE */);
  World.SetCarDensityMultiplier(0.0);

  //creating FIRST GOAL car that has to be destroyed

  $.target1 = Car.Create(stinger, -1113.2, 70.2, 10.0);
  $.target1.setHeading(358.19);
  $.target1.setOnlyDamagedByPlayer(true /* TRUE */);


  Camera.SetFixedPosition(-1064.5, 64.8, 15.7, 0.0, 0.0, 0.0);
  Camera.PointAtCar($.cuban_carry_car, 15 /* FIXED */, 2 /* JUMP_CUT */);


  $.cuban_carry_car.setTempAction(5 /* TEMPACT_HANDBRAKESTRAIGHT */, 10000);


  if (!(Car.IsDead($.cuban_carry_car))) {
    while (!($.cuban_carry_car.isStopped())) {
      await asyncWait(0);
      if (!(Car.IsDead($.cuban_carry_car))) {
      }
    }
  }

  //getting chars to leave car and enter the battle

  if (!(Car.IsDead($.cuban_carry_car))) {
    if (!(Char.IsDead($.cuban_pickup1))) {
      $.cuban_pickup1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
      $.cuban_pickup1.setObjLeaveCar($.cuban_carry_car);
      $.cuban_pickup1.setObjRunToCoord(-1075.8, 71.4);
    }
    if (!(Char.IsDead($.cuban_pickup2))) {
      $.cuban_pickup2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
      $.cuban_pickup2.setObjLeaveCar($.cuban_carry_car);
      $.cuban_pickup2.setObjRunToCoord(-1075.6, 70.0);
    }
    if (!(Char.IsDead($.cuban_pickup3))) {
      $.cuban_pickup3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
      $.cuban_pickup3.setObjLeaveCar($.cuban_carry_car);
      $.cuban_pickup3.setObjRunToCoord(-1075.8, 68.6);
    }
  }


  $.scplayer.setObjLeaveCar($.cuban_carry_car);
  $.scplayer.setObjRunToCoord(-1077.2, 73.3);


  $.cuban_carry_car.markAsNoLongerNeeded();


  await asyncWait(2000);


  if ($.cub2_waiving_flag == 0) {
    if (!(Char.IsDead($.cuban_attacker2))) {
      $.cuban_attacker2.setWaitState(16 /* WAITSTATE_PLAYANIM_TAXI */, 800);
      $.cub2_waiving_flag = 1;
    }
  }


  Camera.SetFixedPosition(-1073.46, 72.77, 12.32, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-1074.44, 72.62, 12.21, 2 /* JUMP_CUT */);


  await asyncWait(900);


  if (!(Char.IsDead($.cuban_pickup1))) {
    $.cuban_pickup1.setHeading(91.5);
    $.cuban_pickup1.setStopShootDontSeekEntity(true /* TRUE */);
    $.cuban_pickup1.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
    $.cuban_pickup1.setThreatSearch(64 /* THREAT_COP */);
    $.cuban_pickup1.setThreatSearch(65536 /* THREAT_EMERGENCY */);
  }


  if (!(Char.IsDead($.cuban_pickup2))) {
    $.cuban_pickup2.setHeading(89.5);
    $.cuban_pickup2.setStopShootDontSeekEntity(true /* TRUE */);
    $.cuban_pickup2.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
    $.cuban_pickup2.setThreatSearch(64 /* THREAT_COP */);
    $.cuban_pickup2.setThreatSearch(65536 /* THREAT_EMERGENCY */);
  }


  if (!(Char.IsDead($.cuban_pickup3))) {
    $.cuban_pickup3.setHeading(90.5);
    $.cuban_pickup3.setStopShootDontSeekEntity(true /* TRUE */);
    $.cuban_pickup3.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
    $.cuban_pickup3.setThreatSearch(64 /* THREAT_COP */);
    $.cuban_pickup3.setThreatSearch(65536 /* THREAT_EMERGENCY */);
  }


  TIMERA = 0;


  while (!($.scplayer.isObjectivePassed())) {
    await asyncWait(0);
    if (TIMERA > 5000) {
      // SCM GOTO → fudgelips (not lowered; manual jump required)
      throw new Error("unresolved GOTO fudgelips"); // fallback: would break linear control flow
    }
  }
}



async function fudgelips() {


  if (!(Char.IsDead($.cuban_attacker2))) {
    $.cuban_attacker2.turnToFacePlayer($.player1);
    $.scplayer.turnToFaceChar($.cuban_attacker2);
    $.cuban_attacker2.setWaitState(0 /* WAITSTATE_FALSE */, 100);
  }


  if (!(Char.IsDead($.cuban_attacker2))) {
    $.cuban_attacker2.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000);
  }


  Text.PrintNow("CUB2_12", 3000, 1); //Hey amigo! Good to see you could make it
  Audio.PlayMissionAudio(1);
  while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.cuban_attacker2))) {
    await asyncWait(0);
  }
  Audio.ClearMissionAudio(1);
  Text.ClearThisPrint("CUB2_12");


  if (!(Char.IsDead($.cuban_attacker2))) {
    $.cuban_attacker2.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000);
  }


  Text.PrintNow("CUB2_13", 4000, 1); //Stinking nest of Haitians, we gonna kill them all!
  Audio.PlayMissionAudio(2);
  while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.cuban_attacker2))) {
    await asyncWait(0);
  }
  Audio.ClearMissionAudio(2);
  Text.ClearThisPrint("CUB2_13");


  Audio.LoadMissionAudio(1, "CUB2_3c" as any);
  Audio.LoadMissionAudio(2, "CUB2_9" as any);


  while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
  }


  if (!(Char.IsDead($.cuban_attacker2))) {
    $.cuban_attacker2.setWaitState(0 /* WAITSTATE_FALSE */, 100);
  }


  if (!(Char.IsDead($.cuban_pickup1))) {
    $.cuban_pickup1.setOnlyDamagedByPlayer(false /* FALSE */);
  }
  if (!(Char.IsDead($.cuban_pickup2))) {
    $.cuban_pickup2.setOnlyDamagedByPlayer(false /* FALSE */);
  }
  if (!(Char.IsDead($.cuban_pickup3))) {
    $.cuban_pickup3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  $.number_of_haitians_dead = 0;


  $.player1.stopLooking();
  if (!(Char.IsDead($.cuban_attacker2))) {
    $.cuban_attacker2.stopLooking();
    $.cuban_attacker2.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
    $.cuban_attacker2.setThreatSearch(64 /* THREAT_COP */);
    $.cuban_attacker2.setThreatSearch(65536 /* THREAT_EMERGENCY */);
    $.cuban_attacker2.giveWeapon(26 /* WEAPONTYPE_M4 */, 99999);
  }


  World.SetCarDensityMultiplier(1.0);
  Camera.RestoreJumpcut();
  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);

  /*
  IF NOT IS_CHAR_DEAD cuban_attacker1
  SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY cuban_attacker1 FALSE
  ENDIF
  IF NOT IS_CHAR_DEAD cuban_attacker3
  SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY cuban_attacker3 FALSE
  ENDIF
  */


  Text.PrintNow("CUB2_14", 5000, 1); //CHAAAARRGE!
  Audio.PlayMissionAudio(1);
  while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.cuban_attacker2))) {
    await asyncWait(0);
  }
  Audio.ClearMissionAudio(1);
  Text.ClearThisPrint("CUB2_14");


  Text.Print("CUB2_25", 5000, 1); //GET THEM ALL!!


  if (!(Char.IsDead($.haitian_defender1))) {
    $.cuban_blip1 = Blip.AddForChar($.haitian_defender1);
  }


  if (!(Char.IsDead($.haitian_defender2))) {
    $.cuban_blip2 = Blip.AddForChar($.haitian_defender2);
  }


  if (!(Char.IsDead($.haitian_defender3))) {
    $.cuban_blip3 = Blip.AddForChar($.haitian_defender3);
  }


  if (!(Char.IsDead($.haitian_defender4))) {
    $.cuban_blip4 = Blip.AddForChar($.haitian_defender4);
  }


  if (!(Char.IsDead($.haitian_defender5))) {
    $.cuban_blip5 = Blip.AddForChar($.haitian_defender5);
  }


  $.cuban_flag1 = 0;
  Player.ResetNumOfModelsKilled();
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////FIRST GOAL - destroying car and back cubans/////////////////////////////////////////////////////

async function first_goal_loop() {
  // SCM GOTO → first_goal_loop lowered to endless loop
  while (true) {
    await asyncWait(0);


    if (Char.IsDead($.cuban_attacker1) || Char.IsDead($.cuban_attacker2) || Char.IsDead($.cuban_attacker3) || $.body_count_cub2 == 1) {
      await nutters();  // SCM GOSUB nutters
      Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
      // SCM GOTO → mission_failed_cuban2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_cuban2"); // fallback: would break linear control flow
    }


    await leading_the_cubans_part1();  // SCM GOSUB leading_the_cubans_part1
    await picked_up_cubans_fighting_rules();  // SCM GOSUB picked_up_cubans_fighting_rules
    await first_wave_haitian_attacking_rules();  // SCM GOSUB first_wave_haitian_attacking_rules
    await player_killing_cubans();  // SCM GOSUB player_killing_cubans


    if (Car.IsDead($.target1) || $.number_of_haitians_dead > 9 || $.player1.isInArea2D(-1114.3, 61.6, -1131.2, 95.9, false /* FALSE */)) {
      $.completed_goal_flag = 1;
    }


    if (Char.IsDead($.haitian_defender1)) {
      $.cuban_blip1.remove();
    }
    if (Char.IsDead($.haitian_defender2)) {
      $.cuban_blip2.remove();
    }
    if (Char.IsDead($.haitian_defender3)) {
      $.cuban_blip3.remove();
    }
    if (Char.IsDead($.haitian_defender4)) {
      $.cuban_blip4.remove();
    }
    if (Char.IsDead($.haitian_defender5)) {
      $.cuban_blip5.remove();
    }


    if ($.completed_goal_flag == 0) {
      await creating_new_haitians();  // SCM GOSUB creating_new_haitians
    }
    else {
      if (Char.IsDead($.haitian_defender1)) {
        if (Char.IsDead($.haitian_defender2)) {
          if (Char.IsDead($.haitian_defender3)) {
            if (Char.IsDead($.haitian_defender4)) {
              if (Char.IsDead($.haitian_defender5)) {
                Char.SetThreatReactionRangeMultiplier(1.0);
                $.cuban_blip1.remove();
                $.cuban_blip2.remove();
                $.cuban_blip3.remove();
                $.cuban_blip4.remove();
                $.cuban_blip5.remove();
                $.cuban_flag1 = 1;
                // SCM GOTO → preparing_for_next_pickup (not lowered; manual jump required)
                throw new Error("unresolved GOTO preparing_for_next_pickup"); // fallback: would break linear control flow
              }
            }
          }
        }
      }
    }


  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////FIRST GOAL - completed//////////////////////////////////////////////////////////////////////////

// ****************************************START OF CUTSCENE -telling player what to do next********************************
//Creating SECOND GOAL and next wave of haitians

async function preparing_for_next_pickup() {


  await asyncWait(1000);


  World.ClearArea(-1079.6, 73.9, 10.2, 25.0, true /* TRUE */);
  World.SetCarDensityMultiplier(0.0);
  World.SetPedDensityMultiplier(0.0);


  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);


  Text.PrintNow("CUB2_15", 5000, 1); //Now, my brothers, CHAAARRRGGEE!!
  Audio.PlayMissionAudio(2);
  while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.cuban_attacker2))) {
    await asyncWait(0);
  }
  Audio.ClearMissionAudio(2);
  Text.ClearThisPrint("CUB2_15");


  //cuban car


  $.cuban_carry_car = Car.Create(taxi, -1037.2, 24.6, 9.9);
  $.taxi_dude = Char.CreateInsideCar($.cuban_carry_car, 4 /* PEDTYPE_CIVMALE */, WMOCA);
  $.cuban_carry_car.setCruiseSpeed(0.0);

  //Go pick up the other set of Cubans


  $.cuban_pickup4 = Char.CreateAsPassenger($.cuban_carry_car, 7 /* PEDTYPE_GANG_CUBAN */, CBa, 0);
  $.cuban_pickup4.setAsPlayerFriend($.player1, true /* TRUE */);
  $.cuban_pickup4.giveWeapon(23 /* WEAPONTYPE_uzi */, 30000);
  $.cuban_pickup4.addArmor(100);
  $.cuban_pickup4.clearThreatSearch();
  $.cuban_pickup4.setOnlyDamagedByPlayer(true /* TRUE */);
  $.cuban_pickup4.setCantBeDraggedOut(true /* TRUE */);
  $.cuban_pickup4.setAsPlayerFriend($.player1, true /* TRUE */);
  $.cuban_pickup4.setHeedThreats(true /* TRUE */);
  $.cuban_pickup4.setNeverTargeted(true /* TRUE */);


  $.cuban_pickup5 = Char.CreateAsPassenger($.cuban_carry_car, 7 /* PEDTYPE_GANG_CUBAN */, CBa, 1);
  $.cuban_pickup5.setAsPlayerFriend($.player1, true /* TRUE */);
  $.cuban_pickup5.giveWeapon(23 /* WEAPONTYPE_uzi */, 30000);
  $.cuban_pickup5.addArmor(100);
  $.cuban_pickup5.clearThreatSearch();
  $.cuban_pickup5.setOnlyDamagedByPlayer(true /* TRUE */);
  $.cuban_pickup5.setCantBeDraggedOut(true /* TRUE */);
  $.cuban_pickup5.setAsPlayerFriend($.player1, true /* TRUE */);
  $.cuban_pickup5.setHeedThreats(true /* TRUE */);
  $.cuban_pickup5.setNeverTargeted(true /* TRUE */);


  $.cuban_pickup6 = Char.CreateAsPassenger($.cuban_carry_car, 7 /* PEDTYPE_GANG_CUBAN */, CBa, 2);
  $.cuban_pickup6.setAsPlayerFriend($.player1, true /* TRUE */);
  $.cuban_pickup6.giveWeapon(23 /* WEAPONTYPE_uzi */, 30000);
  $.cuban_pickup6.addArmor(100);
  $.cuban_pickup6.clearThreatSearch();
  $.cuban_pickup6.setOnlyDamagedByPlayer(true /* TRUE */);
  $.cuban_pickup6.setCantBeDraggedOut(true /* TRUE */);
  $.cuban_pickup6.setAsPlayerFriend($.player1, true /* TRUE */);
  $.cuban_pickup6.setHeedThreats(true /* TRUE */);
  $.cuban_pickup6.setNeverTargeted(true /* TRUE */);


  World.ClearAreaOfCars(-1108.2, 65.2, 5.0, -1118.2, 75.2, 15.0);
  $.target1.delete();

  //front right (when looking at sniper down alley)

  $.haitian1x = -1137.8;
  $.haitian1y = 66.7;
  $.hd1_heading = 5.2;

  //front left (when looking at sniper down alley)

  $.haitian2x = -1138.2;
  $.haitian2y = 75.5;
  $.hd2_heading = 175.4;

  // back right (when looking at sniper down alley)

  $.haitian3x = -1158.2;
  $.haitian3y = 67.2;
  $.hd3_heading = 5.2;

  //back left (when looking at sniper down alley)

  $.haitian4x = -1158.1;
  $.haitian4y = 75.6;
  $.hd4_heading = 175.4;

  //back (when looking at sniper down alley)

  $.haitian5x = -1163.5;
  $.haitian5y = 75.8;
  $.hd5_heading = 226.7;


  $.haitian_z = 10.1;


  await creating_new_haitians();  // SCM GOSUB creating_new_haitians


  $.scplayer.setObjRunToCoord(-1103.1, 71.9);

  //creating sniper

  $.target2 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNb, -1189.8, 69.2, 23.9);



  $.target2.shutUp(true /* TRUE */);
  $.target2.setHeading(270.0);
  $.target2.giveWeapon(28 /* WEAPONTYPE_SNIPERRIFLE */, 30000);
  $.target2.clearThreatSearch();
  $.target2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.target2.setThreatSearch(128 /* THREAT_GANG_CUBAN */);
  $.target2.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.target2.setThreatSearch(64 /* THREAT_COP */);
  $.target2.setAccuracy(100);
  $.target2.setObjRunToCoord(-1173.4, 71.3);



  Camera.SetFixedPosition(-1074.47, 70.88, 14.36, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-1075.44, 70.90, 14.11, 2 /* JUMP_CUT */);


  if (!(Char.IsDead($.cuban_attacker3))) {
    $.cuban_attacker3.clearThreatSearch();
    //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY cuban_attacker3 FALSE
    $.cuban_attacker3.setObjRunToCoord(-1117.2, 68.5);
  }


  if (!(Char.IsDead($.cuban_pickup1))) {
    $.cuban_pickup1.clearThreatSearch();
    //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY cuban_pickup1 FALSE
    $.cuban_pickup1.setObjRunToCoord(-1130.2, 70.5);
  }


  if (!(Char.IsDead($.cuban_pickup2))) {
    $.cuban_pickup2.clearThreatSearch();
    //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY cuban_pickup2 FALSE
    $.cuban_pickup2.setObjRunToCoord(-1130.2, 70.5);
  }
  await asyncWait(2000);

  //looking at cubans dying

  Camera.SetFixedPosition(-1105.68, 70.95, 13.95, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-1106.66, 70.91, 13.74, 2 /* JUMP_CUT */);
  $.scplayer.setObjNoObj();
  $.player1.setCoordinates(-1103.1, 71.9, 10.27);


  if (!(Char.IsDead($.cuban_attacker3))) {
    $.cuban_attacker3.setCoordinates(-1106.7, 69.9, 10.4);
    $.cuban_attacker3.setObjRunToCoord(-1117.2, 68.5);
  }


  if (!(Char.IsDead($.cuban_pickup1))) {
    $.cuban_pickup1.setCoordinates(-1106.7, 70.9, 10.4);
    $.cuban_pickup1.setObjRunToCoord(-1130.2, 70.5);
  }


  if (!(Char.IsDead($.cuban_pickup2))) {
    $.cuban_pickup2.setCoordinates(-1106.7, 71.9, 10.4);
    $.cuban_pickup2.setObjRunToCoord(-1130.2, 70.5);
  }


  TIMERA = 0;


  Audio.LoadMissionAudio(2, "snipsh" as any);
  while (!(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
  }


  Audio.LoadMissionAudio(1, "snipsh" as any);
  while (!(Audio.HasMissionAudioLoaded(1))) {
    await asyncWait(0);
  }
}




async function snipey_loop() {
  // SCM GOTO → snipey_loop lowered to endless loop
  while (true) {


    await asyncWait(0);


    if (!(Char.IsDead($.cuban_attacker3))) {
      if ($.cuban_attacker3.isInArea2D(-1130.4, 59.9, -1114.1, 82.1, false /* FALSE */)) {


        if ($.sniper_shot > 0) {
          Audio.LoadMissionAudio(1, "sniper" as any);
          while (!(Audio.HasMissionAudioLoaded(1))) {
            await asyncWait(0);
          }
        }
        Audio.PlayMissionAudio(1);
        $.sniper_shot = 1;



        if (!(Char.IsDead($.cuban_attacker3))) {
          $.cuban_attacker3.explodeHead();
        }
        while (!(Audio.HasMissionAudioFinished(1))) {
          await asyncWait(0);
        }
        //CLEAR_MISSION_AUDIO 1


      }
    }


    if (!(Char.IsDead($.cuban_pickup1))) {
      if ($.cuban_pickup1.isInArea2D(-1130.4, 59.9, -1119.1, 82.1, false /* FALSE */)) {
        Audio.PlayMissionAudio(2);
        if (!(Char.IsDead($.cuban_pickup1))) {
          $.cuban_pickup1.explodeHead();
        }
        while (!(Audio.HasMissionAudioFinished(2))) {
          await asyncWait(0);
        }
        //CLEAR_MISSION_AUDIO 2

      }
    }


    if (!(Char.IsDead($.cuban_pickup2))) {
      if ($.cuban_pickup2.isInArea2D(-1130.4, 59.9, -1125.1, 82.1, false /* FALSE */)) {
        if ($.sniper_shot > 0) {
          Audio.LoadMissionAudio(1, "sniper" as any);
          while (!(Audio.HasMissionAudioLoaded(1))) {
            await asyncWait(0);
          }
        }
        Audio.PlayMissionAudio(1);
        $.sniper_shot = 1;



        if (!(Char.IsDead($.cuban_pickup2))) {
          $.cuban_pickup2.explodeHead();
        }


        while (!(Audio.HasMissionAudioFinished(1))) {
          await asyncWait(0);
        }
        //CLEAR_MISSION_AUDIO 1


      }
    }


    if (TIMERA > 12000) {
      // SCM GOTO → cuntlips (not lowered; manual jump required)
      throw new Error("unresolved GOTO cuntlips"); // fallback: would break linear control flow
    }


    if (Char.IsDead($.cuban_attacker3)) {
      if (Char.IsDead($.cuban_pickup1)) {
        if (Char.IsDead($.cuban_pickup2)) {
          $.cuban_attacker3.markAsNoLongerNeeded();
          $.cuban_pickup2.markAsNoLongerNeeded();
          $.cuban_pickup1.markAsNoLongerNeeded();
          // SCM GOTO → cuntlips (not lowered; manual jump required)
          throw new Error("unresolved GOTO cuntlips"); // fallback: would break linear control flow
        }
      }
    }
  }
}



async function cuntlips() {


  if (!(Char.IsDead($.target2))) {
    $.target2.setCoordinates(-1173.4, 71.3, 23.0);
    $.target2.setObjAimGunAtChar($.scplayer);
  }


  Audio.LoadMissionAudio(1, "CUB2_5" as any);
  Audio.LoadMissionAudio(2, "CUB2_6" as any);


  while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
  }


  await asyncWait(1000);

  //Looking behind sniper

  Camera.SetFixedPosition(-1175.9, 70.3, 24.3, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-1135.9, 66.3, 18.6, 2 /* JUMP_CUT */);


  Text.PrintNow("CUB2_09", 4000, 1); //Sniper on the roof!
  Audio.PlayMissionAudio(1);
  while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.cuban_attacker2))) {
    await asyncWait(0);
  }
  Audio.ClearMissionAudio(1);
  Text.ClearThisPrint("CUB2_09");
  Text.PrintNow("CUB2_07", 4000, 1); //They fight like girls! Take cover!
  Audio.PlayMissionAudio(2);
  while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.cuban_attacker2))) {
    await asyncWait(0);
  }
  Audio.ClearMissionAudio(2);
  Text.ClearThisPrint("CUB2_07");


  Audio.LoadMissionAudio(1, "CUB2_7" as any);


  while (!(Audio.HasMissionAudioLoaded(1))) {
    await asyncWait(0);
  }


  if (!(Char.IsDead($.cuban_attacker2))) {
    $.cuban_attacker2.clearThreatSearch();
    $.cuban_attacker2.setCoordinates(-1112.98, 66.92, 10.4);
  }


  if (!(Char.IsDead($.cuban_attacker1))) {
    $.cuban_attacker1.clearThreatSearch();
    $.cuban_attacker1.setCoordinates(-1112.2, 74.5, 10.4);
    $.cuban_attacker1.setHeading(302.4);
  }


  if (!(Char.IsDead($.cuban_pickup3))) {
    $.cuban_pickup3.clearThreatSearch();
    $.cuban_pickup3.setCoordinates(-1112.5, 65.2, 10.4);
    $.cuban_pickup3.setHeading(357.4);
  }
  $.scplayer.setCoordinates(-1110.95, 67.38, 10.4);


  if (!(Char.IsDead($.cuban_attacker2))) {
    $.cuban_attacker2.turnToFacePlayer($.player1);
    $.player1.turnToFaceChar($.cuban_attacker2);
    $.cuban_attacker2.removeAllWeapons();
  }


  await asyncWait(1000);


  //looking at rico

  Camera.SetFixedPosition(-1110.3, 64.24, 11.6, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-1114.0, 71.1, 10.25, 2 /* JUMP_CUT */);


  if (!(Char.IsDead($.cuban_attacker2))) {
    $.cuban_attacker2.setAnsweringMobile(true /* TRUE */);
  }


  await asyncWait(1000);


  Text.PrintNow("CUB2_02", 4000, 1); //RICO: We need reinforcements from the cafe!


  Audio.PlayMissionAudio(1);
  while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.cuban_attacker2))) {
    await asyncWait(0);
  }
  Audio.ClearMissionAudio(1);
  Text.ClearThisPrint("CUB2_02");


  Audio.LoadMissionAudio(1, "CUB2_8" as any);
  Audio.LoadMissionAudio(2, "CUB2_4a" as any);


  while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
  }


  if (!(Char.IsDead($.cuban_attacker2))) {
    $.cuban_attacker2.setAnsweringMobile(false /* FALSE */);
  }


  await asyncWait(1000);


  //getting player1 to go back to find out that he needs to pick up the next set of cubans

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////second set of cubans appearing//////////////////////////////////////////////////////////////////


  World.ClearAreaOfCars(-1063.6, 11.9, 0.6, -1080.9, 102.8, 20.4);


  Camera.SetFixedPosition(-1079.0, 73.4, 14.0, 0.0, 0.0, 0.0);
  if (!(Car.IsDead($.cuban_carry_car))) {
    Camera.PointAtCar($.cuban_carry_car, 15 /* FIXED */, 2 /* JUMP_CUT */);
    $.cuban_carry_car.setForwardSpeed(40.0);
    $.cuban_carry_car.setCruiseSpeed(40.0);
    $.cuban_carry_car.gotoCoordinates(-1068.1, 77.11, 10.5);
  }


  while (!($.cuban_carry_car.locate2D(-1068.1, 77.11, 10.0, 10.0, false /* FALSE */))) {
    await asyncWait(0);
    if (!(Car.IsDead($.cuban_carry_car))) {
    }
  }


  if (!(Car.IsDead($.cuban_carry_car))) {
    $.cuban_carry_car.setTempAction(3 /* TEMPACT_HANDBRAKETURNLEFT */, 10000);
  }



  if (!(Char.IsDead($.cuban_pickup4))) {
    $.cuban_pickup4.setObjLeaveCar($.cuban_carry_car);
  }


  if (!(Char.IsDead($.cuban_pickup5))) {
    $.cuban_pickup5.setObjLeaveCar($.cuban_carry_car);
  }


  if (!(Char.IsDead($.cuban_pickup6))) {
    $.cuban_pickup6.setObjLeaveCar($.cuban_carry_car);
  }


  $.cuban_attacker_doingstuff1 = 2;
  $.cuban_attacker_doingstuff2 = 2;
  $.cuban_attacker_doingstuff3 = 2;
}

//getting chars to leave car and enter the battle


async function getting_the_cunts_out_the_car() {
  // SCM GOTO → getting_the_cunts_out_the_car lowered to endless loop
  while (true) {


    await asyncWait(0);


    if (!(Car.IsDead($.cuban_carry_car))) {
      $.cubans_out_of_car = $.cuban_carry_car.getNumberOfPassengers();
      if ($.cubans_out_of_car == 0) {
        if (!(Char.IsDead($.cuban_pickup4))) {
          if (!($.cuban_pickup4.isInAnyCar())) {
            $.cuban_pickup4.setObjNoObj();
            $.cuban_pickup4.setObjRunToCoord(-1079.8, 70.0);
          }
        }
        if (!(Char.IsDead($.cuban_pickup5))) {
          if (!($.cuban_pickup5.isInAnyCar())) {
            $.cuban_pickup5.setObjNoObj();
            $.cuban_pickup5.setObjRunToCoord(-1078.8, 70.0);
          }
        }
        if (!(Char.IsDead($.cuban_pickup6))) {
          if (!($.cuban_pickup6.isInAnyCar())) {
            $.cuban_pickup6.setObjNoObj();
            $.cuban_pickup6.setObjRunToCoord(-1077.8, 70.0);
          }
        }
        // SCM GOTO → getting_the_cunts_out_the_car2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO getting_the_cunts_out_the_car2"); // fallback: would break linear control flow
      }
      else {
        // SCM GOTO → getting_the_cunts_out_the_car (not lowered; manual jump required)
        throw new Error("unresolved GOTO getting_the_cunts_out_the_car"); // fallback: would break linear control flow
      }
    }


  }
}



async function getting_the_cunts_out_the_car2() {


  Camera.SetFixedPosition(-1070.4, 69.9, 15.7, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-1086.4, 69.7, 9.76, 2 /* JUMP_CUT */);


  while (!($.cuban_pickup6.locateOnFoot3D(-1112.9, 66.7, 10.4, 2.0, 2.0, 2.0, false /* FALSE */))) {
    await asyncWait(0);
    if (!(Char.IsDead($.cuban_pickup4))) {
      if ($.cuban_attacker_doingstuff1 == 2) {
        if (!($.cuban_pickup4.locateOnFoot3D(-1079.8, 71.0, 10.4, 1.0, 1.0, 1.0, false /* FALSE */))) {
          $.cuban_pickup4.setObjRunToCoord(-1079.8, 71.0);
        }
        else {
          $.cuban_attacker_doingstuff1 = 0;
          $.cuban_pickup4.setObjNoObj();
        }
      }
      else {
        if ($.cuban_pickup4.locateOnFoot3D(-1112.0, 73.0, 10.4, 1.0, 1.0, 1.0, false /* FALSE */)) {
          $.cuban_pickup4.setObjNoObj();
          $.cuban_pickup4.setHeading(78.5);
          $.cuban_attacker_doingstuff1 = 1;
        }
        else {
          if ($.cuban_attacker_doingstuff1 == 0) {
            $.cuban_pickup4.setObjRunToCoord(-1112.0, 73.0);
          }
        }
      }
    }
    if (!(Char.IsDead($.cuban_pickup5))) {
      if ($.cuban_attacker_doingstuff2 == 2) {
        if (!($.cuban_pickup5.locateOnFoot3D(-1078.8, 70.0, 10.4, 1.0, 1.0, 1.0, false /* FALSE */))) {
          $.cuban_pickup5.setObjRunToCoord(-1078.8, 70.0);
        }
        else {
          $.cuban_attacker_doingstuff2 = 0;
          $.cuban_pickup5.setObjNoObj();
        }
      }
      else {
        if ($.cuban_pickup5.locateOnFoot3D(-1112.9, 73.3, 10.4, 1.0, 1.0, 1.0, false /* FALSE */)) {
          $.cuban_pickup5.setObjNoObj();
          $.cuban_pickup5.setHeading(274.5);
          $.cuban_attacker_doingstuff2 = 1;
        }
        else {
          if ($.cuban_attacker_doingstuff2 == 0) {
            $.cuban_pickup5.setObjRunToCoord(-1112.9, 73.3);
          }
        }
      }
    }
    if (!(Char.IsDead($.cuban_pickup6))) {
      if ($.cuban_attacker_doingstuff3 == 2) {
        if (!($.cuban_pickup6.locateOnFoot3D(-1077.8, 69.0, 10.4, 1.0, 1.0, 1.0, false /* FALSE */))) {
          $.cuban_pickup6.setObjRunToCoord(-1077.8, 69.0);
        }
        else {
          $.cuban_attacker_doingstuff3 = 0;
          $.cuban_pickup6.setObjNoObj();
        }
      }
      else {
        if ($.cuban_pickup6.locateOnFoot3D(-1112.9, 66.7, 10.4, 1.0, 1.0, 1.0, false /* FALSE */)) {
          $.cuban_pickup6.setObjNoObj();
          $.cuban_pickup6.setHeading(27.6);
          $.cuban_attacker_doingstuff3 = 1;
        }
        else {
          if ($.cuban_attacker_doingstuff3 == 0) {
            $.cuban_pickup6.setObjRunToCoord(-1112.9, 66.7);
          }
        }
      }
    }
  }

  //looking at rico

  Camera.SetFixedPosition(-1110.3, 64.24, 11.6, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-1114.0, 71.1, 10.25, 2 /* JUMP_CUT */);


  await asyncWait(1000);


  if (!(Char.IsDead($.cuban_attacker2))) {
    $.cuban_attacker2.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000);
  }


  Text.PrintNow("CUB2_05", 5000, 1); //RICO: Take out that cowardly sniper!
  Audio.PlayMissionAudio(1);
  while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.cuban_attacker2))) {
    await asyncWait(0);
  }
  Audio.ClearMissionAudio(1);
  Text.ClearThisPrint("CUB2_05");


  if (!(Char.IsDead($.cuban_attacker2))) {
    $.cuban_attacker2.setWaitState(0 /* WAITSTATE_FALSE */, 100);
  }


  Char.SetThreatReactionRangeMultiplier(3.0);


  if (!(Char.IsDead($.cuban_pickup4))) {
    $.cuban_pickup4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    $.cuban_pickup4.setOnlyDamagedByPlayer(false /* FALSE */);
    $.cuban_pickup4.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
    $.cuban_pickup4.setThreatSearch(64 /* THREAT_COP */);
  }


  if (!(Char.IsDead($.cuban_pickup5))) {
    $.cuban_pickup5.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    $.cuban_pickup5.setOnlyDamagedByPlayer(false /* FALSE */);
    $.cuban_pickup5.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
    $.cuban_pickup5.setThreatSearch(64 /* THREAT_COP */);
  }


  if (!(Char.IsDead($.cuban_pickup6))) {
    $.cuban_pickup6.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    $.cuban_pickup6.setOnlyDamagedByPlayer(false /* FALSE */);
    $.cuban_pickup6.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
    $.cuban_pickup6.setThreatSearch(64 /* THREAT_COP */);
  }
  if (!(Char.IsDead($.target2))) {
    $.sniper_blip = Blip.AddForChar($.target2);
  }


  if (!(Char.IsDead($.cuban_attacker2))) {
    $.cuban_attacker2.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10);
    $.cuban_attacker2.stopLooking();
    $.cuban_attacker2.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
    $.cuban_attacker2.setThreatSearch(64 /* THREAT_COP */);
    $.cuban_attacker2.setThreatSearch(65536 /* THREAT_EMERGENCY */);
    $.cuban_attacker2.giveWeapon(26 /* WEAPONTYPE_M4 */, 99999);
  }


  if (!(Char.IsDead($.cuban_attacker1))) {
    $.cuban_attacker1.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
    $.cuban_attacker1.setThreatSearch(64 /* THREAT_COP */);
    $.cuban_attacker1.setThreatSearch(65536 /* THREAT_EMERGENCY */);
  }


  if (!(Char.IsDead($.cuban_pickup3))) {
    $.cuban_pickup3.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
    $.cuban_pickup3.setThreatSearch(64 /* THREAT_COP */);
    $.cuban_pickup3.setThreatSearch(65536 /* THREAT_EMERGENCY */);
  }


  if (!(Char.IsDead($.cuban_attacker2))) {
    $.cuban_attacker2.stopLooking();
  }


  if (!(Char.IsDead($.cuban_attacker1))) {
    $.cuban_attacker1.setObjRunToCoord(-1120.0, 68.0);
  }
  if (!(Char.IsDead($.cuban_attacker2))) {
    $.cuban_attacker2.setObjRunToCoord(-1119.0, 74.0);
  }


  World.SetCarDensityMultiplier(1.0);
  World.SetPedDensityMultiplier(1.0);
  TIMERB = 0;


  Camera.RestoreJumpcut();
  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////SECOND GOAL - killing sniper and his mates/////////////////////////////////////////////////////


async function second_goal_loop() {
  // SCM GOTO → second_goal_loop lowered to endless loop
  while (true) {


    await asyncWait(0);


    if ($.telling_guys_to_move == 0) {
      if (TIMERB > 7000) {
        if (!(Char.IsDead($.cuban_pickup3))) {
          $.cuban_pickup3.setObjRunToCoord(-1138.0, 71.0);
        }
        if (!(Char.IsDead($.cuban_pickup4))) {
          $.cuban_pickup4.setObjRunToCoord(-1138.0, 71.0);
        }
        if (!(Char.IsDead($.cuban_pickup5))) {
          $.cuban_pickup5.setObjRunToCoord(-1138.0, 71.0);
        }
        if (!(Char.IsDead($.cuban_pickup6))) {
          $.cuban_pickup6.setObjRunToCoord(-1138.0, 71.0);
        }
        $.telling_guys_to_move = 1;
      }
    }



    if (Char.IsDead($.cuban_attacker1) || Char.IsDead($.cuban_attacker2) || $.body_count_cub2 == 1) {
      await nutters();  // SCM GOSUB nutters
      Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
      // SCM GOTO → mission_failed_cuban2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_cuban2"); // fallback: would break linear control flow
    }


    if ($.fire_car_flag == 0) {
      if ($.player1.isInAnyCar()) {
        if ($.player1.isInArea3D(-1095.2, 57.9, 17.8, -1122.8, 90.7, 7.0, false /* FALSE */)) {
          $.death_car = $.player1.storeCarIsIn();
          $.death_car.setHealth(250);
          $.fire_car_flag = 1;
        }
      }
      else {
        $.fire_car_flag = 0;
      }
    }


    if ($.player1.isInAnyCar()) {
      if ($.player1.isInArea3D(-1137.0, 84.5, 5.8, -1179.9, 60.7, 15.0, false /* FALSE */)) {
        $.death_car = $.player1.storeCarIsIn();
        $.death_car.explode();
      }
    }


    await second_wave_haitian_attacking_rules();  // SCM GOSUB second_wave_haitian_attacking_rules
    await player_killing_cubans();  // SCM GOSUB player_killing_cubans


    if (!(Char.IsDead($.target2))) {
      if (!($.player1.isInAnyCar())) {
        if ($.player1.isInArea2D(-1136.4, 61.1, -1158.1, 78.6, false /* FALSE */)) {
          Audio.LoadMissionAudio(2, "sniper" as any);
          while (!(Audio.HasMissionAudioLoaded(2))) {
            await asyncWait(0);
          }
          Audio.PlayMissionAudio(2);
          $.player1.explodeHead();
          while (!(Audio.HasMissionAudioFinished(2))) {
            await asyncWait(0);
          }
          //CLEAR_MISSION_AUDIO 1

        }
      }
      if (!(Char.IsDead($.cuban_pickup3))) {
        if ($.cuban_pickup3.isInArea2D(-1131.4, 59.9, -1158.1, 78.6, false /* FALSE */)) {
          Audio.LoadMissionAudio(1, "sniper" as any);
          while (!(Audio.HasMissionAudioLoaded(1))) {
            await asyncWait(0);
          }
          Audio.PlayMissionAudio(1);
          if (!(Char.IsDead($.cuban_pickup3))) {
            $.cuban_pickup3.explodeHead();
          }
          while (!(Audio.HasMissionAudioFinished(1))) {
            await asyncWait(0);
          }
          //CLEAR_MISSION_AUDIO 1

        }
      }
      if (!(Char.IsDead($.cuban_pickup4))) {
        if ($.cuban_pickup4.isInArea2D(-1133.4, 59.9, -1158.1, 78.6, false /* FALSE */)) {
          Audio.LoadMissionAudio(1, "sniper" as any);
          while (!(Audio.HasMissionAudioLoaded(1))) {
            await asyncWait(0);
          }
          Audio.PlayMissionAudio(1);
          if (!(Char.IsDead($.cuban_pickup4))) {
            $.cuban_pickup4.explodeHead();
          }
          while (!(Audio.HasMissionAudioFinished(1))) {
            await asyncWait(0);
          }
          //CLEAR_MISSION_AUDIO 1

        }
      }
      if (!(Char.IsDead($.cuban_pickup5))) {
        if ($.cuban_pickup5.isInArea2D(-1135.4, 59.9, -1158.1, 78.6, false /* FALSE */)) {
          Audio.LoadMissionAudio(1, "sniper" as any);
          while (!(Audio.HasMissionAudioLoaded(1))) {
            await asyncWait(0);
          }
          Audio.PlayMissionAudio(1);
          if (!(Char.IsDead($.cuban_pickup5))) {
            $.cuban_pickup5.explodeHead();
          }


          while (!(Audio.HasMissionAudioFinished(1))) {
            await asyncWait(0);
          }
          //CLEAR_MISSION_AUDIO 1

        }
      }
      if (!(Char.IsDead($.cuban_pickup6))) {
        if ($.cuban_pickup6.isInArea2D(-1137.4, 59.9, -1158.1, 78.6, false /* FALSE */)) {
          Audio.LoadMissionAudio(1, "sniper" as any);
          while (!(Audio.HasMissionAudioLoaded(1))) {
            await asyncWait(0);
          }
          Audio.PlayMissionAudio(1);


          if (!(Char.IsDead($.cuban_pickup6))) {
            $.cuban_pickup6.explodeHead();
          }
          while (!(Audio.HasMissionAudioFinished(1))) {
            await asyncWait(0);
          }
          //CLEAR_MISSION_AUDIO 1

        }
      }
      await creating_new_haitians();  // SCM GOSUB creating_new_haitians


    }
    else {
      if ($.cuban_flag1 == 1) {
        Text.PrintNow("CUB2_22", 5000, 1); //Finish off the rest of the Haitians so the Cubans can move forward.
        if (!(Char.IsDead($.haitian_defender1))) {
          $.cuban_blip1 = Blip.AddForChar($.haitian_defender1);
        }
        if (!(Char.IsDead($.haitian_defender2))) {
          $.cuban_blip2 = Blip.AddForChar($.haitian_defender2);
        }
        if (!(Char.IsDead($.haitian_defender3))) {
          $.cuban_blip3 = Blip.AddForChar($.haitian_defender3);
        }
        if (!(Char.IsDead($.haitian_defender4))) {
          $.cuban_blip4 = Blip.AddForChar($.haitian_defender4);
        }
        if (!(Char.IsDead($.haitian_defender5))) {
          $.cuban_blip5 = Blip.AddForChar($.haitian_defender5);
        }
        $.cuban_flag1 = 2;
      }
      $.sniper_blip.remove();
      if (Char.IsDead($.haitian_defender1)) {
        if (Char.IsDead($.haitian_defender2)) {
          if (Char.IsDead($.haitian_defender3)) {
            if (Char.IsDead($.haitian_defender4)) {
              if (Char.IsDead($.haitian_defender5)) {
                $.cuban_blip1.remove();
                $.cuban_blip2.remove();
                $.cuban_blip3.remove();
                $.cuban_blip4.remove();
                $.cuban_blip5.remove();
                Text.ClearPrints();
                await asyncWait(1000);
                // SCM GOTO → preparing_for_final_wave (not lowered; manual jump required)
                throw new Error("unresolved GOTO preparing_for_final_wave"); // fallback: would break linear control flow
              }
            }
          }
        }
      }
    }


    if (Char.IsDead($.haitian_defender1)) {
      $.cuban_blip1.remove();
    }
    if (Char.IsDead($.haitian_defender2)) {
      $.cuban_blip2.remove();
    }
    if (Char.IsDead($.haitian_defender3)) {
      $.cuban_blip3.remove();
    }
    if (Char.IsDead($.haitian_defender4)) {
      $.cuban_blip4.remove();
    }
    if (Char.IsDead($.haitian_defender5)) {
      $.cuban_blip5.remove();
    }


  }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////SECOND GOAL - completed/////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////THIRD GOAL - getting back to cuban base alive///////////////////////////////////////////////////

async function preparing_for_final_wave() {


  $.haitians_doubled_flag = 1;


  $.target2.markAsNoLongerNeeded();

  // ****************************************START OF CUTSCENE********************************


  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);


  Camera.SetFixedPosition(-1161.2, 71.5, 12.6, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-1152.3, 71.9, 10.8, 2 /* JUMP_CUT */);



  //creating car to be blown up and car to escape in


  $.escape_car = Car.Create(pony, -1161.5, 76.5, 10.2);


  $.escape_car.setHealth(1500);
  $.escape_car.setHeading(90.7);
  $.escape_car.setOnlyDamagedByPlayer(true /* TRUE */);
  $.escape_car_drugs = ScriptObject.Create(gunbox, -1161.5, 76.5, 11.2);
  $.escape_car_drugs.setCollision(false /* FALSE */);
  $.escape_car_drugs.placeRelativeToCar($.escape_car, 0.0, -1.0, -0.8);


  $.haitian1x = -1183.9;
  $.haitian1y = 101.7;
  $.hd1_heading = 230.8;


  $.haitian2x = -1182.1;
  $.haitian2y = 103.2;
  $.hd2_heading = 215.1;


  $.haitian3x = -1180.8;
  $.haitian3y = 105.9;
  $.hd3_heading = 215.1;


  $.haitian4x = -1182.3;
  $.haitian4y = 106.9;
  $.hd4_heading = 215.1;


  $.haitian5x = -1184.9;
  $.haitian5y = 104.5;
  $.hd5_heading = 227.6;


  $.haitian_z = 10.1;


  await creating_new_haitians();  // SCM GOSUB creating_new_haitians


  $.haitians_doubled_flag = 2;


  await creating_new_haitians();  // SCM GOSUB creating_new_haitians


  await asyncWait(2000);


  if (!($.player1.isInAnyCar())) {
    $.player1.setCoordinates(-1149.2, 71.3, 11.2);
  }
  else {
    $.player1.warpFromCarToCoord(-1149.2, 71.3, 11.2);
  }


  Camera.SetFixedPosition(-1149.2, 71.3, 13.7, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-1163.7, 73.3, 10.7, 2 /* JUMP_CUT */);


  if (!(Char.IsDead($.cuban_attacker1))) {
    $.cuban_attacker1.setCoordinates(-1149.2, 72.3, 10.2);
  }
  if (!(Char.IsDead($.cuban_attacker2))) {
    $.cuban_attacker2.setCoordinates(-1149.2, 73.3, 10.2);
  }
  if (!(Char.IsDead($.cuban_pickup3))) {
    $.cuban_pickup3.setCoordinates(-1151.2, 73.3, 10.2);
  }
  if (!(Char.IsDead($.cuban_pickup4))) {
    $.cuban_pickup4.setCoordinates(-1151.2, 72.3, 10.2);
  }
  if (!(Char.IsDead($.cuban_pickup5))) {
    $.cuban_pickup5.setCoordinates(-1153.2, 73.3, 10.2);
  }
  if (!(Char.IsDead($.cuban_pickup6))) {
    $.cuban_pickup6.setCoordinates(-1153.2, 72.3, 10.2);
  }


  Text.PrintNow("CUB2_21", 5000, 1); //Fight like men with huge cajones!
  Audio.PlayMissionAudio(2);
  while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.cuban_attacker2))) {
    await asyncWait(0);
  }
  Audio.ClearMissionAudio(2);
  Text.ClearThisPrint("CUB2_21");


  Audio.LoadMissionAudio(1, "CUB2_10" as any);
  Audio.LoadMissionAudio(2, "CUB2_11" as any);


  while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
  }


  if (!(Char.IsDead($.cuban_attacker2))) {
    $.cuban_attacker2.setHeedThreats(false /* FALSE */);
    $.cuban_attacker2.setObjNoObj();
    $.cuban_attacker2.clearThreatSearch();
    $.cuban_attacker2.setObjRunToCoord(-1167.7, 73.3);
    $.cuban_attacker2.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  await asyncWait(300);


  if (!(Char.IsDead($.cuban_attacker1))) {
    $.cuban_attacker1.setHeedThreats(false /* FALSE */);
    $.cuban_attacker1.setObjNoObj();
    $.cuban_attacker1.clearThreatSearch();
    $.cuban_attacker1.setObjRunToCoord(-1165.1, 68.0);
  }


  await asyncWait(300);


  if (!(Char.IsDead($.cuban_pickup3))) {
    $.cuban_pickup3.setHeedThreats(false /* FALSE */);
    $.cuban_pickup3.setObjNoObj();
    $.cuban_pickup3.clearThreatSearch();
    $.cuban_pickup3.setObjRunToCoord(-1166.7, 73.3);
  }


  await asyncWait(300);


  if (!(Char.IsDead($.cuban_pickup4))) {
    $.cuban_pickup4.setHeedThreats(false /* FALSE */);
    $.cuban_pickup4.setObjNoObj();
    $.cuban_pickup4.clearThreatSearch();
    $.cuban_pickup4.setObjRunToCoord(-1165.7, 73.3);
  }


  await asyncWait(300);


  if (!(Char.IsDead($.cuban_pickup5))) {
    $.cuban_pickup5.setHeedThreats(false /* FALSE */);
    $.cuban_pickup5.setObjNoObj();
    $.cuban_pickup5.clearThreatSearch();
    $.cuban_pickup5.setObjRunToCoord(-1164.7, 73.3);
  }


  await asyncWait(300);


  if (!(Char.IsDead($.cuban_pickup6))) {
    $.cuban_pickup6.setHeedThreats(false /* FALSE */);
    $.cuban_pickup6.setObjNoObj();
    $.cuban_pickup6.clearThreatSearch();
    $.cuban_pickup6.setObjRunToCoord(-1164.7, 70.3);
  }


  await asyncWait(300);


  if (!(Char.IsDead($.cuban_attacker1))) {
    $.cuban_attacker1.turnToFaceCoord(-1173.8, 102.5, 11.2);
  }
  if (!(Char.IsDead($.cuban_attacker2))) {
    $.cuban_attacker2.turnToFaceCoord(-1173.8, 102.5, 11.2);
  }
  if (!(Char.IsDead($.cuban_pickup3))) {
    $.cuban_pickup3.turnToFaceCoord(-1173.8, 102.5, 11.2);
  }
  if (!(Char.IsDead($.cuban_pickup4))) {
    $.cuban_pickup4.turnToFaceCoord(-1173.8, 102.5, 11.2);
  }
  if (!(Char.IsDead($.cuban_pickup5))) {
    $.cuban_pickup5.turnToFaceCoord(-1173.8, 102.5, 11.2);
  }
  if (!(Char.IsDead($.cuban_pickup6))) {
    $.cuban_pickup6.turnToFaceCoord(-1173.8, 102.5, 11.2);
  }


  $.scplayer.setObjRunToCoord(-1161.7, 73.3);


  await asyncWait(2000);
  TIMERA = 0;
}

async function little_ickle_bit() {


  await asyncWait(0);


  if (!(Char.IsDead($.cuban_attacker2))) {
    if ($.cuban_attacker2.locateAnyMeans2D(-1167.7, 73.3, 4.0, 4.0, false /* FALSE */) || TIMERA > 5000) {
      Camera.SetFixedPosition(-1163.2, 64.2, 16.5, 0.0, 0.0, 0.0);
      Camera.PointAtPoint(-1163.7, 73.3, 12.2, 2 /* JUMP_CUT */);
      if (!(Char.IsDead($.cuban_attacker1))) {
        $.cuban_attacker1.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
        $.cuban_attacker1.setThreatSearch(64 /* THREAT_COP */);
        $.cuban_attacker1.setThreatSearch(65536 /* THREAT_EMERGENCY */);
        $.cuban_attacker1.setHeedThreats(true /* TRUE */);
      }
      if (!(Char.IsDead($.cuban_pickup3))) {
        $.cuban_pickup3.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
        $.cuban_pickup3.setThreatSearch(64 /* THREAT_COP */);
        $.cuban_pickup3.setThreatSearch(65536 /* THREAT_EMERGENCY */);
        $.cuban_pickup3.setHeedThreats(true /* TRUE */);
      }
      if (!(Char.IsDead($.cuban_pickup4))) {
        $.cuban_pickup4.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
        $.cuban_pickup4.setThreatSearch(64 /* THREAT_COP */);
        $.cuban_pickup4.setThreatSearch(65536 /* THREAT_EMERGENCY */);
        $.cuban_pickup4.setHeedThreats(true /* TRUE */);
      }
      if (!(Char.IsDead($.cuban_pickup5))) {
        $.cuban_pickup5.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
        $.cuban_pickup5.setThreatSearch(64 /* THREAT_COP */);
        $.cuban_pickup5.setThreatSearch(65536 /* THREAT_EMERGENCY */);
        $.cuban_pickup5.setHeedThreats(true /* TRUE */);
      }
      if (!(Char.IsDead($.cuban_pickup6))) {
        $.cuban_pickup6.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
        $.cuban_pickup6.setThreatSearch(64 /* THREAT_COP */);
        $.cuban_pickup6.setThreatSearch(65536 /* THREAT_EMERGENCY */);
        $.cuban_pickup6.setHeedThreats(true /* TRUE */);
      }
      await asyncWait(2000);
      if (!(Char.IsDead($.cuban_attacker2))) {
        if (!(Car.IsDead($.escape_car))) {
          //CLEAR_CHAR_THREAT_SEARCH cuban_attacker2
          $.cuban_attacker2.setObjEnterCarAsPassenger($.escape_car);
          $.cuban_attacker2.setCantBeDraggedOut(true /* TRUE */);
        }
      }
      // SCM GOTO → next_little_ickle_bit (not lowered; manual jump required)
      throw new Error("unresolved GOTO next_little_ickle_bit"); // fallback: would break linear control flow
    }
    else {
      // SCM GOTO → little_ickle_bit (not lowered; manual jump required)
      throw new Error("unresolved GOTO little_ickle_bit"); // fallback: would break linear control flow
    }
  }
}





async function next_little_ickle_bit() {
  $.fake_haitian1 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, -1115.6, 69.6, 10.1);
  $.fake_haitian1.setHeading(105.9);
  $.fake_haitian1.giveWeapon(23 /* WEAPONTYPE_uzi */, 30000);
  $.fake_haitian1.clearThreatSearch();
  $.fake_haitian1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.fake_haitian1.setThreatSearch(128 /* THREAT_GANG_CUBAN */);
  $.fake_haitian1.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.fake_haitian1.setThreatSearch(64 /* THREAT_COP */);
  $.fake_haitian1.setStopShootDontSeekEntity(true /* TRUE */);
  $.fake_haitian1.setHeedThreats(true /* TRUE */);


  $.fake_haitian2 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, -1115.6, 73.7, 10.1);
  $.fake_haitian2.setHeading(105.9);
  $.fake_haitian2.giveWeapon(23 /* WEAPONTYPE_uzi */, 30000);
  $.fake_haitian2.clearThreatSearch();
  $.fake_haitian2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.fake_haitian2.setThreatSearch(128 /* THREAT_GANG_CUBAN */);
  $.fake_haitian2.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.fake_haitian2.setThreatSearch(64 /* THREAT_COP */);
  $.fake_haitian2.setStopShootDontSeekEntity(true /* TRUE */);
  $.fake_haitian2.setHeedThreats(true /* TRUE */);


  $.fake_haitian3 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNb, -1115.6, 71.0, 10.1);
  $.fake_haitian3.setHeading(105.9);
  $.fake_haitian3.giveWeapon(23 /* WEAPONTYPE_uzi */, 30000);
  $.fake_haitian3.clearThreatSearch();
  $.fake_haitian3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.fake_haitian3.setThreatSearch(128 /* THREAT_GANG_CUBAN */);
  $.fake_haitian3.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.fake_haitian3.setThreatSearch(64 /* THREAT_COP */);
  $.fake_haitian3.setStopShootDontSeekEntity(true /* TRUE */);
  $.fake_haitian3.setHeedThreats(true /* TRUE */);


  Camera.RestoreJumpcut();
  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  TIMERA = 0;
  Text.Print("CUB2_16", 5000, 1); //Tommy, we have proved our manful bravery!
  if (!(Char.IsDead($.cuban_attacker2))) {
    Audio.PlayMissionAudio(1);
    while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.cuban_attacker2))) {
      await asyncWait(0);
      if (!(Car.IsDead($.escape_car))) {
        $.escape_car_drugs.placeRelativeToCar($.escape_car, 0.0, -1.0, -0.8);
      }
    }
    Audio.ClearMissionAudio(1);
  }
  else {
    Audio.ClearMissionAudio(1);
  }
  Text.ClearThisPrint("CUB2_16");
  Text.Print("CUB2_17", 10000, 1); //Let us steal that van full of drugs and make good our escape!
  if (!(Char.IsDead($.cuban_attacker2))) {
    Audio.PlayMissionAudio(2);
    while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.cuban_attacker2))) {
      await asyncWait(0);
      if (!(Car.IsDead($.escape_car))) {
        $.escape_car_drugs.placeRelativeToCar($.escape_car, 0.0, -1.0, -0.8);
      }
    }
    Audio.ClearMissionAudio(2);
  }
  else {
    Audio.ClearMissionAudio(2);
  }


  $.player1.alterWantedLevelNoDrop(2);
}


// ******************************************END OF CUTSCENE********************************


async function final_wave_part1() {
  // SCM GOTO → final_wave_part1 lowered to endless loop
  while (true) {
    await asyncWait(0);


    if (!(Car.IsDead($.escape_car))) {
      $.escape_car_drugs.placeRelativeToCar($.escape_car, 0.0, -1.0, -0.8);
      if ($.blob_flag == 0) {
        $.escape_car_blip = Blip.AddForCar($.escape_car);
        $.blob_flag = 1;
      }
      if ($.player1.isInCar($.escape_car)) {
        if (TIMERA < 15000) {
          Text.ClearPrints();
          Text.Print("CUB2_16", 5000, 1); //Tommy, we have proved our manful bravery!
        }
        $.escape_car_blip.remove();
        $.home_blip = Blip.AddForCoord(-1160.0, -605.9, 10.7);
        $.blob_flag = 0;
        Text.PrintNow("CUB2_24", 5000, 1); //Return to Robina's Cafe with the Van and park it round the back.
        if (!(Car.IsDead($.escape_car))) {
          $.escape_car.setOnlyDamagedByPlayer(false /* FALSE */);
        }
        // SCM GOTO → final_wave_part2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO final_wave_part2"); // fallback: would break linear control flow
      }
    }
    else {
      Text.PrintNow("CUB2_11", 5000, 1); //You fool, we needed that car.
      // SCM GOTO → mission_failed_cuban2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_cuban2"); // fallback: would break linear control flow
    }

    //creating final wave of Haitians pouring out of base


    $.haitian1x = -1198.9;
    $.haitian1y = 96.7;
    $.hd1_heading = 255.8;


    $.haitian2x = -1198.9;
    $.haitian2y = 96.7;
    $.hd2_heading = 255.8;


    $.haitian3x = -1198.9;
    $.haitian3y = 96.7;
    $.hd3_heading = 255.8;


    $.haitian4x = -1198.9;
    $.haitian4y = 96.7;
    $.hd4_heading = 255.8;


    $.haitian5x = -1198.9;
    $.haitian5y = 96.7;
    $.hd5_heading = 255.8;


    await creating_new_haitians();  // SCM GOSUB creating_new_haitians


  }
}



async function final_wave_part2() {
  // SCM GOTO → final_wave_part2 lowered to endless loop
  while (true) {
    await asyncWait(0);


    if (!(Car.IsDead($.escape_car))) {
      $.escape_car_drugs.placeRelativeToCar($.escape_car, 0.0, -1.0, -0.8);
      if ($.player1.isInCar($.escape_car)) {
        if ($.player1.locateStoppedInCar3D(-1160.0, -605.9, 10.7, 10.0, 10.0, 10.0, true /* TRUE */)) {
          $.scplayer.setObjLeaveCar($.escape_car);
          $.escape_car.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
          // SCM GOTO → mission_passed_cuban2 (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_passed_cuban2"); // fallback: would break linear control flow
        }
        if ($.blob_flag == 0) {
          $.home_blip.remove();
          $.escape_car_blip.remove();
          $.home_blip = Blip.AddForCoord(-1160.0, -605.9, 10.7);
          $.blob_flag = 1;
        }
      }
      else {
        if ($.blob_flag == 1) {
          Text.PrintNow("IN_VEH", 5000, 1); //"Get back into the vehicle and get on with the mission!"
          $.home_blip.remove();
          $.escape_car_blip.remove();
          $.escape_car_blip = Blip.AddForCar($.escape_car);
          $.blob_flag = 0;
        }
      }
    }
    else {
      Text.PrintNow("CUB2_11", 5000, 1); //You fool, we needed that car.
      // SCM GOTO → mission_failed_cuban2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_cuban2"); // fallback: would break linear control flow
    }


    await creating_new_haitians();  // SCM GOSUB creating_new_haitians


    if (Char.IsDead($.cuban_attacker2)) {
      $.cuban_attacker2.markAsNoLongerNeeded();
    }


    if (Char.IsDead($.cuban_attacker1)) {
      $.cuban_attacker1.markAsNoLongerNeeded();
    }


    if (Char.IsDead($.cuban_pickup3)) {
      $.cuban_pickup3.markAsNoLongerNeeded();
    }


    if (Char.IsDead($.cuban_pickup4)) {
      $.cuban_pickup4.markAsNoLongerNeeded();
    }


    if (Char.IsDead($.cuban_pickup5)) {
      $.cuban_pickup5.markAsNoLongerNeeded();
    }


    if (Char.IsDead($.cuban_pickup6)) {
      $.cuban_pickup6.markAsNoLongerNeeded();
    }


    if ($.body_count_cub2 == 1) {
      await nutters();  // SCM GOSUB nutters
    }
  }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////THIRD GOAL - completed - MISSION PASSED/////////////////////////////////////////////////////////

// Mission failed

async function mission_failed_cuban2() {


  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
}




// mission passed

async function mission_passed_cuban2() {


  Text.ClearPrints();
  Text.PrintWithNumberBig("M_PASS", 2000, 5000, 1); //"Mission Passed!"
  Audio.PlayMissionPassedTune(1);
  $.player1.clearWantedLevel();
  $.player1.addScore(2000);
  Stat.PlayerMadeProgress(1);
  Stat.RegisterMissionPassed("CUB_2");
  // START_NEW_SCRIPT cuban_mission3_loop 
  $.flag_cuban_mission2_passed = 1;
}




// mission cleanup

async function mission_cleanup_cuban2() {
  ONMISSION = 0;
  Game.ClearThreatForPedType(8 /* PEDTYPE_GANG_HAITIAN */, 1 /* THREAT_PLAYER1 */);
  $.player1.setControl(true /* on */);
  //andy_has_control = 0 //reseting gate
  //closing gate

  while (!($.haitian_gate.slide(-1114.5, 67.0, 10.1, 10.0, 10.0, 0.0, false /* FALSE */))) {
    await asyncWait(0);
  }
  Streaming.MarkModelAsNoLongerNeeded(CBa);
  Streaming.MarkModelAsNoLongerNeeded(stinger);
  Streaming.MarkModelAsNoLongerNeeded(pony);
  Streaming.MarkModelAsNoLongerNeeded(uzi);
  Streaming.MarkModelAsNoLongerNeeded(7 /* sniper */);
  Streaming.MarkModelAsNoLongerNeeded(HNa);
  Streaming.MarkModelAsNoLongerNeeded(CBb);
  Streaming.MarkModelAsNoLongerNeeded(HNb);
  Streaming.MarkModelAsNoLongerNeeded(m4);
  Streaming.MarkModelAsNoLongerNeeded(taxi);
  Streaming.MarkModelAsNoLongerNeeded(WMOCA);
  Streaming.MarkModelAsNoLongerNeeded(cellphone);
  if (!($.free_scope.hasBeenCollected())) {
    $.free_scope.remove();
  }
  $.escape_car_drugs.delete();
  $.cuban_pickup_blip.remove();
  $.drop_off_point1.remove();
  $.radar_blip_cuban_carry_car.remove();
  $.escape_car_blip.remove();
  $.home_blip.remove();
  $.cuban_blip1.remove();
  $.cuban_blip2.remove();
  $.cuban_blip3.remove();
  $.cuban_blip4.remove();
  $.cuban_blip5.remove();
  $.sniper_blip.remove();
  $.timer_mobile_start = Clock.GetGameTimer();
  Mission.Finish();
}




///////////////////////////////////////////////////////////////////////////////////////////

async function creating_new_haitians() {
  ///////////////////////////////////////////////////////////////////////////////////////////

  if (Char.IsDead($.haitian_defender1)) {
    $.haitian_defender1.markAsNoLongerNeeded();
    $.haitian_defender1 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, $.haitian1x, $.haitian1y, $.haitian_z);
    $.haitian_defender1.setHeading($.hd1_heading);
    $.haitian_defender1.giveWeapon(23 /* WEAPONTYPE_uzi */, 30000);
    $.haitian_defender1.clearThreatSearch();
    $.haitian_defender1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    //SET_CHAR_THREAT_SEARCH haitian_defender1 THREAT_GANG_CUBAN
    $.haitian_defender1.setThreatSearch(1 /* THREAT_PLAYER1 */);
    //SET_CHAR_THREAT_SEARCH haitian_defender1 THREAT_COP
    $.haitian_defender1.setStopShootDontSeekEntity(true /* TRUE */);
    $.haitian_defender1.setHeedThreats(true /* TRUE */);
    if ($.cuban_flag1 == 0) {
      $.cuban_blip1.remove();
      $.cuban_blip1 = Blip.AddForChar($.haitian_defender1);
      $.haitian_defender1.setAccuracy(80);
    }
    $.number_of_haitians_dead++;
  }
  else {
    if (!($.haitians_doubled_flag == 0)) {
      $.haitian_defender1.setStopShootDontSeekEntity(false /* FALSE */);
      $.haitian_defender1.setObjKillPlayerOnFoot($.player1);
    }
  }


  if (Char.IsDead($.haitian_defender2)) {
    $.haitian_defender2.markAsNoLongerNeeded();
    $.haitian_defender2 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, $.haitian2x, $.haitian2y, $.haitian_z);
    $.haitian_defender2.setHeading($.hd2_heading);
    $.haitian_defender2.giveWeapon(23 /* WEAPONTYPE_uzi */, 30000);
    $.haitian_defender2.clearThreatSearch();
    $.haitian_defender2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    $.haitian_defender2.setThreatSearch(128 /* THREAT_GANG_CUBAN */);
    $.haitian_defender2.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.haitian_defender2.setThreatSearch(64 /* THREAT_COP */);
    $.haitian_defender2.setStopShootDontSeekEntity(true /* TRUE */);
    $.haitian_defender2.setHeedThreats(true /* TRUE */);
    if ($.cuban_flag1 == 0) {
      $.cuban_blip2.remove();
      $.cuban_blip2 = Blip.AddForChar($.haitian_defender2);
      $.haitian_defender2.setAccuracy(80);
    }
    $.number_of_haitians_dead++;
  }
  else {
    if (!($.haitians_doubled_flag == 0)) {
      //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY haitian_defender2 FALSE
      $.haitian_defender2.setObjKillPlayerOnFoot($.player1);
    }
  }


  if (Char.IsDead($.haitian_defender3)) {
    $.haitian_defender3.markAsNoLongerNeeded();
    $.haitian_defender3 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, $.haitian3x, $.haitian3y, $.haitian_z);
    $.haitian_defender3.setHeading($.hd3_heading);
    $.haitian_defender3.giveWeapon(23 /* WEAPONTYPE_uzi */, 30000);
    $.haitian_defender3.clearThreatSearch();
    $.haitian_defender3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    $.haitian_defender3.setThreatSearch(128 /* THREAT_GANG_CUBAN */);
    $.haitian_defender3.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.haitian_defender3.setThreatSearch(64 /* THREAT_COP */);
    $.haitian_defender3.setStopShootDontSeekEntity(true /* TRUE */);
    $.haitian_defender3.setHeedThreats(true /* TRUE */);
    if ($.cuban_flag1 == 0) {
      $.cuban_blip3.remove();
      $.cuban_blip3 = Blip.AddForChar($.haitian_defender3);
    }
    $.number_of_haitians_dead++;
  }
  else {
    if (!($.haitians_doubled_flag == 0)) {
      //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY haitian_defender3 FALSE
      $.haitian_defender3.setObjRunToCoord(-1173.1, 79.6);
      $.haitian_defender3.setAccuracy(80);
    }
  }


  if (Char.IsDead($.haitian_defender4)) {
    $.haitian_defender4.markAsNoLongerNeeded();
    $.haitian_defender4 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, $.haitian4x, $.haitian4y, $.haitian_z);
    $.haitian_defender4.setHeading($.hd4_heading);
    $.haitian_defender4.giveWeapon(23 /* WEAPONTYPE_uzi */, 30000);
    $.haitian_defender4.clearThreatSearch();
    $.haitian_defender4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    $.haitian_defender4.setThreatSearch(128 /* THREAT_GANG_CUBAN */);
    $.haitian_defender4.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.haitian_defender4.setThreatSearch(64 /* THREAT_COP */);
    $.haitian_defender4.setStopShootDontSeekEntity(true /* TRUE */);
    $.haitian_defender4.setHeedThreats(true /* TRUE */);
    if ($.cuban_flag1 == 0) {
      $.cuban_blip4.remove();
      $.cuban_blip4 = Blip.AddForChar($.haitian_defender4);
      $.haitian_defender4.setAccuracy(80);
    }
    $.number_of_haitians_dead++;
  }
  else {
    if (!($.haitians_doubled_flag == 0)) {
      //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY haitian_defender4 FALSE
      $.haitian_defender4.setObjKillPlayerOnFoot($.player1);
    }
  }


  if (Char.IsDead($.haitian_defender5)) {
    $.haitian_defender5.markAsNoLongerNeeded();
    $.haitian_defender5 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, $.haitian5x, $.haitian5y, $.haitian_z);
    $.haitian_defender5.setHeading($.hd5_heading);
    $.haitian_defender5.clearThreatSearch();
    $.haitian_defender5.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    //SET_CHAR_THREAT_SEARCH haitian_defender5 THREAT_GANG_CUBAN
    $.haitian_defender5.setThreatSearch(1 /* THREAT_PLAYER1 */);
    //SET_CHAR_THREAT_SEARCH haitian_defender5 THREAT_COP
    $.haitian_defender5.setStopShootDontSeekEntity(true /* TRUE */);
    $.haitian_defender5.setHeedThreats(true /* TRUE */);
    $.haitian_defender5.setAccuracy(80);
    if ($.cuban_flag1 == 0) {
      $.cuban_blip5.remove();
      $.cuban_blip5 = Blip.AddForChar($.haitian_defender5);
      $.haitian_defender5.giveWeapon(23 /* WEAPONTYPE_uzi */, 30000);
    }
    else {
      $.haitian_defender5.giveWeapon(26 /* WEAPONTYPE_m4 */, 30000);
      $.haitian_defender5.addArmor(100);
    }
    $.number_of_haitians_dead++;
  }
  else {
    if (!($.haitians_doubled_flag == 0)) {
      //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY haitian_defender5 FALSE
      $.haitian_defender5.setObjRunToCoord(-1172.6, 91.6);
    }
  }


  if (!($.haitians_doubled_flag == 0)) {
    if (Char.IsDead($.haitian_defender6)) {
      if ($.haitians_doubled_flag == 1) {
        $.haitian_defender6 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, -1166.5, 104.2, 10.2);
      }
      else {
        $.haitian_defender6 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, -1186.5, 104.0, 10.2);
      }
      $.haitian_defender6.setHeading(187.5);
      $.haitian_defender6.giveWeapon(23 /* WEAPONTYPE_uzi */, 30000);
      $.haitian_defender6.clearThreatSearch();
      $.haitian_defender6.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
      $.haitian_defender6.setThreatSearch(128 /* THREAT_GANG_CUBAN */);
      $.haitian_defender6.setThreatSearch(1 /* THREAT_PLAYER1 */);
      $.haitian_defender6.setThreatSearch(64 /* THREAT_COP */);
      //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY haitian_defender6 FALSE
      $.haitian_defender6.setObjKillPlayerOnFoot($.player1);
      $.haitian_defender6.setHeedThreats(true /* TRUE */);
    }
    if (Char.IsDead($.haitian_defender7)) {
      if ($.haitians_doubled_flag == 1) {
        $.haitian_defender7 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, -1169.0, 103.5, 10.2);
      }
      else {
        $.haitian_defender7 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, -1186.5, 104.0, 10.2);
      }
      $.haitian_defender7.setHeading(199.5);
      $.haitian_defender7.giveWeapon(23 /* WEAPONTYPE_uzi */, 30000);
      $.haitian_defender7.clearThreatSearch();
      $.haitian_defender7.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
      $.haitian_defender7.setThreatSearch(128 /* THREAT_GANG_CUBAN */);
      $.haitian_defender7.setThreatSearch(1 /* THREAT_PLAYER1 */);
      $.haitian_defender7.setThreatSearch(64 /* THREAT_COP */);
      //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY haitian_defender7 FALSE
      $.haitian_defender7.setObjKillPlayerOnFoot($.player1);
      $.haitian_defender7.setHeedThreats(true /* TRUE */);
    }
    if (Char.IsDead($.haitian_defender8)) {
      if ($.haitians_doubled_flag == 1) {
        $.haitian_defender8 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, -1170.5, 103.2, 10.2);
      }
      else {
        $.haitian_defender8 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, -1186.5, 104.0, 10.2);
      }
      $.haitian_defender8.setHeading(187.5);
      $.haitian_defender8.giveWeapon(23 /* WEAPONTYPE_uzi */, 30000);
      $.haitian_defender8.clearThreatSearch();
      $.haitian_defender8.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
      $.haitian_defender8.setThreatSearch(128 /* THREAT_GANG_CUBAN */);
      $.haitian_defender8.setThreatSearch(1 /* THREAT_PLAYER1 */);
      $.haitian_defender8.setThreatSearch(64 /* THREAT_COP */);
      //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY haitian_defender8 FALSE
      $.haitian_defender8.setObjKillPlayerOnFoot($.player1);
      $.haitian_defender8.setHeedThreats(true /* TRUE */);
    }


    if (Char.IsDead($.haitian_defender9)) {
      if ($.haitians_doubled_flag == 1) {
        $.haitian_defender9 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, -1164.5, 106.2, 10.2);
      }
      else {
        $.haitian_defender9 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, -1186.5, 104.0, 10.2);
      }
      $.haitian_defender9.setHeading(187.5);
      $.haitian_defender9.giveWeapon(23 /* WEAPONTYPE_uzi */, 30000);
      $.haitian_defender9.clearThreatSearch();
      $.haitian_defender9.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
      $.haitian_defender9.setThreatSearch(128 /* THREAT_GANG_CUBAN */);
      $.haitian_defender9.setThreatSearch(1 /* THREAT_PLAYER1 */);
      $.haitian_defender9.setThreatSearch(64 /* THREAT_COP */);
      //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY haitian_defender9 FALSE
      $.haitian_defender9.setObjKillPlayerOnFoot($.player1);
      $.haitian_defender9.setHeedThreats(true /* TRUE */);
    }
    if (Char.IsDead($.haitian_defender10)) {
      if ($.haitians_doubled_flag == 1) {
        $.haitian_defender10 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, -1168.5, 106.2, 10.2);
      }
      else {
        $.haitian_defender10 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, -1186.5, 104.0, 10.2);
      }
      $.haitian_defender10.setHeading(187.5);
      $.haitian_defender10.giveWeapon(23 /* WEAPONTYPE_uzi */, 30000);
      $.haitian_defender10.clearThreatSearch();
      $.haitian_defender10.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
      $.haitian_defender10.setThreatSearch(128 /* THREAT_GANG_CUBAN */);
      $.haitian_defender10.setThreatSearch(1 /* THREAT_PLAYER1 */);
      $.haitian_defender10.setThreatSearch(64 /* THREAT_COP */);
      //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY haitian_defender10 FALSE
      $.haitian_defender10.setObjKillPlayerOnFoot($.player1);
      $.haitian_defender10.setHeedThreats(true /* TRUE */);
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
}

///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////

async function leading_the_cubans_part1() {
  ///////////////////////////////////////////////////////////////////////////////////////////
  //setting cubans up for when player is in haitian danger area

  if (!(Char.IsDead($.cuban_attacker1))) {
    if (!(Char.IsDead($.cuban_attacker2))) {
      if (!(Char.IsDead($.cuban_attacker3))) {
        if ($.player1.isInArea3D(-1086.0, 74.6, 17.8, -1112.8, 64.7, 7.0, false /* FALSE */)) {
          if ($.ped_density_flag == 0) {
            World.SetPedDensityMultiplier(0.0);
            $.ped_density_flag = 1;
          }
          if (!($.cuban_attacker1.locateOnFoot2D(-1096.3, 67.8, 2.0, 2.0, false /* FALSE */))) {
            //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY	cuban_attacker1 FALSE
            $.cuban_attacker1.setCrouch(false /* FALSE */, 1);
            $.cuban_crouch1 = 0;
            $.cuban_attacker1.setObjRunToCoord(-1096.3, 67.8);
          }
          else {
            if ($.cuban_attacker1.isObjectivePassed()) {
              $.cuban_attacker1.setHeading(91.5);
              if ($.cuban_crouch1 == 0) {
                $.cuban_attacker1.setCrouch(true /* TRUE */, 86400000);
                $.cuban_crouch1 = 1;
              }
              $.cuban_attacker1.setStopShootDontSeekEntity(true /* TRUE */);
            }
          }
          if (!($.cuban_attacker2.locateOnFoot2D(-1081.2, 69.9, 2.0, 2.0, false /* FALSE */))) {
            //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY	cuban_attacker2 FALSE
            $.cuban_attacker2.setObjRunToCoord(-1079.3, 69.9);
          }
          else {
            if ($.cuban_attacker2.isObjectivePassed()) {
              $.cuban_attacker2.setStopShootDontSeekEntity(true /* TRUE */);
              $.cuban_attacker2.setHeading(89.9);
            }
          }
          if (!($.cuban_attacker3.locateOnFoot2D(-1096.8, 72.6, 2.0, 2.0, false /* FALSE */))) {
            //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY	cuban_attacker3 FALSE
            $.cuban_attacker3.setCrouch(false /* FALSE */, 1);
            $.cuban_crouch3 = 0;
            $.cuban_attacker3.setObjRunToCoord(-1096.8, 72.6);
          }
          else {
            if ($.cuban_attacker3.isObjectivePassed()) {
              $.cuban_attacker3.setHeading(91.5);
              if ($.cuban_crouch3 == 0) {
                $.cuban_attacker3.setCrouch(true /* TRUE */, 86400000);
                $.cuban_crouch3 = 1;
              }
              $.cuban_attacker3.setStopShootDontSeekEntity(true /* TRUE */);
            }
          }
          //setting cubans up for when player is outside haitian danger area

        }
        else {
          if ($.ped_density_flag == 1) {
            World.SetPedDensityMultiplier(1.0);
            $.ped_density_flag = 0;
          }
          if (!($.cuban_attacker1.locateOnFoot2D(-1079.5, 72.6, 2.0, 2.0, false /* FALSE */))) {
            $.cuban_attacker1.setCrouch(false /* FALSE */, 1);
            //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY	cuban_attacker1 FALSE
            $.cuban_attacker1.setObjRunToCoord(-1079.5, 72.6);
          }
          else {
            if ($.cuban_attacker1.isObjectivePassed()) {
              $.cuban_attacker1.setStopShootDontSeekEntity(true /* TRUE */);
              $.cuban_attacker1.setHeading(91.5);
            }
          }
          if (!($.cuban_attacker2.locateOnFoot2D(-1079.6, 73.9, 2.0, 2.0, false /* FALSE */))) {
            //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY	cuban_attacker2 FALSE
            $.cuban_attacker2.setObjRunToCoord(-1079.6, 73.9);
          }
          else {
            if ($.cuban_attacker2.isObjectivePassed()) {
              $.cuban_attacker2.setStopShootDontSeekEntity(true /* TRUE */);
              $.cuban_attacker2.setHeading(270.9);
            }
          }
          if (!($.cuban_attacker3.locateOnFoot2D(-1079.3, 68.6, 2.0, 2.0, false /* FALSE */))) {
            $.cuban_attacker3.setCrouch(false /* FALSE */, 1);
            //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY	cuban_attacker3 FALSE
            $.cuban_attacker3.setObjRunToCoord(-1079.3, 68.6);
          }
          else {
            if ($.cuban_attacker3.isObjectivePassed()) {
              $.cuban_attacker3.setStopShootDontSeekEntity(true /* TRUE */);
              $.cuban_attacker3.setHeading(82.1);
            }
          }
        }
      }
    }
  }


  if ($.fire_car_flag == 0) {
    if ($.player1.isInAnyCar()) {
      if ($.player1.isInArea3D(-1095.2, 57.9, 17.8, -1122.8, 90.7, 7.0, false /* FALSE */)) {
        $.death_car = $.player1.storeCarIsIn();
        $.death_car.setHealth(250);
        $.fire_car_flag = 1;
      }
    }
    else {
      $.fire_car_flag = 0;
    }
  }


  if ($.player1.isInAnyCar()) {
    if ($.player1.isInArea3D(-1113.0, 57.9, 17.8, -1122.8, 90.7, 7.0, false /* FALSE */)) {
      $.death_car = $.player1.storeCarIsIn();
      $.death_car.explode();
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
}

///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////

async function picked_up_cubans_fighting_rules() {
  ///////////////////////////////////////////////////////////////////////////////////////////
  //setting cubans up for when player1 is in haitian danger area

  if ($.player1.isInArea3D(-1086.0, 74.6, 17.8, -1112.8, 64.7, 7.0, false /* FALSE */)) {
    if (!(Char.IsDead($.cuban_pickup1))) {
      if (!($.cuban_pickup1.locateOnFoot2D(-1089.9, 68.1, 2.0, 2.0, false /* FALSE */))) {
        //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY	cuban_pickup1 FALSE
        $.cuban_pickup1.setObjRunToCoord(-1089.9, 68.1);
      }
      else {
        if ($.cuban_pickup1.isObjectivePassed()) {
          $.cuban_pickup1.setStopShootDontSeekEntity(true /* TRUE */);
          $.cuban_pickup1.setHeading(89.9);
        }
      }
    }
    if (!(Char.IsDead($.cuban_pickup2))) {
      if (!($.cuban_pickup2.locateOnFoot2D(-1090.2, 72.6, 2.0, 2.0, false /* FALSE */))) {
        //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY	cuban_pickup2 FALSE
        $.cuban_pickup2.setObjRunToCoord(-1090.2, 72.6);
      }
      else {
        if ($.cuban_pickup2.isObjectivePassed()) {
          $.cuban_pickup2.setStopShootDontSeekEntity(true /* TRUE */);
          $.cuban_pickup2.setHeading(89.9);
        }
      }
    }
    if (!(Char.IsDead($.cuban_pickup3))) {
      if (!($.cuban_pickup3.locateOnFoot2D(-1089.6, 69.1, 2.0, 2.0, false /* FALSE */))) {
        //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY	cuban_pickup3 FALSE
        $.cuban_pickup3.setObjRunToCoord(-1089.6, 69.1);
      }
      else {
        if ($.cuban_pickup3.isObjectivePassed()) {
          $.cuban_pickup3.setStopShootDontSeekEntity(true /* TRUE */);
          $.cuban_pickup3.setHeading(89.9);
        }
      }
    }
    //setting cubans up for when player1 is outside haitian danger area

  }
  else {
    if (!(Char.IsDead($.cuban_pickup1))) {
      if (!($.cuban_pickup1.locateOnFoot2D(-1076.5, 69.8, 2.0, 2.0, false /* FALSE */))) {
        //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY	cuban_pickup1 FALSE
        $.cuban_pickup1.setObjRunToCoord(-1076.5, 69.8);
      }
      else {
        if ($.cuban_pickup1.isObjectivePassed()) {
          $.cuban_pickup1.setStopShootDontSeekEntity(true /* TRUE */);
          $.cuban_pickup1.setHeading(91.5);
        }
      }
    }
    if (!(Char.IsDead($.cuban_pickup2))) {
      if (!($.cuban_pickup2.locateOnFoot2D(-1075.2, 71.0, 2.0, 2.0, false /* FALSE */))) {
        //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY	cuban_pickup2 FALSE
        $.cuban_pickup2.setObjRunToCoord(-1075.2, 71.0);
      }
      else {
        if ($.cuban_pickup2.isObjectivePassed()) {
          $.cuban_pickup2.setStopShootDontSeekEntity(true /* TRUE */);
          $.cuban_pickup2.setHeading(91.5);
        }
      }
    }
    if (!(Char.IsDead($.cuban_pickup3))) {
      if (!($.cuban_pickup3.locateOnFoot2D(-1075.2, 67.5, 2.0, 2.0, false /* FALSE */))) {
        //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY	cuban_pickup3 FALSE
        $.cuban_pickup3.setObjRunToCoord(-1075.2, 67.5);
      }
      else {
        if ($.cuban_pickup3.isObjectivePassed()) {
          $.cuban_pickup3.setStopShootDontSeekEntity(true /* TRUE */);
          $.cuban_pickup3.setHeading(91.5);
        }
      }
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
}

///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////

async function checking_car_is_in_one_piece() {
  ///////////////////////////////////////////////////////////////////////////////////////////

  if (!(Car.IsDead($.cuban_carry_car))) {
    if ($.cuban_carry_car.isUpsidedown() && $.cuban_carry_car.isStopped()) {
      $.flag_cuban_carry_car_upsidedown = 1;
    }
    if (!($.player1.isInCar($.cuban_carry_car)) && $.flag_player_not_in_cuban_carry_car == 0 && $.flag_cuban_carry_car_upsidedown == 0) {
      Text.PrintNow("IN_VEH", 5000, 1); //"Get back into the vehicle and get on with the mission!"
      $.drop_off_point1.remove();
      $.radar_blip_cuban_carry_car = Blip.AddForCar($.cuban_carry_car);
      $.flag_player_not_in_cuban_carry_car = 1;
    }
    if ($.player1.isInCar($.cuban_carry_car) && $.flag_player_not_in_cuban_carry_car == 1) {
      $.radar_blip_cuban_carry_car.remove();
      $.drop_off_point1 = Blip.AddForCoord(-1072.6, 70.3, 11.2);
      Text.ClearPrints();
      $.flag_player_not_in_cuban_carry_car = 0;
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
}

///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////

async function first_wave_haitian_attacking_rules() {
  ///////////////////////////////////////////////////////////////////////////////////////////


  if (!(Char.IsDead($.haitian_defender1))) {
    if (!($.haitian_defender1.locateOnFoot2D(-1115.8, 67.7, 1.0, 1.0, false /* FALSE */))) {
      //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY	haitian_defender1 FALSE
      $.haitian_defender1.setObjRunToCoord(-1115.8, 67.7);
      $.hait_heading1 = 0;
    }
    else {
      if ($.hait_heading1 == 0) {
        if ($.haitian_defender1.isObjectivePassed()) {
          $.haitian_defender1.setHeading(272.8);
          $.haitian_defender1.setStopShootDontSeekEntity(true /* TRUE */);
          $.hait_heading1 = 1;
        }
      }
    }
  }
  if (!(Char.IsDead($.haitian_defender2))) {
    if (!($.haitian_defender2.locateOnFoot2D(-1115.8, 69.7, 1.0, 1.0, false /* FALSE */))) {
      //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY	haitian_defender2 FALSE
      $.haitian_defender2.setObjRunToCoord(-1115.8, 69.7);
      $.hait_heading2 = 0;
    }
    else {
      if ($.hait_heading2 == 0) {
        if ($.haitian_defender2.isObjectivePassed()) {
          $.haitian_defender2.setStopShootDontSeekEntity(true /* TRUE */);
          $.haitian_defender2.setHeading(257.4);
          $.hait_heading2 = 1;
        }
      }
    }
  }


  if (!(Char.IsDead($.haitian_defender3))) {
    if (!($.haitian_defender3.locateOnFoot2D(-1115.8, 71.7, 1.0, 1.0, false /* FALSE */))) {
      //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY	haitian_defender3 FALSE
      $.haitian_defender3.setObjRunToCoord(-1115.8, 71.7);
      $.hait_heading3 = 0;
    }
    else {
      if ($.hait_heading3 == 0) {
        if ($.haitian_defender3.isObjectivePassed()) {
          $.haitian_defender3.setStopShootDontSeekEntity(true /* TRUE */);
          $.haitian_defender3.setHeading(285.1);
          $.hait_heading3 = 1;
        }
      }
    }
  }


  if (!(Char.IsDead($.haitian_defender4))) {
    if (!($.haitian_defender4.locateOnFoot2D(-1128.9, 67.6, 1.0, 1.0, false /* FALSE */))) {
      //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY	haitian_defender4 FALSE
      $.haitian_defender4.setObjRunToCoord(-1128.9, 67.6);
      $.hait_heading4 = 0;
    }
    else {
      if ($.hait_heading4 == 0) {
        if ($.haitian_defender4.isObjectivePassed()) {
          $.haitian_defender4.setStopShootDontSeekEntity(true /* TRUE */);
          $.haitian_defender4.setHeading(257.5);
          $.hait_heading4 = 1;
        }
      }
    }
  }


  if (!(Char.IsDead($.haitian_defender5))) {
    if (!($.haitian_defender5.locateOnFoot2D(-1128.9, 74.1, 1.0, 1.0, false /* FALSE */))) {
      //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY	haitian_defender5 FALSE
      $.haitian_defender5.setObjRunToCoord(-1128.9, 74.1);
      $.hait_heading5 = 0;
    }
    else {
      if ($.hait_heading5 == 0) {
        if ($.haitian_defender5.isObjectivePassed()) {
          $.haitian_defender5.setStopShootDontSeekEntity(true /* TRUE */);
          $.haitian_defender5.setHeading(274.5);
          $.hait_heading5 = 1;
        }
      }
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
}

///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////

async function second_wave_haitian_attacking_rules() {
  ///////////////////////////////////////////////////////////////////////////////////////////

  if ($.player1.isInArea3D(-1118.5, 92.1, 5.8, -1179.9, 53.3, 15.0, false /* FALSE */)) {
    if (!(Char.IsDead($.haitian_defender1))) {
      if (!($.haitian_defender1.locateOnFoot2D(-1138.1, 68.6, 1.0, 1.0, false /* FALSE */))) {
        //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY	haitian_defender1 FALSE
        $.haitian_defender1.setObjRunToCoord(-1138.1, 68.6);
        $.hait_heading1 = 0;
      }
      else {
        if ($.hait_heading1 == 0) {
          if ($.haitian_defender1.isObjectivePassed()) {
            $.haitian_defender1.setHeading(272.8);
            $.hait_heading1 = 1;
          }
        }
      }
    }
    if (!(Char.IsDead($.haitian_defender2))) {
      if (!($.haitian_defender2.locateOnFoot2D(-1138.1, 72.9, 1.0, 1.0, false /* FALSE */))) {
        //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY	haitian_defender2 FALSE
        $.haitian_defender2.setObjRunToCoord(-1138.1, 72.9);
        $.hait_heading2 = 0;
      }
      else {
        if ($.hait_heading2 == 0) {
          if ($.haitian_defender2.isObjectivePassed()) {
            $.haitian_defender2.setHeading(257.4);
            $.hait_heading2 = 1;
          }
        }
      }
    }
    if (!(Char.IsDead($.haitian_defender3))) {
      if (!($.haitian_defender3.locateOnFoot2D(-1158.3, 68.9, 1.0, 1.0, false /* FALSE */))) {
        //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY	haitian_defender3 FALSE
        $.haitian_defender3.setObjRunToCoord(-1158.3, 68.9);
        $.hait_heading3 = 0;
      }
      else {
        if ($.hait_heading3 == 0) {
          if ($.haitian_defender3.isObjectivePassed()) {
            $.haitian_defender3.setStopShootDontSeekEntity(true /* TRUE */);
            $.haitian_defender3.setHeading(285.1);
            $.hait_heading3 = 1;
          }
        }
      }
    }
    if (!(Char.IsDead($.haitian_defender4))) {
      if (!($.haitian_defender4.locateOnFoot2D(-1158.4, 72.5, 1.0, 1.0, false /* FALSE */))) {
        //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY	haitian_defender4 FALSE
        $.haitian_defender4.setObjRunToCoord(-1158.4, 72.5);
        $.hait_heading4 = 0;
      }
      else {
        if ($.hait_heading4 == 0) {
          if ($.haitian_defender4.isObjectivePassed()) {
            $.haitian_defender4.setStopShootDontSeekEntity(true /* TRUE */);
            $.haitian_defender4.setHeading(257.5);
            $.hait_heading4 = 1;
          }
        }
      }
    }
    if (!(Char.IsDead($.haitian_defender5))) {
      if (!($.haitian_defender5.locateOnFoot2D(-1161.2, 71.4, 1.0, 1.0, false /* FALSE */))) {
        //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY	haitian_defender5 FALSE
        $.haitian_defender5.setObjRunToCoord(-1161.2, 71.4);
        $.hait_heading5 = 0;
      }
      else {
        if ($.hait_heading5 == 0) {
          if ($.haitian_defender5.isObjectivePassed()) {
            $.haitian_defender5.setStopShootDontSeekEntity(true /* TRUE */);
            $.haitian_defender5.setHeading(274.5);
            $.hait_heading5 = 1;
          }
        }
      }
    }


  }
  else {
    if (!(Char.IsDead($.haitian_defender1))) {
      if (!($.haitian_defender1.locateOnFoot2D(-1137.8, 66.7, 1.0, 1.0, false /* FALSE */))) {
        //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY	haitian_defender1 FALSE
        $.haitian_defender1.setObjRunToCoord(-1137.8, 66.7);
        $.hait_heading1 = 0;
      }
      else {
        if ($.hait_heading1 == 0) {
          if ($.haitian_defender1.isObjectivePassed()) {
            $.haitian_defender1.setStopShootDontSeekEntity(true /* TRUE */);
            $.haitian_defender1.setHeading(5.2);
            $.hait_heading1 = 1;
          }
        }
      }
    }
    if (!(Char.IsDead($.haitian_defender2))) {
      if (!($.haitian_defender2.locateOnFoot2D(-1138.2, 75.5, 1.0, 1.0, false /* FALSE */))) {
        //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY	haitian_defender2 FALSE
        $.haitian_defender2.setObjRunToCoord(-1138.2, 75.5);
        $.hait_heading2 = 0;
      }
      else {
        if ($.hait_heading2 == 0) {
          if ($.haitian_defender2.isObjectivePassed()) {
            $.haitian_defender2.setStopShootDontSeekEntity(true /* TRUE */);
            $.haitian_defender2.setHeading(175.4);
            $.hait_heading2 = 1;
          }
        }
      }
    }
    if (!(Char.IsDead($.haitian_defender3))) {
      if (!($.haitian_defender3.locateOnFoot2D(-1158.2, 67.2, 1.0, 1.0, false /* FALSE */))) {
        //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY	haitian_defender3 FALSE
        $.haitian_defender3.setObjRunToCoord(-1158.2, 67.2);
        $.hait_heading3 = 0;
      }
      else {
        if ($.hait_heading3 == 0) {
          if ($.haitian_defender3.isObjectivePassed()) {
            $.haitian_defender3.setStopShootDontSeekEntity(true /* TRUE */);
            $.haitian_defender3.setHeading(5.2);
            $.hait_heading3 = 1;
          }
        }
      }
    }
    if (!(Char.IsDead($.haitian_defender4))) {
      if (!($.haitian_defender4.locateOnFoot2D(-1158.1, 75.6, 1.0, 1.0, false /* FALSE */))) {
        //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY	haitian_defender4 FALSE
        $.haitian_defender4.setObjRunToCoord(-1158.1, 75.6);
        $.hait_heading4 = 0;
      }
      else {
        if ($.hait_heading4 == 0) {
          if ($.haitian_defender4.isObjectivePassed()) {
            $.haitian_defender4.setStopShootDontSeekEntity(true /* TRUE */);
            $.haitian_defender4.setHeading(175.4);
            $.hait_heading4 = 1;
          }
        }
      }
    }
    if (!(Char.IsDead($.haitian_defender5))) {
      if (!($.haitian_defender5.locateOnFoot2D(-1163.5, 75.8, 1.0, 1.0, false /* FALSE */))) {
        //SET_CHAR_STOP_SHOOT_DONT_SEEK_ENTITY	haitian_defender5 FALSE
        $.haitian_defender5.setObjRunToCoord(-1163.5, 75.8);
        $.hait_heading5 = 0;
      }
      else {
        if ($.hait_heading5 == 0) {
          if ($.haitian_defender5.isObjectivePassed()) {
            $.haitian_defender5.setStopShootDontSeekEntity(true /* TRUE */);
            $.haitian_defender5.setHeading(226.7);
            $.hait_heading5 = 1;
          }
        }
      }
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
}

///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////

async function player_killing_cubans() {
  ///////////////////////////////////////////////////////////////////////////////////////////

  $.cub2_cubans_killed1 = Player.GetNumOfModelsKilled(CBa);
  $.cub2_cubans_killed2 = Player.GetNumOfModelsKilled(CBb);
  $.body_count_cub2 = $.cub2_cubans_killed1 + $.cub2_cubans_killed2;
  ///////////////////////////////////////////////////////////////////////////////////////////
}

///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////

async function nutters() {
  ///////////////////////////////////////////////////////////////////////////////////////////

  if (!(Char.IsDead($.cuban_pickup1))) {
    $.cuban_pickup1.markAsNoLongerNeeded();
    $.cuban_pickup1.setObjKillPlayerOnFoot($.player1);
  }
  if (!(Char.IsDead($.cuban_pickup2))) {
    $.cuban_pickup2.markAsNoLongerNeeded();
    $.cuban_pickup2.setObjKillPlayerOnFoot($.player1);
  }
  if (!(Char.IsDead($.cuban_pickup3))) {
    $.cuban_pickup3.markAsNoLongerNeeded();
    $.cuban_pickup3.setObjKillPlayerOnFoot($.player1);
  }
  if (!(Char.IsDead($.cuban_pickup4))) {
    $.cuban_pickup4.markAsNoLongerNeeded();
    $.cuban_pickup4.setObjKillPlayerOnFoot($.player1);
  }
  if (!(Char.IsDead($.cuban_pickup5))) {
    $.cuban_pickup5.markAsNoLongerNeeded();
    $.cuban_pickup5.setObjKillPlayerOnFoot($.player1);
  }
  if (!(Char.IsDead($.cuban_pickup6))) {
    $.cuban_pickup6.markAsNoLongerNeeded();
    $.cuban_pickup6.setObjKillPlayerOnFoot($.player1);
  }
  if (!(Char.IsDead($.cuban_attacker1))) {
    $.cuban_attacker1.markAsNoLongerNeeded();
    $.cuban_attacker1.setObjKillPlayerOnFoot($.player1);
  }
  if (!(Char.IsDead($.cuban_attacker2))) {
    $.cuban_attacker2.markAsNoLongerNeeded();
    $.cuban_attacker2.setObjKillPlayerOnFoot($.player1);
  }
  if (!(Char.IsDead($.cuban_attacker3))) {
    $.cuban_attacker3.markAsNoLongerNeeded();
    $.cuban_attacker3.setObjKillPlayerOnFoot($.player1);
  }
  ///////////////////////////////////////////////////////////////////////////////////////////

  return;
  ///////////////////////////////////////////////////////////////////////////////////////////






}

export async function cuban2() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************Cuban 2*****************************************
  // *****************************************Cannon Fodder***********************************
  // *****************************************************************************************
  // *****************************************************************************************

  // SCRIPT_NAME cuban2
  // Mission start stuff

  await mission_start_cuban2();  // SCM GOSUB mission_start_cuban2
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_failed_cuban2();  // SCM GOSUB mission_failed_cuban2
  }
  await mission_cleanup_cuban2();  // SCM GOSUB mission_cleanup_cuban2
  // MissionBoundary

  // Variables for mission
  //people, cars and objects

  // VAR_INT target1
  // VAR_INT haitian_defender1
  // VAR_INT haitian_defender2
  // VAR_INT haitian_defender3
  // VAR_INT haitian_defender4
  // VAR_INT haitian_defender5
  // VAR_INT haitian_defender6
  // VAR_INT haitian_defender7
  // VAR_INT haitian_defender8
  // VAR_INT haitian_defender9
  // VAR_INT haitian_defender10
  // VAR_INT cuban_attacker1
  // VAR_INT cuban_attacker2
  // VAR_INT cuban_attacker3
  // VAR_INT cuban_pickup1
  // VAR_INT cuban_pickup2
  // VAR_INT cuban_pickup3
  // VAR_INT cuban_carry_car
  // VAR_INT death_car
  // VAR_INT target2
  // VAR_INT cuban_pickup4
  // VAR_INT cuban_pickup5
  // VAR_INT cuban_pickup6
  // VAR_INT escape_car_drugs
  // VAR_INT escape_car
  // VAR_INT taxi_dude
  // VAR_INT free_scope
  // VAR_INT fake_haitian1
  // VAR_INT fake_haitian2
  // VAR_INT fake_haitian3
  // VAR_INT crappy_car

  //blips

  // VAR_INT cuban_pickup_blip
  // VAR_INT drop_off_point1
  // VAR_INT radar_blip_cuban_carry_car
  // VAR_INT escape_car_blip
  // VAR_INT home_blip
  // VAR_INT cuban_blip1
  // VAR_INT cuban_blip2
  // VAR_INT cuban_blip3
  // VAR_INT cuban_blip4
  // VAR_INT cuban_blip5
  // VAR_INT sniper_blip

  //flags

  // VAR_INT maxcubans_in_car
  // VAR_INT cubans_in_cars
  // VAR_INT car_emptied
  // VAR_INT flag_player_not_in_cuban_carry_car
  // VAR_INT flag_cuban_carry_car_upsidedown
  // VAR_INT cuban1_in
  // VAR_INT cuban2_in
  // VAR_INT cuban3_in
  // VAR_INT cuban4_in
  // VAR_INT cuban5_in
  // VAR_INT cuban6_in
  // VAR_INT haitians_doubled_flag
  // VAR_INT creating_flag
  // VAR_INT number_of_haitians_dead
  // VAR_INT completed_goal_flag
  // VAR_INT cub2_waiving_flag
  // VAR_INT cubans_out_of_car
  // VAR_INT cuban_crouch1
  // VAR_INT cuban_crouch3
  // VAR_INT cuban_attacker_doingstuff1
  // VAR_INT cuban_attacker_doingstuff2
  // VAR_INT cuban_attacker_doingstuff3
  // VAR_INT cuban_carry_car_old
  // VAR_INT play_cub2_mission_audio
  // VAR_INT cuban_flag1
  // VAR_INT cub2_cubans_killed1
  // VAR_INT cub2_cubans_killed2
  // VAR_INT body_count_cub2
  // VAR_INT ped_density_flag
  // VAR_INT hait_heading1
  // VAR_INT hait_heading2
  // VAR_INT hait_heading3
  // VAR_INT hait_heading4
  // VAR_INT hait_heading5
  // VAR_INT telling_guys_to_move
  // VAR_INT sniper_shot
  // VAR_INT fire_car_flag

  //coordinates

  // VAR_FLOAT haitian1x
  // VAR_FLOAT haitian1y
  // VAR_FLOAT haitian2x
  // VAR_FLOAT haitian2y
  // VAR_FLOAT haitian3x
  // VAR_FLOAT haitian3y
  // VAR_FLOAT haitian4x
  // VAR_FLOAT haitian4y
  // VAR_FLOAT haitian5x
  // VAR_FLOAT haitian5y
  // VAR_FLOAT haitian_z
  // VAR_FLOAT hd1_heading
  // VAR_FLOAT hd2_heading
  // VAR_FLOAT hd3_heading
  // VAR_FLOAT hd4_heading
  // VAR_FLOAT hd5_heading


  // ****************************************Mission Start************************************

}
