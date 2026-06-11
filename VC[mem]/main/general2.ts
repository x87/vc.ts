// Generated from main/general2.sc

import { $ } from "../utils/vars.mts";

// *****************************************************************************************
// ************************************ General Mission 2 **********************************
// ************************************** Mall Shootout ************************************
// *****************************************************************************************
// *** The Colonel wants you to pick up some guidance chips that he has paid a good deal ***
// *** of money for. The exchange will take place in the relative safety of a busy 		 ***
// *** shopping mall. The French security forces are watching and spring a trap. The 	 ***
// *** player1 must escape with the merchandise and get it to <location>.				 ***
// *****************************************************************************************

async function body() {


  ONMISSION = 1;


  Stat.RegisterMissionGiven();
  // SCRIPT_NAME COL2


  await asyncWait(0);


  // LVAR_INT the_seller french_security1 french_security2 french_security3 french_security4 the_sellers_car
  // LVAR_INT french_security5 french_security6 french_security7 french_security8 the_chips
  // LVAR_INT french_security9 the_players_car


  Text.LoadMissionText("GENERA2");
  Shortcut.SetDropoffPointForMission(-163.0, -1439.4, 9.0, 201.5);


  $.mall_shootout_counter = 0;
  $.mall_shootout_timer = 0;
  $.the_seller_counter = -1;
  $.chips_pickup_flag = 0;
  $.done_blip_help = 0;
  $.timer = 0;
  $.ground_z = 0.0;
  $.destination_counter = 0;
  $.destination_timer = 0;
  $.done_wanted_level = 0;


  $.is_audio_in_use = 1;


  $.audio_1_flag = 0;
  $.audio_2_flag = 0;
  $.audio_3_flag = 0;
  $.audio_4_flag = 0;
  $.audio_5_flag = 0;
  $.audio_6_flag = 0;
  $.audio_7_flag = 0;
  $.audio_8_flag = 0;


  $.player_close_to_seller = 2;
  $.ammunation_help_flag = 0;

  //////////////////////////
  //////////////////////////


  Streaming.LoadSpecialCharacter(1, "csplay");
  Streaming.LoadSpecialCharacter(2, "cscolo");
  Streaming.LoadSpecialCharacter(3, "cgonb");
  Streaming.LoadSpecialCharacter(4, "cservrb");


  Streaming.RequestModel(yt_main_body);
  Streaming.RequestModel(yt_main_body2);
  Streaming.RequestModel(yt_doors14);
  Streaming.RequestModel(yt_tmp_boat);
  Streaming.RequestModel(lodmain_body);
  Streaming.RequestModel(big_poly_tings);
  Streaming.RequestModel(yt_gangplnk_tmp);


  const _res195 = $.the_yacht.getCoordinates();
$.the_yacht_x = _res195.x;
$.the_yacht_y = _res195.y;
$.the_yacht_z = _res195.z;
  $.the_yacht3 = ScriptObject.CreateNoOffset(big_poly_tings, $.the_yacht_x, $.the_yacht_y, $.the_yacht_z);
  //GET_OBJECT_COORDINATES the_yacht the_yacht_x the_yacht_y the_yacht_z
  //the_yacht_x = the_yacht_x + 0.003
  //the_yacht_y = the_yacht_y - 1.381
  //the_yacht_z = the_yacht_z + 3.149
  //LOAD_SCENE the_yacht_x the_yacht_y the_yacht_z


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasSpecialCharacterLoaded(4))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(yt_main_body)) || !(Streaming.HasModelLoaded(yt_main_body2)) || !(Streaming.HasModelLoaded(yt_doors14)) || !(Streaming.HasModelLoaded(yt_tmp_boat)) || !(Streaming.HasModelLoaded(lodmain_body)) || !(Streaming.HasModelLoaded(big_poly_tings))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(yt_gangplnk_tmp))) {
    await asyncWait(0);
  }


  Camera.SetNearClip(0.1);
  Cutscene.Load("COL_2");


  const _res196 = $.the_yacht.getCoordinates();
$.the_yacht_x = _res196.x;
$.the_yacht_y = _res196.y;
$.the_yacht_z = _res196.z;
  $.the_yacht_x = $.the_yacht_x + 0.003;
  $.the_yacht_y = $.the_yacht_y - 1.381;
  $.the_yacht_z = $.the_yacht_z + 3.149;
  Cutscene.SetOffset($.the_yacht_x, $.the_yacht_y, $.the_yacht_z);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("csplay");


  $.cs_ken = CutsceneObject.Create(SPECIAL02);
  $.cs_ken.setAnim("cscolo");


  $.cs_dude1 = CutsceneObject.Create(SPECIAL03);
  $.cs_dude1.setAnim("cgonb");


  $.cs_dude2 = CutsceneObject.Create(SPECIAL04);
  $.cs_dude2.setAnim("cservrb");


  Streaming.RequestCollision(-244.2799, -1360.6704);
  Streaming.LoadScene(-244.2799, -1360.6704, 7.0786);
  World.ClearArea(-244.2799, -1360.6704, 7.0786, 1.0, true /* TRUE */);
  $.player1.setCoordinates(-244.2799, -1360.6704, 7.0786);
  $.player1.setHeading(279.1362);
  Camera.SetBehindPlayer();


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Camera.SetNearClip(0.3);
  Cutscene.Start();


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 5347) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("COL2_A", 10000, 1); //Tommy! Come and join me.2920


  while ($.cs_time < 9864) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("COL2_B", 10000, 1); //This looks delicous huh? Tapia snout?8317


  while ($.cs_time < 13052) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("COL2_C", 10000, 1); //Eerr...No. No thanks.10659


  while ($.cs_time < 14891) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("COL2_D", 10000, 1); //Tommy; you are like a pampas breeze that has freed me from the stench of corruption,		12516


  while ($.cs_time < 20085) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("COL2_E", 10000, 1); //although, I must appear to mourn his passing and carry on with business as usual.17707


  while ($.cs_time < 24630) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("COL2_F", 10000, 1); //This isn't getting me any closer to my money...22199


  while ($.cs_time < 26918) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("COL2_G", 10000, 1); //Tommy, my friend; you are not in Liberty now. Here we do things differently.24500


  while ($.cs_time < 33020) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("COL2_H", 10000, 1); //I will continue with my enquiries but in the meantime I have a valuable deal to close.30654


  while ($.cs_time < 38898) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("COL2_I", 10000, 1); //A favour for a friend, Cortez.36500


  while ($.cs_time < 40828) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("COL2_J", 10000, 1); //You're a good friend Tommy. I knew you would not let me down.38392


  while ($.cs_time < 44168) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("COL2_K", 10000, 1); //I need you to meet a courier who has obtained some valuable technology for me...41736


  while ($.cs_time < 48182) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(1500, 0 /* FADE_OUT */);


  Text.ClearPrints();


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  while (!(Cutscene.HasFinished())) {
    await asyncWait(0);
  }


  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);


  $.the_yacht3.delete();
  Streaming.MarkModelAsNoLongerNeeded(yt_main_body);
  Streaming.MarkModelAsNoLongerNeeded(yt_main_body2);
  Streaming.MarkModelAsNoLongerNeeded(yt_doors14);
  Streaming.MarkModelAsNoLongerNeeded(yt_tmp_boat);
  Streaming.MarkModelAsNoLongerNeeded(lodmain_body);
  Streaming.MarkModelAsNoLongerNeeded(big_poly_tings);
  Streaming.MarkModelAsNoLongerNeeded(yt_gangplnk_tmp);

  //////////////////////////
  //////////////////////////


  $.player1.setMood(0 /* PLAYER_MOOD_CALM */, 60000);


  Streaming.RequestModel(PCJ600);
  Streaming.RequestModel(COLT45);
  Streaming.RequestModel(UZI);
  Streaming.LoadSpecialCharacter(1, "fsfa");
  Streaming.LoadSpecialCharacter(2, "courier");


  Audio.LoadMissionAudio(1, "COL2_1" as any);
  Audio.LoadMissionAudio(2, "COL2_2" as any);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasModelLoaded(PCJ600)) || !(Streaming.HasModelLoaded(COLT45)) || !(Streaming.HasModelLoaded(UZI)) || !(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2))) {
    await asyncWait(0);
  }


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(1500, 1 /* FADE_IN */);


  Text.PrintNow("COL2_B1", 15000, 1); //"Meet the courier at the mall."
  $.ammunation_help_timer = Clock.GetGameTimer();
  $.ammunation_help_timer += 20000;

  //SET_UP_TAXI_SHORTCUT (-160.3530 -1454.4674 10.0) 25.6793 (48.8072 -899.7817 10.0) 90.0  // 9.4186 9.4157


  the_seller = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL02, 6.1112, -937.0656, 15.0760);
  the_seller.setOnlyDamagedByPlayer(true /* TRUE */);
  the_seller.setUsePednodeSeek(false /* FALSE */);
  the_seller.setHeading(262.8159);
  the_seller.clearThreatSearch();
  the_seller.setOnlyDamagedByPlayer(true /* TRUE */);
  the_seller.setStayInSamePlace(true /* TRUE */);
  the_seller.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  the_seller.shutUp(true /* TRUE */);



  Char.SetEnterCarRangeMultiplier(6.0);


  $.the_seller_blip = Blip.AddForChar(the_seller);


  if (ONMISSION == 0) {
    french_security1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL01, 18.9999, -928.7729, 15.0727);
    french_security2 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL01, 18.9999, -928.7729, 15.0727);
    french_security3 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL01, 18.9999, -928.7729, 15.0727);
    french_security4 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL01, 18.9999, -928.7729, 15.0727);
    french_security5 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL01, 18.9999, -928.7729, 15.0727);
    french_security6 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL01, -15.6727, -929.0634, 15.066);
    french_security7 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL01, -10.2667, -937.9695, 9.4077);
    french_security8 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL01, -9.9934, -939.7717, 9.4492);
    french_security9 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL01, -15.2250, -949.0593, 15.072);
  }


  $.button_pressed = 0;
}



