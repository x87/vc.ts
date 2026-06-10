// Generated from main/lawyer2.sc

import { $ } from "../vars.mts";

// *******************************************************************************************
// *******************************************************************************************
// *************************************Lawyer mission 2**************************************
// **************************************BACKALLEY BAWL***************************************
// *******************************************************************************************
// *******************************************************************************************
// *******************************************************************************************

async function body() {


  Stat.RegisterMissionGiven();
  ONMISSION = 1;
  // SCRIPT_NAME LAWYER2
  await asyncWait(0);


  Text.LoadMissionText("LAWYER2");
  Shortcut.SetDropoffPointForMission(110.6, -824.2, 9.6, 327.9);


  counter_badguys = 0;
  $.ambush_bloke1_dead = 0;
  $.ambush_bloke2_dead = 0;
  $.ambush_bloke3_dead = 0;
  $.ambush_bloke4_dead = 0;
  $.ambush_bloke5_dead = 0;
  $.ambush_bloke6_dead = 0;
  $.ambush_bloke7_dead = 0;
  $.played_buddy_sample1 = 0;
  $.first_two_samples = 0;
  $.second_two_samples = 0;
  $.audio_is_loading = 0;
  $.audio_has_loaded = 0;
  set_buddys_threat = 0;
  $.ran_to_last_coords = 0;
  $.buddy_blip_active = 0;
  $.blokex = 433.7;
  $.blokey = -575.9;
  $.blokez = 9.7;
  short_malibu_cut = 0;
  $.buddycar_blip_active = 0;
  $.chef_cut_scene = 0;
  $.first_part_of_chef_cut = 0;
  ambush_blokes_obj_set = 0;
  on_the_phone_again = 0;
  gun_blip_help = 0;
  set_players_control_back_on = 0;
  $.played_sprint_help = 0;
  $.drove_in_from_south = 0;



  Text.ClearHelp();



  Streaming.SetAreaVisible(VIS_LAWYERS);


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSken");
  Streaming.LoadSpecialModel(CUTOBJ01, "lwchara");
  Streaming.LoadSpecialModel(CUTOBJ02, "lwcharb");
  Streaming.LoadSpecialModel(CUTOBJ03, "lcfan");
  Streaming.LoadSpecialModel(CUTOBJ04, "lawdoor");


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasModelLoaded(CUTOBJ01)) || !(Streaming.HasModelLoaded(CUTOBJ02)) || !(Streaming.HasModelLoaded(CUTOBJ03)) || !(Streaming.HasModelLoaded(CUTOBJ04))) {
    await asyncWait(0);


  }


  Streaming.LoadScene(140.6, -1367.4, 13.1);


  Cutscene.Load("law_2a");
  Cutscene.SetOffset(141.441, -1366.722, 12.163);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_ken = CutsceneObject.Create(SPECIAL02);
  $.cs_ken.setAnim("CSken");


  $.cs_lwchara = CutsceneObject.Create(CUTOBJ01);
  $.cs_lwchara.setAnim("lwchara");


  $.cs_lwcharb = CutsceneObject.Create(CUTOBJ02);
  $.cs_lwcharb.setAnim("lwcharb");


  $.cs_lcfan = CutsceneObject.Create(CUTOBJ03);
  Cutscene.SetAnimToLoop("lcfan");
  $.cs_lcfan.setAnim("lcfan");


  $.cs_lawdoor = CutsceneObject.Create(CUTOBJ04);
  $.cs_lawdoor.setAnim("lawdoor");


  World.ClearArea(119.0, -826.8, 9.8, 0.5, true /* TRUE */);
  $.player1.setCoordinates(119.0, -826.8, 9.8);
  $.player1.setHeading(60.0);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 987) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2_A", 10000, 1); // Mission brief


  while ($.cs_time < 6800) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2_B", 10000, 1); // Mission brief


  while ($.cs_time < 11088) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2_C", 10000, 1); // Mission brief


  while ($.cs_time < 12888) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2_D", 10000, 1); // Mission brief


  while ($.cs_time < 14496) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2_E", 10000, 1); // Mission brief


  while ($.cs_time < 17164) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2_F", 10000, 1); // Mission brief


  while ($.cs_time < 18793) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2_G", 10000, 1); // Mission brief


  while ($.cs_time < 22223) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2_H", 10000, 1); // Mission brief


  while ($.cs_time < 25376) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2_I", 10000, 1); // Mission brief


  while ($.cs_time < 28768) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2_J", 10000, 1); // Mission brief


  while ($.cs_time < 31266) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2_K", 10000, 1); // Mission brief


  while ($.cs_time < 32433) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  while ($.cs_time < 33422) {
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
  Camera.SetInFrontOfPlayer();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ02);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ03);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ04);


  Streaming.SetAreaVisible(VIS_MAIN_MAP);
  Streaming.LoadScene(117.1, -825.6, 9.8);


  $.flag_player_on_lawyer_2 = 1;


  $.malibu_doors.delete();
  $.malibu_doors = ScriptObject.CreateNoOffset(od_clbdr_open, 490.34, -77.017, 11.598);
  $.malibu_doors.dontRemove();
  $.flag_malibu_doors_open = 1;
  $.flag_malibu_doors_closed = 0;



  await asyncWait(500);


  Camera.DoFade(1500, 1 /* FADE_IN */);

  // START OF MISSION


  Text.PrintNow("LAW2_6", 10000, 2); //MEET KENT PAUL


  kent_paul1 = Blip.AddForCoord($.kentX, $.kentY, $.kentZ);


  while (!($.player1.locateOnFoot3D(491.0, -77.7, 10.4, 2.0, 2.0, 3.0, true /* TRUE */))) {
    await asyncWait(0);
    if ($.player1.locateAnyMeans3D(491.0, -77.7, 10.4, 2.0, 2.0, 3.0, true /* TRUE */)) {
      if ($.player1.isOnAnyBike()) {
        $.any_bike_lawyer2 = $.player1.storeCarIsIn();
        // SCM GOTO → kent_cut (not lowered; manual jump required)
        throw new Error("unresolved GOTO kent_cut"); // fallback: would break linear control flow
      }
    }


  }
}



