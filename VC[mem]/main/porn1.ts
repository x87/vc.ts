// Generated from main/porn1.sc

import { $ } from "../vars.mts";

async function mission_start_porn1() {
  Text.ClearThisPrint("M_FAIL");
  ONMISSION = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  Text.LoadMissionText("PORN1");
  Shortcut.SetDropoffPointForMission(21.489, 966.28, 9.5, 172.7);
  // *****************************************Set Flags/variables************************************


  $.pap_guards_count = 0;
  $.pap_blip_flag = 0;
  $.porn1_goals = 0;
  $.papcar_coordx = 0.0;


  $.pap_car_health = 0;
  $.random_car_wander = 0;
  $.timera_reset = 0;


  $.candy_sexxx_waitstate = 0;
  $.flag_candy_sexxx_in_group = 0;
  $.flag_mercedes_in_group = 0;
  $.candy_out_limo = 0;


  $.papcar_coordy = 0.0;
  $.papcar_coord2x = 0.0;
  $.papcar_coord2y = 0.0;
  $.papcar_coordz = 0.0;


  $.candy_tits1 = 0;
  $.candy_tits2 = 0;
  $.tits_car_health = 0;
  $.tits_car_speed = 0.0;

  // ****************************************START OF CUTSCENE********************************

  Audio.LoadMissionAudio(1, "mono_3" as any);


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSdirec");
  Streaming.LoadSpecialCharacter(3, "CSjuggz");
  Streaming.LoadSpecialCharacter(4, "cmraman");
  Streaming.LoadSpecialCharacter(5, "mporna");


  Streaming.LoadSpecialModel(CUTOBJ01, "cs_cam");
  Streaming.LoadSpecialModel(CUTOBJ02, "drchair");


  Streaming.LoadScene(-86.0, 929.0, 9.764);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasSpecialCharacterLoaded(4)) || !(Streaming.HasSpecialCharacterLoaded(5))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(CUTOBJ01)) || !(Streaming.HasModelLoaded(CUTOBJ02))) {
    await asyncWait(0);
  }


  Cutscene.Load("porn_1");
  Cutscene.SetOffset(-69.128, 920.965, 9.764);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_direc = CutsceneObject.Create(SPECIAL02);
  $.cs_direc.setAnim("CSdirec");


  $.cs_juggz = CutsceneObject.Create(SPECIAL03);
  $.cs_juggz.setAnim("CSjuggz");


  $.cs_cmraman = CutsceneObject.Create(SPECIAL04);
  $.cs_cmraman.setAnim("cmraman");


  $.cs_mporna = CutsceneObject.Create(SPECIAL05);
  $.cs_mporna.setAnim("mporna");


  $.cs_camera = CutsceneObject.Create(CUTOBJ01);
  $.cs_camera.setAnim("cs_cam");


  $.cs_drchair = CutsceneObject.Create(CUTOBJ02);
  $.cs_drchair.setAnim("drchair");


  World.ClearArea(-66.0, 933.04, 10.2, 1.0, true /* TRUE */);
  $.player1.setCoordinates(-66.0, 933.04, 10.2);
  $.player1.setHeading(275.6);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 2533) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR1_A", 10000, 1); // Action


  while ($.cs_time < 3343) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR1_B", 10000, 1); // Who!, Now that's big


  while ($.cs_time < 6008) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR1_C", 10000, 1); // 12 inches, that is regulation baby.


  while ($.cs_time < 11226) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR1_D", 10000, 1); // CUT!! Who IS this idiot? You! YOU! Why are you in my space? WHY?


  while ($.cs_time < 16462) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR1_E", 10000, 1); // What is all this crap?


  while ($.cs_time < 18076) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR1_F", 10000, 1); // Aliens? Fishing poles?


  while ($.cs_time < 20247) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR1_G", 10000, 1); // Who has ever seen a shark that big?


  while ($.cs_time < 22282) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR1_H", 10000, 1); // All this stuff's gotta go.


  while ($.cs_time < 24320) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR1_I", 10000, 1); //Why'd you get in this business, you prick?


  while ($.cs_time < 26352) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR1_J", 10000, 1); //Huh?


  while ($.cs_time < 27126) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR1_K", 10000, 1); //For the pussy, that's why! What is this??


  while ($.cs_time < 30127) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR1_L", 10000, 1); //This? This is my art -SECURITY!


  while ($.cs_time < 34028) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR1_M", 10000, 1); //Look, you pompous asshole, I own you now. I own all of this.


  while ($.cs_time < 38273) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR1_N", 10000, 1); //We're going to turn this place around...


  while ($.cs_time < 40013) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR1_O", 10000, 1); //I'm going to make you rich


  while ($.cs_time < 42086) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR1_P", 10000, 1); //Uh..You're-you-you're Tommy Vercetti? But they said that you were-


  while ($.cs_time < 46091) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR1_Q", 10000, 1); //That's right.


  while ($.cs_time < 47169) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR1_R", 10000, 1); //We're going to make some changes around here and start making some real money.


  while ($.cs_time < 50143) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR1_S", 10000, 1); //Actually, have you ever thought about...


  while ($.cs_time < 52720) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR1_T", 10000, 1); //But first we're going to need some good-looking broads


  while ($.cs_time < 54090) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("POR1_U", 10000, 1); //Yeh, girls are fine but you... wow!

  /*
  WHILE cs_time < 55090
  WAIT 0
  GET_CUTSCENE_TIME cs_time
  ENDWHILE

  CLEAR_PRINTS
  */

  while ($.cs_time < 56976) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Camera.DoFade(1500, 0 /* FADE_OUT */);


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


  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);
  Streaming.UnloadSpecialCharacter(5);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ02);
  World.SetCarDensityMultiplier(1.0);
  World.SetPedDensityMultiplier(1.0);

  /*
  IF NOT WAS_CUTSCENE_SKIPPED
  WHILE NOT HAS_MISSION_AUDIO_FINISHED 1
  WAIT 0
  ENDWHILE
  ENDIF
  */
  // ******************************************END OF CUTSCENE********************************

  Camera.SetFadingColor(0, 0, 0);
  await asyncWait(500);
  Streaming.LoadScene(-67.000, 939.297, 10.940);
  Camera.SetBehindPlayer();
  //------------------REQUEST_MODELS ------------------------------

  $.player1.setMood(PLAYER_MOOD_CALM, 60000);


  Streaming.RequestModel(WMYPI);
  Streaming.RequestModel(BMYCR);
  Streaming.RequestModel(HMYRI);
  Streaming.RequestModel(sentinel);
  Streaming.RequestModel(172 /* bat */);
  Streaming.RequestModel(tec9);
  Streaming.RequestModel(stretch);


  while (!(Streaming.HasModelLoaded(WMYPI)) || !(Streaming.HasModelLoaded(BMYCR)) || !(Streaming.HasModelLoaded(HMYRI))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(sentinel)) || !(Streaming.HasModelLoaded(172 /* bat */)) || !(Streaming.HasModelLoaded(tec9)) || !(Streaming.HasModelLoaded(stretch))) {
    await asyncWait(0);
  }


  Streaming.LoadSpecialCharacter(1, "IGCandy");
  Streaming.LoadSpecialCharacter(2, "IGMerc");


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2))) {
    await asyncWait(0);
  }
  Streaming.LoadAllModelsNow();


  $.candy_sexxx_blip = Blip.AddForCoord(-448.3, 1324.6, 10.7);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  Text.PrintNow("POR1_01", 5000, 1); //Candy Suxxx would be perfect for a starring role!
  Text.Print("POR1_23", 5000, 1); //Candy will be taking care of business ~h~Downtown~g~.


  Char.SetEnterCarRangeMultiplier(3.0);


  while (!($.player1.locateOnFoot3D(-448.3, 1324.6, 10.7, 1.0, 1.0, 2.0, true /* TRUE */))) {
    await asyncWait(0);
    if ($.player1.locateInCar3D(-448.3, 1324.6, 10.7, 20.0, 20.0, 20.0, false /* FALSE */)) {
      $.player_car_porn1 = $.player1.storeCarIsIn();
    }
  }


  Audio.LoadMissionAudio(1, "PORN1_1" as any);
  Audio.LoadMissionAudio(2, "PORN1_2" as any);


  while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
  }

  // ******************************************START OF Meeting Candy CUTSCENE********************************
  //cutscene meeting candy and pimp


  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);


  if (!(Car.IsDead($.player_car_porn1))) {
    if ($.player_car_porn1.locate2D(-448.3, 1324.6, 30.0, 30.0, false /* FALSE */)) {
      $.player_car_porn1.setCoordinates(-441.9, 1337.0, 10.7);
      $.player_car_porn1.setHeading(289.8);
    }
  }


  World.ClearAreaOfCars(-584.8, 1320.7, 5.5, -309.7, 1360.2, 15.5);
  World.SetCarDensityMultiplier(0.0);


  $.player1.setCoordinates(-448.3, 1324.6, 10.7);
  $.player1.setHeading(19.7);
  Camera.SetFixedPosition(-445.3, 1321.8, 13.0, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-450.3, 1327.7, 12.0, 2 /* JUMP_CUT */);


  Text.PrintNow("POR1_26", 5000, 1); //Here's Candy, looks like she has been with Congressman Shrub again.

  //creating candy in car

  $.candy_stretch_limo = Car.Create(stretch, -492.4, 1335.8, 10.4);
  $.candy_stretch_limo.setDrivingStyle(2);
  $.candy_stretch_limo.setHeading(276.1);
  $.candy_limo_driver = Char.CreateInsideCar($.candy_stretch_limo, 4 /* PEDTYPE_CIVMALE */, HMYRI);
  $.candy_stretch_limo.changeColor(34 /* CARCOLOUR_YELLOW5 */, 34 /* CARCOLOUR_YELLOW5 */);
  $.candy_sexxx = Char.CreateAsPassenger($.candy_stretch_limo, 5 /* PEDTYPE_CIVFEMALE */, SPECIAL01, 2);
  $.candy_sexxx.setAsPlayerFriend($.player1, true /* TRUE */);
  $.candy_sexxx.clearThreatSearch();
  $.candy_sexxx.setOnlyDamagedByPlayer(true /* TRUE */);
  $.candy_sexxx.setAnimGroup(15 /* ANIM_SEXY_WOMANPED */);
  $.candy_sexxx.setRunning(true /* TRUE */);
  $.candy_sexxx.setNeverTargeted(true /* TRUE */);
  $.candy_sexxx.setInPlayersGroupCanFight(false /* FALSE */);
  $.candy_stretch_limo.setForwardSpeed(15.0);
  $.candy_stretch_limo.setCruiseSpeed(15.0);
  $.candy_stretch_limo.gotoCoordinates(-448.4, 1340.6, 10.4);

  //limo pulling up

  TIMERB = 0;
}



