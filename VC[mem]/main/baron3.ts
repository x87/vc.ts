// Generated from main/baron3.sc

import { $ } from "../utils/vars.mts";

// *******************************************************************************************
// *******************************************************************************************
// *************************************baron mission 3***************************************
// **********************************STEAL FASTEST BOAT EVER!*********************************
// *******************************************************************************************
// *******************************************************************************************
// *******************************************************************************************

async function body() {


  Stat.RegisterMissionGiven();
  ONMISSION = 1;
  // SCRIPT_NAME baron3
  await asyncWait(0);


  Text.LoadMissionText("BARON3");
  Shortcut.SetDropoffPointForMission(-288.2, -487.5, 9.8, 275.0);


  $.boat_guard3_is_looking1 = 0;
  $.boat_guard3_is_looking2 = 0;
  $.boat_guard4_is_looking1 = 0;
  $.boat_guard4_is_looking2 = 0;
  $.boat_guard5_is_looking1 = 0;
  $.boat_guard5_is_looking2 = 0;
  $.boat_guard5_chat1 = 0;
  $.boat_guard5_chat2 = 0;
  boat_button_pressed = 0;
  $.raise_the_alarm = 0;
  $.boat_guard1_heading = 270.0;
  $.boat_guard2_heading = 270.0;
  $.played_show_boat_cut = 0;
  set_all_guards_ojectives = 0;
  player_spotted_by_mech1 = 0;


  Streaming.SetAreaVisible(0 /* VIS_MAIN_MAP */);


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSdiaz");
  Streaming.LoadSpecialModel(CUTOBJ01, "dshotgn");


  Streaming.LoadAllModelsNow();


  Streaming.LoadScene(-378.3, -591.9, 25.8);


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasModelLoaded(CUTOBJ01))) {
    await asyncWait(0);


  }


  Cutscene.LoadUncompressedAnim("CSplay");
  Cutscene.LoadUncompressedAnim("csdiaz");


  Cutscene.Load("cok_3");
  World.ClearArea(-378.6, -552.6, 25.5, 15.0, true /* TRUE */);
  World.ClearArea(-379.0, -564.6, 19.8, 15.0, true /* TRUE */);
  World.SetPedDensityMultiplier(0.0);
  Cutscene.SetOffset(-378.62, -552.676, 18.534);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_diaz = CutsceneObject.Create(SPECIAL02);
  $.cs_diaz.setAnim("csdiaz");


  $.cs_dshotgn = CutsceneObject.Create(CUTOBJ01);
  $.cs_dshotgn.attachToBone($.cs_diaz, 24 /* BONE_R_HAND */);


  World.ClearArea(-379.2, -536.4, 16.2, 0.5, true /* TRUE */);
  $.player1.setCoordinates(-379.2, -536.4, 16.2);
  $.player1.setHeading(0.0);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 2000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }

  //gun shot

  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-386.581, -614.139, 17.96, -386.794, -614.627, 18.155);
  }


  while ($.cs_time < 3599) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK3_A", 10000, 1); // Mission brief


  while ($.cs_time < 5985) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK3_B", 10000, 1); // Mission brief


  while ($.cs_time < 8050) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK3_C", 10000, 1); // Mission brief


  while ($.cs_time < 9520) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK3_D", 10000, 1); // Mission brief


  while ($.cs_time < 12144) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK3_E", 10000, 1); // Mission brief


  while ($.cs_time < 13827) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK3_F", 10000, 1); // Mission brief


  while ($.cs_time < 16253) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK3_G", 10000, 1); // Mission brief


  while ($.cs_time < 18599) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK3_H", 10000, 1); // Mission brief


  while ($.cs_time < 19835) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK3_I", 10000, 1); // Mission brief


  while ($.cs_time < 23576) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK3_J", 10000, 1); // Mission brief


  while ($.cs_time < 28644) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK3_K", 10000, 1); // Mission brief


  while ($.cs_time < 32972) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK3_L", 10000, 1); // Mission brief


  while ($.cs_time < 35549) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK3_M", 10000, 1); // Mission brief


  while ($.cs_time < 40624) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK3_O", 10000, 1); // Mission brief


  while ($.cs_time < 43796) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK3_P", 10000, 1); // Mission brief


  while ($.cs_time < 43866) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }

  //gun shot

  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-386.404, -614.265, 17.955, -386.639, -614.744, 18.148);
  }


  while ($.cs_time < 44500) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }

  //gun shot

  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-386.466, -614.374, 17.876, -386.739, -614.85, 18.024);
  }


  while ($.cs_time < 46018) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("COK3_N", 10000, 1); // Mission brief


  while ($.cs_time < 47040) {
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
  World.SetPedDensityMultiplier(1.0);


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);


  Streaming.SetAreaVisible(0 /* VIS_MAIN_MAP */);
  Streaming.LoadScene(-379.2, -536.4, 16.2);



  await asyncWait(500);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  Streaming.RequestModel(HMYAP);
  Streaming.RequestModel(squalo);
  Streaming.RequestModel(HMYST);
  Streaming.RequestModel(tec9);
  Streaming.RequestModel(hammer);
  Streaming.RequestModel(screwdriver);
  Streaming.RequestModel(speeder);
  Streaming.RequestModel(dinghy);
  Streaming.RequestModel(ruger);


  while (!(Streaming.HasModelLoaded(HMYAP)) || !(Streaming.HasModelLoaded(squalo)) || !(Streaming.HasModelLoaded(HMYST)) || !(Streaming.HasModelLoaded(tec9)) || !(Streaming.HasModelLoaded(hammer))) {
    await asyncWait(0);


  }


  while (!(Streaming.HasModelLoaded(screwdriver)) || !(Streaming.HasModelLoaded(speeder)) || !(Streaming.HasModelLoaded(dinghy)) || !(Streaming.HasModelLoaded(ruger))) {
    await asyncWait(0);


  }


  $.boat_closed.delete();

  // START OF MISSION


  $.sphere_cok3 = Sphere.Create(-665.4, -1484.7, 12.8, 1.0);


  $.fastest_boat = Car.Create(squalo, -597.6, -1507.7, 5.4);
  $.fastest_boat.setHeading(250.0);
  $.fastest_boat_blip = Blip.AddForCar($.fastest_boat);


  Text.PrintNow("COK3_8", 10000, 1); // Go to the boat yard at the dock and steal the fastest boat!


  while (!($.player1.locateAnyMeansCar2D($.fastest_boat, 120.0, 120.0, false /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.fastest_boat)) {
      Text.PrintNow("COK3_7", 5000, 1); // You destroyed the boat!
      // SCM GOTO → mission_baron3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_baron3_failed"); // fallback: would break linear control flow
    }


  }


  Zone.SetPedInfo("DOCKS", 1 /* DAY */, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("DOCKS", 0 /* NIGHT */, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);


  $.guard_boat1 = Car.Create(speeder, -582.4, -1493.6, 5.4);
  $.guard_boat1.setHeading(250.0);


  $.guard_boat2 = Car.Create(dinghy, -576.1, -1525.5, 5.4);
  $.guard_boat2.setHeading(250.0);


  boat_guard1 = Char.Create(7 /* PEDTYPE_GANG_CUBAN */, HMYST, -640.9, -1491.3, -100.0); //Guarding the front door
  boat_guard1.setHeading(270.0);
  boat_guard1.clearThreatSearch();
  boat_guard1.setThreatSearch(1 /* THREAT_PLAYER1 */);
  boat_guard1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  boat_guard1.giveWeapon(27 /* WEAPONTYPE_RUGER */, 500);
  boat_guard1.setStayInSamePlace(true /* TRUE */);


  boat_guard2 = Char.Create(7 /* PEDTYPE_GANG_CUBAN */, HMYST, -636.8, -1480.0, -100.0); //Guarding the front door
  boat_guard2.setHeading(270.0);
  boat_guard2.clearThreatSearch();
  boat_guard2.setThreatSearch(1 /* THREAT_PLAYER1 */);
  boat_guard2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  boat_guard2.giveWeapon(27 /* WEAPONTYPE_RUGER */, 500);
  boat_guard2.setStayInSamePlace(true /* TRUE */);


  boat_guard3 = Char.Create(7 /* PEDTYPE_GANG_CUBAN */, HMYST, -623.9, -1477.7, -100.0); //Starts close to the boat
  boat_guard3.setHeading(73.5);
  boat_guard3.clearThreatSearch();
  boat_guard3.setThreatSearch(1 /* THREAT_PLAYER1 */);
  boat_guard3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  boat_guard3.giveWeapon(27 /* WEAPONTYPE_RUGER */, 500);


  boat_guard4 = Char.Create(7 /* PEDTYPE_GANG_CUBAN */, HMYST, -682.8, -1484.8, -100.0); //Starts close to the entrance
  boat_guard4.setHeading(260.0);
  boat_guard4.clearThreatSearch();
  boat_guard4.setThreatSearch(1 /* THREAT_PLAYER1 */);
  boat_guard4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  boat_guard4.giveWeapon(27 /* WEAPONTYPE_RUGER */, 500);


  boat_guard5 = Char.Create(7 /* PEDTYPE_GANG_CUBAN */, HMYST, -671.7, -1459.1, -100.0);
  boat_guard5.setHeading(160.5);
  boat_guard5.clearThreatSearch();
  boat_guard5.setThreatSearch(1 /* THREAT_PLAYER1 */);
  boat_guard5.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  boat_guard5.giveWeapon(27 /* WEAPONTYPE_RUGER */, 500);


  boat_guard6 = Char.Create(7 /* PEDTYPE_GANG_CUBAN */, HMYST, -573.7, -1522.5, 6.9); //On jetty near boat
  boat_guard6.setHeading(70.0);
  boat_guard6.clearThreatSearch();
  boat_guard6.setThreatSearch(1 /* THREAT_PLAYER1 */);
  boat_guard6.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  boat_guard6.giveWeapon(27 /* WEAPONTYPE_RUGER */, 500);
  boat_guard6.setStayInSamePlace(true /* TRUE */);


  boat_guard7 = Char.Create(7 /* PEDTYPE_GANG_CUBAN */, HMYST, -586.9, -1496.2, 7.0); //On jetty opposite side
  boat_guard7.setHeading(76.0);
  boat_guard7.clearThreatSearch();
  boat_guard7.setThreatSearch(1 /* THREAT_PLAYER1 */);
  boat_guard7.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  boat_guard7.giveWeapon(27 /* WEAPONTYPE_RUGER */, 500);
  boat_guard7.setStayInSamePlace(true /* TRUE */);


  boat_mech1 = Char.Create(7 /* PEDTYPE_GANG_CUBAN */, HMYAP, -662.0, -1481.7, 13.0);
  boat_mech1.setHeading(6.0);
  boat_mech1.clearThreatSearch();
  boat_mech1.setThreatSearch(1 /* THREAT_PLAYER1 */);
  boat_mech1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  boat_mech1.giveWeapon(7 /* WEAPONTYPE_HAMMER */, 0);


  boat_mech2 = Char.Create(7 /* PEDTYPE_GANG_CUBAN */, HMYAP, -661.9, -1479.7, 12.5);
  boat_mech2.setHeading(200.0);
  boat_mech2.clearThreatSearch();
  boat_mech2.setThreatSearch(1 /* THREAT_PLAYER1 */);
  boat_mech2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  boat_mech2.giveWeapon(2 /* WEAPONTYPE_SCREWDRIVER */, 0);


  boat_mech3 = Char.Create(7 /* PEDTYPE_GANG_CUBAN */, HMYAP, -662.4, -1481.6, 13.0);
  boat_mech3.setHeading(280.0);
  boat_mech3.clearThreatSearch();
  boat_mech3.setThreatSearch(1 /* THREAT_PLAYER1 */);
  boat_mech3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  boat_mech3.giveWeapon(7 /* WEAPONTYPE_HAMMER */, 0);
  Game.SetCharsChatting(boat_mech3, boat_mech2, 999999);


  TIMERB = 0;
  TIMERA = 0;
}



