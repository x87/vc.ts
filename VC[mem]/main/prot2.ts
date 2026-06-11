// Generated from main/prot2.sc

import { $ } from "../utils/vars.mts";

async function mission_start_protec2() {
  Text.ClearThisPrint("M_FAIL");
  ONMISSION = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  Text.LoadMissionText("PROT2");
  Shortcut.SetDropoffPointForMission(-288.2, -487.5, 9.8, 275.0);
  // *****************************************Set Flags/variables************************************

  $.security_coming_to_get_you = 0;
  $.flag_leader_on_bike = 0;
  $.guard2_out_of_news_bar = 0;
  $.button_pressed = 0;
  $.prot2_speech = 0;
  $.controlling_bike1 = 0;
  $.controlling_bike2 = 0;
  $.dbp_time = 301000;
  $.controlling3 = 0;
  $.controlling4 = 0;
  $.controlling5 = 0;
  $.bonus_flags = 0;
  $.off_bike1 = 0;
  $.off_bike2 = 0;
  // ****************************************START OF CUTSCENE********************************

  Streaming.SetAreaVisible(2 /* VIS_MANSION */);
  $.health_pickup.remove();
  $.flag_player_in_mansion = 1;


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSbuddy");
  Streaming.LoadSpecialCharacter(3, "dgoona");
  Streaming.LoadSpecialCharacter(4, "dgoonc");
  Streaming.LoadSpecialCharacter(5, "CSavery");


  Streaming.LoadSpecialModel(CUTOBJ01, "dcfan");
  Streaming.LoadSpecialModel(CUTOBJ02, "drink");


  Streaming.LoadScene(-378.62, -552.676, 18.534);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasSpecialCharacterLoaded(4)) || !(Streaming.HasSpecialCharacterLoaded(5))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(CUTOBJ01)) || !(Streaming.HasModelLoaded(CUTOBJ02))) {
    await asyncWait(0);
  }


  Cutscene.Load("bud_2");
  World.ClearArea(-378.6, -552.6, 25.5, 15.0, true /* TRUE */);
  World.ClearArea(-379.0, -564.6, 19.8, 15.0, true /* TRUE */);
  World.SetPedDensityMultiplier(0.0);
  Cutscene.SetOffset(-378.62, -552.676, 18.534);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_buddy = CutsceneObject.Create(SPECIAL02);
  $.cs_buddy.setAnim("CSbuddy");


  $.cs_dgoona = CutsceneObject.Create(SPECIAL03);
  $.cs_dgoona.setAnim("dgoona");


  $.cs_dgoonc = CutsceneObject.Create(SPECIAL04);
  $.cs_dgoonc.setAnim("dgoonc");


  $.cs_avery = CutsceneObject.Create(SPECIAL05);
  $.cs_avery.setAnim("CSavery");


  $.cs_dcfan = CutsceneObject.Create(CUTOBJ01);
  Cutscene.SetAnimToLoop("dcfan");
  $.cs_dcfan.setAnim("dcfan");


  $.cs_drink01 = CutsceneObject.Create(CUTOBJ02);
  $.cs_drink01.setAnim("drink01");


  $.cs_drink02 = CutsceneObject.Create(CUTOBJ02);
  $.cs_drink02.setAnim("drink02");


  $.cs_drink03 = CutsceneObject.Create(CUTOBJ02);
  $.cs_drink03.setAnim("drink03");


  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();





  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 5914) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO2_A", 10000, 1); // What's the problem?


  while ($.cs_time < 7399) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO2_B", 10000, 1); // Some bar is refusing to pay.


  while ($.cs_time < 9756) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO2_C", 10000, 1); // They reckon they're protected by a local gang of thugs.


  while ($.cs_time < 12705) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO2_D", 10000, 1); //But don't worry Tommy, I can handle it.


  while ($.cs_time < 16592) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO2_E", 10000, 1); //You call this handling it?


  while ($.cs_time < 19312) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO2_F", 10000, 1); // You two, off your asses...


  while ($.cs_time < 21275) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO2_G", 10000, 1); // Let's Go.


  while ($.cs_time < 22275) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  while ($.cs_time < 22784) {
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
  //UNLOAD_SPECIAL_CHARACTER 3
  //UNLOAD_SPECIAL_CHARACTER 4

  Streaming.UnloadSpecialCharacter(5);


  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ02);



  $.health_pickup = Pickup.Create(health, 2 /* PICKUP_ON_STREET */, -406.2503, -566.4947, 19.5804); //in mansion (for chris' finale)
  World.SetPedDensityMultiplier(1.0);
  World.SetCarDensityMultiplier(1.0);
  Streaming.SetAreaVisible(0 /* VIS_MAIN_MAP */);
  $.flag_player_in_mansion = 0;

  // ******************************************END OF CUTSCENE********************************

  Camera.SetFadingColor(0, 0, 0);
  await asyncWait(500);
  $.player1.setCoordinates(-375.9, -544.6, 16.2);
  Streaming.LoadScene(-375.9, -510.6, 16.2);
  $.player1.setHeading(360.0);
  Camera.SetBehindPlayer();
  //------------------REQUEST_MODELS ------------------------------



  $.player1.setMood(1 /* PLAYER_MOOD_PISSED_OFF */, 60000);


  Streaming.RequestModel(uzi);
  Streaming.RequestModel(brassknuckle);
  Streaming.RequestModel(m4);
  Streaming.RequestModel(pcj600);
  Streaming.RequestModel(oceanic);
  Streaming.RequestModel(sentinel);


  while (!(Streaming.HasModelLoaded(uzi)) || !(Streaming.HasModelLoaded(brassknuckle)) || !(Streaming.HasModelLoaded(m4)) || !(Streaming.HasModelLoaded(pcj600)) || !(Streaming.HasModelLoaded(oceanic)) || !(Streaming.HasModelLoaded(sentinel))) {
    await asyncWait(0);
  }


  Streaming.RequestModel(GDa);
  Streaming.RequestModel(GDb);
  Streaming.RequestModel(HMOST);
  Streaming.RequestModel(securica);


  while (!(Streaming.HasModelLoaded(GDa)) || !(Streaming.HasModelLoaded(GDb)) || !(Streaming.HasModelLoaded(HMOST)) || !(Streaming.HasModelLoaded(securica))) {
    await asyncWait(0);
  }


  if (ONMISSION == 0) {
    $.news_cafe_blip = Blip.AddForCoord(240.9, -1241.8, 10.8);
  }


  $.prot_cuban1 = Char.Create(13 /* PEDTYPE_GANG_PLAYER */, SPECIAL03, -368.8, -544.8, 16.2);
  $.prot_cuban1.setAsPlayerFriend($.player1, true /* TRUE */);
  $.prot_cuban1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000);
  $.prot_cuban1.clearThreatSearch();
  $.prot_cuban1.setOnlyDamagedByPlayer(true /* TRUE */);
  $.prot_cuban1.setCantBeDraggedOut(true /* TRUE */);
  $.prot_cuban1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.prot_cuban1.setHeedThreats(true /* TRUE */);
  $.prot_cuban1.setHeading(281.0);


  $.prot_cuban2 = Char.Create(13 /* PEDTYPE_GANG_PLAYER */, SPECIAL04, -370.9, -546.8, 16.2);
  $.prot_cuban2.setAsPlayerFriend($.player1, true /* TRUE */);
  $.prot_cuban2.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000);
  $.prot_cuban2.clearThreatSearch();
  $.prot_cuban2.setOnlyDamagedByPlayer(true /* TRUE */);
  $.prot_cuban2.setCantBeDraggedOut(true /* TRUE */);
  $.prot_cuban2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.prot_cuban2.setHeedThreats(true /* TRUE */);
  $.prot_cuban2.setHeading(281.0);


  $.prot_cuban1.followPlayer($.player1);
  $.prot_cuban2.followPlayer($.player1);
  $.prot_cuban1.setRunning(true /* TRUE */);
  $.prot_cuban2.setRunning(true /* TRUE */);


  $.free_sentinel = Car.Create(sentinel, -345.3, -524.6, 11.5);


  Camera.DoFade(1500, 1 /* FADE_IN */);

  //creating guards at the shop to kill


  Text.PrintNow("PRO2_01", 11000, 1); //Take out the thugs protecting the Front Page Bar and find out who supplied them.


  //fake guys

  $.shop_defend_guard4 = Char.CreateRandom(236.8, -1244.0, 10.9);
  $.shop_defend_guard4.setHeading(320.4);
  $.shop_defend_guard5 = Char.CreateRandom(237.5, -1243.0, 10.9);
  $.shop_defend_guard5.setHeading(140.3);


  Game.SetCharsChatting($.shop_defend_guard4, $.shop_defend_guard5, 86400000);



  //Guard 1 - doorman to NEWS BAR


  $.shop_defend_guard1 = Char.Create(11 /* PEDTYPE_GANG_SECURITY */, GDa, 243.1, -1243.4, 10.0);
  $.shop_defend_guard1.setHeading(0.9);
  $.shop_defend_guard1.giveWeapon(23 /* WEAPONTYPE_UZI */, 10000);
  $.shop_defend_guard1.clearThreatSearch();
  $.shop_defend_guard1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.shop_defend_guard1_blip = Blip.AddForChar($.shop_defend_guard1);
  $.shop_defend_guard1.setStayInSamePlace(true /* TRUE */);

  //Guard 2 - doorman to NEWS BAR


  $.shop_defend_guard2 = Char.Create(11 /* PEDTYPE_GANG_SECURITY */, GDb, 243.2, -1239.9, 10.0);
  $.shop_defend_guard2.setHeading(194.6);
  $.shop_defend_guard2.giveWeapon(23 /* WEAPONTYPE_UZI */, 10000);
  $.shop_defend_guard2.clearThreatSearch();
  $.shop_defend_guard2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.shop_defend_guard2_blip = Blip.AddForChar($.shop_defend_guard2);
  $.shop_defend_guard2.setStayInSamePlace(true /* TRUE */);


  Game.SetCharsChatting($.shop_defend_guard2, $.shop_defend_guard1, 86400000);
}