async function pron1_cutscene_part2() {
  // SCM GOTO → pron1_cutscene_part2 lowered to endless loop
  while (true) {
    await asyncWait(0);


    if (!(Car.IsDead($.candy_stretch_limo))) {
      if (TIMERB > 7000) {
        // SCM GOTO → pron1_cutscene_part2_finish (not lowered; manual jump required)
        throw new Error("unresolved GOTO pron1_cutscene_part2_finish"); // fallback: would break linear control flow
      }
      if (!($.candy_stretch_limo.locate3D(-448.4, 1340.6, 10.4, 4.0, 4.0, 4.0, false /* FALSE */))) {
        $.candy_stretch_limo.gotoCoordinates(-448.4, 1340.6, 10.4);
      }
      else {
        $.candy_stretch_limo.setCruiseSpeed(0.0);
        // SCM GOTO → pron1_cutscene_part2_finish (not lowered; manual jump required)
        throw new Error("unresolved GOTO pron1_cutscene_part2_finish"); // fallback: would break linear control flow
      }
    }


  }
}


//getting candy out of car

async function pron1_cutscene_part2_finish() {
  if (!(Car.IsDead($.candy_stretch_limo))) {
    if (!(Char.IsDead($.candy_sexxx))) {
      $.candy_stretch_limo.setCruiseSpeed(0.0);
      $.candy_sexxx.setObjLeaveCar($.candy_stretch_limo);
    }
  }
}



async function getting_candy_out_car() {
  // SCM GOTO → getting_candy_out_car lowered to endless loop
  while (true) {
    await asyncWait(0);
    if (!(Car.IsDead($.candy_stretch_limo))) {
      $.candy_out_limo = $.candy_stretch_limo.getNumberOfPassengers();
      if ($.candy_out_limo == 0) {
        if (!(Char.IsDead($.candy_sexxx))) {
          Camera.RestoreJumpcut();
          $.candy_sexxx.setObjGotoCharOnFoot($.scplayer);
          $.scplayer.setObjGotoCharOnFoot($.candy_sexxx);
          if (!(Car.IsDead($.candy_stretch_limo))) {
            $.candy_stretch_limo.setCruiseSpeed(15.0);
            $.candy_stretch_limo.gotoCoordinates(-338.6, 1133.1, 8.5);
          }
          //creating pump action pimp car
          $.pap_car = Car.Create(sentinel, -492.4, 1335.8, 10.4);
          $.pap_car.setHeading(276.1);
          $.pap_car.setDrivingStyle(2);
          $.pap_car.setOnlyDamagedByPlayer(true /* TRUE */);
          $.pap_man = Char.CreateInsideCar($.pap_car, 4 /* PEDTYPE_CIVMALE */, WMYPI);


          $.pap_man.giveWeapon(WEAPONTYPE_tec9, 30000);
          $.pap_man.setOnlyDamagedByPlayer(true /* TRUE */);
          $.pap_guard1 = Char.CreateAsPassenger($.pap_car, 4 /* PEDTYPE_CIVMALE */, BMYCR, 0);
          $.pap_guard1.giveWeapon(1 /* WEAPONTYPE_BASEBALLBAT */, 1);
          $.pap_guard1.clearThreatSearch();
          $.pap_guard2 = Char.CreateAsPassenger($.pap_car, 4 /* PEDTYPE_CIVMALE */, BMYCR, 1);
          $.pap_guard2.giveWeapon(1 /* WEAPONTYPE_BASEBALLBAT */, 1);
          $.pap_guard2.clearThreatSearch();
          $.pap_guard3 = Char.CreateAsPassenger($.pap_car, 4 /* PEDTYPE_CIVMALE */, BMYCR, 2);
          $.pap_guard3.giveWeapon(WEAPONTYPE_tec9, 30000);
          $.pap_guard3.clearThreatSearch();
          $.pap_man_blip = Blip.AddForChar($.pap_man);
          $.candy_stretch_limo.setForwardSpeed(15.0);
          $.pap_car.setCruiseSpeed(15.0);
          $.pap_car.gotoCoordinates(-448.4, 1340.6, 10.4);
        }
        TIMERB = 0;
        // SCM GOTO → getting_candy_out_car2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO getting_candy_out_car2"); // fallback: would break linear control flow
      }
      else {
        // SCM GOTO → getting_candy_out_car (not lowered; manual jump required)
        throw new Error("unresolved GOTO getting_candy_out_car"); // fallback: would break linear control flow
      }
    }
  }
}


//getting candy to walk to player

