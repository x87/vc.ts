// Generated from main/baron2.sc

import { $ } from "../utils/vars.mts";

// *******************************************************************************************
// *******************************************************************************************
// *************************************baron mission 2***************************************
// *************************************BUDDY HELICOPTER**************************************
// *******************************************************************************************
// *******************************************************************************************
// *******************************************************************************************

async function body() {


  Stat.RegisterMissionGiven();
  ONMISSION = 1;
  // SCRIPT_NAME baron2
  await asyncWait(0);


  Text.LoadMissionText("BARON2");
  Shortcut.SetDropoffPointForMission(-288.2, -487.5, 9.8, 275.0);


  created_other_heli = 0;
  created_other_heli2 = 0;
  $.audio_is_loading = 0;
  $.audio_has_loaded = 0;
  $.first_two_samples = 0;
  $.second_two_samples = 0;
  $.third_two_samples = 0;
  $.forth_two_samples = 0;
  $.fifth_two_samples = 0;
  $.sixth_two_samples = 0;
  taking_damage_samp1 = 0;
  taking_damage_samp2 = 0;
  nearly_at_site_samp = 0;
  leaving_heli_samp = 0;
  $.gang_car_driven = 0;
  $.kill_player_now = 0;
  upped_to_ten_peds = 0;
  $.shit_to_shoot = 0;


  World.SetPedDensityMultiplier(0.0);


  Streaming.SetAreaVisible(2 /* VIS_MANSION */);
  World.SetExtraColors(8, false /* FALSE */);


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSdiaz");
  Streaming.LoadSpecialCharacter(3, "CSbuddy");
  Streaming.LoadSpecialCharacter(4, "igbuddy");
  Streaming.RequestModel(maverick);


  Streaming.LoadSpecialModel(CUTOBJ01, "dzplant");
  Streaming.LoadSpecialModel(CUTOBJ02, "colphon");



  Streaming.LoadAllModelsNow();


  Streaming.LoadScene(-378.3, -591.9, 25.8);


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasSpecialCharacterLoaded(4)) || !(Streaming.HasModelLoaded(maverick))) {
    await asyncWait(0);


  }


  while (!(Streaming.HasModelLoaded(CUTOBJ01)) || !(Streaming.HasModelLoaded(CUTOBJ02))) {
    await asyncWait(0);


  }


  Cutscene.Load("cok_2a");
  World.ClearArea(-378.6, -552.6, 25.5, 15.0, true /* TRUE */);
  World.ClearArea(-379.0, -564.6, 19.8, 15.0, true /* TRUE */);
  Cutscene.SetOffset(-378.62, -552.676, 18.534);
  Camera.SetNearClip(0.1);



  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_diaz = CutsceneObject.Create(SPECIAL02);
  $.cs_diaz.setAnim("csdiaz");


  $.cs_buddy = CutsceneObject.Create(SPECIAL03);
  $.cs_buddy.setAnim("CSbuddy");


  $.cs_plant1 = CutsceneObject.Create(CUTOBJ01);
  $.cs_plant1.setAnim("dzplant");


  $.cs_phoncol = CutsceneObject.Create(CUTOBJ02);
  $.cs_phoncol.setAnim("colphon");


  World.ClearArea(-379.2, -536.4, 16.2, 1.0, true /* TRUE */);
  $.player1.setCoordinates(-379.2, -536.4, 16.2);
  $.player1.setHeading(0.0);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 4424) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK2_A", 10000, 1); // Mission brief


  while ($.cs_time < 6836) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK2_B", 10000, 1); // Mission brief


  while ($.cs_time < 12564) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK2_C", 10000, 1); // Mission brief


  while ($.cs_time < 13816) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK2_D", 10000, 1); // Mission brief


  while ($.cs_time < 15862) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK2_E", 10000, 1); // Mission brief


  while ($.cs_time < 17918) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK2_F", 10000, 1); // Mission brief


  while ($.cs_time < 20021) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK2_G", 10000, 1); // Mission brief


  while ($.cs_time < 24585) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK2_H", 10000, 1); // Mission brief


  while ($.cs_time < 27367) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK2_I", 10000, 1); // Mission brief


  while ($.cs_time < 32111) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK2_J", 10000, 1); // Mission brief


  while ($.cs_time < 35328) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK2_K", 10000, 1); // Mission brief


  while ($.cs_time < 39729) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK2_L", 10000, 1); // Mission brief


  while ($.cs_time < 41796) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK2_M", 10000, 1); // Mission brief


  while ($.cs_time < 44036) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK2_N", 10000, 1); // Mission brief


  while ($.cs_time < 45599) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK2_O", 10000, 1); // Mission brief


  while ($.cs_time < 48599) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  while ($.cs_time < 49960) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ02);
  World.ClearExtraColors(false /* FALSE */);
  Camera.DoFade(1500, 0 /* FADE_OUT */);


  Text.PrintBig("COK_2", 15000, 2); //"baron mission 2"


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Cutscene.Clear();



  World.SetPedDensityMultiplier(0.0);


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSbuddy");
  Streaming.LoadSpecialModel(CUTOBJ01, "cschopb");


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasModelLoaded(CUTOBJ01))) {
    await asyncWait(0);


  }


  Streaming.SetAreaVisible(0 /* VIS_MAIN_MAP */);
  Streaming.LoadScene(-380.9, -565.7, 40.0);


  Cutscene.Load("cok_2b");
  Cutscene.SetOffset(-390.8, -573.877, 40.1);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_buddy = CutsceneObject.Create(SPECIAL02);
  $.cs_buddy.setAnim("CSbuddy");


  $.cs_chopper = CutsceneObject.Create(CUTOBJ01);
  $.cs_chopper.setAnim("cschopb");



  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 130) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK2_P", 10000, 1); // Mission brief


  while ($.cs_time < 1110) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK2_Q", 10000, 1); // Mission brief


  while ($.cs_time < 3040) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK2_R", 10000, 1); // Mission brief


  while ($.cs_time < 5010) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK2_S", 10000, 1); // Mission brief


  while ($.cs_time < 6070) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK2_T", 10000, 1); // Mission brief


  while ($.cs_time < 7050) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK2_U", 10000, 1); // Mission brief


  while ($.cs_time < 10040) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK2_V", 10000, 1); // Mission brief


  while ($.cs_time < 11500) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  Camera.DoFade(1500, 0 /* FADE_OUT */);


  Text.ClearPrints();


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);


  Streaming.RequestModel(SGa);
  Streaming.RequestModel(SGb);
  Streaming.RequestModel(M60);
  Streaming.RequestModel(tec9);
  Streaming.RequestModel(bobcat);
  Streaming.RequestModel(barrel4);
  Streaming.RequestModel(ruger);
  Streaming.RequestModel(gangbur);
  Streaming.RequestModel(sparrow);
  Streaming.LoadSpecialCharacter(5, "SGc");


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasModelLoaded(SGa)) || !(Streaming.HasModelLoaded(SGb)) || !(Streaming.HasModelLoaded(M60)) || !(Streaming.HasModelLoaded(tec9)) || !(Streaming.HasModelLoaded(bobcat)) || !(Streaming.HasSpecialCharacterLoaded(5))) {
    await asyncWait(0);


  }


  while (!(Streaming.HasModelLoaded(barrel4)) || !(Streaming.HasModelLoaded(ruger)) || !(Streaming.HasModelLoaded(sparrow)) || !(Streaming.HasModelLoaded(gangbur))) {
    await asyncWait(0);


  }


  $.buddy_heli = Car.Create(maverick, -391.0, -573.0, -100.0);
  $.buddy_heli.changeColor(3 /* CARCOLOUR_CHERRYRED */, 1 /* CARCOLOUR_WHITE */);
  $.buddy_heli.setHealth(3000);

  // START OF MISSION


  Streaming.LoadSpecialCharacter(6, "spandxa");
  Streaming.RequestModel(marquis);
  Streaming.RequestModel(rio);
  Streaming.RequestModel(seaspar);
  Streaming.RequestModel(WMYGO);
  Streaming.RequestModel(caddy);


  Char.SetThreatReactionRangeMultiplier(2.0);


  if (!(Car.IsDead($.buddy_heli))) {
    $.heli_health = $.buddy_heli.getHealth();
    Hud.DisplayCounterWithString($.$id.heli_health, 1 /* COUNTER_DISPLAY_BAR */, "COK2_24");
    await helicopters_health();  // SCM GOSUB helicopters_health
    $.player1.shutUp(true /* TRUE */);
    $.buddy = Char.CreateInsideCar($.buddy_heli, 4 /* PEDTYPE_CIVMALE */, SPECIAL04);
    $.buddy.setSuffersCriticalHits(false /* FALSE */);
    $.buddy.setAsPlayerFriend($.player1, true /* TRUE */);
    $.buddy_heli.gotoCoords(-375.155, -548.155, 48.266, 20);
    Camera.SetFixedPosition(-386.772, -581.461, 40.134, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(-387.379, -580.692, 40.335, 2 /* JUMP_CUT */);
    $.buddy_heli.setStabiliser(true /* TRUE */);
    Audio.SetRadioChannel(3 /* FEVER */, -1);
  }


  await asyncWait(500);


  Camera.DoFade(1000, 1 /* FADE_IN */);


  await asyncWait(6000);


  World.SetCarDensityMultiplier(0.0);
  World.SetPedDensityMultiplier(0.0);


  Camera.SetFadingColor(1, 1, 1);
  Audio.SetMusicDoesFade(false /* FALSE */);
  Camera.DoFade(500, 0 /* FADE_OUT */);
  await asyncWait(500);


  if ($.player1.isInAnyCar()) {
    $.player1.warpFromCarToCoord(-379.2, -536.4, 16.2);
  }


  if (!(Car.IsDead($.buddy_heli))) {
    $.scplayer.attachToCar($.buddy_heli, -1.4, 1.0, -0.1, 1 /* FACING_LEFT */, 90.0, 32 /* WEAPONTYPE_M60 */);
  }


  Camera.RestoreJumpcut();
  Camera.DoFade(500, 1 /* FADE_IN */);


  if (Streaming.HasModelLoaded(marquis)) {
    $.sgang_car1 = Car.Create(marquis, -363.6, -226.7, 5.5);
  }



  while (!($.player1.locateAnyMeans3D(89.1, 1084.0, 39.0, 6.0, 6.0, 6.0, false /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.buddy_heli)) {
      $.scplayer.detachFromCar();
      $.player1.explodeHead();
      // SCM GOTO → mission_baron2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron2_failed"); // fallback: would break linear control flow
    }
    await helicopters_health();  // SCM GOSUB helicopters_health
    if ($.player1.locateAnyMeans3D(-375.0, -548.0, 48.266, 6.0, 6.0, 6.0, false /* FALSE */)) {
      $.buddy_heli.gotoCoords(-366.0, -346.0, 50.0, 50);
    }
    if ($.player1.locateAnyMeans3D(-366.0, -346.0, 50.0, 6.0, 6.0, 6.0, false /* FALSE */)) {
      $.buddy_heli.gotoCoords(-264.0, 46.2, 15.0, 70);
      Camera.SetFadingColor(0, 0, 0);
      if (created_other_heli == 0) {
        other_heli = Car.Create(seaspar, -110.0, 692.4, 70.0);
        other_heli.setHealth(500);
        heli_pilot1 = Char.CreateInsideCar(other_heli, 4 /* PEDTYPE_CIVMALE */, SGa);
        other_heli.gotoCoords(-110.0, -48.2, 38.0, 2);
        created_other_heli = 1;
      }
      if (created_other_heli2 == 0) {
        other_heli2 = Car.Create(sparrow, -108.0, 720.4, 68.0);
        heli_pilot2 = Char.CreateInsideCar(other_heli2, 4 /* PEDTYPE_CIVMALE */, SGa);
        other_heli2.gotoCoords(-108.0, -48.2, 40.0, 7);
        created_other_heli2 = 1;
      }
    }
    if ($.player1.locateAnyMeans3D(-264.0, 46.2, 15.0, 6.0, 6.0, 6.0, false /* FALSE */)) {
      $.buddy_heli.gotoCoords(17.9, 1035.5, 34.2, 40); //Prawn Island (porn studio)
      if ($.shit_to_shoot == 0) {
        $.sgang_car1.delete();
        if (Streaming.HasSpecialCharacterLoaded(6)) {
          $.sgang1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL06, -261.6, 62.4, 26.2);
        }
        $.sgang_car1 = Car.Create(marquis, -211.6, 394.1, 5.5);
        $.sgang_car1.setHealth(500);
        $.sgang_car1.setHeading(238.0);
        $.sgang_car2 = Car.Create(rio, -193.1, 384.0, 5.5);
        $.sgang_car2.setHealth(500);
        $.sgang_car2.setHeading(119.0);
        $.sgang_car3 = Car.Create(marquis, -222.9, 363.8, 5.5);
        $.sgang_car3.setHealth(500);
        //SET_CAR_HEADING sgang_car3 136.0

        $.sgang2 = Char.Create(4 /* PEDTYPE_CIVMALE */, WMYGO, -151.4, 493.2, 15.3); //GOLFERS
        $.sgang2.setPersonality(39 /* PEDSTAT_COWARD */);
        $.sgang3 = Char.Create(4 /* PEDTYPE_CIVMALE */, WMYGO, -150.5, 496.3, 15.4); //GOLFERS
        $.sgang3.setPersonality(39 /* PEDSTAT_COWARD */);
        Game.SetCharsChatting($.sgang2, $.sgang3, 999999);
        $.sgang_car4 = Car.Create(caddy, -145.6, 496.0, 14.8); //GOLF CADDY
        $.sgang_car4.setHealth(500);
        $.sgang_car4.setHeading(58.0);
        $.sgang_car5 = Car.Create(caddy, -148.8, 490.1, 14.8); //GOLF CADDY
        $.sgang_car5.setHealth(500);
        $.sgang_car5.setHeading(90.0);
        $.shit_to_shoot = 1;


      }
    }
    if ($.player1.locateAnyMeans3D(17.9, 1035.5, 34.2, 6.0, 6.0, 6.0, false /* FALSE */)) {
      $.buddy_heli.gotoCoords(87.0, 1087.6, 38.0, 50); //First building shootout (SWARM1)
      if ($.sgangs_creation == 0) {
        other_heli.delete();
        other_heli2.delete();
        heli_pilot1.delete();
        heli_pilot2.delete();
        $.sgang2.delete();
        $.sgang3.delete();
        $.sgang_car1.delete();
        $.sgang_car2.delete();
        $.sgang_car3.delete();
        $.sgang_car4.delete();
        $.sgang_car5.delete();
        Streaming.MarkModelAsNoLongerNeeded(sparrow);
        Streaming.MarkModelAsNoLongerNeeded(marquis);
        Streaming.MarkModelAsNoLongerNeeded(rio);
        Streaming.MarkModelAsNoLongerNeeded(seaspar);
        Streaming.MarkModelAsNoLongerNeeded(caddy);
        Streaming.MarkModelAsNoLongerNeeded(WMYGO);
        Streaming.UnloadSpecialCharacter(6);

        // ******************************SWARM 1********************************
        if (!(Car.IsDead($.buddy_heli))) {
          $.sgang1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGa, 70.9, 1106.4, -100.0);
          $.sgang1.setStayInSamePlace(true /* TRUE */);
          $.sgang1.setObjDestroyCar($.buddy_heli);
          $.sgang1.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.sgang1.lookAtPlayerAlways($.player1);
          $.sgang1.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
          $.sgang1.setHealth(50);
          $.sgang2 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGb, 75.0, 1106.9, -100.0);
          $.sgang2.setStayInSamePlace(true /* TRUE */);
          $.sgang2.setObjDestroyCar($.buddy_heli);
          $.sgang2.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.sgang2.lookAtPlayerAlways($.player1);
          $.sgang2.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
          $.sgang2.setHealth(50);
          $.sgang3 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGa, 71.5, 1099.0, -100.0);
          $.sgang3.setStayInSamePlace(true /* TRUE */);
          $.sgang3.setObjDestroyCar($.buddy_heli);
          $.sgang3.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.sgang3.lookAtPlayerAlways($.player1);
          $.sgang3.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
          $.sgang3.setHealth(50);
          $.sgang4 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGb, 78.4, 1101.6, -100.0);
          $.sgang4.setStayInSamePlace(true /* TRUE */);
          $.sgang4.setObjDestroyCar($.buddy_heli);
          $.sgang4.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.sgang4.lookAtPlayerAlways($.player1);
          $.sgang4.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
          $.sgang4.setHealth(50);
          $.sgang5 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGa, 76.0, 1095.6, -100.0);
          $.sgang5.setStayInSamePlace(true /* TRUE */);
          $.sgang5.setObjDestroyCar($.buddy_heli);
          $.sgang5.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.sgang5.lookAtPlayerAlways($.player1);
          $.sgang5.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
          $.sgang5.setHealth(50);
        }
        $.gang_barrel1 = ScriptObject.Create(barrel4, 65.6, 1104.6, 31.5);
        $.gang_barrel2 = ScriptObject.Create(barrel4, 65.7, 1107.5, 31.5);
        $.gang_barrel3 = ScriptObject.Create(barrel4, 86.7, 1114.3, 31.5);
        $.sgangs_creation = 1;
      }


    }
    if ($.first_two_samples == 0) {
      if ($.audio_is_loading == 0) {
        Audio.LoadMissionAudio(1, "COK2_1" as any);
        Audio.LoadMissionAudio(2, "COK2_2" as any);
        $.audio_is_loading = 1;
      }
      else {
        await audio_loaded_cok2();  // SCM GOSUB audio_loaded_cok2
      }
      if ($.audio_has_loaded == 1) {
        Audio.PlayMissionAudio(1); //One thing puzzling me, What's with 'Quentin!?
        Text.PrintNow("COK2_1", 5000, 2);
        if (Audio.HasMissionAudioFinished(1)) {
          await asyncWait(500);
          Audio.PlayMissionAudio(2); //I dunno, I always kinda liked it...Quentin Vance...
          Text.PrintNow("COK2_2", 5000, 2);
          $.first_two_samples = 1;
          await reset_audio_flags();  // SCM GOSUB reset_audio_flags
        }
      }
    }
    if ($.first_two_samples == 1 && $.second_two_samples == 0 && TIMERB > 3000) {
      if ($.audio_is_loading == 0) {
        Audio.LoadMissionAudio(1, "COK2_3" as any);
        Audio.LoadMissionAudio(2, "COK2_4" as any);
        $.audio_is_loading = 1;
      }
      else {
        await audio_loaded_cok2();  // SCM GOSUB audio_loaded_cok2
      }
      if ($.audio_has_loaded == 1) {
        Audio.PlayMissionAudio(1); //Vance? You're name's Lance Vance?!
        Text.PrintNow("COK2_3", 5000, 2);
        if (Audio.HasMissionAudioFinished(1)) {
          await asyncWait(500);
          Audio.PlayMissionAudio(2); //Hey! I got enough of that at school!
          Text.PrintNow("COK2_4", 5000, 2);
          $.second_two_samples = 1;
          await reset_audio_flags();  // SCM GOSUB reset_audio_flags
        }
      }
    }
    if ($.second_two_samples == 1 && $.third_two_samples == 0 && TIMERB > 3000) {
      if ($.audio_is_loading == 0) {
        Audio.LoadMissionAudio(1, "COK2_8d" as any);
        Audio.LoadMissionAudio(2, "COK2_7b" as any);
        $.audio_is_loading = 1;
      }
      else {
        await audio_loaded_cok2();  // SCM GOSUB audio_loaded_cok2
      }
      if ($.audio_has_loaded == 1) {
        Audio.PlayMissionAudio(1); //Lance Vance. You poor bastard.
        Text.PrintNow("COK2_13", 4000, 2);
        if (Audio.HasMissionAudioFinished(1)) {
          if (TIMERB > 6000) {
            Audio.PlayMissionAudio(2); //Where we headed anyway?
            Text.PrintNow("COK2_8", 4000, 2);
            $.third_two_samples = 1;
            await reset_audio_flags();  // SCM GOSUB reset_audio_flags
          }
        }
      }
    }
    if ($.third_two_samples == 1 && $.forth_two_samples == 0 && TIMERB > 2000) {
      if ($.audio_is_loading == 0) {
        Audio.LoadMissionAudio(1, "COK2_7c" as any);
        Audio.LoadMissionAudio(2, "COK2_5" as any);
        $.audio_is_loading = 1;
      }
      else {
        await audio_loaded_cok2();  // SCM GOSUB audio_loaded_cok2
      }
      if ($.audio_has_loaded == 1) {
        Audio.PlayMissionAudio(1); //Prawn Island.
        Text.PrintNow("COK2_9", 5000, 2);
        if (Audio.HasMissionAudioFinished(1)) {
          if (TIMERB > 4000) {
            Audio.PlayMissionAudio(2); //You ever fired one of those from a whirly?
            Text.PrintNow("COK2_5", 5000, 2);
            $.forth_two_samples = 1;
            await reset_audio_flags();  // SCM GOSUB reset_audio_flags
          }
        }
      }
    }


    if ($.forth_two_samples == 1 && $.fifth_two_samples == 0 && TIMERB > 3000) {
      if ($.audio_is_loading == 0) {
        Audio.LoadMissionAudio(1, "COK2_6" as any);
        Audio.LoadMissionAudio(2, "COK2_9" as any);
        $.audio_is_loading = 1;
      }
      else {
        await audio_loaded_cok2();  // SCM GOSUB audio_loaded_cok2
      }
      if ($.audio_has_loaded == 1) {
        Audio.PlayMissionAudio(1); //No. I'll get a bit of practice on the way
        Text.PrintNow("COK2_6", 3000, 2);
        if (Audio.HasMissionAudioFinished(1)) {
          if (TIMERB > 12000) {
            Audio.PlayMissionAudio(2); //Ok, we're almost there
            Text.PrintNow("COK2_14", 5000, 2);
            $.fifth_two_samples = 1;
            await reset_audio_flags();  // SCM GOSUB reset_audio_flags
          }
        }
      }
    }


    if ($.fifth_two_samples == 1 && $.sixth_two_samples == 0 && TIMERB > 2000) {
      if ($.audio_is_loading == 0) {
        Audio.LoadMissionAudio(1, "COK210a" as any);
        Audio.LoadMissionAudio(2, "COK210b" as any);
        $.audio_is_loading = 1;
      }
      else {
        await audio_loaded_cok2();  // SCM GOSUB audio_loaded_cok2
      }
      if ($.audio_has_loaded == 1) {
        Audio.PlayMissionAudio(1); //We'll make a couple of passes.
        Text.PrintNow("COK2_15", 5000, 2);
        if (Audio.HasMissionAudioFinished(1)) {
          await asyncWait(500);
          Audio.PlayMissionAudio(2); //So take out as many guns as you can
          Text.PrintNow("COK2_16", 5000, 2);
          $.sixth_two_samples = 1;
          await reset_audio_flags();  // SCM GOSUB reset_audio_flags
        }
      }
    }
    if ($.sixth_two_samples == 1 && nearly_at_site_samp == 0 && TIMERB > 2500) {
      if ($.audio_is_loading == 0) {
        Audio.LoadMissionAudio(1, "COK210c" as any);
        $.audio_is_loading = 1;
      }
      else {
        if (Audio.HasMissionAudioLoaded(1)) {
          $.audio_has_loaded = 1;
        }
      }
      if ($.audio_has_loaded == 1) {
        Audio.PlayMissionAudio(1); //Then I'll set you down and you're on your own.
        Text.PrintNow("COK2_17", 4000, 2);
        if (Audio.HasMissionAudioFinished(1)) {
          nearly_at_site_samp = 1;
          await reset_audio_flags();  // SCM GOSUB reset_audio_flags
        }
      }


    }


  }


  if (!(Car.IsDead($.buddy_heli))) {
    $.buddy_heli.setOrientation(270.0);
  }


  await zero_ints();  // SCM GOSUB zero_ints


  while (!($.deathkills == 5)) {
    await asyncWait(0);
    if (Car.IsDead($.buddy_heli)) {
      $.scplayer.detachFromCar();
      $.player1.explodeHead();
      // SCM GOTO → mission_baron2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron2_failed"); // fallback: would break linear control flow
    }
    await helicopters_health();  // SCM GOSUB helicopters_health
    await check_dead_chars();  // SCM GOSUB check_dead_chars
    if (TIMERB > 50000) {
      // SCM GOTO → move_on1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO move_on1"); // fallback: would break linear control flow
    }
    if ($.first_two_samples == 0) {
      if ($.audio_is_loading == 0) {
        Audio.LoadMissionAudio(1, "COK2_13" as any);
        $.audio_is_loading = 1;
      }
      else {
        if (Audio.HasMissionAudioLoaded(1)) {
          $.audio_has_loaded = 1;
        }
      }
      if ($.audio_has_loaded == 1) {
        Audio.PlayMissionAudio(1); //Shit! This is a war zone! Take out some of those gunmen
        Text.PrintNow("COK2_20", 4000, 2);
      }
    }



  }
}



