// Generated from main/baron1.sc

import { $ } from "../utils/vars.mts";

// *******************************************************************************************
// *******************************************************************************************
// *************************************baron mission 1***************************************
// **************************************INSANE CHASE*****************************************
// *******************************************************************************************
// *******************************************************************************************
// *******************************************************************************************

async function body() {


  ONMISSION = 1;
  Stat.RegisterMissionGiven();
  // SCRIPT_NAME baron1
  await asyncWait(0);


  Text.LoadMissionText("BARON1");
  Shortcut.SetDropoffPointForMission(-288.2, -487.5, 9.8, 275.0);


  await asyncWait(500);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  traitors_objectives_complete = 0;
  $.traitorx = 391.6;
  $.traitory = 251.2;
  $.traitorz = 14.0;
  roof_fires_created = 0;
  blow_up_crates_cut = 0;
  dumpster_cut = 0;
  player_too_close_to_traitor = 0;
  $.abandon_upsidedown_car = 0;


  World.SetExtraColors(8, false /* FALSE */);


  Audio.LoadMissionAudio(1, "mono10" as any);


  Streaming.SetAreaVisible(2 /* VIS_MANSION */);


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSdiaz");
  Streaming.LoadSpecialCharacter(3, "dgoona");
  Streaming.LoadSpecialCharacter(4, "dgoonc");
  Streaming.LoadSpecialModel(CUTOBJ01, "dcfan");
  Streaming.LoadSpecialModel(CUTOBJ02, "telly");

  //LOAD_SCENE 1218.4 -314.5 28.9


  Streaming.LoadAllModelsNow();


  Streaming.LoadScene(-378.3, -591.9, 25.8);


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasSpecialCharacterLoaded(4)) || !(Streaming.HasModelLoaded(CUTOBJ01)) || !(Streaming.HasModelLoaded(CUTOBJ02))) {
    await asyncWait(0);


  }


  Cutscene.LoadUncompressedAnim("CSplay");
  Cutscene.LoadUncompressedAnim("csdiaz");
  Cutscene.LoadUncompressedAnim("dgoonc");
  Cutscene.LoadUncompressedAnim("dcfan");
  Cutscene.LoadUncompressedAnim("telly");
  Cutscene.LoadUncompressedAnim("dgoona");


  Cutscene.Load("cok_1");
  World.ClearArea(-378.6, -552.6, 25.5, 15.0, true /* TRUE */);
  World.ClearArea(-379.0, -564.6, 19.8, 15.0, true /* TRUE */);
  World.SetPedDensityMultiplier(0.0);
  Cutscene.SetOffset(-378.62, -552.676, 18.534);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_diaz = CutsceneObject.Create(SPECIAL02);
  $.cs_diaz.setAnim("csdiaz");


  $.cs_dgoona = CutsceneObject.Create(SPECIAL03);
  $.cs_dgoona.setAnim("dgoona");


  $.cs_dgoonc = CutsceneObject.Create(SPECIAL04);
  $.cs_dgoonc.setAnim("dgoonc");


  $.cs_dcfan = CutsceneObject.Create(CUTOBJ01);
  Cutscene.SetAnimToLoop("dcfan");
  $.cs_dcfan.setAnim("dcfan");


  cs_telly = CutsceneObject.Create(CUTOBJ02);
  cs_telly.setAnim("telly");


  World.ClearArea(-379.2, -536.4, 16.2, 0.5, true /* TRUE */);
  $.player1.setCoordinates(-379.2, -536.4, 16.2);
  $.player1.setHeading(0.0);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 13) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK1_A", 10000, 1); // Mission brief


  while ($.cs_time < 5570) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK1_B", 10000, 1); // Mission brief


  while ($.cs_time < 10037) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK1_C", 10000, 1); // Mission brief


  while ($.cs_time < 11525) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK1_D", 10000, 1); // Mission brief


  while ($.cs_time < 13845) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK1_E", 10000, 1); // Mission brief


  while ($.cs_time < 19000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddMovingParticleEffect(17 /* POBJECT_FIREBALL_AND_SMOKE */, -375.4, -595.8, 25.75, 0.05, 0.05, 0.05, 0.2, 0, 0, 0, 30000);
  }


  while ($.cs_time < 24070) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK1_F", 10000, 1); // Mission brief


  while ($.cs_time < 27858) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK1_G", 10000, 1); // Mission brief


  while ($.cs_time < 29027) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK1_H", 10000, 1); // Mission brief


  while ($.cs_time < 34900) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK1_I", 10000, 1); // Mission brief


  while ($.cs_time < 42260) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK1_J", 10000, 1); // Mission brief


  while ($.cs_time < 45900) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK1_K", 10000, 1); // Mission brief


  while ($.cs_time < 53576) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  while ($.cs_time < 54076) {
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
  //SET_CAMERA_IN_FRONT_OF_PLAYER

  World.SetPedDensityMultiplier(1.0);
  World.ClearExtraColors(false /* FALSE */);


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ02);


  Streaming.SetAreaVisible(0 /* VIS_MAIN_MAP */);
  Streaming.LoadScene(-379.2, -536.4, 16.2);


  await asyncWait(500);


  Camera.DoFade(1500, 1 /* FADE_IN */);

  // START OF MISSION


  Text.PrintNow("COK1_10", 10000, 1); //Go and find the traitor at his house
  $.baron_blip1 = Blip.AddForCoord(380.3, 247.4, 10.0);


  Streaming.LoadSpecialCharacter(5, "SGc");
  Streaming.RequestModel(bfinject);
  Streaming.RequestModel(ruger);
  Streaming.RequestModel(barrel4);
  Streaming.RequestModel(faggio);
  Streaming.RequestModel(faketarget);
  Streaming.RequestModel(SGa);


  while (!(Streaming.HasSpecialCharacterLoaded(5)) || !(Streaming.HasModelLoaded(bfinject)) || !(Streaming.HasModelLoaded(ruger)) || !(Streaming.HasModelLoaded(barrel4)) || !(Streaming.HasModelLoaded(faggio)) || !(Streaming.HasModelLoaded(faketarget))) {
    await asyncWait(0);


  }


  while (!(Streaming.HasModelLoaded(SGa))) {
    await asyncWait(0);


  }



  while (!($.player1.locateStoppedInCar3D(380.3, 247.4, 10.0, 3.0, 3.0, 3.0, true /* TRUE */)) && !($.player1.locateOnFoot3D(380.3, 247.4, 10.0, 3.0, 3.0, 3.0, false /* FALSE */))) {
    await asyncWait(0);


  }


  $.baron_blip1.remove();


  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);


  Camera.SetFixedPosition(387.967, 246.690, 15.277, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(388.694, 247.372, 15.356, 2 /* JUMP_CUT */);


  Text.PrintNow("COK1_11", 5000, 1); //look through his window


  await asyncWait(1600);


  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  Camera.RestoreJumpcut();


  $.baron_blip1 = Blip.AddForCoord($.traitorx, $.traitory, $.traitorz);


  while (!($.player1.locateOnFoot3D($.traitorx, $.traitory, $.traitorz, 1.0, 1.0, 2.0, true /* TRUE */))) {
    await asyncWait(0);


  }


  $.baron_blip1.remove();


  World.ClearArea(370.99, 256.28, 18.4, 3.0, true /* TRUE */);


  traitor = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL05, 370.99, 256.28, 18.4);
  traitor.shutUp(true /* TRUE */);
  traitor.setHealth(600);
  traitor.clearThreatSearch();
  traitor.setHeading(224.7);
  $.baron_blip1 = Blip.AddForChar(traitor);
  traitor.setObjWaitOnFoot();
  traitor.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  traitor.setRunning(true /* TRUE */);


  $.gen_car55.switch(0);
  chase_moped = Car.Create(faggio, 376.9, 477.0, 11.2);
  chase_moped.setHeading(282.0);


  Audio.LoadMissionAudio(1, "COK1_1" as any);
  Audio.LoadMissionAudio(2, "COK1_4" as any);

  //CUT SCENE OF LOOKING IN TO BLOKES WINDOW***************************************************************************

  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);
  $.player1.setVisible(false /* FALSE */);
  $.player1.turnToFaceChar(traitor);




  Camera.SetFixedPosition(391.533, 250.984, 16.481, 0.0, 0.0, 0.0); //Look in window
  Camera.PointAtPoint(392.370, 251.500, 16.300, 2 /* JUMP_CUT */);
  TIMERB = 0;


  while (!(TIMERB > 500)) {
    await asyncWait(0);


  }


  Camera.SetInterpolationParameters(5.0, 1000);
  Camera.SetFixedPosition(391.533, 250.984, 16.481, 0.0, 0.0, 0.0); //Turn right
  Camera.PointAtPoint(392.496, 250.785, 16.300, 1 /* INTERPOLATION */);


  while (!(TIMERB > 2000)) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → skip_bloke_at_window_cut (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_bloke_at_window_cut"); // fallback: would break linear control flow
    }


  }


  Camera.SetInterpolationParameters(5.0, 1000);
  Camera.SetFixedPosition(391.533, 250.984, 16.481, 0.0, 0.0, 0.0); //Turn left
  Camera.PointAtPoint(392.370, 251.500, 16.300, 1 /* INTERPOLATION */);


  while (!(TIMERB > 3500)) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → skip_bloke_at_window_cut (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_bloke_at_window_cut"); // fallback: would break linear control flow
    }


  }


  if (!(Char.IsDead(traitor))) {
    Camera.SetInterpolationParameters(5.0, 1000);
    Camera.SetFixedPosition(391.533, 250.984, 16.481, 0.0, 0.0, 0.0); //Look at traitor
    Camera.PointAtPoint(390.645, 251.287, 16.578, 1 /* INTERPOLATION */);
  }


  while (!(TIMERB > 5500)) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → skip_bloke_at_window_cut (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_bloke_at_window_cut"); // fallback: would break linear control flow
    }


  }


  if (!(Char.IsDead(traitor))) {
    traitor.setObjRunToCoord(373.0, 257.4);
    traitor.setUsePednodeSeek(false /* FALSE */);
    Audio.PlayMissionAudio(1);
    Text.PrintNow("COK1_1", 2000, 1); //Oh shit
  }


  while (!(TIMERB > 6500)) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → skip_bloke_at_window_cut (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_bloke_at_window_cut"); // fallback: would break linear control flow
    }


  }
}