async function steel_boat_loop() {
  // SCM GOTO → steel_boat_loop lowered to endless loop
  while (true) {


    await asyncWait(0);


    if (!(Car.IsDead($.fastest_boat))) {
      if ($.player1.isInCar($.fastest_boat)) {
        // SCM GOTO → get_boat_to_mansion (not lowered; manual jump required)
        throw new Error("unresolved GOTO get_boat_to_mansion"); // fallback: would break linear control flow
      }
    }


    if (!($.player1.isInAngledArea3D(-643.2, -1495.3, 12.0, -679.1, -1481.3, 18.0, -19.5, false /* FALSE */))) {
    }


    if (Car.IsDead($.fastest_boat)) {
      if ($.player1.isInAngledArea3D(-643.2, -1495.3, 12.0, -679.1, -1481.3, 18.0, -19.5, false /* FALSE */)) {
        $.sphere_cok3.remove();
        $.fastest_boat_blip.remove();
        while ($.player1.isInAngledArea3D(-643.2, -1495.3, 12.0, -679.1, -1481.3, 18.0, -19.5, false /* FALSE */)) {
          await asyncWait(0);


        }
        Text.PrintNow("COK3_7", 5000, 1); // You destroyed the boat!
        // SCM GOTO → mission_baron3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_baron3_failed"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("COK3_7", 5000, 1); // You destroyed the boat!
        // SCM GOTO → mission_baron3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_baron3_failed"); // fallback: would break linear control flow
      }
    }


    if (boat_button_pressed == 0) {
      await boat_cut_scenes();  // SCM GOSUB boat_cut_scenes
    }


    if (!(Char.IsDead(boat_mech1))) {
      if ($.player1.locateAnyMeansChar3D(boat_mech1, 20.0, 20.0, 6.0, false /* FALSE */) && boat_mech1.hasSpottedPlayer($.player1)) {
        boat_mech1.setObjKillPlayerOnFoot($.player1);
        player_spotted_by_mech1 = 1;
      }
      if (!(boat_mech1.isHealthGreater(90))) {
        boat_mech1.setObjKillPlayerOnFoot($.player1);
        player_spotted_by_mech1 = 1;
      }
    }


    if (!(Char.IsDead(boat_mech2))) {
      if ($.player1.locateAnyMeansChar3D(boat_mech2, 20.0, 20.0, 6.0, false /* FALSE */) && boat_mech2.hasSpottedPlayer($.player1)) {
        boat_mech2.setObjKillPlayerOnFoot($.player1);
        player_spotted_by_mech1 = 1;
      }
      if (!(boat_mech2.isHealthGreater(90))) {
        boat_mech2.setObjKillPlayerOnFoot($.player1);
        player_spotted_by_mech1 = 1;
      }
    }


    if (!(Char.IsDead(boat_mech3))) {
      if ($.player1.locateAnyMeansChar3D(boat_mech3, 20.0, 20.0, 6.0, false /* FALSE */) && boat_mech3.hasSpottedPlayer($.player1)) {
        boat_mech3.setObjKillPlayerOnFoot($.player1);
        player_spotted_by_mech1 = 1;
      }
      if (!(boat_mech3.isHealthGreater(90))) {
        boat_mech3.setObjKillPlayerOnFoot($.player1);
        player_spotted_by_mech1 = 1;
      }
    }


    if (player_spotted_by_mech1 == 1) {
      if (!(Char.IsDead(boat_mech1))) {
        boat_mech1.setObjKillPlayerOnFoot($.player1);
      }
      if (!(Char.IsDead(boat_mech2))) {
        boat_mech2.setObjKillPlayerOnFoot($.player1);
      }
      if (!(Char.IsDead(boat_mech3))) {
        boat_mech3.setObjKillPlayerOnFoot($.player1);
      }
      player_spotted_by_mech1 = 2;
    }


    if (!(Char.IsDead(boat_guard1))) {
      if ($.raise_the_alarm == 0) {
        if ($.player1.locateAnyMeansChar3D(boat_guard1, 20.0, 20.0, 6.0, false /* FALSE */) && boat_guard1.hasSpottedPlayer($.player1)) {
          $.raise_the_alarm = 1;
        }
        if (!(boat_guard1.isHealthGreater(90))) {
          $.raise_the_alarm = 1;
        }
        if (TIMERB > 3000 && TIMERB < 6000) {
          if (!($.boat_guard1_heading == 160.0)) {
            //GET_CHAR_HEADING boat_guard1 boat_guard1_Heading
            $.boat_guard1_heading = $.boat_guard1_heading - 5.0;
            boat_guard1.setHeading($.boat_guard1_heading);
          }
        }
        if (TIMERB > 6000 && TIMERB < 9000) {
          if (!($.boat_guard1_heading == 270.0)) {
            //GET_CHAR_HEADING boat_guard1 boat_guard1_Heading
            $.boat_guard1_heading = $.boat_guard1_heading + 5.0;
            boat_guard1.setHeading($.boat_guard1_heading);
          }
        }
        if (TIMERB > 9000 && TIMERB < 12000) {
          if (!($.boat_guard1_heading == 340.0)) {
            //GET_CHAR_HEADING boat_guard1 boat_guard1_Heading
            $.boat_guard1_heading = $.boat_guard1_heading + 5.0;
            boat_guard1.setHeading($.boat_guard1_heading);
          }
        }
        if (TIMERB > 12000 && TIMERB < 15000) {
          if (!($.boat_guard1_heading == 270.0)) {
            //GET_CHAR_HEADING boat_guard1 boat_guard1_Heading
            $.boat_guard1_heading = $.boat_guard1_heading - 5.0;
            boat_guard1.setHeading($.boat_guard1_heading);
          }
        }
        if (TIMERB > 15000) {
          TIMERB = 0;
        }


      }
      const _res89 = boat_guard1.getCoordinates();
$.boat_guard1x = _res89.x;
$.boat_guard1y = _res89.y;
$.boat_guard1z = _res89.z;
      $.this_guard = boat_guard1;
      await check_for_dead_guards();  // SCM GOSUB check_for_dead_guards


    }


    if (!(Char.IsDead(boat_guard2))) {
      if ($.raise_the_alarm == 0) {
        if ($.player1.locateAnyMeansChar3D(boat_guard2, 20.0, 20.0, 6.0, false /* FALSE */) && boat_guard2.hasSpottedPlayer($.player1)) {
          $.raise_the_alarm = 1;
        }
        if (!(boat_guard2.isHealthGreater(90))) {
          $.raise_the_alarm = 1;
        }
        if (TIMERA > 4000 && TIMERA < 7000) {
          if (!($.boat_guard2_heading == 160.0)) {
            //GET_CHAR_HEADING boat_guard2 boat_guard2_Heading
            $.boat_guard2_heading = $.boat_guard2_heading - 5.0;
            boat_guard2.setHeading($.boat_guard2_heading);
          }
        }
        if (TIMERA > 7000 && TIMERA < 10000) {
          if (!($.boat_guard2_heading == 270.0)) {
            //GET_CHAR_HEADING boat_guard2 boat_guard2_Heading
            $.boat_guard2_heading = $.boat_guard2_heading + 5.0;
            boat_guard2.setHeading($.boat_guard2_heading);
          }
        }
        if (TIMERA > 10000 && TIMERA < 13000) {
          if (!($.boat_guard2_heading == 340.0)) {
            //GET_CHAR_HEADING boat_guard2 boat_guard2_Heading
            $.boat_guard2_heading = $.boat_guard2_heading + 5.0;
            boat_guard2.setHeading($.boat_guard2_heading);
          }
        }
        if (TIMERA > 13000 && TIMERA < 16000) {
          if (!($.boat_guard2_heading == 270.0)) {
            //GET_CHAR_HEADING boat_guard2 boat_guard2_Heading
            $.boat_guard2_heading = $.boat_guard2_heading - 5.0;
            boat_guard2.setHeading($.boat_guard2_heading);
          }
        }
        if (TIMERA > 16000) {
          TIMERA = 0;
        }


      }
      const _res90 = boat_guard2.getCoordinates();
$.boat_guard2x = _res90.x;
$.boat_guard2y = _res90.y;
$.boat_guard2z = _res90.z;
      $.this_guard = boat_guard2;
      await check_for_dead_guards();  // SCM GOSUB check_for_dead_guards


    }


    if (!(Char.IsDead(boat_guard3))) {
      if ($.raise_the_alarm == 0) {
        if ($.player1.locateAnyMeansChar3D(boat_guard3, 20.0, 20.0, 6.0, false /* FALSE */) && boat_guard3.hasSpottedPlayer($.player1)) {
          $.raise_the_alarm = 1;
        }
        if (!(boat_guard3.isHealthGreater(90))) {
          $.raise_the_alarm = 1;
        }
        if (boat_guard3.locateOnFoot3D(-623.9, -1477.7, 12.0, 1.0, 1.0, 4.0, false /* FALSE */)) {
          if ($.boat_guard3_is_looking1 == 0) {
            boat_guard3.setWaitState(3 /* WAITSTATE_CROSS_ROAD_LOOK */, 5000);
            $.boat_guard3_timer = 0;
            $.boat_guard3_is_looking1 = 1;
          }
          if ($.boat_guard3_is_looking1 == 1) {
            $.boat_guard3_timer = $.boat_guard3_timer + 1;
            if ($.boat_guard3_timer > 90) {
              boat_guard3.setObjGotoCoordOnFoot(-671.7, -1459.1);
              boat_guard3.setUsePednodeSeek(false /* FALSE */);
              $.boat_guard3_is_looking2 = 0;
            }
          }
        }
        if (boat_guard3.locateOnFoot3D(-671.7, -1459.1, 12.0, 1.0, 1.0, 4.0, false /* FALSE */)) {
          if ($.boat_guard3_is_looking2 == 0) {
            boat_guard3.setWaitState(3 /* WAITSTATE_CROSS_ROAD_LOOK */, 5000);
            $.boat_guard3_timer = 0;
            $.boat_guard3_is_looking2 = 1;
          }
          if ($.boat_guard3_is_looking2 == 1) {
            $.boat_guard3_timer = $.boat_guard3_timer + 1;
            if ($.boat_guard3_timer > 90) {
              boat_guard3.setObjGotoCoordOnFoot(-623.9, -1477.7);
              boat_guard3.setUsePednodeSeek(false /* FALSE */);
              $.boat_guard3_is_looking1 = 0;
            }
          }
        }


      }
      const _res91 = boat_guard3.getCoordinates();
$.boat_guard3x = _res91.x;
$.boat_guard3y = _res91.y;
$.boat_guard3z = _res91.z;
      $.this_guard = boat_guard3;
      await check_for_dead_guards();  // SCM GOSUB check_for_dead_guards
    }



    if (!(Char.IsDead(boat_guard4))) {
      if ($.raise_the_alarm == 0) {
        if ($.player1.locateAnyMeansChar3D(boat_guard4, 20.0, 20.0, 6.0, false /* FALSE */) && boat_guard4.hasSpottedPlayer($.player1)) {
          $.raise_the_alarm = 1;
        }
        if (!(boat_guard4.isHealthGreater(90))) {
          $.raise_the_alarm = 1;
        }
        if (boat_guard4.locateOnFoot3D(-682.8, -1484.8, 14.5, 1.0, 1.0, 4.0, false /* FALSE */)) {
          if ($.boat_guard4_is_looking1 == 0) {
            boat_guard4.setWaitState(3 /* WAITSTATE_CROSS_ROAD_LOOK */, 5000);
            $.boat_guard4_timer = 0;
            $.boat_guard4_is_looking1 = 1;
          }
          if ($.boat_guard4_is_looking1 == 1) {
            $.boat_guard4_timer = $.boat_guard4_timer + 1;
            if ($.boat_guard4_timer > 90) {
              boat_guard4.setObjGotoCoordOnFoot(-638.9, -1500.9);
              boat_guard4.setUsePednodeSeek(false /* FALSE */);
              $.boat_guard4_is_looking2 = 0;
            }
          }
        }
        if (boat_guard4.locateOnFoot3D(-638.9, -1500.9, 12.0, 1.0, 1.0, 4.0, false /* FALSE */)) {
          if ($.boat_guard4_is_looking2 == 0) {
            boat_guard4.setWaitState(3 /* WAITSTATE_CROSS_ROAD_LOOK */, 5000);
            $.boat_guard4_timer = 0;
            $.boat_guard4_is_looking2 = 1;
          }
          if ($.boat_guard4_is_looking2 == 1) {
            $.boat_guard4_timer = $.boat_guard4_timer + 1;
            if ($.boat_guard4_timer > 90) {
              boat_guard4.setObjGotoCoordOnFoot(-682.8, -1484.8);
              boat_guard4.setUsePednodeSeek(false /* FALSE */);
              $.boat_guard4_is_looking1 = 0;
            }
          }
        }


      }
      const _res92 = boat_guard4.getCoordinates();
$.boat_guard4x = _res92.x;
$.boat_guard4y = _res92.y;
$.boat_guard4z = _res92.z;
      $.this_guard = boat_guard4;
      await check_for_dead_guards();  // SCM GOSUB check_for_dead_guards


    }



    if (!(Char.IsDead(boat_guard5))) {
      if ($.raise_the_alarm == 0) {
        if ($.player1.locateAnyMeansChar3D(boat_guard5, 20.0, 20.0, 6.0, false /* FALSE */) && boat_guard5.hasSpottedPlayer($.player1)) {
          $.raise_the_alarm = 1;
        }
        if (!(boat_guard5.isHealthGreater(90))) {
          $.raise_the_alarm = 1;
        }
        if (boat_guard5.locateOnFoot3D(-671.7, -1459.1, 12.0, 1.0, 1.0, 4.0, false /* FALSE */)) {
          if ($.boat_guard5_is_looking1 == 0) {
            boat_guard5.setWaitState(3 /* WAITSTATE_CROSS_ROAD_LOOK */, 5000);
            $.boat_guard5_timer = 0;
            $.boat_guard5_chat1 = 0;
            $.boat_guard5_is_looking1 = 1;
          }
          if ($.boat_guard5_is_looking1 == 1) {
            $.boat_guard5_timer = $.boat_guard5_timer + 1;
            if ($.boat_guard5_timer > 90) {
              boat_guard5.setObjGotoCoordOnFoot(-682.8, -1484.8);
              boat_guard5.setUsePednodeSeek(false /* FALSE */);
              $.boat_guard5_is_looking2 = 0;
            }
          }
          if (!(Char.IsDead(boat_guard4))) {
            if (boat_guard4.locateOnFoot3D(-671.7, -1459.1, 12.0, 1.0, 1.0, 4.0, false /* FALSE */)) {
              if ($.boat_guard5_chat1 == 0) {
                boat_guard4.setWaitState(3 /* WAITSTATE_CROSS_ROAD_LOOK */, 0);
                boat_guard4.setObjNoObj();
                boat_guard5.setWaitState(3 /* WAITSTATE_CROSS_ROAD_LOOK */, 0);
                boat_guard5.setObjNoObj();
                Game.SetCharsChatting(boat_guard5, boat_guard4, 10000);
                $.boat_guard5_chat1 = 1;
              }
            }
          }
        }
        if (boat_guard5.locateOnFoot3D(-682.8, -1484.8, 12.0, 1.0, 1.0, 4.0, false /* FALSE */)) {
          if ($.boat_guard5_is_looking2 == 0) {
            boat_guard5.setWaitState(3 /* WAITSTATE_CROSS_ROAD_LOOK */, 5000);
            $.boat_guard5_timer = 0;
            $.boat_guard5_chat2 = 0;
            $.boat_guard5_is_looking2 = 1;
          }
          if ($.boat_guard5_is_looking2 == 1) {
            $.boat_guard5_timer = $.boat_guard5_timer + 1;
            if ($.boat_guard5_timer > 90) {
              boat_guard5.setObjGotoCoordOnFoot(-671.7, -1459.1);
              boat_guard5.setUsePednodeSeek(false /* FALSE */);
              $.boat_guard5_is_looking1 = 0;
            }
          }
          if (!(Char.IsDead(boat_guard3))) {
            if (boat_guard3.locateOnFoot3D(-682.8, -1484.8, 12.0, 1.0, 1.0, 4.0, false /* FALSE */)) {
              if ($.boat_guard5_chat2 == 0) {
                boat_guard3.setWaitState(3 /* WAITSTATE_CROSS_ROAD_LOOK */, 0);
                boat_guard5.setWaitState(3 /* WAITSTATE_CROSS_ROAD_LOOK */, 0);
                boat_guard5.setObjNoObj();
                boat_guard3.setObjNoObj();
                Game.SetCharsChatting(boat_guard5, boat_guard3, 10000);
                $.boat_guard5_chat2 = 1;
              }
            }
          }
        }


      }
      const _res93 = boat_guard5.getCoordinates();
$.boat_guard5x = _res93.x;
$.boat_guard5y = _res93.y;
$.boat_guard5z = _res93.z;
      $.this_guard = boat_guard5;
      await check_for_dead_guards();  // SCM GOSUB check_for_dead_guards


    }


    if (!(Char.IsDead(boat_guard6))) {
      if ($.raise_the_alarm == 0) {
        if ($.player1.locateAnyMeansChar3D(boat_guard6, 20.0, 20.0, 6.0, false /* FALSE */) && boat_guard6.hasSpottedPlayer($.player1)) {
          $.raise_the_alarm = 1;
        }
        if (!(boat_guard6.isHealthGreater(90))) {
          $.raise_the_alarm = 1;
        }
        if (boat_guard6.locateOnFoot3D(-573.7, -1522.5, 7.0, 1.0, 1.0, 4.0, false /* FALSE */)) {
          boat_guard6.setObjGotoCoordOnFoot(-598.6, -1513.0);
          boat_guard6.setUsePednodeSeek(false /* FALSE */);
        }
        if (boat_guard6.locateOnFoot3D(-598.6, -1513.0, 7.0, 1.0, 1.0, 4.0, false /* FALSE */)) {
          boat_guard6.setObjGotoCoordOnFoot(-573.7, -1522.5);
          boat_guard6.setUsePednodeSeek(false /* FALSE */);
        }


      }


    }


    if (!(Char.IsDead(boat_guard7))) {
      if ($.raise_the_alarm == 0) {
        if ($.player1.locateAnyMeansChar3D(boat_guard7, 20.0, 20.0, 6.0, false /* FALSE */) && boat_guard7.hasSpottedPlayer($.player1)) {
          $.raise_the_alarm = 1;
        }
        if (!(boat_guard7.isHealthGreater(90))) {
          $.raise_the_alarm = 1;
        }
        if (boat_guard7.locateOnFoot3D(-586.9, -1496.2, 7.0, 1.0, 1.0, 4.0, false /* FALSE */)) {
          boat_guard7.setObjGotoCoordOnFoot(-569.0, -1503.1);
          boat_guard7.setUsePednodeSeek(false /* FALSE */);
        }
        if (boat_guard7.locateOnFoot3D(-569.0, -1503.1, 7.0, 1.0, 1.0, 4.0, false /* FALSE */)) {
          boat_guard7.setObjGotoCoordOnFoot(-586.9, -1496.2);
          boat_guard7.setUsePednodeSeek(false /* FALSE */);
        }


      }


    }


    await chars_attack_player();  // SCM GOSUB chars_attack_player


    if (Car.IsDead($.fastest_boat)) {
      if ($.player1.isInAngledArea3D(-643.2, -1495.3, 12.0, -679.1, -1481.3, 18.0, -19.5, false /* FALSE */)) {
        $.sphere_cok3.remove();
        $.fastest_boat_blip.remove();
        while ($.player1.isInAngledArea3D(-643.2, -1495.3, 12.0, -679.1, -1481.3, 18.0, -19.5, false /* FALSE */)) {
          await asyncWait(0);


        }
        Text.PrintNow("COK3_7", 5000, 1); // You destroyed the boat!
        // SCM GOTO → mission_baron3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_baron3_failed"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("COK3_7", 5000, 1); // You destroyed the boat!
        // SCM GOTO → mission_baron3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_baron3_failed"); // fallback: would break linear control flow
      }
    }


  }
}