async function kent_cut() {


  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);


  Camera.SetFixedPosition(502.203, -95.118, 10.771, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(501.811, -94.212, 10.930, 2 /* JUMP_CUT */);


  if ($.player1.isOnAnyBike()) {
    if (!(Car.IsDead($.any_bike_lawyer2))) {
      $.any_bike_lawyer2.setCoordinates(496.3, -82.8, 9.0);
      $.any_bike_lawyer2.setHeading(116.6);
    }
    $.player1.warpFromCarToCoord(493.2, -79.7, 10.4);
  }
  else {
    $.player1.setCoordinates(493.2, -79.7, 10.4);
  }


  $.player1.setHeading(58.0);
  $.scplayer.setObjGotoCoordOnFoot(487.8, -74.3);


  await asyncWait(1000);


  Camera.SetFadingColor(0, 0, 0);
  Camera.DoFade(1500, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  $.scplayer.setObjNoObj();


  $.flag_player_on_lawyer_2 = 0;


  $.malibu_doors.delete();
  $.malibu_doors = ScriptObject.CreateNoOffset(od_clbdr_close, 490.34, -77.017, 11.598);
  $.malibu_doors.dontRemove();
  $.flag_malibu_doors_closed = 1;
  $.flag_malibu_doors_open = 0;
  $.flag_player_in_malibu = 0;


  Streaming.RequestModel(infernus);
  Streaming.RequestModel(173 /* colt45 */);

  // *******************************************START MEET KENT PAUL***********************************************


  $.breakout_timer_start = Clock.GetGameTimer();
  $.breakout_diff = 0;


  while (!($.player1.canStartMission()) && $.breakout_diff < 5000) {
    await asyncWait(0);
    $.breakout_timer = Clock.GetGameTimer();
    $.breakout_diff = $.breakout_timer - $.breakout_timer_start;
  }


  $.player1.makeSafeForCutscene();


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(false /* OFF */);



  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSkent");
  Streaming.LoadSpecialCharacter(3, "bounca");
  Streaming.LoadSpecialCharacter(4, "floozyb");



  Streaming.SetAreaVisible(VIS_MALIBU_CLUB);
  World.SetExtraColors(1, false /* FALSE */);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasSpecialCharacterLoaded(4))) {
    await asyncWait(0);


  }


  Streaming.LoadScene(476.972, -65.499, 8.943);


  World.ClearArea(476.972, -65.499, 8.943, 15.0, true /* TRUE */);


  Cutscene.Load("law_2b");
  Cutscene.SetOffset(476.972, -65.499, 8.943);
  Camera.SetNearClip(0.3);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_kent = CutsceneObject.Create(SPECIAL02);
  $.cs_kent.setAnim("CSkent");


  cs_bounca = CutsceneObject.Create(SPECIAL03);
  cs_bounca.setAnim("bounca");


  $.cs_floozyb = CutsceneObject.Create(SPECIAL04);
  $.cs_floozyb.setAnim("floozyb");



  World.ClearArea(493.1, -82.4, 9.8, 1.0, true /* TRUE */);
  $.player1.setCoordinates(493.1, -82.4, 9.8); //484.2 -72.5 9.5
  $.player1.setHeading(220.0);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 1018) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2B_A", 10000, 1); // Mission brief


  while ($.cs_time < 2526) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2B_B", 10000, 1); // Mission brief


  while ($.cs_time < 5339) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2B_D", 10000, 1); // Mission brief


  while ($.cs_time < 9000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2B_C", 10000, 1); // Mission brief


  while ($.cs_time < 11311) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2B_E", 10000, 1); // Mission brief


  while ($.cs_time < 12536) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2B_F", 10000, 1); // Mission brief


  while ($.cs_time < 14601) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2B_G", 10000, 1); // Mission brief


  while ($.cs_time < 16228) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2B_H", 10000, 1); // Mission brief


  while ($.cs_time < 18290) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2B_I", 10000, 1); // Mission brief


  while ($.cs_time < 20060) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2B_J", 10000, 1); // Mission brief


  while ($.cs_time < 23582) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2B_K", 10000, 1); // Mission brief


  while ($.cs_time < 31000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2B_L", 10000, 1); // Mission brief


  while ($.cs_time < 34762) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2B_M", 10000, 1); // Mission brief


  while ($.cs_time < 36141) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2B_N", 10000, 1); // Mission brief


  while ($.cs_time < 37719) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2B_O", 10000, 1); // Mission brief


  while ($.cs_time < 40549) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2B_P", 10000, 1); // Mission brief


  while ($.cs_time < 42314) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2B_Q", 10000, 1); // Mission brief


  while ($.cs_time < 44319) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2B_R", 10000, 1); // Mission brief


  while ($.cs_time < 46344) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2B_S", 10000, 1); // Mission brief


  while ($.cs_time < 50737) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2B_T", 10000, 1); // Mission brief


  while ($.cs_time < 54654) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2B_U", 10000, 1); // Mission brief


  while ($.cs_time < 60868) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2B_V", 10000, 1); // Mission brief


  while ($.cs_time < 64355) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2B_W", 10000, 1); // Mission brief


  while ($.cs_time < 66768) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  Camera.DoFade(1500, 0 /* FADE_OUT */);


  Text.ClearPrints();


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Text.PrintBig("BEACH3", 5000, 2); //"Vice Point"


  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();
  Camera.SetBehindPlayer();



  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);


  World.ClearExtraColors(false /* FALSE */);
  Streaming.SetAreaVisible(VIS_MAIN_MAP);
  Streaming.LoadScene(493.1, -82.4, 9.8);

  // *******************************************END MEET KENT PAUL***********************************************


  $.flag_player_on_lawyer_2 = 0;


  Streaming.LoadSpecialCharacter(3, "chef");
  Streaming.LoadSpecialCharacter(4, "igbuddy");
  Streaming.RequestModel(cellphone);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasModelLoaded(infernus)) || !(Streaming.HasModelLoaded(173 /* colt45 */))) {
    await asyncWait(0);


  }



  await asyncWait(500);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  kent_paul1.remove();


  $.ambush_bloke1 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, SPECIAL03, $.blokex, $.blokey, $.blokez);



  $.ambush_bloke1.setHeading(70.0);
  $.ambush_bloke1.setHealth(100);


  $.ambush_bloke1.setAnsweringMobile(true /* TRUE */);


  $.ambush_bloke1.clearThreatSearch();


  Text.PrintNow("LAW2_7", 10000, 2); //DUFF UP BLOKE


  $.lawyer_blip1 = Blip.AddForChar($.ambush_bloke1);



  TIMERB = 0;


  while (!(Char.IsDead($.ambush_bloke1))) {
    await asyncWait(0);
    if ($.chef_cut_scene == 0) {
      if (!(Char.IsDead($.ambush_bloke1))) {
        if (!($.ambush_bloke1.isHealthGreater(99))) {
          $.ambush_bloke1.setAnsweringMobile(false /* FALSE */);
          $.ambush_bloke1.setObjKillPlayerOnFoot($.player1);
          $.chef_cut_scene = 1;
        }


        if ($.player1.locateAnyMeansChar3D($.ambush_bloke1, 8.0, 8.0, 3.0, false /* FALSE */)) {
          //AND NOT IS_PLAYER_IN_ANY_CAR player1
          if ($.first_part_of_chef_cut == 0) {
            $.player1.setControl(false /* OFF */);
            Hud.SwitchWidescreen(true /* ON */);
            if ($.player1.isInAnyCar()) {
              $.scplayer.setObjLeaveAnyCar();
            }
            Camera.SetFixedPosition(434.913, -575.577, 11.245, 0.0, 0.0, 0.0);
            Camera.PointAtPoint(433.925, -575.730, 11.256, 2 /* JUMP_CUT */); //Shot of Chef
            await asyncWait(2000);
            if (!(Char.IsDead($.ambush_bloke1))) {
              Camera.SetFixedPosition(431.418, -566.374, 16.361, 0.0, 0.0, 0.0);
              Camera.PointAtPoint(431.554, -567.186, 15.795, 2 /* JUMP_CUT */); //High shot of Chef
              if (!(Char.IsDead($.ambush_bloke1))) {
                $.ambush_bloke1.lookAtCharAlways($.scplayer);
                $.scplayer.lookAtCharAlways($.ambush_bloke1);
                $.ambush_bloke1.turnToFaceChar($.scplayer);
                $.scplayer.turnToFaceChar($.ambush_bloke1);
              }
              TIMERB = 0;
              while ($.player1.isInAnyCar()) {
                await asyncWait(0);
                if (TIMERB > 2000) {
                  $.player1.warpFromCarToCoord(428.4, -573.7, 9.7);
                }


              }
              $.scplayer.setObjGotoCoordOnFoot($.blokex, $.blokey); //433.0 -575.9
              $.first_part_of_chef_cut = 1;
            }
          }
        }
        if ($.first_part_of_chef_cut == 1) {
          if (!(Char.IsDead($.ambush_bloke1))) {
            if ($.first_two_samples == 0 && TIMERB > 0) {
              if ($.audio_is_loading == 0) {
                Audio.LoadMissionAudio(1, "LAW2_1" as any);
                Audio.LoadMissionAudio(2, "LAW2_2" as any);
                $.audio_is_loading = 1;
              }
              else {
                if (Audio.HasMissionAudioLoaded(1) && Audio.HasMissionAudioLoaded(2)) {
                  $.audio_has_loaded = 1;
                }
              }
              if ($.audio_has_loaded == 1) {
                $.player1.shutUp(true /* TRUE */);
                Audio.PlayMissionAudio(1);
                if (!(Char.IsDead($.ambush_bloke1))) {
                  $.ambush_bloke1.setAnsweringMobile(false /* FALSE */);
                }
                Text.PrintNow("LAW2_1", 2000, 2); //Whatchoo lookin at?
                $.ambush_bloke1.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000);
                $.controlmode = Pad.GetControllerMode();
                if (Audio.HasMissionAudioFinished(1)) {
                  $.ambush_bloke1.setWaitState(0 /* WAITSTATE_FALSE */, 100);
                  await asyncWait(500);
                  Audio.PlayMissionAudio(2);
                  Text.PrintNow("LAW2_2", 2000, 2); //You better start talking..
                  $.first_two_samples = 1;
                  $.audio_is_loading = 0;
                  $.audio_has_loaded = 0;
                  TIMERB = 0;
                }
              }
            }
            if (!(Char.IsDead($.ambush_bloke1))) {
              if ($.player1.locateAnyMeansChar3D($.ambush_bloke1, 0.7, 0.7, 2.0, false /* FALSE */)) {
                $.scplayer.setObjNoObj();
              }
            }
            if ($.first_two_samples == 1 && $.second_two_samples == 0 && TIMERB > 2000) {
              if ($.audio_is_loading == 0) {
                Audio.LoadMissionAudio(1, "LAW2_3" as any);
                $.audio_is_loading = 1;
              }
              else {
                if (Audio.HasMissionAudioLoaded(1)) {
                  $.audio_has_loaded = 1;
                }
              }
              if ($.audio_has_loaded == 1) {
                Audio.PlayMissionAudio(1);
                Text.PrintNow("LAW2_3", 2000, 2); //Make me, you prick!
                $.player1.setMood(PLAYER_MOOD_ANGRY, 60000);
                $.ambush_bloke1.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 1500);
                if (Audio.HasMissionAudioFinished(1)) {
                  $.player1.shutUp(false /* FALSE */);
                  $.first_two_samples = 1;
                  $.second_two_samples = 1;
                  $.audio_is_loading = 0;
                  $.audio_has_loaded = 0;
                  TIMERB = 0;
                  $.chef_cut_scene = 1;
                }
              }
            }
          }
        }


      }


    }
    else {
      if (set_players_control_back_on == 0) {
        if (!(Char.IsDead($.ambush_bloke1))) {
          $.ambush_bloke1.stopLooking();
          $.ambush_bloke1.setObjKillPlayerOnFoot($.player1);
          $.scplayer.setObjNoObj();
          $.ambush_bloke1.setWaitState(0 /* WAITSTATE_FALSE */, 0);
          $.controlmode = Pad.GetControllerMode();
          if ($.controlmode == 0 || $.controlmode == 1) {
            Text.PrintHelp("HELP17"); // "Press the ~o~| ~w~button to attack the chef."
          }
          if ($.controlmode == 2) {
            Text.PrintHelp("HELP18"); // "Press the~x~ / ~w~button to attack the chef."
          }
          if ($.controlmode == 3) {
            Text.PrintHelp("HELP55"); // "Press the ~h~R1~w~ button to attack the chef."
          }
        }
        $.player1.setControl(true /* ON */);
        Hud.SwitchWidescreen(false /* OFF */);
        Camera.RestoreJumpcut();
        Camera.SetBehindPlayer();
        set_players_control_back_on = 1;
      }
      if (!(Char.IsDead($.ambush_bloke1))) {
        if (!($.ambush_bloke1.locateOnFoot3D(433.7, -575.9, 9.7, 8.0, 8.0, 3.0, false /* FALSE */))) {
          if (on_the_phone_again == 0) {
            $.ambush_bloke1.setObjGotoCoordOnFoot(433.7, -575.9);
            on_the_phone_again = 1;
          }
        }
        else {
          if (on_the_phone_again == 1) {
            if ($.ambush_bloke1.isObjectivePassed()) {
              $.ambush_bloke1.setAnsweringMobile(true /* TRUE */);
              on_the_phone_again = 0;
            }
          }
        }
        if ($.player1.locateAnyMeans3D(433.7, -575.9, 9.7, 8.0, 8.0, 3.0, false /* FALSE */)) {
          $.ambush_bloke1.setAnsweringMobile(false /* FALSE */);
          $.ambush_bloke1.setObjKillPlayerOnFoot($.player1);
          on_the_phone_again = 0;
        }


      }


    }


  }


  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  Camera.RestoreJumpcut();
  Camera.SetBehindPlayer();
  $.scplayer.stopLooking();


  $.lawyer_blip1.remove();


  if (Char.DoesExist($.ambush_bloke1)) {
    const _res319 = World.GetDeadCharPickupCoords($.ambush_bloke1);
$.blokex = _res319.x;
$.blokey = _res319.y;
$.blokez = _res319.z;
    $.blokez = $.blokez + 0.5;
    players_cellphone = Pickup.Create(cellphone, 3 /* PICKUP_ONCE */, $.blokex, $.blokey, $.blokez);
  }
  else {
    players_cellphone = Pickup.Create(cellphone, 3 /* PICKUP_ONCE */, $.blokex, $.blokey, $.blokez);
  }


  players_cellphone_blip = Blip.AddForPickup(players_cellphone);


  Text.PrintNow("LAW2_11", 5000, 2); //Pick up his cell phone


  while (!(players_cellphone.hasBeenCollected())) {
    await asyncWait(0);


  }


  $.player1.setControl(false /* OFF */);
  Text.ClearThisPrint("LAW2_11");
  Text.PrintHelp("LAW2_12"); //1500 2  //Cell phone acquired


  players_cellphone_blip.remove();


  await asyncWait(1500);

  // ***************************************START MEET THE BUDDY**********************************************


  Camera.SetFadingColor(0, 0, 0);


  Camera.DoFade(1000, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Text.ClearHelp();


  $.ambush_bloke1.delete();



  $.lawyer_blip1.remove();


  $.breakout_timer_start = Clock.GetGameTimer();
  $.breakout_diff = 0;


  while (!($.player1.canStartMission()) && $.breakout_diff < 5000) {
    await asyncWait(0);
    $.breakout_timer = Clock.GetGameTimer();
    $.breakout_diff = $.breakout_timer - $.breakout_timer_start;
  }


  $.player1.makeSafeForCutscene();


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(false /* OFF */);


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSbuddy");
  Streaming.LoadSpecialModel(CUTOBJ01, "guncolt");


  Streaming.LoadScene(440.163, -567.622, 10.031);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasModelLoaded(CUTOBJ01))) {
    await asyncWait(0);


  }


  World.ClearArea($.blokex, $.blokey, $.blokez, 20.0, true /* TRUE */);


  Cutscene.Load("law_2c");
  Cutscene.SetOffset(440.163, -567.622, 10.031);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_buddy = CutsceneObject.Create(SPECIAL02);
  $.cs_buddy.setAnim("CSbuddy");


  cs_ganga = CutsceneObject.Create(SPECIAL03);
  cs_ganga.setAnim("chef01");


  cs_gangb = CutsceneObject.Create(SPECIAL03);
  cs_gangb.setAnim("chef02");


  cs_gangc = CutsceneObject.Create(SPECIAL03);
  cs_gangc.setAnim("chef03");


  cs_guncolt = CutsceneObject.Create(CUTOBJ01);
  cs_guncolt.setAnim("guncolt");


  if ($.player1.isInAnyCar()) {
    $.player1.warpFromCarToCoord(433.0, -574.5, 9.6);
  }
  else {
    $.player1.setCoordinates(433.0, -574.5, 9.6);
  }


  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 3050) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2C_A", 10000, 1); // Mission brief


  while ($.cs_time < 9000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2C_B", 10000, 1); // Mission brief


  while ($.cs_time < 10080) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2C_C", 10000, 1); // Mission brief


  while ($.cs_time < 13080) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2C_D", 10000, 1); // Mission brief


  while ($.cs_time < 14250) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2C_E", 10000, 1); // Mission brief


  while ($.cs_time < 21170) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2C_F", 10000, 1); // Mission brief


  while ($.cs_time < 23160) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2C_G", 10000, 1); // Mission brief


  while ($.cs_time < 28030) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2C_H", 10000, 1); // Mission brief


  while ($.cs_time < 34070) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2C_I", 10000, 1); // Mission brief


  while ($.cs_time < 36060) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2C_J", 10000, 1); // Mission brief


  while ($.cs_time < 39100) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW2C_K", 10000, 1); // Mission brief


  while ($.cs_time < 40100) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  while ($.cs_time < 40744) {
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
  //SET_CAMERA_IN_FRONT_OF_PLAYER


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);


  // ***************************************END MEET THE BUDDY**********************************************


  $.player1.setControl(false /* OFF */);


  Streaming.RequestModel(cleaver);
  Streaming.RequestModel(knifecur);


  while (!(Streaming.HasModelLoaded(cleaver)) || !(Streaming.HasModelLoaded(knifecur))) {
    await asyncWait(0);


  }


  if ($.player1.isInAnyCar()) {
    $.player1.warpFromCarToCoord(433.0, -574.5, 9.6);
  }
  else {
    $.player1.setCoordinates(433.0, -574.5, 9.6);
  }


  $.player1.setHeading(327.0);


  World.ClearArea(265.7, -929.3, 9.7, 4.0, false /* FALSE */);
  $.buddy = Char.Create(5 /* PEDTYPE_CIVFEMALE */, SPECIAL04, 433.1, -575.8, 9.6);
  $.buddy.setHeading(143.0);
  $.buddy.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.buddy.setAsPlayerFriend($.player1, true /* TRUE */);
  $.buddy.setNeverTargeted(true /* TRUE */);
  $.buddy.setSuffersCriticalHits(false /* FALSE */);
  $.buddy.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 9999);
  $.buddy_blip = Blip.AddForChar($.buddy);


  World.ClearArea(431.3, -655.4, 9.7, 6.0, false /* FALSE */);
  $.buddycar = Car.Create(infernus, 431.3, -655.4, 10.6);
  $.buddycar.setHealth(2000);
  $.buddycar.lockDoors(1 /* CARLOCK_UNLOCKED */);
  $.buddycar.setHeading(156.0);
  $.buddycar.changeColor(1 /* CARCOLOUR_WHITE */, 1 /* CARCOLOUR_WHITE */);

  // moved to wait until buddy is in the car

  $.buddycar_blip = Blip.AddForCar($.buddycar);


  $.buddy.setCantBeDraggedOut(true /* TRUE */);
  $.buddy.setStayInCarWhenJacked(true /* TRUE */);


  $.player1.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 34);
  $.player1.setCurrentWeapon(2 /* WEAPONTYPE_PISTOL */);


  World.ClearArea(439.0, -567.7, 9.6, 1.0, false /* FALSE */);
  $.ambush_bloke2 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, SPECIAL03, 439.2, -567.9, 9.6);
  $.ambush_bloke2.clearThreatSearch();
  $.ambush_bloke2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.ambush_bloke2.giveWeapon(WEAPONTYPE_CLEAVER, 0);
  $.ambush_bloke2.setHeading(154.0);


  World.ClearArea(437.4, -567.8, 9.6, 1.0, false /* FALSE */);
  $.ambush_bloke3 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, SPECIAL03, 438.2, -567.8, 9.6);
  $.ambush_bloke3.clearThreatSearch();
  $.ambush_bloke3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.ambush_bloke3.giveWeapon(WEAPONTYPE_KNIFE, 0);
  $.ambush_bloke3.setHeading(154.0);


  World.ClearArea(435.4, -566.2, 9.6, 1.0, false /* FALSE */);
  $.ambush_bloke4 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, SPECIAL03, 437.2, -567.4, 9.6);
  $.ambush_bloke4.clearThreatSearch();
  $.ambush_bloke4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.ambush_bloke4.giveWeapon(WEAPONTYPE_CLEAVER, 0);
  $.ambush_bloke4.setHeading(154.0);


  TIMERB = 0;


  Audio.LoadMissionAudio(1, "LAW2_4" as any);


  Hud.SwitchWidescreen(true /* ON */);


  await asyncWait(0);


  if (!(Char.IsDead($.ambush_bloke3))) {
    $.scplayer.setObjAimGunAtChar($.ambush_bloke3);
  }


  await asyncWait(500);


  Camera.DoFade(1500, 1 /* FADE_IN */);



  Camera.SetFixedPosition(430.001, -576.716, 11.667, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(430.808, -576.170, 11.442, 2 /* JUMP_CUT */);


  await asyncWait(1000);


  if (!(Char.IsDead($.buddy))) {
    $.buddy.setObjRunToCoord(421.0, -598.1);
  }


  await asyncWait(1000);


  Camera.SetFixedPosition(430.575, -575.370, 11.484, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(430.389, -576.350, 11.405, 2 /* JUMP_CUT */);


  if (Audio.HasMissionAudioLoaded(1)) {
    Audio.PlayMissionAudio(1);
  }
  Text.PrintNow("LAW2_4", 2000, 2); //This way


  await asyncWait(500);


  $.controlmode = Pad.GetControllerMode();
  if ($.controlmode == 0 || $.controlmode == 1) {
    Text.PrintHelp("GUN_2A"); // Hold the ~h~R1 ~w~button to ~h~auto-target~w~, press the ~o~| ~w~button to ~h~fire!
  }


  if ($.controlmode == 2) {
    Text.PrintHelp("GUN_2C"); // Hold the ~h~R1 ~w~button to ~h~auto-target~w~, press the ~x~/ ~w~button to ~h~fire!
  }


  if ($.controlmode == 3) {
    Text.PrintHelp("GUN_2D"); // Hold the ~h~L1 ~w~button to ~h~auto-target,~w~ press the ~h~R1 ~w~button to ~h~fire!
  }


  $.scplayer.setObjNoObj();
  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  Camera.RestoreJumpcut();


  if (Car.IsDead($.buddycar)) {
    // SCM GOTO → mission_lawyer2_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_lawyer2_failed"); // fallback: would break linear control flow
  }


  if (Char.IsDead($.buddy)) {
    Text.PrintNow("COK2_26", 5000, 2); //YOUR BUDDY IS DEAD!
    // SCM GOTO → mission_lawyer2_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_lawyer2_failed"); // fallback: would break linear control flow
  }


  TIMERB = 0;


  const _res320 = $.player1.getCoordinates();
$.player_x = _res320.x;
$.player_y = _res320.y;
$.player_z = _res320.z;
  Audio.SetRadioChannel(FEVER, -1);


  Audio.LoadMissionAudio(1, "lanamu1" as any);
  Audio.LoadMissionAudio(2, "lanamu2" as any);


  TIMERA = 0;


  while (!($.player1.isInCar($.buddycar)) || !($.buddy.isInCar($.buddycar))) {
    await asyncWait(0);
    if ($.played_sprint_help == 0) {
      if (TIMERA > 5000) {
        if ($.controlmode == 2) {
          Text.PrintHelp("HELP2A2"); // "Press the ~o~|~w~ button when running to ~h~sprint."
        }
        else {
          Text.PrintHelp("HELP2_A"); // "Press the ~x~/ ~w~button when running to ~h~sprint."
        }
        $.played_sprint_help = 1;
      }
    }
    if ($.played_sprint_help == 1) {
      if (TIMERA > 9000) {
        Text.PrintHelp("HELP3"); // "You can only sprint for short periods before becoming tired."
        $.played_sprint_help = 2;
      }
    }
    if (!(Char.IsDead($.buddy))) {
      if ($.buddy.locateAnyMeans3D(427.6, -584.7, 10.6, 1.0, 1.0, 5.0, false /* FALSE */)) {
        $.buddy.setObjRunToCoord(421.0, -598.1);
        $.buddy.setUsePednodeSeek(false /* FALSE */);
      }
      if ($.buddy.locateAnyMeans3D(421.0, -598.1, 10.6, 1.0, 1.0, 5.0, false /* FALSE */)) {
        $.buddy.setObjRunToCoord(413.3, -614.3);
        $.buddy.setUsePednodeSeek(false /* FALSE */);
      }
      if ($.buddy.locateAnyMeans3D(413.3, -614.3, 10.6, 1.0, 1.0, 5.0, false /* FALSE */)) {
        $.buddy.setObjRunToCoord(405.6, -632.4);
        $.buddy.setUsePednodeSeek(false /* FALSE */);
      }
      if ($.buddy.locateAnyMeans3D(405.6, -632.4, 10.6, 1.0, 1.0, 5.0, false /* FALSE */)) {
        $.buddy.setObjRunToCoord(429.1, -648.7);
        $.buddy.setUsePednodeSeek(false /* FALSE */);
      }
      if ($.buddy.locateAnyMeans3D(429.1, -648.7, 10.6, 1.0, 1.0, 5.0, false /* FALSE */)) {
        if ($.ran_to_last_coords == 0) {
          $.buddy.setObjRunToCoord(429.5, -653.7);
          $.buddy.setUsePednodeSeek(false /* FALSE */);
          $.ran_to_last_coords = 1;
        }
      }
      if (!(Car.IsDead($.buddycar))) {
        if ($.buddy.locateAnyMeans3D(429.5, -653.7, 10.6, 1.0, 1.0, 5.0, false /* FALSE */)) {
          $.buddy.clearThreatSearch();
          if (!($.buddy.isInCar($.buddycar))) {
            $.buddy.setObjEnterCarAsPassenger($.buddycar);
          }
        }
      }


    }
    if (Char.IsDead($.buddy)) {
      Text.PrintNow("COK2_26", 5000, 2); //YOUR BUDDY IS DEAD!
      // SCM GOTO → mission_lawyer2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_lawyer2_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.buddycar)) {
      // SCM GOTO → mission_lawyer2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_lawyer2_failed"); // fallback: would break linear control flow
    }
    if (TIMERB > 1000) {
      if (ambush_blokes_obj_set == 0) {
        if (!(Char.IsDead($.ambush_bloke2))) {
          $.ambush_bloke2.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.ambush_bloke2.setObjKillPlayerOnFoot($.player1);
        }
        if (!(Char.IsDead($.ambush_bloke3))) {
          $.ambush_bloke3.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.ambush_bloke3.setObjKillPlayerOnFoot($.player1);
        }
        if (!(Char.IsDead($.ambush_bloke4))) {
          $.ambush_bloke4.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.ambush_bloke4.setObjKillPlayerOnFoot($.player1);
        }
        ambush_blokes_obj_set = 1;
      }
      const _res321 = $.player1.getCoordinates();
$.player_x = _res321.x;
$.player_y = _res321.y;
$.player_z = _res321.z;
      if (!(Char.IsDead($.ambush_bloke2))) {
        if (!($.ambush_bloke2.isWanderPathClear($.player_x, $.player_y, $.player_z, 4.0))) {
          $.ambush_bloke2.followPath($.player_x, $.player_y, $.player_z, 2.0, Run);
        }
      }
      if (!(Char.IsDead($.ambush_bloke3))) {
        if (!($.ambush_bloke3.isWanderPathClear($.player_x, $.player_y, $.player_z, 4.0))) {
          $.ambush_bloke3.followPath($.player_x, $.player_y, $.player_z, 2.0, Run);
        }
      }
      if (!(Char.IsDead($.ambush_bloke4))) {
        if (!($.ambush_bloke4.isWanderPathClear($.player_x, $.player_y, $.player_z, 4.0))) {
          $.ambush_bloke4.followPath($.player_x, $.player_y, $.player_z, 2.0, Run);
        }
      }
      TIMERB = 0;


    }
    if (Char.IsDead($.ambush_bloke2) && $.ambush_bloke2_dead == 0) {
      counter_badguys++;
      $.ambush_bloke2_dead = 1;
    }
    if (Char.IsDead($.ambush_bloke3) && $.ambush_bloke3_dead == 0) {
      counter_badguys++;
      $.ambush_bloke3_dead = 1;
    }
    if (Char.IsDead($.ambush_bloke4) && $.ambush_bloke4_dead == 0) {
      counter_badguys++;
      $.ambush_bloke4_dead = 1;
    }
    if (!(Car.IsDead($.buddycar))) {
      if ($.player1.isInCar($.buddycar)) {
        if (!($.player1.locateAnyMeansChar3D($.buddy, 5.0, 5.0, 10.0, false /* FALSE */))) {
          if ($.buddy_blip_active == 0) {
            $.buddy_blip.remove();
            $.buddy_blip = Blip.AddForChar($.buddy);
            Text.PrintNow("LAW2_13", 5000, 2); //You've left lance
            $.buddy_blip_active = 1;
          }
        }
        else {
          if (!(Car.IsDead($.buddycar))) {
            if (!($.buddy.isInCar($.buddycar))) {
              $.buddy.setObjEnterCarAsPassenger($.buddycar);
            }
            if ($.player1.isInCar($.buddycar)) {
              $.buddy_blip.remove();
            }
            $.buddy_blip_active = 0;
          }
        }
      }
    }


  }


  $.buddycar_blip.remove();
  $.buddy_blip.remove();
  hotel_blip = Blip.AddSpriteForCoord($.ammu1X, $.ammu1Y, $.ammu1Z, RADAR_SPRITE_GUN);


  await asyncWait(1000);


  if (Audio.HasMissionAudioLoaded(1)) {
    Audio.PlayMissionAudio(1);
    Text.PrintNow("LAW2_16", 4000, 2); // One thing you gotta realise about this town. You gotta pack some heat.
  }


  await asyncWait(500);


  while (!(Audio.HasMissionAudioFinished(1))) {
    await asyncWait(0);


  }


  if (Audio.HasMissionAudioLoaded(2)) {
    Audio.PlayMissionAudio(2);
    Text.PrintNow("LAW2_17", 2000, 2); //C'mon, the local gun shop's a couple of blocks away.
  }

  //PRINT_NOW ( LAW2_14 ) 2500 2  //We gotta get the hell outta here!
  //ADD_BLIP_FOR_COORD -53.7 -1482.9 10.4 hotel_blip


  $.buddycar_blip_active = 1;


  await asyncWait(2000);


  $.gen_car3.switch(0);


  if (Char.IsDead($.buddy)) {
    Text.PrintNow("COK2_26", 5000, 2); //YOUR BUDDY IS DEAD!
    // SCM GOTO → mission_lawyer2_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_lawyer2_failed"); // fallback: would break linear control flow
  }


  if (Car.IsDead($.buddycar)) {
    // SCM GOTO → mission_lawyer2_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_lawyer2_failed"); // fallback: would break linear control flow
  }


  Text.PrintNow("LAW2_15", 10000, 2); //Drive to AMMUNATION


  TIMERA = 0;


  while (!($.player1.locateStoppedAnyMeans3D(-53.7, -1482.9, 10.4, 3.0, 4.0, 3.0, true /* TRUE */))) {
    await asyncWait(0);
    if (Char.IsDead($.buddy)) {
      Text.PrintNow("COK2_26", 5000, 2); //YOUR BUDDY IS DEAD!
      // SCM GOTO → mission_lawyer2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_lawyer2_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.buddycar)) {
      // SCM GOTO → mission_lawyer2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_lawyer2_failed"); // fallback: would break linear control flow
    }
    if (!($.player1.locateAnyMeansChar3D($.buddy, 10.0, 10.0, 10.0, false /* FALSE */))) {
      if ($.buddy_blip_active == 0) {
        $.buddy_blip.remove();
        $.buddy_blip = Blip.AddForChar($.buddy);
        Text.PrintNow("LAW2_13", 5000, 2); //You've left lance
        $.buddy_blip_active = 1;
      }
    }
    else {
      if (!(Car.IsDead($.buddycar))) {
        if (!($.buddy.isInCar($.buddycar))) {
          $.buddy.setObjEnterCarAsPassenger($.buddycar);
        }
        if ($.player1.isInCar($.buddycar)) {
          $.buddy_blip.remove();
        }
        $.buddy_blip_active = 0;
      }
    }
    if (!($.player1.isInCar($.buddycar))) {
      if (!($.buddy.isInCar($.buddycar))) {
        if ($.buddycar_blip_active == 0) {
          $.buddycar_blip.remove();
          $.buddycar_blip = Blip.AddForCar($.buddycar);
          $.buddycar_blip_active = 1;
        }
      }
    }
    else {
      if ($.buddycar_blip_active == 1) {
        $.buddycar_blip.remove();
        $.buddycar_blip_active = 0;
      }
    }
    if (TIMERB > 1000) {
      const _res322 = $.player1.getCoordinates();
$.player_x = _res322.x;
$.player_y = _res322.y;
$.player_z = _res322.z;
      if (!(Char.IsDead($.ambush_bloke2))) {
        if (!($.ambush_bloke2.isWanderPathClear($.player_x, $.player_y, $.player_z, 4.0))) {
          $.ambush_bloke2.followPath($.player_x, $.player_y, $.player_z, 2.0, Run);
        }
      }
      if (!(Char.IsDead($.ambush_bloke3))) {
        if (!($.ambush_bloke3.isWanderPathClear($.player_x, $.player_y, $.player_z, 4.0))) {
          $.ambush_bloke3.followPath($.player_x, $.player_y, $.player_z, 2.0, Run);
        }
      }
      if (!(Char.IsDead($.ambush_bloke4))) {
        if (!($.ambush_bloke4.isWanderPathClear($.player_x, $.player_y, $.player_z, 4.0))) {
          $.ambush_bloke4.followPath($.player_x, $.player_y, $.player_z, 2.0, Run);
        }
      }
      TIMERB = 0;


    }
    if (!(Char.IsDead($.ambush_bloke2))) {
      if (!($.player1.locateAnyMeansChar2D($.ambush_bloke2, 120.0, 120.0, false /* FALSE */))) {
        $.ambush_bloke2.markAsNoLongerNeeded();
      }
    }
    else {
      $.ambush_bloke2.markAsNoLongerNeeded();
    }
    if (!(Char.IsDead($.ambush_bloke3))) {
      if (!($.player1.locateAnyMeansChar2D($.ambush_bloke3, 120.0, 120.0, false /* FALSE */))) {
        $.ambush_bloke3.markAsNoLongerNeeded();
      }
    }
    else {
      $.ambush_bloke3.markAsNoLongerNeeded();
    }
    if (!(Char.IsDead($.ambush_bloke4))) {
      if (!($.player1.locateAnyMeansChar2D($.ambush_bloke4, 120.0, 120.0, false /* FALSE */))) {
        $.ambush_bloke4.markAsNoLongerNeeded();
      }
    }
    else {
      $.ambush_bloke4.markAsNoLongerNeeded();
    }


    if (gun_blip_help == 0) {
      if (TIMERA > 3000) {
        Text.PrintHelp("LAW3_15"); //Follow the ~h~Gun blip~w~ on the radar to find ~h~Ammu-Nation~w~.
        Hud.FlashObject(8 /* HUD_FLASH_RADAR */);
        while (!(TIMERA > 5000)) {
          await asyncWait(0);
          if (Char.IsDead($.buddy)) {
            Text.PrintNow("COK2_26", 5000, 2); //YOUR BUDDY IS DEAD!
            // SCM GOTO → mission_lawyer2_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_lawyer2_failed"); // fallback: would break linear control flow
          }
          if (Car.IsDead($.buddycar)) {
            // SCM GOTO → mission_lawyer2_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_lawyer2_failed"); // fallback: would break linear control flow
          }


        }
        Hud.FlashObject(-1);
        gun_blip_help = 1;
      }
    }


  }


  Audio.LoadMissionAudio(2, "LAW2_5" as any);


  hotel_blip.remove();


  if (!(Char.IsDead($.ammu_shop_bloke1))) {
    $.ammu_shop_bloke1.stopLooking();
  }


  $.player1.setControl(false /* OFF */);


  Camera.SetFixedPosition(-54.730, -1479.250, 11.418, 0.0, 0.0, 0.0); //
  Camera.PointAtPoint(-55.647, -1479.631, 11.299, 2 /* JUMP_CUT */);


  Text.PrintHelp("LAW3_11"); //Stand in the ~q~pink marker~w~ to view the weapons on offer.


  TIMERA = 0;


  while (!(TIMERA > 1000)) {
    await asyncWait(0);


  }


  while (!(TIMERA > 3000)) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → skip_passed_ammu_help (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_passed_ammu_help"); // fallback: would break linear control flow
    }


  }



  Camera.SetFixedPosition(-63.091, -1483.060, 12.398, 0.0, 0.0, 0.0); //
  Camera.PointAtPoint(-63.189, -1484.055, 12.396, 2 /* JUMP_CUT */);


  Text.PrintHelp("LAW3_12"); //You can select weapons using ~h~left~w~ or ~h~right~w~ on the ~h~directional button~w~


  TIMERA = 0;


  await asyncWait(500);


  while (!(TIMERA > 3500)) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      while (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
        await asyncWait(0);
        if (TIMERA > 3500) {
          // SCM GOTO → skip_passed_ammu_help (not lowered; manual jump required)
          throw new Error("unresolved GOTO skip_passed_ammu_help"); // fallback: would break linear control flow
        }


      }
      // SCM GOTO → skip_passed_ammu_help (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_passed_ammu_help"); // fallback: would break linear control flow
    }


  }


  Camera.SetFixedPosition(-61.233, -1482.864, 11.818, 0.0, 0.0, 0.0); //
  Camera.PointAtPoint(-61.601, -1483.793, 11.811, 2 /* JUMP_CUT */);


  Text.PrintHelp("LAW3_13"); //If you have enough cash you can buy weapons by pressing the ~x~/ button~w~


  TIMERA = 0;
  while (!(TIMERA > 4000)) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → skip_passed_ammu_help (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_passed_ammu_help"); // fallback: would break linear control flow
    }


  }


  Camera.SetFixedPosition(-68.227, -1479.893, 11.670, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-67.359, -1480.372, 11.544, 2 /* JUMP_CUT */);


  Text.PrintHelp("LAW3_14"); //You can exit the shop by pressing the ~t~" button~w~


  TIMERA = 0;
  while (!(TIMERA > 4000)) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → skip_passed_ammu_help (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_passed_ammu_help"); // fallback: would break linear control flow
    }


  }


  Camera.SetFixedPosition(-63.091, -1483.060, 12.398, 0.0, 0.0, 0.0); //
  Camera.PointAtPoint(-63.189, -1484.055, 12.396, 2 /* JUMP_CUT */);


  Text.PrintHelp("HELP46"); //There are eight different types of weapon.


  TIMERA = 0;
  while (!(TIMERA > 4000)) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → skip_passed_ammu_help (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_passed_ammu_help"); // fallback: would break linear control flow
    }


  }


  Camera.SetFixedPosition(-61.233, -1482.864, 11.818, 0.0, 0.0, 0.0); //
  Camera.PointAtPoint(-61.601, -1483.793, 11.811, 2 /* JUMP_CUT */);


  Text.PrintHelp("HELP47"); //You can carry one of each type of weapon at a time - one type of pistol, one type of shotgun.


  TIMERA = 0;
  while (!(TIMERA > 4000)) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → skip_passed_ammu_help (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_passed_ammu_help"); // fallback: would break linear control flow
    }


  }
}



