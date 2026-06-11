// Generated from main/cuban3.sc

import { $ } from "../utils/vars.mts";

async function mission_start_cuban3() {
  Text.ClearThisPrint("M_FAIL");
  ONMISSION = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  Text.LoadMissionText("CUBAN3");
  Shortcut.SetDropoffPointForMission(-1173.5, -599.6, 10.2, 277.1);
  // *****************************************Set Flags/variables************************************

  $.boat_location = 0;
  $.drug_dealer_flag = 0;
  $.dropped_money_flag = 0;
  $.briefcase_dropped_flag = 0;
  $.drug_dealer_bodyguard1_flag = 0;
  $.drug_dealer_bodyguard2_flag = 0;
  $.button_pressed = 0;
  $.cub3_speech_played = 0;
  $.boat_haitians_dead = 6;
  $.haitian_death_ob1 = 0;
  $.haitian_death_ob2 = 0;
  $.haitian_death_ob3 = 0;
  $.haitian_death_ob4 = 0;
  $.haitian_death_ob5 = 0;
  $.haitian_death_ob6 = 0;
  $.haitian_moving_ob3 = 0;
  $.haitian_moving_ob5 = 0;
  $.haitian_moving_ob6 = 0;



  $.leader_coordsx = 0.0;
  $.leader_coordsy = 0.0;
  $.leader_coordsz = 0.0;
  $.player_x = 0.0;
  $.player_y = 0.0;
  $.player_z = 0.0;
  $.hait3_coordx = 0.0;
  $.hait3_coordy = 0.0;
  $.hait5_coordx = 0.0;
  $.hait5_coordy = 0.0;
  $.hait6_coordx = 0.0;
  $.hait6_coordy = 0.0;

  // ****************************************START OF CUTSCENE********************************

  Streaming.SetAreaVisible(7 /* VIS_COFFEE_SHOP */);
  Cutscene.DisableShadows();
  World.ClearAreaOfChars(-1174.8, -609.0, 10.4, -116.3, -632.5, 15.3);
  World.SetCarDensityMultiplier(0.0);
  World.SetPedDensityMultiplier(0.0);


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSpablo");
  Streaming.LoadSpecialCharacter(3, "CSpapa");
  Streaming.LoadSpecialCharacter(4, "CSpepe");
  Streaming.LoadSpecialCharacter(5, "CSumbto");


  Streaming.LoadScene(-1169.0, -620.0, 10.791);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasSpecialCharacterLoaded(4)) || !(Streaming.HasSpecialCharacterLoaded(5))) {
    await asyncWait(0);
  }


  Cutscene.Load("cub_4");
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


  World.ClearArea(-1170.9, -603.7, 10.6, 1.0, true /* TRUE */);
  $.player1.setCoordinates(-1170.9, -603.7, 10.6);
  $.player1.setHeading(15.3);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 876) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB3_A", 10000, 1); // Alberto? Une caffee, senor?


  while ($.cs_time < 2635) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB3_B", 10000, 1); // Poppa, don't serve this snake in the straw.


  while ($.cs_time < 5749) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB3_C", 10000, 1); // You're two-faced Tommy!


  while ($.cs_time < 7227) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB3_D", 10000, 1); // You either two-faced, or you a wimp, baby boy!


  while ($.cs_time < 10024) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB3_E", 10000, 1); // The Haitians! Man, they laughing at me.


  while ($.cs_time < 12109) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB3_F", 10000, 1); // Easy, easy. What's the problem?


  while ($.cs_time < 13963) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB3_G", 10000, 1); // They laughing at me, Tommy. At me!


  while ($.cs_time < 16044) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB3_H", 10000, 1); // Umberto Robina! They doing whatever they like!


  while ($.cs_time < 18802) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB3_I", 10000, 1); //Nobody does whatever they like, Umberto, they do what you let them do.


  while ($.cs_time < 21689) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB3_J", 10000, 1); //What?


  while ($.cs_time < 23629) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB3_K", 10000, 1); //You want somebody taken care of?


  while ($.cs_time < 24851) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB3_L", 10000, 1); //I can handle it, but it's gonna cost you.


  while ($.cs_time < 26958) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB3_M", 10000, 1); //I know we're brothers and all, but this is a business.


  while ($.cs_time < 29060) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB3_N", 10000, 1); //Tommy. You are real man. A business man, a gentleman.


  while ($.cs_time < 33831) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB3_O", 10000, 1); //These Haitians.  They have a load of product coming in off shore, really good stuff.


  while ($.cs_time < 39459) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB3_P", 10000, 1); // We take it, and we finish them.


  while ($.cs_time < 42056) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB3_Q", 10000, 1); // You take it, and I look after you. Like my brother. Like my son.


  while ($.cs_time < 47769) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("CUB3_R", 10000, 1); // I think I prefer the cash to being bounced on your knee amigo

  /*
  WHILE cs_time < 48769
  WAIT 0
  GET_CUTSCENE_TIME cs_time
  ENDWHILE

  CLEAR_PRINTS
  */

  while ($.cs_time < 51904) {
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
  Streaming.SetAreaVisible(0 /* VIS_MAIN_MAP */);
  $.flag_player_in_cafe = 0;
  World.SetCarDensityMultiplier(1.0);
  World.SetPedDensityMultiplier(1.0);
  // ******************************************END OF CUTSCENE********************************

  Camera.SetFadingColor(0, 0, 0);
  await asyncWait(500);
  Camera.SetBehindPlayer();
  //------------------REQUEST_MODELS ------------------------------

  $.player1.setMood(1 /* PLAYER_MOOD_PISSED_OFF */, 60000);


  Game.SetThreatForPedType(8 /* PEDTYPE_GANG_HAITIAN */, 1 /* THREAT_PLAYER1 */);


  Streaming.RequestModel(tropic);
  Streaming.RequestModel(HNa);
  Streaming.RequestModel(HNb);
  Streaming.RequestModel(jetmax);


  Streaming.RequestModel(uzi);
  Streaming.RequestModel(SGa);
  Streaming.RequestModel(grenade);
  Streaming.RequestModel(dinghy);


  Streaming.RequestModel(SGb);
  Streaming.RequestModel(CBb);
  Streaming.RequestModel(briefcase);
  Streaming.RequestModel(ruger);
  Streaming.RequestModel(buddyshot);



  while (!(Streaming.HasModelLoaded(tropic)) || !(Streaming.HasModelLoaded(HNa)) || !(Streaming.HasModelLoaded(HNb)) || !(Streaming.HasModelLoaded(jetmax))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(SGa)) || !(Streaming.HasModelLoaded(uzi)) || !(Streaming.HasModelLoaded(grenade)) || !(Streaming.HasModelLoaded(dinghy))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(SGb)) || !(Streaming.HasModelLoaded(CBb)) || !(Streaming.HasModelLoaded(briefcase)) || !(Streaming.HasModelLoaded(ruger)) || !(Streaming.HasModelLoaded(buddyshot))) {
    await asyncWait(0);
  }


  Audio.LoadMissionAudio(1, "CUB3_2" as any);
  Audio.LoadMissionAudio(2, "CUB3_3" as any);


  while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
  }


  //SET_PLAYER_COORDINATES player1 -731.7 -1170.4 19.4   //test

  //creating boat and waiting for player to reach it

  $.radar_blip_playrs_boat = Blip.AddForCoord(-725.4, -1166.8, 9.7);


  $.boat_driver = Char.Create(7 /* PEDTYPE_GANG_CUBAN */, CBb, -724.3, -1166.5, 9.7);
  $.boat_driver.setAsPlayerFriend($.player1, true /* TRUE */);
  $.boat_driver.setHeading(103.3);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  Text.PrintNow("CUB3_07", 11000, 1); //Go meet Rico.  He'll drive you to the meet location.

  //getting into boat and setting boat to drive to deal


  while (!($.player1.locateOnFoot3D(-725.4, -1166.8, 9.7, 1.0, 1.0, 2.0, true /* TRUE */))) {
    await asyncWait(0);
    if (Char.IsDead($.boat_driver)) {
      Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
      // SCM GOTO → mission_failed_cuban3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_cuban3"); // fallback: would break linear control flow
    }
  }

  // ******************************************START OF PLAYER GETTING INTO BOAT*******************************************

  World.ClearArea(-725.4, -1166.8, 9.7, 5.0, true);
  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);


  Audio.SetRadioChannel(6 /* RADIO_ESPANTOSO */, -1);
  $.playrs_boat = Car.Create(jetmax, -722.6, -1163.7, 5.0);
  $.playrs_boat.setHeading(32.0);
  $.playrs_boat.anchor(true /* TRUE */);


  Camera.SetFixedPosition(-723.1, -1169.5, 10.2, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-726.4, -1164.6, 11.2, 2 /* JUMP_CUT */);


  if (!(Char.IsDead($.boat_driver))) {
    $.scplayer.setObjNoObj();
    $.scplayer.turnToFaceChar($.boat_driver);
    $.boat_driver.turnToFacePlayer($.player1);
  }
  else {
    Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
    // SCM GOTO → mission_failed_cuban3 (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_failed_cuban3"); // fallback: would break linear control flow
  }


  await asyncWait(1000);


  $.scplayer.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000);


  Text.PrintNow("CUB3_01", 4000, 1); //Hey Rico. Nice boat, you ready?
  Audio.PlayMissionAudio(1);
  while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.boat_driver))) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      if ($.button_pressed == 1) {
        $.button_pressed = 0;
        // SCM GOTO → end_cut_cub3_1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO end_cut_cub3_1"); // fallback: would break linear control flow
      }
    }
    else {
      if ($.button_pressed == 0) {
        $.button_pressed = 1;
      }
    }
  }
  Audio.ClearMissionAudio(1);
  Text.ClearThisPrint("CUB3_01");


  $.scplayer.setWaitState(0 /* WAITSTATE_FALSE */, 100);
  if (!(Char.IsDead($.boat_driver))) {
    $.boat_driver.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000);
  }
  else {
    Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
    // SCM GOTO → mission_failed_cuban3 (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_failed_cuban3"); // fallback: would break linear control flow
  }


  Text.PrintNow("CUB3_05", 4000, 1); //Si Tommy. Now you be a good shot today,
  Audio.PlayMissionAudio(2);
  while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.boat_driver))) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      if ($.button_pressed == 1) {
        $.button_pressed = 0;
        // SCM GOTO → end_cut_cub3_1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO end_cut_cub3_1"); // fallback: would break linear control flow
      }
    }
    else {
      if ($.button_pressed == 0) {
        $.button_pressed = 1;
      }
    }
  }
  Audio.ClearMissionAudio(2);
  Text.ClearThisPrint("CUB3_05");


  Camera.SetFixedPosition(-709.8, -1161.3, 11.0, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-724.3, -1166.5, 9.7, 2 /* JUMP_CUT */);


  Audio.LoadMissionAudio(2, "CUB3_4" as any);


  while (!(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
  }


  Text.PrintNow("CUB3_06", 4000, 1); //My boat, she no good full of holes, ok?
  Audio.PlayMissionAudio(2);
  while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.boat_driver))) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      if ($.button_pressed == 1) {
        $.button_pressed = 0;
        // SCM GOTO → end_cut_cub3_1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO end_cut_cub3_1"); // fallback: would break linear control flow
      }
    }
    else {
      if ($.button_pressed == 0) {
        $.button_pressed = 1;
      }
    }
  }
  Audio.ClearMissionAudio(2);
  Text.ClearThisPrint("CUB3_06");


  if (!(Char.IsDead($.boat_driver))) {
    $.boat_driver.setWaitState(0 /* WAITSTATE_FALSE */, 100);
  }
  else {
    Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
    // SCM GOTO → mission_failed_cuban3 (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_failed_cuban3"); // fallback: would break linear control flow
  }
}



