// Generated from main/lawyer1.sc

import { $ } from "../utils/vars.mts";

// *******************************************************************************************
// *******************************************************************************************
// *************************************Lawyer mission 1**************************************
// *************************************Colonel's Party***************************************
// *************************************THE PARTY**********************************************
// *******************************************************************************************
// *******************************************************************************************

async function body() {


  Stat.RegisterMissionGiven();
  ONMISSION = 1;
  // SCRIPT_NAME LAWYER1


  await asyncWait(0);


  Text.LoadMissionText("LAWYER1");
  Shortcut.SetDropoffPointForMission(110.6, -824.2, 9.6, 327.9);


  merc_blip_active = 0;
  $.skip_timer1_acive = 0;
  player_nicking_bike = 0;
  $.party_cars_created = 0;
  $.biker_out_of_bike = 0;
  $.audio_is_loading = 0;
  $.audio_has_loaded = 0;
  $.first_two_samples = 0;
  $.second_two_samples = 0;
  $.third_two_samples = 0;
  $.stored_any_vehicle = 0;


  Text.ClearHelp();


  if (!(Char.IsDead($.scplayer))) {
    $.scplayer.undress("player");
    Streaming.LoadAllModelsNow();
    if (!(Char.IsDead($.scplayer))) {
      $.scplayer.dress();
    }


  }


  Audio.LoadMissionAudio(1, "mono_1" as any);


  Streaming.SetAreaVisible(6 /* VIS_LAWYERS */);


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSken");
  Streaming.LoadSpecialModel(CUTOBJ01, "lwchara");
  Streaming.LoadSpecialModel(CUTOBJ02, "lwcharb");
  Streaming.LoadSpecialModel(CUTOBJ03, "lcfan");
  Streaming.LoadSpecialModel(CUTOBJ04, "invite");
  Streaming.LoadSpecialModel(CUTOBJ05, "lawdoor");


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasModelLoaded(CUTOBJ01)) || !(Streaming.HasModelLoaded(CUTOBJ02)) || !(Streaming.HasModelLoaded(CUTOBJ03))) {
    await asyncWait(0);


  }


  while (!(Streaming.HasModelLoaded(CUTOBJ04)) || !(Streaming.HasModelLoaded(CUTOBJ05))) {
    await asyncWait(0);


  }


  Streaming.LoadScene(140.6, -1367.4, 13.1);


  Cutscene.Load("law_1a");
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


  $.cs_invite = CutsceneObject.Create(CUTOBJ04);
  $.cs_invite.setAnim("invite");


  $.cs_lawdoor = CutsceneObject.Create(CUTOBJ05);
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


  while ($.cs_time < 520) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW1_A", 10000, 1); // Mission brief


  while ($.cs_time < 2808) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW1_B", 10000, 1); // Mission brief


  while ($.cs_time < 8465) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW1_C", 10000, 1); // Mission brief


  while ($.cs_time < 12636) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW1_D", 10000, 1); // Mission brief


  while ($.cs_time < 18310) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW1_E", 10000, 1); // Mission brief


  while ($.cs_time < 23141) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW1_F", 10000, 1); // Mission brief


  while ($.cs_time < 29472) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW1_G", 10000, 1); // Mission brief


  while ($.cs_time < 34436) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW1_H", 10000, 1); // Mission brief


  while ($.cs_time < 38414) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW1_I", 10000, 1); // Mission brief


  while ($.cs_time < 43502) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW1_J", 10000, 1); // Mission brief


  while ($.cs_time < 45330) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW1_K", 10000, 1); // Mission brief


  while ($.cs_time < 48666) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW1_L", 10000, 1); // Mission brief


  while ($.cs_time < 52276) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW1_M", 10000, 1); // Mission brief


  while ($.cs_time < 54976) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW1_N", 10000, 1); // Mission brief


  while ($.cs_time < 57081) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW1_O", 10000, 1); // Mission brief


  while ($.cs_time < 60482) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW1_P", 10000, 1); // Mission brief


  while ($.cs_time < 63363) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW1_Q", 10000, 1); // Mission brief


  while ($.cs_time < 69392) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW1_R", 10000, 1); // Mission brief


  while ($.cs_time < 73341) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW1_S", 10000, 1); // Mission brief


  while ($.cs_time < 74197) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW1_T", 10000, 1); // Mission brief


  while ($.cs_time < 80061) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW1_U", 10000, 1); // Mission brief


  while ($.cs_time < 82432) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  while ($.cs_time < 83692) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Camera.DoFade(1500, 0 /* FADE_OUT */);


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
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ02);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ03);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ04);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ05);


  Streaming.SetAreaVisible(0 /* VIS_MAIN_MAP */);
  Streaming.LoadScene(117.1, -825.6, 9.8);


  Streaming.RequestModel(HMYST);
  Streaming.RequestModel(cheetah);
  Streaming.RequestModel(infernus);
  Streaming.RequestModel(stretch);
  Streaming.RequestModel(banshee);


  await asyncWait(500);


  Camera.DoFade(1500, 1 /* FADE_IN */);



  while (!(Streaming.HasModelLoaded(HMYST)) || !(Streaming.HasModelLoaded(cheetah)) || !(Streaming.HasModelLoaded(infernus)) || !(Streaming.HasModelLoaded(stretch)) || !(Streaming.HasModelLoaded(banshee))) {
    await asyncWait(0);


  }

  //SET_PLAYER_CONTROL player1 On

  // START OF MISSION


  Weather.Force(0 /* WEATHER_SUNNY */);


  $.clothes_shopX = 95.4;
  $.clothes_shopY = -1135.5;
  $.clothes_shopZ = 9.4;


  $.partyx = -237.0;
  $.partyy = -1360.1;
  $.partyz = 7.07;


  $.strip_clubx = 101.8;
  $.strip_cluby = -1479.1;
  $.strip_clubz = 10.4;


  $.gen_car120.switch(0);


  Text.PrintNow("LAW1_1", 10000, 1); //GET A CHANGE OF CLOTHES
  $.colar_cuffs_blip = Blip.AddSpriteForCoord($.clothes_shopX, $.clothes_shopY, $.clothes_shopZ, 28 /* RADAR_SPRITE_TSHIRT */);


  await asyncWait(3500);


  Text.PrintHelp("HELP20"); //Go to the T shirt blip
  Hud.FlashObject(8 /* HUD_FLASH_RADAR */);


  await asyncWait(2000);


  Hud.FlashObject(-1);


  while (!($.player1.locateOnFoot3D($.clothes_shopX, $.clothes_shopY, $.clothes_shopZ, 1.5, 1.5, 3.0, true /* TRUE */))) {
    await asyncWait(0);


  }


  $.colar_cuffs_blip.remove();

  // **************************************(START) CHANGE OF CLOTHES CUT SCENE*********************************************


  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);


  Streaming.RequestModel(freeway);


  Camera.SetFixedPosition(91.813, -1131.116, 17.251, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(92.390, -1131.740, 16.724, 2 /* JUMP_CUT */);


  $.scplayer.setObjGotoCoordOnFoot(96.4, -1136.7);


  await asyncWait(1300);


  Camera.DoFade(1000, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(freeway))) {
    await asyncWait(0);


  }


  if (!($.player1.isWantedLevelGreater(2))) {
    $.player1.clearWantedLevel();
  }


  if (!(Char.IsDead($.scplayer))) {
    $.scplayer.undress("player2");
    Streaming.LoadAllModelsNow();
    if (!(Char.IsDead($.scplayer))) {
      $.scplayer.dress();
    }


  }


  Audio.LoadMissionAudio(1, "LAW1_7" as any);
  Audio.LoadMissionAudio(2, "LAW1_8" as any);


  World.ClearArea(94.9, -1135.0, 9.4, 1.0, false /* FALSE */);
  $.scplayer.setObjNoObj();
  $.player1.setCoordinates(94.9, -1135.0, 9.4);
  $.player1.setHeading(57.9);
  $.player1.setCurrentWeapon(0 /* WEAPONTYPE_UNARMED */);


  World.ClearArea(78.3, -1130.1, 9.8, 8.0, false /* FALSE */);
  bike1 = Car.Create(freeway, 78.3, -1130.1, -100.0);
  bike1.setHeading(180.0);
  biker_bloke = Char.CreateInsideCar(bike1, 4 /* PEDTYPE_CIVMALE */, HMYST);
  biker_bloke.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  biker_bloke.clearThreatSearch();
  bike1.setCruiseSpeed(0.0);


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
      // SCM GOTO → skip_to_fade_previous (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_to_fade_previous"); // fallback: would break linear control flow
    }


  }
}