async function get_boat_to_mansion() {


  $.fastest_boat_blip.remove();


  $.fastest_boat_blip = Blip.AddForCoord(-378.5, -660.0, 5.6);


  Text.PrintNow("COK3_6", 5000, 1); // Get the boat to the mansion.


  $.player1.alterWantedLevelNoDrop(3);


  while (!($.player1.locateAnyMeans3D(-378.5, -660.0, 5.0, 20.0, 30.0, 6.0, true /* TRUE */)) || !($.player1.isInCar($.fastest_boat))) {
    await asyncWait(0);
    if (Car.IsDead($.fastest_boat)) {
      if ($.player1.isInAngledArea3D(-643.2, -1495.3, 12.0, -679.1, -1481.3, 18.0, -19.5, false /* FALSE */)) {
        $.sphere_cok3.remove();
        $.fastest_boat_blip.remove();
        while ($.player1.isInAngledArea3D(-643.2, -1495.3, 12.0, -679.1, -1481.3, 18.0, -19.5, false /* FALSE */)) {
          await asyncWait(0);


        }
        Text.PrintNow("COK3_7", 5000, 1); // You destroyed the boat!
        // SCM GOTO → mission_baron3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_baron3_failed"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("COK3_7", 5000, 1); // You destroyed the boat!
        // SCM GOTO → mission_baron3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_baron3_failed"); // fallback: would break linear control flow
      }
    }
    await chars_attack_player();  // SCM GOSUB chars_attack_player


  }


  if (!(Car.IsDead($.fastest_boat))) {
    $.fastest_boat.stop();
    $.fastest_boat.setCruiseSpeed(0.0);
  }


  Camera.DoFade(1000, 0 /* FADE_OUT */);


  await asyncWait(1000);


  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);


  World.ClearArea(-366.1, -655.2, 6.9, 1.0, true /* TRUE */);


  if (!(Car.IsDead($.fastest_boat))) {
    /*
    SET_PLAYER_HEADING player1 0.0
    //SET_CAMERA_IN_FRONT_OF_PLAYER
    SET_CAR_COORDINATES fastest_boat -378.5 -660.0 5.6
    SET_CAR_HEADING fastest_boat 270.0
    */
    $.fastest_boat.setCoordinates(-393.8, -660.4, 5.6);
    $.fastest_boat.setHeading(270.0);
    $.fastest_boat.goto(-378.5, -660.0, 5.6);
    $.fastest_boat.setCruiseSpeed(8.0);


  }


  await asyncWait(0);


  Camera.SetFixedPosition(-365.183, -654.170, 8.057, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-366.024, -654.710, 8.009, 2 /* JUMP_CUT */);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  TIMERB = 0;


  while (!(TIMERB > 3500)) {
    await asyncWait(0);
    if (!(Car.IsDead($.fastest_boat))) {
      if ($.fastest_boat.locate3D(-378.5, -660.0, 5.6, 2.0, 2.0, 4.0, false /* FALSE */)) {
        $.fastest_boat.stop();
        $.fastest_boat.setCruiseSpeed(0.0);
      }
    }


  }
}