async function getting_candy_out_car2() {
  // SCM GOTO → getting_candy_out_car2 lowered to endless loop
  while (true) {
    await asyncWait(0);
    if (TIMERB > 7000) {
      // SCM GOTO → pron1_cutscene_part1_finish (not lowered; manual jump required)
      throw new Error("unresolved GOTO pron1_cutscene_part1_finish"); // fallback: would break linear control flow
    }
    if (!(Char.IsDead($.candy_sexxx))) {
      if ($.player1.locateAnyMeansChar2D($.candy_sexxx, 2.0, 2.0, false /* FALSE */)) {
        $.candy_sexxx.setObjNoObj();
        $.scplayer.setObjNoObj();
        $.scplayer.turnToFaceChar($.candy_sexxx);
        $.candy_sexxx.turnToFacePlayer($.player1);
        // SCM GOTO → pron1_cutscene_part1_finish (not lowered; manual jump required)
        throw new Error("unresolved GOTO pron1_cutscene_part1_finish"); // fallback: would break linear control flow
      }
    }
  }
}



async function pron1_cutscene_part1_finish() {



  Camera.SetFixedPosition(-450.2, 1328.1, 12.8, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-449.9, 1330.8, 12.2, 2 /* JUMP_CUT */);


  $.scplayer.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000);


  Text.PrintNow("POR1_04", 4000, 1); //PLAYER: Yo, Candy. I'm looking for movie talent -you interested?
  Audio.PlayMissionAudio(1);
  while (!(Audio.HasMissionAudioFinished(1))) {
    await asyncWait(0);
  }
  Audio.ClearMissionAudio(1);
  Text.ClearThisPrint("POR1_04");


  $.scplayer.setWaitState(0 /* WAITSTATE_FALSE */, 100);
  if (!(Char.IsDead($.candy_sexxx))) {
    $.candy_sexxx.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000);
  }


  if (!(Char.IsDead($.pap_man))) {
    if (!(Car.IsDead($.pap_car))) {
      $.pap_man.setObjLeaveCar($.pap_car);
    }
  }


  Text.PrintNow("POR1_05", 4000, 1); //CANDY: Sure! You'd have to talk to my agent...
  Audio.PlayMissionAudio(2);
  while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.candy_sexxx))) {
    if (!(Char.IsDead($.pap_man))) {
      $.pap_man.turnToFaceChar($.scplayer);
    }
    await asyncWait(0);
  }
  Audio.ClearMissionAudio(2);
  Text.ClearThisPrint("POR1_05");


  Audio.LoadMissionAudio(1, "PRN1_3A" as any);
  Audio.LoadMissionAudio(2, "PORN1_3" as any);


  while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
  }



  if (!(Char.IsDead($.candy_sexxx))) {
    $.candy_sexxx.setWaitState(0 /* WAITSTATE_FALSE */, 100);
    if (!(Char.IsDead($.pap_man))) {
      $.candy_sexxx.turnToFaceChar($.pap_man);
    }
  }


  Text.PrintNow("POR1_06", 4000, 1); //The HELL are you doin'?
  Audio.PlayMissionAudio(2);
  while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.pap_man))) {
    await asyncWait(0);
  }
  Audio.ClearMissionAudio(2);
  Text.ClearThisPrint("POR1_06");


  $.scplayer.turnToFaceCoord(-448.4, 1340.6, 10.4);
  //SET_CHAR_WAIT_STATE scplayer WAITSTATE_PLAYANIM_CHAT 10000

  $.scplayer.setObjGotoCoordOnFoot(-448.4, 1333.6);



  Text.PrintNow("POR1_07", 4000, 1); //You should have stayed at home today!
  Audio.PlayMissionAudio(1);
  while (!(Audio.HasMissionAudioFinished(1))) {
    await asyncWait(0);
  }
  Audio.ClearMissionAudio(1);
  Text.ClearThisPrint("POR1_07");

  //SET_CHAR_WAIT_STATE scplayer WAITSTATE_FALSE 100


  Audio.LoadMissionAudio(2, "PRN1_21" as any);


  while (!(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
  }


  if (!(Char.IsDead($.pap_man))) {
    if (!(Car.IsDead($.pap_car))) {
      $.pap_man.setObjEnterCarAsDriver($.pap_car);
    }
  }


  Text.PrintNow("POR1_7b", 4000, 1); //Can you believe this asshole?


  Audio.PlayMissionAudio(2);
  while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.pap_man))) {
    await asyncWait(0);
  }
  Audio.ClearMissionAudio(2);
  Text.ClearThisPrint("POR1_7b");


  //getting guards out of car to come after player1

  if (!(Char.IsDead($.pap_guard1))) {
    if (!(Char.IsDead($.pap_guard2))) {
      if (!(Char.IsDead($.pap_guard3))) {
        $.pap_guard1.setObjKillPlayerOnFoot($.player1);
        $.pap_guard2.setObjKillPlayerOnFoot($.player1);
        $.pap_guard3.setObjKillPlayerOnFoot($.player1);
      }
    }
  }

  //setting candy to duck

  if (!(Char.IsDead($.candy_sexxx))) {
    $.candy_sexxx.setStayInSamePlace(true /* TRUE */);
    $.candy_sexxx_waitstate = 1;
  }
  else {
    Text.PrintNow("POR1_03", 5000, 1); //Candy is dead!
    // SCM GOTO → mission_failed_porn1 (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_failed_porn1"); // fallback: would break linear control flow
  }


  await asyncWait(1000);

  //deleting candy car

  if (!(Car.IsDead($.candy_stretch_limo))) {
    if (!($.candy_stretch_limo.isOnScreen())) {
      if (!(Char.IsDead($.candy_limo_driver))) {
        $.candy_limo_driver.delete();
      }
      $.candy_stretch_limo.delete();
    }
  }


  $.scplayer.setObjNoObj();
  World.SetCarDensityMultiplier(1.0);
  $.player_car_porn1.markAsNoLongerNeeded();
  Camera.RestoreJumpcut();
  Camera.SetBehindPlayer();
  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  $.candy_sexxx_blip.remove();
  Text.PrintNow("POR1_02", 7000, 1); //Go and take out Candy's pimp, then return and pick up Candy.
  if (!(Car.IsDead($.pap_car))) {
    StuckCarCheck.Add($.pap_car, 1.5, 4000);
  }
}