async function skip_passed_ammu_help() {


  $.player1.setControl(true /* ON */);
  Camera.RestoreJumpcut();
  Camera.SetBehindPlayer();


  hotel_blip = Blip.AddForCoord(242.6, -1281.2, 10.0);
  Text.PrintNow("LAW2_10", 15000, 2); //Drive to the hotel


  if (Char.IsDead($.buddy)) {
    Text.PrintNow("COK2_26", 5000, 2); //YOUR BUDDY IS DEAD!
    // SCM GOTO → mission_lawyer2_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_lawyer2_failed"); // fallback: would break linear control flow
  }


  if (Car.IsDead($.buddycar)) {
    // SCM GOTO → mission_lawyer2_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_lawyer2_failed"); // fallback: would break linear control flow
  }

  //WHILE NOT LOCATE_CAR_3D buddycar 242.6 -1281.2 10.0 30.0 60.0 5.0 FALSE

  while (!($.buddycar.isInArea3D(272.8, -1341.5, 16.0, 212.5, -1280.0, 8.0, false /* FALSE */)) || !($.buddy.isSittingInCar($.buddycar)) || !($.scplayer.isSittingInCar($.buddycar))) {
    await asyncWait(0);
    if (Char.IsDead($.buddy)) {
      Text.PrintNow("COK2_26", 5000, 2); //YOUR BUDDY IS DEAD!
      // SCM GOTO → mission_lawyer2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_lawyer2_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.buddycar)) {
      // SCM GOTO → mission_lawyer2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_lawyer2_failed"); // fallback: would break linear control flow
    }
    if ($.buddycar.isInArea3D(272.9, -1220.6, 16.0, 212.5, -1280.0, 8.0, false /* FALSE */) && $.buddy.isSittingInCar($.buddycar) && $.scplayer.isSittingInCar($.buddycar)) {
      // SCM GOTO → warp_buddycar (not lowered; manual jump required)
      throw new Error("unresolved GOTO warp_buddycar"); // fallback: would break linear control flow
    }
    if (!($.player1.locateAnyMeansChar3D($.buddy, 10.0, 10.0, 10.0, false /* FALSE */))) {
      if ($.buddy_blip_active == 0) {
        $.buddy_blip.remove();
        $.buddy_blip = Blip.AddForChar($.buddy);
        Text.PrintNow("LAW2_13", 5000, 2); //You've left lance
        $.buddy_blip_active = 1;
      }
    }
    else {
      if (!(Car.IsDead($.buddycar))) {
        if (!($.buddy.isInCar($.buddycar))) {
          $.buddy.setObjEnterCarAsPassenger($.buddycar);
        }
        if ($.player1.isInCar($.buddycar)) {
          $.buddy_blip.remove();
        }
        $.buddy_blip_active = 0;
      }
    }
    if (!($.player1.isInCar($.buddycar))) {
      if (!($.buddy.isInCar($.buddycar))) {
        if ($.buddycar_blip_active == 0) {
          $.buddycar_blip.remove();
          $.buddycar_blip = Blip.AddForCar($.buddycar);
          $.buddycar_blip_active = 1;
        }
      }
    }
    else {
      if ($.buddycar_blip_active == 1) {
        $.buddycar_blip.remove();
        $.buddycar_blip_active = 0;
      }
    }
    if (TIMERB > 1000) {
      const _res323 = $.player1.getCoordinates();
$.player_x = _res323.x;
$.player_y = _res323.y;
$.player_z = _res323.z;
      if (!(Char.IsDead($.ambush_bloke2))) {
        if (!($.ambush_bloke2.isWanderPathClear($.player_x, $.player_y, $.player_z, 4.0))) {
          $.ambush_bloke2.followPath($.player_x, $.player_y, $.player_z, 2.0, Run);
        }
      }
      if (!(Char.IsDead($.ambush_bloke3))) {
        if (!($.ambush_bloke3.isWanderPathClear($.player_x, $.player_y, $.player_z, 4.0))) {
          $.ambush_bloke3.followPath($.player_x, $.player_y, $.player_z, 2.0, Run);
        }
      }
      if (!(Char.IsDead($.ambush_bloke4))) {
        if (!($.ambush_bloke4.isWanderPathClear($.player_x, $.player_y, $.player_z, 4.0))) {
          $.ambush_bloke4.followPath($.player_x, $.player_y, $.player_z, 2.0, Run);
        }
      }
      TIMERB = 0;


    }


  }
}