async function skip_to_end_cok3() {


  Camera.DoFade(1000, 0 /* FADE_OUT */);


  await asyncWait(1000);


  World.ClearArea(-372.7, -656.7, 6.9, 1.0, true /* TRUE */);


  if (!(Car.IsDead($.fastest_boat))) {
    if ($.player1.isInCar($.fastest_boat)) {
      $.player1.warpFromCarToCoord(-372.7, -656.7, 6.9);
    }
    else {
      $.player1.setCoordinates(-372.7, -656.7, 6.9);
    }


  }


  if (!(Car.IsDead($.fastest_boat))) {
    $.fastest_boat.setCoordinates(-378.5, -660.0, 5.6);
    $.fastest_boat.setHeading(270.0);
  }



  $.player1.setHeading(90.0);
  Camera.RestoreJumpcut();
  Camera.SetBehindPlayer();


  await asyncWait(500);
  Camera.DoFade(1000, 1 /* FADE_IN */);


  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);



  // SCM GOTO → mission_baron3_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_baron3_passed"); // fallback: would break linear control flow
}



// Mission baron3 failed


async function onFailed() {
  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed"
}




// mission baron3 passed


async function mission_baron3_passed() {


  $.flag_baron_mission3_passed = 1;
  Audio.PlayMissionPassedTune(1);
  Text.PrintWithNumberBig("M_PASS", 4000, 5000, 1); //"Mission Passed!"
  $.player1.clearWantedLevel();
  $.player1.addScore(4000);
  Stat.RegisterMissionPassed("COK_3");
  Stat.PlayerMadeProgress(1);
  // START_NEW_SCRIPT baron_mission4_loop 
}



