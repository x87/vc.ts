// Generated from main/lawyer4.sc

import { $ } from "../utils/vars.mts";

// *******************************************************************************************
// *******************************************************************************************
// *************************************Lawyer mission 4**************************************
// *******************************************RIOT********************************************
// *******************************************************************************************
// *******************************************************************************************
// *******************************************************************************************

async function body() {


  Stat.RegisterMissionGiven();
  ONMISSION = 1;
  // SCRIPT_NAME LAWYER4
  await asyncWait(0);


  Text.LoadMissionText("LAWYER4");
  Shortcut.SetDropoffPointForMission(110.6, -824.2, 9.6, 327.9);


  $.clothes_shopX = 95.4;
  $.clothes_shopY = -1135.5;
  $.clothes_shopZ = 9.4;
  $.audio_is_loading = 0;
  $.audio_has_loaded = 0;
  $.first_two_samples = 0;
  $.second_two_samples = 0;
  $.third_two_samples = 0;
  $.forth_two_samples = 0;
  $.fifth_two_samples = 0;
  $.player_killing_rioters = 0;
  $.help_for_biffs = 0;
  $.riot_in_progress = 0;
  $.gate_finished_opening = 0;
  $.company_blip_state = 0;
  $.riot_building_up = 0;
  noised_up_rioter1 = 0;
  noised_up_rioter2 = 0;
  noised_up_rioter3 = 0;
  noised_up_rioter4 = 0;
  noised_up_rioter5 = 0;
  noised_up_rioter6 = 0;
  noised_up_rioter7 = 0;
  noised_up_rioter8 = 0;
  noised_up_rioter9 = 0;
  noised_up_rioter10 = 0;
  noised_up_rioter11 = 0;
  noised_up_rioter12 = 0;
  noised_up_rioter13 = 0;
  noised_up_rioter14 = 0;
  noised_up_rioter15 = 0;
  noised_up_rioter16 = 0;
  $.noised_up_rioter17 = 0;
  $.noised_up_rioter18 = 0;
  $.noised_up_rioter19 = 0;
  $.noised_up_rioter20 = 0;
  $.noised_up_rioter21 = 0;
  $.skip_timer1_acive = 0;
  $.dead_rioter1 = 0;
  $.dead_rioter2 = 0;
  $.dead_rioter3 = 0;
  $.dead_rioter4 = 0;
  $.dead_rioter5 = 0;
  $.dead_rioter6 = 0;
  $.dead_rioter7 = 0;
  $.dead_rioter8 = 0;
  $.dead_rioter9 = 0;
  $.dead_rioter10 = 0;
  $.dead_rioter11 = 0;
  $.dead_rioter12 = 0;
  $.dead_rioter13 = 0;
  $.dead_rioter14 = 0;
  $.dead_rioter15 = 0;
  $.dead_rioter16 = 0;
  $.dead_rioter17 = 0;
  $.dead_rioter18 = 0;
  $.dead_rioter19 = 0;
  $.dead_rioter20 = 0;
  $.dead_rioter21 = 0;
  $.kill_off_riot_sound = 0;
  $.new_intensity = 127;
  $.dead_securi_guard1_drop = 0;
  $.dead_securi_guard2_drop = 0;


  Text.ClearHelp();


  $.clothes_cut_scene2_played = 0;


  if (!(Char.IsDead($.scplayer))) {
    $.scplayer.undress("player");
    Streaming.LoadAllModelsNow();
    if (!(Char.IsDead($.scplayer))) {
      $.scplayer.dress();
    }


  }


  Streaming.SetAreaVisible(6 /* VIS_LAWYERS */);


  Audio.LoadMissionAudio(1, "mono_8" as any);


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSken");
  Streaming.LoadSpecialCharacter(3, "CSavery");
  Streaming.LoadSpecialModel(CUTOBJ01, "lwchara");
  Streaming.LoadSpecialModel(CUTOBJ02, "lwcharb");
  Streaming.LoadSpecialModel(CUTOBJ03, "lcfan");
  Streaming.LoadSpecialModel(CUTOBJ04, "lawdoor");

  //LOAD_SCENE 1218.4 -314.5 28.9


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasModelLoaded(CUTOBJ01)) || !(Streaming.HasModelLoaded(CUTOBJ02)) || !(Streaming.HasModelLoaded(CUTOBJ03))) {
    await asyncWait(0);


  }


  while (!(Streaming.HasModelLoaded(CUTOBJ04))) {
    await asyncWait(0);


  }


  Streaming.LoadScene(140.6, -1367.4, 13.1);


  Cutscene.Load("law_4");
  Cutscene.SetOffset(141.441, -1366.722, 12.163);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_ken = CutsceneObject.Create(SPECIAL02);
  $.cs_ken.setAnim("CSken");


  $.cs_avery = CutsceneObject.Create(SPECIAL03);
  $.cs_avery.setAnim("CSavery");


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


  while ($.cs_time < 45) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW4_A", 10000, 1); // Mission brief


  while ($.cs_time < 4210) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW4_B", 10000, 1); // Mission brief


  while ($.cs_time < 7190) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW4_C", 10000, 1); // Mission brief


  while ($.cs_time < 8052) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW4_D", 10000, 1); // Mission brief


  while ($.cs_time < 9403) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW4_E", 10000, 1); // Mission brief


  while ($.cs_time < 13088) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW4_F", 10000, 1); // Mission brief


  while ($.cs_time < 15052) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW4_G", 10000, 1); // Mission brief


  while ($.cs_time < 19432) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW4_H", 10000, 1); // Mission brief


  while ($.cs_time < 23825) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW4_I", 10000, 1); // Mission brief


  while ($.cs_time < 26892) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW4_J", 10000, 1); // Mission brief


  while ($.cs_time < 32978) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW4_K", 10000, 1); // Mission brief


  while ($.cs_time < 34995) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW4_L", 10000, 1); // Mission brief


  while ($.cs_time < 40136) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW4_M", 10000, 1); // Mission brief


  while ($.cs_time < 46049) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW4_N", 10000, 1); // Mission brief


  while ($.cs_time < 48481) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW4_O", 10000, 1); // Mission brief


  while ($.cs_time < 52177) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW4_P", 10000, 1); // Mission brief


  while ($.cs_time < 56220) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW4_Q", 10000, 1); // Mission brief


  while ($.cs_time < 57286) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW4_R", 10000, 1); // Mission brief


  while ($.cs_time < 60052) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Camera.DoFade(1500, 0 /* FADE_OUT */);


  while ($.cs_time < 61052) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  await asyncWait(1000);


  if (!(Cutscene.WasSkipped())) {
    if (Audio.HasMissionAudioLoaded(1)) {
      Audio.PlayMissionAudio(1);
      while (!(Audio.HasMissionAudioFinished(1))) {
        await asyncWait(0);
      }
    }
  }


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();
  Camera.SetInFrontOfPlayer();



  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ02);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ03);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ04);


  Streaming.SetAreaVisible(0 /* VIS_MAIN_MAP */);
  Streaming.LoadScene(117.1, -825.6, 9.8);


  await asyncWait(500);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  $.clothes_pickup2.remove();


  $.player1.setMood(1 /* PLAYER_MOOD_PISSED_OFF */, 60000);


  Text.PrintNow("LAW1_1", 10000, 1); //GET A CHANGE OF CLOTHES


  $.colar_cuffs_blip = Blip.AddSpriteForCoord($.clothes_shopX, $.clothes_shopY, $.clothes_shopZ, 28 /* RADAR_SPRITE_TSHIRT */);


  $.lawyer_blip1 = Blip.AddForCoord(299.0, -314.6, 11.4);


  Streaming.RequestModel(spand);
  //REQUEST_MODEL HMYAP

  Streaming.LoadSpecialCharacter(4, "spandxa");
  Streaming.LoadSpecialCharacter(5, "spandxb");
  Streaming.RequestModel(nitestick);
  Streaming.RequestModel(GDa);
  Streaming.RequestModel(barrel4);
  Streaming.RequestModel(colt45);
  Streaming.RequestAnimation("riot");



  while (!(Streaming.HasSpecialCharacterLoaded(4)) || !(Streaming.HasSpecialCharacterLoaded(5)) || !(Streaming.HasAnimationLoaded("riot"))) {
    await asyncWait(0);


  }


  while (!(Streaming.HasModelLoaded(spand)) || !(Streaming.HasModelLoaded(nitestick)) || !(Streaming.HasModelLoaded(GDa)) || !(Streaming.HasModelLoaded(barrel4)) || !(Streaming.HasModelLoaded(colt45))) {
    await asyncWait(0);


  }


  // START OF MISSION



  while (!($.player1.locateAnyMeans3D(299.0, -314.6, 11.4, 70.0, 70.0, 30.0, false /* FALSE */))) {
    await asyncWait(0);
    if ($.clothes_cut_scene2_played == 0) {
      if ($.player1.locateOnFoot3D($.clothes_shopX, $.clothes_shopY, $.clothes_shopZ, 1.2, 1.2, 3.0, true /* TRUE */)) {
        await clothes_cut_scene2();  // SCM GOSUB clothes_cut_scene2
      }
    }


  }


  Game.SetRiotIntensity($.new_intensity);


  $.rioter1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL04, 304.7, -316.8, 10.9);
  $.rioter1.clearThreatSearch();
  $.rioter1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //SET_CHAR_HEADING rioter1 100.0

  $.rioter1.setOnlyDamagedByPlayer(true /* TRUE */);
  $.rioter1.setWaitState(29 /* WAITSTATE_RIOT */, 99999999);


  $.rioter2 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL05, 302.8, -318.8, 10.9);
  $.rioter2.clearThreatSearch();
  $.rioter2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //SET_CHAR_HEADING rioter2 100.0

  $.rioter2.setOnlyDamagedByPlayer(true /* TRUE */);
  $.rioter2.setWaitState(29 /* WAITSTATE_RIOT */, 99999999);


  $.rioter3 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL04, 301.6, -316.7, 10.9);
  $.rioter3.clearThreatSearch();
  $.rioter3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //SET_CHAR_HEADING rioter3 100.0

  $.rioter3.setOnlyDamagedByPlayer(true /* TRUE */);
  $.rioter3.setWaitState(29 /* WAITSTATE_RIOT */, 99999999);


  $.rioter4 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL05, 299.8, -318.2, 10.9);
  $.rioter4.clearThreatSearch();
  $.rioter4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //SET_CHAR_HEADING rioter4 100.0

  $.rioter4.setOnlyDamagedByPlayer(true /* TRUE */);
  $.rioter4.setWaitState(29 /* WAITSTATE_RIOT */, 99999999);


  $.rioter5 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL04, 300.9, -321.6, 10.9);
  $.rioter5.clearThreatSearch();
  $.rioter5.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //SET_CHAR_HEADING rioter5 100.0

  $.rioter5.setOnlyDamagedByPlayer(true /* TRUE */);
  $.rioter5.setWaitState(29 /* WAITSTATE_RIOT */, 99999999);


  $.rioter6 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL05, 299.0, -322.1, 10.9);
  $.rioter6.clearThreatSearch();
  $.rioter6.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //SET_CHAR_HEADING rioter6 100.0

  $.rioter6.setOnlyDamagedByPlayer(true /* TRUE */);
  $.rioter6.setWaitState(29 /* WAITSTATE_RIOT */, 99999999);


  $.rioter7 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL04, 295.0, -320.7, 10.9);
  $.rioter7.clearThreatSearch();
  $.rioter7.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //SET_CHAR_HEADING rioter7 100.0

  $.rioter7.setOnlyDamagedByPlayer(true /* TRUE */);
  $.rioter7.setWaitState(29 /* WAITSTATE_RIOT */, 99999999);


  $.rioter8 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL05, 293.5, -317.8, 10.9);
  $.rioter8.clearThreatSearch();
  $.rioter8.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //SET_CHAR_HEADING rioter8 100.0

  $.rioter8.setOnlyDamagedByPlayer(true /* TRUE */);
  $.rioter8.setWaitState(29 /* WAITSTATE_RIOT */, 99999999);


  $.rioter9 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL04, 296.2, -325.3, 10.9);
  $.rioter9.clearThreatSearch();
  $.rioter9.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //SET_CHAR_HEADING rioter9 100.0

  $.rioter9.setOnlyDamagedByPlayer(true /* TRUE */);
  $.rioter9.setWaitState(29 /* WAITSTATE_RIOT */, 99999999);


  $.rioter10 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL05, 299.3, -329.3, 10.9);
  $.rioter10.clearThreatSearch();
  $.rioter10.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //SET_CHAR_HEADING rioter10 100.0

  $.rioter10.setOnlyDamagedByPlayer(true /* TRUE */);
  $.rioter10.setWaitState(29 /* WAITSTATE_RIOT */, 99999999);


  $.rioter11 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL04, 303.8, -329.7, 10.9);
  $.rioter11.clearThreatSearch();
  $.rioter11.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //SET_CHAR_HEADING rioter11 100.0

  $.rioter11.setOnlyDamagedByPlayer(true /* TRUE */);
  $.rioter11.setWaitState(29 /* WAITSTATE_RIOT */, 99999999);


  $.rioter12 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL05, 308.5, -328.4, 10.9);
  $.rioter12.clearThreatSearch();
  $.rioter12.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //SET_CHAR_HEADING rioter12 100.0

  $.rioter12.setOnlyDamagedByPlayer(true /* TRUE */);
  $.rioter12.setWaitState(29 /* WAITSTATE_RIOT */, 99999999);


  $.rioter13 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL04, 310.2, -324.2, 10.9);
  $.rioter13.clearThreatSearch();
  $.rioter13.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //SET_CHAR_HEADING rioter13 100.0

  $.rioter13.setOnlyDamagedByPlayer(true /* TRUE */);
  $.rioter13.setWaitState(29 /* WAITSTATE_RIOT */, 99999999);


  $.rioter14 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL05, 305.6, -322.2, 10.9);
  $.rioter14.clearThreatSearch();
  $.rioter14.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //SET_CHAR_HEADING rioter14 100.0

  $.rioter14.setOnlyDamagedByPlayer(true /* TRUE */);
  $.rioter14.setWaitState(29 /* WAITSTATE_RIOT */, 99999999);


  $.rioter15 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL04, 300.0, -317.5, 10.9);
  $.rioter15.clearThreatSearch();
  $.rioter15.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //SET_CHAR_HEADING rioter15 100.0

  $.rioter15.setOnlyDamagedByPlayer(true /* TRUE */);
  $.rioter15.setWaitState(29 /* WAITSTATE_RIOT */, 99999999);


  $.rioter16 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL05, 294.9, -317.6, 10.9);
  $.rioter16.clearThreatSearch();
  $.rioter16.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //SET_CHAR_HEADING rioter16 100.0

  $.rioter16.setOnlyDamagedByPlayer(true /* TRUE */);
  $.rioter16.setWaitState(29 /* WAITSTATE_RIOT */, 99999999);


  $.rioter17 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL04, 291.0, -320.0, 10.9);
  $.rioter17.clearThreatSearch();
  $.rioter17.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //SET_CHAR_HEADING rioter17 100.0

  $.rioter17.setOnlyDamagedByPlayer(true /* TRUE */);
  $.rioter17.setWaitState(29 /* WAITSTATE_RIOT */, 99999999);


  $.rioter18 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL05, 293.0, -324.8, 10.9);
  $.rioter18.clearThreatSearch();
  $.rioter18.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //SET_CHAR_HEADING rioter18 100.0

  $.rioter18.setOnlyDamagedByPlayer(true /* TRUE */);
  $.rioter18.setWaitState(29 /* WAITSTATE_RIOT */, 99999999);


  $.rioter19 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL04, 291.6, -317.2, 10.9);
  $.rioter19.clearThreatSearch();
  $.rioter19.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //SET_CHAR_HEADING rioter19 100.0

  $.rioter19.setOnlyDamagedByPlayer(true /* TRUE */);
  $.rioter19.setWaitState(29 /* WAITSTATE_RIOT */, 99999999);


  $.rioter20 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL05, 301.1, -324.0, 10.9);
  $.rioter20.clearThreatSearch();
  $.rioter20.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //SET_CHAR_HEADING rioter20 100.0

  $.rioter20.setOnlyDamagedByPlayer(true /* TRUE */);
  $.rioter20.setWaitState(29 /* WAITSTATE_RIOT */, 99999999);


  $.rioter21 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL04, 297.6, -327.649, 10.9);
  $.rioter21.clearThreatSearch();
  $.rioter21.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //SET_CHAR_HEADING rioter21 100.0

  $.rioter21.setOnlyDamagedByPlayer(true /* TRUE */);
  $.rioter21.setWaitState(29 /* WAITSTATE_RIOT */, 99999999);


  $.securi_guard1 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, GDa, 301.2, -311.5, 10.9);
  $.securi_guard1.clearThreatSearch();
  $.securi_guard1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.securi_guard1.setHeading(180.0);
  $.securi_guard1.setOnlyDamagedByPlayer(true /* TRUE */);
  $.securi_guard1.giveWeapon(4 /* WEAPONTYPE_NIGHTSTICK */, 0);


  $.securi_guard2 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, GDa, 303.2, -311.5, 10.9);
  $.securi_guard2.clearThreatSearch();
  $.securi_guard2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.securi_guard2.setHeading(180.0);
  $.securi_guard2.setOnlyDamagedByPlayer(true /* TRUE */);
  $.securi_guard2.giveWeapon(4 /* WEAPONTYPE_NIGHTSTICK */, 0);


  $.securi_guard3 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, GDa, 304.0, -298.7, 10.9);
  $.securi_guard3.clearThreatSearch();
  $.securi_guard3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.securi_guard3.setHeading(180.0);
  $.securi_guard3.setOnlyDamagedByPlayer(true /* TRUE */);
  $.securi_guard3.setHealth(70);
  $.securi_guard3.giveWeapon(17 /* WEAPONTYPE_PISTOL */, 300);
  $.securi_guard3.setStayInSamePlace(true /* TRUE */);


  $.company_van1 = Car.Create(spand, 286.7, -302.1, 11.9);
  $.company_van1.setHeading(270.0);


  $.company_van2 = Car.Create(spand, 312.2, -304.7, 11.9);
  $.company_van2.setHeading(90.0);


  $.company_van3 = Car.Create(spand, 312.2, -300.7, 11.9);
  $.company_van3.setHeading(90.0);


  $.law4_barrel1 = ScriptObject.Create(barrel4, 309.3, -298.6, 10.9);
  $.law4_barrel2 = ScriptObject.Create(barrel4, 284.3, -312.4, 10.9);


  $.law4_barrel2.makeTargetable();
  $.law4_barrel1.makeTargetable();


  TIMERB = 0;


  while (!(Car.IsDead($.company_van1)) || !(Car.IsDead($.company_van2)) || !(Car.IsDead($.company_van3))) {
    await asyncWait(0);


    if (!(Char.IsDead($.rioter1))) {
      if (!($.rioter1.isHealthGreater(99)) && noised_up_rioter1 == 0 && $.riot_in_progress == 0) {
        $.riot_building_up++;
        $.rioter1.clearWaitState();
        $.rioter1.setObjKillPlayerOnFoot($.player1);
        noised_up_rioter1 = 1;
      }
    }
    else {
      if ($.dead_rioter1 == 0) {
        $.player_killing_rioters++;
        await new_intensity();  // SCM GOSUB new_intensity
        $.dead_rioter1 = 1;
      }
    }
    if (!(Char.IsDead($.rioter2))) {
      if (!($.rioter2.isHealthGreater(99)) && noised_up_rioter2 == 0 && $.riot_in_progress == 0) {
        $.riot_building_up++;
        $.rioter2.clearWaitState();
        $.rioter2.setObjKillPlayerOnFoot($.player1);
        noised_up_rioter2 = 1;
      }
    }
    else {
      if ($.dead_rioter2 == 0) {
        $.player_killing_rioters++;
        await new_intensity();  // SCM GOSUB new_intensity
        $.dead_rioter2 = 1;
      }
    }
    if (!(Char.IsDead($.rioter3))) {
      if (!($.rioter3.isHealthGreater(99)) && noised_up_rioter3 == 0 && $.riot_in_progress == 0) {
        $.riot_building_up++;
        $.rioter3.clearWaitState();
        $.rioter3.setObjKillPlayerOnFoot($.player1);
        noised_up_rioter3 = 1;
      }
    }
    else {
      if ($.dead_rioter3 == 0) {
        $.player_killing_rioters++;
        await new_intensity();  // SCM GOSUB new_intensity
        $.dead_rioter3 = 1;
      }
    }
    if (!(Char.IsDead($.rioter4))) {
      if (!($.rioter4.isHealthGreater(99)) && noised_up_rioter4 == 0 && $.riot_in_progress == 0) {
        $.riot_building_up++;
        $.rioter4.clearWaitState();
        $.rioter4.setObjKillPlayerOnFoot($.player1);
        noised_up_rioter4 = 1;
      }
    }
    else {
      if ($.dead_rioter4 == 0) {
        $.player_killing_rioters++;
        await new_intensity();  // SCM GOSUB new_intensity
        $.dead_rioter4 = 1;
      }
    }
    if (!(Char.IsDead($.rioter5))) {
      if (!($.rioter5.isHealthGreater(99)) && noised_up_rioter5 == 0 && $.riot_in_progress == 0) {
        $.riot_building_up++;
        $.rioter5.clearWaitState();
        $.rioter5.setObjKillPlayerOnFoot($.player1);
        noised_up_rioter5 = 1;
      }
    }
    else {
      if ($.dead_rioter5 == 0) {
        $.player_killing_rioters++;
        await new_intensity();  // SCM GOSUB new_intensity
        $.dead_rioter5 = 1;
      }
    }
    if (!(Char.IsDead($.rioter6))) {
      if (!($.rioter6.isHealthGreater(99)) && noised_up_rioter6 == 0 && $.riot_in_progress == 0) {
        $.riot_building_up++;
        $.rioter6.clearWaitState();
        $.rioter6.setObjKillPlayerOnFoot($.player1);
        noised_up_rioter6 = 1;
      }
    }
    else {
      if ($.dead_rioter6 == 0) {
        $.player_killing_rioters++;
        await new_intensity();  // SCM GOSUB new_intensity
        $.dead_rioter6 = 1;
      }
    }
    if (!(Char.IsDead($.rioter7))) {
      if (!($.rioter7.isHealthGreater(99)) && noised_up_rioter7 == 0 && $.riot_in_progress == 0) {
        $.riot_building_up++;
        $.rioter7.clearWaitState();
        $.rioter7.setObjKillPlayerOnFoot($.player1);
        noised_up_rioter7 = 1;
      }
    }
    else {
      if ($.dead_rioter7 == 0) {
        $.player_killing_rioters++;
        await new_intensity();  // SCM GOSUB new_intensity
        $.dead_rioter7 = 1;
      }
    }
    if (!(Char.IsDead($.rioter8))) {
      if (!($.rioter8.isHealthGreater(99)) && noised_up_rioter8 == 0 && $.riot_in_progress == 0) {
        $.riot_building_up++;
        $.rioter8.clearWaitState();
        $.rioter8.setObjKillPlayerOnFoot($.player1);
        noised_up_rioter8 = 1;
      }
    }
    else {
      if ($.dead_rioter8 == 0) {
        $.player_killing_rioters++;
        await new_intensity();  // SCM GOSUB new_intensity
        $.dead_rioter8 = 1;
      }
    }
    if (!(Char.IsDead($.rioter9))) {
      if (!($.rioter9.isHealthGreater(99)) && noised_up_rioter9 == 0 && $.riot_in_progress == 0) {
        $.riot_building_up++;
        $.rioter9.clearWaitState();
        $.rioter9.setObjKillPlayerOnFoot($.player1);
        noised_up_rioter9 = 1;
      }
    }
    else {
      if ($.dead_rioter9 == 0) {
        $.player_killing_rioters++;
        await new_intensity();  // SCM GOSUB new_intensity
        $.dead_rioter9 = 1;
      }
    }
    if (!(Char.IsDead($.rioter10))) {
      if (!($.rioter10.isHealthGreater(99)) && noised_up_rioter10 == 0 && $.riot_in_progress == 0) {
        $.riot_building_up++;
        $.rioter10.clearWaitState();
        $.rioter10.setObjKillPlayerOnFoot($.player1);
        noised_up_rioter10 = 1;
      }
    }
    else {
      if ($.dead_rioter10 == 0) {
        $.player_killing_rioters++;
        await new_intensity();  // SCM GOSUB new_intensity
        $.dead_rioter10 = 1;
      }
    }
    if (!(Char.IsDead($.rioter11))) {
      if (!($.rioter11.isHealthGreater(99)) && noised_up_rioter11 == 0 && $.riot_in_progress == 0) {
        $.riot_building_up++;
        $.rioter11.clearWaitState();
        $.rioter11.setObjKillPlayerOnFoot($.player1);
        noised_up_rioter11 = 1;
      }
    }
    else {
      if ($.dead_rioter11 == 0) {
        $.player_killing_rioters++;
        await new_intensity();  // SCM GOSUB new_intensity
        $.dead_rioter11 = 1;
      }
    }
    if (!(Char.IsDead($.rioter12))) {
      if (!($.rioter12.isHealthGreater(99)) && noised_up_rioter12 == 0 && $.riot_in_progress == 0) {
        $.riot_building_up++;
        $.rioter12.clearWaitState();
        $.rioter12.setObjKillPlayerOnFoot($.player1);
        noised_up_rioter12 = 1;
      }
    }
    else {
      if ($.dead_rioter12 == 0) {
        $.player_killing_rioters++;
        await new_intensity();  // SCM GOSUB new_intensity
        $.dead_rioter12 = 1;
      }
    }
    if (!(Char.IsDead($.rioter13))) {
      if (!($.rioter13.isHealthGreater(99)) && noised_up_rioter13 == 0 && $.riot_in_progress == 0) {
        $.riot_building_up++;
        $.rioter13.clearWaitState();
        $.rioter13.setObjKillPlayerOnFoot($.player1);
        noised_up_rioter13 = 1;
      }
    }
    else {
      if ($.dead_rioter13 == 0) {
        $.player_killing_rioters++;
        await new_intensity();  // SCM GOSUB new_intensity
        $.dead_rioter13 = 1;
      }
    }
    if (!(Char.IsDead($.rioter14))) {
      if (!($.rioter14.isHealthGreater(99)) && noised_up_rioter14 == 0 && $.riot_in_progress == 0) {
        $.riot_building_up++;
        $.rioter14.clearWaitState();
        $.rioter14.setObjKillPlayerOnFoot($.player1);
        noised_up_rioter14 = 1;
      }
    }
    else {
      if ($.dead_rioter14 == 0) {
        $.player_killing_rioters++;
        await new_intensity();  // SCM GOSUB new_intensity
        $.dead_rioter14 = 1;
      }
    }
    if (!(Char.IsDead($.rioter15))) {
      if (!($.rioter15.isHealthGreater(99)) && noised_up_rioter15 == 0 && $.riot_in_progress == 0) {
        $.riot_building_up++;
        $.rioter15.clearWaitState();
        $.rioter15.setObjKillPlayerOnFoot($.player1);
        noised_up_rioter15 = 1;
      }
    }
    else {
      if ($.dead_rioter15 == 0) {
        $.player_killing_rioters++;
        await new_intensity();  // SCM GOSUB new_intensity
        $.dead_rioter15 = 1;
      }
    }
    if (!(Char.IsDead($.rioter16))) {
      if (!($.rioter16.isHealthGreater(99)) && noised_up_rioter16 == 0 && $.riot_in_progress == 0) {
        $.riot_building_up++;
        $.rioter16.clearWaitState();
        $.rioter16.setObjKillPlayerOnFoot($.player1);
        noised_up_rioter16 = 1;
      }
    }
    else {
      if ($.dead_rioter16 == 0) {
        $.player_killing_rioters++;
        await new_intensity();  // SCM GOSUB new_intensity
        $.dead_rioter16 = 1;
      }
    }
    if (!(Char.IsDead($.rioter17))) {
      if (!($.rioter17.isHealthGreater(99)) && $.noised_up_rioter17 == 0 && $.riot_in_progress == 0) {
        $.riot_building_up++;
        $.rioter17.clearWaitState();
        $.rioter17.setObjKillPlayerOnFoot($.player1);
        $.noised_up_rioter17 = 1;
      }
    }
    else {
      if ($.dead_rioter17 == 0) {
        $.player_killing_rioters++;
        await new_intensity();  // SCM GOSUB new_intensity
        $.dead_rioter17 = 1;
      }
    }
    if (!(Char.IsDead($.rioter18))) {
      if (!($.rioter18.isHealthGreater(99)) && $.noised_up_rioter18 == 0 && $.riot_in_progress == 0) {
        $.riot_building_up++;
        $.rioter18.clearWaitState();
        $.rioter18.setObjKillPlayerOnFoot($.player1);
        $.noised_up_rioter18 = 1;
      }
    }
    else {
      if ($.dead_rioter18 == 0) {
        $.player_killing_rioters++;
        await new_intensity();  // SCM GOSUB new_intensity
        $.dead_rioter18 = 1;
      }
    }
    if (!(Char.IsDead($.rioter19))) {
      if (!($.rioter19.isHealthGreater(99)) && $.noised_up_rioter19 == 0 && $.riot_in_progress == 0) {
        $.riot_building_up++;
        $.rioter19.clearWaitState();
        $.rioter19.setObjKillPlayerOnFoot($.player1);
        $.noised_up_rioter19 = 1;
      }
    }
    else {
      if ($.dead_rioter19 == 0) {
        $.player_killing_rioters++;
        await new_intensity();  // SCM GOSUB new_intensity
        $.dead_rioter19 = 1;
      }
    }
    if (!(Char.IsDead($.rioter20))) {
      if (!($.rioter20.isHealthGreater(99)) && $.noised_up_rioter20 == 0 && $.riot_in_progress == 0) {
        $.riot_building_up++;
        $.rioter20.clearWaitState();
        $.rioter20.setObjKillPlayerOnFoot($.player1);
        $.noised_up_rioter20 = 1;
      }
    }
    else {
      if ($.dead_rioter20 == 0) {
        $.player_killing_rioters++;
        await new_intensity();  // SCM GOSUB new_intensity
        $.dead_rioter20 = 1;
      }
    }
    if (!(Char.IsDead($.rioter21))) {
      if (!($.rioter21.isHealthGreater(99)) && $.noised_up_rioter21 == 0 && $.riot_in_progress == 0) {
        $.riot_building_up++;
        $.rioter21.clearWaitState();
        $.rioter21.setObjKillPlayerOnFoot($.player1);
        $.noised_up_rioter21 = 1;
      }
    }
    else {
      if ($.dead_rioter21 == 0) {
        $.player_killing_rioters++;
        await new_intensity();  // SCM GOSUB new_intensity
        $.dead_rioter21 = 1;
      }
    }
    if ($.riot_in_progress == 0) {
      if ($.riot_building_up > 3) {
        await start_the_riot();  // SCM GOSUB start_the_riot
      }
      if ($.player_killing_rioters > 2) {
        //clothes_cut_scene2_played = 0
        await start_the_riot();  // SCM GOSUB start_the_riot
      }
    }
    if ($.player_killing_rioters > 14) {
      if ($.kill_off_riot_sound == 0) {
        Game.SetRiotIntensity(0);
        $.kill_off_riot_sound = 1;
      }
    }
    if ($.riot_in_progress == 0) {
      if ($.clothes_cut_scene2_played == 0) {
        if ($.player1.locateOnFoot3D($.clothes_shopX, $.clothes_shopY, $.clothes_shopZ, 1.2, 1.2, 3.0, true /* TRUE */)) {
          await clothes_cut_scene2();  // SCM GOSUB clothes_cut_scene2
        }
      }
    }
    if (Char.IsDead($.securi_guard1)) {
      if ($.dead_securi_guard1_drop == 0) {
        if (Char.DoesExist($.securi_guard1)) {
          const _res328 = World.GetDeadCharPickupCoords($.securi_guard1);
$.guard_pickupx = _res328.x;
$.guard_pickupy = _res328.y;
$.guard_pickupz = _res328.z;
          $.guard_pickupz = $.guard_pickupz + 0.5;
          $.securi_guard1_gun = Pickup.CreateWithAmmo(colt45, 3 /* PICKUP_ONCE */, 17, $.guard_pickupx, $.guard_pickupy, $.guard_pickupz);
        }
        $.dead_securi_guard1_drop = 1;
      }
    }
    if (Char.IsDead($.securi_guard2)) {
      if ($.dead_securi_guard2_drop == 0) {
        if (Char.DoesExist($.securi_guard2)) {
          const _res329 = World.GetDeadCharPickupCoords($.securi_guard2);
$.guard_pickupx = _res329.x;
$.guard_pickupy = _res329.y;
$.guard_pickupz = _res329.z;
          $.guard_pickupz = $.guard_pickupz + 0.5;
          $.securi_guard2_gun = Pickup.CreateWithAmmo(colt45, 3 /* PICKUP_ONCE */, 17, $.guard_pickupx, $.guard_pickupy, $.guard_pickupz);
        }
        $.dead_securi_guard2_drop = 1;
      }
    }
    if ($.riot_in_progress == 1) {
      if (TIMERB > 2000) {
        if ($.gate_finished_opening == 0) {
          if (!(Char.IsDead($.securi_guard1)) || !(Char.IsDead($.securi_guard2))) {
            $.player1.setControl(false /* OFF */);
            Hud.SwitchWidescreen(true /* ON */);
            Audio.LoadMissionAudio(1, "LAW4_10" as any); //Rich management suck!  ???
            Camera.SetFixedPosition(303.649, -309.100, 13.430, 0.0, 0.0, 0.0);
            Camera.PointAtPoint(303.292, -309.982, 13.122, 2 /* JUMP_CUT */);
            await asyncWait(500);
            while (!(Audio.HasMissionAudioLoaded(1))) {
              await asyncWait(0);


            }



            if (Audio.HasMissionAudioLoaded(1)) {
              Audio.PlayMissionAudio(1);
              Text.PrintNow("LAW4_5", 2000, 1); //Sticks out boys! Let's crack some commie skulls!
            }


          }
          $.lawyer_blip1.remove();
          $.colar_cuffs_blip.remove();
          if (!(Car.IsDead($.company_van1))) {
            $.company_van_blip1 = Blip.AddForCar($.company_van1);
          }
          if (!(Car.IsDead($.company_van2))) {
            $.company_van_blip2 = Blip.AddForCar($.company_van2);
          }
          if (!(Car.IsDead($.company_van3))) {
            $.company_van_blip3 = Blip.AddForCar($.company_van3);
          }
          Sound.AddOneOffSound(298.0, -313.6, 11.0, 3 /* SOUND_POLICE_CELL_DOOR_CLUNK */);
          $.gate_slide_loop = Sound.AddContinuous(298.0, -313.6, 11.0, 2 /* SOUND_POLICE_CELL_DOOR_SLIDING_LOOP */);
          while (!($.strike_gate.slide(304.0, -313.6, 11.0, 0.1, 0.1, 0.0, false /* FALSE */))) {
            await asyncWait(0);
          }
          $.gate_slide_loop.remove();
          Sound.AddOneOffSound(304.0, -313.6, 11.0, 3 /* SOUND_POLICE_CELL_DOOR_CLUNK */);
          if (!(Char.IsDead($.securi_guard1))) {
            $.securi_guard1.setPersonality(30 /* PEDSTAT_PSYCHO */);
            $.securi_guard1.setThreatSearch(16 /* THREAT_CIVMALE */);
            $.securi_guard1.setThreatSearch(1 /* THREAT_PLAYER1 */);
          }
          if (!(Char.IsDead($.securi_guard2))) {
            $.securi_guard2.setPersonality(30 /* PEDSTAT_PSYCHO */);
            $.securi_guard2.setThreatSearch(16 /* THREAT_CIVMALE */);
            $.securi_guard2.setThreatSearch(1 /* THREAT_PLAYER1 */);
          }
          if (!(Char.IsDead($.securi_guard3))) {
            //SET_CHAR_PERSONALITY securi_guard3 PEDSTAT_PSYCHO
            $.securi_guard3.setThreatSearch(1 /* THREAT_PLAYER1 */);
            $.securi_guard3.setAccuracy(10);
          }
          if (!(Char.IsDead($.securi_guard1)) || !(Char.IsDead($.securi_guard2))) {
            $.player1.setControl(true /* ON */);
            Hud.SwitchWidescreen(false /* OFF */);
            Camera.RestoreJumpcut();
            Camera.SetBehindPlayer();
          }
          Text.PrintNow("LAW4_14", 8000, 1); //Destory the vans
          $.gate_finished_opening = 1;


        }
      }


    }
    else {
      if ($.player1.locateOnFoot3D(299.0, -314.6, 11.4, 20.0, 20.0, 10.0, false /* FALSE */)) {
        if ($.first_two_samples == 0 && TIMERB > 6000) {
          if ($.audio_is_loading == 0) {
            Audio.LoadMissionAudio(1, "LAW4_1a" as any);
            Audio.LoadMissionAudio(2, "LAW4_1b" as any);
            $.audio_is_loading = 1;
          }
          else {
            if (Audio.HasMissionAudioLoaded(1) && Audio.HasMissionAudioLoaded(2)) {
              $.audio_has_loaded = 1;
            }
          }
          if ($.audio_has_loaded == 1) {
            Audio.PlayMissionAudio(1);
            Text.PrintNow("LAW4_1", 3000, 1); //Please disperse. The management will discuss any grievances in the appropriate manner!
            if (Audio.HasMissionAudioFinished(1) && TIMERB > 19000) {
              Audio.PlayMissionAudio(2); //Go back to your homes!
              Text.PrintNow("LAW4_2", 3000, 1);
              $.first_two_samples = 1;
              $.second_two_samples = 0;
              $.audio_is_loading = 0;
              $.audio_has_loaded = 0;
              TIMERB = 0;
            }
          }
        }
        if ($.first_two_samples == 1 && $.second_two_samples == 0 && TIMERB > 10000) {
          if ($.audio_is_loading == 0) {
            Audio.LoadMissionAudio(1, "LAW4_1c" as any);
            Audio.LoadMissionAudio(2, "LAW4_1d" as any);
            $.audio_is_loading = 1;
          }
          else {
            if (Audio.HasMissionAudioLoaded(1) && Audio.HasMissionAudioLoaded(2)) {
              $.audio_has_loaded = 1;
            }
          }
          if ($.audio_has_loaded == 1) {
            Audio.PlayMissionAudio(1);
            Text.PrintNow("LAW4_3", 2000, 1); //This is inapropriate!
            if (Audio.HasMissionAudioFinished(1) && TIMERB > 23000) {
              Audio.PlayMissionAudio(2);
              Text.PrintNow("LAW4_4", 2000, 1); //You will all end up pawpers!
              $.second_two_samples = 1;
              $.first_two_samples = 0;
              $.audio_is_loading = 0;
              $.audio_has_loaded = 0;
              TIMERB = 0;
            }
          }
        }


      }
    }
    if ($.help_for_biffs == 0) {
      if ($.player1.isInArea3D(315.9, -313.0, 9.0, 282.4, -297.7, 15.0, false /* FALSE */)) {
        if (!(Char.IsDead($.securi_guard3))) {
          $.player1.setControl(false /* OFF */);
          Camera.SetFixedPosition(301.571, -303.655, 15.242, 0.0, 0.0, 0.0);
          Camera.PointAtPoint(302.286, -303.089, 14.833, 2 /* JUMP_CUT */);
        }
        Text.PrintHelp("HELP38"); //If you take out someone who's holding a weapon, they will drop it
        await asyncWait(500);
        TIMERA = 0;
        while (!(TIMERA > 2500)) {
          await asyncWait(0);
          if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
            while (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
              await asyncWait(0);
              if (TIMERA > 2500) {
                // SCM GOTO → skip_to_end_biff (not lowered; manual jump required)
                throw new Error("unresolved GOTO skip_to_end_biff"); // fallback: would break linear control flow
              }


            }
            // SCM GOTO → skip_to_end_biff (not lowered; manual jump required)
            throw new Error("unresolved GOTO skip_to_end_biff"); // fallback: would break linear control flow
          }


        }
        TIMERA = 0;
        Text.PrintHelp("HELP39"); //You can target and shoot explosive barrels but keep your distance


        while (!(TIMERA > 3500)) {
          await asyncWait(0);
          if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
            while (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
              await asyncWait(0);
              if (TIMERA > 3500) {
                // SCM GOTO → skip_to_end_biff (not lowered; manual jump required)
                throw new Error("unresolved GOTO skip_to_end_biff"); // fallback: would break linear control flow
              }


            }
            // SCM GOTO → skip_to_end_biff (not lowered; manual jump required)
            throw new Error("unresolved GOTO skip_to_end_biff"); // fallback: would break linear control flow
          }


        }
        // SCM label skip_to_end_biff
        $.player1.setControl(true /* ON */);
        Camera.RestoreJumpcut();
        Camera.SetBehindPlayer();
        if (!(Char.IsDead($.securi_guard3))) {
          $.securi_guard3.setStayInSamePlace(false /* FALSE */);
        }
        $.controlmode = Pad.GetControllerMode();
        if ($.controlmode == 3) {
          Text.PrintHelp("HELP58"); // While targeting you can press the ~h~L2 button or R2 ~w~button to cycle through targets.
        }
        else {
          Text.PrintHelp("HELP59"); // While targeting you can press the ~h~L1 button, L2 button or R2 ~w~button to cycle through targets.
        }
        if ($.gate_finished_opening == 0) {
          if (!(Char.IsDead($.securi_guard1))) {
            $.securi_guard1.setPersonality(30 /* PEDSTAT_PSYCHO */);
            $.securi_guard1.setThreatSearch(1 /* THREAT_PLAYER1 */);
            $.securi_guard1.setObjKillPlayerOnFoot($.player1);
          }
          if (!(Char.IsDead($.securi_guard2))) {
            $.securi_guard2.setPersonality(30 /* PEDSTAT_PSYCHO */);
            $.securi_guard2.setThreatSearch(1 /* THREAT_PLAYER1 */);
            $.securi_guard2.setObjKillPlayerOnFoot($.player1);
          }
          if (!(Char.IsDead($.securi_guard3))) {
            $.securi_guard3.setThreatSearch(1 /* THREAT_PLAYER1 */);
            $.securi_guard3.setAccuracy(10);
          }
        }
        $.help_for_biffs = 1;
      }
    }


    if ($.company_blip_state == 0) {
      if ($.player1.locateAnyMeans3D(299.0, -314.6, 11.4, 20.0, 20.0, 10.0, false /* FALSE */)) {
        Text.PrintNow("LAW4_13", 8000, 1); //Duff them up
        TIMERB = 0;
        $.company_blip_state = 1;
      }
    }
    await check_company_vans();  // SCM GOSUB check_company_vans


  }


  if ($.gate_finished_opening == 0) {
    Sound.AddOneOffSound(298.0, -313.6, 11.0, 3 /* SOUND_POLICE_CELL_DOOR_CLUNK */);
    $.gate_slide_loop = Sound.AddContinuous(298.0, -313.6, 11.0, 2 /* SOUND_POLICE_CELL_DOOR_SLIDING_LOOP */);
    while (!($.strike_gate.slide(304.0, -313.6, 11.0, 0.15, 0.15, 0.0, false /* FALSE */))) {
      await asyncWait(0);
    }
    $.gate_slide_loop.remove();
    Sound.AddOneOffSound(304.0, -313.6, 11.0, 3 /* SOUND_POLICE_CELL_DOOR_CLUNK */);
  }


  // SCM GOTO → mission_lawyer4_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_lawyer4_passed"); // fallback: would break linear control flow


}