async function end_cut_cub3_1() {
  Audio.ClearMissionAudio(1);
  Audio.ClearMissionAudio(2);
  Text.ClearSmallPrints();
  if (!(Char.IsDead($.boat_driver))) {
    $.boat_driver.setWaitState(0 /* WAITSTATE_FALSE */, 100);
  }
  else {
    Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
    // SCM GOTO → mission_failed_cuban3 (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_failed_cuban3"); // fallback: would break linear control flow
  }
  $.scplayer.setWaitState(0 /* WAITSTATE_FALSE */, 100);
  Camera.RestoreJumpcut();
  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  // ******************************************END OF PLAYER GETTING INTO BOAT*********************************************

  //FADE OUT

  Camera.SetFadingColor(1, 1, 1);
  Camera.DoFade(1500, 0 /* FADE_OUT */);
  if (!($.player1.hasGotWeapon(26 /* WEAPONTYPE_M4 */)) && !($.player1.hasGotWeapon(28 /* WEAPONTYPE_SNIPERRIFLE */)) && !($.player1.hasGotWeapon(29 /* WEAPONTYPE_LASERSCOPE */))) {
    $.player1.giveWeapon(27 /* WEAPONTYPE_RUGER */, 30);
  }


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  $.boat_driver.delete();
  if (!(Car.IsDead($.playrs_boat))) {
    $.scplayer.attachToCar($.playrs_boat, 0.0, -0.4, 1.5, 2 /* FACING_BACK */, 360.0, 0 /* WEAPONTYPE_UNARMED */);
    $.boat_driver = Char.CreateInsideCar($.playrs_boat, 7 /* PEDTYPE_GANG_CUBAN */, CBb);
    $.boat_driver.setAsPlayerFriend($.player1, true /* TRUE */);
    $.playrs_boat.goto(-754.0, -425.7, 6.6);
    $.boat_driver.setOnlyDamagedByPlayer(true /* TRUE */);
  }
  else {
    Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
    // SCM GOTO → mission_failed_cuban3 (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_failed_cuban3"); // fallback: would break linear control flow
  }
  $.radar_blip_playrs_boat.remove();


  //CREATING HAITIANS ON BOATS
  //Boat 2

  $.haitian_big_boat2 = Car.Create(tropic, -660.0, -269.1, 5.0); //RIGHT BOAT when looking at deal from players boat
  $.haitian_big_boat2.setHeading(134.0);
  $.haitian_big_boat2.anchor(true /* TRUE */);


  $.haitian_ob4 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, -647.0, -256.7, 5.0);
  $.haitian_ob4.attachToCar($.haitian_big_boat2, 0.0, -4.0, 1.2, 1 /* FACING_LEFT */, 360.0, 23 /* WEAPONTYPE_UZI */); //ON LOWER DECK OF RIGHT BOAT
  $.haitian_ob4.setHeading(227.4);
  $.haitian_ob4.clearThreatSearch();
  $.haitian_ob4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.haitian_ob4.setHeedThreats(true /* TRUE */);


  $.haitian_ob5 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, -647.0, -256.7, 5.0);
  //ATTACH_CHAR_TO_CAR haitian_ob5 haitian_big_boat2 0.5 2.5 3.8 FACING_BACK 360.0 WEAPONTYPE_uzi  //RIGHT HAND DRIVERS SEAT

  $.haitian_ob5.attachToCar($.haitian_big_boat2, 2.3, 0.0, 2.0, 2 /* FACING_BACK */, 360.0, 23 /* WEAPONTYPE_UZI */); //ON LOWER DECK OF RIGHT BOAT (side)
  $.haitian_ob5.setHeading(140.4);
  $.haitian_ob5.clearThreatSearch();
  $.haitian_ob5.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.haitian_ob5.setHeedThreats(true /* TRUE */);


  $.haitian_ob6 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, -647.0, -256.7, 5.0);
  //ATTACH_CHAR_TO_CAR haitian_ob6 haitian_big_boat2 -0.3 2.5 3.8 FACING_BACK 360.0 WEAPONTYPE_uzi  //LEFT HAND DRIVERS SEAT

  $.haitian_ob6.attachToCar($.haitian_big_boat2, 0.0, -1.3, 3.8, 2 /* FACING_BACK */, 360.0, 27 /* WEAPONTYPE_RUGER */); //ON UPPER DECK OF RIGHT BOAT
  $.haitian_ob6.setHeading(140.4);
  $.haitian_ob6.clearThreatSearch();
  $.haitian_ob6.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.haitian_ob6.setHeedThreats(true /* TRUE */);




  //Boat 1

  $.haitian_big_boat1 = Car.Create(tropic, -647.0, -256.7, 5.0); //LEFT BOAT when looking at deal from players boat
  $.haitian_big_boat1.setHeading(317.0);
  $.haitian_big_boat1.anchor(true /* TRUE */);
  $.haitian_ob1 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, -647.0, -256.7, 5.0);
  $.haitian_ob1.attachToCar($.haitian_big_boat1, 0.0, -4.0, 1.2, 0 /* FACING_FORWARD */, 360.0, 23 /* WEAPONTYPE_UZI */); //ON LOWER DECK OF LEFT BOAT
  $.haitian_ob1.setHeading(102.4);
  $.haitian_ob1.clearThreatSearch();
  $.haitian_ob1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.haitian_ob1.setHeedThreats(true /* TRUE */);


  $.haitian_ob2 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, -647.0, -256.7, 5.0);
  $.haitian_ob2.attachToCar($.haitian_big_boat1, -2.3, 0.0, 2.0, 3 /* FACING_RIGHT */, 360.0, 27 /* WEAPONTYPE_RUGER */); //ON LOWER DECK OF LEFT BOAT (side)
  $.haitian_ob2.clearThreatSearch();
  $.haitian_ob2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.haitian_ob2.setHeedThreats(true /* TRUE */);


  $.haitian_ob3 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, -647.0, -256.7, 5.0);
  //ATTACH_CHAR_TO_CAR haitian_ob3 haitian_big_boat1 -0.3 2.5 3.8 FACING_RIGHT 360.0 WEAPONTYPE_uzi  //DRIVERS SEAT

  $.haitian_ob3.attachToCar($.haitian_big_boat1, 0.2, -1.3, 3.8, 3 /* FACING_RIGHT */, 360.0, 23 /* WEAPONTYPE_UZI */); //ON UPPER DECK OF LEFT BOAT
  $.haitian_ob3.setHeading(322.4);
  $.haitian_ob3.clearThreatSearch();
  $.haitian_ob3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.haitian_ob3.setHeedThreats(true /* TRUE */);








  //HAITIAN WITH MONEY

  $.haitian_with_money = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNb, -649.9, -269.6, 8.5);
  $.haitian_with_money.setHeading(229.2);
  $.haitian_with_money.clearThreatSearch();
  $.haitian_with_money.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.haitian_with_money.setHeedThreats(true /* TRUE */);
  $.haitian_with_money.setStayInSamePlace(true /* TRUE */);


  $.haitian_bodyguard1 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, -650.1, -267.7, 8.5);
  $.haitian_bodyguard1.setHeading(60.6);
  $.haitian_bodyguard1.clearThreatSearch();
  $.haitian_bodyguard1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.haitian_bodyguard1.setHeedThreats(true /* TRUE */);
  $.haitian_bodyguard1.setStayInSamePlace(true /* TRUE */);


  $.haitian_bodyguard2 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, -651.6, -269.0, 8.5);
  $.haitian_bodyguard2.setHeading(222.9);
  $.haitian_bodyguard2.clearThreatSearch();
  $.haitian_bodyguard2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.haitian_bodyguard2.setHeedThreats(true /* TRUE */);
  $.haitian_bodyguard2.setStayInSamePlace(true /* TRUE */);

  //CREATING DRUG DEALERS

  $.drug_dealer = Char.Create(9 /* PEDTYPE_GANG_STREET */, SGb, -648.8, -270.8, 8.5);
  $.drug_dealer.setHeading(49.2);
  $.drug_dealer.clearThreatSearch();
  $.drug_dealer.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.drug_dealer.setHeedThreats(true /* TRUE */);
  $.drug_dealer.setStayInSamePlace(true /* TRUE */);


  $.drug_dealer_bodyguard1 = Char.Create(9 /* PEDTYPE_GANG_STREET */, SGa, -647.4, -270.8, 8.5); //left looking at guy
  $.drug_dealer_bodyguard1.setHeading(34.2);
  $.drug_dealer_bodyguard1.clearThreatSearch();
  $.drug_dealer_bodyguard1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.drug_dealer_bodyguard1.setHeedThreats(true /* TRUE */);
  $.drug_dealer_bodyguard1.setStayInSamePlace(true /* TRUE */);


  $.drug_dealer_bodyguard2 = Char.Create(9 /* PEDTYPE_GANG_STREET */, SGa, -649.3, -272.5, 8.5); //right looking at guy
  $.drug_dealer_bodyguard2.setHeading(33.0);
  $.drug_dealer_bodyguard2.clearThreatSearch();
  $.drug_dealer_bodyguard2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.drug_dealer_bodyguard2.setHeedThreats(true /* TRUE */);
  $.drug_dealer_bodyguard2.setStayInSamePlace(true /* TRUE */);


  $.drug_dealer_sniper = Char.Create(9 /* PEDTYPE_GANG_STREET */, SGa, -621.9, -307.8, 25.9);
  $.drug_dealer_sniper.setHeading(35.4);
  $.drug_dealer_sniper.clearThreatSearch();
  $.drug_dealer_sniper.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.drug_dealer_sniper.setHeedThreats(true /* TRUE */);
  $.drug_dealer_sniper.setStayInSamePlace(true /* TRUE */);


  Game.SetCharsChatting($.haitian_with_money, $.drug_dealer, 5000000);

  //Jumping car forwards


  $.playrs_boat.setCoordinates(-754.0, -425.7, 5.5);

  //FADE IN

  Camera.DoFade(1500, 1 /* FADE_IN */);




  // ******************************************START OF PLAYER PULLING UP TO BATTLE****************************************

  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);


  Camera.SetFixedPosition(-743.5, -318.2, 11.0, 0.0, 0.0, 0.0);


  Camera.PointAtCar($.playrs_boat, 15 /* FIXED */, 2 /* JUMP_CUT */);
  TIMERA = 0;
}