async function warp_buddycar() {


  Camera.DoFade(500, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }



  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);


  if (!(Car.IsDead($.buddycar))) {
    $.bud_heading = $.buddycar.getHeading();
  }


  if ($.buddycar.isInArea3D(272.8, -1341.5, 16.0, 212.5, -1280.0, 8.0, false /* FALSE */)) {
    if (!(Car.IsDead($.buddycar))) {
      $.buddycar.setCruiseSpeed(0.0);
      $.buddycar.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
      World.ClearArea(232.1, -1323.4, 10.9, 40.0, true /* TRUE */);
      $.buddycar.setCoordinates(236.7, -1308.2, -100.0);
      $.buddycar.setHeading(347.3);
      $.buddycar.setCruiseSpeed(20.0);
      $.buddycar.gotoCoordinates(242.35, -1279.9, 10.9);
      World.ClearArea(242.2, -1279.9, 10.9, 20.0, true /* TRUE */);
      World.ClearArea(247.264, -1281.508, 10.495, 40.0, false /* FALSE */);
      Camera.SetFixedPosition(239.295, -1283.295, 10.713, 0.0, 0.0, 0.0);
      Camera.PointAtPoint(239.799, -1282.436, 10.622, 2 /* JUMP_CUT */);
      $.drove_in_from_south = 1;
    }


  }
  else {
    if (!(Car.IsDead($.buddycar))) {
      $.buddycar.setCruiseSpeed(0.0);
      $.buddycar.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
      World.ClearArea(246.3, -1257.7, 10.9, 40.0, true /* TRUE */);
      $.buddycar.setCoordinates(246.3, -1257.7, -100.0);
      $.buddycar.setHeading(171.8);
      $.buddycar.setCruiseSpeed(20.0);
      $.buddycar.gotoCoordinates(242.2, -1279.9, 10.9);
      World.ClearArea(242.2, -1279.9, 10.9, 20.0, true /* TRUE */);
      World.ClearArea(247.264, -1281.508, 10.495, 40.0, false /* FALSE */);
      Camera.SetFixedPosition(237.960, -1286.392, 10.586, 0.0, 0.0, 0.0);
      Camera.PointAtPoint(238.473, -1285.534, 10.609, 2 /* JUMP_CUT */);
    }


  }


  Camera.DoFade(1000, 1 /* FADE_IN */);


  await asyncWait(3000);


  if (!(Car.IsDead($.buddycar))) {
    $.scplayer.setObjLeaveCar($.buddycar);
  }


  await asyncWait(1300);


  if (!(Char.IsDead($.buddy))) {
    $.buddy.setShuffleIntoDriversSeat();
  }


  if ($.drove_in_from_south == 0) {
    Camera.SetFixedPosition(237.787, -1282.583, 12.615, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(238.638, -1282.366, 12.135, 2 /* JUMP_CUT */);
  }
  else {
    Camera.SetFixedPosition(239.975, -1273.806, 12.873, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(240.511, -1274.468, 12.350, 2 /* JUMP_CUT */);
  }


  if (!(Char.IsDead($.buddy))) {
    $.player1.lookAtCharAlways($.buddy);
    $.buddy.lookAtCharAlways($.scplayer);
  }


  await asyncWait(1000);


  if (Audio.HasMissionAudioLoaded(2)) {
    Audio.PlayMissionAudio(2);
  }


  Text.PrintNow("LAW2_5", 4000, 2); //I'll be in touch



  await asyncWait(4000);


  if (!(Car.IsDead($.buddycar))) {
    World.ClearArea(200.2, -1460.3, 10.9, 40.0, false /* FALSE */);
    World.ClearArea(242.2, -1279.9, 10.9, 40.0, false /* FALSE */);
    World.ClearAreaOfCars(213.4, -1376.9, 0.0, 279.7, -1216.2, 30.0);
    if ($.drove_in_from_south == 0) {
      Camera.SetFixedPosition(245.135, -1276.517, 11.710, 0.0, 0.0, 0.0);
      Camera.PointAtPoint(244.775, -1277.430, 11.519, 2 /* JUMP_CUT */);
    }
    else {
      Camera.SetFixedPosition(242.804, -1271.559, 10.617, 0.0, 0.0, 0.0);
      Camera.PointAtPoint(242.975, -1272.544, 10.603, 2 /* JUMP_CUT */);
    }
    $.buddycar.gotoCoordinates(200.2, -1460.3, 10.9);
    $.buddycar.setCruiseSpeed(40.0);
    $.buddycar.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
    if (!(Char.IsDead($.buddy))) {
      $.buddy.stopLooking();
    }
  }


  TIMERB = 0;


  while (!($.buddycar.locate3D(200.2, -1460.3, 10.9, 4.0, 4.0, 4.0, false /* FALSE */))) {
    await asyncWait(0);
    if (TIMERB > 4000) {
      // SCM GOTO → delete_buddycar (not lowered; manual jump required)
      throw new Error("unresolved GOTO delete_buddycar"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.buddy)) {
      Text.PrintNow("COK2_26", 5000, 2); //YOUR BUDDY IS DEAD!
      // SCM GOTO → mission_lawyer2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_lawyer2_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.buddycar)) {
      // SCM GOTO → mission_lawyer2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_lawyer2_failed"); // fallback: would break linear control flow
    }


  }



  $.scplayer.stopLooking();
}



async function delete_buddycar() {


  Camera.RestoreJumpcut();


  $.buddycar.delete();
  // SCM GOTO → mission_lawyer2_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_lawyer2_passed"); // fallback: would break linear control flow
}



// Mission lawyer2 failed


async function onFailed() {
  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed"
}




// mission lawyer2 passed


async function mission_lawyer2_passed() {


  $.flag_lawyer_mission2_passed = 1;
  Audio.PlayMissionPassedTune(1);
  Text.PrintWithNumberBig("M_PASS", 200, 5000, 1); //"Mission Passed!"
  $.player1.clearWantedLevel();
  $.player1.addScore(200);
  Stat.RegisterMissionPassed("LAW_2");
  Stat.PlayerMadeProgress(1);
  // START_NEW_SCRIPT lawyer_mission3_loop
}




// mission cleanup


async function cleanup() {


  ONMISSION = 0;


  $.malibu_doors.delete();
  $.malibu_doors = ScriptObject.CreateNoOffset(od_clbdr_close, 490.34, -77.017, 11.598);
  $.malibu_doors.dontRemove();
  $.flag_malibu_doors_closed = 1;
  $.flag_malibu_doors_open = 0;
  $.flag_player_on_lawyer_2 = 0;
  $.flag_player_in_malibu = 0;
  $.timer_mobile_start = Clock.GetGameTimer();
  Streaming.MarkModelAsNoLongerNeeded(infernus);
  Streaming.MarkModelAsNoLongerNeeded(cleaver);
  Streaming.MarkModelAsNoLongerNeeded(173 /* colt45 */);
  Streaming.MarkModelAsNoLongerNeeded(cellphone);
  Streaming.MarkModelAsNoLongerNeeded(knifecur);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);
  Audio.ClearMissionAudio(1);
  Audio.ClearMissionAudio(2);
  kent_paul1.remove();
  $.lawyer_blip1.remove();
  $.buddy_blip.remove();
  hotel_blip.remove();
  $.gen_car3.switch(101);
  players_cellphone_blip.remove();
  players_cellphone.remove();
  $.buddycar_blip.remove();
  Mission.Finish();
}

