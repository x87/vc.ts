// Generated from main/lawyer3.sc

import { $ } from "../vars.mts";

// *******************************************************************************************
// *******************************************************************************************
// *************************************Lawyer mission 3**************************************
// ****************************************JURY FURY******************************************
// *******************************************************************************************
// *******************************************************************************************
// *******************************************************************************************

async function body() {


  Stat.RegisterMissionGiven();
  ONMISSION = 1;
  // SCRIPT_NAME LAWYER3


  await asyncWait(0);


  Text.LoadMissionText("LAWYER3");
  Shortcut.SetDropoffPointForMission(110.6, -824.2, 9.6, 327.9);


  jury_bloke1_run_to_car = 0;
  set_chars_chatting = 0;
  talk_guy_ran_away = 0;
  $.jury_car_is_dead = 0;
  $.random_samples = 0;
  $.talk_guy_punched_juror_flee = 0;
  $.scream_sound_for_juror1 = 0;
  played_smash_print = 0;
  hammer_blokes_hammer_created = 0;
  unfreeze_car = 0;
  $.player_shooting_in_area = 0;
  $.smash_up_car_help_played = 0;


  Text.ClearHelp();


  Audio.LoadMissionAudio(1, "mono15" as any);


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


  Cutscene.Load("law_3");
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


  while ($.cs_time < 3008) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW3_A", 10000, 1); // Mission brief


  while ($.cs_time < 9424) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW3_B", 10000, 1); // Mission brief


  while ($.cs_time < 13402) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW3_C", 10000, 1); // Mission brief


  while ($.cs_time < 15408) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW3_D", 10000, 1); // Mission brief


  while ($.cs_time < 18308) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW3_E", 10000, 1); // Mission brief


  while ($.cs_time < 22306) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW3_F", 10000, 1); // Mission brief


  while ($.cs_time < 24656) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW3_G", 10000, 1); // Mission brief


  while ($.cs_time < 26240) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW3_H", 10000, 1); // Mission brief


  while ($.cs_time < 30832) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW3_I", 10000, 1); // Mission brief


  while ($.cs_time < 33842) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW3_J", 10000, 1); // Mission brief


  while ($.cs_time < 38624) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW3_K", 10000, 1); // Mission brief


  while ($.cs_time < 40752) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW3_L", 10000, 1); // Mission brief


  while ($.cs_time < 43488) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW3_M", 10000, 1); // Mission brief


  while ($.cs_time < 49133) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("LAW3_N", 10000, 1); // Mission brief


  while ($.cs_time < 51776) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  while ($.cs_time < 52896) {
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


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ02);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ03);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ04);


  Streaming.RequestModel(HMORI); //Suiy guy
  Streaming.RequestModel(BMYBU);
  Streaming.RequestModel(Admiral);
  Streaming.RequestModel(BFYBE); //sun bathe ped
  Streaming.RequestModel(spand);
  Streaming.RequestModel(glendale);
  Streaming.RequestModel(HMYAP); //Dock worker
  Streaming.RequestModel(hammer);
  Streaming.RequestModel(sentinel);
  Streaming.RequestModel(WMOGO);
  Streaming.LoadSpecialCharacter(4, "spandxa");


  $.beaten_to_a_bloody_mess1 = 0;
  $.beaten_to_a_bloody_mess2 = 0;
  jury_bloke1_first_hit = 0;
  jury_bloke1_second_hit = 0;
  jury_bloke1_third_hit = 0;
  $.wacked_by_weapon1 = 0;
  $.wacked_by_weapon2 = 0;
  $.all_been_given_a_cunting = 0;


  while (!(Streaming.HasModelLoaded(HMORI)) || !(Streaming.HasModelLoaded(Admiral)) || !(Streaming.HasModelLoaded(BFYBE)) || !(Streaming.HasModelLoaded(spand)) || !(Streaming.HasModelLoaded(glendale)) || !(Streaming.HasModelLoaded(BMYBU))) {
    await asyncWait(0);


  }


  while (!(Streaming.HasModelLoaded(HMYAP)) || !(Streaming.HasModelLoaded(sentinel)) || !(Streaming.HasModelLoaded(WMOGO))) {
    await asyncWait(0);


  }

  // START OF MISSION


  Streaming.SetAreaVisible(VIS_MAIN_MAP);
  Streaming.LoadScene(117.1, -825.6, 9.8);


  Audio.LoadMissionAudio(1, "LAW3_24" as any);


  await asyncWait(0);


  Hud.SwitchWidescreen(true /* ON */);
  $.player1.setControl(false /* OFF */);
  Camera.SetInFrontOfPlayer();


  Camera.DoFade(1000, 1 /* FADE_IN */);


  Camera.SetFixedPosition(110.714, -816.945, 14.589, 0.0, 0.0, 0.0); //crossing road bloke
  Camera.PointAtPoint(111.238, -817.658, 14.123, 2 /* JUMP_CUT */);


  World.ClearArea(95.8, -843.2, 10.0, 20.0, true /* TRUE */);


  hit_n_run_car = Car.Create(glendale, 95.8, -843.2, 10.0);
  hit_n_run_bloke = Char.CreateInsideCar(hit_n_run_car, 4 /* PEDTYPE_CIVMALE */, WMOGO);


  hit_n_run_car.setHeading(316.0);


  World.ClearArea(113.7, -825.0, 9.7, 10.0, true /* TRUE */);
  hammer_bloke = Char.Create(4 /* PEDTYPE_CIVMALE */, HMYAP, 113.7, -825.0, 9.7); //Death only awaits me
  hammer_bloke.setHeading(67.0);


  hammer_bloke.clearThreatSearch();
  //SET_CHAR_PERSONALITY hammer_bloke PEDSTAT_COWARD

  hammer_bloke.setWaitState(3 /* WAITSTATE_CROSS_ROAD_LOOK */, 3000);
  //GIVE_WEAPON_TO_CHAR hammer_bloke WEAPONTYPE_HAMMER 0


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }



  await asyncWait(1000);


  if (!(Char.IsDead(hammer_bloke))) {
    hammer_bloke.setObjGotoCoordOnFoot(104.0, -819.8);
  }


  if (!(Car.IsDead(hit_n_run_car))) {
    hit_n_run_car.setCruiseSpeed(40.0);
    hit_n_run_car.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
    hit_n_run_car.setForwardSpeed(20.0);
    const _res324 = hammer_bloke.getCoordinates();
$.talk_guyx = _res324.x;
$.talk_guyy = _res324.y;
$.talk_guyz = _res324.z;
    hit_n_run_car.gotoCoordinatesAccurate($.talk_guyx, $.talk_guyy, $.talk_guyz);
  }


  TIMERA = 0;


  while (!(TIMERA > 3000)) {
    await asyncWait(0);
    if (Char.IsDead(hammer_bloke)) {
      if (hammer_blokes_hammer_created == 0) {
        const _res325 = World.GetDeadCharPickupCoords(hammer_bloke);
$.hammer_blokex = _res325.x;
$.hammer_blokey = _res325.y;
$.hammer_blokez = _res325.z;
        $.hammer_blokez = $.hammer_blokez + 0.5;
        hammer_blokes_hammer = Pickup.Create(hammer, 3 /* PICKUP_ONCE */, $.hammer_blokex, $.hammer_blokey, $.hammer_blokez);
        hammer_blokes_hammer_created = 1;
      }
    }


  }


  if (!(Char.IsDead(hit_n_run_bloke))) {
    if (!(Car.IsDead(hit_n_run_car))) {
      hit_n_run_bloke.setObjLeaveCar(hit_n_run_car);
      hit_n_run_bloke.setPersonality(PEDSTAT_COWARD);
    }
  }


  Camera.SetFixedPosition(110.834, -827.258, 12.204, 0.0, 0.0, 0.0); //Look at hammer
  Camera.PointAtPoint(111.632, -826.843, 11.761, 2 /* JUMP_CUT */);
  Text.PrintNow("LAW3_24", 3000, 2); //Hammer looks useful


  TIMERA = 0;


  while (!(TIMERA > 3000)) {
    await asyncWait(0);
    if (!(Char.IsDead(hit_n_run_bloke))) {
      if (!(Car.IsDead(hit_n_run_car))) {
        if (!(hit_n_run_bloke.isInCar(hit_n_run_car))) {
          hit_n_run_bloke.setObjRunToCoord(137.6, -786.9);
        }
      }
    }


  }


  if (Audio.HasMissionAudioLoaded(1)) {
    Audio.PlayMissionAudio(1);
  }


  $.hardware_blip = Blip.AddSpriteForCoord($.hard1X, $.hard1Y, $.hard1Z, RADAR_SPRITE_HARDWARE);


  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  Camera.RestoreJumpcut();
  Camera.SetInFrontOfPlayer();


  while (!(Streaming.HasSpecialCharacterLoaded(4))) {
    await asyncWait(0);


  }


  Streaming.MarkModelAsNoLongerNeeded(glendale);
  Streaming.MarkModelAsNoLongerNeeded(WMOGO);
  Streaming.MarkModelAsNoLongerNeeded(HMYAP);
  hit_n_run_bloke.markAsNoLongerNeeded();


  World.ClearArea(191.4, -1026.7, 9.4, 2.0, true /* TRUE */);
  $.jury_bloke1 = Char.Create(4 /* PEDTYPE_CIVMALE */, HMORI, 191.4, -1026.7, 9.4);
  $.jury_bloke1.setPersonality(PEDSTAT_COWARD);
  $.jury_bloke1.setOnlyDamagedByPlayer(true /* TRUE */);
  $.jury_bloke1_blip = Blip.AddForChar($.jury_bloke1);
  $.jury_bloke1.setHealth(300);
  $.jury_bloke1.setHeading(202.0);
  $.jury_bloke1.clearThreatSearch();
  $.jury_bloke1.setRunning(true /* TRUE */);


  World.ClearArea(189.3, -1033.0, 10.2, 4.0, true /* TRUE */);
  $.jury_car = Car.Create(Admiral, 189.3, -1033.0, 9.4);
  $.jury_car.setHeading(261.0);
  $.jury_car.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
  $.jury_car.setHeavy(true /* TRUE */);
  $.jury_car.setCanBurstTires(false /* FALSE */);


  $.talk_guy = Char.Create(4 /* PEDTYPE_CIVMALE */, BFYBE, 191.6, -1028.0, 9.4); //chatting bloke
  $.talk_guy.setPersonality(PEDSTAT_COWARD);
  $.talk_guy.clearThreatSearch();


  World.ClearArea(536.4, 217.4, 13.6, 4.0, true /* TRUE */);
  $.jury_car2 = Car.Create(sentinel, 536.4, 217.4, 13.6);
  $.jury_car2.setHeading(270.0);
  $.jury_car2.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
  $.jury_bloke2_blip = Blip.AddForCar($.jury_car2);
  $.jury_car2.setCruiseSpeed(0.0);
  $.jury_car2.setHeavy(true /* TRUE */);


  Text.PrintNow("LAW3_7", 15000, 2); //BEAT UP THE JURY


  await asyncWait(4000);


  if (!(Car.IsDead($.jury_car))) {
    $.jury_car.freezePosition(true /* TRUE */);
  }
  if (!(Car.IsDead($.jury_car2))) {
    $.jury_car2.freezePosition(true /* TRUE */);
  }
  if (!(Char.IsDead($.jury_bloke1))) {
    $.jury_bloke1.freezePosition(true /* TRUE */);
  }
  if (!(Char.IsDead($.talk_guy))) {
    $.talk_guy.freezePosition(true /* TRUE */);
  }


  Text.PrintHelp("HELP23"); //Go to hardware blip
  Hud.FlashObject(8 /* HUD_FLASH_RADAR */);


  await asyncWait(2000);


  Hud.FlashObject(-1);


  TIMERB = 0;


  $.random_samples = Math.RandomIntInRange(0, 6);


  await load_random_samples();  // SCM GOSUB load_random_samples


  TIMERA = 0;



  while (!($.all_been_given_a_cunting == 2)) {
    await asyncWait(0);
    if ($.beaten_to_a_bloody_mess1 == 0) {
      if (Char.IsDead($.jury_bloke1)) {
        Text.PrintNow("LAW3_8", 5000, 2); //YOU KILLED HIM!
        // SCM GOTO → mission_lawyer3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_lawyer3_failed"); // fallback: would break linear control flow
      }
      else {
        if ($.jury_bloke1.isLeavingVehicleToDie()) {
          Text.PrintNow("LAW3_8", 5000, 2); //YOU KILLED HIM!
          // SCM GOTO → mission_lawyer3_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_lawyer3_failed"); // fallback: would break linear control flow
        }
      }
    }
    if (!(Car.IsDead($.jury_car))) {
      if (unfreeze_car == 0) {
        if ($.player1.locateAnyMeansCar2D($.jury_car, 30.0, 30.0, false /* FALSE */)) {
          if (!(Car.IsDead($.jury_car))) {
            $.jury_car.freezePosition(false /* FALSE */);
            if (!(Char.IsDead($.jury_bloke1))) {
              $.jury_bloke1.freezePosition(false /* FALSE */);
            }
            if (!(Char.IsDead($.talk_guy))) {
              $.talk_guy.freezePosition(false /* FALSE */);
            }
          }
          unfreeze_car = 1;
        }
      }
      if (!(Char.IsDead($.jury_bloke1))) {
        if (!(Car.IsDead($.jury_car))) {
          if ($.jury_bloke1.isInCar($.jury_car)) {
            if (!($.jury_car.isHealthGreater(700))) {
              $.jury_bloke1.setObjLeaveCar($.jury_car);
              $.jury_car.lockDoors(1 /* CARLOCK_UNLOCKED */);
              jury_bloke1_run_to_car = 1;
              $.jury_car_is_dead = 1;
            }
            if (jury_bloke1_run_to_car == 0 && $.beaten_to_a_bloody_mess1 == 0) {
              if ($.player1.isInAnyCar()) {
                $.any_vehicle_law3 = $.player1.storeCarIsIn();
                if (!(Car.IsDead($.any_vehicle_law3))) {
                  if ($.player1.locateInCar3D(197.1, -1033.8, 10.2, 8.0, 6.0, 4.0, false /* FALSE */)) {
                    $.any_vehicle_law3.setCoordinates(201.9, -1020.8, 9.4);
                    $.any_vehicle_law3.setHeading(180.0);
                  }
                }
              }
              if (!(Car.IsDead($.jury_car))) {
                $.jury_car.setHeavy(false /* FALSE */);
              }
              $.jury_car.lockDoors(7 /* CARLOCK_LOCKED_BUT_CAN_BE_DAMAGED */);
              $.player1.setControl(false /* OFF */);
              Hud.SwitchWidescreen(true /* ON */);
              $.jury_car.setCruiseSpeed(0.0);
              Camera.SetFixedPosition(183.803, -1029.408, 11.956, 0.0, 0.0, 0.0); //CAR CRASH
              Camera.PointAtPoint(184.615, -1029.963, 11.780, 2 /* JUMP_CUT */);
              World.ClearArea(189.3, -1033.0, 10.2, 10.0, true /* TRUE */);
              World.ClearArea(208.8, -1008.1, 9.5, 10.0, true /* TRUE */);
              $.jury_car_smash = Car.Create(spand, 208.8, -1008.1, 9.5);
              spand_driver = Char.CreateInsideCar($.jury_car_smash, 4 /* PEDTYPE_CIVMALE */, SPECIAL04);
              spand_driver.setPersonality(14 /* PEDSTAT_GEEK_GUY */);
              $.jury_car_smash.setHeading(165.0);
              $.jury_car_smash.setCruiseSpeed(40.0);
              $.jury_car_smash.setForwardSpeed(19.0);
              $.jury_car_smash.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
              $.jury_car_smash.gotoCoordinates(203.5, -1037.7, 10.1);
              $.jury_car_smash.setHeavy(true /* TRUE */);
              World.ClearArea(202.8, -1035.7, 10.1, 10.0, true /* TRUE */);
              $.jury_car.gotoCoordinates(202.8, -1035.7, 10.1);
              $.jury_car.setCruiseSpeed(50.0);
              $.jury_car.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
              TIMERB = 0;
              while (!(TIMERB > 1200)) {
                await asyncWait(0);
                if (Char.IsDead($.jury_bloke1)) {
                  Text.PrintNow("LAW3_8", 5000, 2); //YOU KILLED HIM!
                  // SCM GOTO → mission_lawyer3_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_lawyer3_failed"); // fallback: would break linear control flow
                }
                else {
                  if ($.jury_bloke1.isLeavingVehicleToDie()) {
                    Text.PrintNow("LAW3_8", 5000, 2); //YOU KILLED HIM!
                    // SCM GOTO → mission_lawyer3_failed (not lowered; manual jump required)
                    throw new Error("unresolved GOTO mission_lawyer3_failed"); // fallback: would break linear control flow
                  }
                }


              }
              if (!(Car.IsDead($.jury_car))) {
                $.jury_car.setCanBurstTires(true /* TRUE */);
                $.jury_car.burstTire(FRONT_LEFT_WHEEL);
                $.jury_car.popBootUsingPhysics();
                if (!(Car.IsDead($.jury_car_smash))) {
                  $.jury_car_smash.popBootUsingPhysics();
                }
                $.jury_car.setIdle();
                $.jury_car.setCruiseSpeed(0.0);
                if (!(Car.IsDead($.jury_car_smash))) {
                  $.jury_car_smash.setCruiseSpeed(0.0);
                }
              }
              TIMERB = 0;
              while (!(TIMERB > 250)) {
                await asyncWait(0);
                if (Char.IsDead($.jury_bloke1)) {
                  Text.PrintNow("LAW3_8", 5000, 2); //YOU KILLED HIM!
                  // SCM GOTO → mission_lawyer3_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_lawyer3_failed"); // fallback: would break linear control flow
                }
                else {
                  if ($.jury_bloke1.isLeavingVehicleToDie()) {
                    Text.PrintNow("LAW3_8", 5000, 2); //YOU KILLED HIM!
                    // SCM GOTO → mission_lawyer3_failed (not lowered; manual jump required)
                    throw new Error("unresolved GOTO mission_lawyer3_failed"); // fallback: would break linear control flow
                  }
                }


              }
              if (!(Car.IsDead($.jury_car_smash))) {
                const _res326 = $.jury_car_smash.getOffsetInWorldCoords(0.0, -3.0, 0.0);
$.law_world_x = _res326.x;
$.law_world_y = _res326.y;
$.law_world_z = _res326.z;
                hammer1 = Pickup.Create(hammer, 3 /* PICKUP_ONCE */, $.law_world_x, $.law_world_y, $.law_world_z);
              }
              while (!(TIMERB > 500)) {
                await asyncWait(0);
                if (Char.IsDead($.jury_bloke1)) {
                  Text.PrintNow("LAW3_8", 5000, 2); //YOU KILLED HIM!
                  // SCM GOTO → mission_lawyer3_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_lawyer3_failed"); // fallback: would break linear control flow
                }
                else {
                  if ($.jury_bloke1.isLeavingVehicleToDie()) {
                    Text.PrintNow("LAW3_8", 5000, 2); //YOU KILLED HIM!
                    // SCM GOTO → mission_lawyer3_failed (not lowered; manual jump required)
                    throw new Error("unresolved GOTO mission_lawyer3_failed"); // fallback: would break linear control flow
                  }
                }


              }
              if (!(Car.IsDead($.jury_car_smash))) {
                const _res327 = $.jury_car_smash.getOffsetInWorldCoords(0.0, -3.0, 0.0);
$.law_world_x = _res327.x;
$.law_world_y = _res327.y;
$.law_world_z = _res327.z;
                hammer2 = Pickup.Create(hammer, 3 /* PICKUP_ONCE */, $.law_world_x, $.law_world_y, $.law_world_z);
              }
              TIMERB = 0;
              while (!(TIMERB > 1500)) {
                await asyncWait(0);
                if (Char.IsDead($.jury_bloke1)) {
                  Text.PrintNow("LAW3_8", 5000, 2); //YOU KILLED HIM!
                  // SCM GOTO → mission_lawyer3_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_lawyer3_failed"); // fallback: would break linear control flow
                }
                else {
                  if ($.jury_bloke1.isLeavingVehicleToDie()) {
                    Text.PrintNow("LAW3_8", 5000, 2); //YOU KILLED HIM!
                    // SCM GOTO → mission_lawyer3_failed (not lowered; manual jump required)
                    throw new Error("unresolved GOTO mission_lawyer3_failed"); // fallback: would break linear control flow
                  }
                }


              }
              Hud.SwitchWidescreen(false /* OFF */);
              Camera.SetFixedPosition(206.657, -1030.398, 13.139, 0.0, 0.0, 0.0); //CAR CRASH
              Camera.PointAtPoint(206.057, -1031.136, 12.829, 2 /* JUMP_CUT */);
              if ($.smash_up_car_help_played == 0) {
                Text.PrintHelp("HELP40"); //You can smash cars up by using the hammer or a similar weapon
                TIMERA = 0;
                $.smash_up_car_help_played = 1;
              }
              else {
                Text.PrintNow("LAW3_9", 4000, 2); //Smash his car up!
              }
              TIMERB = 0;
              while (!(TIMERB > 4000)) {
                await asyncWait(0);
                if (Char.IsDead($.jury_bloke1)) {
                  Text.PrintNow("LAW3_8", 5000, 2); //YOU KILLED HIM!
                  // SCM GOTO → mission_lawyer3_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_lawyer3_failed"); // fallback: would break linear control flow
                }
                else {
                  if ($.jury_bloke1.isLeavingVehicleToDie()) {
                    Text.PrintNow("LAW3_8", 5000, 2); //YOU KILLED HIM!
                    // SCM GOTO → mission_lawyer3_failed (not lowered; manual jump required)
                    throw new Error("unresolved GOTO mission_lawyer3_failed"); // fallback: would break linear control flow
                  }
                }


                if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
                  while (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
                    await asyncWait(0);
                    if (TIMERB > 4000) {
                      // SCM GOTO → skip_to_shot_of_ammu (not lowered; manual jump required)
                      throw new Error("unresolved GOTO skip_to_shot_of_ammu"); // fallback: would break linear control flow
                    }
                    if (Char.IsDead($.jury_bloke1)) {
                      Text.PrintNow("LAW3_8", 5000, 2); //YOU KILLED HIM!
                      // SCM GOTO → mission_lawyer3_failed (not lowered; manual jump required)
                      throw new Error("unresolved GOTO mission_lawyer3_failed"); // fallback: would break linear control flow
                    }
                    else {
                      if ($.jury_bloke1.isLeavingVehicleToDie()) {
                        Text.PrintNow("LAW3_8", 5000, 2); //YOU KILLED HIM!
                        // SCM GOTO → mission_lawyer3_failed (not lowered; manual jump required)
                        throw new Error("unresolved GOTO mission_lawyer3_failed"); // fallback: would break linear control flow
                      }
                    }


                  }
                  // SCM GOTO → skip_to_shot_of_ammu (not lowered; manual jump required)
                  throw new Error("unresolved GOTO skip_to_shot_of_ammu"); // fallback: would break linear control flow
                }


              }
              // SCM label skip_to_shot_of_ammu
              if (!(Char.IsDead($.jury_bloke1))) {
                $.jury_bloke1.setHealth(300);
              }
              if (!(Car.IsDead($.jury_car_smash))) {
                $.jury_car_smash.setHeavy(false /* FALSE */);
              }
              $.player1.setControl(true /* ON */);
              Hud.SwitchWidescreen(false /* OFF */);
              Camera.RestoreJumpcut();
              Text.PrintNow("LAW3_9", 6000, 2); //Smash his car up!
              jury_bloke1_run_to_car = 1;
            }
          }
        }
      }


    }
    if (Car.IsDead($.jury_car)) {
      await cut_scene_juror1();  // SCM GOSUB cut_scene_juror1
    }
    else {
      if (!(Car.IsDead($.jury_car))) {
        if (!(Char.IsDead($.jury_bloke1))) {
          if ($.player_shooting_in_area == 0) {
            if ($.player1.locateAnyMeansCar2D($.jury_car, 20.0, 20.0, false /* FALSE */)) {
              if ($.player1.isShooting() || !($.jury_bloke1.isHealthGreater(299)) || $.player1.isTargetingChar($.jury_bloke1)) {
                if (!(Car.IsDead($.jury_car))) {
                  if (!(Char.IsDead($.jury_bloke1))) {
                    $.jury_bloke1.setObjEnterCarAsDriver($.jury_car);
                    $.jury_bloke1.setOnlyDamagedByPlayer(true /* TRUE */);
                    $.jury_bloke1.setHealth(300);
                  }
                  if (!(Char.IsDead($.talk_guy))) {
                    //SET_CHAR_OBJ_FLEE_PLAYER_ON_FOOT_ALWAYS talk_guy player1
                    $.talk_guy.setObjRunToCoord(227.2, -1040.8);
                    talk_guy_ran_away = 1;
                  }
                }
                $.player_shooting_in_area = 1;
              }
            }
          }
        }
        if (!($.jury_car.locate3D(189.3, -1033.0, 9.4, 2.0, 2.0, 2.0, false /* FALSE */))) {
          if (!($.jury_car.isHealthGreater(600))) {
            if (!(Char.IsDead($.jury_bloke1))) {
              jury_bloke1_run_to_car = 1;
              $.jury_car_is_dead = 1;
            }
          }
        }
        if ($.beaten_to_a_bloody_mess1 == 0) {
          if (!(Car.IsDead($.jury_car))) {
            if (!(Char.IsDead($.jury_bloke1))) {
              if ($.jury_bloke1.isInCar($.jury_car)) {
                if (!($.jury_car.isHealthGreater(950))) {
                  if ($.scream_sound_for_juror1 == 0) {
                    Audio.LoadMissionAudio(2, "LAW3_11" as any);
                    while (!(Audio.HasMissionAudioLoaded(2))) {
                      await asyncWait(0);
                      if (Car.IsDead($.jury_car)) {
                        await cut_scene_juror1();  // SCM GOSUB cut_scene_juror1
                      }
                      if (Char.IsDead($.jury_bloke1)) {
                        Text.PrintNow("LAW3_8", 5000, 2); //YOU KILLED HIM!
                        // SCM GOTO → mission_lawyer3_failed (not lowered; manual jump required)
                        throw new Error("unresolved GOTO mission_lawyer3_failed"); // fallback: would break linear control flow
                      }
                      else {
                        if ($.jury_bloke1.isLeavingVehicleToDie()) {
                          Text.PrintNow("LAW3_8", 5000, 2); //YOU KILLED HIM!
                          // SCM GOTO → mission_lawyer3_failed (not lowered; manual jump required)
                          throw new Error("unresolved GOTO mission_lawyer3_failed"); // fallback: would break linear control flow
                        }
                      }


                    }
                    Audio.PlayMissionAudio(2);
                    $.scream_sound_for_juror1 = 1;
                  }
                }
              }
            }
          }
          if (!(Car.IsDead($.jury_car))) {
            if (!(Char.IsDead($.jury_bloke1))) {
              if ($.jury_bloke1.isInCar($.jury_car)) {
                if (!($.jury_car.isHealthGreater(850))) {
                  if ($.scream_sound_for_juror1 == 1) {
                    Audio.LoadMissionAudio(2, "LAW3_13" as any);
                    while (!(Audio.HasMissionAudioLoaded(2))) {
                      await asyncWait(0);
                      if (Car.IsDead($.jury_car)) {
                        await cut_scene_juror1();  // SCM GOSUB cut_scene_juror1
                      }
                      if (Char.IsDead($.jury_bloke1)) {
                        Text.PrintNow("LAW3_8", 5000, 2); //YOU KILLED HIM!
                        // SCM GOTO → mission_lawyer3_failed (not lowered; manual jump required)
                        throw new Error("unresolved GOTO mission_lawyer3_failed"); // fallback: would break linear control flow
                      }
                      else {
                        if ($.jury_bloke1.isLeavingVehicleToDie()) {
                          Text.PrintNow("LAW3_8", 5000, 2); //YOU KILLED HIM!
                          // SCM GOTO → mission_lawyer3_failed (not lowered; manual jump required)
                          throw new Error("unresolved GOTO mission_lawyer3_failed"); // fallback: would break linear control flow
                        }
                      }


                    }
                    Audio.PlayMissionAudio(2);
                    $.scream_sound_for_juror1 = 2;
                  }
                }
              }
            }
          }
          if (!(Car.IsDead($.jury_car))) {
            if (!(Char.IsDead($.jury_bloke1))) {
              if ($.jury_bloke1.isInCar($.jury_car)) {
                if (!($.jury_car.isHealthGreater(750))) {
                  if ($.scream_sound_for_juror1 == 2) {
                    Audio.LoadMissionAudio(2, "LAW3_12" as any);
                    while (!(Audio.HasMissionAudioLoaded(2))) {
                      await asyncWait(0);
                      if (Car.IsDead($.jury_car)) {
                        await cut_scene_juror1();  // SCM GOSUB cut_scene_juror1
                      }
                      if (Char.IsDead($.jury_bloke1)) {
                        Text.PrintNow("LAW3_8", 5000, 2); //YOU KILLED HIM!
                        // SCM GOTO → mission_lawyer3_failed (not lowered; manual jump required)
                        throw new Error("unresolved GOTO mission_lawyer3_failed"); // fallback: would break linear control flow
                      }
                      else {
                        if ($.jury_bloke1.isLeavingVehicleToDie()) {
                          Text.PrintNow("LAW3_8", 5000, 2); //YOU KILLED HIM!
                          // SCM GOTO → mission_lawyer3_failed (not lowered; manual jump required)
                          throw new Error("unresolved GOTO mission_lawyer3_failed"); // fallback: would break linear control flow
                        }
                      }


                    }
                    Audio.PlayMissionAudio(2);
                    $.scream_sound_for_juror1 = 3;
                  }
                }
              }
            }
          }


        }


      }


    }
    if (!(Char.IsDead($.talk_guy))) {
      if (talk_guy_ran_away == 0) {
        if (!($.talk_guy.isHealthGreater(99)) || jury_bloke1_first_hit == 1) {
          $.talk_guy.setObjRunToCoord(227.2, -1040.8);
          if (!(Char.IsDead($.jury_bloke1))) {
            $.jury_bloke1.setOnlyDamagedByPlayer(true /* TRUE */);
            $.jury_bloke1.setHealth(300);
          }
          talk_guy_ran_away = 1;
        }
      }
    }
    else {
      talk_guy_ran_away = 1;
    }


    if (!(Char.IsDead($.jury_bloke1))) {
      if (!(Char.IsDead($.talk_guy))) {
        if (set_chars_chatting == 0) {
          if ($.player1.locateAnyMeansChar2D($.jury_bloke1, 50.0, 50.0, false /* FALSE */)) {
            $.jury_bloke1.turnToFaceChar($.talk_guy);
            $.talk_guy.turnToFaceChar($.jury_bloke1);
            Game.SetCharsChatting($.jury_bloke1, $.talk_guy, 999999999);
            Game.SetCharsChatting($.talk_guy, $.jury_bloke1, 999999999);
            set_chars_chatting = 1;
          }
        }
      }
      if (talk_guy_ran_away == 1) {
        if (jury_bloke1_first_hit == 0) {
          if ($.talk_guy_punched_juror_flee == 0) {
            $.jury_bloke1.clearLastWeaponDamage();
            if (!(Car.IsDead($.jury_car))) {
              $.jury_bloke1.setObjEnterCarAsDriver($.jury_car);
            }
            $.talk_guy_punched_juror_flee = 1;
          }
        }
      }
      if ($.jury_bloke1.hasBeenDamagedByWeapon(WEAPONTYPE_ANYMELEE) || $.jury_bloke1.hasBeenDamagedByWeapon(17 /* WEAPONTYPE_RUNOVERBYCAR */) || $.jury_bloke1.hasBeenDamagedByWeapon(16 /* WEAPONTYPE_RAMMEDBYCAR */)) {
        if (jury_bloke1_first_hit == 0) {
          $.wacked_by_weapon1++;
          $.jury_bloke1.clearLastWeaponDamage();
          if ($.jury_car_is_dead == 0) {
            if (!(Car.IsDead($.jury_car))) {
              $.jury_bloke1.setObjEnterCarAsDriver($.jury_car);
            }
          }
          $.jury_bloke1.setHealth(300);
          jury_bloke1_first_hit = 1;
        }
      }
      if ($.jury_bloke1.hasBeenDamagedByWeapon(WEAPONTYPE_ANYMELEE) || $.jury_bloke1.hasBeenDamagedByWeapon(17 /* WEAPONTYPE_RUNOVERBYCAR */) || $.jury_bloke1.hasBeenDamagedByWeapon(16 /* WEAPONTYPE_RAMMEDBYCAR */)) {
        if (jury_bloke1_second_hit == 0) {
          $.wacked_by_weapon1++;
          $.jury_bloke1.clearLastWeaponDamage();
          if ($.jury_car_is_dead == 0) {
            if (!(Car.IsDead($.jury_car))) {
              $.jury_bloke1.setObjEnterCarAsDriver($.jury_car);
            }
          }
          $.jury_bloke1.setHealth(300);
          jury_bloke1_second_hit = 1;
        }
      }
      if ($.jury_bloke1.hasBeenDamagedByWeapon(WEAPONTYPE_ANYMELEE) || $.jury_bloke1.hasBeenDamagedByWeapon(17 /* WEAPONTYPE_RUNOVERBYCAR */) || $.jury_bloke1.hasBeenDamagedByWeapon(16 /* WEAPONTYPE_RAMMEDBYCAR */)) {
        if (jury_bloke1_third_hit == 0) {
          $.wacked_by_weapon1++;
          $.jury_bloke1.clearLastWeaponDamage();
          if ($.jury_car_is_dead == 0) {
            if (!(Car.IsDead($.jury_car))) {
              $.jury_bloke1.setObjEnterCarAsDriver($.jury_car);
            }
          }
          $.jury_bloke1.setHealth(300);
          jury_bloke1_third_hit = 1;
        }
      }
      if ($.wacked_by_weapon1 == 3) {
        await cut_scene_juror1();  // SCM GOSUB cut_scene_juror1
      }
      if (jury_bloke1_run_to_car == 1) {
        if (!(Char.IsDead($.jury_bloke1))) {
          if (!(Car.IsDead($.jury_car))) {
            if (!($.jury_bloke1.isInCar($.jury_car))) {
              await cut_scene_juror1();  // SCM GOSUB cut_scene_juror1
            }
          }
        }
      }


    }
    if ($.smash_up_car_help_played == 1) {
      if (TIMERA > 5000) {
        Text.PrintHelp("HELP53"); //Press ~h~L2~w~ or ~h~R2~w~ to cycle through your available weapons.
        $.smash_up_car_help_played = 2;
      }
    }


    // Idle car bloke***************************************************
    if (Car.IsDead($.jury_car2)) {
      // SCM GOTO → juror2_cut_scene (not lowered; manual jump required)
      throw new Error("unresolved GOTO juror2_cut_scene"); // fallback: would break linear control flow
    }
    if (!(Car.IsDead($.jury_car2))) {
      if (played_smash_print == 0) {
        if ($.player1.locateAnyMeansCar2D($.jury_car2, 20.0, 20.0, false /* FALSE */)) {
          Text.PrintNow("LAW3_20", 15000, 2); //~g~Smash up the Jurors car!
          if (!(Car.IsDead($.jury_car2))) {
            $.jury_car2.freezePosition(false /* FALSE */);
          }
          if ($.smash_up_car_help_played == 0) {
            Text.PrintHelp("HELP40"); //You can smash cars up by using the hammer or a similar weapon
            TIMERA = 0;
            $.smash_up_car_help_played = 1;
          }
          played_smash_print = 1;
        }
      }
      if (!($.jury_car2.isHealthGreater(600))) {
        // SCM label juror2_cut_scene
        if ($.beaten_to_a_bloody_mess2 == 0) {
          Camera.DoFade(500, 0 /* FADE_OUT */);
          //SET_MUSIC_DOES_FADE FALSE
          Audio.LoadMissionAudio(2, "LAW3_20" as any);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          Streaming.LoadScene(551.8, 194.5, 13.6);
          $.player1.setControl(false /* OFF */);
          Hud.SwitchWidescreen(true /* ON */);
          if (!(Car.IsDead($.jury_car2))) {
            $.jury_car2.lockDoors(1 /* CARLOCK_UNLOCKED */);
          }
          World.ClearArea(542.0, 207.8, 13.8, 1.0, true /* TRUE */);
          if (!($.player1.isInAnyCar())) {
            $.player1.setCoordinates(542.0, 207.8, 13.8);
          }
          else {
            $.player1.warpFromCarToCoord(542.0, 207.8, 13.8);
          }
          if (!(Car.IsDead($.jury_car2))) {
            if ($.jury_car2.locate2D(551.8, 194.5, 4.0, 4.0, false /* FALSE */)) {
              $.jury_car2.setCoordinates(541.7, 196.0, 13.8);
            }
          }
          $.player1.setHeading(225.0);
          World.ClearArea(551.8, 194.5, 13.8, 1.0, true /* TRUE */);
          $.jury_bloke2 = Char.Create(4 /* PEDTYPE_CIVMALE */, BMYBU, 551.8, 194.5, 13.6);
          $.jury_bloke2.setHeading(35.0);
          $.jury_bloke2_blip.remove();
          Camera.SetFixedPosition(553.126, 190.922, 15.789, 0.0, 0.0, 0.0); //Jury Bloke
          Camera.PointAtPoint(552.636, 191.782, 15.650, 2 /* JUMP_CUT */);
          $.scplayer.setObjGotoCoordOnFoot(551.8, 194.5);
          while (!(Audio.HasMissionAudioLoaded(2))) {
            await asyncWait(0);


          }
          Camera.DoFade(500, 1 /* FADE_IN */);
          //SET_MUSIC_DOES_FADE TRUE

          Audio.PlayMissionAudio(2);
          Text.PrintNow("LAW3_21", 3000, 2); //I can't believe this is happening!
          await asyncWait(1500);
          if (Audio.HasMissionAudioLoaded(1)) {
            Audio.PlayMissionAudio(1);
          }
          Audio.LoadMissionAudio(2, "LAW3_23" as any);
          if ($.random_samples == 0) {
            Text.PrintNow("LAW3_1", 3000, 1);
          }
          if ($.random_samples == 1) {
            Text.PrintNow("LAW3_2", 3000, 1);
          }
          if ($.random_samples == 2) {
            Text.PrintNow("LAW3_3", 3000, 1);
          }
          if ($.random_samples == 3) {
            Text.PrintNow("LAW3_4", 3000, 1);
          }
          if ($.random_samples == 4) {
            Text.PrintNow("LAW3_5", 3000, 1);
          }
          if ($.random_samples == 5) {
            Text.PrintNow("LAW3_6", 3000, 1);
          }
          await asyncWait(1500);
          while (!(Audio.HasMissionAudioFinished(1))) {
            await asyncWait(0);


          }
          if (!(Char.IsDead($.jury_bloke2))) {
            $.jury_bloke2.setObjRunToCoord(535.7, 177.3);
          }
          if (Audio.HasMissionAudioLoaded(2)) {
            Audio.PlayMissionAudio(2);
            //PRINT_NOW ( LAW3_21 ) 3000 2 //I can't believe this is happening!

          }
          Camera.SetFixedPosition(548.683, 203.050, 13.808, 0.0, 0.0, 0.0); //Jury Bloke
          Camera.PointAtPoint(548.314, 202.122, 13.859, 2 /* JUMP_CUT */);
          await asyncWait(3000);
          $.player1.setControl(true /* ON */);
          Hud.SwitchWidescreen(false /* OFF */);
          Camera.RestoreJumpcut();
          Camera.SetBehindPlayer();
          $.scplayer.setObjNoObj();
          $.jury_bloke2.delete();
          $.jury_car2.markAsNoLongerNeeded();
          $.random_samples = Math.RandomIntInRange(0, 6);
          if (!(Car.IsDead($.jury_car2))) {
            $.jury_car2.setHeavy(false /* FALSE */);
          }
          await load_random_samples();  // SCM GOSUB load_random_samples
          $.all_been_given_a_cunting++;
          $.beaten_to_a_bloody_mess2 = 1;
        }


      }
    }



  }


  // SCM GOTO → mission_lawyer3_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_lawyer3_passed"); // fallback: would break linear control flow
}