async function mall_shootout_loop() {
  // SCM GOTO → mall_shootout_loop lowered to endless loop
  while (true) {


    await asyncWait(0);


    $.game_timer = Clock.GetGameTimer();


    if ($.chips_pickup_flag > 0) {
      if ($.done_wanted_level == 0) {
        $.player1.alterWantedLevelNoDrop(2);
        $.done_wanted_level = 1;
      }
    }


    if ($.mall_shootout_counter < 12) {
      if (Char.IsDead(the_seller)) {
        Text.PrintNow("COL2_F1", 5000, 1); //"You killed the contact!"
        // SCM GOTO → mission_general2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_general2_failed"); // fallback: would break linear control flow
      }
      if ($.mall_shootout_counter < 1) {
        if (!(the_seller.isHealthGreater(95))) {
          the_seller.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
          the_seller.setObjKillPlayerOnFoot($.player1);
        }
      }
      else {
        the_seller.removeAllWeapons();
      }
    }


    if ($.ammunation_help_flag == 0) {
      if ($.ammunation_help_timer < $.game_timer) {
        Text.ClearHelp();
        Text.PrintHelp("AMMUHLP"); //If you need any weapons vist Ammunation. It is marked on the radar by a blue gun blip.
        $.weapon_shop1_blip.remove();
        $.weapon_shop1_blip = Blip.AddSpriteForCoord($.ammu1X, $.ammu1Y, $.ammu1Z, 16 /* RADAR_SPRITE_GUN */);
        Hud.FlashObject(8 /* HUD_FLASH_RADAR */);
        $.ammunation_help_timer = $.game_timer + 3000;
        $.ammunation_help_flag = 1;
      }
    }


    if ($.ammunation_help_flag == 1) {
      if ($.game_timer > $.ammunation_help_timer) {
        Hud.FlashObject(-1);
        $.ammunation_help_flag = 2;
      }
    }


    if ($.done_blip_help == 0) {
      if ($.player1.locateAnyMeans2D(3.3530, -938.9778, 100.0, 100.0, false)) {
        Text.ClearHelp();
        Text.PrintHelp("BLIPHLP"); //"The blip on the radar is a triangle pointing up, this shows that the target is higher than the player."
        Hud.FlashObject(8 /* HUD_FLASH_RADAR */);
        $.timer = $.game_timer + 3000;
        $.done_blip_help = 1;
      }
    }


    if ($.done_blip_help == 1) {
      if ($.game_timer > $.timer) {
        Hud.FlashObject(-1);
        $.done_blip_help = 2;
      }
    }


    if ($.mall_shootout_counter > 1 && $.mall_shootout_counter < 12) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
        if ($.button_pressed == 1) {
          Audio.ClearMissionAudio(1);
          Audio.ClearMissionAudio(2);
          Text.ClearSmallPrints();
          if ($.mall_shootout_counter < 5) {
            french_security1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL01, 4.2931, -947.4683, 20.7330);
            french_security2 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL01, 2.4581, -947.4636, 20.7330);
          }
          if ($.mall_shootout_counter < 9) {
            french_security3 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL01, 2.7139, -936.8358, 9.3967);
            french_security4 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL01, 4.6123, -937.3372, 9.3965);
          }
          if ($.mall_shootout_counter < 11) {
            the_seller.setUsePednodeSeek(false /* FALSE */);
            the_seller.setOnlyDamagedByPlayer(false /* FALSE */);
            the_seller.setCoordinates(-8.3703, -934.7144, 9.4119);
            the_seller.setUsePednodeSeek(false /* FALSE */);
            the_seller.setObjSprintToCoord(1.7873, -928.6034);
            the_seller.setUsePednodeSeek(false /* FALSE */);
            $.the_seller_counter = 4;
          }
          $.mall_shootout_counter = 12;
          $.mall_shootout_timer = $.game_timer - 500;
          $.button_pressed = 2;
        }
      }
      else {
        if ($.button_pressed == 0) {
          $.button_pressed = 1;
        }
      }
    }

    /////////
    /////////

    if ($.mall_shootout_counter == 13) {
      if (!($.player1.isInArea3D(-39.0665, -968.8087, 9.4111, 47.3099, -909.2296, 33.5801, false))) {
        french_security1.markAsNoLongerNeeded();
        french_security2.markAsNoLongerNeeded();
        french_security3.markAsNoLongerNeeded();
        french_security4.markAsNoLongerNeeded();
        french_security5.markAsNoLongerNeeded();
        french_security6.markAsNoLongerNeeded();
        french_security7.markAsNoLongerNeeded();
        french_security8.markAsNoLongerNeeded();
        french_security9.markAsNoLongerNeeded();
        $.mall_shootout_counter = 14;
      }
      else {
        if (!(Char.IsDead(the_seller))) {
          if ($.the_seller_counter == 7) {
            if (the_seller.isOnScreen()) {
              french_security1.markAsNoLongerNeeded();
              french_security2.markAsNoLongerNeeded();
              french_security3.markAsNoLongerNeeded();
              french_security4.markAsNoLongerNeeded();
              french_security5.markAsNoLongerNeeded();
              french_security6.markAsNoLongerNeeded();
              french_security7.markAsNoLongerNeeded();
              french_security8.markAsNoLongerNeeded();
              french_security9.markAsNoLongerNeeded();
              $.mall_shootout_counter = 14;
            }
          }
        }
      }
    }


    if ($.mall_shootout_counter == 12) {
      if (Audio.HasMissionAudioFinished(1) || $.button_pressed == 2) {
        if (Audio.HasMissionAudioLoaded(2) || $.button_pressed == 2) {
          if ($.game_timer > $.mall_shootout_timer) {
            $.player1.setControl(true /* ON */);
            $.scplayer.turnToFaceCoord(-2.3434, -939.0732, 15.4658);
            Game.SetEveryoneIgnorePlayer($.player1, false /* FALSE */);
            Hud.SwitchWidescreen(false /* OFF */);
            Game.SetAllCarsCanBeDamaged(true /* TRUE */);
            Camera.SetBehindPlayer();
            Camera.RestoreJumpcut();
            if (!($.button_pressed == 2)) {
              Audio.PlayMissionAudio(2);
            }
            $.is_audio_in_use = 0;
            french_security5 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL01, 18.9999, -928.7729, 15.0727);
            french_security5.setHeedThreats(true /* TRUE */);
            french_security5.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
            french_security5.setThreatSearch(1 /* THREAT_PLAYER1 */);
            french_security5.giveWeapon(17 /* WEAPONTYPE_PISTOL */, 999);
            french_security5.setObjKillPlayerOnFoot($.player1);
            french_security6 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL01, -15.6727, -929.0634, 15.066);
            french_security6.setHeedThreats(true /* TRUE */);
            french_security6.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
            french_security6.setThreatSearch(1 /* THREAT_PLAYER1 */);
            french_security6.giveWeapon(17 /* WEAPONTYPE_PISTOL */, 999);
            french_security6.setObjKillPlayerOnFoot($.player1);


            french_security7 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL01, -10.2667, -937.9695, 9.4077);
            french_security7.setHeedThreats(true /* TRUE */);
            french_security7.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
            french_security7.setThreatSearch(1 /* THREAT_PLAYER1 */);
            french_security7.giveWeapon(17 /* WEAPONTYPE_PISTOL */, 999);
            french_security7.setObjKillPlayerOnFoot($.player1);
            french_security8 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL01, -9.9934, -939.7717, 9.4492);
            french_security8.setHeedThreats(true /* TRUE */);
            french_security8.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
            french_security8.setThreatSearch(1 /* THREAT_PLAYER1 */);
            french_security8.giveWeapon(17 /* WEAPONTYPE_PISTOL */, 999);
            french_security8.setObjKillPlayerOnFoot($.player1);



            french_security9 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL01, -15.2250, -949.0593, 15.072);
            french_security9.setHeedThreats(true /* TRUE */);
            french_security9.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
            french_security9.setThreatSearch(1 /* THREAT_PLAYER1 */);
            french_security9.giveWeapon(17 /* WEAPONTYPE_PISTOL */, 999);
            french_security9.setObjKillPlayerOnFoot($.player1);


            if (!(Char.IsDead(french_security1))) {
              french_security1.setHeedThreats(true /* TRUE */);
              french_security1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
              french_security1.setThreatSearch(1 /* THREAT_PLAYER1 */);
              french_security1.giveWeapon(17 /* WEAPONTYPE_PISTOL */, 999);
              french_security1.setObjKillPlayerOnFoot($.player1);
            }
            if (!(Char.IsDead(french_security2))) {
              french_security2.setHeedThreats(true /* TRUE */);
              french_security2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
              french_security2.setThreatSearch(1 /* THREAT_PLAYER1 */);
              french_security2.giveWeapon(17 /* WEAPONTYPE_PISTOL */, 999);
              french_security2.setObjKillPlayerOnFoot($.player1);
            }
            if (!(Char.IsDead(french_security3))) {
              french_security3.setHeedThreats(true /* TRUE */);
              french_security3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
              french_security3.setThreatSearch(1 /* THREAT_PLAYER1 */);
              french_security3.giveWeapon(17 /* WEAPONTYPE_PISTOL */, 999);
              french_security3.setObjKillPlayerOnFoot($.player1);
            }
            if (!(Char.IsDead(french_security4))) {
              french_security4.setHeedThreats(true /* TRUE */);
              french_security4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
              french_security4.setThreatSearch(1 /* THREAT_PLAYER1 */);
              french_security4.giveWeapon(17 /* WEAPONTYPE_PISTOL */, 999);
              french_security4.setObjKillPlayerOnFoot($.player1);
            }
            if (!(Char.IsDead(the_seller))) {
              $.the_seller_blip = Blip.AddForChar(the_seller);
              Text.PrintNow("COL2_B2", 10000, 1); //"The courier is fleeing with the guidance chips, don't let him get away!"
              the_sellers_car = Car.Create(PCJ600, 41.7295, -897.1017, 9.3919);
              the_sellers_car.setHeading(359.1412);
              the_players_car = Car.Create(PCJ600, 36.1736, -895.8868, 9.3919);
              the_players_car.setHeading(266.8658);
            }
            $.mall_shootout_counter = 13;
          }
        }
      }
    }


    if ($.mall_shootout_counter > 12) {
      if (!($.player1.locateAnyMeans2D(36.1736, -895.8868, 120.0, 120.0, false))) {
        the_players_car.markAsNoLongerNeeded();
      }
    }


    if ($.mall_shootout_counter == 11) {
      if (Audio.HasMissionAudioLoaded(2)) {
        if ($.game_timer > $.mall_shootout_timer) {
          Camera.SetFixedPosition(-16.7670, -942.2947, 10.0640, 0.0, 0.0, 0.0);
          Camera.PointAtPoint(-15.8789, -941.8711, 10.2422, 2 /* JUMP_CUT */);
          World.ClearArea(-5.4288, -939.4909, 13.0343, 10.0, false /* FALSE */);
          Path.SwitchPedRoadsOn(0.7780, -944.7307, 14.4913, 7.0235, -931.7332, 23.0981);
          $.mall_shootout_timer = $.game_timer + 2000;
          $.mall_shootout_counter = 12;
        }
      }
    }


    if ($.mall_shootout_counter == 10) {
      if (Audio.HasMissionAudioFinished(2)) {
        if (Audio.HasMissionAudioLoaded(1)) {
          if ($.game_timer > $.mall_shootout_timer) {
            Audio.LoadMissionAudio(2, "COL2_8" as any); //"Fill 'im full of ze lead!"
            Audio.PlayMissionAudio(1);
            Text.PrintNow("COL2_9", 5000, 1); //You American idiot! They followed you here!
            $.the_seller_counter = 0;
            $.mall_shootout_timer = $.game_timer + 2000;
            $.mall_shootout_counter = 11;
          }
        }
      }
    }


    if ($.mall_shootout_counter == 9) {
      if (Audio.HasMissionAudioFinished(1)) {
        if (Audio.HasMissionAudioLoaded(2)) {
          Camera.SetFixedPosition(2.7282, -949.3295, 23.6051, 0.0, 0.0, 0.0);
          Camera.PointAtPoint(2.7581, -948.4955, 23.0540, 2 /* JUMP_CUT */);
          if (!(Char.IsDead(french_security1))) {
            french_security1.setCoordinates(4.2931, -947.4683, -100.0);
            french_security1.setObjNoObj();
            french_security1.turnToFacePlayer($.player1);
            french_security1.setObjAimGunAtChar($.scplayer);
          }
          if (!(Char.IsDead(french_security2))) {
            french_security2.setCoordinates(2.4581, -947.4636, -100.0);
            french_security2.setObjNoObj();
            french_security2.turnToFacePlayer($.player1);
            french_security2.setObjAimGunAtChar($.scplayer);
          }

          //French Special Forces (SHOUTING, outrageous French accent):
          Text.PrintNow("COL2_6A", 5000, 1); //"Freeze imperialist American pig! Zat iz zee propertay of ze French government. 'And eet over!"
          Audio.PlayMissionAudio(2);
          Audio.LoadMissionAudio(1, "COL2_9" as any); //You American idiot! They followed you here!
          $.mall_shootout_timer = $.game_timer + 1000;
          $.mall_shootout_counter = 10;
        }
      }
    }


    if ($.mall_shootout_counter == 8) {
      french_security3 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL01, 2.5231, -924.9479, 9.3967);
      french_security4 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL01, 5.3188, -924.7693, 9.3965);
      french_security3.setUsePednodeSeek(false /* FALSE */);
      french_security3.setObjGotoCoordOnFoot(2.7139, -936.8358);
      french_security3.setUsePednodeSeek(false /* FALSE */);
      french_security4.setUsePednodeSeek(false /* FALSE */);
      french_security4.setObjGotoCoordOnFoot(4.6123, -937.3372);
      french_security4.setUsePednodeSeek(false /* FALSE */);
      $.mall_shootout_counter = 9;
    }


    if ($.mall_shootout_counter == 7) {
      if (Audio.HasMissionAudioFinished(2)) {
        if (Audio.HasMissionAudioLoaded(1)) {
          //Courier:
          Text.PrintNow("COL2_5", 2000, 1); //"Oh...ok."
          Audio.PlayMissionAudio(1);
          Audio.LoadMissionAudio(2, "COL2_6a" as any); //"Freeze imperialist American pig! Zat iz zee propertay of ze French government. 'And eet over!"
          the_seller.setObjGotoPlayerOnFoot($.player1);
          $.mall_shootout_timer = $.game_timer + 700;
          $.mall_shootout_counter = 8;
        }
      }
    }


    if ($.mall_shootout_counter == 6) {
      if (Audio.HasMissionAudioFinished(1)) {
        if (Audio.HasMissionAudioLoaded(2)) {
          //player1:
          Text.PrintNow("COL2_4", 3000, 1); //"Look, Cortez sent me. Just give me the damned chips."
          Audio.PlayMissionAudio(2);
          Audio.LoadMissionAudio(1, "COL2_5" as any); //"Oh...ok."
          $.mall_shootout_timer = $.game_timer + 4000;
          $.mall_shootout_counter = 7;
        }
      }
    }


    if ($.mall_shootout_counter == 5) {
      if (Audio.HasMissionAudioFinished(2)) {
        if (Audio.HasMissionAudioLoaded(1)) {
          //Courier:
          Text.PrintNow("COL2_3", 2000, 1); //"Que?"
          Audio.PlayMissionAudio(1);
          Audio.LoadMissionAudio(2, "COL2_4" as any); //"Look, Cortez sent me. Just give me the damned chips."
          $.mall_shootout_counter = 6;
        }
      }
    }


    if ($.mall_shootout_counter == 4) {
      if (Audio.HasMissionAudioLoaded(2)) {
        if (Audio.HasMissionAudioFinished(1)) {
          Camera.SetFixedPosition(3.8965, -930.5530, 16.1132, 0.0, 0.0, 0.0); //PULL BACK SHOT FROM THE SIDE
          Camera.PointAtPoint(3.8828, -931.5497, 16.1934, 2 /* JUMP_CUT */);
          the_seller.turnToFacePlayer($.player1);

          //player1:
          Text.PrintNow("COL2_2", 5000, 1); //"What?"
          Audio.PlayMissionAudio(2);
          Audio.LoadMissionAudio(1, "COL2_3" as any); //"ah...common?"
          french_security1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL01, 4.6792, -951.7053, 20.7330);
          french_security2 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL01, 2.1545, -954.6406, 20.7330);
          french_security1.setUsePednodeSeek(false /* FALSE */);
          french_security1.setObjGotoCoordOnFoot(4.2931, -947.4683);
          french_security1.setUsePednodeSeek(false /* FALSE */);
          french_security2.setUsePednodeSeek(false /* FALSE */);
          french_security2.setObjGotoCoordOnFoot(2.4581, -947.4636);
          french_security2.setUsePednodeSeek(false /* FALSE */);
          $.mall_shootout_timer = $.game_timer + 1000;
          $.mall_shootout_counter = 5;
        }
      }
    }


    if ($.mall_shootout_counter == 3) {
      if ($.game_timer > $.mall_shootout_timer) {
        $.the_seller_heading = the_seller.getHeading();
        $.the_seller_heading -= 12.0;
        if ($.the_seller_heading < 115.6022) {
          $.the_seller_heading = 115.6022;
          if (Audio.HasMissionAudioLoaded(1)) {
            $.mall_shootout_timer = $.game_timer + 1500;
            $.mall_shootout_counter = 4;

            //Courier (silly French accent):
            Text.PrintNow("COL2_1", 5000, 1); //"Ze rain, she is tres wet zis time of year."
            Audio.PlayMissionAudio(1);
          }
        }
        the_seller.setHeading($.the_seller_heading);
        the_seller.stopLooking();
        the_seller.lookAtPlayerAlways($.player1);
      }
    }


    if ($.mall_shootout_counter == 2) {
      if ($.game_timer > $.mall_shootout_timer) {
        the_seller.setWaitState(3 /* WAITSTATE_CROSS_ROAD_LOOK */, 900);
        $.mall_shootout_timer = $.game_timer + 1000;
        $.mall_shootout_counter = 3;
      }
    }


    if ($.mall_shootout_counter == 1) {
      $.mall_shootout_timer = $.game_timer + 500;
      $.mall_shootout_counter = 2;
    }


    if ($.mall_shootout_counter == 0) {
      if ($.player1.locateOnFootChar3D(the_seller, 3.0, 3.0, 2.0, false)) {
        $.the_seller_blip.remove();
        $.player1.setControl(false /* OFF */);
        Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
        Hud.SwitchWidescreen(true /* ON */);
        Game.SetAllCarsCanBeDamaged(false /* FALSE */);
        the_seller.setObjNoObj();
        World.ClearArea(4.1929, -938.9565, 15.0760, 5.0, true);
        $.player1.setCoordinates(3.0914, -938.5570, 15.0760); //TOP OF ESCALATOR
        $.player1.turnToFaceChar(the_seller);
        Camera.SetFixedPosition(8.1222, -935.5150, 17.0304, 0.0, 0.0, 0.0); //OVER SELLERS SHOULDER
        Camera.PointAtPoint(7.3126, -936.0714, 16.8437, 2 /* JUMP_CUT */);
        the_seller.setCoordinates(6.1112, -937.0656, 15.0760);
        the_seller.setHeading(262.8159);
        Path.SwitchPedRoadsOff(0.7780, -944.7307, 14.4913, 7.0235, -931.7332, 23.0981);
        World.ClearArea(3.6782, -939.0247, 16.0038, 6.0, false /* FALSE */);
        //CLEAR_TAXI_SHORTCUT
        $.weapon_shop1_blip.remove();
        $.weapon_shop1_blip = Blip.AddShortRangeSpriteForCoord($.ammu1X, $.ammu1Y, $.ammu1Z, 16 /* RADAR_SPRITE_GUN */);
        $.mall_shootout_counter = 1;
      }
    }
    /////////
    /////////


    if ($.mall_shootout_counter > 10) {
      if (!(Char.IsDead(the_seller))) {
        const _res197 = the_seller.getCoordinates();
$.the_seller_x = _res197.x;
$.the_seller_y = _res197.y;
$.the_seller_z = _res197.z;
        if ($.the_seller_counter == 0) {
          the_seller.setUsePednodeSeek(false /* FALSE */);
          the_seller.setObjSprintToCoord(1.8336, -938.0876);
          the_seller.setUsePednodeSeek(false /* FALSE */);
          the_seller.setOnlyDamagedByPlayer(false /* FALSE */);
          $.the_seller_counter = 1;
        }
        if ($.the_seller_counter == 1) {
          if (the_seller.locateOnFoot2D(1.8336, -938.0876, 1.0, 1.0, false)) {
            the_seller.setObjSprintToCoord(-11.6307, -938.0319);
            the_seller.setUsePednodeSeek(false /* FALSE */);
            $.the_seller_counter = 2;
          }
        }
        if ($.the_seller_counter == 2) {
          if (the_seller.locateOnFoot2D(-11.6307, -938.0319, 1.0, 1.0, false)) {
            the_seller.setObjSprintToCoord(-11.4825, -935.4515);
            the_seller.setUsePednodeSeek(false /* FALSE */);
            $.the_seller_counter = 3;
          }
        }
        if ($.the_seller_counter == 3) {
          if (the_seller.locateOnFoot2D(-11.4825, -935.4515, 1.0, 1.0, false)) {
            the_seller.setObjSprintToCoord(1.7873, -928.6034); //
            the_seller.setUsePednodeSeek(false /* FALSE */);
            $.the_seller_counter = 4;
          }
        }
        if ($.the_seller_counter == 4) {
          if (the_seller.locateOnFoot2D(1.7873, -928.6034, 1.0, 1.0, false)) {
            the_seller.setObjSprintToCoord(5.9929, -904.0090);
            the_seller.setUsePednodeSeek(false /* FALSE */);
            $.the_seller_counter = 5;
          }
        }
        if ($.the_seller_counter == 5) {
          if (the_seller.locateOnFoot2D(5.9929, -904.0090, 1.0, 1.0, false)) {
            the_seller.setObjSprintToCoord(40.2117, -897.6254);
            the_seller.setUsePednodeSeek(false /* FALSE */);
            $.the_seller_counter = 6;
          }
        }
        if ($.the_seller_counter == 6) {
          if (the_seller.locateOnFoot2D(40.2117, -897.6254, 1.0, 1.0, false)) {
            if (!(Car.IsDead(the_sellers_car))) {
              the_seller.setRunning(true /* TRUE */);
              the_seller.setUsePednodeSeek(true /* TRUE */);
              the_seller.setObjEnterCarAsDriver(the_sellers_car);
              $.the_seller_counter = 7;
            }
          }
        }
        if ($.mall_shootout_counter > 13) {
          if ($.the_seller_counter == 7) {
            if (!(Car.IsDead(the_sellers_car))) {
              if (the_seller.isInCar(the_sellers_car)) {
                the_sellers_car.gotoCoordinates(267.4104, 1287.8461, 16.1968);
                the_sellers_car.setCruiseSpeed(25.0);
                the_sellers_car.setDrivingStyle(2);
                if ($.audio_2_flag == 0) {
                  $.audio_2_flag = 1;
                  $.audio_2_timeout = $.game_timer + 6000;
                }
                $.the_seller_counter = 8;
              }
            }
            else {
              if (!(the_seller.isCurrentWeapon(23 /* WEAPONTYPE_UZI */))) {
                the_seller.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
                the_seller.setObjNoObj();
              }
              if ($.audio_4_flag == 0) {
                $.audio_4_flag = 1;
                $.audio_4_timeout = $.game_timer + 6000;
              }
              the_seller.setObjKillPlayerOnFoot($.player1);
            }
          }
        }
        if ($.the_seller_counter > 7) {
          if (!(Car.IsDead(the_sellers_car))) {
            if (the_seller.isInCar(the_sellers_car)) {
              const _res198 = $.player1.getCoordinates();
$.player_x = _res198.x;
$.player_y = _res198.y;
$.z = _res198.z;
              const _res199 = the_seller.getCoordinates();
$.x = _res199.x;
$.y = _res199.y;
$.z = _res199.z;
              $.x_temp = $.player_x - $.x;
              $.y_temp = $.player_y - $.y;
              $.x_temp = $.x_temp * $.x_temp;
              $.y_temp = $.y_temp * $.y_temp;
              $.sum_x_y_temp = $.x_temp + $.y_temp;
              $.sum_x_y_temp = Math.Sqrt($.sum_x_y_temp);
              $.criminal1_car_speed = 800.0 / $.sum_x_y_temp;
              if ($.criminal1_car_speed > 38.0) {
                $.criminal1_car_speed = 38.0;
              }
              if ($.criminal1_car_speed < 10.0) {
                $.criminal1_car_speed = 10.0;
              }
              the_sellers_car.setCruiseSpeed($.criminal1_car_speed);
            }
          }
        }
        if ($.the_seller_counter == 8) {
          if (!(the_seller.isInAnyCar())) {
            if (!(Car.IsDead(the_sellers_car))) {
              if ($.audio_3_flag == 0) {
                $.audio_3_flag = 1;
                $.audio_3_timeout = $.game_timer + 6000;
              }
              the_seller.setObjEnterCarAsDriver(the_sellers_car);
              $.the_seller_counter = 9;
            }
            else {
              the_seller.setObjFleePlayerOnFootAlways($.player1);
              if ($.audio_5_flag == 0) {
                $.audio_5_flag = 1;
                $.audio_5_timeout = $.game_timer + 6000;
              }
            }
          }
          else {
            if (!(Car.IsDead(the_sellers_car))) {
              if ($.destination_counter == 0) {
                if (the_sellers_car.locate2D(267.4104, 1287.8461, 15.0, 15.0, false)) {
                  the_sellers_car.setTempAction(6 /* TEMPACT_TURNLEFT */, 200);
                  $.destination_timer = $.game_timer + 199;
                  $.destination_counter = 1;
                }
              }
              if ($.destination_counter == 1) {
                if ($.game_timer > $.destination_timer) {
                  the_sellers_car.setTempAction(3 /* TEMPACT_HANDBRAKETURNLEFT */, 5000);
                  $.destination_counter = 2;
                }
              }
              if ($.destination_counter == 2) {
                if (the_sellers_car.isStopped()) {
                  the_sellers_car.setTempAction(1 /* TEMPACT_WAIT */, 5000);
                  the_seller.setObjSprintToCoord(266.1230, 1297.0134);
                  the_seller.setUsePednodeSeek(false /* FALSE */);
                  $.the_seller_counter = 10;
                  $.destination_counter = 3;
                }
              }
            }
          }
        }
        if ($.the_seller_counter == 9) {
          if (!(Car.IsDead(the_sellers_car))) {
            if (the_seller.isInCar(the_sellers_car)) {
              the_sellers_car.setCruiseSpeed(25.0);
              the_sellers_car.setDrivingStyle(2);
              the_sellers_car.gotoCoordinates(267.4104, 1287.8461, 16.1968);
              $.the_seller_counter = 8;
            }
          }
          else {
            if (!(the_seller.isCurrentWeapon(23 /* WEAPONTYPE_UZI */))) {
              the_seller.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
              the_seller.setObjNoObj();
            }
            if ($.audio_4_flag == 0) {
              $.audio_4_flag = 1;
              $.audio_4_timeout = $.game_timer + 6000;
            }
            the_seller.setObjKillPlayerOnFoot($.player1);
          }
        }
        if ($.the_seller_counter == 10) {
          if ($.destination_counter < 4) {
            if (the_seller.locateOnFoot2D(266.1230, 1297.0134, 1.0, 1.0, false)) {
              the_seller.setObjSprintToCoord(264.7184, 1307.3624);
              the_seller.setUsePednodeSeek(false /* FALSE */);
              $.destination_counter = 4;
            }
          }
          if ($.destination_counter == 4) {
            if (the_seller.locateOnFoot2D(264.7184, 1307.3624, 1.0, 1.0, false)) {
              the_seller.delete();
              Text.PrintNow("COL2_F4", 5000, 1); //~r~The courier has escaped! You failed to get the chips.
              // SCM GOTO → mission_general2_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_general2_failed"); // fallback: would break linear control flow
            }
          }
        }
        if ($.audio_1_flag == 2) {
          if (Audio.HasMissionAudioFinished(1)) {
            //CLEAR_THIS_PRINT COL2_7
            $.audio_1_flag = 3;
            $.is_audio_in_use = 0;
            // SCM GOTO → mall_shootout_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO mall_shootout_loop"); // fallback: would break linear control flow
          }
        }
        if ($.audio_1_flag == 1) {
          if (Audio.HasMissionAudioLoaded(1)) {
            Audio.PlayMissionAudio(1);
            //IF print_timer < game_timer
            //PRINT_NOW COL2_7 10000 1//Shoot 'im!
            //ENDIF
            $.audio_1_flag = 2;
          }
        }
        if ($.audio_1_flag == 0) {
          if ($.is_audio_in_use == 0) {
            Audio.LoadMissionAudio(1, "COL2_7" as any);
            $.audio_1_flag = 1;
            $.is_audio_in_use = 1;
          }
        }

        //First gets on bike:
        //[COL2_10]
        //Au revoir, you cretin!
        if ($.audio_2_flag > 0) {
          if ($.audio_2_flag == 3) {
            if (Audio.HasMissionAudioFinished(1)) {
              //CLEAR_THIS_PRINT COL2_10
              $.audio_2_flag = 0;
              $.is_audio_in_use = 0;
              // SCM GOTO → mall_shootout_loop (not lowered; manual jump required)
              throw new Error("unresolved GOTO mall_shootout_loop"); // fallback: would break linear control flow
            }
          }
          if ($.audio_2_flag == 2) {
            if (Audio.HasMissionAudioLoaded(1)) {
              const _res200 = the_seller.getCoordinates();
$.x = _res200.x;
$.y = _res200.y;
$.z = _res200.z;
              Audio.SetMissionAudioPosition(1, $.x, $.y, $.z);
              Audio.PlayMissionAudio(1);
              //IF print_timer < game_timer
              //PRINT_NOW COL2_10 10000 1//Au revoir, you cretin!
              //ENDIF
              $.audio_2_flag = 3;
            }
          }
          if ($.audio_2_flag == 1) {
            if ($.is_audio_in_use == 0) {
              Audio.LoadMissionAudio(1, "COL2_10" as any);
              $.audio_2_flag = 2;
              $.is_audio_in_use = 1;
              //					ELSE
              //						IF game_timer >	audio_2_timeout
              //							audio_2_flag = 0
              //						ENDIF

            }
          }
        }

        //GETS KNOCKED/FALLS OFF BIKE:
        //[COL2_11]
        //Merd! My bike, kaput!
        if ($.audio_3_flag > 0) {
          if ($.audio_3_flag == 3) {
            if (Audio.HasMissionAudioFinished(1)) {
              //CLEAR_THIS_PRINT COL2_11
              $.audio_3_flag = 0;
              $.is_audio_in_use = 0;
              // SCM GOTO → mall_shootout_loop (not lowered; manual jump required)
              throw new Error("unresolved GOTO mall_shootout_loop"); // fallback: would break linear control flow
            }
          }
          if ($.audio_3_flag == 2) {
            if (Audio.HasMissionAudioLoaded(1)) {
              const _res201 = the_seller.getCoordinates();
$.x = _res201.x;
$.y = _res201.y;
$.z = _res201.z;
              Audio.SetMissionAudioPosition(1, $.x, $.y, $.z);
              Audio.PlayMissionAudio(1);
              //IF print_timer < game_timer
              //PRINT_NOW COL2_11 10000 1 //Merd! My bike, kaput!
              //ENDIF
              $.audio_3_flag = 3;
            }
          }
          if ($.audio_3_flag == 1) {
            if ($.is_audio_in_use == 0) {
              Audio.LoadMissionAudio(1, "COL2_11" as any);
              $.audio_3_flag = 2;
              $.is_audio_in_use = 1;
              //					ELSE
              //						IF game_timer >	audio_3_timeout
              //							audio_3_flag = 0
              //						ENDIF

            }
          }
        }

        //ATTACKS PLAYER:
        //[COL2_12]
        //You cannot have the guidance chips, monkey bottom boy!
        if ($.audio_4_flag > 0) {
          if ($.audio_4_flag == 3) {
            if (Audio.HasMissionAudioFinished(1)) {
              //CLEAR_THIS_PRINT COL2_12
              $.audio_4_flag = 4;
              $.is_audio_in_use = 0;
              // SCM GOTO → mall_shootout_loop (not lowered; manual jump required)
              throw new Error("unresolved GOTO mall_shootout_loop"); // fallback: would break linear control flow
            }
          }
          if ($.audio_4_flag == 2) {
            if (Audio.HasMissionAudioLoaded(1)) {
              const _res202 = the_seller.getCoordinates();
$.x = _res202.x;
$.y = _res202.y;
$.z = _res202.z;
              Audio.SetMissionAudioPosition(1, $.x, $.y, $.z);
              Audio.PlayMissionAudio(1);
              //IF print_timer < game_timer
              //PRINT_NOW COL2_12 10000 1 //You cannot have the guidance chips, monkey bottom boy!
              //ENDIF
              $.audio_4_flag = 3;
            }
          }
          if ($.audio_4_flag == 1) {
            if ($.is_audio_in_use == 0) {
              Audio.LoadMissionAudio(1, "COL2_12" as any);
              $.audio_4_flag = 2;
              $.is_audio_in_use = 1;
              //					ELSE
              //						IF game_timer >	audio_4_timeout
              //							audio_4_flag = 0
              //						ENDIF

            }
          }
        }

        //RUNS AWAY ON FOOT:
        //[COL2_13]
        //I make like the antelope!
        if ($.audio_5_flag > 0) {
          if ($.audio_5_flag == 3) {
            if (Audio.HasMissionAudioFinished(1)) {
              //CLEAR_THIS_PRINT COL2_13
              $.audio_5_flag = 4;
              $.is_audio_in_use = 0;
              // SCM GOTO → mall_shootout_loop (not lowered; manual jump required)
              throw new Error("unresolved GOTO mall_shootout_loop"); // fallback: would break linear control flow
            }
          }
          if ($.audio_5_flag == 2) {
            if (Audio.HasMissionAudioLoaded(1)) {
              const _res203 = the_seller.getCoordinates();
$.x = _res203.x;
$.y = _res203.y;
$.z = _res203.z;
              Audio.SetMissionAudioPosition(1, $.x, $.y, $.z);
              Audio.PlayMissionAudio(1);
              //IF print_timer < game_timer
              //PRINT_NOW COL2_13 10000 1 //I make like the antelope!
              //ENDIF
              $.audio_5_flag = 3;
            }
          }
          if ($.audio_5_flag == 1) {
            if ($.is_audio_in_use == 0) {
              Audio.LoadMissionAudio(1, "COL2_13" as any);
              $.audio_5_flag = 2;
              $.is_audio_in_use = 1;
              //					ELSE
              //						IF game_timer >	audio_5_timeout
              //							audio_5_flag = 0
              //						ENDIF

            }
          }
        }

        //PLAYER GETS CLOSE WHILE HE'S SPEEDING AWAY ON HIS BIKE:
        //[COL2_14]
        //You got to do better, Mr. Snail!
        if ($.player1.locateAnyMeansChar2D(the_seller, 15.0, 15.0, false)) {
          if ($.player_close_to_seller == 0) {
            $.player_close_to_seller = 1;
          }
        }
        else {
          $.player_close_to_seller = 0;
        }
        if ($.mall_shootout_counter > 12) {
          if ($.audio_6_flag == 2) {
            if (Audio.HasMissionAudioFinished(1)) {
              //CLEAR_THIS_PRINT COL2_14
              $.audio_6_flag = 3;
              $.is_audio_in_use = 0;
              // SCM GOTO → mall_shootout_loop (not lowered; manual jump required)
              throw new Error("unresolved GOTO mall_shootout_loop"); // fallback: would break linear control flow
            }
          }
          if ($.audio_6_flag == 1) {
            if (Audio.HasMissionAudioLoaded(1)) {
              //						GET_CHAR_COORDINATES the_seller x y z
              //						SET_MISSION_AUDIO_POSITION 1 x y z
              Audio.PlayMissionAudio(1);
              //IF print_timer < game_timer
              //PRINT_NOW COL2_14 10000 1 //You got to do better, Mr. Snail!
              //ENDIF
              $.audio_6_flag = 2;
            }
          }
          if ($.player_close_to_seller == 1) {
            if ($.audio_6_flag == 0) {
              if ($.is_audio_in_use == 0) {
                Audio.LoadMissionAudio(1, "COL2_14" as any);
                $.audio_6_flag = 1;
                $.is_audio_in_use = 1;
                $.player_close_to_seller = 2;
                // SCM GOTO → mall_shootout_loop (not lowered; manual jump required)
                throw new Error("unresolved GOTO mall_shootout_loop"); // fallback: would break linear control flow
              }
            }
          }

          //[COL2_15]
          //Ha! You eat my dirt!
          if ($.audio_7_flag == 2) {
            if (Audio.HasMissionAudioFinished(1)) {
              //CLEAR_THIS_PRINT COL2_15
              $.audio_7_flag = 3;
              $.is_audio_in_use = 0;
              // SCM GOTO → mall_shootout_loop (not lowered; manual jump required)
              throw new Error("unresolved GOTO mall_shootout_loop"); // fallback: would break linear control flow
            }
          }
          if ($.audio_7_flag == 1) {
            if (Audio.HasMissionAudioLoaded(1)) {
              //						GET_CHAR_COORDINATES the_seller x y z
              //						SET_MISSION_AUDIO_POSITION 1 x y z
              Audio.PlayMissionAudio(1);
              //IF print_timer < game_timer
              //PRINT_NOW COL2_15 10000 1 //Ha! You eat my dirt!
              //ENDIF
              $.audio_7_flag = 2;
            }
          }
          if ($.player_close_to_seller == 1) {
            if ($.audio_7_flag == 0) {
              if ($.is_audio_in_use == 0) {
                Audio.LoadMissionAudio(1, "COL2_15" as any);
                $.audio_7_flag = 1;
                $.is_audio_in_use = 1;
                $.player_close_to_seller = 2;
                // SCM GOTO → mall_shootout_loop (not lowered; manual jump required)
                throw new Error("unresolved GOTO mall_shootout_loop"); // fallback: would break linear control flow
              }
            }
          }

          //[COL2_16]
          //Slow, fat, American poop-head!
          if ($.audio_8_flag == 2) {
            if (Audio.HasMissionAudioFinished(1)) {
              //CLEAR_THIS_PRINT COL2_16
              $.audio_8_flag = 3;
              $.is_audio_in_use = 0;
              // SCM GOTO → mall_shootout_loop (not lowered; manual jump required)
              throw new Error("unresolved GOTO mall_shootout_loop"); // fallback: would break linear control flow
            }
          }
          if ($.audio_8_flag == 1) {
            if (Audio.HasMissionAudioLoaded(1)) {
              //						GET_CHAR_COORDINATES the_seller x y z
              //						SET_MISSION_AUDIO_POSITION 1 x y z
              Audio.PlayMissionAudio(1);
              //IF print_timer < game_timer
              //PRINT_NOW COL2_16 10000 1 //You got to do better, Mr. Snail!
              //ENDIF
              $.audio_8_flag = 2;
            }
          }
          if ($.player_close_to_seller == 1) {
            if ($.audio_8_flag == 0) {
              if ($.is_audio_in_use == 0) {
                Audio.LoadMissionAudio(1, "COL2_16" as any);
                $.audio_8_flag = 1;
                $.is_audio_in_use = 1;
                $.player_close_to_seller = 2;
                // SCM GOTO → mall_shootout_loop (not lowered; manual jump required)
                throw new Error("unresolved GOTO mall_shootout_loop"); // fallback: would break linear control flow
              }
            }
          }
        }
      }
      else {
        if ($.chips_pickup_flag == 0) {
          Audio.ClearMissionAudio(1);
          Audio.ClearMissionAudio(2);
          if (!(the_seller.isInWater())) {
            Text.PrintNow("COL2_F2", 5000, 1); //"The courier is dead. Grab the guidance chips."
            $.the_seller_blip.remove();
            if (Char.DoesExist(the_seller)) {
              const _res204 = World.GetDeadCharPickupCoords(the_seller);
$.x = _res204.x;
$.y = _res204.y;
$.z = _res204.z;
              the_chips = Pickup.Create(briefcase, 3 /* PICKUP_ONCE */, $.x, $.y, $.z);
            }
            else {
              the_chips = Pickup.Create(briefcase, 3 /* PICKUP_ONCE */, $.the_seller_x, $.the_seller_y, $.the_seller_z);
            }
            $.the_seller_blip.remove();
            $.the_seller_blip = Blip.AddForPickup(the_chips);
            $.chips_pickup_flag = 1;
          }
          else {
            Text.PrintNow("COL2_F3", 5000, 1); //~r~The guidance chips are at the bottom of the sea.
            // SCM GOTO → mission_general2_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_general2_failed"); // fallback: would break linear control flow
          }
        }
        if ($.chips_pickup_flag == 1) {
          if (the_chips.hasBeenCollected()) {
            $.chips_pickup_flag = 2;
            $.the_seller_blip.remove();
            $.the_seller_blip = Blip.AddForCoord(-245.0020, -1360.8174, 7.0786);
            Text.PrintNow("COL2_B3", 5000, 1); //"~g~Take the guidance chips back to the Colonel"
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
          }
        }
        if ($.chips_pickup_flag == 2) {
          if ($.player1.locateOnFoot3D(-245.0020, -1360.8174, 7.0786, 2.0, 2.0, 3.0, true)) {
            $.player1.setControl(false /* OFF */);
            Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
            Game.SetAllCarsCanBeDamaged(false /* FALSE */);
            await asyncWait(0);
            await asyncWait(0);
            Camera.SetFixedPosition(-245.1924, -1364.1660, 8.6417, 0.0, 0.0, 0.0);
            Camera.PointAtPoint(-246.0084, -1363.5885, 8.6193, 2 /* JUMP_CUT */);
            $.player1.setCoordinates(-245.0020, -1360.8174, 7.0786);
            Hud.SwitchWidescreen(true /* ON */);
            $.scplayer.setObjRunToCoord(-258.4183, -1360.6534);
            await asyncWait(1000);
            Camera.SetFadingColor(0, 0, 1);
            Camera.DoFade(1000, 0 /* FADE_OUT */);
            while (Camera.GetFadingStatus()) {
              await asyncWait(0);
            }
            $.scplayer.setObjNoObj();
            World.ClearArea(-244.2799, -1360.6704, 7.0786, 1.0, true /* TRUE */);
            $.player1.setCoordinates(-244.2799, -1360.6704, 7.0786);
            $.player1.setHeading(279.1362);
            Camera.SetBehindPlayer();
            Camera.RestoreJumpcut();
            Hud.SwitchWidescreen(false /* OFF */);
            Camera.SetFadingColor(0, 0, 1);
            Camera.DoFade(1000, 1 /* FADE_IN */);
            while (Camera.GetFadingStatus()) {
              await asyncWait(0);
            }
            // SCM GOTO → mission_general2_passed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_general2_passed"); // fallback: would break linear control flow
          }
        }
      }
    }


  }
}