async function skip_bloke_at_window_cut() {


  $.player1.setCoordinates(391.3, 251.8, 14.4); //Bottom of stairs
  $.player1.setHeading(90.0);
  Camera.RestoreJumpcut();
  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  $.player1.setVisible(true /* TRUE */);


  roof_barrel1 = ScriptObject.Create(barrel4, 347.5, 417.4, 20.6);
  roof_barrel2 = ScriptObject.Create(barrel4, 352.9, 416.5, 20.6);


  if (!(Char.IsDead(traitor))) {
    World.ClearArea(358.7, 277.0, 22.5, 3.0, true /* TRUE */);
    traitor.setCoordinates(358.7, 277.0, 22.5);
    traitor.setHeading(247.0);
    traitor.giveWeapon(27 /* WEAPONTYPE_RUGER */, 30000);
    traitor.setCurrentWeapon(27 /* WEAPONTYPE_RUGER */);
  }


  Text.PrintNow("COK1_7", 5000, 2); //Don't let him get away!


  TIMERB = 0;


  while (!($.scplayer.locateAnyMeans3D(374.3, 265.5, 23.5, 2.0, 2.0, 3.0, false /* FALSE */))) {
    await asyncWait(0);
    if (Char.IsDead(traitor)) {
      Text.PrintNow("COK1_9", 5000, 2); //Not supposed to kill him!
      // SCM GOTO → mission_baron1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron1_failed"); // fallback: would break linear control flow
    }
    if (TIMERB > 60000) {
      Text.PrintNow("TEX1_5", 5000, 2); // He got away
      traitor.delete();
      // SCM GOTO → mission_baron1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron1_failed"); // fallback: would break linear control flow
    }


  }


  Weather.Force(0 /* WEATHER_SUNNY */);

  //CUT SCENE OF BLOKE SHOOTING AT PLAYER********************************************************************************

  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);
  $.player1.setMood(1 /* PLAYER_MOOD_PISSED_OFF */, 300000);


  if (!(Char.IsDead(traitor))) {
    Camera.SetFixedPosition(357.505, 277.646, 24.280, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(358.296, 277.044, 24.171, 2 /* JUMP_CUT */);
    traitor.setStayInSamePlace(true /* TRUE */);
    traitor.clearThreatSearch();
    $.scplayer.setObjNoObj();
    Char.SetThreatReactionRangeMultiplier(3.0);
    Audio.PlayMissionAudio(2);
    Text.PrintNow("COK1_4", 1000, 1); //Loser!
    if (!($.player1.isOnAnyBike())) {
      World.ClearArea(373.8, 265.3, 22.5, 2.0, true /* TRUE */);
      stunt_double = Char.Create(5 /* PEDTYPE_CIVFEMALE */, null, 373.8, 265.3, 22.5);
      stunt_double.setHealth(1000);
      stunt_double.setSuffersCriticalHits(false /* FALSE */);
      stunt_double.clearThreatSearch();
      stunt_double.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
      stunt_double.setHeading(48.0);
      Char.SetThreatReactionRangeMultiplier(2.0);
      traitor.setObjKillCharOnFoot(stunt_double);
      $.player1.setCoordinates(349.4, 278.0, 18.6); //window ledge
    }
    else {
      $.player1.setCoordinates(373.7, 265.5, 22.5);
      $.player1.setHeading(50.0);
      cheating_biker = $.player1.storeCarIsIn();
      Game.SetEveryoneIgnorePlayer($.player1, false /* Off */);
      fake_player = ScriptObject.Create(faketarget, 371.6, 267.7, 22.0);
      traitor.setAccuracy(100);
      traitor.setObjDestroyObject(fake_player);
    }


  }


  await asyncWait(500);


  if (!($.player1.isOnAnyBike())) {
    if (!(Char.IsDead(stunt_double))) {
      stunt_double.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 2000);
      $.scplayer.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 2000);
    }
  }


  if ($.player1.isOnAnyBike()) {
    if (!(Car.IsDead(cheating_biker))) {
      cheating_biker.burstTire(0);
      cheating_biker.burstTire(1);
      cheating_biker.setHealth(350);
    }
  }


  await asyncWait(1500);


  if (!(Char.IsDead(traitor))) {
    traitor.setStayInSamePlace(false /* FALSE */);
    traitor.clearThreatSearch();
    Char.SetThreatReactionRangeMultiplier(1.0);
    World.ClearArea(350.5, 317.5, 18.5, 2.0, true /* TRUE */);
    traitor.setCoordinates(350.5, 317.5, 18.5);
    traitor.setObjRunToCoord(351.6, 341.3);
  }


  if (!($.player1.isOnAnyBike())) {
    stunt_double.delete();
    $.player1.setCoordinates(373.8, 265.3, 22.4);
    $.player1.setHeading(48.0);
  }


  Hud.SwitchWidescreen(false /* OFF */);
  Camera.RestoreJumpcut();


  Audio.LoadMissionAudio(1, "COK1_2" as any);
  Audio.LoadMissionAudio(2, "COK1_5" as any);


  TIMERB = 0;



  await asyncWait(400);


  $.player1.setControl(true /* ON */);


  if (!($.player1.isOnAnyBike())) {
    $.scplayer.setWaitState(0 /* WAITSTATE_FALSE */, 0);
    $.scplayer.clearWaitState();
  }


  World.ClearArea(417.1, 464.3, 27.4, 2.0, true /* TRUE */);


  if (!(Char.IsDead(traitor))) {
    $.traitors_car = Car.Create(bfinject, 417.1, 464.3, 27.4);
    $.traitors_car.setHeavy(true /* TRUE */);
  }


  World.ClearAreaOfCars(361.9, 269.1, 26.0, 336.5, 380.8, 15.0);
  World.ClearAreaOfCars(334.4, 381.4, 26.0, 383.9, 478.7, 15.0);


  while (!(traitor.isInCar($.traitors_car))) {
    await asyncWait(0);
    if (Car.IsDead($.traitors_car)) {
      Text.PrintNow("COK1_9", 5000, 2); //Not supposed to kill him!
      // SCM GOTO → mission_baron1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron1_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead(traitor)) {
      Text.PrintNow("COK1_9", 5000, 2); //Not supposed to kill him!
      // SCM GOTO → mission_baron1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron1_failed"); // fallback: would break linear control flow
    }
    if (!(Char.IsDead(traitor))) {
      if (traitors_objectives_complete == 0) {
        if (traitor.locateAnyMeans3D(351.6, 341.3, 18.0, 1.0, 1.0, 5.0, false /* FALSE */)) {
          traitor.setObjRunToCoord(351.6, 347.0); // Goto plank1b
          traitor.setUsePednodeSeek(false /* FALSE */);
        }
        if (traitor.locateAnyMeans3D(351.6, 347.0, 18.0, 1.0, 1.0, 5.0, false /* FALSE */)) {
          traitor.setObjRunToCoord(350.8, 358.0);
          traitor.setUsePednodeSeek(false /* FALSE */);
        }
        if (traitor.locateAnyMeans3D(350.8, 358.0, 18.0, 1.0, 1.0, 5.0, false /* FALSE */)) {
          traitor.setObjSprintToCoord(350.4, 375.6); //Goto plank2a
          traitor.setUsePednodeSeek(false /* FALSE */);
        }
        if (traitor.locateAnyMeans3D(350.4, 375.6, 18.0, 1.0, 1.0, 5.0, false /* FALSE */)) {
          traitor.setObjRunToCoord(350.4, 380.5); //Goto plank2b
          traitor.setUsePednodeSeek(false /* FALSE */);
        }
        if (traitor.locateAnyMeans3D(350.4, 380.5, 19.5, 1.0, 1.0, 5.0, false /* FALSE */)) {
          traitor.setObjRunToCoord(349.8, 389.3);
          traitor.setUsePednodeSeek(false /* FALSE */);
        }
        if (traitor.locateAnyMeans3D(349.8, 389.3, 18.0, 1.0, 1.0, 5.0, false /* FALSE */)) {
          traitor.setObjSprintToCoord(346.0, 405.6);
          traitor.setUsePednodeSeek(false /* FALSE */);
        }
        if (traitor.locateAnyMeans3D(346.0, 405.6, 18.0, 1.0, 1.0, 5.0, false /* FALSE */)) {
          traitor.setObjSprintToCoord(349.9, 415.8);
          traitor.setUsePednodeSeek(false /* FALSE */);
        }
        if (traitor.locateAnyMeans3D(349.9, 415.8, 18.0, 1.0, 1.0, 5.0, false /* FALSE */)) {
          traitor.setObjRunToCoord(355.1, 423.7);
          traitor.setUsePednodeSeek(false /* FALSE */);
        }
        if (blow_up_crates_cut == 0) {
          if (TIMERB > 60000) {
            Text.PrintNow("TEX1_5", 5000, 2); // He got away
            traitor.delete();
            // SCM GOTO → mission_baron1_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_baron1_failed"); // fallback: would break linear control flow
          }
        }
        if (traitor.locateAnyMeans3D(355.1, 423.7, 20.6, 1.0, 1.0, 5.0, false /* FALSE */)) {
          if ($.player1.locateAnyMeans3D(355.1, 423.7, 20.6, 10.0, 11.0, 7.0, false /* FALSE */)) {
            if (Audio.HasMissionAudioLoaded(2)) {
              Audio.PlayMissionAudio(2);
              Text.PrintNow("COK1_5", 2000, 1); //You better keep on running, asshole!
            }
            player_too_close_to_traitor = 1;
            blow_up_crates_cut = 1;
          }
          if (blow_up_crates_cut == 0) {
            traitor.setObjWaitOnFoot();
            if ($.player1.locateAnyMeans3D(352.4, 415.3, 25.0, 10.0, 20.0, 7.0, false /* FALSE */)) {
              $.player1.setControl(false /* OFF */); //BLOW UP BARRELS**************************************
              Hud.SwitchWidescreen(true /* ON */);
              Camera.SetFixedPosition(357.699, 429.507, 19.518, 0.0, 0.0, 0.0);
              Camera.PointAtPoint(357.237, 428.620, 19.533, 2 /* JUMP_CUT */);
              traitor.setCoordinates(356.6, 428.2, 18.1);
              traitor.setHeading(158.0);
              if (Audio.HasMissionAudioLoaded(1)) {
                Audio.PlayMissionAudio(1);
                Text.PrintNow("COK1_2", 2000, 1); //Too slow grandad
              }
              await asyncWait(600);
              if (!(Char.IsDead(traitor))) {
                traitor.setAccuracy(100);
                traitor.setObjDestroyObject(roof_barrel2);
              }
              await asyncWait(500);
              roof_barrel1_fire = ScriptFire.Create(347.5, 417.4, 20.6);
              roof_barrel2_fire = ScriptFire.Create(350.9, 412.6, 20.6);
              $.roof_barrel3_fire = ScriptFire.Create(349.5, 416.6, 20.6);
              await asyncWait(900);
              if (!(Char.IsDead(traitor))) {
                traitor.setObjNoObj();
                traitor.setStayInSamePlace(false /* FALSE */);
                traitor.clearThreatSearch();
                traitor.setObjSprintToCoord(366.0, 444.6);
                traitor.setUsePednodeSeek(false /* FALSE */);
              }
              $.scplayer.setHeading(344.0);
              Camera.SetBehindPlayer();
              Camera.RestoreJumpcut();
              $.player1.setControl(true /* ON */);
              Hud.SwitchWidescreen(false /* OFF */);
              if (Audio.HasMissionAudioLoaded(2)) {
                Audio.PlayMissionAudio(2);
                Text.PrintNow("COK1_5", 2000, 1); //You better keep on running, asshole!
              }
              blow_up_crates_cut = 1;


            }
          }
          else {
            if (!(Char.IsDead(traitor))) {
              traitor.setObjSprintToCoord(360.4, 432.9);
              traitor.setUsePednodeSeek(false /* FALSE */);
            }
          }
        }
        if (!(Char.IsDead(traitor))) {
          if (traitor.locateAnyMeans3D(366.0, 444.6, 19.7, 1.0, 1.0, 5.0, false /* FALSE */)) {
            traitor.setObjSprintToCoord(374.0, 456.3);
            traitor.setUsePednodeSeek(false /* FALSE */);
          }
          if (traitor.locateAnyMeans3D(374.0, 456.3, 19.7, 1.0, 1.0, 5.0, false /* FALSE */)) {
            traitor.setObjRunToCoord(374.2, 465.8);
            traitor.setUsePednodeSeek(false /* FALSE */);
          }
          if (traitor.locateAnyMeans3D(374.2, 465.8, 19.4, 1.0, 1.0, 5.0, false /* FALSE */)) {
            if (dumpster_cut == 0) {
              if (!(Car.IsDead($.traitors_car))) {
                $.traitors_car.setStrong(true /* TRUE */);
                $.traitors_car.setCoordinates(368.4, 478.6, 10.4);
                traitors_mate = Char.CreateInsideCar($.traitors_car, 9 /* PEDTYPE_GANG_STREET */, SGa);
                traitors_mate.giveWeapon(27 /* WEAPONTYPE_RUGER */, 30000);
                traitors_mate.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                traitors_mate.clearThreatSearch();
                $.traitors_car.setHeading(311.0);
                $.traitors_car.setCruiseSpeed(0.0);
                traitor.setObjRunToCoord(375.5, 471.4); //SKIP
                traitor.setUsePednodeSeek(false /* FALSE */);
                $.player1.setControl(false /* OFF */);
                Hud.SwitchWidescreen(true /* ON */);
                Camera.SetFixedPosition(382.421, 481.019, 12.024, 0.0, 0.0, 0.0); //JUMP ON TO DUMPSTER
                Camera.PointAtPoint(381.675, 480.371, 12.177, 2 /* JUMP_CUT */);
                dumpster_cut = 1;
              }
            }
          }


        }


      }


    }
    if (roof_fires_created == 1 && blow_up_crates_cut == 1) {
      if (!(Char.IsDead(traitor))) {
        if (traitor.locateAnyMeans3D(355.1, 423.7, 20.6, 1.0, 1.0, 5.0, false /* FALSE */)) {
          traitor.setObjRunToCoord(366.0, 444.6);
        }
      }
    }
    if (player_too_close_to_traitor == 1) {
      if (!(Char.IsDead(traitor))) {
        if (traitor.locateAnyMeans3D(355.1, 423.7, 20.6, 1.0, 1.0, 5.0, false /* FALSE */)) {
          traitor.setObjRunToCoord(366.0, 444.6);
        }
      }
    }
    if (roof_barrel1.hasBeenDamaged() || roof_barrel2.hasBeenDamaged()) {
      if (roof_fires_created == 0) {
        if (blow_up_crates_cut == 0) {
          roof_barrel1_fire = ScriptFire.Create(347.5, 417.4, 20.6);
          roof_barrel2_fire = ScriptFire.Create(350.9, 412.6, 20.6);
          $.roof_barrel3_fire = ScriptFire.Create(349.5, 416.6, 20.6);
          roof_fires_created = 1;
          blow_up_crates_cut = 1;
        }
      }
    }
    if (!(Char.IsDead(traitor))) {
      if (traitors_objectives_complete == 0) {
        if (traitor.locateAnyMeans3D(375.5, 471.4, 14.1, 3.0, 3.0, 5.0, false /* FALSE */)) {
          if (!(Car.IsDead($.traitors_car))) {
            traitor.setObjEnterCarAsPassenger($.traitors_car);
            traitors_objectives_complete = 1;
          }
        }
      }
    }
    if (Car.IsDead($.traitors_car)) {
      Text.PrintNow("COK1_9", 5000, 2); //Not supposed to kill him!
      // SCM GOTO → mission_baron1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron1_failed"); // fallback: would break linear control flow
    }


  }


  $.player1.setHeading(0.0);
  Camera.SetBehindPlayer();
  Camera.RestoreJumpcut();
  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  Text.PrintNow("COK1_8", 15000, 2); //Quick! Grab a car and follow him!


  await asyncWait(2000);


  if (!(Char.IsDead(traitor))) {
    if (!(Car.IsDead($.traitors_car))) {
      traitor.shutUp(false /* FALSE */);
      traitor.setObjNoObj();
      traitor.warpFromCarToCoord(349.4, 278.0, 18.6);
      traitor.attachToCar($.traitors_car, 0.4, 0.0, 1.0, 2 /* FACING_BACK */, 180.0, 27 /* WEAPONTYPE_RUGER */);
      traitor.setThreatSearch(1 /* THREAT_PLAYER1 */);
      traitor.setAccuracy(50);
      traitor.setObjKillPlayerOnFoot($.player1);
      traitor.setRunning(true /* TRUE */);
      if (!(Car.IsDead($.traitors_car))) {
        $.traitors_car.gotoCoordinates(541.1, 482.6, 10.8);
        $.traitors_car.setCruiseSpeed(18.0);
        $.traitors_car.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
      }


    }
  }


  TIMERA = 0;


  if (!(Char.IsDead(traitor))) {
  }


  while (!($.player1.locateAnyMeans3D(34.9, 1086.8, 14.5, 20.0, 20.0, 10.0, false /* FALSE */)) || !(traitor.locateAnyMeans3D(34.9, 1086.8, 14.5, 15.0, 15.0, 10.0, false /* FALSE */))) {
    await asyncWait(0);
    if (Char.IsDead(traitor)) {
      Text.PrintNow("COK1_9", 5000, 2); //Not supposed to kill him!
      // SCM GOTO → mission_baron1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron1_failed"); // fallback: would break linear control flow
    }
    if (!($.player1.locateAnyMeansChar2D(traitor, 180.0, 180.0, false /* FALSE */))) {
      Text.PrintNow("TEX1_5", 5000, 2); // He got away
      // SCM GOTO → mission_baron1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron1_failed"); // fallback: would break linear control flow
    }
    if (!(Char.IsDead(traitor))) {
      if (!(Char.IsDead(traitors_mate))) {
        if (!(Car.IsDead($.traitors_car))) {
          if (!(traitors_mate.isInCar($.traitors_car))) {
            traitor.detachFromCar();
            traitors_mate.setObjKillPlayerOnFoot($.player1);
          }
          if ($.traitors_car.isInWater()) {
            traitor.detachFromCar();
          }
        }
      }
      if (!(Char.IsDead(traitor))) {
        if (!(Car.IsDead($.traitors_car))) {
          if (!(traitor.isInCar($.traitors_car))) {
            if (!(Char.IsDead(traitors_mate))) {
              if (!(traitors_mate.isInCar($.traitors_car))) {
                $.traitors_car.setCruiseSpeed(0.0);
              }
            }
            else {
              $.traitors_car.setCruiseSpeed(0.0);
            }
          }
        }
      }
      if (!(Car.IsDead($.traitors_car))) {
        if ($.player1.isInCar($.traitors_car)) {
          if (!(Char.IsDead(traitor))) {
            traitor.detachFromCar();
            if (!(Car.IsDead($.traitors_car))) {
              if (TIMERA > 1000) {
                traitor.setRunning(true /* TRUE */);
                traitor.setObjEnterCarAsDriver($.traitors_car);
                TIMERA = 0;
              }
            }
          }
        }
      }
      if (Char.IsDead(traitors_mate)) {
        if (!(Car.IsDead($.traitors_car))) {
          traitor.detachFromCar();
          if ($.traitors_car.isHealthGreater(269)) {
            traitor.setObjEnterCarAsDriver($.traitors_car);
            $.traitors_car.setCruiseSpeed(0.0);
          }
          else {
            if (TIMERA > 1500) {
              traitor.setRunning(true /* TRUE */);
              traitor.setObjStealAnyCar();
              TIMERA = 0;
            }
          }
        }
      }
      if ($.abandon_upsidedown_car == 0) {
        if (!(Car.IsDead($.traitors_car))) {
          if ($.traitors_car.isUpsidedown()) {
            if (!(traitor.isInCar($.traitors_car))) {
              traitor.detachFromCar();
              traitor.setObjStealAnyCar();
            }
            else {
              traitor.setObjLeaveCar($.traitors_car);
            }
            $.abandon_upsidedown_car = 1;
          }
        }
      }
      if (!(Car.IsDead($.traitors_car))) {
        if (!($.traitors_car.isHealthGreater(270))) {
          $.traitors_car.setCruiseSpeed(10.0);
          traitor.detachFromCar();
          if (traitor.isInCar($.traitors_car)) {
            traitor.setObjLeaveCar($.traitors_car);
            while (traitor.isInCar($.traitors_car)) {
              await asyncWait(0);
              if (Char.IsDead(traitor)) {
                Text.PrintNow("COK1_9", 5000, 2); //Not supposed to kill him!
                // SCM GOTO → mission_baron1_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_baron1_failed"); // fallback: would break linear control flow
              }
              if (Car.IsDead($.traitors_car)) {
              }
            }
          }
          if (traitor.isInAnyCar()) {
            $.traitors_car = traitor.storeCarIsIn();
            if (!(Car.IsDead($.traitors_car))) {
              $.traitors_car.gotoCoordinates(34.9, 1086.8, 14.5);
              $.traitors_car.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
            }
          }
          else {
            if (TIMERA > 1500) {
              traitor.setRunning(true /* TRUE */);
              traitor.setObjStealAnyCar();
              TIMERA = 0;
            }
          }
        }
      }
      else {
        if (traitor.isInAnyCar()) {
          $.traitors_car = traitor.storeCarIsIn();
          if (!(Car.IsDead($.traitors_car))) {
            $.traitors_car.gotoCoordinates(34.9, 1086.8, 14.5);
            $.traitors_car.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
          }
        }
        else {
          if (TIMERA > 1500) {
            traitor.setRunning(true /* TRUE */);
            traitor.setObjStealAnyCar();
            TIMERA = 0;
          }
        }


      }


    }
    if (!(Char.IsDead(traitors_mate))) {
      if (!(Car.IsDead($.traitors_car))) {
        if (traitors_mate.isInCar($.traitors_car)) {
          if ($.player1.locateAnyMeansChar2D(traitor, 50.0, 50.0, false /* FALSE */)) {
            $.traitors_car.setCruiseSpeed(34.0);
            traitor.setAccuracy(60);
          }
          else {
            $.traitors_car.setCruiseSpeed(18.0);
            traitor.setAccuracy(50);
          }
          if (traitor.locateAnyMeans3D(541.1, 482.6, 10.8, 8.0, 8.0, 6.0, false /* FALSE */)) {
            $.traitors_car.gotoCoordinates(527.9, 974.9, 17.6);
          }
          if (traitor.locateAnyMeans3D(527.9, 974.9, 17.6, 8.0, 8.0, 6.0, false /* FALSE */)) {
            $.traitors_car.gotoCoordinates(455.1, 1285.5, 17.3);
          }
          if (traitor.locateAnyMeans3D(455.1, 1285.5, 17.3, 8.0, 8.0, 6.0, false /* FALSE */)) {
            $.traitors_car.gotoCoordinates(266.2, 1139.9, 21.1);
          }
        }
      }
    }
    if (!(Char.IsDead(traitor))) {
      if (!(Car.IsDead($.traitors_car))) {
        if (traitor.isInCar($.traitors_car)) {
          if ($.player1.locateAnyMeansChar2D(traitor, 50.0, 50.0, false /* FALSE */)) {
            $.traitors_car.setCruiseSpeed(34.0);
          }
          else {
            $.traitors_car.setCruiseSpeed(20.0);
          }
          if (traitor.locateAnyMeans3D(541.1, 482.6, 10.8, 8.0, 8.0, 6.0, false /* FALSE */)) {
            $.traitors_car.gotoCoordinates(527.9, 974.9, 17.6);
          }
          if (traitor.locateAnyMeans3D(527.9, 974.9, 17.6, 8.0, 8.0, 6.0, false /* FALSE */)) {
            $.traitors_car.gotoCoordinates(455.1, 1285.5, 17.3);
          }
          if (traitor.locateAnyMeans3D(455.1, 1285.5, 17.3, 8.0, 8.0, 6.0, false /* FALSE */)) {
            $.traitors_car.gotoCoordinates(266.2, 1139.9, 21.1);
          }
        }
      }
    }
    if (traitor.locateAnyMeans3D(266.2, 1139.9, 21.1, 8.0, 8.0, 6.0, false /* FALSE */)) {
      if (!(Car.IsDead($.traitors_car))) {
        $.traitors_car.gotoCoordinates(34.9, 1086.8, 14.5);
      }
    }
    if (roof_barrel1.hasBeenDamaged() || roof_barrel2.hasBeenDamaged()) {
      if (roof_fires_created == 0) {
        roof_barrel1_fire = ScriptFire.Create(347.5, 417.4, 20.6);
        roof_barrel2_fire = ScriptFire.Create(350.9, 412.6, 20.6);
        $.roof_barrel3_fire = ScriptFire.Create(349.5, 416.6, 20.6);
        roof_fires_created = 1;
      }
    }


  }


  $.player1.setControl(false /* OFF */);


  await asyncWait(0);


  Hud.SwitchWidescreen(true /* ON */);


  if (!(Char.IsDead(traitor))) {
    if (traitor.isInAnyCar()) {
      traitor.warpFromCarToCoord(56.4, 1081.1, 15.0);
    }
    traitor.detachFromCar();
    traitor.clearThreatSearch();
    traitor.setObjNoObj();
    traitor.setCoordinates(56.4, 1081.1, 15.0);
    traitor.setHeading(275.0);
    traitor.setObjRunToCoord(72.4, 1082.8);
    traitor.setUsePednodeSeek(false /* FALSE */);
  }


  Camera.SetFixedPosition(79.834, 1069.695, 14.212, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(79.273, 1070.427, 14.597, 2 /* JUMP_CUT */);


  await asyncWait(3000);


  traitor.delete();


  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  Camera.RestoreJumpcut();


  // SCM GOTO → mission_baron1_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_baron1_passed"); // fallback: would break linear control flow
}