// Mission lawyer3 failed


async function onFailed() {
  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed"
}




// mission lawyer3 passed


async function mission_lawyer3_passed() {


  $.flag_lawyer_mission3_passed = 1;
  Audio.PlayMissionPassedTune(1);
  Text.PrintWithNumberBig("M_PASS", 400, 5000, 1); //"Mission Passed!"
  $.player1.clearWantedLevel();
  $.player1.addScore(400);
  Stat.RegisterMissionPassed("LAW_3");
  Stat.PlayerMadeProgress(1);
  $.armour_in_stock = 1;
  // START_NEW_SCRIPT lawyer_mission4_loop
}




// mission cleanup


async function cleanup() {


  $.timer_mobile_start = Clock.GetGameTimer();
  ONMISSION = 0;
  $.jury_bloke1_blip.remove();
  $.jury_bloke2_blip.remove();
  $.hardware_blip.remove();
  Streaming.MarkModelAsNoLongerNeeded(HMORI);
  Streaming.MarkModelAsNoLongerNeeded(Admiral);
  Streaming.MarkModelAsNoLongerNeeded(BFYBE);
  Streaming.MarkModelAsNoLongerNeeded(spand);
  Streaming.MarkModelAsNoLongerNeeded(glendale);
  Streaming.MarkModelAsNoLongerNeeded(BMYBU);
  Streaming.MarkModelAsNoLongerNeeded(hammer);
  Streaming.MarkModelAsNoLongerNeeded(HMYAP);
  Streaming.MarkModelAsNoLongerNeeded(sentinel);
  Streaming.MarkModelAsNoLongerNeeded(WMOGO);
  hit_n_run_car.markAsNoLongerNeeded();
  $.jury_car.markAsNoLongerNeeded();
  $.jury_car2.markAsNoLongerNeeded();
  hammer1.remove();
  hammer2.remove();
  hammer_blokes_hammer.remove();
  Streaming.UnloadSpecialCharacter(4);
  Audio.ClearMissionAudio(1);
  Audio.ClearMissionAudio(2);
  Mission.Finish();


  if (!(Car.IsDead($.jury_car))) {
    $.jury_car.setHeavy(false /* FALSE */);
    $.jury_car.setCanBurstTires(true /* TRUE */);
  }
  if (!(Car.IsDead($.jury_car2))) {
    $.jury_car2.setHeavy(false /* FALSE */);
  }
}