////////////////////////////////////////////////////////THE SET UP//////////////////////////////////////////////////////////////////////////////

async function waiting_for_boat_to_reach_destination() {
  // SCM GOTO → waiting_for_boat_to_reach_destination lowered to endless loop
  while (true) {
    await asyncWait(0);


    World.ClearAreaOfCars(-530.2, -186.3, 10.0, -791.8, -447.8, 0.0);


    if (!(Car.IsDead($.playrs_boat))) {
      if ($.boat_location == 0) {
        if ($.playrs_boat.locate2D(-754.0, -425.7, 10.0, 10.0, false /* FALSE */)) {
          $.playrs_boat.setCruiseSpeed(20.0);
        }
        if ($.playrs_boat.locate2D(-754.0, -425.7, 5.0, 5.0, false /* FALSE */)) {
          $.playrs_boat.goto(-705.8, -304.5, 6.6);
          $.boat_location = 1;
        }
      }
      if ($.boat_location == 1) {
        if ($.playrs_boat.locate2D(-705.8, -304.5, 10.0, 10.0, false /* FALSE */)) {
          $.playrs_boat.setCruiseSpeed(12.0);
        }
        if ($.playrs_boat.locate2D(-705.8, -304.5, 5.0, 5.0, false /* FALSE */)) {
          if (!(Car.IsDead($.haitian_big_boat2))) {
            Camera.SetFixedPosition(-645.2, -269.7, 11.0, 0.0, 0.0, 0.0);
            Camera.PointAtPoint(-650.9, -269.9, 9.2, 2 /* JUMP_CUT */);
          }
          $.playrs_boat.goto(-670.8, -263.8, 6.6);
          $.boat_location = 2;
        }
      }
      if ($.boat_location == 2) {
        if ($.playrs_boat.locate2D(-670.8, -263.8, 10.0, 10.0, false /* FALSE */)) {
          $.playrs_boat.goto(-666.3, -258.5, 6.6);
          $.boat_location = 3;
        }
      }
      if ($.boat_location == 3) {
        if ($.playrs_boat.locate2D(-666.3, -258.5, 10.0, 10.0, false /* FALSE */)) {
          $.playrs_boat.stop();
          $.playrs_boat.anchor(true /* TRUE */);
          $.boat_location = 4;
        }
      }
      if ($.boat_location == 4) {
        if ($.playrs_boat.locate2D(-666.3, -258.5, 2.0, 2.0, false /* FALSE */)) {
          $.playrs_boat.stop();
          $.playrs_boat.anchor(true /* TRUE */);
          $.scplayer.detachFromCar();
          Camera.RestoreJumpcut();
          $.player1.setControl(true /* ON */);
          Hud.SwitchWidescreen(false /* OFF */);
          const _res174 = $.playrs_boat.getOffsetInWorldCoords(0.0, -0.4, 1.1);
$.player_x = _res174.x;
$.player_y = _res174.y;
$.player_z = _res174.z;
          $.player1.setCoordinates($.player_x, $.player_y, 6.6);
          $.player1.setHeading(213.7);
          await asyncWait(0);
          Camera.SetBehindPlayer();
          Text.PrintNow("CUB3_02", 5000, 1); //KILL ALL THE HAITIANS ON THE BOATS!!
          // SCM GOTO → waiting_for_player_to_shoot (not lowered; manual jump required)
          throw new Error("unresolved GOTO waiting_for_player_to_shoot"); // fallback: would break linear control flow
        }
      }
    }



    //mission fails if boat dies when player is on it.  Gonna blow player up too

    if (Car.IsDead($.playrs_boat) || Char.IsDead($.boat_driver)) {
      Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
      // SCM GOTO → mission_failed_cuban3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_cuban3"); // fallback: would break linear control flow
    }


  }
}

// ******************************************END OF PLAYER PULLING UP TO BATTLE******************************************


//Once player is into position, set everyone to kill everyone else and remaining druggies to leg it.  Remaining Haitians should kill player

async function waiting_for_player_to_shoot() {
  // SCM GOTO → waiting_for_player_to_shoot lowered to endless loop
  while (true) {
    await asyncWait(0);


    World.ClearAreaOfCars(-530.2, -186.3, 10.0, -791.8, -447.8, 0.0);


    if ($.player1.isShooting()) {
      Char.SetThreatReactionRangeMultiplier(5.0);
      if (!(Char.IsDead($.drug_dealer))) {
        $.drug_dealer.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
        $.drug_dealer.giveWeapon(27 /* WEAPONTYPE_RUGER */, 30000);
      }
      if (!(Char.IsDead($.drug_dealer_bodyguard1))) {
        $.drug_dealer_bodyguard1.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
        $.drug_dealer_bodyguard1.giveWeapon(27 /* WEAPONTYPE_RUGER */, 30000);
      }
      if (!(Char.IsDead($.drug_dealer_bodyguard2))) {
        $.drug_dealer_bodyguard2.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
        $.drug_dealer_bodyguard2.giveWeapon(27 /* WEAPONTYPE_RUGER */, 30000);
      }
      if (!(Char.IsDead($.drug_dealer_sniper))) {
        $.drug_dealer_sniper.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
        $.drug_dealer_sniper.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.drug_dealer_sniper.giveWeapon(27 /* WEAPONTYPE_RUGER */, 30000);
      }
      if (!(Char.IsDead($.haitian_with_money))) {
        $.haitian_with_money.setStayInSamePlace(false /* FALSE */);
      }
      if (!(Char.IsDead($.haitian_bodyguard1))) {
        $.haitian_bodyguard1.setStayInSamePlace(false /* FALSE */);
        $.haitian_bodyguard1.setObjGotoCoordOnFoot(-645.4, -278.9);
      }
      if (!(Char.IsDead($.haitian_bodyguard2))) {
        $.haitian_bodyguard2.setStayInSamePlace(false /* FALSE */);
      }
      if (!(Char.IsDead($.haitian_ob1))) {
        $.haitian_ob1.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.haitian_ob1.turnToFaceCoord(-663.3, -253.8, 6.0);
        $.haitian_ob1.setObjKillPlayerOnFoot($.player1);
      }
      if (!(Char.IsDead($.haitian_ob2))) {
        $.haitian_ob2.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.haitian_ob2.turnToFaceCoord(-663.3, -253.8, 6.0);
        $.haitian_ob2.setObjKillPlayerOnFoot($.player1);
      }
      if (!(Char.IsDead($.haitian_ob3))) {
        $.haitian_ob3.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.haitian_ob3.turnToFaceCoord(-663.3, -253.8, 6.0);
        $.haitian_ob3.setObjKillPlayerOnFoot($.player1);
      }
      if (!(Char.IsDead($.haitian_ob4))) {
        $.haitian_ob4.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.haitian_ob4.turnToFaceCoord(-663.3, -253.8, 6.0);
        $.haitian_ob4.setObjKillPlayerOnFoot($.player1);
      }
      if (!(Char.IsDead($.haitian_ob5))) {
        $.haitian_ob5.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.haitian_ob5.turnToFaceCoord(-663.3, -253.8, 6.0);
        $.haitian_ob5.setObjKillPlayerOnFoot($.player1);
      }
      if (!(Char.IsDead($.haitian_ob6))) {
        $.haitian_ob6.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.haitian_ob6.turnToFaceCoord(-663.3, -253.8, 6.0);
        $.haitian_ob6.setObjKillPlayerOnFoot($.player1);
      }
      // SCM GOTO → fight (not lowered; manual jump required)
      throw new Error("unresolved GOTO fight"); // fallback: would break linear control flow
    }

    //mission fails if boat dies when player is on it.  Gonna blow player up too

    if (Car.IsDead($.playrs_boat) || Char.IsDead($.boat_driver)) {
      Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
      // SCM GOTO → mission_failed_cuban3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_cuban3"); // fallback: would break linear control flow
    }


  }
}