async function skip_to_fade_previous() {


  if (!(Car.IsDead(bike1))) {
    World.ClearArea(78.3, -1130.1, 9.8, 8.0, false /* FALSE */);
    bike1.gotoCoordinates(78.0, -1141.3, 9.8);
    bike1.setCruiseSpeed(6.0);
    bike1.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
  }


  if (!(Char.IsDead(biker_bloke))) {
    $.player1.lookAtCharAlways(biker_bloke);
  }


  World.ClearArea(78.3, -1130.1, 9.8, 10.0, false /* FALSE */);
  World.ClearArea(78.0, -1143.3, 9.8, 10.0, false /* FALSE */);
  Camera.SetFixedPosition(76.009, -1140.519, 9.861, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(76.830, -1139.953, 9.938, 2 /* JUMP_CUT */);



  TIMERB = 0;


  while (!(TIMERB > 500)) {
    await asyncWait(0);


  }


  if (Audio.HasMissionAudioLoaded(1)) {
    Audio.PlayMissionAudio(1);
    Text.PrintNow("LAW1_12", 1200, 1); //mmmmm...nice bike
  }


  TIMERB = 0;


  while (!(TIMERB > 3500)) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      $.skip_timer1_acive = 1;
      // SCM GOTO → skip_to_fade (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_to_fade"); // fallback: would break linear control flow
    }


  }


  if (!(Char.IsDead(biker_bloke))) {
    if (!(Car.IsDead(bike1))) {
      if (biker_bloke.isInCar(bike1)) {
        biker_bloke.setObjLeaveCar(bike1);
        //CHAR_WANDER_DIR biker_bloke 351

      }
    }
  }


  TIMERB = 0;


  while (!(TIMERB > 1000)) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      $.skip_timer1_acive = 1;
      // SCM GOTO → skip_to_fade (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_to_fade"); // fallback: would break linear control flow
    }


  }
}