// Mission general2 failed


async function onFailed() {


  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed"
}




// mission general2 passed


async function mission_general2_passed() {


  $.flag_general_mission2_passed = 1;
  Text.PrintWithNumberBig("M_PASS", 500, 5000, 1); //"Mission Passed!"
  $.player1.clearWantedLevel();
  $.player1.addScore(500);
  Stat.RegisterMissionPassed("COL_2");
  Audio.PlayMissionPassedTune(1);
  Stat.PlayerMadeProgress(1);
  $.shotgun_in_stock = 1;
  // START_NEW_SCRIPT general_mission3_loop 
}




// mission cleanup


async function cleanup() {


  ONMISSION = 0;


  if ($.chips_pickup_flag == 1) {
    the_chips.remove();
  }


  the_seller.removeElegantly();
  french_security1.removeElegantly();
  french_security2.removeElegantly();
  french_security3.removeElegantly();
  french_security4.removeElegantly();
  french_security5.removeElegantly();
  french_security6.removeElegantly();
  french_security7.removeElegantly();
  french_security8.removeElegantly();
  french_security9.removeElegantly();


  $.weapon_shop1_blip.remove();
  $.weapon_shop1_blip = Blip.AddShortRangeSpriteForCoord($.ammu1X, $.ammu1Y, $.ammu1Z, 16 /* RADAR_SPRITE_GUN */);
  $.the_seller_blip.remove();


  Path.SwitchPedRoadsOn(0.7780, -944.7307, 14.4913, 7.0235, -931.7332, 23.0981);


  Streaming.MarkModelAsNoLongerNeeded(PCJ600);
  Streaming.MarkModelAsNoLongerNeeded(COLT45);
  Streaming.MarkModelAsNoLongerNeeded(UZI);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);

  //CLEAR_TAXI_SHORTCUT


  $.timer_mobile_start = Clock.GetGameTimer();


  Mission.Finish();
}