////////////////////////////////////////////////////////THE FIGHT//////////////////////////////////////////////////////////////////////////////

async function fight() {
  // SCM GOTO → fight lowered to endless loop
  while (true) {
    await asyncWait(0);


    if ($.cub3_speech_played == 0) {
      Audio.LoadMissionAudio(1, "CUB3_1" as any);
      while (!(Audio.HasMissionAudioLoaded(1))) {
        await asyncWait(0);
      }
      Text.PrintNow("CUB3_08", 4000, 1); //Uh oh.. Pack of Cubans.  We under attack!
      Audio.PlayMissionAudio(1);
      while (!(Audio.HasMissionAudioFinished(1))) {
        await asyncWait(0);
      }
      Audio.ClearMissionAudio(1);
      Text.ClearThisPrint("CUB3_08");
      $.cub3_speech_played = 1;
    }


    /*
    IF boat_haitians_dead > 3
    IF haitian_death_ob1 = 0
    IF IS_CHAR_DEAD haitian_ob1
    boat_haitians_dead --
    haitian_death_ob1 = 1
    ENDIF
    ENDIF
    IF haitian_death_ob2 = 0
    IF IS_CHAR_DEAD haitian_ob2
    boat_haitians_dead --
    haitian_death_ob2 = 1
    ENDIF
    ENDIF
    IF haitian_death_ob3 = 0
    IF IS_CHAR_DEAD haitian_ob3
    boat_haitians_dead --
    haitian_death_ob3 = 1
    ENDIF
    ENDIF
    IF haitian_death_ob4 = 0
    IF IS_CHAR_DEAD haitian_ob4
    boat_haitians_dead --
    haitian_death_ob4 = 1
    ENDIF
    ENDIF
    IF haitian_death_ob5 = 0
    IF IS_CHAR_DEAD haitian_ob5
    boat_haitians_dead --
    haitian_death_ob5 = 1
    ENDIF
    ENDIF
    IF haitian_death_ob6 = 0
    IF IS_CHAR_DEAD haitian_ob6
    boat_haitians_dead --
    haitian_death_ob6 = 1
    ENDIF
    ENDIF
    ELSE
    IF NOT IS_CHAR_DEAD haitian_ob3
    IF NOT IS_CAR_DEAD haitian_big_boat1
    IF haitian_moving_ob3 = 0
    DETACH_CHAR_FROM_CAR haitian_ob3
    GET_OFFSET_FROM_CAR_IN_WORLD_COORDS haitian_big_boat1 -0.3 2.5 3.8 hait3_coordx hait3_coordy player_z
    SET_CHAR_COORDINATES haitian_ob3 hait3_coordx hait3_coordy player_z
    GET_OFFSET_FROM_CAR_IN_WORLD_COORDS haitian_big_boat1 0.2 -1.3 3.8 hait3_coordx hait3_coordy player_z
    SET_CHAR_OBJ_RUN_TO_COORD haitian_ob3 hait3_coordx hait3_coordy
    haitian_moving_ob3 = 1
    ENDIF
    IF haitian_moving_ob3 = 1
    IF LOCATE_CHAR_ANY_MEANS_2D haitian_ob3 hait3_coordx hait3_coordy 1.0 1.0 FALSE
    ATTACH_CHAR_TO_CAR haitian_ob3 haitian_big_boat1 0.2 -1.3 3.8 FACING_RIGHT 360.0 WEAPONTYPE_uzi
    SET_CHAR_THREAT_SEARCH haitian_ob3 THREAT_PLAYER1
    TURN_CHAR_TO_FACE_COORD haitian_ob3 -663.3 -253.8 6.0
    SET_CHAR_OBJ_KILL_PLAYER_ON_FOOT haitian_ob3 player1
    haitian_moving_ob3 = 2
    ENDIF
    ENDIF
    ENDIF
    ENDIF

    IF NOT IS_CHAR_DEAD haitian_ob5
    IF NOT IS_CAR_DEAD haitian_big_boat2
    IF haitian_moving_ob5 = 0
    DETACH_CHAR_FROM_CAR haitian_ob5
    GET_OFFSET_FROM_CAR_IN_WORLD_COORDS haitian_big_boat2 -0.3 2.5 3.8 hait5_coordx hait5_coordy player_z
    SET_CHAR_COORDINATES haitian_ob5 hait5_coordx hait5_coordy player_z
    GET_OFFSET_FROM_CAR_IN_WORLD_COORDS haitian_big_boat2 0.2 -1.3 3.8 hait5_coordx hait5_coordy player_z
    SET_CHAR_OBJ_RUN_TO_COORD haitian_ob5 hait5_coordx hait5_coordy
    haitian_moving_ob5 = 1
    ENDIF
    IF haitian_moving_ob5 = 1
    IF LOCATE_CHAR_ANY_MEANS_2D haitian_ob5 hait5_coordx hait5_coordy 1.0 1.0 FALSE
    ATTACH_CHAR_TO_CAR haitian_ob5 haitian_big_boat2 0.2 -1.3 3.8 FACING_RIGHT 360.0 WEAPONTYPE_uzi
    SET_CHAR_THREAT_SEARCH haitian_ob5 THREAT_PLAYER1
    TURN_CHAR_TO_FACE_COORD haitian_ob5 -663.3 -253.8 6.0
    SET_CHAR_OBJ_KILL_PLAYER_ON_FOOT haitian_ob5 player1
    haitian_moving_ob5 = 2
    ENDIF
    ENDIF
    ENDIF
    ENDIF

    IF NOT IS_CHAR_DEAD haitian_ob6
    IF NOT IS_CAR_DEAD haitian_big_boat2
    IF haitian_moving_ob6 = 0
    DETACH_CHAR_FROM_CAR haitian_ob6
    GET_OFFSET_FROM_CAR_IN_WORLD_COORDS haitian_big_boat2 -0.3 2.5 3.8 hait6_coordx hait6_coordy player_z
    SET_CHAR_COORDINATES haitian_ob6 hait6_coordx hait6_coordy player_z
    GET_OFFSET_FROM_CAR_IN_WORLD_COORDS haitian_big_boat2 0.2 -1.3 3.8 hait6_coordx hait6_coordy player_z
    SET_CHAR_OBJ_RUN_TO_COORD haitian_ob6 hait6_coordx hait6_coordy
    haitian_moving_ob6 = 1
    ENDIF
    IF haitian_moving_ob6 = 1
    IF LOCATE_CHAR_ANY_MEANS_2D haitian_ob6 hait6_coordx hait6_coordy 1.0 1.0 FALSE
    ATTACH_CHAR_TO_CAR haitian_ob6 haitian_big_boat2 0.2 -1.3 3.8 FACING_RIGHT 360.0 WEAPONTYPE_uzi
    SET_CHAR_THREAT_SEARCH haitian_ob6 THREAT_PLAYER1
    TURN_CHAR_TO_FACE_COORD haitian_ob6 -663.3 -253.8 6.0
    SET_CHAR_OBJ_KILL_PLAYER_ON_FOOT haitian_ob6 player1
    haitian_moving_ob6 = 2
    ENDIF
    ENDIF
    ENDIF
    ENDIF
    ENDIF
    */


    if (Char.IsDead($.haitian_with_money)) {
      if ($.dropped_money_flag == 0) {
        $.dropped_money = Pickup.Create(briefcase, 3 /* PICKUP_ONCE */, -650.4, -268.5, 9.0);
        $.dropped_money_blip = Blip.AddForCoord(-650.4, -268.5, $.leader_coordsz);
        $.dropped_money_flag = 1;
      }



      //waiting for player to kill all the haitians
      if (Char.IsDead($.haitian_bodyguard1)) {
        if (Char.IsDead($.haitian_bodyguard2)) {
          if (Char.IsDead($.haitian_ob1)) {
            if (Char.IsDead($.haitian_ob2)) {
              if (Char.IsDead($.haitian_ob3)) {
                if (Char.IsDead($.haitian_ob4)) {
                  if (Char.IsDead($.haitian_ob5)) {
                    if (Char.IsDead($.haitian_ob6)) {
                      // SCM GOTO → jetty_cutscene (not lowered; manual jump required)
                      throw new Error("unresolved GOTO jetty_cutscene"); // fallback: would break linear control flow
                    }
                  }
                }
              }
            }
          }



          //setting dealers to slaughter the haitians then leg it back up to the mansion
          if (!(Char.IsDead($.drug_dealer))) {
            $.drug_dealer.clearThreatSearch();
            $.drug_dealer.setStayInSamePlace(false /* FALSE */);
            $.drug_dealer.setRunning(true /* TRUE */);
            if ($.drug_dealer_flag == 0) {
              $.drug_dealer.setObjGotoCoordOnFoot(-645.4, -278.9);
              $.drug_dealer_flag = 1;
            }
            if ($.drug_dealer_flag == 1) {
              if ($.drug_dealer.locateAnyMeans2D(-645.4, -278.9, 2.0, 2.0, false /* FALSE */)) {
                $.drug_dealer.setObjGotoCoordOnFoot(-648.7, -285.6);
                $.drug_dealer_flag = 2;
              }
              else {
                $.drug_dealer.setObjGotoCoordOnFoot(-645.4, -278.9);
              }
            }
            if ($.drug_dealer_flag == 2) {
              if ($.drug_dealer.locateAnyMeans2D(-648.7, -285.6, 2.0, 2.0, false /* FALSE */)) {
                $.drug_dealer.setObjGotoCoordOnFoot(-634.7, -303.2);
                $.drug_dealer_flag = 3;
              }
              else {
                $.drug_dealer.setObjGotoCoordOnFoot(-648.7, -285.6);
              }
            }
            if ($.drug_dealer_flag == 3) {
              if ($.drug_dealer.locateAnyMeans2D(-634.7, -303.2, 2.0, 2.0, false /* FALSE */)) {
                $.drug_dealer.setObjGotoCoordOnFoot(-641.0, -309.0);
                $.drug_dealer_flag = 4;
              }
              else {
                $.drug_dealer.setObjGotoCoordOnFoot(-634.7, -303.2);
              }
            }
            if ($.drug_dealer_flag == 4) {
              if ($.drug_dealer.locateAnyMeans2D(-641.0, -309.0, 2.0, 2.0, false /* FALSE */)) {
                $.drug_dealer.setObjNoObj();
                $.drug_dealer.turnToFaceCoord(-650.0, -269.1, 9.0);
                $.drug_dealer_flag = 5;
              }
            }
          }
          if (!(Char.IsDead($.drug_dealer_bodyguard1))) {
            $.drug_dealer_bodyguard1.clearThreatSearch();
            $.drug_dealer_bodyguard1.setStayInSamePlace(false /* FALSE */);
            $.drug_dealer_bodyguard1.setRunning(true /* TRUE */);
            if ($.drug_dealer_bodyguard1_flag == 0) {
              $.drug_dealer_bodyguard1.setObjGotoCoordOnFoot(-645.4, -278.9);
              $.drug_dealer_bodyguard1_flag = 1;
            }
            if ($.drug_dealer_bodyguard1_flag == 1) {
              if ($.drug_dealer_bodyguard1.locateAnyMeans2D(-645.4, -278.9, 2.0, 2.0, false /* FALSE */)) {
                $.drug_dealer_bodyguard1.setObjGotoCoordOnFoot(-648.7, -285.6);
                $.drug_dealer_bodyguard1_flag = 2;
              }
              else {
                $.drug_dealer_bodyguard1.setObjGotoCoordOnFoot(-645.4, -278.9);
              }
            }
            if ($.drug_dealer_bodyguard1_flag == 2) {
              if ($.drug_dealer_bodyguard1.locateAnyMeans2D(-648.7, -285.6, 2.0, 2.0, false /* FALSE */)) {
                $.drug_dealer_bodyguard1.setObjGotoCoordOnFoot(-646.9, -289.4);
                $.drug_dealer_bodyguard1_flag = 3;
              }
              else {
                $.drug_dealer_bodyguard1.setObjGotoCoordOnFoot(-648.7, -285.6);
              }
            }
            if ($.drug_dealer_bodyguard1_flag == 3) {
              if ($.drug_dealer_bodyguard1.locateAnyMeans2D(-646.9, -289.4, 2.0, 2.0, false /* FALSE */)) {
                $.drug_dealer_bodyguard1.setObjGotoCoordOnFoot(-656.5, -290.5);
                $.drug_dealer_bodyguard1_flag = 4;
              }
              else {
                $.drug_dealer_bodyguard1.setObjGotoCoordOnFoot(-646.9, -289.4);
              }
            }
            if ($.drug_dealer_bodyguard1_flag == 4) {
              if ($.drug_dealer_bodyguard1.locateAnyMeans2D(-656.5, -290.5, 2.0, 2.0, false /* FALSE */)) {
                $.drug_dealer_bodyguard1.setObjNoObj();
                $.drug_dealer_bodyguard1.turnToFaceCoord(-650.0, -269.1, 9.0);
                $.drug_dealer_bodyguard1_flag = 5;
              }
            }
          }
          if (!(Char.IsDead($.drug_dealer_bodyguard2))) {
            $.drug_dealer_bodyguard2.clearThreatSearch();
            $.drug_dealer_bodyguard2.setStayInSamePlace(false /* FALSE */);
            $.drug_dealer_bodyguard2.setRunning(true /* TRUE */);
            if ($.drug_dealer_bodyguard2_flag == 0) {
              $.drug_dealer_bodyguard2.setObjGotoCoordOnFoot(-645.4, -278.9);
              $.drug_dealer_bodyguard2_flag = 1;
            }
            if ($.drug_dealer_bodyguard2_flag == 1) {
              if ($.drug_dealer_bodyguard2.locateAnyMeans2D(-645.4, -278.9, 2.0, 2.0, false /* FALSE */)) {
                $.drug_dealer_bodyguard2.setObjGotoCoordOnFoot(-648.7, -285.6);
                $.drug_dealer_bodyguard2_flag = 2;
              }
              else {
                $.drug_dealer_bodyguard2.setObjGotoCoordOnFoot(-645.4, -278.9);
              }
            }
            if ($.drug_dealer_bodyguard2_flag == 2) {
              if ($.drug_dealer_bodyguard2.locateAnyMeans2D(-648.7, -285.6, 2.0, 2.0, false /* FALSE */)) {
                $.drug_dealer_bodyguard2.setObjGotoCoordOnFoot(-646.9, -289.4);
                $.drug_dealer_bodyguard2_flag = 3;
              }
              else {
                $.drug_dealer_bodyguard2.setObjGotoCoordOnFoot(-648.7, -285.6);
              }
            }
            if ($.drug_dealer_bodyguard2_flag == 3) {
              if ($.drug_dealer_bodyguard2.locateAnyMeans2D(-646.9, -289.4, 2.0, 2.0, false /* FALSE */)) {
                $.drug_dealer_bodyguard2.setObjGotoCoordOnFoot(-643.5, -283.1);
                $.drug_dealer_bodyguard2_flag = 4;
              }
              else {
                $.drug_dealer_bodyguard2.setObjGotoCoordOnFoot(-646.9, -289.4);
              }
            }
            if ($.drug_dealer_bodyguard2_flag == 4) {
              if ($.drug_dealer_bodyguard2.locateAnyMeans2D(-643.5, -283.1, 2.0, 2.0, false /* FALSE */)) {
                $.drug_dealer_bodyguard2.setObjNoObj();
                $.drug_dealer_bodyguard2.turnToFaceCoord(-650.0, -269.1, 9.0);
                $.drug_dealer_bodyguard2_flag = 5;
              }
            }
          }
        }
      }
    }


    if (Char.IsDead($.boat_driver)) {
      Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
      // SCM GOTO → mission_failed_cuban3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_cuban3"); // fallback: would break linear control flow
    }


    if (Car.IsDead($.playrs_boat)) {
      $.player1.explodeHead();
      // SCM GOTO → mission_failed_cuban3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_cuban3"); // fallback: would break linear control flow
    }

    //removing bodies from pool

    if (Char.IsDead($.haitian_bodyguard1)) {
      $.haitian_bodyguard1.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.haitian_bodyguard2)) {
      $.haitian_bodyguard2.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.haitian_ob1)) {
      $.haitian_ob1.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.haitian_ob2)) {
      $.haitian_ob2.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.haitian_ob3)) {
      $.haitian_ob3.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.haitian_ob4)) {
      $.haitian_ob4.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.haitian_ob5)) {
      $.haitian_ob5.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.haitian_ob6)) {
      $.haitian_ob6.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.drug_dealer)) {
      $.drug_dealer.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.drug_dealer_bodyguard1)) {
      $.drug_dealer_bodyguard1.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.drug_dealer_bodyguard2)) {
      $.drug_dealer_bodyguard2.markAsNoLongerNeeded();
    }


  }
}