// ******************************************END OF Meeting Candy CUTSCENE********************************



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Main Loop//////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function porn1_loop() {
  // SCM GOTO → porn1_loop lowered to endless loop
  while (true) {


    await asyncWait(0);


    /*
    //////////TEST////////////////
    IF IS_BUTTON_PRESSED PAD1 CROSS
    IF NOT IS_CAR_DEAD pap_car
    EXPLODE_CAR pap_car
    ENDIF
    ENDIF
    */



    if ($.porn1_goals == 0) {
      if (!(Char.IsDead($.pap_man))) {
        if (!(Car.IsDead($.pap_car))) {
          if (!($.player1.locateAnyMeansCar2D($.pap_car, 80.0, 80.0, false /* FALSE */))) {
            $.pap_car.setOnlyDamagedByPlayer(true /* TRUE */);
          }
          else {
            $.pap_car.setOnlyDamagedByPlayer(false /* FALSE */);
          }


          //if player1 is in range, pimp car will stop and pimp peeps will get out

          $.pap_car_health = $.pap_car.getHealth();
          if ($.pap_car_health > 300) {
            if ($.pap_man.isInCar($.pap_car)) {
              $.pap_guards_count = $.pap_car.getNumberOfPassengers();
              if ($.pap_guards_count == 3) {
                if ($.player1.locateAnyMeansCar2D($.pap_car, 50.0, 50.0, false /* FALSE */)) {
                  if ($.timera_reset == 0) {
                    TIMERA = 0;
                    $.timera_reset = 1;
                  }
                  $.pap_car.setCruiseSpeed(0.0);
                  if (!($.player1.isInAnyCar())) {
                    if (!(Char.IsDead($.pap_guard1))) {
                      if (!(Char.IsDead($.pap_guard2))) {
                        if (!(Char.IsDead($.pap_guard3))) {
                          $.pap_guard1.setObjKillPlayerOnFoot($.player1);
                          $.pap_guard2.setObjKillPlayerOnFoot($.player1);
                          $.pap_guard3.setObjKillPlayerOnFoot($.player1);
                          $.pap_guards_count = 0;
                          $.random_car_wander = 0;
                          $.timera_reset = 0;
                        }
                      }
                    }
                  }
                  else {
                    if (TIMERA > 3000) {
                      if (!(Char.IsDead($.pap_guard1))) {
                        if (!(Char.IsDead($.pap_guard2))) {
                          if (!(Char.IsDead($.pap_guard3))) {
                            $.pap_guard1.setObjKillPlayerOnFoot($.player1);
                            $.pap_guard2.setObjKillPlayerOnFoot($.player1);
                            $.pap_guard3.setObjKillPlayerOnFoot($.player1);
                            $.pap_guards_count = 0;
                            $.random_car_wander = 0;
                            $.timera_reset = 0;
                          }
                        }
                      }
                    }
                  }
                }
                else {
                  $.pap_car.setCruiseSpeed(20.0);
                }
              }
              else {
                if ($.random_car_wander == 0) {
                  $.pap_car.wanderRandomly();
                  $.random_car_wander = 1;
                }
                $.pap_car.setCruiseSpeed(40.0); //pimp car will then speed up and new pimp guards will be created
                if (!($.player1.locateAnyMeansCar2D($.pap_car, 100.0, 100.0, false /* FALSE */))) {
                  if (!($.pap_car.isOnScreen())) {
                    if (!(Char.IsDead($.pap_guard1))) {
                      if (!($.pap_guard1.isInCar($.pap_car))) {
                        if (!($.player1.locateAnyMeansChar2D($.pap_guard1, 60.0, 60.0, false /* FALSE */))) {
                          $.pap_guard1.explodeHead();
                          $.pap_guard1.markAsNoLongerNeeded();
                          $.pap_guard1 = Char.CreateAsPassenger($.pap_car, 4 /* PEDTYPE_CIVMALE */, BMYCR, 0);
                          $.pap_guard1.giveWeapon(WEAPONTYPE_tec9, 30000);
                        }
                      }
                    }
                    else {
                      $.pap_guard1.markAsNoLongerNeeded();
                      $.pap_guard1 = Char.CreateAsPassenger($.pap_car, 4 /* PEDTYPE_CIVMALE */, BMYCR, 0);
                      $.pap_guard1.giveWeapon(WEAPONTYPE_tec9, 30000);
                    }
                    if (!(Char.IsDead($.pap_guard2))) {
                      if (!($.pap_guard2.isInCar($.pap_car))) {
                        if (!($.player1.locateAnyMeansChar2D($.pap_guard2, 60.0, 60.0, false /* FALSE */))) {
                          $.pap_guard2.explodeHead();
                          $.pap_guard2.markAsNoLongerNeeded();
                          $.pap_guard2 = Char.CreateAsPassenger($.pap_car, 4 /* PEDTYPE_CIVMALE */, BMYCR, 1);
                          $.pap_guard2.giveWeapon(WEAPONTYPE_tec9, 30000);
                        }
                      }
                    }
                    else {
                      $.pap_guard2.markAsNoLongerNeeded();
                      $.pap_guard2 = Char.CreateAsPassenger($.pap_car, 4 /* PEDTYPE_CIVMALE */, BMYCR, 1);
                      $.pap_guard2.giveWeapon(WEAPONTYPE_tec9, 30000);
                    }
                    if (!(Char.IsDead($.pap_guard3))) {
                      if (!($.pap_guard3.isInCar($.pap_car))) {
                        if (!($.player1.locateAnyMeansChar2D($.pap_guard3, 60.0, 60.0, false /* FALSE */))) {
                          $.pap_guard3.explodeHead();
                          $.pap_guard3.markAsNoLongerNeeded();
                          $.pap_guard3 = Char.CreateAsPassenger($.pap_car, 4 /* PEDTYPE_CIVMALE */, BMYCR, 2);
                          $.pap_guard3.giveWeapon(WEAPONTYPE_tec9, 30000);
                        }
                      }
                    }
                    else {
                      $.pap_guard3.markAsNoLongerNeeded();
                      $.pap_guard3 = Char.CreateAsPassenger($.pap_car, 4 /* PEDTYPE_CIVMALE */, BMYCR, 2);
                      $.pap_guard3.giveWeapon(WEAPONTYPE_tec9, 30000);
                    }
                  }
                }
              }
              if ($.porn1_goals == 0) {
                if (StuckCarCheck.IsCarStuck($.pap_car)) {
                  $.pap_car.setTempAction(2 /* TEMPACT_REVERSE */, 1000);
                }
              }
              if ($.pap_car.isUpsidedown()) {
                $.pap_man.setObjLeaveCar($.pap_car);
                StuckCarCheck.Remove($.pap_car);
                $.porn1_goals = 1;
              }
            }
            else {
              StuckCarCheck.Remove($.pap_car);
              $.porn1_goals = 1;
            }
          }
          else {
            $.pap_man.setObjLeaveCar($.pap_car);
            StuckCarCheck.Remove($.pap_car);
            $.porn1_goals = 1;
          }
        }
      }
      else {
        // SCM GOTO → next_porn_bit (not lowered; manual jump required)
        throw new Error("unresolved GOTO next_porn_bit"); // fallback: would break linear control flow
      }
    }

    //if pimp is out of car, he will search for another one then go get more pimp guards


    if ($.porn1_goals == 1) {
      if (!(Char.IsDead($.pap_man))) {
        if ($.pap_blip_flag == 0) {
          $.pap_man_blip.remove();
          $.pap_man_blip = Blip.AddForChar($.pap_man);
          $.pap_car.markAsNoLongerNeeded();
          $.pap_blip_flag = 1;
        }
        if (!($.pap_man.isSittingInAnyCar())) {
          $.pap_car.markAsNoLongerNeeded();
          // SCM label pap_man_getting_car
          await asyncWait(0);
          if (!(Char.IsDead($.pap_man))) {
            const _res425 = $.pap_man.getCoordinates();
$.papcar_coordx = _res425.x;
$.papcar_coordy = _res425.y;
$.papcar_coordz = _res425.z;
            $.papcar_coord2x = $.papcar_coordx + 20.0;
            $.papcar_coord2y = $.papcar_coordy + 20.0;
            $.papcar_coordx = $.papcar_coordx - 20.0;
            $.papcar_coordy = $.papcar_coordy - 20.0;
            $.pap_car = World.GetRandomCarOfTypeInArea($.papcar_coordx, $.papcar_coordy, $.papcar_coord2x, $.papcar_coord2y, -1);
            if ($.pap_car == -1) {
              $.pap_car.markAsNoLongerNeeded();
              $.pap_man.setObjFleeOnFootTillSafe();
              // SCM GOTO → pap_man_getting_car (not lowered; manual jump required)
              throw new Error("unresolved GOTO pap_man_getting_car"); // fallback: would break linear control flow
            }
            else {
              $.pap_guards_count = $.pap_car.getMaximumNumberOfPassengers();
              if ($.pap_guards_count < 3) {
                $.pap_car.markAsNoLongerNeeded();
                $.pap_man.setObjNoObj();
                $.pap_man.setObjFleeOnFootTillSafe();
                // SCM GOTO → pap_man_getting_car (not lowered; manual jump required)
                throw new Error("unresolved GOTO pap_man_getting_car"); // fallback: would break linear control flow
              }
              else {
                $.pap_car_health = $.pap_car.getHealth();
                if ($.pap_car_health < 300) {
                  $.pap_car.markAsNoLongerNeeded();
                  $.pap_man.setObjFleeOnFootTillSafe();
                  // SCM GOTO → pap_man_getting_car (not lowered; manual jump required)
                  throw new Error("unresolved GOTO pap_man_getting_car"); // fallback: would break linear control flow
                }
                else {
                  $.pap_car.lockDoors(1 /* CARLOCK_UNLOCKED */);
                  $.pap_car.setCruiseSpeed(0.0);
                  $.pap_man.setObjNoObj();
                  $.pap_man.setObjEnterCarAsDriver($.pap_car);
                  $.pap_man.setRunning(true /* TRUE */);
                }
              }
            }
          }
        }
        else {
          $.pap_man_blip.remove();
          if (!(Car.IsDead($.pap_car))) {
            $.pap_man_blip = Blip.AddForChar($.pap_man);
            $.pap_car.setDrivingStyle(2);
            StuckCarCheck.Add($.pap_car, 1.5, 4000);
          }
          $.pap_blip_flag = 0;
          $.porn1_goals = 0;
          $.random_car_wander = 0;
        }
      }
      else {
        // SCM GOTO → next_porn_bit (not lowered; manual jump required)
        throw new Error("unresolved GOTO next_porn_bit"); // fallback: would break linear control flow
      }
    }

    //checking candy's state


    if (!(Char.IsDead($.candy_sexxx))) {
      if ($.candy_sexxx.locateStoppedOnFoot2D(-448.3, 1324.6, 3.0, 3.0, false)) {
        if ($.candy_sexxx_waitstate == 0) {
          $.candy_sexxx.turnToFaceCoord(-448.4, 1340.6, 10.7);
          $.candy_sexxx.setStayInSamePlace(true /* TRUE */);
          $.candy_sexxx_waitstate = 1;
        }
      }
      else {
        $.candy_sexxx.setStayInSamePlace(false /* FALSE */);
        $.candy_sexxx.setObjRunToCoord(-448.3, 1324.6);
        $.candy_sexxx_waitstate = 0;
      }
    }
    else {
      Text.PrintNow("POR1_03", 5000, 1); //Candy is dead!
      // SCM GOTO → mission_failed_porn1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_porn1"); // fallback: would break linear control flow
    }


  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Main Loop//////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


async function next_porn_bit() {
  Text.PrintNow("POR1_24", 7000, 1); //Go back and collect Candy.

  //REMOVE_BLIP pap_car_blip

  $.pap_man_blip.remove();

  //creating pornstar that player1 goes to talk to

  if (!(Char.IsDead($.candy_sexxx))) {
    $.candy_sexxx.setWaitState(0 /* WAITSTATE_FALSE */, 1);
    $.candy_sexxx.setHeading(14.9);
    $.candy_sexxx.setStayInSamePlace(false /* FALSE */);
    $.candy_sexxx_blip = Blip.AddForCoord(-448.3, 1324.6, 10.7);
  }


  while (!($.player1.locateOnFoot3D(-448.3, 1326.6, 10.7, 1.0, 1.0, 2.0, true /* TRUE */))) {
    await asyncWait(0);
    if (Char.IsDead($.candy_sexxx)) {
      Text.PrintNow("POR1_03", 5000, 1); //Candy is dead!
      // SCM GOTO → mission_failed_porn1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_porn1"); // fallback: would break linear control flow
    }
    else {
      if ($.candy_sexxx.locateStoppedOnFoot2D(-448.3, 1324.6, 3.0, 3.0, false)) {
        if ($.candy_sexxx_waitstate == 0) {
          $.candy_sexxx.turnToFaceCoord(-448.4, 1340.6, 10.7);
          $.candy_sexxx.setStayInSamePlace(true /* TRUE */);
          $.candy_sexxx_waitstate = 1;
        }
      }
      else {
        $.candy_sexxx.setStayInSamePlace(false /* FALSE */);
        $.candy_sexxx.setObjRunToCoord(-448.3, 1324.6);
        $.candy_sexxx_waitstate = 0;
      }
    }
  }


  $.candy_sexxx.followPlayer($.player1);
  $.flag_candy_sexxx_in_group = 1;


  $.candy_sexxx_blip.remove();


  Audio.LoadMissionAudio(1, "PRN1_16" as any);
  while (!(Audio.HasMissionAudioLoaded(1))) {
    await asyncWait(0);
  }


  Text.PrintNow("POR1_27", 4000, 1); //Come on, Let's go.


  Audio.PlayMissionAudio(1);
  while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.candy_sexxx))) {
    await asyncWait(0);
  }
  Audio.ClearMissionAudio(1);
  Text.ClearThisPrint("POR1_19");


  Text.Print("POR1_12", 5000, 1); //Take Candy with you to meet up with Mercedes.



  $.pap_guard1.markAsNoLongerNeeded();
  $.pap_guard2.markAsNoLongerNeeded();
  $.pap_guard3.markAsNoLongerNeeded();
  $.pap_car.markAsNoLongerNeeded();
  //creating mercedes that player1 goes to talk to

  $.mercedes = Char.Create(5 /* PEDTYPE_CIVFEMALE */, SPECIAL02, -902.3, 800.2, 10.4);
  $.mercedes.setHeading(95.9);
  $.mercedes.setAsPlayerFriend($.player1, true /* TRUE */);
  $.mercedes.setAnimGroup(15 /* ANIM_SEXY_WOMANPED */);
  $.mercedes.setRunning(true /* TRUE */);
  $.mercedes.setInPlayersGroupCanFight(false /* FALSE */);
  $.mercedes.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 86400000);
  $.mercedes.setNeverTargeted(true /* TRUE */);


  //creating fake car player can use

  $.pap_car = Car.Create(sentinel, -858.0, 796.5, 10.9);
  $.pap_car.setHeading(187.1);

  //creating random chars chatting in corner of pizza place

  $.pap_guard1 = Char.CreateRandom(-887.5, 800.5, 10.3);
  $.pap_guard2 = Char.CreateRandom(-888.5, 800.5, 10.3);
  $.pap_guard3 = Char.CreateRandom(-888.6, 801.2, 10.3);
  Game.SetCharsChatting($.pap_guard1, $.pap_guard2, 86400000);
  Game.SetCharsChatting($.pap_guard3, $.pap_guard2, 86400000);



  $.mercedes_blip = Blip.AddForCoord(-900.8, 796.0, 10.3);


  while (!($.player1.locateOnFoot3D(-900.8, 796.0, 10.3, 1.0, 1.0, 2.0, $.flag_candy_sexxx_in_group))) {
    await asyncWait(0);
    if (!(Char.IsDead($.candy_sexxx))) {
      if ($.flag_candy_sexxx_in_group == 1) {
        if (!($.candy_sexxx.isInPlayersGroup($.player1))) {


          Audio.LoadMissionAudio(1, "PRN1_13" as any);
          while (!(Audio.HasMissionAudioLoaded(1))) {
            await asyncWait(0);
          }
          Text.PrintNow("POR1_20", 4000, 1); //Tommy where are you going?  Get back here!
          Audio.PlayMissionAudio(1);
          while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.candy_sexxx))) {
            await asyncWait(0);
          }
          Audio.ClearMissionAudio(1);
          Text.ClearThisPrint("POR1_20");


          Text.Print("POR1_25", 4000, 1); //You have left Candy behind, go and get her.
          $.mercedes_blip.remove();
          $.candy_sexxx_blip.remove();
          if (!(Char.IsDead($.candy_sexxx))) {
            $.candy_sexxx_blip = Blip.AddForChar($.candy_sexxx);
          }
          $.flag_candy_sexxx_in_group = 0;
        }
      }
      if ($.flag_candy_sexxx_in_group == 0) {
        if ($.player1.locateAnyMeansChar3D($.candy_sexxx, 8.0, 8.0, 8.0, false /* FALSE */)) {
          $.candy_sexxx.followPlayer($.player1);
          Audio.LoadMissionAudio(2, "PRN1_12" as any);
          while (!(Audio.HasMissionAudioLoaded(2))) {
            await asyncWait(0);
          }
          Text.PrintNow("POR1_19", 4000, 1); //hey!
          Audio.PlayMissionAudio(2);
          while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.candy_sexxx))) {
            await asyncWait(0);
          }
          Audio.ClearMissionAudio(2);
          Text.ClearThisPrint("POR1_19");
          $.mercedes_blip.remove();
          $.candy_sexxx_blip.remove();
          if (!(Char.IsDead($.mercedes))) {
            $.mercedes_blip = Blip.AddForChar($.mercedes);
          }
          $.flag_candy_sexxx_in_group = 1;
        }
      }
      if ($.candy_tits1 < 2) {
        if ($.candy_sexxx.isInPlayersGroup($.player1)) {
          if ($.player1.isInAnyCar()) {
            $.tits_car = $.player1.storeCarIsInNoSave();
            if ($.candy_sexxx.isInCar($.tits_car)) {
              $.tits_car_health = $.tits_car.getHealth();
              $.tits_car_speed = $.tits_car.getSpeed();
              if ($.tits_car_speed > 15.0) {
                if ($.candy_tits1 == 0) {
                  if ($.tits_car_health < 700) {
                    Audio.LoadMissionAudio(1, "PRN1_17" as any);
                    while (!(Audio.HasMissionAudioLoaded(1))) {
                      await asyncWait(0);
                    }
                    Text.PrintNow("POR1_28", 4000, 1); //Tommy be careful! My implants aren't insured yet!
                    Audio.PlayMissionAudio(1);
                    while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.candy_sexxx))) {
                      await asyncWait(0);
                    }
                    Audio.ClearMissionAudio(1);
                    Text.ClearThisPrint("POR1_28");
                    $.candy_tits1 = 1;
                  }
                }
                if ($.candy_tits1 == 1) {
                  if ($.tits_car_health < 400) {
                    Audio.LoadMissionAudio(1, "PRN1_19" as any);
                    while (!(Audio.HasMissionAudioLoaded(1))) {
                      await asyncWait(0);
                    }
                    Text.PrintNow("POR1_30", 4000, 1); //I can't do porno after this!
                    Audio.PlayMissionAudio(1);
                    while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.candy_sexxx))) {
                      await asyncWait(0);
                    }
                    Audio.ClearMissionAudio(1);
                    Text.ClearThisPrint("POR1_30");
                    $.candy_tits1 = 2;
                  }
                }
              }
            }
          }
        }
      }
    }
    else {
      Text.PrintNow("POR1_03", 5000, 1); //Candy is dead!
      // SCM GOTO → mission_failed_porn1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_porn1"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.mercedes)) {
      Text.PrintNow("POR1_18", 5000, 1); //Mercedes is dead!
      // SCM GOTO → mission_failed_porn1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_porn1"); // fallback: would break linear control flow
    }
    else {
      $.mercedes.setWaitState(WAITSTATE_USE_ATM, 86400000);
    }


  }


  $.mercedes_blip.remove();


  // ******************************************START OF Meeting Mercedes CUTSCENE********************************

  $.player1.setCoordinates(-900.8, 796.0, 10.3);
  World.SetPedDensityMultiplier(0.0);
  if (!(Char.IsDead($.mercedes))) {
    $.mercedes.setCoordinates(-902.3, 800.2, 10.4);
  }


  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);


  Camera.SetFixedPosition(-897.3, 799.7, 12.5, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-902.4, 798.0, 11.4, 2 /* JUMP_CUT */);


  Audio.LoadMissionAudio(1, "PORN1_4" as any);
  Audio.LoadMissionAudio(2, "PORN1_5" as any);


  while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
  }


  if (!(Char.IsDead($.mercedes))) {
    $.scplayer.turnToFaceChar($.mercedes);
  }
  $.scplayer.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000);


  Text.PrintNow("POR1_08", 4000, 1); //Hey Mercedes!
  Audio.PlayMissionAudio(1);
  while (!(Audio.HasMissionAudioFinished(1))) {
    await asyncWait(0);
  }
  Audio.ClearMissionAudio(1);
  Text.ClearThisPrint("POR1_08");


  $.scplayer.setWaitState(0 /* WAITSTATE_FALSE */, 100);
  if (!(Char.IsDead($.mercedes))) {
    $.mercedes.clearWaitState();
  }


  await asyncWait(100);


  if (!(Char.IsDead($.mercedes))) {
    $.mercedes.setObjGotoCharOnFoot($.scplayer);
  }


  Text.PrintNow("POR1_09", 4000, 1); //Hey Tommy! You wanna party?
  Audio.PlayMissionAudio(2);
  while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.mercedes))) {
    await asyncWait(0);
  }
  Audio.ClearMissionAudio(2);
  Text.ClearThisPrint("POR1_09");


  Audio.LoadMissionAudio(1, "PORN1_6" as any);
  Audio.LoadMissionAudio(2, "PORN1_7" as any);


  while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
  }


  $.scplayer.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000);


  Text.PrintNow("POR1_10", 4000, 1); //Not now sweets. You interested in doing some movies?
  Audio.PlayMissionAudio(1);
  while (!(Audio.HasMissionAudioFinished(1))) {
    await asyncWait(0);
  }
  Audio.ClearMissionAudio(1);
  Text.ClearThisPrint("POR1_10");


  $.scplayer.setWaitState(0 /* WAITSTATE_FALSE */, 100);


  Text.PrintNow("POR1_11", 4000, 1); //Of course. As long as it's cheap and sleazy.
  Audio.PlayMissionAudio(2);
  while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.mercedes))) {
    await asyncWait(0);
  }
  Audio.ClearMissionAudio(2);
  Text.ClearThisPrint("POR1_11");


  $.scplayer.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000);


  Audio.LoadMissionAudio(1, "PORN1_8" as any);


  while (!(Audio.HasMissionAudioLoaded(1))) {
    await asyncWait(0);
  }


  Text.PrintNow("POR1_14", 4000, 1); //You're hired! Get in.
  Audio.PlayMissionAudio(1);
  while (!(Audio.HasMissionAudioFinished(1))) {
    await asyncWait(0);
  }
  Audio.ClearMissionAudio(1);
  Text.ClearThisPrint("POR1_14");


  $.scplayer.setWaitState(0 /* WAITSTATE_FALSE */, 100);


  World.SetPedDensityMultiplier(1.0);
  if (!(Char.IsDead($.mercedes))) {
    $.mercedes.followPlayer($.player1);
  }
  $.flag_mercedes_in_group = 1;


  Camera.RestoreJumpcut();
  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  // ******************************************End OF Meeting Mercedes CUTSCENE**********************************


  Text.Print("POR1_13", 5000, 1); //Take the girls back to the Studio for some casting couch trials.

  //go back to porn studios


  $.pron_studio = Blip.AddForCoord(-60.2, 934.5, 10.6);
}