async function move_on1() {



  if (!(Car.IsDead($.buddy_heli))) {
    $.buddy_heli.clearOrientation();
    $.buddy_heli.gotoCoords(113.0, 1106.9, 30.0, 40); //East of first building (SWARM 2!!!)
  }


  while (!($.player1.locateAnyMeans3D(117.0, 1106.9, 30.0, 6.0, 6.0, 6.0, false /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.buddy_heli)) {
      $.scplayer.detachFromCar();
      $.player1.explodeHead();
      // SCM GOTO → mission_baron2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron2_failed"); // fallback: would break linear control flow
    }
    await helicopters_health();  // SCM GOSUB helicopters_health


  }



  if (!(Car.IsDead($.buddy_heli))) {
    $.buddy_heli.setOrientation(1.0);
  }


  $.sgang1.delete();
  $.sgang2.delete();
  $.sgang3.delete();
  $.sgang4.delete();
  $.sgang5.delete();


  // ******************************SWARM 2********************************

  if (!(Car.IsDead($.buddy_heli))) {
    $.sgang1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGa, 59.0, 1117.7, 17.7); //bottom north
    $.sgang1.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.sgang1.lookAtPlayerAlways($.player1);
    $.sgang1.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
    $.sgang1.setHealth(50);
    $.sgang2 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGb, 64.7, 1089.8, 17.7); //bottom south
    $.sgang2.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.sgang2.lookAtPlayerAlways($.player1);
    $.sgang2.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
    $.sgang2.setHealth(50);
    $.sgang3 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGa, 61.0, 1091.1, 24.4); //top south
    $.sgang3.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.sgang3.lookAtPlayerAlways($.player1);
    $.sgang3.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
    $.sgang3.setHealth(50);
    $.sgang4 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGb, 58.2, 1118.7, 24.4); //top north
    $.sgang4.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.sgang4.lookAtPlayerAlways($.player1);
    $.sgang4.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
    $.sgang4.setHealth(50);
    $.sgang5 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGa, 64.9, 1119.0, 24.4); //top north front
    $.sgang5.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.sgang5.lookAtPlayerAlways($.player1);
    $.sgang5.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
    $.sgang5.setHealth(50);
  }


  await zero_ints();  // SCM GOSUB zero_ints


  while (!($.deathkills == 5)) {
    await asyncWait(0);
    if (Car.IsDead($.buddy_heli)) {
      $.scplayer.detachFromCar();
      $.player1.explodeHead();
      // SCM GOTO → mission_baron2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron2_failed"); // fallback: would break linear control flow
    }
    await helicopters_health();  // SCM GOSUB helicopters_health
    await check_dead_chars();  // SCM GOSUB check_dead_chars
    if (!(Char.IsDead($.sgang1))) {
      if ($.sgang1.locateAnyMeans3D(59.0, 1117.7, 17.7, 1.0, 1.0, 5.0, false /* FALSE */)) {
        $.sgang1.setObjRunToCoord(89.7, 1118.1);
      }
      if ($.sgang1.locateAnyMeans3D(89.7, 1118.1, 17.7, 1.0, 1.0, 5.0, false /* FALSE */)) {
        $.sgang1.setObjRunToCoord(94.7, 1107.1);
      }
      if ($.sgang1.locateAnyMeans3D(94.7, 1107.1, 17.7, 1.0, 1.0, 5.0, false /* FALSE */)) {
        $.sgang1.setObjDestroyCar($.buddy_heli);
        $.sgang1.setStayInSamePlace(true /* TRUE */);
      }
    }
    if (!(Char.IsDead($.sgang2))) {
      if ($.sgang2.locateAnyMeans3D(64.7, 1089.8, 17.7, 1.0, 1.0, 5.0, false /* FALSE */)) {
        $.sgang2.setObjRunToCoord(90.1, 1090.1);
      }
      if ($.sgang2.locateAnyMeans3D(90.1, 1090.1, 17.7, 1.0, 1.0, 5.0, false /* FALSE */)) {
        $.sgang2.setObjRunToCoord(91.1, 1097.8);
      }
      if ($.sgang2.locateAnyMeans3D(91.1, 1097.8, 17.7, 1.0, 1.0, 5.0, false /* FALSE */)) {
        $.sgang2.setObjDestroyCar($.buddy_heli);
        $.sgang2.setStayInSamePlace(true /* TRUE */);
      }
    }
    if (!(Char.IsDead($.sgang3))) {
      if ($.sgang3.locateAnyMeans3D(61.0, 1091.1, 24.4, 1.0, 1.0, 5.0, false /* FALSE */)) {
        $.sgang3.setObjRunToCoord(89.4, 1091.0);
      }
      if ($.sgang3.locateAnyMeans3D(89.4, 1091.0, 24.4, 1.0, 1.0, 5.0, false /* FALSE */)) {
        $.sgang3.setObjRunToCoord(94.5, 1100.5);
      }
      if ($.sgang3.locateAnyMeans3D(94.5, 1100.5, 24.4, 1.0, 1.0, 5.0, false /* FALSE */)) {
        $.sgang3.setObjDestroyCar($.buddy_heli);
        $.sgang3.setStayInSamePlace(true /* TRUE */);
      }
    }
    if (!(Char.IsDead($.sgang4))) {
      if ($.sgang4.locateAnyMeans3D(58.2, 1118.7, 24.4, 1.0, 1.0, 5.0, false /* FALSE */)) {
        $.sgang4.setObjRunToCoord(90.0, 1118.8);
      }
      if ($.sgang4.locateAnyMeans3D(90.0, 1118.8, 24.4, 1.0, 1.0, 5.0, false /* FALSE */)) {
        $.sgang4.setObjRunToCoord(94.5, 1099.9);
      }
      if ($.sgang4.locateAnyMeans3D(94.5, 1099.9, 24.4, 1.0, 1.0, 5.0, false /* FALSE */)) {
        $.sgang4.setObjDestroyCar($.buddy_heli);
        $.sgang4.setStayInSamePlace(true /* TRUE */);
      }
    }
    if (!(Char.IsDead($.sgang5))) {
      if ($.sgang5.locateAnyMeans3D(64.9, 1119.0, 24.4, 1.0, 1.0, 5.0, false /* FALSE */)) {
        $.sgang5.setObjRunToCoord(89.1, 1117.9);
      }
      if ($.sgang5.locateAnyMeans3D(89.1, 1117.9, 24.4, 1.0, 1.0, 5.0, false /* FALSE */)) {
        $.sgang5.setObjRunToCoord(93.0, 1110.0);
      }
      if ($.sgang5.locateAnyMeans3D(93.0, 1110.0, 24.4, 1.0, 1.0, 5.0, false /* FALSE */)) {
        $.sgang5.setObjDestroyCar($.buddy_heli);
        $.sgang5.setStayInSamePlace(true /* TRUE */);
      }
    }
    if (TIMERB > 40000) {
      // SCM GOTO → move_on2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO move_on2"); // fallback: would break linear control flow
    }


  }
}