// ******************************************START OF PLAYER PULLING UP TO JETTY CUTSCENE********************************

async function jetty_cutscene() {
  await asyncWait(1000);



  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);


  Camera.SetFixedPosition(-642.3, -241.4, 10.0, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-630.5, -261.4, 7.0, 2 /* JUMP_CUT */);
  World.ClearAreaOfCars(-530.2, -186.3, 10.0, -791.8, -447.8, 0.0);
  Audio.SetRadioChannel(6 /* RADIO_ESPANTOSO */, -1);


  if (!(Car.IsDead($.playrs_boat))) {
    $.scplayer.attachToCar($.playrs_boat, 0.0, -0.4, 1.5, 2 /* FACING_BACK */, 360.0, 0 /* WEAPONTYPE_UNARMED */);
    $.playrs_boat.setCoordinates(-642.3, -230.4, 6.0);
    $.playrs_boat.setHeading(223.0);
    $.playrs_boat.anchor(false /* FALSE */);
    $.playrs_boat.setCruiseSpeed(10.0);
    $.playrs_boat.goto(-632.1, -251.0, 6.5);
  }
  else {
    Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
    // SCM GOTO → mission_failed_cuban3 (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_failed_cuban3"); // fallback: would break linear control flow
  }


  if (!(Char.IsDead($.drug_dealer))) {
    if (!($.drug_dealer.locateAnyMeans2D(-641.0, -309.0, 2.0, 2.0, false /* FALSE */))) {
      $.drug_dealer.setObjNoObj();
      $.drug_dealer.setCoordinates(-641.0, -309.0, 11.5);
      $.drug_dealer.turnToFaceCoord(-650.0, -269.1, 9.0);
    }
  }
  else {
    $.drug_dealer.markAsNoLongerNeeded();
  }


  if (!(Char.IsDead($.drug_dealer_bodyguard1))) {
    if (!($.drug_dealer_bodyguard1.locateAnyMeans2D(-656.5, -290.5, 2.0, 2.0, false /* FALSE */))) {
      $.drug_dealer_bodyguard1.setObjNoObj();
      $.drug_dealer_bodyguard1.setCoordinates(-656.5, -290.5, 9.0);
      $.drug_dealer_bodyguard1.turnToFaceCoord(-650.0, -269.1, 9.0);
    }
  }
  else {
    $.drug_dealer_bodyguard1.markAsNoLongerNeeded();
  }


  if (!(Char.IsDead($.drug_dealer_bodyguard2))) {
    if (!($.drug_dealer_bodyguard2.locateAnyMeans2D(-643.5, -283.1, 2.0, 2.0, false /* FALSE */))) {
      $.drug_dealer_bodyguard2.setObjNoObj();
      $.drug_dealer_bodyguard2.setCoordinates(-643.5, -283.1, 9.0);
      $.drug_dealer_bodyguard2.turnToFaceCoord(-650.0, -269.1, 9.0);
    }
  }
  else {
    $.drug_dealer_bodyguard2.markAsNoLongerNeeded();
  }


  await asyncWait(1000);
}