// Mission lawyer4 failed


async function onFailed() {
  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed"
  $.strike_gate.setCoordinates(298.0, -313.6, 11.0);
}




// mission lawyer4 passed


async function mission_lawyer4_passed() {


  $.flag_lawyer_mission4_passed = 1;
  Audio.PlayMissionPassedTune(1);
  Text.PrintWithNumberBig("M_PASS", 1000, 5000, 1); //"Mission Passed!"
  $.player1.clearWantedLevel();
  $.player1.addScore(1000);
  Stat.RegisterMissionPassed("LAW_4");
  Stat.PlayerMadeProgress(1);
  $.lawyer_contact_blip.remove();
  $.sergio_contact_blip.remove();
  $.bbat_in_stock = 1;
  $.clothes_pickup3 = Pickup.CreateClothes(364.2, 1086.1, 19.0, 3);
  $.clothes3_created = 1;
  // START_NEW_SCRIPT cloth2 
  $.sergio_contact_blip = Blip.AddSpriteForContactPoint($.sergioX, $.sergioY, $.sergioZ, $.the_sergio_blip);
  // START_NEW_SCRIPT serg_mission1_loop 
}



// mission cleanup


async function cleanup() {


  ONMISSION = 0;
  $.timer_mobile_start = Clock.GetGameTimer();
  $.lawyer_blip1.remove();
  $.colar_cuffs_blip.remove();
  $.company_van_blip1.remove();
  $.company_van_blip2.remove();
  $.company_van_blip3.remove();
  Streaming.MarkModelAsNoLongerNeeded(spand);
  Streaming.MarkModelAsNoLongerNeeded(nitestick);
  Streaming.MarkModelAsNoLongerNeeded(GDa);
  Streaming.MarkModelAsNoLongerNeeded(barrel4);
  Streaming.MarkModelAsNoLongerNeeded(colt45);


  if ($.clothes2_created == 1) {
    $.clothes_pickup2 = Pickup.CreateClothes(97.5, -1133.6, 10.4, 2);
  }


  $.securi_guard1_gun.remove();
  $.securi_guard2_gun.remove();
  Streaming.UnloadSpecialCharacter(4);
  Streaming.UnloadSpecialCharacter(5);
  Audio.ClearMissionAudio(1);
  Audio.ClearMissionAudio(2);
  Game.SetRiotIntensity(0);
  if (!(Char.IsDead($.rioter1))) {
    $.rioter1.clearWaitState();
    $.rioter1.setOnlyDamagedByPlayer(false /* FALSE */);
  }
  if (!(Char.IsDead($.rioter2))) {
    $.rioter2.clearWaitState();
    $.rioter2.setOnlyDamagedByPlayer(false /* FALSE */);
  }
  if (!(Char.IsDead($.rioter3))) {
    $.rioter3.clearWaitState();
    $.rioter3.setOnlyDamagedByPlayer(false /* FALSE */);
  }
  if (!(Char.IsDead($.rioter4))) {
    $.rioter4.clearWaitState();
    $.rioter4.setOnlyDamagedByPlayer(false /* FALSE */);
  }
  if (!(Char.IsDead($.rioter5))) {
    $.rioter5.clearWaitState();
    $.rioter5.setOnlyDamagedByPlayer(false /* FALSE */);
  }
  if (!(Char.IsDead($.rioter6))) {
    $.rioter6.clearWaitState();
    $.rioter6.setOnlyDamagedByPlayer(false /* FALSE */);
  }
  if (!(Char.IsDead($.rioter7))) {
    $.rioter7.clearWaitState();
    $.rioter7.setOnlyDamagedByPlayer(false /* FALSE */);
  }
  if (!(Char.IsDead($.rioter8))) {
    $.rioter8.clearWaitState();
    $.rioter8.setOnlyDamagedByPlayer(false /* FALSE */);
  }
  if (!(Char.IsDead($.rioter9))) {
    $.rioter9.clearWaitState();
    $.rioter9.setOnlyDamagedByPlayer(false /* FALSE */);
  }
  if (!(Char.IsDead($.rioter10))) {
    $.rioter10.clearWaitState();
    $.rioter10.setOnlyDamagedByPlayer(false /* FALSE */);
  }
  if (!(Char.IsDead($.rioter11))) {
    $.rioter11.clearWaitState();
    $.rioter11.setOnlyDamagedByPlayer(false /* FALSE */);
  }
  if (!(Char.IsDead($.rioter12))) {
    $.rioter12.clearWaitState();
    $.rioter12.setOnlyDamagedByPlayer(false /* FALSE */);
  }
  if (!(Char.IsDead($.rioter13))) {
    $.rioter13.clearWaitState();
    $.rioter13.setOnlyDamagedByPlayer(false /* FALSE */);
  }
  if (!(Char.IsDead($.rioter14))) {
    $.rioter14.clearWaitState();
    $.rioter14.setOnlyDamagedByPlayer(false /* FALSE */);
  }
  if (!(Char.IsDead($.rioter15))) {
    $.rioter15.clearWaitState();
    $.rioter15.setOnlyDamagedByPlayer(false /* FALSE */);
  }
  if (!(Char.IsDead($.rioter16))) {
    $.rioter16.clearWaitState();
    $.rioter16.setOnlyDamagedByPlayer(false /* FALSE */);
  }
  if (!(Char.IsDead($.rioter17))) {
    $.rioter17.clearWaitState();
    $.rioter17.setOnlyDamagedByPlayer(false /* FALSE */);
  }
  if (!(Char.IsDead($.rioter18))) {
    $.rioter18.clearWaitState();
    $.rioter18.setOnlyDamagedByPlayer(false /* FALSE */);
  }
  if (!(Char.IsDead($.rioter19))) {
    $.rioter19.clearWaitState();
    $.rioter19.setOnlyDamagedByPlayer(false /* FALSE */);
  }
  if (!(Char.IsDead($.rioter20))) {
    $.rioter20.clearWaitState();
    $.rioter20.setOnlyDamagedByPlayer(false /* FALSE */);
  }
  if (!(Char.IsDead($.rioter21))) {
    $.rioter21.clearWaitState();
    $.rioter21.setOnlyDamagedByPlayer(false /* FALSE */);
  }
  if (!(Char.IsDead($.securi_guard1))) {
    $.securi_guard1.setOnlyDamagedByPlayer(false /* FALSE */);
  }
  if (!(Char.IsDead($.securi_guard2))) {
    $.securi_guard2.setOnlyDamagedByPlayer(false /* FALSE */);
  }
  if (!(Char.IsDead($.securi_guard3))) {
    $.securi_guard3.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  Streaming.RemoveAnimation("riot");
  Mission.Finish();
}



async function start_the_riot() {


  await asyncWait(0);


  if (!(Char.IsDead($.rioter1))) {
    $.rioter1.clearWaitState();
    $.rioter1.setPersonality(30 /* PEDSTAT_PSYCHO */);
    $.rioter1.setThreatSearch(16 /* THREAT_CIVMALE */);
    $.rioter1.setThreatSearch(1 /* THREAT_PLAYER1 */);
  }
  if (!(Char.IsDead($.rioter2))) {
    $.rioter2.clearWaitState();
    $.rioter2.setPersonality(30 /* PEDSTAT_PSYCHO */);
    $.rioter2.setThreatSearch(16 /* THREAT_CIVMALE */);
    $.rioter2.setThreatSearch(1 /* THREAT_PLAYER1 */);
  }
  if (!(Char.IsDead($.rioter3))) {
    $.rioter3.clearWaitState();
    $.rioter3.setPersonality(30 /* PEDSTAT_PSYCHO */);
    $.rioter3.setThreatSearch(16 /* THREAT_CIVMALE */);
    $.rioter3.setThreatSearch(1 /* THREAT_PLAYER1 */);
  }
  if (!(Char.IsDead($.rioter4))) {
    $.rioter4.clearWaitState();
    $.rioter4.setPersonality(30 /* PEDSTAT_PSYCHO */);
    $.rioter4.setThreatSearch(16 /* THREAT_CIVMALE */);
    $.rioter4.setThreatSearch(1 /* THREAT_PLAYER1 */);
  }
  if (!(Char.IsDead($.rioter5))) {
    $.rioter5.clearWaitState();
    $.rioter5.setPersonality(30 /* PEDSTAT_PSYCHO */);
    $.rioter5.setThreatSearch(16 /* THREAT_CIVMALE */);
    $.rioter5.setThreatSearch(1 /* THREAT_PLAYER1 */);
  }
  if (!(Char.IsDead($.rioter6))) {
    $.rioter6.clearWaitState();
    $.rioter6.setPersonality(30 /* PEDSTAT_PSYCHO */);
    $.rioter6.setThreatSearch(16 /* THREAT_CIVMALE */);
    $.rioter6.setThreatSearch(1 /* THREAT_PLAYER1 */);
  }
  if (!(Char.IsDead($.rioter7))) {
    $.rioter7.clearWaitState();
    $.rioter7.setPersonality(30 /* PEDSTAT_PSYCHO */);
    $.rioter7.setThreatSearch(16 /* THREAT_CIVMALE */);
    $.rioter7.setThreatSearch(1 /* THREAT_PLAYER1 */);
  }
  if (!(Char.IsDead($.rioter8))) {
    $.rioter8.clearWaitState();
    $.rioter8.setPersonality(30 /* PEDSTAT_PSYCHO */);
    $.rioter8.setThreatSearch(16 /* THREAT_CIVMALE */);
    $.rioter8.setThreatSearch(1 /* THREAT_PLAYER1 */);
  }
  if (!(Char.IsDead($.rioter9))) {
    $.rioter9.clearWaitState();
    $.rioter9.setPersonality(30 /* PEDSTAT_PSYCHO */);
    $.rioter9.setThreatSearch(16 /* THREAT_CIVMALE */);
    $.rioter9.setThreatSearch(1 /* THREAT_PLAYER1 */);
  }
  if (!(Char.IsDead($.rioter10))) {
    $.rioter10.clearWaitState();
    $.rioter10.setPersonality(30 /* PEDSTAT_PSYCHO */);
    $.rioter10.setThreatSearch(16 /* THREAT_CIVMALE */);
    $.rioter10.setThreatSearch(1 /* THREAT_PLAYER1 */);
  }
  if (!(Char.IsDead($.rioter11))) {
    $.rioter11.clearWaitState();
    $.rioter11.setPersonality(30 /* PEDSTAT_PSYCHO */);
    $.rioter11.setThreatSearch(16 /* THREAT_CIVMALE */);
    $.rioter11.setThreatSearch(1 /* THREAT_PLAYER1 */);
  }
  if (!(Char.IsDead($.rioter12))) {
    $.rioter12.clearWaitState();
    $.rioter12.setPersonality(30 /* PEDSTAT_PSYCHO */);
    $.rioter12.setThreatSearch(16 /* THREAT_CIVMALE */);
    $.rioter12.setThreatSearch(1 /* THREAT_PLAYER1 */);
  }
  if (!(Char.IsDead($.rioter13))) {
    $.rioter13.clearWaitState();
    $.rioter13.setPersonality(30 /* PEDSTAT_PSYCHO */);
    $.rioter13.setThreatSearch(16 /* THREAT_CIVMALE */);
    $.rioter13.setThreatSearch(1 /* THREAT_PLAYER1 */);
  }
  if (!(Char.IsDead($.rioter14))) {
    $.rioter14.clearWaitState();
    $.rioter14.setPersonality(30 /* PEDSTAT_PSYCHO */);
    $.rioter14.setThreatSearch(16 /* THREAT_CIVMALE */);
    $.rioter14.setThreatSearch(1 /* THREAT_PLAYER1 */);
  }
  if (!(Char.IsDead($.rioter15))) {
    $.rioter15.clearWaitState();
    $.rioter15.setPersonality(30 /* PEDSTAT_PSYCHO */);
    $.rioter15.setThreatSearch(16 /* THREAT_CIVMALE */);
    $.rioter15.setThreatSearch(1 /* THREAT_PLAYER1 */);
  }
  if (!(Char.IsDead($.rioter16))) {
    $.rioter16.clearWaitState();
    $.rioter16.setPersonality(30 /* PEDSTAT_PSYCHO */);
    $.rioter16.setThreatSearch(16 /* THREAT_CIVMALE */);
    $.rioter16.setThreatSearch(1 /* THREAT_PLAYER1 */);
  }


  if (!(Char.IsDead($.rioter17))) {
    $.rioter17.clearWaitState();
    $.rioter17.setPersonality(30 /* PEDSTAT_PSYCHO */);
    $.rioter17.setThreatSearch(16 /* THREAT_CIVMALE */);
    $.rioter17.setThreatSearch(1 /* THREAT_PLAYER1 */);
  }


  if (!(Char.IsDead($.rioter18))) {
    $.rioter18.clearWaitState();
    $.rioter18.setPersonality(30 /* PEDSTAT_PSYCHO */);
    $.rioter18.setThreatSearch(16 /* THREAT_CIVMALE */);
    $.rioter18.setThreatSearch(1 /* THREAT_PLAYER1 */);
  }


  if (!(Char.IsDead($.rioter19))) {
    $.rioter19.clearWaitState();
    $.rioter19.setPersonality(30 /* PEDSTAT_PSYCHO */);
    $.rioter19.setThreatSearch(16 /* THREAT_CIVMALE */);
    $.rioter19.setThreatSearch(1 /* THREAT_PLAYER1 */);
  }


  if (!(Char.IsDead($.rioter20))) {
    $.rioter20.clearWaitState();
    $.rioter20.setPersonality(30 /* PEDSTAT_PSYCHO */);
    $.rioter20.setThreatSearch(16 /* THREAT_CIVMALE */);
    $.rioter20.setThreatSearch(1 /* THREAT_PLAYER1 */);
  }


  if (!(Char.IsDead($.rioter21))) {
    $.rioter21.clearWaitState();
    $.rioter21.setPersonality(30 /* PEDSTAT_PSYCHO */);
    $.rioter21.setThreatSearch(16 /* THREAT_CIVMALE */);
    $.rioter21.setThreatSearch(1 /* THREAT_PLAYER1 */);
  }



  if ($.clothes_cut_scene2_played == 0) {
    if (!(Char.IsDead($.rioter1))) {
      $.rioter1.setObjKillPlayerOnFoot($.player1);
    }
    if (!(Char.IsDead($.rioter3))) {
      $.rioter3.setObjKillPlayerOnFoot($.player1);
    }
    if (!(Char.IsDead($.rioter5))) {
      $.rioter5.setObjKillPlayerOnFoot($.player1);
    }
    if (!(Char.IsDead($.rioter7))) {
      $.rioter7.setObjKillPlayerOnFoot($.player1);
    }
    if (!(Char.IsDead($.rioter9))) {
      $.rioter9.setObjKillPlayerOnFoot($.player1);
    }
    if (!(Char.IsDead($.rioter11))) {
      $.rioter11.setObjKillPlayerOnFoot($.player1);
    }
    if (!(Char.IsDead($.rioter13))) {
      $.rioter13.setObjKillPlayerOnFoot($.player1);
    }
    if (!(Char.IsDead($.rioter15))) {
      $.rioter15.setObjKillPlayerOnFoot($.player1);
    }
    if (!(Char.IsDead($.rioter17))) {
      $.rioter17.setObjKillPlayerOnFoot($.player1);
    }
    if (!(Char.IsDead($.rioter19))) {
      $.rioter19.setObjKillPlayerOnFoot($.player1);
    }


  }


  $.riot_in_progress = 1;
  TIMERB = 0;
}





async function clothes_cut_scene2() {

  // **************************************(START) CHANGE OF CLOTHES CUT SCENE*********************************************



  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);


  Camera.SetFixedPosition(91.813, -1131.116, 17.251, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(92.390, -1131.740, 16.724, 2 /* JUMP_CUT */);


  $.scplayer.setObjGotoCoordOnFoot(96.4, -1136.7);


  await asyncWait(1300);


  Camera.DoFade(1000, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  if (!($.player1.isWantedLevelGreater(2))) {
    $.player1.clearWantedLevel();
  }


  if (!(Char.IsDead($.scplayer))) {
    $.scplayer.undress("player3");
    Streaming.LoadAllModelsNow();
    if (!(Char.IsDead($.scplayer))) {
      $.scplayer.dress();
    }


  }


  World.ClearArea(94.9, -1135.0, 9.4, 1.0, false /* FALSE */);
  $.scplayer.setObjNoObj();
  $.player1.setCoordinates(94.9, -1135.0, 9.4);
  $.player1.setHeading(57.9);
  $.player1.setCurrentWeapon(0 /* WEAPONTYPE_UNARMED */);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  Camera.SetFixedPosition(94.027, -1134.133, 10.002, 0.0, 0.0, 0.0); //ROTATE UP
  Camera.PointAtPoint(94.724, -1134.820, 9.797, 2 /* JUMP_CUT */);


  await asyncWait(1000);


  Camera.SetInterpolationParameters(5.0, 3000);
  Camera.SetFixedPosition(94.027, -1134.133, 10.002, 0.0, 0.0, 0.0); //ROTATE UP
  Camera.PointAtPoint(94.656, -1134.754, 10.469, 1 /* INTERPOLATION */);


  TIMERB = 0;


  while (!(TIMERB > 5000)) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      $.skip_timer1_acive = 1;
      // SCM GOTO → skip_timer4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_timer4"); // fallback: would break linear control flow
    }


  }
}