async function skip_to_fade() {


  if ($.skip_timer1_acive == 1) {
    Camera.DoFade(1000, 0 /* FADE_OUT */);
    await asyncWait(1000);
    if (!(Char.IsDead(biker_bloke))) {
      if (!(Car.IsDead(bike1))) {
        if (biker_bloke.isInCar(bike1)) {
          biker_bloke.warpFromCarToCoord(77.1, -1140.6, 9.4);
          World.ClearArea(77.1, -1140.6, 9.4, 1.0, false /* FALSE */);
          bike1.setCoordinates(78.0, -1138.6, -100.0);
          bike1.setHeading(180.0);
        }
      }
    }
    Camera.DoFade(1000, 1 /* FADE_IN */);


  }



  $.player1.stopLooking();
  Camera.SetInFrontOfPlayer();
  Camera.RestoreJumpcut();
  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  $.scplayer.setObjNoObj();


  if (!(Car.IsDead(bike1))) {
    bike1.markAsNoLongerNeeded();
    Streaming.MarkModelAsNoLongerNeeded(freeway);
  }

  // **************************************(END) CHANGE OF CLOTHES CUT SCENE*********************************************


  //WAIT 1500


  Text.PrintNow("LAW1_2", 10000, 1); //GET TO THE BOAT


  $.lawyer_blip1 = Blip.AddForCoord($.partyx, $.partyy, $.partyz);


  while (!($.player1.locateStoppedInCar3D($.partyx, $.partyy, $.partyz, 4.0, 4.0, 4.0, true /* TRUE */)) && !($.player1.locateOnFoot3D($.partyx, $.partyy, $.partyz, 4.0, 4.0, 4.0, false /* FALSE */))) {
    await asyncWait(0);
    if ($.biker_out_of_bike == 0 && !(Char.IsDead(biker_bloke))) {
      if (!(Car.IsDead(bike1))) {
        if (!(biker_bloke.isInCar(bike1))) {
          //CHAR_WANDER_DIR biker_bloke 3
          biker_bloke.setObjGotoCoordOnFoot(74.9, -1177.6);
          $.biker_out_of_bike = 1;
        }
      }
    }
    if (player_nicking_bike == 0) {
      if (!(Char.IsDead(biker_bloke)) && !(Car.IsDead(bike1))) {
        if ($.player1.locateAnyMeansChar3D(biker_bloke, 20.0, 20.0, 10.0, false /* FALSE */)) {
          if ($.player1.isInCar(bike1)) {
            biker_bloke.setRunning(true /* TRUE */);
            biker_bloke.setThreatSearch(1 /* THREAT_PLAYER1 */);
            player_nicking_bike = 1;
            if (Audio.HasMissionAudioLoaded(2)) {
              Audio.PlayMissionAudio(2);
              Text.PrintNow("LAW1_13", 1000, 1); //NO! My bike
              TIMERB = 0;
              TIMERA = 0;
            }
          }
        }
      }
    }
    else {
      if (!(Char.IsDead(biker_bloke)) && !(Car.IsDead(bike1))) {
        if (!(biker_bloke.isInCar(bike1))) {
          if (biker_bloke.isHealthGreater(99)) {
            if (!(TIMERA > 3000)) {
              biker_bloke.setWaitState(16 /* WAITSTATE_PLAYANIM_TAXI */, 1000);
              biker_bloke.turnToFacePlayer($.player1);
            }
            else {
              biker_bloke.setObjEnterCarAsDriver(bike1);
            }
          }
          else {
            if (TIMERB > 2000) {
              biker_bloke.setObjEnterCarAsDriver(bike1);
            }
          }
        }
        else {
          bike1.setCruiseSpeed(15.0);
          //CAR_WANDER_RANDOMLY bike1
          bike1.gotoCoordinates(505.9, 61.0, 11.0);
          bike1.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
        }
      }
    }
    if ($.party_cars_created == 0 && $.player1.locateAnyMeans3D($.partyx, $.partyy, $.partyz, 80.0, 150.0, 40.0, false /* FALSE */)) {
      $.party_car1 = Car.Create(cheetah, -236.6, -1374.6, -100.0);
      $.party_car1.setHeading(280.3);
      $.party_car2 = Car.Create(infernus, -240.8, -1355.3, -100.0);
      $.party_car2.setHeading(99.8);
      $.party_car3 = Car.Create(stretch, -244.2, -1339.2, -100.0);
      $.party_car3.setHeading(103.8);
      $.party_car4 = Car.Create(banshee, -233.3, -1386.0, -100.0);
      $.party_car4.setHeading(96.8);
      $.party_cars_created = 1;
    }


  }


  $.lawyer_blip1.remove();
}


// **************************************(START) PARTY ON THE BOAT CUT SCENE *********************************************


async function party_cut() {


  $.player1.setControl(false /* OFF */);


  Hud.SwitchWidescreen(true /* ON */);

  //LOAD_SCENE -237.9 -1362.0 10.0

  //SET_FIXED_CAMERA_POSITION -365.161 -1286.620 10.594 0.0 0.0 0.0
  //POINT_CAMERA_AT_POINT -365.608 -1287.514 10.557 JUMP_CUT //View of boat


  Camera.SetFixedPosition(-229.438, -1364.204, 12.607, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-230.424, -1364.068, 12.511, 2 /* JUMP_CUT */); //View of boat


  await asyncWait(1000);


  Camera.DoFade(1500, 0 /* FADE_OUT */);


  Text.PrintBig("LAW_1", 20000, 2); //"Lawyer mission 1"


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp03, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp04, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp05, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp24, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp25, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp28, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp32, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp35, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp41, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp47, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp50, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp51, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp64, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp70, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp71, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp72, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp73, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODargohull2, false /* FALSE */);


  //IF IS_CAR_DEAD bike1

  if ($.player1.isInAnyCar()) {
    $.any_vehicle = $.player1.storeCarIsIn();
    const _res316 = $.any_vehicle.getCoordinates();
$.any_carx = _res316.x;
$.any_cary = _res316.y;
$.any_carz = _res316.z;
    $.any_heading = $.any_vehicle.getHeading();
    [Colour1_any, Colour2_any] = $.any_vehicle.getColors();
    $.any_vehicle_model = $.any_vehicle.getModel();
    if ($.player1.isInCar($.any_vehicle)) {
      $.player1.warpFromCarToCoord(-246.5, -1360.5, 7.1);
      $.any_vehicle.delete();
      $.stored_any_vehicle = 1;
    }
  }
  else {
    $.player1.setCoordinates(-246.5, -1360.5, 7.1);
  }


  $.party_car1.delete();
  $.party_car2.delete();
  $.party_car3.delete();
  $.party_car4.delete();


  if (!(Char.IsDead(biker_bloke))) {
    biker_bloke.markAsNoLongerNeeded();
  }
  Streaming.MarkModelAsNoLongerNeeded(freeway);
  Streaming.MarkModelAsNoLongerNeeded(HMYST);
  Streaming.MarkModelAsNoLongerNeeded(cheetah);
  Streaming.MarkModelAsNoLongerNeeded(infernus);
  Streaming.MarkModelAsNoLongerNeeded(stretch);
  Streaming.MarkModelAsNoLongerNeeded(banshee);



  $.breakout_timer_start = Clock.GetGameTimer();
  $.breakout_diff = 0;


  while (!($.player1.canStartMission()) && $.breakout_diff < 5000) {
    await asyncWait(0);
    $.breakout_timer = Clock.GetGameTimer();
    $.breakout_diff = $.breakout_timer - $.breakout_timer_start;
  }


  $.player1.makeSafeForCutscene();

  //SET_CHAR_OBJ_NO_OBJ scplayer


  World.SwitchRubbish(false /* OFF */);
  World.SwitchProcessing(false /* OFF */);
  Streaming.Switch(false /* OFF */);
  Cutscene.DisableShadows();
  World.RemoveEverythingForHugeCutscene();


  Streaming.LoadSpecialCharacter(1, "csplay2");
  Streaming.LoadSpecialCharacter(2, "csdiaz");
  Streaming.LoadSpecialCharacter(3, "csmerc2");
  Streaming.LoadSpecialCharacter(4, "cscandy");
  Streaming.LoadSpecialCharacter(5, "csgonz");
  Streaming.LoadSpecialCharacter(6, "csjezz");
  Streaming.LoadSpecialCharacter(7, "csbj");
  Streaming.LoadSpecialCharacter(8, "cservra");
  Streaming.LoadSpecialCharacter(9, "csrich");
  Streaming.LoadSpecialCharacter(10, "csdirec");
  Streaming.LoadSpecialCharacter(11, "cgona");
  Streaming.LoadSpecialCharacter(12, "dgoona");
  Streaming.LoadSpecialCharacter(13, "dgoonb");
  Streaming.LoadSpecialCharacter(14, "csavery");
  Streaming.LoadSpecialCharacter(15, "csdlove");
  Streaming.LoadSpecialCharacter(16, "cskent");
  Streaming.LoadSpecialCharacter(17, "csalsb2"); //csalscb
  Streaming.LoadSpecialCharacter(18, "cscolo");


  Streaming.RequestModel(WFYG1);
  Streaming.RequestModel(WFYG2);
  Streaming.RequestModel(yt_main_body);
  Streaming.RequestModel(yt_main_body2);
  Streaming.RequestModel(big_poly_tings_b);

  //LOAD_SCENE 1218.4 -314.5 28.9


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasSpecialCharacterLoaded(4)) || !(Streaming.HasSpecialCharacterLoaded(5)) || !(Streaming.HasSpecialCharacterLoaded(6))) {
    await asyncWait(0);


  }


  while (!(Streaming.HasSpecialCharacterLoaded(7)) || !(Streaming.HasSpecialCharacterLoaded(8)) || !(Streaming.HasSpecialCharacterLoaded(9)) || !(Streaming.HasSpecialCharacterLoaded(10)) || !(Streaming.HasSpecialCharacterLoaded(12))) {
    await asyncWait(0);


  }


  while (!(Streaming.HasSpecialCharacterLoaded(13)) || !(Streaming.HasSpecialCharacterLoaded(14)) || !(Streaming.HasSpecialCharacterLoaded(15)) || !(Streaming.HasSpecialCharacterLoaded(16)) || !(Streaming.HasSpecialCharacterLoaded(17)) || !(Streaming.HasSpecialCharacterLoaded(18))) {
    await asyncWait(0);


  }


  while (!(Streaming.HasModelLoaded(WFYG1)) || !(Streaming.HasModelLoaded(WFYG2)) || !(Streaming.HasModelLoaded(yt_main_body)) || !(Streaming.HasModelLoaded(yt_main_body2)) || !(Streaming.HasModelLoaded(big_poly_tings_b))) {
    await asyncWait(0);


  }


  Cutscene.Load("law_1b");
  //SET_CUTSCENE_OFFSET -332.5 -1343.1 14.3


  const _res317 = $.the_yacht.getCoordinates();