export async function lawyer2() {
  // Mission start stuff


  await body();  // SCM GOSUB mission_start_lawyer2


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await onFailed();  // SCM GOSUB mission_lawyer2_failed
  }


  await cleanup();  // SCM GOSUB mission_cleanup_lawyer2





  // Variables for mission

  // VAR_INT played_buddy_sample1 ran_to_last_coords buddycar_blip_active played_sprint_help any_bike_lawyer2
  // VAR_INT ambush_bloke1 ambush_bloke2 ambush_bloke3 ambush_bloke4 ambush_bloke5 ambush_bloke6 ambush_bloke7
  // VAR_INT ambush_bloke1_dead ambush_bloke2_dead ambush_bloke3_dead ambush_bloke4_dead ambush_bloke5_dead
  // VAR_INT ambush_bloke6_dead ambush_bloke7_dead buddycar_blip chef_cut_scene first_part_of_chef_cut drove_in_from_south
  // VAR_FLOAT blokeX blokeY blokeZ bud_Heading
  // LVAR_INT cs_bounca cs_ganga cs_gangb cs_gangc hotel_blip set_buddys_threat short_malibu_cut gun_blip_help
  // LVAR_INT ambush_blokes_obj_set cs_guncolt players_cellphone players_cellphone_blip on_the_phone_again
  // LVAR_INT set_players_control_back_on counter_badguys kent_paul1

  // ***************************************Mission Start*************************************


}