//waiting for player to antagonise protection

async function prot2_loop1() {
  // SCM GOTO → prot2_loop1 lowered to endless loop
  while (true) {


    await asyncWait(0);


    if ($.security_coming_to_get_you == 1) {
      if (!(Char.IsDead($.shop_defend_guard4))) {
        $.shop_defend_guard4.markAsNoLongerNeeded();
      }
      if (!(Char.IsDead($.shop_defend_guard5))) {
        $.shop_defend_guard4.markAsNoLongerNeeded();
      }
    }


    if ($.security_coming_to_get_you == 0) {
      if (!(Char.IsDead($.shop_defend_guard1))) {
        if ($.player1.isTargetingChar($.shop_defend_guard1)) {
          $.security_coming_to_get_you = 1;
        }
      }
      if (!(Char.IsDead($.shop_defend_guard2))) {
        if ($.player1.isTargetingChar($.shop_defend_guard2)) {
          $.security_coming_to_get_you = 1;
        }
      }
    }


    if ($.prot2_speech == 0) {
      if (!(Char.IsDead($.prot_cuban1))) {
        if ($.prot_cuban1.isInPlayersGroup($.player1)) {
          if ($.player1.isInAnyCar()) {
            if (!($.prot_cuban1.isSittingInAnyCar())) {
              if (!($.player1.isOnAnyBike())) {
                if (!($.player1.isInAnyHeli())) {
                  Audio.LoadMissionAudio(1, "BUD2_1" as any);
                  while (!(Audio.HasMissionAudioLoaded(1))) {
                    await asyncWait(0);
                  }
                  Text.PrintNow("PRO2_11", 4000, 1); //Get in the car, useless.
                  Audio.PlayMissionAudio(1);
                  while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.prot_cuban1))) {
                    await asyncWait(0);
                  }
                  Audio.ClearMissionAudio(1);
                  Text.ClearThisPrint("PRO2_11");
                  $.prot2_speech = 1;
                }
              }
            }
          }
        }
      }
    }


    if (!(Char.IsDead($.shop_defend_guard1))) {
      if (!($.shop_defend_guard1.isHealthGreater(95))) {
        if ($.security_coming_to_get_you == 0) {
          $.security_coming_to_get_you = 1;
        }
      }
      if ($.security_coming_to_get_you == 1) {
        $.shop_defend_guard1.setStayInSamePlace(false /* FALSE */);
        $.shop_defend_guard1.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.shop_defend_guard1.setThreatSearch(8192 /* THREAT_GANG_PLAYER */);
        $.shop_defend_guard1.setObjKillPlayerOnFoot($.player1);
      }
    }
    else {
      if ($.security_coming_to_get_you == 0) {
        $.security_coming_to_get_you = 1;
      }
      $.shop_defend_guard1_blip.remove();
      $.shop_defend_guard1.markAsNoLongerNeeded();
    }


    if (!(Char.IsDead($.shop_defend_guard2))) {
      if (!($.shop_defend_guard2.isHealthGreater(95))) {
        if ($.security_coming_to_get_you == 0) {
          $.security_coming_to_get_you = 1;
        }
      }
      if ($.security_coming_to_get_you == 1) {
        $.shop_defend_guard2.setStayInSamePlace(false /* FALSE */);
        if ($.guard2_out_of_news_bar == 0) {
          if (!($.shop_defend_guard2.locateAnyMeans2D(240.2, -1241.8, 1.0, 1.0, false /* FALSE */))) {
            $.shop_defend_guard2.setObjRunToCoord(240.2, -1241.8);
          }
          else {
            $.shop_defend_guard2.setObjRunToCoord(242.9, -1241.5);
            $.guard2_out_of_news_bar = 1;
          }
        }
        if ($.guard2_out_of_news_bar == 1) {
          if (!($.shop_defend_guard2.locateAnyMeans2D(242.9, -1241.5, 1.0, 1.0, false /* FALSE */))) {
            $.shop_defend_guard2.setObjRunToCoord(242.9, -1241.5);
          }
          else {
            $.shop_defend_guard2.setObjFleePlayerOnFootAlways($.player1);
            $.guard2_out_of_news_bar = 2;
          }
        }
      }
    }
    else {
      if ($.security_coming_to_get_you == 0) {
        $.security_coming_to_get_you = 1;
      }
      $.shop_defend_guard2_blip.remove();
      $.shop_defend_guard2.markAsNoLongerNeeded();
    }



    //waiting for player to kill both guards


    if (Char.IsDead($.shop_defend_guard1)) {
      if (Char.IsDead($.shop_defend_guard2)) {
        if ($.player1.locateStoppedOnFoot3D(240.9, -1241.8, 10.8, 1.0, 1.0, 2.0, true /* TRUE */)) {
          // ****************************************START OF CUTSCENE - player speaking to shop keeper********************************
          $.player1.setControl(false /* OFF */);
          Hud.SwitchWidescreen(true /* ON */);
          $.news_cafe_blip.remove();
          Text.ClearSmallPrints();
          $.shop_keep = Char.Create(4 /* PEDTYPE_CIVMALE */, HMOST, 235.6, -1236.0, 13.3);
          $.shop_keep.clearThreatSearch();
          $.shop_keep.setObjGotoCharOnFoot($.scplayer);
          $.scplayer.turnToFaceCoord(233.1, -1240.6, 11.9);
          $.shop_keep.setNeverTargeted(true /* TRUE */);
          Camera.SetFixedPosition(245.88, -1241.78, 13.24, 0.0, 0.0, 0.0);
          Camera.PointAtPoint(240.75, -1241.51, 11.93, 2 /* JUMP_CUT */);
          TIMERA = 0;

          //waiting for player1 to reach shop keeper

          // SCM label locate_player_char_loop
          await asyncWait(0);
          if (!(Char.IsDead($.shop_keep))) {
            if (!(Char.IsDead($.prot_cuban1))) {
              if ($.prot_cuban1.locateOnFootChar2D($.shop_keep, 5.0, 5.0, false /* FALSE */)) {
                $.prot_cuban1.leaveGroup();
                $.prot_cuban1.setHeedThreats(false /* FALSE */);
                $.prot_cuban1.setStayInSamePlace(true /* TRUE */);
              }
            }
            if (!(Char.IsDead($.prot_cuban2))) {
              if ($.prot_cuban2.locateOnFootChar2D($.shop_keep, 5.0, 5.0, false /* FALSE */)) {
                $.prot_cuban2.leaveGroup();
                $.prot_cuban2.setHeedThreats(false /* FALSE */);
                $.prot_cuban2.setStayInSamePlace(true /* TRUE */);
              }
            }
            if ($.scplayer.locateOnFootChar2D($.shop_keep, 2.0, 2.0, false /* FALSE */) || TIMERA > 2000) {
              await asyncWait(500);
              if (!(Char.IsDead($.shop_keep))) {
                $.shop_keep.setObjNoObj();
                $.shop_keep.turnToFacePlayer($.player1);
                $.scplayer.turnToFaceChar($.shop_keep);
              }
              $.scplayer.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000);
              Audio.LoadMissionAudio(1, "BUD2_2" as any);
              Audio.LoadMissionAudio(2, "BUD2_3" as any);
              while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
                await asyncWait(0);
              }
              Text.PrintNow("PRO2_02", 4000, 1); //PLAYER: Your protection needs a little more protection.
              Audio.PlayMissionAudio(1);
              while (!(Audio.HasMissionAudioFinished(1))) {
                await asyncWait(0);
                if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                  if ($.button_pressed == 1) {
                    $.button_pressed = 0;
                    // SCM GOTO → end_cut_prot2_1 (not lowered; manual jump required)
                    throw new Error("unresolved GOTO end_cut_prot2_1"); // fallback: would break linear control flow
                  }
                }
                else {
                  if ($.button_pressed == 0) {
                    $.button_pressed = 1;
                  }
                }
              }
              Audio.ClearMissionAudio(1);
              Text.ClearThisPrint("PRO2_02");
              $.scplayer.setWaitState(0 /* WAITSTATE_FALSE */, 100);
              if (!(Char.IsDead($.shop_keep))) {
                $.shop_keep.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 20000);
              }
              Text.PrintNow("PRO2_03", 4000, 1); //SHOPKEEP: Aw hell, not again! I don't need this crap!
              Audio.PlayMissionAudio(2);
              while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.shop_keep))) {
                await asyncWait(0);
                if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                  if ($.button_pressed == 1) {
                    $.button_pressed = 0;
                    // SCM GOTO → end_cut_prot2_1 (not lowered; manual jump required)
                    throw new Error("unresolved GOTO end_cut_prot2_1"); // fallback: would break linear control flow
                  }
                }
                else {
                  if ($.button_pressed == 0) {
                    $.button_pressed = 1;
                  }
                }
              }
              Audio.ClearMissionAudio(2);
              Text.ClearThisPrint("PRO2_03");


              Audio.LoadMissionAudio(1, "BUD2_4" as any);
              Audio.LoadMissionAudio(2, "BUD2_5" as any);
              while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
                await asyncWait(0);
              }
              Text.PrintNow("PRO2_04", 4000, 1); //SHOPKEEP: These idiots operate out of DBP Security around the block.
              Audio.PlayMissionAudio(1);
              while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.shop_keep))) {
                await asyncWait(0);
                if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                  if ($.button_pressed == 1) {
                    $.button_pressed = 0;
                    // SCM GOTO → end_cut_prot2_1 (not lowered; manual jump required)
                    throw new Error("unresolved GOTO end_cut_prot2_1"); // fallback: would break linear control flow
                  }
                }
                else {
                  if ($.button_pressed == 0) {
                    $.button_pressed = 1;
                  }
                }
              }
              Audio.ClearMissionAudio(1);
              Text.ClearThisPrint("PRO2_04");
              Text.PrintNow("PRO2_05", 4000, 1); //SHOPKEEP: You guys just sort it out amongst yourselves.
              Audio.PlayMissionAudio(2);
              while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.shop_keep))) {
                await asyncWait(0);
                if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                  if ($.button_pressed == 1) {
                    $.button_pressed = 0;
                    // SCM GOTO → end_cut_prot2_1 (not lowered; manual jump required)
                    throw new Error("unresolved GOTO end_cut_prot2_1"); // fallback: would break linear control flow
                  }
                }
                else {
                  if ($.button_pressed == 0) {
                    $.button_pressed = 1;
                  }
                }
              }
              Audio.ClearMissionAudio(2);
              Text.ClearThisPrint("PRO2_05");
              if (!(Char.IsDead($.shop_keep))) {
                $.shop_keep.setWaitState(0 /* WAITSTATE_FALSE */, 100);
              }
              $.scplayer.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000);
              Audio.LoadMissionAudio(1, "BUD2_6" as any);
              Audio.LoadMissionAudio(2, "BUD2_7" as any);
              while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
                await asyncWait(0);
              }
              Text.PrintNow("PRO2_06", 4000, 1); //PLAYER: I'll be seeing you later.
              Audio.PlayMissionAudio(1);
              while (!(Audio.HasMissionAudioFinished(1))) {
                await asyncWait(0);
                if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                  if ($.button_pressed == 1) {
                    $.button_pressed = 0;
                    // SCM GOTO → end_cut_prot2_1 (not lowered; manual jump required)
                    throw new Error("unresolved GOTO end_cut_prot2_1"); // fallback: would break linear control flow
                  }
                }
                else {
                  if ($.button_pressed == 0) {
                    $.button_pressed = 1;
                  }
                }
              }
              Audio.ClearMissionAudio(1);
              Text.ClearThisPrint("PRO2_06");
              $.scplayer.setWaitState(0 /* WAITSTATE_FALSE */, 100);
              if (!(Char.IsDead($.shop_keep))) {
                $.shop_keep.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 20000);
              }
              Text.PrintNow("PRO2_07", 4000, 1); //SHOPKEEP: Yeah, yeah, whatever.
              Audio.PlayMissionAudio(2);
              while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.shop_keep))) {
                await asyncWait(0);
                if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                  if ($.button_pressed == 1) {
                    $.button_pressed = 0;
                    // SCM GOTO → end_cut_prot2_1 (not lowered; manual jump required)
                    throw new Error("unresolved GOTO end_cut_prot2_1"); // fallback: would break linear control flow
                  }
                }
                else {
                  if ($.button_pressed == 0) {
                    $.button_pressed = 1;
                  }
                }
              }
              Audio.ClearMissionAudio(2);
              Text.ClearThisPrint("PRO2_07");
              // SCM label end_cut_prot2_1
              Text.ClearSmallPrints();
              Audio.ClearMissionAudio(1);
              Audio.ClearMissionAudio(2);
              $.scplayer.setWaitState(0 /* WAITSTATE_FALSE */, 100);
              if (!(Char.IsDead($.shop_keep))) {
                $.shop_keep.setWaitState(0 /* WAITSTATE_FALSE */, 100);
              }
              if (!(Char.IsDead($.prot_cuban1))) {
                $.prot_cuban1.setHeedThreats(true /* TRUE */);
                $.prot_cuban1.setStayInSamePlace(false /* FALSE */);
                $.prot_cuban1.followPlayer($.player1);
              }
              if (!(Char.IsDead($.prot_cuban2))) {
                $.prot_cuban2.setHeedThreats(true /* TRUE */);
                $.prot_cuban2.setStayInSamePlace(false /* FALSE */);
                $.prot_cuban2.followPlayer($.player1);
              }
              $.scplayer.setObjNoObj();
              if (!(Char.IsDead($.shop_keep))) {
                $.shop_keep.setObjNoObj();
              }
              Camera.RestoreJumpcut();
              $.player1.setControl(true /* ON */);
              Hud.SwitchWidescreen(false /* OFF */);
              Text.PrintNow("PRO2_08", 11000, 1); //DBP Security will know you are on your way, go and get them before they clear out.
              Hud.DisplayTimer($.$id.dbp_time, 1 /* TIMER_DOWN */);
              $.security_coming_to_get_you = 0;
              // SCM GOTO → prot2_loop1_finish (not lowered; manual jump required)
              throw new Error("unresolved GOTO prot2_loop1_finish"); // fallback: would break linear control flow
            }
          }
          // SCM GOTO → locate_player_char_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO locate_player_char_loop"); // fallback: would break linear control flow

          // ****************************************END OF CUTSCENE  - player speaking to shop keeper ********************************

        }
        else {
          if ($.security_coming_to_get_you == 1) {
            Text.PrintNow("PRO2_09", 11000, 1); //Go and speak to the News Cafe Owner.
            $.news_cafe_blip = Blip.AddForCoord(240.9, -1241.8, 10.8);
            $.security_coming_to_get_you = 2;
          }
        }
      }
    }


  }
}