async function waiting_on_boat_to_dock() {
  await asyncWait(0);
  World.ClearAreaOfCars(-530.2, -186.3, 10.0, -791.8, -447.8, 0.0);
  if (!(Car.IsDead($.playrs_boat))) {
    if ($.playrs_boat.locate2D(-632.1, -251.0, 5.0, 5.0, false /* FALSE */)) {
      $.playrs_boat.stop();
      $.playrs_boat.anchor(true /* TRUE */);
      $.scplayer.detachFromCar();

      //FADE OUT
      Camera.SetFadingColor(1, 1, 1);
      Camera.DoFade(500, 0 /* FADE_OUT */);
      await asyncWait(600);
      $.player1.setCoordinates(-633.2, -263.6, 8.7);
      $.player1.setHeading(143.3);
      if (!(Car.IsDead($.playrs_boat))) {
        $.playrs_boat.setCoordinates(-633.3, -256.2, 5.5);
        $.playrs_boat.setHeading(213.0);
      }
      if (!(Char.IsDead($.drug_dealer))) {
        $.drug_dealer.setStayInSamePlace(true /* TRUE */);
        $.drug_dealer.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.drug_dealer.giveWeapon(27 /* WEAPONTYPE_RUGER */, 30000);
        $.drug_dealer.setObjKillPlayerOnFoot($.player1);
      }
      if (!(Char.IsDead($.drug_dealer_bodyguard1))) {
        $.drug_dealer_bodyguard1.setStayInSamePlace(true /* TRUE */);
        $.drug_dealer_bodyguard1.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.drug_dealer_bodyguard1.giveWeapon(27 /* WEAPONTYPE_RUGER */, 30000);
        $.drug_dealer_bodyguard1.setObjKillPlayerOnFoot($.player1);
      }
      if (!(Char.IsDead($.drug_dealer_bodyguard2))) {
        $.drug_dealer_bodyguard2.setStayInSamePlace(true /* TRUE */);
        $.drug_dealer_bodyguard2.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.drug_dealer_bodyguard2.giveWeapon(27 /* WEAPONTYPE_RUGER */, 30000);
        $.drug_dealer_bodyguard2.setObjKillPlayerOnFoot($.player1);
      }

      //guy with briefcase
      $.drug_dealer_with_briefcases = Char.Create(9 /* PEDTYPE_GANG_STREET */, SGb, -629.9, -300.4, 11.0);
      $.drug_dealer_with_briefcases.setHeading(66.4);
      $.drug_dealer_with_briefcases.clearThreatSearch();
      $.drug_dealer_with_briefcases.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
      $.drug_dealer_with_briefcases.setHeedThreats(true /* TRUE */);
      $.drug_dealer_with_briefcases.setStayInSamePlace(true /* TRUE */);
      $.drug_dealer_with_briefcases.setThreatSearch(1 /* THREAT_PLAYER1 */);
      $.drug_dealer_with_briefcases.giveWeapon(27 /* WEAPONTYPE_ruger */, 30000);
      $.drug_dealer_with_briefcases.setObjKillPlayerOnFoot($.player1);


      //in front of door
      $.drug_dealer_backup1 = Char.Create(9 /* PEDTYPE_GANG_STREET */, SGa, -627.3, -310.8, 12.1);
      $.drug_dealer_backup1.setHeading(69.4);
      $.drug_dealer_backup1.clearThreatSearch();
      $.drug_dealer_backup1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
      $.drug_dealer_backup1.setHeedThreats(true /* TRUE */);
      $.drug_dealer_backup1.setStayInSamePlace(true /* TRUE */);
      $.drug_dealer_backup1.setThreatSearch(1 /* THREAT_PLAYER1 */);
      $.drug_dealer_backup1.giveWeapon(27 /* WEAPONTYPE_RUGER */, 30000);
      $.drug_dealer_backup1.setObjKillPlayerOnFoot($.player1);

      //on porch
      $.drug_dealer_backup2 = Char.Create(9 /* PEDTYPE_GANG_STREET */, SGa, -631.1, -313.0, 12.1);
      $.drug_dealer_backup2.setHeading(49.2);
      $.drug_dealer_backup2.clearThreatSearch();
      $.drug_dealer_backup2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
      $.drug_dealer_backup2.setHeedThreats(true /* TRUE */);
      $.drug_dealer_backup2.setStayInSamePlace(true /* TRUE */);
      $.drug_dealer_backup2.setThreatSearch(1 /* THREAT_PLAYER1 */);
      $.drug_dealer_backup2.giveWeapon(27 /* WEAPONTYPE_ruger */, 30000);
      $.drug_dealer_backup2.setObjKillPlayerOnFoot($.player1);

      //left side of house looking at deal
      $.drug_dealer_backup3 = Char.Create(9 /* PEDTYPE_GANG_STREET */, SGa, -648.6, -326.2, 11.0);
      $.drug_dealer_backup3.setHeading(2.7);
      $.drug_dealer_backup3.clearThreatSearch();
      $.drug_dealer_backup3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
      $.drug_dealer_backup3.setHeedThreats(true /* TRUE */);
      $.drug_dealer_backup3.setStayInSamePlace(true /* TRUE */);
      $.drug_dealer_backup3.setThreatSearch(1 /* THREAT_PLAYER1 */);
      $.drug_dealer_backup3.giveWeapon(21 /* WEAPONTYPE_STUBBY_SHOTGUN */, 30000);
      $.drug_dealer_backup3.setObjKillPlayerOnFoot($.player1);

      //right side of house looking at deal
      $.drug_dealer_backup4 = Char.Create(9 /* PEDTYPE_GANG_STREET */, SGa, -608.5, -294.6, 11.0);
      $.drug_dealer_backup4.setHeading(46.2);
      $.drug_dealer_backup4.clearThreatSearch();
      $.drug_dealer_backup4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
      $.drug_dealer_backup4.setHeedThreats(true /* TRUE */);
      $.drug_dealer_backup4.setStayInSamePlace(true /* TRUE */);
      $.drug_dealer_backup4.setThreatSearch(1 /* THREAT_PLAYER1 */);
      $.drug_dealer_backup4.giveWeapon(21 /* WEAPONTYPE_STUBBY_SHOTGUN */, 30000);
      $.drug_dealer_backup4.setObjKillPlayerOnFoot($.player1);

      //waiting for player to run through archway on left looking at deal
      $.drug_dealer_backup5 = Char.Create(9 /* PEDTYPE_GANG_STREET */, SGa, -592.6, -255.9, 9.5);
      $.drug_dealer_backup5.setHeading(10.7);
      $.drug_dealer_backup5.clearThreatSearch();
      $.drug_dealer_backup5.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
      $.drug_dealer_backup5.setHeedThreats(true /* TRUE */);
      $.drug_dealer_backup5.setStayInSamePlace(true /* TRUE */);
      $.drug_dealer_backup5.setThreatSearch(1 /* THREAT_PLAYER1 */);
      $.drug_dealer_backup5.giveWeapon(21 /* WEAPONTYPE_STUBBY_SHOTGUN */, 30000);
      $.drug_dealer_backup5.setObjKillPlayerOnFoot($.player1);
      if ($.briefcase_dropped_flag == 0) {
        $.briefcase_dropped_1_blip = Blip.AddForCoord(-641.0, -309.0, 11.5);
      }
      $.boat_location = 0;
      // SCM GOTO → boat_docked (not lowered; manual jump required)
      throw new Error("unresolved GOTO boat_docked"); // fallback: would break linear control flow
    }
  }
  else {
    Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
    // SCM GOTO → mission_failed_cuban3 (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_failed_cuban3"); // fallback: would break linear control flow
  }
  // SCM GOTO → waiting_on_boat_to_dock (not lowered; manual jump required)
  throw new Error("unresolved GOTO waiting_on_boat_to_dock"); // fallback: would break linear control flow


  if (Char.IsDead($.boat_driver)) {
    Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
    // SCM GOTO → mission_failed_cuban3 (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_failed_cuban3"); // fallback: would break linear control flow
  }
}