async function load_random_samples() {


  if ($.random_samples == 0) {
    Audio.LoadMissionAudio(1, "LAW3_1" as any);
  }


  if ($.random_samples == 1) {
    Audio.LoadMissionAudio(1, "LAW3_2" as any);
  }


  if ($.random_samples == 2) {
    Audio.LoadMissionAudio(1, "LAW3_3" as any);
  }


  if ($.random_samples == 3) {
    Audio.LoadMissionAudio(1, "LAW3_4" as any);
  }


  if ($.random_samples == 4) {
    Audio.LoadMissionAudio(1, "LAW3_5" as any);
  }


  if ($.random_samples == 5) {
    Audio.LoadMissionAudio(1, "LAW3_6" as any);
  }
}




async function cut_scene_juror1() {



  if ($.beaten_to_a_bloody_mess1 == 0) {
    if (!(Char.IsDead($.jury_bloke1))) {
      Camera.DoFade(500, 0 /* FADE_OUT */);
      //SET_MUSIC_DOES_FADE FALSE
      $.player1.shutUp(true /* TRUE */);
      $.player1.setControl(false /* OFF */);
      Hud.SwitchWidescreen(true /* ON */);
      $.player1.lookAtCharAlways($.jury_bloke1);
      $.jury_bloke1_blip.remove();
      $.jury_bloke1.setObjNoObj();
      if (Audio.HasMissionAudioLoaded(1)) {
        Audio.PlayMissionAudio(1);
      }
      Audio.LoadMissionAudio(2, "LAW3_22" as any);
      if ($.random_samples == 0) {
        Text.PrintNow("LAW3_1", 3000, 1);
      }
      if ($.random_samples == 1) {
        Text.PrintNow("LAW3_2", 3000, 1);
      }
      if ($.random_samples == 2) {
        Text.PrintNow("LAW3_3", 3000, 1);
      }
      if ($.random_samples == 3) {
        Text.PrintNow("LAW3_4", 3000, 1);
      }
      if ($.random_samples == 4) {
        Text.PrintNow("LAW3_5", 3000, 1);
      }
      if ($.random_samples == 5) {
        Text.PrintNow("LAW3_6", 3000, 1);
      }
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      Streaming.LoadScene(204.5, -1007.6, 9.4);
      TIMERB = 0;
      Camera.SetFixedPosition(203.625, -1010.455, 10.988, 0.0, 0.0, 0.0);
      Camera.PointAtPoint(203.922, -1009.509, 10.862, 2 /* JUMP_CUT */);
      $.player1.stopLooking();
      World.ClearArea(202.7, -1016.4, 9.6, 1.0, true /* TRUE */);
      $.player1.setCoordinates(202.7, -1016.4, 9.6);
      $.jury_bloke1.delete();
      World.ClearArea(204.5, -1007.6, 9.4, 5.0, true /* TRUE */);
      $.jury_bloke1 = Char.Create(4 /* PEDTYPE_CIVMALE */, HMORI, 204.5, -1007.6, 9.4);

      //SET_MUSIC_DOES_FADE TRUE
      Camera.DoFade(500, 1 /* FADE_IN */);


      if (!(Char.IsDead($.jury_bloke1))) {
        $.jury_bloke1.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.jury_bloke1.setRunning(true /* TRUE */);
        $.jury_bloke1.setObjRunToCoord(215.6, -958.6);
      }
      TIMERB = 0;
      while (!(TIMERB > 5000)) {
        await asyncWait(0);
        if (Audio.HasMissionAudioFinished(1)) {
          if (Audio.HasMissionAudioLoaded(2)) {
            Audio.PlayMissionAudio(2);
          }
        }


      }
      $.random_samples = Math.RandomIntInRange(0, 6);
      await load_random_samples();  // SCM GOSUB load_random_samples
      $.player1.setHeading(0.0);
      $.player1.setControl(true /* ON */);
      Hud.SwitchWidescreen(false /* OFF */);
      Camera.RestoreJumpcut();
      $.player1.shutUp(false /* FALSE */);
      $.all_been_given_a_cunting++;
      $.jury_bloke1.delete();
      $.jury_car.markAsNoLongerNeeded();
      $.jury_car_smash.markAsNoLongerNeeded();
      spand_driver.markAsNoLongerNeeded();
      if (!(Car.IsDead($.jury_car))) {
        $.jury_car.lockDoors(1 /* CARLOCK_UNLOCKED */);
      }
      $.beaten_to_a_bloody_mess1 = 1;
    }
  }
}