async function prot2_loop1_finish() {

  //oceanic car


  $.fucked_oceanic = Car.Create(oceanic, 346.8, -727.1, 9.1);
  $.fucked_oceanic.setHeading(247.9);
  $.fucked_oceanic.popBoot();
  $.fake_briefcase = ScriptObject.Create(briefcase, 346.8, -727.1, 9.1);
  $.fake_briefcase1 = ScriptObject.Create(briefcase, 346.8, -727.1, 9.1);
  $.fake_briefcase2 = ScriptObject.Create(briefcase, 346.8, -727.1, 9.1);
  $.fake_briefcase.setCollision(false /* FALSE */);
  $.fake_briefcase1.setCollision(false /* FALSE */);
  $.fake_briefcase2.setCollision(false /* FALSE */);

  //Guard 1 - security doorman - front right of employees only door when looking at it


  $.shop_defend_guard1 = Char.Create(11 /* PEDTYPE_GANG_SECURITY */, GDb, 353.4, -732.9, 9.6);
  $.shop_defend_guard1.setHeading(339.7);
  $.shop_defend_guard1.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000);
  $.shop_defend_guard1.clearThreatSearch();
  $.shop_defend_guard1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.shop_defend_guard1_blip = Blip.AddForChar($.shop_defend_guard1);
  $.shop_defend_guard1.setStayInSamePlace(true /* TRUE */);
  $.shop_defend_guard1.setAccuracy(90);
  $.shop_defend_guard1.setHealth(150);

  //Guard 2 - security doorman - front left of employees only door when looking at it


  $.shop_defend_guard2 = Char.Create(11 /* PEDTYPE_GANG_SECURITY */, GDa, 350.6, -731.9, 9.6);
  $.shop_defend_guard2.setHeading(339.2);
  $.shop_defend_guard2.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000);
  $.shop_defend_guard2.clearThreatSearch();
  $.shop_defend_guard2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.shop_defend_guard2_blip = Blip.AddForChar($.shop_defend_guard2);
  $.shop_defend_guard2.setStayInSamePlace(true /* TRUE */);
  $.shop_defend_guard2.setAccuracy(90);
  $.shop_defend_guard2.setHealth(150);

  //Guard 3 - security doorman - front left tyre of car


  $.shop_defend_guard3 = Char.Create(11 /* PEDTYPE_GANG_SECURITY */, GDa, 349.1, -726.2, 9.6);
  $.shop_defend_guard3.setHeading(148.2);
  $.shop_defend_guard3.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000);
  $.shop_defend_guard3.clearThreatSearch();
  $.shop_defend_guard3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.shop_defend_guard3_blip = Blip.AddForChar($.shop_defend_guard3);
  $.shop_defend_guard3.setAccuracy(90);
  $.shop_defend_guard3.setHealth(150);


  $.shop_defend_guard3.setCrouch(true /* TRUE */, 86400000);

  //Guard 4 - security doorman - standing at boot of car chatting to shop_defend_guard5


  $.shop_defend_guard4 = Char.Create(11 /* PEDTYPE_GANG_SECURITY */, GDb, 343.7, -725.2, 9.2);
  $.shop_defend_guard4.setHeading(190.7);
  $.shop_defend_guard4.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000);
  $.shop_defend_guard4.clearThreatSearch();
  $.shop_defend_guard4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.shop_defend_guard4_blip = Blip.AddForChar($.shop_defend_guard4);
  $.shop_defend_guard4.setAccuracy(90);
  $.shop_defend_guard4.setHealth(150);

  //Guard 5 - security doorman - standing at boot of car chatting to shop_defend_guard4


  $.shop_defend_guard5 = Char.Create(11 /* PEDTYPE_GANG_SECURITY */, GDa, 343.2, -726.4, 9.2);
  $.shop_defend_guard5.setHeading(1.8);
  $.shop_defend_guard5.giveWeapon(23 /* WEAPONTYPE_UZI */, 30000);
  $.shop_defend_guard5.clearThreatSearch();
  $.shop_defend_guard5.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.shop_defend_guard5_blip = Blip.AddForChar($.shop_defend_guard5);
  $.shop_defend_guard5.setAccuracy(90);
  $.shop_defend_guard5.setHealth(150);


  Game.SetCharsChatting($.shop_defend_guard4, $.shop_defend_guard5, 86400000);


  TIMERB = 0;
}