async function boat_docked() {


  await asyncWait(600);

  //FADE IN

  Camera.DoFade(1500, 1 /* FADE_IN */);


  await asyncWait(1600);


  Camera.RestoreJumpcut();
  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  // ******************************************END OF PLAYER PULLING UP TO JETTY CUTSCENE**********************************
  //////////////////////THE FINAL FIGHT and PLAYER GOING BACK TO CUBAN BASE////////////////////////////////////////////////



  Text.PrintNow("CUB3_03", 7000, 1); //Collect all the briefcases filled with the drugs and cash.
}



async function final_fight() {
  // SCM GOTO → final_fight lowered to endless loop
  while (true) {
    await asyncWait(0);


    if (Char.IsDead($.boat_driver) || Car.IsDead($.playrs_boat)) {
      Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
      // SCM GOTO → mission_failed_cuban3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_cuban3"); // fallback: would break linear control flow
    }


    if (Char.IsDead($.drug_dealer_with_briefcases)) {
      $.drug_dealer_with_briefcases.markAsNoLongerNeeded();
      if ($.briefcase_dropped_flag == 0) {
        $.leader_coordsy -= 1.0;
        $.briefcase_dropped_1 = Pickup.Create(briefcase, 3 /* PICKUP_ONCE */, $.leader_coordsx, $.leader_coordsy, $.leader_coordsz);
        $.briefcase_dropped_1_blip.remove();
        $.briefcase_dropped_1_blip = Blip.AddForCoord($.leader_coordsx, $.leader_coordsy, $.leader_coordsz);
        $.briefcase_dropped_flag = 1;
      }
      if ($.briefcase_dropped_flag == 1) {
        $.leader_coordsy += 2.0;
        $.briefcase_dropped_2 = Pickup.Create(briefcase, 3 /* PICKUP_ONCE */, $.leader_coordsx, $.leader_coordsy, $.leader_coordsz);
        $.briefcase_dropped_2_blip = Blip.AddForCoord($.leader_coordsx, $.leader_coordsy, $.leader_coordsz);
        $.briefcase_dropped_flag = 2;
      }
    }
    else {
      const _res175 = $.drug_dealer_with_briefcases.getCoordinates();
$.leader_coordsx = _res175.x;
$.leader_coordsy = _res175.y;
$.leader_coordsz = _res175.z;
    }


    if ($.dropped_money.hasBeenCollected()) {
      $.boat_location++;
      $.dropped_money_blip.remove();
    }


    if ($.briefcase_dropped_flag == 2) {
      if ($.briefcase_dropped_1.hasBeenCollected()) {
        $.boat_location++;
        $.briefcase_dropped_1_blip.remove();
      }
      if ($.briefcase_dropped_2.hasBeenCollected()) {
        $.boat_location++;
        $.briefcase_dropped_2_blip.remove();
      }
    }

    //removing peds from pool

    if (Char.IsDead($.drug_dealer)) {
      $.drug_dealer.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.drug_dealer_bodyguard1)) {
      $.drug_dealer_bodyguard1.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.drug_dealer_bodyguard2)) {
      $.drug_dealer_bodyguard2.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.drug_dealer_backup1)) {
      $.drug_dealer_backup1.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.drug_dealer_backup2)) {
      $.drug_dealer_backup2.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.drug_dealer_backup3)) {
      $.drug_dealer_backup3.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.drug_dealer_backup4)) {
      $.drug_dealer_backup4.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.drug_dealer_backup5)) {
      $.drug_dealer_backup5.markAsNoLongerNeeded();
    }


    if ($.boat_location == 3) {
      // ******************************************START OF CUTSCENE - BLOWING UP PLAYERS BOAT**********************************
      $.player1.setControl(false /* OFF */);
      Hud.SwitchWidescreen(true /* ON */);
      $.haitian_ob1.delete();
      $.haitian_ob2.delete();
      $.haitian_dinghy = Car.Create(dinghy, -635.5, -237.7, 5.5);
      $.haitian_dinghy.setHeading(159.0);
      $.haitian_dinghy.anchor(true /* TRUE */);
      $.haitian_ob1 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, -635.5, -237.7, 6.0);
      $.haitian_ob1.attachToCar($.haitian_dinghy, 0.0, 1.8, 1.2, 0 /* FACING_FORWARD */, 360.0, 12 /* WEAPONTYPE_GRENADE */); //guy throwing grenade
      $.haitian_ob2 = Char.Create(8 /* PEDTYPE_GANG_HAITIAN */, HNa, -635.5, -237.7, 6.0);
      $.haitian_ob2.attachToCar($.haitian_dinghy, 0.4, -1.8, 1.2, 0 /* FACING_FORWARD */, 360.0, 12 /* WEAPONTYPE_GRENADE */); //guy driving dinghy
      $.haitian_ob2.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 100000);
      $.haitian_dinghy.goto(-637.0, -239.0, 5.5);
      $.haitian_dinghy.setCruiseSpeed(0.0);
      if (!(Char.IsDead($.boat_driver))) {
        $.boat_driver.setOnlyDamagedByPlayer(false /* FALSE */);
      }
      Camera.SetFixedPosition(-627.6, -268.3, 12.0, 0.0, 0.0, 0.0);
      Camera.PointAtCar($.haitian_dinghy, 15 /* FIXED */, 2 /* JUMP_CUT */);
      World.ClearAreaOfCars(-530.2, -186.3, 10.0, -791.8, -447.8, 0.0);
      while (!($.haitian_dinghy.locate2D(-637.0, -239.0, 2.0, 2.0, false /* FALSE */))) {
        await asyncWait(0);
        if (!(Car.IsDead($.haitian_dinghy))) {
        }
      }
      if (!(Car.IsDead($.haitian_dinghy))) {
        $.haitian_dinghy.stop();
        $.haitian_dinghy.anchor(true /* TRUE */);
      }
      else {
        Text.PrintNow("CUB2_10", 5000, 1); //You are supposed to be killing Haitians, not Cubans.
        // SCM GOTO → mission_failed_cuban3 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_cuban3"); // fallback: would break linear control flow
      }
      await asyncWait(2000);
      if (!(Car.IsDead($.playrs_boat))) {
        if (!(Char.IsDead($.haitian_ob1))) {
          $.haitian_ob1.setObjDestroyCar($.playrs_boat);
        }
      }
      await asyncWait(2000);
      if (!(Car.IsDead($.playrs_boat))) {
        $.playrs_boat.setCanBeDamaged(true /* TRUE */);
        const _res176 = $.playrs_boat.getCoordinates();
$.player_x = _res176.x;
$.player_y = _res176.y;
$.player_z = _res176.z;
        $.playrs_boat.explode();
        Fx.AddExplosion($.player_x, $.player_y, $.player_z, 2 /* EXPLOSION_ROCKET */);
        Fx.AddExplosion($.player_x, $.player_y, $.player_z, 11 /* EXPLOSION_HELI_BOMB */);
        Fx.AddExplosion($.player_x, $.player_y, $.player_z, 1 /* EXPLOSION_MOLOTOV */);
        Fx.AddExplosion($.player_x, $.player_y, $.player_z, 6 /* EXPLOSION_HELI */);
        Fx.AddMovingParticleEffect(17 /* POBJECT_FIREBALL_AND_SMOKE */, $.player_x, $.player_y, $.player_z, 0.1, 0.0, 0.2, 0.8, 0, 0, 0, 11000);
      }
      await asyncWait(2000);
      if (!(Char.IsDead($.haitian_ob1))) {
        $.haitian_ob1.detachFromCar();
        $.haitian_ob1.setCoordinates(-632.2, -264.0, 8.7);
        $.haitian_ob1.setHeading(183.0);
        $.haitian_ob1.clearThreatSearch();
        $.haitian_ob1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.haitian_ob1.setHeedThreats(true /* TRUE */);
        $.haitian_ob1.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.haitian_ob1.giveWeapon(27 /* WEAPONTYPE_RUGER */, 30000);
        $.haitian_ob1.setObjKillPlayerOnFoot($.player1);
      }
      if (!(Char.IsDead($.haitian_ob2))) {
        $.haitian_ob2.setWaitState(0 /* WAITSTATE_FALSE */, 100);
        $.haitian_ob2.detachFromCar();
        $.haitian_ob2.setCoordinates(-639.2, -272.0, 8.7);
        $.haitian_ob2.setHeading(183.0);
        $.haitian_ob2.clearThreatSearch();
        $.haitian_ob2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.haitian_ob2.setHeedThreats(true /* TRUE */);
        $.haitian_ob2.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.haitian_ob2.giveWeapon(27 /* WEAPONTYPE_RUGER */, 30000);
        $.haitian_ob2.setObjKillPlayerOnFoot($.player1);
      }


      if (!(Car.IsDead($.haitian_dinghy))) {
        $.haitian_dinghy.setCoordinates(-624.0, -257.7, 6.0);
        $.haitian_dinghy.setHeading(335.0);
      }
      Camera.RestoreJumpcut();
      $.player1.setControl(true /* ON */);
      Hud.SwitchWidescreen(false /* OFF */);
      // ******************************************END OF CUTSCENE - BLOWING UP PLAYERS BOAT************************************
      $.cuban_base = Blip.AddForCoord(-1170.0, -603.4, 11.6);
      Text.PrintNow("CUB3_04", 7000, 1); //Get the drugs and cash back to Umberto.
      $.player1.alterWantedLevelNoDrop(4);
      // SCM GOTO → taking_drugsandmoney_back (not lowered; manual jump required)
      throw new Error("unresolved GOTO taking_drugsandmoney_back"); // fallback: would break linear control flow
    }


  }
}


