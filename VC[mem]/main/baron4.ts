// Generated from main/baron4.sc

import { $ } from "../utils/vars.mts";

// *******************************************************************************************
// *******************************************************************************************
// *************************************baron mission 4***************************************
// ****************************************COKE RUN*******************************************
// *******************************************************************************************
// *******************************************************************************************
// *******************************************************************************************

async function body() {


  Stat.RegisterMissionGiven();
  ONMISSION = 1;
  // SCRIPT_NAME baron4
  await asyncWait(0);


  Text.LoadMissionText("BARON4");
  Shortcut.SetDropoffPointForMission(-288.2, -487.5, 9.8, 275.0);


  Weather.Force(0 /* WEATHER_SUNNY */);



  $.audio_is_loading = 0;
  $.audio_has_loaded = 0;
  $.first_two_samples = 0;
  $.second_two_samples = 0;
  $.third_two_samples = 0;
  $.forth_two_samples = 0;
  $.fifth_two_samples = 0;
  $.sixth_two_samples = 0;
  vance_dance_samp_play = 0;
  $.jetty_chars_created = 0;
  $.boat_goto_coords = 0;
  $.you_want_some_samp = 0;
  $.eat_it_samp = 0;
  $.sleep_fish_samp = 0;
  $.created_coke_boat = 0;
  $.set_heli_chopper_off = 0;


  Streaming.SetAreaVisible(2 /* VIS_MANSION */);
  World.SetExtraColors(8, false /* FALSE */);


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSdiaz");
  Streaming.LoadSpecialModel(CUTOBJ01, "dcfan");
  Streaming.LoadSpecialModel(CUTOBJ02, "deagl");
  Streaming.LoadSpecialModel(CUTOBJ03, "shotvcr");

  //LOAD_SCENE 1218.4 -314.5 28.9


  Streaming.LoadAllModelsNow();


  Streaming.LoadScene(-378.3, -591.9, 25.8);


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasModelLoaded(CUTOBJ01)) || !(Streaming.HasModelLoaded(CUTOBJ02)) || !(Streaming.HasModelLoaded(CUTOBJ03))) {
    await asyncWait(0);


  }


  Cutscene.LoadUncompressedAnim("CSplay");
  Cutscene.LoadUncompressedAnim("csdiaz");
  Cutscene.LoadUncompressedAnim("dcfan");
  Cutscene.LoadUncompressedAnim("deagl");
  Cutscene.LoadUncompressedAnim("shotvcr");


  Cutscene.Load("cok_4a");
  Cutscene.SetOffset(-378.62, -552.676, 18.534);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_diaz = CutsceneObject.Create(SPECIAL02);
  $.cs_diaz.setAnim("csdiaz");


  $.cs_dcfan = CutsceneObject.Create(CUTOBJ01);
  Cutscene.SetAnimToLoop("dcfan");
  $.cs_dcfan.setAnim("dcfan");


  $.cs_deagl = CutsceneObject.Create(CUTOBJ02);
  $.cs_deagl.setAnim("deagl");


  $.cs_shotvcr = CutsceneObject.Create(CUTOBJ03);
  $.cs_shotvcr.setAnim("shotvcr");



  World.ClearArea(-412.3, -607.0, 16.2, 1.0, true /* TRUE */);
  $.player1.setCoordinates(-412.3, -607.0, 16.2);
  $.player1.setHeading(180.0);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 3123) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK4_A", 10000, 1); // Mission brief


  while ($.cs_time < 5921) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK4_B", 10000, 1); // Mission brief


  while ($.cs_time < 7616) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK4_C", 10000, 1); // Mission brief


  while ($.cs_time < 14933) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }

  //gunshot

  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-407.737, -559.252, 18.852, -404.218, -559.623, 18.5);
  }


  while ($.cs_time < 14966) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }

  //impact

  if (!(Cutscene.WasSkipped())) {
    Fx.AddMovingParticleEffect(17 /* POBJECT_FIREBALL_AND_SMOKE */, -408.2, -559.9, 18.7, 0.05, 0.05, 0.05, 0.05, 0, 0, 0, 500);
  }


  while ($.cs_time < 15433) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }

  //gunshot

  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-407.729, -559.322, 18.842, -408.281, -559.653, 18.5);
  }


  while ($.cs_time < 15466) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }

  //impact


  while ($.cs_time < 15656) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK4_D", 10000, 1); // Mission brief


  while ($.cs_time < 18764) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK4_E", 10000, 1); // Mission brief


  while ($.cs_time < 21799) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK4_F", 10000, 1); // Mission brief


  while ($.cs_time < 22980) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK4_G", 10000, 1); // Mission brief


  while ($.cs_time < 24759) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK4_H", 10000, 1); // Mission brief


  while ($.cs_time < 26995) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK4_I", 10000, 1); // Mission brief


  while ($.cs_time < 31939) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK4_J", 10000, 1); // Mission brief


  while ($.cs_time < 35149) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK4_K", 10000, 1); // Mission brief


  while ($.cs_time < 40362) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK4_L", 10000, 1); // Mission brief


  while ($.cs_time < 44300) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK4_M", 10000, 1); // Mission brief


  while ($.cs_time < 47740) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK4_N", 10000, 1); // Mission brief


  while ($.cs_time < 50131) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK4_O", 10000, 1); // Mission brief


  while ($.cs_time < 52131) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  while ($.cs_time < 56064) {
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

  Camera.SetBehindPlayer();
  World.ClearExtraColors(false /* FALSE */);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ02);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ03);
  World.RemoveParticleEffectsInArea(-406.8, -552.0, 25.0, -437.9, -569.4, 10.0);


  Streaming.SetAreaVisible(0 /* VIS_MAIN_MAP */);


  Streaming.LoadScene(-412.3, -607.0, 16.2);


  await asyncWait(500);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  Text.PrintNow("COK4_31", 5000, 2); //Go to the fastest boat at the jetty!


  coke_boat_blip = Blip.AddForCoord(-378.6, -649.8, 10.6);


  $.sphere_cok4 = Sphere.Create(-378.6, -649.8, 10.6, 4.0);


  Streaming.RequestModel(squalo);
  Streaming.RequestModel(speeder);
  Streaming.RequestModel(marquis);
  Streaming.RequestModel(RUGER);
  Streaming.RequestModel(CBa);


  while (!(Streaming.HasModelLoaded(squalo)) || !(Streaming.HasModelLoaded(speeder)) || !(Streaming.HasModelLoaded(marquis)) || !(Streaming.HasModelLoaded(RUGER)) || !(Streaming.HasModelLoaded(CBa))) {
    await asyncWait(0);


  }


  $.fastest_boat = Car.Create(squalo, -378.5, -660.0, 5.6);

  // START OF MISSION


  $.fastest_boat.setHeading(270.0);



  while (!($.player1.locateAnyMeans3D(-378.5, -660.0, 5.6, 16.5, 11.5, 8.0, false /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.fastest_boat)) {
      Text.PrintNow("COK4_33", 5000, 2); //You destoyed the boat!
      // SCM GOTO → mission_baron4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron4_failed"); // fallback: would break linear control flow
    }


  }


  $.sphere_cok4.remove();

  // ******************************START MEET BUDDY AT BOAT*********************************************


  $.breakout_timer_start = Clock.GetGameTimer();
  $.breakout_diff = 0;


  while (!($.player1.canStartMission()) && $.breakout_diff < 5000) {
    await asyncWait(0);
    $.breakout_timer = Clock.GetGameTimer();
    $.breakout_diff = $.breakout_timer - $.breakout_timer_start;
  }


  $.player1.makeSafeForCutscene();


  Camera.SetFadingColor(0, 0, 0);


  Camera.DoFade(1500, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  if (!(Car.IsDead($.fastest_boat))) {
    $.fastest_boat.setCoordinates(-378.5, -659.5, 4.3);
    $.fastest_boat.setHeading(270.0);
    $.fastest_boat.freezePosition(true /* TRUE */);
  }


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(false /* OFF */);


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSbuddy");
  Streaming.LoadSpecialCharacter(3, "igbuddy");

  //LOAD_SCENE 1218.4 -314.5 28.9


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3))) {
    await asyncWait(0);


  }


  Cutscene.Load("cok_4a2");
  World.ClearArea(-378.6, -552.6, 25.5, 15.0, true /* TRUE */);
  World.ClearArea(-379.0, -564.6, 19.8, 15.0, true /* TRUE */);
  World.SetPedDensityMultiplier(0.0);
  Cutscene.SetOffset(-378.62, -552.676, 18.534);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_buddy = CutsceneObject.Create(SPECIAL02);
  $.cs_buddy.setAnim("CSbuddy");


  $.cs_player.attachToVehicle($.fastest_boat);
  $.cs_buddy.attachToVehicle($.fastest_boat);


  World.ClearArea(-378.8, -656.8, 6.9, 2.0, true /* TRUE */);


  if ($.player1.isInAnyCar()) {
    $.player1.warpFromCarToCoord(-378.8, -656.8, 6.9);
  }
  else {
    $.player1.setCoordinates(-378.8, -656.8, 6.9);
  }


  $.player1.setHeading(180.0);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 4823) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK4_P", 10000, 1); // Mission brief


  while ($.cs_time < 8992) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK4_Q", 10000, 1); // Mission brief


  while ($.cs_time < 12753) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK4_R", 10000, 1); // Mission brief


  while ($.cs_time < 16046) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK4_S", 10000, 1); // Mission brief


  while ($.cs_time < 18611) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK4_T", 10000, 1); // Mission brief


  while ($.cs_time < 20832) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK4_U", 10000, 1); // Mission brief


  while ($.cs_time < 21443) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK4_V", 10000, 1); // Mission brief


  while ($.cs_time < 22443) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  while ($.cs_time < 22984) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Camera.DoFade(1500, 0 /* FADE_OUT */);



  Text.ClearPrints();


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Streaming.LoadScene(-378.8, -656.8, 6.9);


  if (!(Car.IsDead($.fastest_boat))) {
    $.fastest_boat.freezePosition(false /* FALSE */);
  }


  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();
  Camera.SetBehindPlayer();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);


  if (!(Car.IsDead($.fastest_boat))) {
    $.fastest_boat.setCoordinates(-378.5, -661.0, 4.3);
    $.buddy = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL03, -380.0, -655.0, 6.9);
    $.buddy.clearThreatSearch();
    Char.SetThreatReactionRangeMultiplier(3.0);
    $.buddy.setSuffersCriticalHits(false /* FALSE */);
    $.buddy.setAsPlayerFriend($.player1, true /* TRUE */);
    $.buddy.setNeverTargeted(true /* TRUE */);
    $.buddy.attachToCar($.fastest_boat, -0.7, 0.5, 1.4, 0 /* FACING_FORWARD */, 180.0, 27 /* WEAPONTYPE_RUGER */);
    $.buddy.setHeading(270.0);
  }


  await asyncWait(500);


  Camera.DoFade(1500, 1 /* FADE_IN */);

  // ******************************END MEET BUDDY AT BOAT*********************************************

  //RACE TO THE COKEBOAT************************************************************************************

  if (Car.IsDead($.fastest_boat)) {
    // SCM GOTO → mission_baron4_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_baron4_failed"); // fallback: would break linear control flow
  }
  else {
    $.fastest_boat_blip = Blip.AddForCar($.fastest_boat);
    coke_boat_blip.remove();
    $.player1.warpIntoCar($.fastest_boat);
  }


  while (!($.player1.isInCar($.fastest_boat))) {
    await asyncWait(0);
    if (Car.IsDead($.fastest_boat)) {
      Text.PrintNow("COK4_33", 5000, 2); //You destoyed the boat!
      // SCM GOTO → mission_baron4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron4_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.buddy)) {
      Text.PrintNow("COK2_26", 5000, 2); //YOUR BUDDY IS DEAD!
      // SCM GOTO → mission_baron4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron4_failed"); // fallback: would break linear control flow
    }


  }


  World.SetCarDensityMultiplier(0.0);
  World.SetPedDensityMultiplier(0.0);



  coke_boat_blip.remove();
  coke_boat_blip = Blip.AddForCoord(324.0, 604.0, 6.0);


  $.fastest_boat_blip.remove();


  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);


  Audio.LoadMissionAudio(1, "COK4_8" as any);


  Streaming.LoadScene(-274.6, -696.6, 9.1);


  Camera.SetFixedPosition(-275.577, -697.145, 9.220, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-274.699, -696.673, 9.139, 2 /* JUMP_CUT */);


  coke_boat1 = Car.Create(speeder, -295.5, -685.8, 5.6);
  boat_pilot1 = Char.CreateInsideCar(coke_boat1, 4 /* PEDTYPE_CIVMALE */, CBa);
  coke_boat1.setHeading(270.0);
  coke_boat1.goto(90.0, -664.2, 5.6);
  coke_boat1.setCruiseSpeed(40.0);


  coke_boat2 = Car.Create(speeder, -281.1, -737.5, 5.6);
  boat_pilot2 = Char.CreateInsideCar(coke_boat2, 4 /* PEDTYPE_CIVMALE */, CBa);
  coke_boat2.setHeading(330.0);
  coke_boat2.goto(-116.7, -458.3, 5.6);
  coke_boat2.setCruiseSpeed(40.0);


  await asyncWait(1000);


  coke_boat3 = Car.Create(speeder, -291.8, -750.9, 5.6);
  boat_pilot3 = Char.CreateInsideCar(coke_boat3, 4 /* PEDTYPE_CIVMALE */, CBa);
  coke_boat3.setHeading(330.0);
  coke_boat3.goto(-116.7, -458.3, 5.6);
  coke_boat3.setCruiseSpeed(40.0);


  coke_boat4 = Car.Create(speeder, -309.5, -686.4, 5.6);
  boat_pilot4 = Char.CreateInsideCar(coke_boat4, 4 /* PEDTYPE_CIVMALE */, CBa);
  coke_boat4.setHeading(270.0);
  coke_boat4.goto(90.0, -664.2, 5.6);
  coke_boat4.setCruiseSpeed(40.0);


  if (Audio.HasMissionAudioLoaded(1)) {
    Audio.PlayMissionAudio(1); //We got some competition!
    Text.PrintNow("COK4_8", 5000, 2);
  }


  await asyncWait(2000);


  Text.PrintNow("COK4_28", 5000, 2); //Get to the yacht before the other boats do!


  await asyncWait(3000);


  if (!(Car.IsDead($.fastest_boat))) {
    $.fastest_boat.setHeading(270.0);
    $.fastest_boat.setProofs(true /* TRUE */, true /* TRUE */, true /* TRUE */, false /* FALSE */, false /* FALSE */);
  }


  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  Camera.RestoreJumpcut();


  if (Car.IsDead($.fastest_boat)) {
    // SCM GOTO → mission_baron4_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_baron4_failed"); // fallback: would break linear control flow
  }



  while (!($.player1.locateAnyMeans3D(324.0, 604.0, 6.0, 40.0, 40.0, 20.0, false /* FALSE */)) || !($.player1.isInCar($.fastest_boat))) {
    await asyncWait(0);
    if (Car.IsDead($.fastest_boat)) {
      // SCM GOTO → mission_baron4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron4_failed"); // fallback: would break linear control flow
    }
    else {
      if ($.fastest_boat.isUpsidedown()) {
        if (!(Char.IsDead($.buddy))) {
          $.buddy.detachFromCar();
        }
      }
    }
    if (Char.IsDead($.buddy)) {
      Text.PrintNow("COK2_26", 5000, 2); //YOUR BUDDY IS DEAD!
      // SCM GOTO → mission_baron4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron4_failed"); // fallback: would break linear control flow
    }
    if (!(Char.IsDead(boat_pilot1))) {
      if (boat_pilot1.locateAnyMeans3D(324.0, 604.0, 6.0, 30.0, 30.0, 20.0, false /* FALSE */)) {
        Text.PrintNow("COK4_32", 5000, 2); //Too slow!
        // SCM GOTO → mission_baron4_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_baron4_failed"); // fallback: would break linear control flow
      }
    }
    if (!(Char.IsDead(boat_pilot2))) {
      if (boat_pilot2.locateAnyMeans3D(324.0, 604.0, 6.0, 30.0, 30.0, 20.0, false /* FALSE */)) {
        Text.PrintNow("COK4_32", 5000, 2); //Too slow!
        // SCM GOTO → mission_baron4_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_baron4_failed"); // fallback: would break linear control flow
      }
    }
    if (!(Char.IsDead(boat_pilot3))) {
      if (boat_pilot3.locateAnyMeans3D(324.0, 604.0, 6.0, 30.0, 30.0, 20.0, false /* FALSE */)) {
        Text.PrintNow("COK4_32", 5000, 2); //Too slow!
        // SCM GOTO → mission_baron4_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_baron4_failed"); // fallback: would break linear control flow
      }
    }
    if (!(Char.IsDead(boat_pilot4))) {
      if (boat_pilot4.locateAnyMeans3D(324.0, 604.0, 6.0, 30.0, 30.0, 20.0, false /* FALSE */)) {
        Text.PrintNow("COK4_32", 5000, 2); //Too slow!
        // SCM GOTO → mission_baron4_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_baron4_failed"); // fallback: would break linear control flow
      }
    }
    if (!(Char.IsDead($.buddy))) {
      if (!(Car.IsDead(coke_boat1))) {
        if ($.buddy.locateAnyMeansCar2D(coke_boat1, 20.0, 20.0, false /* FALSE */)) {
          $.buddy.setObjDestroyCar(coke_boat1);
          await play_vance_dance_samp();  // SCM GOSUB play_vance_dance_samp
        }
      }
    }
    if (!(Char.IsDead($.buddy))) {
      if (!(Car.IsDead(coke_boat2))) {
        if ($.buddy.locateAnyMeansCar2D(coke_boat2, 20.0, 20.0, false /* FALSE */)) {
          $.buddy.setObjDestroyCar(coke_boat2);
          await play_vance_dance_samp();  // SCM GOSUB play_vance_dance_samp
        }
      }
    }
    if (!(Char.IsDead($.buddy))) {
      if (!(Car.IsDead(coke_boat3))) {
        if ($.buddy.locateAnyMeansCar2D(coke_boat3, 20.0, 20.0, false /* FALSE */)) {
          $.buddy.setObjDestroyCar(coke_boat3);
          await play_vance_dance_samp();  // SCM GOSUB play_vance_dance_samp
        }
      }
    }
    if (!(Char.IsDead($.buddy))) {
      if (!(Car.IsDead(coke_boat4))) {
        if ($.buddy.locateAnyMeansCar2D(coke_boat4, 20.0, 20.0, false /* FALSE */)) {
          $.buddy.setObjDestroyCar(coke_boat4);
          await play_vance_dance_samp();  // SCM GOSUB play_vance_dance_samp
        }
      }
    }
    if (TIMERA > 100) {
      if (!(Car.IsDead(coke_boat1))) {
        $.any_coke_boat = coke_boat1;
        await race_to_coke_deal1();  // SCM GOSUB race_to_coke_deal1
      }
      if (!(Car.IsDead(coke_boat2))) {
        $.any_coke_boat = coke_boat2;
        await race_to_coke_deal2();  // SCM GOSUB race_to_coke_deal2
      }
      if (!(Car.IsDead(coke_boat3))) {
        $.any_coke_boat = coke_boat3;
        await race_to_coke_deal2();  // SCM GOSUB race_to_coke_deal2
      }
      if (!(Car.IsDead(coke_boat4))) {
        $.any_coke_boat = coke_boat4;
        await race_to_coke_deal1();  // SCM GOSUB race_to_coke_deal1
      }
      TIMERA = 0;
    }
    if ($.first_two_samples == 0) {
      if ($.audio_is_loading == 0) {
        Audio.LoadMissionAudio(1, "COK4_1" as any);
        Audio.LoadMissionAudio(2, "COK4_3" as any);
        $.audio_is_loading = 1;
      }
      else {
        await audio_loaded_cok4();  // SCM GOSUB audio_loaded_cok4
      }
      if ($.audio_has_loaded == 1) {
        Audio.PlayMissionAudio(1); //So Tommy, we know it was Diaz busted our deal..
        Text.PrintNow("COK4_1", 5000, 2);
        if (Audio.HasMissionAudioFinished(1)) {
          //WAIT 500
          Audio.PlayMissionAudio(2); //So why the hell are we running errands for him?
          Text.PrintNow("COK4_3", 5000, 2);
          $.first_two_samples = 1;
          $.audio_is_loading = 0;
          $.audio_has_loaded = 0;
          TIMERB = 0;
        }
      }
    }
    if ($.first_two_samples == 1 && $.second_two_samples == 0 && TIMERB > 2000) {
      if ($.audio_is_loading == 0) {
        Audio.LoadMissionAudio(1, "COK4_4" as any);
        Audio.LoadMissionAudio(2, "COK4_5" as any);
        $.audio_is_loading = 1;
      }
      else {
        await audio_loaded_cok4();  // SCM GOSUB audio_loaded_cok4
      }
      if ($.audio_has_loaded == 1) {
        Audio.PlayMissionAudio(1); //The more we learn now, the less we have to learn when we take this town over!
        Text.PrintNow("COK4_4", 5000, 2);
        if (Audio.HasMissionAudioFinished(1)) {
          await asyncWait(500);
          Audio.PlayMissionAudio(2); //I like your style, man. Real fresh.
          Text.PrintNow("COK4_5", 5000, 2);
          $.second_two_samples = 1;
          $.audio_is_loading = 0;
          $.audio_has_loaded = 0;
          TIMERB = 0;
        }
      }
    }
    if ($.player1.locateAnyMeans3D(324.0, 604.0, 6.0, 200.0, 200.0, 20.0, false /* FALSE */)) {
      if ($.created_coke_boat == 0) {
        coke_boat = Car.Create(marquis, 324.0, 604.0, 6.0);
        coke_boat.setHeading(60.0);
        $.coke_boat_blip_arrow = Blip.AddForCar(coke_boat);
        $.coke_boat_blip_arrow.changeDisplay(1 /* MARKER_ONLY */);
        $.created_coke_boat = 1;
      }
      if ($.created_coke_boat == 1) {
        if (Car.IsDead(coke_boat)) {
          Text.PrintNow("COK4_33", 5000, 2); //You destoyed the boat!
          // SCM GOTO → mission_baron4_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_baron4_failed"); // fallback: would break linear control flow
        }
      }


    }
    if (Car.IsDead($.fastest_boat)) {
      // SCM GOTO → mission_baron4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron4_failed"); // fallback: would break linear control flow
    }


  }


  coke_boat_blip.remove();
  $.mansion_blip = Blip.AddForCoord(-366.6, -660.1, 5.6);

  // ******************************START COKE DEAL ON BOAT*********************************************


  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);


  if (!(Car.IsDead($.fastest_boat))) {
    $.fastest_boat.stop();
    $.fastest_boat.setCruiseSpeed(0.0);
  }



  Streaming.RequestModel(sparrow);
  Streaming.RequestModel(ruger);
  Streaming.RequestModel(barrel4);
  Streaming.RequestModel(TEC9);
  Streaming.RequestModel(UZI);


  Camera.SetFixedPosition(278.740, 579.153, 26.070, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(279.551, 579.660, 25.780, 2 /* JUMP_CUT */);


  await asyncWait(500);


  Camera.DoFade(1500, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(sparrow)) || !(Streaming.HasModelLoaded(ruger)) || !(Streaming.HasModelLoaded(barrel4)) || !(Streaming.HasModelLoaded(TEC9)) || !(Streaming.HasModelLoaded(UZI))) {
    await asyncWait(0);


  }


  Camera.RestoreJumpcut();


  if (!(Car.IsDead($.fastest_boat))) {
    if ($.player1.isInCar($.fastest_boat)) {
      $.player1.warpFromCarToCoord(260.4, -1292.5, -100.0);
      $.fastest_boat.setHealth(1500);
    }
  }


  $.buddy.delete();
  $.buddy = Char.CreateInsideCar($.fastest_boat, 4 /* PEDTYPE_CIVMALE */, SPECIAL03);
  $.buddy.setSuffersCriticalHits(false /* FALSE */);
  $.buddy.clearThreatSearch();
  $.buddy.setAsPlayerFriend($.player1, true /* TRUE */);
  $.scplayer.attachToCar($.fastest_boat, -0.8, 0.3, 1.7, 2 /* FACING_BACK */, 181.0, 27 /* WEAPONTYPE_RUGER */);
  Hud.DisplayCounterWithString($.$id.fastboat_health, 1 /* COUNTER_DISPLAY_BAR */, "COK4_35");
  await fastboat_health();  // SCM GOSUB fastboat_health

  // ******************************END COKE DEAL ON BOAT*********************************************

  // ******************************CHASE BACK TO MASION 1ST PERSON*********************************************


  if (!(Car.IsDead(coke_boat1))) {
    coke_boat1.setCoordinates(326.3, 570.9, 5.6);
    coke_boat1.setHeading(140.0);
    coke_boat1.goto(286.2, 482.0, 5.6);
    coke_boat1.setCruiseSpeed(24.0);
    boat_shooter1 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBa, 354.4, 595.0, 9.2);
    boat_shooter1.attachToCar(coke_boat1, -0.8, 0.3, 1.5, 0 /* FACING_FORWARD */, 181.0, 23 /* WEAPONTYPE_UZI */);
    boat_shooter1.setObjDestroyCar($.fastest_boat);
    coke_boat1.setHealth(1000);
  }


  coke_boat2.delete();
  boat_pilot2.delete();


  if (!(Car.IsDead(coke_boat3))) {
    coke_boat3.setCoordinates(333.0, 560.4, 5.6);
    coke_boat3.setHeading(140.0);
    coke_boat3.goto(286.2, 482.0, 5.6);
    coke_boat3.setCruiseSpeed(24.0);
    boat_shooter3 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBa, 354.4, 597.0, 9.2);
    boat_shooter3.attachToCar(coke_boat3, -0.8, 0.3, 1.5, 0 /* FACING_FORWARD */, 181.0, 23 /* WEAPONTYPE_UZI */);
    boat_shooter3.setObjDestroyCar($.fastest_boat);
    coke_boat3.setHealth(1000);
  }


  if (!(Car.IsDead(coke_boat4))) {
    coke_boat4.setCoordinates(292.0, 130.2, 5.6);
    coke_boat4.setHeading(180.0);
    coke_boat4.setCruiseSpeed(0.0);
    boat_shooter4 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBa, 354.4, 598.0, 9.2);
    boat_shooter4.attachToCar(coke_boat4, -0.8, 0.3, 1.5, 0 /* FACING_FORWARD */, 181.0, 23 /* WEAPONTYPE_UZI */);
    boat_shooter4.setObjDestroyCar($.fastest_boat);
    coke_boat4.setHealth(1000);
  }



  $.heli_chopper = Car.Create(sparrow, 473.9, 90.0, 65.0);
  $.heli_chopper.setHeading(180.0);
  $.heli_chopper.freezePosition(true /* TRUE */);
  $.heli_chopper.setStabiliser(true /* TRUE */);
  boat_pilot2 = Char.CreateInsideCar($.heli_chopper, 4 /* PEDTYPE_CIVMALE */, CBa);


  $.boat_pilot5 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBa, -370.4, -655.0, 9.2);
  $.boat_pilot5.attachToCar($.heli_chopper, 0.8, 0.0, 0.5, 3 /* FACING_RIGHT */, 180.0, 27 /* WEAPONTYPE_RUGER */);


  $.heli_chopper.gotoCoords(-231.6, -672.1, 50.0, 100);


  if (Car.IsDead($.fastest_boat)) {
    // SCM GOTO → mission_baron4_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_baron4_failed"); // fallback: would break linear control flow
  }


  $.coke_boat_blip_arrow.remove();
  coke_boat.delete();
  Streaming.MarkModelAsNoLongerNeeded(marquis);


  $.fastest_boat.setCruiseSpeed(26.0);
  $.fastest_boat.setCoordinates(336.2, 540.9, 5.6);
  $.fastest_boat.setHeading(140.0);
  $.fastest_boat.setProofs(false /* FALSE */, true /* TRUE */, true /* TRUE */, true /* TRUE */, false /* FALSE */);
  $.buddy.setProofs(false /* FALSE */, true /* TRUE */, true /* TRUE */, true /* TRUE */, false /* FALSE */);
  $.fastest_boat.goto(286.2, 482.0, 5.6);


  await asyncWait(1500);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);


  Text.PrintNow("COK4_34", 5000, 2); //Take those boats out!


  $.audio_is_loading = 0;
  $.audio_has_loaded = 0;
  $.first_two_samples = 0;
  $.second_two_samples = 0;
  $.third_two_samples = 0;


  TIMERB = 0;


  while (!($.player1.locateAnyMeans3D(-378.5, -660.0, 5.6, 16.0, 16.0, 6.0, false /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.fastest_boat)) {
      $.scplayer.detachFromCar();
      $.player1.explodeHead();
      // SCM GOTO → mission_baron4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron4_failed"); // fallback: would break linear control flow
    }
    else {
      if ($.fastest_boat.isUpsidedown()) {
        $.scplayer.detachFromCar();
      }
    }
    if (!(Car.IsDead($.fastest_boat))) {
      if (!($.fastest_boat.isInWater())) {
        if ($.fastest_boat.isStopped()) {
          $.fastboat_health = $.fastest_boat.getHealth();
          $.fastboat_health = $.fastboat_health - 1;
          if ($.fastboat_health < 1) {
            $.fastboat_health = 1;
          }
          $.fastest_boat.setHealth($.fastboat_health);
        }
      }
      if (!(Car.IsDead($.fastest_boat))) {
        if (!($.fastest_boat.isHealthGreater(250))) {
          $.fastboat_health = $.fastest_boat.getHealth();
          $.fastboat_health = $.fastboat_health - 1;
          if ($.fastboat_health < 1) {
            $.fastboat_health = 1;
          }
          $.fastest_boat.setHealth($.fastboat_health);
        }
      }
    }
    if (Char.IsDead($.buddy)) {
      Text.PrintNow("COK2_26", 5000, 2); //YOUR BUDDY IS DEAD!
      // SCM GOTO → mission_baron4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron4_failed"); // fallback: would break linear control flow
    }
    await fastboat_health();  // SCM GOSUB fastboat_health
    if (TIMERA > 300) {
      if (!(Char.IsDead(boat_pilot1))) {
        if (!(Car.IsDead(coke_boat1))) {
          if (Char.IsDead(boat_pilot3)) {
            if ($.player1.locateAnyMeansCar2D(coke_boat1, 20.0, 20.0, false /* FALSE */)) {
              coke_boat1.setCruiseSpeed(26.0);
            }
            else {
              coke_boat1.setCruiseSpeed(32.0);
            }
          }
          $.any_coke_boat = coke_boat1;
          await return_to_masion();  // SCM GOSUB return_to_masion
        }
      }
      else {
        if (!(Car.IsDead(coke_boat1))) {
          coke_boat1.setCruiseSpeed(0.0);
        }
      }
      if (Char.IsDead(boat_shooter1)) {
        boat_shooter1.detachFromCar();
      }
      if (!(Char.IsDead(boat_pilot3))) {
        if (!(Car.IsDead(coke_boat3))) {
          if ($.player1.locateAnyMeansCar2D(coke_boat3, 20.0, 20.0, false /* FALSE */)) {
            coke_boat3.setCruiseSpeed(26.0);
          }
          else {
            coke_boat3.setCruiseSpeed(32.0);
          }
          $.any_coke_boat = coke_boat3;
          await return_to_masion();  // SCM GOSUB return_to_masion
        }
      }
      else {
        if (!(Car.IsDead(coke_boat3))) {
          coke_boat3.setCruiseSpeed(0.0);
        }
      }
      if (Char.IsDead(boat_shooter3)) {
        boat_shooter3.detachFromCar();
      }
      if (!(Char.IsDead(boat_pilot4))) {
        if (!(Car.IsDead(coke_boat4))) {
          if (TIMERB > 8000) {
            if ($.boat_goto_coords == 0) {
              coke_boat4.goto(419.5, -21.8, 5.6);
              $.boat_goto_coords = 1;
            }
            $.any_coke_boat = coke_boat4;
            if ($.player1.locateAnyMeansCar2D(coke_boat4, 20.0, 20.0, false /* FALSE */)) {
              coke_boat4.setCruiseSpeed(30.0);
            }
            else {
              coke_boat4.setCruiseSpeed(19.0);
            }
            await return_to_masion();  // SCM GOSUB return_to_masion
          }
        }
      }
      else {
        if (!(Car.IsDead(coke_boat4))) {
          coke_boat4.setCruiseSpeed(0.0);
        }
      }
      if (Char.IsDead(boat_shooter4)) {
        boat_shooter4.detachFromCar();
      }
      if (!(Car.IsDead($.fastest_boat))) {
        $.any_coke_boat = $.fastest_boat;
        await return_to_masion();  // SCM GOSUB return_to_masion
      }
      if ($.second_two_samples == 1) {
        if (!(Car.IsDead($.heli_chopper))) {
          if ($.set_heli_chopper_off == 0) {
            $.heli_chopper.freezePosition(false /* FALSE */);
            $.heli_chopper.setForwardSpeed(20.0);
            if (!(Char.IsDead($.boat_pilot5))) {
              //SET_CHAR_WAIT_STATE boat_pilot5 WAITSTATE_SIT_IDLE 9999999999
              $.boat_pilot5.setObjDestroyCar($.fastest_boat);
              $.boat_pilot5.setAccuracy(40);
            }
            else {
              $.boat_pilot5.detachFromCar();
            }
            $.set_heli_chopper_off = 1;
          }
          const _res95 = $.player1.getCoordinates();
$.player_x = _res95.x;
$.player_y = _res95.y;
$.player_z = _res95.z;
          $.player_z = $.player_z + 10.0;
          $.player_y = $.player_y - 4.0;
          if (!(Char.IsDead(boat_pilot2))) {
            $.heli_chopper.gotoCoords($.player_x, $.player_y, $.player_z, 75);
          }
          else {
            $.heli_chopper.gotoCoords($.player_x, $.player_y, $.player_z, 0);
          }
        }
      }
      TIMERA = 0;
    }
    if ($.first_two_samples == 0) {
      if ($.audio_is_loading == 0) {
        Audio.LoadMissionAudio(1, "COK4_12" as any);
        Audio.LoadMissionAudio(2, "COK4_13" as any);
        $.audio_is_loading = 1;
      }
      else {
        await audio_loaded_cok4();  // SCM GOSUB audio_loaded_cok4
      }
      if ($.audio_has_loaded == 1) {
        Audio.PlayMissionAudio(1); //Watch yourself, they're coming from all over!
        Text.PrintNow("COK4_12", 5000, 2);
        if (Audio.HasMissionAudioFinished(1)) {
          await asyncWait(500);
          Audio.PlayMissionAudio(2); //Got 'em. Head for Diaz's as fast as you can!
          Text.PrintNow("COK4_13", 5000, 2);
          $.first_two_samples = 1;
          $.audio_is_loading = 0;
          $.audio_has_loaded = 0;
          //TIMERB = 0

        }
      }
    }
    if ($.player1.locateAnyMeans2D(416.0, -76.1, 40.0, 40.0, false /* FALSE */)) {
      if ($.jetty_chars_created == 0) {
        if (!(Car.IsDead($.fastest_boat))) {
          $.cok4_barrel1 = ScriptObject.Create(barrel4, 396.3, -178.9, 6.4);
          $.cok4_barrel2 = ScriptObject.Create(barrel4, 395.3, -184.6, 6.4);
          $.jetty_char1 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBa, 401.4, -171.0, 6.6);
          $.jetty_char1.setStayInSamePlace(true /* TRUE */);
          $.jetty_char1.setObjDestroyCar($.fastest_boat);
          $.jetty_char1.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.jetty_char1.lookAtPlayerAlways($.player1);
          $.jetty_char1.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
          $.jetty_char1.setHealth(50);
          $.jetty_char2 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBa, 400.7, -177.8, 6.6);
          $.jetty_char2.setStayInSamePlace(true /* TRUE */);
          $.jetty_char2.setObjDestroyCar($.fastest_boat);
          $.jetty_char2.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.jetty_char2.lookAtPlayerAlways($.player1);
          $.jetty_char2.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
          $.jetty_char2.setHealth(50);
          $.jetty_char3 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBa, 398.8, -190.8, 6.6);
          $.jetty_char3.setStayInSamePlace(true /* TRUE */);
          $.jetty_char3.setObjDestroyCar($.fastest_boat);
          $.jetty_char3.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.jetty_char3.lookAtPlayerAlways($.player1);
          $.jetty_char3.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
          $.jetty_char3.setHealth(50);
          $.jetty_char4 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBa, 399.6, -183.9, 6.6);
          $.jetty_char4.setStayInSamePlace(true /* TRUE */);
          $.jetty_char4.setObjDestroyCar($.fastest_boat);
          $.jetty_char4.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.jetty_char4.lookAtPlayerAlways($.player1);
          $.jetty_char4.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
          $.jetty_char4.setHealth(50);
          $.jetty_chars_created = 1;
        }
      }
      if ($.first_two_samples == 1 && $.second_two_samples == 0) {
        if ($.audio_is_loading == 0) {
          Audio.LoadMissionAudio(1, "COK4_20" as any);
          $.audio_is_loading = 1;
        }
        else {
          await audio_loaded_cok4();  // SCM GOSUB audio_loaded_cok4
        }
        if ($.audio_has_loaded == 1) {
          Audio.PlayMissionAudio(1); //There are gunmen on that jetty!
          Text.PrintNow("COK4_20", 3000, 2);
          if (Audio.HasMissionAudioFinished(1)) {
            $.second_two_samples = 1;
            $.audio_is_loading = 0;
            $.audio_has_loaded = 0;
          }
        }
      }


    }
    if (!(Car.IsDead(coke_boat4))) {
      if ($.player1.locateAnyMeansCar2D(coke_boat4, 65.0, 65.0, false /* FALSE */)) {
        if ($.second_two_samples == 1 && $.third_two_samples == 0) {
          if ($.audio_is_loading == 0) {
            Audio.LoadMissionAudio(1, "COK4_19" as any);
            $.audio_is_loading = 1;
          }
          else {
            await audio_loaded_cok4();  // SCM GOSUB audio_loaded_cok4
          }
          if ($.audio_has_loaded == 1) {
            Audio.PlayMissionAudio(1); //More trouble up ahead!
            Text.PrintNow("COK4_19", 2000, 2);
            if (Audio.HasMissionAudioFinished(1)) {
              $.third_two_samples = 1;
              $.audio_is_loading = 0;
              $.audio_has_loaded = 0;
            }
          }
        }


      }
    }
    if (TIMERB > 6000) {
      if ($.first_two_samples == 1) {
        if ($.player1.isShooting() && coke_boat3.hasBeenDamagedByWeapon(27 /* WEAPONTYPE_RUGER */)) {
          if ($.eat_it_samp == 0) {
            if ($.audio_is_loading == 0) {
              Audio.LoadMissionAudio(2, "COK4_16" as any);
              $.audio_is_loading = 1;
            }
            else {
              await audio_loaded_cok4();  // SCM GOSUB audio_loaded_cok4
            }
            if ($.audio_has_loaded == 1) {
              Audio.PlayMissionAudio(2); //Eat it! EAT IT!
              Text.PrintNow("COK4_16", 3000, 2);
              if (Audio.HasMissionAudioFinished(2)) {
                $.eat_it_samp = 1;
                $.audio_is_loading = 0;
                $.audio_has_loaded = 0;
              }
            }
          }


        }
        if ($.player1.isShooting() && coke_boat1.hasBeenDamagedByWeapon(27 /* WEAPONTYPE_RUGER */)) {
          if ($.eat_it_samp == 1) {
            if ($.sleep_fish_samp == 0) {
              if ($.audio_is_loading == 0) {
                Audio.LoadMissionAudio(2, "COK4_15" as any);
                $.audio_is_loading = 1;
              }
              else {
                await audio_loaded_cok4();  // SCM GOSUB audio_loaded_cok4
              }
              if ($.audio_has_loaded == 1) {
                Audio.PlayMissionAudio(2); //Sleep with the fishes!
                Text.PrintNow("COK4_15", 3000, 2);
                if (Audio.HasMissionAudioFinished(2)) {
                  $.sleep_fish_samp = 1;
                  $.audio_is_loading = 0;
                  $.audio_has_loaded = 0;
                }
              }
            }
          }


        }
        if ($.third_two_samples == 1) {
          if ($.player1.isShooting() && coke_boat4.hasBeenDamagedByWeapon(27 /* WEAPONTYPE_RUGER */)) {
            if ($.you_want_some_samp == 0) {
              if ($.audio_is_loading == 0) {
                Audio.LoadMissionAudio(2, "COK4_14" as any);
                $.audio_is_loading = 1;
              }
              else {
                await audio_loaded_cok4();  // SCM GOSUB audio_loaded_cok4
              }
              if ($.audio_has_loaded == 1) {
                Audio.PlayMissionAudio(2); //You want some of this?!
                Text.PrintNow("COK4_14", 3000, 2);
                $.jetty_char1.delete();
                $.jetty_char2.delete();
                $.jetty_char3.delete();
                $.jetty_char4.delete();
                $.cok4_barrel1.delete();
                $.cok4_barrel2.delete();
                if (Audio.HasMissionAudioFinished(2)) {
                  $.you_want_some_samp = 1;
                  $.audio_is_loading = 0;
                  $.audio_has_loaded = 0;
                }
              }
            }
          }


        }
      }
    }


  }


  if (!(Car.IsDead($.fastest_boat))) {
    $.fastest_boat.stop();
    $.fastest_boat.setCruiseSpeed(0.0);
  }


  Camera.DoFade(1000, 0 /* FADE_OUT */);


  Audio.LoadMissionAudio(1, "COK4_24" as any);
  Audio.LoadMissionAudio(2, "COK4_25" as any);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Streaming.LoadScene(-372.7, -656.7, 6.9);


  coke_boat1.delete();
  coke_boat2.delete();
  coke_boat3.delete();
  coke_boat4.delete();
  $.heli_chopper.delete();
  boat_pilot1.delete();
  boat_pilot3.delete();
  boat_pilot4.delete();
  $.boat_pilot5.delete();
  boat_shooter1.delete();
  boat_shooter3.delete();
  boat_shooter4.delete();
  $.jetty_char1.delete();
  $.jetty_char2.delete();
  $.jetty_char3.delete();
  $.jetty_char4.delete();


  World.ClearArea(-366.1, -655.2, 6.9, 1.0, true /* TRUE */);


  //LANCE AND PLAYER SCRIPTED CUT***************************************************************************

  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);


  if (!(Car.IsDead($.fastest_boat))) {
    $.scplayer.detachFromCar();
    $.fastest_boat.setHealth(1000);
    await asyncWait(0);
    World.ClearArea(-372.7, -656.7, 6.9, 1.0, true /* TRUE */);
    $.player1.setCoordinates(-372.7, -656.7, 6.9);
    $.player1.setHeading(128.0);
    Camera.SetBehindPlayer();
    if (!(Car.IsDead($.fastest_boat))) {
      $.fastest_boat.setCoordinates(-378.5, -661.0, 5.6);
      $.fastest_boat.setHeading(90.0);
    }
  }


  Camera.SetFixedPosition(-367.062, -660.511, 10.406, 0.0, 0.0, 0.0); //Player on the pier
  Camera.PointAtPoint(-368.000, -660.319, 10.116, 2 /* JUMP_CUT */);


  await asyncWait(500);


  Camera.DoFade(1000, 1 /* FADE_IN */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  while (!(Audio.HasMissionAudioLoaded(1))) {
    await asyncWait(0);


  }


  Audio.PlayMissionAudio(1);
  Text.PrintNow("COK4_24", 5000, 1); // Good shooting, my friend. You're a real, proper, grade A lunatic.


  while (!(Audio.HasMissionAudioFinished(1))) {
    await asyncWait(0);


  }


  Audio.LoadMissionAudio(1, "COK4_26" as any);


  while (!(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);


  }


  Audio.PlayMissionAudio(2);
  Text.PrintNow("COK4_25", 5000, 1); // Well, thank you


  while (!(Audio.HasMissionAudioFinished(2))) {
    await asyncWait(0);


  }


  Audio.LoadMissionAudio(2, "COK4_27" as any);


  while (!(Audio.HasMissionAudioLoaded(1))) {
    await asyncWait(0);


  }


  Audio.PlayMissionAudio(1);
  Text.PrintNow("COK4_26", 5000, 1); // See you around, Tommy.


  while (!(Audio.HasMissionAudioFinished(1))) {
    await asyncWait(0);


  }


  while (!(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);


  }


  Audio.PlayMissionAudio(2);
  Text.PrintNow("COK4_27", 5000, 1); // Okay, Mr. Lance Vance Dance.
  $.scplayer.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000);


  while (!(Audio.HasMissionAudioFinished(2))) {
    await asyncWait(0);


  }


  $.scplayer.setWaitState(0 /* WAITSTATE_FALSE */, 100);


  Text.ClearPrints();


  if (!(Car.IsDead($.fastest_boat))) {
    $.fastest_boat.setCruiseSpeed(50.0);
    $.fastest_boat.goto(-354.3, -836.5, 5.6);
  }


  await asyncWait(3000);


  Camera.RestoreJumpcut();


  $.fastest_boat.delete();


  // SCM GOTO → mission_baron4_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_baron4_passed"); // fallback: would break linear control flow
}