async function going_to_studio() {
  // SCM GOTO → going_to_studio lowered to endless loop
  while (true) {
    await asyncWait(0);
    if (!(Char.IsDead($.candy_sexxx))) {
      if ($.candy_tits2 < 2) {
        if ($.candy_sexxx.isInPlayersGroup($.player1)) {
          if ($.player1.isInAnyCar()) {
            $.tits_car = $.player1.storeCarIsInNoSave();
            if ($.candy_sexxx.isInCar($.tits_car)) {
              $.tits_car_health = $.tits_car.getHealth();
              $.tits_car_speed = $.tits_car.getSpeed();
              if ($.tits_car_speed > 15.0) {
                if ($.candy_tits2 == 0) {
                  if ($.tits_car_health < 700) {
                    Audio.LoadMissionAudio(1, "PRN1_18" as any);
                    while (!(Audio.HasMissionAudioLoaded(1))) {
                      await asyncWait(0);
                    }
                    Text.PrintNow("POR1_29", 4000, 1); //You call that driving?
                    Audio.PlayMissionAudio(1);
                    while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.candy_sexxx))) {
                      await asyncWait(0);
                    }
                    Audio.ClearMissionAudio(1);
                    Text.ClearThisPrint("POR1_29");
                    $.candy_tits2 = 1;
                  }
                }
                if ($.candy_tits2 == 1) {
                  if ($.tits_car_health < 400) {
                    Audio.LoadMissionAudio(1, "PRN1_20" as any);
                    while (!(Audio.HasMissionAudioLoaded(1))) {
                      await asyncWait(0);
                    }
                    Text.PrintNow("POR1_31", 4000, 1); //What? Are you trying to kill me? I thought I was the star!
                    Audio.PlayMissionAudio(1);
                    while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.candy_sexxx))) {
                      await asyncWait(0);
                    }
                    Audio.ClearMissionAudio(1);
                    Text.ClearThisPrint("POR1_31");
                    $.candy_tits2 = 2;
                  }
                }
              }
            }
          }
        }
      }
    }


    if (!(Char.IsDead($.candy_sexxx))) {
      if ($.flag_candy_sexxx_in_group == 1) {
        if (!($.candy_sexxx.isInPlayersGroup($.player1))) {
          Audio.LoadMissionAudio(1, "PRN1_13" as any);
          while (!(Audio.HasMissionAudioLoaded(1))) {
            await asyncWait(0);
          }
          Text.PrintNow("POR1_20", 4000, 1); //Tommy where are you going?  Get back here!
          Audio.PlayMissionAudio(1);
          while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.candy_sexxx))) {
            await asyncWait(0);
          }
          Audio.ClearMissionAudio(1);
          Text.ClearThisPrint("POR1_20");
          Text.Print("POR1_25", 4000, 1); //You have left Candy behind, go and get her.
          $.candy_sexxx_blip.remove();
          $.pron_studio.remove();
          if (!(Char.IsDead($.candy_sexxx))) {
            $.candy_sexxx_blip = Blip.AddForChar($.candy_sexxx);
          }
          $.flag_candy_sexxx_in_group = 0;
        }
      }
      if ($.flag_candy_sexxx_in_group == 0) {
        if ($.player1.locateAnyMeansChar3D($.candy_sexxx, 8.0, 8.0, 8.0, false /* FALSE */)) {
          $.candy_sexxx.followPlayer($.player1);
          Audio.LoadMissionAudio(2, "PRN1_12" as any);
          while (!(Audio.HasMissionAudioLoaded(2))) {
            await asyncWait(0);
          }
          Text.PrintNow("POR1_19", 4000, 1); //hey!
          Audio.PlayMissionAudio(2);
          while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.candy_sexxx))) {
            await asyncWait(0);
          }
          Audio.ClearMissionAudio(2);
          Text.ClearThisPrint("POR1_19");
          $.candy_sexxx_blip.remove();
          $.pron_studio.remove();
          if ($.flag_mercedes_in_group == 1) {
            $.pron_studio = Blip.AddForCoord(-60.2, 934.5, 10.6);
          }
          $.flag_candy_sexxx_in_group = 1;
        }
      }
    }
    else {
      Text.PrintNow("POR1_03", 5000, 1); //Candy is dead!
      // SCM GOTO → mission_failed_porn1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_porn1"); // fallback: would break linear control flow
    }


    if (!(Char.IsDead($.mercedes))) {
      if ($.flag_mercedes_in_group == 1) {
        if (!($.mercedes.isInPlayersGroup($.player1))) {
          Audio.LoadMissionAudio(1, "PRN1_14" as any);
          while (!(Audio.HasMissionAudioLoaded(1))) {
            await asyncWait(0);
          }
          Text.PrintNow("POR1_21", 4000, 1); //Where are you going?
          Audio.PlayMissionAudio(1);
          while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.mercedes))) {
            await asyncWait(0);
          }
          Audio.ClearMissionAudio(1);
          Text.ClearThisPrint("POR1_21");
          Text.PrintNow("TAXW3_1", 4000, 1); // Go and pick up Mercedes.
          $.mercedes_blip.remove();
          $.pron_studio.remove();
          if (!(Char.IsDead($.mercedes))) {
            $.mercedes_blip = Blip.AddForChar($.mercedes);
          }
          $.flag_mercedes_in_group = 0;
        }
      }
      if ($.flag_mercedes_in_group == 0) {
        if ($.player1.locateAnyMeansChar3D($.mercedes, 8.0, 8.0, 8.0, false /* FALSE */)) {
          $.mercedes.followPlayer($.player1);
          Audio.LoadMissionAudio(2, "PRN1_15" as any);
          while (!(Audio.HasMissionAudioLoaded(2))) {
            await asyncWait(0);
          }
          Text.PrintNow("POR1_22", 4000, 1); //Tommy, when are we going to spend some time alone together?
          Audio.PlayMissionAudio(2);
          while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.mercedes))) {
            await asyncWait(0);
          }
          Audio.ClearMissionAudio(2);
          Text.ClearThisPrint("POR1_22");
          $.mercedes_blip.remove();
          $.pron_studio.remove();
          if ($.flag_candy_sexxx_in_group == 1) {
            $.pron_studio = Blip.AddForCoord(-60.2, 934.5, 10.6);
          }
          $.flag_mercedes_in_group = 1;
        }
      }
    }
    else {
      Text.PrintNow("POR1_18", 5000, 1); //Mercedes is dead!
      // SCM GOTO → mission_failed_porn1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_porn1"); // fallback: would break linear control flow
    }


    if ($.flag_mercedes_in_group == 1) {
      if ($.flag_candy_sexxx_in_group == 1) {
        if (!(Char.IsDead($.candy_sexxx))) {
          if (!(Char.IsDead($.mercedes))) {
            if ($.player1.locateAnyMeans3D(-65.0, 934.1, 9.8, 5.0, 5.0, 5.0, true /* TRUE */)) {
              if ($.candy_sexxx.locateAnyMeans3D(-65.0, 934.1, 9.8, 5.0, 5.0, 5.0, false /* FALSE */)) {
                if ($.mercedes.locateAnyMeans3D(-65.0, 934.1, 9.8, 5.0, 5.0, 5.0, false /* FALSE */)) {
                  if ($.player1.isInAnyCar()) {
                    $.player_car_porn1 = $.player1.storeCarIsIn();
                    $.player_z = $.player_car_porn1.getHeading();
                  }
                  // SCM GOTO → final_porn2_cutscene (not lowered; manual jump required)
                  throw new Error("unresolved GOTO final_porn2_cutscene"); // fallback: would break linear control flow
                }
              }
            }
          }
        }
      }
    }


  }
}