async function move_on2() {


  if (!(Car.IsDead($.buddy_heli))) {
    $.buddy_heli.clearOrientation();
    $.buddy_heli.gotoCoords(90.9, 1196.0, 40.0, 40); //far away east of centre building
  }


  while (!($.player1.locateAnyMeans3D(90.9, 1196.0, 40.0, 6.0, 6.0, 6.0, false /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.buddy_heli)) {
      $.scplayer.detachFromCar();
      $.player1.explodeHead();
      // SCM GOTO → mission_baron2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron2_failed"); // fallback: would break linear control flow
    }
    await helicopters_health();  // SCM GOSUB helicopters_health


  }


  $.sgang_car1 = Car.Create(bobcat, 19.8, 1213.4, -100.0);
  $.sgang_car1.setHeading(233.7);


  $.sgang_car2 = Car.Create(bobcat, -12.1, 1207.3, -100.0);
  $.sgang_car2.setHeading(159.6);


  $.sgang_car3 = Car.Create(gangbur, -20.1, 1198.4, -100.0);
  $.sgang_car3.setHeading(34.6);


  gang_barrel7 = ScriptObject.Create(barrel4, 14.6, 1177.9, 22.5);
  gang_barrel8 = ScriptObject.Create(barrel4, 7.2, 1193.1, 17.8);
  gang_barrel9 = ScriptObject.Create(barrel4, -13.2, 1217.7, 20.4);
  gang_barrel10 = ScriptObject.Create(barrel4, -18.3, 1217.5, 20.4);


  $.sgang1.delete();
  $.sgang2.delete();
  $.sgang3.delete();
  $.sgang4.delete();
  $.sgang5.delete();

  // ******************************SWARM 3********************************

  if (!(Car.IsDead($.buddy_heli))) {
    $.sgang1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGa, 17.8, 1212.0, 20.9); //At the first bobcat
    $.sgang1.setStayInSamePlace(true /* TRUE */);
    $.sgang1.setObjDestroyCar($.buddy_heli);
    $.sgang1.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.sgang1.lookAtPlayerAlways($.player1);
    $.sgang1.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
    $.sgang1.setHealth(50);
    $.gang_drive = Car.Create(gangbur, 43.8, 1129.6, 17.9);
    $.gang_drive.setHeading(0.0);
    $.sgang2 = Char.CreateInsideCar($.gang_drive, 4 /* PEDTYPE_CIVMALE */, SGb);
    $.sgang2.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
    $.sgang2.setHealth(50);
    $.sgang2.lookAtPlayerAlways($.player1);
    $.sgang2.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.gang_drive.gotoCoordinates(38.8, 1198.0, 20.8);
    $.gang_drive.setStraightLineDistance(100);
    $.gang_drive.setForwardSpeed(10.0);
    $.gang_drive.setCruiseSpeed(25.0);
    $.sgang3 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGa, 19.3, 1196.2, 19.0); //Swiming pool
    $.sgang3.setStayInSamePlace(true /* TRUE */);
    $.sgang3.setObjDestroyCar($.buddy_heli);
    $.sgang3.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.sgang3.lookAtPlayerAlways($.player1);
    $.sgang3.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
    $.sgang3.setHealth(50);
    $.sgang4 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGb, -11.8, 1208.5, 22.5); //Back of bobcat2
    $.sgang4.setStayInSamePlace(true /* TRUE */);
    $.sgang4.setObjDestroyCar($.buddy_heli);
    $.sgang4.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.sgang4.lookAtPlayerAlways($.player1);
    $.sgang4.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
    $.sgang4.setHealth(50);
    $.sgang5 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGa, -22.9, 1198.6, 22.1); //next to bobcat3
    $.sgang5.setStayInSamePlace(true /* TRUE */);
    $.sgang5.setObjDestroyCar($.buddy_heli);
    $.sgang5.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.sgang5.lookAtPlayerAlways($.player1);
    $.sgang5.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
    $.sgang5.setHealth(50);
    $.sgang6 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGb, -34.7, 1202.3, 20.4); // basketball court front
    $.sgang6.setStayInSamePlace(true /* TRUE */);
    $.sgang6.setObjDestroyCar($.buddy_heli);
    $.sgang6.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.sgang6.lookAtPlayerAlways($.player1);
    $.sgang6.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
    $.sgang6.setHealth(50);
    $.sgang7 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGb, -40.5, 1195.1, 20.4); // basketball court back
    $.sgang7.setStayInSamePlace(true /* TRUE */);
    $.sgang7.setObjDestroyCar($.buddy_heli);
    $.sgang7.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.sgang7.lookAtPlayerAlways($.player1);
    $.sgang7.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
    $.sgang7.setHealth(50);
    $.sgang8 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGa, -22.3, 1218.0, 20.4); // behind guard house
    $.sgang8.setStayInSamePlace(true /* TRUE */);
    $.sgang8.setObjDestroyCar($.buddy_heli);
    $.sgang8.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.sgang8.lookAtPlayerAlways($.player1);
    $.sgang8.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
    $.sgang8.setHealth(50);
    $.sgang9 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGa, 27.3, 1196.4, 19.6); // Next to swimming pool
    $.sgang9.setStayInSamePlace(true /* TRUE */);
    $.sgang9.setObjDestroyCar($.buddy_heli);
    $.sgang9.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.sgang9.lookAtPlayerAlways($.player1);
    $.sgang9.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
    $.sgang9.setHealth(50);
    $.sgang10 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGa, 0.8, 1212.9, 20.4); // infront of bobcats
    $.sgang10.setStayInSamePlace(true /* TRUE */);
    $.sgang10.setObjDestroyCar($.buddy_heli);
    $.sgang10.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.sgang10.lookAtPlayerAlways($.player1);
    $.sgang10.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
    $.sgang5.setHealth(50);


  }




  if (!(Car.IsDead($.buddy_heli))) {
    $.buddy_heli.clearOrientation();
    $.buddy_heli.gotoCoords(28.1, 1224.5, 26.4, 40); //North of centre building
  }


  while (!($.player1.locateAnyMeans3D(28.1, 1224.5, 27.4, 6.0, 6.0, 6.0, false /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.buddy_heli)) {
      $.scplayer.detachFromCar();
      $.player1.explodeHead();
      // SCM GOTO → mission_baron2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron2_failed"); // fallback: would break linear control flow
    }
    if ($.gang_car_driven == 0) {
      if (!(Char.IsDead($.sgang2))) {
        if (!(Car.IsDead($.gang_drive))) {
          if ($.sgang2.locateAnyMeans3D(38.8, 1198.0, 20.8, 4.0, 4.0, 4.0, false /* FALSE */)) {
            $.gang_drive.setCruiseSpeed(0.0);
            $.sgang2.setObjLeaveCar($.gang_drive);
            $.gang_car_driven = 1;
          }
        }
      }
    }
    else {
      if ($.kill_player_now == 0) {
        if (!(Char.IsDead($.sgang2))) {
          if (!(Car.IsDead($.gang_drive))) {
            if (!($.sgang2.isInCar($.gang_drive))) {
              $.sgang2.setObjDestroyCar($.buddy_heli);
              $.sgang2.setStayInSamePlace(true /* TRUE */);
              $.kill_player_now = 1;
            }
          }
        }
      }
    }
    await helicopters_health();  // SCM GOSUB helicopters_health


  }


  if (!(Car.IsDead($.buddy_heli))) {
    $.buddy_heli.setOrientation(90.0);
  }


  await zero_ints();  // SCM GOSUB zero_ints


  upped_to_ten_peds = 1;


  while (!($.deathkills > 9)) {
    await asyncWait(0);
    if (Car.IsDead($.buddy_heli)) {
      $.scplayer.detachFromCar();
      $.player1.explodeHead();
      // SCM GOTO → mission_baron2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron2_failed"); // fallback: would break linear control flow
    }
    await helicopters_health();  // SCM GOSUB helicopters_health
    await check_dead_chars();  // SCM GOSUB check_dead_chars
    if ($.gang_car_driven == 0) {
      if (!(Char.IsDead($.sgang2))) {
        if (!(Car.IsDead($.gang_drive))) {
          if ($.sgang2.locateAnyMeans3D(38.8, 1198.0, 20.8, 4.0, 4.0, 4.0, false /* FALSE */)) {
            $.gang_drive.setCruiseSpeed(0.0);
            $.sgang2.setObjLeaveCar($.gang_drive);
            $.gang_car_driven = 1;
          }
        }
      }
    }
    else {
      if ($.kill_player_now == 0) {
        if (!(Char.IsDead($.sgang2))) {
          if (!(Car.IsDead($.gang_drive))) {
            if (!($.sgang2.isInCar($.gang_drive))) {
              $.sgang2.setObjDestroyCar($.buddy_heli);
              $.sgang2.setStayInSamePlace(true /* TRUE */);
              $.kill_player_now = 1;
            }
          }
        }
      }
    }
    if (TIMERB > 20000) {
      // SCM GOTO → move_on3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO move_on3"); // fallback: would break linear control flow
    }
    if (!(Car.IsDead($.buddy_heli))) {
      if (taking_damage_samp1 == 0) {
        Audio.LoadMissionAudio(1, "COK2_14" as any);
        while (!(Audio.HasMissionAudioLoaded(1))) {
          await asyncWait(0);
        }
        Audio.PlayMissionAudio(1); //We're taking hits here man
        Text.PrintNow("COK2_21", 5000, 2);
        taking_damage_samp1 = 1;
      }
    }


  }
}