// Mission baron4 failed


async function onFailed() {
  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed"
}



// mission baron4 passed


async function mission_baron4_passed() {


  $.flag_baron_mission4_passed = 1;
  Audio.PlayMissionPassedTune(1);
  Text.PrintWithNumberBig("M_PASS", 10000, 5000, 1); //"Mission Passed!"
  $.player1.clearWantedLevel();
  $.player1.addScore(10000);
  Stat.RegisterMissionPassed("COK_4");
  Stat.PlayerMadeProgress(1);
  $.clothes_pickup9 = Pickup.CreateClothes(-917.4, 885.1, 11.0, 10);
  $.clothes9_created = 1;
  // START_NEW_SCRIPT cloth8 
  $.baron_contact_blip.remove();
}



// mission cleanup


async function cleanup() {


  ONMISSION = 0;
  $.timer_mobile_start = Clock.GetGameTimer();
  Streaming.MarkModelAsNoLongerNeeded(squalo);
  Streaming.MarkModelAsNoLongerNeeded(speeder);
  Streaming.MarkModelAsNoLongerNeeded(RUGER);
  Streaming.MarkModelAsNoLongerNeeded(marquis);
  Streaming.MarkModelAsNoLongerNeeded(CBa);
  Streaming.MarkModelAsNoLongerNeeded(UZI);
  Streaming.MarkModelAsNoLongerNeeded(TEC9);
  Streaming.MarkModelAsNoLongerNeeded(sparrow);
  Streaming.MarkModelAsNoLongerNeeded(ruger);
  Streaming.MarkModelAsNoLongerNeeded(barrel4);
  $.heli_chopper.markAsNoLongerNeeded();
  Weather.Release();
  $.scplayer.detachFromCar();
  $.buddy.removeElegantly();
  Audio.ClearMissionAudio(1);
  Audio.ClearMissionAudio(2);
  Streaming.UnloadSpecialCharacter(3);
  $.fastest_boat_blip.remove();
  coke_boat_blip.remove();
  $.mansion_blip.remove();
  $.coke_boat_blip_arrow.remove();
  Hud.ClearCounter($.$id.fastboat_health);
  World.SetCarDensityMultiplier(1.0);
  World.SetPedDensityMultiplier(1.0);
  Char.SetThreatReactionRangeMultiplier(0.0);
  $.sphere_cok4.remove();
  Mission.Finish();
}