// mission cleanup


async function cleanup() {


  ONMISSION = 0;
  $.timer_mobile_start = Clock.GetGameTimer();
  Streaming.MarkModelAsNoLongerNeeded(HMYAP);
  Streaming.MarkModelAsNoLongerNeeded(squalo);
  Streaming.MarkModelAsNoLongerNeeded(HMYST);
  Streaming.MarkModelAsNoLongerNeeded(tec9);
  Streaming.MarkModelAsNoLongerNeeded(hammer);
  Streaming.MarkModelAsNoLongerNeeded(screwdriver);
  Streaming.MarkModelAsNoLongerNeeded(speeder);
  Streaming.MarkModelAsNoLongerNeeded(dinghy);
  Streaming.MarkModelAsNoLongerNeeded(ruger);
  if (!(Car.IsDead($.fastest_boat))) {
    $.fastest_boat.markAsNoLongerNeeded();
  }
  $.boat_closed = ScriptObject.CreateNoOffset(b_hse_doors, -640.012, -1485.941, 15.457);
  $.boat_closed.dontRemove();
  $.sphere_cok3.remove();
  Zone.SetPedInfo("DOCKS", 1 /* DAY */, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("DOCKS", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  $.fastest_boat_blip.remove();
  Audio.ClearMissionAudio(1);
  Audio.ClearMissionAudio(2);
  Mission.Finish();
}




async function check_for_dead_guards() {


  if (Char.IsDead(boat_guard1) && $.this_guard.locateOnFoot3D($.boat_guard1x, $.boat_guard1y, $.boat_guard1z, 4.0, 4.0, 4.0, false /* FALSE */)) {
    $.raise_the_alarm = 1;
  }
  if (Char.IsDead(boat_guard2) && $.this_guard.locateOnFoot3D($.boat_guard2x, $.boat_guard2y, $.boat_guard2z, 4.0, 4.0, 4.0, false /* FALSE */)) {
    $.raise_the_alarm = 1;
  }
  if (Char.IsDead(boat_guard3) && $.this_guard.locateOnFoot3D($.boat_guard3x, $.boat_guard3y, $.boat_guard3z, 4.0, 4.0, 4.0, false /* FALSE */)) {
    $.raise_the_alarm = 1;
  }
  if (Char.IsDead(boat_guard4) && $.this_guard.locateOnFoot3D($.boat_guard4x, $.boat_guard4y, $.boat_guard4z, 4.0, 4.0, 4.0, false /* FALSE */)) {
    $.raise_the_alarm = 1;
  }
  if (Char.IsDead(boat_guard5) && $.this_guard.locateOnFoot3D($.boat_guard5x, $.boat_guard5y, $.boat_guard5z, 4.0, 4.0, 4.0, false /* FALSE */)) {
    $.raise_the_alarm = 1;
  }
}




async function boat_cut_scenes() {


  if (!(Car.IsDead($.fastest_boat))) {
    $.fastest_boat.setCoordinates(-597.6, -1507.7, 11.5);
    $.fastest_boat.setHeading(256.0);
  }


  if ($.played_show_boat_cut == 0) {
    if (!(Car.IsDead($.fastest_boat))) {
      if ($.player1.locateAnyMeansCar3D($.fastest_boat, 40.0, 40.0, 20.0, false /* FALSE */)) {
        $.player1.setControl(false /* OFF */);
        Hud.SwitchWidescreen(true /* ON */);
        Text.PrintNow("COK3_5", 6000, 1); // Find the switch to lower the boat.
        Camera.SetFixedPosition(-598.588, -1496.503, 16.717, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(-598.493, -1497.474, 16.496, 2 /* JUMP_CUT */);
        TIMERB = 0;
        while (!(TIMERB > 500)) {
          await asyncWait(0);
          if (!(Car.IsDead($.fastest_boat))) {
            $.fastest_boat.setCoordinates(-597.6, -1507.7, 11.5);
            $.fastest_boat.setHeading(256.0);
          }


        }
        while (!(TIMERB > 4000)) {
          await asyncWait(0);
          if (!(Car.IsDead($.fastest_boat))) {
            $.fastest_boat.setCoordinates(-597.6, -1507.7, 11.5);
            $.fastest_boat.setHeading(256.0);
          }
          if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
            while (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
              await asyncWait(0);
              if (!(Car.IsDead($.fastest_boat))) {
                $.fastest_boat.setCoordinates(-597.6, -1507.7, 11.5);
                $.fastest_boat.setHeading(256.0);
              }
              if (TIMERB > 3500) {
                // SCM GOTO → skip_boat_cut (not lowered; manual jump required)
                throw new Error("unresolved GOTO skip_boat_cut"); // fallback: would break linear control flow
              }
            }
            // SCM GOTO → skip_boat_cut (not lowered; manual jump required)
            throw new Error("unresolved GOTO skip_boat_cut"); // fallback: would break linear control flow
          }


        }
        // SCM label skip_boat_cut
        $.player1.setControl(true /* ON */);
        Hud.SwitchWidescreen(false /* OFF */);
        Camera.SetBehindPlayer();
        Camera.RestoreJumpcut();
        $.played_show_boat_cut = 1;
      }
    }
  }


  if ($.player1.locateOnFoot3D(-665.4, -1484.7, 12.8, 0.5, 0.5, 1.5, false /* FALSE */)) {
    $.player1.setControl(false /* OFF */);
    Hud.SwitchWidescreen(true /* ON */);
    $.player1.setHeading(150.0);
    coke3_weapon = $.player1.getCurrentWeapon();
    $.player1.setCurrentWeapon(0 /* WEAPONTYPE_UNARMED */);
    $.scplayer.setWaitState(25 /* WAITSTATE_USE_ATM */, 1000);
    TIMERB = 0;
    while (!(TIMERB > 1000)) {
      await asyncWait(0);
      if (!(Car.IsDead($.fastest_boat))) {
        $.fastest_boat.setCoordinates(-597.6, -1507.7, 11.5);
        $.fastest_boat.setHeading(256.0);
      }


    }
    $.scplayer.clearWaitState();
    $.player1.setCurrentWeapon(coke3_weapon);
    Camera.SetFixedPosition(-600.685, -1498.843, 25.889, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(-600.498, -1499.380, 25.066, 2 /* JUMP_CUT */);
    $.sphere_cok3.remove();
    while (!(TIMERB > 2500)) {
      await asyncWait(0);
      if (!(Car.IsDead($.fastest_boat))) {
        $.fastest_boat.setCoordinates(-597.6, -1507.7, 11.5);
        $.fastest_boat.setHeading(256.0);
      }


    }
    await asyncWait(4000);
    $.player1.setCoordinates(-665.4, -1484.7, 12.8);
    $.player1.setHeading(150.0);
    $.player1.setControl(true /* ON */);
    Hud.SwitchWidescreen(false /* OFF */);
    Camera.RestoreJumpcut();
    Text.PrintNow("COK3_9", 8000, 1); // Now get into the boat.
    $.boat_guard8 = Char.Create(7 /* PEDTYPE_GANG_CUBAN */, HMYST, -640.6, -1500.3, -100.0);
    $.boat_guard8.setHeading(335.0);
    $.boat_guard8.clearThreatSearch();
    $.boat_guard8.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.boat_guard8.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    $.boat_guard8.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 500);
    $.boat_guard8.setStayInSamePlace(true /* TRUE */);
    $.boat_guard9 = Char.Create(7 /* PEDTYPE_GANG_CUBAN */, HMYST, -652.5, -1497.5, -100.0);
    $.boat_guard9.setHeading(245.0);
    $.boat_guard9.clearThreatSearch();
    $.boat_guard9.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.boat_guard9.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    $.boat_guard9.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 500);
    $.boat_guard9.setStayInSamePlace(true /* TRUE */);
    $.boat_guard10 = Char.Create(7 /* PEDTYPE_GANG_CUBAN */, HMYST, -632.5, -1476.1, -100.0);
    $.boat_guard10.setHeading(165.9);
    $.boat_guard10.clearThreatSearch();
    $.boat_guard10.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.boat_guard10.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    $.boat_guard10.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 500);
    $.boat_guard11 = Char.Create(7 /* PEDTYPE_GANG_CUBAN */, HMYST, -643.2, -1467.1, -100.0);
    $.boat_guard11.setHeading(252.0);
    $.boat_guard11.clearThreatSearch();
    $.boat_guard11.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.boat_guard11.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    $.boat_guard11.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 500);
    $.boat_guard12 = Char.Create(7 /* PEDTYPE_GANG_CUBAN */, HMYST, -666.5, -1458.0, -100.0);
    $.boat_guard12.setHeading(245.0);
    $.boat_guard12.clearThreatSearch();
    $.boat_guard12.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.boat_guard12.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    $.boat_guard12.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 500);
    $.boat_guard13 = Char.Create(7 /* PEDTYPE_GANG_CUBAN */, HMYST, -678.8, -1486.3, -100.0);
    $.boat_guard13.setHeading(252.0);
    $.boat_guard13.clearThreatSearch();
    $.boat_guard13.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.boat_guard13.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    $.boat_guard13.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 500);
    $.raise_the_alarm = 1;
    boat_button_pressed = 1;
  }
}




