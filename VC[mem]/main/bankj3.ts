// Generated from main/bankj3.sc

import { $ } from "../vars.mts";

async function mission_start_bankjob3() {


  Stat.RegisterMissionGiven();


  ONMISSION = 1;


  $.flag_player_in_malibu = 0;


  $.gosub_cpcounter_bankjob3 = 0;
  $.player1_cpcounter_bankjob3 = 0;
  $.racer1_cpcounter_bankjob3 = 0;
  $.racer1_locate_size_bankjob3 = 7.0;


  $.flag_had_cops_message_bankjob3 = 0;


  $.flag_load_audio_bankjob3 = 0;


  $.flag_car_rev_cleared_bankjob3 = 0;


  $.flag_had_car_message_bank3 = 0;


  $.race_timer_bankjob3 = 0;

  // Timer Stuff


  $.race_timer_mins_bankjob3 = 0;


  $.race_timer_seconds2_bankjob3 = 0;


  $.race_timer_seconds_bankjob3 = 0;

  // Used to set car back to default distance


  $.flag_car_line_dist_bankjob3 = 0;


  $.temp_int_bank3 = 0;


  await asyncWait(0);


  Text.LoadMissionText("BANKJ3");
  Audio.LoadMissionAudio(1, "mono13" as any);


  Shortcut.SetDropoffPointForMission(512.591, -74.900, 9.573, 189.24);




  // ****************************************START OF CUTSCENE********************************
  // Player is talking about needing a getaway driver, Phil says that he knows someone


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSken");
  Streaming.LoadSpecialCharacter(3, "CSphil");
  Streaming.LoadSpecialModel(CUTOBJ01, "gcfan");
  Streaming.LoadSpecialModel(CUTOBJ02, "clchr");
  Streaming.LoadSpecialModel(CUTOBJ03, "colphon");


  Streaming.SetAreaVisible(VIS_MALIBU_CLUB);


  Streaming.LoadScene(481.03, -64.21, 8.98);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasModelLoaded(CUTOBJ01)) || !(Streaming.HasModelLoaded(CUTOBJ02)) || !(Streaming.HasModelLoaded(CUTOBJ03))) {
    await asyncWait(0);


  }


  Cutscene.Load("bank_3a");


  Cutscene.SetOffset(476.972, -65.499, 8.943);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_ken = CutsceneObject.Create(SPECIAL02);
  $.cs_ken.setAnim("CSken");


  $.cs_phil = CutsceneObject.Create(SPECIAL03);
  $.cs_phil.setAnim("CSphil");


  $.cs_clubfan = CutsceneObject.Create(CUTOBJ01);
  Cutscene.SetAnimToLoop("gcfan");
  $.cs_clubfan.setAnim("gcfan");


  $.cs_clubchair = CutsceneObject.Create(CUTOBJ02);
  $.cs_clubchair.setAnim("clchr");


  $.cs_phone = CutsceneObject.Create(CUTOBJ03);
  $.cs_phone.setAnim("colphon");


  World.ClearArea(493.1, -82.4, 9.8, 1.0, true /* TRUE */);
  $.player1.setCoordinates(493.1, -82.4, 9.8);
  $.player1.setHeading(220.0);


  Camera.DoFade(3000, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 2827) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM3_A", 10000, 1); // "Things are coming together perfectly."


  while ($.cs_time < 4964) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM3_B", 10000, 1); // "What's the plan, Tommy? Que pasa, amigo?"


  while ($.cs_time < 7438) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM3_C", 10000, 1); //"the plan is you keep that like a moron. Anyhow we need a driver."


  while ($.cs_time < 12291) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM3_D", 10000, 1); //"Tommy I'll do it. I can drive"


  while ($.cs_time < 14893) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM3_E", 10000, 1); //"You want Hilary, mister. Not some smart talking law school chump."


  while ($.cs_time < 19162) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM3_F", 10000, 1); //"Hilary is the real deal. He must drink petrol. You ain't never seen anyone so fast. I'll give him a call."


  while ($.cs_time < 26056) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM3_G", 10000, 1); //"Hey Hil, it's Phil, how's it going. No don't talk. We'll reminisce later. You want to do me a favour?"


  while ($.cs_time < 34674) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM3_H", 10000, 1); //"I got me a guy from up north, no I don't think he was in the service, but he wants a driver."


  while ($.cs_time < 40799) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM3_I", 10000, 1); //"For a bit of action. Okay I understand."


  while ($.cs_time < 46343) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM3_J", 10000, 1); //"What'd he say?"


  while ($.cs_time < 47448) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM3_K", 10000, 1); //"Well he'll do it, no problem. Well, there might be a little problem, see he has abandonment issues."


  while ($.cs_time < 52709) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM3_L", 10000, 1); //"Seems he won't work for anyone who can't beat him. Something to do with his momma."


  while ($.cs_time < 56624) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM3_M", 10000, 1); //"Anyway, he wants to race you first, said he'd meet you outside."


  while ($.cs_time < 59809) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  Camera.DoFade(2000, 0 /* FADE_OUT */);


  Text.ClearPrints();


  await asyncWait(1000);


  if (!(Cutscene.WasSkipped())) {
    if (Audio.HasMissionAudioLoaded(1)) {
      Audio.PlayMissionAudio(1);
    }


  }


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Text.PrintBig("BEACH3", 3000, 2); //"Vice Point"


  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();
  World.SetCarDensityMultiplier(1.0);
  Camera.SetBehindPlayer();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ02);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ03);


  Streaming.SetAreaVisible(VIS_MAIN_MAP);


  World.ClearExtraColors(false /* FALSE */);


  Streaming.LoadScene(449.89, -116.18, 9.74);


  $.flag_player_in_malibu = 0;

  // ****************************************END OF CUTSCENE**********************************


  Path.SwitchRoadsOff(439.691, -319.016, 8.0, 533.378, 139.155, 14.0);
  World.ClearAreaOfCars(439.691, -319.016, 8.0, 533.378, 139.155, 14.0);
  World.ClearAreaOfChars(439.691, -319.016, 8.0, 533.378, 139.155, 14.0);

  // ********************************** CUT SCENE TWO ****************************************


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CShlary");
  Streaming.LoadSpecialModel(CUTOBJ01, "hlrycar");


  Streaming.LoadScene(479.090, -149.436, 9.00);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasModelLoaded(CUTOBJ01))) {
    await asyncWait(0);


  }


  Cutscene.Load("bank_3b");


  Cutscene.SetOffset(479.090, -149.436, 9.00); // Same as car position
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_hilary = CutsceneObject.Create(SPECIAL02);
  $.cs_hilary.setAnim("CShlary");


  $.cs_hilcar = CutsceneObject.Create(CUTOBJ01);
  $.cs_hilcar.setAnim("hlrycar");


  World.ClearArea(449.89, -116.18, 9.74, 1.0, true /* TRUE */);
  $.player1.setCoordinates(449.89, -116.18, 9.74);
  $.player1.setHeading(310.41);


  Camera.DoFade(2000, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 4501) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM3_2A", 10000, 1); //"You Tommy? Of course you're Tommy, I mean,"


  while ($.cs_time < 7978) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM3_2B", 10000, 1); //"Why else would someone want to speak to me.


  while ($.cs_time < 9549) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM3_2C", 10000, 1); //"OK. consider it this way.


  while ($.cs_time < 11840) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM3_2D", 10000, 1); //"I'll drive for you, if and only if you can drive properly.


  while ($.cs_time < 17081) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BJM3_2E", 10000, 1); //"Leave me alone, and I'll never forgive you.


  while ($.cs_time < 20480) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  while ($.cs_time < 24056) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Camera.DoFade(2000, 0 /* FADE_OUT */);


  Text.ClearPrints();


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();
  Camera.SetBehindPlayer();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);


  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);

  // ******************************** END OF CUTSCENE TWO ************************************


  $.player1.setMood(PLAYER_MOOD_PISSED_OFF, 60000);

  // **************************************** Race Coordinates *******************************

  // starting position of racer1


  $.racer1_stuck_x_bankjob3 = 479.090;
  $.racer1_stuck_y_bankjob3 = -149.436;
  $.racer1_stuck_z_bankjob3 = 9.00;

  // sets all the cars to face the correct way


  $.racer1_headings_bankjob3 = 185.022;

  // Check points in the race


  $.total_checkpoints_bankjob3 = 18;

  // Player start point


  $.player1_start_x_bankjob3 = 483.190;
  $.player1_start_y_bankjob3 = -149.436;
  $.player1_start_z_bankjob3 = 9.00;

  // Check point 1


  $.cp1_x_bankjob3 = 479.06;
  $.cp1_y_bankjob3 = -174.68;
  $.cp1_z_bankjob3 = 9.00;

  // Checkpoint 2


  $.cp2_x_bankjob3 = 477.68;
  $.cp2_y_bankjob3 = -213.29;
  $.cp2_z_bankjob3 = 10.77;

  // Checkpoint 3


  $.cp3_x_bankjob3 = 458.74;
  $.cp3_y_bankjob3 = -315.75;
  $.cp3_z_bankjob3 = 9.08;

  // Check point 4


  $.cp4_x_bankjob3 = 418.92;
  $.cp4_y_bankjob3 = -397.27;
  $.cp4_z_bankjob3 = 8.95;

  // Check point 5


  $.cp5_x_bankjob3 = 230.78;
  $.cp5_y_bankjob3 = -697.36;
  $.cp5_z_bankjob3 = 9.28;

  // Check point 6


  $.cp6_x_bankjob3 = 71.23;
  $.cp6_y_bankjob3 = -1006.72;
  $.cp6_z_bankjob3 = 9.31;

  // Check point 7


  $.cp7_x_bankjob3 = 171.80;
  $.cp7_y_bankjob3 = -1132.57;
  $.cp7_z_bankjob3 = 9.28;

  // Check point 8


  $.cp8_x_bankjob3 = 160.03;
  $.cp8_y_bankjob3 = -1331.92;
  $.cp8_z_bankjob3 = 9.28;

  // Check point 9


  $.cp9_x_bankjob3 = 38.84;
  $.cp9_y_bankjob3 = -1473.71;
  $.cp9_z_bankjob3 = 9.30;

  // Check point 10


  $.cp10_x_bankjob3 = -54.79;
  $.cp10_y_bankjob3 = -1560.57;
  $.cp10_z_bankjob3 = 9.28;

  // Check point 11


  $.cp11_x_bankjob3 = -190.29;
  $.cp11_y_bankjob3 = -1215.46;
  $.cp11_z_bankjob3 = 9.31;

  // Check point 12


  $.cp12_x_bankjob3 = -88.78;
  $.cp12_y_bankjob3 = -936.21;
  $.cp12_z_bankjob3 = 9.31;

  // Check point 13


  $.cp13_x_bankjob3 = 124.88;
  $.cp13_y_bankjob3 = -800.59;
  $.cp13_z_bankjob3 = 9.31;

  // Check point 14


  $.cp14_x_bankjob3 = 183.11;
  $.cp14_y_bankjob3 = -496.49;
  $.cp14_z_bankjob3 = 9.90;

  // Check point 15


  $.cp15_x_bankjob3 = 277.36;
  $.cp15_y_bankjob3 = -176.64;
  $.cp15_z_bankjob3 = 10.30;

  // Check point 16


  $.cp16_x_bankjob3 = 446.80;
  $.cp16_y_bankjob3 = 68.27;
  $.cp16_z_bankjob3 = 10.16;

  // Check point 17


  $.cp17_x_bankjob3 = 489.63;
  $.cp17_y_bankjob3 = 67.13;
  $.cp17_z_bankjob3 = 10.00;

  // Check point 18


  $.cp18_x_bankjob3 = 517.55;
  $.cp18_y_bankjob3 = -74.78;
  $.cp18_z_bankjob3 = 9.59;


  World.SetCarDensityMultiplier(0.3); // Normal is 1.0

  // Waiting for models to load


  Streaming.RequestModel(SABRETUR);


  Streaming.RequestModel(SENTINEL);


  Streaming.LoadSpecialCharacter(3, "ighlary");


  Audio.LoadMissionAudio(1, "carrev" as any); // car rev


  Audio.LoadMissionAudio(2, "BNK3_3a" as any); // Police radio


  while (!(Streaming.HasModelLoaded(SABRETUR)) || !(Streaming.HasModelLoaded(SENTINEL)) || !(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3))) {
    await asyncWait(0);


  }


  World.ClearArea(526.20, -76.85, 10.78, 5.0, true /* TRUE */); //will delete all projectiles in the world

  // Creates car 1


  $.racer1_bankjob3 = Car.Create(SABRETUR, $.racer1_stuck_x_bankjob3, $.racer1_stuck_y_bankjob3, $.racer1_stuck_z_bankjob3);
  $.racer1_bankjob3.lockDoors(2 /* CARLOCK_LOCKED */);
  $.racer1_bankjob3.setProofs(true /* TRUE */, true /* TRUE */, true /* TRUE */, false /* FALSE */, true /* TRUE */);
  $.racer1_bankjob3.setWatertight(true /* TRUE */);
  $.racer1_bankjob3.setStrong(true /* TRUE */);
  $.racer1_bankjob3.setTraction(1.5);
  $.racer1_bankjob3.setUpsidedownNotDamaged(true /* TRUE */);
  $.racer1_bankjob3.setStraightLineDistance(200);


  $.driver_bankjob3 = Char.CreateInsideCar($.racer1_bankjob3, 4 /* PEDTYPE_CIVMALE */, SPECIAL03);
  $.driver_bankjob3.clearThreatSearch();
  $.driver_bankjob3.setCantBeDraggedOut(true /* TRUE */);


  $.racer1_bankjob3.setHeading($.racer1_headings_bankjob3);
  $.racer1_bankjob3.setIdle();
  $.racer1_bankjob3.setDrivingStyle(2);
  $.racer1_bankjob3.setCruiseSpeed(45.0);
  $.racer1_bankjob3.setOnlyDamagedByPlayer(true /* TRUE */);


  $.player_race_car_bank3 = Car.Create(SENTINEL, $.player1_start_x_bankjob3, $.player1_start_y_bankjob3, $.player1_start_z_bankjob3);
  $.player_race_car_bank3.setHeading($.racer1_headings_bankjob3);
  $.scplayer.warpIntoCar($.player_race_car_bank3);


  World.ClearArea(473.713, -149.895, 10.546, 1.0, false /* FALSE */);
  Camera.SetFixedPosition(473.713, -149.895, 10.546, 0.0, 0.0, 0.0); // WILL HVE TO COME OUT AGAIN IF SCRIPT CHANGES
  Camera.PointAtPoint(474.708, -149.824, 10.479, 2 /* JUMP_CUT */);
  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
  Game.SetPoliceIgnorePlayer($.player1, true /* ON */);


  if (!(Char.IsDead($.driver_bankjob3))) {
    $.driver_bankjob3.lookAtCharAlways($.scplayer);
    $.scplayer.lookAtCharAlways($.driver_bankjob3);
  }
  else {
    Text.PrintNow("BJM3_2", 5000, 1); //"Shit Hilary has been wasted!"
    // SCM GOTO → mission_bankjob3_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bankjob3_failed"); // fallback: would break linear control flow
  }

  // fades the screen in


  Camera.SetFadingColor(0, 0, 0);


  await asyncWait(500);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (Car.IsDead($.racer1_bankjob3)) {
      // SCM GOTO → mission_bankjob3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob3_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.driver_bankjob3)) {
      Text.PrintNow("BJM3_2", 5000, 1); //"Shit Hilary has been wasted!"
      // SCM GOTO → mission_bankjob3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob3_failed"); // fallback: would break linear control flow
      if (!(Car.IsDead($.racer1_bankjob3))) {
        $.racer1_bankjob3.setIdle();
      }


    }
    $.car_health_bankjob3 = $.racer1_bankjob3.getHealth();
    if ($.car_health_bankjob3 < 1000 || $.racer1_bankjob3.isTireBurst(ANY_WHEEL)) {
      $.car_health_bankjob3 = 9;
      // SCM GOTO → race_start_bankjob3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO race_start_bankjob3"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.player_race_car_bank3)) {
      // SCM GOTO → mission_bankjob3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob3_failed"); // fallback: would break linear control flow
    }


  }

  // waiting for the player1 to get to the starting grid


  while (!($.player1.locateStoppedInCar3D($.player1_start_x_bankjob3, $.player1_start_y_bankjob3, $.player1_start_z_bankjob3, 2.0, 2.0, 2.0, true /* TRUE */)) || $.player1.isInAnyBoat() || $.player1.isInFlyingVehicle()) {
    await asyncWait(0);
    if ($.player1.locateAnyMeans3D($.player1_start_x_bankjob3, $.player1_start_y_bankjob3, $.player1_start_z_bankjob3, 2.0, 2.0, 2.0, false /* FALSE */)) {
      if ($.player1.isInAnyBoat() || $.player1.isInFlyingVehicle()) {
        if ($.flag_had_car_message_bank3 == 0) {
          Text.PrintNow("BJM3_4", 5000, 1); //"You need a car to take part."
          $.flag_had_car_message_bank3 = 1;
        }


      }
      else {
        if ($.player1.locateStoppedOnFoot3D($.player1_start_x_bankjob3, $.player1_start_y_bankjob3, $.player1_start_z_bankjob3, 2.0, 2.0, 2.0, false /* FALSE */)) {
          if ($.flag_had_car_message_bank3 == 0) {
            Text.PrintNow("BJM3_4", 5000, 1); //"You need a car to take part."
            $.flag_had_car_message_bank3 = 1;
          }


        }


      }


    }
    else {
      $.flag_had_car_message_bank3 = 0;
    }
    if (Car.IsDead($.racer1_bankjob3)) {
      // SCM GOTO → mission_bankjob3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob3_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.driver_bankjob3)) {
      Text.PrintNow("BJM3_2", 5000, 1); //"Shit Hilary has been wasted!"
      // SCM GOTO → mission_bankjob3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob3_failed"); // fallback: would break linear control flow
    }
    $.car_health_bankjob3 = $.racer1_bankjob3.getHealth();
    if ($.car_health_bankjob3 < 1000 || $.racer1_bankjob3.isTireBurst(ANY_WHEEL)) {
      $.car_health_bankjob3 = 9;
      // SCM GOTO → race_start_bankjob3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO race_start_bankjob3"); // fallback: would break linear control flow
    }


  }
}