async function play_vance_dance_samp() {


  if (vance_dance_samp_play == 0) {
    if ($.second_two_samples == 1) {
      if ($.audio_is_loading == 0) {
        Audio.LoadMissionAudio(1, "COK4_9A" as any);
        $.audio_is_loading = 1;
      }
      else {
        if (Audio.HasMissionAudioLoaded(1)) {
          $.audio_has_loaded = 1;
        }
      }
      if ($.audio_has_loaded == 1) {
        Audio.PlayMissionAudio(1); //It's time for the Lance Vance Dance!
        Text.PrintNow("COK4_9a", 5000, 2);
        vance_dance_samp_play = 1;
      }


    }
  }
}




async function race_to_coke_deal1() {


  if ($.any_coke_boat.locate3D(90.0, -664.2, 5.6, 10.0, 10.0, 6.0, false /* FALSE */)) {
    $.any_coke_boat.goto(160.1, -639.0, 5.6);
  }


  if ($.any_coke_boat.locate3D(160.1, -639.0, 5.6, 10.0, 10.0, 6.0, false /* FALSE */)) {
    $.any_coke_boat.goto(221.3, -567.0, 5.6);
  }


  if ($.any_coke_boat.locate3D(221.3, -567.0, 5.6, 10.0, 10.0, 6.0, false /* FALSE */)) {
    $.any_coke_boat.goto(405.1, -286.6, 5.6);
  }


  if ($.any_coke_boat.locate3D(405.1, -286.6, 5.6, 10.0, 10.0, 6.0, false /* FALSE */)) {
    $.any_coke_boat.goto(410.1, -1.9, 5.6);
  }


  if ($.any_coke_boat.locate3D(410.1, -1.9, 5.6, 10.0, 10.0, 6.0, false /* FALSE */)) {
    $.any_coke_boat.goto(191.9, 236.0, 5.6);
  }


  if ($.any_coke_boat.locate3D(191.9, 236.0, 5.6, 10.0, 10.0, 6.0, false /* FALSE */)) {
    $.any_coke_boat.goto(238.1, 324.6, 5.6);
  }


  if ($.any_coke_boat.locate3D(238.1, 324.6, 5.6, 10.0, 10.0, 6.0, false /* FALSE */)) {
    $.any_coke_boat.goto(244.9, 434.8, 5.6);
  }


  if ($.any_coke_boat.locate3D(244.9, 434.8, 5.6, 10.0, 10.0, 6.0, false /* FALSE */)) {
    $.any_coke_boat.goto(319.1, 520.7, 5.6);
  }


  if ($.any_coke_boat.locate3D(319.1, 520.7, 5.6, 10.0, 10.0, 6.0, false /* FALSE */)) {
    $.any_coke_boat.goto(323.5, 596.6, 5.6);
  }


  if ($.any_coke_boat.locate3D(323.5, 596.6, 5.6, 10.0, 10.0, 6.0, false /* FALSE */)) {
    $.any_coke_boat.goto(323.5, 596.6, 5.6);
    $.any_coke_boat.setCruiseSpeed(1.0);
  }
}