async function final_porn2_cutscene() {
  // ******************************************START OF dropping bints at porn studios CUTSCENE********************************

  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);


  if (!(Car.IsDead($.player_car_porn1))) {
    $.player_car_porn1.setCoordinates(-54.0, 942.1, 9.8);
    $.player_car_porn1.setHeading($.player_z);
  }


  Camera.SetFixedPosition(-50.7, 927.4, 10.1, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-85.3, 960.7, 22.7, 2 /* JUMP_CUT */);


  Audio.LoadMissionAudio(1, "PRN1_10" as any);
  Audio.LoadMissionAudio(2, "PORN1_9" as any);


  while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
  }


  Text.PrintNow("POR1_15", 4000, 1); //You coming in for a warm-up!?
  Audio.PlayMissionAudio(2);
  while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.mercedes))) {
    await asyncWait(0);
  }
  Audio.ClearMissionAudio(2);
  Text.ClearThisPrint("POR1_15");


  Text.PrintNow("POR1_16", 4000, 1); //Maybe later...
  Audio.PlayMissionAudio(1);
  while (!(Audio.HasMissionAudioFinished(1))) {
    await asyncWait(0);
  }
  Audio.ClearMissionAudio(1);
  Text.ClearThisPrint("POR1_16");


  if (!(Char.IsDead($.candy_sexxx))) {
    $.candy_sexxx.leaveGroup();
    if ($.candy_sexxx.isInAnyCar()) {
      $.candy_sexxx.setObjLeaveAnyCar();
    }
  }
  if (!(Char.IsDead($.mercedes))) {
    $.mercedes.leaveGroup();
    if ($.mercedes.isInAnyCar()) {
      $.mercedes.setObjLeaveAnyCar();
    }
  }
}