export async function general2() {
  // Mission start stuff


  await body();  // SCM GOSUB mission_start_general2


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await onFailed();  // SCM GOSUB mission_general2_failed
  }


  await cleanup();  // SCM GOSUB mission_cleanup_general2



  // Variables for mission

  //CARS PEDS OBJECTS

  // VAR_INT cs_dude1 cs_dude2
  //BLIPS

  // VAR_INT the_seller_blip

  //FLAG COUNTER TIMERS

  // VAR_INT chips_pickup_flag timer destination_counter destination_timer done_wanted_level
  // VAR_INT mall_shootout_counter mall_shootout_timer the_seller_counter done_blip_help player_close_to_seller
  // VAR_INT ammunation_help_timer ammunation_help_flag

  //COORD MATHS

  // VAR_FLOAT the_seller_heading the_seller_x the_seller_y the_seller_z

  //LOAD_AND_LAUNCH_EXCLUSIVE stuff
  //VAR_INT game_timer is_audio_in_use
  //VAR_INT audio_1_flag audio_2_flag audio_3_flag audio_4_flag audio_5_flag audio_6_flag audio_7_flag audio_8_flag
  //VAR_INT audio_1_timeout audio_2_timeout audio_3_timeout audio_4_timeout audio_5_timeout audio_6_timeout audio_7_timeout audio_8_timeout
  //VAR_FLOAT x_temp y_temp	sum_x_y_temp criminal1_car_speed
  // ****************************************Mission Start************************************


}
