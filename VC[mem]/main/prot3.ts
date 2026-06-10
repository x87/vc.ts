// Generated from main/prot3.sc

import { $ } from "../vars.mts";

async function mission_start_protec3() {
  Text.ClearThisPrint("M_FAIL");
  $.player1.clearWantedLevel();
  ONMISSION = 1;
  $.flag_player_on_army_ped_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  Text.LoadMissionText("PROT3");
  if (!(Char.IsDead($.scplayer))) {
    $.scplayer.undress("player");
    Streaming.LoadAllModelsNow();
    if (!(Char.IsDead($.scplayer))) {
      $.scplayer.dress();
    }
  }
  Shortcut.SetDropoffPointForMission(-288.2, -487.5, 9.8, 275.0);
  // *****************************************Set Flags/variables************************************


  $.disguise_goals = 0;
  $.gotpolice = 0;
  $.flag_buddy_in_group_prot3 = 1;
  $.timer_flag = 0;
  $.flag_cops_alerted = 0;
  $.speech_played = 0;
  $.speech_played2 = 0;
  $.speech_played3 = 0;
  $.player_in_coffee_shop = 0;
  $.prot3_print_flag = 0;
  $.cop3_flag = 0;
  $.cop4_flag = 0;
  $.cop1_in_garage = 0;
  $.cop2_in_garage = 0;
  $.cop3_in_garage = 0;
  $.cop4_in_garage = 0;
  $.counted_once3 = 0;
  $.counted_once4 = 0;


  $.player_buddy_car_speed = 0.0;

  // ****************************************START OF CUTSCENE********************************
  //SET_AREA_VISIBLE VIS_MANSION
  //SET_AREA_VISIBLE VIS_MAIN_MAP

  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSbuddy");
  Streaming.LoadSpecialCharacter(3, "dgoona");


  Streaming.LoadScene(-378.62, -552.676, 18.534);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3))) {
    await asyncWait(0);
  }


  Cutscene.Load("bud_3");
  Cutscene.SetOffset(-378.62, -552.676, 18.534);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_buddy = CutsceneObject.Create(SPECIAL02);
  $.cs_buddy.setAnim("CSbuddy");


  $.cs_dgoona = CutsceneObject.Create(SPECIAL03);
  $.cs_dgoona.setAnim("dgoona");


  World.ClearArea(-379.0, -539.6, 19.8, 60.0, true /* TRUE */);
  World.SetPedDensityMultiplier(0.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 640) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO3_A", 10000, 1); //You moron! What were you thinking?!


  while ($.cs_time < 3260) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO3_B", 10000, 1); //Do you realize what this means?!


  while ($.cs_time < 5037) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO3_C", 10000, 1); //We could all be sunk!


  while ($.cs_time < 6257) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO3_D", 10000, 1); //The timer must have got screwed.


  while ($.cs_time < 8063) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO3_E", 10000, 1); //That place was wired to go up like a firework factory.


  while ($.cs_time < 10576) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO3_F", 10000, 1); //Then somebody tipped off the cops...


  while ($.cs_time < 12294) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO3_G", 10000, 1); //what's the problem fellas?


  while ($.cs_time < 13350) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO3_H", 10000, 1); //Mike was supposed to torch some place in the mall,


  while ($.cs_time < 15890) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO3_I", 10000, 1); //but he screwed the fuses and now the cops are crawling all over it.


  while ($.cs_time < 19687) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO3_J", 10000, 1); //We gotta get our stuff and get out of here!


  while ($.cs_time < 21037) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO3_K", 10000, 1); //Relax, both of you, let me think for a second!


  while ($.cs_time < 23717) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO3_L", 10000, 1); //Tommy Vercetti doesn't just cut and run.


  while ($.cs_time < 29837) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO3_M", 10000, 1); //The cops will be going over that building with a fine toothed comb,


  while ($.cs_time < 33146) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO3_N", 10000, 1); //but that takes time.


  while ($.cs_time < 34850) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO3_O", 10000, 1); //We gotta go in and torch that place ourselves.


  while ($.cs_time < 36855) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO3_P", 10000, 1); //Yeah, but...


  while ($.cs_time < 37233) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO3_Q", 10000, 1); //No one but a cop could get within a mile of that place!


  while ($.cs_time < 39659) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO3_R", 10000, 1); //So we go as cops.


  while ($.cs_time < 41424) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO3_S", 10000, 1); //We get the uniforms - and we're gonna need a squad car.


  while ($.cs_time < 44643) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO3_T", 10000, 1); //All thanks to you Mike.


  while ($.cs_time < 45615) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO3_U", 10000, 1); //I'm sorry.


  while ($.cs_time < 46434) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO3_V", 10000, 1); //I got it.


  while ($.cs_time < 48010) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO3_W", 10000, 1); //What we got to do is lure the cops in with the finger,


  while ($.cs_time < 50758) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO3_X", 10000, 1); //put them in a lock-up


  while ($.cs_time < 52122) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO3_Y", 10000, 1); //and jump 'em..


  while ($.cs_time < 52864) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO3_Z", 10000, 1); //Good plan. Let's go!


  while ($.cs_time < 54506) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("PRO3_A1", 10000, 1); //Alright.


  while ($.cs_time < 55506) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  while ($.cs_time < 56320) {
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
  Streaming.UnloadSpecialCharacter(3);
  World.SetPedDensityMultiplier(1.0);
  World.SetCarDensityMultiplier(1.0);
  $.flag_player_in_mansion = 0;
  // ******************************************END OF CUTSCENE********************************

  Camera.SetFadingColor(0, 0, 0);
  await asyncWait(500);
  Camera.SetBehindPlayer();
  $.player1.setCoordinates(-353.1, -526.4, 11.7);
  Streaming.LoadScene(-353.1, -510.4, 11.7);
  $.player1.setHeading(304.3);
  $.player1.setControl(true /* ON */);
  //------------------REQUEST_MODELS ------------------------------

  $.player1.setMood(PLAYER_MOOD_CALM, 60000);

  //remove clothes picups

  $.mansion_clothes.remove();
  $.safehouse_clothes2.remove();
  $.clothes_pickup1.remove();
  $.clothes_pickup2.remove();
  $.clothes_pickup3.remove();
  $.clothes_pickup4.remove();
  $.clothes_pickup5.remove();
  $.clothes_pickup6.remove();
  $.clothes_pickup7.remove();
  $.clothes_pickup8.remove();
  $.clothes_pickup9.remove();
  $.clothes_pickup13.remove();


  Streaming.RequestModel(dynamite);
  Streaming.RequestModel(cop);
  Streaming.RequestModel(army);
  Streaming.RequestModel(nitestick);


  Streaming.RequestModel(buddyshot);
  Streaming.RequestModel(m4);
  Streaming.RequestModel(sentinel);
  Streaming.RequestModel(police);
  Streaming.RequestModel(173 /* colt45 */);


  while (!(Streaming.HasModelLoaded(cop)) || !(Streaming.HasModelLoaded(army)) || !(Streaming.HasModelLoaded(dynamite)) || !(Streaming.HasModelLoaded(nitestick))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(buddyshot)) || !(Streaming.HasModelLoaded(m4)) || !(Streaming.HasModelLoaded(sentinel)) || !(Streaming.HasModelLoaded(police)) || !(Streaming.HasModelLoaded(173 /* colt45 */))) {
    await asyncWait(0);
  }


  Streaming.LoadSpecialCharacter(1, "igbuddy");
  Streaming.LoadSpecialCharacter(2, "IGBudy2");
  Streaming.LoadSpecialCharacter(3, "player6");
  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3))) {
    await asyncWait(0);
  }


  Streaming.LoadAllModelsNow();



  Audio.LoadMissionAudio(1, "BUD3_1a" as any);
  Audio.LoadMissionAudio(2, "BUD3_1b" as any);


  while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
  }


  Zone.SetPedInfo("RICH1", 1 /* DAY */, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1000);
  Zone.SetPedInfo("RICH1", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1000);
  Zone.SetCarInfo("RICH1", 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1000);
  Zone.SetCarInfo("RICH1", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1000);
  Zone.SetCivilianCarInfo("RICH1", 1 /* DAY */, 90, 0, 400, 400, 0, 0, 100, 0, 10, 500, 500);
  Zone.SetCivilianCarInfo("RICH1", 0 /* NIGHT */, 90, 0, 400, 400, 0, 0, 100, 0, 10, 500, 500);
  Zone.SetGroup("RICH1", 1 /* DAY */, RICH1_PEDGRP);
  Zone.SetGroup("RICH1", 0 /* NIGHT */, RICH1_NIGHT_PEDGRP);


  Zone.SetPedInfo("SHOP1", 1 /* DAY */, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1000);
  Zone.SetPedInfo("SHOP1", 0 /* NIGHT */, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1000);
  Zone.SetCarInfo("SHOP1", 1 /* DAY */, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1000);
  Zone.SetCarInfo("SHOP1", 0 /* NIGHT */, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1000);
  Zone.SetCivilianCarInfo("SHOP1", 1 /* DAY */, 250, 250, 200, 0, 100, 0, 200, 0, 0, 500, 500);
  Zone.SetCivilianCarInfo("SHOP1", 0 /* NIGHT */, 250, 250, 200, 0, 100, 0, 200, 0, 0, 500, 500);
  Zone.SetGroup("SHOP1", 1 /* DAY */, SHOP1_PEDGRP);
  Zone.SetGroup("SHOP1", 0 /* NIGHT */, SHOP1_NIGHT_PEDGRP);


  if (ONMISSION == 0) {
    $.bombplace = Blip.AddForCoord(471.0, 1028.0, 19.1);
    $.cop2 = World.GetRandomCopInArea(587.7, -70.7, 551.6, -110.6, true, false, false, false, false);
    $.boutique1 = Blip.AddForCoord(157.4, -1277.0, 9.4);
  }


  $.buddy = Char.Create(PEDTYPE_GANG_PLAYER, SPECIAL01, -351.3, -525.1, 11.7);
  $.buddy.setHeading(124.3);
  $.buddy.setAsPlayerFriend($.player1, true /* TRUE */);


  $.buddy.clearThreatSearch();
  $.buddy.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.buddy.setOnlyDamagedByPlayer(true /* TRUE */);
  $.buddy.setCantBeDraggedOut(true /* TRUE */);
  $.buddy.giveWeapon(WEAPONTYPE_STUBBY_SHOTGUN, 30000);
  $.buddy.setRunning(true /* TRUE */);
  $.buddy.followPlayer($.player1);

  // creating BOMB DISPOSAL presence around shop

  $.waitingarmy1 = Char.Create(4 /* PEDTYPE_CIVMALE */, army, 464.3, 1010.9, 17.2);
  $.waitingarmy1.setHeading(37.9);
  $.waitingarmy1.setOnlyDamagedByPlayer(true /* TRUE */);
  $.waitingarmy1.giveWeapon(WEAPONTYPE_M4, 30000);
  $.waitingarmy1.setAccuracy(90);
  $.waitingarmy1.setStayInSamePlace(true /* TRUE */);


  $.waitingarmy2 = Char.Create(4 /* PEDTYPE_CIVMALE */, army, 462.5, 1009.0, 17.2);
  $.waitingarmy2.setHeading(54.3);
  $.waitingarmy2.setOnlyDamagedByPlayer(true /* TRUE */);
  $.waitingarmy2.giveWeapon(WEAPONTYPE_M4, 30000);
  $.waitingarmy2.setStayInSamePlace(true /* TRUE */);
  $.waitingarmy1.setAccuracy(90);

  //creating dynamite

  $.dyn1 = ScriptObject.Create(dynamite, 467.9, 1004.8, 18.9);
  $.dyn1.setCollision(false /* FALSE */);
  $.dyn1.setDynamic(false /* FALSE */);


  $.dyn2 = ScriptObject.Create(dynamite, 468.5, 1004.4, 18.9);
  $.dyn2.setCollision(false /* FALSE */);
  $.dyn2.setDynamic(false /* FALSE */);


  $.dyn3 = ScriptObject.Create(dynamite, 468.1, 1004.8, 18.9);
  $.dyn3.setCollision(false /* FALSE */);
  $.dyn3.setDynamic(false /* FALSE */);


  $.dyn4 = ScriptObject.Create(dynamite, 468.3, 1004.5, 18.9);
  $.dyn4.setCollision(false /* FALSE */);
  $.dyn4.setDynamic(false /* FALSE */);


  $.dyn5 = ScriptObject.Create(dynamite, 468.4, 1004.3, 18.9);
  $.dyn5.setCollision(false /* FALSE */);
  $.dyn5.setDynamic(false /* FALSE */);


  $.buddy.setCanBeDamagedByMembersOfGang(GANG_PLAYER, false /* FALSE */);
  $.scplayer.setCanBeDamagedByMembersOfGang(GANG_PLAYER, false /* FALSE */);


  $.bud3_garage.open();
  $.bud3_garage.noSpecialCameraForThisGarage();
  $.free_sentinel_car = Car.Create(sentinel, -345.3, -524.6, 11.5);
  $.free_cop_car = Car.Create(police, 469.6, 336.6, 11.4);
  $.free_cop_car.lockDoors(1 /* CARLOCK_UNLOCKED */);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  await asyncWait(1000);


  Text.PrintNow("PRO3_01", 5000, 1); //Ok Lance, let's get the cops' attention!
  Audio.PlayMissionAudio(1);
  while (!(Audio.HasMissionAudioFinished(1))) {
    await asyncWait(0);
  }
  Audio.ClearMissionAudio(1);
  Text.ClearThisPrint("PRO3_01");



  Text.Print("PRO3_21", 5000, 1); //Get a wanted level so the cops will follow you into the lock-up.



  $.cop_garage = Blip.AddForCoord(459.1, 332.5, 9.4);
  TIMERA = 0;
}