async function fighting_dbp_security() {
  // SCM GOTO → fighting_dbp_security lowered to endless loop
  while (true) {
    await asyncWait(0);


    if ($.dbp_time == 0) {
      Text.PrintNow("TAXI2", 5000, 1); //Out of time
      // SCM GOTO → mission_failed_protec2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_protec2"); // fallback: would break linear control flow
    }



    if (!(Car.IsDead($.fucked_oceanic))) {
      if ($.player1.isInCar($.fucked_oceanic)) {
        if ($.security_coming_to_get_you == 0) {
          $.security_coming_to_get_you = 1;
        }
      }
      $.fake_briefcase.placeRelativeToCar($.fucked_oceanic, 0.0, -2.0, 0.0);
      $.fake_briefcase1.placeRelativeToCar($.fucked_oceanic, 0.0, -2.2, 0.0);
      $.fake_briefcase2.placeRelativeToCar($.fucked_oceanic, 0.0, -2.4, 0.0);
    }


    if (!(Char.IsDead($.shop_defend_guard1))) {
      if (TIMERA > 500) {
        if ($.shop_defend_guard1.hasSpottedPlayer($.player1)) {
          $.security_coming_to_get_you = 1;
          TIMERB = 0;
        }
      }
      if (!($.shop_defend_guard1.isHealthGreater(95))) {
        if ($.security_coming_to_get_you == 0) {
          $.security_coming_to_get_you = 1;
        }
      }
      if ($.security_coming_to_get_you == 1) {
        $.shop_defend_guard1.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.shop_defend_guard1.setThreatSearch(8192 /* THREAT_GANG_PLAYER */);
        $.shop_defend_guard1.setObjKillPlayerOnFoot($.player1);
      }
    }
    else {
      $.security_coming_to_get_you = 1;
      $.shop_defend_guard1_blip.remove();
      $.shop_defend_guard1.markAsNoLongerNeeded();
    }


    if (!(Char.IsDead($.shop_defend_guard2))) {
      if (!($.shop_defend_guard2.isHealthGreater(95))) {
        if ($.security_coming_to_get_you == 0) {
          $.security_coming_to_get_you = 1;
        }
      }
      if ($.security_coming_to_get_you == 1) {
        $.shop_defend_guard2.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.shop_defend_guard2.setThreatSearch(8192 /* THREAT_GANG_PLAYER */);
        $.shop_defend_guard2.setObjKillPlayerOnFoot($.player1);
      }
    }
    else {
      $.security_coming_to_get_you = 1;
      $.shop_defend_guard2_blip.remove();
      $.shop_defend_guard2.markAsNoLongerNeeded();
    }


    if (!(Char.IsDead($.shop_defend_guard3))) {
      if (!($.shop_defend_guard3.isHealthGreater(95))) {
        if ($.security_coming_to_get_you == 0) {
          $.security_coming_to_get_you = 1;
        }
      }
      if ($.controlling3 == 0) {
        if ($.security_coming_to_get_you == 1) {
          $.shop_defend_guard3.setStayInSamePlace(false /* FALSE */);
          $.shop_defend_guard3.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.shop_defend_guard3.setThreatSearch(8192 /* THREAT_GANG_PLAYER */);
          $.controlling3 = 1;
        }
      }
      if ($.controlling3 == 1) {
        $.shop_defend_guard3.setObjRunToCoord(355.6, -726.0);
        $.controlling3 = 2;
      }
      if ($.controlling3 == 2) {
        if ($.shop_defend_guard3.locateAnyMeans2D(355.6, -726.0, 2.0, 2.0, false /* FALSE */)) {
          $.shop_defend_guard3.setObjNoObj();
          $.shop_defend_guard3.setObjKillPlayerOnFoot($.player1);
          $.controlling3 = 3;
        }
      }
    }
    else {
      $.security_coming_to_get_you = 1;
      $.shop_defend_guard3_blip.remove();
      $.shop_defend_guard3.markAsNoLongerNeeded();
    }


    if (!(Char.IsDead($.shop_defend_guard4))) {
      if (!($.shop_defend_guard4.isHealthGreater(95))) {
        if ($.security_coming_to_get_you == 0) {
          $.security_coming_to_get_you = 1;
        }
      }
      if ($.controlling4 == 0) {
        if ($.security_coming_to_get_you == 1) {
          $.shop_defend_guard4.setStayInSamePlace(false /* FALSE */);
          $.shop_defend_guard4.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.shop_defend_guard4.setThreatSearch(8192 /* THREAT_GANG_PLAYER */);
          $.controlling4 = 1;
        }
      }
      if ($.controlling4 == 1) {
        $.shop_defend_guard4.setObjRunToCoord(355.6, -726.0);
        $.controlling4 = 2;
      }
      if ($.controlling4 == 2) {
        if ($.shop_defend_guard4.locateAnyMeans2D(355.6, -726.0, 2.0, 2.0, false /* FALSE */)) {
          $.shop_defend_guard4.setObjNoObj();
          $.shop_defend_guard4.setObjKillPlayerOnFoot($.player1);
          $.controlling4 = 3;
        }
      }
    }
    else {
      $.security_coming_to_get_you = 1;
      $.shop_defend_guard4_blip.remove();
      $.shop_defend_guard4.markAsNoLongerNeeded();
    }


    if (!(Char.IsDead($.shop_defend_guard5))) {
      if (!($.shop_defend_guard5.isHealthGreater(95))) {
        if ($.security_coming_to_get_you == 0) {
          $.security_coming_to_get_you = 1;
        }
      }
      if ($.controlling5 == 0) {
        if ($.security_coming_to_get_you == 1) {
          $.shop_defend_guard5.setStayInSamePlace(false /* FALSE */);
          $.shop_defend_guard5.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.shop_defend_guard5.setThreatSearch(8192 /* THREAT_GANG_PLAYER */);
          $.controlling5 = 1;
        }
      }
      if ($.controlling5 == 1) {
        $.shop_defend_guard5.setObjRunToCoord(355.6, -726.0);
        $.controlling5 = 2;
      }
      if ($.controlling5 == 2) {
        if ($.shop_defend_guard5.locateAnyMeans2D(355.6, -726.0, 2.0, 2.0, false /* FALSE */)) {
          $.shop_defend_guard5.setObjNoObj();
          $.shop_defend_guard5.setObjKillPlayerOnFoot($.player1);
          $.controlling5 = 3;
        }
      }
    }
    else {
      $.security_coming_to_get_you = 1;
      $.shop_defend_guard5_blip.remove();
      $.shop_defend_guard5.markAsNoLongerNeeded();
    }


    if (Char.IsDead($.shop_defend_guard1)) {
      if (Char.IsDead($.shop_defend_guard2)) {
        if (Char.IsDead($.shop_defend_guard3)) {
          if (Char.IsDead($.shop_defend_guard4)) {
            if (Char.IsDead($.shop_defend_guard5)) {
              $.fucked_oceanic.markAsNoLongerNeeded();
              $.security_coming_to_get_you = 0;
              // SCM GOTO → the_chase_starts (not lowered; manual jump required)
              throw new Error("unresolved GOTO the_chase_starts"); // fallback: would break linear control flow
            }
          }
        }
      }
    }


  }
}