async function race_to_coke_deal2() {


  if ($.any_coke_boat.locate3D(-116.7, -458.3, 5.6, 10.0, 10.0, 6.0, false /* FALSE */)) {
    $.any_coke_boat.goto(25.6, -275.0, 5.6);
  }


  if ($.any_coke_boat.locate3D(25.6, -275.0, 5.6, 10.0, 10.0, 6.0, false /* FALSE */)) {
    $.any_coke_boat.setCruiseSpeed(35.0);
    $.any_coke_boat.goto(130.2, -228.8, 5.6);
  }


  if ($.any_coke_boat.locate3D(130.2, -228.8, 5.6, 10.0, 10.0, 6.0, false /* FALSE */)) {
    $.any_coke_boat.goto(221.3, -130.2, 5.6);
  }


  if ($.any_coke_boat.locate3D(221.3, -130.2, 5.6, 10.0, 10.0, 6.0, false /* FALSE */)) {
    $.any_coke_boat.goto(221.0, 56.5, 5.6);
  }


  if ($.any_coke_boat.locate3D(221.0, 56.5, 5.6, 10.0, 10.0, 6.0, false /* FALSE */)) {
    $.any_coke_boat.goto(248.0, 183.5, 5.6);
  }


  if ($.any_coke_boat.locate3D(248.0, 183.5, 5.6, 10.0, 10.0, 6.0, false /* FALSE */)) {
    $.any_coke_boat.goto(192.6, 242.7, 5.6);
  }


  if ($.any_coke_boat.locate3D(192.6, 242.7, 5.6, 10.0, 10.0, 6.0, false /* FALSE */)) {
    $.any_coke_boat.goto(234.8, 329.3, 5.6);
  }


  if ($.any_coke_boat.locate3D(234.8, 329.3, 5.6, 10.0, 10.0, 6.0, false /* FALSE */)) {
    $.any_coke_boat.goto(245.7, 436.0, 5.6);
  }


  if ($.any_coke_boat.locate3D(245.7, 436.0, 5.6, 10.0, 10.0, 6.0, false /* FALSE */)) {
    $.any_coke_boat.goto(314.0, 516.4, 5.6);
  }


  if ($.any_coke_boat.locate3D(314.0, 516.4, 5.6, 10.0, 10.0, 6.0, false /* FALSE */)) {
    $.any_coke_boat.goto(323.5, 596.6, 5.6);
  }


  if ($.any_coke_boat.locate3D(323.5, 596.6, 5.6, 10.0, 10.0, 6.0, false /* FALSE */)) {
    $.any_coke_boat.goto(323.5, 596.6, 5.6);
    $.any_coke_boat.setCruiseSpeed(1.0);
  }
}