$.the_yacht_x = _res317.x;
$.the_yacht_y = _res317.y;
$.the_yacht_z = _res317.z;
  $.the_yacht_x = $.the_yacht_x + 0.003;
  $.the_yacht_y = $.the_yacht_y - 1.381;
  $.the_yacht_z = $.the_yacht_z + 3.149;
  Cutscene.SetOffset($.the_yacht_x, $.the_yacht_y, $.the_yacht_z);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("csplay");


  $.cs_diaz = CutsceneObject.Create(SPECIAL02);
  $.cs_diaz.setAnim("CSdiaz");


  $.cs_merc = CutsceneObject.Create(SPECIAL03);
  $.cs_merc.setAnim("csmerc");


  $.cs_candy = CutsceneObject.Create(SPECIAL04);
  $.cs_candy.setAnim("cscandy");


  $.cs_gonz = CutsceneObject.Create(SPECIAL05);
  $.cs_gonz.setAnim("csgonz");


  $.cs_jezz = CutsceneObject.Create(SPECIAL06);
  $.cs_jezz.setAnim("csjezz");


  $.cs_bj = CutsceneObject.Create(SPECIAL07);
  $.cs_bj.setAnim("csbj");


  cs_ervra = CutsceneObject.Create(SPECIAL08);
  cs_ervra.setAnim("cservra");


  cs_rich = CutsceneObject.Create(SPECIAL09);
  cs_rich.setAnim("csrich");


  $.cs_direc = CutsceneObject.Create(SPECIAL10);
  $.cs_direc.setAnim("csdirec");


  cs_cgona = CutsceneObject.Create(SPECIAL11);
  cs_cgona.setAnim("cgona");


  cs_cgonb = CutsceneObject.Create(SPECIAL12);
  cs_cgonb.setAnim("dgoona");


  cs_cgonc = CutsceneObject.Create(SPECIAL13);
  cs_cgonc.setAnim("dgoonb");


  $.cs_avery = CutsceneObject.Create(SPECIAL14);
  $.cs_avery.setAnim("csavery");


  $.cs_dlove = CutsceneObject.Create(SPECIAL15);
  $.cs_dlove.setAnim("csdlove");


  $.cs_kent = CutsceneObject.Create(SPECIAL16);
  $.cs_kent.setAnim("cskent");


  cs_alscb = CutsceneObject.Create(SPECIAL17);
  cs_alscb.setAnim("csalsb");


  $.cs_colonel = CutsceneObject.Create(SPECIAL18);
  $.cs_colonel.setAnim("cscolo");


  cs_jzgirla = CutsceneObject.Create(WFYG1);
  cs_jzgirla.setAnim("WFYG1");


  cs_jzgirlb = CutsceneObject.Create(WFYG2);
  cs_jzgirlb.setAnim("WFYG2");


  const _res318 = $.the_yacht.getCoordinates();