export async function lawyer3() {
  // Mission start stuff


  await body();  // SCM GOSUB mission_start_lawyer3


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await onFailed();  // SCM GOSUB mission_lawyer3_failed
  }


  await cleanup();  // SCM GOSUB mission_cleanup_lawyer3




  // Variables for mission



  // VAR_INT jury_bloke1 jury_bloke2 talk_guy talk_guy_punched_juror_flee jury_car_is_dead smash_up_car_help_played
  // VAR_INT all_been_given_a_cunting beaten_to_a_bloody_mess1 beaten_to_a_bloody_mess2 any_vehicle_law3
  // VAR_INT jury_bloke1_blip jury_bloke2_blip jury_car random_samples jury_car_smash player_shooting_in_area
  // VAR_INT wacked_by_weapon1 wacked_by_weapon2 hardware_blip jury_car2 scream_sound_for_juror1
  // VAR_FLOAT law_World_X law_World_Y law_World_Z
  // VAR_FLOAT talk_guyX talk_guyY talk_guyZ hammer_blokeX hammer_blokeY hammer_blokeZ
  // LVAR_INT hit_n_run_car hammer_bloke played_smash_print hammer_blokes_hammer hammer_blokes_hammer_created
  // LVAR_INT jury_bloke1_first_hit jury_bloke1_second_hit jury_bloke1_third_hit set_chars_chatting
  // LVAR_INT jury_bloke1_run_to_car talk_guy_ran_away spand_driver hammer1 hammer2 unfreeze_car hit_n_run_bloke


  // ***************************************Mission Start*************************************


}