async function move_on3() {


  if (!(Car.IsDead($.buddy_heli))) {
    $.buddy_heli.clearOrientation();
    $.buddy_heli.gotoCoords(-32.4, 1222.5, 30.6, 40); //Next to basketball court
  }


  while (!($.player1.locateAnyMeans3D(-32.4, 1222.5, 30.6, 6.0, 6.0, 6.0, false /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.buddy_heli)) {
      $.scplayer.detachFromCar();
      $.player1.explodeHead();
      // SCM GOTO → mission_baron2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron2_failed"); // fallback: would break linear control flow
    }
    await helicopters_health();  // SCM GOSUB helicopters_health


  }


  if (!(Car.IsDead($.buddy_heli))) {
    $.buddy_heli.setOrientation(140.0);
  }


  TIMERB = 0;


  while (!($.deathkills > 9)) {
    await asyncWait(0);
    if (Car.IsDead($.buddy_heli)) {
      $.scplayer.detachFromCar();
      $.player1.explodeHead();
      // SCM GOTO → mission_baron2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron2_failed"); // fallback: would break linear control flow
    }
    await helicopters_health();  // SCM GOSUB helicopters_health
    await check_dead_chars();  // SCM GOSUB check_dead_chars
    if (TIMERB > 20000) {
      // SCM GOTO → move_on4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO move_on4"); // fallback: would break linear control flow
    }
    if (!(Car.IsDead($.buddy_heli))) {
      if (taking_damage_samp1 == 0) {
        Audio.LoadMissionAudio(1, "COK2_14" as any);
        while (!(Audio.HasMissionAudioLoaded(1))) {
          await asyncWait(0);
        }
        Audio.PlayMissionAudio(1); //We're taking hits here man
        Text.PrintNow("COK2_21", 5000, 2);
        taking_damage_samp1 = 1;
      }
    }


  }
}