async function chars_attack_player() {


  if ($.raise_the_alarm == 1) {
    if (set_all_guards_ojectives == 0) {
      if (!(Char.IsDead(boat_guard7))) {
        boat_guard7.setObjKillPlayerOnFoot($.player1);
      }
      if (!(Char.IsDead(boat_guard6))) {
        boat_guard6.setObjKillPlayerOnFoot($.player1);
      }
      if (!(Char.IsDead(boat_guard5))) {
        boat_guard5.setObjKillPlayerOnFoot($.player1);
      }
      if (!(Char.IsDead(boat_guard4))) {
        boat_guard4.setObjKillPlayerOnFoot($.player1);
      }
      if (!(Char.IsDead(boat_guard3))) {
        boat_guard3.setObjKillPlayerOnFoot($.player1);
      }
      if (!(Char.IsDead(boat_guard2))) {
        boat_guard2.setObjKillPlayerOnFoot($.player1);
      }
      if (!(Char.IsDead(boat_guard1))) {
        boat_guard1.setObjKillPlayerOnFoot($.player1);
      }
      set_all_guards_ojectives = 1;
    }
    if (TIMERA > 1000) {
      const _res94 = $.player1.getCoordinates();
$.player_x = _res94.x;
$.player_y = _res94.y;
$.player_z = _res94.z;
      if (!(Char.IsDead(boat_guard7))) {
        if (!(boat_guard7.isWanderPathClear($.player_x, $.player_y, $.player_z, 4.0))) {
          boat_guard7.followPath($.player_x, $.player_y, $.player_z, 4.0, 1 /* RUN */);
        }
      }
      if (!(Char.IsDead(boat_guard6))) {
        if (!(boat_guard6.isWanderPathClear($.player_x, $.player_y, $.player_z, 4.0))) {
          boat_guard6.followPath($.player_x, $.player_y, $.player_z, 4.0, 1 /* RUN */);
        }
      }
      if (!(Char.IsDead(boat_guard5))) {
        if (!(boat_guard5.isWanderPathClear($.player_x, $.player_y, $.player_z, 4.0))) {
          boat_guard5.followPath($.player_x, $.player_y, $.player_z, 4.0, 1 /* RUN */);
        }
      }
      if (!(Char.IsDead(boat_guard4))) {
        if (!(boat_guard4.isWanderPathClear($.player_x, $.player_y, $.player_z, 4.0))) {
          boat_guard4.followPath($.player_x, $.player_y, $.player_z, 4.0, 1 /* RUN */);
        }
      }
      if (!(Char.IsDead(boat_guard3))) {
        if (!(boat_guard3.isWanderPathClear($.player_x, $.player_y, $.player_z, 4.0))) {
          boat_guard3.followPath($.player_x, $.player_y, $.player_z, 4.0, 1 /* RUN */);
        }
      }
      if (!(Char.IsDead(boat_guard2))) {
        if (!(boat_guard2.isWanderPathClear($.player_x, $.player_y, $.player_z, 4.0))) {
          boat_guard2.followPath($.player_x, $.player_y, $.player_z, 4.0, 1 /* RUN */);
        }
      }
      if (!(Char.IsDead(boat_guard1))) {
        if (!(boat_guard1.isWanderPathClear($.player_x, $.player_y, $.player_z, 4.0))) {
          boat_guard1.followPath($.player_x, $.player_y, $.player_z, 4.0, 1 /* RUN */);
        }
      }
      if (boat_button_pressed == 1) {
        if (!(Char.IsDead($.boat_guard8))) {
          if (!($.boat_guard8.isWanderPathClear($.player_x, $.player_y, $.player_z, 4.0))) {
            $.boat_guard8.followPath($.player_x, $.player_y, $.player_z, 4.0, 1 /* RUN */);
          }
        }
        if (!(Char.IsDead($.boat_guard9))) {
          if (!($.boat_guard9.isWanderPathClear($.player_x, $.player_y, $.player_z, 4.0))) {
            $.boat_guard9.followPath($.player_x, $.player_y, $.player_z, 4.0, 1 /* RUN */);
          }
        }
        if (!(Char.IsDead($.boat_guard10))) {
          if (!($.boat_guard10.isWanderPathClear($.player_x, $.player_y, $.player_z, 4.0))) {
            $.boat_guard10.followPath($.player_x, $.player_y, $.player_z, 4.0, 1 /* RUN */);
          }
        }
        if (!(Char.IsDead($.boat_guard11))) {
          if (!($.boat_guard11.isWanderPathClear($.player_x, $.player_y, $.player_z, 4.0))) {
            $.boat_guard11.followPath($.player_x, $.player_y, $.player_z, 4.0, 1 /* RUN */);
          }
        }
        if (!(Char.IsDead($.boat_guard12))) {
          if (!($.boat_guard12.isWanderPathClear($.player_x, $.player_y, $.player_z, 4.0))) {
            $.boat_guard12.followPath($.player_x, $.player_y, $.player_z, 4.0, 1 /* RUN */);
          }
        }
        if (!(Char.IsDead($.boat_guard13))) {
          if (!($.boat_guard13.isWanderPathClear($.player_x, $.player_y, $.player_z, 4.0))) {
            $.boat_guard13.followPath($.player_x, $.player_y, $.player_z, 4.0, 1 /* RUN */);
          }
        }


      }
      TIMERA = 0;
    }
  }
}