// Mission baron1 failed


async function onFailed() {
  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed"
}




// mission baron1 passed


async function mission_baron1_passed() {


  $.flag_baron_mission1_passed = 1;
  Audio.PlayMissionPassedTune(1);
  Text.PrintWithNumberBig("M_PASS", 1000, 5000, 1); //"Mission Passed!"
  $.player1.clearWantedLevel();
  $.player1.addScore(1000);
  Stat.RegisterMissionPassed("COK_1");
  Stat.PlayerMadeProgress(1);
  $.stubby_in_stock = 1;
  $.katana_in_stock = 1;
  // START_NEW_SCRIPT baron_mission2_loop 
}




// mission cleanup


async function cleanup() {
  $.timer_mobile_start = Clock.GetGameTimer();
  $.baron_blip1.remove();
  Streaming.MarkModelAsNoLongerNeeded(bfinject);
  Streaming.MarkModelAsNoLongerNeeded(ruger);
  Streaming.MarkModelAsNoLongerNeeded(barrel4);
  Streaming.MarkModelAsNoLongerNeeded(faggio);
  Streaming.MarkModelAsNoLongerNeeded(faketarget);
  Streaming.MarkModelAsNoLongerNeeded(sga);
  $.traitors_car.markAsNoLongerNeeded();
  traitor.markAsNoLongerNeeded();
  traitors_mate.markAsNoLongerNeeded();
  Streaming.UnloadSpecialCharacter(5);
  Char.SetThreatReactionRangeMultiplier(0.0);
  $.gen_car55.switch(101);
  if (!(Car.IsDead($.traitors_car))) {
    $.traitors_car.setStrong(false /* FALSE */);
  }
  ONMISSION = 0;
  Audio.ClearMissionAudio(1);
  Audio.ClearMissionAudio(2);
  Weather.Release();
  stunt_double.delete();
  roof_barrel1.markAsNoLongerNeeded();
  roof_barrel2.markAsNoLongerNeeded();
  World.RemoveAllScriptFires();
  Mission.Finish();
}

export async function baron1() {
  // The Chase

  // Mission start stuff


  await body();  // SCM GOSUB mission_start_baron1


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await onFailed();  // SCM GOSUB mission_baron1_failed
  }


  await cleanup();  // SCM GOSUB mission_cleanup_baron1




  // Variables for mission



  // LVAR_INT traitor traitors_objectives_complete roof_fires_created blow_up_crates_cut
  // LVAR_INT fake_player dumpster_cut cheating_biker player_too_close_to_traitor
  // LVAR_INT traitors_mate chase_moped cs_telly
  // LVAR_INT stunt_double roof_barrel1 roof_barrel2 roof_barrel1_fire roof_barrel2_fire
  // VAR_INT roof_barrel3_fire traitors_car abandon_upsidedown_car
  // VAR_FLOAT traitorX traitorY traitorZ

  // ***************************************Mission Start***************************************


}