async function getting_peeps_out_of_car() {
  if (!(Char.IsDead($.candy_sexxx))) {
  }


  while ($.candy_sexxx.isInAnyCar()) {
    await asyncWait(0);
    if (!(Char.IsDead($.candy_sexxx))) {
    }
  }


  if (!(Char.IsDead($.mercedes))) {
  }


  while ($.mercedes.isInAnyCar()) {
    await asyncWait(0);
    if (!(Char.IsDead($.mercedes))) {
    }
  }


  if (!(Char.IsDead($.candy_sexxx))) {
    $.candy_sexxx.setObjNoObj();
    $.candy_sexxx.setObjGotoCoordOnFoot(-75.25, 930.9);
  }


  if (!(Char.IsDead($.mercedes))) {
    $.mercedes.setObjNoObj();
    $.mercedes.setObjGotoCoordOnFoot(-75.25, 930.9);
  }


  Camera.SetFixedPosition(-63.3, 933.9, 12.9, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-78.1, 930.8, 10.5, 2 /* JUMP_CUT */);


  if (!(Char.IsDead($.mercedes))) {
    $.mercedes.setCoordinates(-62.3, 933.6, 9.9);
  }


  if (!(Char.IsDead($.candy_sexxx))) {
    $.candy_sexxx.setCoordinates(-62.3, 935.6, 9.9);
  }
  TIMERB = 0;


  while (!($.candy_sexxx.locateAnyMeans2D(-75.25, 930.9, 1.0, 1.0, false /* FALSE */)) && TIMERB < 8000) {
    await asyncWait(0);
    if (!(Char.IsDead($.candy_sexxx))) {
    }
  }


  Audio.LoadMissionAudio(1, "PRN1_11" as any);


  while (!(Audio.HasMissionAudioLoaded(1))) {
    await asyncWait(0);
  }


  Text.PrintNow("POR1_17", 4000, 1); //Whoa, cool shark!
  Audio.PlayMissionAudio(1);
  while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.candy_sexxx))) {
    await asyncWait(0);
  }
  Audio.ClearMissionAudio(1);
  Text.ClearThisPrint("POR1_17");


  $.candy_sexxx.delete();
  $.mercedes.delete();
  Camera.RestoreJumpcut();
  Camera.SetBehindPlayer();
  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);


  // SCM GOTO → mission_passed_porn1 (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_passed_porn1"); // fallback: would break linear control flow
}