async function the_chase_starts() {


  await asyncWait(2000);

  // ****************************************START OF CUTSCENE - start of the chase********************************************

  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);


  World.ClearAreaOfCars(347.3, -703.4, 5.0, 397.4, -773.0, 20.0);
  Camera.SetFixedPosition(353.54, -719.07, 13.89, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(365.18, -730.36, 10.99, 2 /* JUMP_CUT */);


  $.scplayer.setObjRunToCoord(356.8, -724.7);
  await asyncWait(1000);


  Fx.AddExplosion(366.4, -730.3, 9.0, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosion(366.4, -730.3, 9.0, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosion(366.4, -730.3, 9.0, 6 /* EXPLOSION_HELI */);
  Fx.AddMovingParticleEffect(17 /* POBJECT_FIREBALL_AND_SMOKE */, 366.4, -730.3, 9.0, 0.1, 0.0, 0.2, 0.8, 0, 0, 0, 11000);


  await asyncWait(500);

  //Gang Leader

  $.security_gang_leader_bike = Car.Create(pcj600, 359.0, -742.1, 10.0);
  $.security_gang_leader_bike.setHeading(332.8);
  $.security_gang_leader_bike.setDrivingStyle(2);
  $.security_gang_leader_bike.setCruiseSpeed(0.0);
  $.security_gang_leader_bike.setOnlyDamagedByPlayer(true /* TRUE */);
  $.security_gang_leader_bike.setProofs(true /* TRUE */, true /* TRUE */, true /* TRUE */, true /* TRUE */, true /* TRUE */);


  $.shop_defend_guard1 = Char.CreateInsideCar($.security_gang_leader_bike, 5 /* PEDTYPE_CIVFEMALE */, GDb);
  $.shop_defend_guard1.giveWeapon(26 /* WEAPONTYPE_M4 */, 30000);
  $.shop_defend_guard1.clearThreatSearch();
  $.shop_defend_guard1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.shop_defend_guard1.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.shop_defend_guard1.setThreatSearch(8192 /* THREAT_GANG_PLAYER */);
  $.shop_defend_guard1.setRunning(true /* TRUE */);
  $.shop_defend_guard1.setProofs(true /* TRUE */, true /* TRUE */, true /* TRUE */, true /* TRUE */, true /* TRUE */);
  $.shop_defend_guard1.setOnlyDamagedByPlayer(true /* TRUE */);
  $.shop_defend_guard1.setHealth(150);
  $.shop_defend_guard1_blip = Blip.AddForChar($.shop_defend_guard1);


  $.shop_defend_guard1.setHeedThreats(true /* TRUE */);


  //Gang No.2

  $.no2_bike = Car.Create(pcj600, 357.5, -745.2, 10.0);
  $.no2_bike.setHeading(332.8);
  $.no2_bike.setDrivingStyle(3);
  $.no2_bike.setCruiseSpeed(0.0);
  $.no2_bike.setOnlyDamagedByPlayer(true /* TRUE */);
  $.no2_bike.setProofs(true /* TRUE */, true /* TRUE */, true /* TRUE */, true /* TRUE */, true /* TRUE */);


  $.shop_defend_guard2 = Char.CreateInsideCar($.no2_bike, 5 /* PEDTYPE_CIVFEMALE */, GDa);
  $.shop_defend_guard2.giveWeapon(26 /* WEAPONTYPE_M4 */, 30000);
  $.shop_defend_guard2.clearThreatSearch();
  $.shop_defend_guard2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.shop_defend_guard2.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.shop_defend_guard2.setThreatSearch(8192 /* THREAT_GANG_PLAYER */);
  $.shop_defend_guard2.setRunning(true /* TRUE */);
  $.shop_defend_guard2.setProofs(true /* TRUE */, true /* TRUE */, true /* TRUE */, true /* TRUE */, true /* TRUE */);
  $.shop_defend_guard2.setOnlyDamagedByPlayer(true /* TRUE */);
  $.shop_defend_guard1.setHealth(150);
  $.shop_defend_guard2_blip = Blip.AddForChar($.shop_defend_guard2);



  $.security_gang_leader_bike.markAsConvoyCar(true /* TRUE */);
  $.security_gang_leader_bike.setStraightLineDistance(255);
  $.no2_bike.markAsConvoyCar(true /* TRUE */);
  $.no2_bike.setStraightLineDistance(255);



  $.shop_defend_guard2.setHeedThreats(true /* TRUE */);


  //ramming car

  $.dbpvan = Car.Create(securica, 250.8, -1292.2, 10.0);
  $.dbpvan.setHeading(347.7);
  $.dbpvan.setDrivingStyle(2);
  $.dbpvan.setCruiseSpeed(0.0);
  $.dbpvan.setStraightLineDistance(15);
  $.dbpvan.lockDoors(2 /* CARLOCK_LOCKED */);
  $.dbpvan_driver = Char.CreateInsideCar($.dbpvan, 5 /* PEDTYPE_CIVFEMALE */, GDa);
  $.dbpvan_driver.giveWeapon(26 /* WEAPONTYPE_M4 */, 30000);
  $.dbpvan_driver.clearThreatSearch();
  $.dbpvan_driver.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.dbpvan_driver.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.dbpvan_driver.setThreatSearch(8192 /* THREAT_GANG_PLAYER */);
  $.dbpvan_driver.setRunning(true /* TRUE */);


  if (!(Car.IsDead($.security_gang_leader_bike))) {
    $.security_gang_leader_bike.gotoCoordinates(368.4, -726.3, 10.1);
    $.security_gang_leader_bike.setCruiseSpeed(25.0);
  }


  if (!(Car.IsDead($.no2_bike))) {
    $.no2_bike.gotoCoordinates(368.4, -726.3, 10.1);
    $.no2_bike.setCruiseSpeed(15.0);
  }


  if (!(Car.IsDead($.security_gang_leader_bike))) {
    Camera.PointAtCar($.security_gang_leader_bike, 15 /* FIXED */, 2 /* JUMP_CUT */);
  }
  TIMERA = 0;
}



async function waiting_on_bikes_appearing() {
  // SCM GOTO → waiting_on_bikes_appearing lowered to endless loop
  while (true) {
    await asyncWait(0);
    if (!(Car.IsDead($.security_gang_leader_bike))) {
      if ($.security_gang_leader_bike.locate2D(368.4, -726.3, 2.0, 2.0, false /* FALSE */)) {
        $.security_gang_leader_bike.gotoCoordinates(391.7, -743.9, 10.9);
        $.controlling_bike1 = 1;
      }
    }
    if (!(Car.IsDead($.no2_bike))) {
      if ($.no2_bike.locate2D(368.4, -726.3, 2.0, 2.0, false /* FALSE */)) {
        $.no2_bike.gotoCoordinates(391.7, -743.9, 10.9);
        $.no2_bike.setCruiseSpeed(23.0);
        $.controlling_bike2 = 1;
      }
    }


    if ($.controlling_bike1 == 1 && $.controlling_bike2 == 1) {
      // SCM GOTO → the_1st_chase (not lowered; manual jump required)
      throw new Error("unresolved GOTO the_1st_chase"); // fallback: would break linear control flow
    }


    if (TIMERA > 5000) {
      // SCM GOTO → the_1st_chase (not lowered; manual jump required)
      throw new Error("unresolved GOTO the_1st_chase"); // fallback: would break linear control flow
    }


  }
}



async function the_1st_chase() {
  $.security_coming_to_get_you = 0;
  if ($.controlling_bike1 == 0) {
    $.security_gang_leader_bike.gotoCoordinates(391.7, -743.9, 10.9);
  }
  if ($.controlling_bike2 == 0) {
    $.no2_bike.gotoCoordinates(391.7, -743.9, 10.9);
  }
  $.controlling_bike1 = 0;
  $.controlling_bike2 = 0;
  if (!(Car.IsDead($.security_gang_leader_bike))) {
    $.security_gang_leader_bike.setProofs(false /* FALSE */, false /* FALSE */, false /* FALSE */, false /* FALSE */, false /* FALSE */);
  }
  if (!(Car.IsDead($.no2_bike))) {
    $.no2_bike.setProofs(false /* FALSE */, false /* FALSE */, false /* FALSE */, false /* FALSE */, false /* FALSE */);
  }
  if (!(Char.IsDead($.shop_defend_guard1))) {
    $.shop_defend_guard1.setProofs(false /* FALSE */, false /* FALSE */, false /* FALSE */, false /* FALSE */, false /* FALSE */);
  }
  if (!(Char.IsDead($.shop_defend_guard2))) {
    $.shop_defend_guard2.setProofs(false /* FALSE */, false /* FALSE */, false /* FALSE */, false /* FALSE */, false /* FALSE */);
  }
  await asyncWait(2000);
  $.scplayer.setObjNoObj();


  Text.PrintNow("PRO2_10", 5000, 1); //Two more have made a run for it.  Track them down and finish this.
  Char.SetEnterCarRangeMultiplier(3.5);
  $.scplayer.setObjNoObj();
  Camera.RestoreJumpcut();
  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  if (!(Car.IsDead($.dbpvan))) {
    $.dbpvan.setCruiseSpeed(100.0);
    $.dbpvan.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
  }
}

// ****************************************END OF CUTSCENE - start of the chase**********************************************


async function chase_to_lighthouse() {
  // SCM GOTO → chase_to_lighthouse lowered to endless loop
  while (true) {
    await asyncWait(0);


    if ($.bonus_flags == 0) {
      if (Car.IsDead($.dbpvan)) {
        Text.PrintWithNumberBig("BONUS", 1000, 1000, 1);
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        $.player1.addScore(1000);
        $.bonus_flags = 1;
      }
    }


    if ($.dbp_time == 0) {
      Text.PrintNow("TAXI2", 5000, 1); //Out of time
      // SCM GOTO → mission_failed_protec2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_protec2"); // fallback: would break linear control flow
    }


    if (!(Car.IsDead($.fucked_oceanic))) {
      $.fake_briefcase.placeRelativeToCar($.fucked_oceanic, 0.0, -2.0, 0.0);
      $.fake_briefcase1.placeRelativeToCar($.fucked_oceanic, 0.0, -2.2, 0.0);
      $.fake_briefcase2.placeRelativeToCar($.fucked_oceanic, 0.0, -2.4, 0.0);
    }


    if (!(Char.IsDead($.shop_defend_guard1))) {
      if (!(Car.IsDead($.security_gang_leader_bike))) {
        if ($.shop_defend_guard1.isInCar($.security_gang_leader_bike)) {
          if ($.controlling_bike1 == 0) {
            if ($.off_bike1 == 1) {
              $.shop_defend_guard1.setObjNoObj();
              $.security_gang_leader_bike.gotoCoordinates(391.7, -743.9, 10.9);
              $.security_gang_leader_bike.setCruiseSpeed(25.0);
              $.off_bike1 = 0;
            }
            if ($.security_gang_leader_bike.locate2D(391.7, -743.9, 7.0, 7.0, false /* FALSE */)) {
              $.security_gang_leader_bike.gotoCoordinatesAccurate(300.3, -955.4, 10.8);
              $.controlling_bike1 = 1;
            }
          }
          if ($.controlling_bike1 == 1) {
            if ($.off_bike1 == 1) {
              $.shop_defend_guard1.setObjNoObj();
              $.security_gang_leader_bike.gotoCoordinatesAccurate(300.3, -955.4, 10.8);
              $.security_gang_leader_bike.setCruiseSpeed(25.0);
              $.off_bike1 = 0;
            }
            if ($.security_gang_leader_bike.locate2D(300.3, -955.4, 7.0, 7.0, false /* FALSE */)) {
              $.security_gang_leader_bike.gotoCoordinatesAccurate(285.3, -1048.8, 11.3);
              $.controlling_bike1 = 2;
            }
          }
          if ($.controlling_bike1 == 2) {
            if ($.off_bike1 == 1) {
              $.shop_defend_guard1.setObjNoObj();
              $.security_gang_leader_bike.gotoCoordinatesAccurate(285.3, -1048.8, 10.8);
              $.security_gang_leader_bike.setCruiseSpeed(25.0);
              $.off_bike1 = 0;
            }
            if ($.security_gang_leader_bike.locate2D(285.3, -1048.8, 7.0, 7.0, false /* FALSE */)) {
              $.security_gang_leader_bike.gotoCoordinatesAccurate(257.9, -1206.8, 11.3);
              $.controlling_bike1 = 3;
            }
          }
          if ($.controlling_bike1 == 3) {
            if ($.off_bike1 == 1) {
              $.shop_defend_guard1.setObjNoObj();
              $.security_gang_leader_bike.gotoCoordinatesAccurate(257.9, -1206.8, 10.8);
              $.security_gang_leader_bike.setCruiseSpeed(25.0);
              $.off_bike1 = 0;
            }
            if ($.security_gang_leader_bike.locate2D(257.9, -1206.8, 7.0, 7.0, false /* FALSE */)) {
              $.security_gang_leader_bike.gotoCoordinatesAccurate(234.4, -1326.1, 11.3);
              $.controlling_bike1 = 4;
            }
          }
          if ($.controlling_bike1 == 4) {
            if ($.off_bike1 == 1) {
              $.shop_defend_guard1.setObjNoObj();
              $.security_gang_leader_bike.gotoCoordinatesAccurate(234.4, -1326.1, 10.8);
              $.security_gang_leader_bike.setCruiseSpeed(25.0);
              $.off_bike1 = 0;
            }
            if ($.security_gang_leader_bike.locate2D(234.4, -1326.1, 7.0, 7.0, false /* FALSE */)) {
              $.security_gang_leader_bike.gotoCoordinatesAccurate(220.7, -1398.6, 11.3);
              $.controlling_bike1 = 5;
            }
          }
          if ($.controlling_bike1 == 5) {
            if ($.off_bike1 == 1) {
              $.shop_defend_guard1.setObjNoObj();
              $.security_gang_leader_bike.gotoCoordinatesAccurate(220.7, -1398.6, 11.3);
              $.security_gang_leader_bike.setCruiseSpeed(25.0);
              $.off_bike1 = 0;
            }
            if ($.security_gang_leader_bike.locate2D(220.7, -1398.6, 7.0, 7.0, false /* FALSE */)) {
              $.security_gang_leader_bike.gotoCoordinatesAccurate(169.0, -1525.2, 11.3);
              $.controlling_bike1 = 6;
            }
          }
          if ($.controlling_bike1 == 6) {
            if ($.off_bike1 == 1) {
              $.shop_defend_guard1.setObjNoObj();
              $.security_gang_leader_bike.gotoCoordinatesAccurate(169.0, -1525.2, 10.8);
              $.security_gang_leader_bike.setCruiseSpeed(25.0);
              $.off_bike1 = 0;
            }
            if ($.security_gang_leader_bike.locate2D(169.0, -1525.2, 7.0, 7.0, false /* FALSE */)) {
              $.security_gang_leader_bike.gotoCoordinatesAccurate(192.8, -1583.0, 11.3);
              $.controlling_bike1 = 7;
            }
          }
          if ($.controlling_bike1 == 7) {
            if ($.off_bike1 == 1) {
              $.shop_defend_guard1.setObjNoObj();
              $.security_gang_leader_bike.gotoCoordinatesAccurate(192.8, -1583.0, 10.8);
              $.security_gang_leader_bike.setCruiseSpeed(25.0);
              $.off_bike1 = 0;
            }
            if ($.security_gang_leader_bike.locate2D(192.8, -1583.0, 7.0, 7.0, false /* FALSE */)) {
              $.security_gang_leader_bike.gotoCoordinatesAccurate(240.5, -1689.2, 11.3);
              $.security_gang_leader_bike.setCruiseSpeed(15.0);
              $.controlling_bike1 = 8;
            }
          }
          if ($.controlling_bike1 == 8) {
            if ($.off_bike1 == 1) {
              $.shop_defend_guard1.setObjNoObj();
              $.security_gang_leader_bike.gotoCoordinatesAccurate(240.5, -1689.2, 10.8);
              $.security_gang_leader_bike.setCruiseSpeed(25.0);
              $.off_bike1 = 0;
            }
            if ($.security_gang_leader_bike.locate2D(240.5, -1689.2, 7.0, 7.0, false /* FALSE */)) {
              $.security_gang_leader_bike.setTempAction(5 /* TEMPACT_HANDBRAKESTRAIGHT */, 10000);
              $.security_gang_leader_bike.setCruiseSpeed(0.0);
              $.security_gang_leader_bike.setOnlyDamagedByPlayer(false /* FALSE */);
              $.controlling_bike1 = 9;
            }
          }
          if ($.controlling_bike1 == 9) {
            $.shop_defend_guard1.setObjLeaveCar($.security_gang_leader_bike);
            $.shop_defend_guard1.setObjRunToCoord(258.7, -1703.0);
            TIMERA = 0;
            $.controlling_bike1 = 10;
          }
          if ($.controlling_bike1 > 9) {
            $.controlling_bike1 = 9;
          }
        }
        else {
          if ($.controlling_bike1 < 9) {
            if ($.player1.locateAnyMeansChar2D($.shop_defend_guard1, 10.0, 10.0, false /* FALSE */)) {
              $.shop_defend_guard1.setObjKillPlayerAnyMeans($.player1);
            }
            else {
              if ($.shop_defend_guard1.locateAnyMeansCar2D($.security_gang_leader_bike, 30.0, 30.0, false /* FALSE */)) {
                $.shop_defend_guard1.setObjEnterCarAsDriver($.security_gang_leader_bike);
              }
              else {
                $.shop_defend_guard1.setObjKillPlayerAnyMeans($.player1);
              }
            }
            $.off_bike1 = 1;
          }
          else {
            if ($.controlling_bike2 == 9) {
              if ($.shop_defend_guard1.isInCar($.security_gang_leader_bike)) {
                $.shop_defend_guard1.setObjLeaveCar($.security_gang_leader_bike);
              }
              $.shop_defend_guard1.setObjRunToCoord(258.7, -1703.0);
              TIMERA = 0;
              $.controlling_bike2 = 10;
            }
            if ($.controlling_bike1 == 10) {
              if (!($.shop_defend_guard1.locateAnyMeans2D(454.3, -1727.9, 5.0, 5.0, false /* FALSE */))) {
                if (TIMERA > 500) {
                  if (!($.shop_defend_guard1.isWanderPathClear(454.3, -1727.9, 9.0, 1.0))) {
                    $.shop_defend_guard1.followPath(454.3, -1727.9, 9.0, 1.0, 1 /* RUN */);
                  }
                  TIMERA = 0;
                }
              }
              else {
                $.shop_defend_guard1.setObjNoObj();
                $.shop_defend_guard1.setStayInSamePlace(true /* TRUE */);
                $.controlling_bike1 = 11;
              }
            }
            if ($.controlling_bike1 == 11) {
              $.shop_defend_guard1.setObjKillPlayerOnFoot($.player1);
              $.controlling_bike1 = 12;
            }
          }
        }
      }
      else {
        $.security_gang_leader_bike.markAsNoLongerNeeded();
        $.shop_defend_guard1.setObjKillPlayerAnyMeans($.player1);
      }
    }
    else {
      $.shop_defend_guard1_blip.remove();
    }



    if (!(Char.IsDead($.shop_defend_guard2))) {
      if (!(Car.IsDead($.no2_bike))) {
        if ($.shop_defend_guard2.isInCar($.no2_bike)) {
          if ($.controlling_bike2 == 0) {
            if ($.off_bike2 == 1) {
              $.shop_defend_guard2.setObjNoObj();
              $.no2_bike.gotoCoordinates(391.7, -743.9, 10.9);
              $.no2_bike.setCruiseSpeed(23.0);
              $.off_bike2 = 0;
            }
            if ($.no2_bike.locate2D(391.7, -743.9, 7.0, 7.0, false /* FALSE */)) {
              $.no2_bike.gotoCoordinatesAccurate(300.3, -955.4, 10.8);
              $.controlling_bike2 = 1;
            }
          }
          if ($.controlling_bike2 == 1) {
            if ($.off_bike2 == 1) {
              $.shop_defend_guard2.setObjNoObj();
              $.no2_bike.gotoCoordinates(300.3, -955.4, 10.9);
              $.no2_bike.setCruiseSpeed(23.0);
              $.off_bike2 = 0;
            }
            if ($.no2_bike.locate2D(300.3, -955.4, 7.0, 7.0, false /* FALSE */)) {
              $.no2_bike.gotoCoordinatesAccurate(285.3, -1048.8, 11.3);
              $.controlling_bike2 = 2;
            }
          }
          if ($.controlling_bike2 == 2) {
            if ($.off_bike2 == 1) {
              $.shop_defend_guard2.setObjNoObj();
              $.no2_bike.gotoCoordinates(285.3, -1048.8, 10.9);
              $.no2_bike.setCruiseSpeed(23.0);
              $.off_bike2 = 0;
            }
            if ($.no2_bike.locate2D(285.3, -1048.8, 7.0, 7.0, false /* FALSE */)) {
              $.no2_bike.gotoCoordinatesAccurate(257.9, -1206.8, 11.3);
              $.controlling_bike2 = 3;
            }
          }
          if ($.controlling_bike2 == 3) {
            if ($.off_bike2 == 1) {
              $.shop_defend_guard2.setObjNoObj();
              $.no2_bike.gotoCoordinates(257.9, -1206.8, 10.9);
              $.no2_bike.setCruiseSpeed(23.0);
              $.off_bike2 = 0;
            }
            if ($.no2_bike.locate2D(257.9, -1206.8, 7.0, 7.0, false /* FALSE */)) {
              $.no2_bike.gotoCoordinatesAccurate(234.4, -1326.1, 11.3);
              $.controlling_bike2 = 4;
            }
          }
          if ($.controlling_bike2 == 4) {
            if ($.off_bike2 == 1) {
              $.shop_defend_guard2.setObjNoObj();
              $.no2_bike.gotoCoordinates(234.4, -1326.1, 10.9);
              $.no2_bike.setCruiseSpeed(23.0);
              $.off_bike2 = 0;
            }
            if ($.no2_bike.locate2D(234.4, -1326.1, 7.0, 7.0, false /* FALSE */)) {
              $.no2_bike.gotoCoordinatesAccurate(220.7, -1398.6, 11.3);
              $.controlling_bike2 = 5;
            }
          }
          if ($.controlling_bike2 == 5) {
            if ($.off_bike2 == 1) {
              $.shop_defend_guard2.setObjNoObj();
              $.no2_bike.gotoCoordinates(220.7, -1398.6, 10.9);
              $.no2_bike.setCruiseSpeed(23.0);
              $.off_bike2 = 0;
            }
            if ($.no2_bike.locate2D(220.7, -1398.6, 7.0, 7.0, false /* FALSE */)) {
              $.no2_bike.gotoCoordinatesAccurate(169.0, -1525.2, 11.3);
              $.controlling_bike2 = 6;
            }
          }
          if ($.controlling_bike2 == 6) {
            if ($.off_bike2 == 1) {
              $.shop_defend_guard2.setObjNoObj();
              $.no2_bike.gotoCoordinates(169.0, -1525.2, 10.9);
              $.no2_bike.setCruiseSpeed(23.0);
              $.off_bike2 = 0;
            }
            if ($.no2_bike.locate2D(169.0, -1525.2, 7.0, 7.0, false /* FALSE */)) {
              $.no2_bike.gotoCoordinatesAccurate(192.8, -1583.0, 11.3);
              $.no2_bike.setCruiseSpeed(15.0);
              $.controlling_bike2 = 7;
            }
          }
          if ($.controlling_bike2 == 7) {
            if ($.off_bike2 == 1) {
              $.shop_defend_guard2.setObjNoObj();
              $.no2_bike.gotoCoordinates(192.8, -1583.0, 10.9);
              $.no2_bike.setCruiseSpeed(23.0);
              $.off_bike2 = 0;
            }
            if ($.no2_bike.locate2D(192.8, -1583.0, 7.0, 7.0, false /* FALSE */)) {
              $.no2_bike.gotoCoordinatesAccurate(240.5, -1689.2, 11.3);
              $.controlling_bike2 = 8;
            }
          }
          if ($.controlling_bike2 == 8) {
            if ($.off_bike2 == 1) {
              $.shop_defend_guard2.setObjNoObj();
              $.no2_bike.gotoCoordinates(240.5, -1689.2, 10.9);
              $.no2_bike.setCruiseSpeed(15.0);
              $.off_bike2 = 0;
            }
            if ($.no2_bike.locate2D(240.5, -1689.2, 9.0, 9.0, false /* FALSE */)) {
              $.no2_bike.setTempAction(5 /* TEMPACT_HANDBRAKESTRAIGHT */, 10000);
              $.no2_bike.setCruiseSpeed(0.0);
              $.no2_bike.setOnlyDamagedByPlayer(false /* FALSE */);
              $.controlling_bike2 = 9;
            }
          }
          if ($.controlling_bike2 == 9) {
            $.shop_defend_guard2.setObjLeaveCar($.no2_bike);
            $.shop_defend_guard2.setObjRunToCoord(258.7, -1703.0);
            TIMERA = 0;
            $.controlling_bike2 = 10;
          }
          if ($.controlling_bike2 > 9) {
            $.controlling_bike2 = 9;
          }
        }
        else {
          if ($.controlling_bike2 < 9) {
            if ($.player1.locateAnyMeansChar2D($.shop_defend_guard2, 10.0, 10.0, false /* FALSE */)) {
              $.shop_defend_guard2.setObjKillPlayerAnyMeans($.player1);
            }
            else {
              if ($.shop_defend_guard2.locateAnyMeansCar2D($.no2_bike, 30.0, 30.0, false /* FALSE */)) {
                $.shop_defend_guard2.setObjEnterCarAsDriver($.no2_bike);
              }
              else {
                $.shop_defend_guard2.setObjKillPlayerAnyMeans($.player1);
              }
            }
            $.off_bike2 = 1;
          }
          else {
            if ($.controlling_bike2 == 9) {
              if ($.shop_defend_guard2.isInCar($.no2_bike)) {
                $.shop_defend_guard2.setObjLeaveCar($.no2_bike);
              }
              $.shop_defend_guard2.setObjRunToCoord(258.7, -1703.0);
              TIMERA = 0;
              $.controlling_bike2 = 10;
            }
            if ($.controlling_bike2 == 10) {
              if (!($.shop_defend_guard2.locateAnyMeans2D(454.3, -1727.9, 5.0, 5.0, false /* FALSE */))) {
                if (TIMERA > 500) {
                  if (!($.shop_defend_guard2.isWanderPathClear(454.3, -1727.9, 9.0, 1.0))) {
                    $.shop_defend_guard2.followPath(454.3, -1727.9, 9.0, 1.0, 1 /* RUN */);
                  }
                  TIMERA = 0;
                }
              }
              else {
                $.shop_defend_guard2.setObjNoObj();
                $.shop_defend_guard2.setStayInSamePlace(true /* TRUE */);
                $.controlling_bike2 = 11;
              }
            }
            if ($.controlling_bike2 == 11) {
              $.shop_defend_guard2.setObjKillPlayerOnFoot($.player1);
              $.controlling_bike2 = 12;
            }
          }
        }
      }
      else {
        $.no2_bike.markAsNoLongerNeeded();
        $.shop_defend_guard2.setObjKillPlayerAnyMeans($.player1);
      }
    }
    else {
      $.shop_defend_guard2_blip.remove();
    }


    if (Char.IsDead($.shop_defend_guard1)) {
      if (Char.IsDead($.shop_defend_guard2)) {
        // SCM GOTO → mission_passed_protec2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_passed_protec2"); // fallback: would break linear control flow
      }
    }


  }
}


// Mission failed

async function mission_failed_protec2() {


  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
}




// mission passed

async function mission_passed_protec2() {


  Text.ClearPrints();
  Text.PrintWithNumberBig("M_PASS", 4000, 5000, 1); //"Mission Passed!"
  Audio.PlayMissionPassedTune(1);
  $.player1.clearWantedLevel();
  $.player1.addScore(4000);
  Stat.RegisterMissionPassed("BUD_2");
  Stat.PlayerMadeProgress(1);
  $.protect_contact_blip.remove();
  $.protect_contact_blip = Blip.AddSpriteForContactPoint(-348.5, -541.8, 16.4, 29 /* RADAR_SPRITE_TOMMY */);
  // START_NEW_SCRIPT protect_mission3_loop 
  $.flag_protect_mission2_passed = 1;
  $.spaz_in_stock = 1;
}




// mission cleanup

async function mission_cleanup_protec2() {


  ONMISSION = 0;
  $.player1.setControl(true /* on */);
  Hud.ClearTimer($.$id.dbp_time);
  Streaming.MarkModelAsNoLongerNeeded(uzi);
  Streaming.MarkModelAsNoLongerNeeded(brassknuckle);
  Streaming.MarkModelAsNoLongerNeeded(m4);
  Streaming.MarkModelAsNoLongerNeeded(pcj600);
  Streaming.MarkModelAsNoLongerNeeded(GDa);
  Streaming.MarkModelAsNoLongerNeeded(GDb);
  Streaming.MarkModelAsNoLongerNeeded(HMOST);
  Streaming.MarkModelAsNoLongerNeeded(oceanic);
  Streaming.MarkModelAsNoLongerNeeded(sentinel);
  Streaming.MarkModelAsNoLongerNeeded(securica);
  $.prot_cuban1.removeElegantly();
  $.prot_cuban2.removeElegantly();
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);
  $.shop_defend_guard1_blip.remove();
  $.shop_defend_guard2_blip.remove();
  $.shop_defend_guard3_blip.remove();
  $.shop_defend_guard4_blip.remove();
  $.shop_defend_guard5_blip.remove();
  $.news_cafe_blip.remove();
  $.fake_briefcase.delete();
  $.fake_briefcase1.delete();
  $.fake_briefcase2.delete();
  $.timer_mobile_start = Clock.GetGameTimer();
  Mission.Finish();
}

export async function prot2() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************Protection 2************************************
  // *****************************************Bar Brawl***************************************
  // *****************************************************************************************
  // *****************************************************************************************

  // SCRIPT_NAME protec2
  // Mission start stuff

  await mission_start_protec2();  // SCM GOSUB mission_start_protec2
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_failed_protec2();  // SCM GOSUB mission_failed_protec2
  }
  await mission_cleanup_protec2();  // SCM GOSUB mission_cleanup_protec2
  // MissionBoundary

  // Variables for mission
  //people, cars and objects

  // VAR_INT prot_cuban1
  // VAR_INT prot_cuban2
  // VAR_INT shop_keep
  // VAR_INT shop_defend_guard1
  // VAR_INT shop_defend_guard2
  // VAR_INT shop_defend_guard3
  // VAR_INT shop_defend_guard4
  // VAR_INT shop_defend_guard5
  // VAR_INT fucked_oceanic
  // VAR_INT security_gang_leader_bike
  // VAR_INT no2_bike
  // VAR_INT free_sentinel
  // VAR_INT fake_briefcase
  // VAR_INT fake_briefcase1
  // VAR_INT fake_briefcase2
  // VAR_INT dbpvan
  // VAR_INT dbpvan_driver
  // VAR_INT off_bike1
  // VAR_INT off_bike2

  //blips

  // VAR_INT shop_defend_guard1_blip
  // VAR_INT shop_defend_guard2_blip
  // VAR_INT shop_defend_guard3_blip
  // VAR_INT shop_defend_guard4_blip
  // VAR_INT shop_defend_guard5_blip
  // VAR_INT news_cafe_blip

  //flags

  // VAR_INT security_coming_to_get_you
  // VAR_INT guard2_out_of_news_bar
  // VAR_INT flag_leader_on_bike
  // VAR_INT prot2_speech
  // VAR_INT controlling_bike1
  // VAR_INT controlling_bike2
  // VAR_INT dbp_time
  // VAR_INT controlling3
  // VAR_INT controlling4
  // VAR_INT controlling5
  // VAR_INT bonus_flags

  //cutscene

  // VAR_INT cs_drink01
  // VAR_INT cs_drink02
  // VAR_INT cs_drink03

  // ****************************************Mission Start************************************

}