async function return_to_masion() {


  if ($.any_coke_boat.locate3D(286.2, 482.0, 5.6, 10.0, 10.0, 6.0, false /* FALSE */)) {
    $.any_coke_boat.goto(237.4, 427.9, 5.6);
  }


  if ($.any_coke_boat.locate3D(237.4, 427.9, 5.6, 10.0, 10.0, 6.0, false /* FALSE */)) {
    $.any_coke_boat.goto(230.3, 315.9, 5.6);
  }


  if ($.any_coke_boat.locate3D(230.3, 315.9, 5.6, 10.0, 10.0, 6.0, false /* FALSE */)) {
    $.any_coke_boat.goto(192.3, 233.3, 5.6);
  }


  if ($.any_coke_boat.locate3D(192.3, 233.3, 5.6, 10.0, 10.0, 6.0, false /* FALSE */)) {
    $.any_coke_boat.goto(419.5, -21.8, 5.6);
  }


  if ($.any_coke_boat.locate3D(419.5, -21.8, 5.6, 10.0, 10.0, 6.0, false /* FALSE */)) {
    $.any_coke_boat.goto(396.8, -304.7, 5.6);
  }


  if ($.any_coke_boat.locate3D(396.8, -304.7, 5.6, 10.0, 10.0, 6.0, false /* FALSE */)) {
    $.any_coke_boat.goto(212.3, -588.7, 5.6);
  }


  if ($.any_coke_boat.locate3D(212.3, -588.7, 5.6, 10.0, 10.0, 6.0, false /* FALSE */)) {
    $.any_coke_boat.goto(197.1, -617.8, 5.6);
  }


  if ($.any_coke_boat.locate3D(197.1, -617.8, 5.6, 10.0, 10.0, 6.0, false /* FALSE */)) {
    $.any_coke_boat.goto(154.5, -638.7, 5.6);
  }


  if ($.any_coke_boat.locate3D(154.5, -638.7, 5.6, 10.0, 10.0, 6.0, false /* FALSE */)) {
    $.any_coke_boat.goto(90.0, -664.2, 5.6);
  }


  if ($.any_coke_boat.locate3D(90.0, -664.2, 5.6, 10.0, 10.0, 6.0, false /* FALSE */)) {
    $.any_coke_boat.setCruiseSpeed(35.0);
    $.any_coke_boat.goto(-378.5, -660.0, 5.6);
  }
}