async function disguise_loop() {
  // SCM GOTO → disguise_loop lowered to endless loop
  while (true) {


    await asyncWait(0);

    //player1 must get a wanted level and then get police to follow him into garage


    if ($.disguise_goals == 0) {
      if (!(Char.IsDead($.buddy))) {
        if ($.player1.isWantedLevelGreater(0)) {
          if ($.speech_played == 0) {
            if (!(Char.IsDead($.buddy))) {
              if ($.buddy.isInPlayersGroup($.player1)) {
                Text.PrintNow("PRO3_19", 5000, 1); //Now that got them really irritated
                Text.Print("PRO3_20", 5000, 1); //Get two cops to follow you into the garage.
                Audio.PlayMissionAudio(2);
                while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.buddy))) {
                  await asyncWait(0);
                }
                Audio.ClearMissionAudio(2);
                Text.ClearThisPrint("PRO3_19");
                $.speech_played = 1;
              }
            }
          }
        }


        if ($.player1.isInArea2D(466.1, 325.5, 448.1, 335.2, false /* FALSE */)) {
          if (!($.gotpolice == 2)) {
            if ($.player1.isWantedLevelGreater(1)) {
              if ($.cop3_flag == 0) {
                if (!(Camera.IsPointOnScreen(444.6, 348.4, 10.7, 2.0))) {
                  $.cop3 = Char.Create(4 /* PEDTYPE_CIVMALE */, cop, 444.6, 348.4, 10.7);
                  $.cop3.setObjKillPlayerOnFoot($.player1);
                  $.cop3.setThreatSearch(1 /* THREAT_PLAYER1 */);
                  $.cop3.giveWeapon(WEAPONTYPE_NIGHTSTICK, 1);
                  $.cop3_flag = 1;
                }
              }
              if ($.cop4_flag == 0) {
                if (!(Camera.IsPointOnScreen(472.1, 347.8, 10.6, 2.0))) {
                  $.cop4 = Char.Create(4 /* PEDTYPE_CIVMALE */, cop, 472.1, 347.8, 10.6);
                  $.cop4.setObjKillPlayerOnFoot($.player1);
                  $.cop4.setThreatSearch(1 /* THREAT_PLAYER1 */);
                  $.cop4.giveWeapon(WEAPONTYPE_NIGHTSTICK, 1);
                  $.cop4_flag = 1;
                }
              }
            }
          }


          if ($.buddy.isInArea2D(466.1, 325.5, 448.1, 339.2, false /* FALSE */)) {
            if ($.gotpolice == 0) {
              if ($.cop3_flag == 1) {
                if (!(Char.IsDead($.cop3))) {
                  if ($.cop3.isInArea2D(466.1, 325.5, 448.1, 337.2, false /* FALSE */)) {
                    if ($.cop3_in_garage == 0) {
                      if ($.cop4_in_garage == 0) {
                        $.gotpolice++;
                        $.cop3_in_garage = 1;
                        $.counted_once3 = 1;
                      }
                    }
                  }
                }
                else {
                  $.cop3.markAsNoLongerNeeded();
                  $.cop3_flag = 0;
                  $.counted_once3 = 0;
                }
              }
              if ($.cop4_flag == 1) {
                if (!(Char.IsDead($.cop4))) {
                  if ($.cop4.isInArea2D(466.1, 325.5, 448.1, 337.2, false /* FALSE */)) {
                    if ($.cop3_in_garage == 0) {
                      if ($.cop4_in_garage == 0) {
                        $.gotpolice++;
                        $.cop4_in_garage = 1;
                        $.counted_once4 = 1;
                      }
                    }
                  }
                }
                else {
                  $.cop4.markAsNoLongerNeeded();
                  $.cop4_flag = 0;
                  $.counted_once4 = 0;
                }
              }
              $.cop1 = World.GetRandomCopInArea(466.1, 325.5, 448.1, 339.2, true, false, false, false, false);
              if (!($.cop1 == -1)) {
                if (!(Char.IsDead($.cop1))) {
                  if ($.cop1.isModel(cop)) {
                    if ($.cop1_in_garage == 0) {
                      $.gotpolice++;
                      $.cop1_in_garage = 1;
                    }
                    if ($.cop1.isInAnyCar()) {
                      $.cop1.setObjLeaveAnyCar();
                    }
                  }
                }
                else {
                  $.cop1.markAsNoLongerNeeded();
                  $.cop2.markAsNoLongerNeeded();
                  $.gotpolice = 0;
                }
              }


            }


            if ($.gotpolice == 1) {
              if ($.cop3_flag == 1) {
                if (!(Char.IsDead($.cop3))) {
                  if ($.cop3.isInArea2D(466.1, 325.5, 448.1, 337.2, false /* FALSE */)) {
                    if ($.counted_once3 == 0) {
                      if ($.cop3_in_garage < 2) {
                        if ($.cop4_in_garage < 2) {
                          $.gotpolice++;
                          $.cop3_in_garage = 2;
                        }
                      }
                    }
                  }
                }
                else {
                  $.cop3.markAsNoLongerNeeded();
                  $.cop3_flag = 0;
                  $.counted_once3 = 0;
                }
              }
              if ($.cop4_flag == 1) {
                if (!(Char.IsDead($.cop4))) {
                  if ($.cop4.isInArea2D(466.1, 325.5, 448.1, 337.2, false /* FALSE */)) {
                    if ($.counted_once4 == 0) {
                      if ($.cop3_in_garage < 2) {
                        if ($.cop4_in_garage < 2) {
                          $.gotpolice++;
                          $.cop4_in_garage = 2;
                        }
                      }
                    }
                  }
                }
                else {
                  $.cop4.markAsNoLongerNeeded();
                  $.cop4_flag = 0;
                  $.counted_once4 = 0;
                }
              }
              $.cop2 = World.GetRandomCopInArea(466.1, 325.5, 448.1, 339.2, true, false, false, false, false);
              if (!($.cop2 == -1)) {
                if (!(Char.IsDead($.cop2))) {
                  if (!(Char.IsDead($.buddy))) {
                    if ($.cop2.isModel(cop)) {
                      if ($.cop2_in_garage == 0) {
                        $.gotpolice++;
                        $.cop2_in_garage = 1;
                      }
                      if ($.cop2.isInAnyCar()) {
                        $.cop2.setObjLeaveAnyCar();
                      }
                    }
                  }
                  else {
                    Text.PrintNow("PRO3_05", 5000, 1); //You killed Lance!
                    // SCM GOTO → mission_failed_protec3 (not lowered; manual jump required)
                    throw new Error("unresolved GOTO mission_failed_protec3"); // fallback: would break linear control flow
                  }
                }
                else {
                  $.cop1.markAsNoLongerNeeded();
                  $.cop2.markAsNoLongerNeeded();
                  $.gotpolice = 0;
                }
              }
            }
          }
          else {
            $.cop1.markAsNoLongerNeeded();
            $.cop2.markAsNoLongerNeeded();
            $.gotpolice = 0;
            $.cop1_in_garage = 0;
            $.cop2_in_garage = 0;
            $.cop3_in_garage = 0;
            $.cop4_in_garage = 0;
            $.counted_once3 = 0;
            $.counted_once4 = 0;
          }
        }
        else {
          $.cop1.markAsNoLongerNeeded();
          $.cop2.markAsNoLongerNeeded();
          $.gotpolice = 0;
          $.cop1_in_garage = 0;
          $.cop2_in_garage = 0;
          $.cop3_in_garage = 0;
          $.cop4_in_garage = 0;
          $.counted_once3 = 0;
          $.counted_once4 = 0;
        }
      }


      // ****************************************START OF CUTSCENE********************************
      if ($.gotpolice == 2) {
        if (!(World.IsAreaOccupied(465.2, 339.8, 5.0, 451.5, 341.0, 15.5, false /* FALSE */, true /* TRUE */, false /* FALSE */, false /* FALSE */, false /* FALSE */))) {
          if (!(Char.IsDead($.cop1))) {
            $.cop1.clearThreatSearch();
            $.cop1.setObjGotoPlayerOnFoot($.player1);
          }
          if (!(Char.IsDead($.cop2))) {
            $.cop2.clearThreatSearch();
            $.cop2.setObjGotoPlayerOnFoot($.player1);
          }
          if (!(Char.IsDead($.cop3))) {
            $.cop3.clearThreatSearch();
            $.cop3.setObjGotoPlayerOnFoot($.player1);
          }
          if (!(Char.IsDead($.cop4))) {
            $.cop4.clearThreatSearch();
            $.cop4.setObjGotoPlayerOnFoot($.player1);
          }
          Text.ClearPrints();
          $.player1.clearWantedLevel();
          Game.SetPoliceIgnorePlayer($.player1, true /* ON */);
          Game.SetMaxWantedLevel(0);
          $.player1.setControl(false /* OFF */);
          Hud.SwitchWidescreen(true /* ON */);
          Camera.SetFixedPosition(460.00, 350.5, 14.1, 0.0, 0.0, 0.0);
          Camera.PointAtPoint(458.85, 342.56, 11.7, 2 /* JUMP_CUT */);
          $.bud3_garage.close();
          while (!($.bud3_garage.isClosed())) {
            await asyncWait(0);
          }
          if ($.cop1_in_garage > 0) {
            if (!(Char.IsDead($.cop1))) {
              $.cop1.explodeHead();
            }
          }
          if ($.cop2_in_garage > 0) {
            if (!(Char.IsDead($.cop2))) {
              $.cop2.explodeHead();
            }
          }
          if ($.cop3_in_garage > 0) {
            if (!(Char.IsDead($.cop3))) {
              $.cop3.explodeHead();
            }
          }
          if ($.cop4_in_garage > 0) {
            if (!(Char.IsDead($.cop4))) {
              $.cop4.explodeHead();
            }
          }
          World.UnlockAllCarDoorsInArea(466.1, 325.5, 448.1, 339.2);
          World.ClearAreaOfChars(466.1, 325.5, 5.0, 448.0, 340.1, 15.0);
          Audio.LoadMissionAudio(1, "BUD3_1" as any);
          Audio.LoadMissionAudio(2, "BUD3_2" as any);
          while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
            await asyncWait(0);
          }
          $.cop_garage.remove();
          await asyncWait(2000);
          Text.PrintNow("PRO3_09", 5000, 1); //Tie 'em up and gag 'em!
          Audio.PlayMissionAudio(1);
          while (!(Audio.HasMissionAudioFinished(1))) {
            await asyncWait(0);
          }
          Audio.ClearMissionAudio(1);
          Text.ClearThisPrint("PRO3_09");
          Text.PrintNow("PRO3_10", 5000, 1); //Ooo. Fits perfectly!!
          Audio.PlayMissionAudio(2);
          while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.buddy))) {
            await asyncWait(0);
          }
          Audio.ClearMissionAudio(2);
          Text.ClearThisPrint("PRO3_10");
          $.buddy.delete();
          $.buddy = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL02, 456.4, 338.7, 10.8);
          $.buddy.setAsPlayerFriend($.player1, true /* TRUE */);
          $.buddy.clearThreatSearch();
          $.buddy.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.buddy.setOnlyDamagedByPlayer(true /* TRUE */);
          $.buddy.setCantBeDraggedOut(true /* TRUE */);
          $.buddy.giveWeapon(WEAPONTYPE_STUBBY_SHOTGUN, 30000);
          $.buddy.setRunning(true /* TRUE */);
          $.buddy.followPlayer($.player1);
          if ($.player1.isInAnyCar()) {
            $.scplayer.warpFromCarToCoord(458.5, 338.9, 10.8);
          }
          else {
            $.player1.setCoordinates(458.5, 338.9, 10.8);
          }
          if (!(Char.IsDead($.scplayer))) {
            $.scplayer.undress("player6");
            Streaming.LoadAllModelsNow();
            if (!(Char.IsDead($.scplayer))) {
              $.scplayer.dress();
            }
          }
          Audio.LoadMissionAudio(1, "BUD3_3" as any);
          Audio.LoadMissionAudio(2, "BUD3_4" as any);
          while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
            await asyncWait(0);
          }
          Text.PrintNow("PRO3_11", 5000, 1); //bit tight around the crotch though
          Audio.PlayMissionAudio(1);
          while (!(Audio.HasMissionAudioFinished(1))) {
            await asyncWait(0);
          }
          Audio.ClearMissionAudio(1);
          Text.ClearThisPrint("PRO3_11");
          Text.PrintNow("PRO3_12", 5000, 1); //Oh yeah yeah, mine too. Mine too.
          Audio.PlayMissionAudio(2);
          while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.buddy))) {
            await asyncWait(0);
          }
          Audio.ClearMissionAudio(2);
          Text.ClearThisPrint("PRO3_12");
          Audio.LoadMissionAudio(1, "BUD3_1c" as any);
          Audio.LoadMissionAudio(2, "BUD3_5" as any);
          while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
            await asyncWait(0);
          }
          $.cop1.delete();
          $.cop2.delete();
          $.cop3.delete();
          $.cop4.delete();
          await asyncWait(2000);
          $.bud3_garage.open();
          while (!($.bud3_garage.isOpen())) {
            await asyncWait(0);
          }
          Camera.RestoreJumpcut();
          $.player1.setControl(true /* ON */);
          Hud.SwitchWidescreen(false /* OFF */);
          $.bombplace.remove();
          $.speech_played = 0;
          $.disguise_goals = 1;
        }
        else {
          $.cop1.markAsNoLongerNeeded();
          $.cop2.markAsNoLongerNeeded();
          Text.PrintNow("PRO3_22", 5000, 1); //The lock-up door is blocked!  You need to clear the door so it can close.
        }
      }
      // ******************************************END OF CUTSCENE********************************

      if ($.flag_player_in_mall == 1) {
        $.player1.alterWantedLevelNoDrop(5);
        if (!(Char.IsDead($.waitingarmy1))) {
          $.waitingarmy1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.waitingarmy1.setObjKillPlayerAnyMeans($.player1);
        }
        if (!(Char.IsDead($.waitingarmy2))) {
          $.waitingarmy2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.waitingarmy2.setObjKillPlayerAnyMeans($.player1);
        }


      }
    }

    //setting up Mall


    if ($.disguise_goals == 1) {

      //creating FBI presence at entrances to Mall
      $.fbidoor1 = Char.Create(4 /* PEDTYPE_CIVMALE */, cop, 452.1, 994.0, 17.2); //door closest to bomb place, front EAST of mall
      $.fbidoor1.setHeading(171.9);
      $.fbidoor1.setOnlyDamagedByPlayer(true /* TRUE */);
      $.fbidoor1.giveWeapon(WEAPONTYPE_M4, 30000);
      $.fbidoor2 = Char.Create(4 /* PEDTYPE_CIVMALE */, cop, 377.3, 993.8, 17.2); //front WEST of mall
      $.fbidoor2.setHeading(172.1);
      $.fbidoor2.setOnlyDamagedByPlayer(true /* TRUE */);
      $.fbidoor2.giveWeapon(WEAPONTYPE_M4, 30000);
      $.fbidoor3 = Char.Create(4 /* PEDTYPE_CIVMALE */, cop, 348.9, 1122.3, 17.2); //middle WEST of mall
      $.fbidoor3.setHeading(86.1);
      $.fbidoor3.setOnlyDamagedByPlayer(true /* TRUE */);
      $.fbidoor3.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 30000);
      $.fbidoor4 = Char.Create(4 /* PEDTYPE_CIVMALE */, cop, 478.9, 1125.5, 17.5); //middle EAST of mall
      $.fbidoor4.setHeading(259.1);
      $.fbidoor4.setOnlyDamagedByPlayer(true /* TRUE */);
      $.fbidoor4.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 30000);
      $.fbidoor5 = Char.Create(4 /* PEDTYPE_CIVMALE */, cop, 368.9, 1208.5, 24.5); //multi storey car park entrance
      $.fbidoor5.setHeading(90.1);
      $.fbidoor5.setOnlyDamagedByPlayer(true /* TRUE */);
      $.fbidoor5.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 30000);
      $.fbidoor6 = Char.Create(4 /* PEDTYPE_CIVMALE */, cop, 380.5, 1257.9, 16.4); //back WEST of mall
      $.fbidoor6.setHeading(353.1);
      $.fbidoor6.setOnlyDamagedByPlayer(true /* TRUE */);
      $.fbidoor6.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 30000);
      $.fbidoor7 = Char.Create(4 /* PEDTYPE_CIVMALE */, cop, 447.7, 1257.1, 17.3); //back EAST of mall
      $.fbidoor7.setHeading(2.6);
      $.fbidoor7.setOnlyDamagedByPlayer(true /* TRUE */);
      $.fbidoor7.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 30000);


      //script controlled roadblocks - thanks obbe :)

      World.CreateScriptRoadblock(556.5, 763.3, 10.2, 538.5, 763.3, 10.2);
      World.CreateScriptRoadblock(306.3, 881.2, 10.2, 325.5, 881.2, 10.2);


      $.bombplace = Blip.AddForCoord(468.0, 1005.9, 18.1);

      //waiting for player1 to set bomb

      Text.Print("PRO3_02", 7000, 1); //Take the cop car and go and plant the bomb at the Tarbrush Coffee Shop in the Mall.
      $.disguise_goals = 2;


    }


    //planting the bomb


    if ($.disguise_goals == 2) {


      if ($.flag_player_in_mall == 1) {
        if ($.prot3_print_flag == 0) {
          Text.PrintNow("PRO3_23", 5000, 1); //Walk into the marker to plant the bomb.
          $.prot3_print_flag = 1;
        }
      }

      //speech

      if (!(Char.IsDead($.buddy))) {
        if ($.player1.locateAnyMeans3D(556.5, 763.3, 10.2, 20.0, 20.0, 20.0, false /* FALSE */) || $.player1.locateAnyMeans3D(306.3, 881.2, 10.2, 20.0, 20.0, 20.0, false /* FALSE */)) {
          if ($.speech_played == 0) {
            if ($.buddy.isInPlayersGroup($.player1)) {
              if ($.player1.isInAnyCar()) {
                $.player_buddy_car = $.player1.storeCarIsIn();
                $.player_buddy_car_speed = $.player_buddy_car.getSpeed();
                if ($.player_buddy_car_speed > 10.0) {
                  Text.PrintNow("PRO3_13", 5000, 1); //Easy brother! No cop drives this bad!
                  Audio.PlayMissionAudio(1);
                  while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.buddy))) {
                    await asyncWait(0);
                  }
                  Audio.ClearMissionAudio(1);
                  Text.ClearThisPrint("PRO3_13");
                  $.speech_played = 1;
                }
              }
            }
          }
        }
      }
      if ($.player1.isInArea3D(436.2, 995.1, 17.3, 468.7, 988.7, 19.7, false /* FALSE */) || $.player1.locateAnyMeans3D(377.3, 993.8, 18.2, 15.0, 15.0, 15.0, false /* FALSE */) || $.player1.locateAnyMeans3D(348.9, 1122.3, 18.2, 15.0, 15.0, 15.0, false /* FALSE */) || $.player1.locateAnyMeans3D(478.9, 1125.5, 17.5, 15.0, 15.0, 15.0, false /* FALSE */) || $.player1.locateAnyMeans3D(368.9, 1208.5, 25.5, 15.0, 15.0, 15.0, false /* FALSE */)) {
        if (!($.player1.isWantedLevelGreater(0))) {
          if (!(Char.IsDead($.buddy))) {
            if ($.speech_played2 == 0) {
              if ($.buddy.isInPlayersGroup($.player1)) {
                if (!($.player1.isInAnyCar())) {
                  Text.PrintNow("PRO3_14", 5000, 1); //Remember - smile at the other cops
                  Audio.PlayMissionAudio(2);
                  while (!(Audio.HasMissionAudioFinished(2))) {
                    await asyncWait(0);
                  }
                  Audio.ClearMissionAudio(2);
                  Text.ClearThisPrint("PRO3_14");
                  $.speech_played2 = 1;
                }
              }
            }
          }
          if ($.speech_played2 == 1) {
            Audio.LoadMissionAudio(1, "BUD3_6" as any);
            Audio.LoadMissionAudio(2, "BUD3_7" as any);
            while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
              await asyncWait(0);
            }
            if (!(Char.IsDead($.buddy))) {
              if ($.buddy.isInPlayersGroup($.player1)) {
                if (!($.player1.isInAnyCar())) {
                  Text.PrintNow("PRO3_15", 5000, 1); //Hey there officer. Nice badge, nice badge.
                  Audio.PlayMissionAudio(1);
                  while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.buddy))) {
                    await asyncWait(0);
                  }
                  Audio.ClearMissionAudio(1);
                  Text.ClearThisPrint("PRO3_15");
                  $.speech_played2 = 2;
                }
              }
            }
          }
          if (!(Char.IsDead($.buddy))) {
            if ($.speech_played2 == 2) {
              if ($.buddy.isInPlayersGroup($.player1)) {
                if (!($.player1.isInAnyCar())) {
                  Text.PrintNow("PRO3_16", 5000, 1); //Real smooth, Lance.
                  Audio.PlayMissionAudio(2);
                  while (!(Audio.HasMissionAudioFinished(2))) {
                    await asyncWait(0);
                  }
                  Audio.ClearMissionAudio(2);
                  Text.ClearThisPrint("PRO3_16");
                  $.speech_played2 = 3;
                }
              }
            }
          }
        }
      }

      //setting up cops, if player attacks any of them
      if ($.flag_cops_alerted == 0) {
        if (!($.player1.isWearing("player6"))) {
          if ($.flag_player_in_mall == 1) {
            $.flag_cops_alerted = 1;
          }
        }
        if (Char.IsDead($.waitingarmy1) || Char.IsDead($.waitingarmy2)) {
          $.flag_cops_alerted = 1;
        }
      }
      else {
        Text.Print("PRO3_07", 5000, 1); //You have blown your cover.  Hurry up and plant the bomb!
        if ($.timer_flag == 0) {
          Game.SetMaxWantedLevel(6);
          $.player1.alterWantedLevel(4);
        }
        if (!(Char.IsDead($.fbidoor1))) {
          $.fbidoor1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.fbidoor1.setObjKillPlayerAnyMeans($.player1);
        }
        if (!(Char.IsDead($.fbidoor2))) {
          $.fbidoor2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.fbidoor2.setObjKillPlayerAnyMeans($.player1);
        }
        if (!(Char.IsDead($.fbidoor3))) {
          $.fbidoor3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.fbidoor3.setObjKillPlayerAnyMeans($.player1);
        }
        if (!(Char.IsDead($.fbidoor4))) {
          $.fbidoor4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.fbidoor4.setObjKillPlayerAnyMeans($.player1);
        }
        if (!(Char.IsDead($.fbidoor5))) {
          $.fbidoor5.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.fbidoor5.setObjKillPlayerAnyMeans($.player1);
        }
        if (!(Char.IsDead($.fbidoor6))) {
          $.fbidoor6.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.fbidoor6.setObjKillPlayerAnyMeans($.player1);
        }
        if (!(Char.IsDead($.fbidoor7))) {
          $.fbidoor7.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.fbidoor7.setObjKillPlayerAnyMeans($.player1);
        }
        if (!(Char.IsDead($.waitingarmy1))) {
          $.waitingarmy1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.waitingarmy1.setObjKillPlayerAnyMeans($.player1);
        }
        if (!(Char.IsDead($.waitingarmy2))) {
          $.waitingarmy2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.waitingarmy2.setObjKillPlayerAnyMeans($.player1);
        }
      }
      if ($.timer_flag == 0) {
        if ($.player1.locateOnFoot3D(468.0, 1005.9, 18.1, 1.0, 1.0, 2.0, true /* TRUE */)) {
          $.bombplace.remove();
          $.player1.setControl(false /* OFF */);
          Audio.LoadMissionAudio(1, "BUD3_8a" as any);
          Audio.LoadMissionAudio(2, "BUD3_9a" as any);
          while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
            await asyncWait(0);
          }
          Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
          $.scplayer = $.player1.getChar();
          $.scplayer.setHeading(232.0);
          $.scplayer.setWaitState(WAITSTATE_BOMBER, 1000);
          Camera.SetBehindPlayer();
          await asyncWait(1000);
          if (!(Char.IsDead($.scplayer))) {
            $.scplayer.setWaitState(0 /* WAITSTATE_FALSE */, 1);
          }
          $.player1.setControl(true /* ON */);
          Game.SetEveryoneIgnorePlayer($.player1, false /* FALSE */);
          if (!(Char.IsDead($.scplayer))) {
            $.scplayer.setWaitState(0 /* WAITSTATE_FALSE */, 1);
          }
          TIMERB = 0;
          $.timer_flag = 1;
        }
      }
      if ($.timer_flag == 1) {
        if ($.speech_played3 == 0) {
          Text.PrintNow("PRO3_17", 5000, 1); //Ok, timers are set, 5 seconds and ticking.
          Audio.PlayMissionAudio(1);
          while (!(Audio.HasMissionAudioFinished(1))) {
            await asyncWait(0);
            if ($.player1.locateAnyMeans3D(448.65, 1003.0, 18.4, 5.0, 5.0, 5.0, false /* FALSE */)) {
              // SCM GOTO → shit_cunt (not lowered; manual jump required)
              throw new Error("unresolved GOTO shit_cunt"); // fallback: would break linear control flow
            }
          }
          Audio.ClearMissionAudio(1);
          Text.ClearThisPrint("PRO3_17");
          TIMERB = 0;


          if (!(Char.IsDead($.buddy))) {
            if ($.buddy.isInPlayersGroup($.player1)) {
              Text.PrintNow("PRO3_18", 5000, 1); //5 seconds?!! We got to get the hell out of here!
              Text.Print("PRO3_24", 5000, 1); //Get clear of the Cafe!
              Audio.PlayMissionAudio(2);
            }
          }
          $.speech_played3 = 1;
        }
        if (TIMERB > 6000 || $.player1.locateAnyMeans3D(448.65, 1003.0, 18.4, 5.0, 5.0, 5.0, false /* FALSE */)) {
          // SCM label shit_cunt
          //blowing out window front
          if ($.player1.locateAnyMeans3D(448.65, 1003.0, 18.4, 5.0, 5.0, 5.0, false /* FALSE */)) {
            if (!($.player1.isOnAnyBike())) {
              $.scplayer.clearAllAnims();
            }
            $.player1.setCoordinates(449.4, 1007.1, 18.1);
            $.player1.setHeading(182.3);
          }
          if (!($.player1.isInArea3D(458.7, 1002.1, 25.0, 398.2, 1095.3, 15.7, false /* FALSE */))) {
            if (!($.player1.isOnAnyBike())) {
              $.scplayer.clearAllAnims();
            }
            $.player1.setCoordinates(435.1, 1030.4, 18.1);
          }
          const _res433 = $.player1.getCoordinates();
$.player_x = _res433.x;
$.player_y = _res433.y;
$.player_z = _res433.z;
          $.player_y += 1.0;
          if (!(Char.IsDead($.buddy))) {
            $.buddy.setCoordinates($.player_x, $.player_y, $.player_z);
          }
          Text.ClearPrints();
          $.player1.setControl(false /* OFF */);
          Hud.SwitchWidescreen(true /* ON */);
          $.player1.setVisible(false /* FALSE */);
          if (!(Char.IsDead($.buddy))) {
            $.buddy.setProofs(true /* TRUE */, true /* TRUE */, true /* TRUE */, true /* TRUE */, true /* TRUE */);
          }
          Camera.SetFixedPosition(450.5358, 1023.1326, 22.5928, 0.0, 0.0, 0.0);
          Camera.PointAtPoint(451.2465, 1022.4432, 22.4529, 2 /* JUMP_CUT */);

          //shop counter
          Fx.AddExplosion(471.5, 1009.5, 18.1, 2 /* EXPLOSION_ROCKET */);
          Fx.AddExplosion(471.5, 1009.5, 18.1, 9 /* EXPLOSION_HELI_BOMB */);
          Fx.AddExplosion(471.5, 1009.5, 18.1, 1 /* EXPLOSION_MOLOTOV */);
          Fx.AddExplosion(471.5, 1009.5, 18.1, 5 /* EXPLOSION_HELI */);
          Camera.Shake(900);
          await asyncWait(1000);

          //looking out.  right shop window right
          Fx.AddExplosion(468.5, 1010.1, 18.1, 2 /* EXPLOSION_ROCKET */);
          Fx.AddExplosion(468.5, 1010.1, 18.1, 9 /* EXPLOSION_HELI_BOMB */);
          Fx.AddExplosion(468.5, 1010.1, 18.1, 1 /* EXPLOSION_MOLOTOV */);
          Fx.AddExplosion(468.5, 1010.1, 18.1, 5 /* EXPLOSION_HELI */);
          Fx.AddMovingParticleEffect(15 /* POBJECT_FIREBALL_AND_SMOKE */, 468.5, 1010.1, 18.1, 0.1, 0.0, 0.2, 0.6, 5, 156, 165, 11000);
          //looking out.  right shop window left
          Fx.AddExplosion(466.5, 1012.5, 18.1, 2 /* EXPLOSION_ROCKET */);
          Fx.AddExplosion(466.5, 1012.5, 18.1, 9 /* EXPLOSION_HELI_BOMB */);
          Fx.AddExplosion(466.5, 1012.5, 18.1, 1 /* EXPLOSION_MOLOTOV */);
          Camera.Shake(900);
          await asyncWait(1000);
          //looking out.  left shop window right
          Fx.AddExplosion(465.3, 1005.6, 18.1, 2 /* EXPLOSION_ROCKET */);
          Fx.AddExplosion(465.3, 1005.6, 18.1, 9 /* EXPLOSION_HELI_BOMB */);
          Fx.AddExplosion(465.3, 1005.6, 18.1, 1 /* EXPLOSION_MOLOTOV */);

          //looking out.  left shop window left
          Fx.AddExplosion(461.7, 1002.3, 18.1, 2 /* EXPLOSION_ROCKET */);
          Fx.AddExplosion(461.7, 1002.3, 18.1, 9 /* EXPLOSION_HELI_BOMB */);
          Fx.AddExplosion(461.7, 1002.3, 18.1, 1 /* EXPLOSION_MOLOTOV */);
          Fx.AddExplosion(461.7, 1002.3, 18.1, 5 /* EXPLOSION_HELI */);
          Fx.AddMovingParticleEffect(15 /* POBJECT_FIREBALL_AND_SMOKE */, 461.7, 1002.3, 18.1, 0.1, 0.0, 0.2, 0.8, 0, 0, 0, 11000);
          Camera.Shake(1800);
          await asyncWait(2000);
          Fx.AddExplosion(463.9, 1008.0, 18.1, 5 /* EXPLOSION_HELI */);
          Fx.AddExplosion(464.3, 1008.0, 18.1, 5 /* EXPLOSION_HELI */);
          Fx.AddExplosion(464.9, 1008.0, 18.1, 5 /* EXPLOSION_HELI */);
          Fx.AddExplosion(465.3, 1008.0, 18.1, 5 /* EXPLOSION_HELI */);
          Fx.AddExplosion(465.9, 1008.0, 18.1, 5 /* EXPLOSION_HELI */);
          Fx.AddMovingParticleEffect(4 /* POBJECT_DARK_SMOKE */, 463.9, 1008.0, 18.1, 0.2, 0.0, 0.1, 3.0, 0, 0, 0, 11000);
          Fx.AddExplosion(452.5358, 1023.1326, 22.5928, 5 /* EXPLOSION_HELI */);
          Camera.Shake(1000);
          Camera.SetFadingColor(255, 255, 255);
          Camera.DoFade(400, 0 /* FADE_OUT */);
          if (!($.player1.isDead())) {
            if (!(Char.IsDead($.buddy))) {
              World.SwapNearestBuildingModel(468.882, 1006.67, 20.681, 80.0, ml_tarbrush, ml_tarbrushdamage);
              if ($.player_in_coffee_shop == 0) {
                $.player_in_coffee_shop = 1;
              }
            }
          }
          Camera.DoFade(400, 1 /* FADE_IN */);
          $.mall_fire1 = ScriptFire.Create(471.5, 1009.5, 18.1);
          $.mall_fire2 = ScriptFire.Create(468.5, 1010.1, 18.1);
          $.mall_fire3 = ScriptFire.Create(465.3, 1005.6, 18.1);
          $.mall_fire4 = ScriptFire.Create(461.7, 1002.3, 18.1);
          $.mall_fire5 = ScriptFire.Create(463.9, 1008.0, 18.1);
          await asyncWait(3000);
          Camera.RestoreJumpcut();
          $.player1.setControl(true /* ON */);
          Hud.SwitchWidescreen(false /* OFF */);
          $.player1.setVisible(true /* TRUE */);
          Game.SetMaxWantedLevel(6);
          $.player1.alterWantedLevel(5);
          Game.SetPoliceIgnorePlayer($.player1, false /* OFF */);
          if (!(Char.IsDead($.buddy))) {
            $.buddy.setProofs(false /* FALSE */, false /* FALSE */, false /* FALSE */, false /* FALSE */, false /* FALSE */);
          }
          $.flag_cops_alerted = 1;
          Text.PrintNow("PRO3_08", 5000, 1); //Get back to Raphaels to change out of the cops uniforms.
          $.boutique1 = Blip.AddForCoord(-378.2, -549.8, 17.6);
          World.ClearAllScriptRoadblocks();
          $.disguise_goals = 3;
          $.timer_flag = 1;
        }
      }
    }


    //player1 must get to a boutique to change his outfit and get cops off his back


    if ($.disguise_goals == 3) {
      if ($.player1.locateStoppedOnFoot3D(-378.2, -549.8, 17.6, 3.0, 3.0, 3.0, true /* TRUE */)) {
        if (!(Char.IsDead($.buddy))) {
          if ($.buddy.isInPlayersGroup($.player1)) {
            // **************************************(START) CHANGE OF CLOTHES CUT SCENE*********************************************
            $.player1.setControl(false /* OFF */);
            Hud.SwitchWidescreen(true /* ON */);
            $.player1.setCoordinates(-381.4, -532.3, 16.1);
            $.cop1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL03, -378.2, -549.8, 17.6);
            $.cop1.setHeading(184.6);
            if (!(Char.IsDead($.cop1))) {
              $.cop1.setObjRunToCoord(-378.4, -561.1);
            }
            if (!(Char.IsDead($.buddy))) {
              $.buddy.setCoordinates(-377.4, -547.9, 16.7);
              $.buddy.setHeading(184.6);
              $.buddy.leaveGroup();
              $.buddy.setObjRunToCoord(-378.4, -561.1);
            }
            Camera.SetFixedPosition(-378.5, -546.1, 21.2, 0.0, 0.0, 0.0);
            Camera.PointAtPoint(-378.7, -553.7, 19.6, 2 /* JUMP_CUT */);
            await asyncWait(1000);

            //GET_PLAYER_CHAR player1 scplayer


            if (!(Char.IsDead($.cop1))) {
              $.cop1.setObjRunToCoord(-378.4, -561.1);
            }
            TIMERA = 0;
            while (!($.cop1.locateOnFoot2D(-378.4, -561.1, 1.0, 1.0, false /* FALSE */)) && !(TIMERA > 7000)) {
              await asyncWait(0);
              if (!(Char.IsDead($.cop1))) {
              }
            }
            if (!(Char.IsDead($.cop1))) {
              $.cop1.delete();
            }
            if (!(Char.IsDead($.scplayer))) {
              $.scplayer.undress("player");
              Streaming.LoadAllModelsNow();
              if (!(Char.IsDead($.scplayer))) {
                $.scplayer.dress();
              }
            }
            if (!(Char.IsDead($.buddy))) {
              $.buddy.delete();
            }
            $.cop1 = Char.Create(4 /* PEDTYPE_CIVMALE */, NULL, -378.4, -561.1, 18.5);


            if (!(Char.IsDead($.cop1))) {
              $.cop1.setObjRunToCoord(-378.2, -549.8);
            }
            TIMERA = 0;
            while (!($.cop1.locateOnFoot2D(-378.2, -549.8, 1.0, 1.0, false /* FALSE */)) && !(TIMERA > 7000)) {
              await asyncWait(0);
              if (!(Char.IsDead($.cop1))) {
              }


            }
            await asyncWait(2000);
            $.cop1.delete();
            $.player1.setCoordinates(-378.2, -549.8, 17.6);
            $.player1.setHeading(9.3);
            Camera.SetBehindPlayer();
            // **************************************(END) CHANGE OF CLOTHES CUT SCENE*********************************************
            $.boutique1.remove();
            // ******************************************START OF ASSET AQUIRED CUTSCENE********************************
            Camera.DoFade(500, 0 /* FADE_OUT */);
            while (Camera.GetFadingStatus()) {
              await asyncWait(0);
            }
            $.prot_cash_pickup = Pickup.CreateProtection(-378.4, -536.9, 17.2, $.taxifirm_revenue, $.taxifirm_revenue);
            Camera.SetFixedPosition(-369.1, -467.9, 22.7, 0.0, 0.0, 0.0);
            Camera.PointAtPoint(-370.6, -533.8, 18.0, 2 /* JUMP_CUT */);
            Camera.DoFade(500, 1 /* FADE_IN */);
            while (Camera.GetFadingStatus()) {
              await asyncWait(0);
            }
            Audio.PlayMissionPassedTune(1);
            Text.PrintBig("PRO_AS1", 5000, 6); //PROTECTION ASSET ACQUIRED
            await asyncWait(5000);
            Camera.SetFixedPosition(-377.1, -526.9, 19.4, 0.0, 0.0, 0.0);
            Camera.PointAtPoint(-377.6, -536.6, 17.5, 2 /* JUMP_CUT */);
            Text.PrintWithNumberNow("PRO_AS2", $.taxifirm_revenue, 6000, 1); //Chez Tommy will now generate revenue up to a maximum of $~1~. Make sure you collect it regularly.
            await asyncWait(6000);
            Camera.DoFade(500, 0 /* FADE_OUT */);
            while (Camera.GetFadingStatus()) {
              await asyncWait(0);
            }
            const _res434 = $.player1.getCoordinates();
$.player_x = _res434.x;
$.player_y = _res434.y;
$.player_z = _res434.z;
            Streaming.LoadScene($.player_x, $.player_y, $.player_z);
            Camera.DoFade(500, 1 /* FADE_IN */);
            Camera.RestoreJumpcut();
            $.player1.setControl(true /* ON */);
            Hud.SwitchWidescreen(false /* OFF */);
            // ******************************************END OF ASSET AQUIRED CUTSCENE********************************

            // SCM GOTO → mission_passed_protec3 (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_passed_protec3"); // fallback: would break linear control flow
          }
        }
      }
    }



    //checking buddy is still in player1s group


    if (!(Char.IsDead($.buddy))) {
      if ($.flag_buddy_in_group_prot3 == 1) {
        if (!($.buddy.isInPlayersGroup($.player1))) {
          if (TIMERA > 3000) {
            Text.PrintNow("PRO3_03", 5000, 1); //You've left Lance behind, go and get him.
          }
          $.cop_garage.remove();
          $.bombplace.remove();
          $.boutique1.remove();
          $.radar_blip_buddy = Blip.AddForChar($.buddy);
          $.flag_buddy_in_group_prot3 = 0;
        }
      }
      if ($.flag_buddy_in_group_prot3 == 0) {
        if ($.player1.locateAnyMeansChar3D($.buddy, 8.0, 8.0, 8.0, false /* FALSE */)) {
          $.buddy.followPlayer($.player1);
          if (TIMERA > 3000) {
            Text.PrintNow("PRO3_04", 5000, 1); //let's go
          }
          $.radar_blip_buddy.remove();
          $.cop_garage.remove();
          $.bombplace.remove();
          $.boutique1.remove();
          if ($.disguise_goals == 0) {
            $.cop_garage = Blip.AddForCoord(457.4, 335.28, 9.4);
          }
          if ($.disguise_goals == 2) {
            $.bombplace = Blip.AddForCoord(471.5, 1009.5, 18.1);
          }
          if ($.disguise_goals == 3) {
            $.boutique1 = Blip.AddForCoord(-378.2, -549.8, 17.6);
          }
          $.flag_buddy_in_group_prot3 = 1;
        }
      }
    }
    else {
      Text.PrintNow("PRO3_05", 5000, 1); //You killed Lance!
      // SCM GOTO → mission_failed_protec3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_protec3"); // fallback: would break linear control flow
    }


  }
}