$.the_yacht_x = _res318.x;
$.the_yacht_y = _res318.y;
$.the_yacht_z = _res318.z;
  $.boat_scene = ScriptObject.CreateNoOffset(big_poly_tings_b, $.the_yacht_x, $.the_yacht_y, $.the_yacht_z);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  //SWITCH_STREAMING ON

  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();
  Text.ClearPrints();


  while ($.cs_time < 11329) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_1", 10000, 1); // Mission brief


  while ($.cs_time < 13188) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_2", 10000, 1); // Mission brief


  while ($.cs_time < 16708) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_3", 10000, 1); // Mission brief


  while ($.cs_time < 20045) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_4", 10000, 1); // Mission brief


  while ($.cs_time < 22161) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_5", 10000, 1); // Mission brief


  while ($.cs_time < 26685) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_6", 10000, 1); // Mission brief


  while ($.cs_time < 28985) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_7", 10000, 1); // Mission brief


  while ($.cs_time < 30685) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_8", 10000, 1); // Mission brief


  while ($.cs_time < 35229) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_9", 10000, 1); // Mission brief


  while ($.cs_time < 38229) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_10", 10000, 1); // Mission brief


  while ($.cs_time < 40853) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_11", 10000, 1); // Mission brief


  while ($.cs_time < 42509) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_12", 10000, 1); // Mission brief


  while ($.cs_time < 44583) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_13", 10000, 1); // Mission brief


  while ($.cs_time < 47037) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_14", 10000, 1); // Mission brief


  while ($.cs_time < 52149) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_15", 10000, 1); // Mission brief


  while ($.cs_time < 53893) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_16", 10000, 1); // Mission brief


  while ($.cs_time < 55613) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_17", 10000, 1); // Mission brief


  while ($.cs_time < 56697) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_18", 10000, 1); // Mission brief


  while ($.cs_time < 59025) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_19", 10000, 1); // Mission brief


  while ($.cs_time < 62885) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_20", 10000, 1); // Mission brief


  while ($.cs_time < 68309) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_21", 10000, 1); // Mission brief


  while ($.cs_time < 70783) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_22", 10000, 1); // Mission brief


  while ($.cs_time < 73163) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_23", 10000, 1); // Mission brief


  while ($.cs_time < 77173) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_24", 10000, 1); // Mission brief


  while ($.cs_time < 79309) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_25", 10000, 1); // Mission brief


  while ($.cs_time < 82073) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_26", 10000, 1); // Mission brief


  while ($.cs_time < 84485) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_27", 10000, 1); // Mission brief


  while ($.cs_time < 86381) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_28", 10000, 1); // Mission brief


  while ($.cs_time < 89181) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_29", 10000, 1); // Mission brief


  while ($.cs_time < 90941) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_30", 10000, 1); // Mission brief


  while ($.cs_time < 95519) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_31", 10000, 1); // Mission brief


  while ($.cs_time < 96827) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_32", 10000, 1); // Mission brief


  while ($.cs_time < 99557) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_33", 10000, 1); // Mission brief


  while ($.cs_time < 100981) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_34", 10000, 1); // Mission brief


  while ($.cs_time < 102213) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_35", 10000, 1); // Mission brief


  while ($.cs_time < 106309) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_36", 10000, 1); // Mission brief


  while ($.cs_time < 108929) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_37", 10000, 1); // Mission brief


  while ($.cs_time < 112581) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_38", 10000, 1); // Mission brief


  while ($.cs_time < 114053) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_39", 10000, 1); // Mission brief


  while ($.cs_time < 115737) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_40", 10000, 1); // Mission brief


  while ($.cs_time < 117845) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_41", 10000, 1); // Mission brief


  while ($.cs_time < 119447) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_42", 10000, 1); // Mission brief


  while ($.cs_time < 120817) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_43", 10000, 1); // Mission brief


  while ($.cs_time < 125301) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_44", 10000, 1); // Mission brief


  while ($.cs_time < 128354) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_45", 10000, 1); // Mission brief


  while ($.cs_time < 130562) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_46", 10000, 1); // Mission brief


  while ($.cs_time < 134137) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_47", 10000, 1); // Mission brief


  while ($.cs_time < 139457) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_48", 10000, 1); // Mission brief


  while ($.cs_time < 140909) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_49", 10000, 1); // Mission brief


  while ($.cs_time < 143688) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_50", 10000, 1); // Mission brief


  while ($.cs_time < 144983) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_51", 10000, 1); // Mission brief


  while ($.cs_time < 147884) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_52", 10000, 1); // Mission brief


  while ($.cs_time < 150069) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_53", 10000, 1); // Mission brief


  while ($.cs_time < 151669) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAWP_54", 10000, 1); // Mission brief


  while ($.cs_time < 152669) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  Text.PrintBig("BEACH1", 3000, 2); //"Ocean Drive"


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
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);
  Streaming.UnloadSpecialCharacter(5);
  Streaming.UnloadSpecialCharacter(6);
  Streaming.UnloadSpecialCharacter(7);
  Streaming.UnloadSpecialCharacter(8);
  Streaming.UnloadSpecialCharacter(9);
  Streaming.UnloadSpecialCharacter(10);
  Streaming.UnloadSpecialCharacter(11);
  Streaming.UnloadSpecialCharacter(12);
  Streaming.UnloadSpecialCharacter(13);
  Streaming.UnloadSpecialCharacter(14);
  Streaming.UnloadSpecialCharacter(15);
  Streaming.UnloadSpecialCharacter(16);
  Streaming.UnloadSpecialCharacter(17);
  Streaming.UnloadSpecialCharacter(18);
  Streaming.MarkModelAsNoLongerNeeded(WFYG1);
  Streaming.MarkModelAsNoLongerNeeded(WFYG2);
  Streaming.MarkModelAsNoLongerNeeded(yt_main_body);
  Streaming.MarkModelAsNoLongerNeeded(yt_main_body2);
  $.boat_scene.delete();
  Streaming.MarkModelAsNoLongerNeeded(big_poly_tings_b);


  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp03, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp04, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp05, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp24, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp25, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp28, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp32, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp35, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp41, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp47, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp50, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp51, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp64, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp70, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp71, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp72, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp73, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODargohull2, true /* TRUE */);

  // **************************************(END) PARTY ON THE BOAT CUT SCENE*********************************************



  Streaming.LoadSpecialCharacter(3, "igmerc2");
  Audio.LoadMissionAudio(1, "LAW1_1" as any);
  Audio.LoadMissionAudio(2, "LAW1_2" as any);
  Streaming.RequestModel(freeway);
  Streaming.RequestModel(cheetah);
  Streaming.RequestModel(infernus);
  Streaming.RequestModel(stretch);
  Streaming.RequestModel(banshee);
  Streaming.RequestCollision(-246.5, -1360.5);


  Streaming.LoadAllModelsNow();


  Streaming.Switch(true /* ON */);
  World.SwitchProcessing(true /* ON */);



  while (!(Streaming.HasModelLoaded(freeway)) || !(Streaming.HasModelLoaded(cheetah)) || !(Streaming.HasModelLoaded(infernus)) || !(Streaming.HasModelLoaded(stretch)) || !(Streaming.HasModelLoaded(banshee)) || !(Streaming.HasSpecialCharacterLoaded(3))) {
    await asyncWait(0);


  }


  World.ClearArea(-246.5, -1360.5, 7.1, 1.0, true /* TRUE */);
  World.ClearArea(-249.1, -1362.1, 7.1, 1.0, true /* TRUE */);
  World.ClearArea(-236.6, -1374.6, 7.1, 1.0, true /* TRUE */);
  World.ClearArea(-240.8, -1355.3, 7.1, 1.0, true /* TRUE */);
  World.ClearArea(-244.2, -1339.2, 7.1, 1.0, true /* TRUE */);
  World.ClearArea(-233.3, -1386.0, 7.1, 1.0, true /* TRUE */);


  $.party_car1 = Car.Create(cheetah, -236.6, -1374.6, -100.0);
  $.party_car1.setHeading(280.3);


  $.party_car2 = Car.Create(infernus, -240.8, -1355.3, -100.0);
  $.party_car2.setHeading(99.8);


  $.party_car3 = Car.Create(stretch, -244.2, -1339.2, -100.0);
  $.party_car3.setHeading(103.8);


  $.party_car4 = Car.Create(banshee, -233.3, -1386.0, -100.0);
  $.party_car4.setHeading(96.8);


  if ($.stored_any_vehicle == 1) {
    Streaming.RequestModel($.any_vehicle_model);
    Streaming.LoadAllModelsNow();
    $.any_vehicle = Car.Create($.any_vehicle_model, $.any_carx, $.any_cary, $.any_carz);
    $.any_vehicle.setHeading($.any_heading);
    $.any_vehicle.changeColor(Colour1_any, Colour2_any);
  }


  Streaming.LoadScene(-245.8, -1360.7, 7.1);


  $.player1.setCoordinates(-245.8, -1360.7, 7.1);
  $.player1.setHeading(276.0);


  $.cols_daughter = Char.Create(5 /* PEDTYPE_CIVFEMALE */, SPECIAL03, -244.5, -1362.1, 7.1);
  $.cols_daughter.setCantBeDraggedOut(true /* TRUE */);
  $.cols_daughter.setStayInCarWhenJacked(true /* TRUE */);
  merc_blip = Blip.AddForChar($.cols_daughter);
  merc_blip.remove();
  $.cols_daughter.setHeading(276.0);
  $.cols_daughter.setAnimGroup(46 /* ANIM_SEXY_WOMANPED */);
  $.cols_daughter.setRunning(true /* TRUE */);


  $.cols_daughter.followPlayer($.player1);


  Camera.RestoreJumpcut();
  Camera.SetBehindPlayer();
  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);


  await asyncWait(500);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  if (Char.IsDead($.cols_daughter)) {
    Text.PrintNow("LAW1_4", 5000, 1); //YOU KILLED HER!
    // SCM GOTO → mission_lawyer1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_lawyer1_failed"); // fallback: would break linear control flow
  }


  Text.PrintNow("LAW1_3", 5000, 1); //GO TO THE STRIP CLUB


  $.lawyer_blip1 = Blip.AddForCoord($.strip_clubx, $.strip_cluby, $.strip_clubz);


  TIMERB = 0;


  $.party_car1.markAsNoLongerNeeded();
  $.party_car2.markAsNoLongerNeeded();
  $.party_car3.markAsNoLongerNeeded();
  $.party_car4.markAsNoLongerNeeded();
  Streaming.MarkModelAsNoLongerNeeded(cheetah);
  Streaming.MarkModelAsNoLongerNeeded(infernus);
  Streaming.MarkModelAsNoLongerNeeded(stretch);
  Streaming.MarkModelAsNoLongerNeeded(banshee);
  if ($.stored_any_vehicle == 1) {
    Streaming.MarkModelAsNoLongerNeeded($.any_vehicle_model);
  }


  while (!($.cols_daughter.locateAnyMeans3D($.strip_clubx, $.strip_cluby, $.strip_clubz, 2.5, 2.5, 3.0, true /* TRUE */)) || !($.player1.locateStoppedAnyMeans3D($.strip_clubx, $.strip_cluby, $.strip_clubz, 2.5, 2.5, 3.0, true /* TRUE */))) {
    await asyncWait(0);
    if (Char.IsDead($.cols_daughter)) {
      Text.PrintNow("LAW1_4", 5000, 1); //YOU KILLED HER!
      // SCM GOTO → mission_lawyer1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_lawyer1_failed"); // fallback: would break linear control flow
    }
    if (!(Char.IsDead($.cols_daughter))) {
      if (!($.player1.locateAnyMeansChar3D($.cols_daughter, 30.0, 30.0, 10.0, false /* FALSE */))) {
        if (merc_blip_active == 0) {
          merc_blip.remove();
          merc_blip = Blip.AddForChar($.cols_daughter);
          merc_blip_active = 1;
        }
      }
      else {
        if (merc_blip_active == 1) {
          if (!($.cols_daughter.isInPlayersGroup($.player1))) {
            $.cols_daughter.leaveGroup();
            $.cols_daughter.followPlayer($.player1);
            merc_blip.remove();
            merc_blip_active = 0;
          }
        }
      }
      if ($.cols_daughter.isInAnyCar()) {
        if ($.first_two_samples == 0) {
          if (Audio.HasMissionAudioLoaded(1)) {
            Audio.PlayMissionAudio(1);
            Text.PrintNow("LAW1_5", 5000, 1);
          }
          if (Audio.HasMissionAudioFinished(1)) {
            await asyncWait(500);
            Audio.PlayMissionAudio(2);
            Text.PrintNow("LAW1_6", 5000, 1);
            $.first_two_samples = 1;
            TIMERB = 0;
          }


        }
        if (!(Char.IsDead($.cols_daughter))) {
          if (!($.cols_daughter.isOnAnyBike())) {
            if ($.second_two_samples == 0 && $.first_two_samples == 1 && TIMERB > 500) {
              if ($.audio_is_loading == 0) {
                Audio.LoadMissionAudio(1, "LAW1_3" as any);
                Audio.LoadMissionAudio(2, "LAW1_2" as any);
                $.audio_is_loading = 1;
              }
              else {
                if (Audio.HasMissionAudioLoaded(1) && Audio.HasMissionAudioLoaded(2)) {
                  $.audio_has_loaded = 1;
                }
              }
              if ($.audio_has_loaded == 1) {
                Audio.PlayMissionAudio(1);
                Text.PrintNow("LAW1_7", 5000, 1);
                if (Audio.HasMissionAudioFinished(1)) {
                  await asyncWait(1000);
                  Audio.PlayMissionAudio(2);
                  Text.PrintNow("LAW1_8", 5000, 1);
                  $.audio_is_loading = 0;
                  $.audio_has_loaded = 0;
                  $.second_two_samples = 1;
                  TIMERB = 0;
                  //SET_RADIO_CHANNEL 1 0

                }
              }
            }
          }
        }
        if (!(Char.IsDead($.cols_daughter))) {
          if ($.third_two_samples == 0 && $.first_two_samples == 1 && TIMERB > 1000) {
            if ($.audio_is_loading == 0) {
              Audio.LoadMissionAudio(1, "LAW1_4" as any);
              $.audio_is_loading = 1;
            }
            else {
              if (Audio.HasMissionAudioLoaded(1)) {
                $.audio_has_loaded = 1;
              }
            }
            if ($.audio_has_loaded == 1) {
              if (Audio.HasMissionAudioFinished(2)) {
                await asyncWait(500);
                Audio.PlayMissionAudio(1);
                Text.PrintNow("LAW1_9", 5000, 1);
                $.audio_is_loading = 0;
                $.audio_has_loaded = 0;
                $.third_two_samples = 1;
                TIMERB = 0;
                //SET_RADIO_CHANNEL 1 0

              }
            }
          }
        }


      }



    }
    if (Char.IsDead($.cols_daughter)) {
      Text.PrintNow("LAW1_4", 5000, 1); //YOU KILLED HER!
      // SCM GOTO → mission_lawyer1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_lawyer1_failed"); // fallback: would break linear control flow
    }


  }


  $.lawyer_blip1.remove();


  $.skip_timer1_acive = 0;

  // **************************************(START) COLS DAUGHTER WALKING INTO STRIP CLUB*********************************************


  Audio.LoadMissionAudio(1, "LAW1_5" as any);
  Audio.LoadMissionAudio(2, "LAW1_6" as any);


  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);


  if (!(Char.IsDead($.cols_daughter))) {
    $.player1.lookAtCharAlways($.cols_daughter);
  }


  Audio.SetMusicDoesFade(false /* FALSE */);
  Camera.DoFade(1000, 0 /* FADE_OUT */);
  await asyncWait(1000);


  $.strip_doors.delete();


  if (!(Char.IsDead($.cols_daughter))) {
    if ($.cols_daughter.isInAnyCar()) {
      World.ClearArea(98.1, -1475.3, 9.4, 1.0, true /* TRUE */);
      $.cols_daughter.warpFromCarToCoord(98.1, -1475.3, 9.4);
      $.cols_daughter.setHeading(33.0);
    }
    else {
      World.ClearArea(98.1, -1475.3, 9.4, 1.0, true /* TRUE */);
      $.cols_daughter.setCoordinates(98.1, -1475.3, 9.4);
      $.cols_daughter.setHeading(33.0);
    }
  }

  //open_strip_club_door_flag

  await asyncWait(0);


  Camera.DoFade(1000, 1 /* FADE_IN */);


  Camera.SetFixedPosition(93.918, -1480.097, 10.341, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(94.234, -1479.158, 10.476, 2 /* JUMP_CUT */); //High shot	of daughter



  if (!(Char.IsDead($.cols_daughter))) {
    $.cols_daughter.leaveGroup();
    $.cols_daughter.setRunning(false /* FALSE */);
    $.cols_daughter.setObjNoObj();
    $.cols_daughter.setObjGotoCoordOnFoot(97.0, -1471.4);
  }


  if (Audio.HasMissionAudioLoaded(1)) {
    Audio.PlayMissionAudio(1);
    Text.PrintNow("LAW1_10", 5000, 1);
  }



  TIMERB = 0;


  while (!($.cols_daughter.locateOnFoot2D(97.0, -1471.4, 0.4, 0.4, false /* FALSE */))) {
    await asyncWait(0);
    if (Char.IsDead($.cols_daughter)) {
      Text.PrintNow("LAW1_4", 5000, 1); //YOU KILLED HER!
      // SCM GOTO → mission_lawyer1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_lawyer1_failed"); // fallback: would break linear control flow
    }
    else {
      $.cols_daughter.setObjGotoCoordOnFoot(97.0, -1471.4);
    }
    if (TIMERB > 10000) {
      // SCM GOTO → mission_lawyer1_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_lawyer1_passed"); // fallback: would break linear control flow
    }
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      $.skip_timer1_acive = 1;
      // SCM GOTO → skip_timer2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_timer2"); // fallback: would break linear control flow
    }



  }


  if (!(Char.IsDead($.cols_daughter))) {
    $.cols_daughter.setObjNoObj();
    $.cols_daughter.setObjGotoCoordOnFoot(93.5, -1464.9);
    Camera.SetFixedPosition(98.558, -1472.228, 9.790, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(97.862, -1471.546, 10.0, 2 /* JUMP_CUT */); //Arse Shot of daughter
  }


  TIMERB = 0;


  while (!($.cols_daughter.locateOnFoot2D(93.5, -1464.9, 1.5, 1.5, false /* FALSE */))) {
    await asyncWait(0);
    if (Char.IsDead($.cols_daughter)) {
      Text.PrintNow("LAW1_4", 5000, 1); //YOU KILLED HER!
      // SCM GOTO → mission_lawyer1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_lawyer1_failed"); // fallback: would break linear control flow
    }
    else {
      $.cols_daughter.setObjGotoCoordOnFoot(93.5, -1464.9);
    }
    if (TIMERB > 10000) {
      // SCM GOTO → mission_lawyer1_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_lawyer1_passed"); // fallback: would break linear control flow
    }
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      $.skip_timer1_acive = 1;
      // SCM GOTO → skip_timer2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_timer2"); // fallback: would break linear control flow
    }
    if (TIMERB > 500) {
      if (Audio.HasMissionAudioFinished(1)) {
        Audio.PlayMissionAudio(2);
        Text.PrintNow("LAW1_11", 2000, 1);
      }
    }


  }
}