async function move_on4() {


  upped_to_ten_peds = 0;


  await asyncWait(500);


  $.sgang1.delete();
  $.sgang2.delete();
  $.sgang3.delete();
  $.sgang4.delete();
  $.sgang5.delete();

  // ******************************SWARM 4********************************

  if (!(Car.IsDead($.buddy_heli))) {
    $.sgang1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGb, -41.4, 1114.4, -100.0);
    $.sgang1.setStayInSamePlace(true /* TRUE */);
    $.sgang1.setObjDestroyCar($.buddy_heli);
    $.sgang1.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.sgang1.lookAtPlayerAlways($.player1);
    $.sgang1.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
    $.sgang1.setHealth(50);
    $.sgang2 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGa, -59.3, 1113.0, -100.0);
    $.sgang2.setStayInSamePlace(true /* TRUE */);
    $.sgang2.setObjDestroyCar($.buddy_heli);
    $.sgang2.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.sgang2.lookAtPlayerAlways($.player1);
    $.sgang2.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
    $.sgang2.setHealth(50);
    $.sgang3 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGb, -57.8, 1121.4, -100.0);
    $.sgang3.setStayInSamePlace(true /* TRUE */);
    $.sgang3.setObjDestroyCar($.buddy_heli);
    $.sgang3.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.sgang3.lookAtPlayerAlways($.player1);
    $.sgang3.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
    $.sgang3.setHealth(50);
    $.sgang4 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGa, -44.4, 1119.6, -100.0);
    $.sgang4.setStayInSamePlace(true /* TRUE */);
    $.sgang4.setObjDestroyCar($.buddy_heli);
    $.sgang4.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.sgang4.lookAtPlayerAlways($.player1);
    $.sgang4.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
    $.sgang4.setHealth(50);
    $.sgang5 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGb, -45.0, 1123.6, -100.0);
    $.sgang5.setStayInSamePlace(true /* TRUE */);
    $.sgang5.setObjDestroyCar($.buddy_heli);
    $.sgang5.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.sgang5.lookAtPlayerAlways($.player1);
    $.sgang5.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
    $.sgang5.setHealth(50);
  }


  $.gang_barrel4 = ScriptObject.Create(barrel4, -41.1, 1106.3, 29.9);
  $.gang_barrel5 = ScriptObject.Create(barrel4, -60.8, 1102.7, 29.9);
  gang_barrel6 = ScriptObject.Create(barrel4, -46.6, 1118.5, 29.9);


  if (!(Car.IsDead($.buddy_heli))) {
    $.buddy_heli.clearOrientation();
    $.buddy_heli.gotoCoords(-49.8, 1144.7, 38.3, 40);
  }


  while (!($.player1.locateAnyMeans3D(-49.8, 1144.7, 38.3, 6.0, 6.0, 6.0, false /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.buddy_heli)) {
      $.scplayer.detachFromCar();
      $.player1.explodeHead();
      // SCM GOTO → mission_baron2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron2_failed"); // fallback: would break linear control flow
    }
    await helicopters_health();  // SCM GOSUB helicopters_health


  }


  if (!(Car.IsDead($.buddy_heli))) {
    $.buddy_heli.setOrientation(90.0);
  }


  $.sgang6.delete();
  $.sgang7.delete();
  $.sgang8.delete();
  $.sgang9.delete();
  $.sgang10.delete();


  await zero_ints();  // SCM GOSUB zero_ints


  while (!($.deathkills == 5)) {
    await asyncWait(0);
    if (Car.IsDead($.buddy_heli)) {
      $.scplayer.detachFromCar();
      $.player1.explodeHead();
      // SCM GOTO → mission_baron2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron2_failed"); // fallback: would break linear control flow
    }
    await helicopters_health();  // SCM GOSUB helicopters_health
    await check_dead_chars();  // SCM GOSUB check_dead_chars
    if (TIMERB > 40000) {
      // SCM GOTO → move_on5 (not lowered; manual jump required)
      throw new Error("unresolved GOTO move_on5"); // fallback: would break linear control flow
    }
    if (!(Car.IsDead($.buddy_heli))) {
      if (taking_damage_samp2 == 0) {
        Audio.LoadMissionAudio(1, "COK2_15" as any);
        while (!(Audio.HasMissionAudioLoaded(1))) {
          await asyncWait(0);
        }
        Audio.PlayMissionAudio(1); //This thing ain't cheap to fix! Take 'em out
        Text.PrintNow("COK2_22", 5000, 2);
        taking_damage_samp2 = 1;
      }
    }


  }
}