// Mission failed

async function mission_failed_protec3() {


  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
  if ($.player_in_coffee_shop == 1) {
    World.SwapNearestBuildingModel(468.882, 1006.67, 20.681, 80.0, ml_tarbrushdamage, ml_tarbrush);
  }
}




// mission passed

async function mission_passed_protec3() {


  Text.ClearPrints();
  Text.PrintWithNumberBig("M_PASS", 10000, 5000, 1); //"Mission Passed!"
  $.clothes_pickup6 = Pickup.CreateClothes(405.7, -485.6, 12.3, 6);
  $.clothes6_created = 1;
  // START_NEW_SCRIPT cloth5
  //PLAY_MISSION_PASSED_TUNE 1

  $.player1.clearWantedLevel();
  $.player1.addScore(10000);
  Stat.PlayerMadeProgress(1);
  Stat.RegisterMissionPassed("BUD_3");
  $.protect_contact_blip.remove();
  $.baron_contact_blip.remove();
  $.baron_contact_blip = Blip.AddShortRangeSpriteForCoord(-378.4, -536.9, 17.2, RADAR_SPRITE_TOMMY);
  ++$.counter_60_percent;
  $.flag_protect_mission3_passed = 1;
}




// mission cleanup

async function mission_cleanup_protec3() {
  ONMISSION = 0;
  $.player1.setControl(true /* on */);
  Game.SetMaxWantedLevel(6);
  $.buddy.removeElegantly();
  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.MarkModelAsNoLongerNeeded(cop);
  Streaming.MarkModelAsNoLongerNeeded(army);
  Streaming.MarkModelAsNoLongerNeeded(buddyshot);
  Streaming.MarkModelAsNoLongerNeeded(m4);
  Streaming.MarkModelAsNoLongerNeeded(sentinel);
  Streaming.MarkModelAsNoLongerNeeded(police);
  Streaming.MarkModelAsNoLongerNeeded(dynamite);
  Streaming.MarkModelAsNoLongerNeeded(nitestick);
  Streaming.MarkModelAsNoLongerNeeded(173 /* colt45 */);
  $.dyn1.delete();
  $.dyn2.delete();
  $.dyn3.delete();
  $.dyn4.delete();
  $.dyn5.delete();
  $.boutique1.remove();
  $.cop_garage.remove();
  $.bombplace.remove();
  $.radar_blip_buddy.remove();
  Zone.SetPedInfo("RICH1", 1 /* DAY */, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("RICH1", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("RICH1", 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("RICH1", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCivilianCarInfo("RICH1", 1 /* DAY */, 90, 0, 400, 400, 0, 0, 100, 0, 10, 500, 500);
  Zone.SetCivilianCarInfo("RICH1", 0 /* NIGHT */, 90, 0, 400, 400, 0, 0, 100, 0, 10, 500, 500);
  Zone.SetGroup("RICH1", 1 /* DAY */, RICH1_PEDGRP);
  Zone.SetGroup("RICH1", 0 /* NIGHT */, RICH1_NIGHT_PEDGRP);


  Zone.SetPedInfo("SHOP1", 1 /* DAY */, 30, 0, 0, 50, 0, 50, 0, 0, 0, 0, 10);
  Zone.SetPedInfo("SHOP1", 0 /* NIGHT */, 20, 0, 0, 50, 0, 50, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("SHOP1", 1 /* DAY */, 15, 0, 0, 50, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("SHOP1", 0 /* NIGHT */, 13, 0, 0, 50, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCivilianCarInfo("SHOP1", 1 /* DAY */, 250, 250, 200, 0, 100, 0, 200, 0, 0, 500, 500);
  Zone.SetCivilianCarInfo("SHOP1", 0 /* NIGHT */, 250, 250, 200, 0, 100, 0, 200, 0, 0, 500, 500);
  Zone.SetGroup("SHOP1", 1 /* DAY */, SHOP1_PEDGRP);
  Zone.SetGroup("SHOP1", 0 /* NIGHT */, SHOP1_NIGHT_PEDGRP);


  if ($.mansion_clothes_created == 1) {
    $.mansion_clothes = Pickup.CreateClothes(-384.5, -591.9, 25.3, 1);
  }
  if ($.hotel_clothes_created == 1) {
    $.clothes_pickup1 = Pickup.CreateClothes(226.4, -1265.6, 20.1, 1);
  }
  if ($.safehouse_created2 == 1) {
    $.safehouse_clothes2 = Pickup.CreateClothes(-820.2, 1364.1, 66.4, 1);
  }
  if ($.clothes2_created == 1) {
    $.clothes_pickup2 = Pickup.CreateClothes(97.5, -1133.6, 10.4, 2);
  }
  if ($.clothes3_created == 1) {
    $.clothes_pickup3 = Pickup.CreateClothes(364.2, 1086.1, 19.0, 3);
  }
  if ($.clothes4_created == 1) {
    $.clothes_pickup4 = Pickup.CreateClothes(106.5, 253.0, 21.7, 4);
  }
  if ($.clothes5_created == 1) {
    $.clothes_pickup5 = Pickup.CreateClothes(-1024.5, -433.9, 10.9, 5);
  }
  if ($.flag_protect_mission3_passed == 0) {
    if ($.clothes6_created == 1) {
      $.clothes_pickup6 = Pickup.CreateClothes(405.7, -485.6, 12.3, 6);
    }
  }
  if ($.clothes7_created == 1) {
    $.clothes_pickup7 = Pickup.CreateClothes(414.3, 1042.0, 25.4, 8);
  }
  if ($.clothes8_created == 1) {
    $.clothes_pickup8 = Pickup.CreateClothes(158.3, -1275.9, 10.6, 9);
  }
  if ($.clothes9_created == 1) {
    $.clothes_pickup9 = Pickup.CreateClothes(-917.4, 885.1, 11.0, 10);
  }
  if ($.clothes13_created == 1) {
    $.clothes_pickup13 = Pickup.CreateClothes(465.3, -57.4, 15.7, 7);
  }


  World.RemoveParticleEffectsInArea(466.0, 1023.0, 14.1, 476.0, 1033.0, 24.1);
  World.RemoveAllScriptFires();
  $.timer_mobile_start = Clock.GetGameTimer();
  $.flag_player_on_army_ped_mission = 0;
  Mission.Finish();
}

export async function prot3() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************Protect3****************************************
  // *****************************************Disguise****************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // Cop land


  // SCRIPT_NAME protec3
  // Mission start stuff

  await mission_start_protec3();  // SCM GOSUB mission_start_protec3
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_failed_protec3();  // SCM GOSUB mission_failed_protec3
  }
  await mission_cleanup_protec3();  // SCM GOSUB mission_cleanup_protec3
  // MissionBoundary

  // Variables for mission
  //people, cars and objects

  // VAR_INT cop1
  // VAR_INT cop2
  // VAR_INT cop3
  // VAR_INT cop4
  // VAR_INT waitingarmy1
  // VAR_INT waitingarmy2
  // VAR_INT fbidoor1
  // VAR_INT fbidoor2
  // VAR_INT fbidoor3
  // VAR_INT fbidoor4
  // VAR_INT fbidoor5
  // VAR_INT fbidoor6
  // VAR_INT fbidoor7
  // VAR_INT mall_fire1
  // VAR_INT mall_fire2
  // VAR_INT mall_fire3
  // VAR_INT mall_fire4
  // VAR_INT mall_fire5
  // VAR_INT player_buddy_car
  // VAR_INT prot_cash_pickup
  // VAR_INT free_sentinel_car
  // VAR_INT free_cop_car
  // VAR_INT cop1_in_garage
  // VAR_INT cop2_in_garage
  // VAR_INT cop3_in_garage
  // VAR_INT cop4_in_garage
  // VAR_INT dyn1
  // VAR_INT dyn2
  // VAR_INT dyn3
  // VAR_INT dyn4
  // VAR_INT dyn5
  // VAR_INT counted_once3
  // VAR_INT counted_once4

  //blips

  // VAR_INT bombplace
  // VAR_INT cop_garage
  // VAR_INT boutique1
  // VAR_INT radar_blip_buddy

  //flags

  // VAR_INT disguise_goals
  // VAR_INT gotpolice
  // VAR_INT flag_buddy_in_group_prot3
  // VAR_INT timer_flag
  // VAR_INT flag_cops_alerted
  // VAR_INT speech_played
  // VAR_INT speech_played2
  // VAR_INT speech_played3
  // VAR_INT player_in_coffee_shop
  // VAR_FLOAT player_buddy_car_speed
  // VAR_INT prot3_print_flag
  // VAR_INT cop3_flag
  // VAR_INT cop4_flag

  // ****************************************Mission Start************************************

}