async function race_start_bankjob3() {


  Audio.PlayMissionAudio(1); // CARREV


  if ($.car_health_bankjob3 == 9) {
    Text.PrintBig("RACE1", 1200, 4); // "3..2..1.. GO GO GO!"
    Camera.RestoreJumpcut();
  }
  else {
    $.player1.setControl(false /* OFF */);
    Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
    Game.SetPoliceIgnorePlayer($.player1, true /* ON */);
    Text.PrintBig("RACE2", 1500, 4); //"3"
    Sound.AddOneOffSound(0.0, 0.0, 0.0, 97 /* SOUND_RACE_START_3 */);
    await asyncWait(1500);
    World.ClearArea(481.704, -155.509, 10.900, 1.0, false /* FALSE */);
    Camera.SetFixedPosition(481.704, -155.509, 10.900, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(481.675, -154.522, 10.741, 2 /* JUMP_CUT */);
    Text.PrintBig("RACE3", 1500, 4); //"2"
    Sound.AddOneOffSound(0.0, 0.0, 0.0, 98 /* SOUND_RACE_START_2 */);
    await asyncWait(1500);
    World.ClearArea(487.907, -148.861, 11.167, 1.0, false /* FALSE */);
    Camera.SetFixedPosition(487.907, -148.861, 11.167, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(486.924, -148.899, 10.98, 2 /* JUMP_CUT */);
    Text.PrintBig("RACE4", 1500, 4); //"1"
    Sound.AddOneOffSound(0.0, 0.0, 0.0, 99 /* SOUND_RACE_START_1 */);
    await asyncWait(1500);
    Camera.SetBehindPlayer();
    Camera.RestoreJumpcut();
    $.scplayer.stopLooking();
    if (!(Char.IsDead($.driver_bankjob3))) {
      $.driver_bankjob3.stopLooking();
    }
    else {
      Text.PrintNow("BJM3_2", 5000, 1); //"Shit Hilary has been wasted!"
      // SCM GOTO → mission_bankjob3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob3_failed"); // fallback: would break linear control flow
    }
    Text.PrintBig("RACE5", 800, 4); //"GO"
    Sound.AddOneOffSound(0.0, 0.0, 0.0, 100 /* SOUND_RACE_START_GO */);
    Camera.SetBehindPlayer();
    Camera.RestoreJumpcut();
    $.player1.setControl(true /* ON */);
    Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
    Game.SetPoliceIgnorePlayer($.player1, false /* OFF */);
  }


  if (Car.IsDead($.racer1_bankjob3)) {
    Text.PrintNow("BJM3_2", 5000, 1); //"Hilary is dead!"
    // SCM GOTO → mission_bankjob3_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bankjob3_failed"); // fallback: would break linear control flow
  }


  $.blip_racer1_bankjob3 = Blip.AddForCarOld($.racer1_bankjob3, 0 /* RED */, 1 /* MARKER_ONLY */);


  StuckCarCheck.Add($.racer1_bankjob3, 0.1, 1000);


  await get_next_checkpoint_bankjob3();  // SCM GOSUB get_next_checkpoint_bankjob3


  $.player1_cp_x_bankjob3 = $.gosub_cp_x_bankjob3;
  $.player1_cp_y_bankjob3 = $.gosub_cp_y_bankjob3;
  $.player1_cp_z_bankjob3 = $.gosub_cp_z_bankjob3;
  $.blip_2nd_x_bankjob3 = $.gosub_cp_2nd_x_bankjob3;
  $.blip_2nd_y_bankjob3 = $.gosub_cp_2nd_y_bankjob3;
  $.blip_2nd_z_bankjob3 = $.gosub_cp_2nd_z_bankjob3;


  $.racer1_cp_x_bankjob3 = $.gosub_cp_x_bankjob3;
  $.racer1_cp_y_bankjob3 = $.gosub_cp_y_bankjob3;
  $.racer1_cp_z_bankjob3 = $.gosub_cp_z_bankjob3;



  $.blip_chase_bankjob3 = Blip.AddForCoord($.player1_cp_x_bankjob3, $.player1_cp_y_bankjob3, $.player1_cp_z_bankjob3);


  $.second_blip_chase_bankjob3 = Blip.AddForCoordOld($.blip_2nd_x_bankjob3, $.blip_2nd_y_bankjob3, $.blip_2nd_z_bankjob3, 5 /* PURPLE */, 2 /* BLIP_ONLY */);
  $.second_blip_chase_bankjob3.changeScale(2);
  $.second_blip_chase_bankjob3.dim(true /* TRUE */);


  $.racer1_bankjob3.gotoCoordinates($.racer1_cp_x_bankjob3, $.racer1_cp_y_bankjob3, $.racer1_cp_z_bankjob3);


  Hud.DisplayTimerWithString($.$id.race_timer_bankjob3, TIMER_UP, "R_TIME");

  // waiting for the race to be finished


  while ($.player1_cpcounter_bankjob3 < $.total_checkpoints_bankjob3) {
    await asyncWait(0);
    if ($.gosub_cpcounter_bankjob3 >= 4) {
      if ($.flag_had_cops_message_bankjob3 == 0) {
        if (Audio.HasMissionAudioLoaded(2)) {
          $.flag_had_cops_message_bankjob3 = 1;
        }


      }
      if ($.flag_had_cops_message_bankjob3 == 1) {
        Audio.PlayMissionAudio(2);
        Text.PrintNow("BNK3_3A", 5000, 1); //"Illegal street race in progress at Vice Point."
        $.player1.alterWantedLevelNoDrop(2);
        $.flag_had_cops_message_bankjob3 = 2;
      }
      if ($.flag_had_cops_message_bankjob3 == 2) {
        if (Audio.HasMissionAudioFinished(2)) {
          Text.ClearThisPrint("BNK3_3A");
          $.flag_had_cops_message_bankjob3 = 3;
        }


      }
      if ($.flag_had_cops_message_bankjob3 == 3) {
        Audio.LoadMissionAudio(1, "BNK3_3b" as any);
        Audio.LoadMissionAudio(2, "BNK3_3c" as any);
        $.flag_had_cops_message_bankjob3 = 4;
      }
      if ($.flag_had_cops_message_bankjob3 == 4) {
        if (Audio.HasMissionAudioLoaded(1)) {
          $.flag_had_cops_message_bankjob3 = 5;
        }


      }
      if ($.flag_had_cops_message_bankjob3 == 5) {
        Audio.PlayMissionAudio(1);
        Text.PrintNow("BNK3_3B", 5000, 1); //""Calling all officers."
        $.flag_had_cops_message_bankjob3 = 6;
      }
      if ($.flag_had_cops_message_bankjob3 == 6) {
        if (Audio.HasMissionAudioFinished(1)) {
          Text.ClearThisPrint("BNK3_3B");
          $.flag_had_cops_message_bankjob3 = 7;
        }


      }
      if ($.flag_had_cops_message_bankjob3 == 7) {
        if (Audio.HasMissionAudioLoaded(2)) {
          $.flag_had_cops_message_bankjob3 = 8;
        }


      }
      if ($.flag_had_cops_message_bankjob3 == 8) {
        Audio.PlayMissionAudio(2);
        Text.PrintNow("BNK3_3C", 5000, 1); //"Street racers, this is illegal and forbidden."
        $.flag_had_cops_message_bankjob3 = 9;
      }
      if ($.flag_had_cops_message_bankjob3 == 9) {
        if (Audio.HasMissionAudioFinished(2)) {
          Text.ClearThisPrint("BNK3_3C");
          Path.SwitchRoadsOn(439.691, -319.016, 8.0, 533.378, 139.155, 14.0); // switches on road outside of Malibu
          $.flag_had_cops_message_bankjob3 = 10;
        }


      }


    }
    if ($.flag_car_rev_cleared_bankjob3 == 0) {
      Audio.ClearMissionAudio(1);
      $.flag_car_rev_cleared_bankjob3 = 1;
    }
    if ($.flag_had_cops_message_bankjob3 == 1) {
      if (Audio.HasMissionAudioFinished(2)) {
        Text.ClearThisPrint("BNK3_3A");
        Text.ClearThisPrint("BNK3_3B");
        Audio.ClearMissionAudio(2);
        $.flag_had_cops_message_bankjob3 = 2;
      }


    }
    $.position_bankjob3 = 0;
    if ($.player1.locateInCar3D($.player1_cp_x_bankjob3, $.player1_cp_y_bankjob3, $.player1_cp_z_bankjob3, 6.0, 6.0, 6.0, false) && !($.player1.isInAnyBoat()) && !($.player1.isInFlyingVehicle())) {
      ++$.player1_cpcounter_bankjob3;
      Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */); // This might not work
      $.blip_chase_bankjob3.remove();
      $.second_blip_chase_bankjob3.remove();
      $.gosub_cpcounter_bankjob3 = $.player1_cpcounter_bankjob3;
      await get_next_checkpoint_bankjob3();  // SCM GOSUB get_next_checkpoint_bankjob3
      $.player1_cp_x_bankjob3 = $.gosub_cp_x_bankjob3;
      $.player1_cp_y_bankjob3 = $.gosub_cp_y_bankjob3;
      $.player1_cp_z_bankjob3 = $.gosub_cp_z_bankjob3;
      $.blip_2nd_x_bankjob3 = $.gosub_cp_2nd_x_bankjob3;
      $.blip_2nd_y_bankjob3 = $.gosub_cp_2nd_y_bankjob3;
      $.blip_2nd_z_bankjob3 = $.gosub_cp_2nd_z_bankjob3;
      if ($.player1_cpcounter_bankjob3 == $.total_checkpoints_bankjob3) {
        // SCM GOTO → mini_cutscene_bankjob3 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mini_cutscene_bankjob3"); // fallback: would break linear control flow
      }
      $.blip_chase_bankjob3 = Blip.AddForCoord($.player1_cp_x_bankjob3, $.player1_cp_y_bankjob3, $.player1_cp_z_bankjob3);
      if ($.player1_cpcounter_bankjob3 < 17) {
        $.second_blip_chase_bankjob3 = Blip.AddForCoordOld($.blip_2nd_x_bankjob3, $.blip_2nd_y_bankjob3, $.blip_2nd_z_bankjob3, 5 /* PURPLE */, 2 /* BLIP_ONLY */);
        $.second_blip_chase_bankjob3.dim(true /* ON */);
        $.second_blip_chase_bankjob3.changeScale(2);
      }
    }

    // Chase car 1

    if (Char.IsDead($.driver_bankjob3)) {
      Text.PrintNow("BJM3_2", 5000, 1); //"Shit Hilary has been wasted!"
      // SCM GOTO → mission_bankjob3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob3_failed"); // fallback: would break linear control flow
    }
    if (!(Car.IsDead($.racer1_bankjob3))) {
      if (Char.IsDead($.driver_bankjob3)) {
        Text.PrintNow("BJM3_2", 5000, 1); //"Shit Hilary has been wasted!"
        // SCM GOTO → mission_bankjob3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_bankjob3_failed"); // fallback: would break linear control flow
      }
      $.gosub_race_car_bankjob3 = $.racer1_bankjob3;
      $.gosub_cpcounter_bankjob3 = $.racer1_cpcounter_bankjob3;
      $.gosub_cp_x_bankjob3 = $.racer1_cp_x_bankjob3;
      $.gosub_cp_y_bankjob3 = $.racer1_cp_y_bankjob3;
      $.gosub_cp_z_bankjob3 = $.racer1_cp_z_bankjob3;
      await car_stuck_checks_bankjob3();  // SCM GOSUB car_stuck_checks_bankjob3
      if ($.racer1_bankjob3.locate3D($.racer1_cp_x_bankjob3, $.racer1_cp_y_bankjob3, $.racer1_cp_z_bankjob3, $.racer1_locate_size_bankjob3, $.racer1_locate_size_bankjob3, $.racer1_locate_size_bankjob3, false)) {
        ++$.racer1_cpcounter_bankjob3;
        if ($.flag_car_line_dist_bankjob3 == 0) {
          $.racer1_bankjob3.setStraightLineDistance(20);
          $.flag_car_line_dist_bankjob3 = 1;
        }
        $.gosub_cpcounter_bankjob3 = $.racer1_cpcounter_bankjob3;
        await get_next_checkpoint_bankjob3();  // SCM GOSUB get_next_checkpoint_bankjob3
        $.racer1_cp_x_bankjob3 = $.gosub_cp_x_bankjob3;
        $.racer1_cp_y_bankjob3 = $.gosub_cp_y_bankjob3;
        $.racer1_cp_z_bankjob3 = $.gosub_cp_z_bankjob3;
        if ($.racer1_cpcounter_bankjob3 == $.total_checkpoints_bankjob3) {
          $.racer1_locate_size_bankjob3 = 6.0;
        }
        if ($.racer1_cpcounter_bankjob3 == $.total_checkpoints_bankjob3) {
          Text.PrintNow("RACEFA", 5000, 1); //"~r~You failed to win the race!"
          // SCM GOTO → mission_bankjob3_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_bankjob3_failed"); // fallback: would break linear control flow
        }
        if ($.racer1_locate_size_bankjob3 == 7.0) {
          $.racer1_bankjob3.gotoCoordinates($.racer1_cp_x_bankjob3, $.racer1_cp_y_bankjob3, $.racer1_cp_z_bankjob3);
        }
        else {
          $.racer1_bankjob3.gotoCoordinatesAccurate($.racer1_cp_x_bankjob3, $.racer1_cp_y_bankjob3, $.racer1_cp_z_bankjob3);
        }


      }
      if ($.racer1_bankjob3.isInWater()) {
        if (!($.racer1_bankjob3.isOnScreen())) {
          const _res60 = $.racer1_bankjob3.getCoordinates();
$.car_x_bankjob3 = _res60.x;
$.car_y_bankjob3 = _res60.y;
$.car_z_bankjob3 = _res60.z;
          const _res61 = Path.GetClosestCarNode($.car_x_bankjob3, $.car_y_bankjob3, $.car_z_bankjob3);
$.car_x_bankjob3 = _res61.nodeX;
$.car_y_bankjob3 = _res61.nodeY;
$.car_z_bankjob3 = _res61.nodeZ;
          if (!(World.IsPointObscuredByAMissionEntity($.car_x_bankjob3, $.car_y_bankjob3, $.car_z_bankjob3, 4.0, 4.0, 4.0))) {
            if (!(Camera.IsPointOnScreen($.car_x_bankjob3, $.car_y_bankjob3, $.car_z_bankjob3, 3.0))) {
              $.racer1_bankjob3.setCoordinates($.car_x_bankjob3, $.car_y_bankjob3, $.car_z_bankjob3);
              $.racer1_bankjob3.turnToFaceCoord($.racer1_cp_x_bankjob3, $.racer1_cp_y_bankjob3);
            }


          }


        }


      }


    }
    else {
      if (!($.racer1_bankjob3.isInWater())) {
        $.racer1_cpcounter_bankjob3 = 0;
      }


    }
    if ($.position_bankjob3 == 0) {
      Text.Print("FIRST", 100, 1); //"1st"
    }
    if ($.position_bankjob3 == 1) {
      Text.Print("SECOND", 100, 1); //"2nd"
    }
    if ($.player1_cpcounter_bankjob3 == 17) {
      Fx.DrawCorona($.player1_cp_x_bankjob3, $.player1_cp_y_bankjob3, $.player1_cp_z_bankjob3, 5.5, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 0, 0);
    }
    else {
      Fx.DrawCorona($.player1_cp_x_bankjob3, $.player1_cp_y_bankjob3, $.player1_cp_z_bankjob3, 5.5, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }


  }


  Hud.ClearTimer($.$id.race_timer_bankjob3);
}



// mini cut-scene with driver saying he will do the job for the player1


async function mini_cutscene_bankjob3() {


  $.player1.clearWantedLevel();
  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);


  if ($.player1.isInAnyCar()) {
    $.player1.applyBrakesToCar(true /* ON */);
    $.player_car_bank3 = $.player1.storeCarIsIn();
  }


  Camera.SetFadingColor(1, 1, 1);


  Camera.DoFade(1500, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (Car.IsDead($.racer1_bankjob3)) {
      Text.PrintNow("BJM3_2", 5000, 1); //"Hilary is dead!"
      // SCM GOTO → mission_bankjob3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob3_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.player_car_bank3)) {
      // SCM GOTO → mission_bankjob3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob3_failed"); // fallback: would break linear control flow
    }


  }


  Camera.SetFixedPosition(515.93, -82.24, 12.87, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(515.92, -81.38, 12.55, 2 /* JUMP_CUT */);


  World.ClearArea(513.70, -74.30, 9.58, 4.0, true /* TRUE */);
  World.ClearAreaOfCars(528.63, 64.64, 8.0, 376.19, -320.62, 16.0);


  Game.SetPoliceIgnorePlayer($.player1, true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);


  $.player_car_bank3.setCoordinates(513.70, -74.30, 9.58);
  $.player_car_bank3.setHeading(180.0);


  $.racer1_bankjob3.setCoordinates(517.19, -74.30, 9.58);
  $.racer1_bankjob3.setHeading(180.0);
  $.blip_racer1_bankjob3.remove();
  $.racer1_bankjob3.setCruiseSpeed(0.0);
  $.racer1_bankjob3.setIdle();


  if ($.flag_load_audio_bankjob3 == 0) {
    Audio.LoadMissionAudio(1, "BNK3_1" as any); // Hilary message
    $.flag_load_audio_bankjob3 = 1;
  }


  while (!(Audio.HasMissionAudioLoaded(1))) {
    await asyncWait(0);
    if (Car.IsDead($.racer1_bankjob3)) {
      Text.PrintNow("BJM3_2", 5000, 1); //"Hilary is dead!"
      // SCM GOTO → mission_bankjob3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob3_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.player_car_bank3)) {
      // SCM GOTO → mission_bankjob3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob3_failed"); // fallback: would break linear control flow
    }


  }


  Camera.SetFadingColor(1, 1, 1);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (Car.IsDead($.racer1_bankjob3)) {
      Text.PrintNow("BJM3_2", 5000, 1); //"Hilary is dead!"
      // SCM GOTO → mission_bankjob3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob3_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.player_car_bank3)) {
      // SCM GOTO → mission_bankjob3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob3_failed"); // fallback: would break linear control flow
    }


  }

  // Make player1 and Hilary look at each other


  if (!(Char.IsDead($.driver_bankjob3))) {
    $.player1.lookAtCharAlways($.driver_bankjob3);
    $.driver_bankjob3.lookAtPlayerAlways($.player1);
  }
  else {
    Text.PrintNow("BJM3_2", 5000, 1); //"Hilary is dead!"
    // SCM GOTO → mission_bankjob3_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bankjob3_failed"); // fallback: would break linear control flow
  }


  if ($.player1_cpcounter_bankjob3 == $.total_checkpoints_bankjob3) {
    Audio.PlayMissionAudio(1); // Hilary talk stuff
    Text.PrintNow("BNK3_1", 6000, 1); //"Ok. I'll drive for you, but please, treat me bad."
  }


  while (!(Audio.HasMissionAudioFinished(1))) {
    await asyncWait(0);
    if (Char.IsDead($.driver_bankjob3)) {
      Text.PrintNow("BJM3_2", 5000, 1); //"Hilary is dead!"
      // SCM GOTO → mission_bankjob3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob3_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.racer1_bankjob3)) {
      if (Char.IsDead($.driver_bankjob3)) {
        Text.PrintNow("BJM3_2", 5000, 1); //"Hilary is dead!"
        // SCM GOTO → mission_bankjob3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_bankjob3_failed"); // fallback: would break linear control flow
      }


    }
    if (Car.IsDead($.player_car_bank3)) {
      // SCM GOTO → mission_bankjob3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob3_failed"); // fallback: would break linear control flow
    }


  }


  Audio.ClearMissionAudio(1);
  Text.ClearThisPrint("BNK3_1");


  if (!(Char.IsDead($.driver_bankjob3))) {
    $.player1.stopLooking();
    $.driver_bankjob3.stopLooking();
  }
  else {
    Text.PrintNow("BJM3_2", 5000, 1); //"Hilary is dead!"
    // SCM GOTO → mission_bankjob3_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bankjob3_failed"); // fallback: would break linear control flow
  }


  if (!(Car.IsDead($.racer1_bankjob3))) {
    StuckCarCheck.Remove($.racer1_bankjob3);
    $.racer1_bankjob3.setCruiseSpeed(30.0);
    $.racer1_bankjob3.gotoCoordinates(478.26, -129.32, 9.01);
  }


  TIMERB = 0;
  TIMERA = 0;


  while ($.driver_bankjob3.isOnScreen() && TIMERA < 3000) {
    await asyncWait(0);
    if (Char.IsDead($.driver_bankjob3)) {
      Text.PrintNow("BJM3_2", 5000, 1); //"Hilary is dead!"
      // SCM GOTO → mission_bankjob3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob3_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.racer1_bankjob3)) {
      if (Char.IsDead($.driver_bankjob3)) {
        Text.PrintNow("BJM3_2", 5000, 1); //"Hilary is dead!"
        // SCM GOTO → mission_bankjob3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_bankjob3_failed"); // fallback: would break linear control flow
      }


    }
    if (TIMERA >= 5000) {
      if (!(Char.IsDead($.driver_bankjob3))) {
        if ($.driver_bankjob3.isOnScreen()) {
          // SCM GOTO → mini_cut2_bankjob3 (not lowered; manual jump required)
          throw new Error("unresolved GOTO mini_cut2_bankjob3"); // fallback: would break linear control flow
        }


      }
      else {
        Text.PrintNow("BJM3_2", 5000, 1); //"Hilary is dead!"
        // SCM GOTO → mission_bankjob3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_bankjob3_failed"); // fallback: would break linear control flow
      }


    }
    if (Car.IsDead($.player_car_bank3)) {
      // SCM GOTO → mission_bankjob3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob3_failed"); // fallback: would break linear control flow
    }


  }
}



async function mini_cut2_bankjob3() {


  $.racer1_bankjob3.setIdle();
  $.driver_bankjob3.delete();
  $.racer1_bankjob3.delete();


  if (!(Car.IsDead($.player_car_bank3))) {
    $.player1.applyBrakesToCar(false /* OFF */);
  }
  else {
    // SCM GOTO → mission_bankjob3_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bankjob3_failed"); // fallback: would break linear control flow
  }


  Hud.SwitchWidescreen(false /* OFF */);
  Game.SetPoliceIgnorePlayer($.player1, false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
  $.player1.setControl(true /* ON */);
  Camera.RestoreJumpcut();


  // SCM GOTO → mission_bankjob3_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_bankjob3_passed"); // fallback: would break linear control flow
}


// ****************************************** Mission Failed *******************************


async function mission_bankjob3_failed() {


  Text.ClearThisPrint("FIRST");
  Text.ClearThisPrint("SECOND");


  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"


  if (!(Car.IsDead($.racer1_bankjob3))) {
    $.racer1_bankjob3.setCruiseSpeed(0.0);
    $.racer1_bankjob3.setIdle();
  }
}


// *************************************** Mission Passed **********************************


async function mission_bankjob3_passed() {


  $.flag_bankjob_mission3_passed = 1;
  Stat.RegisterMissionPassed("BANK_3");
  Stat.PlayerMadeProgress(1);
  Audio.PlayMissionPassedTune(1);
  $.player1.clearWantedLevel();

  // Works out race time in mins and seconds

  $.race_timer_seconds_bankjob3 = $.race_timer_bankjob3 / 1000;
  Stat.RegisterFastestTime(1, $.race_timer_seconds_bankjob3);
  $.race_timer_mins_bankjob3 = $.race_timer_seconds_bankjob3 / 60;
  $.race_timer_seconds2_bankjob3 = $.race_timer_mins_bankjob3 * 60;
  $.race_timer_seconds_bankjob3 = $.race_timer_seconds_bankjob3 - $.race_timer_seconds2_bankjob3;


  $.player1.addScore(3000);
  Text.PrintWithNumberBig("M_PASS", 3000, 5000, 1); // "Mission Passed!"


  if ($.race_timer_seconds_bankjob3 >= 10) {
    Text.PrintWith2NumbersNow("RACETM", $.race_timer_mins_bankjob3, $.race_timer_seconds_bankjob3, 5000, 1);
  }
  else {
    Text.PrintWith2NumbersNow("RACETM2", $.race_timer_mins_bankjob3, $.race_timer_seconds_bankjob3, 5000, 1);
  }


  // START_NEW_SCRIPT bankjob_mission4_loop
}




// *************************************** Mission Cleanup *********************************


async function mission_cleanup_bankjob3() {


  $.driver_bankjob3.removeElegantly();


  if (!(Car.IsDead($.racer1_bankjob3))) {
    $.racer1_bankjob3.setProofs(false /* FALSE */, false /* FALSE */, false /* FALSE */, false /* FALSE */, false /* FALSE */);
    $.racer1_bankjob3.setWatertight(false /* FALSE */);
    $.racer1_bankjob3.setStrong(false /* FALSE */);
    $.racer1_bankjob3.setUpsidedownNotDamaged(false /* FALSE */);
  }


  Path.SwitchRoadsOn(439.691, -319.016, 8.0, 533.378, 139.155, 14.0); // switches on road outside of Malibu
  World.SetCarDensityMultiplier(1.0);


  ONMISSION = 0;
  World.SetCarDensityMultiplier(1.0); // Sets this back to normal
  Streaming.UnloadSpecialCharacter(3);
  Streaming.MarkModelAsNoLongerNeeded(SABRETUR);
  Streaming.MarkModelAsNoLongerNeeded(SENTINEL);
  Path.SwitchRoadsOn(444.90, -203.82, 8.0, 572.14, 133.77, 20.0);
  $.blip_racer1_bankjob3.remove();
  $.blip_chase_bankjob3.remove();
  $.second_blip_chase_bankjob3.remove();
  Hud.ClearTimer($.$id.race_timer_bankjob3);
  $.timer_mobile_start = Clock.GetGameTimer();
  Mission.Finish();
}


// Creates the next checkpoint


async function get_next_checkpoint_bankjob3() {


  if ($.gosub_cpcounter_bankjob3 == 0) {
    $.gosub_cp_x_bankjob3 = $.cp1_x_bankjob3;
    $.gosub_cp_y_bankjob3 = $.cp1_y_bankjob3;
    $.gosub_cp_z_bankjob3 = $.cp1_z_bankjob3;
    $.gosub_cp_2nd_x_bankjob3 = $.cp2_x_bankjob3;
    $.gosub_cp_2nd_y_bankjob3 = $.cp2_y_bankjob3;
    $.gosub_cp_2nd_z_bankjob3 = $.cp2_z_bankjob3;
  }


  if ($.gosub_cpcounter_bankjob3 == 1) {
    $.gosub_cp_x_bankjob3 = $.cp2_x_bankjob3;
    $.gosub_cp_y_bankjob3 = $.cp2_y_bankjob3;
    $.gosub_cp_z_bankjob3 = $.cp2_z_bankjob3;
    $.gosub_cp_2nd_x_bankjob3 = $.cp3_x_bankjob3;
    $.gosub_cp_2nd_y_bankjob3 = $.cp3_y_bankjob3;
    $.gosub_cp_2nd_z_bankjob3 = $.cp3_z_bankjob3;
  }


  if ($.gosub_cpcounter_bankjob3 == 2) {
    $.gosub_cp_x_bankjob3 = $.cp3_x_bankjob3;
    $.gosub_cp_y_bankjob3 = $.cp3_y_bankjob3;
    $.gosub_cp_z_bankjob3 = $.cp3_z_bankjob3;
    $.gosub_cp_2nd_x_bankjob3 = $.cp4_x_bankjob3;
    $.gosub_cp_2nd_y_bankjob3 = $.cp4_y_bankjob3;
    $.gosub_cp_2nd_z_bankjob3 = $.cp4_z_bankjob3;
  }


  if ($.gosub_cpcounter_bankjob3 == 3) {
    $.gosub_cp_x_bankjob3 = $.cp4_x_bankjob3;
    $.gosub_cp_y_bankjob3 = $.cp4_y_bankjob3;
    $.gosub_cp_z_bankjob3 = $.cp4_z_bankjob3;
    $.gosub_cp_2nd_x_bankjob3 = $.cp5_x_bankjob3;
    $.gosub_cp_2nd_y_bankjob3 = $.cp5_y_bankjob3;
    $.gosub_cp_2nd_z_bankjob3 = $.cp5_z_bankjob3;
  }


  if ($.gosub_cpcounter_bankjob3 == 4) {
    $.gosub_cp_x_bankjob3 = $.cp5_x_bankjob3;
    $.gosub_cp_y_bankjob3 = $.cp5_y_bankjob3;
    $.gosub_cp_z_bankjob3 = $.cp5_z_bankjob3;
    $.gosub_cp_2nd_x_bankjob3 = $.cp6_x_bankjob3;
    $.gosub_cp_2nd_y_bankjob3 = $.cp6_y_bankjob3;
    $.gosub_cp_2nd_z_bankjob3 = $.cp6_z_bankjob3;
  }


  if ($.gosub_cpcounter_bankjob3 == 5) {
    $.gosub_cp_x_bankjob3 = $.cp6_x_bankjob3;
    $.gosub_cp_y_bankjob3 = $.cp6_y_bankjob3;
    $.gosub_cp_z_bankjob3 = $.cp6_z_bankjob3;
    $.gosub_cp_2nd_x_bankjob3 = $.cp7_x_bankjob3;
    $.gosub_cp_2nd_y_bankjob3 = $.cp7_y_bankjob3;
    $.gosub_cp_2nd_z_bankjob3 = $.cp7_z_bankjob3;
  }


  if ($.gosub_cpcounter_bankjob3 == 6) {
    $.gosub_cp_x_bankjob3 = $.cp7_x_bankjob3;
    $.gosub_cp_y_bankjob3 = $.cp7_y_bankjob3;
    $.gosub_cp_z_bankjob3 = $.cp7_z_bankjob3;
    $.gosub_cp_2nd_x_bankjob3 = $.cp8_x_bankjob3;
    $.gosub_cp_2nd_y_bankjob3 = $.cp8_y_bankjob3;
    $.gosub_cp_2nd_z_bankjob3 = $.cp8_z_bankjob3;
  }


  if ($.gosub_cpcounter_bankjob3 == 7) {
    $.gosub_cp_x_bankjob3 = $.cp8_x_bankjob3;
    $.gosub_cp_y_bankjob3 = $.cp8_y_bankjob3;
    $.gosub_cp_z_bankjob3 = $.cp8_z_bankjob3;
    $.gosub_cp_2nd_x_bankjob3 = $.cp9_x_bankjob3;
    $.gosub_cp_2nd_y_bankjob3 = $.cp9_y_bankjob3;
    $.gosub_cp_2nd_z_bankjob3 = $.cp9_z_bankjob3;
  }


  if ($.gosub_cpcounter_bankjob3 == 8) {
    $.gosub_cp_x_bankjob3 = $.cp9_x_bankjob3;
    $.gosub_cp_y_bankjob3 = $.cp9_y_bankjob3;
    $.gosub_cp_z_bankjob3 = $.cp9_z_bankjob3;
    $.gosub_cp_2nd_x_bankjob3 = $.cp10_x_bankjob3;
    $.gosub_cp_2nd_y_bankjob3 = $.cp10_y_bankjob3;
    $.gosub_cp_2nd_z_bankjob3 = $.cp10_z_bankjob3;
  }


  if ($.gosub_cpcounter_bankjob3 == 9) {
    $.gosub_cp_x_bankjob3 = $.cp10_x_bankjob3;
    $.gosub_cp_y_bankjob3 = $.cp10_y_bankjob3;
    $.gosub_cp_z_bankjob3 = $.cp10_z_bankjob3;
    $.gosub_cp_2nd_x_bankjob3 = $.cp11_x_bankjob3;
    $.gosub_cp_2nd_y_bankjob3 = $.cp11_y_bankjob3;
    $.gosub_cp_2nd_z_bankjob3 = $.cp11_z_bankjob3;
  }


  if ($.gosub_cpcounter_bankjob3 == 10) {
    $.gosub_cp_x_bankjob3 = $.cp11_x_bankjob3;
    $.gosub_cp_y_bankjob3 = $.cp11_y_bankjob3;
    $.gosub_cp_z_bankjob3 = $.cp11_z_bankjob3;
    $.gosub_cp_2nd_x_bankjob3 = $.cp12_x_bankjob3;
    $.gosub_cp_2nd_y_bankjob3 = $.cp12_y_bankjob3;
    $.gosub_cp_2nd_z_bankjob3 = $.cp12_z_bankjob3;
  }


  if ($.gosub_cpcounter_bankjob3 == 11) {
    $.gosub_cp_x_bankjob3 = $.cp12_x_bankjob3;
    $.gosub_cp_y_bankjob3 = $.cp12_y_bankjob3;
    $.gosub_cp_z_bankjob3 = $.cp12_z_bankjob3;
    $.gosub_cp_2nd_x_bankjob3 = $.cp13_x_bankjob3;
    $.gosub_cp_2nd_y_bankjob3 = $.cp13_y_bankjob3;
    $.gosub_cp_2nd_z_bankjob3 = $.cp13_z_bankjob3;
  }


  if ($.gosub_cpcounter_bankjob3 == 12) {
    $.gosub_cp_x_bankjob3 = $.cp13_x_bankjob3;
    $.gosub_cp_y_bankjob3 = $.cp13_y_bankjob3;
    $.gosub_cp_z_bankjob3 = $.cp13_z_bankjob3;
    $.gosub_cp_2nd_x_bankjob3 = $.cp14_x_bankjob3;
    $.gosub_cp_2nd_y_bankjob3 = $.cp14_y_bankjob3;
    $.gosub_cp_2nd_z_bankjob3 = $.cp14_z_bankjob3;
  }


  if ($.gosub_cpcounter_bankjob3 == 13) {
    $.gosub_cp_x_bankjob3 = $.cp14_x_bankjob3;
    $.gosub_cp_y_bankjob3 = $.cp14_y_bankjob3;
    $.gosub_cp_z_bankjob3 = $.cp14_z_bankjob3;
    $.gosub_cp_2nd_x_bankjob3 = $.cp15_x_bankjob3;
    $.gosub_cp_2nd_y_bankjob3 = $.cp15_y_bankjob3;
    $.gosub_cp_2nd_z_bankjob3 = $.cp15_z_bankjob3;
  }


  if ($.gosub_cpcounter_bankjob3 == 14) {
    $.gosub_cp_x_bankjob3 = $.cp15_x_bankjob3;
    $.gosub_cp_y_bankjob3 = $.cp15_y_bankjob3;
    $.gosub_cp_z_bankjob3 = $.cp15_z_bankjob3;
    $.gosub_cp_2nd_x_bankjob3 = $.cp16_x_bankjob3;
    $.gosub_cp_2nd_y_bankjob3 = $.cp16_y_bankjob3;
    $.gosub_cp_2nd_z_bankjob3 = $.cp16_z_bankjob3;
  }


  if ($.gosub_cpcounter_bankjob3 == 15) {
    $.gosub_cp_x_bankjob3 = $.cp16_x_bankjob3;
    $.gosub_cp_y_bankjob3 = $.cp16_y_bankjob3;
    $.gosub_cp_z_bankjob3 = $.cp16_z_bankjob3;
    $.gosub_cp_2nd_x_bankjob3 = $.cp17_x_bankjob3;
    $.gosub_cp_2nd_y_bankjob3 = $.cp17_y_bankjob3;
    $.gosub_cp_2nd_z_bankjob3 = $.cp17_z_bankjob3;
  }


  if ($.gosub_cpcounter_bankjob3 == 16) {
    $.gosub_cp_x_bankjob3 = $.cp17_x_bankjob3;
    $.gosub_cp_y_bankjob3 = $.cp17_y_bankjob3;
    $.gosub_cp_z_bankjob3 = $.cp17_z_bankjob3;
    $.gosub_cp_2nd_x_bankjob3 = $.cp18_x_bankjob3;
    $.gosub_cp_2nd_y_bankjob3 = $.cp18_y_bankjob3;
    $.gosub_cp_2nd_z_bankjob3 = $.cp18_z_bankjob3;
  }


  if ($.gosub_cpcounter_bankjob3 == 17) {
    $.gosub_cp_x_bankjob3 = $.cp18_x_bankjob3;
    $.gosub_cp_y_bankjob3 = $.cp18_y_bankjob3;
    $.gosub_cp_z_bankjob3 = $.cp18_z_bankjob3;
    $.gosub_cp_2nd_x_bankjob3 = $.cp18_x_bankjob3;
    $.gosub_cp_2nd_y_bankjob3 = $.cp18_y_bankjob3;
    $.gosub_cp_2nd_z_bankjob3 = $.cp18_z_bankjob3;
  }
}


// car stuck checks


async function car_stuck_checks_bankjob3() {


  $.car_health_bankjob3 = $.gosub_race_car_bankjob3.getHealth();


  if ($.car_health_bankjob3 < 500) {
    $.gosub_race_car_bankjob3.setHealth(1000);
  }


  if ($.player1_cpcounter_bankjob3 == $.gosub_cpcounter_bankjob3) {
    const _res62 = $.gosub_race_car_bankjob3.getCoordinates();
$.car_x_bankjob3 = _res62.x;
$.car_y_bankjob3 = _res62.y;
$.car_z_bankjob3 = _res62.z;
    $.difference_x_float_d_bankjob3 = $.car_x_bankjob3 - $.player1_cp_x_bankjob3;
    $.difference_y_float_d_bankjob3 = $.car_y_bankjob3 - $.player1_cp_y_bankjob3;
    $.difference_x_float_d_bankjob3 = $.difference_x_float_d_bankjob3 * $.difference_x_float_d_bankjob3;
    $.difference_y_float_d_bankjob3 = $.difference_y_float_d_bankjob3 * $.difference_y_float_d_bankjob3;
    $.sum_difference_d_xy_bankjob3 = $.difference_x_float_d_bankjob3 + $.difference_y_float_d_bankjob3;
    $.racer1_distance_from_cp_bankjob3 = Math.Sqrt($.sum_difference_d_xy_bankjob3);
    const _res63 = $.player1.getCoordinates();
$.car_x_bankjob3 = _res63.x;
$.car_y_bankjob3 = _res63.y;
$.car_z_bankjob3 = _res63.z;
    $.difference_x_float_d_bankjob3 = $.car_x_bankjob3 - $.player1_cp_x_bankjob3;
    $.difference_y_float_d_bankjob3 = $.car_y_bankjob3 - $.player1_cp_y_bankjob3;
    $.difference_x_float_d_bankjob3 = $.difference_x_float_d_bankjob3 * $.difference_x_float_d_bankjob3;
    $.difference_y_float_d_bankjob3 = $.difference_y_float_d_bankjob3 * $.difference_y_float_d_bankjob3;
    $.sum_difference_d_xy_bankjob3 = $.difference_x_float_d_bankjob3 + $.difference_y_float_d_bankjob3;
    $.player11_distance_from_cp_bankjob3 = Math.Sqrt($.sum_difference_d_xy_bankjob3);
    if ($.player11_distance_from_cp_bankjob3 > $.racer1_distance_from_cp_bankjob3) {
      ++$.position_bankjob3;
    }
  }
  else {
    if ($.player1_cpcounter_bankjob3 < $.gosub_cpcounter_bankjob3) {
      ++$.position_bankjob3;
    }
  }


  if (StuckCarCheck.IsCarStuck($.gosub_race_car_bankjob3)) {
    if (!($.gosub_race_car_bankjob3.isOnScreen())) {
      if (!($.player1.locateAnyMeansCar3D($.gosub_race_car_bankjob3, 30.0, 30.0, 30.0, false /* FALSE */))) {
        const _res64 = $.gosub_race_car_bankjob3.getCoordinates();
$.car_x_bankjob3 = _res64.x;
$.car_y_bankjob3 = _res64.y;
$.car_z_bankjob3 = _res64.z;
        const _res65 = Path.GetClosestCarNode($.car_x_bankjob3, $.car_y_bankjob3, $.car_z_bankjob3);
$.car_x_bankjob3 = _res65.nodeX;
$.car_y_bankjob3 = _res65.nodeY;
$.car_z_bankjob3 = _res65.nodeZ;
        if (!(World.IsPointObscuredByAMissionEntity($.car_x_bankjob3, $.car_y_bankjob3, $.car_z_bankjob3, 4.0, 4.0, 3.0))) {
          if (!(Camera.IsPointOnScreen($.car_x_bankjob3, $.car_y_bankjob3, $.car_z_bankjob3, 4.0))) {
            $.gosub_race_car_bankjob3.setCoordinates($.car_x_bankjob3, $.car_y_bankjob3, $.car_z_bankjob3);
            $.gosub_race_car_bankjob3.turnToFaceCoord($.racer1_cp_x_bankjob3, $.racer1_cp_y_bankjob3);
            if ($.racer1_locate_size_bankjob3 == 7.0) {
              $.gosub_race_car_bankjob3.setDrivingStyle(2);
              $.gosub_race_car_bankjob3.setCruiseSpeed(45.0);
              $.gosub_race_car_bankjob3.gotoCoordinates($.gosub_cp_x_bankjob3, $.gosub_cp_y_bankjob3, $.gosub_cp_z_bankjob3);
            }
            else {
              $.gosub_race_car_bankjob3.setDrivingStyle(2);
              $.gosub_race_car_bankjob3.setCruiseSpeed(45.0);
              $.gosub_race_car_bankjob3.gotoCoordinatesAccurate($.gosub_cp_x_bankjob3, $.gosub_cp_y_bankjob3, $.gosub_cp_z_bankjob3);
            }


          }


        }
        else {
          const _res66 = Path.GetNthClosestCarNode($.car_x_bankjob3, $.car_y_bankjob3, $.car_z_bankjob3, 2);
$.car_x_bankjob3 = _res66.x;
$.car_y_bankjob3 = _res66.y;
$.car_z_bankjob3 = _res66.z;
          if (!(World.IsPointObscuredByAMissionEntity($.car_x_bankjob3, $.car_y_bankjob3, $.car_z_bankjob3, 4.0, 4.0, 3.0))) {
            if (!(Camera.IsPointOnScreen($.car_x_bankjob3, $.car_y_bankjob3, $.car_z_bankjob3, 4.0))) {
              $.gosub_race_car_bankjob3.setCoordinates($.car_x_bankjob3, $.car_y_bankjob3, $.car_z_bankjob3);
              $.gosub_race_car_bankjob3.turnToFaceCoord($.racer1_cp_x_bankjob3, $.racer1_cp_y_bankjob3);
              if ($.racer1_locate_size_bankjob3 == 7.0) {
                $.gosub_race_car_bankjob3.setDrivingStyle(2);
                $.gosub_race_car_bankjob3.setCruiseSpeed(45.0);
                $.gosub_race_car_bankjob3.gotoCoordinates($.gosub_cp_x_bankjob3, $.gosub_cp_y_bankjob3, $.gosub_cp_z_bankjob3);
              }
              else {
                $.gosub_race_car_bankjob3.setDrivingStyle(2);
                $.gosub_race_car_bankjob3.setCruiseSpeed(45.0);
                $.gosub_race_car_bankjob3.gotoCoordinatesAccurate($.gosub_cp_x_bankjob3, $.gosub_cp_y_bankjob3, $.gosub_cp_z_bankjob3);
              }


            }


          }


        }


      }


    }


  }

  // Checks to see if the car has turned upside down


  if ($.gosub_race_car_bankjob3.isUpsidedown()) {
    if (!($.gosub_race_car_bankjob3.isOnScreen())) {
      if (!($.player1.locateAnyMeansCar3D($.gosub_race_car_bankjob3, 30.0, 30.0, 30.0, false /* FALSE */))) {
        const _res67 = $.gosub_race_car_bankjob3.getCoordinates();
$.car_x_bankjob3 = _res67.x;
$.car_y_bankjob3 = _res67.y;
$.car_z_bankjob3 = _res67.z;
        const _res68 = Path.GetClosestCarNode($.car_x_bankjob3, $.car_y_bankjob3, $.car_z_bankjob3);
$.car_x_bankjob3 = _res68.nodeX;
$.car_y_bankjob3 = _res68.nodeY;
$.car_z_bankjob3 = _res68.nodeZ;
        World.ClearArea($.car_x_bankjob3, $.car_y_bankjob3, $.car_z_bankjob3, 4.0, false /* FALSE */);
        if (!(World.IsPointObscuredByAMissionEntity($.car_x_bankjob3, $.car_y_bankjob3, $.car_z_bankjob3, 4.0, 4.0, 3.0))) {
          if (!(Camera.IsPointOnScreen($.car_x_bankjob3, $.car_y_bankjob3, $.car_z_bankjob3, 4.0))) {
            $.gosub_race_car_bankjob3.setCoordinates($.car_x_bankjob3, $.car_y_bankjob3, $.car_z_bankjob3);
            $.gosub_race_car_bankjob3.turnToFaceCoord($.racer1_cp_x_bankjob3, $.racer1_cp_y_bankjob3);
            if ($.racer1_locate_size_bankjob3 == 7.0) {
              $.gosub_race_car_bankjob3.setDrivingStyle(2);
              $.gosub_race_car_bankjob3.setCruiseSpeed(45.0);
              $.gosub_race_car_bankjob3.gotoCoordinates($.gosub_cp_x_bankjob3, $.gosub_cp_y_bankjob3, $.gosub_cp_z_bankjob3);
            }
            else {
              $.gosub_race_car_bankjob3.setDrivingStyle(2);
              $.gosub_race_car_bankjob3.setCruiseSpeed(45.0);
              $.gosub_race_car_bankjob3.gotoCoordinatesAccurate($.gosub_cp_x_bankjob3, $.gosub_cp_y_bankjob3, $.gosub_cp_z_bankjob3);
            }


          }


        }
        else {
          const _res69 = Path.GetNthClosestCarNode($.car_x_bankjob3, $.car_y_bankjob3, $.car_z_bankjob3, 2);
$.car_x_bankjob3 = _res69.x;
$.car_y_bankjob3 = _res69.y;
$.car_z_bankjob3 = _res69.z;
          if (!(World.IsPointObscuredByAMissionEntity($.car_x_bankjob3, $.car_y_bankjob3, $.car_z_bankjob3, 4.0, 4.0, 3.0))) {
            if (!(Camera.IsPointOnScreen($.car_x_bankjob3, $.car_y_bankjob3, $.car_z_bankjob3, 4.0))) {
              $.gosub_race_car_bankjob3.setCoordinates($.car_x_bankjob3, $.car_y_bankjob3, $.car_z_bankjob3);
              $.gosub_race_car_bankjob3.turnToFaceCoord($.racer1_cp_x_bankjob3, $.racer1_cp_y_bankjob3);
              if ($.racer1_locate_size_bankjob3 == 7.0) {
                $.gosub_race_car_bankjob3.setDrivingStyle(2);
                $.gosub_race_car_bankjob3.setCruiseSpeed(45.0);
                $.gosub_race_car_bankjob3.gotoCoordinates($.gosub_cp_x_bankjob3, $.gosub_cp_y_bankjob3, $.gosub_cp_z_bankjob3);
              }
              else {
                $.gosub_race_car_bankjob3.setDrivingStyle(2);
                $.gosub_race_car_bankjob3.setCruiseSpeed(45.0);
                $.gosub_race_car_bankjob3.gotoCoordinatesAccurate($.gosub_cp_x_bankjob3, $.gosub_cp_y_bankjob3, $.gosub_cp_z_bankjob3);
              }


            }


          }


        }


      }


    }


  }


  $.temp_int_bank3 = $.player1_cpcounter_bankjob3 - 3;


  if ($.gosub_cpcounter_bankjob3 < $.temp_int_bank3) {
    if (!($.gosub_race_car_bankjob3.isOnScreen())) {
      if (!(World.IsPointObscuredByAMissionEntity($.racer1_cp_x_bankjob3, $.racer1_cp_y_bankjob3, $.racer1_cp_z_bankjob3, 4.0, 4.0, 3.0))) {
        if (!(Camera.IsPointOnScreen($.racer1_cp_x_bankjob3, $.racer1_cp_y_bankjob3, $.racer1_cp_z_bankjob3, 4.0))) {
          $.gosub_race_car_bankjob3.setCoordinates($.racer1_cp_x_bankjob3, $.racer1_cp_y_bankjob3, $.racer1_cp_z_bankjob3);
          $.gosub_race_car_bankjob3.turnToFaceCoord($.player1_cp_x_bankjob3, $.player1_cp_y_bankjob3);
          $.gosub_race_car_bankjob3.setForwardSpeed(30.0);
        }


      }


    }


  }


  $.temp_int_bank3 = $.player1_cpcounter_bankjob3 + 2;
  if ($.gosub_cpcounter_bankjob3 > $.temp_int_bank3) {
    $.gosub_race_car_bankjob3.setCruiseSpeed(35.0);
  }
  else {
    $.gosub_race_car_bankjob3.setCruiseSpeed(45.0);
  }
}

export async function bankj3() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // ************************************ Bankjob Mission Three ******************************
  // *********************************** Race The Getaway Driver *****************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************


  // SCRIPT_NAME bankjo3

  // Mission start stuff


  await mission_start_bankjob3();  // SCM GOSUB mission_start_bankjob3


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_bankjob3_failed();  // SCM GOSUB mission_bankjob3_failed
  }


  await mission_cleanup_bankjob3();  // SCM GOSUB mission_cleanup_bankjob3


  // MissionBoundary


  // Variables for mission

  // ******************************** Variables for mission **********************************

  // Racer 1


  // VAR_FLOAT racer1_headings_bankjob3
  // VAR_FLOAT difference_x_float_d_bankjob3 difference_y_float_d_bankjob3 sum_difference_d_xy_bankjob3
  // VAR_FLOAT racer1_locate_size_bankjob3
  // VAR_FLOAT racer1_distance_from_cp_bankjob3
  // VAR_INT racer1_bankjob3


  // VAR_INT racer1_cpcounter_bankjob3
  // VAR_INT blip_racer1_bankjob3
  // VAR_FLOAT racer1_stuck_x_bankjob3
  // VAR_FLOAT racer1_stuck_y_bankjob3
  // VAR_FLOAT racer1_stuck_z_bankjob3
  // VAR_FLOAT racer1_cp_x_bankjob3
  // VAR_FLOAT racer1_cp_y_bankjob3
  // VAR_FLOAT racer1_cp_z_bankjob3

  // Driver1 drives racer1


  // VAR_INT driver_bankjob3

  // Player stuff


  // VAR_FLOAT player11_distance_from_cp_bankjob3
  // VAR_FLOAT player1_start_x_bankjob3
  // VAR_FLOAT player1_start_y_bankjob3
  // VAR_FLOAT player1_start_z_bankjob3
  // VAR_FLOAT player1_cp_x_bankjob3
  // VAR_FLOAT player1_cp_y_bankjob3
  // VAR_FLOAT player1_cp_z_bankjob3
  // VAR_INT player1_cpcounter_bankjob3


  // VAR_FLOAT blip_2nd_x_bankjob3
  // VAR_FLOAT blip_2nd_y_bankjob3
  // VAR_FLOAT blip_2nd_z_bankjob3


  // VAR_FLOAT car_x_bankjob3
  // VAR_FLOAT car_y_bankjob3
  // VAR_FLOAT car_z_bankjob3

  // Check Point stuff


  // VAR_INT total_checkpoints_bankjob3
  // VAR_FLOAT cp1_x_bankjob3 cp1_y_bankjob3 cp1_z_bankjob3
  // VAR_FLOAT cp2_x_bankjob3 cp2_y_bankjob3 cp2_z_bankjob3
  // VAR_FLOAT cp3_x_bankjob3 cp3_y_bankjob3 cp3_z_bankjob3
  // VAR_FLOAT cp4_x_bankjob3 cp4_y_bankjob3 cp4_z_bankjob3
  // VAR_FLOAT cp5_x_bankjob3 cp5_y_bankjob3 cp5_z_bankjob3
  // VAR_FLOAT cp6_x_bankjob3 cp6_y_bankjob3 cp6_z_bankjob3
  // VAR_FLOAT cp7_x_bankjob3 cp7_y_bankjob3 cp7_z_bankjob3
  // VAR_FLOAT cp8_x_bankjob3 cp8_y_bankjob3 cp8_z_bankjob3
  // VAR_FLOAT cp9_x_bankjob3 cp9_y_bankjob3 cp9_z_bankjob3
  // VAR_FLOAT cp10_x_bankjob3 cp10_y_bankjob3 cp10_z_bankjob3
  // VAR_FLOAT cp11_x_bankjob3 cp11_y_bankjob3 cp11_z_bankjob3
  // VAR_FLOAT cp12_x_bankjob3 cp12_y_bankjob3 cp12_z_bankjob3
  // VAR_FLOAT cp13_x_bankjob3 cp13_y_bankjob3 cp13_z_bankjob3
  // VAR_FLOAT cp14_x_bankjob3 cp14_y_bankjob3 cp14_z_bankjob3
  // VAR_FLOAT cp15_x_bankjob3 cp15_y_bankjob3 cp15_z_bankjob3
  // VAR_FLOAT cp16_x_bankjob3 cp16_y_bankjob3 cp16_z_bankjob3
  // VAR_FLOAT cp17_x_bankjob3 cp17_y_bankjob3 cp17_z_bankjob3
  // VAR_FLOAT cp18_x_bankjob3 cp18_y_bankjob3 cp18_z_bankjob3
  // VAR_FLOAT gosub_cp_x_bankjob3 gosub_cp_y_bankjob3 gosub_cp_z_bankjob3 gosub_cp_2nd_x_bankjob3 gosub_cp_2nd_y_bankjob3 gosub_cp_2nd_z_bankjob3


  // VAR_INT blip_chase_bankjob3
  // VAR_INT second_blip_chase_bankjob3



  // VAR_INT car_health_bankjob3
  // VAR_INT gosub_race_car_bankjob3



  // VAR_INT gosub_cpcounter_bankjob3
  // VAR_INT position_bankjob3

  // timer stuff


  // VAR_INT race_timer_bankjob3


  // VAR_INT flag_had_cops_message_bankjob3


  // VAR_INT flag_load_audio_bankjob3


  // VAR_INT flag_car_rev_cleared_bankjob3


  // VAR_INT player_car_bank3


  // VAR_INT flag_had_car_message_bank3


  // VAR_INT player_race_car_bank3

  // Timer Stuff


  // VAR_INT race_timer_mins_bankjob3


  // VAR_INT race_timer_seconds2_bankjob3


  // VAR_INT race_timer_seconds_bankjob3


  // VAR_INT flag_car_line_dist_bankjob3


  // VAR_INT temp_int_bank3

  // ****************************************Mission Start************************************


}