// Mission failed

async function mission_failed_porn1() {


  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
}




// mission passed

async function mission_passed_porn1() {


  Text.ClearPrints();
  Text.PrintWithNumberBig("M_PASS", 1000, 5000, 1); //"Mission Passed!"
  Audio.PlayMissionPassedTune(1);
  $.player1.clearWantedLevel();
  $.player1.addScore(1000);
  Stat.PlayerMadeProgress(1);
  Stat.RegisterMissionPassed("PORN_1");
  // START_NEW_SCRIPT porn_mission2_loop
  $.flag_porn_mission1_passed = 1;
}




// mission cleanup

async function mission_cleanup_porn1() {
  ONMISSION = 0;


  $.player1.setControl(true /* on */);
  Streaming.MarkModelAsNoLongerNeeded(WMYPI);
  Streaming.MarkModelAsNoLongerNeeded(BMYCR);
  Streaming.MarkModelAsNoLongerNeeded(HMYRI);
  Streaming.MarkModelAsNoLongerNeeded(sentinel);
  Streaming.MarkModelAsNoLongerNeeded(172 /* bat */);
  Streaming.MarkModelAsNoLongerNeeded(tec9);
  Streaming.MarkModelAsNoLongerNeeded(stretch);
  $.candy_sexxx.removeElegantly();
  $.mercedes.removeElegantly();
  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  $.candy_sexxx_blip.remove();
  $.mercedes_blip.remove();
  //REMOVE_BLIP pap_car_blip

  $.pap_man_blip.remove();
  $.pron_studio.remove();
  $.timer_mobile_start = Clock.GetGameTimer();
  Mission.Finish();
}

export async function porn1() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************Porn 1******************************************
  // *****************************************Ho Today, Porn Tomorrow*************************
  // *****************************************************************************************
  // *****************************************************************************************

  // SCRIPT_NAME porno1
  // Mission start stuff

  await mission_start_porn1();  // SCM GOSUB mission_start_porn1
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_failed_porn1();  // SCM GOSUB mission_failed_porn1
  }
  await mission_cleanup_porn1();  // SCM GOSUB mission_cleanup_porn1
  // MissionBoundary

  // Variables for mission
  //people, cars and objects

  // VAR_INT pap_car
  // VAR_INT candy_sexxx
  // VAR_INT pap_man
  // VAR_INT pap_guard1
  // VAR_INT pap_guard2
  // VAR_INT pap_guard3
  // VAR_INT mercedes
  // VAR_INT player_car_porn1
  // VAR_INT candy_stretch_limo
  // VAR_INT candy_limo_driver
  // VAR_INT tits_car

  //blips
  //VAR_INT pap_car_blip

  // VAR_INT candy_sexxx_blip
  // VAR_INT pap_man_blip
  // VAR_INT mercedes_blip
  // VAR_INT pron_studio

  //flags

  // VAR_INT porn1_goals
  // VAR_INT pap_guards_count
  // VAR_INT pap_blip_flag
  // VAR_INT pap_car_health
  // VAR_INT random_car_wander
  // VAR_INT timera_reset
  // VAR_INT candy_sexxx_waitstate
  // VAR_INT flag_candy_sexxx_in_group
  // VAR_INT flag_mercedes_in_group
  // VAR_INT candy_out_limo
  // VAR_INT candy_tits1
  // VAR_INT candy_tits2
  // VAR_INT tits_car_health
  // VAR_FLOAT tits_car_speed

  //coordinates

  // VAR_FLOAT papcar_coordx
  // VAR_FLOAT papcar_coordy
  // VAR_FLOAT papcar_coord2x
  // VAR_FLOAT papcar_coord2y
  // VAR_FLOAT papcar_coordz

  //cutscene stuff

  // VAR_INT cs_juggz

  // ****************************************Mission Start************************************

}