async function skip_timer2() {


  if ($.skip_timer1_acive == 1) {
    Camera.DoFade(1000, 0 /* FADE_OUT */);
    await asyncWait(1000);
    Camera.DoFade(1000, 1 /* FADE_IN */);


  }


  $.cols_daughter.delete();
  Camera.RestoreJumpcut();
  Audio.SetMusicDoesFade(true /* TRUE */);
  Text.ClearPrints();

  // **************************************(END) COLS DAUGHTER WALKING INTO STRIP CLUB*********************************************


  // SCM GOTO → mission_lawyer1_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_lawyer1_passed"); // fallback: would break linear control flow
}


// Mission lawyer1 failed


async function onFailed() {
  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed"
}



// mission lawyer1 passed


async function mission_lawyer1_passed() {


  $.flag_lawyer_mission1_passed = 1;
  Audio.PlayMissionPassedTune(1);
  Text.PrintWithNumberBig("M_PASS", 100, 5000, 1); //"Mission Passed!"
  $.player1.clearWantedLevel();
  $.player1.addScore(100);
  Stat.RegisterMissionPassed("LAW_1");
  Stat.PlayerMadeProgress(1);
  // START_NEW_SCRIPT lawyer_mission2_loop 


  Zone.SetCivilianCarInfo("OCEAND1", 1 /* DAY */, 200, 0, 200, 300, 0, 0, 100, 100, 100, 500, 500);
  Zone.SetCivilianCarInfo("OCEAND1", 0 /* NIGHT */, 200, 0, 250, 300, 0, 0, 100, 50, 100, 500, 500);


  Zone.SetCivilianCarInfo("OCEAND2", 1 /* DAY */, 200, 0, 200, 300, 0, 0, 100, 100, 100, 500, 500);
  Zone.SetCivilianCarInfo("OCEAND2", 0 /* NIGHT */, 200, 0, 250, 300, 0, 0, 100, 50, 100, 500, 500);


  Zone.SetCivilianCarInfo("BEACH1", 1 /* DAY */, 300, 0, 250, 250, 0, 0, 100, 100, 0, 500, 500);
  Zone.SetCivilianCarInfo("BEACH1", 0 /* NIGHT */, 300, 0, 250, 250, 0, 0, 100, 0, 100, 500, 500);


  Zone.SetCivilianCarInfo("BEACH2", 1 /* DAY */, 260, 0, 240, 250, 0, 0, 100, 50, 100, 500, 500);
  Zone.SetCivilianCarInfo("BEACH2", 0 /* NIGHT */, 200, 0, 300, 300, 0, 0, 100, 0, 100, 500, 500);


  Zone.SetCivilianCarInfo("STREET3", 1 /* DAY */, 300, 0, 350, 200, 0, 0, 100, 0, 50, 500, 500);
  Zone.SetCivilianCarInfo("STREET3", 0 /* NIGHT */, 250, 0, 300, 250, 0, 0, 150, 0, 50, 500, 500);


  Zone.SetCivilianCarInfo("CLUB2", 1 /* DAY */, 300, 0, 350, 200, 0, 0, 100, 0, 50, 500, 500);
  Zone.SetCivilianCarInfo("CLUB2", 0 /* NIGHT */, 250, 0, 300, 250, 0, 0, 150, 0, 50, 500, 500);


  Zone.SetCivilianCarInfo("SHOP2", 1 /* DAY */, 300, 0, 350, 200, 0, 0, 100, 0, 50, 500, 500);
  Zone.SetCivilianCarInfo("SHOP2", 0 /* NIGHT */, 250, 0, 300, 250, 0, 0, 100, 0, 100, 500, 500);


  $.clothes_pickup1 = Pickup.CreateClothes(226.4, -1265.6, 20.1, 1);
  $.hotel_clothes_created = 1;


  $.clothes_pickup2 = Pickup.CreateClothes(97.5, -1133.6, 10.4, 2);
  $.clothes2_created = 1;
  // START_NEW_SCRIPT cloth1 
}