async function move_on5() {



  await asyncWait(1500);
  $.sgang1.delete();
  $.sgang2.delete();
  $.sgang3.delete();
  $.sgang4.delete();
  $.sgang5.delete();

  // ******************************SWARM 5********************************

  if (!(Car.IsDead($.buddy_heli))) {
    $.sgang1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGb, 14.6, 1145.4, -100.0); //Top balcony left
    $.sgang1.setStayInSamePlace(true /* TRUE */);
    $.sgang1.setObjDestroyCar($.buddy_heli);
    $.sgang1.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.sgang1.lookAtPlayerAlways($.player1);
    $.sgang1.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
    $.sgang1.setHealth(50);
    $.sgang2 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGa, 21.9, 1146.7, -100.0); //Top balcony right
    $.sgang2.setStayInSamePlace(true /* TRUE */);
    $.sgang2.setObjDestroyCar($.buddy_heli);
    $.sgang2.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.sgang2.lookAtPlayerAlways($.player1);
    $.sgang2.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
    $.sgang2.setHealth(50);
    $.sgang3 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGa, 11.3, 1147.0, 22.5); //lower balcony left
    $.sgang3.setStayInSamePlace(true /* TRUE */);
    $.sgang3.setObjDestroyCar($.buddy_heli);
    $.sgang3.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.sgang3.lookAtPlayerAlways($.player1);
    $.sgang3.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
    $.sgang3.setHealth(50);
    $.sgang4 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGa, 28.9, 1146.3, 20.5); //lower balcony right
    $.sgang4.setStayInSamePlace(true /* TRUE */);
    $.sgang4.setObjDestroyCar($.buddy_heli);
    $.sgang4.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.sgang4.lookAtPlayerAlways($.player1);
    $.sgang4.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
    $.sgang4.setHealth(50);
    $.sgang5 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGb, 15.9, 1145.5, 22.5); //lower balcony centre
    $.sgang5.setStayInSamePlace(true /* TRUE */);
    $.sgang5.setObjDestroyCar($.buddy_heli);
    $.sgang5.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.sgang5.lookAtPlayerAlways($.player1);
    $.sgang5.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
    $.sgang5.setHealth(50);
  }


  if (!(Car.IsDead($.buddy_heli))) {
    $.buddy_heli.clearOrientation();
    $.buddy_heli.gotoCoords(20.0, 1125.0, 36.0, 20); // Centre building
  }


  while (!($.player1.locateAnyMeans3D(20.0, 1125.0, 36.0, 6.0, 6.0, 6.0, false /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.buddy_heli)) {
      $.scplayer.detachFromCar();
      $.player1.explodeHead();
      // SCM GOTO → mission_baron2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron2_failed"); // fallback: would break linear control flow
    }
    await helicopters_health();  // SCM GOSUB helicopters_health


  }


  if (!(Car.IsDead($.buddy_heli))) {
    $.buddy_heli.setOrientation(270.0);
  }



  await zero_ints();  // SCM GOSUB zero_ints


  while (!($.deathkills == 5)) {
    await asyncWait(0);
    if (Car.IsDead($.buddy_heli)) {
      $.scplayer.detachFromCar();
      $.player1.explodeHead();
      // SCM GOTO → mission_baron2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron2_failed"); // fallback: would break linear control flow
    }
    await helicopters_health();  // SCM GOSUB helicopters_health
    await check_dead_chars();  // SCM GOSUB check_dead_chars
    if (TIMERB > 40000) {
      // SCM GOTO → move_on6 (not lowered; manual jump required)
      throw new Error("unresolved GOTO move_on6"); // fallback: would break linear control flow
    }


  }
}