export async function baron3() {
  // Mission start stuff


  await body();  // SCM GOSUB mission_start_baron3


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await onFailed();  // SCM GOSUB mission_baron3_failed
  }


  await cleanup();  // SCM GOSUB mission_cleanup_baron3



  // Variables for mission



  // LVAR_INT boat_mech1 boat_mech2 boat_mech3 set_all_guards_ojectives
  // LVAR_INT boat_guard1 boat_guard2 boat_guard3 boat_guard4 boat_guard5 boat_guard6 boat_guard7 boat_button_pressed
  // LVAR_INT player_spotted_by_mech1 coke3_weapon
  // VAR_FLOAT boat_guard1X boat_guard1Y boat_guard1Z boat_guard2X boat_guard2Y boat_guard2Z boat_guard3X boat_guard3Y boat_guard3Z
  // VAR_FLOAT boat_guard4X boat_guard4Y boat_guard4Z boat_guard5X boat_guard5Y boat_guard5Z boat_guard1_Heading boat_guard2_Heading
  // VAR_INT raise_the_alarm this_guard boat_guard5_chat1 boat_guard5_chat2 guard_boat1 guard_boat2
  // VAR_INT boat_guard3_is_looking1 boat_guard3_is_looking2 boat_guard3_timer played_show_boat_cut
  // VAR_INT boat_guard4_is_looking1 boat_guard4_is_looking2 boat_guard4_timer cs_dshotgn
  // VAR_INT boat_guard5_is_looking1 boat_guard5_is_looking2 boat_guard5_timer Sphere_cok3
  // VAR_INT boat_guard8 boat_guard9 boat_guard10 boat_guard11 boat_guard12 boat_guard13

  // ***************************************Mission Start*************************************


}