async function audio_loaded_cok4() {


  if (Audio.HasMissionAudioLoaded(1) && Audio.HasMissionAudioLoaded(2)) {
    $.audio_has_loaded = 1;
  }
}



async function fastboat_health() {


  if (!(Car.IsDead($.fastest_boat))) {
    $.fastboat_health = $.fastest_boat.getHealth();
    //SET_MAX_WANTED_LEVEL 0
    $.fastboat_health = $.fastboat_health / 15;
  }
}

export async function baron4() {
  // Mission start stuff


  await body();  // SCM GOSUB mission_start_baron4


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await onFailed();  // SCM GOSUB mission_baron4_failed
  }


  await cleanup();  // SCM GOSUB mission_cleanup_baron4




  // Variables for mission



  // LVAR_INT coke_boat1 coke_boat2 coke_boat3 coke_boat4 coke_boat_blip coke_boat vance_dance_samp_play
  // LVAR_INT boat_pilot1 boat_pilot2 boat_pilot3 boat_pilot4 boat_shooter1 boat_shooter3 boat_shooter4
  // VAR_INT Sphere_cok4 coke_boat_blip_arrow any_coke_boat
  // VAR_INT jetty_char1 jetty_char2 jetty_char3 jetty_char4 jetty_chars_created fastboat_health boat_goto_coords
  // VAR_INT you_want_some_samp eat_it_samp sleep_fish_samp heli_chopper cs_shotvcr boat_pilot5 created_coke_boat
  // VAR_INT set_heli_chopper_off cok4_barrel1 cok4_barrel2

  // ***************************************Mission Start*************************************


}