async function move_on6() {


  if (!(Car.IsDead($.buddy_heli))) {
    $.sgang_boss = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL05, 68.7, 1098.2, 31.7);
    $.sgang_boss.setStayInSamePlace(true /* TRUE */);
    $.sgang_boss.lookAtPlayerAlways($.player1);
    $.sgang_boss.giveWeapon(27 /* WEAPONTYPE_RUGER */, 30000);
    $.sgang_boss.setHealth(100);
    $.sgang_boss.setHeading(90.0);
    $.sgang1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGb, 62.8, 1098.2, 31.7);
    $.sgang1.setStayInSamePlace(true /* TRUE */);
    $.sgang1.setObjKillPlayerOnFoot($.player1);
    $.sgang1.lookAtPlayerAlways($.player1);
    $.sgang1.giveWeapon(27 /* WEAPONTYPE_RUGER */, 30000);
    $.sgang1.setHealth(50);
    $.sgang2 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGb, 66.6, 1093.7, 31.7);
    $.sgang2.setStayInSamePlace(true /* TRUE */);
    $.sgang2.setObjKillPlayerOnFoot($.player1);
    $.sgang2.lookAtPlayerAlways($.player1);
    $.sgang2.giveWeapon(27 /* WEAPONTYPE_RUGER */, 30000);
    $.sgang2.setHealth(50);


  }



  if (!(Car.IsDead($.buddy_heli))) {
    $.buddy_heli.clearOrientation();
    $.buddy_heli.gotoCoords(37.0, 1075.0, 43.0, 20); //Back to first building
    $.buddy_heli.setProofs(true /* TRUE */, true /* TRUE */, true /* TRUE */, true /* TRUE */, true /* TRUE */);
  }



  $.first_two_samples = 0;
  $.second_two_samples = 0;
  $.audio_is_loading = 0;
  $.audio_has_loaded = 0;


  Audio.LoadMissionAudio(1, "COK2_20" as any);
  Audio.LoadMissionAudio(2, "COK2_21" as any);
  $.audio_is_loading = 1;


  if (!(Char.IsDead($.sgang_boss))) {
    await asyncWait(3500);
    if (!(Car.IsDead($.buddy_heli))) {
      Camera.SetNearClip(0.5);
      Camera.SetFixedPosition(69.915, 1098.858, 33.058, 0.0, 0.0, 0.0);
      Camera.PointAtCar($.buddy_heli, 15 /* FIXED */, 2 /* JUMP_CUT */);
    }
    await asyncWait(500);
    if (!(Char.IsDead($.sgang_boss))) {
      while ($.first_two_samples == 0) {
        await asyncWait(0);
        if ($.audio_is_loading == 1) {
          if (Audio.HasMissionAudioLoaded(1) && Audio.HasMissionAudioLoaded(2)) {
            $.audio_has_loaded = 1;
          }
        }
        if ($.audio_has_loaded == 1) {
          Audio.PlayMissionAudio(1); //asshole
          Text.PrintNow("COK2_27", 2000, 2);
          if (Audio.HasMissionAudioFinished(1)) {
            if (!(Char.IsDead($.sgang_boss))) {
              if (!(Car.IsDead($.buddy_heli))) {
                $.sgang_boss.setObjDestroyCar($.buddy_heli);
                $.sgang_boss.setThreatSearch(1 /* THREAT_PLAYER1 */);
                $.sgang_boss.setAccuracy(30);
              }
            }
            if (!(Char.IsDead($.sgang1))) {
              if (!(Car.IsDead($.buddy_heli))) {
                $.sgang1.setObjDestroyCar($.buddy_heli);
                $.sgang1.setThreatSearch(1 /* THREAT_PLAYER1 */);
                $.sgang1.setAccuracy(20);
              }
            }
            if (!(Char.IsDead($.sgang2))) {
              if (!(Car.IsDead($.buddy_heli))) {
                $.sgang2.setObjDestroyCar($.buddy_heli);
                $.sgang2.setThreatSearch(1 /* THREAT_PLAYER1 */);
                $.sgang2.setAccuracy(20);
              }
            }
            Audio.PlayMissionAudio(2); //Your going down
            Text.PrintNow("COK2_28", 2000, 2);
            $.first_two_samples = 1;
            await reset_audio_flags();  // SCM GOSUB reset_audio_flags
          }
        }


      }
    }
    await asyncWait(1000);
    Camera.RestoreJumpcut();
    if (!(Car.IsDead($.buddy_heli))) {
      $.buddy_heli.setProofs(false /* FALSE */, false /* FALSE */, false /* FALSE */, false /* FALSE */, false /* FALSE */);
    }
  }


  while (!($.player1.locateAnyMeans3D(37.0, 1075.0, 43.0, 6.0, 6.0, 6.0, false /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.buddy_heli)) {
      $.scplayer.detachFromCar();
      $.player1.explodeHead();
      // SCM GOTO → mission_baron2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron2_failed"); // fallback: would break linear control flow
    }
    await helicopters_health();  // SCM GOSUB helicopters_health


  }


  if (!(Car.IsDead($.buddy_heli))) {
    $.buddy_heli.setOrientation(237.0);
  }


  if (Char.IsDead($.sgang1)) {
  }


  await zero_ints();  // SCM GOSUB zero_ints


  while (!(Char.IsDead($.sgang_boss)) || !(Char.IsDead($.sgang1)) || !(Char.IsDead($.sgang2))) {
    await asyncWait(0);
    if (Car.IsDead($.buddy_heli)) {
      $.scplayer.detachFromCar();
      $.player1.explodeHead();
      // SCM GOTO → mission_baron2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron2_failed"); // fallback: would break linear control flow
    }
    await helicopters_health();  // SCM GOSUB helicopters_health


  }


  $.briefcase_baron2 = Pickup.Create(briefcase, 3 /* PICKUP_ONCE */, 68.7, 1098.2, 32.5);


  if (!(Car.IsDead($.buddy_heli))) {
    $.buddy_heli.clearOrientation();
    $.buddy_heli.gotoCoords(33.7, 1083.0, 15.0, 2); //Go to land
    $.buddy_heli.setOrientation(180.0);
    Hud.ClearCounter($.$id.heli_health);
    $.buddy_heli.setHealth(1000);
  }



  World.SetCarDensityMultiplier(1.0);
  World.SetPedDensityMultiplier(1.0);


  while (!($.player1.locateAnyMeans3D(33.7, 1083.0, 15.0, 6.0, 6.0, 4.0, false /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.buddy_heli)) {
      $.scplayer.detachFromCar();
      $.player1.explodeHead();
      // SCM GOTO → mission_baron2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron2_failed"); // fallback: would break linear control flow
    }
    if (leaving_heli_samp == 0) {
      if ($.audio_is_loading == 0) {
        Audio.LoadMissionAudio(1, "COK2_16" as any);
        $.audio_is_loading = 1;
      }
      else {
        if (Audio.HasMissionAudioLoaded(1)) {
          $.audio_has_loaded = 1;
        }
      }
      if ($.audio_has_loaded == 1) {
        Audio.PlayMissionAudio(1); //Ok, you're on your own from here on in goodluck, brother!
        Text.PrintNow("COK2_23", 5000, 2);
        leaving_heli_samp = 0;
      }
    }


  }



  if (!(Car.IsDead($.buddy_heli))) {
    $.buddy_heli.setOrientation(180.0);
  }


  await asyncWait(1000);


  $.scplayer.detachFromCar();
  $.player1.giveWeapon(32 /* WEAPONTYPE_M60 */, 100);
  $.player1.setCurrentWeapon(32 /* WEAPONTYPE_M60 */);
  Game.SetMaxWantedLevel(5);
  $.player1.shutUp(false /* FALSE */);


  if (!(Car.IsDead($.buddy_heli))) {
    $.buddy_heli.setProofs(false /* FALSE */, false /* FALSE */, false /* FALSE */, false /* FALSE */, false /* FALSE */);
    $.buddy_heli.gotoCoords(-19.9, 878.0, 45.0, 20); // Heli go home
    $.buddy_heli.setStabiliser(false /* FALSE */);
  }


  Text.PrintNow("COK2_25", 8000, 1); //Get the money


  $.sgang1.delete();
  $.sgang2.delete();
  $.sgang3.delete();
  $.sgang4.delete();
  $.sgang5.delete();

  // ******************************SWARM 6********************************

  $.sgang1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGb, 79.6, 1106.4, 17.7); //ground level right
  $.sgang1.setStayInSamePlace(true /* TRUE */);
  $.sgang1.setObjKillPlayerOnFoot($.player1);
  $.sgang1.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.sgang1.lookAtPlayerAlways($.player1);
  $.sgang1.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
  $.sgang1.setHealth(50);


  $.sgang2 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGa, 70.4, 1103.9, 17.7); //Ground level left
  $.sgang2.setStayInSamePlace(true /* TRUE */);
  $.sgang2.setObjKillPlayerOnFoot($.player1);
  $.sgang2.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.sgang2.lookAtPlayerAlways($.player1);
  $.sgang2.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
  $.sgang2.setHealth(50);


  $.sgang3 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGb, 67.6, 1107.2, 24.4); //1st floot left
  $.sgang3.setStayInSamePlace(true /* TRUE */);
  $.sgang3.setObjKillPlayerOnFoot($.player1);
  $.sgang3.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.sgang3.lookAtPlayerAlways($.player1);
  $.sgang3.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
  $.sgang3.setHealth(50);


  $.sgang4 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGa, 74.9, 1112.9, 22.2); //middle landing centre
  $.sgang4.setStayInSamePlace(true /* TRUE */);
  $.sgang4.setObjKillPlayerOnFoot($.player1);
  $.sgang4.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.sgang4.lookAtPlayerAlways($.player1);
  $.sgang4.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
  $.sgang4.setHealth(50);


  $.sgang5 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGb, 79.0, 1111.1, 20.0); //lower balcony centre
  $.sgang5.setStayInSamePlace(true /* TRUE */);
  $.sgang5.setObjKillPlayerOnFoot($.player1);
  $.sgang5.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.sgang5.lookAtPlayerAlways($.player1);
  $.sgang5.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
  $.sgang5.setHealth(50);


  $.sgang6 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGa, 81.6, 1105.6, 24.6); //1st floor right
  $.sgang6.setStayInSamePlace(true /* TRUE */);
  $.sgang6.setObjKillPlayerOnFoot($.player1);
  $.sgang6.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.sgang6.lookAtPlayerAlways($.player1);
  $.sgang6.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
  $.sgang6.setHealth(50);


  $.sgang7 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGb, 62.9, 1102.1, 31.5); //Stair well to roof
  $.sgang7.setStayInSamePlace(true /* TRUE */);
  $.sgang7.setObjKillPlayerOnFoot($.player1);
  $.sgang7.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.sgang7.lookAtPlayerAlways($.player1);
  $.sgang7.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 30000);
  $.sgang7.setHealth(50);


  $.baron_blip1 = Blip.AddForPickup($.briefcase_baron2);


  while (!($.briefcase_baron2.hasBeenCollected())) {
    await asyncWait(0);
    if (Car.IsDead($.buddy_heli)) {
      Text.PrintNow("COK2_26", 5000, 1); //You killed Lance
      // SCM GOTO → mission_baron2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron2_failed"); // fallback: would break linear control flow
    }


  }
  await asyncWait(500);


  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);


  $.buddy_heli.delete();
  $.buddy.delete();
  $.buddy_heli = Car.Create(maverick, 31.5, 884.7, 60.0);
  $.buddy = Char.CreateInsideCar($.buddy_heli, 4 /* PEDTYPE_CIVMALE */, SPECIAL04);
  $.buddy_heli.changeColor(3 /* CARCOLOUR_CHERRYRED */, 1 /* CARCOLOUR_WHITE */);
  $.buddy_heli.setForwardSpeed(30.0);
  $.buddy_heli.gotoCoords(68.9, 1101.6, 35.0, 50); //Pick up player
  $.player1.lookAtCharAlways($.buddy);


  Camera.SetFixedPosition(62.132, 1093.546, 33.835, 0.0, 0.0, 0.0);
  Camera.PointAtCar($.buddy_heli, 15 /* FIXED */, 2 /* JUMP_CUT */);
  World.ClearArea(62.132, 1093.546, 33.835, 1.0, true /* TRUE */);


  await asyncWait(9000);


  Camera.DoFade(600, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  if (!(Car.IsDead($.buddy_heli))) {
    Camera.SetFixedPosition(39.867, 1057.500, 42.034, 0.0, 0.0, 0.0);
    Camera.PointAtCar($.buddy_heli, 15 /* FIXED */, 2 /* JUMP_CUT */);
    $.buddy_heli.setHeading(180.0);
  }


  $.player1.setCoordinates(76.7, 1119.8, 25.4);
  $.player1.stopLooking();


  Camera.DoFade(600, 1 /* FADE_IN */);


  if (!(Car.IsDead($.buddy_heli))) {
    $.buddy_heli.gotoCoords(-19.9, 878.0, 45.0, 50);
    $.stunt_double2 = Char.CreateAsPassenger($.buddy_heli, 5 /* PEDTYPE_CIVFEMALE */, null, 0);
  }


  await asyncWait(6000);


  Camera.DoFade(1000, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  if (!(Car.IsDead($.buddy_heli))) {
    Streaming.LoadScene(-375.7, -543.5, 16.6);
    $.player1.setCoordinates(-375.7, -543.5, 16.2);
    $.player1.setHeading(0.0);
  }


  await asyncWait(300);


  Camera.DoFade(1000, 1 /* FADE_IN */);


  Camera.RestoreJumpcut();
  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);

  //PRINT_HELP ( OPEN_B )



  // SCM GOTO → mission_baron2_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_baron2_passed"); // fallback: would break linear control flow
}



// Mission baron2 failed


async function onFailed() {
  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed"
}




// mission baron2 passed