//Waiting for player to return with cash

async function taking_drugsandmoney_back() {
  // SCM GOTO → taking_drugsandmoney_back lowered to endless loop
  while (true) {
    await asyncWait(0);
    if ($.player1.locateOnFoot3D(-1169.9, -607.8, 10.6, 2.0, 2.0, 2.0, true /* TRUE */)) {
      // ******************************************START OF CUTSCENE - PLAYER GIVING CASH AND DRUGS TO UMBERTO**********************************
      $.player1.setControl(false /* OFF */);
      Hud.SwitchWidescreen(true /* ON */);
      Camera.SetFixedPosition(-1171.0, -595.6, 14.2, 0.0, 0.0, 0.0);
      Camera.PointAtPlayer($.player1, 15 /* FIXED */, 2 /* JUMP_CUT */);
      $.player1.setCoordinates(-1161.4, -620.2, 10.6);
      $.dummy_dude = Char.Create(4 /* PEDTYPE_CIVMALE */, null, -1169.9, -607.8, 10.6);
      $.dummy_dude.turnToFaceCoord(-1169.7, -630.9, 11.0);
      $.dummy_dude.setObjRunToCoord(-1169.7, -630.9);
      if (!(Char.IsDead($.dummy_dude))) {
      }
      while (!($.dummy_dude.locateOnFoot2D(-1169.7, -630.9, 2.0, 2.0, false /* FALSE */))) {
        await asyncWait(0);
        if (!(Char.IsDead($.dummy_dude))) {
        }
      }
      if (!(Char.IsDead($.dummy_dude))) {
        $.dummy_dude.setObjNoObj();
      }
      await asyncWait(1000);
      $.dummy_dude.delete();
      Camera.RestoreJumpcut();
      $.player1.setControl(true /* ON */);
      Hud.SwitchWidescreen(false /* OFF */);
      World.ClearArea(-1170.2, -603.9, 10.6, 20.0, true /* TRUE */);
      // SCM GOTO → mission_passed_cuban3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_passed_cuban3"); // fallback: would break linear control flow
    }

    //removing peds from pool

    if (Char.IsDead($.drug_dealer)) {
      $.drug_dealer.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.drug_dealer_bodyguard1)) {
      $.drug_dealer_bodyguard1.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.drug_dealer_bodyguard2)) {
      $.drug_dealer_bodyguard2.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.drug_dealer_backup1)) {
      $.drug_dealer_backup1.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.drug_dealer_backup2)) {
      $.drug_dealer_backup2.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.drug_dealer_backup3)) {
      $.drug_dealer_backup3.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.drug_dealer_backup4)) {
      $.drug_dealer_backup4.markAsNoLongerNeeded();
    }
    if (Char.IsDead($.drug_dealer_backup5)) {
      $.drug_dealer_backup5.markAsNoLongerNeeded();
    }


  }
}


// ******************************************END OF CUTSCENE - PLAYER GIVING CASH AND DRUGS TO UMBERTO**********************************


// Mission failed

async function mission_failed_cuban3() {


  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
}




// mission passed

async function mission_passed_cuban3() {


  Text.ClearPrints();
  Text.PrintWithNumberBig("M_PASS", 4000, 5000, 1); //"Mission Passed!"
  Audio.PlayMissionPassedTune(1);
  $.player1.clearWantedLevel();
  $.player1.addScore(4000);
  Stat.PlayerMadeProgress(1);
  Stat.RegisterMissionPassed("CUB_3");
  // START_NEW_SCRIPT cuban_mission4_loop 
  $.flag_cuban_mission3_passed = 1;
}




// mission cleanup

async function mission_cleanup_cuban3() {
  ONMISSION = 0;


  $.player1.setControl(true /* on */);
  Game.ClearThreatForPedType(8 /* PEDTYPE_GANG_HAITIAN */, 1 /* THREAT_PLAYER1 */);
  Streaming.MarkModelAsNoLongerNeeded(tropic);
  Streaming.MarkModelAsNoLongerNeeded(HNa);
  Streaming.MarkModelAsNoLongerNeeded(HNb);
  Streaming.MarkModelAsNoLongerNeeded(jetmax);
  Streaming.MarkModelAsNoLongerNeeded(SGa);
  Streaming.MarkModelAsNoLongerNeeded(grenade);
  Streaming.MarkModelAsNoLongerNeeded(dinghy);
  Streaming.MarkModelAsNoLongerNeeded(SGb);
  Streaming.MarkModelAsNoLongerNeeded(CBb);
  Streaming.MarkModelAsNoLongerNeeded(briefcase);
  Streaming.MarkModelAsNoLongerNeeded(ruger);
  Streaming.MarkModelAsNoLongerNeeded(buddyshot);
  Streaming.MarkModelAsNoLongerNeeded(uzi);
  $.radar_blip_playrs_boat.remove();
  $.dropped_money_blip.remove();
  $.briefcase_dropped_1_blip.remove();
  $.briefcase_dropped_2_blip.remove();
  $.cuban_base.remove();
  $.dropped_money.remove();
  $.briefcase_dropped_1.remove();
  $.briefcase_dropped_2.remove();
  $.scplayer.detachFromCar();
  $.timer_mobile_start = Clock.GetGameTimer();
  Mission.Finish();
}

export async function cuban3() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************Cuban 3*****************************************
  // *****************************************NAVAL ENGAGEMENT********************************
  // **********************haitains attacking coke deals on boats*****************************
  // **********************go to deal kill haitians on boat then chase other haitians boats***
  // *****************************************************************************************

  // SCRIPT_NAME cuban3
  // Mission start stuff

  await mission_start_cuban3();  // SCM GOSUB mission_start_cuban3
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_failed_cuban3();  // SCM GOSUB mission_failed_cuban3
  }
  await mission_cleanup_cuban3();  // SCM GOSUB mission_cleanup_cuban3
  // MissionBoundary

  // Variables for mission
  //people, cars and objects

  // VAR_INT playrs_boat
  // VAR_INT boat_driver
  // VAR_INT haitian_big_boat1
  // VAR_INT haitian_big_boat2
  // VAR_INT haitian_ob1
  // VAR_INT haitian_ob2
  // VAR_INT haitian_ob3
  // VAR_INT haitian_ob4
  // VAR_INT haitian_ob5
  // VAR_INT haitian_ob6
  // VAR_INT haitian_with_money
  // VAR_INT drug_dealer
  // VAR_INT drug_dealer_bodyguard1
  // VAR_INT drug_dealer_bodyguard2
  // VAR_INT drug_dealer_sniper
  // VAR_INT drug_dealer_backup1
  // VAR_INT drug_dealer_backup2
  // VAR_INT drug_dealer_backup3
  // VAR_INT drug_dealer_backup4
  // VAR_INT drug_dealer_backup5
  // VAR_INT haitian_bodyguard1
  // VAR_INT haitian_bodyguard2
  // VAR_INT dropped_money
  // VAR_INT briefcase_dropped_1
  // VAR_INT briefcase_dropped_2
  // VAR_INT haitian_dinghy
  // VAR_INT drug_dealer_with_briefcases
  // VAR_INT dummy_dude

  //blips

  // VAR_INT radar_blip_playrs_boat
  // VAR_INT dropped_money_blip
  // VAR_INT briefcase_dropped_1_blip
  // VAR_INT briefcase_dropped_2_blip
  // VAR_INT cuban_base

  //flags

  // VAR_INT boat_location
  // VAR_INT drug_dealer_flag
  // VAR_INT dropped_money_flag
  // VAR_INT briefcase_dropped_flag
  // VAR_INT drug_dealer_bodyguard1_flag
  // VAR_INT drug_dealer_bodyguard2_flag
  // VAR_INT cub3_speech_played
  // VAR_INT boat_haitians_dead
  // VAR_INT haitian_death_ob1
  // VAR_INT haitian_death_ob2
  // VAR_INT haitian_death_ob3
  // VAR_INT haitian_death_ob4
  // VAR_INT haitian_death_ob5
  // VAR_INT haitian_death_ob6
  // VAR_INT haitian_moving_ob3
  // VAR_INT haitian_moving_ob5
  // VAR_INT haitian_moving_ob6

  //coordinates

  // VAR_FLOAT leader_coordsx
  // VAR_FLOAT leader_coordsy
  // VAR_FLOAT leader_coordsz
  // VAR_FLOAT hait3_coordx
  // VAR_FLOAT hait3_coordy
  // VAR_FLOAT hait5_coordx
  // VAR_FLOAT hait5_coordy
  // VAR_FLOAT hait6_coordx
  // VAR_FLOAT hait6_coordy
  // ****************************************Mission Start************************************

}