// mission cleanup


async function cleanup() {


  ONMISSION = 0;
  $.timer_mobile_start = Clock.GetGameTimer();
  $.lawyer_blip1.remove();
  $.colar_cuffs_blip.remove();
  merc_blip.remove();
  $.strip_doors.delete();
  $.strip_doors = ScriptObject.CreateNoOffset(stripclbdrclsd, 97.203, -1469.731, 10.578);
  $.strip_doors.dontRemove();
  Streaming.MarkModelAsNoLongerNeeded(freeway);
  Streaming.MarkModelAsNoLongerNeeded(HMYST);
  Streaming.MarkModelAsNoLongerNeeded(cheetah);
  Streaming.MarkModelAsNoLongerNeeded(infernus);
  Streaming.MarkModelAsNoLongerNeeded(stretch);
  Streaming.MarkModelAsNoLongerNeeded(banshee);
  $.gen_car120.switch(101);
  Streaming.UnloadSpecialCharacter(3);
  Audio.ClearMissionAudio(1);
  Audio.ClearMissionAudio(2);
  Weather.Release();
  Mission.Finish();
}

export async function lawyer1() {
  // Mission start stuff


  await body();  // SCM GOSUB mission_start_lawyer1


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await onFailed();  // SCM GOSUB mission_lawyer1_failed
  }


  await cleanup();  // SCM GOSUB mission_cleanup_lawyer1



  // Variables for mission



  // LVAR_INT cs_jzgirla cs_jzgirlb player_nicking_bike Colour1_any Colour2_any merc_blip
  // LVAR_INT cs_rich cs_cgona cs_cgonb cs_cgonc cs_alscb cs_ervra merc_blip_active biker_bloke bike1
  // VAR_INT cols_daughter party_cars_created boat_scene
  // VAR_INT party_car1 party_car2 party_car3 party_car4 biker_out_of_bike
  // VAR_INT stored_any_vehicle any_vehicle any_vehicle_model
  // VAR_FLOAT strip_clubX strip_clubY strip_clubZ
  // VAR_FLOAT partyX partyY partyZ
  // VAR_FLOAT any_carX any_carY any_carZ any_heading

  // ***************************************Mission Start*************************************


}