async function mission_baron2_passed() {


  $.flag_baron_mission2_passed = 1;
  Audio.PlayMissionPassedTune(1);
  Text.PrintWithNumberBig("M_PASS", 2000, 5000, 1); //"Mission Passed!"
  $.player1.clearWantedLevel();
  $.player1.addScore(2000);
  Stat.RegisterMissionPassed("COK_2");
  Stat.PlayerMadeProgress(1);
  $.sniper_in_stock = 1;
  Weather.SetAllowHurricanes(false /* FALSE */);
  // MAIN LAND RESTARTS

  Restart.AddHospital(-822.7, 1157.9, 10.1, .0, 4.0); // (north)
  Restart.AddPolice(-659.5, 760.4, 10.5, 133.0); // (north)


  Restart.AddHospital(-885.2, -470.4, 12.1, 276.0); // (south)
  Restart.AddPolice(-871.9, -682.3, 10.2, 328.1); // (south)


  Path.SwitchPedRoadsOn(189.8, 230.3, 0.0, 248.0, 258.5, 30.0); //  Golf course road block
  Path.SwitchPedRoadsOn(-38.0, 84.3, 0.0, -102.3, 95.1, 30.0); //  Golf course road block
  Path.SwitchRoadsOn(189.8, 230.3, 0.0, 248.0, 258.5, 30.0); //  Golf course road block
  Path.SwitchRoadsOn(-38.0, 84.3, 0.0, -102.3, 95.1, 30.0); //  Golf course road block
  Path.SwitchRoadsOn(175.0, 236.1, 0.0, 161.0, 242.4, 30.0); //  Golf course road block
  Path.SwitchRoadsOn(149.8, 231.4, 0.0, 136.0, 235.3, 30.0); //  Golf course road block
  Path.SwitchRoadsOn(63.4, 188.6, 0.0, 49.4, 189.7, 30.0); //  Golf course road block
  $.golf_roadblock.delete();
  Path.SwitchPedRoadsOn(-214.6, -948.8, 0.0, -258.7, -920.6, 30.0); //  South road block
  Path.SwitchRoadsOn(-214.6, -948.8, 0.0, -258.7, -920.6, 30.0); //  South road block
  $.south_roadblock.delete();
  Path.SwitchPedRoadsOn(-787.8, -519.4, 10.0, -657.5, -475.2, 20.0); // Star Island gates mainland
  Path.SwitchRoadsOn(-787.8, -519.4, 10.0, -657.5, -475.2, 20.0); // Star Island gates mainland
  $.star_gate_1.delete();
  $.star_gate_1 = ScriptObject.CreateNoOffset(comgate1open, -712.524, -489.428, 12.549);
  $.star_gate_1.dontRemove();
  $.pier_closed.delete();
  Path.SwitchPedRoadsOn(-99.8, 1041.9, 0.0, -129.0, 1097.4, 30.0); //  porn island road block
  Path.SwitchRoadsOn(-99.8, 1041.9, 0.0, -129.0, 1097.4, 30.0); // porn island road block
  $.porn_roadblock.delete();
  Audio.PlayAnnouncement(1 /* ANNOUNCEMENT_TRACK_BRIDGE_OPEN */);
  $.gen_car15.switch(101);
  $.gen_car38.switch(101);
  $.gen_car13.switch(101);
  $.gen_car14.switch(101);
  // START_NEW_SCRIPT baron_mission3_loop 
}




// mission cleanup


async function cleanup() {


  ONMISSION = 0;
  $.timer_mobile_start = Clock.GetGameTimer();
  Streaming.MarkModelAsNoLongerNeeded(sparrow);
  Streaming.MarkModelAsNoLongerNeeded(M60);
  Streaming.MarkModelAsNoLongerNeeded(tec9);
  Streaming.MarkModelAsNoLongerNeeded(ruger);
  Streaming.MarkModelAsNoLongerNeeded(bobcat);
  Streaming.MarkModelAsNoLongerNeeded(barrel4);
  Streaming.MarkModelAsNoLongerNeeded(SGa);
  Streaming.MarkModelAsNoLongerNeeded(SGb);
  Streaming.MarkModelAsNoLongerNeeded(maverick);
  Streaming.MarkModelAsNoLongerNeeded(gangbur);
  Streaming.MarkModelAsNoLongerNeeded(marquis);
  Streaming.MarkModelAsNoLongerNeeded(rio);
  Streaming.MarkModelAsNoLongerNeeded(seaspar);
  Streaming.MarkModelAsNoLongerNeeded(caddy);
  Streaming.MarkModelAsNoLongerNeeded(WMYGO);
  $.gang_barrel1.markAsNoLongerNeeded();
  $.gang_barrel2.markAsNoLongerNeeded();
  $.gang_barrel3.markAsNoLongerNeeded();
  $.gang_barrel4.markAsNoLongerNeeded();
  $.gang_barrel5.markAsNoLongerNeeded();
  gang_barrel6.markAsNoLongerNeeded();
  gang_barrel7.markAsNoLongerNeeded();
  gang_barrel8.markAsNoLongerNeeded();
  gang_barrel9.markAsNoLongerNeeded();
  gang_barrel10.markAsNoLongerNeeded();
  Char.SetThreatReactionRangeMultiplier(0.0);
  World.SetPedDensityMultiplier(1.0);
  World.SetCarDensityMultiplier(1.0);
  Streaming.UnloadSpecialCharacter(4);
  Streaming.UnloadSpecialCharacter(5);
  Streaming.UnloadSpecialCharacter(6);
  Audio.SetMusicDoesFade(true /* TRUE */);
  Audio.ClearMissionAudio(1);
  Audio.ClearMissionAudio(2);
  $.sgang1.delete();
  $.sgang2.delete();
  $.sgang3.delete();
  $.sgang4.delete();
  $.sgang5.delete();
  $.sgang6.delete();
  $.sgang7.delete();
  $.sgang8.delete();
  $.sgang9.delete();
  $.sgang10.delete();
  $.stunt_double2.delete();
  $.sgang_car4.delete();
  $.sgang_car5.delete();
  other_heli.delete();
  $.player1.shutUp(false /* FALSE */);
  $.baron_blip1.remove();
  $.briefcase_baron2.remove();
  Hud.ClearCounter($.$id.heli_health);
  $.buddy.delete();
  $.scplayer.detachFromCar();
  Mission.Finish();
  Game.SetMaxWantedLevel(5);
}




async function helicopters_health() {


  if (!(Car.IsDead($.buddy_heli))) {
    $.heli_health = $.buddy_heli.getHealth();
    Game.SetMaxWantedLevel(0);
    $.heli_health = $.heli_health / 30;
  }
}




async function zero_ints() {


  TIMERB = 0;
  $.deathkills = 0;
  $.sgang1_is_dead = 0;
  $.sgang2_is_dead = 0;
  $.sgang3_is_dead = 0;
  $.sgang4_is_dead = 0;
  $.sgang5_is_dead = 0;
  $.sgang6_is_dead = 0;
  $.sgang7_is_dead = 0;
  $.sgang8_is_dead = 0;
  $.sgang9_is_dead = 0;
  $.sgang10_is_dead = 0;
  $.sgangs_creation = 0;
  $.damage_timer1 = 0;
  $.audio_is_loading = 0;
  $.audio_has_loaded = 0;
  $.first_two_samples = 0;
  $.second_two_samples = 0;
  $.third_two_samples = 0;
  $.forth_two_samples = 0;
}





async function audio_loaded_cok2() {


  if (Audio.HasMissionAudioLoaded(1) && Audio.HasMissionAudioLoaded(2)) {
    $.audio_has_loaded = 1;
  }
}




async function reset_audio_flags() {


  $.audio_is_loading = 0;
  $.audio_has_loaded = 0;
  TIMERB = 0;
}




async function check_dead_chars() {


  if ($.sgang1_is_dead == 0) {
    if (Char.IsDead($.sgang1)) {
      $.deathkills++;
      $.sgang1_is_dead = 1;
    }
  }


  if ($.sgang2_is_dead == 0) {
    if (Char.IsDead($.sgang2)) {
      $.deathkills++;
      $.sgang2_is_dead = 1;
    }
  }


  if ($.sgang3_is_dead == 0) {
    if (Char.IsDead($.sgang3)) {
      $.deathkills++;
      $.sgang3_is_dead = 1;
    }
  }


  if ($.sgang4_is_dead == 0) {
    if (Char.IsDead($.sgang4)) {
      $.deathkills++;
      $.sgang4_is_dead = 1;
    }
  }


  if ($.sgang5_is_dead == 0) {
    if (Char.IsDead($.sgang5)) {
      $.deathkills++;
      $.sgang5_is_dead = 1;
    }
  }


  if (upped_to_ten_peds == 1) {
    if ($.sgang6_is_dead == 0) {
      if (Char.IsDead($.sgang6)) {
        $.deathkills++;
        $.sgang6_is_dead = 1;
      }
    }
    if ($.sgang7_is_dead == 0) {
      if (Char.IsDead($.sgang7)) {
        $.deathkills++;
        $.sgang7_is_dead = 1;
      }
    }
    if ($.sgang8_is_dead == 0) {
      if (Char.IsDead($.sgang8)) {
        $.deathkills++;
        $.sgang8_is_dead = 1;
      }
    }
    if ($.sgang9_is_dead == 0) {
      if (Char.IsDead($.sgang9)) {
        $.deathkills++;
        $.sgang9_is_dead = 1;
      }
    }
    if ($.sgang10_is_dead == 0) {
      if (Char.IsDead($.sgang10)) {
        $.deathkills++;
        $.sgang10_is_dead = 1;
      }
    }


  }
}

export async function baron2() {
  // Mission start stuff


  await body();  // SCM GOSUB mission_start_baron2


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await onFailed();  // SCM GOSUB mission_baron2_failed
  }


  await cleanup();  // SCM GOSUB mission_cleanup_baron2





  // Variables for mission

  // VAR_INT buddy_heli deathkills heli_health gang_drive stunt_double2 shit_to_shoot sgang_car5
  // VAR_INT sgang1 sgang2 sgang3 sgang4 sgang5 sgang6 sgang7 sgang8 sgang9 sgang10 sgangs_creation briefcase_baron2
  // VAR_INT sgang_car1 sgang_car2 sgang_car3 damage_timer1 CS_plant1 sgang_boss kill_player_now
  // VAR_INT sgang1_is_dead sgang2_is_dead sgang3_is_dead sgang4_is_dead sgang5_is_dead sgang_car4
  // VAR_INT sgang6_is_dead sgang7_is_dead sgang8_is_dead sgang9_is_dead sgang10_is_dead
  // VAR_INT gang_barrel1 gang_barrel2 gang_barrel3 gang_barrel4 gang_barrel5 gang_car_driven
  // LVAR_INT gang_barrel6 gang_barrel7 gang_barrel8 gang_barrel9 gang_barrel10 upped_to_ten_peds
  // LVAR_INT other_heli other_heli2 heli_pilot1 heli_pilot2 created_other_heli created_other_heli2
  // LVAR_INT taking_damage_samp1 taking_damage_samp2 nearly_at_site_samp leaving_heli_samp

  // ***************************************Mission Start***************************************


}