async function skip_timer4() {



  if ($.skip_timer1_acive == 1) {
    Camera.DoFade(1000, 0 /* FADE_OUT */);
    await asyncWait(1000);
    Camera.DoFade(1000, 1 /* FADE_IN */);


  }


  $.player1.stopLooking();
  Camera.SetInFrontOfPlayer();
  Camera.RestoreJumpcut();
  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  $.scplayer.setObjNoObj();


  $.colar_cuffs_blip.remove();


  $.clothes_cut_scene2_played = 1;

  // **************************************(END) CHANGE OF CLOTHES CUT SCENE*********************************************
}





async function check_company_vans() {
  if (Car.IsDead($.company_van1)) {
    $.company_van_blip1.remove();
  }


  if (Car.IsDead($.company_van2)) {
    $.company_van_blip2.remove();
  }


  if (Car.IsDead($.company_van3)) {
    $.company_van_blip3.remove();
  }
}




async function new_intensity() {


  if ($.kill_off_riot_sound == 0) {
    $.new_intensity = $.new_intensity - 6;
    Game.SetRiotIntensity($.new_intensity);
  }
}

export async function lawyer4() {
  // Mission start stuff


  await body();  // SCM GOSUB mission_start_lawyer4


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await onFailed();  // SCM GOSUB mission_lawyer4_failed
  }


  await cleanup();  // SCM GOSUB mission_cleanup_lawyer4




  // Variables for mission



  // VAR_INT rioter1 rioter2 rioter3 rioter4 rioter5 rioter6 rioter7 rioter8 rioter9 rioter10
  // VAR_INT rioter11 rioter12 rioter13 rioter14 rioter15 rioter16 rioter17 rioter18 rioter19 rioter20
  // VAR_INT rioter21 player_killing_rioters new_intensity law4_barrel2
  // VAR_INT company_van1 company_van2 company_van3 kill_off_riot_sound
  // VAR_INT riot_in_progress gate_finished_opening law4_barrel1
  // VAR_INT securi_guard1 securi_guard2 securi_guard3 company_blip_state
  // VAR_INT riot_building_up clothes_cut_scene2_played company_van_blip1 company_van_blip2 company_van_blip3
  // LVAR_INT noised_up_rioter1 noised_up_rioter2 noised_up_rioter3 noised_up_rioter4 noised_up_rioter5
  // LVAR_INT noised_up_rioter6 noised_up_rioter7 noised_up_rioter8 noised_up_rioter9 noised_up_rioter10
  // LVAR_INT noised_up_rioter11 noised_up_rioter12 noised_up_rioter13 noised_up_rioter14 noised_up_rioter15
  // LVAR_INT noised_up_rioter16
  // VAR_INT noised_up_rioter17 noised_up_rioter18 noised_up_rioter19 noised_up_rioter20
  // VAR_INT noised_up_rioter21 help_for_biffs securi_guard1_gun securi_guard2_gun
  // VAR_INT dead_rioter1 dead_rioter2 dead_rioter3 dead_rioter4 dead_rioter5
  // VAR_INT dead_rioter6 dead_rioter7 dead_rioter8 dead_rioter9 dead_rioter10
  // VAR_INT dead_rioter11 dead_rioter12 dead_rioter13 dead_rioter14 dead_rioter15
  // VAR_INT dead_rioter16 dead_rioter17 dead_rioter18 dead_rioter19 dead_rioter20
  // VAR_INT dead_rioter21 dead_securi_guard1_drop dead_securi_guard2_drop
  // VAR_FLOAT guard_PickupX guard_PickupY guard_PickupZ

  // ***************************************Mission Start*************************************


}
